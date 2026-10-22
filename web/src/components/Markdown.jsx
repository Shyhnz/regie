import { useMemo } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

marked.setOptions({ gfm: true, breaks: false });

// Rend un texte Markdown du studio ou de la Bible. Les liens vers prompt-motion.com ouvrent la vidéo dans la Bibliothèque.
export default function Markdown({ text, className = '' }) {
  const html = useMemo(() => {
    if (!text) return '';
    const raw = marked.parse(text);
    const clean = DOMPurify.sanitize(raw, { ADD_ATTR: ['target'] });
    return clean
      .replace(/<table>/g, '<div class="table-wrap"><table>')
      .replace(/<\/table>/g, '</table></div>')
      .replace(/href="https:\/\/prompt-motion\.com\/([a-z0-9_-]+-[a-f0-9]{6})"/gi, 'href="#/bibliotheque/videos/video:$1"')
      .replace(/<a href="http/g, '<a target="_blank" rel="noreferrer" href="http');
  }, [text]);
  return <div className={`md ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}
