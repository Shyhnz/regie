import { useEffect, useMemo, useRef, useState } from 'react';
import { api, useResource } from '../api.js';
import { go } from '../App.jsx';
import { useToast } from '../components/Toast.jsx';
import Markdown from '../components/Markdown.jsx';
import Lightbox from '../components/Lightbox.jsx';
import Loops from '../components/Loops.jsx';
import SegmentVideo from '../components/SegmentVideo.jsx';
import VideoStill from '../components/VideoStill.jsx';
import { SkillRules, SkillPrompts, SkillRepos, SkillBody } from '../components/Skills.jsx';
import { t } from '../i18n.js';

const KIND = {
  variant: 'ta variante', guide: 'guide de style', style: 'style', plan: 'plan', video: 'vidéo', etude: 'étude 60 fps', outil: 'outil', technique: 'technique',
  'skill-prompt': 'prompt open source', 'skill-rule': 'règle open source', 'skill-repo': 'dépôt de skill',
};
// Le libellé d'un type de fiche, dans la langue de l'interface.
const kindLabel = (kind) => (KIND[kind] ? t(KIND[kind]) : '');

// « vu dans 12 vidéos, 5 notées 4 ou 5 »
function seenLabel(n, good) {
  if (good) return n > 1 ? t('vu dans {n} vidéos, {good} notées 4 ou 5', { n, good }) : t('vu dans {n} vidéo, notée 4 ou 5', { n });
  return n > 1 ? t('vu dans {n} vidéos', { n }) : t('vu dans {n} vidéo', { n });
}
const storedFilm = () => { try { return localStorage.getItem('regie.film') || ''; } catch { return ''; } };

function useTargetFilm(films) {
  const [slug, setSlug] = useState(storedFilm);
  useEffect(() => {
    if (!films) return;
    const studio = films.filter((f) => f.studio);
    if (!studio.find((f) => f.slug === slug)) setSlug(studio[0]?.slug || '');
  }, [films]); // eslint-disable-line react-hooks/exhaustive-deps
  const set = (s) => { setSlug(s); try { localStorage.setItem('regie.film', s); } catch { /* stockage indisponible */ } };
  return [slug, set];
}

