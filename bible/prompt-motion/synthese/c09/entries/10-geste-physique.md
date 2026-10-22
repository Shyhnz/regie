## Le geste physique sur le temps : anticipation, chute, rebond (bouncing ball on the beat, squash and stretch, anticipation wind-up)

Un objet obéit à une gravité crédible : chute qui accélère, écrasement au contact, élan d'anticipation. Chacun de ses contacts tombe sur un temps de la musique. La physique donne le poids, la grille donne la musicalité : la balle devient un métronome visible. Les meilleures vidéos trichent la physique pour tenir le tempo : la période reste d'un temps (28,125 im à 128 BPM en 60 fps), même quand la hauteur baisse. Vue dans 31 vidéos, dont 31 notées 4 ou 5.

![Balle vermillon qui tombe en accélérant, s'écrase au sol sur le temps, puis remonte étirée en ralentissant ; pelures d'oignon sur la trajectoire](ILLUS:geste-physique-1)

*[Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:00.73 à 0:01.20 : la balle tombe en accélérant (fantômes de plus en plus espacés) et s'écrase sur le temps 2 (0:00.93). Elle remonte étirée et ralentit vers le sommet du demi-temps.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Balle-métronome, un rebond par temps | [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:00.47 | contacts f28, f56, f84 à −0,1 / −0,4 im des temps ; chute power1.in 13 im, montée sine.out 14 im (étude 60 fps) |
| Rebond amorti à restitution 0,75 | [Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), 0:13.00 | intervalles 45, 34, 25, 19, 14, 11, 8, 6 im ; 1er impact sur le temps, 2e sur le demi-temps, puis physique libre (étude 60 fps) |
| Anticipation écrasée, puis grand saut | [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:01.40 | écrasée 7 im (1,60 → 1,84:1) du temps 3 à la double-croche ; étirement ×3,7 sur une seule image à l'envol |
| Préparer sur le demi-temps, partir sur le temps | [Type, form, space showreel](https://prompt-motion.com/web3wesley-7bb108), 0:01.10 | point écrasé à ×0,59 en 6 im (sine.out) dès le demi-temps, tenu 4 im, envol sur le temps (étude, 30 fps) |
| Vol d'un temps calculé à rebours | [Collision-driven music machine](https://prompt-motion.com/kamstudiolabs-447565), 0:00.40 | tir sur le temps, impact sur la note suivante : vol de 36-37 im pour un temps de 37,5 im (96 BPM) ; x constant, g = 1 500 px/s² |
| Rebonds qui accélèrent vers la mesure suivante | [Claude motion reel](https://prompt-motion.com/jasonzhou1993-8595e0), 0:00.47 | intervalles 28, 14, puis 7-8 im : noire, croche, double-croche, juste avant l'entrée de la grosse caisse |
| Chute longue pendant un silence | [Beat-synced bouncing 3D ball](https://prompt-motion.com/gorden-sun-041f56), 0:08.60 | chute de 1,08 s pendant la pause de la mélodie, atterrissage à +0,1 im de l'attaque suivante |
| Décompte 1-2-3 rebondi | [Motion designer showreel](https://prompt-motion.com/eyishazyer-af035b), 0:00.48 | impacts f29, f57, f85 ; à chaque contact le chiffre s'allume, 1 im atténué puis 3 im plein |

![Balle noire qui rebondit sur fond crème, légende « e = 0.75 », traînée de points rouges en arcs de plus en plus bas](ILLUS:geste-physique-2)

*[Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), 0:12.83 à 0:13.83 : la balle rebondit avec la restitution affichée ; la traînée de points rouges dessine des arcs qui rétrécissent d'un rebond à l'autre.*

**Règles de construction**

1. L'image d'écrasement est l'image du temps, à ±1 im ; le sommet tombe sur le demi-temps. Mesuré : −0,1 à −0,4 im (levabashidze, étude), ≤ 1 im (web3wesley), 0,5 à 1 im avant la grosse caisse (vanshwtfff). Contre-exemple : [Geometric motion designer showreel](https://prompt-motion.com/leonkohli-6dc01b) touche 2,5 à 3,5 im (0,08 à 0,12 s) avant l'accent, jugé « à adapter ».
2. Gravité : chute en power1.in, montée en sine.out ou power1.out, x en linéaire (`none`). Pour un temps à 128 BPM : 13 im de chute et 14 im de montée (levabashidze, zheke-38deff : 13 + 15 im).
3. Écrasement sur une seule image, de 1,4:1 à 2,2:1 (hbcoop 1,44 ; levabashidze 1,57 ; tequilafunks 2,15). Étirement inverse (≈ 0,56) deux images après, et étirement dans l'axe pendant la chute. Au-delà de 2,5:1, le réserver à l'anticipation.
4. Tricher pour le tempo : période constante, hauteur constante ou ×0,7 par rebond (3xtihor : 25, 18, 13 % du cadre). Pour un vrai amorti, intervalles ×0,75 et seuls les deux premiers impacts calés (temps, puis demi-temps).
5. L'anticipation dure plus que le geste : 6 à 15 im d'écrasement, détente en 1 à 3 im (hbcoop 15 + 3 im). Même rapport de 4:1 hors musique : 22 im d'armé pour un coup de 6 im (chrisjdimarco-f068db).
6. La durée du vol est l'intervalle jusqu'à la note visée : on calcule le saut à rebours depuis l'heure d'arrivée. gorden-sun : 123 impacts sur 152 à ±1,5 im d'une attaque (hasard : 36 %).

**Verdict** : à adapter. Garde la gravité et le calage, mais confie le geste à un élément du message : point final, point du i, curseur, logo. Environ 12 des 31 vidéos ouvrent sur la même balle abstraite dans leurs 2 premières secondes ; c'est ta « trajectoire courbe avec écrasement à l'atterrissage », à condition qu'elle porte un sens.

**Quand l'utiliser** : en typo cinétique 1600 (le point final qui rebondit de mot en mot) et pour les personnages. En promo SaaS : curseur qui bondit, pastille qui tombe dans sa case. Fonctions : accroche (décompte 1-2-3), transition (le point saute puis plonge), chute ou signature (le point final s'écrase sur le dernier temps). La courbe de gravité se fixe au système de design, le calage à la grille musicale. À éviter sans pulsation régulière, et sur un ton grave ou institutionnel.

**HyperFrames (GSAP)**

```js
// Balle-métronome à 128 BPM : contact sur l'image du temps, sommet au demi-temps,
// écrasement d'une image, puis anticipation tenue et grand saut (mesures de levabashidze)
const FPS = 60, BEAT = 60 / 128;                  // 1 temps = 28,125 im
const at = b => b * BEAT, F = n => n / FPS;
const W = 1920, H = 1080, SOL = 0.69 * H, APEX = 0.36 * H;
tl.set("#ball", { x: 0.185 * W, y: -0.05 * H, transformOrigin: "50% 100%", autoAlpha: 1 }, 0);
// x à vitesse constante sur 3 temps : la gravité n'agit que sur y
tl.to("#ball", { x: 0.674 * W, duration: at(3) - F(14), ease: "none" }, F(14));
// première chute jusqu'au temps 1 (power1.in = accélération constante)
tl.to("#ball", { y: SOL, duration: at(1) - F(14), ease: "power1.in" }, F(14));
for (const b of [1, 2]) {
  tl.to("#ball", { y: APEX, duration: at(0.5), ease: "sine.out" }, at(b))          // sommet au demi-temps
    .to("#ball", { y: SOL, duration: at(0.5), ease: "power1.in" }, at(b + 0.5))   // contact sur le temps
    .set("#ball", { scaleX: 1.25, scaleY: 0.8 }, at(b))                           // écrasé 1,57:1, une image
    .set("#ball", { scaleX: 0.8, scaleY: 1.4 }, at(b) + F(2))                     // étiré 0,57 deux images après
    .to("#ball", { scaleX: 1, scaleY: 1, duration: F(8), ease: "sine.out" }, at(b) + F(3));
}
// temps 3 : la balle reste écrasée jusqu'à la double-croche 3,25 (anticipation de 7 im)
tl.set("#ball", { scaleX: 1.26, scaleY: 0.79 }, at(3))
  .to("#ball", { scaleX: 1.36, scaleY: 0.74, duration: at(0.25) - F(1), ease: "power2.in" }, at(3))
// envol : étirement extrême (0,27:1) sur une seule image, puis sortie par le haut
  .set("#ball", { scaleX: 0.55, scaleY: 2 }, at(3.25))
  .to("#ball", { y: -0.2 * H, scaleX: 0.85, scaleY: 1.2, duration: F(10), ease: "power1.out" }, at(3.25) + F(1));
```

**After Effects**

- Composition › Composition Settings (Composition › Paramètres de composition) à 60 fps ; un Composition Marker (marqueur de composition) tous les 28,125 im. Chaque contact se pose sur l'image arrondie du temps.
- Clic droit sur Position › Separate Dimensions (Séparer les dimensions). X Position : 2 images clés en interpolation Linear (Linéaire) sur 3 temps. Y Position : une clé par contact et par sommet, toutes les 14 im.
- Graph Editor (éditeur de graphiques) en Speed Graph (graphe de vitesse) : au sommet, Easy Ease (Lissage de vitesse) avec influence de 33 % ; au contact, vitesse maximale des deux côtés, sans lissage : c'est le V de la gravité (≈ power1.in).
- Scale (Échelle) sans Constrain Proportions (Conserver les proportions), Anchor Point (Point d'ancrage) au bas de la balle : 125/80 % sur l'image du contact, 80/140 % deux images après, retour à 100 % en 8 im. Clés en Animation › Toggle Hold Keyframe (Image clé de maintien) pour les poses d'une image.
- Anticipation : 126/79 % au temps 3, 136/74 % à la double-croche (+7 im), 55/200 % une image à l'envol. Activer Motion Blur (Flou de mouvement). Pour un amorti réel, espacer les contacts de 45, 34, 25, 19, 14, 11, 8, 6 im.
