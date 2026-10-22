import { useState } from 'react';
import { api, useResource, filmUrl, fmtDate } from '../api.js';
import { go } from '../App.jsx';
import { useMeta } from '../components/Meta.jsx';
import Lightbox from '../components/Lightbox.jsx';
import { Segmented } from '../components/Step.jsx';

const STATUS_LABEL = { done: 'fait', running: 'Claude travaille', current: 'en cours', todo: 'à faire' };

function NewFilm({ onCancel }) {
  const [title, setTitle] = useState('');
  const [count, setCount] = useState('3');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const serie = count === '3';
  const submit = async (e) => {
    e.preventDefault();
    if (!title.trim()) { setError(`Donne un nom ${serie ? 'à la série' : 'au film'}, par exemple « Lancement de l’app 30 s ».`); return; }
    setBusy(true); setError(null);
    try {
      const { slug } = await api('/api/films', { method: 'POST', body: { title, serie } });
      go(`/film/${slug}/scenario`);
    } catch (err) { setError(err.message); setBusy(false); }
  };
  return (
    <form className="panel new-film" onSubmit={submit}>
      <div className="field">
        <span className="label">Combien de vidéos</span>
        <Segmented label="Combien de vidéos" value={count} onChange={setCount} options={[['3', '3 vidéos'], ['1', '1 vidéo']]} />
        <span className="help">
          {serie
            ? 'Un brief commun, puis trois vidéos qui ont chacune leur scénario et leur direction artistique. Dossiers videos/<nom>-a, -b et -c.'
            : 'Une seule vidéo : tu choisis un scénario parmi trois, puis une direction parmi trois.'}
        </span>
      </div>
      <div className="field">
        <label htmlFor="film-title">{serie ? 'Nom de la série' : 'Nom du film'}</label>
        <input id="film-title" className="input" autoFocus value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Lancement de l’app 30 s" enterKeyHint="go" aria-invalid={Boolean(error)} aria-describedby={error ? 'film-title-err' : 'film-title-help'} />
        {error ? <span id="film-title-err" className="help" style={{ color: 'var(--danger)' }}>{error}</span>
          : <span id="film-title-help" className="help">Chaque dossier est copié du studio de base (contrat, interdits, outils).</span>}
      </div>
      <div className="row-end">
        <button type="button" className="btn ghost" onClick={onCancel}>Annuler</button>
        <button type="submit" className="btn primary" disabled={busy}>{busy && <span className="spin" />}{busy ? 'Création…' : serie ? 'Créer les 3 vidéos' : 'Créer le film'}</button>
      </div>
    </form>
  );
}

function FilmCard({ film }) {
  const meta = useMeta();
  const current = film.steps.find((s) => s.status !== 'done');
  return (
    <a className="film-card" href={`#/film/${film.slug}/${current?.id || 'final'}`}>
      <div className="film-poster">
        {film.poster ? <img src={filmUrl(film.slug, film.poster)} alt="" loading="lazy" /> : <span className="film-initial" aria-hidden="true">{film.title.slice(0, 1)}</span>}
      </div>
      <div className="film-body">
        <div className="film-title-row">
          <h3>{film.title}</h3>
          {film.imported && <span className="tag">avant la Régie</span>}
        </div>
        <ol className="progress" aria-label="Avancement">
          {film.steps.map((s) => <li key={s.id} className={s.status} title={`${meta.steps.find((x) => x.id === s.id)?.title} : ${STATUS_LABEL[s.status]}`} />)}
        </ol>
        <p className="muted">
          {current ? <>Étape {meta.steps.find((x) => x.id === current.id)?.n} · {current.title} · <span className={`status ${current.status}`}>{STATUS_LABEL[current.status]}</span></> : <span className="status done">livré</span>}
        </p>
        <p className="faint nowrap">Dernière activité : {fmtDate(new Date(film.updatedAt).toISOString())}</p>
      </div>
    </a>
  );
}

