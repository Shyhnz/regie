// Les films : dossiers videos/<film>/ copiés du studio de base, et leur état de Régie dans .regie/state.json.
import fs from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { VIDEOS, STUDIO, STUDIO_TEMPLATE, APP_DIR, CACHE_DIR } from './config.js';
import { parseShotlist } from './shotlist.js';
import { loadTimeline } from './timeline.js';
import { STEPS } from './prompts.js';
import { tr } from './i18n.js';
import { appendJournal } from './journal.js';

const run = promisify(execFile);
const IGNORED = new Set(['_studio', 'web-site', 'style-variants']);
const STUDIO_FILES = ['BRIEF.md', 'SCENARIO.md', 'MOODBOARD.md', 'REFERENCE.md', 'STYLE.md', 'SHOTLIST.md', 'timeline.js', 'motion.js', 'CONTRACT.md', 'JOURNAL.md'];
const IMG = /\.(png|jpe?g|webp|gif)$/i;
const VID = /\.(mp4|mov|webm)$/i;
const AUD = /\.(wav|mp3|m4a|aac|ogg|flac)$/i;

export function slugify(title) {
  return title.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'film';
}

export function filmDir(slug) {
  if (!/^[a-z0-9][a-z0-9._-]*$/i.test(slug) || IGNORED.has(slug)) throw httpError(404, tr('Film introuvable : {slug}', { slug }));
  const dir = path.join(VIDEOS, slug);
  if (!fs.existsSync(dir)) throw httpError(404, tr('Film introuvable : {slug}', { slug }));
  return dir;
}

export function httpError(status, message) {
  return Object.assign(new Error(message), { status });
}

// Chemin relatif sûr à l'intérieur d'un film.
export function resolveInFilm(slug, rel) {
  const dir = filmDir(slug);
  const p = path.resolve(dir, rel || '');
  if (p !== dir && !p.startsWith(dir + path.sep)) throw httpError(400, tr('Chemin hors du film'));
  return p;
}

const readText = (p) => (fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null);
const statSafe = (p) => { try { return fs.statSync(p); } catch { return null; } };

// ——— État ———
const statePath = (slug) => path.join(VIDEOS, slug, '.regie', 'state.json');

function emptyState(title) {
  return {
    version: 1,
    title,
    createdAt: new Date().toISOString(),
    done: {},
    sessions: {},
    shots: {},
    runs: [],
    inputs: {},
    moodboard: [],
    settings: {},
  };
}

export function readState(slug) {
  const p = statePath(slug);
  const raw = readText(p);
  if (raw) {
    try { return withoutGates({ ...emptyState(slug), ...JSON.parse(raw) }); } catch { /* état illisible : on repart d'un état déduit */ }
  }
  return inferState(slug);
}

