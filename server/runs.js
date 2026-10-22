// Les actions Claude : chaque action est tapée dans la session Claude Code interactive de son étape (sessions.js), sur
// l'abonnement de l'utilisateur, jamais de clé API. La Régie suit les tours par les crochets de Claude Code et range les reçus.
import fs from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { SYNTHESE, STUDIO, MEMORY_DIR, ROOT, APPORTS, SKILL_PROMPTS, BLENDER_MCP } from './config.js';
import { ACTIONS, MESSAGE, SERIE_SYNC, buildPrompt, systemPrompt, actionMessage, stepOf, STEPS } from './prompts.js';
import { filmDir, readState, updateState, httpError, getFilm, currentVersion, nextVersion, serieContext, syncSerie } from './films.js';
import { appendJournal } from './journal.js';
import { spawnTerm, getTerm, typeInto, interrupt, killAllTerms, onSessionEvents, liveTerms, broadcast } from './sessions.js';

const runs = new Map(); // id -> action en cours ou récente (événements gardés pour les abonnés tardifs)
const sharedFor = new Map(); // slug d'une vidéo de série -> id de l'action commune qui tourne dans la vidéo A

// mcp 'none' : sans les serveurs MCP de l'utilisateur (Gmail, Notion…), le contexte de départ passe d'environ 61 k à 29 k jetons
// par tour, mesuré le 21 oct. Le studio n'en a pas besoin : HyperFrames passe par la ligne de commande.
// blender : le film peut faire ses plans 3D lourds dans Blender (interrupteur du film, valable pour toute sa série).
export const DEFAULT_SETTINGS = { effort: 'high', permissionMode: 'auto', model: '', mcp: 'none', blender: false };

// Le seul serveur MCP chargé quand Blender est activé et que les autres sont coupés : ses outils marchent aussi Blender fermé
// (versions « _for_cli ») et cherchent dans la documentation de l'API.
export function blenderMcpConfig() {
  return JSON.stringify({ mcpServers: { blender: { type: 'stdio', command: BLENDER_MCP, args: [] } } });
}

// Les options d'une session interactive. sessions.js ajoute ensuite les crochets, la reprise et la première consigne.
export function claudeArgs({ settings, system, name, dirs = [] }) {
  const s = { ...DEFAULT_SETTINGS, ...settings };
  const args = ['--permission-mode', s.permissionMode, '--effort', s.effort, '--name', name, '--append-system-prompt', system];
  if (s.mcp === 'none') {
    args.push('--strict-mcp-config');
    if (s.blender && fs.existsSync(BLENDER_MCP)) args.push('--mcp-config', blenderMcpConfig());
  }
  if (s.model) args.push('--model', s.model);
  // Dossiers en dernier : l'option prend plusieurs valeurs, jusqu'à l'option suivante.
  // Seulement les dossiers présents : la Régie publiée n'a ni la mémoire de l'utilisateur ni les copies de prompts.
  args.push('--add-dir', ...[SYNTHESE, STUDIO, MEMORY_DIR, APPORTS, SKILL_PROMPTS].filter((d) => fs.existsSync(d)), ...dirs);
  return args;
}

const short = (v, n = 160) => {
  const s = typeof v === 'string' ? v : JSON.stringify(v);
  return s && s.length > n ? `${s.slice(0, n)}…` : s;
};

function describeTool(name, input = {}) {
  const rel = (p) => (typeof p === 'string' ? p.replace(`${ROOT}/`, '') : p);
  switch (name) {
    case 'Read': return `Lit ${rel(input.file_path)}`;
    case 'Write': return `Écrit ${rel(input.file_path)}`;
    case 'Edit': return `Modifie ${rel(input.file_path)}`;
    case 'Bash': return input.description || short(input.command, 120);
    case 'Glob': return `Cherche ${input.pattern}`;
    case 'Grep': return `Cherche « ${short(input.pattern, 60)} »`;
    case 'WebFetch': return `Ouvre ${input.url}`;
    case 'WebSearch': return `Recherche « ${input.query} »`;
    case 'Skill': return `Charge le savoir-faire ${input.skill}`;
    case 'Task':
    case 'Agent': return `Lance un sous-agent : ${input.description || ''}`;
    default: return `${name} ${short(input, 100)}`;
  }
}

