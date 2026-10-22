import { fmtTime } from '../api.js';

const SECTION_TONES = ['#2B2723', '#3A2A1F', '#24302B', '#2D2638', '#3A3220'];

// timeline.js vu d'en haut : mesures et temps, sections musicales, plans, événements image et repères son.
// `playhead` (s) et `onSeek` relient la frise à une vidéo ou à un son.
export default function TimelineBar({ timeline, shots = [], playhead = null, onSeek, height = 132 }) {
  if (!timeline || !timeline.duration) return null;
  const { duration, beat, beatsPerBar, fps, sections, events, cues } = timeline;
  const W = 1000;
  const x = (t) => (t / duration) * W;
  const beats = Math.round(duration / beat);
  const rows = { sections: 4, shots: 30, events: 74, cues: 98 };
  const seek = (e) => {
    if (!onSeek) return;
    const r = e.currentTarget.getBoundingClientRect();
    onSeek(((e.clientX - r.left) / r.width) * duration);
  };
  return (
    <figure className="timeline-bar">
      <svg viewBox={`0 0 ${W} ${height}`} preserveAspectRatio="none" role="img" aria-label={`Frise de ${duration.toFixed(1)} s à ${timeline.bpm} BPM`} onClick={seek} style={{ cursor: onSeek ? 'pointer' : 'default' }}>
        {sections.map((s, i) => (
          <g key={s.name + i}>
            <rect x={x(s.from)} y={rows.sections} width={Math.max(1, x(s.to) - x(s.from))} height={height - 8} fill={SECTION_TONES[i % SECTION_TONES.length]} opacity="0.55">
              <title>{`Section « ${s.name} » · ${fmtTime(s.from)} → ${fmtTime(s.to)}`}</title>
            </rect>
          </g>
        ))}
        {Array.from({ length: beats + 1 }, (_, n) => (
          <line key={n} x1={x(n * beat)} x2={x(n * beat)} y1={n % beatsPerBar === 0 ? 0 : height - 14} y2={height} stroke={n % beatsPerBar === 0 ? '#5A524B' : '#3D3731'} strokeWidth={n % beatsPerBar === 0 ? 1.4 : 0.8} vectorEffect="non-scaling-stroke" />
        ))}
        {shots.filter((s) => s.frames).map((s, i) => {
          const a = s.frames.start / fps;
          const b = s.frames.end / fps;
          return (
            <g key={s.n} onClick={(e) => { if (onSeek) { e.stopPropagation(); onSeek(a); } }}>
              <rect x={x(a) + 1} y={rows.shots} width={Math.max(2, x(b) - x(a) - 2)} height={36} rx="3" fill={i % 2 ? '#2E2924' : '#36302A'} stroke="#4A433C" vectorEffect="non-scaling-stroke">
                <title>{`Plan ${s.n} · ${s.plan} · f${s.frames.start}–f${s.frames.end}`}</title>
              </rect>
            </g>
          );
        })}
        {events.map((e) => (
          <line key={e.id} x1={x(e.t)} x2={x(e.t)} y1={rows.events} y2={rows.events + 14} stroke="#EDE8E3" strokeWidth="1.2" vectorEffect="non-scaling-stroke">
            <title>{`${e.id} · f${e.frame}`}</title>
          </line>
        ))}
        {cues.filter((c) => c.t != null).map((c, i) => (
          <line key={c.event + i} x1={x(c.t)} x2={x(c.t)} y1={rows.cues} y2={rows.cues + 12} stroke="#F44800" strokeWidth="2" vectorEffect="non-scaling-stroke">
            <title>{`son « ${c.kind} » sur ${c.event} · ${fmtTime(c.t)}`}</title>
          </line>
        ))}
        {playhead != null && <line x1={x(playhead)} x2={x(playhead)} y1={0} y2={height} stroke="#7CC4FF" strokeWidth="2" vectorEffect="non-scaling-stroke" />}
      </svg>
      <div className="timeline-labels" aria-hidden="true">
        {shots.filter((s) => s.frames).map((s) => (
          <span key={s.n} style={{ left: `${(s.frames.start / fps / duration) * 100}%`, width: `${((s.frames.end - s.frames.start) / fps / duration) * 100}%` }}>{s.n}</span>
        ))}
      </div>
      <figcaption className="timeline-legend">
        <span className="mono">{timeline.bpm} BPM · {timeline.bars ?? Math.round(beats / beatsPerBar)} mesures · {duration.toFixed(2).replace('.', ',')} s · {Math.round(duration * fps)} images</span>
        <span className="legend"><i className="lg-shot" />plans</span>
        <span className="legend"><i className="lg-ev" />événements image ({events.length})</span>
        <span className="legend"><i className="lg-cue" />repères son ({cues.length})</span>
        {sections.length > 0 && <span className="legend"><i className="lg-sec" />sections : {sections.map((s) => s.name).join(' · ')}</span>}
      </figcaption>
    </figure>
  );
}
