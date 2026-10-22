import { useEffect, useRef, useState } from 'react';
import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';
import { api, fmtDuration, fmtTokens, fmtDate } from '../api.js';
import { useMeta } from './Meta.jsx';
import { useToast } from './Toast.jsx';
import Markdown from './Markdown.jsx';

const RUN_STATUS = { running: 'en cours', done: 'terminé', error: 'erreur', stopped: 'arrêté', interrupted: 'interrompu' };
const RUN_CLASS = { running: 'running', done: 'done', error: 'error', stopped: 'review', interrupted: 'review' };

// Suit le flux d'une action Claude (SSE) ; le serveur renvoie l'historique au branchement.
function useRunStream(slug, runId, onEnd) {
  const [events, setEvents] = useState([]);
  const [ended, setEnded] = useState(null);
  const endRef = useRef(onEnd);
  endRef.current = onEnd;
  useEffect(() => {
    setEvents([]); setEnded(null);
    if (!runId) return undefined;
    const es = new EventSource(`/api/runs/${runId}/events?slug=${encodeURIComponent(slug)}`);
    es.onmessage = (m) => {
      const e = JSON.parse(m.data);
      if (e.type === 'start') { setEvents([e]); return; }
      setEvents((xs) => [...xs, e]);
      if (e.type === 'end') {
        setEnded(e.status);
        es.close();
        endRef.current?.(e.status);
      }
    };
    es.onerror = () => { /* EventSource se reconnecte seul ; le serveur rejoue le flux depuis le début */ };
    return () => es.close();
  }, [slug, runId]);
  return { events, ended };
}

function Elapsed({ since }) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  return <span className="nowrap">{fmtDuration(now - since)}</span>;
}

function Settings({ film, onSaved }) {
  const meta = useMeta();
  const toast = useToast();
  const s = { ...meta.defaults, ...(film.state.settings || {}) };
  const save = async (patch) => {
    try { await api(`/api/films/${film.slug}/settings`, { method: 'PUT', body: { ...s, ...patch } }); onSaved(); toast('Réglage enregistré'); } catch (e) { toast(e.message, 'bad'); }
  };
  return (
    <div className="claude-settings">
      <div className="field">
        <span className="label">Effort de réflexion</span>
        <div className="segmented" role="group" aria-label="Effort">
          {['medium', 'high', 'xhigh', 'max'].map((e) => <button key={e} type="button" aria-pressed={s.effort === e} onClick={() => save({ effort: e })}>{e}</button>)}
        </div>
      </div>
      <div className="field">
        <label htmlFor="perm">Permissions</label>
        <select id="perm" className="select" value={s.permissionMode} onChange={(e) => save({ permissionMode: e.target.value })}>
          <option value="auto">Auto : Claude juge les commandes sûres (recommandé)</option>
          <option value="acceptEdits">Fichiers seulement : les commandes sont refusées</option>
          <option value="bypassPermissions">Tout accepter</option>
        </select>
      </div>
      <div className="field">
        <span className="label">Serveurs MCP</span>
        <div className="segmented" role="group" aria-label="Serveurs MCP">
          {[['none', 'Aucun (recommandé)'], ['all', 'Tous les miens']].map(([v, l]) => <button key={v} type="button" aria-pressed={s.mcp === v} onClick={() => save({ mcp: v })}>{l}</button>)}
        </div>
        <span className="help">Sans eux, chaque tour relit deux fois moins de contexte (≈ 29 k jetons au lieu de 61 k). Le studio n’en a pas besoin.</span>
      </div>
      <div className="field">
        <label htmlFor="model">Modèle</label>
        <input id="model" className="input" defaultValue={s.model} placeholder="celui de Claude Code par défaut" onBlur={(e) => e.target.value !== s.model && save({ model: e.target.value })} />
        <span className="help">Laisse vide pour garder ton modèle habituel (abonnement, pas de clé API).</span>
      </div>
      <p className="help">Ces réglages valent pour la prochaine ouverture d’une session. Dans la session, /model et /effort changent tout de suite.</p>
    </div>
  );
}

