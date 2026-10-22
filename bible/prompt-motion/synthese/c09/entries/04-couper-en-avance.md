## Couper en avance, atterrir sur le temps (visual lead, pre-beat cut, land on the beat)

Le temps musical se place à l'intérieur du geste, pas à son début : la coupe ou le lancement précède l'attaque de 1 à 4 images, pour que l'image pleine ou la pose tombe sur le coup. L'œil doit avoir vu quand l'oreille entend : un son qui arrive jusqu'à 40 ms après l'image paraît synchrone, l'inverse se voit. Dans [GravityDEX anime hype edit](https://prompt-motion.com/micheleharmonic-77628e), 34 gestes sur 39 ont leur première image 1 à 2 im (33 à 67 ms) avant la barre, aucun après. Vue dans 50 vidéos, dont 49 notées 4 ou 5 ; seules les 43 vidéos animées sur la musique servent de modèle.

![Rafale de mots : image grise unie, fondu de 3 images, mot plein une image avant la grosse caisse](ILLUS:couper-en-avance-1)

*[Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:10.72 à 0:10.83 : « Short links. » cède à une image grise unie (f645), « QR codes. » sort du gris et est plein à f648, une image avant la grosse caisse (f649).*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Coupe en avance sur le kick | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:10.75 | 15 déclenchements à −3,4 ± 0,3 im (57 ms) de l'attaque ; image pleine 1 im avant le coup (étude 60 fps) |
| Coupe 2-3 im avant, fin de geste dessus | [Studio website showreel](https://prompt-motion.com/andginja-333d32), 0:01.47 | 19 gestes, aucun en retard ; coupes à −2,3 à −3,4 im à 30 fps (80-110 ms), fins de mouvement à 0-1 im |
| Lancer la transition pour atterrir | [mdfor.dev product intro video](https://prompt-motion.com/ho-ba-f3f0e9), 0:16.78 | whips et volet lancés 4 à 7 im avant ; scène lisible ou couverture totale sur la barre (f1014, f1127, f1239) |
| Fondu court, opaque sur le temps | [Database client launch video](https://prompt-motion.com/iammxfschr-d68f90), 0:14.98 | coupe 6-7 im (0,11 s) avant, fondu de 6-7 im, opaque sur la barre ; même phase sur 7 coupes |
| Départ sur le temps, pose au demi-temps | [Claude motion design reel](https://prompt-motion.com/tequilafunks-97f6c9), 0:05.07 | gestes lancés sur la barre, posés 7-8 im plus tard à 30 fps : EASE f302 → f310, CLAUDE f360 → E f369 |
| Préparer au demi-temps, partir sur le temps | [Type, form, space showreel](https://prompt-motion.com/web3wesley-7bb108), 0:01.17 | écrasement ×0,59 en 6 im sine.out dès f35, envol f42 sur le temps, y power2.out 6 im (étude 60 fps) |
| Sortie d'élan, impact sur le temps | [Kinetic type showreel](https://prompt-motion.com/itsuki-dev-10942d), 0:02.23 | le mot sort pendant les 7-8 im avant le temps ; le suivant est à son échelle maximale sur l'image du temps (f141, f197) |
| Contre-exemple : avance trop grande | [Geometric motion designer showreel](https://prompt-motion.com/leonkohli-6dc01b), 0:03.97 | coupes 3,5 im (117 ms) avant le kick : piste audio démarrée à 0,085 s ; l'avance se sent sur les coupes sèches |

![Point écrasé sur le demi-temps, envol sur le temps, pose au demi-temps suivant](ILLUS:couper-en-avance-2)

*[Type, form, space showreel](https://prompt-motion.com/web3wesley-7bb108), 0:01.10 à 0:01.67 : le point s'écrase à partir du demi-temps, s'envole flou sur le temps (f42) et se pose au-dessus du tableau au demi-temps suivant.*

**Mesures (60 fps)**

- [Dub promo video](https://prompt-motion.com/steventey-0d20e4) : le code déclenche sur les quarts de seconde (15 im), la grosse caisse frappe à f4 + 30 k. Le clic (f120) précède le drop (f124) : l'image « déclenche » la musique.
- [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d) : temps posés sur f30n, batterie 1 à 2 im plus tard. Iris et plongées en power3.in de 12 à 24 im : l'objet ne remplit le cadre que dans les 4 dernières images, plein cadre sur le temps.
- [Kinetic type showreel](https://prompt-motion.com/zheke-38deff) : coupes sur round(n × 28,125) ; l'en-tête arrive 1 im avant la coupe, et le coup de zoom accélère (power2.in, +19 % dans les 2 dernières images) jusqu'à l'image de coupe.
- Piège : chez [Product intro synced to music](https://prompt-motion.com/bogdandragomir-35e024), la grille détectée était décalée d'un demi-temps ; l'étude inverse la règle de la fiche (départ sur le temps, pas sur le demi-temps).

**Règles de construction**

1. Écrire la timeline sur la grille exacte (round(n × images par temps)), puis donner à l'image 1 à 3 im d'avance sur l'attaque à 60 fps (17-50 ms), 1 à 2 im à 30 fps : soit la piste démarre plus tard, soit chaque coupe recule d'autant.
2. Ce qui tombe sur le temps, c'est l'image pleine ou la pose, pas le départ : un geste de durée d part à « temps − d » (whips 4-7 im, fondu 6-7 im, iris power3.in 12-24 im).
3. Plafond : au-delà d'environ 100 ms d'avance, la coupe sèche paraît en avance (3,5 im à 30 fps chez leonkohli ; 0,13 s sur la rafale finale de [Kinetic type and particle showreel](https://prompt-motion.com/m1n9-k7-ff9ab9)). Un son de clic 5 im en retard se voit aussi ([Browser automation skill launch](https://prompt-motion.com/hqmank-7c61f1), contre-exemple).
4. Gestes internes : départ sur le temps, pose sur le demi-temps suivant (15 im à 120 BPM et 60 fps) ; la préparation (écrasement, contraction) remplit le demi-temps d'avant. Vu dans 8 vidéos animées, dont 3 notées 5.
5. Mesurer sur le rendu final, au début, au milieu et à la fin : une amorce d'encodeur décale la piste de 47 à 86 ms, un tempo à 127,7 au lieu de 128 BPM fait dériver l'écart jusqu'à 8 im en 13 s (m1n9-k7).

**Verdict** : à reprendre. C'est le réglage qui rend « pile dessus » toutes les autres techniques de calage ; il sert aussi ta « compression puis explosion » : la compression remplit le demi-temps, l'explosion frappe le temps.

**Quand l'utiliser** : dans tout style calé sur une musique ou des bruitages (typo cinétique 1600, promo SaaS, showreel), à chaque coupe, chaque transition et chaque pose forte. L'avance se fixe une fois à l'étape « musique et grille » comme une constante du projet, puis s'applique à la construction des plans et aux enchaînements. Inutile sans son ; sur une voix off, on cale plutôt l'image 0,3 à 0,5 s avant chaque phrase.

**HyperFrames (GSAP)**

```js
// Couper en avance, atterrir sur le temps (120 BPM, 60 im/s, piste audio à t = 0)
const FPS = 60, BEAT = 60 / 120;             // 1 temps = 0,5 s = 30 im
const at = b => b * BEAT;                    // temps musical → secondes
const LEAD = 2 / FPS;                        // l'image précède l'attaque de 2 im (33 ms)
const hit = b => at(b) - LEAD;               // image pleine juste avant le coup

// 1. Coupe franche : la scène B est pleine 2 im avant le temps 8
tl.set("#scene-a", { autoAlpha: 0 }, hit(8))
  .set("#scene-b", { autoAlpha: 1 }, hit(8));

// 2. Volet lancé en avance : couverture totale sur le temps 10
const WIPE = 7 / FPS;                        // 7 im de course
tl.set("#wipe", { xPercent: -100, autoAlpha: 1 }, hit(10) - WIPE)
  .to("#wipe", { xPercent: 0, duration: WIPE, ease: "power3.in" }, hit(10) - WIPE)
  .set("#scene-b", { autoAlpha: 0 }, hit(10))
  .set("#scene-c", { autoAlpha: 1 }, hit(10))
  .to("#wipe", { xPercent: 100, duration: WIPE, ease: "power3.out" }, hit(10));

// 3. Geste interne : écrasement au demi-temps, envol sur le temps, pose au demi-temps suivant
tl.to("#dot", { scaleX: 1.3, scaleY: 0.59, transformOrigin: "50% 100%",
                duration: 6 / FPS, ease: "sine.out" }, hit(11.5))
  .to("#dot", { scaleX: 1, scaleY: 1, duration: 4 / FPS, ease: "power2.out" }, hit(12))
  .to("#dot", { y: -240, duration: 6 / FPS, ease: "power2.out" }, hit(12))
  .to("#dot", { y: 0, duration: 9 / FPS, ease: "power1.in" }, hit(12) + 6 / FPS); // posé à hit(12.5)
```

**After Effects**

- Composition › Composition Settings (Composition › Paramètres de composition) à 60 fps. Pendant l'aperçu, poser un marqueur sur chaque grosse caisse avec la touche * du pavé numérique, sur le calque audio ; zoomer sur la forme d'onde (touches LL) pour corriger à l'image près.
- Coupe : 2 im avant chaque marqueur (Page Up deux fois), Edit › Split Layer (Édition › Scinder le calque, Ctrl/Cmd + Maj + D) ; la nouvelle scène est pleine sur cette image.
- Transition : poser l'image clé « couverture totale » 2 im avant le marqueur et l'image clé de départ 7 im plus tôt ; dans le Speed Graph (éditeur de graphe de vitesse), influence sortante de 75 % sur la première (départ lent, accélération).
- Geste interne : Scale (Échelle) 130 / 59 % en 6 im dès le demi-temps, puis Position vers le haut en 6 im et retour en 9 im, pose sur le demi-temps suivant ; Easy Ease (Lissage de vitesse, F9) sur la pose.
- Vérifier le rendu final réimporté : si l'écart son-image est constant, déplacer le calque audio image par image (Alt + Page Up / Page Down).
