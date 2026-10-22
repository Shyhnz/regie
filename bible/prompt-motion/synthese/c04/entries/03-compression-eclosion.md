## La compression : en point ou en ligne, puis l'éclosion (implode to a point, squash to line, CRT power-off/on, implode-then-explode)

Tout le plan A se tasse en un point ou s'écrase en une ligne, tient quelques images, puis le plan B naît de ce point ou de cette ligne : explosion, iris, fenêtre, logo. La contraction vide l'écran et concentre l'œil sur un seul point juste avant le temps fort, ce qui donne tout son impact à l'éclosion. Dans la famille, 44 contractions sur 94 sont décrites en accélération (ease-in), 13 seulement en décélération. Vue dans 66 vidéos, dont 61 notées 4 ou 5.

![Huit cartes d'abonnement aspirées vers le centre, cadre vide, puis un anneau bleu et la carte « Link in bio » qui jaillissent du même point](ILLUS:compression-eclosion-1)

*[Bento.surf product video](https://prompt-motion.com/bizibeast-10f264), 0:03.57 à 0:04.20 : les huit outils convergent en accélérant, le cadre reste vide, puis l'anneau et la carte du produit jaillissent du même point.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Implosion puis explosion | [Bento.surf product video](https://prompt-motion.com/bizibeast-10f264), 0:03.58 | 8 cartes, aire 8 % → 0,2 % en 18 im (ease-in), 6 im de cadre vide, explosion sur l'entrée des basses |
| Point puis double iris | [Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be), 0:01.67 | astérisque 45,6 → 1 % H en 10 im (sine.in), point figé 3 im, iris crème à 34 % H dès la 1re image (étude 60 fps) |
| Tourbillon aspiré | [Flowdrive motion showreel](https://prompt-motion.com/manuelogomigo-f33ca9), 0:12.62 | rotation et échelle vers un point en 34 im (expo.in), point rouge immobile 11 im dans le creux musical (étude 60 fps) |
| Compression, flash, onde de choc | [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 0:13.38 | disque de 74 % H claqué en point de 13 % H en 1 im, lignes convergentes 7 im, flash gris au pic sur le temps (+1 im) |
| Écrasement en ligne qui devient le décor | [Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:03.75 | bloc cobalt 100 → 0,2 % H en 6 im (expo.out, 68 % dès la 1re image) : il devient l'axe du graphique |
| Ligne qui s'ouvre en fenêtre | [Second brain service promo](https://prompt-motion.com/theviableedge-9065be), 0:05.28 | bureau 75,6 → 1 % H en 21 im (power1.in), trait tenu 12 im, fenêtre 0 → 72 % H en 30 im (sine.out) |
| Allumage cathodique | [Sahi trading terminal reveal](https://prompt-motion.com/dale-vaz-cc612a), 0:03.37 | point de 1 % H → ligne de 90 % L en 10 im à 30 fps (ease-out), tenue 8 im, ouverture verticale 16 im |
| Point qui dessine le logo | [Crux motion design showreel](https://prompt-motion.com/marouanegazouzi-6071d5), 0:12.87 | aplat écrasé en ligne de 2 px en 4 im à 30 fps, tenue 2 im, rétraction en point en 5 im, le point trace le glyphe |

![Le bureau de documents s'écrase dans une ligne noire, le trait reste seul, puis s'ouvre en fenêtre de code](ILLUS:compression-eclosion-2)

*[Second brain service promo](https://prompt-motion.com/theviableedge-9065be), 0:05.20 à 0:06.27 : tout le bureau s'écrase dans la ligne, le trait tient seul 12 images, puis s'ouvre en fenêtre de code.*

**Règles de construction**

1. La contraction accélère : sine.in, power1.in ou power2.in mesurés, en 10 à 22 im à 60 fps (0,17 à 0,37 s). Chez Dub, 80 % du trajet tient dans le dernier tiers (étude 60 fps).
2. Le point final mesure environ 1 % de la hauteur ; la ligne fait 1 à 2 px sur 60 à 100 % de la largeur. Plus petit, il disparaît ; plus gros, il ne lit plus comme un point.
3. Le point ou la ligne tient 2 à 12 im, le temps d'un silence ou d'un riser : 3 im chez Easing and morphing, 9 im chez Trezio, 11 im chez Flowdrive.
4. La contraction finit 1 à 4 im avant le temps ; l'éclosion part sur le temps (0 à +1 im) et décélère, à 30-40 % de sa taille finale dès la 1re image.
5. Le point ou la ligne devient un élément du plan B : axe d'un graphique, haut d'une fenêtre, socle d'un logo, soulignement. Chez Personal research, la barre finit à la largeur exacte du nom à venir.
6. Une à deux fois par vidéo, aux changements de chapitre ou au drop. En serre-livres, l'allumage d'ouverture répond à l'extinction finale (org2html, 0:00.25 et 0:14.78).

**Verdict** : à reprendre. C'est ta « compression puis explosion » et ton « texte qui rétrécit en point puis révélation circulaire » ; réserve-la aux temps forts, sinon elle devient l'accent répété partout que tu rejettes.

**Quand l'utiliser** : en typo cinétique 1600 et en promo SaaS, pour passer d'un chapitre au suivant sur le drop ou le 1er temps d'une mesure. La version « plusieurs outils aspirés en un seul produit » sert la présentation ; l'extinction cathodique sert la chute. On la place au découpage (étape 5), après un break, puis on la règle aux enchaînements (étape 8). À éviter sans temps fort musical, ou plus de deux fois par vidéo.

**HyperFrames (GSAP)**

```js
// Compression du plan A en point, tenue de 3 im, puis éclosion du plan B en iris sur le temps
const FPS = 60;
const BEAT = 60 / 128;                        // 128 BPM
const at = b => b * BEAT;
const fr = n => n / FPS;                      // n images → secondes
const hit = at(8);                            // temps fort : 1er temps de la mesure 3

// 1. Contraction : tout le plan A se tasse vers le centre en accélérant (10 im)
tl.to("#sceneA", { scale: 0.01, rotation: 40, transformOrigin: "50% 50%",
                   duration: fr(10), ease: "sine.in" }, hit - fr(13))
  .set("#sceneA", { autoAlpha: 0 }, hit - fr(3))
  // 2. Le point (≈ 1 % de la hauteur) reste seul 3 im
  .set("#dot", { autoAlpha: 1 }, hit - fr(3))
  // 3. Éclosion sur le temps : le plan B s'ouvre depuis le point (71 % = demi-diagonale)
  .set("#sceneB", { autoAlpha: 1, clipPath: "circle(0% at 50% 50%)" }, hit)
  .to("#sceneB", { clipPath: "circle(72% at 50% 50%)", duration: fr(14), ease: "expo.out" }, hit)
  .set("#dot", { autoAlpha: 0 }, hit + fr(1))
  // 4. Onde de choc : un anneau sort du cadre en 8 im
  .set("#ring", { scale: 0.2, autoAlpha: 1 }, hit)
  .to("#ring", { scale: 3, autoAlpha: 0, duration: fr(8), ease: "power2.out" }, hit);

// Variante en ligne : remplacer l'étape 1 par scaleY 1 → 0.01 (power1.in, 21 im),
// tenir le trait 12 im, puis ouvrir #window en scaleY 0 → 1 (sine.out, 30 im).
```

**After Effects**

- Pré-composer le plan A : Layer › Pre-compose (Calque › Pré-composer). Scale (Échelle) 100 → 1 % et Rotation 0 → 40° en 10 im ; dans le Speed Graph (éditeur de graphe de vitesse), influence de sortie de 70 % sur la 1re clé, arrivée raide sur la 2e : ça accélère.
- Un Shape Layer (calque de forme) Ellipse « point » de 11 px (1 % de 1080) au centre, visible seul pendant 3 im, sur un Composition Marker (marqueur de composition) posé sur le temps fort.
- Plan B pré-composé, sous un Shape Layer Ellipse en Alpha Matte (Cache alpha) : Layer › Track Matte › Alpha Matte (Calque › Cache › Cache alpha). Size (Taille) de l'ellipse 11 → 2 300 px en 14 im ; influence d'entrée de 90 % sur la dernière clé, 1re image déjà au tiers.
- Onde : une copie de l'ellipse avec Stroke (Contour) seul, Scale 20 → 300 % et Opacity (Opacité) 100 → 0 % en 8 im, Motion Blur (Flou de mouvement) activé.
- Version tube cathodique : Scale verticale 100 → 1 % en 10 im, Effect › Stylize › Glow (Effet › Styliser › Lueur) sur le trait, tenue 4 à 12 im, puis Scale horizontale 100 → 0 % en 6 im.
