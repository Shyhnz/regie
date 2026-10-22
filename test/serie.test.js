import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Un dossier racine jetable : un studio de base minimal, aucun lien vers les vrais films.
const root = fs.mkdtempSync(path.join(os.tmpdir(), 'regie-serie-'));
const studio = path.join(root, 'videos', '_studio');
fs.mkdirSync(path.join(studio, 'assets'), { recursive: true });
for (const f of ['BRIEF.md', 'STYLE.md', 'SHOTLIST.md', 'JOURNAL.md']) fs.writeFileSync(path.join(studio, f), `# ${f} — <film>\n`);
process.env.REGIE_ROOT = root;
process.env.REGIE_MEMORY_DIR = path.join(root, 'memory');
process.env.REGIE_CLAUDE_BIN = path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures', 'fake-claude.mjs');

// Les crochets du faux Claude appellent ce petit serveur, qui les passe aux sessions comme le ferait /api/claude/hook.
let F;
let R;
let S;
let hooks;
before(async () => {
  hooks = http.createServer((req, res) => {
    let body = '';
    req.on('data', (c) => { body += c; });
    req.on('end', () => {
      const term = new URL(req.url, 'http://x').searchParams.get('term');
      S.handleHook(term, JSON.parse(body || '{}'));
      res.end();
    });
  });
  await new Promise((r) => hooks.listen(0, '127.0.0.1', r));
  process.env.REGIE_PORT = String(hooks.address().port);
  F = await import('../server/films.js');
  S = await import('../server/sessions.js');
  R = await import('../server/runs.js');
});
after(async () => {
  await S.killAllTerms(2000);
  hooks.close();
  fs.rmSync(root, { recursive: true, force: true });
});

const ended = (id) => new Promise((resolve) => { R.subscribe(id, (e) => { if (e.type === 'end') resolve(e.status); }); });
const read = (slug, rel) => fs.readFileSync(path.join(root, 'videos', slug, rel), 'utf8');
const trace = (slug) => JSON.parse(read(slug, '.regie/fake-last.json'));

test('une série crée 3 vidéos A, B, C qui se connaissent', () => {
  const first = F.createSerie({ title: 'Lancement Test' });
  assert.equal(first, 'lancement-test-a');
  const ctx = F.serieContext('lancement-test-b');
  assert.equal(ctx.lettre, 'B');
  assert.deepEqual(ctx.films.map((f) => f.slug), ['lancement-test-a', 'lancement-test-b', 'lancement-test-c']);
  assert.match(read('lancement-test-b', 'BRIEF.md'), /Lancement Test · B/);
  assert.equal(F.listFilms().filter((f) => f.serie?.id === 'lancement-test').length, 3);
  assert.equal(F.createSerie({ title: 'Lancement Test' }), 'lancement-test-2-a', 'une deuxième série ne réutilise pas les dossiers');
});

test('Blender se règle pour toute la série, les autres réglages pour la seule vidéo', () => {
  F.setSettings('lancement-test-b', { blender: true, effort: 'low' });
  for (const x of ['a', 'b', 'c']) assert.equal(F.readState(`lancement-test-${x}`).settings.blender, true);
  assert.equal(F.readState('lancement-test-b').settings.effort, 'low');
  assert.equal(F.readState('lancement-test-a').settings.effort, undefined);
  F.setSettings('lancement-test-c', { blender: false, effort: 'n importe quoi' });
  for (const x of ['a', 'b', 'c']) assert.equal(F.readState(`lancement-test-${x}`).settings.blender, false);
  assert.equal(F.readState('lancement-test-c').settings.effort, undefined, 'une valeur inconnue est ignorée');
  F.setSettings('lancement-test-b', { effort: 'high' });
});

