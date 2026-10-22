import { useEffect, useRef, useState } from 'react';
import { api, filmUrl, fmtDate } from '../api.js';
import { useFilm, lastDone } from '../pages/Film.jsx';
import { useToast } from '../components/Toast.jsx';
import { StepHeader, Section, HandoffCard, ActionRow, NextStep, NotesField, ImageStrip } from '../components/Step.jsx';
import TimelineBar from '../components/TimelineBar.jsx';
import Markdown from '../components/Markdown.jsx';
import Lightbox from '../components/Lightbox.jsx';

const pad = (n) => String(n).padStart(2, '0');
// Un plan construit est gardé tant que tu ne le corriges pas (« ok » : plans validés avant la suppression des portes).
const SHOT_STATUS = { todo: ['à construire', ''], built: ['construit', 'done'], ok: ['construit', 'done'] };
const EMPTY_FIX = { ou: '', constat: '', changement: '', fixe: '' };

function Player() {
  const { film } = useFilm();
  const video = useRef(null);
  const [t, setT] = useState(0);
  const renders = film.media.renders;
  // Par défaut le dernier rendu du format maître : les déclinaisons verticales ou carrées se choisissent à la main.
  const master = renders.find((r) => !/9x16|vertical|1x1|4x5|carre/i.test(r.path)) || renders[0];
  const [cur, setCur] = useState(master?.path || null);
  useEffect(() => { if (!cur && master) setCur(master.path); }, [master, cur]);
  if (!renders.length) {
    return <div className="empty"><strong>Pas encore de rendu.</strong><span>Le premier plan construit donnera ses images témoins ; « Assembler le montage » donnera le premier brouillon complet.</span></div>;
  }
  return (
    <div className="player">
      <video ref={video} src={filmUrl(film.slug, cur)} controls playsInline onTimeUpdate={(e) => setT(e.currentTarget.currentTime)} />
      <TimelineBar timeline={film.timeline} shots={film.shots} playhead={t} onSeek={(s) => { if (video.current) video.current.currentTime = s; }} height={110} />
      {renders.length > 1 && (
        <div className="field" style={{ maxWidth: 420 }}>
          <label htmlFor="render-pick">Rendu affiché</label>
          <select id="render-pick" className="select" value={cur} onChange={(e) => setCur(e.target.value)}>
            {renders.map((r) => <option key={r.path} value={r.path}>{r.path.replace('renders/', '')} · {fmtDate(new Date(r.mtime).toISOString())}</option>)}
          </select>
        </div>
      )}
    </div>
  );
}

function FixForm({ shot, onDone }) {
  const { start, running } = useFilm();
  const fps = useFilm().film.timeline?.fps || 60;
  const where = shot.frames ? `image globale f${shot.frames.start}–f${shot.frames.end}, plan ${shot.n}` : `plan ${shot.n}`;
  const [fixes, setFixes] = useState([{ ...EMPTY_FIX, ou: where }]);
  const [gout, setGout] = useState('');
  const set = (i, k, v) => setFixes((xs) => xs.map((x, j) => (j === i ? { ...x, [k]: v } : x)));
  const ready = fixes.some((f) => f.constat.trim() && f.changement.trim()) || gout.trim();
  const send = async () => {
    const rec = await start('fix_shot', { corrections: fixes, gout }, { shot: shot.n });
    if (rec) onDone();
  };
  return (
    <div className="fix-form">
      <p className="muted">Au plus 3 corrections chiffrées et 1 note de goût par tour. Une sensation se dit en nombres (« ça traîne » → « chaque tenue −1 temps »).</p>
      {fixes.map((f, i) => (
        <fieldset key={i} className="fix">
          <legend className="eyebrow">Correction {i + 1}</legend>
          <div className="grid-2">
            <div className="field"><label htmlFor={`ou${i}`}>Où</label><input id={`ou${i}`} className="input" value={f.ou} onChange={(e) => set(i, 'ou', e.target.value)} placeholder={`image globale f…, à ${fps} im/s`} /></div>
            <div className="field"><label htmlFor={`co${i}`}>Constat</label><input id={`co${i}`} className="input" value={f.constat} onChange={(e) => set(i, 'constat', e.target.value)} placeholder="le curseur recouvre l’étiquette du résultat" /></div>
          </div>
          <div className="grid-2">
            <div className="field"><label htmlFor={`ch${i}`}>Changement, et seulement lui</label><input id={`ch${i}`} className="input" value={f.changement} onChange={(e) => set(i, 'changement', e.target.value)} placeholder="trajet du curseur après l’appui, repos à 24 px de l’étiquette" /></div>
            <div className="field"><label htmlFor={`fi${i}`}>Reste fixe</label><input id={`fi${i}`} className="input" value={f.fixe} onChange={(e) => set(i, 'fixe', e.target.value)} placeholder="l’appui, la révélation, les textes, les repères son" /></div>
          </div>
          {fixes.length > 1 && <button type="button" className="btn sm ghost" onClick={() => setFixes((xs) => xs.filter((_, j) => j !== i))}>Retirer cette correction</button>}
        </fieldset>
      ))}
      {fixes.length < 3 && <button type="button" className="btn sm ghost" onClick={() => setFixes((xs) => [...xs, { ...EMPTY_FIX, ou: where }])}>+ Ajouter une correction</button>}
      <div className="field">
        <label htmlFor={`gout-${shot.n}`}>Note de goût <span className="faint">(une seule par tour, facultatif)</span></label>
        <input id={`gout-${shot.n}`} className="input" value={gout} onChange={(e) => setGout(e.target.value)} placeholder="l’arrivée du titre manque de poids" />
      </div>
      <div className="row-end">
        <button type="button" className="btn ghost" onClick={onDone}>Annuler</button>
        <button type="button" className="btn primary" disabled={!ready || running} onClick={send}>Envoyer la correction</button>
      </div>
    </div>
  );
}

