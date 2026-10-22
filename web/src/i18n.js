// Les langues de l'interface. Chaque texte s'écrit en français dans le code : t('Nouvelles vidéos') ; l'anglais vient
// du dictionnaire i18n/en.js (clé = le texte français), {nom} pour les valeurs. La langue est un réglage du serveur
// (/api/lang, l'anglais par défaut) : à chaque changement, l'app se redessine en entier (voir App.jsx).
import EN from './i18n/en.js';

let current = 'en';
export const getLang = () => current;
export function setLang(lang) {
  current = lang === 'fr' ? 'fr' : 'en';
  if (typeof document !== 'undefined') document.documentElement.lang = current;
}
export const locale = () => (current === 'fr' ? 'fr-FR' : 'en-US');

export function t(fr, vars) {
  let s = current === 'fr' ? fr : (EN[fr] ?? fr);
  if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] ?? m));
  return s;
}
