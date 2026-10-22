import { useEffect, useRef, useState } from 'react';
import { api } from '../api.js';

// Les 80 boucles Motion Loops, dessinées en direct avec leur propre moteur (lib.js + tuiles), comme sur leur page.
let loading = null;
function loadScripts() {
  if (window.TILES && window.SETS && Object.keys(window.TILES).length >= 80) return Promise.resolve();
  if (loading) return loading;
  const add = (src) => new Promise((ok, ko) => { const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = () => ko(new Error(src)); document.head.appendChild(s); });
  loading = api('/api/library/loops').then(async (m) => {
    await add(m.lib);
    await add(m.sets);
    for (const t of m.tiles) await add(t);
  });
  return loading;
}

const T = { card: '#161616', ink: '#0F0F0F', paper: '#F2EFE9' };
function palette(accent, tone) {
  const P = { accent, accent2: accent, paper: T.paper, ink: T.ink };
  if (tone === 'accent') Object.assign(P, { bg: accent, fg: T.ink, fg2: T.paper, mid: window.M.mixColor(accent, T.ink, 0.35) });
  else if (tone === 'light') Object.assign(P, { bg: T.paper, fg: T.ink, fg2: accent, mid: window.M.mixColor(T.paper, T.ink, 0.25) });
  else Object.assign(P, { bg: T.card, fg: accent, fg2: T.paper, mid: window.M.mixColor(T.card, accent, 0.35) });
  return P;
}

function LoopTile({ tile, onAdd, added }) {
  const canvas = useRef(null);
  useEffect(() => {
    const c = canvas.current;
    const def = window.TILES[tile.id];
    if (!c || !def) return undefined;
    const P = palette(tile.accent, tile.tone);
    const ctx = c.getContext('2d');
    let visible = false;
    let raf = 0;
    const t0 = performance.now();
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(c);
    let last = 0;
    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      if (!visible || now - last < 33) return;
      last = now;
      const w = c.clientWidth; const h = c.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (c.width !== Math.round(w * dpr)) { c.width = Math.round(w * dpr); c.height = Math.round(h * dpr); }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = P.bg; ctx.fillRect(0, 0, w, h);
      ctx.save();
      try { def.draw(ctx, w, h, window.M.mod((now - t0) / 1000, window.M.LOOP), P); } catch { /* tuile cassée : on garde le fond */ }
      ctx.restore();
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, [tile]);
  return (
    <li className="loop">
      <canvas ref={canvas} aria-hidden="true" />
      <div className="loop-meta">
        <span className="mono faint">{String(tile.n).padStart(2, '0')}</span>
        <span>{tile.name}</span>
        {onAdd && <button className="btn sm ghost" onClick={() => onAdd(tile)} disabled={added}>{added ? 'Ajoutée' : '+ Film'}</button>}
      </div>
    </li>
  );
}

export default function Loops({ query, onAdd, addedIds }) {
  const [state, setState] = useState({ ready: false, error: null });
  useEffect(() => {
    loadScripts().then(() => setState({ ready: true, error: null })).catch((e) => setState({ ready: false, error: e }));
  }, []);
  if (state.error) return <div className="error-box"><strong>Les boucles ne se chargent pas.</strong><span>Le dossier base-connaissance/scenario-motion-loops est-il en place ? ({state.error.message})</span></div>;
  if (!state.ready) return <div className="loops-grid">{Array.from({ length: 8 }, (_, i) => <div key={i} className="skeleton" style={{ aspectRatio: '16/9' }} />)}</div>;
  const packs = [['bg', 'Fonds'], ['sh', 'Formes']];
  const q = (query || '').toLowerCase();
  return packs.map(([key, label]) => (
    <div key={key} className="loops-pack">
      {window.SETS[key].pages.map((page) => {
        const tiles = page.tiles.map((t, i) => ({ ...t, n: page.first + i, name: window.TILES[t.id]?.name || t.id, accent: page.accent })).filter((t) => !q || t.name.toLowerCase().includes(q) || page.name.toLowerCase().includes(q));
        if (!tiles.length) return null;
        return (
          <section key={page.name} className="loops-page">
            <div className="section-head"><h3>{label} · {page.name}</h3></div>
            <ul className="loops-grid">{tiles.map((t) => <LoopTile key={t.id} tile={t} onAdd={onAdd} added={addedIds?.has(`loop:${t.id}`)} />)}</ul>
          </section>
        );
      })}
    </div>
  ));
}
