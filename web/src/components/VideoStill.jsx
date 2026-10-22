import { useEffect, useRef, useState } from 'react';

// Une image fixe tirée d'une vidéo de référence, chargée seulement quand elle entre à l'écran :
// la Régie publiée n'a pas les vignettes, elle montre l'image de la vidéo d'origine.
export default function VideoStill({ clip, className = '' }) {
  const ref = useRef(null);
  const [near, setNear] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || near) return undefined;
    const io = new IntersectionObserver((entries) => { if (entries.some((e) => e.isIntersecting)) setNear(true); }, { rootMargin: '300px' });
    io.observe(el);
    return () => io.disconnect();
  }, [near]);
  return (
    <span ref={ref} className={`video-still ${className}`}>
      {/* WebKit (Régie.app) ne peint aucune image tant qu'on ne cherche pas un instant précis : on y va une fois les métadonnées lues. */}
      {near && (
        <video
          src={`${clip.src}#t=${(clip.start + 0.3).toFixed(2)}`}
          preload="metadata"
          muted
          playsInline
          aria-hidden="true"
          onLoadedMetadata={(e) => { e.currentTarget.currentTime = clip.start + 0.3; }}
        />
      )}
    </span>
  );
}
