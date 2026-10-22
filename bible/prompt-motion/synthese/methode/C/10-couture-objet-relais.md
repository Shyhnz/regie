## La couture par objet relais (object morph, match cut, shared element, implode-then-explode)

Un objet du plan A survit à la coupe et devient le héros du plan B : le point devient la donnée, la ligne la fenêtre, le point l'iris. L'œil suit l'objet et ne perd pas le fil. Dans les vidéos notées 5/5, 64 % des transitions naissent d'un objet du plan, 2 % sont des fondus (chapitre 4).

![Le point orange quitte « CODE. », traverse l'éclair d'impact et se pose en virgule de « 5.5 »](ILLUS:C10-couture-objet-relais)

*[Kinetic type showreel](https://prompt-motion.com/zheke-38deff), 0:13.27 à 0:13.87 : le point de « CODE. » s'envole sur le demi-temps 28,5, traverse la coupe et l'éclair du temps 29, puis devient la virgule de « 5.5 ».*

**Quand l'utiliser** : la couture entre deux chapitres (accroche → problème → révélation), en typo cinétique 1600 comme en promo SaaS. Compression et iris sont ses versions fortes, pour un drop. À éviter pendant la lecture d'un message, ou si aucun objet n'a de sens des deux côtés.

**L'événement** (états et minutage, 60 fps, 128 BPM : 1 temps = 28,125 im)

| Image (locale) | Temps | Ce qu'on voit | Ce qui bouge (héros / secondaires) | Courbe | Son |
| --- | --- | --- | --- | --- | --- |
| f0 | 0 | état d'entrée : phrase A lisible, point final orange | rien | — | — |
| f0-f14 | 0 → ½ | A se vide, le point reste | secondaires : mots de A vers le haut, 2 im d'écart | power2.in, 14 im | riser qui monte |
| f25-f28 | → 1 | le point seul prend son élan | héros : écrasé, l/h → 1,32 | power1.in | — |
| f28-f41 | 1 → ≈ 1½ | décollage étiré 1,6:1, sommet en f41 | héros : x linéaire, y monte de 40 % H | power1.out, 13 im | — |
| f41-f56 | → 2 | chute vers sa place dans B | héros seul | power1.in, 15 im | — |
| f56-f60 | 2 | coupe franche vers B ; le point, écrasé 1,9:1, est le 1er point du graphique, rond en f60 | fond et typo changent, pas le point | coupe, puis power2.out | impact f57 |
| f62-f78 | | axes et étiquette de B entrent | secondaires, 4 im d'écart | power3.out, 12 im | — |
| f84-f122 | 3 | état de sortie : la courbe part du point et se trace | héros de B : la courbe | power2.out, 38 im | tic f85 |

Saut : étude 60 fps de zheke ; courbe : celle de steventey.

**Règles**

1. **Un seul héros traverse.** Le reste de A sort avant ou pendant son vol. L'état de sortie de A est l'état d'entrée de B : même place, taille et couleur (B). En coupe franche, position et taille tiennent à 2 % du cadre près (*L'objet relais*, chapitre 4).
2. **L'arrivée tombe sur le temps.** Impact sur le temps pour un saut. Mi-course sur le temps pour un geste ease-in-out (départ = temps − durée / 2). Pic de vitesse sur le temps pour un morph en ressort (étude 60 fps de twoclipping ; *Le morphing de forme*, chapitre 6).
3. **Compression puis éclosion.** La contraction accélère (10 à 22 im) et finit 1 à 4 im avant le temps. Le point (≈ 1 % H) tient 2 à 12 im. L'éclosion part sur le temps (*La compression*, chapitre 4).
4. **Iris né d'un point.** 5 à 14 im, depuis un point qui a un sens. Il accélère s'il finit sur le temps, décélère s'il part du drop (*L'iris né d'un point*, chapitre 4).
5. **Échelle et regard.** Une échelle ×5 à ×20 s'interpole en logarithme, puis l'objet reste seul 2 à 8 im (*L'objet relais*). Le point focal de B naît à moins d'un tiers d'écran de celui de A (*Étape 8*, chapitre 12).
6. **Rareté.** Le vol dure un temps, sous le plafond de 0,5 s (*Étape 8*). Chaque type ≤ 2 fois par film ; seule la signature revient 3 fois, chaque fois différente.

**Variantes**

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Point relais à travers la coupe franche | [Kinetic type showreel](https://prompt-motion.com/zheke-38deff), 0:13.37 | envol f802 (demi-temps 28,5), impact f816 (temps 29), ∅ 7,4 → 15,6 % L (étude 60 fps) |
| Compression en point, puis iris | [Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be), 0:01.67 | 45,6 → 1 % H en 10 im (sine.in), point figé 3 im, iris à 34 % H dès la 1re image |
| Écrasement en ligne, puis fenêtre | [Second brain service promo](https://prompt-motion.com/theviableedge-9065be), 0:05.28 | bureau 75,6 → 1 % H en 21 im (power1.in), trait tenu 12 im, fenêtre 0 → 72 % H en 30 im (sine.out) |
| Iris né du point final | [Claude motion designer showreel](https://prompt-motion.com/stephanlivera-df17a2), 0:12.93 | point de 5,7 % H → plein cadre en 11 im (power3.in), plein cadre sur le temps à 0 im (étude 60 fps) |
| Morph : barre → anneau | [Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4), 0:09.37 | enroulement en 18 im (power1.inOut), pic de vitesse pile sur le temps (étude 60 fps) |

**Ligne de SHOTLIST**

```text
Couture 2 → 3 · « le point devient la donnée » · locale f0 = 1er temps de la mesure 3 = globale f225
Entrée : phrase A lisible, point final orange (ancre dotA de timeline.js).
Sortie : graphique B, son 1er point = le même point (ancre dotB), même taille, même couleur ; courbe tracée.
Raison : le chiffre du problème devient la mesure du produit.
Héros : le point, un saut d'un temps. Secondaires : mots de A (sortie), axes de B (entrée).
Repères locaux : sortie A f0-f14 · élan f25 · décollage f28 · sommet f41 · impact et coupe f56 · axes f62 · courbe f84-f122.
Son : riser f14-f56 · impact f57 · tic f85.
Couture suivante : la pointe de la courbe devient le curseur.
```

**HyperFrames (GSAP)**

```js
// Le point final de A saute un temps et devient le 1er point du graphique B
const FPS = 60, BPM = 128, BEAT = 60 / BPM;
const at = (bar, beat = 0) => ((bar - 1) * 4 + beat) * BEAT;
const F = n => n / FPS;                                   // images → secondes
const snap = t => Math.round(t * FPS) / FPS;              // chaque temps arrondi depuis l'image 0
const T0 = snap(at(3)), T1 = snap(at(3, 1)), T2 = snap(at(3, 2)), T3 = snap(at(3, 3));
const H = 1080;
// ancres en pixels de timeline.js : centre du point dans A et dans B
const A = window.TIMELINE.anchors.dotA, B = window.TIMELINE.anchors.dotB;
tl.set("#relay", { x: A.x, y: A.y, xPercent: -50, yPercent: -50, autoAlpha: 1 }, T0)
  .set("#sceneA .dot", { autoAlpha: 0 }, T0)              // un seul objet à l'écran
  .set("#sceneB .axis, #sceneB .label", { autoAlpha: 0, y: 24 }, T0)
  .set("#sceneB .curve", { strokeDashoffset: 1 }, T0)      // <path pathLength="1" stroke-dasharray="1">
  // 1. A se vide : mots vers le haut sous masque, 2 im d'écart
  .to("#sceneA .word", { yPercent: -110, duration: F(14), ease: "power2.in", stagger: F(2) }, T0)
  // 2. élan écrasé (l/h 1,32) sur les 3 images avant le décollage
  .to("#relay", { scaleX: 1.15, scaleY: 0.87, duration: F(3), ease: "power1.in" }, T1 - F(3))
  // 3. saut d'un temps : x linéaire, y en parabole, montée de 40 % H
  .set("#relay", { scaleX: 0.79, scaleY: 1.26 }, T1)      // étiré 1,6:1 au décollage
  .to("#relay", { scaleX: 1, scaleY: 1, duration: F(8), ease: "sine.out" }, T1 + F(1))
  .to("#relay", { x: B.x, duration: T2 - T1, ease: "none" }, T1)
  .to("#relay", { y: Math.min(A.y, B.y) - 0.4 * H, duration: F(13), ease: "power1.out" }, T1)
  .to("#relay", { y: B.y, duration: T2 - T1 - F(13), ease: "power1.in" }, T1 + F(13))
  // 4. impact sur le temps 2 : coupe franche vers B, le point reste
  .set("#sceneA", { autoAlpha: 0 }, T2)
  .set("#sceneB", { autoAlpha: 1 }, T2)
  .set("#relay", { scaleX: 1.38, scaleY: 0.72 }, T2)      // écrasé 1,9:1 sur 1 image
  .to("#relay", { scaleX: 1, scaleY: 1, duration: F(4), ease: "power2.out" }, T2 + F(1))
  // 5. secondaires de B : 6 im après l'impact, 4 im d'écart
  .to("#sceneB .axis, #sceneB .label", { autoAlpha: 1, y: 0, duration: F(12),
        ease: "power3.out", stagger: F(4) }, T2 + F(6))
  // 6. héros de B : la courbe part du point sur le temps 3
  .to("#sceneB .curve", { strokeDashoffset: 0, duration: F(38), ease: "power2.out" }, T3);
```

**After Effects**

- Le point relais : un Shape Layer (calque de forme) au-dessus des deux plans, chacun en Layer › Pre-compose (Calque › Précomposer).
- Position › Separate Dimensions (Séparer les dimensions). X : 2 clés linéaires f28 → f56. Y : clés f28, f41, f56, influence 33 % au sommet, arrivée linéaire (≈ power1.in).
- Scale (Échelle) : 79 / 126 % au décollage, 138 / 72 % à l'impact, en Toggle Hold Keyframe (Image clé maintenue), puis 100 % en 4 im. Motion Blur (Flou de mouvement).
- La coupe : un Composition Marker (marqueur de composition) sur le temps 2 ; Edit › Split Layer (Édition › Scinder le calque) sur les deux pré-compositions à cette image.
- Iris ou compression : Ellipse en Alpha Matte (Cache alpha) sur B (recettes du chapitre 4).

**Contrôle**

Rendre f0, f14, f28, f41, f56, f60, f84, f122 (depuis le début du plan) et la bande f52-f59. f0 contre f56 : même couleur, même taille du point à 2 % du cadre près, jamais deux points à la fois. f56 : l'image écrasée tombe pile sur le temps, l'impact son 1 im après. Pelure d'oignon f28-f56 : images serrées au sommet, rien d'autre ne bouge. f84 : la courbe part du point.
