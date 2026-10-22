## La timeline unique et les jetons de mouvement (single timeline file, motion tokens)

Deux fichiers portent tous les nombres du film. `timeline.js` est la seule source du temps : grille, événements, ancres de mise en page en pixels, repères son. L'image, le son et la 3D le lisent (P : « une mise en page, trois lecteurs ; les pixels sont l'API »). `motion.js` porte les seuls nombres de mouvement : courbes, durées, décalages, ressorts (F : « utilise seulement ces jetons, aucun nombre en dur »). Une correction touche donc une seule valeur, au bon endroit.

**Quand s'en servir** : rempli en phases 3 et 4, lu par tout le code dès la phase 5 et par le script son en phase 8.

**`timeline.js`**

```js
// timeline.js — la seule source du temps du film (rôle : timeline).
// Lu par la composition (window.T) ET par le script son (node : require('./timeline.js')).
// « Une mise en page, trois lecteurs » : grille, événements, ancres en pixels, repères son.
(function (root) {
  const FPS = 60;
  const BPM = 128;              // à choisir pour que la durée fasse des mesures entières
  const BEATS_PER_BAR = 4;
  const BARS = 8;               // 8 mesures à 128 BPM = 15,0 s
  const BEAT = 60 / BPM;        // 0,46875 s
  const DURATION = BARS * BEATS_PER_BAR * BEAT;

  // Temps (s) du temps n, compté depuis 0 ; mesure et temps commencent à 1.
  const beat = (n) => n * BEAT;
  const at = (bar, b = 1) => beat((bar - 1) * BEATS_PER_BAR + (b - 1));
  // Image globale d'un instant : chaque temps est arrondi seul, jamais un pas arrondi additionné.
  const frame = (t) => Math.round(t * FPS);

  // Ancres de mise en page, en pixels du canevas 1920×1080 (origine en haut à gauche).
  const LAYOUT = {
    W: 1920, H: 1080, margin: 96,
    // headline: { x: 160, y: 380, w: 1600, lines: 2, size: 140 },
  };

  // Événements image : id, instant, ce qui change. Un temps qui ne change rien n'a pas sa place.
  const EVENTS = [
    // { id: 'hook-word-1', t: at(1, 1), what: 'premier mot de l’accroche' },
  ];

  // Repères son : chacun pointe un événement image. Le son tombe 1 image APRÈS l'image (la lumière d'abord).
  const SOUND_LEAD_FRAMES = 1;
  const CUES = [
    // { event: 'hook-word-1', kind: 'click', gain: 0 },
  ];
  const cueTime = (c) => {
    const e = EVENTS.find((x) => x.id === c.event);
    return (frame(e.t) + SOUND_LEAD_FRAMES) / FPS;
  };

  // Carte des sections musicales (pour la bande-son composée en code).
  const SECTIONS = [
    // { name: 'intro', from: at(1), to: at(3) }, { name: 'drop', from: at(5), to: at(7) } …
  ];

  const T = { FPS, BPM, BEAT, BEATS_PER_BAR, BARS, DURATION, beat, at, frame, LAYOUT, EVENTS, CUES, cueTime, SECTIONS, SOUND_LEAD_FRAMES };
  if (typeof module !== 'undefined' && module.exports) module.exports = T;
  else root.T = T;
})(typeof window !== 'undefined' ? window : globalThis);
```

**`motion.js`**

```js
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
```

**Dans la composition** : charger les deux fichiers avant le script du film (`<script src="timeline.js"></script><script src="motion.js"></script>`), puis `tl.to(el, { scale: 1, duration: M.DUR.enter, ease: M.EASE.enter }, T.at(3, 1))`. Un ressort : `ease: M.springEase(0.6, 2, 0.8)` sur un tween de 0,8 s.

**Repères des chiffres** : courbes et ressorts du Motion Lab (F) ; durée d'entrée de la typo cinétique = médiane mesurée 0,30 s (chapitre 14) ; sortie 40 à 50 % plus courte que l'entrée (F) ; ressort ζ 1 sans rebond, 0,7-0,85 premium, 0,4-0,6 joueur (F) ; position et taille peuvent rebondir, opacité et couleur jamais (F).

**À cocher**

- [ ] `node --check timeline.js motion.js` sans erreur.
- [ ] Aucun nombre de temps ni de mouvement ailleurs que dans ces deux fichiers.
- [ ] Chaque repère son pointe un événement existant.
