import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadTimeline } from '../server/timeline.js';
import { STUDIO as USER_STUDIO, STUDIO_TEMPLATE } from '../server/config.js';

// Le studio de l'utilisateur, ou celui livré avec la Régie publiée avant son premier lancement.
const STUDIO = fs.existsSync(USER_STUDIO) ? USER_STUDIO : STUDIO_TEMPLATE;

test('lit la grille, les événements et les repères son du film d’exemple', () => {
  const src = fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures', 'film', 'timeline.js'), 'utf8');
  const t = loadTimeline(src);
  assert.equal(t.fps, 60);
  assert.equal(t.bpm, 120);
  assert.equal(t.duration, 8);
  assert.equal(t.beats, 16);
  const drop = t.events.find((e) => e.id === 'drop');
  assert.equal(drop.frame, 240);
  assert.equal(t.cues.length, 4);
  const boom = t.cues.find((c) => c.event === 'drop');
  assert.equal(boom.kind, 'boom');
  assert.equal(Math.round(boom.t * 60), 241, 'le son tombe 1 image après l’image');
  assert.deepEqual(t.sections.map((s) => s.name), ['intro', 'montee', 'drop', 'final']);
});

test('le gabarit vide se lit sans erreur', () => {
  const src = fs.readFileSync(path.join(STUDIO, 'timeline.js'), 'utf8');
  const t = loadTimeline(src);
  assert.equal(t.bpm, 128);
  assert.equal(t.events.length, 0);
});

test('un fichier cassé renvoie une erreur lisible', () => {
  assert.throws(() => loadTimeline('(function(){ throw new Error("boum") })()'), /timeline\.js/);
});
