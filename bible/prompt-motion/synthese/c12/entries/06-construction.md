## Étape 7 · La construction plan par plan : une timeline, tout en fonction du temps

On construit chaque plan comme une fonction du temps, sur une seule timeline en pause, avec des durées tirées de la carte des temps. On commence par le plan le plus difficile et on valide chaque plan sur des images fixes. Sur 233 vidéos, 129 sont à 60 fps (4,03 de moyenne, 14 des 17 notées 5) ; les 7 captures en direct ou à cadence irrégulière relevées plafonnent à 4. On livre un projet qui passe `npx hyperframes check` et une planche d'images par plan.

![Six images : le point orange arrive, dessine sa courbe, dépasse de 22 % et se pose sur la ligne pointillée](ILLUS:construction-1)

*[Orange dot motion system](https://prompt-motion.com/ultimaxbt-bbebf5), 0:03.70 à 0:04.87 : la courbe et le point sortent de la même fonction de ressort ; le point dessine son propre dépassement (+22 %) et se pose (musique partielle : construction, pas calage).*

**Ce que font les meilleures vidéos**

- Elles affichent le rendu image par image : « FRAME 0720 / 0900 » dans [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a) (5/5), particules à graine fixe 0x2A dans [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61) (5/5).
- Tout est calculé depuis le temps : « every style is computed from time inside window.seek(t) » ([UGC ad generator promo](https://prompt-motion.com/twoclipping-6dd14e)) place chaque geste à l'image près sur la grille ; [Speech built as architecture](https://prompt-motion.com/gdgtify-287ddf) obtient render(0) = render(20), une boucle exacte.
- Les durées viennent du tempo : [Kinetic type showreel](https://prompt-motion.com/zheke-38deff) (5/5) coupe sur round(n × 28,125) avec 0 im d'écart (étude *Kinetic type showreel — @zheke*, chapitre 14) ; product-film interdit toute image écrite en dur dans un plan.
- Une seule fonction pour l'image et la donnée : « Draw the graph from the same spring function that moves the dot » ([Orange dot motion system](https://prompt-motion.com/ultimaxbt-bbebf5)) ; le +22 % demandé devient le dépassement réel.
- L'interface est reconstruite en composants, pas collée en capture : « break them down into components » ([mdfor.dev product intro video](https://prompt-motion.com/ho-ba-f3f0e9) ; voir *La maquette d'appareil et l'interface reconstruite* au chapitre 7). Avec le moteur de session-story, Claude n'écrit que l'histoire ([Animated agent session story](https://prompt-motion.com/jake11moran-a269c4)).

**Ce qui manque aux moins bonnes**

- La capture en direct : [Five scroll-based sections](https://prompt-motion.com/ercankeskinx-ec2568) en 1920 × 972 avec curseur, [Pixel art card battle game](https://prompt-motion.com/aisongman-71ffac) à 15 fps, 8 sauts dans [AI data centre 3D tour](https://prompt-motion.com/sayan-shanky-f850d8).
- Des constantes en images sans lien avec le tempo : [Norilu product launch video](https://prompt-motion.com/sachaarbonel-8f14f4) avance par pas de 0,4 s à 110 BPM (temps de 0,545 s) ; [Parenting app hype video](https://prompt-motion.com/francoxavier33-d2dfd2) écrit ses cascades en 7-8 im fixes : seuls les grands repères tombent sur la grosse caisse.
- Des données non relues : « 0M+ » ([ocrX app launch video](https://prompt-motion.com/mehul4795-4a7007)), « 1 steps » ([Step race app promo](https://prompt-motion.com/marklaunches-3b9492)), « 1 cubes » ([White Russian recipe animation](https://prompt-motion.com/sarut0bisasuke-cefa43)).
- Une pile non vérifiée : [Spotify product film](https://prompt-motion.com/brainextends-e19ac3) demandait 60 fps et Geist : sortie en 30 fps, police de repli.

**Décisions** (défaut entre parenthèses)

- Le moteur (HyperFrames, version épinglée ; Remotion seulement si le projet l'exige).
- L'organisation (une sous-composition par plan ou par acte, constantes de grille partagées, aucune durée en dur).
- L'ordre (le plan héros d'abord, validé sur 2 ou 3 images, puis l'ordre de la carte).
- Les données (textes et chiffres dans un seul fichier, vérifiés : sommes, pluriels, unités).
- L'interface (reconstruite en HTML, poussée de 2 à 5× sur l'action, plan large lisible 1,7 s au plus, skill cinetic).

**Livrable** : le projet, qui passe `npx hyperframes check` plan par plan ; pour chaque plan, une planche à ses repères −2, 0 et +2 im, relue avant le suivant ; une copie du dossier à chaque plan validé.

**Règles**

1. Une horloge : une `gsap.timeline({ paused: true })` par composition, enregistrée après construction. Ni `setTimeout`, ni transition CSS ; le hasard passe par un générateur à graine (mulberry32).
2. Aucune durée en dur : positions et durées en `at(mesure, temps)`, gestes internes compris.
3. Les états de départ se posent avec `tl.set` ; un `fromTo` nu affiche son état de départ trop tôt (savoir-faire HyperFrames).
4. Polices locales en `@font-face`, mesures après `document.fonts.ready`, parents cachés en `display:block` pour mesurer ; jamais `will-change: transform` sur un texte zoomé (savoir-faire HyperFrames).
5. Un plan à la fois : `check` à 0 erreur et planche relue avant de passer au suivant. Courbes : voir *Le système de courbes : expo-out pour entrer, ease-in pour sortir* (chapitre 9) et *La physique élastique : pop en ressort, écrasement, tampon* (chapitre 6).

**La méthode Otom, corrigée** : on reprend « une seule horloge, pour pouvoir être mise en pause et rendue image par image » (p. 7), la V1 comme premier jet, 2 à 5 allers-retours (p. 6) et la livraison avec 3 pistes d'amélioration classées par impact (p. 7). Son « aucune dépendance externe sauf Google Fonts » est faux au rendu : Space Grotesk y sort en Arial. La Bible a raison : polices auto-hébergées. La réflexion élevée (p. 6) n'est pas mesurée ici.

**Erreur fréquente** : écrire tout le film d'un trait ; le défaut du premier plan se recopie dans tous les suivants.

**Dans HyperFrames**

- Pendant l'écriture : `npx hyperframes lint`. Après chaque plan : `npx hyperframes check` (lint compris), `--snapshots` au premier passage complet.
- Repères d'un plan à ±2 im (60 fps) : `npx hyperframes snapshot --at 7.47,7.50,7.53` ; un défaut repéré : `snapshot --zoom "#cta"`.
- Copier le dossier d'une version validée (`rsync`, sans rendus) avant de la modifier ; le Studio ajoute des `data-hf-id` : relire avant d'écrire (savoir-faire HyperFrames).

```js
// Plan « preuve » (mesure 5) ; en sous-composition, positions = at(…) − at(5)
const FPS = 60, BEAT = 60 / 128;
const at = (bar, beat = 1) => ((bar - 1) * 4 + beat - 1) * BEAT;
const tl = gsap.timeline({ paused: true });
await document.fonts.ready;                                 // mesurer après les polices locales
// une seule fonction pour la courbe et le point (dépassement ≈ +22 %)
const spring = p => 1 - Math.exp(-5.1 * p) * Math.cos(12 * p) * (1 - p);
const W = 900, H = 300, N = 60;
const path = document.querySelector("#curve");
path.setAttribute("d", Array.from({ length: N + 1 }, (_, i) =>
  `${i ? "L" : "M"}${(i / N) * W},${H - spring(i / N) * H * 0.7}`).join(""));
const L = path.getTotalLength(), T0 = at(5), DUR = 2 * BEAT;   // 2 temps dès le 1er temps
tl.set(path, { strokeDasharray: L, strokeDashoffset: L }, 0)    // états de départ posés à 0
  .set("#dot", { x: 0, y: H, autoAlpha: 0 }, 0)
  .set("#label", { autoAlpha: 0, y: 12 }, 0)
  .set("#dot", { autoAlpha: 1 }, T0)
  .to(path, { strokeDashoffset: 0, duration: DUR, ease: "none" }, T0)
  .to("#dot", { x: W, duration: DUR, ease: "none" }, T0)
  .to("#dot", { y: H - H * 0.7, duration: DUR, ease: spring }, T0)   // même fonction que le tracé
  .to("#label", { autoAlpha: 1, y: 0, duration: 14 / FPS, ease: "power3.out" }, at(5, 2));
window.__timelines["plan-preuve"] = tl;                     // enregistré après construction
```

**Dans After Effects**

- Une pré-composition par plan (Layer › Pre-compose (Calque › Précomposer)), calée sur son marqueur de l'étape 5 ; le plan héros d'abord.
- Clés posées sur les marqueurs : glisser l'indicateur de temps avec Maj pour l'aimanter. Courbes dans le Graph Editor (Éditeur de graphique).
- Textes et chiffres dans un seul `data.json` (File › Import (Fichier › Importer)) ; Source Text (Texte source) lit `footage("data.json").sourceData.ca`.
- `random()` et `wiggle()` donnent la même image à chaque rendu ; `seedRandom(42, true)` fige une valeur tirée une fois pour tout le plan.
- Repères −2, 0, +2 im : Composition › Save Frame As › File (Composition › Enregistrer l'image sous › Fichier).

**À cocher**

- [ ] Une timeline en pause par composition ; aucune occurrence de `setTimeout`, `Math.random()` ou `transition:`.
- [ ] Chaque position et chaque durée vient de `at()` ; aucune image écrite en dur.
- [ ] `npx hyperframes check` à 0 erreur après chaque plan.
- [ ] Planche −2, 0, +2 im relue pour chaque repère avant le plan suivant.
- [ ] Polices locales chargées avant toute mesure ; aucune police de repli sur la planche.
- [ ] Textes et chiffres relus, dans un seul fichier ; dossier copié par plan validé.
