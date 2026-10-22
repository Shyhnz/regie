// Les cinq étapes de la Régie, leurs actions et leurs prompts.
// Chaque étape suit des phases du parcours A de la Bible (methode/A-parcours.md) ; les prompts reprennent
// videos/_studio/prompts/PROMPTS.md, adaptés à un pilotage pas à pas : Claude fait UNE action, puis s'arrête.
import path from 'node:path';
import { SYNTHESE, METHODE, STUDIO, GOUTS, SAVOIR_FAIRE, FILM_TEST_VERDICT, HYPERFRAMES, APPORTS, SKILL_PROMPTS, BLENDER_BIN } from './config.js';
import { skillsSummary } from './skills.js';

const HF = `npx --yes ${HYPERFRAMES}`;
// Les règles des skills open source d'un chapitre : Claude y cherche par mots-clés (fichiers de plusieurs centaines de Ko).
const OS = (c, about) => `${path.join(APPORTS, `${c}.md`)} (${about})`;
const BLENDER_RECIPE = path.join(METHODE, 'E', '10-blender.md');
const pad = (n) => String(n).padStart(2, '0');
const line = (label, value) => (value && String(value).trim() ? `- ${label} : ${String(value).trim()}` : null);
const lines = (...xs) => xs.filter(Boolean).join('\n');

// Pas de porte à valider : une étape est faite quand son action de fin a abouti, ou dès qu'une étape suivante a commencé.
export const STEPS = [
  {
    id: 'scenario',
    n: 1,
    title: 'Scénario',
    phases: 'Phases 0, 1, 2 et 4.1 du parcours A',
    goal: 'Savoir ce que le spectateur doit retenir, avec quoi on le raconte, et le texte exact de chaque écran.',
    end: 'scenario_final',
  },
  {
    id: 'storyboard',
    n: 2,
    title: 'Storyboard',
    phases: 'Phases 2, 3 et 4 du parcours A',
    goal: 'Choisir la beauté sur des images avant de construire : la direction artistique, puis une image par plan sur la grille musicale.',
    end: 'storyboard',
  },
  {
    id: 'plans',
    n: 3,
    title: 'Plan par plan',
    phases: 'Phases 5, 6 et 7 du parcours A',
    goal: 'Construire chaque plan contre son image de storyboard, puis assembler et faire juger par un regard neuf.',
    end: 'critique',
  },
  {
    id: 'musique',
    n: 4,
    title: 'Musique',
    phases: 'Phase 8.1 du parcours A',
    goal: 'Fabriquer le son depuis timeline.js et le mesurer : chaque coup à sa place, le drop où l’image explose.',
    end: 'sound',
  },
  {
    id: 'final',
    n: 5,
    title: 'Vidéo finale',
    phases: 'Phases 8.2, 8.3 et 9 du parcours A',
    goal: 'Rendre les livrables vérifiés, puis faire monter le studio d’un cran pour le film suivant.',
    end: 'deliver',
  },
];

