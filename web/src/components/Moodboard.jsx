import { useState } from 'react';
import { api } from '../api.js';
import { useFilm } from '../pages/Film.jsx';
import { useToast } from './Toast.jsx';
import { t } from '../i18n.js';

// La sélection faite dans la Bibliothèque : Claude la lit (MOODBOARD.md) au scénario et à la direction artistique.
export default function Moodboard() {
  const { film, slug, reload } = useFilm();
  const toast = useToast();
  const [editing, setEditing] = useState(null);
  const [note, setNote] = useState('');
  const items = film.state.moodboard || [];
  const openLibrary = () => { try { localStorage.setItem('regie.film', slug); } catch { /* stockage indisponible */ } };
  const saveNote = async (id) => {
    try { await api(`/api/films/${slug}/moodboard`, { method: 'PATCH', body: { id, note } }); setEditing(null); reload(true); toast(t('Note enregistrée')); } catch (e) { toast(e.message, 'bad'); }
  };
  const remove = async (id) => {
    try { await api(`/api/films/${slug}/moodboard`, { method: 'DELETE', body: { id } }); reload(true); toast(t('Retiré de la sélection')); } catch (e) { toast(e.message, 'bad'); }
  };
  if (!items.length) {
    return (
      <div className="empty">
        <strong>{t('Rien de sélectionné dans la Bible pour ce film.')}</strong>
        <span>{t('Parcours les styles, transitions, plans et vidéos, et ajoute ceux qui doivent orienter le film. Claude partira de là pour les scénarios et les directions artistiques.')}</span>
        <a className="btn" href="#/bibliotheque" onClick={openLibrary}>{t('Ouvrir la Bibliothèque')}</a>
      </div>
    );
  }
  return (
    <div className="moodboard">
      {items.map((m) => (
        <div key={m.id} className="mood-item">
          {m.image ? <img src={m.image} alt="" loading="lazy" /> : <div className="mood-noimg mono">{m.kindLabel}</div>}
          <div className="mood-body">
            <span className="eyebrow">{m.kindLabel}</span>
            <strong>{m.title}</strong>
            {editing === m.id ? (
              <div className="mood-edit">
                <input className="input" autoFocus value={note} onChange={(e) => setNote(e.target.value)} placeholder={t('Pour quoi ? (l’accroche, les transitions…)')} onKeyDown={(e) => e.key === 'Enter' && saveNote(m.id)} />
                <button className="btn sm" onClick={() => saveNote(m.id)}>OK</button>
              </div>
            ) : (
              <button className="mood-note" onClick={() => { setEditing(m.id); setNote(m.note || ''); }}>{m.note || <span className="faint">{t('Ajouter une note pour Claude')}</span>}</button>
            )}
          </div>
          <button className="icon-btn" onClick={() => remove(m.id)} aria-label={t('Retirer {title}', { title: m.title })}>✕</button>
        </div>
      ))}
      <a className="mood-add" href="#/bibliotheque" onClick={openLibrary}>{t('+ Ajouter depuis la Bibliothèque')}</a>
    </div>
  );
}