// Traduit une ligne stream-json en événements pour l'interface.
export function translate(msg) {
  const ev = [];
  const sub = Boolean(msg.parent_tool_use_id);
  switch (msg.type) {
    case 'system':
      if (msg.subtype === 'init') ev.push({ type: 'init', sessionId: msg.session_id, model: msg.model });
      else if (msg.subtype === 'thinking_tokens') ev.push({ type: 'thinking', tokens: msg.estimated_tokens });
      break;
    case 'assistant':
      for (const b of msg.message?.content || []) {
        if (b.type === 'text' && b.text.trim()) ev.push({ type: 'text', text: b.text, sub });
        else if (b.type === 'tool_use') ev.push({ type: 'tool', id: b.id, name: b.name, label: describeTool(b.name, b.input), sub });
      }
      break;
    case 'user':
      for (const b of msg.message?.content || []) {
        if (b.type === 'tool_result') {
          const text = Array.isArray(b.content) ? b.content.filter((c) => c.type === 'text').map((c) => c.text).join('\n') : String(b.content ?? '');
          ev.push({ type: 'tool_result', id: b.tool_use_id, error: Boolean(b.is_error), preview: short(text, 600), sub });
        }
      }
      break;
    case 'rate_limit_event': {
      const w = msg.rate_limit_info?.unifiedWindows || {};
      ev.push({ type: 'quota', fiveHour: w.five_hour?.utilization ?? null, sevenDay: w.seven_day?.utilization ?? null, status: msg.rate_limit_info?.status });
      break;
    }
    case 'result':
      ev.push({
        type: 'result',
        ok: !msg.is_error && msg.subtype === 'success',
        subtype: msg.subtype,
        text: msg.result,
        sessionId: msg.session_id,
        durationMs: msg.duration_ms,
        costUsd: msg.total_cost_usd,
        tokens: msg.usage ? (msg.usage.input_tokens || 0) + (msg.usage.output_tokens || 0) + (msg.usage.cache_creation_input_tokens || 0) + (msg.usage.cache_read_input_tokens || 0) : null,
        outputTokens: msg.usage?.output_tokens ?? null,
        denials: (msg.permission_denials || []).map((d) => describeTool(d.tool_name, d.tool_input)),
      });
      break;
    default:
  }
  return ev;
}

// Les événements propres à la Régie (départ, handoff, fin, erreur) vont au fichier du flux de l'action. Les anciennes actions
// (claude -p, avant les sessions interactives) y ont aussi les lignes brutes de Claude, que translate() relit.
const OWN_EVENTS = new Set(['start', 'handoff', 'end', 'error']);
function emit(run, event) {
  const e = { ...event, at: Date.now() };
  run.events.push(e);
  if (OWN_EVENTS.has(e.type) && run.log && !run.log.writableEnded) run.log.write(`${JSON.stringify({ type: 'regie', event: e })}\n`);
  for (const fn of run.listeners) fn(e);
}

export function subscribe(id, fn) {
  const run = runs.get(id);
  if (!run) return null;
  for (const e of run.events) fn(e);
  run.listeners.add(fn);
  return () => run.listeners.delete(fn);
}

export function runInfo(id) {
  const run = runs.get(id);
  if (!run) return null;
  const { listeners, events, log, term, ...info } = run;
  return { ...info, waiting: Boolean(term?.waiting) };
}

// L'action en cours d'un film : la sienne, ou l'action commune de sa série qui tourne dans la vidéo A.
export function activeRun(slug) {
  const own = [...runs.values()].find((r) => r.slug === slug && r.status === 'running');
  const id = own?.id || sharedFor.get(slug);
  return id ? runInfo(id) : null;
}

// Pour Régie.app : ce qui serait arrêté en quittant.
export function busyLabels() {
  const labels = [...runs.values()].filter((r) => r.status === 'running').map((r) => r.name);
  for (const t of liveTerms()) if (t.busy && !t.runId) labels.push(`${t.slug} · session de l'étape ${stepOf(t.step)?.title || t.step}`);
  return labels;
}

