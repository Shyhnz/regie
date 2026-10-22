## Le claquement d'échelle : slam, tampon, pop (scale slam, stamp slam, punch-in, scale pop)

Le mot arrive trop grand, souvent flou ou incliné, et se pose en quelques images pile sur un temps fort. L'œil reçoit le choc et la musique le confirme : le mot clé prend du poids sans aucun déplacement. Dans les meilleures, l'échelle part de ×1,4 à ×1,7 et revient à ×1 en 2 à 11 images. Variante inverse, le pop part de petit et dépasse un peu. Vue dans 56 vidéos, dont 49 notées 4 ou 5.

![Six images sur fond rouge : MOTION apparaît très grand et flou, coupé par les bords, puis rétrécit et devient net, avec une trace en contour plus grande derrière](ILLUS:echelle-1)

*[Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:01.88 à 0:02.05 : « MOTION » tombe sur la grosse caisse à ×1,42, flou, puis se pose net en 11 images ; une copie en contour reste derrière.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Slam avec flou de zoom | [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:01.88 | Étude 60 fps : ×1,42 à la 1re image (×1,6 théorique), power2.out 11 im, flou 24 → 0 ; coupe +0,5 im après le temps 4 |
| Slam incliné avec échos | [Kinetic type showreel](https://prompt-motion.com/itsuki-dev-10942d), 0:02.35 | ×1,7 → ×1 en 9 à 14 im (« outExpo » affiché), inclinaison 12 à 15° résorbée en 6 im, 3 à 4 échos horizontaux |
| Tampon qui accélère vers l'impact | [Dubz Up motion showreel](https://prompt-motion.com/devius-maximus-beab45), 0:14.48 | 2,6 → 2,5 → 2,3 → 2,0 → 1,6 → 1,0 : ease-in 7 im, arrêt sec, sur l'attaque du mot « Win » de la voix |
| Punch-in discret | [Kinetic shapes showreel](https://prompt-motion.com/shinskinakamoto-20190b), 0:02.12 | 117 → 110 → 104,5 → 101,5 → 100 % en 4 im : l'excès divisé par 2 à chaque image, sans dépassement |
| Zoom arrière depuis l'intérieur des lettres | [Claude motion designer showreel](https://prompt-motion.com/crazyalphaaa-bc7e75), 0:03.50 | ≈ ×3,5 (deux « E » plein cadre) → ×1 en 11 im, expo-out ; mot posé à 71 % L, tenu 8 im |
| Lettre à lettre en réduction | [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 0:13.58 | Étude 60 fps : chaque lettre ×1,9 → ×1 en 12 im power2.out, 2,4 im d'écart, grise à 40 % puis pleine en 4 im |
| Éclosion du centre vers les bords | [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 0:02.52 | Étude 60 fps : largeur 11,6 → 60,6 % L en 12 im expo.out ; paires I-N, H-G, T-S à 1 ou 2 im d'écart |
| Pastille en ressort | [DistilBook product explainer](https://prompt-motion.com/sudo-kiran-6609ed), 0:01.12 | Point → 100 % en 4 im, pic à 135-140 %, retour à 100 % en ≈ 18 im au total, posé sur le demi-temps |

![Huit images : WIN. orange géant et incliné tombe sur le personnage, se pose en bas à gauche, et l'impact fait jaillir une pastille « +1 WIN » du bouton du téléphone](ILLUS:echelle-2)

*[Dubz Up motion showreel](https://prompt-motion.com/devius-maximus-beab45), 0:14.47 à 0:14.80 : le tampon « WIN. » accélère jusqu'à l'impact, s'arrête sec, puis déclenche le bouton, les éclats et la pastille.*

**Règles de construction**

1. Échelle de départ : 1,1 à 1,2 pour un punch discret (shinskinakamoto, 0xfemyn), 1,4 à 1,7 pour un slam (grace-sunnyy, itsuki-dev, jesscaroline7). Au-delà de ×2, le mot est coupé : le débordement ne doit pas durer plus d'1 à 2 images (marouanegazouzi : 1 im). Chez samuel-yostt, il dure ≈ 20 im ; la fiche conseille de partir plus bas.
2. Courbe : ease-out expo, l'excès divisé par 2 à chaque image (henkvaness 158 → 126 → 109 → 100 %). 2 à 4 im pour un mot nu ; 11 à 14 im quand un flou de zoom l'accompagne (grace-sunnyy, itsuki-dev). Variante tampon : ease-in de 5 à 7 im qui accélère et s'arrête sec (devius-maximus, power2.in 5 im chez deifosv).
3. Calage : en ease-out, la 1re image, la plus grande, tombe sur le coup (grace-sunnyy +0,5 im, m1n9-k7 impact f200 pour une grosse caisse à f200,6). En ease-in, c'est l'arrivée qui tombe sur le coup ou sur la syllabe (devius-maximus).
4. Deux accessoires au plus, qui s'éteignent avec l'échelle : flou de zoom 24 → 0, trace en contour, secousse de 0,4 à 1 % du cadre (kloss-xyz, henkpoley), ou frange RVB d'≈ 1 % L éteinte en 5 à 8 im. Les 5 fiches qui gardent la frange RVB ou le glitch sont jugées « à adapter » : texture générique.
5. Réserver le slam au mot clé : un par phrase ou par mesure. Appliqué à presque chaque mot, il devient un tic (micheleharmonic, « à adapter »). Grace-sunnyy alterne : « MOTION » en slam, puis « IS » qui entre par le côté en expo.out.
6. Ne pas figer après l'impact : poussée de +3,6 % en power2.in sur 8 im jusqu'à la coupe (grace-sunnyy), ou recul lent de 3 % sur 15 im (jhylee95).

**Verdict** : à adapter. Garde-le pour le mot clé de la phrase, posé sur la grosse caisse, en partant de ×1,3 à ×1,7 pour que le mot reste entier. Retire la frange RVB systématique : c'est le même accent répété partout que tu rejettes.

**Quand l'utiliser** : en typo cinétique 1600 (le mot fort sur le temps fort), en promo SaaS (chiffre, prix, étiquette « 0 % » en tampon), en hype edit et en explainer comique (tampon de chute). Il sert l'accroche, la preuve chiffrée et la chute. On choisit les mots à claquer au découpage, un par phrase, puis on règle le geste à la construction du plan. À éviter sur une ligne de plus de 3 mots, sur chaque mot d'une rafale et dans un éditorial calme.

**HyperFrames (GSAP)**

```js
// Claquement d'échelle sur la grosse caisse : flou de zoom, trace en contour, poussée avant la coupe
const FPS = 60;
const BEAT = 60 / 128;                 // 128 BPM : 1 temps = 28,125 im
const at = b => b * BEAT;
const F = n => n / FPS;                // images → secondes
const HIT = at(4);                     // le mot clé tombe sur le temps 4

// Avant le coup : mot et trace invisibles
tl.set("#slam, #slam-ghost", { autoAlpha: 0 }, 0);

// Image du coup : trop grand et flou (×1,6, flou 24 px), posé en 11 im power2.out
tl.set("#slam", { autoAlpha: 1, scale: 1.6, filter: "blur(24px)" }, HIT)
  .to("#slam", { scale: 1, filter: "blur(0px)", duration: F(11), ease: "power2.out" }, HIT);

// Trace en contour un peu plus grande, qui reste derrière le mot
tl.set("#slam-ghost", { autoAlpha: 0.5, scale: 1.08 }, HIT + F(2));

// Pas d'image figée : +3,6 % en power2.in sur les 8 im avant la coupe du temps 5
tl.to("#slam", { scale: 1.036, duration: F(8), ease: "power2.in" }, at(5) - F(8));

// Variante tampon (ease-in) : 2,6 → 1 en 7 im, arrêt sec sur la syllabe de la voix
const VOICE = at(6);                   // attaque du mot dit, relevée sur la piste
tl.set("#stamp", { autoAlpha: 0 }, 0)
  .set("#stamp", { autoAlpha: 1, scale: 2.6, rotation: -8 }, VOICE - F(7))
  .to("#stamp", { scale: 1, rotation: -4, duration: F(7), ease: "power2.in" }, VOICE - F(7));
```

**After Effects**

- Slam : Scale (Échelle) 160 → 100 % sur 11 im, 1re image clé posée sur le marqueur de la grosse caisse. Dans le Speed Graph (éditeur de graphique de vitesse), clé de départ à vitesse maximale, Influence (influence) entrante d'environ 70 % à l'arrivée (≈ power2.out) ; pour un punch de 3 à 4 im, 90 % (≈ expo.out).
- Flou : Effect › Blur & Sharpen › Radial Blur (Effet › Flou et netteté › Flou radial), Type Zoom, Amount (Quantité) de 24 à 0 sur les mêmes 11 im ; ou activer le Motion Blur (Flou de mouvement) du calque, qui suit la variation d'échelle.
- Trace : Edit › Duplicate (Édition › Dupliquer le calque), texte sans fond avec Stroke (contour), Scale 108 %, Opacity (Opacité) 50 %, qui apparaît 2 im après le coup.
- Tampon : Scale 260 → 100 % et Rotation −8° → −4° en 7 im, Influence sortante de 70 % au départ et arrivée sans lissage (≈ power2.in). Dernière clé sur le marqueur de la syllabe ; une secousse éventuelle va sur un Null Object (objet nul) parent (6, −4, 3, −2, 1, 0 px).
- Après l'impact : Scale 100 → 103,6 % sur les 8 im avant la coupe, vitesse nulle au départ, pour que le plan ne meure pas immobile.
