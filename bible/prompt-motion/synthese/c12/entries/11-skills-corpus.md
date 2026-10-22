## Les skills vidéo du corpus : cinetic, product-film, session-story

Un skill est une procédure écrite que Claude suit à la lettre : étapes, fichiers, scripts de contrôle. Trois vidéos du corpus en sortent, une par skill : toutes notées 4, toutes animées sur la musique avec une synchro serrée (contre 129 vidéos sur 233 dans le corpus), aucune notée 5. Ils relèvent le plancher, pas le plafond. On s'en sert pour emprunter leurs portes de contrôle, ou pour partir d'eux quand le projet s'y prête. Preuve mince : une vidéo par skill, aucune étude à 60 fps.

![Six images, une ligne par skill : liste de techniques tirées au sort et terminal (cinetic), comptes qui jaillissent de la mascotte et motif Autopilot (product-film), maillet et papillon (session-story)](ILLUS:skills-corpus-1)

*[Cinetic skill launch film](https://prompt-motion.com/lexnlin-6161a6) à 0:10.9 et 0:25.6, [Reddit marketing tool launch video](https://prompt-motion.com/anthonyriera-9b1b2a) à 0:09.0 et 0:27.9, [Animated agent session story](https://prompt-motion.com/jake11moran-a269c4) à 0:23.6 et 0:32.6 : trois signatures reconnaissables d'un coup d'œil.*

**Ce que chaque skill impose**

- **cinetic** (Remotion 4 par défaut, HyperFrames 0.8.79 possible). Neuf étapes, chacune écrit un fichier et passe une porte : `BRIEF.md`, `TREATMENT.md`, jetons de marque, `timeline.ts`, actes, `soundtrack.wav`, `film.mp4`, revue, livraison. Les techniques sont tirées au sort (`pick.py`, environ 1 par 2,5 s, 12 pour 30 s) « pour que deux films cessent de se ressembler ». Seuils écrits : texte tenu 36 im + 6 im par mot, rien d'immobile plus de 48 im (0,8 s) sauf une tenue voulue de 60 à 96 im, carte de fin de 1,5 à 2,5 s. Les sons sont calculés depuis le code de l'image : tapés à la main, ils tombaient 8 à 11 im à côté. Revue par 4 regards critiques ; on livre si les 11 critères valent au moins 3, la finition et la synchro 5, la moyenne 4,2, en 5 tours au plus.
- **product-film** (Remotion). Découverte du code et de la charte, 2 tours d'entretien, `BRAND.md`, puis un prompt de film en blocs (`<context> <inputs> <direction> <cast> <structure> <build> <gotchas> <start>`). Point d'arrêt obligatoire : la carte des temps et 3 images de style, validées avant tout code. La piste est mesurée (`beats.py`, dispersion de la grille sous 10 ms), recoupée sur des mesures entières, et chaque bruitage est posé à « repère − crête ». Rendu maître à 240 fps fondu 4 par 4 (`tmix`) pour le flou, puis vérification des couleurs décodées : `#0a0a0a` doit revenir à 9 ou 10, pas à `#171717`.
- **session-story** (HyperFrames 0.8.71). Un film de 40 à 70 s tiré d'une vraie session, citations mot pour mot (48 caractères au plus par demande). Porte de confidentialité : chaque ligne à l'écran est validée par l'utilisateur, sinon tampon DRAFT. Le moteur possède la chorégraphie ; Claude écrit l'histoire, le décor et une partition en code (thème de 6 à 10 notes). La construction échoue si plus de 1,2 s tombe sous −45 dBFS. Rendu `--fps 24 --crf 12`, longueur et images clés vérifiées avec ffmpeg.

**Tableau comparatif**

| | cinetic | product-film | session-story |
| --- | --- | --- | --- |
| Étapes et portes | 9 étapes, une porte chiffrée chacune | 8 étapes, point d'arrêt carte des temps + 3 images | 11 étapes, porte de confidentialité |
| Source du temps | `timeline.ts`, 120 BPM par défaut | `cues.ts`, tempo mesuré sur la piste | `story.json`, horaires réels de la session |
| Son | synthétisé depuis les repères de l'image, −14 LUFS | chanson sous licence recoupée sur les mesures | orchestre General MIDI composé en code, −16 LUFS |
| Contrôles | lint, grille, mise en page, flou, sync ≤ 48 échantillons | images fixes, planches, couleurs décodées | `schedule.mjs`, silence ≤ 1,2 s, images extraites |
| Ce qu'il impose | ses interdits de goût, 6 à 8 types de transitions | rien hors de la charte du produit | décor, cadrage et métaphores figés |
| Vidéo et note | [Cinetic skill launch film](https://prompt-motion.com/lexnlin-6161a6), 4 : 30,06 s, 60 fps, 120 BPM, 22 gestes sur 25 à ±2 im d'un temps | [Reddit marketing tool launch video](https://prompt-motion.com/anthonyriera-9b1b2a), 4 : 52,8 s = 33 mesures à 150 BPM, 38 départs sur 61 à ±2 im | [Animated agent session story](https://prompt-motion.com/jake11moran-a269c4), 4 : 52,7 s, 24 fps, 9 gestes sur 13 à ±1 im d'une attaque |
| Défauts relevés | interface à 0,8-1,2 % de la hauteur ; « Now it directs. » 1,75 s quasi immobile sur le drop | interface à environ 2 % ; pas de carton final ; intro de 2,8 s | plan large fixe environ 45 s ; citations à 3 % lues 1,5 s ; boucle répétée 3 fois |

Le film cinetic change d'image 1 im avant chaque temps : probablement la règle écrite « cue − 1 » du skill (voir *Couper en avance, atterrir sur le temps* au chapitre 9). Le film product-film est probablement la démo du skill : l'exemple de `music.md` a 150 BPM et 52,8 s. Les 3 vidéos qui appellent un skill sans procédure de ce niveau font moins bien (moyenne 3,33) : [Motion designer showreel](https://prompt-motion.com/danilowm-d3720d) (/hyperframes, 3, 37 % statique, 720p), [Tally product demo](https://prompt-motion.com/visheshbaghell-3aba37) (/brag, 3, 81 s, 64 % quasi fixe, même transition 8 fois), [Whiteboard skill tutorial](https://prompt-motion.com/lemomo-ai-0d9cff) (4, musique décorative).

**Ce qu'aucun ne contrôle assez**

Les trois laissent passer du texte d'interface trop petit et une tenue après le temps fort. cinetic écrit pourtant un plancher de 22 px (2 % de la hauteur) vérifié par `layout-audit.sh` : la version utilisée ne l'imposait pas, ou le contrôle n'a pas tourné (probable). Son propre banc d'essai le reconnaît : au tour 7, le film du skill remplit 54 attentes sur 56 contre 41 sans lui, mais un juge neutre ne le préfère que 2 fois sur 4. Un skill peut passer tous ses contrôles sans être préféré.

**Ce qu'on reprend dans notre méthode**

1. Un livrable et une porte chiffrée par étape (cinetic) : c'est la forme de chaque étape de ce chapitre.
2. Le point d'arrêt avant le code : carte des temps et 3 images de style (product-film), à l'étape 5.
3. Mesurer la piste, puis la recouper sur des mesures entières : voir *La musique calquée sur le montage* au chapitre 9.
4. Les sons calculés depuis l'image (contact, 50 % d'une apparition, 97 % d'un posé), jamais tapés : voir *Le bruitage à l'image près et la sonification* au chapitre 9.
5. Vérifier le fichier encodé : durée à ±1 im, couleurs décodées, décalage son ≤ 1 im.
6. À adapter : le tirage au sort de techniques, dans notre bibliothèque de plans plutôt que la sienne.

Ce qu'on corrige. Les interdits de cinetic (pas de serif, d'italique, d'orange, de crème, de dégradé multicolore, de rebond hors atterrissage) sont les interdits de son style éditorial sobre, pas des règles générales : voir le chapitre 1, Styles. L'utilisateur aime les fonds en dégradé fluide et les rebonds sur ce qui naît. On ajoute ce qui manque aux trois : taille minimale du texte et tenue maximale.

**Quand partir d'un skill.** product-film, quand le code et la charte du produit existent (une promo SaaS comme NuOps), en acceptant Remotion. cinetic, pour un film de lancement complet avec tous ses gardes-fous, en écrasant ses interdits par ceux du style choisi ; il réserve HyperFrames aux films lents (moins de 18 px par image). session-story, seulement pour un film d'usage personnel. Sinon, la Bible seule. Ranger charte et animations validées dans un projet Claude ou une skill (guide Otom, p. 6 et p. 15) : ces trois skills le font, outillés.

**Dans HyperFrames, la source unique du temps**

```js
// Une seule table de temps, comme timeline.ts (cinetic) ou cues.ts (product-film)
const FPS = 60, BPM = 120;
const BEAT = 60 / BPM;                         // 0,5 s = 30 images
const b = (bar, beat = 0, sub = 0) =>          // mesure (1 = première), temps, double-croche
  ((bar - 1) * 4 + beat + sub / 4) * BEAT;
const lead = t => t - 1 / FPS;                 // l'image change 1 im avant le temps
const CUE = { drop: b(3), reveal: b(5, 2), lockup: b(14) };
tl.set("#act1", { autoAlpha: 0 }, lead(CUE.drop))
  .set("#act2", { autoAlpha: 1 }, lead(CUE.drop))
  .fromTo("#hero", { scale: 0.92, autoAlpha: 0 },
    { scale: 1, autoAlpha: 1, duration: 0.4, ease: "expo.out", immediateRender: false },
    lead(CUE.reveal));
// La bande-son lit la même table CUE : aucun temps tapé deux fois.
```

**À cocher**

- [ ] Une seule table de temps (mesure, temps) pilote l'image et le son ; aucun temps tapé en dur.
- [ ] Carte des temps et 3 images de style validées avant la première ligne de construction.
- [ ] Piste mesurée (dispersion de la grille sous 10 ms) et durée = nombre entier de mesures.
- [ ] Aucun texte d'interface sous 22 px (2 % de la hauteur) après zoom ; aucune tenue immobile de plus de 48 im.
- [ ] Fichier encodé vérifié : durée à ±1 im, couleur de fond décodée à ±2, son décalé de 1 im au plus.
- [ ] Interdits d'un skill remplacés par ceux du style choisi (chapitre 1).
