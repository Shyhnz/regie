import { useEffect, useState } from 'react';
import Films from './pages/Films.jsx';
import Film from './pages/Film.jsx';
import Library from './pages/Library.jsx';
import Gouts from './pages/Gouts.jsx';
import { ToastProvider } from './components/Toast.jsx';
import { MetaProvider } from './components/Meta.jsx';

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

  const [film, step] = route.name === 'film' ? route.params : [];
  return (
    <MetaProvider>
      <ToastProvider>
        <header className="topbar">
          <a className="wordmark" href="#/"><i aria-hidden="true" />Régie</a>
          <nav className="nav" aria-label="Sections">
            <a href="#/" aria-current={route.name === 'films' || route.name === 'film' ? 'page' : undefined}>Films</a>
            <a href="#/bibliotheque" aria-current={route.name === 'bibliotheque' ? 'page' : undefined}>Bibliothèque</a>
            <a href="#/gouts" aria-current={route.name === 'gouts' ? 'page' : undefined}>Mes goûts</a>
          </nav>
        </header>
        {route.name === 'film' && film ? <Film slug={film} stepId={step} key={film} />
          : route.name === 'bibliotheque' ? <Library cat={route.params[0]} itemId={route.params[1]} />
            : route.name === 'gouts' ? <Gouts />
              : <Films />}
      </ToastProvider>
    </MetaProvider>
  );
}
