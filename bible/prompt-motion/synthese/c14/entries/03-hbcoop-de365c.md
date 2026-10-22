## Full Stop figure sequence — @HBCoop_

Craft **5/5** · 29.056 s · 60 fps · fiche : [Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c)

Plan-séquence de 29 s sans coupe, calé sur une grille exacte de 30 im (120 BPM). L'étude révèle la règle cachée : la mi-course de chaque geste inOut tombe pile sur un temps ou un demi-temps, les zooms du point sont interpolés en logarithme, la fin rejoue l'ouverture à l'envers, et les rebonds suivent e = 0,75 à l'image près.

![Tour de cercle en 57 im (power2](ILLUS:hbcoop-de365c-1)

*[Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), 0:04.47 à 0:05.53 : Tour de cercle en 57 im (power2.inOut) : départ f271, 180° pile sur le temps f300, bouclé f328 ; le point repart au centre en 27 im.*

![Retour au point final](ILLUS:hbcoop-de365c-2)

*[Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), 0:24.00 à 0:26.00 : Retour au point final : glisse et rapetisse f1442-f1498 (sine.inOut, mi-course f1470 sur le temps), frappe dès f1500, « this » touche le point f1556.*

**Grille** : 120 BPM : 1 temps = 30 im, 1 mesure = 120 im, grille exacte dès f0 (audio +1 im). « FIG. N » change pile à f120, 240, 360, 480, 720, 960, 1260, 1560. Mi-course des gestes sur temps ou demi-temps ; lancer et 1er impact sur le temps.

**Feuille de timing (extrait)**

| Temps | Élément | Mouvement | Durée | Courbe | Calage |
| --- | --- | --- | --- | --- | --- |
| 0:00.58 (f35-f116) | point (FIG. 1) | x / y : (71,35 ; 57,45) % → (49,96 ; 49,91) % | 81 im (1.35 s) | sine.inOut | départ f35 (+5 im après le temps 1), mi-course f75 = demi-temps 2,5, posé f116 (4 im avant le temps 4) |
| 0:00.58 (f35-f116) | point (FIG. 1) | diamètre (échelle) : 1,34 % H → 12,0 % H (×9) | 81 im (1.35 s) | sine.inOut sur log(échelle) | même départ, même arrivée que x |
| 0:00.63 (f38-f58) | légende « FIG. 1 a point » | frappe lettre à lettre : « FIG. 1 » → « a point » ; décalage 3 im par lettre, gauche → droite (f41, 44, 46, 49, 52, 55, 58) | 20 im (0.33 s) | coupe par lettre | non calé (première légende) |
| 0:01.88 (f113-f124) | légende FIG. 1 → FIG. 2 | effacement puis frappe : « a point » → « FIG. 2 a… » ; décalage effacement 1 im par lettre (f113 → f119), frappe 3 im par lettre dès f124 | 11 im (0.18 s) | coupe par lettre | « FIG. 2 » pile sur le temps 4 (f120, 0 im) ; effacement fini 1 im avant |
| 0:02.60 (f156-f202) | point-plume | x (retour à gauche) : 67,9 % L → 34,8 % L | 46 im (0.77 s) | power1.inOut | mi-course f179-180 = temps 6 (0 à −1 im) |
| 0:04.52 (f271-f328) | point (FIG. 3) | angle sur le cercle : 0° → 360° (tour complet, anti-horaire) | 57 im (0.95 s) | power2.inOut | 180° (bout gauche) pile sur f300 = temps 10 (0 im) |
| 0:06.00 (f360-f496) | caméra (cercle → sol) | rapport hauteur/largeur de l'ellipse : 1,00 (vue de dessus) → 0,50 (élévation ≈ 30°) | 136 im (2.27 s) | power2.inOut | départ f360 = temps 12 (0 im) ; mi-course f428 ; fin f496 (demi-temps 16,5, +1 im) |
| 0:08.53 (f512-f521) | sphère noire → verre | balayage (luminance moyenne du disque) : 48/255 (noir) → 230/255 (verre) ; décalage haut → bas : le noir « s'écoule » (haut vidé f516, bas f520) | 9 im (0.15 s) | sine.inOut | départ f512 (demi-temps 17 + 2 im) |
| 0:11.70 (f702-f720) | balle (anticipation) | largeur/hauteur : 0,93 (repos, reflet) → 1,27 à f717 puis 0,92 à f720 | 18 im (0.30 s) | none (écrasement linéaire) puis relâche 3 im, dépassement étiré 1,09 au décollage | lancer f720 = temps 24 (0 im) |
| 0:12.00 (f720-f745) | balle | y (montée) : 60,1 % H → 26,9 % H (apogée) | 25 im (0.42 s) | power2.out | départ temps 24 (0 im) ; apogée f745 |
| 0:12.42 (f745-f780) | balle | y (chute) : 26,9 % H → 68,4 % H | 35 im (0.58 s) | power1.in | impact f780 = temps 26 (0 im ; choc audio 13,015 s = +1 im) |
| 0:13.00 (f780-f942) | balle | impacts (série) : f780 → f942 (repos f945) ; décalage intervalles 45, 34, 25, 19, 14, 11, 8, 6 im (rapport 0,73-0,79) | 162 im (2.70 s) | physique (e = 0,75), dépassement écrasements 1,44 / 1,29 / 1,22 / 1,15 / 1,09 / 1,03 | 2e impact f825 = demi-temps 27,5 (0 im) ; 4e f884 = demi-temps −1 im ; les autres suivent la physique |
| 0:16.02 (f961-f977) | balle → nuée | haut de l'enveloppe : 44,4 % H → 27,8 % H (enveloppe 23,5 → 40,4 % H) ; décalage particules arrachées du haut vers le bas | 16 im (0.27 s) | power2.out | f961 = temps 32 + 1 im |
| 0:23.07 (f1384-f1438) | globe → point | diamètre : 29,6 % L (52,6 % H) → 6,4 % L (11,4 % H) | 54 im (0.90 s) | power2.inOut | départ f1384 (temps 46 + 4 im) ; mi-course f1411 = demi-temps 47 + 1 im ; posé f1438 (2 im avant le temps 48) |
| 0:24.03 (f1442-f1498) | point | x / y : (50,0 ; 49,9) % → (71,0 ; 57,4) % | 56 im (0.93 s) | sine.inOut | départ f1442 (+2 im), mi-course f1470 = temps 49 (0 im), posé f1498 (2 im avant le temps 50) |
| 0:25.00 (f1500-f1556) | phrase « Claude Opus 5.5 wrote / every frame of this » | frappe : 0 caractère → 40 caractères + le point qui attendait ; décalage 1 caractère par image dans les mots ; pauses aux espaces 2-5 im (avant « wrote » 4 im, avant « this » 5 im) ; retour à la ligne 3 im (f1527 → f1530) | 56 im (0.93 s) | coupe par lettre | départ f1500 = temps 50 (0 im) ; « this » touche le point f1556 (4 im avant le temps 52) |

**Courbes de la vidéo**

| Mouvement | Courbe | Durée | Preuve |
| --- | --- | --- | --- |
| Gestes du point-plume : tracé de la ligne, allers-retours, retour au centre | power1.inOut | 22-46 im | 4 mesures, rms 1,1 à 3,5 % ; mi-course toujours sur temps ou demi-temps |
| Tracé circulaire, bascule de caméra 2D → 3D, effondrement du globe | power2.inOut | 54-136 im | 4 mesures, rms 1,2 à 2,7 % |
| Déplacement + changement de taille du point (×9 puis ÷8), travellings de caméra | sine.inOut (échelle en logarithme) | 42-180 im | 6 mesures, rms 1,5 à 5,7 % |
| Balle : montée / chute ; anticipation | power2.out / power1.in ; none | 25 / 35 im ; 15 im | rms 1,7 / 3,3 / 5,8 % ; 9 impacts en rapport 0,75 |
| Éclatement en particules | power2.out | 16 im | 1 mesure, rms 4,9 %, moitié du trajet en 3 im |
| Changements de matière (noir ↔ verre) par balayage vertical | sine.inOut / power1.inOut | 9 im (vidange) / 5-6 im (remplissage) | 2 mesures, rms 7,5 et 7,7 % |
| Fondu du crédit ; respiration finale de la carte | sine.inOut ; power2.out | 29 im ; 140-180 im | rms 5,2 % et 2,5 % |

**Leçons**

1. Caler la mi-course (pic de vitesse) d'un geste inOut sur le temps, pas son départ : départ = temps − durée/2. Ici 9 gestes sur 10 à 0-1 im.
2. Zoom ×9 d'un objet : interpoler l'échelle en logarithme avec sine.inOut, sur la même durée que la position (81 im) ; finir par le même geste inversé (56 im).
3. Rebond : montée power2.out 25 im, chute power1.in 35 im, intervalles × 0,75, écrasement 1,44 sur 1 seule image puis −0,07 par rebond ; anticipation linéaire de 15 im.
4. Légendes : effacer à 1 im par lettre jusqu'à 1 im avant le temps, « FIG. N » change sur le temps, frappe à 3 im/lettre 3-4 im après.
5. Phrase tapée : 1 caractère par image dans les mots, 2 à 5 im de pause aux espaces, départ sur le temps ; 40 caractères en 56 im restent lisibles.
6. Ne rien figer : hors la 1re seconde, aucun maintien au-delà de 5 im ; la carte dézoome de 2 % (power2.out), le curseur bat 30 / 30 im.

**HyperFrames (GSAP)**

```js
// Ouverture f0 → f360 (6 s) : point tapé, zoom en log, plume, cercle — 120 BPM
const FPS = 60, BEAT = 30;                      // 1 temps = 30 im = 0,5 s, grille dès f0
const F = n => n / FPS, B = n => F(n * BEAT);  // images / temps -> secondes
const mid = (beat, frames) => B(beat) - F(frames) / 2; // départ pour caler la MI-COURSE sur le temps
const tl = gsap.timeline({ paused: true });    // #dot centré (xPercent/yPercent -50), left/top en %
const s0 = 1.34 / 12, z = { p: 0 };             // ∅ 1,34 % H -> 12 % H (taille CSS = 12 % H)
const zoom = () => gsap.set("#dot", { scale: s0 * Math.pow(1 / s0, z.p) }); // échelle en log
// point tapé sur le temps 1, attend 5 im, puis glisse au centre en 81 im (mi-course f75)
tl.set("#dot", { autoAlpha: 1, left: "71.35%", top: "57.45%", scale: s0 }, B(1))
  .to("#dot", { left: "50%", top: "50%", duration: F(81), ease: "sine.inOut" }, F(35))
  .to(z, { p: 1, duration: F(81), ease: "sine.inOut", onUpdate: zoom }, F(35))
// légende : frappe 3 im/lettre, effacement 1 im/lettre fini 1 im avant le temps 4
  .from("#cap1 .ch", { autoAlpha: 0, duration: 0.001, stagger: F(3) }, F(41))
  .to("#cap1 .ch", { autoAlpha: 0, duration: 0.001, stagger: { each: F(1), from: "end" } }, F(113))
  .set("#fig1", { autoAlpha: 0 }, B(4)).set("#fig2", { autoAlpha: 1 }, B(4))  // FIG. 2 SUR le temps
  .from("#cap2 .ch", { autoAlpha: 0, duration: 0.001, stagger: F(3) }, B(4) + F(4))
// plume : allers-retours power1.inOut, mi-course sur temps / demi-temps (#line suit via scaleX)
  .to("#dot", { left: "68.7%",  duration: F(23), ease: "power1.inOut" }, mid(4.5, 23)) // f135
  .to("#dot", { left: "34.8%",  duration: F(46), ease: "power1.inOut" }, mid(6, 46))   // f180
  .to("#dot", { left: "50%",    duration: F(22), ease: "power1.inOut" }, mid(7.5, 22)) // f225
  .to("#dot", { left: "63.75%", duration: F(25), ease: "power1.inOut" }, mid(8.5, 25)) // f255
// FIG. 3 : un tour de cercle en 57 im, 180° pile sur le temps 10 (f300)
  .set("#dot", { autoAlpha: 0 }, F(271)).set("#orbitDot", { autoAlpha: 1 }, F(271)) // point enfant de #orbit
  .to("#orbit", { rotation: -360, duration: F(57), ease: "power2.inOut" }, mid(10, 57))
  .to("#ring", { strokeDashoffset: 0, duration: F(57), ease: "power2.inOut" }, mid(10, 57))
  .set("#orbitDot", { autoAlpha: 0 }, F(331)).set("#dot", { autoAlpha: 1 }, F(331))
// retour au centre en 27 im (mi-course f345), posé 3 im avant FIG. 4
  .to("#dot", { left: "50%", duration: F(27), ease: "power2.inOut" }, mid(11.5, 27))
  .to("#cap3 .ch", { autoAlpha: 0, duration: 0.001, stagger: { each: F(1), from: "end" } }, F(353))
  .set("#fig3", { autoAlpha: 0 }, B(12)).set("#fig4", { autoAlpha: 1 }, B(12)); // bascule 3D dès f360
```

**After Effects**

- Composition 1920 × 1080 à 60 i/s, marqueurs tous les 30 im (temps) et 120 im (mesure). Placer la MI-COURSE de chaque déplacement sur un marqueur : 1re clé = marqueur − durée/2.
- Allers-retours du point : 2 images clés, Easy Ease (Lissage de vitesse), influence 33 % des deux côtés (≈ power1.inOut). Tour de cercle en 57 im : influence 60-65 % (≈ power2.inOut), 180° sur le marqueur f300.
- Zoom ×9 du point : expression sur Scale (Échelle) s = 11.2*Math.exp(ease(time, t0, t1, 0, Math.log(9))) avec t0-t1 = position ; la taille croît d'un même facteur par image au milieu.
- Rebond : Y Position (Position Y) séparée ; montée vitesse de départ forte, influence d'arrivée 66 % (power2.out) ; chute influence de départ 33 % (power1.in). Scale 144/69 % sur l'image de contact seule ; intervalles × 0,75.
- Légendes : animateur Animate › Opacity (Animer › Opacité) par caractère ; Range Selector › End (Sélecteur de plage › Fin) animée 1 lettre par image pour effacer, 1 lettre toutes les 3 im pour taper ; « FIG. N » remplacé sur le marqueur.
