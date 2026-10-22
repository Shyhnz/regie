// Serveur de la Régie : API des films, flux Claude en SSE, médias de la Bible. N'écoute que sur 127.0.0.1.
import fs from 'node:fs';
import path from 'node:path';
import { execFile, spawn } from 'node:child_process';
import { promisify } from 'node:util';
import express from 'express';
import {
  APP_DIR, VIDEOS, SYNTHESE, BIBLE, STYLE_VARIANTS, MEDIA_CACHE, LOOPS, CACHE_DIR, PORT, HOST, GOUTS, HYPERFRAMES, BLENDER_BIN, BLENDER_MCP, CLAUDE_BIN,
} from './config.js';
import {
  listFilms, getFilm, createFilm, createSerie, ensureStudio, serieContext, filmDir, resolveInFilm, setMoodboard, setSettings, updateState, readState,
  ffprobe, posterFromVideo, httpError,
} from './films.js';
import { startRun, startSerieRuns, stopRun, stopAllRuns, subscribe, runInfo, activeRun, replayRun, ensureSession, busyLabels, DEFAULT_SETTINGS } from './runs.js';
import { WebSocketServer } from 'ws';
import { handleHook, attachClient, HOOK_TOKEN } from './sessions.js';
import { STEPS, ACTIONS } from './prompts.js';
import { libraryForClient, findItem, itemMarkdown, getLibrary } from './library.js';
import { searchRules, searchPrompts, listRepos } from './skills.js';

const run = promisify(execFile);
const dev = process.argv.includes('--dev');
const app = express();
app.disable('x-powered-by');

// Un outil est-il installé ? (Claude Code, ffmpeg, npx pour HyperFrames). La Régie publiée le dit à l'ouverture.
function onPath(bin) {
  if (bin.includes('/')) return fs.existsSync(bin);
  return (process.env.PATH || '').split(':').some((d) => { try { fs.accessSync(path.join(d, bin), fs.constants.X_OK); return true; } catch { return false; } });
}

const wrap = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
const TEXT_EXT = /\.(md|js|json|css|html|txt|py|sh)$/i;

// ——— Référentiel ———
app.get('/api/meta', (req, res) => {
  res.json({
    steps: STEPS,
    actions: Object.fromEntries(Object.entries(ACTIONS).map(([id, a]) => [id, { id, step: a.step, label: a.label, hint: a.hint, perShot: Boolean(a.perShot), fresh: Boolean(a.fresh), needs: a.needs || [], serie: a.serie || null, labelSerie: a.labelSerie || a.label, hintSerie: a.hintSerie || a.hint }])),
    defaults: DEFAULT_SETTINGS,
    hyperframes: HYPERFRAMES,
    blender: { installed: fs.existsSync(BLENDER_BIN), mcp: fs.existsSync(BLENDER_MCP) },
    deps: { claude: onPath(CLAUDE_BIN), ffmpeg: onPath('ffmpeg'), npx: onPath('npx') },
  });
});

// ——— Films ———
app.get('/api/films', wrap(async (req, res) => res.json(listFilms())));
app.post('/api/films', express.json(), wrap(async (req, res) => {
  const body = req.body || {};
  res.status(201).json({ slug: body.serie ? createSerie(body) : createFilm({ title: body.title }) });
}));
app.get('/api/films/:slug', wrap(async (req, res) => {
  const film = getFilm(req.params.slug);
  const serie = film.serie && { ...film.serie, films: film.serie.films.map((f) => ({ ...f, running: Boolean(activeRun(f.slug)) })) };
  res.json({ ...film, serie, active: activeRun(req.params.slug) });
}));

app.put('/api/films/:slug/settings', express.json(), wrap(async (req, res) => {
  filmDir(req.params.slug);
  res.json({ ...DEFAULT_SETTINGS, ...setSettings(req.params.slug, req.body || {}) });
}));

app.put('/api/films/:slug/inputs/:step', express.json(), wrap(async (req, res) => {
  filmDir(req.params.slug);
  const state = updateState(req.params.slug, (s) => { s.inputs = { ...s.inputs, [req.params.step]: req.body || {} }; return s; });
  res.json(state.inputs[req.params.step]);
}));

