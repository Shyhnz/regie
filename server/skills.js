// Les skills vidéo open source rangés dans la Bible (10 lots) : règles par chapitre, prompts, fiches de dépôts.
// Lus depuis apports/index.json (écrit par awesome-video-skills/_methode/tools/apports.py), relu quand le fichier change.
import fs from 'node:fs';
import path from 'node:path';
import { APPORTS, SKILLS } from './config.js';

const INDEX = path.join(APPORTS, 'index.json');
let cache = null;

// Sans accents ni casse : « fondu enchaine » trouve « Fondu enchaîné ».
export const fold = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const matches = (hay, q) => fold(q).split(/\s+/).filter(Boolean).every((w) => hay.includes(w));

function load() {
  let mtime = 0;
  try { mtime = fs.statSync(INDEX).mtimeMs; } catch { return null; }
  if (cache && cache.mtime === mtime) return cache;
  let d;
  try { d = JSON.parse(fs.readFileSync(INDEX, 'utf8')); } catch { return null; }
  const rules = d.rules.map((r) => ({ ...r, hay: fold(`${r.title} ${r.consigne} ${r.recette} ${r.repo}`) }));
  const prompts = d.prompts.map((p) => ({ ...p, hay: fold(`${p.title} ${p.resume} ${p.repo} ${p.type}`) }));
  const repos = d.repos.map((r) => ({ ...r, hay: fold(`${r.repo} ${r.resume} ${r.architecture?.organisation || ''}`) }));
  cache = { mtime, stats: d.stats, chapters: d.chapters, types: d.types, rules, prompts, repos, repoById: new Map(repos.map((r) => [r.repo, r])) };
  return cache;
}

export function skillsSummary() {
  const s = load();
  return s ? { ...s.stats, chapters: s.chapters, types: s.types } : null;
}

const page = (list, offset, limit) => ({ total: list.length, items: list.slice(offset, offset + limit) });
const clean = ({ hay, analysis, k, ...x }) => x;

export function searchRules({ chapter = '', q = '', statut = '', repo = '', offset = 0, limit = 40 } = {}) {
  const s = load();
  if (!s) return { total: 0, items: [] };
  const list = s.rules.filter((r) => (!chapter || r.chapter === chapter) && (!statut || r.statut === statut) && (!repo || r.repo === repo) && (!q || matches(r.hay, q)));
  const res = page(list, offset, limit);
  return { ...res, items: res.items.map(clean) };
}

export function searchPrompts({ type = '', q = '', repo = '', offset = 0, limit = 40 } = {}) {
  const s = load();
  if (!s) return { total: 0, items: [], byType: {} };
  const found = s.prompts.filter((p) => (!repo || p.repo === repo) && (!q || matches(p.hay, q)));
  const byType = {};
  for (const p of found) byType[p.type] = (byType[p.type] || 0) + 1;
  const res = page(type ? found.filter((p) => p.type === type) : found, offset, limit);
  return { ...res, items: res.items.map(clean), byType };
}

export function listRepos({ q = '', verdict = '' } = {}) {
  const s = load();
  if (!s) return { total: 0, items: [] };
  const items = s.repos
    .filter((r) => (!verdict || r.verdict === verdict) && (!q || matches(r.hay, q)))
    .map((r) => ({ id: r.id, repo: r.repo, url: r.url, verdict: r.verdict, verdictLabel: r.verdictLabel, resume: r.resume, lot: r.lot, type: r.architecture?.type || '', prompts: r.prompts.length, rules: Object.values(r.rules).reduce((a, b) => a + b, 0) }));
  return { total: items.length, items };
}

// Une fiche complète, au format des fiches de la Bibliothèque (titre, résumé, source) pour la sélection d'un film.
// Identifiants : skill:prompt:<id>, skill:repo:<id>, skill:rule:<id>.
export function skillItem(fullId) {
  const s = load();
  const m = /^skill:(prompt|repo|rule):([a-z0-9]+)$/.exec(fullId || '');
  if (!s || !m) return null;
  const [, kind, id] = m;
  if (kind === 'prompt') {
    const p = s.prompts.find((x) => x.id === id);
    if (!p) return null;
    let text = '';
    try { text = JSON.parse(fs.readFileSync(path.join(SKILLS, p.analysis), 'utf8')).prompts[p.k]?.texte || ''; } catch { /* analyse illisible */ }
    return {
      ...clean(p), id: fullId, cat: 'skill-prompts', kind: 'skill-prompt', summary: p.resume, typeLabel: s.types[p.type] || p.type, text,
      images: [], videos: [], source: p.file ? path.join(SKILLS, p.file) : p.url,
    };
  }
  if (kind === 'repo') {
    const r = s.repos.find((x) => x.id === id);
    if (!r) return null;
    const prompts = r.prompts.map((pid) => s.prompts.find((p) => p.id === pid)).filter(Boolean).map((p) => ({ id: `skill:prompt:${p.id}`, title: p.title, type: p.type }));
    return {
      ...clean(r), id: fullId, cat: 'skill-depots', kind: 'skill-repo', title: r.repo, summary: r.resume, prompts,
      images: [], videos: [], source: `${path.join(APPORTS, 'depots.md')} — fiche « ${r.repo} » (${r.url})`,
    };
  }
  const r = s.rules.find((x) => x.id === id);
  if (!r) return null;
  return {
    ...clean(r), id: fullId, cat: 'skill-regles', kind: 'skill-rule', summary: r.consigne, chapterLabel: s.chapters[r.chapter],
    images: [], videos: [], source: `${path.join(APPORTS, `${r.chapter}.md`)} — règle « ${r.title} » (${r.url})`,
  };
}
