import { useRef, useState } from 'react';
import { api, filmUrl } from '../api.js';
import { useFilm } from '../pages/Film.jsx';
import { useToast } from './Toast.jsx';
import { t, locale } from '../i18n.js';

const folderFor = (file) => {
  const n = file.name.toLowerCase();
  if (/\.(wav|mp3|m4a|aac|ogg|flac)$/.test(n)) return 'assets/audio';
  if (/\.(ttf|otf|woff2?)$/.test(n)) return 'assets/fonts';
  if (/logo/.test(n)) return 'assets';
  if (/\.(png|jpe?g|webp|gif|svg)$/.test(n)) return 'assets/screens';
  return 'assets';
};
const kb = (n) => (n > 1e6
  ? t('{n} Mo', { n: (n / 1e6).toLocaleString(locale(), { minimumFractionDigits: 1, maximumFractionDigits: 1, useGrouping: false }) })
  : t('{n} Ko', { n: Math.max(1, Math.round(n / 1e3)) }));

// La matière réelle du film : logo, écrans, polices, piste. Un fait manquant arrête le travail, il ne s'invente pas.
export default function Assets() {
  const { film, reload } = useFilm();
  const toast = useToast();
  const input = useRef(null);
  const [over, setOver] = useState(false);
  const [sending, setSending] = useState([]);
  const [error, setError] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const upload = async (files) => {
    setError(null);
    const list = [...files];
    setSending(list.map((f) => f.name));
    for (const f of list) {
      try {
        const rel = `${folderFor(f)}/${f.name.replace(/[^\w.\- ]+/g, '_')}`;
        await api(`/api/films/${film.slug}/upload?path=${encodeURIComponent(rel)}`, { method: 'PUT', raw: f });
      } catch (e) { setError(t('« {nom} » n’a pas été déposé : {erreur}', { nom: f.name, erreur: e.message })); }
    }
    setSending([]);
    toast(list.length > 1 ? t('{n} fichiers déposés dans assets/', { n: list.length }) : t('{n} fichier déposé dans assets/', { n: list.length }));
    reload(true);
  };
  const remove = async (p) => {
    try { await api(`/api/films/${film.slug}/upload?path=${encodeURIComponent(p)}`, { method: 'DELETE' }); setConfirm(null); toast(t('Fichier retiré')); reload(true); } catch (e) { toast(e.message, 'bad'); }
  };
  const assets = film.media.assets;
  return (
    <div className="assets">
      <div
        className={`dropzone ${over ? 'over' : ''}`}
        onDragOver={(e) => { e.preventDefault(); setOver(true); }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => { e.preventDefault(); setOver(false); upload(e.dataTransfer.files); }}
      >
        <div>
          <strong>{t('Dépose ici la matière du film')}</strong>
          <p className="muted">{t('Logo, captures d’écran, polices, piste musicale, vidéo de référence. Tout est rangé dans assets/.')}</p>
        </div>
        <button type="button" className="btn sm" onClick={() => input.current?.click()} disabled={sending.length > 0}>{sending.length ? t('Envoi de {n}…', { n: sending.length }) : t('Choisir des fichiers')}</button>
        <input ref={input} type="file" multiple hidden onChange={(e) => { upload(e.target.files); e.target.value = ''; }} />
      </div>
      {error && <div className="error-box" role="alert"><strong>{t('Dépôt incomplet.')}</strong><span>{error}</span></div>}
      {assets.length > 0 && (
        <ul className="asset-list">
          {assets.map((a) => (
            <li key={a.path}>
              {/\.(png|jpe?g|webp|gif|svg)$/i.test(a.path) ? <img src={filmUrl(film.slug, a.path)} alt="" /> : <span className="asset-ext mono">{a.path.split('.').pop()}</span>}
              <span className="mono asset-name">{a.path}</span>
              <span className="faint nowrap">{kb(a.size)}</span>
              {confirm === a.path
                ? <><button className="btn sm ghost" onClick={() => setConfirm(null)}>{t('Garder')}</button><button className="btn sm danger" onClick={() => remove(a.path)}>{t('Retirer')}</button></>
                : <button className="icon-btn" onClick={() => setConfirm(a.path)} aria-label={t('Retirer {fichier}', { fichier: a.path })}>✕</button>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