// Les références que Claude doit avoir en tête dans la session d'une étape (une session interactive par film et par étape).
export function systemPrompt({ film, step, serie, blender = false }) {
  const rel = (p) => p;
  const k = skillsSummary();
  const fr = (n) => n.toLocaleString('fr-FR');
  const skillsText = k
    ? `- Skills vidéo open source (${fr(k.repos)} dépôts dépouillés et rangés dans la Bible) : ${APPORTS} — c01.md à c14.md : ${fr(k.rules)} règles classées par chapitre, une par ligne (titre, consigne, recette, source) ; prompts.md : index de ${fr(k.prompts)} prompts et gabarits par genre (textes dans ${SKILL_PROMPTS}) ; depots.md : comment chaque skill est construit (déroulé, contrôles qualité, outils). Ces fichiers sont gros : ne les lis jamais en entier, cherches-y (Grep, sans casse) les mots du problème que tu traites avant de fixer un réglage, et dis quelle règle tu reprends. La Bible et les goûts de l'utilisateur priment en cas de désaccord.`
    : null;
  const blenderText = blender
    ? `Blender est ACTIVÉ pour ce film (choix de l'utilisateur dans la Régie) : les plans que le navigateur rend mal (verre, reflets et réfractions, volumes et matières réelles, physique, personnages en volume) se font dans Blender, le reste en HyperFrames. Lis la recette ${BLENDER_RECIPE} avant tout travail en 3D. Blender : « ${BLENDER_BIN} », en ligne de commande (-b, --python, --python-exit-code 1). Ses rendus sont des suites d'images calées sur timeline.js, habillées dans la composition HyperFrames. Les outils MCP « blender », s'ils sont chargés, marchent aussi Blender fermé (versions _for_cli) et cherchent dans la documentation de l'API ; les longs rendus passent par la ligne de commande.`
    : `Blender est désactivé pour ce film : tout se fait en HyperFrames (pour la 3D : CSS 3D ou Three.js dans la composition). N'utilise pas Blender ; si un plan l'exigerait vraiment, dis-le dans le handoff et l'utilisateur l'activera.`;
  const serieText = !serie ? ''
    : `\nSérie : ce film est la vidéo ${serie.lettre} d'une série de 3 vidéos tirées du même brief (${serie.films.map((f) => `${f.lettre} : ${f.dir}`).join(' · ')}). Chaque vidéo a son propre scénario et sa propre direction artistique : celle-ci doit rester nettement différente des vidéos ${others(serie)}. Tu peux lire leurs dossiers pour t'en distinguer, mais tu n'y écris jamais. Quand une consigne dit qu'elle vaut pour les 3 vidéos, tu la fais ici et la Régie recopie le résultat dans les deux autres.\n`;
  return `Tu es le studio de motion design de l'utilisateur, piloté depuis l'app « Régie ». L'utilisateur est un motion designer exigeant : il regarde chaque résultat et décide de la suite.

Film : « ${film.title} » — dossier courant (${film.slug}).${serieText} Les fichiers du studio sont la mémoire du film : BRIEF.md, SCENARIO.md, MOODBOARD.md, REFERENCE.md, STYLE.md, SHOTLIST.md, timeline.js (seule source du temps), motion.js (seuls nombres de mouvement), CONTRACT.md (contrat de rendu), JOURNAL.md.

La Bible (lis ce qui sert l'action, pas tout) :
- Parcours de production (phases et rôles) : ${rel(path.join(METHODE, 'A-parcours.md'))}
- Guides de style : ${rel(path.join(METHODE, 'B'))} · Recettes de plans : ${rel(path.join(METHODE, 'C'))} · Outils : ${rel(path.join(METHODE, 'E'))}
- Chapitres 1 à 14 (entrées dans cNN/entries/) : ${rel(SYNTHESE)} — 01 styles, 02 composition, 03 typographie, 04 transitions, 05 caméra et 3D, 06 formes et matières, 07 données et interfaces, 08 personnages, 09 timing rythme et son, 10 structure et narration, 11 cohérence et clichés (grille de contrôle), 12 méthode de production, 13 écrire un prompt, 14 études 60 fps
- Règles d'or : ${rel(path.join(SYNTHESE, 'regles-or.md'))}
${skillsText ? `${skillsText}
` : ''}- Studio de base : ${rel(STUDIO)}

Les goûts de l'utilisateur priment sur tes valeurs par défaut : ${GOUTS}
Savoir-faire HyperFrames (pannes déjà rencontrées) : ${SAVOIR_FAIRE}
Leçon du film test${FILM_TEST_VERDICT ? ` (${FILM_TEST_VERDICT})` : ''} : il passait toutes les grilles mais il n'était « pas beau » : texte petit sur fond uni, beaucoup de vide, aucune matière, accroche sage. Les grilles chiffrées sont un plancher, pas un but. Cherche d'abord une image désirable (direction forte, composition pleine, matière, profondeur, transitions motivées), puis vérifie les nombres.

Règles de la Régie :
1. Cette session est celle de l'étape ${step.n} · ${step.title}. Les consignes de la Régie commencent par « [Régie · action <identifiant>] » : tu fais SEULEMENT cette action, puis tu t'arrêtes. Tu ne commences jamais l'action suivante : l'utilisateur regarde la preuve et décide dans l'app. L'utilisateur peut aussi t'écrire directement dans cette session : réponds-lui, fais ce qu'il demande sans sortir de l'étape, puis arrête-toi. Il n'y a pas de porte à faire valider : s'il passe à la suite, c'est que le résultat lui va ; s'il revient sur une action, c'est pour la refaire.
2. Un manque (écran, logo, chiffre, texte définitif) se pose en question ; tu ne dessines pas un faux convaincant.
3. Moteur : HyperFrames ${HYPERFRAMES}, commandes en « ${HF} ». ${blenderText}
4. À la fin de chaque tour où tu as produit, changé ou demandé quelque chose, réécris le fichier .regie/handoff.json (JSON valide, chemins relatifs au dossier du film) ; "run" vaut l'identifiant de la consigne de la Régie, ou "libre" si l'utilisateur t'a écrit directement :
{"run":"<identifiant>","resume":"3 à 6 phrases pour l'utilisateur : ce que tu as fait, ce que tu recommandes, ce qui reste ouvert","questions":["…"],"options":[{"id":"A","titre":"…","pitch":"…"}],"images":[{"path":"reviews/…png","label":"…","group":"…"}],"fichiers":["BRIEF.md"]}
   Laisse vides les listes qui ne servent pas. Mets dans images toutes les images que l'utilisateur doit regarder pour décider, et dans fichiers chaque son et chaque vidéo à écouter ou regarder : la Régie les lit directement dans l'app. N'ouvre rien sur le Mac pour les faire écouter.
5. Écris en français, sans jargon inutile.`;
}

const brief = (inp) => lines(
  line('Produit ou sujet', inp.produit),
  line('Site ou source des faits', inp.site),
  line('Le spectateur doit retenir', inp.retenir),
  line('Public', inp.public),
  line('Diffusion', inp.diffusion),
  line('Durée visée', inp.duree),
  line('Formats', Array.isArray(inp.formats) ? inp.formats.join(', ') : inp.formats),
  line('Son', inp.son),
  line('Inacceptable si', inp.inacceptable),
  line('Notes et références', inp.notes),
);

const userNotes = (inp) => (inp.notes && inp.notes.trim() ? `\nNotes de l'utilisateur, à respecter :\n${inp.notes.trim()}\n` : '');

