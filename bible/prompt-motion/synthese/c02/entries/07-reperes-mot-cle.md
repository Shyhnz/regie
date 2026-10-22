## Cadrer le mot clé : guides, crochets et étiquettes à filet (construction guides, selection brackets, callout leader lines)

Des traits fins tracés à l'écran isolent l'élément important : équerres qui se referment sur un mot, guides de construction autour de lui, résultat encadré, ou étiquette reliée par un filet à un point qu'elle suit. Le trait montre où regarder sans zoom ni couleur de plus. Le geste est court : 10 im pour que quatre équerres traversent le cadre et se posent autour de « FRAME ». Vue dans 18 vidéos, dont 17 notées 4 ou 5.

![Six images : le mot FRAME au centre, quatre équerres rouges partent des coins du cadre et se resserrent autour du mot, puis un iris crème s'ouvre dessus](ILLUS:reperes-mot-cle-1)

*[Kinetic type and particle showreel](https://prompt-motion.com/m1n9-k7-ff9ab9), 0:02.43 à 0:02.77 : les équerres quittent les coins du cadre, cadrent le mot FRAME en 10 im environ, puis l'iris suivant part du mot.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Équerres qui se referment | [Kinetic type and particle showreel](https://prompt-motion.com/m1n9-k7-ff9ab9), 0:02.50 | 4 équerres rouges partent à 2 % des bords, boîte finale ≈ 45 × 35 % du cadre, ≈ 10 im en ease-out |
| Crochets de sélection | [Abstract motion design reel](https://prompt-motion.com/ajith-io-b5626e), 0:02.45 | Trait ≈ 6 px, branches ≈ 4 % H, posés en 9 im (f147-f156), tenus jusqu'à la fin de la mesure |
| Paire de guides qui s'ouvre | [3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155), 0:00.35 | Étude 60 fps : écart 0,6 → 26,7 % H en 20 im power1.out, sur le temps (+0 im) ; sortie 6 im power1.in |
| Lignes de construction typographiques | [Claude self-intro motion graphic](https://prompt-motion.com/1littlecoder-9fef89), 0:03.50 | Filets 1 px tracés depuis la gauche, pied, hauteur d'x et capitale à 50, 58, 66 % H, avant toute lettre |
| Réglure de proportion | [Engraving-style Claude ad](https://prompt-motion.com/lexnlin-038035), 0:04.53 | Lignes grises 1 px qui glissent en 8 im (f274-f282), puis restent en réglure derrière « draft / craft » |
| Étiquette qui suit un point | [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 0:08.33 | Point jaune ≈ 0,6 %, étiquette mono ≈ 1 % H en fondu de 6 im ; le filet suit le sommet pendant les morphings |
| Étiquette ancrée en 3D | [AI data centre 3D tour](https://prompt-motion.com/sayan-shanky-f850d8), 0:13 | Anneau ≈ 1 % H, filet 1 px coudé de 60 à 100 px, libellé ≈ 1,8 % H + chiffre ; position recalculée chaque image |
| Résultat encadré | [Derivative concept explainer](https://prompt-motion.com/linearuncle-5d2bae), 3:50 | Résultat ≈ 7 % H, rectangle arrondi jaune tracé en même temps, ≈ 1,5 s, après le fondu de tout le calcul |

![Six images d'un nuage de points 3D : une étiquette VERTEX 0211 en haut à droite reste reliée par un filet fin au même sommet pendant que la sphère devient tore puis nappe](ILLUS:reperes-mot-cle-2)

*[Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 0:08.25 à 0:09.92 : l'étiquette reste en place ; seul le bout du filet suit le sommet à travers trois formes.*

**Règles de construction**

1. Un seul repère par plan, sur un seul mot. Crochets d'ajith : « accent unique, pas répété dans la mesure ». Le guide Otom demande que l'élément principal soit seul dans la couleur d'accent (guide Otom, p. 14) : c'est la couleur des équerres de m1n9-k7.
2. Le trait est fin (1 à 2 px, ou 6 px pour des crochets) et arrive avant ou avec le mot. Filets tracés avant le texte chez 1littlecoder et samuel-spitz ; tracé en 3 à 10 im, ouverture de guides en 20 im.
3. Le geste dit le mot : équerres sur « FRAME » (m1n9-k7, ajith), guides aimantés sur « SNAP » (himanshutwtxs), réglure derrière « craft » (lexnlin). Sans ce lien, c'est du décor.
4. Étiquette à filet : l'étiquette reste fixe, le bout du filet suit l'objet à chaque image (sudo-kiran, sayan-shanky, sahildesigner23). Plusieurs étiquettes : une toutes les 0,5 s (samuel-spitz), en quinconce haut, bas (jazzen-chen).
5. Le texte d'étiquette mesuré fait 1 à 1,8 % H, jugé illisible sur téléphone dans 4 fiches. Le guide fixe 4 % H au minimum pour un texte secondaire (guide Otom, p. 14). Vise 2,5 à 4 % H si l'étiquette porte un chiffre à lire.
6. Calage : départ sur le temps (sahildesigner23 +0 im, kyonax sur le temps), tenue jusqu'à la fin de la mesure ou 10 im au moins (chatgptastra).

**Verdict** : à reprendre, une fois par film. Les équerres qui se referment cadrent le mot clé seul sans zoom, donc sans pixelisation ni mot coupé. Garde l'étiquette à filet pour pointer une vraie fonction, jamais comme une flèche décorative.

**Quand l'utiliser** : en typo cinétique 1600, équerres ou guides sur le mot qui porte le message, pour l'accroche ou la chute. En promo SaaS et en 3D, l'étiquette à filet sert la démonstration : elle nomme une fonction ou un chiffre dans l'interface ou l'objet. En explainer données, le résultat encadré sert la preuve. On la choisit à la construction du plan ; à éviter si un HUD à équerres occupe déjà les coins, ou sur plus d'un plan par minute.

**HyperFrames (GSAP)**

```js
// Équerres qui se referment sur le mot clé, puis étiquette à filet qui suit un point
const FPS = 60, H = 1080, W = 1920;
const BEAT = 60 / 128, at = b => b * BEAT;     // 128 BPM
const T = at(5), S = 0.04 * H, PAD = 0.02 * H; // branches 4 % H, départ à 2 % des bords
// Boîte du mot + 3 % H d'air, lue au 1er rendu de la tween (polices chargées)
const box = () => {
  const r = document.querySelector("#keyword").getBoundingClientRect();
  const s = document.querySelector("#stage").getBoundingClientRect(), m = 0.03 * H;
  return { l: r.left - s.left - m, t: r.top - s.top - m, r: r.right - s.left + m, b: r.bottom - s.top + m };
};
const C = { tl: [PAD, PAD, b => b.l, b => b.t],         tr: [W - PAD - S, PAD, b => b.r - S, b => b.t],
            bl: [PAD, H - PAD - S, b => b.l, b => b.b - S], br: [W - PAD - S, H - PAD - S, b => b.r - S, b => b.b - S] };
tl.set(".br", { autoAlpha: 0 }, 0);                     // équerres cachées avant le temps
for (const [k, [x0, y0, fx, fy]] of Object.entries(C)) {
  tl.set(`#br-${k}`, { x: x0, y: y0, autoAlpha: 1 }, T)              // départ sur le temps
    .to(`#br-${k}`, { x: () => fx(box()), y: () => fy(box()), duration: 10 / FPS, ease: "power3.out" }, T)
    .to(`#br-${k}`, { autoAlpha: 0, duration: 6 / FPS, ease: "power1.in" }, at(8) - 6 / FPS); // fin de mesure
}

// Étiquette fixe en haut à droite ; le filet SVG et l'anneau suivent le point avec la même courbe
const A0 = { x: 820, y: 560 }, A1 = { x: 1010, y: 470 }, t0 = at(12), d = at(4);
tl.set("#callout", { autoAlpha: 0 }, 0)
  .set("#leader", { attr: { x1: A0.x, y1: A0.y, x2: 1480, y2: 260 } }, t0)
  .set("#anchor", { x: A0.x, y: A0.y }, t0)
  .to("#callout", { autoAlpha: 1, duration: 6 / FPS, ease: "none" }, t0)       // fondu 6 im
  .to("#leader", { attr: { x1: A1.x, y1: A1.y }, duration: d, ease: "sine.inOut" }, t0)
  .to("#anchor", { x: A1.x, y: A1.y, duration: d, ease: "sine.inOut" }, t0);   // l'objet suivi : même tween
// En 3D (Three.js) : projeter le sommet (Vector3.project) dans la boucle de rendu pilotée par tl
```

**After Effects**

- Équerres : 4 calques de forme en L (Stroke (contour) 6 px, branches 4 % H). Position en 2 images clés sur 10 im, des coins du cadre (2 % des bords) à 3 % H autour du mot ; Animation › Keyframe Assistant › Easy Ease In (Animation › Assistant d'image clé › Lissage de vitesse entrant), influence ≈ 80 % (≈ power3.out).
- Pour coller au mot, lier la position d'arrivée par expression à `sourceRectAtTime()` du calque de texte. Départ sur le marqueur du temps ; Opacity (Opacité) à 0 en 6 im en fin de mesure.
- Guides : calques de forme ligne 1 px avec Add › Trim Paths (Ajouter › Réduire les tracés), End (Fin) 0 → 100 % en 6 à 8 im, avant l'arrivée du mot. Paire de guides : écart 0,6 → 27 % H en 20 im, influence ≈ 50 % sur l'image clé d'arrivée seulement.
- Étiquette qui suit : un Null Object (objet nul) sur le point (en 3D, nul 3D ou 3D Camera Tracker (suivi de caméra)) ; le premier sommet du filet suit le nul par expression (`fromComp(thisComp.layer("Ancrage").toComp([0,0,0]))`), l'étiquette reste fixe. Fondu d'Opacity 0 → 100 % en 6 im.
- Texte d'étiquette à 2,5 à 4 % H (27 à 43 px en 1080) ; plusieurs étiquettes décalées de 0,5 s (Animation › Keyframe Assistant › Sequence Layers (Séquencer les calques)).
