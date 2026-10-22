## Le système de courbes : expo-out pour entrer, ease-in pour sortir (easing system, damped springs, spacing, hold-keyframe snap)

Un film soigné n'utilise qu'une poignée de courbes, fixées une fois pour toutes. Ce qui entre décélère, ce qui sort ou plonge accélère, ce qui naît a droit à un seul ressort, la mécanique reste linéaire. Les 20 études image par image ramènent chaque film à 6 à 8 usages de courbes, toujours les mêmes d'une scène à l'autre. Vue dans 31 vidéos, dont 26 notées 4 ou 5.

![Trois billes partent ensemble sur trois rails : linéaire, ease-out et courbe sur mesure ; un point parcourt le graphe de la courbe à gauche](ILLUS:systeme-courbes-1)

*[Claude motion designer showreel](https://prompt-motion.com/crazyalphaaa-bc7e75), 0:06.70 à 0:07.50 : même départ, même arrivée ; l'ease-out (rose) fait la moitié du trajet d'emblée, la courbe sur mesure (orange) part tard et s'étire au pic de vitesse.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Entrée expo.out, sans dépassement | [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:02.35 | « IS » en 14 im, 70 % du trajet en 3 im, flou proportionnel à la vitesse (étude 60 fps) |
| Plongée qui accélère jusqu'à la coupe | [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:01.55 | losange plein cadre en sine.in sur 14 im, ×1,37 par image à mi-course, 5 im figées avant le temps (étude) |
| Compteurs, une seule courbe | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:02.30 | 5 compteurs de 33 à 140 im, tous en power3.out ; 50 % de la valeur en 17 % du temps (étude) |
| Un seul ressort pour ce qui naît | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:01.53 | pastille puis logo : ζ ≈ 0,52-0,56, ω ≈ 0,26 rad/im, +12 à 15 %, pic au demi-temps, repos en ≈ 30 im (étude) |
| Ressorts d'interface presque critiques | [Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86), 0:01.25 | conteneur qui grandit : ζ 0,62-0,74, dépassement 3 à 8 % ; qui rétrécit : ζ 0,78-0,90, posé en 13-16 im (étude) |
| Décroissance en % de la distance restante | [Frame by Frame launch video](https://prompt-motion.com/notdwd-7de38a), 0:05.29 | chaque pas vaut ≈ 83 % du précédent : 17 % de la distance restante par image, arrêt sans à-coup |
| Pose sèche sans interpolation (snap) | [Motion designer showreel](https://prompt-motion.com/himanshutwtxs-5f4b43), 0:05.13 | 3 poses en 3 images (−8°, −4°, 0°), puis 8 im de maintien ; seul geste sans courbe, revendiqué « no ease. on purpose. » |
| Course de courbes à durée égale | [Claude motion designer showreel](https://prompt-motion.com/crazyalphaaa-bc7e75), 0:06.73 | 42 im pour tous ; ease-out à 50 % en 8 im ; cubic-bezier(0.8, 0, 0.2, 1) : pic à 4,7× la linéaire, bille étirée ×2,1 |

![Six billes parties du même point sur six rails (linear, ease-in-out, expo-out, back-out, elastic, bounce), graduations d'espacement laissées à chaque image](ILLUS:systeme-courbes-2)

*[Claude motion designer showreel](https://prompt-motion.com/stephanlivera-df17a2), 0:04.23 à 0:05.15 : six eases GSAP sur 58 im (2 temps) ; back.out(2.2) dépasse B dès le demi-temps, les graduations montrent l'espacement de chaque courbe.*

**Mesures (60 fps)**

- Entrées : dans les 20 études, tout ce qui entre décélère (power2.out à expo.out), en 8 à 22 im ; les textes se posent sans dépassement.
- Sorties, plongées et pré-impacts : famille .in (sine.in à power4.in), 4 à 14 im, plus courts que l'entrée ; ils finissent sur la coupe ou 1 im avant.
- Ressorts : 12 des 20 études ont un ressort ou un back.out, presque toujours réservé à une seule catégorie (ce qui naît, ou le dernier geste). Dépassement mesuré : 3 à 33 %.

**Règles de construction**

1. Écris le dictionnaire avant la première scène : une courbe d'entrée, une de sortie, une de déplacement, un ressort, le linéaire. Puis ne l'enfreins qu'une fois, exprès (le snap de himanshutwtxs).
2. Relais de vitesse au raccord : sortie power3.in de 12 im, entrée power3.out de 11 im ; la vitesse maximale tombe sur l'image de la coupe (Dub promo video, étude).
3. Un seul ressort pour tout ce qui naît, pic au demi-temps, repos en un temps. Contre-exemples sans aucun dépassement : [Quetzal social app reel](https://prompt-motion.com/miskinho-443898) et [Morphing UI states loop](https://prompt-motion.com/demonugc-4c5753) restent nets mais raides (« à adapter »).
4. Ne répète pas elastic ni bounce : les études ne les montrent que dans des bancs d'essai ou un impact de lettres (zheke-38deff).
5. Compteurs en power3.out, ou power2.out sur 2 temps (sudo-kiran-49176d : 60 im). Linéaire (`none`) pour la mécanique : x d'un saut, tête de lecture, défilement.
6. Le tout-linéaire et le tout-sec échouent : [Four seasons train window](https://prompt-motion.com/itsolelehmann-e47532) n'a aucune respiration, [Risograph studio intro](https://prompt-motion.com/rneayan-474bcf) ressemble à un diaporama.

Le guide Otom pose « ease-out pour les entrées, ease-in-out pour les déplacements. Pas de rebond » (guide Otom, p. 7). La première moitié est confirmée ; la seconde est contredite : 14 des 17 vidéos notées 5 du corpus ont un dépassement, un ressort ou un back.out.

**Verdict** : à reprendre. C'est la base de toute vidéo : fixe les courbes au système de design, comme la typo et les couleurs. Ton goût pour les rebonds y trouve sa place, mais sur un seul type d'objet.

**Quand l'utiliser** : dans tous les styles, à l'étape du système de design, avant de construire le premier plan. Typo cinétique 1600 : entrées expo.out courtes, sorties .in sur la coupe ; promo SaaS : ressorts presque critiques pour l'interface, compteurs power3.out. Les variantes pédagogiques (course de courbes, pelures d'oignon) servent un showreel ou un explainer, jamais une promo.

**HyperFrames (GSAP)**

```js
// Dictionnaire de courbes fixé pour tout le film (mesures des études 60 fps), 120 BPM
const FPS = 60, BEAT = 60 / 120;                 // 1 temps = 30 im
const at = b => b * BEAT, F = n => n / FPS;
// ressort mesuré sur Dub promo video : ζ ≈ 0,5, ω ≈ 0,26 rad/im (pic +15 % vers 14 im)
const spring = (z = 0.5, w = 0.26 * FPS, dur = 0.6) => p => {
  const t = p * dur, wd = w * Math.sqrt(1 - z * z);
  return 1 - Math.exp(-z * w * t) * (Math.cos(wd * t) + (z * w / wd) * Math.sin(wd * t));
};
const EASE = {
  enter: "expo.out",    // ce qui entre : 70 % du trajet en 3 im, aucun dépassement
  exit: "power3.in",    // ce qui sort ou plonge : finit sur la coupe
  move: "power2.inOut", // déplacement d'un point à un autre
  count: "power3.out",  // compteurs
  born: spring(),       // le SEUL rebond du film : ce qui naît d'un point
  mech: "none"          // mécanique : tête de lecture, défilement, x d'un saut
};
// relais de vitesse : sortie de 12 im finie sur le temps 4, entrée de 11 im partie du même temps
tl.to("#panelA", { xPercent: -110, duration: F(12), ease: EASE.exit }, at(4) - F(12))
  .set("#panelB", { xPercent: 110, autoAlpha: 1 }, at(4))
  .to("#panelB", { xPercent: 0, duration: F(11), ease: "power3.out" }, at(4));
// titre : entrée de 14 im sur le demi-temps
tl.set("#title", { y: 80, autoAlpha: 0 }, 0)
  .to("#title", { y: 0, autoAlpha: 1, duration: F(14), ease: EASE.enter }, at(4.5));
// pastille qui naît : ressort, repos en un temps
tl.set("#badge", { scale: 0 }, 0)
  .to("#badge", { scale: 1, duration: 0.6, ease: EASE.born }, at(5));
// compteur 0 → 248 sur 2 temps, valeur arrondie à chaque image
const n = { v: 0 };
tl.to(n, { v: 248, duration: at(2), ease: EASE.count,
  onUpdate: () => { document.querySelector("#count").textContent = Math.round(n.v); } }, at(5));
```

**After Effects**

- Entrée : 2 images clés. Dans le Graph Editor (éditeur de graphiques) en Speed Graph (graphe de vitesse) : influence entrante de 95 % sur la clé d'arrivée et départ linéaire (≈ expo.out, 14 im). Sortie : l'inverse, influence sortante de 95 % sur la clé de départ, 12 im finis sur la coupe.
- Valeurs exactes par Animation › Keyframe Velocity (Vélocité de l'image clé) ; enregistrer chaque réglage avec Animation › Save Animation Preset (Enregistrer l'animation prédéfinie) pour réutiliser le même dictionnaire partout.
- Ressort : Alt-clic sur le Stopwatch (chronomètre) de Scale (Échelle) et expression `t=time-inPoint; w=15.6; z=0.5; d=w*Math.sqrt(1-z*z); s=100*(1-Math.exp(-z*w*t)*(Math.cos(d*t)+z*w/d*Math.sin(d*t))); [s,s]`.
- Compteur : Effect › Expression Controls › Slider Control (Effet › Options pour expressions › Paramètre glissière) de 0 à 248 sur 60 im, influence entrante 85 % ; Source Text (Texte source) : `Math.round(effect("Slider Control")(1))`.
- Mécanique : Animation › Keyframe Interpolation (Interpolation des images clés) › Linear (Linéaire). Snap : Animation › Toggle Hold Keyframe (Image clé de maintien) sur 3 clés à une image d'écart.
