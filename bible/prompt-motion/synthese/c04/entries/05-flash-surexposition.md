## Le flash et la surexposition (flash frame, overexposure white-out, impact flash, shockwave ring)

Une à quelques images blanches ou crème masquent la coupe, puis décroissent sur le plan B. L'œil ébloui ne lit pas le raccord : on passe de la 2D à la 3D, ou d'un décor à un autre, en une image. Dans la meilleure occurrence, une seule image blanche (luminance 252 sur 255) tombe à 0,5 im du drop, et la 3D commence à l'image suivante. Vue dans 52 vidéos, dont 48 notées 4 ou 5.

![Trois formes plates sur papier crème, une image entièrement blanche, puis les mêmes formes devenues sphère, cube et prisme sur un sol noir réfléchissant, pendant que la caméra tourne](ILLUS:flash-surexposition-1)

*[Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e), 0:05.55 à 0:05.97 : une image blanche sur le drop, et les formes du plan A deviennent des volumes aux mêmes places.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Flash d'une image, coupe de dimension | [Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e), 0:05.63 | Étude 60 fps : 1 im blanche sur le temps 12 (+0,5 im) ; formes identiques en 3D dès l'image suivante |
| Flash crème qui retombe sur le logo | [Claude motion design reel](https://prompt-motion.com/tequilafunks-97f6c9), 0:11.87 | Étude 60 fps : crème #EEEEE4 2 im, retombée power2.out en 5 im (30 fps) ; lettres pendant la retombée |
| Noir puis flash | [org2html product showreel](https://prompt-motion.com/kyonax-on-tech-aabc1d), 0:03.70 | 3 im de noir pur, flash gris clair vignetté, retombée en 12 im (énergie 177 → 16), 1 im avant le drop |
| Surexposition progressive vers le logo | [Crux motion design showreel](https://prompt-motion.com/marouanegazouzi-6071d5), 0:04.47 | Halo 4 im, palier 5 im, montée au blanc 4 im ease-in, blanc 2 im, boule qui devient l'icône : un temps exact |
| Flash d'impact et onde annulaire | [Claude motion design showreel](https://prompt-motion.com/ayushunleashed-ece3e3), 0:03.67 | Flash crème d'1 im, 1 im avant la barre ; anneau rouge de 5 à 55 % H de rayon en 5 im, ease-out |
| Flash motivé par l'action | [Indian civilisation history film](https://prompt-motion.com/buildfastwithai-53234e), 1:12.37 | Image blanche au contact de l'atterrisseur, 2 im avant le temps ; retour au bleu nuit en 6 im |
| Stroboscope d'annonce | [Synced lyrics motion video](https://prompt-motion.com/samaote-5e2fc2), 0:06.12 | Étude 60 fps : 5 flashs d'1 im toutes les 11,4 im (double-croche), luminance +15 → +53, avant le drop |

![Un petit orbe sur fond nuit grossit en halo traversé d'un trait horizontal, l'image monte jusqu'au blanc, puis la lumière se contracte en boule qui file à gauche et devient l'icône de l'application](ILLUS:flash-surexposition-2)

*[Crux motion design showreel](https://prompt-motion.com/marouanegazouzi-6071d5), 0:04.47 à 0:05.17 : montée au blanc puis contraction ; la lumière elle-même devient le logo.*

**Règles de construction**

1. Pic court, retombée exponentielle. Le pic dure 1 im (2 à 3 im à 30 fps). La retombée prend 5 à 12 im : environ ×0,8 de luminance par image (madhav-xo, kyonax-on-tech, monokern). Courbe mesurée : power2.out (étude 60 fps de tequilafunks, rms 2,0 %).
2. Le pic tombe sur le temps ou 1 à 2 im avant, et seulement sur une attaque forte. Mesures : +0,5 im (lukasersil), −0,5 à −1 im (itsuki-dev, kyonax-on-tech, rneayan), −2 im (sahildesigner23). Le flash de samaote parti 7 im après la croche est le geste le moins calé de son film.
3. Un flash par changement d'acte, pas par coupe. Chez spearwtf, 3 flashs pour 3 actes (produit, logo, appel à l'action). Le flash à chaque coupe (14 fois en 30 s chez deifosv) et le voile gris répété 5 fois (influencer-seo) sont classés clichés.
4. Un vrai blanc ou le crème de la palette : luminance au pic d'au moins 190 sur 255 (252 chez lukasersil, 194 chez gizakdag, 205 chez monokern). Un voile gris à 35 % ou +25 % de luminance rend l'image terne (influencer-seo, agonaliu).
5. Sous le flash, changer quelque chose de radical : 2D en 3D, sombre en clair (sudo-kiran), recadrage ou recentrage (jazzen-chen, majin-appsheet). Le flash sert de cache ; le plan B est déjà en mouvement quand il retombe.
6. Version progressive (white-out) : montée en accélération de 6 à 13 im, blanc tenu 2 à 5 im, retour de 8 à 20 im (deifosv, monokern, apoorvjain25). Au-delà de 8 im de blanc fixe, les fiches jugent le passage long (gabrielbuzziv, et ryzoft avec 30 im).

**Verdict** : à reprendre, avec parcimonie. C'est ta « surexposition » et ton « flash de couleur après la plongée ». Garde-la pour le drop et les changements d'acte : répétée, elle devient l'accent unique que tu rejettes.

**Quand l'utiliser** : en typo cinétique 1600, en showreel et en promo SaaS, sur le drop ou au changement d'acte (problème → solution, sombre → clair). Elle sert la transition forte, la révélation du logo (chute, signature) et le passage à une autre dimension. On la place à l'étape des enchaînements, après avoir repéré le drop et les attaques fortes sur la grille musicale. À éviter dans un explainer posé en voix off, entre deux plans d'une même scène, ou plus de 3 à 5 fois dans 30 s.

**HyperFrames (GSAP)**

```js
// Flash d'une image sur le drop : coupe A → B cachée sous le blanc, retombée power2.out
const FPS = 60;
const BEAT = 60 / 128;                 // 128 BPM : 1 temps = 28,125 im
const at = b => b * BEAT;
const F = n => n / FPS;                // images → secondes
const drop = at(12);                   // temps 12 = le drop

// #flash : calque plein cadre crème (#F4F0E8) au-dessus de tout
tl.set("#flash", { opacity: 0 }, 0)
  .set("#scene-b", { autoAlpha: 0 }, 0)
  // 1. Option white-out : A se surexpose 6 im en accélération jusqu'au temps
  .to("#scene-a", { filter: "brightness(1.8) saturate(0.6)", duration: F(6), ease: "power2.in" }, drop - F(6))
  // 2. Pic : 1 image pleine ; la coupe a lieu sous le blanc, sur la même image
  .set("#flash", { opacity: 1 }, drop)
  .set("#scene-a", { autoAlpha: 0 }, drop)
  .set("#scene-b", { autoAlpha: 1 }, drop)
  // 3. Retombée en 12 im (≈ ×0,8 de luminance par image au début)
  .to("#flash", { opacity: 0, duration: F(12), ease: "power2.out" }, drop + F(1))
  // 4. Le plan B bouge déjà : le titre se pose de ×1,3 à ×1 pendant la retombée
  .set("#scene-b .title", { scale: 1.3 }, drop)
  .to("#scene-b .title", { scale: 1, duration: F(10), ease: "expo.out" }, drop);

// Variante impact : onde annulaire depuis le centre, sur la même image que le flash
tl.set("#ring", { scale: 0.1, autoAlpha: 1 }, drop)
  .to("#ring", { scale: 1.1, autoAlpha: 0, duration: F(12), ease: "expo.out" }, drop);
```

**After Effects**

- Placer un Composition Marker (marqueur de composition) sur le drop (Layer › Markers (Calque › Marqueurs), ou touche * du pavé numérique pendant l'écoute). Couper A et B sur l'image du marqueur, ou 1 im avant : Edit › Split Layer (Édition › Fractionner le calque).
- Layer › New › Solid (Calque › Nouveau › Solide) plein cadre crème « flash » au-dessus de tout. Opacity (Opacité) 100 % sur l'image du marqueur, puis 100 → 0 % de l'image suivante à +12 im.
- Dans le Speed Graph (éditeur de graphe de vitesse) : clé de départ à influence 0 % et vitesse forte, clé d'arrivée à influence 70 % environ. On obtient la retombée rapide puis lente (≈ power2.out).
- White-out : Effect › Color Correction › Exposure (Effet › Correction colorimétrique › Exposition) sur le plan A, de 0 à +3 en 6 im avant le marqueur, influence 70 % au départ (accélération).
- Onde : Shape Layer (calque de forme) Ellipse, Stroke (contour) d'1,5 % de la hauteur, Scale (Échelle) 10 → 110 % et Opacity 100 → 0 % en 12 im, mêmes influences. Activer le Motion Blur (flou de mouvement).