// Série de 3 vidéos tirées d'un même brief. Une action « shared » se fait une fois, dans le dossier de la vidéo A,
// puis la Régie recopie ces fichiers dans les deux autres ; une action « each » se lance aussi sur les 3 vidéos à la fois.
// Les images final-* de reviews/da/ ne se recopient jamais : chaque vidéo y range sa propre direction retenue.
export const SERIE_SYNC = {
  brief: ['BRIEF.md', 'assets'],
  scenarios: ['SCENARIO.md'],
  directions: ['reviews/da'],
};
const others = (serie) => serie.films.filter((f) => f.lettre !== serie.lettre).map((f) => f.lettre).join(' et ');
const serieFiles = (serie, file) => serie.films.map((f) => `- vidéo ${f.lettre} : ${path.join(f.dir, file)}`).join('\n');

const directionsExtra = (ctx) => lines(
  `Skills open source : cherche dans ${OS('c01', 'styles')} et ${OS('c11', 'clichés à éviter')} ; la section style-preset de ${path.join(APPORTS, 'prompts.md')} liste des préréglages de style : des pistes, jamais à copier.`,
  ctx.blender ? `Blender est activé : si une direction gagne à un vrai rendu 3D (verre, matière, volume), une de ses images clés peut être un rendu Blender (recette ${BLENDER_RECIPE}).` : null,
);

