import { useEffect, useRef, useState } from 'react';
import { api } from '../api.js';
import { useFilm, lastDone } from '../pages/Film.jsx';
import { StepHeader, Section, HandoffCard, ActionRow, NextStep, FilesTabs, Segmented, NotesField } from '../components/Step.jsx';
import Assets from '../components/Assets.jsx';
import Moodboard from '../components/Moodboard.jsx';

const DEFAULT_BRIEF = { produit: '', site: '', retenir: '', public: '', diffusion: 'Lancement avec son', duree: '15 s', formats: ['16:9'], son: 'Composé en code', inacceptable: '', notes: '' };
const words = (s) => (s.trim() ? s.trim().split(/\s+/).length : 0);

function BriefForm({ value, onChange, onBlur }) {
  const set = (k) => (v) => onChange({ ...value, [k]: v });
  const field = (k) => ({ value: value[k] || '', onChange: (e) => set(k)(e.target.value), onBlur });
  const n = words(value.retenir || '');
  const toggleFormat = (f) => set('formats')(value.formats.includes(f) ? value.formats.filter((x) => x !== f) : [...value.formats, f]);
  return (
    <div className="brief-form">
      <fieldset>
        <legend className="eyebrow">Le film</legend>
        <div className="field">
          <label htmlFor="b-produit">Produit ou sujet</label>
          <input id="b-produit" className="input" {...field('produit')} placeholder="Atelier : le planning des petits studios, en une page" />
        </div>
        <div className="grid-2">
          <div className="field">
            <label htmlFor="b-retenir">Ce que le spectateur doit retenir</label>
            <input id="b-retenir" className="input" {...field('retenir')} placeholder="Une phrase, 15 mots au plus" aria-describedby="b-retenir-help" />
            <span id="b-retenir-help" className="help" style={n > 15 ? { color: 'var(--warn)' } : undefined}>{n} mot{n > 1 ? 's' : ''} sur 15{n > 15 ? ' : resserre, le film ne portera qu’une idée' : ''}</span>
          </div>
          <div className="field">
            <label htmlFor="b-site">Site ou source des faits <span className="faint">(facultatif)</span></label>
            <input id="b-site" className="input" type="url" inputMode="url" {...field('site')} placeholder="https://exemple.com" />
            <span className="help">Claude y prend les textes, écrans et couleurs exacts.</span>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend className="eyebrow">Le public et la diffusion</legend>
        <div className="field">
          <label htmlFor="b-public">Public</label>
          <input id="b-public" className="input" {...field('public')} placeholder="Fondateurs de PME qui ont une idée d’appli en attente" />
        </div>
        <div className="field">
          <span className="label">Diffusion</span>
          <Segmented label="Diffusion" value={value.diffusion} onChange={set('diffusion')} options={[['Lancement avec son', 'Lancement avec son'], ['Fil mobile muet', 'Fil mobile muet'], ['Boucle de page d’accueil', 'Boucle d’accueil']]} />
        </div>
      </fieldset>
      <fieldset>
        <legend className="eyebrow">Le format</legend>
        <div className="grid-2">
          <div className="field">
            <span className="label">Durée</span>
            <Segmented label="Durée" value={value.duree} onChange={set('duree')} options={[['15 s', '15 s'], ['30 s', '30 s'], ['45 s', '45 s'], ['60 s', '60 s']]} />
          </div>
          <div className="field">
            <span className="label">Son</span>
            <Segmented label="Son" value={value.son} onChange={set('son')} options={[['Composé en code', 'Composé en code'], ['Piste fournie', 'Piste fournie'], ['Sans son', 'Sans son']]} />
          </div>
        </div>
        <div className="field">
          <span className="label">Formats</span>
          <div className="checks">
            {['16:9', '9:16', '1:1', '4:5'].map((f) => (
              <label key={f} className="check"><input type="checkbox" checked={value.formats.includes(f)} disabled={f === '16:9'} onChange={() => toggleFormat(f)} />{f}{f === '16:9' ? ' · maître' : ''}</label>
            ))}
          </div>
          <span className="help">Chaque déclinaison est recomposée, jamais recadrée.</span>
        </div>
      </fieldset>
      <fieldset>
        <legend className="eyebrow">Les garde-fous</legend>
        <div className="field">
          <label htmlFor="b-inac">Le film serait inacceptable si…</label>
          <textarea id="b-inac" className="textarea" rows={2} {...field('inacceptable')} placeholder="…il invente un écran du produit, s’il ressemble à un template, si le logo est déformé" />
        </div>
        <div className="field">
          <label htmlFor="b-notes">Notes et références <span className="faint">(facultatif)</span></label>
          <textarea id="b-notes" className="textarea" rows={2} {...field('notes')} placeholder="Ce que tu as en tête : une vidéo vue, une ambiance, une contrainte" />
        </div>
      </fieldset>
    </div>
  );
}