function ShotRow({ shot, next }) {
  const { film, slug, running } = useFilm();
  const [fixing, setFixing] = useState(false);
  const [box, setBox] = useState(null);
  const thumb = film.media.thumbs.find((f) => f.path.endsWith(`plan-${pad(shot.n)}.png`))?.path;
  const imgs = [
    shot.storyboard && { src: filmUrl(slug, shot.storyboard), label: `Plan ${shot.n} · storyboard` },
    ...shot.reviews.map((p, i) => ({ src: filmUrl(slug, p), label: `Plan ${shot.n} · témoin ${i + 1}` })),
    thumb && { src: filmUrl(slug, thumb), label: `Plan ${shot.n} · vignette du rendu` },
  ].filter(Boolean);
  const [label, cls] = SHOT_STATUS[shot.status] || SHOT_STATUS.todo;
  return (
    <li className={`shot-row ${shot.status}`}>
      <div className="shot-row-head">
        <span className="mono shot-n">{pad(shot.n)}</span>
        <strong>{shot.blender ? shot.plan.replace(/\s*[·•-]?\s*blender\b/i, '') : shot.plan}</strong>
        {shot.blender && <span className="tag" title="Ce plan se fait dans Blender">Blender</span>}
        {shot.frames &&<span className="mono faint nowrap">f{shot.frames.start}–f{shot.frames.end}</span>}
        <span className={`status ${cls}`}>{label}</span>
      </div>
      <div className="shot-compare">
        <div className="compare-cell">
          <span className="eyebrow">Storyboard</span>
          <button className="frame" onClick={() => shot.storyboard && setBox(0)} disabled={!shot.storyboard}>
            {shot.storyboard ? <img src={filmUrl(slug, shot.storyboard)} alt="" loading="lazy" /> : <span className="frame-empty mono">pas d’image</span>}
          </button>
        </div>
        <div className="compare-cell wide">
          <span className="eyebrow">Rendu · images témoins</span>
          {shot.reviews.length || thumb ? (
            <div className="witnesses">
              {[...shot.reviews, ...(thumb ? [thumb] : [])].map((p) => (
                <button key={p} className="frame" onClick={() => setBox(imgs.findIndex((i) => i.src === filmUrl(slug, p)))}><img src={filmUrl(slug, p)} alt="" loading="lazy" /></button>
              ))}
            </div>
          ) : <div className="frame frame-empty mono">pas encore construit</div>}
        </div>
      </div>
      {shot.raison && <p className="muted shot-why">{shot.raison}{shot.heros ? ` · héros : ${shot.heros}` : ''}</p>}
      <div className="shot-actions">
        {shot.status === 'todo' ? (
          <ActionInline action="build_shot" shot={shot.n} primary={next === shot.n} label="Construire ce plan" />
        ) : (
          <>
            <button className="btn" onClick={() => setFixing((f) => !f)} disabled={running} aria-expanded={fixing}>Corriger</button>
            <ActionInline action="build_shot" shot={shot.n} label="Reconstruire" ghost />
          </>
        )}
      </div>
      {fixing && <FixForm shot={shot} onDone={() => setFixing(false)} />}
      {box != null && box >= 0 && <Lightbox items={imgs} start={box} onClose={() => setBox(null)} />}
    </li>
  );
}

function ActionInline({ action, shot, primary, label, ghost }) {
  const { start, starting, running } = useFilm();
  return (
    <button className={`btn ${primary ? 'primary' : ghost ? 'ghost' : ''}`} disabled={running || Boolean(starting)} onClick={() => start(action, {}, { shot })}>
      {starting === action && <span className="spin" />}{label}
    </button>
  );
}

