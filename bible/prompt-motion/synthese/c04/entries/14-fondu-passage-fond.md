## Le fondu et le passage par le fond (crossfade, dip to black, dip to background, blur dissolve)

Le plan A s'efface pendant que le plan B apparaît (fondu enchaîné), ou les deux passent par un fond uni : noir, papier, brouillard. Ses formes utiles sont courtes : une image de mélange qui adoucit une coupe, un échange flouté de 7 im, un raccord sur un objet qui ne bouge pas. Long, gris ou répété à chaque scène, c'est la transition par défaut des vidéos faibles. 41 % des vidéos qui l'emploient sont notées 3 ou moins, contre 20 % du corpus. Vue dans 68 vidéos, dont 40 notées 4 ou 5.

![Huit images : la carte blanche « Short links. », une image grise unie où « QR codes. » transparaît, la carte noire « QR codes. » pleine, puis la carte orange « Custom »](ILLUS:fondu-passage-fond-1)

*[Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:10.72 à 0:11.08 : chaque carte de la rafale entre par une image grise unie, puis 3 im de retour linéaire ; carte pleine 1 im avant la croche.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Fondu d'une image à la coupe | [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 0:12.00 | 1 im à ≈ 50 % sur les coupes de croche (toutes les 15 im) ; coupes de double-croche sèches (étude 60 fps) |
| Coupe par une image grise | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:10.75 | image #808080, puis 3 im linéaires (luminance 129 → 88 → 49 → 12) ; carte pleine 1 im avant la croche (étude 60 fps) |
| Fondu flou express | [org2html product showreel](https://prompt-motion.com/kyonax-on-tech-aabc1d), 0:11.67 | sortie flou + opacité en 4 im ; entrée floue à 50 % sur l'image du temps, nette 2 im après ; 7 im sans déplacement |
| Rampe de flou, coupe au pic | [Frame by Frame launch video](https://prompt-motion.com/notdwd-7de38a), 0:06.90 | carte −5 % et flou 1 → 7 px en 15 im, coupe au pic, plan B flou à 12 px, net 11 im après, sur la grosse caisse |
| Échange flouté dans un conteneur fixe | [Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86), 0:01.93 | conteneur jamais flou ; sortie 4-6 im, entrée 6-8 im ; titre, barre, commandes à ≈ 4 im d'écart (étude 60 fps) |
| Fondu raccord sur un objet immobile | [Norilu product launch video](https://prompt-motion.com/sachaarbonel-8f14f4), 0:23.33 | l'horloge reste à 07:00 ; fond indigo → crème et textes changent en 12 im, milieu sur le temps |
| Passage par le papier | [Sketchbook animals come alive](https://prompt-motion.com/abderrahmen-g-9e8ed0), 0:53.57 | délavé vers le crème en 12 im linéaires, crème pur sur le temps, aquarelle suivante en 8 im |
| Noir sur le temps fort | [GenVizu product launch](https://prompt-motion.com/listudio-820c7b), 0:32.37 | assombrissement de 18 im, milieu exactement sur le temps 32,5 s, où reviennent l'attaque et le groove |

![Six images : l'horloge passe de 06:57 à 07:00 sur fond indigo, puis le fond devient crème et les textes changent autour de l'horloge restée en place](ILLUS:fondu-passage-fond-2)

*[Norilu product launch video](https://prompt-motion.com/sachaarbonel-8f14f4), 0:23.20 à 0:23.87 : tout fond autour de l'horloge, qui ne bouge pas ; la nuit devient le matin.*

**Règles de construction**

1. Fondre le contenu, jamais le fond commun. Deux plans à 50 % sur du noir perdent un quart de luminance : 237 → 178 à mi-course dans [Norilu product launch video](https://prompt-motion.com/sachaarbonel-8f14f4) (12 fois). Le conteneur ou le fond reste net et plein.
2. Trois durées : 1 à 3 im pour adoucir une coupe, 6 à 12 im pour un fondu flou, 18 à 60 im seulement aux bornes d'un acte. Deux interfaces superposées plus de 4 im deviennent illisibles ([FigPad product promo](https://prompt-motion.com/ai-baymax-0ef9dd)).
3. Le flou plutôt que la transparence : 7 à 12 px de flou cachent la coupe sans double image. Le plan B entre flou sur l'image du temps et devient net en 2 à 11 im.
4. Pas de fondu direct entre un fond clair et un fond sombre : il passe par un gris boueux. [Matra caption app promo](https://prompt-motion.com/gautam-mer1-2ae354) montre 0,5 s de gris. Préfère une coupe franche, un flash de 2 à 3 im ou une révélation circulaire.
5. La couleur du passage est celle du monde : brouillard d'une scène 3D ([AI data centre 3D tour](https://prompt-motion.com/sayan-shanky-f850d8)), papier d'un carnet, noir pour une fin d'acte. Le milieu du passage, ou l'image pleine, tombe sur un temps.
6. Le fondu long reste une ponctuation rare : épilogue en 60 im ([Lighthouse keeper silent short](https://prompt-motion.com/kamstudiolabs-0b0824)), ouverture en 27 im. Le même fondu à chaque scène fait diaporama : [Developer portfolio site showreel](https://prompt-motion.com/wani-shola-16ca7a), 16 changements sur 16.

**Verdict** : à adapter. Garde-le court (1 à 12 im), flouté, limité au contenu, ou réservé aux bornes d'un acte ; jamais comme transition par défaut. Le guide Otom (p. 7) propose le fondu enchaîné par défaut ; nos mesures en font un repli. Sa coupe ou son volet rapide de 250 ms (guide Otom, p. 10) vont dans le sens des meilleures vidéos.

**Quand l'utiliser** : en typo cinétique 1600, l'image de mélange ou l'image grise adoucit une rafale de plans de 7 à 15 im. En promo SaaS ou interface, l'échange flouté renouvelle le contenu d'une carte qui reste en place. En court métrage, personnages ou 3D, le noir ou le brouillard sépare les actes, ouvre et ferme. Il se choisit à l'étape des enchaînements, en repli quand aucune transition motivée n'existe ; au contrôle qualité, compte les fondus. À éviter entre chaque scène et entre fonds clair et sombre.

**HyperFrames (GSAP)**

```js
// 1) Échange flouté du contenu (le fond ne bouge pas) ; 2) image grise d'une rafale (60 fps)
const FPS = 60, f = n => n / FPS;
const BEAT = 60 / 128;                       // 128 BPM : 1 temps = 28,125 im
const at = b => b * BEAT;
const T = at(12);                            // le nouveau mot arrive sur ce temps
tl.set("#wordB", { autoAlpha: 0, filter: "blur(12px)" }, 0)
  .set("#grey", { autoAlpha: 0 }, 0);        // aplat #808080 plein cadre, au-dessus de tout
// 1a. Sortie : le mot A se floute et s'éteint en 4 im, juste avant le temps
tl.to("#wordA", { autoAlpha: 0, filter: "blur(12px)", duration: f(4), ease: "power1.in" }, T - f(4));
// 1b. Entrée : B apparaît flou à 50 % sur l'image du temps, net 2 im plus tard
tl.set("#wordB", { autoAlpha: 0.5 }, T)
  .to("#wordB", { autoAlpha: 1, filter: "blur(0px)", duration: f(2), ease: "power2.out" }, T);
// 2. Rafale : chaque carte entre par 1 image grise, puis 3 im linéaires ; pleine 1 im avant la croche
const cards = gsap.utils.toArray(".burst-card");
tl.set(cards, { autoAlpha: 0 }, 0);
cards.forEach((card, i) => {
  const C = at(16) + i * at(0.5);            // une carte par croche
  if (i > 0) tl.set(cards[i - 1], { autoAlpha: 0 }, C - f(4));   // la carte précédente sort sèche
  tl.set(card, { autoAlpha: 1 }, C - f(4))
    .set("#grey", { autoAlpha: 1 }, C - f(4))
    .to("#grey", { autoAlpha: 0, duration: f(3), ease: "none" }, C - f(4));
});
```

**After Effects**

- Placer le fond sur son propre calque, hors du fondu. Seul le contenu porte Effect › Blur & Sharpen › Gaussian Blur (Flou et netteté › Flou gaussien), 0 → 12 px, et Opacity (Opacité) 100 → 0 % en 4 im.
- Entrée : le calque B commence sur l'image du temps à 50 % d'Opacity et 12 px de flou ; 100 % et 0 px 2 im plus tard, influence d'arrivée à 70 % dans le Speed Graph (éditeur de graphe de vitesse).
- Image grise : Layer › New › Solid (Calque › Nouveau › Solide) #808080 au-dessus de la rafale, 1 im pleine, puis Opacity 100 → 0 % en 3 im, keyframes en Linear (images clés linéaires). La carte est pleine 1 im avant la croche.
- Fondu raccord : l'objet commun (horloge, logo) sur un calque au-dessus des deux plans ; seul le reste fond, en 12 im centrées sur le temps.
- Passage par le fond du monde : Solid de la couleur du brouillard ou du papier. Montée en 12 à 14 im, 2 à 6 im pur, descente en 8 à 18 im. Pour une fin d'acte, tenir au moins 1 s de noir.
