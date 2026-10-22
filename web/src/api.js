// Accès au serveur de la Régie.
import { useCallback, useEffect, useRef, useState } from 'react';
import { t, locale } from './i18n.js';

export async function api(path, { method = 'GET', body, text, raw, headers } = {}) {
  const init = { method, headers: { ...headers } };
  if (body !== undefined) { init.body = JSON.stringify(body); init.headers['Content-Type'] = 'application/json'; }
  if (text !== undefined) { init.body = text; init.headers['Content-Type'] = 'text/plain; charset=utf-8'; }
  if (raw !== undefined) { init.body = raw; init.headers['Content-Type'] = 'application/octet-stream'; }
  let res;
  try {
    res = await fetch(path, init);
  } catch {
    throw new Error(t('Le serveur de la Régie ne répond pas. Vérifie qu’il tourne (npm start dans regie/).'));
  }
  const type = res.headers.get('content-type') || '';
  const data = type.includes('json') ? await res.json() : await res.text();
  if (!res.ok) throw new Error((data && data.error) || t('Le serveur a répondu {status}.', { status: res.status }));
  return data;
}

// Charge une ressource, avec états chargement / erreur / rechargement.
export function useResource(path, deps = []) {
  const [state, setState] = useState({ data: null, error: null, loading: true });
  const alive = useRef(true);
  const load = useCallback(async (quiet = false) => {
    if (!path) return;
    if (!quiet) setState((s) => ({ ...s, loading: true, error: null }));
    try {
      const data = await api(path);
      if (alive.current) setState({ data, error: null, loading: false });
    } catch (error) {
      if (alive.current) setState((s) => ({ data: s.data, error, loading: false }));
    }
  }, [path]);
  useEffect(() => { alive.current = true; load(); return () => { alive.current = false; }; }, [load, ...deps]);
  return { ...state, reload: load };
}

// Un seul son à la fois : lancer un lecteur met les autres en pause.
export const pauseOthers = (e) => document.querySelectorAll('audio, video').forEach((m) => { if (m !== e.currentTarget) m.pause(); });

export const filmUrl = (slug, rel) => `/media/videos/${encodeURIComponent(slug)}/${rel.split('/').map(encodeURIComponent).join('/')}`;

export function fmtDuration(ms) {
  if (ms == null) return '—';
  const s = Math.round(ms / 1000);
  if (s < 60) return `${s} s`;
  const m = Math.floor(s / 60);
  return `${m} min ${String(s % 60).padStart(2, '0')}`;
}

export function fmtTokens(n) {
  if (n == null) return '—';
  if (n >= 1e6) return `${(n / 1e6).toFixed(2).replace('.', ',')} M`;
  if (n >= 1e3) return `${Math.round(n / 1e3)} k`;
  return String(n);
}

export function fmtDate(iso) {
  if (!iso || iso === 'import') return iso === 'import' ? 'avant la Régie' : '—';
  return new Date(iso).toLocaleString(locale(), { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
}

export const fmtTime = (s) => {
  if (s == null || Number.isNaN(s)) return '—';
  const m = Math.floor(s / 60);
  return `${m}:${(s % 60).toFixed(2).padStart(5, '0')}`;
};