// Une série : ses trois vidéos côte à côte, chacune avec son scénario et son avancement.
function SerieCard({ films }) {
  const meta = useMeta();
  const { title } = films[0].serie;
  const updatedAt = Math.max(...films.map((f) => f.updatedAt));
  return (
    <section className="serie-card" aria-label={`Série ${title}`}>
      <div className="serie-head">
        <div className="film-title-row">
          <h3>{title}</h3>
          <span className="tag">série de 3</span>
        </div>
        <p className="faint nowrap">Dernière activité : {fmtDate(new Date(updatedAt).toISOString())}</p>
      </div>
      <div className="serie-films">
        {films.map((f) => {
          const current = f.steps.find((s) => s.status !== 'done');
          return (
            <a key={f.slug} className="serie-film" href={`#/film/${f.slug}/${current?.id || 'final'}`}>
              <div className="film-poster">
                {f.poster ? <img src={filmUrl(f.slug, f.poster)} alt="" loading="lazy" /> : <span className="film-initial" aria-hidden="true">{f.serie.lettre}</span>}
              </div>
              <div className="serie-film-body">
                <div className="serie-film-title"><span className="option-id">{f.serie.lettre}</span><strong>{f.serie.angle || <span className="faint">Scénario à venir</span>}</strong></div>
                <ol className="progress" aria-label="Avancement">
                  {f.steps.map((s) => <li key={s.id} className={s.status} title={`${meta.steps.find((x) => x.id === s.id)?.title} : ${STATUS_LABEL[s.status]}`} />)}
                </ol>
                <p className="muted">
                  {current ? <>Étape {meta.steps.find((x) => x.id === current.id)?.n} · {current.title} · <span className={`status ${current.status}`}>{STATUS_LABEL[current.status]}</span></> : <span className="status done">livrée</span>}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

// Les films du studio, une série comptant pour une seule entrée, rangée à la date de sa vidéo la plus récente.
function groupFilms(films) {
  const out = [];
  const series = new Map();
  for (const f of films) {
    if (!f.serie) { out.push({ key: f.slug, film: f }); continue; }
    if (!series.has(f.serie.id)) { series.set(f.serie.id, []); out.push({ key: `serie:${f.serie.id}`, serie: series.get(f.serie.id) }); }
    series.get(f.serie.id).push(f);
  }
  for (const list of series.values()) list.sort((a, b) => a.serie.lettre.localeCompare(b.serie.lettre));
  return out;
}

// Ce qui manque sur ce Mac pour que Claude puisse travailler : dit une fois, en haut de la liste des films.
const TOOLS = [['claude', 'Claude Code', 'https://docs.claude.com/en/docs/claude-code/overview'], ['ffmpeg', 'ffmpeg', 'https://formulae.brew.sh/formula/ffmpeg'], ['npx', 'Node.js (npx)', 'https://nodejs.org']];
function MissingTools() {
  const meta = useMeta();
  const missing = TOOLS.filter(([k]) => meta.deps && meta.deps[k] === false);
  if (!missing.length) return null;
  return (
    <div className="notice" role="status">
      <strong>Il manque {missing.length > 1 ? 'des outils' : 'un outil'} sur ce Mac : </strong>
      {missing.map(([k, label, url], i) => <span key={k}>{i ? ', ' : ''}<a href={url} target="_blank" rel="noreferrer">{label}</a></span>)}.
      {' '}La Régie s’ouvre, mais Claude ne pourra pas fabriquer de film tant {missing.length > 1 ? 'qu’ils ne sont pas installés' : 'qu’il n’est pas installé'}. Installe, puis relance la Régie.
    </div>
  );
}

export default function Films() {
  const { data, error, loading, reload } = useResource('/api/films');
  const [creating, setCreating] = useState(false);
  const [playing, setPlaying] = useState(null);
  const studio = (data || []).filter((f) => f.studio);
  const old = (data || []).filter((f) => !f.studio && f.video);
  return (
    <main className="page">
      <div className="page-head">
        <div>
          <div className="eyebrow">Studio</div>
          <h1>Films</h1>
          <p className="lead" style={{ marginTop: 8 }}>Chaque film suit le parcours de la Bible, du scénario à la vidéo finale. Claude fait une action, tu regardes le résultat, tu passes à la suite ou tu la refais.</p>
        </div>
        {!creating && <button className="btn primary lg" onClick={() => setCreating(true)}>Nouvelles vidéos</button>}
      </div>
      <MissingTools />
      {creating && <NewFilm onCancel={() => setCreating(false)} />}
      {error && (
        <div className="error-box" role="alert"><strong>La liste des films ne s’est pas chargée.</strong><span>{error.message}</span><div><button className="btn sm" onClick={() => reload()}>Réessayer</button></div></div>
      )}
      {loading && !data ? (
        <div className="film-grid">{[0, 1, 2].map((i) => <div key={i} className="skeleton" style={{ height: 300 }} />)}</div>
      ) : studio.length === 0 && !error ? (
        !creating && <div className="empty"><strong>Aucun film dans le studio pour l’instant.</strong><span>Une série de 3 vidéos (ou un film seul) commence par un nom ; la Régie copie le studio de base et t’emmène au scénario.</span><button className="btn primary" onClick={() => setCreating(true)}>Créer les premières vidéos</button></div>
      ) : (
        <div className="film-grid">{groupFilms(studio).map((g) => (g.serie ? <SerieCard key={g.key} films={g.serie} /> : <FilmCard key={g.key} film={g.film} />))}</div>
      )}
      {old.length > 0 && (
        <details className="old-projects">
          <summary><span className="eyebrow">Anciens projets sans studio · {old.length}</span></summary>
          <div className="old-grid">
            {old.map((f) => (
              <button key={f.slug} className="old-card" onClick={() => setPlaying(f)}>
                <img src={`/api/films/${f.slug}/poster`} alt="" loading="lazy" />
                <span>{f.title}</span>
              </button>
            ))}
          </div>
        </details>
      )}
      {playing && <Lightbox items={[{ src: filmUrl(playing.slug, playing.video), label: playing.title, video: true }]} onClose={() => setPlaying(null)} />}
    </main>
  );
}
