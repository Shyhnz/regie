## Vider le cadre avant la coupe (choreographed exit, clear-the-frame, staggered gravity exit)

Avant la coupe, chaque élément du plan A quitte le cadre par son propre geste : il tombe, il est jeté, il coule sous sa ligne. Le fond reste seul 2 à 4 images, puis le plan B frappe sur le temps. La sortie accélère jusqu'au bord (ease-in), si bien que la vitesse maximale tombe juste avant le vide : le plan suivant hérite de cette énergie au lieu de couper un maintien. Vue dans 8 vidéos, dont 8 notées 4 ou 5.

![Les cartes d'un tableau de bord basculent et tombent hors champ en cascade, la coupe les attrape en pleine chute](ILLUS:vider-le-cadre-1)

*[Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 0:11.72 à 0:12.00 : la carte sombre prend son élan, bascule et tombe ; les cartes rouge, citron, bleue et violette suivent à 1 à 4 im d'écart, et la coupe du temps 24 arrive pendant la chute.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Chute par gravité en cascade | [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 0:11.73 | levée −7 % H en 8 im (sine.inOut), chute 12 im power1.in, bascule −1° → −17°, cartes décalées de 1 à 4 im (étude 60 fps) |
| Trois gestes, puis 4 im de vide | [Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:03.58 | « written. » coule sous sa ligne en 4 im (sine.in), « frame » et « EVERY » s'écrasent en échelle Y en 3 im (power2.in), 4 im de cobalt seul (étude 60 fps) |
| Carte jetée dans la profondeur, puis noir | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:07.25 | surface 100 % → 0 en 15 im (power2.in), rotation ≈ 15°, notifications à droite de 5 à 138 px/im, 3 im de noir, plan B sur le kick (étude 60 fps) |
| Toute la troupe saute hors champ | [Sketchbook animals come alive](https://prompt-motion.com/abderrahmen-g-9e8ed0), 0:21.57 | saut vers le haut en ≈ 10 im (ease-in), rangée du fond d'abord, 2 im de paysage vide, coupe sur la barre (30 fps) |
| Colonnes qui montent en cascade | [Motion designer showreel](https://prompt-motion.com/kangaroohere-b10f8d), 0:05.92 | 3 colonnes de ≈ 4 im chacune, 2 im d'écart, en accélérant ; départ 6 im avant le temps, carte suivante posée sur le temps |
| Éjection latérale, un élément gardé | [ViralGrow product promo](https://prompt-motion.com/samuel-yostt-891f87), 0:07.30 | cartes de gauche à gauche, de droite à droite (ease-in, flou horizontal) ; le téléphone reste, 20 → 17 % L, recentré en 14 im |
| Dispersion vers le bord le plus proche | [Bold typographic motion showreel](https://prompt-motion.com/motiondsgnr-9dcfa6), 0:13.05 | chaque carte part vers son bord, rotation jusqu'à ≈ 15°, flou de mouvement, ≈ 11 im en accélérant, cadre vide à f801 |

![Les mots sortent chacun par son geste, puis le cadre cobalt reste vide quatre images avant la coupe](ILLUS:vider-le-cadre-2)

*[Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:03.57 à 0:03.78 : « written. » coule, « frame » et « EVERY » s'écrasent, 4 images de bleu vide, puis la coupe du temps 8 ouvre le graphique.*

**Règles de construction**

1. Une sortie accélère toujours : power1.in pour une chute (12 im à 60 fps), power2.in pour un objet jeté (13 à 15 im), sine.in ou power2.in pour un mot qui coule ou s'écrase (3 à 4 im). Les 7 sorties mesurées finissent à vitesse maximale. Le guide Otom veut qu'en boucle chaque élément « sorte comme il est entré » (guide Otom, p. 14) ; hors boucle, la sortie est un geste propre qui accélère.
2. Un geste par élément, dans un ordre lisible : décalage de 1 à 4 im entre cartes, de 2 im entre colonnes, le fond avant le premier plan. Chacun part vers son bord le plus proche.
3. Laisser 2 à 4 images de fond seul (0,03 à 0,07 s) avant la coupe : 4 im de cobalt, 3 im de noir, 2 im de paysage à 30 fps. Au-delà, le vide devient un temps mort. Variante plus nerveuse : couper en pleine chute.
4. Caler la fin, pas le début : la sortie part un demi-temps avant (6 à 15 im à 120-128 BPM). Le dernier élément quitte le cadre 2 à 4 im avant le temps. Le plan B frappe sur le temps, souvent un kick.
5. Pour une chute, une levée d'élan d'abord : −7 % de la hauteur en 8 im, puis la chute. Flou de mouvement sur toute sortie rapide, rotation de 10 à 17° pour les cartes.
6. Si un élément doit porter le plan suivant, il reste au centre pendant que les autres sortent (téléphone, mascotte) : c'est alors un objet relais, pas un cadre vide.

**Verdict** : à reprendre. C'est la réponse directe à « aucun temps mort » : le plan ne meurt pas sur un maintien, il se vide en rythme et prépare l'impact. Réserve-la aux fins de chapitre, sinon elle devient l'accent répété partout que tu rejettes.

**Quand l'utiliser** : en typo cinétique 1600 (les mots coulent ou s'écrasent avant le drop) et en promo SaaS (cartes de tableau de bord jetées avant la carte suivante). Fonction : transition de fin de chapitre, juste avant un temps fort, une chute ou un changement de régime musical. On la choisit au découpage, en réservant un demi-temps de sortie dans la mesure, puis on la règle aux enchaînements. À éviter quand le plan B doit naître d'un objet du plan A : vider le cadre casserait le fil.

**HyperFrames (GSAP)**

```js
// Sortie par gravité en cascade : levée, chute power1.in, 4 im de fond seul, plan B sur le temps
const FPS = 60, H = 1080;
const BEAT = 60 / 120;                       // 120 BPM : 1 temps = 30 im
const at = b => b * BEAT, im = n => n / FPS;
const cut = at(24);                           // le plan B frappe sur le temps 24
const cards = gsap.utils.toArray("#sceneA .card");   // ordonnées de gauche à droite
const offs = [0, 3, 4, 7, 7];                 // décalages mesurés, en images
const last = Math.max(...offs.slice(0, cards.length));
const fall0 = cut - im(4) - im(12) - im(last); // la dernière carte sort 4 im avant la coupe
cards.forEach((card, i) => {
  const t0 = fall0 + im(offs[i] ?? last);
  tl.to(card, { y: -0.07 * H, duration: im(8), ease: "sine.inOut" }, t0 - im(8))  // levée d'élan
    .to(card, { y: 1.1 * H, rotation: -17 + 4 * i, duration: im(12), ease: "power1.in" }, t0)
    .to(card, { filter: "blur(3px)", duration: im(6), ease: "power1.in" }, t0 + im(6));
});
// les titres coulent sous leur ligne masquée (sine.in, 4 im)
tl.to("#sceneA .title-line", { yPercent: 110, duration: im(4), ease: "sine.in", stagger: im(2) },
      cut - im(4) - im(8));
// coupe : 4 images de fond seul, puis le plan B
tl.set("#sceneA", { autoAlpha: 0 }, cut - im(4))
  .set("#sceneB", { autoAlpha: 1 }, cut)
  .from("#sceneB .hero", { scale: 0.6, duration: im(10), ease: "expo.out", immediateRender: false }, cut);
```

**After Effects**

- Pour chaque carte, Position Y : une levée de −76 px en 8 im, puis une chute de +1 190 px en 12 im. Clic droit sur la keyframe (image clé) de départ de la chute › Keyframe Assistant › Easy Ease Out (Assistant d'image clé › Lissage de vitesse sortant) ; laisser la keyframe d'arrivée en Linear (linéaire).
- Dans le Speed Graph (éditeur de graphe de vitesse), influence de sortie d'environ 50 % : la vitesse monte jusqu'à la dernière image, comme la gravité. Rotation de 0 à −17° sur les mêmes 12 im.
- Décaler les calques de 0, 3, 4 et 7 im (Alt + Page suivante déplace d'une image), ou Animation › Keyframe Assistant › Sequence Layers (Animation › Assistant d'image clé › Séquencer les calques) pour un écart régulier de 2 im.
- Activer le Motion Blur (flou de mouvement) des calques et de la composition, Shutter Angle (obturateur) 180°. Pour un mot qui s'écrase, Scale (Échelle) Y de 100 à 0 % en 3 im, Easy Ease Out.
- Poser un Composition Marker (marqueur de composition) sur le temps (touche * du pavé numérique pendant l'écoute). Le dernier élément sort 4 im avant, le plan B commence sur le marqueur.