test('une action commune lancée depuis B tourne dans A et se recopie dans B et C', async () => {
  const rec = R.startRun('lancement-test-b', { actionId: 'scenarios', input: {} });
  assert.equal(rec.slug, 'lancement-test-a');
  assert.equal(R.activeRun('lancement-test-c')?.id, rec.id, 'C voit l’action commune en cours');
  assert.throws(() => R.startRun('lancement-test-c', { actionId: 'decoupage' }), /commune aux 3 vidéos/);
  assert.equal(await ended(rec.id), 'done');
  assert.equal(read('lancement-test-c', 'SCENARIO.md'), '# Trois scénarios de test\n');
  const mirror = F.readState('lancement-test-b').runs.find((r) => r.id === rec.id);
  assert.equal(mirror.mirrorOf, 'lancement-test-a');
  assert.equal(mirror.status, 'done');
  assert.equal(F.getFilm('lancement-test-b').serie.angle, 'La course');
  assert.equal(R.activeRun('lancement-test-c'), null);
  assert.ok(R.replayRun('lancement-test-b', rec.id).some((e) => e.type === 'end'), 'le flux se rejoue depuis B');
  const { args, prompt } = trace('lancement-test-a');
  assert.match(prompt, /vaut pour les 3 vidéos/);
  assert.match(prompt, new RegExp(`\\[Régie · action ${rec.id}\\]`));
  assert.match(prompt, /scénario A → vidéo A/);
  const dirs = args.slice(args.indexOf('--add-dir') + 1);
  assert.ok(dirs.includes(path.join(root, 'videos', 'lancement-test-c')), 'les autres vidéos sont lisibles');
  assert.match(read('lancement-test-c', 'JOURNAL.md'), /commune aux 3 vidéos/);
});

test('« Lancer sur les 3 » : chaque vidéo développe son propre scénario', async () => {
  const { started, skipped } = R.startSerieRuns('lancement-test-c', { actionId: 'scenario_final', input: { notes: 'plus sec' } });
  assert.equal(started.length, 3);
  assert.equal(skipped.length, 0);
  await Promise.all(started.map((r) => ended(r.id)));
  for (const L of ['a', 'b', 'c']) {
    const { prompt, system } = trace(`lancement-test-${L}`);
    assert.match(prompt, new RegExp(`Choix de l'utilisateur : ${L.toUpperCase()}`));
    assert.match(prompt, /plus sec/);
    assert.match(system, new RegExp(`vidéo ${L.toUpperCase()} d'une série`));
  }
  assert.throws(() => R.startSerieRuns('lancement-test-a', { actionId: 'build_shot' }), /ne se lance pas sur les 3/);
});

test('les 3 directions se recopient, sauf la direction retenue propre à chaque vidéo', async () => {
  fs.mkdirSync(path.join(root, 'videos', 'lancement-test-b', 'reviews', 'da'), { recursive: true });
  fs.writeFileSync(path.join(root, 'videos', 'lancement-test-b', 'reviews', 'da', 'final-1.png'), 'final de la vidéo B');
  const rec = R.startRun('lancement-test-c', { actionId: 'directions', input: {} });
  assert.equal(await ended(rec.id), 'done');
  assert.equal(read('lancement-test-b', 'reviews/da/C-1.png'), 'da C');
  assert.equal(read('lancement-test-b', 'reviews/da/final-1.png'), 'final de la vidéo B');
  assert.ok(!fs.existsSync(path.join(root, 'videos', 'lancement-test-c', 'reviews', 'da', 'final-1.png')));
  assert.match(trace('lancement-test-a').prompt, /lancement-test-b\/SCENARIO\.md/);
});

test('un message tapé dans la session devient une action « message » avec son reçu', async () => {
  const t = S.getTerm('lancement-test-a', 'scenario');
  assert.ok(t && !t.exited, 'la session de l’étape est restée ouverte');
  const before = F.readState('lancement-test-a').runs.length;
  t.pty.write('\x1b[200~Raccourcis le scénario A\x1b[201~\r');
  const rec = await new Promise((resolve) => {
    const tick = () => { const r = F.readState('lancement-test-a').runs[before]; if (r && r.status !== 'running') resolve(r); else setTimeout(tick, 50); };
    tick();
  });
  assert.equal(rec.action, 'message');
  assert.equal(rec.free, true);
  assert.equal(rec.label, 'Raccourcis le scénario A');
  assert.equal(rec.status, 'done');
  assert.equal(rec.handoff?.run, 'libre');
  assert.equal(F.readState('lancement-test-a').sessions.scenario, t.sessionId, 'la conversation de l’étape est gardée');
});

test('Arrêter interrompt la session et clôt l’action', async () => {
  process.env.FAKE_DELAY_MS = '4000';
  const rec = R.startRun('lancement-test-b', { actionId: 'decoupage', input: {} });
  delete process.env.FAKE_DELAY_MS;
  await new Promise((r) => setTimeout(r, 600));
  assert.equal(R.stopRun(rec.id), true);
  assert.equal(await ended(rec.id), 'stopped');
  assert.equal(F.readState('lancement-test-b').runs.find((r) => r.id === rec.id).status, 'stopped');
});
