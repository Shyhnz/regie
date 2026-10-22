import { useEffect, useState } from 'react';
import { api, filmUrl } from '../api.js';
import { useFilm, lastDone } from '../pages/Film.jsx';
import { StepHeader, Section, HandoffCard, ActionRow, NotesField, ImageStrip } from '../components/Step.jsx';
import Markdown from '../components/Markdown.jsx';

const mb = (n) => (n ? `${(n / 1e6).toFixed(1).replace('.', ',')} Mo` : '—');

function Deliverable({ path }) {
  const { slug } = useFilm();
  const [probe, setProbe] = useState(null);
  useEffect(() => { api(`/api/films/${slug}/probe?path=${encodeURIComponent(path)}`).then(setProbe).catch(() => setProbe(null)); }, [slug, path]);
  return (
    <figure className="deliverable">
      <video src={filmUrl(slug, path)} controls preload="metadata" playsInline />
      <figcaption>
        <a className="mono" href={filmUrl(slug, path)} download>{path.replace('out/', '')}</a>
        {probe ? (
          <span className="mono faint nowrap">{probe.width}×{probe.height} · {probe.fps} im/s · {probe.duration?.toFixed(3).replace('.', ',')} s{probe.frames ? ` · ${probe.frames} im` : ''} · {mb(probe.size)}{probe.audio ? ' · son' : ' · muet'}</span>
        ) : <span className="faint">mesure…</span>}
      </figcaption>
    </figure>
  );
}

export default function Final({ step, status }) {
  const { film, slug } = useFilm();
  const inputs = film.state.inputs || {};
  const briefFormats = inputs.brief?.formats || ['16:9'];
  const [formats, setFormats] = useState(inputs.deliver?.formats || briefFormats);
  const [notes, setNotes] = useState(inputs.deliver?.notes || '');
  const [rNotes, setRNotes] = useState(inputs.ranger?.notes || '');
  const [docs, setDocs] = useState({});
  const stamp = film.state.runs.length;
  useEffect(() => {
    Promise.all(['out/LIVRAISON.md', 'reviews/ranger.md'].map((p) => api(`/api/films/${slug}/file?path=${encodeURIComponent(p)}`).then((t) => [p, t]).catch(() => [p, null])))
      .then((xs) => setDocs(Object.fromEntries(xs)));
  }, [slug, stamp]);
  const videos = film.media.out.filter((f) => /\.(mp4|mov|webm)$/i.test(f.path));
  const web = videos.filter((v) => /web/.test(v.path));
  const shown = web.length ? web : videos;
  const posters = film.media.out.filter((f) => /\.(jpe?g|png)$/i.test(f.path)).map((f) => f.path);
  const done = { deliver: videos.length > 0, ranger: Boolean(lastDone(film, 'ranger')) };
  const next = !done.deliver ? 'deliver' : !done.ranger ? 'ranger' : null;
  const toggle = (f) => setFormats((xs) => (xs.includes(f) ? xs.filter((x) => x !== f) : [...xs, f]));

  return (
    <div className="step">
      <StepHeader step={step} status={status} />
      <HandoffCard stepId="final" />
      <Section title="Actions">
        <div className="actions">
          <ActionRow n={1} action="deliver" done={done.deliver} primary={next === 'deliver'} input={{ formats, notes }}>
            <div className="field">
              <span className="label">Formats à livrer</span>
              <div className="checks">
                {['16:9', '9:16', '1:1', '4:5'].map((f) => <label key={f} className="check"><input type="checkbox" checked={formats.includes(f)} disabled={f === '16:9'} onChange={() => toggle(f)} />{f}</label>)}
              </div>
            </div>
            <NotesField id="dl-notes" value={notes} onChange={setNotes} />
          </ActionRow>
          <ActionRow n={2} action="ranger" done={done.ranger} primary={next === 'ranger'} input={{ notes: rNotes }} note="Claude propose ; rien n’est appliqué au studio de base sans ton accord.">
            <NotesField id="r-notes" value={rNotes} onChange={setRNotes} placeholder="Un goût à garder pour les prochains films" />
          </ActionRow>
        </div>
      </Section>

      {shown.length > 0 && (
        <Section title="Livrables" aside={<span className="muted">{videos.length} vidéo{videos.length > 1 ? 's' : ''} dans out/</span>}>
          <div className="deliverables">{shown.map((v) => <Deliverable key={v.path} path={v.path} />)}</div>
          {posters.length > 0 && <ImageStrip paths={posters} />}
        </Section>
      )}
      {film.media.final.length > 0 && (
        <Section title="Planches finales">
          <ImageStrip paths={film.media.final.map((f) => f.path).filter((p) => !/temoin-/.test(p))} />
        </Section>
      )}
      {docs['out/LIVRAISON.md'] && <Section title="Note de livraison"><div className="panel" style={{ padding: 16 }}><Markdown text={docs['out/LIVRAISON.md']} /></div></Section>}

      {docs['reviews/ranger.md'] && <Section title="Ce que ce film apprend au studio"><div className="panel" style={{ padding: 16 }}><Markdown text={docs['reviews/ranger.md']} /></div></Section>}
    </div>
  );
}