export const ACTIONS = {
  // ——— Étape 1 · Scénario ———
  brief: {
    step: 'scenario',
    serie: 'shared',
    label: 'Préparer le brief',
    hint: 'Claude remplit BRIEF.md depuis tes réponses et tes fichiers, et pose ses questions au lieu d’inventer.',
    hintSerie: 'Un brief commun aux 3 vidéos : Claude remplit BRIEF.md depuis tes réponses et tes fichiers, et pose ses questions au lieu d’inventer.',
    build: (ctx, inp) => `Action « Préparer le brief » (parcours A, phases 0 et 1, rôle réalisateur). Ne construis et ne rends rien.

Réponses de l'utilisateur :
${brief(inp) || '- (aucune réponse : déduis ce que tu peux du dossier, et pose les questions)'}

1. Lis MOODBOARD.md (sa sélection dans la Bible), le dossier assets/ et ses goûts.${ctx.serie ? `
   Série de 3 : le brief est commun aux trois vidéos. Lis aussi le moodboard de chaque vidéo :
${serieFiles(ctx.serie, 'MOODBOARD.md')}` : ''}
2. Remplis BRIEF.md (gabarit du studio) : faits d'un côté, choix de film de l'autre ; ligne SPEC ; déclinaisons ; inventaire de la matière avec le chemin de chaque fichier. Si un site est donné, va chercher sur le vrai site les textes, écrans et couleurs exacts que le film utilisera.
3. Chaque manque devient une question dans le handoff ; n'invente rien. Pour ne rien oublier, regarde 1 ou 2 gabarits de brief du genre le plus proche (index ${path.join(APPORTS, 'prompts.md')}, section brief-gabarit) et n'en garde que les questions utiles.
4. Reformule en une phrase ce que le spectateur doit retenir (15 mots au plus) et ce qui rendrait le film inacceptable.
Handoff : fichiers = ["BRIEF.md"], questions = les manques.`,
  },
  scenarios: {
    step: 'scenario',
    serie: 'shared',
    label: 'Proposer 3 scénarios',
    labelSerie: 'Proposer 3 scénarios, un par vidéo',
    hint: 'Trois angles vraiment différents, avec le texte exact de chaque écran. Tu choisis.',
    hintSerie: 'Trois angles vraiment différents, avec le texte exact de chaque écran : le A pour la vidéo A, le B pour la B, le C pour la C.',
    build: (ctx, inp) => `Action « Proposer 3 scénarios ». Ne construis et ne rends rien.
${userNotes(inp)}
Lis BRIEF.md, MOODBOARD.md, le chapitre 10 (structure et narration), les recettes de plans (methode/C) et le guide de style le plus proche (methode/B).
Skills open source : cherche dans ${OS('c10', 'accroche, structure, narration')} et regarde dans ${path.join(APPORTS, 'prompts.md')} les prompts du genre de ce film.
${ctx.serie ? `Série de 3 : chaque scénario deviendra une vidéo à part entière, produite en parallèle (scénario A → vidéo A, B → vidéo B, C → vidéo C). Chacun doit tenir seul. Si une vidéo a son propre moodboard, son scénario part de là :
${serieFiles(ctx.serie, 'MOODBOARD.md')}
` : ''}Écris SCENARIO.md avec 3 scénarios vraiment différents (angle, dispositif, ton), pas trois variantes du même. Pour chacun :
- un titre et l'idée en une phrase ;
- le dispositif qui tient le film (objet relais, métaphore, contrainte formelle) ;
- ce qui le rendra beau à regarder : matière, composition, couleur, mouvement, en décisions concrètes, pas en adjectifs ;
- le déroulé en temps forts (accroche gagnée avant 1 s, problème, révélation, preuve, fin ; ou une autre structure si elle sert mieux), avec le texte exact de chaque écran et sa durée en temps musicaux ;
- son risque principal.
${ctx.serie
    ? `Termine par ce qui distingue les trois, en trois lignes : les trois vidéos seront faites, il n'y a pas de gagnant à désigner.
Handoff : options = les 3 scénarios (id A, B, C ; titre ; pitch d'une phrase) ; resume = ce qui distingue les trois ; fichiers = ["SCENARIO.md"].`
    : `Termine par ta recommandation, argumentée en trois lignes.
Handoff : options = les 3 scénarios (id A, B, C ; titre ; pitch d'une phrase) ; resume = ta recommandation ; fichiers = ["SCENARIO.md"].`}`,
  },
  scenario_final: {
    step: 'scenario',
    serie: 'each',
    label: 'Développer le scénario choisi',
    labelSerie: 'Développer le scénario de chaque vidéo',
    hint: 'Le scénario retenu en version finale : temps forts, texte exact, tempo, budget de lecture.',
    hintSerie: 'Chaque vidéo passe son scénario en version finale : temps forts, texte exact, tempo, budget de lecture.',
    needs: ['choix'],
    build: (ctx, inp) => `Action « Développer le scénario choisi ». Ne construis et ne rends rien.

Choix de l'utilisateur : ${inp.choix || '(voir notes)'}
${ctx.serie ? `Vidéo ${ctx.serie.lettre} de la série : elle prend le scénario ${ctx.serie.lettre}, sauf si le choix ci-dessus dit autrement. Les deux autres scénarios sont développés en parallèle dans les vidéos ${others(ctx.serie)} : laisse-les en annexe sans les retravailler.\n` : ''}${userNotes(inp)}
Réécris SCENARIO.md : en tête le scénario retenu en version finale ; les autres en annexe « Non retenus ».
- La phrase à retenir, la durée, le tempo proposé (un BPM qui fait des mesures entières).
- Le tableau des temps forts : # | moment | ce qu'on voit | texte exact à l'écran | durée (temps) | son.
- Le budget de mots et les temps de lecture (Bible, chapitre 12, étape 2) ; le test du texte le plus long (passe-t-il à 3 lignes ?).
- Ce qui le rend beau, en décisions concrètes.
Mets à jour BRIEF.md si le scénario touche un fait ou un texte définitif, et signale-le.
Handoff : fichiers = ["SCENARIO.md"] (+ BRIEF.md si modifié).`,
  },

  // ——— Étape 2 · Storyboard ———
  directions: {
    step: 'storyboard',
    serie: 'shared',
    label: 'Proposer 3 directions artistiques',
    labelSerie: 'Proposer 3 directions artistiques, une par vidéo',
    hint: 'Trois propositions visuelles en vraies images (accroche et révélation). Tu choisis sur l’image.',
    hintSerie: 'Une direction par vidéo, décidées ensemble pour qu’elles ne se ressemblent pas, en vraies images (accroche et révélation).',
    build: (ctx, inp) => (ctx.serie ? `Action « 3 directions artistiques, une par vidéo » (parcours A, phases 2 et 3). Ne touche pas encore à STYLE.md.
${userNotes(inp)}
Série de 3 : chaque vidéo a son scénario développé et aura sa propre direction. La direction A habille la vidéo A, la B la vidéo B, la C la vidéo C. Lis le scénario et le moodboard de chacune :
${serieFiles(ctx.serie, 'SCENARIO.md')}
${serieFiles(ctx.serie, 'MOODBOARD.md')}
Lis aussi BRIEF.md, les goûts de l'utilisateur, le chapitre 1 (styles) et les guides B. Regarde les images des fiches citées.
${directionsExtra(ctx)}
Les trois directions doivent être nettement différentes : palette, typographie, matière et règle de mouvement. Sur une vignette, personne ne doit pouvoir confondre deux vidéos. Chacune sert d'abord son scénario, et chacune est pleine et désirable.
Pour chaque vidéo X (A, B, C) :
1. nomme sa direction, dis d'où elle vient (style de la Bible, vidéo de référence, goût de l'utilisateur) et, en une phrase, ce qui la distingue des deux autres ;
2. donne sa palette en hex avec un rôle par couleur, sa typo (fichier local), sa matière, sa règle de mouvement en une phrase ;
3. construis 2 images clés 1920×1080 avec les vrais textes du scénario de la vidéo X : l'accroche et la révélation. Mets-les dans un mini-projet HyperFrames explorations/da-<X>/ de ce dossier (une image tenue par seconde) ;
4. rends-les en PNG : ${HF} snapshot explorations/da-<X> --at 0.5,1.5 --no-end -o explorations/da-<X>/frames, puis copie-les en reviews/da/<X>-1.png et reviews/da/<X>-2.png. La Régie les recopie ensuite dans les deux autres vidéos ;
5. regarde les 6 images côte à côte, en grand puis à 360 px de large : refais celles qui ne donneraient pas envie de voir le film, et refais une direction si elle ressemble à une autre.
Handoff : options = A, B, C (titre et pitch : la direction de chaque vidéo) ; images = les 6 PNG (label « A · Accroche »…, group = la lettre).` : `Action « 3 directions artistiques en images » (parcours A, phases 2 et 3). Ne touche pas encore à STYLE.md.
${userNotes(inp)}
Lis BRIEF.md, SCENARIO.md, MOODBOARD.md, les goûts de l'utilisateur, le chapitre 1 (styles) et les guides B. Regarde les images des fiches citées.
${directionsExtra(ctx)}
Chaque direction est une vraie proposition visuelle, pleine et désirable. Pour 3 directions contrastées (A, B, C) :
1. nomme-la et dis d'où elle vient (style de la Bible, vidéo de référence, goût de l'utilisateur) ;
2. donne sa palette en hex avec un rôle par couleur, sa typo (fichier local), sa matière, sa règle de mouvement en une phrase ;
3. construis 2 images clés 1920×1080 avec les vrais textes du scénario : l'accroche et la révélation. Mets-les dans un mini-projet HyperFrames explorations/da-<X>/ (une image tenue par seconde) ;
4. rends-les en PNG : ${HF} snapshot explorations/da-<X> --at 0.5,1.5 --no-end -o explorations/da-<X>/frames, puis copie-les en reviews/da/<X>-1.png et reviews/da/<X>-2.png ;
5. regarde chaque image, en grand puis à 360 px de large ; refais celles qui ne te donneraient pas envie de voir le film.
Handoff : options = A, B, C (titre et pitch) ; images = les 6 PNG (label « A · Accroche »…, group = la lettre).`),
  },
  direction_fix: {
    step: 'storyboard',
    serie: 'each',
    label: 'Fixer la direction',
    labelSerie: 'Fixer la direction de chaque vidéo',
    hint: 'La direction choisie devient des jetons : STYLE.md, motion.js, REFERENCE.md.',
    hintSerie: 'La direction de chaque vidéo devient ses jetons : STYLE.md, motion.js, REFERENCE.md.',
    needs: ['choix'],
    build: (ctx, inp) => `Action « Fixer la direction » (phase 3, rôle référence).

