## Claude motion designer showreel — @stephanlivera

Craft **4/5** · 15.061 s · 60 fps · fiche : [Claude motion designer showreel](https://prompt-motion.com/stephanlivera-df17a2)

Le banc d'essai le plus propre du corpus : six billes parties sur le même temps rejouent à 2,4 % près les eases GSAP par défaut (none, power2.inOut, expo.out, back.out, elastic.out, bounce.out). Autour, chaque coupe tombe à 0 im de round(k × 28,125). L'étude ajoute un fait : l'image précède l'attaque audio d'≈ 2 im.

![Banc d'essai](ILLUS:stephanlivera-df17a2-1)

*[Claude motion designer showreel](https://prompt-motion.com/stephanlivera-df17a2), 0:04.20 à 0:05.17 : Banc d'essai : six billes parties au temps 9 (f253), arrivées au temps 11 (f310). Linéaire, power2.inOut, expo.out, back.out(2.2) (+17,6 %), elastic.out, bounce.out.*

![Astérisque réduit à un point en sine](ILLUS:stephanlivera-df17a2-2)

*[Claude motion designer showreel](https://prompt-motion.com/stephanlivera-df17a2), 0:01.63 à 0:02.18 : Astérisque réduit à un point en sine.in (f99-f110), point tenu 3 im, iris crème sur le temps 4 (f113), puis iris rouge 3 im plus tard.*

**Grille** : 128 BPM : 1 temps = 28,125 im, grille partant de 0, 32 temps = 8 mesures = 900 im. Coupes et départs sur round(k × 28,125) à 0 im ; un morph par temps ; mots au demi-temps (14 im). Les attaques audio arrivent 1,4 à 2,1 im après.

**Feuille de timing (extrait)**

| Temps | Élément | Mouvement | Durée | Courbe | Calage |
| --- | --- | --- | --- | --- | --- |
| 0:01.65 (f99-f110) | astérisque rouge | diamètre : 44,3 % H → 0 (point) | 11 im (0.18 s) | sine.in | départ demi-temps 3,5 (f98,4) +1 im |
| 0:01.87 (f112-f126) | disque crème (iris) | rayon : 0 → 102 % H (coins couverts) | 14 im (0.23 s) | circ.out | f113 = temps 4 (f112,5) : coupe à 0 im |
| 0:01.95 (f117-f140) | lettres de « CLAUDE » | y (montée derrière un masque) : +15 % H → 0 ; décalage 2 im par lettre, gauche → droite (L f117, A f119, U f121, D f123, E f125) | 23 im (0.38 s) | power2.out | 1re lettre 4 im après le temps 4 |
| 0:04.20 (f252-f310) | bille 2 « ease-in-out » | x : 34,3 % L → 88,5 % L | 58 im (0.97 s) | power2.inOut | 2 temps exacts (58 im) |
| 0:04.20 (f252-f310) | bille 3 « expo-out » | x : 34,3 % L → 88,5 % L | 58 im (0.97 s) | expo.out | 2 temps |
| 0:04.20 (f252-f310) | bille 4 « back-out » | x : 34,3 % L → 88,5 % L | 58 im (0.97 s) | back.out(2.2), dépassement +17,6 % (98,0 % L) | pic f282-f283 = demi-temps 10 (f281,3) +1 |
| 0:04.20 (f252-f310) | bille 5 « elastic » | x : 34,3 % L → 88,5 % L | 58 im (0.97 s) | elastic.out(1, 0.3), dépassement ≈ +17 %, puis −13 %, +5 % | 2 temps |
| 0:04.20 (f252-f310) | bille 6 « bounce » | x : 34,3 % L → 88,5 % L | 58 im (0.97 s) | bounce.out | impacts f273, f294, f304, repos f310 (temps 11) |
| 0:05.27 (f316-f330) | 6 billes | x (convergence vers le centre) : 88,4 % L → 50,0 % L | 14 im (0.23 s) | power3.inOut | pic de vitesse f324-f325 = demi-temps 11,5 (f323,4) +1 |
| 0:05.63 (f338-f365) | disque crème sur fond bleu | diamètre : 12,2 % H → 33,5 % H | 27 im (0.45 s) | ressort sur mesure, dépassement +33 % | pic sur le demi-temps 12,5 (f351,6) ; repos sur le temps 13 (f365,6) |
| 0:06.10 (f366-f394) | forme crème : cercle → triangle | morphing puis rotation : cercle → triangle | 28 im (0.47 s) | sine.inOut | départ temps 13 (f365,6) ; morph fini au demi-temps 13,5 (f379,7) |
| 0:11.48 (f688-f695) | « IN. » | x (bord gauche, entrée par la droite) : 75,0 % L → 25,7 % L | 7 im (0.12 s) | power2.in | départ demi-temps 24,5 (f689,1) ; arrêt sec f695 |
| 0:11.70 (f702-f714) | « EASE » bleu (lettre E) | y (montée du bas) : 100 % H → 14,6 % H ; décalage ≈ 1 im par lettre | 12 im (0.20 s) | back.out(1.0) | temps 25 (f703,1, 0 im) |
| 0:11.95 (f717-f730) | « OUT. » | x (bord droit, entrée par la gauche) : 0 % L → 81,0 % L | 13 im (0.22 s) | power4.out | demi-temps 25,5 (f717,2, 0 im) |
| 0:12.65 (f759-f775) | « LINEAR. » | x (bord droit) : 89,6 % L → 77,2 % L | 16 im (0.27 s) | none | temps 27 (f759,4, 0 im) |
| 0:12.93 (f776-f787) | point rouge de « LINEAR. » | diamètre : 5,7 % H → plein cadre (f787) | 11 im (0.18 s) | power3.in | plein cadre f787 = temps 28 (f787,5, 0 im) |

**Courbes de la vidéo**

| Mouvement | Courbe | Durée | Preuve |
| --- | --- | --- | --- |
| Banc d'essai : les six eases GSAP par défaut sur la même durée (2 temps) | none / power2.inOut / expo.out / back.out(2.2) / elastic.out(1, 0.3) / bounce.out | 58 im | 6 mesures, rms 0,4 à 2,4 % |
| Entrées de mots et d'iris qui claquent | power4.out / expo.out / circ.out | 13-15 im | 3 mesures, rms 1,0 à 2,9 % |
| Sorties et avalements (point qui devient iris, mot qui sort, astérisque réduit à un point) | power2.in / power3.in / circ.in / sine.in | 7-11 im | 4 mesures, rms 1,8 à 3,7 % |
| Ressorts d'objets (disque, lettres qui tombent) | ressort sur mesure ≈ back.out(2.2) | 11-27 im | 2 mesures, rms ≈ 12 %, dépassements +15 % et +33 % |
| Mouvement démonstratif à vitesse constante | none | 16-58 im | 2 mesures, rms 0,4 et 0,9 % |
| Morphings de formes, un par temps | sine.inOut (estimé) | 14 im (un demi-temps) | 3 morphs, départs à 0 im du temps |

**Leçons**

1. Coupes sur round(k × 28,125) à 128 BPM en 60 fps : alternez 28 et 29 im, ne posez jamais une grille arrondie à 28 im qui dériverait d’1 im tous les 8 temps.
2. Un même départ pour comparer : 6 eases sur 58 im (2 temps), départ et arrivée sur un temps ; à mi-course, back.out(2.2) est déjà à 98 % L.
3. Entrée de mot : power4.out sur 13 im (0 → 81 % L) ; sortie : power2/3.in sur 7-10 im, finie 2 im avant la coupe suivante.
4. Ressort : pic de dépassement (+33 %) sur le demi-temps, retour au repos sur le temps suivant, où démarre l'action suivante.
5. Morph en 14 im (un demi-temps) puis 14 im de rotation lente : chaque temps porte un changement de forme lisible.
6. Avant le drop, 10 im de noir ; le premier mot tombe sur le temps 24, l'image 1 à 2 im avant l'attaque audio.

**HyperFrames (GSAP)**

```js
// Showreel f252-f394 : banc des 6 eases, convergence, disque-ressort, morph
const FPS = 60, BEAT = 28.125;                      // 128 BPM : 1 temps = 28,125 im
const f = n => n / FPS;                             // image -> secondes
const b = k => Math.round(k * BEAT) / FPS;          // temps k (grille partant de 0)
const tl = gsap.timeline({ paused: true });
const A = 0.343 * 1920, B = 0.885 * 1920;           // rail : 34,3 % -> 88,5 % L
const EASES = ["none", "power2.inOut", "expo.out", "back.out(2.2)",
               "elastic.out(1, 0.3)", "bounce.out"]; // mesurées, rms 0,4 à 2,4 %
// 1. six billes : départ ensemble au temps 9, arrivée au temps 11 (58 im)
EASES.forEach((e, i) =>
  tl.fromTo(`#ball-${i}`, { x: A }, { x: B, duration: f(58), ease: e }, f(252)));
// 2. 6 im de maintien en B, puis convergence vers le centre en 14 im
tl.to(".ball", { x: 960, y: 540, duration: f(14), ease: "power3.inOut",
                 stagger: f(1) }, f(316))
// 3. la bille fusionnée s'écrase (largeur x1,83) puis se redresse
  .to("#blob", { scaleX: 1.83, duration: f(4), ease: "power2.out" }, f(330))
  .to("#blob", { scaleX: 1.32, duration: f(3), ease: "power1.in" }, f(334))
// 4. COUPE sur le temps 12 (f338) : fond bleu, disque crème au même endroit
  .set("#scene-morph", { autoAlpha: 1 }, b(12))
// 5. disque-ressort : pic +33 % sur le demi-temps 12,5, repos sur le temps 13
  .fromTo("#disc", { scale: 0.36 }, { scale: 1.21, duration: b(12.5) - b(12),
           ease: "sine.out" }, b(12))
  .to("#disc", { scale: 1, duration: b(13) - b(12.5), ease: "sine.out" }, b(12.5))
// 6. un morph par temps : 14 im de morph (MorphSVGPlugin) puis 14 im de rotation
  .to("#shape", { morphSVG: "#triangle", duration: f(14), ease: "sine.inOut" }, b(13))
  .to("#shape", { rotation: "+=30", duration: f(14), ease: "none" }, b(13.5))
  .to("#shape", { morphSVG: "#star", duration: f(14), ease: "sine.inOut" }, b(14));
```

**After Effects**

- Marqueurs de composition à round(k × 28,125) im : 0, 28, 56, 84, 113, 141… (alterner 28 et 29 im). Posez coupes, départs de mots et débuts de morph sur ces marqueurs.
- Banc d'essai : 6 calques, X Position (Position X) de 34,3 à 88,5 % L entre f252 et f310. Linéaire ; Easy Ease (Lissage de vitesse) 33/33 ; expo.out = influence entrante 90 %. Back, elastic et bounce : clés intermédiaires (pic back 98 % L à f283).
- Entrée de mot (« OUT. ») : Position sur 13 im, influence sortante 0 %, entrante 95 % (≈ power4.out), Directional Blur (Flou directionnel) sur les 3 premières images seulement.
- Point rouge qui devient iris : Scale (Échelle) de 100 à ≈ 1500 % sur 9 im, influence sortante 90 %, entrante 0 % (≈ power3.in), plein cadre sur le marqueur du temps 28.
- Disque-ressort : Scale 36 → 121 % sur 14 im puis 121 → 100 % sur 14 im en Easy Ease Out (Lissage de vitesse à la sortie), clé du pic sur le marqueur du demi-temps 12,5.
