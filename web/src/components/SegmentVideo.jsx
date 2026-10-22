import { useRef } from 'react';

// Joue en boucle un passage d'une vidéo de référence (de start à end, en secondes) : l'effet de la fiche, en mouvement.
export default function SegmentVideo({ src, start = 0, end = null, controls = false, className = '' }) {
  const ref = useRef(null);
  return (
    <video
      ref={ref}
      className={className}
      src={`${src}#t=${start.toFixed(2)}`}
      autoPlay
      muted
      playsInline
      controls={controls}
      preload="auto"
      onLoadedMetadata={(e) => { e.currentTarget.currentTime = start; }}
      onTimeUpdate={(e) => { if (end != null && e.currentTarget.currentTime > end) { e.currentTarget.currentTime = start; e.currentTarget.play().catch(() => {}); } }}
      onEnded={(e) => { e.currentTarget.currentTime = start; e.currentTarget.play().catch(() => {}); }}
    />
  );
}
