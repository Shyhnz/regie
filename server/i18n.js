// La langue de la Régie : l'anglais par défaut, le français au choix (bouton EN · FR de la barre du haut).
// Elle est gardée avec les films (.regie-app.json), traduit ce que le serveur affiche (étapes, actions, catégories,
// erreurs, journal) et dit à Claude dans quelle langue écrire. Les textes s'écrivent en français dans le code ;
// l'anglais vient de i18n-en.js (clé = le texte français), {nom} pour les valeurs.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './config.js';
import EN from './i18n-en.js';

const FILE = path.join(ROOT, '.regie-app.json');
let lang = null;

const readFile = () => { try { return JSON.parse(fs.readFileSync(FILE, 'utf8')); } catch { return {}; } };

export function getLang() {
  if (process.env.REGIE_LANG) return process.env.REGIE_LANG === 'fr' ? 'fr' : 'en';
  if (!lang) lang = readFile().lang === 'fr' ? 'fr' : 'en';
  return lang;
}

export function setLang(value) {
  lang = value === 'fr' ? 'fr' : 'en';
  fs.mkdirSync(ROOT, { recursive: true });
  fs.writeFileSync(FILE, `${JSON.stringify({ ...readFile(), lang }, null, 1)}\n`);
  return lang;
}

export function tr(fr, vars) {
  let s = getLang() === 'fr' ? fr : (EN[fr] ?? fr);
  if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] ?? m));
  return s;
}
