import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Un dossier racine jetable : la langue y est gardée (.regie-app.json).
const root = fs.mkdtempSync(path.join(os.tmpdir(), 'regie-i18n-'));
fs.mkdirSync(path.join(root, 'videos', '_studio'), { recursive: true });
process.env.REGIE_ROOT = root;
process.env.REGIE_MEMORY_DIR = path.join(root, 'memory');
delete process.env.REGIE_LANG;
const APP = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

let I;
let P;
before(async () => { I = await import('../server/i18n.js'); P = await import('../server/prompts.js'); });
after(() => fs.rmSync(root, { recursive: true, force: true }));

// Les textes passés à t('…') ou tr('…') dans des fichiers : la clé de chaque traduction.
function literals(files, fn) {
  const keys = new Set();
  const re = new RegExp(`\\b${fn}\\(\\s*(['"])((?:\\\\.|(?!\\1).)*)\\1`, 'g');
  for (const f of files) for (const m of fs.readFileSync(f, 'utf8').matchAll(re)) keys.add(m[2].replace(/\\'/g, "'").replace(/\\"/g, '"'));
  return keys;
}
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));

test('l’anglais par défaut, le français au choix, gardé avec les films', () => {
  assert.equal(I.getLang(), 'en');
  assert.equal(I.tr('Plan par plan'), 'Shot by shot');
  assert.equal(I.tr('Film introuvable : {slug}', { slug: 'x' }), 'Film not found: x');
  assert.equal(I.tr('un texte sans traduction'), 'un texte sans traduction', 'sans traduction, le français reste');
  I.setLang('fr');
  assert.equal(I.tr('Plan par plan'), 'Plan par plan');
  assert.equal(JSON.parse(fs.readFileSync(path.join(root, '.regie-app.json'), 'utf8')).lang, 'fr');
  I.setLang('en');
});

test('Claude écrit dans la langue de l’app, et la consigne tapée dans le panneau commence dans cette langue', () => {
  const film = { slug: 'f', title: 'F' };
  assert.match(P.systemPrompt({ film, step: P.STEPS[0] }), /écris en anglais/);
  const m = P.actionMessage({ runId: 'r1', step: P.STEPS[0], label: 'Propose 3 scenarios', body: 'CORPS' });
  assert.match(m, /^\[Régie · action r1\] Step 1 · Scenario — “Propose 3 scenarios”\./);
  I.setLang('fr');
  assert.match(P.systemPrompt({ film, step: P.STEPS[0] }), /Écris en français/);
  I.setLang('en');
});

test('chaque texte de l’interface a sa traduction anglaise', async () => {
  const EN = (await import('../web/src/i18n/en.js')).default;
  const files = walk(path.join(APP, 'web', 'src')).filter((f) => /\.jsx?$/.test(f) && !f.includes(`${path.sep}i18n`));
  const missing = [...literals(files, 't')].filter((k) => !(k in EN));
  assert.deepEqual(missing, []);
});

test('chaque texte affiché par le serveur a sa traduction anglaise', async () => {
  const EN = (await import('../server/i18n-en.js')).default;
  const files = walk(path.join(APP, 'server')).filter((f) => f.endsWith('.js') && !f.includes('i18n'));
  const missing = [...literals(files, 'tr')].filter((k) => !(k in EN));
  assert.deepEqual(missing, []);
  for (const s of P.STEPS) for (const k of ['title', 'phases', 'goal']) assert.ok(s[k] in EN, s[k]);
  for (const a of Object.values(P.ACTIONS)) for (const k of ['label', 'hint', 'labelSerie', 'hintSerie']) if (a[k]) assert.ok(a[k] in EN, a[k]);
});