// ——— Sélection de la Bibliothèque ———
app.post('/api/films/:slug/moodboard', express.json(), wrap(async (req, res) => {
  const { id, note = '' } = req.body || {};
  const it = findItem(id);
  if (!it) throw httpError(404, 'Fiche introuvable');
  const cat = getLibrary().categories.find((c) => c.id === it.cat);
  const kindLabel = {
    variant: 'variante de style', guide: 'guide de style', style: 'style', plan: 'plan', video: 'vidéo de référence', etude: 'étude 60 fps', outil: 'outil',
    technique: cat?.label?.toLowerCase() || 'technique', loop: 'fond animé', 'skill-prompt': 'prompt open source', 'skill-rule': 'règle open source', 'skill-repo': 'skill open source',
  }[it.kind] || it.kind;
  const mb = setMoodboard(req.params.slug, (list) => {
    const rest = list.filter((m) => m.id !== id);
    return [...rest, { id, title: it.title, kind: it.kind, kindLabel, cat: it.cat, source: it.source || it.page || null, image: it.images?.[0]?.src || null, note, at: new Date().toISOString() }];
  });
  res.json(mb);
}));
app.post('/api/films/:slug/moodboard/loop', express.json(), wrap(async (req, res) => {
  const { id, name, note = '' } = req.body || {};
  if (!/^(bg|sh)\.[a-z0-9-]+$/.test(id || '')) throw httpError(400, 'Boucle inconnue');
  const pack = id.startsWith('bg') ? 'bg' : 'sh';
  const mb = setMoodboard(req.params.slug, (list) => [...list.filter((m) => m.id !== `loop:${id}`), {
    id: `loop:${id}`, title: `${name || id} (Motion Loops)`, kind: 'loop', kindLabel: 'fond animé', cat: 'boucles',
    source: `${path.join(LOOPS, 'js', 'tiles', pack)} — tuile « ${id} » ; moteur ${path.join(LOOPS, 'js', 'lib.js')}`, image: null, note, at: new Date().toISOString(),
  }]);
  res.json(mb);
}));
app.patch('/api/films/:slug/moodboard', express.json(), wrap(async (req, res) => {
  const { id, note = '' } = req.body || {};
  res.json(setMoodboard(req.params.slug, (list) => list.map((m) => (m.id === id ? { ...m, note } : m))));
}));
app.delete('/api/films/:slug/moodboard', express.json(), wrap(async (req, res) => {
  const { id } = req.body || {};
  res.json(setMoodboard(req.params.slug, (list) => list.filter((m) => m.id !== id)));
}));

// ——— Fichiers du film ———
app.get('/api/films/:slug/file', wrap(async (req, res) => {
  const p = resolveInFilm(req.params.slug, String(req.query.path || ''));
  if (!fs.existsSync(p)) throw httpError(404, `Fichier absent : ${req.query.path}`);
  res.type('text/plain; charset=utf-8').send(fs.readFileSync(p, 'utf8'));
}));
app.put('/api/films/:slug/file', express.text({ type: '*/*', limit: '5mb' }), wrap(async (req, res) => {
  const rel = String(req.query.path || '');
  if (!TEXT_EXT.test(rel)) throw httpError(400, 'Seuls les fichiers texte du studio se modifient ici.');
  const p = resolveInFilm(req.params.slug, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, typeof req.body === 'string' ? req.body : '');
  res.json({ ok: true, savedAt: new Date().toISOString() });
}));
app.put('/api/films/:slug/upload', express.raw({ type: '*/*', limit: '2gb' }), wrap(async (req, res) => {
  const rel = String(req.query.path || '');
  if (!rel.startsWith('assets/')) throw httpError(400, 'Les fichiers déposés vont dans assets/.');
  const p = resolveInFilm(req.params.slug, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, req.body);
  res.status(201).json({ path: rel, size: req.body.length });
}));
app.delete('/api/films/:slug/upload', wrap(async (req, res) => {
  const rel = String(req.query.path || '');
  if (!rel.startsWith('assets/')) throw httpError(400, 'Seuls les fichiers de assets/ se retirent ici.');
  fs.rmSync(resolveInFilm(req.params.slug, rel), { force: true });
  res.json({ ok: true });
}));
app.get('/api/films/:slug/probe', wrap(async (req, res) => {
  res.json(await ffprobe(resolveInFilm(req.params.slug, String(req.query.path || ''))));
}));
app.get('/api/films/:slug/poster', wrap(async (req, res) => {
  const film = listFilms().find((f) => f.slug === req.params.slug);
  if (!film?.video) throw httpError(404, 'Aucune vidéo');
  res.sendFile(await posterFromVideo(req.params.slug, film.video));
}));

