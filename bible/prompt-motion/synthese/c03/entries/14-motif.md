## Le texte en motif : anneaux, orbites, échos, bandeaux (text ring, orbiting circular text, outline echo stack, kinetic marquee rows)

Le mot est répété ou posé sur une trajectoire pour devenir une forme : anneau qui tourne, lignes qui se courbent en cercles concentriques, copies en contour empilées, rangées qui défilent. L'anneau donne du volume et un décor vivant sans image ; les échos rendent visible une subdivision musicale, 4 copies sur 4 triples-croches. Le mur de bandeaux défilants est le cliché de la famille : 8 des 34 occurrences. Vue dans 29 vidéos, toutes notées 4 ou 5.

![Huit images sur fond noir : quatre lignes de mots séparés par des points rouges se courbent en arc, en fer à cheval, puis en quatre anneaux concentriques autour d'un point rouge](ILLUS:motif-1)

*[Abstract motion design reel](https://prompt-motion.com/ajith-io-b5626e), 0:11.67 à 0:12.37 : quatre lignes droites se courbent en arc, en fer à cheval, puis en quatre anneaux concentriques autour d'un point rouge.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Lignes qui se courbent en anneaux | [Abstract motion design reel](https://prompt-motion.com/ajith-io-b5626e), 0:11.75 | Plat → cercle en ≈ 32 im ease-in-out ; rayons 45, 36, 27, 18 % H ; rotation constante, puis accélération sur le temps f760 |
| Courbure en un temps | [Shape and dot motion showreel](https://prompt-motion.com/umangratani-57f86a), 0:11.82 | 4 bandeaux fermés en 4 cercles en ≈ 26 im (un temps) ; le point rouge naît au centre à la fermeture, jusqu'à 3 % H |
| Texte circulaire en orbite | [Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be), 0:00.97 | Étude 60 fps : mono capitales sur un cercle de rayon 25 % H, ≈ 40° en 41 im à vitesse constante ; éteint avant l'effondrement |
| Mots sur un arc, au chant | [Synced lyrics motion video](https://prompt-motion.com/samaote-5e2fc2), 0:04.37 | Étude 60 fps : arc de rayon ≈ 30 % H, un mot par syllabe en fondu flou de 4 im ; 5 mots sur 7 à ±2 im de la grille |
| Défilement → anneaux | [Lead Notifi product ad](https://prompt-motion.com/leadnotifi-e83f94), 0:35.18 | Fondu enchaîné de ≈ 8 im sur le temps : 4 rangs de fonctionnalités (3 → 1 % H) deviennent 4 anneaux de même hiérarchie |
| Échos sur triples-croches | [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:10.78 | Étude 60 fps : ECHO à 26 % H, 4 copies en contour rouge f651, f654, f658, f661, une par triple-croche (+0,1 à +0,6 im) |
| Échos qui s'empilent | [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 0:03.50 | Étude 60 fps : MOVE réduit de 1 à 0,57 en 14 im power3.out ; échos en contour à ≈ 2 im d'écart, du centre vers les bords |
| Mur de bandeaux (cliché) | [3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155), 0:02.10 | Étude 60 fps : 10 rangées en contour, sens alternés, vitesse 0,4 → 6,9 % L/im (power2.in) sur une mesure entière |

![Six images sur fond noir : ECHO en capitales crème, puis une copie en contour rouge apparaît au-dessus et au-dessous à chaque triple-croche](ILLUS:motif-2)

*[Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:10.80 à 0:11.05 : ECHO plein, puis une copie en contour rouge par triple-croche, au-dessus et au-dessous.*

**Règles de construction**

1. Anneau : rayon 18 à 45 % H, centré sur un objet (astérisque, logo, point rouge de 3 à 7 % H). Rotation lente et constante, ≈ 1° par image (roundtablespace). À 4° par image, le carrousel LOOP de hanifproduktif-54bdee coupe ses lettres au bord du cadre.
2. La phrase fait exactement le tour : longueur du texte = 2πr. Sinon elle se chevauche (« LOLOOP », « EATIMING » chez motiondsgnr-9dcfa6). En SVG : `textPath` et `textLength`.
3. Courbure plat → cercle en 24 à 32 im, ease-in-out : mrtanviir-132457 24, umangratani 26 (un temps), ajith-io 32. Le point central éclot à la fermeture, sur le temps (mrtanviir f735,8).
4. Échos : 2 à 5 copies en contour fin, au pas d'une hauteur de capitale, une par subdivision (3,5 im à 128 BPM chez grace-sunnyy, 2 im chez sudo-kiran). Le mot plein reste seul au centre ; l'ensemble dure de 14 im à un temps (web3wesley-7bb108, shinskinakamoto-20190b).
5. Le texte d'un anneau est un décor, à 1 à 3 % H (sudiyasa-f48ac9, leadnotifi). Le message va ailleurs, à 4 % H au moins pour un texte secondaire (guide Otom, p. 14).
6. Mur de bandeaux : 8 occurrences jugées cliché sur 34. À 55 % de la largeur par seconde, celui de raphaelaubryy-4b137e ne se lit pas. S'il sert, il tient un temps au plus (teslachartz-c58b32, 15 im), net, avec une seule rangée pleine.

**Verdict** : à reprendre pour l'anneau, l'arc et la courbure en anneaux, version 2D de ton anneau de texte en orbite. Les échos aussi, une fois, calés sur une subdivision. Le mur de bandeaux est un cliché, ton « mur de mots flous » : remplace-le par un mot seul plein cadre ou par la courbure en anneaux.

**Quand l'utiliser** : en typo cinétique 1600 et showreel éditorial, échos sur un temps fort. La courbure en anneaux sert de transition : les lignes deviennent un cercle, puis un point qui ouvre le plan suivant. En promo SaaS, liste de fonctionnalités qui se referme en anneaux autour du logo (chute, signature), ou anneau autour du logo à l'ouverture. En clip, mots posés sur un arc au rythme du chant. Choix de direction artistique et d'enchaînement ; à éviter en fond de plan rempli et sur un plan qui porte un texte à lire.

**HyperFrames (GSAP)**

```js
// 4 lignes de texte (SVG textPath) qui se courbent en anneaux, tournent, puis échos en contour
const FPS = 60, BEAT = 60 / 128, at = b => b * BEAT;    // 128 BPM
const CX = 960, CY = 540, H = 1080;
const R = [0.45, 0.36, 0.27, 0.18].map(r => r * H);     // rayons des anneaux
// Arc de longueur 2πr, sommet fixe en haut ; k = 0 : ligne droite, k = 1 : cercle de rayon r
const arc = (r, k) => {
  const L = 2 * Math.PI * r, y0 = CY - r;
  if (k < 0.001) return `M${CX - L / 2},${y0} L${CX + L / 2},${y0}`;
  const rr = L / (2 * Math.PI * k), a = Math.PI * k * 0.999;   // demi-angle
  const x1 = CX - rr * Math.sin(a), x2 = CX + rr * Math.sin(a), y = y0 + rr - rr * Math.cos(a);
  return `M${x1},${y} A${rr},${rr} 0 ${k > 0.5 ? 1 : 0} 1 ${x2},${y}`;
};
// Accesseur que GSAP pilote : rendu à chaque seek, sans callback
let kv = 0;
const rings = { k(v) { if (v === undefined) return kv; kv = v;
  R.forEach((r, i) => document.querySelector(`#p${i}`).setAttribute("d", arc(r, kv))); } };
rings.k(0);                                               // lignes droites au départ
tl.set("#dot", { scale: 0, transformOrigin: "50% 50%" }, 0)
  .to(rings, { k: 1, duration: 26 / FPS, ease: "power2.inOut" }, at(24) - 26 / FPS)
  .to("#dot", { scale: 1, duration: 9 / FPS, ease: "power3.out" }, at(24))
  // rotation constante ≈ 1° par image, sens alternés, pendant 2 temps
  .to(".ring", { rotation: i => (i % 2 ? -1 : 1) * 2 * BEAT * FPS, svgOrigin: `${CX} ${CY}`,
                 duration: 2 * BEAT, ease: "none" }, at(24));
// Échos : une copie en contour par triple-croche (BEAT / 8 ≈ 3,5 im), de la plus proche à la plus loin
tl.set(".echo", { autoAlpha: 0 }, 0)
  .to(".echo", { autoAlpha: 1, duration: 1 / FPS, ease: "none", stagger: BEAT / 8 }, at(28) + BEAT / 8)
  .set(".echo", { autoAlpha: 0 }, at(29));                // un temps au plus
```

**After Effects**

- Courbure en anneaux : les 4 lignes, plus larges que le cadre, dans une Pre-comp (précomposition) ; Effect › Distort › Polar Coordinates (Effet › Distorsion › Coordonnées polaires), Type of Conversion Rect to Polar (Type de conversion Rectangulaire à polaire), Interpolation 0 → 100 % en 26 im, Influence (influence) ≈ 60 % en entrée et en sortie. Le point central : Scale (Échelle) 0 → 100 % en 9 im sur le temps.
- Anneau seul : calque de texte, Path Options › Path (Options de chemin › Tracé) = un Mask (masque) Ellipse ; taille et Tracking (Approche) réglées pour que la phrase fasse exactement le tour. Rotation par expression `time*60` (1° par image à 60 fps).
- Échos : dupliquer le mot 4 fois (Ctrl+D), Character panel (panneau Caractère) en Stroke (contour) seul de 2 px, copies décalées d'une hauteur de capitale. Animation › Keyframe Assistant › Sequence Layers (Animation › Assistant d'image clé › Séquencer les calques), décalage de 3 à 4 im (une triple-croche à 128 BPM).
- Bandeaux, si besoin : Position X en images clés linéaires, sens alternés, une seule rangée pleine ; couper le calque au bout d'un temps.
