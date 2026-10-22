## Le logiciel d'animation à l'écran : courbes d'easing, timeline, poignées (live easing graph, fake animation timeline, design-tool transform gizmo)

On montre l'outil du motion designer autour de l'animation : éditeur de courbes (graph editor) manipulé au curseur, fausse timeline, boîte de transformation à poignées. Le spectateur voit la courbe et son effet en même temps. Dans les meilleures, la courbe affichée est la vraie (power3.inOut à 2,5 % près sous cubic-bezier(0.83, 0, 0.17, 1)). Vue dans 24 vidéos, dont 24 notées 4 ou 5.

![La droite orange devient une courbe en S quand le curseur tire les poignées ; la légende cubic-bezier change, puis la balle parcourt la courbe](ILLUS:outil-animation-ecran-1)

*[Claude motion design reel](https://prompt-motion.com/tequilafunks-97f6c9), 0:00.20 à 0:01.53 : le curseur tire la 1re poignée sur le temps 1, la 2e juste avant le temps 2 ; la légende suit, puis la balle trace la courbe.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Poignées tirées au curseur | [Claude motion design reel](https://prompt-motion.com/tequilafunks-97f6c9), 0:00.50 | poignée (0.33, 0.33) → (0.83, 0) en 7 im, saisie sur le temps ; 2e en 8 im ; légende réécrite à chaque image (étude 60 fps) |
| Balle qui trace sa courbe | [Code-only motion design reel](https://prompt-motion.com/johnsavage-ai-b091c0), 0:00.95 | axes en 4 im ; x constant (5-6 px/im), pas verticaux 0-3, puis 10-18, puis 4-6 px ; écrasement à l'arrivée |
| Éditeur synchronisé avec le texte | [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:01.88 | courbe changée à chaque ligne (expo.in, expo.out, ressort) ; lettres en ressort ζ 0,34, 2,35 Hz, comme affiché (étude 60 fps) |
| Courbe qui se transforme | [Claude motion reel](https://prompt-motion.com/codestackr-c071bf), 0:09.63 | linéaire → expo-out en ≈ 19 im, puis back in-out (0.70, −0.60, 0.32, 1.57) ; graphe ≈ 22 % L |
| Fausse timeline d'exercice | [Geometric motion designer showreel](https://prompt-motion.com/leonkohli-6dc01b), 0:00.00 | règle 0-60 im, tête de lecture liée à la balle, timecode juste (00:00:00:10 à f10), 3 arcs en pelures d'oignon |
| Boîte de transformation | [Shape and dot motion showreel](https://prompt-motion.com/umangratani-57f86a), 0:03.85 | 8 poignées tracées depuis un coin en ≈ 12 im, tourne avec la forme ; « ROT 101.2° » à ≈ 1 % H |
| Habillage de logiciel de design | [Design portfolio video reel](https://prompt-motion.com/kikelopezdesign-7cc9e8), 0:00.93 | sélection 1,5 px et « Logo — 32 × 32 » en 3 im ; zoom affiché qui suit la caméra (320 % → 35 %) |
| Recul dans le logiciel de montage | [3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155), 0:11.15 | film réduit à 60,5 % L en 29 im sine.out ; tête de lecture rembobinée 11,1 s → 0 en 99 im power1.inOut (étude) |

![Le film rétrécit dans l'aperçu d'un faux logiciel de montage (calques, courbe de ressort, forme d'onde) ; la tête de lecture rembobine les chapitres](ILLUS:outil-animation-ecran-2)

*[3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155), 0:11.33 à 0:12.67 : la tête de lecture repart vers 0, l'aperçu rejoue les chapitres à l'envers.*

**Règles de construction**

1. La courbe affichée pilote vraiment l'objet : x linéaire (le temps), y avec l'ease, 13 im, pic de vitesse sur le temps 3 (tequilafunks, étude). Contre-exemple : sahildesigner23 affiche un ressort à +12 %, mais son point arrive sans dépassement.
2. Manipulation : saisie sur le temps, tirage de 3 à 8 im en power2.inOut, légende mise à jour à chaque image ; clic tenu 2 im, maintien 6 im avant de repartir (himanshutwtxs).
3. L'outil est le sujet ou il se tait : éditeur de 39 à 45 % de la largeur (johnsavage-ai, tequilafunks). Widgets de 12 % L et libellés à 1 % H : 4 fiches les jugent illisibles. Ce qui doit se lire fait au moins 4 % H (guide Otom, p. 14).
4. Installation en 4 à 12 im depuis le centre ou l'origine, poignées et tête de lecture 2 à 4 im après (levabashidze). Timecode et zoom affichés justes : c'est la crédibilité.
5. Un seul gadget par film. La boîte « ROT / SHAPE » revient à l'identique dans 3 bobines, aux mêmes images f231-f324 (ajith-io, mrtanviir, umangratani) : un prompt recopié.

La course de six courbes sur rails : voir « Le système de courbes » (chapitre 9). La frise de timeline permanente : voir « L'habillage persistant » (chapitre 2).

**Verdict** : à reprendre dans un showreel ou un explainer de méthode, sur un seul moment fort, en grand. Dans une promo SaaS, à adapter : garde le principe (montrer l'outil qui produit l'effet) avec l'interface de ton produit.

**Quand l'utiliser** : showreel de motion, explainer pédagogique (tes leçons de motion), signature méta. Il sert l'accroche (l'éditeur ouvre le film), la démonstration ou la transition finale (recul dans le logiciel). Il se choisit à la direction artistique. À éviter pour un client non designer, en décor permanent ou en widget de moins de 20 % du cadre.

**HyperFrames (GSAP)**

```js
// Éditeur de courbes : le curseur tire les poignées, la légende suit, la balle trace la courbe
// Mesures de tequilafunks (étude) : 30 fps, 120 BPM, 1 temps = 15 im ; SVG plein cadre en px
const FPS = 30, BEAT = 60 / 120, at = b => b * BEAT, F = n => n / FPS;
const G = { x: 760, y: 820, s: 400 };                 // origine (bas gauche) et côté du graphe
const pt = (u, v) => [G.x + u * G.s, G.y - v * G.s];
const P = { x1: 0.33, y1: 0.33, x2: 0.67, y2: 0.67 }; // départ : droite
const draw = () => {                                   // courbe, poignées et légende depuis P
  const [a, b] = pt(P.x1, P.y1), [c, d] = pt(P.x2, P.y2), [e, f] = pt(1, 1);
  document.querySelector("#curve").setAttribute("d", `M${G.x},${G.y} C${a},${b} ${c},${d} ${e},${f}`);
  gsap.set("#h1", { attr: { cx: a, cy: b } }); gsap.set("#h2", { attr: { cx: c, cy: d } });
  document.querySelector("#cb").textContent =
    `cubic-bezier(${[P.x1, P.y1, P.x2, P.y2].map(v => v.toFixed(2)).join(", ")})`;
};
draw();
// 1. axes tracés en 6 im (chemins en pathLength="1"), curseur posé sur la poignée 1
tl.set("#grid path", { attr: { "stroke-dasharray": 1, "stroke-dashoffset": 1 } }, 0)
  .to("#grid path", { attr: { "stroke-dashoffset": 0 }, duration: F(6), ease: "power2.out" }, 0)
  .set("#cursor", { x: pt(0.6, 0.1)[0], y: pt(0.6, 0.1)[1], autoAlpha: 1 }, F(9))
  .to("#cursor", { x: pt(0.33, 0.33)[0], y: pt(0.33, 0.33)[1], duration: F(5), ease: "power2.out" }, F(9));
// 2. tirage : la poignée et le curseur partagent durée et courbe
const drag = (h, u, v, t0, n) => {
  const [x, y] = pt(u, v);
  tl.to(P, { ["x" + h]: u, ["y" + h]: v, duration: F(n), ease: "power2.inOut", onUpdate: draw }, t0)
    .to("#cursor", { x, y, duration: F(n), ease: "power2.inOut" }, t0);
};
drag(1, 0.83, 0, at(1), 7);                            // saisie sur le temps 1
tl.to("#cursor", { x: pt(0.67, 0.67)[0], y: pt(0.67, 0.67)[1], duration: F(5), ease: "power2.inOut" }, at(1) + F(7));
drag(2, 0.17, 1, at(2) - F(2), 8);                     // 2 im avant le temps 2
// 3. balle : x linéaire, y en power3.inOut (≈ la courbe affichée), pic de vitesse sur le temps 3
const T = F(13), t0 = at(3) - T / 2;
tl.set("#ball", { x: G.x, y: G.y, autoAlpha: 1 }, t0).set("#word", { yPercent: 110 }, 0)
  .to("#ball", { x: G.x + G.s, duration: T, ease: "none" }, t0)
  .to("#ball", { y: G.y - G.s, duration: T, ease: "power3.inOut" }, t0)
  .to("#word", { yPercent: 0, duration: T, ease: "power3.inOut" }, t0); // le mot rejoue la courbe
```

**After Effects**

- Courbe : Layer › New › Shape Layer (Calque › Nouveau › Calque de forme), tracé ouvert ; deux Null Object (objets nuls) H1 et H2 font les poignées. Sur Path (Tracé) : `o=[0,0]; e=[400,-400]; a=fromComp(thisComp.layer("H1").toComp([0,0])); b=fromComp(thisComp.layer("H2").toComp([0,0])); createPath([o,e],[[0,0],b-e],[a-o,[0,0]],false)`.
- Tirage : H1 en 7 im depuis le Composition Marker (marqueur de composition) du temps 1, H2 en 8 im, Easy Ease (Lissage de vitesse) ; mêmes clés sur le curseur. Légende : Source Text (Texte source) qui lit H1 et H2, `toFixed(2)`.
- Balle : clic droit sur Position › Separate Dimensions (Séparer les dimensions). X Position : 2 clés linéaires sur 13 im. Y Position : Animation › Keyframe Velocity (Vélocité de l'image clé), vitesse 0, Influence (influence) 83 % des deux côtés : c'est exactement cubic-bezier(0.83, 0, 0.17, 1).
- Timeline : ligne + Trim Paths (Réduire les tracés), Start (Début) 50 → 0 et End (Fin) 50 → 100 en 6 im ; Effect › Text › Timecode (Effet › Texte › Code temporel). Boîte de transformation reliée à la forme par Parent & Link (Parent et lien).
- Recul : Layer › Pre-compose (Calque › Précomposer) le film, Scale (Échelle) 100 → 60,5 % en 29 im ; Layer › Time › Enable Time Remapping (Calque › Temps › Activer le remappage temporel), 11,1 s → 0 en 99 im, influence 45 % ; tête de lecture : `[linear(thisComp.layer("Film").timeRemap, 0, 11.1, 129, 1394), value[1]]`.
