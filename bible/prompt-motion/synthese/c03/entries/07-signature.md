## La signature : lockup du logo et point relais (logo lockup build, wordmark slide-out from behind the mark, dot becomes the full stop)

Le plan final assemble la marque par un mouvement : le symbole glisse et le nom sort de derrière lui, ou se déroule depuis son point final. Souvent, un point vu plus tôt dans le film voyage et devient la ponctuation du logo. Le logo conclut un geste au lieu d'apparaître posé ; le meilleur cas pose le point d'ouverture du film en point final du nom, 31 im après l'iris. Vue dans 58 vidéos, dont 52 notées 4 ou 5.

![Huit images : un point orange dans un cercle sur fond noir, un iris crème s'ouvre, le point glisse à droite pendant que « Claude » monte de la ligne de base, puis se pose en point final ; la légende mono se décode dessous](ILLUS:signature-1)

*[3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155), 0:12.97 à 0:14.00 : l'iris part du point, le point voyage pendant que les lettres montent, puis devient la ponctuation du nom.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Point d'ouverture → point final | [3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155), 0:13.12 | Étude 60 fps : point de 50 à 77,6 % L en 31 im power1.out, posé après le « e » ; lettres en 22 im power1.out, ≈ 3 im d'écart |
| Le nom sort de derrière le symbole | [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:11.75 | Étude 60 fps : losange de 47 à 19 % L en 11 im power2.inOut ; bord du masque de 30 à 84,5 % L en 22 im power3.out, moitié du mot en 3 im |
| Lettres émises par le logo | [Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be), 0:13.58 | Étude 60 fps : astérisque de 48 à 18 % L en 17 im power2.out dès le temps 29 ; E à C à 2 im d'écart ; interlettrage serré au temps 30 |
| Point en arc qui s'écrase | [Abstract motion design reel](https://prompt-motion.com/ajith-io-b5626e), 0:13.22 | Lettres à 3-4 im d'écart depuis la ligne de base ; le point arrive après le « e », écrasé 1,4:1 sur le temps |
| Point qui rebondit puis se pose | [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:13.60 | Étude 60 fps : écrasé 2,1:1, rebond de 6,1 % H, sommet 9 im après, posé en 19 im ; filet et légendes tapés pendant le rebond |
| Logo déroulé depuis son point | [Geometric motion designer showreel](https://prompt-motion.com/leonkohli-6dc01b), 0:12.00 | Le point file à droite, les lettres sortent de derrière lui de droite à gauche, ≈ 1,5 im par lettre, logo complet en 10 im sur le clap |
| Mot qui se comprime dans son point | [Photo print app launch film](https://prompt-motion.com/twoclipping-221cab), 0:00.57 | « develop. » de 78 % L au point seul en 20 im, ease-in, axe de largeur resserré, flou horizontal |
| Cascade symbole, nom, slogan, bouton | [Bento.surf product video](https://prompt-motion.com/bizibeast-10f264), 0:37.4 | Symbole de 50 à 27 % L en 20 im ; 10 lettres en 30 im ; slogan mot à mot ; bouton 50 → 100 % en 8 im |

![Six images sur fond noir : un losange rouge glisse vers la gauche, « AUDE » sort de derrière son bord, puis « CLAUDE » complet ; une ligne de temps et « MOTION DESIG… » se tapent dessous](ILLUS:signature-2)

*[Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:11.67 à 0:12.08 : le masque est collé au bord du losange, on lit la fin du nom en premier.*

**Règles de construction**

1. Le symbole bouge d'abord : il glisse de 13 à 30 % L en 11 à 28 im et rétrécit souvent (astérisque 18,4 → 10,5 % L). Le nom part 1 im après (grace-sunnyy).
2. Le nom sort d'un masque collé au bord du symbole, ou monte de sa ligne de base : 1,5 à 3 im d'écart par lettre, mot complet en 10 à 30 im, fini sur un temps ou un demi-temps (roundtablespace au demi-temps 29,5, leonkohli sur le clap).
3. Point relais : même couleur et même taille que le point vu plus tôt. Trajet en arc (sommet ≈ 13 % H plus haut chez mrtanviir), arrivée après la dernière lettre, écrasement de 1,4:1 à 2,1:1 sur l'attaque.
4. Puis la cascade : rôle en mono tapée à 1 caractère par image, slogan en fondu de 8 im sur le temps (levabashidze), URL ou bouton. Des fondus décalés sans mouvement gaspillent le plan (kantamk, « à adapter »).
5. Tenue courte et vivante : 46 à 54 im mesurés (levabashidze, roundtablespace), 72 im immobiles chez daniel-haida. Garde 0,75 à 1 s avec un micro-geste : pulsation du point × 1,11 (sahildesigner23), poussée de 2 % (zheke). Le guide demande 2,5 s d'écran final (guide Otom, p. 14) : la Bible garde la tenue courte.
6. Le logo garde ses proportions et ses couleurs (guide Otom, p. 12) : tout passe par la position, le masque et l'ordre d'apparition.

**Verdict** : à reprendre. Le point relais est la chute naturelle de ton match cut « le point d'un mot devient le point du graphique » : le même point ouvre et ferme le film. Plante-le dès la première seconde, sinon le geste ne relie rien.

**Quand l'utiliser** : pour la chute de toute vidéo de marque. En typo cinétique 1600 et en showreel, point relais ou lettres émises par le symbole ; en promo SaaS, cascade symbole, nom, slogan, bouton. Le point se décide au système de design (il doit exister dès l'ouverture), le lockup aux enchaînements. Sans point dans le film, préfère le nom qui sort de derrière le symbole.

**HyperFrames (GSAP)**

```js
// Lockup : le symbole glisse, le nom sort de derrière lui, le point du film se pose en point final
// HTML : #card > (#lockup > #mark + .name-mask {overflow:hidden} > #name) + #dot (le point vu depuis l'ouverture)
//        #dot-slot = case vide de la taille du point, sur la ligne de base au bout de #name ; MotionPathPlugin requis.
const FPS = 60, BEAT = 60 / 128, at = b => b * BEAT, f = n => n / FPS, H = 1080;
const T = at(29), L = at(30);                    // départ du lockup au temps 29, point posé au temps 30
const box = s => document.querySelector(s).getBoundingClientRect();
const P = (s, k) => gsap.getProperty(s, k);
tl.set("#lockup", { x: () => innerWidth / 2 - (box("#mark").left + box("#mark").width / 2) }, 0) // symbole centré
  .set("#name", { xPercent: -100 }, 0)
  .set("#role", { clipPath: "inset(0 100% 0 0)" }, 0)
  .to("#lockup", { x: 0, duration: f(17), ease: "power2.out" }, T)              // le symbole glisse à gauche
  .to("#name", { xPercent: 0, duration: f(22), ease: "power3.out" }, T + f(1)); // le nom sort de derrière lui
// Place finale du point : on retire les décalages encore en cours (lockup et nom bougent pendant le vol)
const slot = () => ({ x: box("#dot-slot").left - P("#lockup", "x")
                        - P("#name", "xPercent") / 100 * document.querySelector("#name").offsetWidth,
                      y: box("#dot-slot").top });
tl.to("#dot", { motionPath: () => {                // arc de 24 im, sommet 13 % H au-dessus
    const a = box("#dot"), b = slot(), x0 = P("#dot", "x"), y0 = P("#dot", "y");
    const x1 = x0 + b.x - a.left, y1 = y0 + b.y - a.top;
    return { path: [{ x: x0, y: y0 }, { x: (x0 + x1) / 2, y: Math.min(y0, y1) - 0.13 * H }, { x: x1, y: y1 }], curviness: 1.2 };
  }, duration: f(24), ease: "power1.out" }, L - f(24))
  .to("#dot", { scaleX: 1.4, scaleY: 0.7, duration: f(2), ease: "power2.out" }, L)  // écrasement 1,4:1
  .to("#dot", { scaleX: 1, scaleY: 1, duration: f(4), ease: "sine.out" }, L + f(2))
  .to("#role", { clipPath: "inset(0 0% 0 0)", duration: f(31), ease: "steps(31)" }, L) // 1 caractère par image
  .to("#dot", { scale: 1.11, duration: f(6), ease: "sine.out" }, at(31))        // pulsation sur le temps 31
  .to("#dot", { scale: 1, duration: f(14), ease: "sine.inOut" }, at(31) + f(6))
  .to("#card", { scale: 1.02, duration: at(2), ease: "none" }, at(31));           // poussée de 2 % : jamais figé
```

**After Effects**

- Symbole et nom dans une Pre-comp (précomposition) « lockup », le point au-dessus, hors de la Pre-comp. Un rectangle parenté au symbole, son bord gauche collé au bord droit du symbole, sert de Alpha Matte (Cache alpha) au calque du nom.
- Position du symbole : 2 images clés sur 17 im depuis le marqueur du temps 29, Influence (influence) ≈ 70 % à l'arrivée (≈ power2.out). Nom : Position X de −100 % de sa largeur à 0 en 22 im, Influence ≈ 85 %, 1 im plus tard.
- Point : Position en 2 images clés sur 24 im, poignée de Bézier tirée vers le haut (sommet ≈ 13 % H) ; Layer › Transform › Auto-Orient (Calque › Transformation › Orientation automatique). Scale (Échelle) 140 / 70 % à l'image de l'attaque, retour à 100 % en 4 im ; Motion Blur (flou de mouvement) activé. Rôle en mono : préréglage Typewriter (Machine à écrire), 1 caractère par image.
- Tenue de 0,75 à 1 s : Scale de la carte de 100 à 102 % en interpolation Linear (linéaire) ; pulsation du point à 111 % sur le temps suivant (6 im aller, 14 im retour).