function Stream({ events }) {
  const results = {};
  for (const e of events) if (e.type === 'tool_result') results[e.id] = e;
  const thinking = [...events].reverse().find((e) => e.type === 'thinking');
  const lastIsThinking = events.length && ['thinking', 'tool_result', 'init', 'start', 'quota'].includes(events[events.length - 1].type);
  const items = [];
  for (const e of events) {
    if (e.type === 'start') {
      items.push(
        <details key={`s${e.at}`} className="ev-start">
          <summary><strong>{e.label}</strong>{e.resumed ? <span className="tag">suite de la session</span> : <span className="tag">session neuve</span>}</summary>
          <pre className="ev-prompt">{e.prompt}</pre>
        </details>,
      );
    } else if (e.type === 'text') {
      items.push(<div key={`t${e.at}${items.length}`} className={`ev-text ${e.sub ? 'sub' : ''}`}><Markdown text={e.text} /></div>);
    } else if (e.type === 'tool') {
      const r = results[e.id];
      items.push(
        <details key={e.id} className={`ev-tool ${e.sub ? 'sub' : ''} ${r ? (r.error ? 'bad' : 'ok') : 'wait'}`}>
          <summary><span className="ev-dot" aria-hidden="true" />{e.label}</summary>
          {r?.preview && <pre>{r.preview}</pre>}
        </details>,
      );
    } else if (e.type === 'result') {
      items.push(
        <div key="result" className="ev-result">
          <span>{e.ok ? 'Terminé' : 'Arrêt sur erreur'} en {fmtDuration(e.durationMs)}</span>
          <span className="faint">· {fmtTokens(e.tokens)} jetons lus, cache compris · {fmtTokens(e.outputTokens)} écrits</span>
          {e.denials?.length > 0 && (
            <div className="ev-denials">
              <strong>Refusé par les permissions :</strong>
              <ul>{e.denials.map((d, i) => <li key={i}>{d}</li>)}</ul>
              <span className="muted">Change le réglage « Permissions » si ces commandes étaient nécessaires.</span>
            </div>
          )}
        </div>,
      );
    } else if (e.type === 'error') {
      items.push(<div key={`e${e.at}`} className="error-box" role="alert"><strong>Claude n’a pas pu finir.</strong><span>{e.message}</span></div>);
    } else if (e.type === 'handoff') {
      items.push(<div key="handoff" className="ev-handoff">Claude a laissé sa preuve et ses questions dans l’étape, à gauche.</div>);
    }
  }
  return (
    <>
      {items}
      {lastIsThinking && !events.some((e) => e.type === 'end') && (
        <div className="ev-thinking"><span className="spin" />Réfléchit{thinking?.tokens ? ` · ~${fmtTokens(thinking.tokens)} jetons de réflexion` : '…'}</div>
      )}
    </>
  );
}

// Le terminal de la session Claude Code d'une étape (serveur : /ws/claude). On y écrit comme dans son propre terminal.
function SessionTerminal({ slug, step, onStatus }) {
  const box = useRef(null);
  const statusRef = useRef(onStatus);
  statusRef.current = onStatus;
  const [conn, setConn] = useState('connexion');
  useEffect(() => {
    let disposed = false;
    let ws = null;
    let retry = null;
    let term = null;
    let fit = null;
    const css = getComputedStyle(document.documentElement);
    const tok = (n, d) => css.getPropertyValue(n).trim() || d;
    const sendSize = () => { if (ws?.readyState === 1 && term) ws.send(JSON.stringify({ t: 'r', cols: term.cols, rows: term.rows })); };
    const resize = () => {
      if (!term || !box.current?.offsetWidth || !box.current?.offsetHeight) return;
      try { fit.fit(); } catch { /* panneau masqué */ }
      sendSize();
    };
    const connect = () => {
      if (disposed) return;
      term.reset();
      ws = new WebSocket(`${window.location.protocol === 'https:' ? 'wss' : 'ws'}://${window.location.host}/ws/claude?slug=${encodeURIComponent(slug)}&step=${encodeURIComponent(step)}`);
      ws.onopen = () => { setConn('ouverte'); resize(); };
      ws.onmessage = (m) => {
        let msg;
        try { msg = JSON.parse(m.data); } catch { return; }
        if (msg.t === 'o') term.write(msg.d);
        else if (msg.t === 'reset') term.reset();
        else if (msg.t === 's') statusRef.current?.(msg);
      };
      // Serveur redémarré ou coupure : on se rebranche, la session de l'étape reprend.
      ws.onclose = () => { if (!disposed) { setConn('coupée'); retry = setTimeout(connect, 1500); } };
    };
    const ro = new ResizeObserver(resize);
    (async () => {
      try { await document.fonts.load('12px "JetBrains Mono"'); } catch { /* police système */ }
      if (disposed) return;
      term = new Terminal({
        fontFamily: '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace',
        fontSize: 12.5,
        lineHeight: 1.12,
        cursorBlink: true,
        macOptionIsMeta: true,
        scrollback: 5000,
        theme: { background: tok('--well', '#0B0908'), foreground: tok('--text', '#EDE8E3'), cursor: tok('--accent', '#F44800'), selectionBackground: '#4a3f36' },
      });
      fit = new FitAddon();
      term.loadAddon(fit);
      term.open(box.current);
      term.onData((d) => { if (ws?.readyState === 1) ws.send(JSON.stringify({ t: 'i', d })); });
      ro.observe(box.current);
      resize();
      connect();
    })();
    return () => { disposed = true; clearTimeout(retry); ro.disconnect(); ws?.close(); term?.dispose(); };
  }, [slug, step]);
  return (
    <div className="term-wrap">
      <div className="term-box" ref={box} />
      {conn === 'coupée' && <div className="term-note">Connexion à la session perdue, nouvel essai…</div>}
    </div>
  );
}

