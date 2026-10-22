import { useEffect, useState } from 'react';

// Visionneuse plein écran : flèches pour passer d'une image à l'autre, Échap pour fermer.
export default function Lightbox({ items, start = 0, onClose }) {
  const [i, setI] = useState(start);
  const it = items[i];
  useEffect(() => {
    const on = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setI((x) => Math.min(items.length - 1, x + 1));
      if (e.key === 'ArrowLeft') setI((x) => Math.max(0, x - 1));
    };
    window.addEventListener('keydown', on);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', on); document.body.style.overflow = ''; };
  }, [items.length, onClose]);
  if (!it) return null;
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={it.label || 'Image'}>
      <header>
        <span className="mono faint nowrap">{i + 1} / {items.length}</span>
        <div className="grow"><strong>{it.label}</strong>{it.caption && <div className="muted" style={{ fontSize: 13 }}>{it.caption}</div>}</div>
        <a className="btn sm ghost" href={it.src} target="_blank" rel="noreferrer">Ouvrir le fichier</a>
        <button className="btn sm" onClick={onClose} autoFocus>Fermer</button>
      </header>
      <figure onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
        {it.video ? <video src={it.src} controls autoPlay loop playsInline /> : <img src={it.src} alt={it.label || ''} />}
      </figure>
      {items.length > 1 && (
        <footer>
          {items.map((x, j) => (
            <button key={x.src + j} aria-current={j === i} onClick={() => setI(j)} aria-label={x.label || `Image ${j + 1}`}>
              {x.video ? <span className="tag">vidéo</span> : <img src={x.src} alt="" />}
            </button>
          ))}
        </footer>
      )}
    </div>
  );
}
