import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { api, useResource } from '../api.js';
import { useMeta } from '../components/Meta.jsx';
import { useToast } from '../components/Toast.jsx';
import ClaudePanel from '../components/ClaudePanel.jsx';
import Scenario from '../steps/Scenario.jsx';
import Storyboard from '../steps/Storyboard.jsx';
import Plans from '../steps/Plans.jsx';
import Musique from '../steps/Musique.jsx';
import Final from '../steps/Final.jsx';
import { t } from '../i18n.js';

const FilmCtx = createContext(null);
export const useFilm = () => useContext(FilmCtx);

const statusLabel = (s) => ({ done: t('fait'), running: t('Claude travaille'), current: t('en cours'), todo: t('à faire') })[s];
const PAGES = { scenario: Scenario, storyboard: Storyboard, plans: Plans, musique: Musique, final: Final };

// Blender ou non pour ce film (et toute sa série) : Claude lit la recette Blender et fait les plans 3D lourds dans Blender.
// La session de chaque étape repart avec la nouvelle consigne à la prochaine action.
function BlenderSwitch({ film, reload }) {
  const meta = useMeta();
  const toast = useToast();
  const [saving, setSaving] = useState(false);
  const on = Boolean(film.state.settings?.blender);
  const installed = meta.blender?.installed !== false;
  const serie = Boolean(film.serie);
  const toggle = async () => {
    setSaving(true);
    try {
      await api(`/api/films/${encodeURIComponent(film.slug)}/settings`, { method: 'PUT', body: { blender: !on } });
      await reload(true);
      toast(!on
        ? (serie ? t('Blender activé pour les 3 vidéos') : t('Blender activé'))
        : (serie ? t('Blender désactivé pour les 3 vidéos : tout en HyperFrames') : t('Blender désactivé : tout en HyperFrames')));
    } catch (e) { toast(e.message, 'bad'); } finally { setSaving(false); }
  };
  const hint = !installed ? t('Blender introuvable dans /Applications')
    : on ? (serie ? t('Claude fait les plans 3D lourds dans Blender pour les 3 vidéos') : t('Claude fait les plans 3D lourds dans Blender'))
      : (serie ? t('Tout en HyperFrames pour les 3 vidéos') : t('Tout en HyperFrames'));
  return (
    <div className="engine-switch">
      <button type="button" role="switch" aria-checked={on} className="switch" onClick={toggle} disabled={saving || (!installed && !on)} aria-describedby="blender-hint">
        <span className="switch-track" aria-hidden="true"><span className="switch-knob" /></span>
        <span className="switch-label">Blender</span>
      </button>
      <span id="blender-hint" className="faint">{hint}</span>
    </div>
  );
}