export default function ClaudePanel({ film, target, stepId, onRunEnd, onClose }) {
  const meta = useMeta();
  const toast = useToast();
  const [tab, setTab] = useState('session');
  const [shown, setShown] = useState(null); // action de l'historique dont on relit le flux
  const [status, setStatus] = useState(null);
  const [gen, setGen] = useState(0); // rouvrir une session fermée
  const wasBusy = useRef(false);
  const { events } = useRunStream(film.slug, shown);
  const active = film.active;
  const step = meta.steps.find((s) => s.id === target.step);
  const busy = Boolean(status?.busy) || Boolean(active);

  useEffect(() => { setStatus(null); wasBusy.current = false; }, [target.slug, target.step]);
  const onStatus = (st) => {
    setStatus(st);
    // Un tour qui commence ou finit change l'étape (action, reçu, fichiers) : on relit le film.
    if (Boolean(st.busy) !== wasBusy.current) { wasBusy.current = Boolean(st.busy); onRunEnd(); }
  };
  const stop = async () => {
    const id = status?.runId || active?.id;
    if (!id) return;
    try { await api(`/api/runs/${id}/stop`, { method: 'POST' }); toast('Claude est interrompu'); } catch (err) { toast(err.message, 'bad'); }
  };

  const history = [...film.state.runs].reverse();
  const since = active?.startedAt ? Date.parse(active.startedAt) : null;
  return (
    <div className="claude-panel">
      <div className="claude-head">
        <div>
          <div className="eyebrow">Claude Code · {step?.title}{target.slug !== film.slug ? ` · vidéo ${film.serie?.films.find((f) => f.slug === target.slug)?.lettre || ''}` : ''}</div>
          {status?.exited ? <span className="status">session fermée</span>
            : status?.waiting ? <span className="status review">t’attend dans la session</span>
              : busy ? <span className="status running">travaille{since ? <> · <Elapsed since={since} /></> : null}</span>
                : status ? <span className="status done">prête</span>
                  : <span className="status">ouverture…</span>}
        </div>
        <div className="claude-head-actions">
          {busy && !status?.exited && <button className="btn sm danger" onClick={stop}>Arrêter</button>}
          <button className="icon-btn panel-close" onClick={onClose} aria-label="Fermer le panneau">✕</button>
        </div>
      </div>
      <div className="claude-tabs" role="tablist">
        {[['session', 'Session'], ['historique', `Historique · ${history.length}`], ['reglages', 'Réglages']].map(([id, label]) => (
          <button key={id} role="tab" aria-selected={tab === id} onClick={() => { setTab(id); setShown(null); }}>{label}</button>
        ))}
      </div>

      <div className="claude-body">
        <div className="claude-session" hidden={tab !== 'session'}>
          <SessionTerminal key={`${target.slug}/${target.step}/${gen}`} slug={target.slug} step={target.step} onStatus={onStatus} />
          {status?.exited && (
            <div className="term-closed">
              <span>La session est fermée. La conversation de l’étape reste là : tu peux la rouvrir.</span>
              <button className="btn sm" onClick={() => { setStatus(null); setGen((g) => g + 1); }}>Rouvrir la session</button>
            </div>
          )}
        </div>

        {tab === 'historique' && (
          <div className="claude-stream">
            {shown ? (
              <>
                <button className="btn sm ghost" style={{ alignSelf: 'flex-start' }} onClick={() => setShown(null)}>← Historique</button>
                {events.length === 0 ? <div className="ev-thinking"><span className="spin" />Lecture…</div> : <Stream events={events} />}
              </>
            ) : history.length === 0 ? <div className="empty"><strong>Aucune action pour l’instant.</strong><span>Chaque action et chaque message écrit dans la session s’ajoute ici, avec le résumé de Claude.</span></div> : (
              <ol className="run-history">
                {history.map((r) => (
                  <li key={r.id}>
                    <button onClick={() => setShown(r.id)}>
                      <span className={`status ${RUN_CLASS[r.status] || ''}`}>{RUN_STATUS[r.status] || r.status}</span>
                      <strong>{r.label}{r.shared && film.serie ? ' · 3 vidéos' : ''}</strong>
                      <span className="faint nowrap">{meta.steps.find((s) => s.id === r.step)?.title} · {fmtDate(r.startedAt)}{r.durationMs ? ` · ${fmtDuration(r.durationMs)}` : ''}{r.tokens ? ` · ${fmtTokens(r.tokens)}` : ''}</span>
                      {r.summary && <span className="run-summary">{r.summary}</span>}
                    </button>
                  </li>
                ))}
              </ol>
            )}
          </div>
        )}

        {tab === 'reglages' && <div className="claude-stream"><Settings film={film} onSaved={onRunEnd} /></div>}
      </div>
    </div>
  );
}
