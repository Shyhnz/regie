import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildLibrary, itemMarkdown } from '../server/library.js';
import { STYLE_VARIANTS } from '../server/config.js';
import fs from 'node:fs';

// Deux dispositions : ici, les images extraites et les clips en cache ; dans la Régie publiée, ni l'un ni l'autre,
// et chaque illustration devient le passage de la vidéo d'origine, lue sur prompt-motion.com.
const LOCAL_ILLUS = /^\/media\/(bible|illus)\//;
const REMOTE_OR_CACHE = /^(\/media\/clips\/|https:\/\/media\.prompt-motion\.com\/)/;
const shown = (im) => (im.src ? LOCAL_ILLUS.test(im.src) : REMOTE_OR_CACHE.test(im.clip?.src || ''));

const lib = buildLibrary();
const byId = (id) => lib.items.find((i) => i.id === id);

test('indexe les catégories de la Bible', () => {
  const count = (cat) => lib.items.filter((i) => i.cat === cat).length;
  assert.equal(lib.videos.length, 233);
  assert.equal(count('transitions'), 14);
  assert.equal(count('plans'), 14);
  assert.ok(count('styles') >= 11 + 6 + (fs.existsSync(STYLE_VARIANTS) ? 10 : 0), `styles : ${count('styles')}`);
  assert.equal(count('etudes'), 20);
});

test('une fiche de transition a titre, noms anglais, images et vidéos citées', () => {
  const it = byId('c04:03-compression-eclosion');
  assert.match(it.title, /^La compression/);
  assert.match(it.aka, /implode to a point/);
  assert.equal(it.images.length, 2);
  assert.ok(it.images.every(shown));
  if (it.images[0].src) assert.match(it.images[0].src, /^\/media\/bible\/c04\/illus\/compression-eclosion-1\.jpg$/);
  assert.match(it.images[0].caption, /Bento\.surf/);
  assert.ok(it.videos.includes('bizibeast-10f264'));
  assert.equal(it.seenIn, 66);
});

test('la légende donne le passage exact de la vidéo citée', () => {
  const it = byId('c04:03-compression-eclosion');
  const clip = it.images[0].clip;
  if (!clip) return; // clips absents du cache sur cette machine
  assert.equal(clip.slug, 'bizibeast-10f264');
  assert.ok(Math.abs(clip.start - (3.57 - 0.3)) < 0.01);
  assert.ok(Math.abs(clip.end - (4.2 + 0.3)) < 0.01);
  assert.match(clip.src, /(^\/media\/clips\/bizibeast-10f264\.mp4|^https:\/\/media\.prompt-motion\.com\/.+\.mp4)$/);
});

test('une recette de plan a son « quand l’utiliser »', () => {
  const it = byId('C:01-accroche');
  assert.match(it.when, /toujours en plan 1/);
  assert.ok(shown(it.images[0]));
  if (it.images[0].src) assert.match(it.images[0].src, /methode\/C\/illus\/C01-accroche\.jpg$/);
});

test('les vidéos portent note, famille, vignette et clip local', () => {
  const v = lib.videos.find((x) => x.slug === 'zheke-38deff');
  assert.equal(v.craft, 5);
  assert.ok(v.images[0].src ? v.images[0].src.startsWith('/media/illus/thumbs/') : REMOTE_OR_CACHE.test(v.images[0].clip.src));
  assert.ok(v.clip === null || REMOTE_OR_CACHE.test(v.clip));
  assert.ok(v.summary.length > 20);
});

test('le texte complet remplace ILLUS par une adresse', () => {
  const md = itemMarkdown('c04:03-compression-eclosion');
  assert.ok(!md.includes('ILLUS:'));
  const local = byId('c04:03-compression-eclosion').images[0].src;
  if (local) assert.ok(md.includes('/media/bible/c04/illus/compression-eclosion-1.jpg'));
  else assert.ok(md.includes('prompt-motion.com/'), 'la légende garde le lien vers la vidéo d’origine');
});
