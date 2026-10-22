## Le filé (whip pan, directional motion blur, echo whip)

Le plan A part très vite sur un côté, étalé par un flou directionnel ou des échos, et le plan B entre dans le même sens en reprenant la vitesse, puis freine. L'œil lit un seul mouvement de caméra, donc la coupe disparaît et l'énergie remonte. Tout se joue en 8 à 16 images de vitesse maximale : plus lent, ou sans flou, c'est une simple glissade. Vue dans 33 vidéos, dont 31 notées 4 ou 5.

![La constellation des partenaires part à gauche en se floutant, un panneau blanc flou entre par la droite et « Short links. » devient net](ILLUS:file-1)

*[Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:10.30 à 0:10.68 : la scène accélère vers la gauche, le panneau blanc prend le relais à pleine vitesse, puis le titre se pose.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Relais de vitesse sortie / entrée | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:10.28 | étude 60 fps : sortie power3.in 12 im, entrée power3.out 11 im ; 93 % du cadre couvert pile sur le temps (f634) |
| Poussée fouettée d'un temps | [Flowdrive motion showreel](https://prompt-motion.com/manuelogomigo-f33ca9), 0:07.17 | étude 60 fps : expo.inOut de 30,5 im (rms 1,2 %), mi-course f445, flou directionnel fort f441-f447 |
| Mot qui entre fouetté | [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:09.62 | étude 60 fps : « WHIP » de 119,4 à 19,4 % L en 10 im, power4.out, départ sur le demi-temps |
| Filé vertical en traînées | [Studio website showreel](https://prompt-motion.com/andginja-333d32), 0:10.33 | la scène tombe du haut en 4 im, traînées verticales, « 00 » lisible dès la 3e image, sur le drop |
| Filé vers une vue d'interface | [Quetzal social app reel](https://prompt-motion.com/miskinho-443898), 0:05.80 | calendrier 88 × 70 % : 90 % L en 13 im, traînée 60-100 px ; la carte LinkedIn réapparaît rangée |
| Fouet à échos | [Email tool promo reel](https://prompt-motion.com/melvynx-6cde6c), 0:17.92 | 3-4 copies roses, ≈ 15 % L par image ; le terminal entre en se densifiant, 3 im de chevauchement |
| Carrousel filé | [Jev engineering showreel](https://prompt-motion.com/polydao-7a572b), 0:09.47 | bord de la carte suivante visible (3 %) ; glissés de 0,32 s puis 0,15 s, ease-in-out, arrêt net |
| Filé en rotation | [Food craving launch film](https://prompt-motion.com/ultimaxbt-2ddf1e), 0:02.90 | le mot tourne de 0 à 20° en ease-in, le wok arrive incliné et se pose à plat en ease-out ; 17 im (30 fps) |

![La scène sombre « Delivered everywhere. » s'étale en flou horizontal pendant que la page claire la pousse depuis la droite](ILLUS:file-2)

*[Flowdrive motion showreel](https://prompt-motion.com/manuelogomigo-f33ca9), 0:07.27 à 0:07.55 : poussée solidaire en expo.inOut, le bord avant de la page claire reste flou jusqu'à l'arrêt.*

**Règles de construction**

1. Phase rapide de 8 à 16 im à 60 fps (0,13 à 0,27 s) : 8 im (QuickDesign), 10 (Keyframe), 11-12 (Dub), 13 (Quetzal), 16 (Flowdrive). La courbe entière peut durer un temps, mais 90 % du trajet tient dans les 10 images centrales (Flowdrive, étude 60 fps).
2. Deux courbes possibles. Poussée solidaire : une seule courbe expo.inOut ou power3.inOut pour les deux scènes. Relais : sortie en ease-in, entrée en ease-out, vitesse maximale sur l'image du raccord (Dub). Jamais de départ ni d'arrêt linéaires.
3. Le flou suit la vitesse et reste directionnel : traînée de 20 à 30 % de la largeur au pic (Trezio, Motion designer showreel, DistilBook motion explainer), nul à l'arrêt. Rendu en 6 à 8 copies distinctes, il devient un stroboscope (mdfor.dev, sweetRegret).
4. Même sens d'un plan à l'autre : A sort à gauche, B entre par la droite. D'un filé au suivant, alterner le sens (Studio1 : cas 02 vers la gauche, cas 03 vers la droite) ou l'axe.
5. Calage (vidéos animées sur la musique) : départ sur un demi-temps, image pleine sur le temps. Dub couvre 93 % sur le temps ; Distilbook motion showreel dure 13 im, un demi-temps exact à 144 BPM ; Motion principles showreel se pose sur la grosse caisse.
6. L'habillage fixe (timecode, étiquette « NEW IN 1.4 ») reste net et immobile pendant le filé (Motion designer showreel, sweetRegret) : ce repère vend le mouvement de caméra.

**Verdict** : à reprendre. C'est la transition « aucun temps mort » par excellence, à condition de garder le flou directionnel et le relais de vitesse. Un filé à chaque scène, toujours dans le même sens, redevient l'accent répété que tu rejettes : deux ou trois par minute au plus.

**Quand l'utiliser** : en typo cinétique 1600 et en showreel, pour relancer l'énergie entre deux idées de même niveau, souvent sur un drop. En promo SaaS, pour passer d'une vue d'interface à la suivante (carrousel, liste vers calendrier). On le choisit aux enchaînements, après avoir posé la grille musicale, pour placer départ et arrivée. À éviter pour un changement de chapitre majeur (préférer l'iris ou l'objet relais) et dans un explainer posé en voix off.

**HyperFrames (GSAP)**

```js
// Filé en relais de vitesse (Dub, étude 60 fps) : A sort en power3.in (12 im),
// B entre en power3.out (11 im) ; la vitesse maximale tombe sur l'image du raccord.
const FPS = 60, f = n => n / FPS;
const BEAT = 60 / 120, at = b => b * BEAT;        // 120 BPM : 1 temps = 30 im
const W = 1920;
const HIT = at(21);                                // B couvre ≈ 90 % du cadre sur ce temps
const RELAY = HIT - f(5);                          // raccord 5 im avant le temps
// Flou directionnel en SVG (CSS blur() est isotrope) :
// <filter id="blurA"><feGaussianBlur id="gA" stdDeviation="0 0"/></filter>, idem blurB / gB.
// #sceneA { filter: url(#blurA) }  #sceneB { filter: url(#blurB); z-index: 2 }
tl.set("#sceneB", { x: W, autoAlpha: 1 }, 0)
  .set("#gB", { attr: { stdDeviation: "80 0" } }, 0)
  // sortie : 92 % du trajet dans le dernier quart, flou croissant
  .to("#sceneA", { x: -0.25 * W, duration: f(12), ease: "power3.in" }, RELAY - f(12))
  .to("#gA", { attr: { stdDeviation: "80 0" }, duration: f(12), ease: "power3.in" }, RELAY - f(12))
  // A continue sous B pendant que B la recouvre dans le même sens
  .to("#sceneA", { x: -0.55 * W, duration: f(11), ease: "power3.out" }, RELAY)
  .to("#sceneB", { x: 0, duration: f(11), ease: "power3.out" }, RELAY)
  .to("#gB", { attr: { stdDeviation: "0 0" }, duration: f(9), ease: "power2.out" }, RELAY)
  .set("#sceneA", { autoAlpha: 0 }, RELAY + f(11));
// HUD et étiquettes restent hors de #sceneA et #sceneB : fixes et nets.

// Variante poussée solidaire (courbe mesurée sur Flowdrive) : A et B côte à côte dans
// #strip (largeur 2 W) ; expo.inOut de 30 im, arrivée sur le temps 29.
tl.to("#strip", { x: -W, duration: f(30), ease: "expo.inOut" }, at(29) - f(30));
```

**After Effects**

- Poussée solidaire : Pre-compose (précomposer) A et B côte à côte dans une composition de 3 840 × 1 080 px. Position X du précomp 1 920 → 0 en 30 im ; Speed Graph (éditeur de graphe de vitesse), influence 90 % en sortie et en entrée (≈ expo.inOut).
- Relais : sur A, 1re clé avec influence sortante 80 %, 2e clé en interpolation Linear (Linéaire) : clic droit › Keyframe Interpolation (Interpolation d'image clé). Sur B, 1re clé Linear, 2e avec influence entrante 80 %. Raccorder les vitesses avec Animation › Keyframe Velocity (Animation › Vélocité de l'image clé).
- Flou : commutateur Motion Blur (Flou de mouvement) des calques et de la composition ; Composition › Composition Settings › Advanced (Composition › Paramètres de composition › Avancé) : Shutter Angle (Angle d'obturateur) 360°, Samples Per Frame (Échantillons par image) 16 ou plus (moins donne les copies stroboscopiques). Sinon Effect › Blur & Sharpen › Directional Blur (Effet › Flou et netteté › Flou directionnel), Direction 90°, Blur Length (Longueur) 0 → 150 → 0 sur les mêmes images.
- Échos : Effect › Time › Echo (Effet › Temps › Écho), Echo Time (Temps d'écho) −0,017 s (1 im à 60 fps), Number Of Echoes (Nombre d'échos) 3, Decay (Atténuation) 0,6, Echo Operator (Opérateur) Composite In Back (Composite derrière) : copies à 100, 60 et 35 %.
- Laisser timecode et étiquettes hors du précomp : ils restent nets. Pour un filé vertical, même réglage sur Position Y et Direction du flou 0°.
