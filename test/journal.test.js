import { test } from 'node:test';
import assert from 'node:assert/strict';
import { addJournalRow } from '../server/journal.js';

const row = (sent) => ({ date: '21 oct.', step: 'Scénario', type: 'action', sent, proof: '—', result: 'ok' });

test('crée la section puis ajoute les lignes à la suite', () => {
  let md = '# JOURNAL\n\n| a | b |\n| --- | --- |\n| 1 | 2 |\n\n## Bilan\n- x\n';
  md = addJournalRow(md, row('premier'));
  md = addJournalRow(md, row('second | avec barre'));
  const lines = md.split('\n');
  const i = lines.findIndex((l) => l.includes('premier'));
  assert.ok(lines[i + 1].includes('second \\| avec barre'));
  assert.equal(md.match(/## Déroulé dans la Régie/g).length, 1);
});

test('insère dans la section même si du texte la suit', () => {
  let md = addJournalRow('# J\n', row('un'));
  md += '\n## Autre\ntexte\n';
  md = addJournalRow(md, row('deux'));
  assert.ok(md.indexOf('deux') < md.indexOf('## Autre'));
});
