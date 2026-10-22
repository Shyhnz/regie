## La mise en page qui se recompose (layout reflow, FLIP, make-room shift, pre-laid-out reveal)

Les éléments déjà à l'écran glissent et changent d'échelle ensemble pour faire de la place au suivant. Le titre héros rétrécit en en-tête, la grille devient bento, le groupe se décale avant l'arrivée d'une carte. À l'inverse, la place finale peut être réservée d'avance pour que rien ne bouge pendant la révélation. La mise en page devient le mouvement : un seul geste de 11 à 20 images remplace une coupe. Vue dans 19 vidéos, dont 10 notées 4 ou 5.

![Grille 3 × 3 de photos : la vignette de l'arche grandit en 2 × 2 en haut à droite pendant que les autres glissent et rétrécissent](ILLUS:recomposition-1)

*[Photo print app launch film](https://prompt-motion.com/twoclipping-221cab), 0:04.97 à 0:05.33 : toutes les vignettes bougent en même temps, avec flou de mouvement, et le bento se pose sur le temps.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Grille → bento | [Photo print app launch film](https://prompt-motion.com/twoclipping-221cab), 0:05.00 | une vignette passe en 2 × 2, les autres glissent et rétrécissent ; 18 im, aucun décalage, posé sur le temps (f318) |
| Titre héros → en-tête | [Quetzal social app reel](https://prompt-motion.com/miskinho-443898), 0:00.72 | échelle × 0,45 vers x ≈ 6 %, y ≈ 18 % en 14 im, ease-in-out symétrique, départ au demi-temps |
| Logotype qui sort de derrière la marque | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:13.25 | étude 60 fps : marque x 49,6 → 40,3 % L en 12 im, power2.out ; « dub » démasqué au bord du logo |
| Panneau qui cède la place | [Chunku product promo](https://prompt-motion.com/reyzostyle-b55864), 0:05.43 | le panneau glisse du centre vers x 3-25 % et rétrécit pendant que la carte entre à droite, ease-out ≈ 15 im |
| Le contenu pousse le contenu | [Tented image gen product video](https://prompt-motion.com/justincooperman-e7bbc4), 0:18.50 | titre et corps de l'email descendent de ≈ 20 % de la carte en 15 im, ease-out, pendant l'atterrissage de l'image |
| Mêmes cartes, autre primitive | [Lism CSS 1.0 release video](https://prompt-motion.com/ddryo-loos-300829), 0:14.70 | grille 4 × 2 → pile de 4 rangées en ≈ 12 im (30 fps), flou horizontal, 1-2 im entre rangées |
| Nuage filtré puis aligné | [Muse connector tracker promo](https://prompt-motion.com/elliot-garreffa-f334bc), 0:21.60 | 3 cartes hors sujet tombent, 3 retenues passent de ±5-10° à 0° et s'alignent en ≈ 0,7 s |
| Place réservée d'avance | [Cinetic skill launch film](https://prompt-motion.com/lexnlin-6161a6), 0:00.00 | phrase mise en page centrée à sa taille finale (x 19-79 %) avant la frappe : rien ne se recentre |

![Le titre « One idea. » rétrécit et glisse en haut à gauche pendant que la barre de saisie descend](ILLUS:recomposition-2)

*[Quetzal social app reel](https://prompt-motion.com/miskinho-443898), 0:00.67 à 0:01.00 : le titre passe à × 0,45 en 14 im et libère le centre pour la barre de saisie.*

**Règles de construction**

1. Un seul geste de 11 à 20 im (0,2 à 0,33 s) : 11 im (Parenting app), 12 (Dub, Lism), 14 (Quetzal), 15 (Chunku, Tented), 18 (Photo print), 20 (fin du Recipe brand). Tout bouge en même temps, ou à 1-2 im d'écart au plus.
2. Courbe selon le rôle. Changement de rôle (titre → en-tête, carte → carte de fin) : ease-in-out, vitesse maximale au milieu. Glissement qui cède la place à un arrivant : ease-out (power2.out ou power3.out). Aucun dépassement mesuré. Le guide Otom met ease-in-out sur tous les déplacements (guide Otom, p. 6) ; les mesures le contredisent pour les glissements qui font de la place.
3. Le geste part sur un temps ou un demi-temps et se pose sur le suivant (Quetzal, Photo print, Travel visa : départ f677, pic f687, temps f690,5). Il chevauche l'arrivant de 4 im environ.
4. La nouvelle place est définitive : l'en-tête de Quetzal garde sa position pour tous les chapitres. Un titre qui devient en-tête passe à × 0,45-0,55 et va dans le coin haut gauche, à la marge du texte.
5. Pour remplir une zone, réserver la place finale (Cinetic, pastilles de Prompting mistakes) plutôt que recentrer à chaque ajout. Mais ne laisser aucun trou vide plus de 0,5 s (carte SkinPal de Website analyzer).
6. N'animer que la position, l'échelle et l'opacité, jamais la largeur, la hauteur ou les marges (guide Otom, p. 14) : c'est le principe FLIP, mesurer l'avant et l'après puis animer le transform.

**Verdict** : à reprendre. C'est la façon la plus propre de faire « chaque plan est fait du précédent » sans coupe, à condition que la recomposition ait une raison : un arrivant, un changement de rôle, une conclusion.

**Quand l'utiliser** : surtout en promo SaaS / interface et en explainer, pour passer de la présentation à la démonstration sans quitter l'écran. Le titre qui devient en-tête sert l'accroche, la grille qui devient bento sert la preuve, le logotype sorti de la marque sert la signature. On la décide aux enchaînements, après le découpage, en dessinant l'état avant et l'état après sur la même grille. À éviter quand rien n'arrive (recomposition gratuite) et en typo cinétique pure, où une coupe sur le temps est plus nette.

**HyperFrames (GSAP)**

```js
// FLIP sans plugin : la grille 3 × 3 devient bento (18 im), puis le titre devient en-tête (14 im)
const FPS = 60, f = n => n / FPS;
const BEAT = 60 / 120, at = b => b * BEAT;        // 120 BPM
const LAND = at(10);                               // le bento se pose sur le temps 10
const W = 1920, H = 1080;
// Le CSS place chaque vignette à sa place FINALE ; .ghost .cell garde la grille de départ.
// Mesurer après document.fonts.ready, scène affichée (display:block), sinon les rects valent 0.
const tiles = gsap.utils.toArray(".bento .tile");
const cells = gsap.utils.toArray(".ghost .cell");
tiles.forEach((el, i) => {
  const a = cells[i].getBoundingClientRect();      // First : case de la grille
  const b = el.getBoundingClientRect();            // Last : place dans le bento
  tl.set(el, { x: a.left - b.left, y: a.top - b.top, scale: a.width / b.width,
               transformOrigin: "0 0" }, 0)        // vignettes carrées : échelle uniforme
    .to(el, { x: 0, y: 0, scale: 1, duration: f(18), ease: "power3.inOut" }, LAND - f(18));
});
// flou de mouvement au pic de vitesse
tl.to(".bento", { filter: "blur(2px)", duration: f(6), ease: "sine.in",
                  yoyo: true, repeat: 1 }, LAND - f(12));

// Titre héros → en-tête : × 0,45 vers (6 %, 18 %), départ au demi-temps
const h = document.querySelector("#hero").getBoundingClientRect();
tl.set("#chapter-index", { autoAlpha: 0, y: 12 }, 0)
  .to("#hero", { x: 0.06 * W - h.left, y: 0.18 * H - h.top, scale: 0.45,
                 transformOrigin: "0 0", duration: f(14), ease: "sine.inOut" }, at(12.5))
  .to("#chapter-index", { autoAlpha: 1, y: 0, duration: f(10), ease: "power2.out" }, at(12.5) + f(8));
```

**After Effects**

- Grille → bento : poser chaque vignette à sa place finale et y mettre les clés Position et Scale (Échelle). Reculer de 18 im et replacer chaque vignette dans sa case de départ. Animation › Keyframe Assistant › Easy Ease (Animation › Assistant d'image clé › Lissage de vitesse) (F9), influence 66 % des deux côtés pour approcher power3.inOut.
- Activer le commutateur Motion Blur (Flou de mouvement) des calques et celui de la composition (Shutter Angle (obturateur) 180°) : le flou suit la vitesse, comme sur Photo print.
- Titre → en-tête : Anchor Point (point d'ancrage) au coin haut gauche du texte (Pan Behind Tool (outil Déplacement arrière), Y). Scale 100 → 45 % et Position vers (115, 194) px en 14 im, Easy Ease à 50 % / 50 %. Activer Continuously Rasterize (Rastériser en continu) pour garder le texte net.
- Logotype : placer « dub » sous la marque, avec un rectangle enfant de la marque (colonne Parent) comme Alpha Matte (Cache alpha). Position x de la marque 952 → 774 px en 12 im, Easy Ease In (Lissage de vitesse entrant) à 80 %.
- Place réservée : texte déjà mis en page à sa taille finale, puis Text › Animate › Opacity (Texte › Animer › Opacité) avec un Range Selector (Sélecteur de plage) (Start (Début) 0 → 100 %) : les lettres apparaissent sans que la ligne se recentre.