// Rejoue un ancien flux depuis son fichier .jsonl (après un redémarrage du serveur).
export function replayRun(slug, id) {
  if (runs.has(id)) return runs.get(id).events;
  if (!/^[a-f0-9-]+$/.test(id)) return null;
  // Une action commune de série a son flux dans le dossier de la vidéo A.
  const owner = readState(slug).runs.find((r) => r.id === id)?.mirrorOf || slug;
  const file = path.join(filmDir(owner), '.regie', 'runs', `${id}.jsonl`);
  if (!fs.existsSync(file)) return null;
  const events = [];
  for (const l of fs.readFileSync(file, 'utf8').split('\n')) {
    if (!l.trim()) continue;
    try {
      const m = JSON.parse(l);
      if (m.type === 'regie') events.push(m.event);
      else events.push(...translate(m));
    } catch { /* ligne tronquée */ }
  }
  return events;
}

// Les options de la session d'une étape : réglages du film, consignes de l'étape, dossiers des autres vidéos de la série.
function sessionArgs(slug, step, serie, state) {
  const film = { slug, title: state.title || slug };
  // Les autres vidéos de la série restent lisibles, pour que chacune se distingue des deux autres.
  const dirs = serie ? serie.films.filter((f) => f.slug !== slug).map((f) => f.dir) : [];
  const settings = { ...DEFAULT_SETTINGS, ...(state.settings || {}) };
  return claudeArgs({ settings, system: systemPrompt({ film, step, serie, blender: settings.blender }), name: `Régie · ${film.title} · ${step.title}`, dirs });
}

// La session interactive de l'étape, prête à recevoir la consigne : celle qui tourne si elle convient, sinon une nouvelle
// (reprise de la conversation de l'étape, ou neuve pour la critique et « repartir de zéro »).
function sessionFor({ slug, step, args, fresh, resume }) {
  const t = getTerm(slug, step.id);
  const fits = t && !t.exited && t.argsKey === JSON.stringify(args) && !fresh && !t.fresh && (!resume || t.sessionId === resume);
  return fits ? t : null;
}

// Le panneau ouvre la session d'une étape pour qu'on y écrive : la conversation de l'étape reprend, sans consigne.
export function ensureSession(slug, stepId) {
  const step = stepOf(stepId);
  if (!step) throw httpError(400, `Étape inconnue : ${stepId}`);
  const live = getTerm(slug, step.id);
  if (live && !live.exited) return live;
  const state = readState(slug);
  const args = sessionArgs(slug, step, serieContext(slug), state);
  return spawnTerm({ slug, step: step.id, cwd: filmDir(slug), args, resume: state.sessions[step.id] || null });
}