export default function Scenario({ step, status }) {
  const { film, slug } = useFilm();
  const inputs = film.state.inputs || {};
  const [brief, setBrief] = useState({ ...DEFAULT_BRIEF, ...(inputs.brief || {}) });
  const [scenNotes, setScenNotes] = useState(inputs.scenarios?.notes || '');
  // Dans une série, chaque vidéo prend par défaut le scénario de sa lettre.
  const [choix, setChoix] = useState(inputs.scenario_final?.choix || film.serie?.lettre || '');
  const [finalNotes, setFinalNotes] = useState(inputs.scenario_final?.notes || '');
  const finalRef = useRef(null);
  const briefDirty = useRef(false);

  const options = lastDone(film, 'scenarios')?.handoff?.options || [];
  const done = {
    brief: film.files['BRIEF.md']?.filled,
    scenarios: Boolean(lastDone(film, 'scenarios')),
    scenario_final: Boolean(lastDone(film, 'scenario_final')),
  };
  const next = status.status === 'done' ? null : !done.brief ? 'brief' : !done.scenarios ? 'scenarios' : !done.scenario_final ? 'scenario_final' : null;
  const [showBrief, setShowBrief] = useState(!done.brief);
  useEffect(() => { if (!done.brief) setShowBrief(true); }, [done.brief]);

  const saveBrief = () => {
    if (!briefDirty.current) return;
    briefDirty.current = false;
    api(`/api/films/${slug}/inputs/brief`, { method: 'PUT', body: brief }).catch(() => {});
  };
  const choose = (o) => { setChoix(o.id); finalRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }); };

  return (
    <div className="step">
      <StepHeader step={step} status={status} />
      <HandoffCard stepId="scenario" onChoose={choose} />

      <Section title={film.serie ? 'Ce qui oriente cette vidéo' : 'Ce qui oriente le film'} aside={<span className="muted">{film.serie ? `Lu par Claude pour le scénario et la direction de la vidéo ${film.serie.lettre}` : 'Lu par Claude dans MOODBOARD.md'}</span>}>
        <Moodboard />
      </Section>

      <Section title="Actions">
        <div className="actions">
          <ActionRow n={1} action="brief" done={done.brief} primary={next === 'brief'} input={brief}>
            {done.brief && !showBrief
              ? <button className="btn sm ghost" onClick={() => setShowBrief(true)}>Revoir mes réponses au brief</button>
              : <BriefForm value={brief} onChange={(v) => { briefDirty.current = true; setBrief(v); }} onBlur={saveBrief} />}
            <Assets />
          </ActionRow>
          <ActionRow n={2} action="scenarios" done={done.scenarios} primary={next === 'scenarios'} input={{ notes: scenNotes }} disabled={!done.brief ? 'Prépare d’abord le brief' : null}>
            <NotesField id="scen-notes" value={scenNotes} onChange={setScenNotes} placeholder="Un angle que tu veux voir, un ton, ce qu’il faut éviter" />
          </ActionRow>
          <div ref={finalRef}>
            <ActionRow n={3} action="scenario_final" done={done.scenario_final} primary={next === 'scenario_final'} input={{ choix, notes: finalNotes }} disabled={!choix && !finalNotes.trim() ? 'Choisis un scénario' : null}>
              <div className="field">
                <span className="label">{film.serie ? `Scénario de la vidéo ${film.serie.lettre}` : 'Scénario retenu'}</span>
                {options.length ? (
                  <Segmented label="Scénario retenu" value={choix} onChange={setChoix} options={[...options.map((o) => [o.id, `${o.id} · ${o.titre || o.title}`]), ['mélange', 'Un mélange (dis lequel)']]} />
                ) : <input className="input" value={choix} onChange={(e) => setChoix(e.target.value)} placeholder="A, B, C, ou un mélange" />}
              </div>
              {film.serie && <span className="help">« Lancer sur les 3 » : chaque vidéo développe le scénario de sa lettre, avec les mêmes notes.</span>}
              <NotesField id="final-notes" value={finalNotes} onChange={setFinalNotes} label="Ce que tu changes" placeholder="Garde l’accroche de B, la fin de A ; le ton plus sec" />
            </ActionRow>
          </div>
        </div>
      </Section>

      <NextStep step={step} status={status} />

      <Section title="Fichiers de l’étape">
        <FilesTabs files={['SCENARIO.md', 'BRIEF.md', 'MOODBOARD.md']} />
      </Section>
    </div>
  );
}
