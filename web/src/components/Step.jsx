import { useEffect, useState } from 'react';
import { api, filmUrl, fmtDate, pauseOthers } from '../api.js';
import { useFilm } from '../pages/Film.jsx';
import { useMeta } from './Meta.jsx';
import { useToast } from './Toast.jsx';
import Markdown from './Markdown.jsx';
import Lightbox from './Lightbox.jsx';
import { t } from '../i18n.js';

const AUDIO = /\.(wav|mp3|m4a|aac|ogg|flac)$/i;
const VIDEO = /\.(mp4|mov|webm)$/i;
const statusLabel = (s) => ({ done: t('fait'), running: t('Claude travaille'), current: t('en cours'), todo: t('à faire') })[s];

// Le dossier du film dans le Finder : la vidéo, les images, les musiques, tout ce que Claude fabrique y est rangé.
function FolderButton() {
  const { slug } = useFilm();
  const toast = useToast();
  const open = () => api(`/api/films/${slug}/finder`, { method: 'POST' }).catch((e) => toast(e.message, 'bad'));
  return (
    <button type="button" className="btn sm folder-btn" onClick={open} title={t('Ouvre videos/{slug} dans le Finder', { slug })}>
      <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path d="M1.75 3.5c0-.55.45-1 1-1h3.4l1.5 1.6h5.6c.55 0 1 .45 1 1v6.9c0 .55-.45 1-1 1H2.75c-.55 0-1-.45-1-1z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>
      {t('Dossier du film')}
    </button>
  );
}

export function StepHeader({ step, status }) {
  return (
    <header className="step-head">
      <div className="eyebrow">{t('Étape {n}', { n: step.n })} · {step.phases}</div>
      <div className="step-title-row">
        <h1>{step.title}</h1>
        <span className={`status ${status.status}`}>{statusLabel(status.status)}</span>
        <FolderButton />
      </div>
      <p className="lead">{step.goal}</p>
    </header>
  );
}

export function Section({ title, aside, children, id }) {
  return (
    <section className="section" id={id}>
      <div className="section-head"><h2>{title}</h2>{aside}</div>
      {children}
    </section>
  );
}

