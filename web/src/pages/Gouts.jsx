import { useEffect, useState } from 'react';
import { api, useResource } from '../api.js';
import { useToast } from '../components/Toast.jsx';
import Markdown from '../components/Markdown.jsx';
import { t } from '../i18n.js';

// Tes goûts : la mémoire effets-aimes.md, lue par chaque action Claude et par tes sessions Claude Code du projet.
export default function Gouts() {
  const toast = useToast();
  const { data, error, reload } = useResource('/api/gouts');
  const [draft, setDraft] = useState(null);
  const [saving, setSaving] = useState(false);
  useEffect(() => { if (data && draft == null) setDraft(data.body); }, [data]); // eslint-disable-line react-hooks/exhaustive-deps
  const dirty = data && draft != null && draft !== data.body;
  const save = async () => {
    setSaving(true);
    try { await api('/api/gouts', { method: 'PUT', body: { body: draft } }); await reload(true); toast(t('Goûts enregistrés : Claude les lira à la prochaine action')); } catch (e) { toast(e.message, 'bad'); }
    setSaving(false);
  };
  return (
    <main className="page">
      <div className="page-head">
        <div>
          <div className="eyebrow">{t('Mémoire')}</div>
          <h1>{t('Mes goûts')}</h1>
          <p className="lead" style={{ marginTop: 8 }}>{t('Ce que tu aimes et ce que tu refuses. Chaque action Claude de la Régie le lit, et il prime sur ses valeurs par défaut.')}</p>
        </div>
        <div className="row-tools">
          {dirty && <button className="btn ghost" onClick={() => setDraft(data.body)}>{t('Annuler')}</button>}
          <button className="btn primary" onClick={save} disabled={!dirty || saving}>{saving ? t('Enregistrement…') : t('Enregistrer')}</button>
        </div>
      </div>
      {error ? <div className="error-box"><strong>{t('Le fichier de goûts ne se lit pas.')}</strong><span>{error.message}</span></div>
        : draft == null ? <div className="skeleton" style={{ height: 400 }} /> : (
          <div className="gouts">
            <div className="field">
              <label htmlFor="gouts">{t('Texte')} <span className="mono faint">{data.path.replace(/^.*\/\.claude\//, '~/.claude/')}</span></label>
              <textarea id="gouts" className="textarea code" value={draft} onChange={(e) => setDraft(e.target.value)} />
            </div>
            <div className="panel gouts-preview"><Markdown text={draft} /></div>
          </div>
        )}
    </main>
  );
}