function Card({ item, catLabel, added, onAdd }) {
  const img = item.images?.[0];
  const [hover, setHover] = useState(false);
  const segment = !item.clip && img?.clip;
  const moving = item.clip || segment;
  const kicker = catLabel || (item.kind === 'technique' ? null : kindLabel(item.kind));
  const foot = item.kind === 'video' ? `${item.handle} · ${item.familyLabel} · ${item.musicLabel}` : item.seenIn ? seenLabel(item.seenIn, item.goodIn) : null;
  return (
    <li className="lib-card">
      <a href={`#/bibliotheque/${item.cat}/${encodeURIComponent(item.id)}`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onFocus={() => setHover(true)} onBlur={() => setHover(false)}>
        <div className={`lib-media ${item.kind === 'variant' ? 'is-169' : ''}`}>
          {hover && item.clip ? <video src={item.clip} autoPlay muted loop playsInline />
            : hover && segment ? <SegmentVideo src={segment.src} start={segment.start} end={segment.end} />
              : img?.src ? <img src={img.src} alt="" loading="lazy" />
                : img?.clip ? <VideoStill clip={img.clip} /> : <span className="frame-empty mono">{kindLabel(item.kind)}</span>}
          {moving && !hover && <span className="play-badge" aria-hidden="true">{t('▶ au survol')}</span>}
        </div>
        <div className="lib-body">
          {(kicker || item.kind === 'video') && (
            <div className="lib-kicker">
              {kicker && <span className="eyebrow">{kicker}</span>}
              {item.kind === 'video' && <span className="craft" title={t('Note {n} sur 5', { n: item.craft })}>{'★'.repeat(item.craft)}<span className="faint">{'★'.repeat(5 - item.craft)}</span></span>}
            </div>
          )}
          <strong>{item.title}</strong>
          {item.aka && <span className="lib-aka">{item.aka}</span>}
          {foot && <span className="faint lib-foot">{foot}</span>}
        </div>
      </a>
      {onAdd && (
        <button className={`lib-add ${added ? 'is-added' : ''}`} onClick={() => onAdd(item)} disabled={added} aria-label={added ? t('{title} est dans le film', { title: item.title }) : t('Ajouter {title} au film', { title: item.title })}>
          {added ? '✓' : '+'}
        </button>
      )}
    </li>
  );
}

function InMotion({ clip }) {
  const [on, setOn] = useState(false);
  return on
    ? <SegmentVideo className="detail-clip" src={clip.src} start={clip.start} end={clip.end} controls />
    : <button className="btn sm" onClick={() => setOn(true)}>{t('▶ Voir en mouvement')}</button>;
}

function Detail({ id, lib, filmSlug, films, addedIds, onAdd, onClose }) {
  const { data, error } = useResource(`/api/library/item?id=${encodeURIComponent(id)}`);
  const [note, setNote] = useState('');
  const [box, setBox] = useState(null);
  const panel = useRef(null);
  useEffect(() => {
    const on = (e) => { if (e.key === 'Escape' && box == null) onClose(); };
    window.addEventListener('keydown', on);
    return () => window.removeEventListener('keydown', on);
  }, [onClose, box]);
  useEffect(() => { panel.current?.focus(); setNote(''); }, [id]);
  const item = data?.item;
  const bySlug = useMemo(() => Object.fromEntries(lib.videos.map((v) => [v.slug, v])), [lib]);
  const film = films?.find((f) => f.slug === filmSlug);
  const added = addedIds.has(id);
  const md = data?.md ? data.md.replace(/^## .+\n/, '') : null;
  return (
    <div className="drawer-wrap" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <aside className="drawer" ref={panel} tabIndex={-1} aria-label={t('Fiche de la Bible')}>
        <div className="drawer-head">
          <button className="btn sm ghost" onClick={onClose}>{t('← Retour')}</button>
          <span className="grow" />
          {item?.page && <a className="btn sm ghost" href={item.page} target="_blank" rel="noreferrer">{t('Page source')}</a>}
          {item?.url && <a className="btn sm ghost" href={item.url} target="_blank" rel="noreferrer">{t('Voir la source')}</a>}
        </div>
        {error ? <div className="error-box"><strong>{t('Cette fiche ne s’ouvre pas.')}</strong><span>{error.message}</span></div> : !item ? <div className="skeleton" style={{ height: 300 }} /> : (
          <div className="drawer-body">
            <div className="eyebrow">{lib.categories.find((c) => c.id === item.cat)?.label} · {kindLabel(item.kind)}</div>
            <h2 className="drawer-title">{item.title}</h2>
            {item.aka && <p className="lib-aka">{item.aka}</p>}

            <div className="add-box">
              {film ? (
                added ? <span className="status done">{t('Dans la sélection de « {film} »', { film: film.title })}</span> : (
                  <>
                    <div className="field" style={{ flex: 1 }}>
                      <label htmlFor="add-note">{t('Pour quoi, dans « {film} » ?', { film: film.title })} <span className="faint">{t('(facultatif)')}</span></label>
                      <input id="add-note" className="input" value={note} onChange={(e) => setNote(e.target.value)} placeholder={t('l’accroche, les transitions, l’ambiance…')} onKeyDown={(e) => e.key === 'Enter' && onAdd(item, note)} />
                    </div>
                    <button className="btn primary" onClick={() => onAdd(item, note)}>{t('Ajouter au film')}</button>
                  </>
                )
              ) : <span className="muted">{t('Crée un film pour y ranger des références.')}</span>}
            </div>

            {item.clip && <video className="detail-clip" src={item.clip} controls autoPlay muted loop playsInline />}
            {item.images?.length > 0 && (
              <div className="detail-images">
                {item.images.map((im, i) => (
                  <figure key={im.src}>
                    {im.clip && i === 0 && <SegmentVideo className="detail-clip" src={im.clip.src} start={im.clip.start} end={im.clip.end} controls />}
                    {im.clip && i > 0 && !im.src && <VideoStill clip={im.clip} className="detail-still" />}
                    {im.clip && i > 0 && <InMotion clip={im.clip} />}
                    {im.src && <button className="frame wide" onClick={() => setBox(item.images.filter((x) => x.src).indexOf(im))}><img src={im.src} alt={im.alt} loading="lazy" /></button>}
                    {im.caption && <figcaption className="muted">{im.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            )}
            {item.summary && <p className="detail-summary">{item.summary}</p>}
            {item.kind?.startsWith('skill-') && <SkillBody item={item} chapters={lib.skills?.chapters} addedIds={addedIds} onAdd={(x) => onAdd(x)} />}
            {item.when && <div className="when"><span className="eyebrow">{t('Quand l’utiliser')}</span><p>{item.when}</p></div>}

            {item.kind === 'video' && (
              <div className="video-facts">
                {item.craftReason && <p><strong>{t('Note {n}/5', { n: item.craft })} · </strong>{item.craftReason}</p>}
                {item.palette?.length > 0 && <div className="palette">{item.palette.map((p) => <span key={p.hex + p.role} title={p.role}><i style={{ background: p.hex }} /> <span className="mono">{p.hex}</span></span>)}</div>}
                {item.steal?.length > 0 && <div><span className="eyebrow">{t('À lui prendre')}</span><ul>{item.steal.map((s, i) => <li key={i}>{s}</li>)}</ul></div>}
                {item.flaws?.length > 0 && <div><span className="eyebrow">{t('Ses défauts')}</span><ul>{item.flaws.map((s, i) => <li key={i}>{s}</li>)}</ul></div>}
                {item.techniques?.length > 0 && <div className="tags">{item.techniques.map((tech) => <span key={tech} className="tag">{tech}</span>)}</div>}
                {item.prompt && <details><summary><strong>{t('Le prompt intégral')}</strong></summary><pre className="ev-prompt">{item.prompt}</pre></details>}
              </div>
            )}

            {item.videos?.length > 0 && (
              <div className="linked">
                <span className="eyebrow">{t('Vidéos citées')} · {item.videos.length}</span>
                <ul className="linked-grid">
                  {item.videos.filter((s) => bySlug[s]).slice(0, 12).map((s) => (
                    <li key={s}>
                      <a href={`#/bibliotheque/videos/${encodeURIComponent(`video:${s}`)}`}>
                        {bySlug[s].images[0]?.src ? <img src={bySlug[s].images[0].src} alt="" loading="lazy" /> : bySlug[s].images[0]?.clip && <VideoStill clip={bySlug[s].images[0].clip} className="linked-still" />}
                        <span>{bySlug[s].title} <span className="craft">{'★'.repeat(bySlug[s].craft)}</span></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {md && <details className="fulltext"><summary><strong>{t('Texte complet de la fiche')}</strong> <span className="faint">{t('recettes HyperFrames et After Effects, mesures')}</span></summary><Markdown text={md} /></details>}
          </div>
        )}
        {box != null && item && <Lightbox items={item.images.filter((im) => im.src).map((im) => ({ src: im.src, label: item.title, caption: im.caption }))} start={box} onClose={() => setBox(null)} />}
      </aside>
    </div>
  );
}

export default function Library({ cat = 'styles', itemId }) {
  const toast = useToast();
  const { data: lib, error, reload } = useResource('/api/library');
  const { data: films } = useResource('/api/films');
  const [filmSlug, setFilmSlug] = useTargetFilm(films);
  const [moodIds, setMoodIds] = useState(new Set());
  const [q, setQ] = useState('');
  const [family, setFamily] = useState('');
  const [minCraft, setMinCraft] = useState(4);
  const [synced, setSynced] = useState(false);

  useEffect(() => {
    if (!filmSlug) { setMoodIds(new Set()); return; }
    api(`/api/films/${filmSlug}`).then((f) => setMoodIds(new Set((f.state.moodboard || []).map((m) => m.id)))).catch(() => setMoodIds(new Set()));
  }, [filmSlug]);

  const category = lib?.categories.find((c) => c.id === cat) || lib?.categories[0];
  const catLabel = Object.fromEntries((lib?.categories || []).map((c) => [c.id, c.label]));
  const items = useMemo(() => {
    if (!lib) return [];
    const query = q.trim().toLowerCase();
    let list = query ? [...lib.items, ...lib.videos] : category.id === 'videos' ? lib.videos : lib.items.filter((i) => i.cat === category.id);
    if (query) list = list.filter((i) => `${i.title} ${i.aka || ''} ${i.summary || ''} ${i.handle || ''}`.toLowerCase().includes(query));
    if (!query && category.id === 'videos') list = list.filter((v) => (!family || v.family === family) && v.craft >= minCraft && (!synced || v.music === 'animee-sur-la-musique'));
    return list;
  }, [lib, category, q, family, minCraft, synced]);

  const add = async (item, note = '') => {
    if (!filmSlug) { toast(t('Crée d’abord un film'), 'bad'); return; }
    try {
      await api(`/api/films/${filmSlug}/moodboard`, { method: 'POST', body: { id: item.id, note } });
      setMoodIds((s) => new Set([...s, item.id]));
      toast(t('« {titre} » ajouté au film', { titre: item.title }));
    } catch (e) { toast(e.message, 'bad'); }
  };
  const addSkill = filmSlug ? (x) => add(x) : null;
  const addLoop = async (tile) => {
    if (!filmSlug) { toast(t('Crée d’abord un film'), 'bad'); return; }
    try {
      await api(`/api/films/${filmSlug}/moodboard/loop`, { method: 'POST', body: { id: tile.id, name: tile.name } });
      setMoodIds((s) => new Set([...s, `loop:${tile.id}`]));
      toast(t('Boucle « {nom} » ajoutée au film', { nom: tile.name }));
    } catch (e) { toast(e.message, 'bad'); }
  };

  if (error) return <main className="page"><div className="error-box" role="alert"><strong>{t('La Bibliothèque ne s’est pas chargée.')}</strong><span>{error.message}</span><div><button className="btn sm" onClick={() => reload()}>{t('Réessayer')}</button></div></div></main>;
  if (!lib) return <div className="lib-layout"><div className="skeleton" style={{ height: 500 }} /><div className="skeleton" style={{ height: 500 }} /></div>;
  const groups = [...new Set(lib.categories.map((c) => c.group))];
  const studioFilms = (films || []).filter((f) => f.studio);

  return (
    <div className="lib-layout">
      <nav className="lib-nav" aria-label={t('Catégories de la Bible')}>
        {groups.map((g) => (
          <div key={g} className="lib-group">
            <div className="eyebrow">{g}</div>
            {lib.categories.filter((c) => c.group === g).map((c) => (
              <a key={c.id} href={`#/bibliotheque/${c.id}`} aria-current={!q && c.id === category.id ? 'page' : undefined} onClick={() => setQ('')}>
                <span>{c.label}</span><span className="mono faint">{c.count}</span>
              </a>
            ))}
          </div>
        ))}
      </nav>

      <main className="lib-main">
        <div className="lib-head">
          <div>
            <div className="eyebrow">{t('Bibliothèque de la Bible')}</div>
            <h1>{q ? t('« {q} »', { q }) : category.label}</h1>
            <p className="lead" style={{ marginTop: 6 }}>{q ? (items.length > 1 ? t('{n} fiches dans toute la Bible', { n: items.length }) : t('{n} fiche dans toute la Bible', { n: items.length })) : category.hint || t('Chapitre « {chapitre} » : chaque fiche montre l’effet, quand l’utiliser et les vidéos où il est réussi.', { chapitre: category.label })}</p>
          </div>
          <div className="lib-target">
            <label htmlFor="target" className="eyebrow">{t('Ajouter au film')}</label>
            {studioFilms.length ? (
              <select id="target" className="select" value={filmSlug} onChange={(e) => setFilmSlug(e.target.value)}>
                {studioFilms.map((f) => <option key={f.slug} value={f.slug}>{f.title}</option>)}
              </select>
            ) : <a className="btn sm" href="#/">{t('Créer un film')}</a>}
            {filmSlug && <a className="btn sm ghost" href={`#/film/${filmSlug}/scenario`}>{t('Voir la sélection')} · {moodIds.size}</a>}
          </div>
        </div>

        <div className="lib-filters">
          <div className="field search">
            <label htmlFor="lib-q" className="sr-only">{t('Chercher dans la Bible')}</label>
            <input id="lib-q" className="input" type="search" enterKeyHint="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('Chercher dans toute la Bible : iris, néon, 3D, curseur, papier…')} />
          </div>
          {!q && category.id === 'videos' && (
            <>
              <select className="select" style={{ width: 'auto' }} value={family} onChange={(e) => setFamily(e.target.value)} aria-label={t('Famille')}>
                <option value="">{t('Toutes les familles')}</option>
                {[...new Set(lib.videos.map((v) => v.family))].map((f) => <option key={f} value={f}>{lib.videos.find((v) => v.family === f).familyLabel}</option>)}
              </select>
              <div className="segmented" role="group" aria-label={t('Note minimale')}>
                {[[5, '5 ★'], [4, '4 ★ et +'], [1, 'Toutes']].map(([v, l]) => <button key={v} type="button" aria-pressed={minCraft === v} onClick={() => setMinCraft(v)}>{t(l)}</button>)}
              </div>
              <label className="check"><input type="checkbox" checked={synced} onChange={(e) => setSynced(e.target.checked)} />{t('Animées sur la musique')}</label>
            </>
          )}
        </div>

        {!q && category.id === 'boucles' ? (
          <Loops onAdd={filmSlug ? addLoop : null} addedIds={moodIds} />
        ) : !q && category.id === 'skill-regles' ? (
          <SkillRules chapters={lib.skills?.chapters} addedIds={moodIds} onAdd={addSkill} />
        ) : !q && category.id === 'skill-prompts' ? (
          <SkillPrompts types={lib.skills?.types} addedIds={moodIds} onAdd={addSkill} />
        ) : !q && category.id === 'skill-depots' ? (
          <SkillRepos />
        ) : items.length === 0 ? (
          <div className="empty">
            <strong>{q ? t('Aucune fiche de la Bible pour « {q} ».', { q }) : t('Aucune fiche avec ces filtres.')}</strong>
            <span>{q ? `${t('Essaie un mot plus court, ou en anglais : les fiches portent aussi leurs noms anglais.')}${lib.skills ? ` ${t('Les skills open source sont cherchés plus bas.')}` : ''}` : t('Élargis la note minimale ou la famille.')}</span>
            <button className="btn sm" onClick={() => { setQ(''); setFamily(''); setMinCraft(1); setSynced(false); }}>{t('Effacer les filtres')}</button>
          </div>
        ) : (
          <ul className="lib-grid">
            {items.map((it) => <Card key={it.id} item={it} catLabel={q ? catLabel[it.cat] : null} added={moodIds.has(it.id)} onAdd={filmSlug ? (x) => add(x) : null} />)}
          </ul>
        )}

        {/* Les skills open source complètent chaque chapitre, et chaque recherche. */}
        {lib.skills && !q && category.rulesChapter && category.rules > 0 && (
          <SkillRules key={category.id} chapter={category.rulesChapter} initial={6} title={t('Ce que disent les skills open source · {chapitre}', { chapitre: category.label })} addedIds={moodIds} onAdd={addSkill} />
        )}
        {lib.skills && q && (
          <>
            <SkillRules q={q} chapters={lib.skills.chapters} initial={6} title={t('Règles des skills open source')} hideEmpty addedIds={moodIds} onAdd={addSkill} />
            <SkillPrompts q={q} types={lib.skills.types} initial={6} title={t('Prompts des skills open source')} hideEmpty addedIds={moodIds} onAdd={addSkill} />
            <SkillRepos q={q} limit={6} title={t('Dépôts de skills')} hideEmpty />
          </>
        )}
      </main>

      {itemId && <Detail id={itemId} lib={lib} filmSlug={filmSlug} films={films} addedIds={moodIds} onAdd={add} onClose={() => go(`/bibliotheque/${cat}`)} />}
    </div>
  );
}
