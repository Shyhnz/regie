// Lecture de timeline.js (la seule source du temps du film) dans un bac à sable, comme le fait le script son.
import vm from 'node:vm';

export function loadTimeline(src) {
  const sandbox = { module: { exports: {} }, console: { log() {}, warn() {}, error() {} } };
  let T;
  try {
    vm.runInNewContext(src, sandbox, { timeout: 1000, filename: 'timeline.js' });
    T = sandbox.module.exports;
  } catch (err) {
    throw new Error(`timeline.js ne se lit pas : ${err.message}`);
  }
  if (!T || typeof T !== 'object' || !T.FPS) throw new Error('timeline.js ne se lit pas : aucun objet T exporté');

  const fps = T.FPS;
  const frame = (t) => Math.round(t * fps);
  const events = (T.EVENTS || []).map((e) => ({ id: e.id, t: e.t, frame: frame(e.t), n: e.n, what: e.what }));
  const cues = (T.CUES || []).map((c) => {
    let t = null;
    try { t = typeof T.cueTime === 'function' ? T.cueTime(c) : null; } catch { t = null; }
    return { event: c.event, kind: c.kind, gain: c.gain, t };
  });
  const sections = (T.SECTIONS || []).map((s) => ({ name: s.name, from: s.from, to: s.to }));
  const beat = T.BEAT || 60 / T.BPM;
  // Aller-retour JSON : les objets nés dans le bac à sable ont d'autres prototypes que ceux de Node.
  return JSON.parse(JSON.stringify({
    fps,
    bpm: T.BPM,
    beat,
    beatsPerBar: T.BEATS_PER_BAR || 4,
    bars: T.BARS,
    duration: T.DURATION,
    beats: Math.round(T.DURATION / beat),
    events,
    cues,
    sections,
    layout: T.LAYOUT || null,
  }));
}