// ——— Outils sans Claude ———
app.post('/api/films/:slug/thumbs', wrap(async (req, res) => {
  const slug = req.params.slug;
  const dir = filmDir(slug);
  if (!fs.existsSync(path.join(dir, 'index.html'))) throw httpError(400, 'La composition n’existe pas encore : construis d’abord un plan.');
  const film = getFilm(slug);
  const fps = film.timeline?.fps || 60;
  const shots = film.shots.filter((s) => s.frames);
  if (!shots.length) throw httpError(400, 'SHOTLIST.md ne donne pas encore les images des plans.');
  const times = shots.map((s) => ((s.frames.start + (s.frames.end - s.frames.start) * 0.6) / fps).toFixed(2));
  const out = path.join(dir, '.regie', 'thumbs');
  fs.rmSync(out, { recursive: true, force: true });
  fs.mkdirSync(out, { recursive: true });
  await run('npx', ['--yes', HYPERFRAMES, 'snapshot', '.', '--at', times.join(','), '--no-end', '-o', out], { cwd: dir, timeout: 180000 });
  const frames = fs.readdirSync(out).filter((f) => /^frame-\d+/.test(f)).sort();
  frames.forEach((f, i) => { if (shots[i]) fs.renameSync(path.join(out, f), path.join(out, `plan-${String(shots[i].n).padStart(2, '0')}.png`)); });
  res.json({ count: frames.length });
}));

const previews = new Map();
const previewProcs = new Set();
app.post('/api/films/:slug/preview', wrap(async (req, res) => {
  const slug = req.params.slug;
  const dir = filmDir(slug);
  if (!fs.existsSync(path.join(dir, 'index.html'))) throw httpError(400, 'La composition n’existe pas encore.');
  if (previews.has(slug)) return res.json({ url: previews.get(slug) });
  const port = 3100 + (listFilms().findIndex((f) => f.slug === slug) % 100);
  const child = spawn('npx', ['--yes', HYPERFRAMES, 'preview', '--no-open', '--foreground', '--port', String(port)], { cwd: dir, stdio: 'ignore', detached: true });
  child.unref();
  const url = `http://localhost:${port}`;
  previews.set(slug, url);
  previewProcs.add(child);
  child.on('exit', () => { previews.delete(slug); previewProcs.delete(child); });
  res.json({ url, starting: true });
}));

app.post('/api/films/:slug/finder', wrap(async (req, res) => {
  await run('open', [filmDir(req.params.slug)]);
  res.json({ ok: true });
}));

