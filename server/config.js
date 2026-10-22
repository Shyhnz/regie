// Chemins de la Régie, surchargeables par variable d'environnement. Deux dispositions :
// - dans le dossier Exploration : la Régie (regie/) à côté de la Bible (base-connaissance/) et des films (videos/) ;
// - publiée (dépôt ou Régie.app) : la Bible et le studio de base livrés avec l'app (bible/, studio/), les films dans ~/Documents/Régie.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
export const APP_DIR = path.resolve(here, '..');
const BESIDE = path.resolve(APP_DIR, '..');
export const PUBLISHED = !fs.existsSync(path.join(BESIDE, 'base-connaissance'));
export const ROOT = process.env.REGIE_ROOT || (PUBLISHED ? path.join(os.homedir(), 'Documents', 'Régie') : BESIDE);

export const VIDEOS = path.join(ROOT, 'videos');
export const STUDIO = path.join(VIDEOS, '_studio');
// Le studio de base livré avec l'app : recopié dans videos/_studio au premier lancement, puis il évolue avec les films.
export const STUDIO_TEMPLATE = process.env.REGIE_STUDIO_TEMPLATE || path.join(APP_DIR, 'studio');
export const STYLE_VARIANTS = path.join(VIDEOS, 'style-variants');

export const KB = process.env.REGIE_KB || (fs.existsSync(path.join(ROOT, 'base-connaissance')) ? path.join(ROOT, 'base-connaissance') : path.join(APP_DIR, 'bible'));
export const BIBLE = path.join(KB, 'prompt-motion');
export const SYNTHESE = path.join(BIBLE, 'synthese');
export const METHODE = path.join(SYNTHESE, 'methode');
export const LOOPS = path.join(KB, 'scenario-motion-loops');
// Les skills vidéo open source (10 lots) : règles par chapitre, prompts et fiches de dépôts, rassemblés par _methode/tools/apports.py.
export const SKILLS = path.join(KB, 'awesome-video-skills');
export const APPORTS = path.join(SKILLS, 'apports');
export const SKILL_PROMPTS = path.join(SKILLS, 'prompts');

export const MEDIA_CACHE = process.env.REGIE_MEDIA_CACHE || path.join(os.homedir(), '.cache', 'prompt-motion-kb', 'media', 'videos');

// La mémoire Claude Code du projet : les goûts de l'utilisateur et le savoir-faire HyperFrames y vivent. Sans elle (Régie publiée),
// les goûts vont dans le dossier des films et le savoir-faire vient de la Bible livrée.
const memoryKey = ROOT.replace(/[^A-Za-z0-9]/g, '-');
export const MEMORY_DIR = process.env.REGIE_MEMORY_DIR || path.join(os.homedir(), '.claude', 'projects', memoryKey, 'memory');
const inMemory = (file, fallback) => (fs.existsSync(path.join(MEMORY_DIR, file)) || !fallback ? path.join(MEMORY_DIR, file) : fallback);
export const GOUTS = inMemory('effets-aimes.md', PUBLISHED ? path.join(ROOT, 'gouts.md') : null);
export const SAVOIR_FAIRE = inMemory('hyperframes-savoir-faire.md', path.join(KB, 'regie', 'savoir-faire-hyperframes.md'));
export const FILM_TEST_VERDICT = fs.existsSync(path.join(MEMORY_DIR, 'film-test-pas-beau.md')) ? path.join(MEMORY_DIR, 'film-test-pas-beau.md') : null;

export const CACHE_DIR = process.env.REGIE_CACHE || (PUBLISHED ? path.join(os.homedir(), 'Library', 'Caches', 'Regie') : path.join(APP_DIR, '.cache'));
export const PORT = Number(process.env.REGIE_PORT || 4317);
export const HOST = '127.0.0.1';
export const CLAUDE_BIN = process.env.REGIE_CLAUDE_BIN || 'claude';
export const HYPERFRAMES = 'hyperframes@0.8.145';

// Blender, pour les plans que le navigateur rend mal (verre, reflets, volumes, physique) : en ligne de commande, et par son MCP.
export const BLENDER_BIN = process.env.REGIE_BLENDER || '/Applications/Blender.app/Contents/MacOS/Blender';
export const BLENDER_MCP = process.env.REGIE_BLENDER_MCP || path.join(os.homedir(), '.local', 'bin', 'blender-mcp');
