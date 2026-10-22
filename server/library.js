// La Bibliothèque : tout ce que la Bible contient de visible (styles, plans, techniques, études, 233 vidéos,
// boucles animées), indexé depuis base-connaissance/ pour orienter un film en un coup d'œil.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { SYNTHESE, METHODE, BIBLE, STYLE_VARIANTS, MEDIA_CACHE, LOOPS, CACHE_DIR } from './config.js';
import { skillsSummary, skillItem } from './skills.js';

export const CATEGORIES = [
  { id: 'styles', label: 'Styles', group: 'Orienter', hint: 'Familles visuelles, guides de style et tes propres variantes.' },
  { id: 'plans', label: 'Plans', group: 'Orienter', hint: 'Les 14 recettes de plans : accroche, révélation, signature…' },
  { id: 'videos', label: 'Vidéos', group: 'Orienter', hint: 'Les 233 vidéos analysées, notées, jouables.' },
  { id: 'transitions', label: 'Transitions', group: 'Effets', chapter: 'c04' },
  { id: 'typo', label: 'Typographie', group: 'Effets', chapter: 'c03' },
  { id: 'formes', label: 'Formes et matières', group: 'Effets', chapter: 'c06' },
  { id: 'camera', label: 'Caméra et 3D', group: 'Effets', chapter: 'c05' },
  { id: 'composition', label: 'Composition', group: 'Effets', chapter: 'c02' },
  { id: 'interfaces', label: 'Données et interfaces', group: 'Effets', chapter: 'c07' },
  { id: 'personnages', label: 'Personnages', group: 'Effets', chapter: 'c08' },
  { id: 'boucles', label: 'Fonds animés', group: 'Effets', hint: '80 boucles en code, prêtes à servir de fond ou de forme.' },
  { id: 'rythme', label: 'Rythme et son', group: 'Construire', chapter: 'c09' },
  { id: 'narration', label: 'Narration', group: 'Construire', chapter: 'c10' },
  { id: 'coherence', label: 'Cohérence et clichés', group: 'Construire', chapter: 'c11' },
  { id: 'methode', label: 'Méthode', group: 'Construire', chapter: 'c12' },
  { id: 'prompts', label: 'Écrire un prompt', group: 'Construire', chapter: 'c13' },
  { id: 'etudes', label: 'Études 60 fps', group: 'Construire', chapter: 'c14' },
  { id: 'skill-prompts', label: 'Prompts', group: 'Skills open source', hint: 'Les prompts et gabarits des 199 skills vidéo open source, par genre, à copier ou à donner au film.' },
  { id: 'skill-regles', label: 'Règles', group: 'Skills open source', hint: 'Le savoir-faire tiré des skills open source, rangé par chapitre de la Bible : une règle, sa recette, sa source.' },
  { id: 'skill-depots', label: 'Dépôts', group: 'Skills open source', hint: 'Ce que fait chaque skill, et comment il est construit : déroulé, contrôles qualité, outils.' },
];

// Le chapitre de la Bible dont chaque catégorie montre aussi les règles venues des skills open source.
const RULES_CHAPTER = { styles: 'c01', composition: 'c02', typo: 'c03', transitions: 'c04', camera: 'c05', formes: 'c06', interfaces: 'c07', personnages: 'c08', rythme: 'c09', narration: 'c10', coherence: 'c11', methode: 'c12', prompts: 'c13', etudes: 'c14' };

const FAMILY = { produit: 'Produit et interfaces', showreel: 'Showreel', explainer: 'Explainer', personnages: 'Personnages', typo: 'Typo cinétique', '3d': '3D', formes: 'Formes' };
const MUSIC = { 'animee-sur-la-musique': 'animée sur la musique', partielle: 'calage partiel', 'sans-musique': 'sans musique', 'musique-posee': 'musique posée', 'voix-off': 'voix off' };