// ——— Claude ———
app.post('/api/films/:slug/runs', express.json(), wrap(async (req, res) => {
  const { action, input, shot, newSession } = req.body || {};
  // Les réponses d'une action commune de série sont gardées dans les 3 vidéos.
  const where = ACTIONS[action]?.serie === 'shared' ? (serieContext(req.params.slug)?.films.map((f) => f.slug) || [req.params.slug]) : [req.params.slug];
  if (input && ACTIONS[action]) for (const slug of where) updateState(slug, (s) => { s.inputs = { ...s.inputs, [action]: input }; return s; });
  res.status(201).json(startRun(req.params.slug, { actionId: action, input, shotN: shot, newSession }));
}));
app.post('/api/films/:slug/serie/runs', express.json(), wrap(async (req, res) => {
  const { action, input } = req.body || {};
  res.status(201).json(startSerieRuns(req.params.slug, { actionId: action, input }));
}));
app.post('/api/runs/:id/stop', wrap(async (req, res) => res.json({ stopped: stopRun(req.params.id) })));
// Les crochets des sessions Claude Code (début, message, fin de tour, besoin de l'utilisateur) : voir server/sessions.js.
app.post('/api/claude/hook', express.json({ limit: '4mb' }), (req, res) => {
  if (req.query.token !== HOOK_TOKEN) return res.status(403).end();
  try { handleHook(String(req.query.term || ''), req.body || {}); } catch (err) { console.error(err); }
  res.status(204).end();
});
// Pour Régie.app, avant de quitter ou de redémarrer : ce que Claude est en train de faire.
app.get('/api/claude/busy', (req, res) => res.json(busyLabels()));
app.get('/api/runs/:id/events', (req, res) => {
  res.set({ 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
  res.flushHeaders();
  const send = (e) => res.write(`data: ${JSON.stringify(e)}\n\n`);
  const unsub = subscribe(req.params.id, send);
  if (unsub) {
    const ping = setInterval(() => res.write(': ping\n\n'), 15000);
    req.on('close', () => { clearInterval(ping); unsub(); });
    return;
  }
  // Action terminée avant un redémarrage : on rejoue son fichier.
  let events = null;
  try { events = replayRun(String(req.query.slug || ''), req.params.id); } catch { events = null; }
  if (!events) send({ type: 'error', message: 'Ce flux n’existe plus.' });
  else events.forEach(send);
  if (!events?.some((e) => e.type === 'end')) send({ type: 'end', status: 'interrupted' });
  res.end();
});
app.get('/api/runs/:id', (req, res) => {
  const info = runInfo(req.params.id);
  if (!info) return res.status(404).json({ error: 'Action inconnue' });
  res.json(info);
});

// ——— Bibliothèque ———
app.get('/api/library', (req, res) => res.json(libraryForClient()));
app.post('/api/library/refresh', (req, res) => { getLibrary({ refresh: true }); res.json(libraryForClient()); });
app.get('/api/library/item', (req, res) => {
  const it = findItem(String(req.query.id || ''));
  if (!it) return res.status(404).json({ error: 'Fiche introuvable' });
  res.json({ item: it, md: it.kind?.startsWith('skill-') ? null : itemMarkdown(it.id) });
});
// Les skills open source : trop nombreux pour partir avec la Bibliothèque, servis par pages et par recherche.
const num = (v, d, max) => Math.min(max, Math.max(0, Number.parseInt(v, 10) || d));
const qs = (v) => String(v || '').slice(0, 200);
app.get('/api/library/skills/rules', (req, res) => {
  const { chapter, q, statut, repo, offset, limit } = req.query;
  res.json(searchRules({ chapter: qs(chapter), q: qs(q), statut: qs(statut), repo: qs(repo), offset: num(offset, 0, 1e6), limit: num(limit, 40, 200) }));
});
app.get('/api/library/skills/prompts', (req, res) => {
  const { type, q, repo, offset, limit } = req.query;
  res.json(searchPrompts({ type: qs(type), q: qs(q), repo: qs(repo), offset: num(offset, 0, 1e6), limit: num(limit, 40, 200) }));
});
app.get('/api/library/skills/repos', (req, res) => res.json(listRepos({ q: qs(req.query.q), verdict: qs(req.query.verdict) })));
app.get('/api/library/loops', (req, res) => {
  const dir = path.join(LOOPS, 'js', 'tiles');
  const files = ['bg', 'sh'].flatMap((p) => { try { return fs.readdirSync(path.join(dir, p)).filter((f) => f.endsWith('.js')).map((f) => `/media/loops/js/tiles/${p}/${f}`); } catch { return []; } });
  res.json({ lib: '/media/loops/js/lib.js', sets: '/media/loops/js/sets.js', tiles: files });
});

// ——— Goûts (la mémoire effets-aimes.md, une seule source de vérité) ———
app.get('/api/gouts', (req, res) => {
  const md = fs.existsSync(GOUTS) ? fs.readFileSync(GOUTS, 'utf8') : '';
  const m = /^---\n[\s\S]*?\n---\n?/.exec(md);
  res.json({ path: GOUTS, body: m ? md.slice(m[0].length) : md });
});
app.put('/api/gouts', express.json({ limit: '1mb' }), (req, res) => {
  const md = fs.existsSync(GOUTS) ? fs.readFileSync(GOUTS, 'utf8') : '';
  const m = /^---\n[\s\S]*?\n---\n?/.exec(md);
  const front = m ? m[0] : '---\nname: effets-aimes\ndescription: Running list of motion effects/styles the user explicitly liked or rejected\nmetadata:\n  type: feedback\n---\n';
  fs.mkdirSync(path.dirname(GOUTS), { recursive: true });
  fs.writeFileSync(GOUTS, `${front}${String(req.body?.body || '').replace(/^\n+/, '\n')}`);
  res.json({ ok: true, savedAt: new Date().toISOString() });
});

// ——— Médias ———
const media = (root, opts = {}) => express.static(root, { fallthrough: false, dotfiles: 'deny', ...opts });
app.use('/media/videos', media(VIDEOS, { dotfiles: 'allow' }));
app.use('/media/bible', media(SYNTHESE));
app.use('/media/illus', media(path.join(BIBLE, 'illustrations')));
app.use('/media/variants', media(STYLE_VARIANTS));
app.use('/media/clips', media(MEDIA_CACHE));
app.use('/media/loops', media(LOOPS));
app.use('/media/cache', media(CACHE_DIR));

app.use('/api', (req, res) => res.status(404).json({ error: `Route inconnue : ${req.method} ${req.originalUrl}` }));
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const status = err.status || (err.type === 'entity.too.large' ? 413 : 500);
  if (status >= 500) console.error(err);
  if (req.path.startsWith('/media/')) return res.status(status === 500 ? 404 : status).end();
  res.status(status).json({ error: err.message || 'Erreur du serveur de la Régie.' });
});

