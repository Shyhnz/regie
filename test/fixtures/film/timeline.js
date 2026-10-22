// timeline.js du film d'exemple des tests : 120 BPM, 4 mesures, 60 im/s.
(function (root) {
  const FPS = 60;
  const BPM = 120;
  const BEATS_PER_BAR = 4;
  const BARS = 4;
  const BEAT = 60 / BPM;
  const DURATION = BARS * BEATS_PER_BAR * BEAT;
  const beat = (n) => n * BEAT;
  const at = (bar, b = 1) => beat((bar - 1) * BEATS_PER_BAR + (b - 1));
  const frame = (t) => Math.round(t * FPS);
  const LAYOUT = { W: 1920, H: 1080, margin: 96 };
  const EVENTS = [
    { id: 'hook', t: at(1, 1), what: 'premier mot de l’accroche' },
    { id: 'reveal', t: at(2, 1), what: 'l’écran se déplie' },
    { id: 'drop', t: at(3, 1), what: 'le compteur démarre' },
    { id: 'logo', t: at(4, 1), what: 'le logo se pose' },
  ];
  const SOUND_LEAD_FRAMES = 1;
  const CUES = [
    { event: 'hook', kind: 'click', gain: 0 },
    { event: 'reveal', kind: 'whoosh', gain: -2 },
    { event: 'drop', kind: 'boom', gain: 0 },
    { event: 'logo', kind: 'chord', gain: -1 },
  ];
  const cueTime = (c) => {
    const e = EVENTS.find((x) => x.id === c.event);
    return (frame(e.t) + SOUND_LEAD_FRAMES) / FPS;
  };
  const SECTIONS = [
    { name: 'intro', from: at(1), to: at(2) },
    { name: 'montee', from: at(2), to: at(3) },
    { name: 'drop', from: at(3), to: at(4) },
    { name: 'final', from: at(4), to: DURATION },
  ];
  const T = { FPS, BPM, BEAT, BEATS_PER_BAR, BARS, DURATION, beat, at, frame, LAYOUT, EVENTS, CUES, cueTime, SECTIONS, SOUND_LEAD_FRAMES };
  if (typeof module !== 'undefined' && module.exports) module.exports = T;
  else root.T = T;
})(typeof window !== 'undefined' ? window : globalThis);
