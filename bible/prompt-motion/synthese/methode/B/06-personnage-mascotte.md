## Guide du film de personnage et de mascotte (character film, brand mascot, squash and stretch)

Un personnage tiré de la marque agit sur l'écran : chaque saut presse un bouton, écrit une lettre, pose une clé, dans une promo SaaS au ton complice. Il tire ses décisions de *L'illustration narrative et les personnages* et *Le pixel art et le rétro numérique* (chapitre 1), de la mascotte de F (expérience 2) et du film de P.

**Quand le choisir, quand l'éviter** : quand une forme de la marque peut devenir un corps (glyphe du logo, point, curseur) et que chacun de ses gestes fabrique du contenu (chapitre 8). À éviter sur un ton grave, ou quand le personnage n'a rien à faire dans le plan.

**Vidéos modèles**

| Vidéo | Ce qu'on lui prend | Mesure clé |
| --- | --- | --- |
| [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a) (5/5) | la gravité calée sur le temps | étude 60 fps de levabashidze : chute power1.in 13 im, montée sine.out 14 im, écrasé 1,6:1 une image |
| [Motion designer showreel](https://prompt-motion.com/kangaroohere-b10f8d) | la mascotte qui écrit le logo | 4 sauts de 24 im, une lettre par atterrissage, 39 % de dépassement (chapitre 8) ; défaut : aucun écrasement |
| [Animated agent session story](https://prompt-motion.com/jake11moran-a269c4) | le jeu par les yeux, la partition | 12 états d'yeux échangés en 1 image ; 9 gestes sur 13 à ±1 im d'une attaque (chapitre 8) |

**Brief (phase 1)** : 120 BPM (1 temps = 30 im), comme F et P ; 12 s, soit 24 temps (P). Les BEATS s'écrivent en secondes ; chaque saut dit ce qu'il change (P). Un saut complet de F prend 2 temps ; un saut par temps (P) impose accroupi et vol en 30 im.

```text
SPEC 1920×1080 · 60 fps · 6 mesures à 120 BPM = 12 s = 720 im · son composé depuis timeline.js · boucle : option
MATIÈRE  forme source du personnage (SVG du logo, glyphe) · proportions cotées · écrans réels de l'app · textes définitifs
INACCEPTABLE  proportions qui changent · un saut qui ne change rien · un atterrissage sans écrasement · personnage < 10 % H · sortie du cadre à l'apex
```

**Référence (phase 2)** : un seul événement, **un saut** (B) : images de l'accroupi, du décollage, de l'apex, du contact, du repos. On note le retard des membres et l'image où le changement devient lisible.

**STYLE.md prérempli (phase 3)** : valeurs de F, à remplacer par celles de la marque.

```text
JETONS
fond #F4F2EE · corps #D97757 = la marque, lu juste sur l'image · encre #0F0F0F · accent #FF6A2B = ce que le saut change
étiquettes : mono #8E8A83 → #0F0F0F sur leur image ; 28 px chez F, relevées à ≥ 3 % H (Bible)
courbes : enter expo-out 0.16,1,0.3,1 · move quart-inOut · exit expo-in · pop back-out 0.34,1.56,0.64,1 sur ce qui naît
ressorts : retour du corps ζ 0,55 · suite des bras ζ 0,22 à 2,2 Hz · pièces qui naissent ζ 0,34 (levabashidze) · texte ζ 1
PRINCIPES (F, 60 fps)
anticipation : accroupi 11 im à 1,2 × 0,75 · décollage 0,85 × 1,28 · vol 25 im · contact 1,25 × 0,7, tenu ≥ 2 im (chapitre 8)
chevauchement : bras 4 im, jambes 6 im de retard · arcs : trajet pointillé · salto : accroupi profond 18 im
RÈGLES PAR CLASSE
mascotte : joueuse, 9 à 25 % H quand elle joue (chapitre 8) ; contact sur l'image du temps, ±1 im (chapitre 9)
micro-interface : appui 1 → 0,92 → 1 en 0,3 s (B : 9 im à 30 fps) · caméra : à hauteur du personnage (P) · titres : aucun dépassement
variante pixel : une seule grille, pas entiers ; flash 1 im au départ, 2 im à l'impact (chapitre 1)
HIÉRARCHIE
pendant le saut, le héros est le personnage ; après le contact, ce qu'il a changé possède l'écran (B)
secondaires : poussière, onde du sol, 100-200 ms après · ambiant : clignement, < 5 % (F)
INTERDITS → À LA PLACE
saut qui ne change rien → couper le saut, ou lui donner un bouton (P)
marche à deux poses qui patine → trois poses sur trois temps (chapitre 8)
pop d'apparition à chaque scène → une entrée par un bord en 3 à 5 im, une fois (chapitre 8)
yeux interpolés → un dessin par état, échangé en 1 image
étoiles et confettis autour → un signe hors du corps sur l'image du contact, 3 à 10 im
lumières reflétées dans le verre (Blender) → cachées des rayons brillants (P)
GARDE-FOUS
proportions fixes (F : corps 14 × 10, bras 3 × 2, jambes 2 × 3, yeux 2 × 3, voxels de 0,1) · une amplitude d'écrasement par film · dans le cadre à chaque apex
```

**Timeline type (phase 4)** : 6 mesures à 120 BPM, une mesure = 120 im ; les BEATS de P portés à 60 fps.

| Mesure (images) | Fonction | Plan de la bibliothèque C | Couture vers la suivante |
| --- | --- | --- | --- |
| 1 (f0-f119) | accroche : le personnage, plat, prisonnier de l'écran, frappe deux fois | C01 Accroche de la première seconde, C02 Le problème montré | il se décolle, passe en volume sur le 1er temps |
| 2 (f120-f239) | il saute sur les outils ; chaque appui ajoute une pièce | C13 Le saut du personnage, C05 Le composant qui change d'état | la pièce frappée vole dans la compo (C10 La couture par objet relais) |
| 3 (f240-f359) | la fonction clé, prise au pied | C04 La démo au curseur (le personnage est le curseur) | atterrissage sur la ligne de temps |
| 4 (f360-f479) | quatre clés posées, la compo saute à chaque pose | C13, C06 La preuve chiffrée | il monte sur la tête de lecture |
| 5 (f480-f599) | la compo joue le résultat entier | C03 La révélation du produit, C09 La tenue vivante | appui sur Lecture, flash |
| 6 (f600-f719) | l'interface tombe, il salue à côté du résultat | C11 La signature finale, ou C12 La boucle parfaite | fin sur l'accord tenu |

**Coutures types**
- **Le saut hors cadre, flash sur le temps** : monte de 60 % H en 14 im, flash à l'image suivante (*Le poids du personnage*, chapitre 8).
- **Le personnage relais** : il pousse l'objet dans le plan suivant (P).
- **Le personnage devient le point final** : chute étirée × 1,5, écrasée × 2 sur la ligne de base (chapitre 8).
- **Celle qu'on n'utilise pas** : l'apparition en pop sans geste.

**Bloc BRAND à échanger** (P)

```text
HERO    <le personnage> · forme source <SVG> · proportions <cotes>
APP     <l'interface réelle> : chaque panneau nommé, et son état
RESULT  <ce que le personnage construit dans l'app>
SET     <fond hex> · moteur : HTML + GSAP, ou Blender pour le volume
```

**Portes spécifiques**
- **Porte 2** : chaque ligne des BEATS dit ce que le saut change ; une ligne vide est coupée (P).
- **Porte 3** : planche de la compo, puis 18 images à demi-résolution, puis rendu complet ; une relance chiffrée après chaque preuve, 3 tours chez P. Étiquettes et compteur allumés : un geste en retard se voit (F).
- **Porte 4** : 8 images autour de chaque contact ; audit de la scène contre `timeline.js` (F : 71 contrôles, 6 échecs).
- **Porte 6** : sonie par demi-seconde : le drop tombe où l'image explose (P).

**Pièges du style**
1. **L'atterrissage sans écrasement** ([Motion designer showreel](https://prompt-motion.com/kangaroohere-b10f8d)). Contrôle : l'image du temps montre 1,25 × 0,7.
2. **Le personnage raide** : sans anticipation ni écrasement, 6 vidéos sur 11 plafonnent à 4 (chapitre 1). Contrôle : pelure d'oignon, serrée près des clés (F).
3. **La sortie de cadre** : apex abaissé de 0,55 à 0,36 m, dernier atterrissage ramené de x 862 à 800 (P). Contrôle : l'apex et la dernière image.

**HyperFrames (GSAP)** : trois sauts, trois clés, d'après F.

```js
const FPS = 60, BPM = 120, BEAT = 60 / BPM;               // 1 temps = 30 im
const at = (bar, beat = 0) => ((bar - 1) * 4 + beat) * BEAT;
const F = n => n / FPS;
const spring = (t, z, f) => { const w = 2 * Math.PI * f, wd = w * Math.sqrt(1 - z * z);
  return 1 - Math.exp(-z * w * t) * (Math.cos(wd * t) + (z * w / wd) * Math.sin(wd * t)); };
const settle = (dur, z, f) => p => spring(p * dur, z, f) / spring(dur, z, f);
const CROUCH = F(11), AIR = F(25), LAG = { arms: F(4), legs: F(6) }; // principes chiffrés (F)
const PAD_X = window.TIMELINE.padX;   // ancres en pixels d'interface, lues dans timeline.js (P)
const tl = gsap.timeline({ paused: true });
tl.set("#hero", { x: PAD_X[0], y: 0, scaleX: 1, scaleY: 1, transformOrigin: "50% 100%" }, 0);
// un saut = une clé : contact sur l'image du temps, la compo change (P)
function hop(i, land) {
  const off = land - AIR, crouch = off - CROUCH;
  tl.to("#hero", { scaleX: 1.2, scaleY: 0.75, duration: CROUCH, ease: "power2.in" }, crouch)
    .to("#hero", { scaleX: 0.85, scaleY: 1.28, duration: F(3), ease: "power2.out" }, off)
    .to("#hero", { scaleX: 1, scaleY: 1, duration: AIR / 2, ease: "sine.inOut" }, off + F(3))
    .to("#hero", { x: PAD_X[i], duration: AIR, ease: "none" }, off)     // x linéaire
    .to("#hero", { y: "-15vh", duration: AIR / 2, ease: "power1.out" }, off) // apex ≈ 15 % H
    .to("#hero", { y: 0, duration: AIR / 2, ease: "power1.in" }, off + AIR / 2)
    .set("#hero", { scaleX: 1.25, scaleY: 0.7 }, land)                 // écrasé sur le temps
    // tenu 2 im, puis ressort ζ 0,55, posé avant l'accroupi suivant
    .to("#hero", { scaleX: 1, scaleY: 1, duration: F(22), ease: settle(F(22), 0.55, 3) }, land + F(2))
    // chevauchement : bras +4 im, suite ζ 0,22 à 2,2 Hz (même ligne pour #legs à LAG.legs)
    .fromTo("#arms", { scaleY: 0.7 }, { scaleY: 1, duration: 2 * BEAT, ease: settle(2 * BEAT, 0.22, 2.2),
      immediateRender: false }, land + LAG.arms)
    // ce qu'il change : la pièce naît, l'étiquette s'allume
    .fromTo(`#piece-${i}`, { scale: 0 }, { scale: 1, duration: 2 * BEAT,
      ease: settle(2 * BEAT, 0.34, 2.35), immediateRender: false }, land)
    .set(`#label-${i}`, { color: "#0F0F0F" }, land);
}
// un saut tous les 2 temps : accroupi 11 + vol 25 + réception 24 = 60 im
[at(2, 2), at(3), at(3, 2)].forEach((land, k) => hop(k + 1, land));
```

**À cocher**
- [ ] Personnage tiré d'une forme de la marque ; proportions fixes.
- [ ] Chaque saut change quelque chose ; contact sur l'image du temps.
- [ ] Accroupi, vol, contact et retards des membres chiffrés ; ≥ 10 % H, dans le cadre à chaque apex.
- [ ] Planche, 18 images, rendu complet ; chaque relance au journal.
