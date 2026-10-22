## Le mot qui fait ce qu'il dit (semantic typography, self-demonstrating ease, words acting their meaning)

Le mouvement du mot illustre son sens : EASE IN accélère, OUT freine, LINEAR glisse à vitesse constante, « complexity » tombe en vrac. Le sens arrive deux fois, par la lecture et par le mouvement, et se retient mieux. Il faut un mouvement exact : « EASE IN. » ne bouge que de 15 px en 9 im, puis fait 70 % du trajet dans les 2 dernières images. Vue dans 14 vidéos, toutes notées 4 ou 5.

![Six images sur fond orange : « EASE IN. » entre en accélérant puis s'arrête net, « EASE OUT. » arrive flou et freine, l'éditeur de courbes à droite trace la courbe correspondante](ILLUS:semantique-1)

*[Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:01.88 à 0:02.73 : « EASE IN. » accélère et s'arrête net, puis « EASE OUT. » arrive presque d'un coup et freine ; l'éditeur de courbes trace la même courbe.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Le mot accélère (IN) | [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:01.88 | Étude 60 fps : expo.in 14 im (rms 1,9 %), part sur le temps, arrêt net au demi-temps (+0,4 im), 0 % de dépassement |
| Le mot freine (OUT) | [Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be), 0:11.95 | Étude 60 fps : expo.out 13 im (rms 1,7 %), coupe sur le demi-temps à 0 im ; flou qui décroît, légende « ← DECELERATE » |
| Le mot glisse (LINEAR) | [Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be), 0:12.65 | Étude 60 fps : 0,775 % de la largeur par image pendant 16 im (rms 0,3 %) ; un trait se dessine à la même vitesse |
| Le mot en ressort | [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:02.93 | Étude 60 fps : ζ 0,34 et 2,35 Hz, dépassement 32 %, 1,35 im entre lettres ; période 27,2 im ≈ 1 temps |
| Une lettre, une courbe | [Motion designer showreel](https://prompt-motion.com/vanshwtfff-db0466), 0:00.40 | M linéaire 13,3 px/im, T expo.out, I back.out +23 %, O élastique +43 %, N rebonds ×0,25 ; tout posé en 1,2 s |
| La graisse qui pèse | [Claude motion design reel](https://prompt-motion.com/tequilafunks-97f6c9), 0:10.50 | Étude (vidéo à 30 fps) : WEIGHT tenu 4 im en Thin, puis Thin 100 → Black 900 en 10 im (0,33 s) power1.out |
| Le chaos puis la clarté | [Recruiter self-intro reel](https://prompt-motion.com/blushpetal795-0c85c2), 0:02.75 | Les 10 lettres de « complexity » tombent en vrac en 30 im, grises en vol ; « clarity. » arrive d'un seul balayage de 10 im |
| Le mot au rôle physique | [Speech built as architecture](https://prompt-motion.com/gdgtify-287ddf), 0:07.15 | VOICE monte en ≈ 30 im ease-out, tient 0,4 s, pivote de −90° en 33 im autour de son bout et devient pilier |

![Huit images sur fond bleu : les six lettres de MOTION tombent du haut, chacune avec sa courbe affichée dessous, et se posent l'une après l'autre](ILLUS:semantique-2)

*[Motion designer showreel](https://prompt-motion.com/vanshwtfff-db0466), 0:00.40 à 0:01.20 : chaque lettre de MOTION tombe avec la courbe affichée sous elle (linéaire, ease-in-out, expo-out, back-out, élastique, rebond).*

**Règles de construction**

1. Le mouvement est la définition, mesurée : IN = expo.in ou power2.in, arrêt net ; OUT = expo.out ; LINEAR = ease « none ». Les trois études mesurent 0 % de dépassement sur ces mots. Le dépassement est réservé au mot qui le nomme : ressort 32 %, back +23 %, élastique +43 %.
2. Montre la preuve : légende cubic-bezier, éditeur de courbes ou flèche « ACCELERATE → » (levabashidze, tequilafunks, eyishazyer-af035b, roundtablespace). Le point qui parcourt la courbe suit la même progression que le mot.
3. Gestes courts et calés : 6 à 22 im, départ ou coupe sur le temps ou le demi-temps à 0,5 im près. roundtablespace coupe IN., EASE, OUT. et LINEAR. toutes les 14 im, à 0 im. Un ressort se règle au tempo : sa période vaut un temps chez levabashidze.
4. Contraste par paires sur des plans consécutifs : IN puis OUT un temps plus tard (levabashidze, f113 puis f142), chaos puis clarté (blushpetal795). La différence rend chaque courbe lisible.
5. Taille et tenue : le mot fait 12,5 à 44 % H et reste au moins 14 im. La rafale « type. shape. space. time. » à 7,5 im par mot (vanshwtfff, 0:08.03) ne se lit pas. Un titre fait 8 % H au minimum (guide Otom, p. 14).
6. Une idée par mot, une séquence par film, 3 à 8 mots : 4 chez roundtablespace, 8 pages numérotées 01/08 à 08/08 chez eyishazyer-af035b. Au-delà, c'est un catalogue d'effets.

**Verdict** : à reprendre. Le mot qui fait ce qu'il dit montre la maîtrise des courbes en une seconde. Garde-le pour un mot dont le sens est un mouvement (accélérer, freiner, monter, peser, s'emmêler), sinon c'est un gadget.

**Quand l'utiliser** : surtout en showreel éditorial et en typo cinétique 1600. En promo SaaS, sur le verbe du bénéfice (« accélère », « simplifie », « relie »), pour l'accroche ou la preuve. On le décide au découpage (une mesure pour une paire de mots), puis on règle la courbe à la construction du plan. À éviter sur un mot abstrait sans mouvement (« innovant ») et en rafale.

**HyperFrames (GSAP)**

```js
// EASE IN accélère, EASE OUT freine un temps plus tard, LINEAR glisse, un mot en ressort
const FPS = 60, BEAT = 60 / 128, at = b => b * BEAT;    // 128 BPM
const W = 1920;
// Ressort amorti (ζ 0,34, 2,35 Hz) écrit comme une courbe : pure fonction du temps
const spring = (z = 0.34, f = 2.35, D = 54 / FPS) => {
  const w = 2 * Math.PI * f, wd = w * Math.sqrt(1 - z * z);
  return p => { const t = p * D;
    return 1 - Math.exp(-z * w * t) * (Math.cos(wd * t) + (z * w / wd) * Math.sin(wd * t)); };
};
tl.set("#in", { x: -0.30 * W }, 0)                        // seul « IN. » dépasse à gauche
  .set("#out", { x: 1.10 * W }, 0)
  .set(".spring .ch", { yPercent: 100 }, 0)
  .set("#dot", { x: 0, y: 0 }, 0)
  // IN : expo.in 14 im, part sur le temps, arrêt net
  .to("#in", { x: 0.08 * W, duration: 14 / FPS, ease: "expo.in" }, at(4))
  // le point de l'éditeur : x au temps (linéaire), y à la valeur (même courbe)
  .to("#dot", { x: 200, duration: 14 / FPS, ease: "none" }, at(4))
  .to("#dot", { y: -200, duration: 14 / FPS, ease: "expo.in" }, at(4))
  // OUT : expo.out 22 im, plus de 50 % du trajet dans la 1re image
  .to("#out", { x: 0.08 * W, duration: 22 / FPS, ease: "expo.out" }, at(5))
  // LINEAR : 0,775 % de la largeur par image pendant 16 im
  .to("#linear", { x: `-=${0.00775 * W * 16}`, duration: 16 / FPS, ease: "none" }, at(6))
  // ressort : lettres décalées de 1,35 im, dépassement ≈ 32 %
  .to(".spring .ch", { yPercent: 0, duration: 54 / FPS, ease: spring(),
                       stagger: 1.35 / FPS }, at(6.25));
```

**After Effects**

- IN : Position en 2 images clés sur 14 im ; sur la 1re, Animation › Keyframe Assistant › Easy Ease Out (Animation › Assistant d'image clé › Lissage de vitesse sortant), Influence (influence) ≈ 90 % dans le Speed Graph (éditeur de graphe de vitesse). La 2e reste linéaire : arrêt net.
- OUT : 1re image clé linéaire, 2e en Easy Ease In (Lissage de vitesse entrant), Influence ≈ 90 %, sur 22 im. LINEAR : clic droit › Keyframe Interpolation › Linear (Interpolation d'images clés › Linéaire), 16 im. Layer › Switches › Motion Blur (Calque › Flou de mouvement) sur les trois.
- Ressort : expression sur la Position de chaque lettre, `t=Math.max(0,time-key(1).time); w=2*Math.PI*2.35; v=1-Math.exp(-0.34*w*t)*Math.cos(0.94*w*t); key(1).value+(key(2).value-key(1).value)*v`. Lettres en calques séparés, décalées de 1 à 2 im (Animation › Keyframe Assistant › Sequence Layers (Assistant d'image clé › Séquencer les calques)).
- Éditeur de courbes à l'écran : un Null Object (nul) dont X est linéaire et Y reprend l'Influence du mot, sur les mêmes images clés. Graisse : sur une police variable, animer l'axe de graisse 100 → 900 en 10 im après 4 im de tenue.