Direction retenue : ${inp.choix || '(voir notes)'}
${ctx.serie ? `Vidéo ${ctx.serie.lettre} de la série : sa direction est la ${ctx.serie.lettre} (reviews/da/${ctx.serie.lettre}-1.png et -2.png), sauf si le choix ci-dessus dit autrement. Elle doit rester nettement différente des directions des vidéos ${others(ctx.serie)} : ne reprends ni leur palette ni leur typo.\n` : ''}${userNotes(inp)}
1. Si la direction mélange plusieurs propositions ou si les notes demandent des changements, refais d'abord ses 2 images clés en reviews/da/final-1.png et reviews/da/final-2.png, et regarde-les.
2. Remplis STYLE.md : jetons (couleurs avec rôle, polices locales, tailles en % de la hauteur, marges), une règle de mouvement par classe d'objet, la hiérarchie (un héros par plan), les interdits avec leur remplacement (garde ceux du studio), les garde-fous.
3. Règle motion.js en conséquence : aucun nombre de style ailleurs.
4. Remplis REFERENCE.md avec ce que la direction emprunte (vidéos de la Bible ou référence fournie) : mesuré, estimé, proposé ; liste NE PAS COPIER.
Handoff : images = les 2 images de la direction retenue ; fichiers = ["STYLE.md", "motion.js", "REFERENCE.md"].`,
  },
  decoupage: {
    step: 'storyboard',
    serie: 'each',
    label: 'Découper en plans',
    hint: 'La liste des plans sur la grille musicale : états, raison, héros, son, coutures (SHOTLIST.md, timeline.js).',
    build: (ctx, inp) => `Action « Découper en plans » (phase 4, rôle timeline). Ne construis et ne rends rien.
