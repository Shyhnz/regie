## La grille générative en onde : tuiles, Truchet, trame de points (procedural tile grid, Truchet rotation wave, halftone dot field ripple, radial stagger)

Un champ de cellules identiques (points, tuiles de Truchet, modules Bauhaus, icônes) obéit à une seule fonction : le retard d'une cellule dépend de sa distance à une source. Une règle anime 45 à 1 066 éléments et reste lisible, car l'œil suit le front. Le front traverse le cadre en 0,2 à 0,33 s. Voir aussi « La décomposition en trame, tuiles et particules » (chapitre 4) et « Du plat au volume » (chapitre 5). Vue dans 42 vidéos, dont 42 notées 4 ou 5.

![Pavage de Truchet noir sur crème : des grappes de tuiles pivotent d'un quart de tour en virant à l'orange, en anneaux autour d'une source, puis redeviennent noires](ILLUS:grilles-1)

*[Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:08.00 à 0:08.40 : une vague de quarts de tour part du temps 17 ; les tuiles en rotation virent à l'orange.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Construction par doublement | [Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:00.00 | 1 → 96 carrés, un palier par demi-temps : 4 im de croissance, 10 im de tenue ; le compteur change sur la même image (étude 60 fps) |
| Éclosion du centre en losange | [Motion designer showreel](https://prompt-motion.com/teslachartz-c58b32), 0:03.55 | 45 icônes, un anneau (distance de Manhattan) toutes les 2 im, grille pleine en 16 im ; chaque icône grandit depuis 0 |
| Onde de rotation de Truchet | [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:08.00 | tuiles de 8 % L, 90° en ≈ 10 im, orange pendant la rotation, 1 im par anneau ; une vague par temps, 23 im de vie (étude 60 fps) |
| Bande diagonale de quarts de tour | [Claude motion design reel](https://prompt-motion.com/tequilafunks-97f6c9), 0:05.03 | grille 16 × 9, bande à 12 % L par image, rotation power2.inOut en 10 im, départ temps +1 im ; mosaïque figée 6 im (étude, 30 fps) |
| Mutation de forme à chaque temps | [Claude motion designer showreel](https://prompt-motion.com/crazyalphaaa-bc7e75), 0:04.50 | anneau lime du centre aux bords en ≈ 15 im, à f270, f300, f330 : carrés → cercles → carrés → losanges |
| Retournement colonne par colonne | [Type, form, space showreel](https://prompt-motion.com/web3wesley-7bb108), 0:06.53 | échelle X 1 → 0 → 1 avec nouvelle forme, 1,3 im par colonne, 3-4 im par tuile, départ sur le temps (étude, 30 fps) |
| Mosaïque qui explose puis implose | [Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e), 0:04.75 | 16 × 9 tuiles de 120 px : 17 → 85 % du cadre en 13 im sine.inOut, quarts de tour, retour à 14 % en 10 im (étude 60 fps) |
| Compression puis explosion de trame | [Code-only motion design reel](https://prompt-motion.com/johnsavage-ai-b091c0), 0:05.70 | disque 25,6 → 20 % H en 5 im, puis anneaux de points jusqu'aux bords en 12 im, départ sur une double-croche |

![Carrés cobalt qui doublent à chaque demi-temps (1, 2, 4… 64), compteur serif à droite, jusqu'au fond cobalt plein](ILLUS:grilles-2)

*[Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:00.00 à 0:01.88 : la grille double en coupe sèche sur chaque demi-temps, puis sature en aplat sur l'entrée de la batterie.*

**Règles de construction**

1. Une fonction de la distance pilote tout : retard = k × d. Mesuré : 1 im par anneau (levabashidze, tequilafunks, crazyalphaaa), 2 im (teslachartz), 1,3 im par colonne (web3wesley). ndhabarde11 affiche « f(d,t) = ease(t − 0.3·d) ». Distance euclidienne : anneau ; Manhattan : losange. Le décalage de 80 à 150 ms du guide (guide Otom, p. 7) vaut pour quelques éléments ; dans un champ, compte 17 à 45 ms par anneau.
2. Une vague par temps : le départ est calé, le front reste continu. levabashidze lance ses vagues aux temps 17, 18 et 19 (étude) ; ghinaiya-nirmal, 4 ondes sur 4 temps ; sudo-kiran, un geste de grille de 30 im par temps (étude). Change l'origine, la forme ou la couleur à chaque vague (codestackr : 3 origines), sinon l'accent se répète.
3. Geste de cellule court, signalé par la couleur et la taille. Quart de tour en 9 à 10 im, power2.inOut (tequilafunks, étude). Teinte d'accent pendant la rotation puis retour (orange chez levabashidze, rouge chez roundtablespace). Front grossi ×2 à ×3 (codestackr ×2,5 ; safarkhanshuvo ×3).
4. Module : cellules de 5 à 12,5 % de la largeur (fionntobin 5 %, levabashidze 8 %, web3wesley 9 %, zaqailo 12,5 %). 16 × 9 cellules (≈ 120 px en 1080p) revient chez lukasersil, itsuki-dev et tequilafunks. Trame de fond : points de 0,5 à 1 % H. Palette de 3 à 5 aplats.
5. Respire après la vague : 6 à 7 im figées (tequilafunks 6 im ; web3wesley 7 im, un demi-temps). Une résolution qui double se cale sur la double-croche (fionntobin : trame de plus en plus fine à f564, 570, 577, 584).
6. Donne-lui un rôle : fond, motif signature (le point de [Flowdrive motion showreel](https://prompt-motion.com/manuelogomigo-f33ca9)) ou construction liée au message (compteur de fionntobin). Contre-exemples : lignes « Unknown Pleasures » sans pulsation (johnsavage-ai, shinskinakamoto : clichés), moiré plein cadre gratuit (safarkhanshuvo). Interpolation rouge ↔ bleu en RVB : bordeaux boueux ([Motion designer showreel](https://prompt-motion.com/teslachartz-c58b32)) ; coupe net.

**Verdict** : à reprendre, comme fond rythmique ou motif signature, avec une vague par temps qui change à chaque fois. Le retournement colonne par colonne est cousin de tes stores vénitiens ; sans pulsation ni rôle, c'est un économiseur d'écran.

**Quand l'utiliser** : en showreel éditorial suisse, en fond de chapitre de typo cinétique 1600, en explainer de données (grille qui double = compteur visuel), en promo SaaS (champ d'icônes de l'appli). Fonctions : accroche (construction), fond qui bat, transition (explosion puis implosion), preuve chiffrée. Module en direction artistique, cellule et palette au système de design, vagues à la construction. À éviter derrière un texte à lire, sans musique pulsée, et plus d'une mesure plein cadre.

**HyperFrames (GSAP)**

```js
// Pavage de Truchet 16 × 9 : une vague de quarts de tour par temps, 1 im de retard par anneau
const FPS = 60, BEAT = 60 / 128;                   // 128 BPM : 1 temps = 28,125 im
const at = b => b * BEAT, F = n => n / FPS;
const COLS = 16, INK = "#151417", ACC = "#F0552A";
const tiles = gsap.utils.toArray(".tile");         // 144 tuiles : SVG d'arcs en currentColor
// orientation de départ au hasard, mais à graine fixe : même image à chaque rendu
let seed = 7;
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const base = tiles.map(() => 90 * Math.floor(rnd() * 4));
tl.set(tiles, { rotation: i => base[i], color: INK, transformOrigin: "50% 50%" }, 0);
// distance euclidienne = front en anneau (Manhattan : Math.abs(dx) + Math.abs(dy) = losange)
const dist = (i, cx, cy) => Math.hypot(i % COLS - cx, Math.floor(i / COLS) - cy);
const SOURCES = [[7.5, 4], [0, 0], [15, 8]];       // une origine différente par vague
SOURCES.forEach(([cx, cy], w) => {
  const t0 = at(17 + w);                           // départ sur le temps
  const delay = i => dist(i, cx, cy) * F(1);       // retard = 1 im par anneau
  tl.to(tiles, { rotation: i => base[i] + 90 * (w + 1), duration: F(10),
                 ease: "power2.inOut", stagger: delay }, t0)
    .to(tiles, { color: ACC, duration: F(3), ease: "none", stagger: delay }, t0)
    .to(tiles, { color: INK, duration: F(6), ease: "none", stagger: delay }, t0 + F(9));
});
// dernière tuile posée ≈ 27 im après le départ : mosaïque figée jusqu'au temps suivant
```

**After Effects**

- Une tuile de 120 × 120 px (deux arcs en Shape Layer, calque de forme, Stroke ou Contour de 30 % de la tuile), passée en Layer › Pre-compose (Calque › Précomposer). Edit › Duplicate (Édition › Dupliquer) 143 fois, puis Position par expression : `c = (index-1) % 16; r = Math.floor((index-1) / 16); [60 + c*120, 60 + r*120]`.
- Un Composition Marker (marqueur de composition) par temps, tous les 28,125 im ; chaque vague part d'un marqueur.
- Rotation par expression : `f = thisComp.frameDuration; c = (index-1) % 16; r = Math.floor((index-1) / 16); d = Math.sqrt((c-7.5)*(c-7.5) + (r-4)*(r-4)); seedRandom(index, true); b = Math.floor(random(4)) * 90; b + ease(time - thisComp.marker.key(1).time - d*f, 0, 10*f, 0, 90)`.
- Teinte pendant la rotation : Effect › Generate › Fill (Générer › Remplissage) sur la tuile, couleur d'accent, Opacity (Opacité) à 100 % seulement pendant les 10 im de la rotation (même calcul de retard). Activer Motion Blur (Flou de mouvement).
- Retournement de colonnes : Effect › Transition › Card Wipe (Transition › Transition carte), 8 colonnes, Flip Axis (Axe de retournement) en Y, Transition Completion (Fin de transition) de 0 à 100 % en 9 im, départ sur le temps.
