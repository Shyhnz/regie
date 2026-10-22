import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { claudeArgs, translate } from '../server/runs.js';
import { hookSettings, HOOK_TOKEN } from '../server/sessions.js';
import { actionMessage, systemPrompt, buildPrompt, STEPS } from '../server/prompts.js';
import { BLENDER_MCP } from '../server/config.js';

test('la session Claude : interactive, sans MCP par défaut, dossiers en dernier', () => {
  const args = claudeArgs({ settings: {}, system: 'SYS', name: 'Régie · t' });
  assert.ok(!args.includes('-p'));
  assert.ok(!args.includes('stream-json'));
  assert.ok(args.includes('--strict-mcp-config'));
  assert.ok(!args.includes('--resume'));
  assert.equal(args[args.indexOf('--effort') + 1], 'high');
  assert.equal(args[args.indexOf('--append-system-prompt') + 1], 'SYS');
  const dirs = args.slice(args.indexOf('--add-dir') + 1);
  assert.ok(dirs.length >= 1 && dirs.length <= 5, 'Bible, studio, mémoire, skills open source : seulement ceux qui existent');
  assert.ok(dirs.every((d) => fs.existsSync(d)));
  assert.ok(!args.includes('--mcp-config'), 'Blender coupé : aucun serveur MCP');
});

test('Blender activé : seul son serveur MCP est chargé, avant les dossiers', () => {
  const args = claudeArgs({ settings: { blender: true }, system: 'S', name: 'n' });
  if (!fs.existsSync(BLENDER_MCP)) return;
  const i = args.indexOf('--mcp-config');
  assert.ok(i > 0 && i < args.indexOf('--add-dir'));
  assert.deepEqual(Object.keys(JSON.parse(args[i + 1]).mcpServers), ['blender']);
  assert.ok(args.includes('--strict-mcp-config'));
  assert.ok(!claudeArgs({ settings: { blender: true, mcp: 'all' }, system: 'S', name: 'n' }).includes('--mcp-config'), 'avec tous les MCP, celui de Blender y est déjà');
});

test('la consigne de session dit si Blender est activé et où chercher les skills open source', () => {
  const step = STEPS[2];
  const on = systemPrompt({ film: { slug: 'f', title: 'F' }, step, blender: true });
  const off = systemPrompt({ film: { slug: 'f', title: 'F' }, step });
  assert.match(on, /Blender est ACTIVÉ/);
  assert.match(on, /10-blender\.md/);
  assert.match(off, /Blender est désactivé/);
  assert.doesNotMatch(off, /10-blender\.md/);
  const ctx = { film: { slug: 'f', title: 'F' }, runId: 'r', shot: { n: 2, plan: 'Révélation' }, version: 1 };
  assert.match(buildPrompt('build_shot', { ...ctx, blender: true }, {}), /marque ce plan « Blender »/);
  assert.doesNotMatch(buildPrompt('build_shot', ctx, {}), /Blender/);
  assert.match(buildPrompt('decoupage', { ...ctx, blender: true }, {}), /« · Blender »/);
});

test('modèle, effort et MCP rallumés', () => {
  const args = claudeArgs({ settings: { model: 'haiku', mcp: 'all', effort: 'xhigh' }, system: 'S', name: 'n' });
  assert.equal(args[args.indexOf('--model') + 1], 'haiku');
  assert.ok(!args.includes('--strict-mcp-config'));
  assert.equal(args[args.indexOf('--effort') + 1], 'xhigh');
});

test('les crochets de la session préviennent la Régie sans rien ajouter au message', () => {
  const h = JSON.parse(hookSettings('film-a/scenario')).hooks;
  for (const ev of ['SessionStart', 'UserPromptSubmit', 'Stop', 'Notification']) {
    const cmd = h[ev][0].hooks[0].command;
    assert.match(cmd, /-o \/dev\/null/);
    assert.match(cmd, /term=film-a%2Fscenario/);
    assert.match(cmd, new RegExp(`token=${HOOK_TOKEN}`));
  }
});

test('la consigne tapée dans la session porte son identifiant et sa portée', () => {
  const step = { n: 1, title: 'Scénario' };
  const m = actionMessage({ runId: 'r1', step, label: 'Proposer 3 scénarios', shared: true, lettre: 'A', body: 'CORPS' });
  assert.match(m, /^\[Régie · action r1\] Étape 1 · Scénario — « Proposer 3 scénarios »\./);
  assert.match(m, /vaut pour les 3 vidéos/);
  assert.match(m, /"run":"r1"/);
  assert.match(m, /\n\nCORPS$/);
  assert.equal(actionMessage({ runId: 'r2', body: 'Salut', isMessage: true }), '[Régie · action r2] Salut');
});

test('traduit le flux stream-json en événements lisibles', () => {
  const tool = translate({ type: 'assistant', message: { content: [{ type: 'tool_use', id: 't1', name: 'Write', input: { file_path: '/x/BRIEF.md' } }] } });
  assert.deepEqual(tool[0], { type: 'tool', id: 't1', name: 'Write', label: 'Écrit /x/BRIEF.md', sub: false });
  const res = translate({ type: 'result', subtype: 'success', is_error: false, result: 'ok', session_id: 's', duration_ms: 1000, total_cost_usd: 0.1, usage: { input_tokens: 1, output_tokens: 2, cache_read_input_tokens: 10, cache_creation_input_tokens: 5 }, permission_denials: [] });
  assert.equal(res[0].ok, true);
  assert.equal(res[0].tokens, 18);
  assert.equal(res[0].outputTokens, 2);
  const quota = translate({ type: 'rate_limit_event', rate_limit_info: { status: 'allowed', unifiedWindows: { five_hour: { utilization: 0.03 }, seven_day: { utilization: 0.4 } } } });
  assert.equal(quota[0].sevenDay, 0.4);
});
