import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

// Un dossier racine jetable : aucun lien vers les vrais films.
const root = fs.mkdtempSync(path.join(os.tmpdir(), 'regie-etapes-'));
fs.mkdirSync(path.join(root, 'videos', '_studio'), { recursive: true });
process.env.REGIE_ROOT = root;
process.env.REGIE_MEMORY_DIR = path.join(root, 'memory');

let F;
before(async () => { F = await import('../server/films.js'); });
after(() => fs.rmSync(root, { recursive: true, force: true }));

const run = (step, action, status = 'done') => ({ step, action, status });
const statuses = (runs, done = {}) => Object.fromEntries(F.stepStatuses({ runs, done }).map((s) => [s.id, s.status]));

test('sans rien de fait, le scénario est en cours et le reste à faire', () => {
  assert.deepEqual(statuses([]), { scenario: 'current', storyboard: 'todo', plans: 'todo', musique: 'todo', final: 'todo' });
});

test('une étape est faite quand son action de fin a abouti', () => {
  const s = statuses([run('scenario', 'brief'), run('scenario', 'scenarios'), run('scenario', 'scenario_final')]);
  assert.equal(s.scenario, 'done');
  assert.equal(s.storyboard, 'current');
  assert.equal(statuses([run('scenario', 'scenario_final', 'error')]).scenario, 'current', 'une action de fin en erreur ne finit pas l’étape');
});

test('passer à une étape suivante vaut accord pour les précédentes', () => {
  const s = statuses([run('scenario', 'brief'), run('plans', 'build_shot')]);
  assert.equal(s.scenario, 'done');
  assert.equal(s.storyboard, 'done');
  assert.equal(s.plans, 'current');
});

test('revenir refaire une action montre Claude au travail sans rouvrir l’étape', () => {
  const s = statuses([run('scenario', 'scenario_final'), run('storyboard', 'storyboard'), run('scenario', 'scenario_final', 'running')]);
  assert.equal(s.scenario, 'running');
  assert.equal(s.storyboard, 'done');
  assert.equal(s.plans, 'current');
});

test('un film d’avant garde ses étapes : la dernière porte franchie marque l’étape faite', () => {
  const dir = path.join(root, 'videos', 'ancien', '.regie');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'state.json'), JSON.stringify({ title: 'Ancien', runs: [], gates: { p1: { at: '2026-10-20T10:00:00Z' }, p2: { at: '2026-10-20T11:00:00Z' }, p3: { at: '2026-10-20T12:00:00Z' } } }));
  const state = F.readState('ancien');
  assert.equal(state.gates, undefined);
  assert.deepEqual(state.done, { scenario: '2026-10-20T10:00:00Z', storyboard: '2026-10-20T11:00:00Z' });
  assert.deepEqual(F.stepStatuses(state).map((s) => s.status), ['done', 'done', 'current', 'todo', 'todo']);
});