function Review() {
  const { film, slug } = useFilm();
  const [critique, setCritique] = useState(null);
  const v = film.media.reviews[0];
  const stamp = film.state.runs.length;
  useEffect(() => {
    setCritique(null);
    if (v?.critique) api(`/api/films/${slug}/file?path=${encodeURIComponent(`reviews/v${v.version}/critique.md`)}`).then(setCritique).catch(() => setCritique(null));
  }, [slug, v?.version, v?.critique, stamp]);
  if (!v) return null;
  const order = (p) => (/planche-4ips/.test(p) ? 0 : /telephone/.test(p) ? 1 : /couture/.test(p) ? 2 : /planche/.test(p) ? 3 : 4);
  const paths = v.images.map((i) => i.path).filter((p) => !/temoin-/.test(p)).sort((a, b) => order(a) - order(b));
  const labels = Object.fromEntries(paths.map((p) => [p, p.split('/').pop().replace('.png', '').replace('planche-4ips', 'planche 4 im/s').replace('planche-telephone', 'planche téléphone').replace('couture-', 'couture ')]));
  return (
    <Section title={`Revue v${v.version}`} aside={<span className="muted">{v.images.length} images</span>}>
      <ImageStrip paths={paths} labels={labels} />
      {critique && <details className="critique" open><summary><strong>Critique neuve</strong> <span className="faint">reviews/v{v.version}/critique.md</span></summary><Markdown text={critique} /></details>}
    </Section>
  );
}

export default function Plans({ step, status }) {
  const { film, slug, running } = useFilm();
  const toast = useToast();
  const inputs = film.state.inputs || {};
  const [asmNotes, setAsmNotes] = useState(inputs.assemble?.notes || '');
  const [critNotes, setCritNotes] = useState(inputs.critique?.notes || '');
  const [fixNotes, setFixNotes] = useState(inputs.apply_critique?.notes || '');
  const [thumbing, setThumbing] = useState(false);
  const [preview, setPreview] = useState(null);
  const shots = film.shots;
  const nextShot = shots.find((s) => s.status === 'todo');
  const allBuilt = shots.length > 0 && !nextShot;
  const assembled = Boolean(lastDone(film, 'assemble')) || film.media.reviews.length > 0;
  const critiqued = Boolean(lastDone(film, 'critique'));
  const next = status.status === 'done' ? null : nextShot ? nextShot.n : !assembled ? 'assemble' : !critiqued ? 'critique' : null;

  const thumbs = async () => {
    setThumbing(true);
    try { const r = await api(`/api/films/${slug}/thumbs`, { method: 'POST' }); toast(`${r.count} vignettes à jour`); } catch (e) { toast(e.message, 'bad'); }
    setThumbing(false);
  };
  const openPreview = async () => {
    try { const r = await api(`/api/films/${slug}/preview`, { method: 'POST' }); setPreview(r.url); window.open(r.url, '_blank', 'noopener'); } catch (e) { toast(e.message, 'bad'); }
  };

  return (
    <div className="step">
      <StepHeader step={step} status={status} />
      <HandoffCard stepId="plans" />

      <Section title="Le film en cours" aside={(
        <div className="row-tools">
          <button className="btn sm ghost" onClick={thumbs} disabled={thumbing || running}>{thumbing ? 'Capture…' : 'Mettre à jour les vignettes'}</button>
          <button className="btn sm ghost" onClick={openPreview}>{preview ? 'Aperçu live ouvert' : 'Aperçu live HyperFrames'}</button>
        </div>
      )}>
        <Player />
      </Section>

      <Section title="Plans" aside={<span className="muted">{shots.filter((s) => s.status !== 'todo').length} / {shots.length} construits</span>}>
        {shots.length === 0 ? (
          <div className="empty"><strong>Aucun plan dans SHOTLIST.md.</strong><span>La liste des plans se fait à l’étape Storyboard (« Découper en plans »).</span><a className="btn" href={`#/film/${slug}/storyboard`}>Aller au storyboard</a></div>
        ) : (
          <ol className="shot-rows">{shots.map((s) => <ShotRow key={s.n} shot={s} next={next} />)}</ol>
        )}
      </Section>

      <Section title="Montage et critique">
        <div className="actions">
          <ActionRow n={1} action="assemble" done={assembled} primary={next === 'assemble'} input={{ notes: asmNotes }} note={allBuilt ? null : 'Les plans pas encore construits le seront au passage, un par un.'}>
            <NotesField id="asm-notes" value={asmNotes} onChange={setAsmNotes} placeholder="Une couture à soigner, un rythme à vérifier" />
          </ActionRow>
          <ActionRow n={2} action="critique" done={critiqued} primary={next === 'critique'} input={{ notes: critNotes }} disabled={!assembled ? 'Assemble d’abord le montage' : null}>
            <NotesField id="crit-notes" value={critNotes} onChange={setCritNotes} label="Ce que le critique doit regarder en particulier" placeholder="La beauté de l’accroche ; la lisibilité au téléphone" />
          </ActionRow>
          <ActionRow n={3} action="apply_critique" done={Boolean(lastDone(film, 'apply_critique'))} input={{ notes: fixNotes }} disabled={!critiqued ? 'Fais d’abord la critique' : null}>
            <NotesField id="fix-notes" value={fixNotes} onChange={setFixNotes} label="Les défauts à réparer" placeholder="Les 3 plus graves, ou ceux que tu désignes" />
          </ActionRow>
        </div>
      </Section>

      <Review />

      <NextStep step={step} status={status} />
    </div>
  );
}
