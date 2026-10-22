## Le temps mort : quand l'image s'arrête (dead time, static hold, slow hook, flat motion)

C'est le tic qui sépare le mieux les vidéos faibles des bonnes : 36 des 47 vidéos notées 1 à 3 (77 %) en ont un, contre 67 des 186 notées 4 ou 5 (36 %). Note moyenne 3,66 avec, 4,02 sans. La scène se construit en 1 à 1,5 s, puis attend : 56 défauts chiffrent la part de maintiens de plus de 0,4 s, médiane 42 % de la durée. C'est l'inverse de la grammaire 1600 (quelque chose bouge toutes les 0,5 à 1 s). Deux voisins : l'accroche lente (noir, point minuscule ; 37 vidéos) et le mouvement plat (caméra figée, glissements linéaires ; 47 vidéos). Temps mort : 103 vidéos, dont 67 notées 4 ou 5 et 3 notées 5.

**Quand s'en servir** : la durée de chaque tenue se décide au découpage (étape 5), en temps musicaux et d'après le temps de lecture. Le micro-mouvement des tenues se construit plan par plan (étape 7). Au contrôle qualité (étape 9), on mesure les gels sur le rendu. Un plan long et calme ne se défend que dans un court contemplatif ou un tutoriel en voix off, jamais dans une promo de 15 s.

![Six images en 2,1 s d'une page « All of it, one quiet issue. » : titre et magazine identiques, seul un éventail de pages s'ouvre puis se referme à droite](ILLUS:temps-mort-1)

