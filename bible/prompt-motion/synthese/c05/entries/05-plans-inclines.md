## Les cartes en perspective : murs inclinés, redressements et retournements (perspective card wall, tilt settle, 3D card flip, CSS 3D panels)

Des éléments plats (cartes d'interface, vignettes, pages) sont posés dans l'espace par une rotation en X ou en Y : un mur incliné arrive du fond, une carte se redresse face caméra, une carte se retourne et change de contenu. C'est la 3D la moins chère d'une promo SaaS : de vraies captures, une perspective CSS. La carte héros se pose en 8 im (0,13 s) ; le mur qui ne montre que « beaucoup » s'oublie aussitôt. Vue dans 29 vidéos, dont 22 notées 4 ou 5.

![Six images : sur fond noir, trois rangées de vignettes 9:16 inclinées en perspective sortent du noir l'une après l'autre, montent et se calent sous le sur-titre « Scanning your niche for outliers »](ILLUS:plans-inclines-1)

*[Chunku product promo](https://prompt-motion.com/reyzostyle-b55864), 0:02.20 à 0:02.67 : le titre sort, les rangées naissent à 3 im d'écart, le mur monte d'environ 28 % de la hauteur et garde une légère inclinaison.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Mur qui monte du noir | [Chunku product promo](https://prompt-motion.com/reyzostyle-b55864), 0:02.27 | 3 rangées décalées de 3 im, rotation X ≈ 20-30°, montée de 28 % H en 24 im ease-out, départ sur le temps (−0,4 im) |
| Mur qui arrive du fond | [fal motion design showreel](https://prompt-motion.com/influencer-seo-ce8c33), 0:05.85 | 12 cartes en 4 × 3, décalage 1-2 im, posées en 12 im sur un plan X ≈ 35°, Z ≈ −12° |
| Carte héros qui se redresse | [Email verification tool promo](https://prompt-motion.com/kmasiff-cc72cb), 0:02.00 | rotation Y ≈ 15-20° et légère suréchelle → à plat en 8 im, ease-out, sans dépassement ; carte à 64 % L |
| Cartes posées une à une | [Muse connector tracker promo](https://prompt-motion.com/elliot-garreffa-f334bc), 0:25.63 | 4 cartes à 7-8 im d'écart, rotation Y ≈ 40°, Z ≈ −8°, posées à plat en 1,7 s amorties (30 fps) |
| Retournement qui change le contenu | [DistilBook product explainer](https://prompt-motion.com/sudo-kiran-6609ed), 0:02.18 | la feuille atteint la tranche en 2 im ; son dos, une carte vidéo, monte au centre en 5 im (45 % L) |
| Retournement en cascade | [Motion design showreel](https://prompt-motion.com/samuel-spitz-974923), 0:03.75 | 6 colonnes pivotent de 180° en Y à 4 im d'écart, 9-12 im chacune ; le dos change la palette |
| Écran qui bascule en mosaïque | [FundMyCompute platform overview](https://prompt-motion.com/jayscambler-3f8889), 0:13.02 | bascule X ≈ 50°, Z ≈ −15° pendant un recul de 0,8 s, freinage long |
| Carte inclinée qui dérive | [Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4), 0:01.30 | Y ≈ 8-10°, X ≈ 5° ; dérive de 0,4 px/im pendant la tenue (étude 60 fps) |

![Six images : la feuille PDF « UNREAD » pivote sur l'axe vertical, passe par la tranche, et revient sous la forme d'une carte vidéo avec bouton lecture qui grandit au centre](ILLUS:plans-inclines-2)

*[DistilBook product explainer](https://prompt-motion.com/sudo-kiran-6609ed), 0:02.10 à 0:02.35 : la page devient lecteur vidéo ; le message « document → vidéo » passe par le geste.*

**Règles de construction**

1. Trois angles, trois usages. Carte héros : 15 à 20° en Y, redressée à plat ([Email verification tool promo](https://prompt-motion.com/kmasiff-cc72cb), [Muse connector tracker promo](https://prompt-motion.com/elliot-garreffa-f334bc)). Mur : 20 à 35° en X. Table vue de haut : 50 à 55°. Ajouter −4 à −15° en Z pour casser la frontalité.
2. Durées : 8 im pour qu'une carte héros se pose, 12 à 24 im pour un mur, ease-out sans dépassement. Un retournement atteint la tranche en 2 à 4 im ; le contenu change à la tranche ; la nouvelle face s'ouvre en 5 im. Les poses de 1,7 à 2 s (vidéos notées 3) paraissent molles. L'entrée produit de 108 % à 100 % en 2 s (guide Otom, p. 9) ne vaut que pour un ton calme, hors musique.
3. Cascade serrée : 1 à 4 im entre cartes ou rangées. Montez à 7-8 im seulement si chaque carte porte un nom à lire.
4. Calage (vidéos animées sur la musique) : le mur part sur le temps ([Chunku product promo](https://prompt-motion.com/reyzostyle-b55864), [AllInvestView product promo](https://prompt-motion.com/rammanq-f5a90f)) et le titre arrive au demi-temps suivant ([fal motion design showreel](https://prompt-motion.com/influencer-seo-ce8c33), f365,4). Des pages qui tournent atterrissent sur chaque temps, à ±2 im ([Distilbook motion showreel](https://prompt-motion.com/itisrazak-3ad902)).
5. Après la pose, une dérive : 0,4 px/im, ou 1 à 2 % du cadre par seconde. Contre-exemple : les cartes figées de [Norilu product launch video](https://prompt-motion.com/sachaarbonel-8f14f4).
6. Le mur porte un mot : titre devant, mur flouté et assombri ([SaaS launch video](https://prompt-motion.com/aschapmann-131210)), à ≈ 60 % de luminosité ([MotionSites one million visitors](https://prompt-motion.com/viktoroddy-98c1d8)). Sans mot, c'est le moment le plus mou du film ([Pixelup Labs studio showreel](https://prompt-motion.com/arjunsh1607-93005d)).

**Verdict** : à reprendre pour la carte qui se redresse et pour le retournement qui change le contenu, version 3D de ton objet relais (chapitre 4, « L'objet relais »). Le mur de vignettes est à adapter : un mot devant, une dérive, sinon c'est du remplissage.

**Quand l'utiliser** : en promo SaaS / interface d'abord, pour présenter un écran (redressement) ou prouver un volume (mur). En showreel éditorial, la cascade de retournements change la palette sans coupe. En typo cinétique 1600, le mur sert de fond flou derrière un mot. Choix à la construction du plan ; le retournement, aux enchaînements. À éviter sur un texte à lire, deux fois dans la même vidéo, ou avec des cartes coupées par le bord.

**HyperFrames (GSAP)**

```js
// Mur incliné qui monte, puis carte héros qui se redresse et se retourne (aucun plugin)
const FPS = 60, f = n => n / FPS;
const BEAT = 60 / 120;                       // 120 BPM : 1 temps = 30 im
const at = b => b * BEAT;
// CSS : #stage { perspective: 1400px } ; #wall, #card { transform-style: preserve-3d }
const T0 = at(4);                            // 1er temps de la mesure 2
tl.set(".row", { autoAlpha: 0, yPercent: 60 }, 0)
  .set("#wall", { rotationX: 25, rotationZ: -10, transformOrigin: "50% 100%" }, 0)
  .set("#title", { autoAlpha: 0, y: 30 }, 0)
  .set("#card", { autoAlpha: 0 }, 0);
// 1. Trois rangées à 3 im d'écart, montée en 24 im
tl.to(".row", { autoAlpha: 1, yPercent: 0, duration: f(24), ease: "power3.out", stagger: f(3) }, T0);
// 2. Le titre au demi-temps ; le mur passe au second plan et dérive sans jamais s'arrêter
tl.to("#title", { autoAlpha: 1, y: 0, duration: f(12), ease: "power2.out" }, T0 + at(0.5))
  .to("#wall", { filter: "blur(6px) brightness(0.6)", duration: f(18), ease: "sine.inOut" }, T0 + at(0.5))
  .to("#wall", { x: -40, duration: at(3.5), ease: "none" }, T0 + at(0.5));
// 3. Carte héros : arrive à 18° en Y et à 106 %, se pose à plat en 8 im, sans dépassement
const T1 = at(8);
tl.set("#card", { autoAlpha: 1, rotationY: 18, scale: 1.06 }, T1)
  .to("#card", { rotationY: 0, scale: 1, duration: f(8), ease: "power2.out" }, T1);
// 4. Retournement au demi-temps : tranche en 3 im, échange des faces, ouverture en 5 im
const T2 = at(9.5);
tl.to("#card", { rotationY: 90, duration: f(3), ease: "power2.in" }, T2)
  .set("#card .front", { autoAlpha: 0 }, T2 + f(3))
  .set("#card .back", { autoAlpha: 1 }, T2 + f(3))
  .set("#card", { rotationY: -90 }, T2 + f(3))
  .to("#card", { rotationY: 0, scale: 1.25, duration: f(5), ease: "power3.out" }, T2 + f(3));
```

**After Effects**

- Activer le 3D Layer switch (commutateur Calque 3D) sur chaque carte et les parenter à un Layer › New › Null Object (Calque › Nouveau › Objet nul), lui aussi en 3D. Nul : X Rotation (Rotation X) 25°, Z Rotation (Rotation Z) −10° ; Layer › New › Camera (Caméra) de 50 mm.
- Mur : Position Y de chaque rangée en 24 im, influence d'arrivée 80 % dans le Speed Graph (éditeur de graphe de vitesse) ; rangées décalées de 3 im (Option + Page Down).
- Carte héros : Y Rotation (Rotation Y) 18 → 0° et Scale (Échelle) 106 → 100 % en 8 im, même influence ; Motion Blur (Flou de mouvement) activé.
- Retournement : face avant de 0 à 90° en 3 im ; à la tranche, Edit › Split Layer (Édition › Scinder le calque), puis face arrière de −90 à 0° en 5 im.
- Mur en fond : Camera Options › Depth of Field (Profondeur de champ) ou Effect › Blur & Sharpen › Gaussian Blur (Flou gaussien) à 6 px ; dérive du nul de −40 px en Linear (linéaire).
