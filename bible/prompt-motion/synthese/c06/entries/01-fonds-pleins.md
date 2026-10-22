## Les fonds pleins qui changent sur le temps (full-bleed color blocking, background color rotation, figure-ground swap on the beat)

Le fond entier passe d'un aplat à l'autre d'une palette fermée, à chaque mot, temps, mesure ou chapitre, et le texte s'inverse avec lui. La couleur devient un instrument rythmique : la coupe se lit même quand le plan ne dure que 7 im. C'est la famille la plus partagée des vidéos les mieux notées : 10 des 17 vidéos notées 5. Vue dans 88 vidéos, dont 79 notées 4 ou 5.

![Six images : un losange rouge envahit l'écran, puis MOTION noir sur rouge, IS rouge sur noir, MEANING noir sur os, la phrase entière sur noir, un octaèdre rouge sur noir](ILLUS:fonds-pleins-1)

*[Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:01.67 à 0:04.00 : le losange devient le fond rouge, puis un couple fond/texte par temps, avec seulement trois couleurs.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Un fond par coupe, 4 couleurs | [Kinetic type showreel](https://prompt-motion.com/zheke-38deff), 0:00.93 | Étude 60 fps : ≈ 20 fonds en 15 s ; coupes sur round(n × 28,125) im, écart 0 ; orange réservé au point et à 1 mot par plan |
| Inversion figure/fond par temps | [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:01.88 | Étude 60 fps : rouge, noir, os, noir aux temps 4 à 7 (f113, 141, 169, 197 ; 0 à +0,9 im) |
| Un fond par chapitre, au 1er temps | [Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be), 0:07.50 | Étude 60 fps : chapitres à f113, 338, 450, 675, 788 ; bleu → noir en 1 im à f450, le carré reste en raccord |
| Le fond apporté par un objet | [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:01.57 | Étude 60 fps : la balle grossit ×12,7 en 19 im (z linéaire), aplat orange à f113, 1er temps de mesure (+0,5 im) |
| Une couleur par croche (spectre) | [Reflex brand motion reel](https://prompt-motion.com/reflex-cloud-72ffe5), 0:09.38 | 8 aplats du rouge au violet, un toutes les 14 im (croche à 128 BPM) ; fréquence en THz affichée |
| Un traitement graphique par mot | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:10.75 | Étude 60 fps : 15 im par carte = 1 im grise, 2 im de fondu, ≈ 6 im d'animation, 5-6 im figées |
| Une seule bascule, sur l'attaque la plus forte | [Crux motion design showreel](https://prompt-motion.com/marouanegazouzi-6071d5), 0:12.23 | Noir → bleu #5B9CF0, luminance 21 → 141 en 1 im, sur le demi-temps ; seule rupture de couleur du film |
| Vague de couleur lettre par lettre | [Claude motion design reel](https://prompt-motion.com/ghinaiya-nirmal-5d8fec), 0:13.80 | Sur le demi-temps f828, chaque lettre de CLAUDE vire au vermillon puis revient, ≈ 2 im d'écart par lettre |

![Six images : une balle orange quitte sa trajectoire, avance vers la caméra en grossissant, puis l'écran entier devient orange avec le titre et l'éditeur de courbes](ILLUS:fonds-pleins-2)

*[Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:01.53 à 0:02.00 : la balle fonce vers la caméra jusqu'à remplir le cadre ; son orange devient le fond du chapitre suivant.*

**Règles de construction**

1. Palette de 3 à 6 aplats, dont un noir chaud (#0B0B0D à #141414) et un crème (#EBE6DE à #F3EEE6). Le quatuor noir, crème, vermillon, outremer revient dans au moins 14 showreels : remplace les deux teintes saturées par celles de la marque.
2. La bascule tombe sur l'image du temps, ou 1 à 2 im avant, jamais après : 0 im chez zheke, 0 à +0,9 im chez grace-sunnyy, 1 à 2 im avant chez codestackr. Voir « Couper en avance, atterrir sur le temps ».
3. La cadence suit le niveau de structure. Un mot par temps (28 à 30 im : grace-sunnyy, jesscaroline7, itsuki-dev). Un chapitre par mesure (112,5 im : roundtablespace, umangratani). La croche (14 im) seulement en rafale de 1 à 2 s (reflex-cloud, roundtablespace). Un acte, une seule bascule : au drop chez twoclipping-6dd14e, au milieu exact (7,5 s sur 15) chez bogdandragomir.
4. Chaque bascule change de valeur (clair, sombre, saturé), et le texte prend la couleur la plus contrastée (crazyalphaaa, codestackr). Au-delà de 3 inversions clair/sombre par seconde, c'est un stroboscope : seuil de flash des règles d'accessibilité WCAG.
5. L'accent reste rare même quand il sert de fond : chez zheke, l'orange n'est ailleurs que sur le point et un mot par plan. Quand il devient le fond, le texte passe en encre (MOTION noir sur rouge chez grace-sunnyy).
6. Pour un chapitre, un objet apporte la couleur suivante : balle en 19 im (levabashidze), losange en 14 im sine.in puis 5 im de rouge nu (grace-sunnyy), point en 5 im power4.in (web3wesley). Jamais de fondu enchaîné (brainextends, non motivé : 3 sur 5).

**Verdict** : à reprendre. C'est le moyen le moins cher de faire changer quelque chose toutes les 0,5 à 1 s sans ajouter d'objet, ce que demande le style 1600. Le piège est la palette « showreel Claude » répétée partout : pars des couleurs de ta marque.

**Quand l'utiliser** : en typo cinétique 1600 (un couple fond/texte par mot) et en showreel éditorial (un fond par chapitre). En promo SaaS, une ou deux bascules de valeur suffisent : problème sombre, solution claire (xelandre, cansincengiz). On fixe les jetons au système de design, puis la couleur de chaque plan au découpage, sur la feuille de timing. À éviter pendant une démo d'interface, qui doit rester stable pour être lue, et sans grille musicale pour une rotation rapide. Pour les entrées d'objet qui portent la couleur, voir « L'iris né d'un point » et « La poussée et le volet plein ».

**HyperFrames (GSAP)**

```js
// Fonds pleins sur le temps (128 BPM, 60 i/s) : 4 jetons, inversion figure/fond
const FPS = 60, BEAT = 60 / 128, F = n => n / FPS;
const at = b => Math.round(b * BEAT * FPS) / FPS;     // image du temps : round(n × 28,125)
const C = { ink: "#0E0D0C", bone: "#EEE9E0", sig: "#FF4A1C", blue: "#2835EB" };

// 1. Un couple fond/texte par temps ; la valeur change à chaque coupe
const plan = [["#w1", "sig", "ink"], ["#w2", "ink", "sig"], ["#w3", "bone", "ink"], ["#w4", "ink", "bone"]];
tl.set(".word", { autoAlpha: 0 }, 0);
plan.forEach(([sel, fond, texte], i) => {
  const t = at(4 + i);                                // temps 4, 5, 6, 7
  tl.set("#bg", { backgroundColor: C[fond] }, t)
    .set(".word", { autoAlpha: 0 }, t)
    .set(sel, { autoAlpha: 1, color: C[texte] }, t)
    .fromTo(sel, { scale: 1.6 }, { scale: 1, duration: F(11), ease: "power2.out", immediateRender: false }, t);
});

// 2. Chapitre suivant : un disque bleu grossit et devient le fond au 1er temps de mesure
const land = at(12);
tl.set("#disc", { scale: 0.05, autoAlpha: 1, backgroundColor: C.blue }, land - F(19))
  .to("#disc", { scale: 1, duration: F(19), ease: "expo.in" }, land - F(19))   // disque ≥ diagonale du cadre
  .set("#bg", { backgroundColor: C.blue }, land)
  .set(["#disc", ".word"], { autoAlpha: 0 }, land)
  .set("#ch2", { autoAlpha: 1, color: C.bone }, land + F(5));                   // 5 im de fond nu

// 3. Signature : vague vermillon lettre par lettre, départ sur le demi-temps
gsap.utils.toArray("#sign span").forEach((el, i) => {
  const t = at(29.5) + F(2 * i);
  tl.set(el, { color: C.sig }, t).set(el, { color: C.bone }, t + F(3));
});
```

**After Effects**

- Composition à 60 i/s ; un marqueur par temps sur un calque REPERES (Layer › Add Marker / Calque › Ajouter un marqueur). Fond : Layer › New › Solid (Calque › Nouveau › Solide).
- Sur le fond, Effect › Generate › Fill (Effet › Générer › Remplir). Clés de Color (Couleur) sur chaque marqueur, passées en clés maintenues : Animation › Toggle Hold Keyframe (Activer/désactiver l'image clé maintenue). Aucun fondu entre deux couleurs.
- Même Fill sur le texte, avec la couleur opposée à la même image. Variante en expression sur Color : `m=thisComp.layer("REPERES").marker; n=m.numKeys?m.nearestKey(time).index:1; if(m.key(n).time>time)n--; [hexToRgb("FF4A1C"),hexToRgb("0E0D0C"),hexToRgb("EEE9E0"),hexToRgb("0E0D0C")][Math.max(n-1,0)%4]`.
- Chapitre porté par un objet : calque de forme Ellipse de la couleur suivante, Scale (Échelle) de 5 à 100 % en 19 im. Dans le Speed Graph (éditeur de graphe de vitesse), influence sortante ≈ 90 % sur la 1re clé, sans lissage à l'arrivée (≈ expo.in). À l'image du 1er temps, Edit › Split Layer (Édition › Scinder le calque) et clé maintenue du fond.
- Vague lettre par lettre : Animate › Fill Color › RGB (Animer › Couleur de remplissage › RVB) sur le texte. Range Selector (Sélecteur de plage) : Start 0, End ≈ 20 % (une lettre), Advanced (Avancé) › Shape (Forme) : Square (Carré). Offset (Décalage) animé de −20 à 100 % en linéaire, 2 im par lettre (12 im pour CLAUDE), départ sur le demi-temps.
