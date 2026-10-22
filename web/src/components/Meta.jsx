import { createContext, useContext } from 'react';
import { useResource } from '../api.js';
import { t, setLang } from '../i18n.js';

// Le référentiel des étapes et des actions, servi par le serveur (une seule définition : server/prompts.js), dans la langue de l'app.
const Ctx = createContext(null);
export const useMeta = () => useContext(Ctx);

export function MetaProvider({ children }) {
  const { data, error, reload } = useResource('/api/meta');
  if (error) {
    return (
      <div className="page">
        <div className="error-box" role="alert">
          <strong>{t('La Régie ne joint pas son serveur.')}</strong>
          <span>{error.message}</span>
          <div><button className="btn sm" onClick={() => reload()}>{t('Réessayer')}</button></div>
        </div>
      </div>
    );
  }
  if (!data) return <div className="page"><div className="skeleton" style={{ height: 120 }} /></div>;
  setLang(data.lang);
  return <Ctx.Provider value={{ ...data, reload }}>{children}</Ctx.Provider>;
}