export function startRun(requested, { actionId, input = {}, shotN = null, newSession = false }) {
  filmDir(requested);
  const isMessage = actionId === 'message';
  const action = isMessage ? { ...MESSAGE, step: input.step, serie: SERIE_SYNC[input.serie] ? 'shared' : undefined } : ACTIONS[actionId];
  if (!action) throw httpError(400, `Action inconnue : ${actionId}`);
  // Dans une série, une action commune (brief, 3 scénarios, 3 directions, ou la réponse à l'une d'elles) tourne dans la vidéo A.
  const serieOf = serieContext(requested);
  const shared = Boolean(serieOf) && action.serie === 'shared';
  const slug = shared ? serieOf.films[0].slug : requested;
  const serie = shared ? serieContext(slug) : serieOf;
  const dir = filmDir(slug);
  if (shared) {
    const busy = serie.films.find((f) => activeRun(f.slug));
    if (busy) throw httpError(409, `Claude travaille déjà sur la vidéo ${busy.lettre}. Cette action vaut pour les 3 vidéos : attends la fin ou arrête-la.`);
  } else if (activeRun(slug)) {
    throw httpError(409, sharedFor.has(slug) ? 'Claude fait une action commune aux 3 vidéos. Attends la fin ou arrête-la.' : 'Claude travaille déjà sur ce film. Attends la fin ou arrête-le.');
  }
  const step = stepOf(action.step) || STEPS[0];
  if (getTerm(slug, step.id)?.busy) throw httpError(409, `Claude travaille dans la session « ${step.title} » : attends la fin de son tour, ou interromps-le (Échap dans le panneau).`);
  if (action.needs) {
    for (const k of action.needs) if (!String(input[k] || input.notes || '').trim()) throw httpError(400, 'Dis d’abord ce que tu choisis.');
  }
  if (isMessage && !String(input.text || '').trim()) throw httpError(400, 'Le message est vide.');

  const state = readState(slug);
  const film = { slug, title: state.title || slug };
  let shot = null;
  if (action.perShot) {
    shot = getFilm(slug).shots.find((s) => String(s.n) === String(shotN));
    if (!shot) throw httpError(400, `Plan ${shotN} introuvable dans SHOTLIST.md`);
  }
  const id = randomUUID();
  const firstBuild = actionId === 'build_shot' && !Object.values(state.shots).some((s) => s.status !== 'todo');
  const version = actionId === 'assemble' ? nextVersion(slug) : currentVersion(slug);
  const label = isMessage ? short(input.text, 80) : ((serie && action.labelSerie) || action.label) + (shot ? ` · plan ${shot.n}` : '');
  const blender = Boolean({ ...DEFAULT_SETTINGS, ...(state.settings || {}) }.blender);
  const body = buildPrompt(actionId, { film, runId: id, shot, firstBuild, version, serie, blender }, input);
  const prompt = actionMessage({ runId: id, step, label, shared, lettre: serie?.lettre, body, isMessage });
  // Une session par étape, reprise pour les échanges ; la critique et « repartir de zéro » ouvrent une session neuve.
  const fresh = Boolean(action.fresh || newSession);
  const resume = fresh ? null : state.sessions[step.id] || null;
  const args = sessionArgs(slug, step, serie, state);

  const logDir = path.join(dir, '.regie', 'runs');
  fs.mkdirSync(logDir, { recursive: true });
  try { fs.rmSync(path.join(dir, '.regie', 'handoff.json'), { force: true }); } catch { /* rien à effacer */ }

  let term = sessionFor({ slug, step, args, fresh, resume });
  const reused = Boolean(term);
  if (!term) term = spawnTerm({ slug, step: step.id, cwd: dir, args, resume, fresh: Boolean(action.fresh), prompt });
  const record = {
    id,
    slug,
    step: step.id,
    action: actionId,
    label,
    shot: shot ? String(shot.n) : null,
    startedAt: new Date().toISOString(),
    status: 'running',
    mode: 'session',
    resumed: reused || Boolean(resume),
    sessionId: term.sessionId,
    settings: { ...DEFAULT_SETTINGS, ...(state.settings || {}) },
    ...(shared ? { shared: isMessage ? input.serie : actionId } : {}),
  };
  const mirrors = shared ? serie.films.filter((f) => f.slug !== slug).map((f) => f.slug) : [];
  const log = fs.createWriteStream(path.join(logDir, `${id}.jsonl`));
  const run = { ...record, name: `${film.title} · ${label}`, fresh: Boolean(action.fresh), events: [], listeners: new Set(), log, mirrors, term };
  runs.set(id, run);
  term.runId = id;
  updateState(slug, (s) => { s.runs.push(record); return s; });
  appendJournal(path.join(dir, 'JOURNAL.md'), { step: step.title, type: isMessage ? 'relance' : action.fresh ? 'critique' : 'action', sent: record.label + (shared ? ' · pour les 3 vidéos' : ''), proof: '—', result: 'en cours' });
  // Les deux autres vidéos voient l'action commune dans leur propre historique.
  for (const m of mirrors) {
    sharedFor.set(m, id);
    updateState(m, (s) => { s.runs.push({ ...record, mirrorOf: slug }); return s; });
  }
  emit(run, { type: 'start', id, label: record.label, prompt, resumed: record.resumed });
  if (reused) {
    term.busy = true;
    typeInto(term, prompt).catch((err) => { term.busy = false; finish(run, 'error', err.message); });
  }
  return record;
}