*[Product intro synced to music](https://prompt-motion.com/bogdandragomir-35e024), 0:07.90 à 0:10.00 : 2,1 s où seul un éventail de pages discret bouge, au milieu d'une vidéo pourtant calée sur la musique (étude 60 fps). Le décor qui bouge seul ne sauve pas la tenue.*

**Symptôme mesuré**

- Mesure faite pour cette entrée sur les 16 vidéos notées 5 de moins de 70 s (ffmpeg `freezedetect`, bruit −50 dB, gels ≥ 0,4 s) : part de gels médiane 7,5 %, 13 vidéos sur 16 sous 10 %. Leur plus long gel en cours de film : médiane 0,5 s, soit un temps. Chez [Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), les 5 gels internes durent 0,42 à 0,5 s : un temps à 128 BPM (0,469 s), posé sur les silences de la piste.
- Même mesure, vidéos faibles : 74 % ([Animated business explainer](https://prompt-motion.com/alex-prompter-1ea044), noté 2), 62 % ([Sherwood agentic hedge fund explainer](https://prompt-motion.com/imthatcarlos-e04bfe)), 48 % pour bogdandragomir (plus long gel 2,12 s).
- Le décor n'y change rien : étincelles et confettis seuls pendant 2,7 s chez [Recipe brand 20th anniversary](https://prompt-motion.com/deebeeeff-50fcd0), fonds seuls pendant 2,7 et 5 s chez [What day is it](https://prompt-motion.com/tankazunori0914-0fc886).

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Rythme de diaporama | [Animated business explainer](https://prompt-motion.com/alex-prompter-1ea044), 0:05.73 | tenues de 3,1 à 3,7 s après chaque entrée, pour des textes lus en environ 1 s |
| Construction puis longue tenue | [Sherwood agentic hedge fund explainer](https://prompt-motion.com/imthatcarlos-e04bfe), 0:00 à 0:59 | 13 tenues de 2,5 à 5,4 s ; 2 s d'animation pour 6 s d'étape |
| Seul trou d'un reel dense | [Particle sphere motion reel](https://prompt-motion.com/blue-clarity-ef56d0), 0:07.33 | CLAUDE en particules immobile 0,6 s, au-delà d'un temps à 120 BPM |
| Narration qui attend | [Sotto reading app explainer](https://prompt-motion.com/1stnoel-c20a89), 0:29.90 | 6,8 s où seul le surlignage karaoké avance ; téléphone immobile 35 s |
| Accroche noire | [Bold Pilot SEO promo](https://prompt-motion.com/utopyaszx-1b2f94), 0:00.00 | 27 im de noir (0,45 s), seul le HUD, avant le premier geste |
| Accroche minuscule | [Claude motion designer showreel](https://prompt-motion.com/3xtihor-0f6911), 0:00.00 | balle à 2 % H pendant 1,8 s sur fond vide |
| Plan fixe | [Pixel art LLM history](https://prompt-motion.com/pluginplay-3d4006), 0:00.00 à 0:12.32 | cadre fixe tout l'acte 1 ; seul un boomerang de 3 % du cadre bouge |

![Quatre images en 6,8 s d'une application de lecture : titre et téléphone identiques, seul le surlignage des mots avance](ILLUS:temps-mort-2)

*[Sotto reading app explainer](https://prompt-motion.com/1stnoel-c20a89), 0:29.90 à 0:36.70 : la voix lit, l'image attend ; 84 % de la vidéo en maintiens.*

**Règles**

1. Un temps au plus sans vie : 0,4 à 0,8 s (0,5 s à 120 BPM). Au-delà, l'image vit sur le message ou la caméra : poussée de 2 à 3 % sur la tenue, pulsation sur le temps, compteur qui roule. Un fond qui dérive seul ne compte pas.
2. Tenue = temps de lecture, deux cas. Mot à mot sur le temps : environ 0,2 s par mot, si la liste reste ensuite affichée. Phrase à lire : 0,4 s + caractères / 15, plancher 1,0 s, +20 % en 9:16 (skill motion-premiers-principes). Le chronomètre part à la fin de l'entrée.
3. Un gel voulu est une note de silence, comptée et placée : sur un silence de la piste (fionntobin), ou ½ temps avant un drop. Hors de ces places, même un gel court se remarque : ceux de 0,27 et 0,33 s avant les chutes de [Kinetic type showreel](https://prompt-motion.com/zheke-38deff), noté 5, sont relevés comme micro-temps morts.
4. Accroche : un élément fort (≥ 10 % H) avant 0,5 s, noir initial ≤ 0,2 s, image 0 composée (c'est la vignette). Un délai en tête de timeline est un réflexe de composition générée : à supprimer.
5. Mouvement : une poussée ou un recadrage par scène, aucun plan de plus de 4 s au même cadrage. Aucun déplacement d'objet en linéaire, sauf les tracés et la composante x d'un saut.
6. Ne jamais couper sur une image immobile : le plan sortant accélère jusqu'à la coupe.

**Le guide Otom, corrigé.** Il demande un texte « immobile » au moins 1,5 s (p. 7) et un écran final d'au moins 2,5 s (p. 14). Nos mesures en font du temps mort. On garde sa règle anti-« template » des pauses de lecture et son « une seconde pour quatre mots » (p. 6), proche de notre mot à mot (≈ 0,2 s par mot). Mais la pause reste vivante et la musique fixe sa durée.

**Contrôle avant rendu**

| Quoi | Image ou mesure | Seuil |
| --- | --- | --- |
| Gels | `freezedetect` sur le rendu (commande ci-dessous) ; total et plus long gel | Aucun gel > 1 temps en cours de film, sauf silence musical compté ; gels ≥ 0,4 s ≤ 15 % de la durée (seuil proposé : les défauts relevés commencent vers 16 à 22 %, les notées 5 ont une médiane de 7,5 %) |
| Décor seul | Planche à 4 i/s sur chaque tenue de plus d'un temps | Le message ou la caméra bouge, pas seulement le fond |
| Lecture | Même planche : vignettes où le message est complet | Durée ≥ temps de lecture de la règle 2 |
| Accroche | Images à 0 ; 0,25 ; 0,5 et 1 s | Image 0 non noire ; élément ≥ 10 % H avant 0,5 s |
| Caméra et courbes | Planche ; courbes dans le code | Aucun plan > 4 s au même cadrage ; aucun `ease: "none"` sur un déplacement |

```bash
ffmpeg -hide_banner -i rendu.mp4 -an -vf "scale=480:-2,freezedetect=n=-50dB:d=0.4" -f null - 2>&1 | grep freeze_
ffmpeg -v error -i rendu.mp4 -vf "fps=4,scale=480:-1,tile=8x6" planche-%02d.jpg
```

Dans HyperFrames, les trous se voient avant le rendu, sur la timeline (à plat ; décor marqué `data-decor`) :

```js
// Trous de plus d'un temps sans geste sur le message ou la caméra
const BEAT = 60 / 120;
const spans = tl.getChildren(false, true, false)
  .filter(tw => !tw.targets().every(el => el.closest && el.closest("[data-decor]")))
  .map(tw => [tw.startTime(), tw.endTime()]).sort((a, b) => a[0] - b[0]);
let fin = 0; const trous = [];
for (const [s, e] of spans) { if (s - fin > BEAT) trous.push([+fin.toFixed(2), +(s - fin).toFixed(2)]); fin = Math.max(fin, e); }
if (tl.duration() - fin > BEAT) trous.push([+fin.toFixed(2), +(tl.duration() - fin).toFixed(2)]);
console.table(trous);   // [début, durée] en secondes
```

Dans After Effects, mesurer l'écart entre la dernière image clé d'entrée et la première de sortie de chaque calque de message : au-delà d'un temps, ajouter une Scale (Échelle) de 100 à 103 % en Linear (Linéaire) sur la tenue.

Renvois : *Le maintien : temps de lecture ou temps mort*, *Le décor qui bat la mesure : pulsations et métronome* et *Le système de courbes : expo-out pour entrer, ease-in pour sortir* au chapitre 9 ; *L'accroche de la première seconde* au chapitre 10 ; *La poussée vers le sujet : lente, calibrée ou en punch sur le temps* au chapitre 5 ; *Le compteur qui roule* au chapitre 7 ; *La carte de fin figée, trop longue ou absente* dans ce chapitre.

**À cocher**

- [ ] Aucun gel de plus d'un temps en cours de film, sauf un silence musical compté
- [ ] Gels ≥ 0,4 s ≤ 15 % de la durée (seuil proposé)
- [ ] Chaque message tenu ≥ son temps de lecture, avec un micro-mouvement sur le message
- [ ] Élément fort (≥ 10 % H) avant 0,5 s ; noir initial ≤ 0,2 s ; image 0 composée
- [ ] Une poussée ou un recadrage par scène ; aucun plan > 4 s au même cadrage
