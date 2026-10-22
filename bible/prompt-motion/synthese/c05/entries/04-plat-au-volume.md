## Du plat au volume : bascule 2D vers 3D, extrusion et blocs isométriques (2D-to-3D tilt, extrusion, isometric blocks, cube ripple, exploded view)

Une surface plate (grille, mosaïque, mot, interface) prend de la profondeur : la vue bascule vers l'isométrie ou la vue rasante, puis tuiles et lettres s'extrudent en blocs. Le passage au relief est une révélation lisible sans texte ; la bascule dure souvent un temps (0,27 à 0,5 s). Vue dans 33 vidéos, dont 29 notées 4 ou 5.

![Une grille de formes plates colorées bascule en perspective plongeante avec flou ; chaque forme s'extrude en cube, cylindre ou prisme, « SPACE » couché sur le plan](ILLUS:plat-au-volume-1)

*[Type, form, space showreel](https://prompt-motion.com/web3wesley-7bb108), 0:06.93 à 0:07.87 : la grille bascule en un temps (flou au milieu), se pose sur le 1er temps de la mesure 5, et les tuiles s'extrudent en ressort.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Bascule puis extrusion en ressort | [Type, form, space showreel](https://prompt-motion.com/web3wesley-7bb108), 0:07.00 | étude 60 fps : rotation X en 14 im (1 temps), power3.inOut ; extrusion 5-15 % H en elastic.out(1, 0.45) |
| Vue de dessus vers vue rasante | [Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), 0:06.00 | étude 60 fps : ellipse 1,00 → 0,50 (élévation ≈ 30°) en 136 im, power2.inOut, départ sur le temps |
| Mosaïque vers monde de voxels | [Claude motion design reel](https://prompt-motion.com/tequilafunks-97f6c9), 0:06.07 | étude 60 fps : inclinaison 0 → ≈ 55° en 8 im (30 fps), power2.inOut ; cubes extrudés à f188, arène au demi-temps |
| Vague isométrique en paliers | [Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:07.98 | étude 60 fps : grille 12 × 8 en isométrie vraie ; un palier par double-croche, 3 im de mouvement (power2.out) puis 4 im de tenue |
| Retour à plat qui claque | [Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:08.68 | étude 60 fps : isométrie → face en 13 im, power2.in, arrêt net sur le temps (−0,4 im) ; la musique se coupe là |
| Mot qui prend de l'épaisseur | [3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155), 0:03.62 | étude 60 fps : extrusion linéaire pendant exactement 1 temps (28 im), puis rotations de 15-25° sur les temps |
| Forme plate qui devient objet | [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:05.38 | étude 60 fps : arêtes en Y au demi-temps, puis 3 faces #DF5433 / #AF462C / #6D2C22 en 7 im, sans mouvement de caméra |
| Vue éclatée étiquetée | [AI data centre 3D tour](https://prompt-motion.com/sayan-shanky-f850d8), 0:50.80 | boîtier tenu 1,7 s, couches écartées en ≈ 2 s, une étiquette par couche |

![Des tirets deviennent une grille bleue isométrique ; une vague diagonale extrude les cubes par paliers, puis la grille pivote d'un coup en vue de face](ILLUS:plat-au-volume-2)

*[Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:07.50 à 0:08.92 : isométrie vraie, vague quantifiée à la double-croche, puis retour à la vue de face, arrêt net sur le temps.*

**Règles de construction**

1. Bascule d'abord, extrusion ensuite : les blocs poussent à l'atterrissage, jamais pendant la rotation. Bascule ponctuelle : 0,27 à 0,5 s. La bascule longue (136 im, 2,3 s) ne sert qu'en plan-séquence avec travelling avant.
2. Angles : isométrie vraie à 35,264° d'élévation et 45° d'azimut (Blue editorial), soit un plan incliné de 54,7°. Sans point de fuite pour un diagramme, avec perspective pour une scène d'objets.
3. Courbes : bascule en power2 ou power3.inOut ; extrusion en ressort (objets ludiques), linéaire sur un temps (croissance mécanique) ou en paliers power2.out (égaliseur). Le retour à plat accélère (power2.in) et s'arrête net.
4. Calage (vidéos animées sur la musique) : la bascule se pose sur le 1er temps d'une mesure (Type, form, space f224 ; Blue editorial temps 19), l'extrusion est en place au demi-temps, une onde de voxels part à chaque temps (Claude motion design reel : 3 cycles de 15 im). Contre-exemple : Studio website showreel, bascule de 17 im au départ non calé.
5. Volume crédible : trois valeurs par bloc (dessus clair, flancs moyen et sombre) et une ombre douce au sol. L'ombre décalée (Deliberately terrible motion showreel, gag voulu) ou ≈ 10 copies empilées sans lumière restent de la fausse 3D : réserve-les au riso ou au rétro assumé.
6. Laisser lire : 0,2 à 0,3 s de volume ne se lisent pas (deux showreels notés 4). Garde le relief 1 à 3 temps avec une action dessus : balle qui rebondit d'un bloc à l'autre à chaque temps (Type, form, space, 42 im), vague en paliers. Pile éclatée : couches posées toutes les 14 im (Flowdrive motion showreel), une étiquette chacune.

**Verdict** : à reprendre. Bascule puis extrusion : une révélation forte, proche de ton goût pour le volume (anneau 3D, tunnel). Garde-la pour un moment clé et soigne lumière et ombres.

**Quand l'utiliser** : en showreel éditorial et en 3D, comme pivot de milieu de vidéo (le chapitre « espace ») ; en promo SaaS et en explainer, la pile éclatée montre une architecture (couches, résolutions). On la choisit à la direction artistique, puis on la place à la construction du plan, sur un 1er temps de mesure. À éviter sur une interface pleine de texte (illisible une fois inclinée) et en typo cinétique pure. Mesures complètes : chapitre 14.

**HyperFrames (GSAP)**

```js
// Grille → isométrie en 1 temps (posée temps 16), extrusion en ressort, retour à plat temps 19.
// CSS 3D sans plugin ; #tilt contient #plane ; #stage sans perspective (isométrie orthographique).
// #tilt, #plane, .tile { transform-style: preserve-3d }  .top { transform: translateZ(var(--h)) }
// .side { height: var(--h); transform-origin: 50% 0; transform: rotateX(-90deg) } (flancs 80 % / 50 %)
const FPS = 60, f = n => n / FPS;
const BEAT = 60 / 128, at = b => b * BEAT;            // 128 BPM : 1 temps = 28,1 im
const tiles = gsap.utils.toArray("#plane .tile");
const HMAX = 0.15 * 1080;                              // extrusion max : 15 % de la hauteur d'image
const h = i => HMAX * (0.35 + 0.65 * ((i * 7) % 5) / 4); // hauteurs fixes de 5 à 15 % H, sans aléatoire
tl.set("#tilt", { rotationX: 0 }, 0)
  .set("#plane", { rotation: 0, scale: 1 }, 0)
  .set(tiles, { "--h": "0px" }, 0)
  // 1. le plan tourne de 45° sur lui-même, la vue s'incline de 54,74° (élévation 35,26°)
  .to("#plane", { rotation: 45, scale: 0.8, duration: at(1), ease: "power3.inOut" }, at(15))
  .to("#tilt", { rotationX: 54.74, duration: at(1), ease: "power3.inOut" }, at(15))
  // 2. extrusion à l'atterrissage, en onde depuis le centre, en place au demi-temps
  .to(tiles, { "--h": i => `${h(i)}px`, duration: f(20), ease: "elastic.out(1, 0.45)",
               stagger: { grid: [8, 12], from: "center", amount: f(8) } }, at(16))
  // 3. retour à plat : les blocs retombent, puis vue de face en power2.in, arrêt net sur le temps 19
  .to(tiles, { "--h": "0px", duration: f(6), ease: "power2.in" }, at(19) - f(19))
  .to("#tilt", { rotationX: 0, duration: f(13), ease: "power2.in" }, at(19) - f(13))
  .to("#plane", { rotation: 0, scale: 1, duration: f(13), ease: "power2.in" }, at(19) - f(13));

// Mot extrudé : profondeur linéaire sur 1 temps, en text-shadow empilés (pas de copies DOM)
const word = document.querySelector("#word"), ex = { d: 0 };
const depth = () => { word.style.textShadow = Array.from({ length: Math.round(ex.d) },
  (_, i) => `${i + 1}px ${i + 1}px 0 #C74727`).join(", ") || "none"; };
tl.to(ex, { d: 32, duration: at(1), ease: "none", onUpdate: depth }, at(8));
```

**After Effects**

- Tuiles en 3D Layer (Calque 3D), parentées à deux Null Objects (Objets nuls) imbriqués : « TILT » X Rotation (Rotation X) 0 → 54,7°, son enfant « SPIN » Z Rotation (Rotation Z) 0 → 45°. Un temps, Easy Ease (Lissage de vitesse), influence 75 % dans le Speed Graph (graphe de vitesse).
- Sans point de fuite : Layer › New › Camera (Calque › Nouveau › Caméra) en 200 mm ou plus ; avec perspective, 35 à 50 mm.
- Extrusion : Composition Settings › 3D Renderer (Paramètres de composition › Moteur de rendu 3D) sur Cinema 4D ou Advanced 3D selon la version ; sur chaque calque de forme ou de texte, Geometry Options › Extrusion Depth (Options de géométrie › Profondeur d'extrusion). Ressort : clés 0, 115, 95, 100 % aux images 0, 8, 14, 20.
- Onde depuis le centre : expression sur Extrusion Depth, `d = length(transform.position, thisComp.layer("CENTRE").transform.position); valueAtTime(time - d / 1500)` (nul « CENTRE » parenté au même plan).
- Lumière : Layer › New › Light (Lumière) Parallel (Parallèle) en haut à gauche, plus Ambient (Ambiante) à 30 % ; Material Options › Casts Shadows (Options de matériau › Projette des ombres) sur On. Retour à plat : première clé en Easy Ease Out (Lissage de vitesse en sortie), dernière clé linéaire, pour un arrêt net.