// L'utilisateur écrit lui-même dans la session : son message devient une action « message » de l'étape, avec son reçu.
function startFreeRun(t, text) {
  const state = readState(t.slug);
  const step = stepOf(t.step) || STEPS[0];
  const id = randomUUID();
  const dir = filmDir(t.slug);
  try { fs.rmSync(path.join(dir, '.regie', 'handoff.json'), { force: true }); } catch { /* rien à effacer */ }
  const label = short(text.replace(/\s+/g, ' ').trim(), 80) || 'Message';
  const record = { id, slug: t.slug, step: t.step, action: 'message', label, shot: null, startedAt: new Date().toISOString(), status: 'running', mode: 'session', free: true, resumed: true, sessionId: t.sessionId, settings: { ...DEFAULT_SETTINGS, ...(state.settings || {}) } };
  fs.mkdirSync(path.join(dir, '.regie', 'runs'), { recursive: true });
  const run = { ...record, name: `${state.title || t.slug} · ${label}`, fresh: t.fresh, events: [], listeners: new Set(), log: fs.createWriteStream(path.join(dir, '.regie', 'runs', `${id}.jsonl`)), mirrors: [], term: t };
  runs.set(id, run);
  t.runId = id;
  updateState(t.slug, (s) => { s.runs.push(record); return s; });
  appendJournal(path.join(dir, 'JOURNAL.md'), { step: step.title, type: 'message', sent: label, proof: '—', result: 'en cours' });
  emit(run, { type: 'start', id, label, prompt: text, resumed: true });
}

// Le handoff de cette action : écrit pendant l'action (le fichier est effacé à son départ), à son identifiant ou « libre ».
function readHandoff(slug, run) {
  const file = path.join(filmDir(slug), '.regie', 'handoff.json');
  try {
    const h = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (h.run === run.id) return h;
    if ((!h.run || h.run === 'libre') && fs.statSync(file).mtimeMs >= Date.parse(run.startedAt)) return h;
  } catch { /* pas de handoff */ }
  return null;
}

function finish(run, status, errorMessage = null) {
  if (run.status !== 'running') return;
  const dir = filmDir(run.slug);
  const handoff = readHandoff(run.slug, run);
  if (status === 'error') emit(run, { type: 'error', message: errorMessage || 'Claude n’a pas pu finir.' });
  if (handoff) emit(run, { type: 'handoff', handoff });
  emit(run, { type: 'end', status });
  run.log.end();

  run.status = status;
  run.endedAt = new Date().toISOString();
  if (run.term?.runId === run.id) { run.term.runId = null; run.term.lastRunId = run.id; }
  const sessionId = run.term?.sessionId || null;
  const stepTitle = stepOf(run.step)?.title || run.step;
  const outcome = { status, endedAt: run.endedAt, sessionId, costUsd: null, tokens: null, durationMs: Date.parse(run.endedAt) - Date.parse(run.startedAt), summary: handoff?.resume || null, handoff, finalText: null, denials: [] };
  updateState(run.slug, (s) => {
    const r = s.runs.find((x) => x.id === run.id);
    // Le handoff est gardé avec l'action : le fichier, lui, est réécrit à chaque action.
    if (r) Object.assign(r, outcome);
    if (sessionId && status !== 'error' && !run.fresh) s.sessions[run.step] = sessionId;
    if (status === 'done' && run.shot && (run.action === 'build_shot' || run.action === 'fix_shot')) {
      s.shots[run.shot] = { status: 'built', at: run.endedAt };
    }
    return s;
  });
  const entry = {
    step: stepTitle,
    type: 'résultat',
    sent: run.label,
    proof: (handoff?.images || []).map((i) => i.path).slice(0, 4).join(', ') || (handoff?.fichiers || []).join(', ') || '—',
    result: status === 'done' ? (handoff?.resume || 'fait') : status === 'stopped' ? 'arrêté par l’utilisateur' : `erreur${errorMessage ? ` : ${errorMessage}` : ''}`,
  };
  appendJournal(path.join(dir, 'JOURNAL.md'), entry);
  if (run.mirrors.length) finishShared(run, outcome, entry);
  if (run.term) broadcast(run.term);
}

// Claude a repris la main sans nouveau message (une tâche de fond terminée) : le reçu de la dernière action suit son handoff.
function refreshLast(t) {
  const run = runs.get(t.lastRunId);
  if (!run || run.status === 'running') return;
  const handoff = readHandoff(run.slug, run);
  if (!handoff) return;
  updateState(run.slug, (s) => {
    const r = s.runs.find((x) => x.id === run.id);
    if (r) Object.assign(r, { handoff, summary: handoff.resume || r.summary });
    return s;
  });
}

