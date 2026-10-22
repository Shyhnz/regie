## L'iris né d'un point (iris wipe, circular reveal, dot-to-fullscreen, iris-out)

Un disque s'ouvre depuis un point précis du plan A (point final, bouton cliqué, icône, soleil, mot-clé) et révèle le plan B. En sens inverse, un cercle se referme sur le sujet ou avale l'écran. Le point d'origine dit d'où vient le plan suivant, et le plein cadre se cale à l'image près sur un temps. Dans la famille, 53 iris sur 108 sont décrits en accélération, 21 en décélération : deux usages distincts, selon que l'iris finit ou part sur le temps. Vue dans 77 vidéos, dont 72 notées 4 ou 5.

![Le mot LINEAR. sort à gauche pendant que son point rouge grossit jusqu'à couvrir tout le cadre](ILLUS:iris-ne-dun-point-1)

*[Claude motion designer showreel](https://prompt-motion.com/stephanlivera-df17a2), 0:12.90 à 0:13.15 : « LINEAR. » sort à gauche, son point rouge grossit en accélérant et couvre le cadre sur le temps 28.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Point final d'un mot | [Claude motion designer showreel](https://prompt-motion.com/stephanlivera-df17a2), 0:12.93 | point de 5,7 % H → plein cadre en 11 im (power3.in), ×1,5 à ×1,7 par image, plein cadre sur le temps à 0 im (étude 60 fps) |
| Icône qui devient l'iris | [Flowdrive motion showreel](https://prompt-motion.com/manuelogomigo-f33ca9), 0:09.18 | cadenas → disque orange, rayon 4,8 → 42,6 % H puis plein cadre en 11 im (power2.in), glisse vers le centre (étude 60 fps) |
| Le point devient le fond | [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 0:01.60 | 4,4 → 204 % H en 24 im (power3.in) : 20 im presque immobiles, 4 im d'explosion, plein cadre au 1er temps de la mesure |
| Iris explosif sur le drop | [3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155), 0:13.00 | part sur l'attaque la plus forte du morceau, 46 % du cadre couvert à la 2e image, plein en 7 im (sine.out, étude 60 fps) |
| Iris en trois couleurs | [Motion designer showreel](https://prompt-motion.com/vanshwtfff-db0466), 0:03.02 | bleu nuit, rouge, jaune depuis le point d'impact, 2 im d'écart, chacun couvre en 2-3 im, 7 im au total |
| Mot-clé qui ouvre sa scène | [Bold Pilot SEO promo](https://prompt-motion.com/utopyaszx-1b2f94), 0:04.55 | amorce lente 5 im (1,5 → 9 % L), puis 12 % L par image ; masque avec ombre de lentille, 12 im en tout |
| Bascule clair → sombre au clic | [mdfor.dev product intro video](https://prompt-motion.com/ho-ba-f3f0e9), 0:21.60 | onde fine 10 im, puis disque sombre né de l'icône, rayon 3 → 40 % L en 6 im (expo-in), plein en 12 im |
| Iris qui se referme en lettre | [Type, form, space showreel](https://prompt-motion.com/web3wesley-7bb108), 0:04.47 | fond vermillon refermé en 8 im (expo.inOut) jusqu'au O de FORM, posé sur le temps (étude 60 fps) |

![Clic sur la tuile soleil : un disque sombre naît de l'icône et bascule l'interface en thème sombre](ILLUS:iris-ne-dun-point-2)

*[mdfor.dev product intro video](https://prompt-motion.com/ho-ba-f3f0e9), 0:21.75 à 0:22.03 : le disque sombre naît du bouton de thème, avale l'écran et le soleil devient lune.*

**Règles de construction**

1. L'iris part d'un point qui a un sens : point final, bouton cliqué, icône, objet du récit. En grandissant, son centre glisse vers celui du cadre (Flowdrive, Bold Pilot, Motion designer portrait).
2. Iris qui finit sur le temps : il accélère (power2.in à power4.in, circ.in), ×1,4 à ×2 par image en fin de course. Plein cadre 0 à 2 im avant le temps : 0 im chez Flowdrive, −1 im chez Type, form, space.
3. Iris qui part sur le temps (drop) : il décélère (sine.out, power1.out, expo.out). Il couvre 27 à 46 % dès la 1re ou la 2e image, plein en 6 à 14 im.
4. Durée utile : 5 à 14 im à 60 fps (0,08 à 0,23 s), un demi-temps au plus. À 2 ou 3 im on ne le voit plus, il se lit comme une coupe (Motion design principles reel). À 24 im en vitesse constante, il rejoint le volet étoile du showreel volontairement raté.
5. Le plan B est déjà en place et en mouvement dans le disque : c'est un masque, pas un aplat qui s'efface. Sinon le disque prend la couleur du fond suivant, puis le texte tombe dessus.
6. Double ou triple iris : même centre, 2 à 3 im d'écart, la dernière couleur devient le fond. Bord net ou adouci de 2 à 4 %, liseré blanc de 1-2 px possible.

**Verdict** : à reprendre. Garde le cercle, ou la forme du logo (losange chez Keyframe motion design reel) ; l'étoile, le cœur et l'horloge sont des clichés (Deliberately terrible motion showreel). C'est la seconde moitié de ton « texte qui rétrécit en point puis révélation circulaire ».

**Quand l'utiliser** : en promo SaaS, au clic d'un bouton, à l'activation d'un réglage ou d'un badge de succès ; c'est la version plein cadre du cercle de clic que pose le guide (guide Otom, p. 11). En typo cinétique 1600, le point final d'un mot ouvre le chapitre suivant ; ouvert puis refermé sur le même sujet, il fait serre-livres. On le choisit au découpage (étape 5), on règle sa courbe aux enchaînements (étape 8). À éviter depuis le centre sans raison, ou deux fois de suite avec la même couleur.

**HyperFrames (GSAP)**

```js
// Le point final de « LINEAR. » devient l'iris : plein cadre pile sur le temps 28
// (mesurer après document.fonts.ready, scène visible, composition 1920 × 1080 à l'échelle 1)
const FPS = 60;
const BEAT = 60 / 128;                         // 128 BPM
const at = b => b * BEAT;
const fr = n => n / FPS;
const W = 1920, H = 1080;
const full = at(28);                           // plein cadre sur le temps
const d = document.querySelector("#title-dot").getBoundingClientRect();
const cx = d.left + d.width / 2, cy = d.top + d.height / 2;
const r0 = d.width / 2;
const R = 1.02 * Math.hypot(W, H) / 2;         // demi-diagonale : le centre finit au milieu
const start = full - fr(11);                   // 11 im d'iris

tl.set("#sceneB", { autoAlpha: 1, clipPath: `circle(${r0}px at ${cx}px ${cy}px)` }, start)
  .set("#title-dot", { autoAlpha: 0 }, start)  // le disque prend la place du point
  .to("#sceneB", { clipPath: `circle(${R}px at ${W / 2}px ${H / 2}px)`,
                   duration: fr(11), ease: "power3.in" }, start)
  .to("#title .word", { xPercent: -60, autoAlpha: 0,
                        duration: fr(10), ease: "circ.in" }, start - fr(1))
  // second disque, même centre, 3 im plus tard (double iris)
  .set("#sceneC", { autoAlpha: 1, clipPath: `circle(0px at ${W / 2}px ${H / 2}px)` }, full + fr(3))
  .to("#sceneC", { clipPath: `circle(${R}px at ${W / 2}px ${H / 2}px)`,
                   duration: fr(14), ease: "expo.out" }, full + fr(3));

// Iris qui part du drop : départ à full, ease "sine.out" ou "expo.out", 7 à 10 im.
```

**After Effects**

- Shape Layer (calque de forme) Ellipse « iris » posé sur le point final, de la même taille ; le point d'origine passe à 0 % d'Opacity (Opacité) à la même image. Le plan B pré-composé au-dessus, en Alpha Matte (Cache alpha) sur l'iris : Layer › Track Matte › Alpha Matte (Calque › Cache › Cache alpha).
- Size (Taille) de l'ellipse : 2 keyframes (images clés) à 11 im d'écart, jusqu'à 2 250 px pour un cadre 1920 × 1080. Position glissée vers 960, 540 en même temps.
- Speed Graph (éditeur de graphe de vitesse) : influence de sortie de 85 % sur la 1re clé, arrivée raide sur la 2e (version qui finit sur le temps). Pour le drop, l'inverse : départ raide, influence d'entrée de 90 % sur la dernière clé.
- Poser un Composition Marker (marqueur de composition) sur le temps (touche * du pavé numérique) et caler la clé de plein cadre dessus, ou 1 im avant.
- Double iris : dupliquer le calque avec Edit › Duplicate (Édition › Dupliquer), Ctrl+D, changer la couleur, décaler de 3 im ; Animation › Keyframe Assistant › Sequence Layers (Animation › Assistant d'image clé › Séquencer les calques) pour en enchaîner trois. Liseré : Stroke (Contour) blanc de 2 px sur une copie de l'ellipse.
