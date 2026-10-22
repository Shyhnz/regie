import { useEffect, useRef, useState } from 'react';
import { api, filmUrl, fmtDate } from '../api.js';
import { useFilm, lastDone } from '../pages/Film.jsx';
import { StepHeader, Section, HandoffCard, ActionRow, NextStep, Segmented, NotesField } from '../components/Step.jsx';
import Waveform from '../components/Waveform.jsx';
import Markdown from '../components/Markdown.jsx';
import { t } from '../i18n.js';

// Toute la musique du film, où que Claude l'ait rangée : groupée par dossier, les mix avant les pistes séparées.
const STEM = /[-_](lit|coups|bed|hits|stems?|pistes?)\.[a-z0-9]+$|\/stems?\//i;
const folderOf = (p) => p.replace(/\/[^/]+$/, '').replace(/\/?assets\/audio$/, '');
const folderLabel = (f) => {
  if (!f) return t('Ce film');
  const v = f.match(/^variants\/(.*)$/);
  if (v) return t('Variante {nom}', { nom: v[1] });
  const m = f.match(/^films\/(.*)$/);
  return m ? t('Film {nom}', { nom: m[1] }) : f;
};

function Sounds({ audio, timeline, shots }) {
  const { slug } = useFilm();
  const player = useRef(null);
  const [cur, setCur] = useState(null);
  const pick = audio.find((a) => a.path === cur)?.path || audio.find((a) => !STEM.test(a.path))?.path || audio[0].path;
  // Lancé dans le geste du clic, sinon l'app du Dock peut refuser de jouer.
  const play = (p) => {
    const a = player.current;
    if (a) { a.src = filmUrl(slug, p); a.play().catch(() => {}); }
    setCur(p);
  };
  const folders = [...new Set(audio.map((a) => folderOf(a.path)))];
  const ordered = (f) => audio.filter((a) => folderOf(a.path) === f).sort((a, b) => STEM.test(a.path) - STEM.test(b.path) || b.mtime - a.mtime);
  return (
    <div className="sounds">
      <Waveform src={filmUrl(slug, pick)} timeline={pick.startsWith('assets/audio/') ? timeline : null} shots={shots} audioRef={player} />
      {audio.length > 1 && (
        <div className="sound-groups">
          {folders.map((f) => (
            <div key={f} className="sound-group">
              {folders.length > 1 && <div className="eyebrow">{folderLabel(f)}</div>}
              <ul className="sound-list">
                {ordered(f).map((a) => (
                  <li key={a.path}>
                    <button className={`sound-row ${a.path === pick ? 'is-current' : ''}`} aria-current={a.path === pick ? 'true' : undefined} onClick={() => play(a.path)} title={a.path}>
                      <span className="sound-play" aria-hidden="true">▶</span>
                      <span className="sound-name">{a.path.split('/').pop()}</span>
                      {STEM.test(a.path) && <span className="tag">{t('piste séparée')}</span>}
                      <span className="faint nowrap">{fmtDate(new Date(a.mtime).toISOString())}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Musique({ step, status }) {
  const { film, slug } = useFilm();
  const inputs = film.state.inputs || {};
  const briefSon = inputs.brief?.son;
  const [mode, setMode] = useState(inputs.sound?.mode || (briefSon === 'Piste fournie' ? 'piste' : 'code'));
  const [intention, setIntention] = useState(inputs.sound?.intention || '');
  const [notes, setNotes] = useState(inputs.sound?.notes || '');
  const [mNotes, setMNotes] = useState(inputs.measure?.notes || '');
  const [report, setReport] = useState(null);
  const audio = film.media.audio;
  const stamp = film.state.runs.length;
  useEffect(() => {
    api(`/api/films/${slug}/file?path=reviews/son.md`).then(setReport).catch(() => setReport(null));
  }, [slug, stamp]);
  const done = { sound: Boolean(lastDone(film, 'sound')) || audio.some((a) => /score/.test(a.path)), measure: Boolean(lastDone(film, 'measure')) };
  const next = status.status === 'done' ? null : !done.sound ? 'sound' : null;
  const tl = film.timeline;

  return (
    <div className="step">
      <StepHeader step={step} status={status} />
      <div className="notice">
        {t('La musique mène l’animation : le tempo, les sections et les repères son se décident au storyboard, dans timeline.js.')}
        {' '}{tl ? <>{t('Ici :')} <span className="mono">{t('{bpm} BPM · {sections} sections · {reperes} repères son', { bpm: tl.bpm, sections: tl.sections.length, reperes: tl.cues.length })}</span>. {t('Cette étape fabrique le son et le mesure.')}</> : t('Le storyboard n’a pas encore de grille.')}
      </div>
      <HandoffCard stepId="musique" />

      <Section title={t('Écouter')} aside={audio.length > 1 ? <span className="muted">{t('{n} sons', { n: audio.length })}</span> : null}>
        {audio.length ? <Sounds audio={audio} timeline={tl} shots={film.shots} />
          : <div className="empty"><strong>{t('Pas encore de son.')}</strong><span>{t('Lance « Fabriquer la bande-son », ou dépose une piste à l’étape Scénario (elle sera rangée dans assets/audio/). Chaque son que Claude fabrique apparaît ici, où qu’il soit rangé dans le film.')}</span></div>}
      </Section>

      <Section title={t('Actions')}>
        <div className="actions">
          <ActionRow n={1} action="sound" done={done.sound} primary={next === 'sound'} input={{ mode, intention, notes }}>
            <div className="field">
              <span className="label">{t('Source')}</span>
              <Segmented label={t('Source du son')} value={mode} onChange={setMode} options={[['code', t('Composé en code')], ['piste', t('Piste fournie (assets/audio)')]]} />
            </div>
            <div className="field">
              <label htmlFor="intention">{t('Intention musicale')} <span className="faint">{t('(facultatif)')}</span></label>
              <textarea id="intention" className="textarea" rows={2} value={intention} onChange={(e) => setIntention(e.target.value)} placeholder={t('Pad chaud, charleston serré ; drop franc sur la révélation ; silence d’un demi-temps avant le logo')} />
            </div>
            <NotesField id="snd-notes" value={notes} onChange={setNotes} />
          </ActionRow>
          <ActionRow n={2} action="measure" done={done.measure} input={{ notes: mNotes }} disabled={!audio.length ? t('Il n’y a pas encore de son') : null}>
            <NotesField id="m-notes" value={mNotes} onChange={setMNotes} placeholder={t('Un coup qui te semble en retard, un passage trop fort')} />
          </ActionRow>
        </div>
      </Section>

      {report && (
        <Section title={t('Mesures')} aside={<span className="mono faint">reviews/son.md</span>}>
          <div className="panel" style={{ padding: 16 }}><Markdown text={report} /></div>
        </Section>
      )}

      <NextStep step={step} status={status} />
    </div>
  );
}
