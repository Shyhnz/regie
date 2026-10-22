import { useRef, useState } from 'react';
import { filmUrl } from '../api.js';
import { useFilm, lastDone } from '../pages/Film.jsx';
import { StepHeader, Section, HandoffCard, ActionRow, NextStep, FilesTabs, Segmented, NotesField, ImageStrip } from '../components/Step.jsx';
import TimelineBar from '../components/TimelineBar.jsx';
import Lightbox from '../components/Lightbox.jsx';

const pad = (n) => String(n).padStart(2, '0');

function DaGallery() {
  const { film } = useFilm();
  const [box, setBox] = useState(null);
  const da = film.media.da;
  if (!da.length) return null;
  const options = lastDone(film, 'directions')?.handoff?.options || [];
  const mine = film.serie?.lettre;
  const groups = {};
  for (const f of da) {
    const name = f.path.split('/').pop();
    const g = /^final/i.test(name) ? 'Retenue' : (/^([A-Z])[-_]/.exec(name)?.[1] || 'Autres');
    (groups[g] = groups[g] || []).push(f.path);
  }
  const flat = Object.values(groups).flat();
  return (
    <div className="da-gallery">
      {Object.entries(groups).map(([g, paths]) => {
        const o = options.find((x) => x.id === g);
        return (
          <div key={g} className={`da-row ${mine && g === mine ? 'is-mine' : ''}`}>
            <div className="da-label">
              <span className="option-id">{g === 'Retenue' ? '★' : g}</span>
              <div><strong>{g === 'Retenue' ? 'Direction retenue' : o?.titre || o?.title || `Direction ${g}`}</strong>{o?.pitch && <p className="muted">{o.pitch}</p>}</div>
              {mine && g !== 'Retenue' && g.length === 1 && (g === mine ? <span className="tag">cette vidéo</span> : <span className="faint nowrap">vidéo {g}</span>)}
            </div>
            <div className="da-frames">
              {paths.map((p) => (
                <button key={p} className="frame" onClick={() => setBox(flat.indexOf(p))}>
                  <img src={filmUrl(film.slug, p)} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        );
      })}
      {box != null && <Lightbox items={flat.map((p) => ({ src: filmUrl(film.slug, p), label: p.split('/').pop() }))} start={box} onClose={() => setBox(null)} />}
    </div>
  );
}

function ShotCards() {
  const { film } = useFilm();
  const [box, setBox] = useState(null);
  const fps = film.timeline?.fps || 60;
  if (!film.shots.length) return null;
  const imgs = film.shots.filter((s) => s.storyboard).map((s) => ({ src: filmUrl(film.slug, s.storyboard), label: `Plan ${s.n} · ${s.plan}` }));
  return (
    <ol className="shot-cards">
      {film.shots.map((s) => (
        <li key={s.n} className="shot-card">
          <button className="frame" onClick={() => s.storyboard && setBox(imgs.findIndex((i) => i.label.startsWith(`Plan ${s.n} `)))} disabled={!s.storyboard} aria-label={`Agrandir le plan ${s.n}`}>
            {s.storyboard ? <img src={filmUrl(film.slug, s.storyboard)} alt="" loading="lazy" /> : <span className="frame-empty mono">plan {pad(s.n)} · pas encore dessiné</span>}
          </button>
          <div className="shot-meta">
            <div className="shot-title"><span className="mono shot-n">{pad(s.n)}</span><strong>{s.plan}</strong></div>
            {s.frames && <span className="mono faint nowrap">f{s.frames.start}–f{s.frames.end} · {((s.frames.end - s.frames.start) / fps).toFixed(2).replace('.', ',')} s</span>}
            {s.raison && <p><span className="faint">Raison · </span>{s.raison}</p>}
            {s.heros && <p><span className="faint">Héros · </span>{s.heros}</p>}
            {s.couture && <p><span className="faint">Couture · </span>{s.couture}</p>}
          </div>
        </li>
      ))}
      {box != null && box >= 0 && <Lightbox items={imgs} start={box} onClose={() => setBox(null)} />}
    </ol>
  );
}

export default function Storyboard({ step, status }) {
  const { film } = useFilm();
  const inputs = film.state.inputs || {};
  const [daNotes, setDaNotes] = useState(inputs.directions?.notes || '');
  const [choix, setChoix] = useState(inputs.direction_fix?.choix || film.serie?.lettre || '');
  const [fixNotes, setFixNotes] = useState(inputs.direction_fix?.notes || '');
  const [cutNotes, setCutNotes] = useState(inputs.decoupage?.notes || '');
  const [sbNotes, setSbNotes] = useState(inputs.storyboard?.notes || '');
  const fixRef = useRef(null);
  const options = lastDone(film, 'directions')?.handoff?.options || [];
  const done = {
    directions: film.media.da.some((f) => /\/[A-Z][-_]/.test(f.path)) || Boolean(lastDone(film, 'directions')),
    direction_fix: film.files['STYLE.md']?.filled,
    decoupage: film.shots.length > 0 && (film.timeline?.events?.length || 0) > 0,
    storyboard: film.shots.length > 0 && film.shots.every((s) => s.storyboard),
  };
  const next = status.status === 'done' ? null : !done.directions ? 'directions' : !done.direction_fix ? 'direction_fix' : !done.decoupage ? 'decoupage' : !done.storyboard ? 'storyboard' : null;
  const choose = (o) => { setChoix(o.id); fixRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }); };
  const planche = film.media.storyboard.find((f) => /planche/.test(f.path));

  return (
    <div className="step">
      <StepHeader step={step} status={status} />
      <HandoffCard stepId="storyboard" onChoose={choose} />

      <Section title="Actions">
        <div className="actions">
          <ActionRow n={1} action="directions" done={done.directions} primary={next === 'directions'} input={{ notes: daNotes }}>
            <NotesField id="da-notes" value={daNotes} onChange={setDaNotes} placeholder={film.serie ? 'Une matière ou une référence pour l’une des vidéos (« la B en papier découpé »)' : 'Une direction que tu veux voir parmi les trois, une matière, une référence'} />
          </ActionRow>
          <div ref={fixRef}>
            <ActionRow n={2} action="direction_fix" done={done.direction_fix} primary={next === 'direction_fix'} input={{ choix, notes: fixNotes }} disabled={!choix && !fixNotes.trim() ? 'Choisis une direction' : null}>
              <div className="field">
                <span className="label">{film.serie ? `Direction de la vidéo ${film.serie.lettre}` : 'Direction retenue'}</span>
                {options.length
                  ? <Segmented label="Direction" value={choix} onChange={setChoix} options={[...options.map((o) => [o.id, `${o.id} · ${o.titre || o.title}`]), ['mélange', 'Un mélange']]} />
                  : <input className="input" value={choix} onChange={(e) => setChoix(e.target.value)} placeholder="A, B, C ou un mélange" />}
              </div>
              {film.serie && <span className="help">« Lancer sur les 3 » : chaque vidéo fixe la direction de sa lettre, avec les mêmes notes.</span>}
              <NotesField id="fix-notes" value={fixNotes} onChange={setFixNotes} label="Ce que tu changes" placeholder="Le fond de B avec la typo de A ; l’accent moins présent" />
            </ActionRow>
          </div>
          <ActionRow n={3} action="decoupage" done={done.decoupage} primary={next === 'decoupage'} input={{ notes: cutNotes }}>
            <NotesField id="cut-notes" value={cutNotes} onChange={setCutNotes} placeholder="Un tempo, une piste, un plan à ne pas oublier" />
          </ActionRow>
          <ActionRow n={4} action="storyboard" done={done.storyboard} primary={next === 'storyboard'} input={{ notes: sbNotes }} disabled={!film.shots.length ? 'Découpe d’abord en plans' : null}>
            <NotesField id="sb-notes" value={sbNotes} onChange={setSbNotes} placeholder="Des plans à soigner en particulier" />
          </ActionRow>
        </div>
      </Section>

      {film.media.da.length > 0 && (
        <Section title="Directions artistiques" aside={<span className="muted">{film.serie ? 'Une direction par vidéo, à juger côte à côte' : 'Choisis sur l’image'}</span>}>
          <DaGallery />
        </Section>
      )}

      {(film.timeline?.events?.length > 0 || film.shots.length > 0) && (
        <Section title="Storyboard" aside={film.timelineError ? <span className="status error">timeline.js illisible</span> : null}>
          {film.timelineError && <div className="error-box"><strong>timeline.js ne se lit pas.</strong><span>{film.timelineError}</span></div>}
          <TimelineBar timeline={film.timeline} shots={film.shots} />
          <ShotCards />
          {planche && <ImageStrip paths={[planche.path]} labels={{ [planche.path]: 'Planche du storyboard' }} />}
          {film.checks.length > 0 && (
            <ul className="checklist readonly">
              {film.checks.map((c, i) => <li key={i} className={c.done ? 'ok' : ''}>{c.done ? '✓' : '○'} {c.text}</li>)}
            </ul>
          )}
        </Section>
      )}

      <NextStep step={step} status={status} />

      <Section title="Fichiers de l’étape">
        <FilesTabs files={['STYLE.md', 'SHOTLIST.md', 'timeline.js', 'motion.js', 'REFERENCE.md']} />
      </Section>
    </div>
  );
}
