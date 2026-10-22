// motion.js — les jetons de mouvement, importés partout. « Utilise seulement ces jetons, aucun nombre en dur. »
// Valeurs de départ : Motion Lab (@flxrnc) ; seuils mesurés de la Bible là où elle a mesuré (entrées 0,2-0,5 s en typo cinétique).
(function (root) {
  // Courbes : équivalents GSAP des cubic-bezier du Motion Lab.
  const EASE = {
    enter: 'expo.out',      // ease-out-expo 0.16,1,0.3,1 : textes et logos qui entrent
    premium: 'power4.out',  // ease-out-quint 0.22,1,0.36,1 : entrées « premium »
    move: 'power3.inOut',   // ease-in-out-quart 0.76,0,0.24,1 : déplacements
    camera: 'power3.inOut', // la caméra prend les courbes les plus douces
    exit: 'expo.in',        // ease-in-expo 0.7,0,0.84,0 : sorties, 40-50 % plus courtes que l'entrée
    pop: 'back.out(1.7)',   // ease-out-back 0.34,1.56,0.64,1 : pop avec dépassement (formes, jamais le texte lu)
    linear: 'none',         // seulement rotation, barre de progression, phase d'une boucle
  };

  // Durées en secondes. Le style choisit la ligne « enter » (guide B).
  const DUR = {
    feedback: 0.15,         // retour d'interface 100-200 ms
    uiMove: 0.35,           // déplacement d'interface 200-500 ms
    enter: 0.3,             // entrée typo cinétique : médiane mesurée 0,30 s (Bible) ; 0,6-0,9 s en film produit 3D lent
    exit: 0.17,             // sortie ≈ 55 % de l'entrée
    hero: 0.75,             // révélation héros d'un film lent (600-900 ms)
  };

  // Décalages (s). L'élément suivant part quand le précédent est à 30-50 %.
  const STAGGER = { letter: 1 / 60, word: 0.09, item: 0.06, secondary: 0.15 };
  const SECONDARY_TRAVEL = 0.6;   // secondaires : 50-70 % de la course du héros
  const AMBIENT_TRAVEL = 0.04;    // ambiant : < 5 % de la course du héros
  const PUSH_HOLD = 0.02;         // tenue vivante : poussée de 2 %
  const PRESS = [1, 0.92, 1];     // appui : échelle 1 → 0,92 → 1

  // Ressort comme fonction pure du temps (aucune simulation) : 0 → 1.
  // zeta : 1 sans rebond (UI, texte), 0,7-0,85 premium, 0,4-0,6 joueur, < 0,3 dessin animé. f : vitesse en Hz.
  function spring(t, zeta = 0.7, f = 2) {
    if (t <= 0) return 0;
    const w = 2 * Math.PI * f;
    if (zeta >= 1) return 1 - Math.exp(-w * t) * (1 + w * t);
    const wd = w * Math.sqrt(1 - zeta * zeta);
    return 1 - Math.exp(-zeta * w * t) * (Math.cos(wd * t) + (zeta * w / wd) * Math.sin(wd * t));
  }
  // Courbe GSAP tirée d'un ressort : ease: springEase(0.6, 2, 0.8) pour un tween de 0,8 s.
  const springEase = (zeta, f, dur) => (p) => (p >= 1 ? 1 : spring(p * dur, zeta, f));
  const SPRING = {
    panel: { zeta: 0.85, f: 2 },
    premium: { zeta: 0.8, f: 2 },
    playful: { zeta: 0.55, f: 2.5 },
  };
  // Taux d'amortissement depuis les réglages d'une bibliothèque (k raideur, d amortissement, m masse).
  const dampingRatio = (k, d, m = 1) => d / (2 * Math.sqrt(k * m));

  // Hasard déterministe.
  function mulberry32(seed) {
    return function () {
      let t = (seed += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  const M = { EASE, DUR, STAGGER, SECONDARY_TRAVEL, AMBIENT_TRAVEL, PUSH_HOLD, PRESS, spring, springEase, SPRING, dampingRatio, mulberry32 };
  if (typeof module !== 'undefined' && module.exports) module.exports = M;
  else root.M = M;
})(typeof window !== 'undefined' ? window : globalThis);
