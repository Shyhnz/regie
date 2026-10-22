import { useEffect, useRef, useState } from 'react';
import TimelineBar from './TimelineBar.jsx';
import { pauseOthers } from '../api.js';
import { t } from '../i18n.js';

// Forme d'onde d'un son du film, posée sur la même frise que l'image : on voit si chaque coup tombe sur son repère.
// Le lecteur reste le même d'un son à l'autre : le parent (audioRef) peut lancer la lecture dans le geste du clic.
export default function Waveform({ src, timeline, shots, audioRef }) {
  const canvas = useRef(null);
  const own = useRef(null);
  const audio = audioRef || own;
  const [peaks, setPeaks] = useState(null);
  const [error, setError] = useState(null);
  const [now, setNow] = useState(0);
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    let alive = true;
    setPeaks(null); setError(null);
    (async () => {
      try {
        const buf = await (await fetch(src)).arrayBuffer();
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const audioBuf = await ctx.decodeAudioData(buf);
        ctx.close();
        const data = audioBuf.getChannelData(0);
        const n = 1200;
        const step = Math.floor(data.length / n);
        const out = new Float32Array(n);
        for (let i = 0; i < n; i++) {
          let max = 0;
          for (let j = i * step; j < (i + 1) * step; j += 4) max = Math.max(max, Math.abs(data[j]));
          out[i] = max;
        }
        if (alive) { setPeaks(out); setDuration(audioBuf.duration); }
      } catch {
        if (alive) setError(true);
      }
    })();
    return () => { alive = false; };
  }, [src]);

  // La source se pose à la main : React ne la recharge pas quand le parent vient de lancer ce même son.
  useEffect(() => {
    const a = audio.current;
    if (a && a.src !== new URL(src, window.location.href).href) { a.src = src; setNow(0); }
  }, [src, audio]);

  useEffect(() => {
    const c = canvas.current;
    if (!c || !peaks) return;
    const w = c.clientWidth; const h = c.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    c.width = w * dpr; c.height = h * dpr;
    const g = c.getContext('2d');
    g.scale(dpr, dpr);
    g.clearRect(0, 0, w, h);
    const span = timeline?.duration || duration || 1;
    const scale = (duration || span) / span;
    g.fillStyle = '#A39B93';
    for (let i = 0; i < peaks.length; i++) {
      const x = (i / peaks.length) * w * scale;
      const y = peaks[i] * (h / 2 - 2);
      g.fillRect(x, h / 2 - y, Math.max(1, (w * scale) / peaks.length - 0.4), y * 2);
    }
    const playX = (now / span) * w;
    g.fillStyle = '#7CC4FF';
    g.fillRect(playX, 0, 2, h);
  }, [peaks, now, timeline, duration]);

  const seek = (s) => { if (audio.current) audio.current.currentTime = s; };
  return (
    <div className="waveform">
      {error ? <div className="notice">{t('Ce fichier son ne se décode pas dans le navigateur.')}</div> : !peaks ? <div className="skeleton" style={{ height: 96 }} /> : (
        <canvas ref={canvas} className="wave-canvas" onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); seek(((e.clientX - r.left) / r.width) * (timeline?.duration || duration)); }} aria-label={t('Forme d’onde, cliquer pour se placer')} />
      )}
      {timeline && <TimelineBar timeline={timeline} shots={shots} playhead={now} onSeek={seek} height={110} />}
      <audio ref={audio} controls preload="metadata" onPlay={pauseOthers} onTimeUpdate={(e) => setNow(e.currentTarget.currentTime)} style={{ width: '100%' }} />
    </div>
  );
}