const readText = (p) => { try { return fs.readFileSync(p, 'utf8'); } catch { return null; } };
const readJson = (p) => { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; } };
const listMd = (dir) => { try { return fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort(); } catch { return []; } };
const stripMd = (s) => s.replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[*_`]/g, '').replace(/\s+/g, ' ').trim();

export function mediaUrl(abs) {
  const map = [[SYNTHESE, '/media/bible'], [path.join(BIBLE, 'illustrations'), '/media/illus'], [STYLE_VARIANTS, '/media/variants'], [MEDIA_CACHE, '/media/clips'], [LOOPS, '/media/loops']];
  for (const [root, prefix] of map) {
    if (abs.startsWith(root + path.sep)) return `${prefix}/${abs.slice(root.length + 1).split(path.sep).map(encodeURIComponent).join('/')}`;
  }
  return null;
}

function illusFile(dir, name) {
  for (const ext of ['.jpg', '.png', '.webp']) {
    const p = path.join(dir, 'illus', name + ext);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

// Où regarder une vidéo de référence : le clip en cache sur cette machine, sinon la vidéo d'origine sur prompt-motion.com
// (la Régie publiée ne recopie pas les vidéos des autres, elle les lit à leur source).
let sourcesCache = null;
function sources() {
  if (sourcesCache) return sourcesCache;
  const corpus = readJson(path.join(BIBLE, 'corpus', 'corpus.json')) || readJson(path.join(BIBLE, 'sources.json')) || [];
  sourcesCache = Object.fromEntries(corpus.map((c) => [c.slug, c]));
  return sourcesCache;
}
export function videoSrc(slug) {
  const file = path.join(MEDIA_CACHE, `${slug}.mp4`);
  if (fs.existsSync(file)) return mediaUrl(file);
  return sources()[slug]?.video || null;
}

// La légende d'une illustration cite sa vidéo et son minutage (« [Titre](…/slug), 0:03.57 à 0:04.20 ») :
// on en tire le passage exact, joué en boucle dans la Bibliothèque.
const secs = (m, s) => Number(m) * 60 + Number(s);
export function clipOf(caption) {
  const m = /prompt-motion\.com\/([a-z0-9_-]+-[a-f0-9]{6})\)?[^0-9]{0,6}(\d+):(\d+(?:\.\d+)?)(?:\s*(?:à|-|–)\s*(\d+):(\d+(?:\.\d+)?))?/i.exec(caption);
  if (!m) return null;
  const src = videoSrc(m[1]);
  if (!src) return null;
  const start = secs(m[2], m[3]);
  const end = m[4] ? secs(m[4], m[5]) : start + 2;
  return { slug: m[1], src, start: Math.max(0, start - 0.3), end: Math.max(end + 0.3, start + 0.8) };
}

// Une fiche de la Bible : titre (français + noms anglais), résumé, images, « quand l'utiliser », vidéos citées.
export function parseEntry(md, { dir, file }) {
  const lines = md.split('\n');
  const head = lines.find((l) => l.startsWith('## '));
  let title = head ? head.slice(3).trim() : null;
  let aka = null;
  const m = title && /^(.*?)\s*\(([^()]*(?:\([^()]*\)[^()]*)*)\)\s*$/.exec(title);
  if (m) { title = m[1].trim(); aka = m[2].trim(); }
  if (!title) {
    const named = { 'objet-relais-complement': 'L’objet relais (compléments)', 'plongee-eclair-complement': 'La plongée éclair (compléments)' };
    const key = file.replace(/^\d+-/, '').replace(/\.md$/, '');
    title = named[key] || key.replace(/-complement$/, ' (compléments)').replace(/-/g, ' ');
    title = title.charAt(0).toUpperCase() + title.slice(1);
  }
  const blocks = md.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  const prose = blocks.filter((b) => !b.startsWith('#') && !b.startsWith('|') && !b.startsWith('![') && !b.startsWith('```') && !/^\*\*[^*]+\*\*\s*$/.test(b) && !b.startsWith('- ') && !/^\d+\. /.test(b) && !b.startsWith('*['));
  const summaryBlock = prose.find((b) => !b.startsWith('**')) || prose[0] || '';
  const whenBlock = blocks.find((b) => /^\*\*Quand (l'utiliser|le choisir)/.test(b));
  const images = [];
  const reImg = /!\[([^\]]*)\]\(ILLUS:([^)]+)\)/g;
  let im;
  while ((im = reImg.exec(md))) {
    const after = md.slice(im.index + im[0].length).split('\n').map((l) => l.trim()).filter(Boolean)[0] || '';
    const abs = illusFile(dir, im[2]);
    const clip = after.startsWith('*') ? clipOf(after) : null;
    // Sans l'image extraite (Régie publiée), l'illustration devient le passage de la vidéo d'origine.
    if (abs || clip) images.push({ src: abs ? mediaUrl(abs) : null, alt: im[1], caption: after.startsWith('*') ? stripMd(after) : '', clip });
  }
  const videos = [...new Set([...md.matchAll(/prompt-motion\.com\/([a-z0-9_-]+-[a-f0-9]{6})/gi)].map((x) => x[1]))];
  const seen = /Vue? dans (\d+) vidéos?(?:, dont (\d+) notées? 4 ou 5)?/.exec(md);
  return {
    title,
    aka,
    summary: stripMd(summaryBlock).slice(0, 420),
    when: whenBlock ? stripMd(whenBlock.replace(/^\*\*Quand[^*]*\*\*\s*:?\s*/, '')).slice(0, 360) : null,
    images,
    videos,
    seenIn: seen ? Number(seen[1]) : null,
    goodIn: seen && seen[2] ? Number(seen[2]) : null,
  };
}

function entriesOf(dir, cat, kind) {
  const entriesDir = fs.existsSync(path.join(dir, 'entries')) ? path.join(dir, 'entries') : dir;
  return listMd(entriesDir).map((file) => {
    const abs = path.join(entriesDir, file);
    const e = parseEntry(readText(abs) || '', { dir, file });
    return { id: `${path.basename(dir)}:${file.replace(/\.md$/, '')}`, cat, kind, ...e, source: abs };
  });
}

const VARIANT_NAMES = {
  'editorial-clair': 'Éditorial clair', 'verre-depoli': 'Verre dépoli', 'flat-geometrique': 'Flat géométrique', 'clay-3d-douce': 'Clay 3D douce',
  'suisse-brutaliste': 'Suisse brutaliste', 'dessine-main': 'Dessiné main', 'collage-papier': 'Collage papier', 'retro-y2k': 'Rétro Y2K',
  isometrique: 'Isométrique', 'degrades-vifs': 'Dégradés vifs',
};

// Une image du rendu à mi-parcours, gardée en cache : les variantes n'ont pas de vignette.
function variantPoster(name, clip) {
  const out = path.join(CACHE_DIR, 'posters', `variant-${name}.jpg`);
  if (!fs.existsSync(out)) {
    try {
      fs.mkdirSync(path.dirname(out), { recursive: true });
      execFileSync('ffmpeg', ['-v', 'error', '-y', '-ss', '5', '-i', clip, '-frames:v', '1', '-vf', 'scale=640:-2', out]);
    } catch { return null; }
  }
  return `/media/cache/posters/variant-${name}.jpg`;
}

function styleVariants() {
  let dirs = [];
  try { dirs = fs.readdirSync(STYLE_VARIANTS, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort(); } catch { return []; }
  return dirs.map((name) => {
    const dir = path.join(STYLE_VARIANTS, name);
    const clip = path.join(dir, 'renders', `${name}.mp4`);
    const key = name.replace(/^\d+-/, '');
    const title = VARIANT_NAMES[key] || key.replace(/-/g, ' ');
    const poster = fs.existsSync(clip) ? variantPoster(name, clip) : null;
    return {
      id: `variant:${name}`,
      cat: 'styles',
      kind: 'variant',
      title,
      aka: 'tes variantes de style',
      summary: 'Une des variantes de style de ton studio (videos/style-variants) : une même promo tournée dans un autre style.',
      when: null,
      images: poster ? [{ src: poster, alt: title, caption: '' }] : [],
      clip: fs.existsSync(clip) ? mediaUrl(clip) : null,
      videos: [],
      source: fs.existsSync(clip) ? clip : dir,
    };
  });
}

function videosIndex() {
  const meta = readJson(path.join(SYNTHESE, 'videos.json')) || {};
  const prompts = sources();
  return Object.values(meta).map((v) => {
    const a = readJson(path.join(BIBLE, 'analyses', `${v.slug}.json`)) || {};
    const thumb = path.join(BIBLE, 'illustrations', 'thumbs', `${v.slug}.jpg`);
    const clip = videoSrc(v.slug);
    // Sans vignette locale, la carte montre une image de la vidéo d'origine, prise au premier tiers.
    const still = clip && { slug: v.slug, src: clip, start: Math.min(3, (v.dur || 9) / 3), end: Math.min(3, (v.dur || 9) / 3) + 2 };
    const list = (x) => (Array.isArray(x) ? x.map((y) => (typeof y === 'string' ? y : y.name_fr || y.text || y.what || JSON.stringify(y))) : x ? [String(x)] : []);
    return {
      id: `video:${v.slug}`,
      slug: v.slug,
      cat: 'videos',
      kind: 'video',
      title: v.title,
      handle: v.handle,
      family: v.family,
      familyLabel: FAMILY[v.family] || v.family,
      craft: v.craft,
      music: v.music,
      musicLabel: MUSIC[v.music] || v.music,
      bpm: v.bpm,
      dur: v.dur,
      page: v.page,
      summary: a.summary || '',
      craftReason: a.craft_reason || '',
      steal: list(a.steal).slice(0, 8),
      flaws: list(a.flaws).slice(0, 6),
      techniques: (a.techniques || []).map((t) => t.name_fr).filter(Boolean).slice(0, 16),
      palette: (a.da?.palette || []).slice(0, 8),
      prompt: prompts[v.slug]?.prompt || '',
      images: fs.existsSync(thumb) ? [{ src: mediaUrl(thumb), alt: v.title, caption: '' }] : still ? [{ src: null, alt: v.title, caption: '', clip: still }] : [],
      clip,
      source: path.join(BIBLE, 'analyses', `${v.slug}.json`),
    };
  }).sort((x, y) => (y.craft - x.craft) || x.title.localeCompare(y.title));
}

let cache = null;

export function buildLibrary() {
  const items = [];
  for (const c of CATEGORIES.filter((c) => c.chapter)) {
    const kind = c.id === 'etudes' ? 'etude' : 'technique';
    items.push(...entriesOf(path.join(SYNTHESE, c.chapter), c.id, kind));
  }
  items.push(...entriesOf(path.join(SYNTHESE, 'c01'), 'styles', 'style').filter((e) => !/coherence/.test(e.id)));
  items.push(...entriesOf(path.join(METHODE, 'B'), 'styles', 'guide').map((e) => ({ ...e, aka: e.aka ? `guide de style · ${e.aka}` : 'guide de style' })));
  items.push(...styleVariants());
  items.push(...entriesOf(path.join(METHODE, 'C'), 'plans', 'plan'));
  items.push(...entriesOf(path.join(METHODE, 'E'), 'methode', 'outil'));
  const coherence = entriesOf(path.join(SYNTHESE, 'c01'), 'coherence', 'technique').filter((e) => /coherence/.test(e.id));
  items.push(...coherence);
  const videos = videosIndex();
  const bySlug = Object.fromEntries(videos.map((v) => [v.slug, v]));
  // Études 60 fps : chaque fiche porte la vidéo étudiée dans son nom de fichier.
  for (const it of items) {
    if (it.kind === 'etude') {
      const slug = /\d+-(.+)$/.exec(it.id.split(':')[1])?.[1];
      if (slug && bySlug[slug] && !it.videos.includes(slug)) it.videos.unshift(slug);
    }
    // Les vignettes des vidéos citées servent d'images quand la fiche n'en a pas.
    if (!it.images.length && it.videos.length && bySlug[it.videos[0]]) it.images = bySlug[it.videos[0]].images;
  }
  const counts = Object.fromEntries(CATEGORIES.map((c) => [c.id, 0]));
  for (const it of items) counts[it.cat] = (counts[it.cat] || 0) + 1;
  counts.videos = videos.length;
  counts.boucles = fs.existsSync(LOOPS) ? 80 : 0;
  const skills = skillsSummary();
  if (skills) Object.assign(counts, { 'skill-prompts': skills.prompts, 'skill-regles': skills.rules, 'skill-depots': skills.repos });
  const categories = CATEGORIES
    .filter((c) => (skills || !c.id.startsWith('skill-')) && (c.id !== 'boucles' || counts.boucles))
    .map((c) => ({ ...c, count: counts[c.id] || 0, ...(skills && RULES_CHAPTER[c.id] ? { rulesChapter: RULES_CHAPTER[c.id], rules: skills.byChapter[RULES_CHAPTER[c.id]] || 0 } : {}) }));
  cache = { builtAt: new Date().toISOString(), categories, items, videos, skills: skills && { chapters: skills.chapters, types: skills.types, byType: skills.byType, lots: skills.lots } };
  return cache;
}

export function getLibrary({ refresh = false } = {}) {
  if (!cache || refresh) buildLibrary();
  return cache;
}

export function findItem(id) {
  if (String(id).startsWith('skill:')) return skillItem(id);
  const lib = getLibrary();
  return lib.items.find((i) => i.id === id) || lib.videos.find((v) => v.id === id) || null;
}

// La liste envoyée au navigateur, sans les prompts intégraux (servis à la demande).
export function libraryForClient() {
  const lib = getLibrary();
  return { ...lib, videos: lib.videos.map(({ prompt, ...v }) => ({ ...v, hasPrompt: Boolean(prompt) })) };
}

// Texte complet d'une fiche, images résolues pour le navigateur.
export function itemMarkdown(id) {
  const it = findItem(id);
  if (!it || !it.source || !it.source.endsWith('.md')) return null;
  const md = readText(it.source) || '';
  let dir = path.dirname(it.source);
  if (path.basename(dir) === 'entries') dir = path.dirname(dir);
  // Une image absente (Régie publiée) disparaît du texte ; sa légende garde le lien vers la vidéo et le minutage.
  return md.replace(/!\[[^\]]*\]\(ILLUS:([^)]+)\)\n?/g, (all, name) => {
    const abs = illusFile(dir, name);
    return abs ? all.replace(`ILLUS:${name}`, mediaUrl(abs)) : '';
  });
}