export function writeState(slug, state) {
  const p = statePath(slug);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  const tmp = `${p}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(state, null, 2));
  fs.renameSync(tmp, p);
}

export function updateState(slug, fn) {
  const state = readState(slug);
  const next = fn(state) || state;
  writeState(slug, next);
  return next;
}

const templates = {};
function isTemplate(name, content) {
  if (content == null) return true;
  if (!(name in templates)) {
    templates[name] = readText(path.join(STUDIO, name)) ?? readText(path.join(APP_DIR, 'templates', name));
  }
  const t = templates[name];
  if (!t) return content.trim().length === 0;
  const norm = (s) => s.replace(/<film>|— .+$/gm, '').replace(/\s+/g, ' ').trim();
  return norm(t) === norm(content);
}

// Les films d'avant la suppression des portes : la dernière porte franchie d'une étape la marque faite.
const LAST_GATE = { scenario: 'p1', storyboard: 'p2', plans: 'p5', musique: 'son', final: 'p6' };
function withoutGates(state) {
  if (!state.gates) return state;
  for (const [step, gate] of Object.entries(LAST_GATE)) {
    if (state.gates[gate] && !state.done[step]) state.done[step] = state.gates[gate].at || 'import';
  }
  delete state.gates;
  return state;
}

// Un film fait avant la Régie : on déduit ses étapes faites de ce qui existe sur le disque.
function inferState(slug) {
  const dir = path.join(VIDEOS, slug);
  const meta = (() => { try { return JSON.parse(readText(path.join(dir, 'meta.json'))); } catch { return null; } })();
  const state = emptyState(meta?.name || slug);
  const filled = (f) => !isTemplate(f, readText(path.join(dir, f)));
  const has = (rel, re) => { try { return fs.readdirSync(path.join(dir, rel)).some((f) => re.test(f)); } catch { return false; } };
  const at = 'import';
  if (filled('BRIEF.md')) state.done.scenario = at;
  if (filled('SHOTLIST.md')) state.done.storyboard = at;
  if (has('renders', VID)) state.done.plans = at;
  if (has('assets/audio', AUD)) state.done.musique = at;
  if (has('out', VID)) state.done.final = at;
  state.imported = true;
  return state;
}

// ——— Statut des étapes ———
// Rien à valider : passer à la suite vaut accord. Une étape est faite quand son action de fin a abouti,
// ou dès qu'une étape suivante a commencé ; y revenir pour refaire une action ne la rouvre pas.
export function stepStatuses(state) {
  const done = state.done || {};
  const started = STEPS.map((step) => Boolean(done[step.id]) || state.runs.some((r) => r.step === step.id));
  let currentFound = false;
  return STEPS.map((step, i) => {
    const finished = Boolean(done[step.id])
      || state.runs.some((r) => r.action === step.end && r.status === 'done')
      || started.slice(i + 1).some(Boolean);
    const running = state.runs.some((r) => r.step === step.id && r.status === 'running');
    let status = finished ? 'done' : 'todo';
    if (!finished && !currentFound) { currentFound = true; status = 'current'; }
    if (running) status = 'running';
    return { id: step.id, n: step.n, title: tr(step.title), status };
  });
}

// ——— Médias ———
function listFiles(dir, re, { recursive = false } = {}) {
  const out = [];
  const walk = (d, rel) => {
    let entries = [];
    try { entries = fs.readdirSync(d, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      if (e.name.startsWith('.') || e.name === 'node_modules') continue;
      const r = rel ? `${rel}/${e.name}` : e.name;
      if (e.isDirectory()) { if (recursive) walk(path.join(d, e.name), r); }
      else if (re.test(e.name)) {
        const st = statSafe(path.join(d, e.name));
        out.push({ path: r, size: st?.size || 0, mtime: st?.mtimeMs || 0 });
      }
    }
  };
  walk(dir, '');
  return out;
}

function filmMedia(slug) {
  const dir = path.join(VIDEOS, slug);
  const under = (rel, re, opts) => listFiles(path.join(dir, rel), re, opts).map((f) => ({ ...f, path: `${rel}/${f.path}` }));
  const byTime = (a, b) => b.mtime - a.mtime;
  const reviewVersions = (() => {
    try {
      return fs.readdirSync(path.join(dir, 'reviews'), { withFileTypes: true })
        .filter((e) => e.isDirectory() && /^v\d+$/.test(e.name))
        .map((e) => ({ version: Number(e.name.slice(1)), images: under(`reviews/${e.name}`, IMG), critique: fs.existsSync(path.join(dir, 'reviews', e.name, 'critique.md')) }))
        .sort((a, b) => b.version - a.version);
    } catch { return []; }
  })();
  return {
    renders: under('renders', VID).sort(byTime),
    out: under('out', /\.(mp4|mov|webm|jpe?g|png|md)$/i).sort((a, b) => a.path.localeCompare(b.path)),
    da: under('reviews/da', IMG).sort((a, b) => a.path.localeCompare(b.path)),
    storyboard: under('storyboard', IMG).sort((a, b) => a.path.localeCompare(b.path)),
    shotsReviews: under('reviews/plans', IMG).sort((a, b) => a.path.localeCompare(b.path)),
    reviews: reviewVersions,
    final: under('reviews/final', IMG).sort((a, b) => a.path.localeCompare(b.path)),
    audio: under('assets/audio', AUD).sort(byTime),
    assets: under('assets', /./, { recursive: true }).filter((f) => !/\/fonts\//.test(f.path)),
    thumbs: under('.regie/thumbs', IMG),
  };
}

// Toute la musique du film, où que Claude l'ait rangée (variantes, sous-films), la plus récente d'abord.
function filmAudio(slug) {
  return listFiles(path.join(VIDEOS, slug), AUD, { recursive: true }).sort((a, b) => b.mtime - a.mtime);
}

export function nextVersion(slug) {
  const media = filmMedia(slug);
  return (media.reviews[0]?.version || 0) + 1;
}

export function currentVersion(slug) {
  return filmMedia(slug).reviews[0]?.version || 1;
}

// Une vidéo de série montre sa propre direction (la retenue d'abord), pas la première des trois.
function posterOf(slug, media, lettre = null) {
  const da = (re) => media.da.find((f) => re.test(f.path.split('/').pop()));
  const pick = media.out.find((f) => /affiche.*16x9|affiche/i.test(f.path) && IMG.test(f.path))
    || media.storyboard.find((f) => /planche/.test(f.path)) || media.storyboard[0]
    || da(/^final/i) || (lettre && da(new RegExp(`^${lettre}[-_]`))) || media.da[0];
  return pick ? pick.path : null;
}

// ——— Lecture d'un film ———
export function filmSummary(slug) {
  const dir = path.join(VIDEOS, slug);
  const studio = fs.existsSync(path.join(dir, 'BRIEF.md'));
  const st = statSafe(dir);
  if (!studio) {
    const renders = listFiles(path.join(dir, 'renders'), VID).sort((a, b) => b.mtime - a.mtime);
    return { slug, title: slug, studio: false, updatedAt: st?.mtimeMs || 0, video: renders[0] ? `renders/${renders[0].path}` : null };
  }
  const state = readState(slug);
  const media = filmMedia(slug);
  const steps = stepStatuses(state);
  const lastRun = state.runs[state.runs.length - 1];
  return {
    slug,
    title: state.title || slug,
    studio: true,
    imported: Boolean(state.imported),
    updatedAt: Math.max(st?.mtimeMs || 0, lastRun ? Date.parse(lastRun.endedAt || lastRun.startedAt) : 0),
    poster: posterOf(slug, media, state.serie?.lettre),
    serie: serieSummary(state),
    steps: steps.map((s) => ({ id: s.id, title: s.title, status: s.status })),
    video: media.out.find((f) => VID.test(f.path) && /web/.test(f.path))?.path || media.renders[0]?.path || null,
  };
}

export function listFilms() {
  let names = [];
  try { names = fs.readdirSync(VIDEOS, { withFileTypes: true }).filter((e) => e.isDirectory() && !e.name.startsWith('.') && !IGNORED.has(e.name)).map((e) => e.name); } catch { return []; }
  return names.map(filmSummary).sort((a, b) => (b.studio - a.studio) || (b.updatedAt - a.updatedAt));
}

export function getFilm(slug) {
  const dir = filmDir(slug);
  const state = readState(slug);
  const files = {};
  for (const f of STUDIO_FILES) {
    const content = readText(path.join(dir, f));
    files[f] = { exists: content != null, filled: content != null && !isTemplate(f, content) };
  }
  let shotlist = { shots: [], checks: [] };
  const shotMd = readText(path.join(dir, 'SHOTLIST.md'));
  if (shotMd) { try { shotlist = parseShotlist(shotMd); } catch { /* tableau illisible : liste vide */ } }
  let timeline = null;
  let timelineError = null;
  const tlSrc = readText(path.join(dir, 'timeline.js'));
  if (tlSrc) { try { timeline = loadTimeline(tlSrc); } catch (e) { timelineError = e.message; } }
  const media = { ...filmMedia(slug), audio: filmAudio(slug) };
  const pad = (n) => String(n).padStart(2, '0');
  const shots = shotlist.shots.map((s) => {
    const nn = pad(s.n);
    return {
      ...s,
      storyboard: media.storyboard.find((f) => f.path === `storyboard/plan-${nn}.png`)?.path || null,
      reviews: media.shotsReviews.filter((f) => f.path.startsWith(`reviews/plans/plan-${nn}-`)).map((f) => f.path),
      status: state.shots[s.n]?.status || 'todo',
      statusAt: state.shots[s.n]?.at || null,
    };
  });
  let handoff = null;
  const h = readText(path.join(dir, '.regie', 'handoff.json'));
  if (h) { try { handoff = JSON.parse(h); } catch { handoff = { error: 'handoff.json illisible' }; } }
  const serie = serieContext(slug);
  return {
    slug,
    title: state.title || slug,
    studio: fs.existsSync(path.join(dir, 'BRIEF.md')),
    serie: serie && {
      ...serieSummary(state),
      films: serie.films.map((f) => {
        const st = f.slug === slug ? state : readState(f.slug);
        const steps = stepStatuses(st);
        const cur = steps.find((x) => x.status !== 'done');
        return { slug: f.slug, lettre: f.lettre, angle: serieAngle(st), step: cur ? { id: cur.id, title: cur.title, status: cur.status } : null };
      }),
    },
    state: { ...state, runs: state.runs.slice(-60) },
    steps: stepStatuses(state),
    files,
    shots,
    checks: shotlist.checks,
    timeline,
    timelineError,
    media,
    handoff,
    version: currentVersion(slug),
  };
}

// ——— Création ———
// Régie publiée : au premier lancement, le studio de base livré avec l'app devient videos/_studio, qui évolue ensuite avec les films.
export function ensureStudio() {
  if (fs.existsSync(STUDIO) || !fs.existsSync(STUDIO_TEMPLATE)) return false;
  fs.mkdirSync(VIDEOS, { recursive: true });
  fs.cpSync(STUDIO_TEMPLATE, STUDIO, { recursive: true });
  return true;
}

export function createFilm({ title, slug: wanted = null, serie = null }) {
  const clean = String(title || '').trim();
  if (!clean) throw httpError(400, tr('Donne un nom au film.'));
  let slug = wanted || slugify(clean);
  let i = 2;
  if (wanted && fs.existsSync(path.join(VIDEOS, wanted))) throw httpError(409, tr('Le dossier videos/{slug} existe déjà.', { slug: wanted }));
  while (fs.existsSync(path.join(VIDEOS, slug))) slug = `${slugify(clean)}-${i++}`;
  const dir = path.join(VIDEOS, slug);
  ensureStudio();
  // Le vrai dossier, jamais un lien : copier un lien ferait écrire le nouveau film dans le studio de base.
  const studio = fs.realpathSync(STUDIO);
  fs.cpSync(studio, dir, {
    recursive: true,
    filter: (src) => {
      const rel = path.relative(studio, src);
      return !/^(renders|out|reviews)(\/|$)/.test(rel) && !/__pycache__|\.DS_Store/.test(rel);
    },
  });
  for (const d of ['renders', 'out', 'reviews', 'storyboard', 'explorations', 'assets/audio', 'assets/fonts']) fs.mkdirSync(path.join(dir, d), { recursive: true });
  fs.copyFileSync(path.join(APP_DIR, 'templates', 'SCENARIO.md'), path.join(dir, 'SCENARIO.md'));
  for (const f of STUDIO_FILES) {
    const p = path.join(dir, f);
    if (fs.existsSync(p)) fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replace(/<film>/g, clean));
  }
  const state = emptyState(clean);
  if (serie) state.serie = serie;
  writeState(slug, state);
  writeMoodboard(slug, state);
  appendJournal(path.join(dir, 'JOURNAL.md'), {
    step: tr('Ouverture'),
    type: '—',
    sent: serie ? tr('Vidéo {lettre} d’une série de 3 ({films}), créée dans la Régie depuis le studio de base', { lettre: serie.lettre, films: serie.films.map((f) => `videos/${f}`).join(', ') }) : tr('Film créé dans la Régie depuis le studio de base'),
    proof: '—',
    result: tr('dossier videos/{slug}', { slug }),
  });
  return slug;
}

// ——— Séries de 3 vidéos ———
// Trois films ordinaires (<nom>-a, -b, -c) qui partagent le brief et les 3 scénarios ; chacun prend un scénario
// et une direction artistique différents, puis suit son propre parcours. La vidéo A porte les actions communes.
export const LETTRES = ['A', 'B', 'C'];

export function createSerie({ title }) {
  const clean = String(title || '').trim();
  if (!clean) throw httpError(400, tr('Donne un nom à la série.'));
  const root = slugify(clean).slice(0, 56);
  const taken = (b) => [b, ...LETTRES.map((l) => `${b}-${l.toLowerCase()}`)].some((x) => fs.existsSync(path.join(VIDEOS, x)));
  let base = root;
  let i = 2;
  while (taken(base)) base = `${root}-${i++}`;
  const films = LETTRES.map((l) => `${base}-${l.toLowerCase()}`);
  films.forEach((slug, k) => createFilm({ title: `${clean} · ${LETTRES[k]}`, slug, serie: { id: base, title: clean, lettre: LETTRES[k], films } }));
  return films[0];
}

// La série d'un film, avec le dossier de chaque vidéo encore présente ; null hors série.
export function serieContext(slug) {
  const s = readState(slug).serie;
  if (!s?.films?.length) return null;
  const films = s.films
    .map((f, k) => ({ slug: f, lettre: LETTRES[k], dir: path.join(VIDEOS, f) }))
    .filter((f) => fs.existsSync(f.dir));
  return films.some((f) => f.slug === slug) ? { id: s.id, title: s.title, lettre: s.lettre, films } : null;
}

// Recopie des fichiers ou dossiers d'une vidéo de la série vers les autres. Les images final-* restent propres à chaque vidéo.
export function syncSerie(fromSlug, rels, toSlugs) {
  const from = filmDir(fromSlug);
  for (const to of toSlugs) {
    const dest = filmDir(to);
    for (const rel of rels) {
      const src = path.join(from, rel);
      if (!fs.existsSync(src)) continue;
      fs.cpSync(src, path.join(dest, rel), {
        recursive: true,
        force: true,
        filter: (p) => !/^final[-_.]/i.test(path.basename(p)) && path.basename(p) !== '.DS_Store',
      });
    }
  }
}

// Le titre du scénario qu'une vidéo de série a pris, d'après la dernière proposition des 3 scénarios.
function serieAngle(state) {
  if (!state.serie) return null;
  const run = [...state.runs].reverse().find((r) => r.action === 'scenarios' && r.status === 'done');
  const o = (run?.handoff?.options || []).find((x) => x.id === state.serie.lettre);
  return o ? o.titre || o.title || null : null;
}

function serieSummary(state) {
  if (!state.serie) return null;
  const { id, title, lettre } = state.serie;
  return { id, title, lettre, angle: serieAngle(state) };
}

// ——— Réglages de Claude ———
const ALLOWED = { effort: ['low', 'medium', 'high', 'xhigh', 'max'], permissionMode: ['auto', 'acceptEdits', 'bypassPermissions'], mcp: ['none', 'all'] };

// Blender se décide pour la série entière : les actions communes tournent dans la vidéo A pour les trois.
export function setSettings(slug, body = {}) {
  const state = updateState(slug, (s) => {
    s.settings = { ...s.settings };
    for (const [k, values] of Object.entries(ALLOWED)) if (values.includes(body[k])) s.settings[k] = body[k];
    if (typeof body.model === 'string') s.settings.model = body.model.trim();
    if (typeof body.blender === 'boolean') s.settings.blender = body.blender;
    return s;
  });
  const serie = serieContext(slug);
  if (serie && typeof body.blender === 'boolean') {
    for (const f of serie.films) if (f.slug !== slug) updateState(f.slug, (s) => { s.settings = { ...s.settings, blender: body.blender }; return s; });
  }
  return state.settings;
}

// ——— Moodboard ———
export function writeMoodboard(slug, state) {
  const dir = filmDir(slug);
  const rows = state.moodboard.map((m) => `| ${m.title.replace(/\|/g, '/')} | ${m.kindLabel || m.kind} | ${(m.note || '—').replace(/\|/g, '/').replace(/\n/g, ' ')} | ${m.source || '—'} |`);
  const md = `# MOODBOARD — ${state.title}

${tr('Sélection faite par l’utilisateur dans la Bibliothèque de la Régie. C’est d’ici que partent le scénario et la direction artistique : ouvre chaque source, regarde ses images et ses vidéos, et respecte la note de l’utilisateur.')}

${rows.length ? `${tr('| Fiche | Type | Note de l’utilisateur | Source |')}\n| --- | --- | --- | --- |\n${rows.join('\n')}` : tr('_Rien de sélectionné pour l’instant._')}
`;
  fs.writeFileSync(path.join(dir, 'MOODBOARD.md'), md);
}

export function setMoodboard(slug, fn) {
  const state = updateState(slug, (s) => { s.moodboard = fn(s.moodboard || []); return s; });
  writeMoodboard(slug, state);
  return state.moodboard;
}

// ——— Outils sans Claude ———
export async function ffprobe(file) {
  try {
    const { stdout } = await run('ffprobe', ['-v', 'error', '-show_entries', 'stream=codec_type,width,height,r_frame_rate,nb_frames:format=duration,size', '-of', 'json', file]);
    const j = JSON.parse(stdout);
    const v = j.streams.find((s) => s.codec_type === 'video');
    const [a, b] = (v?.r_frame_rate || '0/1').split('/').map(Number);
    return { width: v?.width, height: v?.height, fps: b ? Math.round((a / b) * 100) / 100 : null, frames: v?.nb_frames ? Number(v.nb_frames) : null, duration: Number(j.format?.duration) || null, size: Number(j.format?.size) || null, audio: j.streams.some((s) => s.codec_type === 'audio') };
  } catch {
    return null;
  }
}

// Vignette d'un ancien projet : une image du rendu à 3,3 s.
export async function posterFromVideo(slug, rel) {
  const src = resolveInFilm(slug, rel);
  const out = path.join(CACHE_DIR, 'posters', `${slug}.jpg`);
  if (fs.existsSync(out) && statSafe(out).mtimeMs > statSafe(src).mtimeMs) return out;
  fs.mkdirSync(path.dirname(out), { recursive: true });
  await run('ffmpeg', ['-v', 'error', '-y', '-ss', '3.3', '-i', src, '-frames:v', '1', '-vf', 'scale=640:-2', out]);
  return out;
}