onSessionEvents({
  prompt(t, text) {
    if (t.runId && runs.get(t.runId)?.status === 'running') return;
    startFreeRun(t, text);
  },
  stop(t) {
    const run = t.runId && runs.get(t.runId);
    if (run) finish(run, run.stopped ? 'stopped' : 'done');
    else refreshLast(t);
  },
  exit(t, code) {
    // Une conversation qui ne reprend pas (jamais écrite, ou effacée) : la prochaine ouverture repartira d'une session neuve.
    const failedResume = t.resumed && !t.ready && !t.killed;
    if (failedResume) updateState(t.slug, (s) => { if (s.sessions[t.step] === t.sessionId) delete s.sessions[t.step]; return s; });
    const run = t.runId && runs.get(t.runId);
    if (run) {
      finish(run, run.stopped || t.killed ? 'stopped' : 'error', failedResume
        ? 'La conversation de l’étape n’a pas pu reprendre. Relance l’action : une session neuve s’ouvrira.'
        : `La session Claude s’est fermée${code ? ` (code ${code})` : ''}.`);
    }
  },
  session(t, ev) {
    // La conversation de l'étape existe dès le premier message : c'est elle que la prochaine action reprendra.
    if (ev === 'UserPromptSubmit' && !t.fresh && t.sessionId) {
      updateState(t.slug, (s) => { if (s.sessions[t.step] !== t.sessionId) s.sessions[t.step] = t.sessionId; return s; });
    }
  },
});

// Action commune d'une série : son résultat est recopié dans les deux autres vidéos, puis leur historique est mis à jour.
function finishShared(run, outcome, entry) {
  let synced = true;
  if (outcome.status === 'done') {
    try { syncSerie(run.slug, SERIE_SYNC[run.shared] || [], run.mirrors); } catch (err) { synced = false; console.error(err); }
  }
  for (const m of run.mirrors) {
    sharedFor.delete(m);
    try {
      updateState(m, (s) => {
        const r = s.runs.find((x) => x.id === run.id);
        if (r) Object.assign(r, outcome, { sessionId: null });
        return s;
      });
      appendJournal(path.join(filmDir(m), 'JOURNAL.md'), { ...entry, sent: `${entry.sent} · commune aux 3 vidéos, faite dans videos/${run.slug}`, result: synced ? entry.result : `${entry.result} (copie dans cette vidéo ratée : relance l'action)` });
    } catch (err) { console.error(err); }
  }
}

// « Lancer sur les 3 » : la même action dans chaque vidéo de la série, en parallèle. Chacune garde son scénario et sa direction.
export function startSerieRuns(slug, { actionId, input = {} }) {
  const serie = serieContext(slug);
  if (!serie) throw httpError(400, 'Ce film ne fait pas partie d’une série.');
  const action = ACTIONS[actionId];
  if (!action || action.serie !== 'each') throw httpError(400, 'Cette action ne se lance pas sur les 3 vidéos à la fois.');
  const started = [];
  const skipped = [];
  for (const f of serie.films) {
    const own = action.needs?.includes('choix') ? { ...input, choix: f.lettre } : input;
    try {
      if (activeRun(f.slug)) throw httpError(409, 'Claude y travaille déjà');
      started.push(startRun(f.slug, { actionId, input: own }));
      updateState(f.slug, (s) => { s.inputs = { ...s.inputs, [actionId]: own }; return s; });
    } catch (err) {
      skipped.push({ slug: f.slug, lettre: f.lettre, reason: err.message });
    }
  }
  if (!started.length) throw httpError(409, skipped.map((x) => `Vidéo ${x.lettre} : ${x.reason}`).join(' · '));
  return { started, skipped };
}

// Arrêter = Échap dans la session, comme au clavier. Claude Code ne signale pas une interruption : la Régie clôt l'action.
export function stopRun(id) {
  const run = runs.get(id);
  if (!run || run.status !== 'running') return false;
  run.stopped = true;
  interrupt(run.term);
  setTimeout(() => {
    if (run.status !== 'running') return;
    run.term.busy = false;
    finish(run, 'stopped');
  }, 2500);
  return true;
}

// À la fermeture du serveur : les actions en cours sont notées arrêtées, puis les sessions se ferment (leur conversation reste reprenable).
export function stopAllRuns(timeoutMs = 5000) {
  for (const r of runs.values()) if (r.status === 'running') { r.stopped = true; finish(r, 'stopped'); }
  return killAllTerms(timeoutMs);
}