// Les actions marquées « en cours » d'une session précédente du serveur ne tournent plus.
function markInterrupted() {
  for (const f of listFilms().filter((x) => x.studio)) {
    const state = readState(f.slug);
    if (state.runs.some((r) => r.status === 'running')) {
      updateState(f.slug, (s) => { s.runs.forEach((r) => { if (r.status === 'running') r.status = 'interrupted'; }); return s; });
    }
  }
}

async function start() {
  markInterrupted();
  if (dev) {
    const { createServer } = await import('vite');
    const vite = await createServer({ root: path.join(APP_DIR, 'web'), configFile: path.join(APP_DIR, 'vite.config.js'), server: { middlewareMode: true }, appType: 'spa' });
    app.use(vite.middlewares);
  } else {
    const dist = path.join(APP_DIR, 'dist');
    app.use(express.static(dist));
    app.use((req, res) => res.sendFile(path.join(dist, 'index.html')));
  }
  if (ensureStudio()) console.log(`Studio de base installé dans ${VIDEOS}/_studio`);
  const server = app.listen(PORT, HOST, () => console.log(`Régie prête : http://localhost:${PORT}${dev ? ' (dev)' : ''}`));
  // Le panneau Claude : le terminal de la session d'une étape. Seules les pages de la Régie s'y branchent : une session
  // Claude Code peut lancer des commandes, une autre page ouverte dans le navigateur ne doit jamais pouvoir y écrire.
  const wss = new WebSocketServer({ noServer: true });
  const allowed = new Set([`http://localhost:${PORT}`, `http://127.0.0.1:${PORT}`]);
  server.on('upgrade', (req, socket, head) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (url.pathname !== '/ws/claude') return; // les autres (Vite en développement) ne nous regardent pas
    if (req.headers.origin && !allowed.has(req.headers.origin)) { socket.destroy(); return; }
    let term;
    try { term = ensureSession(url.searchParams.get('slug') || '', url.searchParams.get('step') || ''); } catch { socket.destroy(); return; }
    wss.handleUpgrade(req, socket, head, (ws) => attachClient(term, ws));
  });
}

// Régie.app (ou Ctrl+C) arrête le serveur : les actions Claude sont arrêtées proprement et notées, les aperçus fermés.
let closing = false;
async function shutdown(signal) {
  if (closing) return;
  closing = true;
  console.log(`Arrêt de la Régie (${signal})…`);
  for (const child of previewProcs) { try { process.kill(-child.pid, 'SIGTERM'); } catch { /* déjà fermé */ } }
  await stopAllRuns(5000);
  process.exit(0);
}
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

start();
