## Le curseur acteur (cursor-driven demo, click ripple, drag and drop, acting cursor)

Un pointeur dessiné traverse l'interface en courbe, freine, clique ou glisse-dépose, et chaque geste déclenche la suite : nouvel état, zoom, coupe, parfois la musique. Il donne une cause visible à chaque mouvement et guide l'œil. Il sonne faux en ligne droite, ou s'il attend plus d'une demi-seconde. Vue dans 52 vidéos, dont 37 notées 4 ou 5.

![Six images : un curseur entre en bas à droite, rejoint la fin de la pastille « dub.sh/launch », clique ; le fond s'inonde d'orange puis deux anneaux et des étincelles partent du point de clic](ILLUS:curseur-acteur-1)

*[Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:01.77 à 0:02.17 : approche de 12 im, clic, halo orange en 1 im, anneaux ; le drop suit 4 im après.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Approche puis clic qui lance le drop | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:01.78 | étude 60 fps : de (84 %, 90 %) à (66 %, 54 %) du cadre en 12 im, power2.out en x, power3.out en y ; drop 4 im après le clic |
| Curseur qui joue | [Frame by Frame launch video](https://prompt-motion.com/notdwd-7de38a), 0:00.90 | freine, pivote en ≈ 8 im en plongeant, grossit ×1,55 au survol, rétrécit de 15 % au clic |
| Onde de clic | [AgentHud project motion video](https://prompt-motion.com/jazzen-chen-4542ae), 0:19.15 | anneau de 1 px, rayon 3 → 25 % de la largeur en 9 im (ease-out), 2e anneau 6 im après ; clic 3 im avant la barre |
| Remplissage radial du bouton | [Motion designer portrait showreel](https://prompt-motion.com/ndhabarde11-f155b4), 0:12.40 | trajet courbe de 24 im, arrêt 8 im, clic 1-2 im avant le temps ; un disque orange remplit la pilule en ≈ 8 im |
| Glisser-déposer lancé | [Flowdrive motion showreel](https://prompt-motion.com/manuelogomigo-f33ca9), 0:01.21 | étude 60 fps : fichier lancé de 31,7 à 64 % de la largeur en 29 im (power3.inOut), en arc, incliné −15° |
| Réordonner une liste | [sweetRegret app update reel](https://prompt-motion.com/thilina-a-891c09), 0:17.60 | ligne soulevée (+3 % d'échelle, −2°, ombre), disque tactile ; dépôt sur le temps (f1110), puis sur le demi-temps (f1157) |
| Manipulation directe d'une valeur | [Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86), 0:03.03 | étude 60 fps : tête de lecture 38 → 71 % de la largeur en 28 im (power2.inOut) ; au-delà du max, la pilule s'allonge de 8 % |
| Curseur nommé qui motive la caméra | [Design portfolio video reel](https://prompt-motion.com/kikelopezdesign-7cc9e8), 0:03.37 | flèche et pilule « Kike », ease-out de 22 im (3,5 → 0,1 % du cadre par image), arrêt 8 im, zoom 8 im après le clic |

![Six images : le curseur clique « Allow once » ; un anneau vert fin s'ouvre autour du bouton, un second naît dedans, l'île se replie et les deux anneaux débordent du cadre](ILLUS:curseur-acteur-2)

*[AgentHud project motion video](https://prompt-motion.com/jazzen-chen-4542ae), 0:19.17 à 0:19.67 : onde double au clic ; l'île se replie pendant que les anneaux sortent du cadre.*

**Règles de construction**

1. Trajectoire : entrée par le bas, le plus souvent à droite (steventey, kikelopez, ndhabarde, hqmank). Deux courbes différentes en x et en y la courbent (steventey). Trajet de 0,2 à 0,7 s en ease-out. Contre-exemple : trajet quasi droit d'1 s (sachaarbonel, #17).
2. Arrêt avant le clic : 0,13 s (ndhabarde, 60 fps) à 0,27 s (kikelopez, 30 fps). Le guide Otom propose 300 ms (guide Otom, p. 11) : plafond d'une démo calme ; la Bible retient les mesures. Contre-exemple : 1,5 s d'attente (blushpetal795).
3. Clic : curseur −15 à −20 % pendant 2 à 4 im (notdwd, kikelopez), bouton −8 % en 1 im (steventey). Puis une onde de 9 à 20 im (jazzen-chen, demonugc, hqmank). Sans onde, l'état change à l'image du clic (visheshbaghell). Le survol s'annonce 6 im avant l'atterrissage (notdwd-c2037d).
4. Calage, modèles animés sur la musique : le clic tombe 1 à 4 im avant le temps fort. Steventey 4 im avant le drop, jazzen-chen 3 im avant la barre, ndhabarde 1-2 im, francoxavier33 2 im avant la grosse caisse. Le dépôt d'un glisser tombe sur le temps (thilina). Contre-exemple : curseur d'agent hors grille de +6 à +12 im (anthonyriera).
5. Taille : 2,3 à 3 % de la hauteur sur une interface en plan large (en-ra, kikelopez, twoclipping) ; 7 % quand l'interface est minuscule (ai-baymax). À 1-1,5 %, il ne guide plus l'œil (fractadev, buildfastwithai).
6. Chaque clic déclenche la suite : la pile se dépile au clic sur « return » (emollick-8661a8, 5/5), zoom 8 im après le clic (kikelopez). Un curseur qui erre est un décor : deux curseurs nommés 3,4 s sans action (sachaarbonel, #18).

Voir aussi « Le changement d'état : bouton, toggle, toast, tampon », « La poussée vers le sujet : lente, calibrée ou en punch sur le temps » (zoom après le clic), « Le bruitage à l'image près et la sonification » (son du clic) et « La mascotte tirée de la marque, qui agit sur l'écran ».

**Verdict** : à reprendre. C'est ta transition motivée en version interface : le clic cause le plan suivant. Le curseur qui erre sans cliquer est la flèche qui n'apporte rien : à couper.

**Quand l'utiliser** : en promo SaaS / interface pour la démonstration et l'appel à l'action final (bouton cliqué). En showreel, curseur nommé façon Figma ; en explainer, curseur personnage. Il sert la démonstration et la transition (le clic déclenche la coupe). On choisit au découpage quels clics déclenchent quelles coupes. À éviter en typo cinétique pure sans interface, et quand son attente crée un creux de plus d'une demi-seconde.

**HyperFrames (GSAP)**

```js
// Curseur acteur : approche courbe, arrêt de 8 im, clic 2 im avant le temps, onde double, nouvel état
const FPS = 60, BEAT = 60 / 120;                 // 120 BPM, cadre 1920 × 1080
const at = b => b * BEAT, F = n => n / FPS;
const W = 1920, H = 1080;
// mesurer après document.fonts.ready ; #cursor et .ring cachés en CSS
const r = document.querySelector("#cta").getBoundingClientRect();
const tx = r.left + r.width * 0.62, ty = r.top + r.height * 0.55;  // pointe dans le bouton
const CLICK = at(8) - F(2);                      // 2 im avant le 1er temps de la mesure 3
const LAND = CLICK - F(8), GO = LAND - F(20);    // trajet 20 im, arrêt 8 im
tl.set("#cursor", { x: 0.86 * W, y: 0.92 * H, autoAlpha: 1, transformOrigin: "0% 0%" }, GO)
  .set(".ring", { x: tx, y: ty, xPercent: -50, yPercent: -50, width: 0.06 * W, height: 0.06 * W }, 0)
  // courbes différentes en x et en y : trajectoire courbe
  .to("#cursor", { x: tx, duration: F(20), ease: "power2.out" }, GO)
  .to("#cursor", { y: ty, duration: F(20), ease: "power3.out" }, GO)
  // survol : le bouton s'éclaire 6 im avant l'atterrissage
  .to("#cta", { backgroundColor: "#2A2A2E", duration: F(6), ease: "power1.out" }, LAND - F(6))
  // clic : curseur −15 % aller-retour en 4 im ; bouton −8 % en 1 im, retour en 6 im
  .to("#cursor", { scale: 0.85, duration: F(2), ease: "power2.out", yoyo: true, repeat: 1 }, CLICK)
  .to("#cta", { scale: 0.92, duration: F(1), ease: "none" }, CLICK)
  .to("#cta", { scale: 1, duration: F(6), ease: "power2.out" }, CLICK + F(1))
  // onde : diamètre 6 → 50 % de la largeur en 9 im, 2e anneau 6 im après
  .to(".ring", { autoAlpha: 1, duration: F(1), stagger: F(6) }, CLICK)
  .to(".ring", { width: 0.5 * W, height: 0.5 * W, duration: F(9), ease: "power2.out", stagger: F(6) }, CLICK + F(1))
  .to(".ring", { width: 0.7 * W, height: 0.7 * W, autoAlpha: 0, duration: F(40), ease: "power1.out", stagger: F(6) }, CLICK + F(10))
  // nouvel état à l'image qui suit le clic
  .set("#cta .idle", { autoAlpha: 0 }, CLICK + F(1))
  .set("#cta .done", { autoAlpha: 1 }, CLICK + F(1))
  .to("#cta", { backgroundColor: "#1DAA58", duration: F(4), ease: "power1.out" }, CLICK + F(1));
```

**After Effects**

- Flèche vectorielle, Anchor Point (Point d'ancrage) sur la pointe. Clic droit sur Position › Separate Dimensions (Séparer les dimensions) ; 2 clés à 20 im d'écart. Graph Editor (éditeur de graphique) : influence d'arrivée 60 % en X, 85 % en Y, et la trajectoire se courbe.
- Arrêt de 8 im, puis clic 2 im avant le Composition Marker (repère de composition) du temps. Scale (Échelle) du curseur 100 → 85 → 100 % en 4 im ; bouton 100 → 92 % en 1 im, retour en 6 im.
- Onde : Shape Layer (calque de forme) Ellipse en Stroke (Contour) seul de 1 à 2 px. Animer Ellipse Path › Size (Taille), pas Scale, pour garder l'épaisseur du trait : 6 → 50 % de la largeur en 9 im, puis 70 % et Opacity (Opacité) → 0 % en 40 im. Edit › Duplicate (Édition › Dupliquer), décalé de 6 im.
- Glisser-déposer : le fichier devient enfant du curseur avec le pick whip de Parent & Link (Parent et lien). Rotation 0 → −15° à la prise, 0° au dépôt sur le repère du temps. Motion Blur (Flou de mouvement) activé.
