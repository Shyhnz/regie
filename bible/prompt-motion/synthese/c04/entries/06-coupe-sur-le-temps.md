## La coupe sèche sur le temps (hard cut on the beat, polarity flip, black-frame blink, beat-cut montage)

Une coupe franche, sans effet, placée sur un temps ou juste avant. La musique fait le raccord : la coupe la plus simple devient la plus rythmée, et elle ne coûte aucune durée. Dans une vidéo de balle rebondissante, 10 coupes sur 12 tombent à ±1 im d'une attaque, contre environ 24 % attendus par hasard. Vue dans 31 vidéos, dont 27 notées 4 ou 5.

![Une interface de démonstration, une image de double exposition, puis trois cartes de chiffres en plein cadre : 193.6x rose sur noir, 444.6x noir sur rose, 0 noir sur crème](ILLUS:coupe-sur-le-temps-1)

*[Jev engineering showreel](https://prompt-motion.com/polydao-7a572b), 0:17.98 à 0:19.02 : une carte de preuve par temps ; une seule image de double exposition à chaque coupe, et la polarité s'inverse.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Cartes de preuve, une par temps | [Jev engineering showreel](https://prompt-motion.com/polydao-7a572b), 0:18.00 | 3 cartes de 30 im (1 temps à 120 BPM), 1 im de double exposition, chiffre à 15-20 % H, libellé +3 à 5 im |
| Rafale à la croche | [Anime maid dance showreel](https://prompt-motion.com/topi-003-b0e12c), 0:11.20 | 7 coupes à 12 im d'écart ; large sur les temps, recadré ×1,6 sur les demi-temps ; fond d'une autre couleur à chaque coupe |
| Montage qui accélère | [Claude motion design reel](https://prompt-motion.com/tequilafunks-97f6c9), 0:10.00 | Étude 60 fps : plans de 15, 15, 7,5, 7,5 puis 4 × 3,75 im (30 fps), coupes sur round(15 × temps) |
| Inversion clair / sombre | [Lightspark social promo video](https://prompt-motion.com/davidmarcus-a28a60), 0:01.97 | #F4F4F0 ↔ #1A1A1A à chaque chapitre, 6 coupes, toutes 1 im avant le temps ; 1re image vide sauf l'en-tête |
| Coupe sur le drop, autre graisse | [Cinetic skill launch film](https://prompt-motion.com/lexnlin-6161a6), 0:04.00 | 1 im avant le temps et l'attaque du drop ; phrase medium → « Now it directs. » extra-gras à 12 % H |
| Clignement noir avant le temps | [Crux motion design showreel](https://prompt-motion.com/marouanegazouzi-6071d5), 0:00.97 | 6 fois, 1 à 2 im de noir (luminance 17 contre 27-33) ; la scène suivante frappe l'image du temps |
| Cadre vide, contenu sur la grosse caisse | [Backlink audit data promo](https://prompt-motion.com/palashbagchi11-0a4b6b), 0:13.10 | 2 à 5 im de fond nu après la coupe ; libellé, « Stop » puis logo arrivent sur la grosse caisse (±0,5 im) |
| Coupe sur l'impact | [Beat-synced bouncing 3D ball](https://prompt-motion.com/gorden-sun-041f56), 0:03.57 | 10 coupes sur 12 à ±1 im d'une attaque ; le plan B s'ouvre sur la balle déjà au contact |

![Sept plans du même personnage qui danse : fond jaune large, rose recadré, cyan large, orange recadré, jaune, bleu recadré, puis le mot JUMP sur fond noir](ILLUS:coupe-sur-le-temps-2)

*[Anime maid dance showreel](https://prompt-motion.com/topi-003-b0e12c), 0:11.30 à 0:12.70 : une coupe toutes les 12 im ; le personnage continue de sautiller par-dessus, ce qui garde la lecture.*

**Règles de construction**

1. Couper 0 à 2 im avant le temps, jamais après. Mesures : 1 im avant (davidmarcus, lexnlin, antonio-kodheli), 1 à 2 im (palashbagchi), +0,5 im (levabashidze, étude 60 fps). L'image nouvelle est installée quand le coup arrive. Une coupe à +4,7 im se lit comme non calée (ultimaxbt).
2. Chaque plan dure une valeur musicale : 1 temps (polydao, 30 im ; antonio-kodheli, 15 à 17 im à 30 fps), une croche (topi-003, 12 im à 150 BPM). Pour accélérer, diviser par deux à tempo fixe : 15, 15, 7,5, 7,5, puis 3,75 im (tequilafunks, étude 60 fps).
3. Chaque coupe change une chose nette, et une seule. La polarité (davidmarcus, palashbagchi), l'échelle de ×1,6 (topi-003, lexnlin), la graisse, ou la couleur d'une même forme (umangratani). Dans une rafale, un élément fixe traverse les coupes : le personnage chez topi-003, le surtitre et l'en-tête chez polydao.
4. Une respiration avant l'attaque rend la coupe plus sèche. Mesures : 1 à 2 im de noir (marouanegazouzi) ; 7 im de noir avec le HUD avant le 1er temps (levabashidze, étude 60 fps). Ou 2 à 5 im de fond nu avant le premier élément (palashbagchi).
5. Isolée, une coupe sèche paraît une erreur. Seul passage sans transition chez 0xnfrith, elle désoriente ; répétée 7 fois vers le même fond vide sans rien qui traverse (iammxfschr), elle devient mécanique. Couper sur un mouvement en cours la rend invisible : icône déjà en train de rétrécir (notdwd), écran à −15° qui se redresse en 8 im expo.out (slvdev).

Le guide Otom propose des « transitions franches : coupe ou volet rapide de 250 ms » (guide Otom, p. 10). Les mesures le confirment, à condition de poser la coupe sur la grille, 1 im avant le temps.

**Verdict** : à reprendre. C'est la base du rythme 1600 : quelque chose change à chaque temps sans payer de transition. Alterne-la avec des transitions motivées, sinon la vidéo devient un diaporama.

**Quand l'utiliser** : en typo cinétique 1600 et en promo SaaS, pour les rafales de preuves (chiffres, logos clients, fonctions) et les bascules d'acte clair / sombre. Elle sert la preuve, la démonstration rapide et le drop. On la décide au découpage, quand on fixe la durée de chaque plan en temps musicaux ; la grille vient de l'étape musique. À éviter sans musique ni voix rythmée (aucun temps pour la porter), et entre deux plans sans élément commun ni changement net.

**HyperFrames (GSAP)**

```js
// Rafale de cartes : une par temps, coupe 1 im avant le temps, polarité alternée
const FPS = 60;
const BEAT = 60 / 120;                     // 120 BPM : 1 temps = 30 im
const at = b => b * BEAT;
const F = n => n / FPS;                    // images → secondes
const cards = gsap.utils.toArray(".card"); // plans plein cadre empilés
const START = 16;                          // 1er temps de la mesure 5
const THEMES = [
  { bg: "#131313", fg: "#FF2E93" },        // rose sur noir
  { bg: "#FF2E93", fg: "#131313" },        // noir sur rose
  { bg: "#F4F0E8", fg: "#131313" },        // noir sur crème
];

tl.set(cards, { autoAlpha: 0 }, 0);
cards.forEach((card, i) => {
  const cut = at(START + i) - F(1);        // la coupe précède le temps d'1 image
  const th = THEMES[i % THEMES.length];
  const label = card.querySelector(".label");
  tl.set(cards, { autoAlpha: 0 }, cut)
    .set(card, { autoAlpha: 1, backgroundColor: th.bg, color: th.fg }, cut)
    .set(label, { yPercent: 110 }, cut)    // libellé caché sous son masque (overflow: hidden)
    .to(label, { yPercent: 0, duration: F(10), ease: "power3.out" }, cut + F(4));
  // le chiffre est déjà en place à la coupe : c'est lui qui frappe le temps
});

// Sortie : clignement noir de 2 im, la scène suivante frappe le temps
const END = at(START + cards.length);
tl.set(cards, { autoAlpha: 0 }, END - F(2))
  .set("#next-scene", { autoAlpha: 1 }, END);
```

**After Effects**

- Poser un Composition Marker (marqueur de composition) sur chaque temps : 30 im à 120 BPM et 60 i/s (Layer › Markers (Calque › Marqueurs), ou touche * du pavé numérique pendant l'écoute). Vérifier sur la Waveform (forme d'onde), touches L L.
- Monter chaque carte en Pre-comp (précomposition). In Point (point d'entrée) 1 im avant son marqueur, durée d'un temps. Animation › Keyframe Assistant › Sequence Layers (Animation › Assistant d'image clé › Séquencer les calques) aligne les cartes bout à bout.
- Inversion de polarité : deux couleurs de fond dans un Solid (calque Solide), permutées d'une carte à l'autre : Effect › Generate › Fill (Effet › Générer › Remplir). Ou Effect › Channel › Invert (Effet › Canal › Inverser) sur une carte sur deux.
- Libellé : Text Layer (calque de texte) sous un Mask (masque) rectangle. Position Y de +110 % de sa hauteur à 0 en 10 im, 4 im après la coupe ; influence 80 % à l'arrivée (≈ power3.out).
- Clignement noir : laisser 2 im vides avant le marqueur suivant, sur une Background Color (couleur d'arrière-plan) noire : Composition › Composition Settings (Composition › Paramètres de composition).
