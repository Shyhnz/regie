import { useEffect, useState } from 'react';
import Films from './pages/Films.jsx';
import Film from './pages/Film.jsx';
import Library from './pages/Library.jsx';
import Gouts from './pages/Gouts.jsx';
import { ToastProvider } from './components/Toast.jsx';
import { MetaProvider, useMeta } from './components/Meta.jsx';
import { api } from './api.js';
import { t } from './i18n.js';

// Routes en hash : #/ · #/film/<slug>/<étape> · #/bibliotheque/<catégorie>/<fiche> · #/gouts
function parse(hash) {
  const parts = hash.replace(/^#\/?/, '').split('/').map(decodeURIComponent).filter(Boolean);
  return { name: parts[0] || 'films', params: parts.slice(1) };
}

export function go(path) {
  window.location.hash = path;
}

export default function App() {
  const [route, setRoute] = useState(() => parse(window.location.hash));
  useEffect(() => {
    const on = () => setRoute(parse(window.location.hash));
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);

  return (
    <MetaProvider>
      <Shell route={route} />
    </MetaProvider>
  );
}

// Anglais ou français : le choix est gardé par le serveur (il dit aussi à Claude dans quelle langue écrire),
// et Régie.app reprend la langue pour ses menus.
function LangSwitch() {
  const meta = useMeta();
  const choose = async (lang) => {
    if (lang === meta.lang) return;
    await api('/api/lang', { method: 'PUT', body: { lang } });
    try { window.webkit?.messageHandlers?.regie?.postMessage(`lang:${lang}`); } catch { /* pas dans Régie.app */ }
    meta.reload(true);
  };
  return (
    <div className="segmented lang-switch" role="group" aria-label={t('Langue')}>
      {[['en', 'EN'], ['fr', 'FR']].map(([v, l]) => <button key={v} type="button" aria-pressed={meta.lang === v} onClick={() => choose(v)} lang={v}>{l}</button>)}
    </div>
  );
}

// Toute l'app se redessine quand la langue change (key) : chaque texte relit le dictionnaire.
function Shell({ route }) {
  const meta = useMeta();
  const [film, step] = route.name === 'film' ? route.params : [];
  return (
    <ToastProvider key={meta.lang}>
        <header className="topbar">
          <a className="wordmark" href="#/"><i aria-hidden="true" />Régie</a>
          <nav className="nav" aria-label="Sections">
            <a href="#/" aria-current={route.name === 'films' || route.name === 'film' ? 'page' : undefined}>{t('Films')}</a>
            <a href="#/bibliotheque" aria-current={route.name === 'bibliotheque' ? 'page' : undefined}>{t('Bibliothèque')}</a>
            <a href="#/gouts" aria-current={route.name === 'gouts' ? 'page' : undefined}>{t('Mes goûts')}</a>
          </nav>
          <LangSwitch />
        </header>
        {route.name === 'film' && film ? <Film slug={film} stepId={step} key={film} />
          : route.name === 'bibliotheque' ? <Library cat={route.params[0]} itemId={route.params[1]} />
            : route.name === 'gouts' ? <Gouts />
              : <Films />}
    </ToastProvider>
  );
}
