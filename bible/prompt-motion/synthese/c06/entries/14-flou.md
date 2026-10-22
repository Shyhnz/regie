## Le flou de mouvement et les traînées (directional motion blur, sub-frame accumulation, onion skin, echo outlines, comet trail)

Un objet rapide s'étire dans l'axe de sa vitesse, ou laisse derrière lui des contours fantômes qui montrent l'espacement. Dosé selon la vitesse et coupé à l'arrêt, le flou rend crédibles des gestes de 3 à 6 im. Dans les reels bien notés, il ne touche que les 2 à 6 images les plus rapides de chaque geste. Vue dans 56 vidéos, dont 54 notées 4 ou 5.

![Le mot IN. entre par la droite en traînée floue horizontale sur deux images, puis s'arrête net et reste immobile](ILLUS:flou-1)

*[Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be), 0:11.48 à 0:11.67 : flou sur les seules images rapides, arrêt sec et net, sans rebond.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Flou dosé par la vitesse | [Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be), 0:11.48 | étude 60 fps : « IN. » parcourt 49 % L en 6 im (power2.in) ; traînée de 15-25 % L sur f693-f694 seulement |
| Obturateur 180° calculé | [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:01.80 | HUD « 60 FPS · 180° SHUTTER » ; flou proportionnel, nul au repos ; fort f429-f434 sur la bascule caméra |
| Accumulation trop pauvre | [UGC ad generator promo](https://prompt-motion.com/twoclipping-6dd14e), 0:05.98 | 3 rendus à t ± 1/240 s : « 4.2x » triplé f901-f903 au lieu d'une traînée continue |
| Flou de zoom à l'entrée | [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:01.87 | étude 60 fps : « MOTION » 1,6 → 1 et flou 24 → 0 px en 11 im (power2.out), coupe sur le temps 4 |
| Pelure d'oignon (onion skin) | [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:00.33 | contours à ≈ 30 % d'opacité, serrés à l'apex, espacés près du sol ; effacés en ≈ 20 im |
| Échos de contour en retard | [Claude motion designer showreel](https://prompt-motion.com/3xtihor-0f6911), 0:03.77 | 3 copies (rouge-orangé, lime, noir) à 1-3 im de retard ; écart de 3-4 % au pic, recollées en ≈ 10 im |
| Traînée de comète | [Collision-driven music machine](https://prompt-motion.com/kamstudiolabs-447565), 0:00.40 | bille de 12 px : 6 à 8 échantillons de plus en plus transparents sur ≈ 5 diamètres |
| Traits étirés selon la vitesse | [Drone Emprit showreel](https://prompt-motion.com/ismailfahmi-557268), 0:05.70 | particule en segment : 0,5 % L au repos, 3-8 % L aux pics ; le raccourcissement montre l'ease-out |

![Une balle vermillon rebondit sur une règle de timeline ; ses positions passées restent en contours pâles et une trajectoire pointillée dessine les arcs](ILLUS:flou-2)

*[Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:00.33 à 0:01.57 : les contours se serrent au sommet et s'espacent près du sol, l'espacement devient visible.*

**Règles de construction**

1. Flou seulement au-dessus d'un seuil, environ 40 px par image à 60 fps (vanshwtfff), sur 1 à 3 im par geste (leonkohli). Au pic : 15-25 % L pour un mot qui traverse (roundtablespace). Sans flou, un panoramique de 14 % L par image à 30 fps saccade (kikelopezdesign).
2. Le flou suit la dérivée de la courbe : il grandit en ease-in, décroît en ease-out (roundtablespace). Mesuré : 24 px, puis 1,5 px 13 im plus tard, puis 0 (notdwd-7de38a) ; extinction en 10 à 12 im (notdwd-c2037d). Arrêt sec : flou coupé à l'image d'arrêt.
3. Directionnel, jamais rond sur une translation : horizontal pour un glissé, radial pour un zoom, rotatif pour une rotation (leonkohli). CSS `blur()` est isotrope ; un feGaussianBlur à x et y séparés donne l'axe (notdwd-c2037d).
4. Par accumulation, 8 à 16 sous-images sur un demi-intervalle (obturateur 180°). Avec 3 ou 4, on voit des copies en escalier : 12 px d'écart (demonugc), 6-8 copies (thilina-a). Effet utile : une coupe entre deux images devient un fondu d'1 im (rossaxbt).
5. Échos et pelures : un seul objet à la fois, opacité 30 % au plus, effacés en 10 à 25 im (3xtihor, levabashidze, ultimaxbt). Sur un mot, 8-10 copies chargent le fond (m1n9-k7) ; une traînée irisée rend le mot baveux (sudo-kiran-b055de).
6. Calage (modèles animés sur la musique) : départ sur le temps ou le demi-temps, image nette à l'arrivée. « IN. » part sur le demi-temps 24,5 et s'arrête net 6 im après (roundtablespace). Le point étiré par le flou touche le temps 26 à 0 im (tequilafunks).

**Verdict** : à reprendre. Le flou directionnel coupé à l'arrêt est indispensable aux claquements et aux fouettés à 60 fps. Échos et pelures sont à adapter : un usage par film, pour montrer un timing ou un rebond. Un texte à lire ne reste jamais flou, sinon on retombe dans le mur de mots flous que tu rejettes.

**Quand l'utiliser** : se règle au système de design (étape 6) avec les courbes signature, puis s'applique à la construction de chaque plan. Typo cinétique 1600 et showreel : sur chaque slam, chute de lettres et fouetté ; promo SaaS : cartes qui volent, compteurs, mouvements de caméra. Pelure d'oignon et comète servent l'explainer de timing ou de physique. À éviter sur les micro-mouvements d'interface (antonio-kodheli) et en accumulation sur les rotations rapides (web3wesley). Voir aussi « Le filé », « Lettres en vol : chute, rebond, écrasement, trajectoire courbe », « L'entrée douce : flou vers net, fondu montant » et « La mise au point et la profondeur sans 3D ».

**HyperFrames (GSAP)**

```js
// Flou dosé par la vitesse, coupé à l'arrêt, plus une pelure d'oignon déterministe.
// Flou directionnel en SVG (CSS blur() est isotrope), zone élargie pour la traînée :
// <filter id="fIn" x="-50%" width="200%"><feGaussianBlur id="gIn" stdDeviation="0 0"/></filter>
const FPS = 60, f = n => n / FPS;
const BEAT = 60 / 128, at = b => b * BEAT;          // 128 BPM : 1 temps = 28,125 im
// 1. Coup sec (étude 60 fps) : 49 % L en 6 im power2.in ; vitesse linéaire, donc flou en "none"
const T1 = at(24.5);
tl.set("#in", { x: "49vw", autoAlpha: 1 }, T1)
  .set("#gIn", { attr: { stdDeviation: "0 0" } }, T1)
  .to("#in", { x: 0, duration: f(6), ease: "power2.in" }, T1)
  .to("#gIn", { attr: { stdDeviation: "60 0" }, duration: f(6), ease: "none" }, T1)
  .set("#gIn", { attr: { stdDeviation: "0 0" } }, T1 + f(6));      // arrêt sec : net
// 2. Entrée fouettée : expo.out 14 im (70 % du trajet en 3 im), flou qui décroît pareil
tl.set("#is", { x: "80vw", autoAlpha: 1 }, at(5))
  .set("#gIs", { attr: { stdDeviation: "90 0" } }, at(5))
  .to("#is", { x: 0, duration: f(14), ease: "expo.out" }, at(5))
  .to("#gIs", { attr: { stdDeviation: "0 0" }, duration: f(14), ease: "expo.out" }, at(5));
// 3. Claquement d'échelle : 1,6 → 1 et flou rond 24 → 0 en 11 im (pas de will-change)
tl.set("#motion", { scale: 1.6, filter: "blur(24px)", autoAlpha: 1 }, at(4))
  .to("#motion", { scale: 1, filter: "blur(0px)", duration: f(11), ease: "power2.out" }, at(4));
// 4. Pelure d'oignon : chute de 13 im (power1.in) jusqu'au temps 2, un contour fixe toutes les 3 im
const DUR = f(13), P0 = at(2) - DUR, dx = 120, dy = 420, fall = gsap.parseEase("power1.in");
tl.to("#ball", { x: dx, duration: DUR, ease: "none" }, P0)
  .to("#ball", { y: dy, duration: DUR, ease: "power1.in" }, P0);
for (let k = 0; k * 3 <= 13; k++) {
  const p = (k * 3) / 13, t = P0 + f(k * 3);
  tl.set(`#ghost${k}`, { x: dx * p, y: dy * fall(p), autoAlpha: 0.3 }, t)
    .to(`#ghost${k}`, { autoAlpha: 0, duration: f(20), ease: "power1.out" }, t);
}
```

**After Effects**

- Composition › Composition Settings › Advanced (Composition › Paramètres de composition › Avancé) : Shutter Angle (Angle d'obturateur) 180°, 360° pour un fouetté ; Samples Per Frame (Échantillons par image) 16. Activer le commutateur Motion Blur (Flou de mouvement) des calques et de la composition.
- Pour doser à la main : Effect › Blur & Sharpen › Directional Blur (Effet › Flou et netteté › Flou directionnel), Blur Length 0 → 60 en 6 im, clés Linear. Retour à 0 sur l'image d'arrêt par une clé Toggle Hold Keyframe (image clé maintenue).
- Zoom : Effect › Blur & Sharpen › Radial Blur (Flou radial), Type Zoom, Amount 24 → 0 en 11 im, ou Camera Lens Blur (Flou de l'objectif) comme dans l'étude du Keyframe reel.
- Échos de contour : dupliquer la forme en contour seul ; Position par expression `thisComp.layer("Forme").transform.position.valueAtTime(time - 2 * thisComp.frameDuration)` (2, 4 puis 6 im) ; Opacity 30 %. Comète : Effect › Time › Echo (Temps › Écho), Echo Time −0,017 s, Number Of Echoes 7, Decay 0,75.
- Pelure d'oignon : un duplicata par position, Layer › Time › Freeze Frame (Calque › Temps › Figer l'image) toutes les 3 im, contour seul, Opacity 30 → 0 en 20 im.
