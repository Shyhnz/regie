// Lecture de SHOTLIST.md : le tableau des plans (rôle timeline) devient des cartes.
// Les en-têtes varient d'un film à l'autre (« Mesure.temps » ou « Temps n »), on les reconnaît par mots clés.

const KEYS = [
  ['n', (h) => h === '#'],
  ['plan', (h) => /^plan/.test(h)],
  ['images', (h) => /images/.test(h)],
  ['beat', (h) => /mesure|temps/.test(h)],
  ['entree', (h) => /entr[ée]e/.test(h)],
  ['sortie', (h) => /sortie/.test(h)],
  ['raison', (h) => /raison/.test(h)],
  ['heros', (h) => /h[ée]ros/.test(h)],
  ['son', (h) => /^son\b/.test(h)],
  ['couture', (h) => /couture/.test(h)],
];

const splitRow = (line) => {
  const cells = line.trim().replace(/^\|/, '').replace(/\|$/, '').split(/(?<!\\)\|/);
  return cells.map((c) => c.trim().replace(/\\\|/g, '|'));
};

const isSeparator = (line) => /^\|?\s*:?-{3,}/.test(line.trim());

export function parseFrames(text) {
  const m = /f?(\d+)\s*[-–—]\s*f?(\d+)/.exec(text || '');
  return m ? { start: Number(m[1]), end: Number(m[2]) } : null;
}

export function parseShotlist(md) {
  const lines = md.split('\n');
  const shots = [];
  let header = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!header) {
      if (line.trim().startsWith('|') && isSeparator(lines[i + 1] || '')) {
        const cols = splitRow(line).map((h) => h.toLowerCase());
        if (cols.includes('#')) { header = cols; i++; }
      }
      continue;
    }
    if (!line.trim().startsWith('|')) break;
    const cells = splitRow(line);
    const shot = { cells: {} };
    header.forEach((h, j) => {
      const value = cells[j] ?? '';
      shot.cells[h] = value;
      const key = KEYS.find(([, match]) => match(h));
      if (key && shot[key[0]] === undefined) shot[key[0]] = value;
    });
    shot.frames = parseFrames(shot.images);
    // « · Blender » dans la colonne Plan : ce plan se fait dans Blender (quand le film l'a activé).
    shot.blender = /\bblender\b/i.test(shot.plan || '');
    const filled = [shot.plan, shot.entree, shot.sortie, shot.raison, shot.heros].some((v) => v && v.length);
    if (filled) shots.push(shot);
  }
  const checks = [...md.matchAll(/^- \[( |x)\] (.+)$/gm)].map((m) => ({ done: m[1] === 'x', text: m[2] }));
  return { header, shots, checks };
}
