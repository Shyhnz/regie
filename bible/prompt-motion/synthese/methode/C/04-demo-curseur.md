## La démo au curseur (cursor-driven product demo, press and reveal, push-in on the action)

Le produit tient sa promesse en un geste : le curseur va sur l'action, l'appui s'enregistre, le résultat apparaît et on le tient assez pour lire son nom (B). C'est la RÉVÉLATION du squelette de W : le produit entre par une vraie interaction. Le curseur donne une cause visible au plan suivant : 52 vidéos, dont 37 notées 4 ou 5 (voir *Le curseur acteur* au chapitre 7).

![Huit images : le champ rempli, le curseur entre en bas à droite, se pose sur « generate ads » et clique ; la caméra pousse vers le bouton avec un flou, puis un cercle né du bouton ouvre le mur de clips](ILLUS:C04-demo-curseur)

*[UGC ad generator promo](https://prompt-motion.com/twoclipping-6dd14e), 0:02.87 à 0:04.17 : curseur posé f194, clic vers f205 ; poussée ×2,3 posée f240, 2 im avant le temps ; cercle né du bouton en 10 im.*

**Quand l'utiliser** : la démonstration d'une promo SaaS ou d'un film d'interface, et l'appel à l'action final (un bouton cliqué). Place : RÉVÉLATION, après le problème (W). À éviter en typo cinétique pure, quand l'écran réel manque (on demande, on ne dessine pas un faux, W), ou si le résultat ne peut pas être lu à 3 % de la hauteur.

**L'événement** (60 fps, 128 BPM : 1 temps = 28,125 im ; images locales, chaque temps arrondi depuis f0)

L'exemple de B est à 30 fps : appui f195, fichier f210, nom lisible f234, soit 0,5 s puis 0,8 s. Transposé sur la grille : appui 2 im avant le temps 3, fichier sur le temps 4 (0,52 s plus tard), nom lisible sur le temps 5. Le trajet (1 s) et l'attente (0,5 s) de B suivent les mesures de la Bible.

| Image (locale) | Temps | Ce qu'on voit | Ce qui bouge (héros / secondaires) | Courbe | Son |
| --- | --- | --- | --- | --- | --- |
| f0 | temps 0 (0 s) | état d'entrée : rapport posé à ×1, bouton lisible | rien : tenue d'un temps | — | — |
| f28-f54 | temps 1 → 2 im avant le temps 2 | la caméra pousse ×2 vers le bouton | caméra | power2.inOut, 26 im | — |
| f50-f74 | 0,83 → 1,23 s | le curseur entre en bas à droite et se pose dans le bouton ; survol f68 | curseur | power2.out en x, power3.out en y | — |
| f82 | temps 3 − 2 im (1,37 s) | l'appui : bouton 1 → 0,92 → 1, libellé → chargement | bouton ; curseur −15 % | none 1 im, puis power2.out 6 im | clic f83 |
| f100-f136 | 1,67 → 2,27 s | le curseur se range, loin du résultat | curseur (secondaire) | power2.inOut, 36 im | — |
| f113 | temps 4 (1,88 s) | le fichier apparaît à côté du bouton | fichier | power3.out, 18 im | attaque de révélation f114 |
| f119-f133 | temps 4 + 6 im | son nom monte | étiquette | power3.out, 14 im | — |
| f141 → f225 | temps 5 → temps 8 (3,75 s) | état de sortie : fichier et nom lisibles, curseur au repos | dérive ×2 → ×2,04 dès f54 | linéaire | — |

**Règles**

1. Qui possède l'écran (B) : le bouton jusqu'à sa réponse, puis le résultat. Un héros à la fois. Le curseur ne croise ni un texte ni la place du résultat.
2. Poussée calibrée de ×1,35 à ×2,3 en 0,3 à 0,9 s, posée 0 à 2 im avant le temps (voir *La poussée vers le sujet* au chapitre 5). Le cadre final contient le bouton et la place du résultat, avec 6 % de marge. Le « 2 à 5× » de *Étape 7* (chapitre 12) va jusqu'à ×5 pour plonger dans l'écran : ×5,3 en 21 im (étude 60 fps de sahildesigner23).
3. Curseur : 2,3 à 3 % de la hauteur, trajet courbe de 0,2 à 0,7 s en ease-out, arrêt de 0,13 à 0,27 s avant l'appui (*Le curseur acteur*, chapitre 7).
4. Appui : bouton à 0,92 (B ; −8 % en 1 im dans l'étude 60 fps de steventey), curseur −15 % pendant 2 à 4 im. L'état change à l'image qui suit. Appui 1 à 4 im avant le temps.
5. Résultat sur le temps qui suit l'appui, son nom 0,1 s après (B). Tenue : 0,4 s + caractères / 15, 1 s au moins, dès que le nom est lisible (*Le temps mort*, chapitre 11). Dérive de 2 % (F).
6. Son sur la même ligne (B, F) : clic 1 im après l'appui, attaque de révélation 1 im après le résultat.

**Variantes**

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Poussée après le clic, cercle né du bouton | [UGC ad generator promo](https://prompt-motion.com/twoclipping-6dd14e), 0:03.42 | clic vers f205 ; ×2,3 en ease-in-out, posée 2 im avant le temps ; disque plein cadre en 10 im |
| Le clic lance le drop | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:01.78 | étude 60 fps : approche de 12 im, pastille −8 % en 1 im, drop 4 im après |
| Zoom 8 im après le clic | [Design portfolio video reel](https://prompt-motion.com/kikelopezdesign-7cc9e8), 0:03.37 | curseur nommé, ease-out de 22 im, arrêt de 8 im (30 fps) |
| Poussée ancrée sur un détail | [Tally product demo](https://prompt-motion.com/visheshbaghell-3aba37), 0:21.57 | ×1,35 en 28 im, ancre en haut à droite |

**Ligne de SHOTLIST**

```text
Plan 3 · Démo au curseur · f450-f675 (mesures 5-6, 128 BPM, 60 fps, images globales)
Entrée : rapport posé à ×1, bouton « [libellé réel] » lisible, curseur hors cadre.
Sortie : caméra ×2,04 ; fichier « [nom réel] » et son nom lisibles ; curseur au repos hors du résultat.
Raison : voir la promesse tenue en un geste.
Héros : caméra f478-f504 → curseur f500-f524 → bouton f532 → fichier f563.
Repères : poussée f478-f504 · appui f532 · fichier f563 · nom lisible f591 · fin f675.
Son : clic f533 · attaque de révélation f564.
Couture : le fichier devient la carte du plan Preuve, même boîte, même place.
```

**HyperFrames (GSAP)**

```js
// Démo au curseur : poussée ×2, appui, fichier sur le temps, tenue vivante
const FPS = 60, BPM = 128, BEAT = 60 / BPM;
const at = (bar, beat = 0) => ((bar - 1) * 4 + beat) * BEAT;
const F = n => n / FPS;
const P0 = at(5);                               // le plan commence au 1er temps de la mesure 5
const T = b => P0 + b * BEAT;                   // temps b du plan
const PRESS = T(3) - F(2), LAND = PRESS - F(8), GO = LAND - F(24);
// ancres de timeline.js (px, cadre 1920 × 1080) ; #cursor est dans #cam
const BTN = { x: 1210, y: 640 }, REST = { x: 1330, y: 720 };
tl.set("#cam", { scale: 1, transformOrigin: `${BTN.x}px ${BTN.y}px` }, P0)
  .set("#cursor", { x: 1780, y: 1040, autoAlpha: 0, transformOrigin: "0% 0%" }, P0)
  .set("#file", { autoAlpha: 0, scale: 0.6 }, P0)
  .set("#file-label", { autoAlpha: 0, y: 12 }, P0)
  // 1. poussée calibrée, posée 2 im avant le temps 2
  .to("#cam", { scale: 2, duration: F(26), ease: "power2.inOut" }, T(1))
  // 2. trajet courbe : deux courbes différentes en x et en y ; survol 6 im avant l'arrivée
  .set("#cursor", { autoAlpha: 1 }, GO)
  .to("#cursor", { x: BTN.x, duration: F(24), ease: "power2.out" }, GO)
  .to("#cursor", { y: BTN.y, duration: F(24), ease: "power3.out" }, GO)
  .to("#btn", { backgroundColor: "#2A2F38", duration: F(6), ease: "power1.out" }, LAND - F(6))
  // 3. l'appui : bouton 1 → 0,92 → 1, curseur −15 %, nouvel état à l'image suivante
  .to("#btn", { scale: 0.92, duration: F(1), ease: "none" }, PRESS)
  .to("#btn", { scale: 1, duration: F(6), ease: "power2.out" }, PRESS + F(1))
  .to("#cursor", { scale: 0.85, duration: F(2), ease: "power2.out", yoyo: true, repeat: 1 }, PRESS)
  .set("#btn .idle", { autoAlpha: 0 }, PRESS + F(1))
  .set("#btn .busy", { autoAlpha: 1 }, PRESS + F(1))
  // 4. le curseur se range hors du résultat
  .to("#cursor", { x: REST.x, y: REST.y, duration: F(36), ease: "power2.inOut" }, PRESS + F(18))
  // 5. le fichier sur le temps 4, son nom 6 im après
  .to("#file", { autoAlpha: 1, scale: 1, duration: F(18), ease: "power3.out" }, T(4))
  .to("#file-label", { autoAlpha: 1, y: 0, duration: F(14), ease: "power3.out" }, T(4) + F(6))
  // 6. tenue vivante jusqu'à la fin du plan (temps 8)
  .to("#cam", { scale: 2.04, duration: T(8) - T(1) - F(26), ease: "none" }, T(1) + F(26));
```

**After Effects**

- Interface en Layer › Pre-compose (Calque › Précomposer) ; un Null Object (Objet nul) posé sur le bouton en est le parent, avec le curseur (Parent & Link (Parent et lien)).
- Poussée : Scale (Échelle) du null 100 → 200 % en 26 im, Easy Ease (Lissage de vitesse), posée 2 im avant le Composition Marker (repère de composition) du temps ; puis 200 → 204 % linéaire jusqu'à la fin.
- Curseur : clic droit sur Position › Separate Dimensions (Séparer les dimensions) ; clés X et Y à 24 im d'écart, influences différentes dans le Graph Editor (éditeur de graphique) pour courber le trajet.
- Appui : Scale du bouton 100 → 92 % en 1 im, retour en 6 im ; curseur 100 → 85 → 100 % en 4 im.
- Fichier sur le repère du temps 4 : Scale 60 → 100 % et Opacity (Opacité) 0 → 100 % en 18 im ; nom 6 im après ; sons 1 im après chaque repère.

**Contrôle**

Images globales depuis le début du plan G. G+0 : l'entrée se lit. G+54 : bouton et place du résultat dans le cadre, avec marge. Bande de 8 images G+79 à G+86 : bouton enfoncé, nouvel état à G+83, curseur sans saut. G+141 : nom lisible à 360 px de large. G+225 : rien ne chevauche l'étiquette. Aperçu G+40 à G+160 à vitesse normale, nom lu à voix haute (B). Son décodé : clic G+83, révélation G+114.
