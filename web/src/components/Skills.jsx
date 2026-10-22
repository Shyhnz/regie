// Les skills vidéo open source de la Bible (10 lots) : règles par chapitre, prompts, dépôts.
// Trop nombreux pour partir avec la Bibliothèque : chaque liste demande ses pages au serveur.
import { useEffect, useRef, useState } from 'react';
import { api } from '../api.js';
import { useToast } from './Toast.jsx';
import { t, locale } from '../i18n.js';

const num = (n) => Number(n || 0).toLocaleString(locale());
// one et many sont des textes à traduire, avec {n} : plural(3, '{n} règle', '{n} règles').
const plural = (n, one, many) => t(n > 1 ? many : one, { n: num(n) });
const RULES = ['{n} règle', '{n} règles'];
const PROMPTS = ['{n} prompt', '{n} prompts'];
const REPOS = ['{n} dépôt', '{n} dépôts'];
const qsOf = (o) => new URLSearchParams(Object.entries(o).filter(([, v]) => v !== '' && v != null)).toString();

// Une liste paginée : la première page, puis « Voir plus » ajoute la suivante. Repart de zéro quand un filtre change.
function usePaged(base, params, size) {
  const key = `${base}?${qsOf(params)}`;
  const latest = useRef(key);
  latest.current = key;
  const [state, setState] = useState({ key: null, items: [], total: 0, extra: null, loading: true, error: null });
  const load = async (offset) => {
    setState((s) => ({ ...s, loading: true, error: null }));
    try {
      const d = await api(`${base}?${qsOf({ ...params, offset, limit: size })}`);
      // Pendant la frappe, une réponse plus ancienne peut arriver après la dernière : on l'ignore.
      if (latest.current !== key) return;
      setState((s) => ({ key, items: offset ? [...s.items, ...d.items] : d.items, total: d.total, extra: d, loading: false, error: null }));
    } catch (error) {
      if (latest.current === key) setState((s) => ({ ...s, loading: false, error }));
    }
  };
  useEffect(() => { load(0); }, [key]); // eslint-disable-line react-hooks/exhaustive-deps
  const fresh = state.key === key;
  return { ...state, items: fresh ? state.items : [], total: fresh ? state.total : 0, more: () => load(state.items.length), retry: () => load(fresh ? state.items.length : 0) };
}

function AddButton({ id, title, added, onAdd }) {
  if (!onAdd) return null;
  return (
    <button type="button" className={`btn sm ghost skill-add ${added ? 'is-added' : ''}`} onClick={() => onAdd({ id, title })} disabled={added} aria-label={added ? t('{title} est dans le film', { title }) : t('Ajouter « {title} » au film', { title })}>
      {added ? t('✓ Dans le film') : t('+ Au film')}
    </button>
  );
}

function ListState({ loading, error, retry, empty, count }) {
  if (error) return <div className="error-box" role="alert"><strong>{t('La liste ne s’est pas chargée.')}</strong><span>{error.message}</span><div><button className="btn sm" onClick={retry}>{t('Réessayer')}</button></div></div>;
  if (loading && !count) return <div className="skill-skeleton">{[0, 1, 2].map((i) => <div key={i} className="skeleton" style={{ height: 76 }} />)}</div>;
  if (!loading && !count && empty) return empty;
  return null;
}

// unit : la paire de textes [un, plusieurs] de plural().
function More({ shown, total, loading, onMore, unit }) {
  if (shown >= total) return null;
  return (
    <div className="skill-more">
      <button type="button" className="btn sm" onClick={onMore} disabled={loading}>{loading ? t('Chargement…') : t('Voir {n} de plus', { n: Math.min(30, total - shown) })}</button>
      <span className="faint">{t('{shown} sur {total}', { shown: num(shown), total: plural(total, ...unit) })}</span>
    </div>
  );
}

const STATUTS = [['', 'Toutes'], ['nouveau', 'Nouvelles'], ['complement', 'Précisent la Bible']];

