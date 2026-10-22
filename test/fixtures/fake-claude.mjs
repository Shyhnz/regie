#!/usr/bin/env node
// Faux Claude Code interactif pour les tests : il tourne dans le pseudo-terminal de la Régie, appelle ses crochets
// (SessionStart, UserPromptSubmit, Stop) comme le vrai, lit les consignes collées, laisse une trace et écrit le handoff.
// FAKE_DELAY_MS simule un temps de travail (pour regarder l'interface).
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const args = process.argv.slice(2);
const opt = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : null);
const system = opt('--append-system-prompt') || '';
const settings = JSON.parse(opt('--settings') || '{}');
const sessionId = opt('--resume') || opt('--session-id') || 'sans-id';
const sessionFlag = args.includes('--resume') ? '--resume' : '--session-id';
const first = args.indexOf(sessionFlag) + 2 < args.length ? args[args.length - 1] : null;
const delay = Number(process.env.FAKE_DELAY_MS || 0);

const hook = (event, extra = {}) => Promise.all((settings.hooks?.[event] || []).flatMap((h) => h.hooks).map((h) => new Promise((resolve) => {
  const child = spawn('sh', ['-c', h.command], { stdio: ['pipe', 'ignore', 'ignore'] });
  child.on('close', resolve);
  child.stdin.end(JSON.stringify({ hook_event_name: event, session_id: sessionId, ...extra }));
})));

let queue = Promise.resolve();
const handle = (prompt) => {
  queue = queue.then(async () => {
    await hook('UserPromptSubmit', { prompt });
    process.stdout.write(`\r\n> ${prompt.split('\n')[0].slice(0, 70)}\r\n`);
    if (delay) await new Promise((r) => setTimeout(r, delay));
    fs.mkdirSync('.regie', { recursive: true });
    fs.writeFileSync('.regie/fake-last.json', JSON.stringify({ args, system, prompt }));
    const runId = /\[Régie · action ([a-f0-9-]+)\]/.exec(prompt)?.[1] || 'libre';
    const handoff = { run: runId, resume: 'fait', questions: [], options: [], images: [], fichiers: [] };
    if (prompt.includes('Proposer 3 scénarios')) {
      fs.writeFileSync('SCENARIO.md', '# Trois scénarios de test\n');
      handoff.options = [{ id: 'A', titre: 'L’atelier' }, { id: 'B', titre: 'La course' }, { id: 'C', titre: 'Le plan' }];
    }
    if (prompt.includes('une par vidéo')) {
      fs.mkdirSync('reviews/da', { recursive: true });
      for (const x of ['A', 'B', 'C']) fs.writeFileSync(`reviews/da/${x}-1.png`, `da ${x}`);
      fs.writeFileSync('reviews/da/final-1.png', 'final de la vidéo A');
    }
    fs.writeFileSync(path.join('.regie', 'handoff.json'), JSON.stringify(handoff));
    process.stdout.write('⏺ fait\r\n❯ ');
    await hook('Stop');
  });
};

// Saisie brute : un collage arrive entre \x1b[200~ et \x1b[201~ ; Entrée hors collage envoie le message.
let buf = '';
let pasting = false;
if (process.stdin.isTTY) process.stdin.setRawMode(true);
process.stdin.on('data', (chunk) => {
  let s = chunk.toString();
  while (s.length) {
    if (s.startsWith('\x1b[200~')) { pasting = true; s = s.slice(6); continue; }
    if (s.startsWith('\x1b[201~')) { pasting = false; s = s.slice(6); continue; }
    const c = s[0];
    s = s.slice(1);
    if (c === '\r' && !pasting) { if (buf.trim()) handle(buf); buf = ''; } else if (c !== '\x1b') buf += c;
  }
});

await hook('SessionStart');
process.stdout.write(`faux Claude · session ${sessionId}\r\n❯ `);
if (first) handle(first);
