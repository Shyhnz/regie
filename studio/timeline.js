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