${userNotes(inp)}
Lis BRIEF.md, SCENARIO.md, STYLE.md, REFERENCE.md, la bibliothèque de plans (methode/C) et le chapitre 9 (timing, rythme et son). La musique mène l'animation : le tempo, les sections et les repères son se décident ici.
Skills open source : cherche dans ${OS('c09', 'tempo, synchro, rythme')} et ${OS('c10', 'structure')}.${ctx.blender ? `
Blender est activé : dans SHOTLIST.md, ajoute « · Blender » au nom du plan, dans la colonne Plan, pour chaque plan qui le mérite (verre, reflets, volume, physique), avec sa raison ; les autres restent en HyperFrames. Recette : ${BLENDER_RECIPE}.` : ''}
Si une piste est fournie dans assets/audio/, mesure son tempo et son premier temps (${HF} beats) et recoupe le film sur des mesures entières ; sinon choisis le BPM qui fait des mesures entières.
1. Écris SHOTLIST.md : un plan par ligne (# | Plan (C) | Images | Temps | État d'entrée | État de sortie | Raison d'exister | Héros | Son | Couture), images globales à 60 fps.
2. Écris timeline.js : la grille (chaque temps calculé depuis l'image 0), tous les événements, les ancres de mise en page en pixels, tous les repères son, les sections musicales.
3. Passe les contrôles du bas de SHOTLIST.md et coche ceux qui tiennent. Pose le texte le plus long dans sa boîte.
Signale tout plan sans raison d'exister, toute exigence contradictoire, tout manque.
Handoff : fichiers = ["SHOTLIST.md", "timeline.js"].`,
  },
  storyboard: {
    step: 'storyboard',
    serie: 'each',
    label: 'Dessiner le storyboard',
    hint: 'Une image clé par plan, dans la direction fixée. Ce sont les mises en page de départ des plans.',
    build: (ctx, inp) => `Action « Dessiner le storyboard ».
${userNotes(inp)}
Pour chaque plan de SHOTLIST.md, compose son image clé : l'instant où le héros est posé et le texte lisible. Respecte la direction fixée (STYLE.md, motion.js) et les vrais textes.
- Mini-projet HyperFrames storyboard/ : une image tenue par seconde, l'image k (de 0,5 s en 0,5 s + k) est le plan k+1.
- Rends chaque image en PNG : storyboard/plan-01.png, plan-02.png… (numéro du plan sur 2 chiffres).
- Composition pleine, hiérarchie nette, rien collé au bord, texte lu ≥ 3 % de la hauteur (4 % en 9:16). Cherche au besoin dans ${OS('c02', 'composition')}.${ctx.blender ? `
- Plan marqué Blender dans SHOTLIST.md : son image clé peut être un rendu Blender à demi-résolution (recette ${BLENDER_RECIPE}), posé dans le storyboard comme les autres.` : ''}
- Regarde chaque image ; refais celles qui sont vides ou plates.
Ces images deviennent les mises en page de départ de l'étape « Plan par plan ».
Handoff : images = les PNG des plans (label « Plan N · nom du plan »).`,
  },

  // ——— Étape 3 · Plan par plan ———
  build_shot: {
    step: 'plans',
    label: 'Construire ce plan',
    hint: 'Claude construit seulement ce plan, contre son image de storyboard, et rend ses images témoins.',
    perShot: true,
    build: (ctx, inp) => {
      const s = ctx.shot;
      const nn = pad(s.n);
      const first = ctx.firstBuild
        ? `\nC'est le premier morceau : si l'ouverture n'est pas ce plan, construis aussi l'ouverture, pour prouver le système avant le film entier.\n`
        : '';
      return `Action « Construire le plan ${s.n} · ${s.plan} »${s.frames ? ` (images globales f${s.frames.start}–f${s.frames.end})` : ''} (phases 5-6, rôle rendu).
${first}${userNotes(inp)}
Lis CONTRACT.md, STYLE.md, motion.js, SHOTLIST.md, timeline.js et l'image storyboard/plan-${nn}.png : c'est la mise en page visée.
Si la composition n'existe pas encore, crée le projet HyperFrames à la racine (hyperframes.json, package.json épinglé, index.html qui charge timeline.js et motion.js), en respectant le contrat.
Construis seulement ce plan, de son état d'entrée à sa couture vers le suivant. Ne touche pas aux autres plans.
Avant de régler un mouvement, une transition, un texte ou une matière, cherche le mot-clé dans les règles des skills open source (${APPORTS}, c02 à c08 : composition, typographie, transitions, caméra et 3D, formes et matières, interfaces, personnages).${ctx.blender ? `
Si SHOTLIST.md marque ce plan « Blender », suis la recette ${BLENDER_RECIPE} : scène dans blender/, essai à demi-résolution d'abord, puis suite d'images calée sur timeline.js et habillée dans la composition.` : ''}
Lance ${HF} check jusqu'à 0 erreur.
Rends ses images témoins (entrée, atterrissage du héros, tenue, couture) avec ${HF} snapshot --at … et enregistre-les en reviews/plans/plan-${nn}-1.png à -4.png. Regarde-les à côté du storyboard, en grand puis à 360 px de large.
Audit : chaque instant de timeline.js de ce plan tombe sur son image ; corrige les écarts.
Handoff : images = storyboard/plan-${nn}.png (label « Storyboard ») puis les témoins ; resume = les écarts avec le storyboard et ce que tu en penses.`;
    },
  },
  fix_shot: {
    step: 'plans',
    label: 'Corriger ce plan',
    hint: 'Format 4 champs : où, constat, changement, ce qui reste fixe. Au plus 3 corrections et 1 note de goût.',
    perShot: true,
    build: (ctx, inp) => {
      const s = ctx.shot;
      const nn = pad(s.n);
      const corrections = (inp.corrections || []).filter((c) => c && (c.constat || c.changement));
      const blocks = corrections.map((c, i) => lines(
        `Correction ${i + 1}`,
        `Où : ${c.ou || `plan ${s.n}`}.`,
        `Constat : ${c.constat || '—'}.`,
        `Changement : seulement ${c.changement || '—'}.`,
        `Reste fixe : ${c.fixe || 'les événements, la géométrie, les textes et les repères son des autres plans'}.`,
      )).join('\n\n');
      return `Action « Corriger le plan ${s.n} · ${s.plan} » (phase 7, boucle locale).
Révise la composition d'après BRIEF.md, STYLE.md et SHOTLIST.md. Ordre : information manquante et texte illisible, puis timing, puis détail visuel.

${blocks || '(aucune correction chiffrée)'}
${inp.gout ? `\nNote de goût (une seule par tour) : ${inp.gout}\nTraduis-la d'abord en nombres (table « Traduire une sensation en nombres » de prompts/PROMPTS.md), écris la traduction dans ton résumé, puis applique-la.\n` : ''}
Vérifie : rends de nouveau les images témoins reviews/plans/plan-${nn}-1.png à -4.png, plus une image avant et après chaque instant touché ; frontière avec les plans voisins ; aucune image intermédiaire qui chevauche ou saute. ${HF} check à 0 erreur.
Si un correctif ne tient pas : rends l'image d'avant et l'image d'après, liste chaque différence, trouve la ligne qui la cause, ne corrige qu'elle.
Une panne technique corrigée ajoute sa ligne à CONTRACT.md ; un défaut de style utilisé quand même s'ajoute aux interdits de STYLE.md.
Handoff : images = storyboard/plan-${nn}.png puis les nouveaux témoins ; resume = les valeurs changées.`;
    },
  },
  assemble: {
    step: 'plans',
    serie: 'each',
    label: 'Assembler le premier montage',
    hint: 'Le film complet en brouillon, avec planche, planche téléphone et bandes de couture.',
    build: (ctx, inp) => `Action « Assembler le montage » (phase 6). Version de travail : v${ctx.version}.
${userNotes(inp)}
Construis les plans qui manquent, un par un, dans l'ordre de SHOTLIST.md : ${HF} check à 0 erreur et images à leurs repères −2, 0, +2 im avant le suivant. L'état final de chaque plan est l'état initial du suivant quand la couture est continue.
Rends le brouillon complet : ${HF} render --fps 60 --quality draft -o renders/v${ctx.version}-draft.mp4.
Lance tools/review.sh renders/v${ctx.version}-draft.mp4 reviews/v${ctx.version} <instants des coutures en secondes, séparés par des virgules>.
Regarde la planche à 4 images/s, la planche téléphone et les bandes de couture. Ne dis pas que c'est fini.
Handoff : images = reviews/v${ctx.version}/planche-4ips.png, planche-telephone.png et les bandes de couture ; fichiers = ["renders/v${ctx.version}-draft.mp4"].`,
  },
  critique: {
    step: 'plans',
    serie: 'each',
    label: 'Critique neuve',
    hint: 'Un critique qui n’a pas vu le code juge les images seules : 5 notes, défauts classés, 3 correctifs.',
    fresh: true,
    build: (ctx, inp) => `Tu es le critique (rôle critique, phase 7). Tu n'as pas vu le code et tu ne l'ouvres pas.
Tu reçois BRIEF.md, SCENARIO.md, STYLE.md, SHOTLIST.md, les images de reviews/v${ctx.version}/ et celles de storyboard/.
${userNotes(inp)}
Ne décris pas ce que le film voulait faire. Juge seulement les images rendues.
Note de 1 à 5 : accroche, lisibilité, continuité, mouvement, calage son, et BEAUTÉ (l'image donne-t-elle envie ? est-elle pleine, tenue, désirable ?).
Coche la liste : texte lisible à taille téléphone ; rien hors zone sûre ; vrais assets ; typo et couleurs constantes ; aucune image ratée en milieu de transition ; coupes et sons ensemble ; vraie accroche dans les 2 premières secondes ; dernière image assez forte pour une affiche.
Passe la grille de contrôle de la Bible (chapitre 11). Pour un défaut précis, cherche aussi dans ${OS('c11', 'clichés et cohérence')} et ${OS('c12', 'critique et contrôles')}.
Classe les défauts : bloquant, gênant, visible à l'arrêt seulement.
Pour les trois plus graves : instant (image globale), preuve (l'image), correctif local au format 4 champs, ce qui doit rester fixe.
Écris reviews/v${ctx.version}/critique.md.
Handoff : resume = les notes et les 3 défauts les plus graves ; images = les images qui prouvent chaque défaut ; fichiers = ["reviews/v${ctx.version}/critique.md"].`,
  },
  apply_critique: {
    step: 'plans',
    serie: 'each',
    label: 'Réparer les 3 défauts',
    hint: 'Les 3 défauts les plus graves de la critique, réparés en local et vérifiés avant/après.',
    build: (ctx, inp) => `Action « Réparer les défauts » (phase 7). Version : v${ctx.version}.
${userNotes(inp)}
Lis reviews/v${ctx.version}/critique.md. Répare les 3 défauts les plus graves (ou ceux que l'utilisateur désigne dans ses notes), chacun au format 4 champs : où, constat, changement, reste fixe.
Pour chacun : image avant et après au même instant, frontières des plans voisins, ${HF} check à 0 erreur. Re-rends seulement la plage fautive.
Une panne technique corrigée ajoute sa ligne à CONTRACT.md ; un défaut de style ajouté aux interdits de STYLE.md.
Handoff : images = les paires avant/après ; resume = ce qui a changé et ce qui reste à juger.`,
  },

  // ——— Étape 4 · Musique ———
  sound: {
    step: 'musique',
    serie: 'each',
    label: 'Fabriquer la bande-son',
    hint: 'Composée en code depuis timeline.js, ou piste fournie recalée ; chaque repère mesuré.',
    build: (ctx, inp) => {
      const provided = inp.mode === 'piste';
      return `Action « Fabriquer le son » (phase 8.1). Le film doit d'abord marcher muet.
${userNotes(inp)}
Lis timeline.js : chaque repère son tombe 1 image APRÈS son événement image.
${provided
    ? 'Piste fournie dans assets/audio/ : mesure son BPM et son premier temps dans le fichier, recoupe-la sur des mesures entières, puis ajoute les bruitages des repères par-dessus.'
    : 'Synthétise tout en code (numpy), sans échantillons ni voix, en partant de l’exemple du studio (tools/sound-exemple*.py) : lit musical par sections, un bruitage par repère.'}
${inp.intention ? `Intention musicale de l'utilisateur : ${inp.intention}` : 'Musique : intro légère, drop sur la révélation, quasi-silence 0,2-0,7 s avant le logo, accord final qui se pose.'}
48 kHz stéréo, −14 LUFS intégrés, crête vraie ≤ −1 dBTP après encodage AAC. Exporte aussi les pistes séparées (lit, coups).
Skills open source : cherche dans ${OS('c09', 'son, loudness, mixage, synchro')} avant de fixer un réglage ; la Bible prime en cas de désaccord.
Mesure, n'écoute pas : lance tools/audio_check.py (attaque de chaque repère à l'échantillon, coups 3-6 dB au-dessus du lit, sonie par demi-seconde, part sous 60 Hz, bande 200 Hz-6 kHz). Corrige jusqu'à ce que les mesures passent.
Branche le son dans la composition (assets/audio/score.wav) et écris reviews/son.md : les mesures et ce qui reste à écouter.
Handoff : fichiers = ["assets/audio/score.wav", "reviews/son.md"].`;
    },
  },
  measure: {
    step: 'musique',
    serie: 'each',
    label: 'Mesurer le son',
    hint: 'Re-mesure le son sur le fichier décodé et rapporte chaque écart.',
    build: (ctx, inp) => `Action « Mesurer le son ».
${userNotes(inp)}
Lance tools/audio_check.py sur assets/audio/score.wav (et sur le dernier rendu décodé s'il existe) avec les pistes séparées. Compare chaque repère à timeline.js.
Mets à jour reviews/son.md : sonie, crête, attaques hors place (image et écart en ms), coups trop faibles, et ce que tu corrigerais.
Ne corrige rien sans le dire dans le résumé.
Handoff : fichiers = ["reviews/son.md"].`,
  },

  // ——— Étape 5 · Vidéo finale ———
  deliver: {
    step: 'final',
    serie: 'each',
    label: 'Rendre les livrables',
    hint: 'Master 60 fps, déclinaisons recomposées, encodage web, affiche, contrôles ffprobe.',
    build: (ctx, inp) => {
      const formats = (inp.formats && inp.formats.length ? inp.formats : ['16:9']).join(', ');
      return `Action « Rendre les livrables » (phases 8.2 et 8.3, chapitre 12 étape 10).
Formats demandés : ${formats}.
${userNotes(inp)}
1. Master 16:9 : ${HF} render --fps 60 --quality delivery -o out/${ctx.film.slug}-16x9.mp4.
2. Chaque autre format est une composition à part (formats/<format>.html), recomposée depuis la même timeline et la même matière, jamais recadrée : en 9:16 texte plus grand, moins d'éléments à la fois ; en 1:1 typo plus serrée.
3. Encodage web de chaque fichier (x264 slow CRF 23, maxrate 4M, AAC 160k, faststart) : out/<nom>-web.mp4.
4. Affiche : une image forte du film, en JPG, par format (out/affiche-<format>.jpg).
5. Une planche par déclinaison (tools/review.sh) dans reviews/final/.
6. ffprobe de chaque fichier : taille, cadence, durée, nombre d'images. Pour l'encodage et les contrôles de livraison, cherche aussi dans ${OS('c12', 'encodage, livraison')}.
Écris out/LIVRAISON.md : fichiers, contrôles, mesures son, et la note « reste à regarder par un humain ».
Handoff : images = les affiches et les planches ; fichiers = la liste des vidéos de out/.`;
    },
  },
  ranger: {
    step: 'final',
    serie: 'each',
    label: 'Ranger le studio',
    hint: 'Ce que ce film apprend au studio de base : propositions précises, rien n’est appliqué sans toi.',
    build: (ctx, inp) => `Action « Ranger le studio » (phase 9).
${userNotes(inp)}
Compare ce film au studio de base (${STUDIO}) : nouvelles lignes de CONTRACT.md, nouveaux interdits et garde-fous de STYLE.md, composants validés réutilisables, outils améliorés, goûts confirmés.
Écris reviews/ranger.md : la liste précise des changements à reporter dans le studio de base (avant → après, fichier par fichier), et les goûts à ajouter à la mémoire de l'utilisateur.
N'applique RIEN dans le studio de base : l'utilisateur valide d'abord.
Complète le bilan de JOURNAL.md (prompts, relances créatives, correctifs techniques, tours de critique, ce qu'on changerait encore).
Handoff : fichiers = ["reviews/ranger.md", "JOURNAL.md"].`,
  },
};

// Message libre, dans la session de l'étape.
export const MESSAGE = {
  label: 'Message',
  build: (ctx, inp) => `${inp.text}\n\n(Rappel Régie : reste dans l'étape en cours, puis réécris .regie/handoff.json avec "run":"${ctx.runId}".)`,
};

// Le message que la Régie tape dans la session : l'identifiant (pour le handoff), l'étape, la portée en série, puis la consigne.
export function actionMessage({ runId, step, label, shared, lettre, body, isMessage }) {
  if (isMessage) return `[Régie · action ${runId}] ${body}`;
  return lines(
    `[Régie · action ${runId}] Étape ${step.n} · ${step.title} — « ${label} ».`,
    shared ? `Cette action vaut pour les 3 vidéos : tu la fais ici, dans la vidéo ${lettre}, et la Régie recopie ensuite le résultat dans les deux autres. N'écris pas dans leurs dossiers.` : null,
    `Fais seulement cette action, puis arrête-toi après avoir écrit .regie/handoff.json avec "run":"${runId}".`,
    `\n${body}`,
  );
}

export function buildPrompt(actionId, ctx, input = {}) {
  const action = actionId === 'message' ? MESSAGE : ACTIONS[actionId];
  if (!action) throw new Error(`action inconnue : ${actionId}`);
  return action.build(ctx, input);
}

export const stepOf = (id) => STEPS.find((s) => s.id === id);
