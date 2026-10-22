// Les sessions Claude Code interactives : une par film et par étape, dans un pseudo-terminal que le panneau de droite affiche.
// Les boutons d'action y tapent leur consigne ; l'utilisateur peut y écrire, interrompre (Échap) et répondre comme dans son terminal.
// Claude Code prévient la Régie par des crochets (hooks) : début de session, message envoyé, fin de tour, besoin de l'utilisateur.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { randomUUID, randomBytes } from 'node:crypto';
import { CLAUDE_BIN, PORT } from './config.js';
import { tr } from './i18n.js';

const require = createRequire(import.meta.url);
const pty = require('node-pty');

// npm n'exécute plus les scripts d'installation sans accord : l'assistant de lancement de node-pty peut arriver non exécutable.
for (const rel of ['prebuilds/darwin-arm64/spawn-helper', 'prebuilds/darwin-x64/spawn-helper', 'build/Release/spawn-helper']) {
  const p = path.join(path.dirname(require.resolve('node-pty/package.json')), rel);
  try { if (fs.existsSync(p) && !(fs.statSync(p).mode & 0o111)) fs.chmodSync(p, 0o755); } catch { /* lecture seule : le lancement le dira */ }
}

export const HOOK_TOKEN = randomBytes(16).toString('hex');
const SCROLLBACK = 400_000; // caractères gardés pour un panneau qui se branche en cours de route
const IDLE_MS = 3 * 60_000; // une session au repos que plus personne ne regarde se ferme (la conversation reste reprenable)

const terms = new Map(); // `${slug}/${step}` -> session
let handlers = { prompt: () => {}, stop: () => {}, exit: () => {}, session: () => {} };
export function onSessionEvents(h) { handlers = { ...handlers, ...h }; }

// La session de Claude Code qui a lancé le serveur (pendant un test) ne doit pas déteindre sur celles de la Régie.
const INHERITED = ['ANTHROPIC_API_KEY', 'CLAUDECODE', 'CLAUDE_CODE_ENTRYPOINT', 'CLAUDE_CODE_SESSION_ID', 'CLAUDE_CODE_CHILD_SESSION', 'CLAUDE_CODE_SESSION_ATTENDED',
  'CLAUDE_CODE_MESSAGING_SOCKET', 'CLAUDE_CODE_MESSAGING_TOKEN', 'CLAUDE_CODE_EXECPATH', 'CLAUDE_PID', 'CLAUDE_EFFORT', 'AI_AGENT'];
function cleanEnv() {
  const env = { ...process.env, TERM: 'xterm-256color', COLORTERM: 'truecolor', LANG: process.env.LANG || 'fr_FR.UTF-8' };
  for (const k of INHERITED) delete env[k];
  return env;
}

export function hookSettings(key) {
  const url = `http://127.0.0.1:${PORT}/api/claude/hook?term=${encodeURIComponent(key)}&token=${HOOK_TOKEN}`;
  // -o /dev/null : la sortie d'un crochet UserPromptSubmit serait ajoutée au message de l'utilisateur.
  const hook = [{ hooks: [{ type: 'command', command: `curl -s -m 5 -o /dev/null -X POST -H 'Content-Type: application/json' --data-binary @- '${url}'` }] }];
  return JSON.stringify({ hooks: { SessionStart: hook, UserPromptSubmit: hook, Stop: hook, Notification: hook } });
}

const send = (t, msg) => { const s = JSON.stringify(msg); for (const c of t.clients) { try { c.send(s); } catch { /* client parti */ } } };
export const statusOf = (t) => ({ t: 's', key: t.key, busy: t.busy, waiting: t.waiting, runId: t.runId, sessionId: t.sessionId, exited: t.exited, fresh: t.fresh });
// Prévient les panneaux branchés qu'une session a changé d'état (tour fini, action close par la Régie).
export const broadcast = (t) => send(t, statusOf(t));

export const termKey = (slug, step) => `${slug}/${step}`;
export const getTerm = (slug, step) => terms.get(termKey(slug, step)) || null;
export const liveTerms = () => [...terms.values()];

