import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseShotlist } from '../server/shotlist.js';
import { STUDIO as USER_STUDIO, STUDIO_TEMPLATE } from '../server/config.js';

// Le studio de l'utilisateur, ou celui livré avec la Régie publiée avant son premier lancement.
const STUDIO = fs.existsSync(USER_STUDIO) ? USER_STUDIO : STUDIO_TEMPLATE;

const fixture = (f) => fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures', 'film', f), 'utf8');

test('lit les plans du film d’exemple avec leurs images globales', () => {
  const { shots, checks } = parseShotlist(fixture('SHOTLIST.md'));
  assert.equal(shots.length, 4);
  assert.equal(shots[0].n, '1');
  assert.equal(shots[0].plan, 'C01 Accroche');
  assert.deepEqual(shots[0].frames, { start: 0, end: 120 });
  assert.deepEqual(shots[3].frames, { start: 360, end: 480 });
  assert.match(shots[2].raison, /preuve chiffrée/);
  assert.match(shots[0].couture, /post-it se plie/);
  assert.equal(checks.length, 3);
  assert.equal(checks.at(-1).done, false);
});

test('« · Blender » dans la colonne Plan marque un plan fait dans Blender', () => {
  const md = '| # | Plan | Images |\n| --- | --- | --- |\n| 1 | C14 Produit 3D · Blender | f0-f60 |\n| 2 | C01 Accroche | f60-f120 |';
  assert.deepEqual(parseShotlist(md).shots.map((s) => s.blender), [true, false]);
});

test('le gabarit du studio ne donne aucun plan rempli', () => {
  const md = fs.readFileSync(path.join(STUDIO, 'SHOTLIST.md'), 'utf8');
  const { shots } = parseShotlist(md);
  assert.equal(shots.length, 0);
});

test('accepte les tirets variés et un tableau sans images', () => {
  const md = '| # | Plan | Images | Raison |\n| --- | --- | --- | --- |\n| 1 | A | f10-f20 | x |\n| 2 | B | f20 — f40 | y |\n| 3 | C | | z |';
  const { shots } = parseShotlist(md);
  assert.deepEqual(shots.map((s) => s.frames), [{ start: 10, end: 20 }, { start: 20, end: 40 }, null]);
});