// Les règles : tout un chapitre, celles d'un dépôt, ou celles qui répondent à une recherche.
export function SkillRules({ chapter = '', q = '', repo = '', chapters = {}, initial = 30, title = null, hideEmpty = false, addedIds, onAdd }) {
  const [chap, setChap] = useState('');
  const [statut, setStatut] = useState('');
  const activeChapter = chapter || chap;
  const list = usePaged('/api/library/skills/rules', { chapter: activeChapter, q, statut, repo }, initial);
  if (hideEmpty && !list.loading && !list.error && list.total === 0) return null;
  return (
    <section className="skill-section" aria-label={title || t('Règles des skills open source')}>
      {title && (
        <div className="skill-section-head">
          <h2>{title}</h2>
          <span className="faint">{list.loading && !list.total ? '…' : plural(list.total, ...RULES)}</span>
        </div>
      )}
      <div className="skill-filters">
        {!chapter && !repo && Object.keys(chapters).length > 0 && (
          <select className="select" style={{ width: 'auto' }} value={chap} onChange={(e) => setChap(e.target.value)} aria-label={t('Chapitre de la Bible')}>
            <option value="">{t('Tous les chapitres')}</option>
            {Object.entries(chapters).map(([c, label]) => <option key={c} value={c}>{c.slice(1)} · {label}</option>)}
          </select>
        )}
        <div className="segmented" role="group" aria-label={t('Nature des règles')}>
          {STATUTS.map(([v, l]) => <button key={v} type="button" aria-pressed={statut === v} onClick={() => setStatut(v)}>{t(l)}</button>)}
        </div>
      </div>
      <ListState {...list} count={list.items.length} empty={<div className="empty"><strong>{q ? t('Aucune règle pour « {q} » ici.', { q }) : t('Aucune règle avec ces filtres.')}</strong><span>{t('Essaie un mot plus court, ou en anglais.')}</span></div>} />
      {list.items.length > 0 && (
        <ul className="rule-list">
          {list.items.map((r) => {
            const id = `skill:rule:${r.id}`;
            return (
              <li key={r.id} className="rule">
                <div className="rule-head">
                  <strong>{r.title}</strong>
                  {r.statut === 'complement' && <span className="tag" title={r.precise ? t('Précise : {precise}', { precise: r.precise }) : t('Affine une entrée de la Bible')}>{t('précise la Bible')}</span>}
                  {!chapter && chapters[r.chapter] && <span className="tag">{r.chapter.slice(1)} · {chapters[r.chapter]}</span>}
                </div>
                <p>{r.consigne}</p>
                {r.recette && <p className="rule-recipe"><span className="eyebrow">{t('Recette')}</span> {r.recette}</p>}
                <div className="rule-foot">
                  <a href={r.url} target="_blank" rel="noreferrer" className="mono faint">{r.repo}</a>
                  <AddButton id={id} title={r.title} added={addedIds?.has(id)} onAdd={onAdd} />
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <More shown={list.items.length} total={list.total} loading={list.loading} onMore={list.more} unit={RULES} />
    </section>
  );
}

// Les prompts, par genre.
export function SkillPrompts({ q = '', types = {}, initial = 30, title = null, hideEmpty = false, addedIds, onAdd }) {
  const [type, setType] = useState('');
  const list = usePaged('/api/library/skills/prompts', { type, q }, initial);
  const byType = list.extra?.byType || {};
  if (hideEmpty && !list.loading && !list.error && list.total === 0 && !type) return null;
  return (
    <section className="skill-section" aria-label={title || t('Prompts des skills open source')}>
      {title && (
        <div className="skill-section-head">
          <h2>{title}</h2>
          <span className="faint">{list.loading && !list.total ? '…' : plural(list.total, ...PROMPTS)}</span>
        </div>
      )}
      <div className="skill-filters">
        <select className="select" style={{ width: 'auto' }} value={type} onChange={(e) => setType(e.target.value)} aria-label={t('Genre de prompt')}>
          <option value="">{t('Tous les genres')}</option>
          {Object.entries(types).filter(([g]) => byType[g] || g === type).map(([g, label]) => <option key={g} value={g}>{label} · {num(byType[g] || 0)}</option>)}
        </select>
      </div>
      <ListState {...list} count={list.items.length} empty={<div className="empty"><strong>{q ? t('Aucun prompt pour « {q} ».', { q }) : t('Aucun prompt de ce genre.')}</strong><button className="btn sm" onClick={() => setType('')}>{t('Tous les genres')}</button></div>} />
      {list.items.length > 0 && (
        <ul className="rule-list">
          {list.items.map((p) => {
            const id = `skill:prompt:${p.id}`;
            return (
              <li key={p.id} className="rule">
                <div className="rule-head">
                  <a className="rule-link" href={`#/bibliotheque/skill-prompts/${encodeURIComponent(id)}`}><strong>{p.title}</strong></a>
                  <span className="tag">{types[p.type] || p.type}</span>
                  {p.langue && <span className="faint mono">{p.langue}</span>}
                </div>
                {p.resume && <p>{p.resume}</p>}
                <div className="rule-foot">
                  <span className="mono faint">{p.repo} · {t('{n} k caractères', { n: num(Math.round(p.size / 100) / 10) })}</span>
                  <span className="rule-actions">
                    <a className="btn sm ghost" href={`#/bibliotheque/skill-prompts/${encodeURIComponent(id)}`}>{t('Lire le prompt')}</a>
                    <AddButton id={id} title={p.title} added={addedIds?.has(id)} onAdd={onAdd} />
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <More shown={list.items.length} total={list.total} loading={list.loading} onMore={list.more} unit={PROMPTS} />
    </section>
  );
}

const VERDICTS = [['', 'Tous'], ['riche', 'Riches'], ['utile', 'Utiles'], ['maigre', 'Maigres']];

// Les dépôts : ce que fait chaque skill, et ce qu'il a apporté.
export function SkillRepos({ q = '', title = null, limit = 0, hideEmpty = false }) {
  const [verdict, setVerdict] = useState('');
  const [attempt, setAttempt] = useState(0);
  const [state, setState] = useState({ data: null, error: null });
  const key = qsOf({ q, verdict });
  useEffect(() => {
    let alive = true;
    setState((s) => ({ ...s, error: null }));
    api(`/api/library/skills/repos?${key}`).then((data) => alive && setState({ data, error: null })).catch((error) => alive && setState({ data: null, error }));
    return () => { alive = false; };
  }, [key, attempt]);
  const items = state.data?.items || [];
  if (hideEmpty && state.data && !items.length) return null;
  const shown = limit ? items.slice(0, limit) : items;
  return (
    <section className="skill-section" aria-label={title || t('Dépôts de skills')}>
      {title && <div className="skill-section-head"><h2>{title}</h2><span className="faint">{state.data ? plural(items.length, ...REPOS) : '…'}</span></div>}
      {!limit && (
        <div className="skill-filters">
          <div className="segmented" role="group" aria-label={t('Verdict')}>
            {VERDICTS.map(([v, l]) => <button key={v} type="button" aria-pressed={verdict === v} onClick={() => setVerdict(v)}>{t(l)}</button>)}
          </div>
        </div>
      )}
      <ListState loading={!state.data && !state.error} error={state.error} retry={() => setAttempt((n) => n + 1)} count={items.length} empty={<div className="empty"><strong>{t('Aucun dépôt avec ces filtres.')}</strong></div>} />
      {shown.length > 0 && (
        <ul className="repo-grid">
          {shown.map((r) => (
            <li key={r.id}>
              <a className="repo-card" href={`#/bibliotheque/skill-depots/${encodeURIComponent(`skill:repo:${r.id}`)}`}>
                <span className="repo-name mono">{r.repo}</span>
                <span className="repo-resume">{r.resume}</span>
                <span className="faint repo-foot"><span className={`tag verdict-${r.verdict}`}>{r.verdictLabel}</span> {plural(r.prompts, ...PROMPTS)} · {plural(r.rules, ...RULES)} · {t('lot {n}', { n: r.lot })}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
      {limit > 0 && items.length > limit && <a className="btn sm" href="#/bibliotheque/skill-depots">{t('Voir les {n} dépôts', { n: num(items.length) })}</a>}
    </section>
  );
}

function CopyButton({ text }) {
  const toast = useToast();
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); toast(t('Prompt copié')); } catch { toast(t('Copie impossible : sélectionne le texte à la main'), 'bad'); }
  };
  return <button type="button" className="btn sm" onClick={copy}>{t('Copier le prompt')}</button>;
}

const List = ({ title, items, render }) => (items?.length ? <div className="arch-block"><span className="eyebrow">{title}</span><ul>{items.map((x, i) => <li key={i}>{render ? render(x) : x}</li>)}</ul></div> : null);

// Le corps d'une fiche « skills open source » dans le tiroir de la Bibliothèque.
export function SkillBody({ item, chapters, addedIds, onAdd }) {
  const [showRules, setShowRules] = useState(false);
  if (item.kind === 'skill-prompt') {
    return (
      <div className="skill-body">
        <p className="faint">{t('Dépôt')} <a href={item.url} target="_blank" rel="noreferrer" className="mono">{item.repo}</a>{item.langue ? ` · ${t('langue : {langue}', { langue: item.langue })}` : ''} · {t('lot {n}', { n: item.lot })}</p>
        {item.text ? (
          <div className="prompt-full">
            <div className="prompt-full-head"><span className="eyebrow">{t('Texte intégral')}</span><CopyButton text={item.text} /></div>
            <pre className="ev-prompt">{item.text}</pre>
          </div>
        ) : <div className="notice">{t('Le texte de ce prompt n’a pas été retrouvé. Il reste lisible à sa source.')}</div>}
      </div>
    );
  }
  if (item.kind === 'skill-rule') {
    return (
      <div className="skill-body">
        {item.recette && <div className="when"><span className="eyebrow">{t('Recette')}</span><p>{item.recette}</p></div>}
        {item.precise && <p className="faint">{t('Précise : {precise}', { precise: item.precise })}</p>}
        <p className="faint">{t('Chapitre {n}', { n: item.chapter.slice(1) })} · {item.chapterLabel} · {t('dépôt')} <a href={item.url} target="_blank" rel="noreferrer" className="mono">{item.repo}</a></p>
      </div>
    );
  }
  const a = item.architecture || {};
  const nRules = Object.values(item.rules || {}).reduce((x, y) => x + y, 0);
  return (
    <div className="skill-body">
      {item.raison && <p className="faint"><span className={`tag verdict-${item.verdict}`}>{item.verdictLabel}</span> {item.raison}</p>}
      {(a.type || a.organisation) && <div className="arch-block"><span className="eyebrow">{t('Comment il est construit')}{a.type ? ` · ${a.type}` : ''}</span><p>{a.organisation}</p></div>}
      {a.workflow?.length > 0 && <div className="arch-block"><span className="eyebrow">{t('Déroulé')}</span><ol>{a.workflow.map((w, i) => <li key={i}>{w}</li>)}</ol></div>}
      <List title={t('Contrôles qualité')} items={a.controles} render={(c) => <><strong>{c.nom}</strong> — {c.comment}</>} />
      <List title={t('Outils')} items={a.outils} render={(o) => <><span className="mono">{o.chemin}</span> — {o.role}{o.reutilisable ? <span className="faint"> · {t('réutilisable : {x}', { x: o.reutilisable })}</span> : null}</>} />
      <List title={t('Procédés réutilisables')} items={a.procedes} />
      <List title={t('À reprendre pour nos skills')} items={a.a_reprendre} />
      {item.prompts?.length > 0 && (
        <div className="arch-block">
          <span className="eyebrow">{t('Ses prompts')} · {item.prompts.length}</span>
          <ul>{item.prompts.map((p) => <li key={p.id}><a href={`#/bibliotheque/skill-prompts/${encodeURIComponent(p.id)}`}>{p.title}</a></li>)}</ul>
        </div>
      )}
      {nRules > 0 && (showRules
        ? <SkillRules repo={item.repo} chapters={chapters} initial={30} title={t('Ses règles · {n}', { n: num(nRules) })} addedIds={addedIds} onAdd={onAdd} />
        : <div><button type="button" className="btn sm" onClick={() => setShowRules(true)}>{nRules > 1 ? t('Voir ses {n} règles', { n: num(nRules) }) : t('Voir sa règle')}</button></div>)}
    </div>
  );
}
