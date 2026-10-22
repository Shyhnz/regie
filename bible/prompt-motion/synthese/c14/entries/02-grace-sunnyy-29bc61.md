## Keyframe motion design reel — @Grace_sunnyy

Craft **5/5** · 15.061 s · 60 fps · fiche : [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61)

Reel bâti sur une horloge à 128 BPM où chaque coupe tombe sur l'image ceil(n × 28,125). L'étude mesure une grammaire stable : entrées expo.out ou power4.out de 10-14 im, masques qui couvrent en 4 im, poussée de +3-5 % avant chaque coupe, un seul rebond (back.out(1.4)) et des transitions sur les croches puis les triples-croches.

![MOTION 1,6 → 1 en power2](ILLUS:grace-sunnyy-29bc61-1)

*[Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:01.87 à 0:02.83 : MOTION 1,6 → 1 en power2.out (f113-f123), poussée +3,6 % (f132-f140), coupe f141 : IS entre en expo.out (f141-f155), poussée +5 %, coupe f169.*

![TURN, GLITCH, SPIN](ILLUS:grace-sunnyy-29bc61-2)

*[Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:09.82 à 0:10.58 : TURN, GLITCH, SPIN : masque qui couvre en 4 im, rotation résiduelle power2/3.out en 9-10 im, une coupe toutes les 14 im (f591, f605, f619, f633).*

**Grille** : 128 BPM : temps = 28,125 im, 8 mesures = 900 im, une scène par mesure. Coupes sur ceil(n × 28,125), 0 à +0,9 im. Un mot par temps (mesure 2), une transition par croche (mesure 6), ECHO en triples-croches, 7 im de noir avant le temps 24.

**Feuille de timing (extrait)**

| Temps | Élément | Mouvement | Durée | Courbe | Calage |
| --- | --- | --- | --- | --- | --- |
| 0:00.95 (f57-f84) | tête de lecture et point rouge sur la courbe | x (le point suit la courbe en y) : 20,7 % L → 80,3 % L | 27 im (0.45 s) | none | du temps 2 (56,25) au temps 3 (84,4) : 1 temps exact |
| 0:01.55 (f93-f107) | losange KEY 02 → fond rouge | taille (racine de l'aire visible) : 5 % du cadre → plein cadre | 14 im (0.23 s) | sine.in | plein cadre f107 ; 5 im de rouge figé (f108-f112) avant le temps 4 |
| 0:01.87 (f112-f123) | « MOTION » (encre sur rouge) | échelle : 1,6 (1,42 à la 1re image) → 1 | 11 im (0.18 s) | power2.out | coupe f113 = temps 4 (112,5 ; +0,5 im), attaque de grosse caisse |
| 0:02.35 (f141-f155) | « IS » rouge sur noir | x (bord gauche) : 109,7 % L (+1 500 px sur 1 920) → 31,6 % L | 14 im (0.23 s) | expo.out | coupe f141 = temps 5 (140,6 ; +0,4 im) |
| 0:02.97 (f178-f190) | soulignement rouge de « MEANING » | longueur (bord droit) : 6,7 % L → 93,0 % L | 12 im (0.20 s) | power3.inOut | part au demi-temps 6,375 (179,3), finit f190 = 6,75 (189,8 ; +0,2 im) |
| 0:03.28 (f197-f210) | manifeste MOTION / IS / MEANING. | tranches décalées qui se recalent : décalage ±10 % L → aligné ; décalage 5 tranches + copies rouge et grise | 13 im en 6 paliers | steps (1 image sur 2) | coupe f197 = temps 7 (196,9 ; +0,1 im) |
| 0:03.75 (f225-f242) | octaèdre (travelling avant) | hauteur projetée : 0 → 48,6 % H (pic 52,8 % à f236) | 17 im (0.28 s) | back.out(1.4), dépassement +8,6 % (11 im après le départ) | naît sur le temps 8 (225 ; 0 im) ; posé f242 |
| 0:04.70 (f281-f289) | 128 triangles (SHATTER) | dispersion horizontale (écart-type) : 5,2 % L → 16,8 % L ; décalage tous ensemble + onde de choc circulaire | 8 im (0.13 s) | power1.out | temps 10 (281,25 ; f282, +0,75 im) |
| 0:05.20 (f312-f320) | triangles (REASSEMBLE) | dispersion horizontale : 14,3 % L → 6,3 % L ; décalage grands pas puis petits | 8 im (0.13 s) | power3.out | amorce f309 = temps 11 (309,4) ; effondrement f312-f320 |
| 0:06.67 (f400-f414) | particules → mot « ORDER » | dispersion verticale : 24,6 % H → 9,9 % H | 14 im (0.23 s) | power1.inOut | convergence f400-f414, mot net f420 ; soulignement f422 = temps 15 (421,9 ; +0,1 im) |
| 0:07.75 (f465-f505) | compteur d'images « 0 → 900 » | valeur : 0 → 900 | 40 im (0.67 s) | power2.inOut | part au demi-temps 16,5 (464,1 ; +0,9 im), arrive f505, 1 im avant le temps 18 |
| 0:09.37 (f562-f571) | IRIS : cercle rouge (clip-path) | rayon (centre 50 % / 50 %) : 0 → 370 px (sur 640 : plein cadre) | 9 im (0.15 s) | power2.out | coupe f563 = temps 20 (562,5 ; +0,5 im) ; 71 px à f563, 188 px à f564 |
| 0:09.62 (f577-f587) | « WHIP » (le plan IRIS part à gauche) | x (bord gauche du mot) : 119,4 % L → 19,4 % L | 10 im (0.17 s) | power4.out | demi-temps 20,5 (576,6 ; f577, +0,4 im) |
| 0:09.83 (f590-f603) | TURN : carte os puis mot | couverture (aire os) puis angle du mot : 0 % / −21,8° → 75,9 % (f594) / 0° | 4 + 9 im | power2.inOut (couverture) puis power2.out (angle) | temps 21 (590,6 ; f591, +0,4 im) |
| 0:10.30 (f618-f633) | SPIN : masque losange puis mot | couverture (aire rouge) puis angle : 0 % / +39,5° → 75,4 % (f622) / 0° | 4 + 10 im | power2.inOut (couverture) puis power3.out (angle) | temps 22 (618,75 ; f619, +0,25 im) |
| 0:10.78 (f647-f661) | « ECHO » et 4 copies en contour | apparition des copies : 0 → 4 copies ; décalage 3-4 im = 1 triple-croche | 4 paliers | coupe | coupe f647 = temps 23 (646,9 ; +0,1 im) ; copies +0,6 / +0,1 / +0,6 / +0,1 im après chaque triple-croche |
| 0:11.07 (f664-f675) | anneau IMPLODE puis noir | rayon : 102 % H (hors cadre) → 0 (point) ; décalage ECHO réduit et tourné à l'intérieur | 4 im (0.07 s) | sine.in | noir avec point f668-f674 (7 im, trou audio) ; éclatement f675 = temps 24 (675 ; 0 im) |
| 0:11.75 (f705-f727) | « CLAUDE » qui sort de derrière le losange | bord droit (masque au bord du losange) : 29,8 % L → 84,5 % L | 22 im (0.37 s) | power3.out | part f706, 1 im après l'arrivée du losange |

**Courbes de la vidéo**

| Mouvement | Courbe | Durée | Preuve |
| --- | --- | --- | --- |
| Arrivées latérales et mots qui se posent (IS, WHIP, CLAUDE, réassemblage) | expo.out / power4.out / power3.out | 8-22 im | IS 2,4 % ; WHIP 1,9 % ; CLAUDE 1,3 % ; triangles 2,6 % |
| Claquement d'échelle, iris, rotation résiduelle d'un mot | power2.out / power3.out | 9-11 im | MOTION 3,2 % ; IRIS 3,8 % ; TURN 2,4 % ; SPIN 1,3 % |
| Masques qui couvrent l'écran (carte TURN, losange SPIN) | power2.inOut | 4 im | 2 mesures, 3,1 et 4,9 % |
| Naissance d'un objet 3D (seul rebond) | back.out(1.4) | 17 im | octaèdre +8,6 %, rms 1,6 % |
| Plongées et sorties qui finissent sur la coupe (zoom dans le losange, implosion, sortie de GRID, poussées) | sine.in / power4.in / power2.in | 4-14 im | zoom 2,9 % ; anneau 5,3 % ; GRID 2,7 % |
| Traits, compteur, convergence de particules | power3.inOut / power2.inOut / power1.inOut | 12-40 im | soulignement 3,2 % ; compteur 0,9 % ; ORDER 3,7 % |
| Défilement du temps et onde de choc | none / expo.out | 27 im / ≈50 im | tête de lecture 1,4 % ; anneau 0,8 % |
| Glitch en paliers | steps (1 image sur 2 = 30 i/s) | 11-13 im | différentiel alterné sur 2 plans |

**Leçons**

1. Coupe sur l'image ceil(n × 28,125) : 113, 141, 169, 197, 225, 450… (0 à +0,9 im). Un mot par temps, une transition par croche, un écho par triple-croche.
2. Transition de 14 im : masque qui couvre en 4 im (power2.inOut), mot qui finit de tourner en 9-10 im (power2-3.out), 0-4 im de repos avant la croche suivante.
3. Ne laisse jamais mourir un plan figé : poussée d'échelle de +3 à +5 % sur les 8 dernières images avant la coupe (power2.in).
4. Entrées latérales en expo.out ou power4.out de 10-14 im depuis +80 à +100 % de la largeur : 70 % du trajet en 3 images, flou proportionnel à la vitesse.
5. Un seul rebond dans la vidéo : l'objet qui naît (back.out(1.4), +8,6 % à 11 im, posé à 17 im) ; tous les mots se posent sans dépassement.
6. Silence écrit : anneau qui se referme en sine.in 4 im, 7 im de noir avec un point, éclatement expo.out pile sur le 1er temps de la mesure.

**HyperFrames (GSAP)**

```js
// Mesure 2 « KINETIC TYPE » (f112 → f225), 128 BPM à 60 i/s
const FPS = 60, BEAT = 60 / 128;     // 1 temps = 28,125 im
const F = n => n / FPS;               // images → secondes
const B = n => n * BEAT;              // temps → secondes : la coupe tombe sur ceil(n × 28,125)
const tl = gsap.timeline({ paused: true });
// temps 4 : MOTION claque, échelle 1,6 → 1 et flou 24 → 0 en 11 im (power2.out)
tl.set("#motion", { autoAlpha: 1 }, B(4))
  .fromTo("#motion", { scale: 1.6, filter: "blur(24px)" },
      { scale: 1, filter: "blur(0px)", duration: F(11), ease: "power2.out" }, B(4))
// poussée +3,6 % sur les 8 dernières images (le plan ne s'arrête jamais)
  .to("#motion", { scale: 1.036, duration: F(8), ease: "power2.in" }, B(5) - F(8))
// temps 5 : coupe sur noir, IS entre de +1 500 px en expo.out (14 im)
  .set("#motion", { autoAlpha: 0 }, B(5)).set("#is", { autoAlpha: 1 }, B(5))
  .from("#is", { x: 1500, duration: F(14), ease: "expo.out" }, B(5))
  .to("#is", { scale: 1.05, duration: F(8), ease: "power2.in" }, B(6) - F(8))
// temps 6 : MEANING, lettres décalées de 1,3 im (22 ms), montée + rotation circ.out
  .set("#is", { autoAlpha: 0 }, B(6)).set("#meaning", { autoAlpha: 1 }, B(6))
  .from("#meaning .ch", { yPercent: 40, rotation: -6, color: "#8A847C",
      duration: F(13), ease: "circ.out", stagger: 0.022 }, B(6))
// soulignement : 12 im en power3.inOut, du demi-temps 6,375 à 6,75
  .from("#underline", { scaleX: 0, transformOrigin: "0% 50%",
      duration: F(12), ease: "power3.inOut" }, B(6.375))
// temps 7 : manifeste, tranches recalées en paliers de 2 im (30 i/s)
  .set("#meaning", { autoAlpha: 0 }, B(7)).set("#manifest", { autoAlpha: 1 }, B(7))
  .from("#manifest .slice", { x: () => gsap.utils.random(-64, 64),
      duration: F(12), ease: "steps(6)" }, B(7))
// sortie : tranches puis écrasement en ligne (f216-f224), croix pile sur le temps 8
  .to("#manifest", { scaleY: 0.005, duration: F(8), ease: "steps(4)" }, B(8) - F(9))
  .set("#cross", { autoAlpha: 1 }, B(8))
// l'octaèdre naît sur le temps 8 : seul rebond, back.out(1.4) sur 17 im
  .fromTo("#octa", { scale: 0 }, { scale: 1, duration: F(17), ease: "back.out(1.4)" }, B(8));
```

**After Effects**

- Composition 60 i/s : marqueurs à ceil(n × 28,125) = 113, 141, 169, 197, 225, 450, 563, 577, 591, 605, 619, 633, 647, 675. Couper exactement sur ces images.
- MOTION : Scale (Échelle) 160 → 100 % des images 112 à 123, départ influence 0 %, arrivée influence 75 % (≈ power2.out) ; Camera Lens Blur (Flou de l'objectif) 24 → 0 sur les mêmes clés.
- IS et WHIP : X Position (Position X) +1 500 px → 0 en 10-14 im, clé de départ vitesse maximale, clé d'arrivée influence 90 % (≈ expo.out) ; Motion Blur (flou de mouvement) activé, Shutter Angle (angle d'obturation) 360°.
- Octaèdre : Scale 0 → 108,6 % à +11 im → 100 % à +17 im depuis l'image 225 ; Easy Ease (lissage de vitesse) sur la clé haute (≈ back.out(1.4)).
- Mesure 6 : un pre-comp (précomp) par transition de 14 im ; Mask (masque) qui couvre en 4 im (Easy Ease), mot qui tourne de −22° ou +40° à 0° en 9-10 im, influence entrante 85 %.