// La preuve laissée par Claude à la fin de sa dernière action dans l'étape : résumé, questions, options, images.
export function HandoffCard({ stepId, onChoose }) {
  const { film, start } = useFilm();
  const run = [...film.state.runs].reverse().find((r) => r.step === stepId && r.status !== 'running');
  const [answers, setAnswers] = useState({});
  const [box, setBox] = useState(null);
  useEffect(() => setAnswers({}), [run?.id]);
  if (!run) return null;
  const h = run.handoff;
  const label = run.label;
  const commune = film.serie && run.shared ? <span className="tag">{t('commune aux 3 vidéos')}</span> : null;
  if (run.status === 'error' || run.status === 'interrupted' || run.status === 'stopped') {
    return (
      <div className="handoff bad">
        <div className="handoff-head"><span className={`status ${run.status === 'error' ? 'error' : 'review'}`}>{run.status === 'error' ? t('erreur') : run.status === 'stopped' ? t('arrêtée') : t('interrompue')}</span><strong>{label}</strong>{commune}<span className="faint nowrap">{fmtDate(run.endedAt || run.startedAt)}</span></div>
        <p className="muted">{t('La dernière action de l’étape ne s’est pas terminée. Ce que Claude a fait reste dans la session, à droite : tu peux lui écrire pour reprendre, ou relancer l’action.')}</p>
      </div>
    );
  }
  if (!h) {
    return run.finalText ? (
      <div className="handoff">
        <div className="handoff-head"><span className="eyebrow">{t('Claude · dernière action')}</span><strong>{label}</strong>{commune}<span className="faint nowrap">{fmtDate(run.endedAt)}</span></div>
        <Markdown text={run.finalText} />
      </div>
    ) : null;
  }
  const questions = (h.questions || []).filter(Boolean);
  const images = (h.images || []).filter((i) => i && i.path);
  const groups = [...new Set(images.map((i) => i.group || ''))];
  const sendAnswers = () => {
    const text = `${t('Réponses à tes questions :')}\n${questions.map((q, i) => `${i + 1}. ${q}\n→ ${answers[i]?.trim() || t('(pas encore de réponse : garde la question ouverte, n’invente rien)')}`).join('\n')}\n\n${t('Mets à jour les fichiers en conséquence, sans passer à l’action suivante. Les questions restées ouvertes reviennent dans le handoff.')}`;
    // La réponse à une action commune de série retourne dans sa session, dans la vidéo A, et se recopie dans les 3.
    start('message', { text, step: stepId, ...(run.shared ? { serie: run.shared } : {}) });
  };
  const lettre = film.serie && run.shared ? film.serie.lettre : null;
  const lb = images.map((i) => ({ src: filmUrl(film.slug, i.path), label: i.label || i.path }));
  // Les sons et vidéos que Claude livre se lisent ici, sans quitter l'app.
  const files = (h.fichiers || []).filter(Boolean);
  const playable = files.filter((f) => AUDIO.test(f) || VIDEO.test(f));
  const others = files.filter((f) => !playable.includes(f));
  return (
    <div className="handoff">
      <div className="handoff-head">
        <span className="eyebrow">{t('Claude · dernière action')}</span>
        <strong>{label}</strong>
        {commune}
        <span className="faint nowrap">{fmtDate(run.endedAt)}</span>
      </div>
      {h.resume && <Markdown text={h.resume} className="handoff-resume" />}
      {playable.length > 0 && (
        <div className="handoff-media">
          {playable.map((f) => (
            <figure key={f} className={`media-item ${VIDEO.test(f) ? 'is-video' : ''}`}>
              {VIDEO.test(f)
                ? <video src={filmUrl(film.slug, f)} controls preload="metadata" playsInline onPlay={pauseOthers} />
                : <audio src={filmUrl(film.slug, f)} controls preload="metadata" onPlay={pauseOthers} />}
              <figcaption className="mono">{f}</figcaption>
            </figure>
          ))}
        </div>
      )}
      {images.length > 0 && groups.map((g) => (
        <div key={g || 'all'} className="handoff-group">
          {g && groups.length > 1 && <div className="eyebrow">{g}</div>}
          <div className="shots-row">
            {images.filter((i) => (i.group || '') === g).map((i) => (
              <button key={i.path} className="thumb" onClick={() => setBox(images.indexOf(i))}>
                <img src={filmUrl(film.slug, i.path)} alt={i.label || ''} loading="lazy" />
                <span>{i.label || i.path}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
      {(h.options || []).length > 0 && (
        <div className="options">
          {h.options.map((o) => (
            <div key={o.id} className={`option ${lettre === o.id ? 'is-mine' : ''}`}>
              <div className="option-id">{o.id}</div>
              <div className="option-body"><strong>{o.titre || o.title}</strong><p className="muted">{o.pitch}</p></div>
              {lettre ? (lettre === o.id ? <span className="tag">{t('cette vidéo')}</span> : <a className="btn sm ghost" href={`#/film/${film.serie.films.find((f) => f.lettre === o.id)?.slug}/${stepId}`}>{t('Vidéo {lettre}', { lettre: o.id })}</a>)
                : onChoose && <button className="btn sm" onClick={() => onChoose(o)}>{t('Choisir {lettre}', { lettre: o.id })}</button>}
            </div>
          ))}
        </div>
      )}
      {questions.length > 0 && (
        <div className="questions">
          <div className="eyebrow">{t('Claude te demande')}</div>
          {questions.map((q, i) => (
            <div className="field" key={i}>
              <label htmlFor={`q${i}`}>{q}</label>
              <input id={`q${i}`} className="input" value={answers[i] || ''} onChange={(e) => setAnswers((a) => ({ ...a, [i]: e.target.value }))} />
            </div>
          ))}
          <div><button className="btn" onClick={sendAnswers} disabled={!Object.values(answers).some((a) => a.trim())}>{t('Répondre à Claude')}</button></div>
        </div>
      )}
      {others.length > 0 && (
        <div className="handoff-files">{others.map((f) => <span key={f} className="tag mono">{f}</span>)}</div>
      )}
      {box != null && <Lightbox items={lb} start={box} onClose={() => setBox(null)} />}
    </div>
  );
}

// Une action Claude de l'étape. La recommandée est l'action principale (orange) ; les autres restent secondaires.
// Dans une série, une action par vidéo se lance d'abord sur les 3 vidéos ; une action commune se fait une fois pour les 3.
export function ActionRow({ n, action, done, primary, children, input = {}, shot, disabled, note, newSession }) {
  const { film, start, startSerie, starting, running } = useFilm();
  const meta = useMeta();
  const a = meta.actions[action];
  const busy = starting === action;
  const serie = film.serie && !shot ? a.serie : null;
  const blocked = running || Boolean(starting) || Boolean(disabled);
  const why = running ? t('Claude travaille déjà sur ce film') : disabled || undefined;
  return (
    <div className={`action-row ${primary ? 'is-next' : ''} ${done ? 'is-done' : ''}`}>
      <div className="action-num" aria-hidden="true">{done ? '✓' : n}</div>
      <div className="action-body">
        <div className="action-title">
          <h3>{film.serie ? a.labelSerie : a.label}</h3>
          {done && <span className="status done">{t('fait')}</span>}
          {a.fresh && <span className="tag">{t('session neuve')}</span>}
          {serie === 'shared' && <span className="tag">{t('commune aux 3 vidéos')}</span>}
        </div>
        <p className="muted">{film.serie ? a.hintSerie : a.hint}</p>
        {children}
        {note && <p className="faint" style={{ fontSize: 12.5 }}>{note}</p>}
      </div>
      {serie === 'each' ? (
        <div className="action-go action-go-serie">
          <button
            className={`btn ${primary ? 'primary' : ''}`}
            disabled={blocked}
            title={why || (a.needs.includes('choix') ? t('Une action Claude par vidéo, en parallèle, chacune avec sa propre lettre. Compte trois fois dans ton quota.') : t('Une action Claude par vidéo, en parallèle, chacune avec son scénario et sa direction. Compte trois fois dans ton quota.'))}
            onClick={() => startSerie(action, input)}
          >
            {starting === `serie:${action}` && <span className="spin" />}{done ? t('Refaire sur les 3') : t('Lancer sur les 3')}
          </button>
          <button className="btn sm ghost" disabled={blocked} title={why} onClick={() => start(action, input, { newSession })}>
            {busy && <span className="spin" />}{t('Vidéo {lettre} seule', { lettre: film.serie.lettre })}
          </button>
        </div>
      ) : (
        <div className="action-go">
          <button
            className={`btn ${primary ? 'primary' : ''}`}
            disabled={running || busy || Boolean(disabled)}
            title={why || (serie === 'shared' ? t('Se fait une fois, dans la vidéo A, puis se recopie dans les deux autres') : undefined)}
            onClick={() => start(action, input, { shot, newSession })}
          >
            {busy && <span className="spin" />}{done ? t('Refaire') : t('Lancer')}
          </button>
        </div>
      )}
    </div>
  );
}

// En bas de chaque étape : la suite, sans rien à valider. Passer à l'étape suivante vaut accord.
export function NextStep({ step, status }) {
  const { film, slug } = useFilm();
  const meta = useMeta();
  const next = meta.steps.find((s) => s.n === step.n + 1);
  if (!next) return null;
  const nextStatus = film.steps.find((s) => s.id === next.id)?.status;
  return (
    <div className="next-step">
      <a className={`btn ${status.status === 'done' ? 'primary' : ''}`} href={`#/film/${slug}/${next.id}`}>{t('Étape suivante')} · {next.title} →</a>
      {status.status !== 'done' && nextStatus !== 'done' && <span className="faint">{t('Rien à valider : tu avances quand le résultat te va, et tu peux revenir refaire une action.')}</span>}
    </div>
  );
}

// Les fichiers du studio liés à l'étape : lecture rendue, ou édition directe.
export function FilesTabs({ files }) {
  const { film, reload, running } = useFilm();
  const toast = useToast();
  const [cur, setCur] = useState(files[0]);
  const [text, setText] = useState(null);
  const [draft, setDraft] = useState(null);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);
  const info = film.files[cur] || { exists: true, filled: true };
  const stamp = film.state.runs.length + (film.active ? 1 : 0);
  useEffect(() => {
    let alive = true;
    setError(null);
    api(`/api/films/${film.slug}/file?path=${encodeURIComponent(cur)}`)
      .then((t) => { if (alive) setText(t); })
      .catch((e) => { if (alive) { setText(null); setError(e.message); } });
    return () => { alive = false; };
  }, [film.slug, cur, stamp]);
  const save = async () => {
    setSaving(true);
    try {
      await api(`/api/films/${film.slug}/file?path=${encodeURIComponent(cur)}`, { method: 'PUT', text: draft });
      setText(draft); setDraft(null); toast(t('{fichier} enregistré', { fichier: cur })); reload(true);
    } catch (e) { toast(e.message, 'bad'); }
    setSaving(false);
  };
  return (
    <div className="files">
      <div className="files-tabs" role="tablist">
        {files.map((f) => (
          <button key={f} role="tab" aria-selected={f === cur} onClick={() => { setCur(f); setDraft(null); }}>
            <span className="mono">{f}</span>
            {film.files[f] && !film.files[f].filled && <span className="faint"> · {t('vide')}</span>}
          </button>
        ))}
        <span className="grow" />
        {draft == null
          ? <button className="btn sm ghost" onClick={() => setDraft(text || '')} disabled={running || text == null}>{t('Modifier')}</button>
          : <><button className="btn sm ghost" onClick={() => setDraft(null)}>{t('Annuler')}</button><button className="btn sm" onClick={save} disabled={saving}>{saving ? t('Enregistrement…') : t('Enregistrer')}</button></>}
      </div>
      <div className="files-body">
        {error ? <div className="notice">{error}</div>
          : draft != null ? <textarea className="textarea code" value={draft} onChange={(e) => setDraft(e.target.value)} aria-label={t('Contenu de {fichier}', { fichier: cur })} />
            : text == null ? <div className="skeleton" style={{ height: 160 }} />
              : !info.filled ? <div className="notice">{t('Encore le gabarit du studio : Claude le remplira à l’action correspondante.')}</div>
                : cur.endsWith('.md') ? <Markdown text={text} /> : <pre className="code-view">{text}</pre>}
      </div>
    </div>
  );
}

export function ImageStrip({ paths, labels = {}, empty }) {
  const { film } = useFilm();
  const [box, setBox] = useState(null);
  if (!paths.length) return empty || null;
  const items = paths.map((p) => ({ src: filmUrl(film.slug, p), label: labels[p] || p.split('/').pop() }));
  return (
    <>
      <div className="shots-row">
        {paths.map((p, i) => (
          <button key={p} className="thumb" onClick={() => setBox(i)}>
            <img src={filmUrl(film.slug, p)} alt="" loading="lazy" />
            <span>{labels[p] || p.split('/').pop()}</span>
          </button>
        ))}
      </div>
      {box != null && <Lightbox items={items} start={box} onClose={() => setBox(null)} />}
    </>
  );
}

export function Segmented({ value, onChange, options, label }) {
  return (
    <div className="segmented" role="group" aria-label={label}>
      {options.map(([v, l]) => <button key={v} type="button" aria-pressed={value === v} onClick={() => onChange(v)}>{l}</button>)}
    </div>
  );
}

export function NotesField({ id, value, onChange, label = t('Tes notes pour Claude'), placeholder }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label} <span className="faint">{t('(facultatif)')}</span></label>
      <textarea id={id} className="textarea" rows={2} value={value || ''} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
    </div>
  );
}
