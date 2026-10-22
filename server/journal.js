// Les reçus du film : la Régie ajoute une ligne à JOURNAL.md pour chaque action envoyée.
import fs from 'node:fs';

const SECTION = '## Déroulé dans la Régie';
const HEAD = '| Date | Étape | Type | Envoyé | Preuve | Résultat |\n| --- | --- | --- | --- | --- | --- |';

const cell = (s) => String(s ?? '').replace(/\r?\n+/g, ' ').replace(/\|/g, '\\|').trim().slice(0, 400) || '—';

export function journalDate(d = new Date()) {
  return d.toLocaleString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
}

export function addJournalRow(md, row) {
  const text = `| ${[row.date || journalDate(), row.step, row.type, row.sent, row.proof, row.result].map(cell).join(' | ')} |`;
  if (!md.includes(SECTION)) {
    return `${md.replace(/\s*$/, '')}\n\n${SECTION}\n\n${HEAD}\n${text}\n`;
  }
  const lines = md.split('\n');
  const start = lines.findIndex((l) => l.trim() === SECTION);
  let last = start;
  for (let i = start + 1; i < lines.length; i++) {
    if (lines[i].startsWith('|')) last = i;
    else if (last > start && lines[i].trim() !== '') break;
    else if (lines[i].startsWith('#')) break;
  }
  if (last === start) {
    lines.splice(start + 1, 0, '', HEAD, text);
  } else {
    lines.splice(last + 1, 0, text);
  }
  return lines.join('\n');
}

export function appendJournal(file, row) {
  const md = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '# JOURNAL\n';
  fs.writeFileSync(file, addJournalRow(md, row));
}
