## La poussée et le volet plein (push, slide, solid color wipe, wipe-through panel)

Un seul panneau de couleur balaie le cadre, droit, diagonal ou en chevron, ou bien le plan B pousse le plan A hors de l'écran. C'est la façon la plus sûre de changer de fond ou de section : le panneau apporte la couleur suivante et masque la coupe en 5 à 14 images. Linéaire, lent ou répété à l'identique, il fait diaporama. Vue dans 46 vidéos, dont 36 notées 4 ou 5.

![Un aplat orange monte du bas, couvre la page « JEV-BROWSER-SKILL », puis continue vers le haut et découvre le terminal](ILLUS:poussee-volet-plein-1)

*[Browser automation skill launch](https://prompt-motion.com/hqmank-7c61f1), 0:06.53 à 0:06.83 : volet traversant, couverture en ease-in, une image pleine, retrait dans le même sens en ease-out.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Poussée solidaire du panneau | [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:03.37 | étude 60 fps : y 0 → −100 % H, power3.inOut 22 im, fin 1 im avant le 1er temps de la mesure 3 |
| Volet traversant | [Browser automation skill launch](https://prompt-motion.com/hqmank-7c61f1), 0:06.55 | aplat #E9683B : couvre en 8 im (3 → 100 %, ease-in), se retire vers le haut en 8 im (ease-out) ; 0,27 s |
| Panneaux empilés | [AIsa API key promo](https://prompt-motion.com/0xfemyn-e114d3), 0:11.93 | le noir mène, l'orange suit ≈ 2 im derrière ; plein orange sur le temps ; 14 im = 1 temps (30 fps) |
| Bande diagonale vers le noir | [Studio1 intro showreel](https://prompt-motion.com/astrodevil-3f2054), 0:03.52 | parallélogramme incliné 20°, 15-30 % L, 12-14 im ease-in ; 2-4 im de noir ; scène suivante sur le temps |
| Volet diagonal à bord flou | [Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be), 0:03.45 | étude 60 fps : 1,8 → 98,1 % du cadre en 5 im, sine.out ; bord dégradé ≈ 10 % ; fin au demi-temps +1 im |
| Chevron qui inverse la palette | [Ondefica app motion reel](https://prompt-motion.com/jesscaroline7-1ff7cb), 0:18.27 | bord coudé, 9 im ease-in-out ; mêmes données dessous, seul le thème passe en noir sur crème |
| Poussée à filet d'attaque | [Motion designer showreel](https://prompt-motion.com/kangaroohere-b10f8d), 0:15.87 | bord de la scène entrante souligné d'un filet bleu ; 7 im, pointe à 40 % de la hauteur par image |
| Chiffres poussés un par temps | [UGC ad generator promo](https://prompt-motion.com/twoclipping-6dd14e), 0:15.00 | poussées verticales de 6-8 im, ease-out ; tenues de 1 s, puis 0,5 s, puis 0,5 s : la mesure accélère |

![Une bande orange inclinée traverse le cadre de gauche à droite, efface le titre vers le noir, puis « OK+ » apparaît](ILLUS:poussee-volet-plein-2)

*[Studio1 intro showreel](https://prompt-motion.com/astrodevil-3f2054), 0:03.50 à 0:03.80 : la bande accélère, laisse 2 à 4 images de noir, et le chiffre suivant tombe sur le temps.*

**Règles de construction**

1. Durées mesurées. Volet simple : 5 à 14 im pour couvrir (5 Easing and morphing, 9 Ondefica, 12-14 Studio1). Volet traversant : 16 à 23 im aller-retour, avec 0 à 1 image pleine (Browser automation 8 + 8, Alan 12 + 11). Poussée solidaire : 7 à 22 im. Le guide Otom propose un « volet rapide de 250 ms » (guide Otom, p. 10), soit 15 im : c'est le haut de la fourchette.
2. Courbes : le panneau qui couvre accélère (ease-in, power3.in), celui qui découvre freine (ease-out), la poussée solidaire est en ease-in-out (power3.inOut). Le glissé linéaire de 15 im à pas constant (Handwoven textiles, noté 2) et le défilement à arrêt sec (ocrX) se lisent comme une diapositive.
3. Calage (vidéos animées sur la musique) : l'image pleine ou l'arrivée tombe sur le temps, à 0-2 im près (Studio1, AIsa) ou 1 im avant le 1er temps de mesure (Swiss-style). Le départ part du demi-temps. Contre-exemple : Alan agent platform promo (musique posée) part près du temps, mais sa couverture et sa sortie ne tombent sur rien.
4. Le panneau porte du sens : la couleur de la scène suivante, l'accent de la charte, ou une inversion de palette sur les mêmes données (Ondefica). Panneaux empilés : sombre d'abord, accent ensuite, 2 à 5 im d'écart ; le second peut porter le mot (« ISOLATED. »).
5. Varier sens et axe : Studio1 alterne gauche → droite puis droite → gauche ; Claude self-promo passe de l'horizontale à la verticale. Le même volet répété 7 à 10 fois à l'identique (Steam new releases news recap, Prompting mistakes video tutorial) devient une signature fatigante.
6. Diagonale inclinée de 15 à 20° (Studio1, Steam, Email verification), bord flou de 5 à 10 % ou liseré clair. Sans flou, à 25-30 fps, un bord qui saute de plus de 12 % par image se lit comme un défaut (Prompting mistakes).

**Verdict** : à adapter. Le volet nu est un outil de base ; il devient bon quand il apporte la couleur suivante, accélère vers le temps et se retire en ease-out. Réserve-le aux changements de section pour ne pas répéter le même accent partout.

**Quand l'utiliser** : en promo SaaS / interface et en explainer, pour changer de section ou de fond (problème → solution, chiffre → chiffre) ; le guide Otom l'emploie aussi entre écrans de chiffres (guide Otom, p. 13). En typo cinétique 1600, la bande diagonale et les panneaux empilés servent de ponctuation sur un temps fort. On le décide au système de design (couleurs des panneaux, angle, courbe) et on le place aux enchaînements. À éviter quand un objet peut faire le relais : l'objet relais ou l'iris racontent plus.

**HyperFrames (GSAP)**

```js
// Volet traversant (Browser automation) : couvre en power3.in (8 im), 1 im pleine,
// puis se retire dans le même sens en power3.out (8 im) et découvre B.
const FPS = 60, f = n => n / FPS;
const BEAT = 60 / 128, at = b => b * BEAT;        // 128 BPM : 1 temps = 28,125 im
const COVER = at(12);                              // plein cadre sur le temps 12
// #wipe, #wipeDark, #wipeAccent : div plein cadre (inset: 0) au-dessus des scènes
tl.set("#wipe", { yPercent: 100, autoAlpha: 1 }, 0)
  .to("#wipe", { yPercent: 0, duration: f(8), ease: "power3.in" }, COVER - f(8))
  .set("#sceneA", { autoAlpha: 0 }, COVER)         // échange caché sous l'aplat
  .set("#sceneB", { autoAlpha: 1 }, COVER)
  .to("#wipe", { yPercent: -100, duration: f(8), ease: "power3.out" }, COVER + f(1));

// Panneaux empilés : le noir couvre en 5 im (ease-in), l'accent suit en 5 im (ease-out)
// et pose le mot sur le temps 20
const HIT = at(20);
tl.set(["#wipeDark", "#wipeAccent"], { xPercent: -100, autoAlpha: 1 }, 0)
  .set("#word", { xPercent: -60, filter: "blur(12px)" }, 0)
  .to("#wipeDark", { xPercent: 0, duration: f(5), ease: "power2.in" }, HIT - f(10))
  .to("#wipeAccent", { xPercent: 0, duration: f(5), ease: "power2.out" }, HIT - f(5))
  .to("#word", { xPercent: 0, filter: "blur(0px)", duration: f(5), ease: "power2.out" }, HIT - f(5));

// Volet diagonal à bord flou (Easing and morphing, étude 60 fps) : 5 im, sine.out
// #sceneC { mask-image: linear-gradient(315deg, #000 calc(var(--p) - 10%), transparent var(--p)); }
tl.set("#sceneC", { "--p": "0%", autoAlpha: 1 }, 0)
  .to("#sceneC", { "--p": "110%", duration: f(5), ease: "sine.out" }, at(28.5) - f(5));
```

**After Effects**

- Volet traversant : Layer › New › Solid (Calque › Nouveau › Solide) à la couleur d'accent. Position Y 1 620 → 540 px en 8 im, 1re clé influence sortante 80 %, 2e clé Linear (Linéaire) (≈ power3.in). Échanger les scènes sous le solide à l'image pleine.
- Retrait : Position Y 540 → −540 px en 8 im, 1re clé Linear, 2e clé influence entrante 80 % (≈ power3.out). Pour les panneaux empilés, dupliquer le solide avec Edit › Duplicate (Édition › Dupliquer), Ctrl+D, le passer en noir et le décaler de 5 im.
- Volet diagonal : Effect › Transition › Linear Wipe (Effet › Transition › Balayage linéaire) sur la scène sortante, Wipe Angle (Angle de balayage) 135°, Feather (Contour progressif) ≈ 150 px (bord flou de 8 %). Transition Completion (Achèvement de la transition) 0 → 100 % en 5 im, influence entrante 75 %.
- Bande diagonale : Shape Layer (calque de forme) Rectangle de 25 % de la largeur, Rotation 20°, Gradient Fill (Remplissage en dégradé) orange. Position X traverse le cadre en 13 im en ease-in ; un Linear Wipe au même angle efface la scène derrière son bord arrière.
- Poussée solidaire : Layer › New › Null Object (Calque › Nouveau › Objet nul), parent des deux scènes (colonne Parent & Link (Parent)). Position Y 540 → −540 en 22 im, Easy Ease (Lissage de vitesse, F9) à 75 % (≈ power3.inOut), arrivée 1 im avant le temps.