// Lance (ou relance) la session d'une étape. `resume` reprend une conversation ; sinon une session neuve avec son identifiant.
export function spawnTerm({ slug, step, cwd, args, resume = null, fresh = false, prompt = null, cols = 100, rows = 32 }) {
  const key = termKey(slug, step);
  const old = terms.get(key);
  // Les panneaux qui regardaient l'ancienne session passent à la nouvelle.
  const viewers = old ? [...old.clients] : [];
  if (old) { old.clients.clear(); if (!old.exited) killTerm(old); }
  const sessionId = resume || randomUUID();
  const argv = [...args, '--settings', hookSettings(key), ...(resume ? ['--resume', resume] : ['--session-id', sessionId]), ...(prompt ? [prompt] : [])];
  const t = {
    key, slug, step, cwd, sessionId, fresh, resumed: Boolean(resume), argsKey: JSON.stringify(args),
    busy: Boolean(prompt), waiting: false, runId: null, lastRunId: null, exited: false, ready: false,
    buffer: '', clients: new Set(), lastOutput: Date.now(), lastSeen: Date.now(), startedAt: Date.now(),
  };
  t.pty = pty.spawn(CLAUDE_BIN, argv, { name: 'xterm-256color', cols, rows, cwd, env: cleanEnv() });
  t.pty.onData((d) => {
    t.lastOutput = Date.now();
    t.buffer = (t.buffer + d).slice(-SCROLLBACK);
    send(t, { t: 'o', d });
  });
  t.pty.onExit(({ exitCode }) => {
    t.exited = true;
    t.busy = false;
    send(t, { t: 'o', d: `\r\n\x1b[2m[session fermée${exitCode ? ` · code ${exitCode}` : ''}]\x1b[0m\r\n` });
    broadcast(t);
    if (terms.get(key) === t) terms.delete(key);
    handlers.exit(t, exitCode);
  });
  terms.set(key, t);
  for (const ws of viewers) { try { ws.send(JSON.stringify({ t: 'reset' })); attachClient(t, ws); } catch { /* client parti */ } }
  return t;
}

export function killTerm(t) {
  if (t.exited) return;
  t.killed = true;
  try { t.pty.kill('SIGHUP'); } catch { /* déjà fermée */ }
}

// Attend que l'interface de Claude Code soit prête à recevoir une saisie : session démarrée, puis écran calme un instant.
export function whenReady(t, timeoutMs = 15000) {
  const until = Date.now() + timeoutMs;
  return new Promise((resolve, reject) => {
    const tick = () => {
      if (t.exited) return reject(new Error(tr('La session Claude s’est fermée.')));
      if (t.ready && Date.now() - t.lastOutput > 400) return resolve();
      if (Date.now() > until) return t.ready ? resolve() : reject(new Error(tr('La session Claude ne démarre pas.')));
      setTimeout(tick, 100);
    };
    tick();
  });
}

// Tape un message dans la session, comme un collage : Claude Code le garde d'un bloc, puis Entrée l'envoie.
export async function typeInto(t, text) {
  await whenReady(t);
  t.pty.write(`\x1b[200~${text.replace(/\r\n?/g, '\n')}\x1b[201~`);
  await new Promise((r) => setTimeout(r, 250));
  t.pty.write('\r');
}

export function interrupt(t) {
  if (!t.exited) t.pty.write('\x1b');
}

// Les crochets de Claude Code arrivent ici (voir /api/claude/hook).
export function handleHook(key, payload = {}) {
  const t = terms.get(key);
  if (!t) return;
  const ev = payload.hook_event_name;
  if (payload.session_id) t.sessionId = payload.session_id;
  if (ev === 'SessionStart') {
    t.ready = true;
  } else if (ev === 'UserPromptSubmit') {
    t.ready = true;
    t.busy = true;
    t.waiting = false;
    handlers.prompt(t, String(payload.prompt || ''));
  } else if (ev === 'Stop') {
    t.busy = false;
    t.waiting = false;
    handlers.stop(t);
  } else if (ev === 'Notification') {
    t.waiting = true;
  }
  handlers.session(t, ev);
  broadcast(t);
}

// Un panneau se branche : il reçoit l'écran déjà affiché, puis la suite ; ses frappes et sa taille vont à la session.
export function attachClient(t, ws) {
  t.clients.add(ws);
  t.lastSeen = Date.now();
  ws.send(JSON.stringify({ t: 'o', d: t.buffer }));
  ws.send(JSON.stringify(statusOf(t)));
  ws.on('message', (raw) => {
    let m;
    try { m = JSON.parse(String(raw)); } catch { return; }
    if (t.exited) return;
    if (m.t === 'i' && typeof m.d === 'string') t.pty.write(m.d);
    else if (m.t === 'r' && m.cols > 10 && m.rows > 4) { try { t.pty.resize(Math.min(400, m.cols), Math.min(200, m.rows)); } catch { /* session fermée */ } }
  });
  ws.on('close', () => { t.clients.delete(ws); t.lastSeen = Date.now(); });
}

// Ferme les sessions au repos que plus aucun panneau ne regarde : chaque Claude Code ouvert tient plusieurs centaines de Mo.
setInterval(() => {
  for (const t of terms.values()) {
    if (!t.busy && !t.runId && t.clients.size === 0 && Date.now() - t.lastSeen > IDLE_MS) killTerm(t);
  }
}, 30_000).unref();

export function killAllTerms(timeoutMs = 4000) {
  const live = [...terms.values()].filter((t) => !t.exited);
  if (!live.length) return Promise.resolve();
  return new Promise((resolve) => {
    let left = live.length;
    for (const t of live) {
      t.pty.onExit(() => { if (--left === 0) resolve(); });
      killTerm(t);
    }
    setTimeout(resolve, timeoutMs);
  });
}