export default function Film({ slug, stepId }) {
  const meta = useMeta();
  const toast = useToast();
  const { data: film, error, loading, reload } = useResource(`/api/films/${encodeURIComponent(slug)}`);
  const [panelOpen, setPanelOpen] = useState(false);
  const [starting, setStarting] = useState(null);
  const [startError, setStartError] = useState(null);

  const running = Boolean(film?.active);
  useEffect(() => { window.scrollTo(0, 0); }, [stepId]);
  // Pendant que Claude travaille, les fichiers et les images arrivent : on relit le film régulièrement.
  useEffect(() => {
    if (!running) return undefined;
    const t = setInterval(() => reload(true), 6000);
    return () => clearInterval(t);
  }, [running, reload]);

  const start = useCallback(async (action, input = {}, opts = {}) => {
    setStarting(action); setStartError(null);
    try {
      const rec = await api(`/api/films/${encodeURIComponent(slug)}/runs`, { method: 'POST', body: { action, input, shot: opts.shot, newSession: opts.newSession } });
      setPanelOpen(true);
      await reload(true);
      return rec;
    } catch (err) {
      setStartError({ action, message: err.message });
      toast(err.message, 'bad');
      return null;
    } finally {
      setStarting(null);
    }
  }, [slug, reload, toast]);

  // « Lancer sur les 3 » : la même action dans chaque vidéo de la série ; le panneau suit celle de cette vidéo.
  const startSerie = useCallback(async (action, input = {}) => {
    setStarting(`serie:${action}`); setStartError(null);
    try {
      const { started, skipped } = await api(`/api/films/${encodeURIComponent(slug)}/serie/runs`, { method: 'POST', body: { action, input } });
      const lettre = (s) => film?.serie?.films.find((f) => f.slug === s)?.lettre || s;
      setPanelOpen(true);
      toast(skipped.length
        ? t('Lancé sur {lances} · pas sur {sautes}', { lances: started.map((r) => lettre(r.slug)).join(', '), sautes: skipped.map((x) => `${x.lettre} (${x.reason})`).join(', ') })
        : t('Lancé sur les 3 vidéos'), skipped.length ? 'bad' : undefined);
      await reload(true);
    } catch (err) {
      setStartError({ action, message: err.message });
      toast(err.message, 'bad');
    } finally {
      setStarting(null);
    }
  }, [slug, film, reload, toast]);

  const onRunEnd = useCallback(() => reload(true), [reload]);

  const ctx = useMemo(() => film && ({ film, slug, reload, start, startSerie, starting, startError, running, openPanel: () => setPanelOpen(true) }), [film, slug, reload, start, startSerie, starting, startError, running]);

  if (error && !film) {
    return (
      <main className="page">
        <div className="error-box" role="alert"><strong>{t('Ce film ne s’est pas ouvert.')}</strong><span>{error.message}</span><div style={{ display: 'flex', gap: 8 }}><button className="btn sm" onClick={() => reload()}>{t('Réessayer')}</button><a className="btn sm ghost" href="#/">{t('Retour aux films')}</a></div></div>
      </main>
    );
  }
  if (loading && !film) {
    return <div className="film-layout"><div className="skeleton" style={{ height: 400 }} /><div className="skeleton" style={{ height: 600 }} /><div className="skeleton" style={{ height: 600 }} /></div>;
  }
  if (!film.studio) {
    return <main className="page"><div className="notice">{t('Ce dossier n’est pas un film du studio (pas de BRIEF.md). Ouvre-le depuis la liste des anciens projets.')}</div></main>;
  }

  const current = film.steps.find((s) => s.status !== 'done') || film.steps[film.steps.length - 1];
  const step = meta.steps.find((s) => s.id === stepId) || meta.steps.find((s) => s.id === current.id);
  const Page = PAGES[step.id];
  const last = film.state.runs[film.state.runs.length - 1];

  return (
    <FilmCtx.Provider value={ctx}>
      <div className={`film-layout ${panelOpen ? 'panel-open' : ''}`}>
        <aside className="steps-nav" aria-label={t('Étapes du film')}>
          <div className="steps-film">
            <div className="eyebrow">{t('Film')}</div>
            <h2 title={film.title}>{film.title}</h2>
            <span className="mono faint">videos/{film.slug}</span>
            <BlenderSwitch film={film} reload={reload} />
          </div>
          {film.serie && (
            <nav className="serie-nav" aria-label={t('Vidéos de la série')}>
              <div className="eyebrow">{t('Série de 3')}</div>
              <div className="serie-tabs">
                {film.serie.films.map((f) => {
                  const state = f.running ? 'running' : f.step ? f.step.status : 'done';
                  return (
                    <a key={f.slug} href={`#/film/${f.slug}/${step.id}`} aria-current={f.slug === slug ? 'page' : undefined} title={`${t('Vidéo {lettre}', { lettre: f.lettre })}${f.angle ? ` · ${f.angle}` : ''} · ${f.running ? t('Claude travaille') : f.step ? `${f.step.title}, ${statusLabel(f.step.status)}` : t('livrée')}`}>
                      <span className={`serie-dot ${state}`} aria-hidden="true" />{f.lettre}
                    </a>
                  );
                })}
              </div>
              {film.serie.angle && <p className="muted serie-angle">{film.serie.angle}</p>}
            </nav>
          )}
          <ol className="steps-list">
            {film.steps.map((s) => (
              <li key={s.id}>
                <a href={`#/film/${slug}/${s.id}`} aria-current={s.id === step.id ? 'step' : undefined} className={`step-link ${s.status}`}>
                  <span className="step-num" aria-hidden="true">{s.status === 'done' ? '✓' : s.n}</span>
                  <span className="step-text">
                    <strong>{s.title}</strong>
                    <span className={`status ${s.status}`}>{statusLabel(s.status)}</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
          <div className="steps-tools">
            <a className="btn sm ghost" href="#/bibliotheque" onClick={() => { try { localStorage.setItem('regie.film', slug); } catch { /* stockage indisponible */ } }}>{t('Bibliothèque')}</a>
          </div>
        </aside>

        <main className="step-main" id="step-main">
          <Page step={step} status={film.steps.find((s) => s.id === step.id)} />
        </main>

        <aside className="claude-col" aria-label="Claude">
          {/* Le panneau suit l'action en cours (même dans une autre étape, ou dans la vidéo A pour une action commune), sinon la session de l'étape affichée. */}
          <ClaudePanel film={film} target={film.active ? { slug: film.active.slug, step: film.active.step } : { slug, step: step.id }} stepId={step.id} onRunEnd={onRunEnd} onClose={() => setPanelOpen(false)} />
        </aside>
        <button className={`panel-toggle ${running ? 'running' : ''}`} onClick={() => setPanelOpen((o) => !o)} aria-expanded={panelOpen}>
          <span className={`status ${running ? 'running' : last?.status === 'error' ? 'error' : 'done'}`}>{running ? t('Claude travaille') : 'Claude'}</span>
        </button>
      </div>
    </FilmCtx.Provider>
  );
}

// Petites aides partagées par les pages d'étape.
export function useRunsOf(action) {
  const { film } = useFilm();
  return film.state.runs.filter((r) => r.action === action);
}

export function lastDone(film, action) {
  return [...film.state.runs].reverse().find((r) => r.action === action && r.status === 'done') || null;
}

export function useScrollTo() {
  const ref = useRef(null);
  return [ref, () => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })];
}
