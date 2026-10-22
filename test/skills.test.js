import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

// Une petite base de skills open source, au format écrit par awesome-video-skills/_methode/tools/apports.py.
const root = fs.mkdtempSync(path.join(os.tmpdir(), 'regie-skills-'));
const skills = path.join(root, 'base-connaissance', 'awesome-video-skills');
fs.mkdirSync(path.join(skills, 'apports'), { recursive: true });
fs.mkdirSync(path.join(skills, 'analyses'), { recursive: true });
fs.mkdirSync(path.join(root, 'videos', '_studio'), { recursive: true });
fs.writeFileSync(path.join(skills, 'analyses', 'moi_kit.json'), JSON.stringify({ prompts: [{ titre: 'Gabarit promo', texte: 'You are a director.' }] }));
const rule = (id, chapter, title, extra = {}) => ({ id, chapter, title, statut: 'nouveau', consigne: 'Consigne.', recette: '', repo: 'moi/kit', url: 'https://github.com/moi/kit', lot: 1, ...extra });
fs.writeFileSync(path.join(skills, 'apports', 'index.json'), JSON.stringify({
  stats: { repos: 1, rules: 3, prompts: 1, byChapter: { c04: 2, c09: 1 }, byType: { 'promo-produit': 1 }, lots: 1 },
  chapters: { c04: 'Transitions', c09: 'Timing, rythme et son' },
  types: { 'promo-produit': 'Promo produit' },
  rules: [rule('a1', 'c04', 'Fondu enchaîné par un creux'), rule('a2', 'c04', 'Coupe sur le temps', { statut: 'complement' }), rule('a3', 'c09', 'Loudness à −14 LUFS')],
  prompts: [{ id: 'p1', type: 'promo-produit', title: 'Gabarit promo', resume: 'Une démo SaaS.', langue: 'en', repo: 'moi/kit', url: 'u', file: null, analysis: 'analyses/moi_kit.json', k: 0, size: 19, lot: 1 }],
  repos: [{ id: 'r1', repo: 'moi/kit', url: 'u', verdict: 'riche', verdictLabel: 'Riche', resume: 'Un kit.', lot: 1, rules: { c04: 2, c09: 1 }, prompts: ['p1'], architecture: { type: 'skill unique' } }],
}));
process.env.REGIE_ROOT = root;
process.env.REGIE_MEMORY_DIR = path.join(root, 'memory');

let K;
let L;
before(async () => { K = await import('../server/skills.js'); L = await import('../server/library.js'); });
after(() => fs.rmSync(root, { recursive: true, force: true }));

test('la recherche ignore les accents et la casse, et filtre par chapitre et par nature', () => {
  assert.deepEqual(K.searchRules({ q: 'fondu enchaine' }).items.map((r) => r.id), ['a1']);
  assert.equal(K.searchRules({ chapter: 'c04' }).total, 2);
  assert.deepEqual(K.searchRules({ chapter: 'c04', statut: 'complement' }).items.map((r) => r.id), ['a2']);
  assert.equal(K.searchRules({ q: 'lufs', chapter: 'c04' }).total, 0);
  assert.equal(K.searchRules({ chapter: 'c04', limit: 1 }).items.length, 1);
  assert.equal(K.searchRules({}).items[0].hay, undefined, 'le texte de recherche reste sur le serveur');
});

test('un prompt se lit en entier, un dépôt liste ses prompts', () => {
  const p = K.skillItem('skill:prompt:p1');
  assert.equal(p.text, 'You are a director.');
  assert.equal(p.kind, 'skill-prompt');
  assert.deepEqual(K.skillItem('skill:repo:r1').prompts, [{ id: 'skill:prompt:p1', title: 'Gabarit promo', type: 'promo-produit' }]);
  assert.match(K.skillItem('skill:rule:a3').source, /apports\/c09\.md — règle « Loudness à −14 LUFS »/);
  assert.equal(K.skillItem('skill:rule:zz'), null);
  assert.equal(K.searchPrompts({ q: 'saas' }).byType['promo-produit'], 1);
});

test('la Bibliothèque compte les skills et les trouve comme des fiches', () => {
  const lib = L.getLibrary({ refresh: true });
  const cat = (id) => lib.categories.find((c) => c.id === id);
  assert.equal(cat('skill-regles').count, 3);
  assert.equal(cat('skill-depots').count, 1);
  assert.equal(cat('transitions').rules, 2);
  assert.equal(L.findItem('skill:rule:a1').title, 'Fondu enchaîné par un creux');
});
