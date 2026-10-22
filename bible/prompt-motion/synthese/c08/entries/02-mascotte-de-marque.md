## La mascotte tirée de la marque, qui agit sur l'écran (brand mascot, logo character, glyph-to-character, mascot interacting with UI)

Le personnage est fabriqué avec une forme que la marque possède déjà : le glyphe du logo, le point d'un mot, le curseur, ce que sort le produit. Il agit sur le contenu : chaque saut écrit une lettre, il se pose sur une carte, se cache dans le curseur. Il incarne le produit et relie les plans. Vue dans 15 vidéos, dont 11 notées 4 ou 5.

![Kangourou qui saute de gauche à droite ; à chaque atterrissage une lettre de « Roo's » jaillit sous ses pattes, anneau bleu au sol](ILLUS:mascotte-de-marque-1)

*[Motion designer showreel](https://prompt-motion.com/kangaroohere-b10f8d), 0:00.33 à 0:01.83 : quatre sauts de 0,4 s ; chaque atterrissage fait jaillir une lettre du logo et ouvre un anneau au sol.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| La mascotte écrit le logo | [Motion designer showreel](https://prompt-motion.com/kangaroohere-b10f8d), 0:00.25 | 4 sauts de 24 im (60 fps) ; à chaque atterrissage (f32, f56, f80, f104), une lettre jaillit avec 39 % de dépassement |
| Mascotte en forme de produit | [Shop chatbot mascot promo](https://prompt-motion.com/anas0ra-e57aea), 0:00.00 | chatbot en bulle de dialogue nacrée, reprise du glyphe du logo ; ≈ 15 % de la largeur en plan large, 40 % en plan moyen |
| Le point du titre devient un œil | [Claude motion designer showreel](https://prompt-motion.com/crazyalphaaa-bc7e75), 0:13.13 | pupille ≈ 20 % du diamètre ; au flash, le point s'écrase en ellipse 1,6:1 puis redevient rond en 6 im |
| Camouflage dans le curseur | [Animated short about a bug](https://prompt-motion.com/kamstudiolabs-c9bb28), 0:39.60 | la luciole se tourne de profil en 12 im, devient un bâtonnet de la taille du curseur, s'éteint 0,4 s et se rallume avec lui |
| Posée sur le coin d'une carte | [Mascot referral program promo](https://prompt-motion.com/paulo-kombucha-96431c), 0:09.20 | pingouin né à 30 % d'échelle sur le coin haut droit, grandi en 4 im en débordant de la carte, comme un autocollant 3D |
| Le logo tombe dans le décor | [SaaS launch video](https://prompt-motion.com/aschapmann-131210), 0:10.00 | navire-logo qui chute de y 15 % à 60 % en 5 im (ease-out), posé 1 im après la grosse caisse, puis tangue |
| La balle d'ouverture devient le point final | [Kinetic type and particle showreel](https://prompt-motion.com/m1n9-k7-ff9ab9), 0:13.25 | chute en gravité, étirée ×1,5, écrasée ×2 sur la ligne de base à f812 : c'est le point de « CLAUDE. » ; anneau de l'ouverture rejoué |
| Le logo marche | [Step race app promo](https://prompt-motion.com/marklaunches-3b9492), 0:38.40 | bonhomme néon ≈ 9 % de la hauteur, un pas toutes les 15,5-16 im (≈ 115 pas/min), seul à l'écran avant tout texte |

![Luciole qui se pose près du curseur texte, devient un bâtonnet lumineux, s'éteint et se rallume avec lui](ILLUS:mascotte-de-marque-2)

*[Animated short about a bug](https://prompt-motion.com/kamstudiolabs-c9bb28), 0:40.00 à 0:41.17 : le bug prend de profil la forme du curseur, puis clignote avec lui.*

**Règles de construction**

1. Partir d'une forme que la marque possède : glyphe du logo (anas0ra, aschapmann), point final (m1n9-k7, crazyalphaaa), curseur (kamstudiolabs), sorties du produit (paulo-kombucha : six mascottes, six créations de l'app). Demander le logo en SVG, indispensable pour le tracer ou le découper (guide Otom, p. 12).
2. Chaque geste fabrique ou désigne du contenu : 4 sauts, 4 lettres en 1,6 s ; puis il saute sur place et les cartes avancent d'un cran par temps (kangaroohere). Contre-exemples : fantôme à 6 % de la hauteur qui surgit 3 fois en pop, sans jeu ([Muse connector tracker promo](https://prompt-motion.com/elliot-garreffa-f334bc)) ; créature posée en 1 im sous chaque étape ([Whiteboard skill tutorial](https://prompt-motion.com/lemomo-ai-0d9cff)).
3. Taille : 9 à 25 % de la hauteur quand il joue (logo qui marche 9 %, kangourou 12-17 %, pingouin 20 %, axolotl 25 %). À 3-6 %, il ne sert plus que de signature.
4. Entrée par un bord ou un coin en 3 à 5 im : axolotl 3 im, pingouin 4 im depuis 30 % d'échelle, renard 5 im en ease-out (paulo-kombucha). Calage, modèles animés sur la musique : navire posé 1 im après la grosse caisse (aschapmann) ; lettre lancée à l'image de l'atterrissage et de sa note (kangaroohere).
5. Boucler avec lui : la mascotte ouvre et signe. Même anneau au sol à l'ouverture et à 18,3 s (kangaroohere) ; la balle du premier plan devient le point du nom (m1n9-k7).
6. Au repos, une boucle de vie : clignement, contour qui frémit ([Distilbook motion showreel](https://prompt-motion.com/ajith-io-ea7f2d)), satellite qui tourne (crazyalphaaa). Sinon, elle redevient un logo collé.

**Verdict** : à reprendre. La version la plus forte transforme un signe de ta typo en personnage (le point qui devient un œil) : c'est ton match cut « le point d'un mot devient… », avec un caractère. Ne la ressors pas en pop à chaque scène : ce serait le même accent répété partout.

**Quand l'utiliser** : en promo SaaS / interface (bulle, curseur, icône d'app qui s'anime), en showreel (point final vivant) et en explainer narratif. Fonctions : accroche (elle écrit le logo), transition (fil rouge d'un plan à l'autre), signature (elle se pose à côté du nom). La forme source se choisit en direction artistique, son rôle par plan au découpage. À éviter si aucune forme de la marque ne s'y prête, sur un ton grave, ou quand elle n'a rien à faire dans le plan.

**HyperFrames (GSAP)**

```js
// Mascotte qui écrit le logo : un saut de 24 im par lettre, la lettre jaillit sous ses pattes
// Mesurer après document.fonts.ready, scène visible, composition 1920 × 1080 à l'échelle 1
const FPS = 60, BEAT = 60 / 120;                  // 120 BPM
const at = b => b * BEAT, F = n => n / FPS;
const HOP = F(24);                                // 0,4 s par saut (ou HOP = BEAT : une lettre par temps)
const letters = gsap.utils.toArray("#logo .ltr"); // R, o, o, 's : un span par lettre
const base = document.querySelector("#logo").getBoundingClientRect();
const T0 = at(1);                                 // premier départ sur le temps 1
tl.set(letters, { scaleY: 0, transformOrigin: "50% 100%", autoAlpha: 1 }, 0)
  .set("#mascot", { x: base.left - 240, y: base.bottom, transformOrigin: "50% 100%" }, 0)
  .set(".ring", { autoAlpha: 0 }, 0);
letters.forEach((el, i) => {
  const r = el.getBoundingClientRect();
  const go = T0 + i * HOP, land = go + HOP;       // un atterrissage = une lettre
  tl.to("#mascot", { x: r.left + r.width / 2, duration: HOP, ease: "none" }, go)
    .to("#mascot", { y: base.bottom - 0.2 * 1080, duration: HOP / 2, ease: "sine.out" }, go)
    .to("#mascot", { y: base.bottom, duration: HOP / 2, ease: "power1.in" }, go + HOP / 2)
    .set("#mascot", { scaleY: 0.7, scaleX: 1.2 }, land)            // écrasé au contact
    .to("#mascot", { scaleY: 1, scaleX: 1, duration: F(8), ease: "power2.out" }, land + F(1))
    // la lettre jaillit de la ligne de base : 0 → 1,39 → 0,93 → 1 en 15 im (mesuré)
    .to(el, { keyframes: { scaleY: [0, 1.39, 0.93, 1], easeEach: "sine.out" },
              duration: F(15), ease: "none" }, land)
    // anneau au sol qui s'élargit et s'efface en 18 im
    .set(`#ring${i}`, { x: r.left + r.width / 2, y: base.bottom, scale: 0.3, autoAlpha: 1 }, land)
    .to(`#ring${i}`, { scale: 3, autoAlpha: 0, duration: F(18), ease: "power2.out" }, land);
});
```

**After Effects**

- Logo importé depuis Illustrator, puis Layer › Create › Create Shapes from Vector Layer (Calque › Créer › Créer des formes à partir d'un calque vectoriel). Une lettre par calque, Anchor Point (Point d'ancrage) sur la ligne de base.
- Les 4 poses (accroupie, détendue, en vol, pattes tendues) dans une précomposition, une par image. Layer › Time › Enable Time Remapping (Calque › Temps › Activer le remappage temporel), en Hold keyframes (images clés maintenues) pour choisir la pose.
- Saut : Position avec une trajectoire courbe, 24 im par saut. À l'image d'atterrissage, Scale (Échelle) de la lettre en Y : 0 → 139 → 93 → 100 % sur 15 im (clés à 0, 5, 10 et 15 im).
- Anneau : Shape Layer (calque de forme) Ellipse en Stroke (Contour) seul, Scale 30 → 300 % et Opacity (Opacité) 100 → 0 % en 18 im. Arc pointillé : tracé à la Pen Tool (outil Plume), Stroke › Dashes (Contour › Tirets), Add › Trim Paths (Ajouter › Réduire les tracés) avec End animé pendant le saut.
- Camouflage : Alt-clic sur le chronomètre de l'Opacity de la mascotte, Pick Whip (sélecteur d'expression) vers l'Opacity du curseur : ils clignotent ensemble.
