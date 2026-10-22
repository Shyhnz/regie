## Le volet par la matière du décor (object wipe, liquid wipe, ink drip, torn paper, occlusion)

Un élément du monde de la vidéo couvre l'écran et emporte le plan : marée liquide, coulure d'encre, vague, papier déchiré, train qui passe, rafale de feuilles, lumière qui s'éteint. Le volet est motivé par l'univers au lieu d'être plaqué, donc le spectateur le lit comme un événement et non comme un effet. Il dure d'un demi-temps (14 im) à 1,5 s selon le registre. Vue dans 12 vidéos, dont 11 notées 4 ou 5.

![Des gouttelettes noires flottent sur le titre jaune, puis des colonnes noires à têtes rondes montent du bas et engloutissent tout](ILLUS:volet-matiere-1)

*[Lead Notifi product ad](https://prompt-motion.com/leadnotifi-e83f94), 0:06.53 à 0:07.05 : la marée en métaballes noie « EVERY LEAD ANSWERED. » en exactement un temps.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Marée en métaballes | [Lead Notifi product ad](https://prompt-motion.com/leadnotifi-e83f94), 0:06.58 | gouttelettes dès f390, colonnes à vitesses inégales, noir complet f423 : 1 temps exact (f395 → f423), accélération progressive |
| Coulures d'encre | [Claude motion design reel](https://prompt-motion.com/ghinaiya-nirmal-5d8fec), 0:11.00 | coulures de 5 à 15 % H au départ ; luminance 179 → 12 en 14 im, un demi-temps ; coupe sur le 1er temps de la mesure 7 |
| Vague dessinée | [Sketchbook animals come alive](https://prompt-motion.com/abderrahmen-g-9e8ed0), 0:43.27 | vague ≈ 60 % H, 22 im ; moitié du cadre en 7 im, front à mi-cadre sur le temps, reste en ease-out |
| Occultation par un train | [Four seasons train window](https://prompt-motion.com/itsolelehmann-e47532), 0:06.90 | tête en 14 im (≈ 3 000 px/s), occultation totale 23 im (0,77 s) où la saison change, queue en 14 im ; linéaire |
| Rafale de feuilles | [Four seasons train window](https://prompt-motion.com/itsolelehmann-e47532), 0:14.53 | front en 14 im qui recolore derrière lui (ciel #77BFD5 → #D2A9BF) ; automne installé sur le temps fort de phrase |
| Papier déchiré | [Dubz Up motion showreel](https://prompt-motion.com/devius-maximus-beab45), 0:10.52 | bande orange déchirée à 60° : moitié du cadre en 4 im, plein 4-6 im, bord arrière déchiré qui découvre ; ≈ 20 im |
| Glaçage en festons | [sweetRegret app update reel](https://prompt-motion.com/thilina-a-891c09), 0:14.92 | bord festonné qui monte en 11 im ease-in-out, 25 % sur le temps ; il porte la maquette inclinée −8° |
| Extinction de la source | [Lighthouse keeper silent short](https://prompt-motion.com/kamstudiolabs-0b0824), 0:23.50 | la lanterne baisse en 12 im jusqu'à une braise tenue ≈ 1 s, noir 0,8 s, fondu de 0,7 s sur la salle |

![Un train rouge et crème entre par la droite, masque toute la fenêtre, puis sa queue découvre un paysage d'été](ILLUS:volet-matiere-2)

*[Four seasons train window](https://prompt-motion.com/itsolelehmann-e47532), 0:06.83 à 0:08.67 : le train croisé occulte la fenêtre 0,77 s, le printemps devient l'été derrière lui.*

**Règles de construction**

1. La matière existe dans le monde avant de couvrir, et s'annonce. Gouttelettes qui flottent avant la marée (Lead Notifi), « uh-oh! » avant la vague (Sketchbook), traînée de la fusée qui devient l'aplat puis le bandeau déchiré (Dubz Up), rafale au son avant la lanterne.
2. Durée selon le registre. Rythmé : un demi-temps à un temps, 11 à 28 im (glaçage 11, coulures 14, papier ≈ 20, marée 28). Narratif : 0,7 à 1,5 s, avec une occultation totale de 0,77 à 0,8 s (train, tunnel) ou un rideau ouvert en 1,5 s ease-in-out (Shadow theatre home story).
3. Front irrégulier, couverture monotone : colonnes et coulures de longueurs inégales (5 à 15 % de la hauteur au départ), bord ondulé d'≈ 8 % d'amplitude (rideau de nuit de Sketchbook). Le bord vit, mais la part couverte ne recule jamais.
4. Calage (vidéos animées sur la musique) : la marée dure un temps exact ; les coulures partent du demi-temps et coupent sur le 1er temps de mesure ; la vague passe mi-cadre sur le temps ; le rideau de nuit part du demi-temps et finit sur le temps.
5. Le son porte la matière : souffle large bande pendant le train (7,0-8,25 s), vent pendant les feuilles, aigus coupés dans le tunnel, frottement pendant la gomme (Replica symmetry breaking whiteboard).
6. Monté de travers ou hors univers, le raccord casse. Ren app launch video : un bord liquide remonte et redévoile l'ancienne scène après 13 im de noir. Geometric motion designer showreel : une image noire avant l'éclaboussure se lit comme un bug.

**Verdict** : à reprendre, à une condition : que la matière appartienne au monde de la vidéo ou à la marque. En promo SaaS, tire-la de la charte (les points de Lead Notifi deviennent des métaballes, la pâtisserie de sweetRegret donne le glaçage) ; c'est la même logique que ta « feuille qui devient logo ».

**Quand l'utiliser** : d'abord en illustration narrative et personnages (saisons, nuit qui tombe, lanterne), et dans les marques à matière forte (encre, papier, aliment, liquide). En promo SaaS, pour un changement de chapitre ou une chute avant le logo, si la charte fournit la matière. On la choisit à la direction artistique (quelle matière a le monde ?) et on la construit aux enchaînements. À éviter dans une interface sobre sans matière (liquide plaqué) et en typo cinétique pure, où le filé ou la coupe sur le temps sont plus nets.

**HyperFrames (GSAP)**

```js
// Marée en métaballes (Lead Notifi) : 9 colonnes à têtes rondes montent à vitesses
// inégales et noient le cadre en exactement 1 temps, annoncées par des gouttelettes.
const FPS = 60, f = n => n / FPS;
const BEAT = 60 / 128, at = b => b * BEAT;        // 128 BPM : 1 temps = 28,125 im
const START = at(14), END = at(15);                // 1 temps, comme f395 → f423
// SVG 1920 × 1080 : <g id="tide" filter="url(#goo)"> 9 <g class="col"> espacés de 213 px
// (rect 220 × 1300 + cercle r 110 en tête, en y = 0). #goo : feGaussianBlur stdDeviation 24,
// puis feColorMatrix "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -12" : les têtes fusionnent.
const lag = [0.0, 0.3, 0.1, 0.5, 0.2, 0.4, 0.05, 0.35, 0.15]; // valeurs fixes : rendu déterministe
gsap.utils.toArray("#tide .col").forEach((col, i) => {
  const d = lag[i] * (END - START) * 0.5;          // départs étalés sur un demi-temps
  tl.set(col, { y: 1200 }, 0)
    .to(col, { y: -110, duration: END - START - d, ease: "power2.in" }, START + d);
});
// gouttelettes noires qui naissent 5 im avant la marée et dérivent vers le haut
tl.set(".drop", { scale: 0, transformOrigin: "50% 50%" }, 0)
  .to(".drop", { scale: 1, duration: f(6), ease: "back.out(2)", stagger: f(2) }, START - f(5))
  .to(".drop", { y: "-=40", duration: END - START, ease: "sine.inOut" }, START);
// noir plein sur le temps : la scène suivante (fond noir) prend la place
tl.set("#sceneA", { autoAlpha: 0 }, END)
  .set("#sceneB", { autoAlpha: 1 }, END)
  .set(["#tide", ".drop"], { autoAlpha: 0 }, END);
```

**After Effects**

- Marée : 9 Shape Layers (calques de forme), Rectangle + Ellipse en tête. Position Y 1 300 → −110 px en 28 im, 1re clé influence sortante 70 % (ease-in). Décaler les départs de 0 à 14 im dans un ordre irrégulier, à la main après Animation › Keyframe Assistant › Sequence Layers (Animation › Assistant d'image clé › Séquencer les calques).
- Fusion des têtes : précomposer les colonnes avec Layer › Pre-compose (Calque › Précomposer), puis Effect › Blur & Sharpen › Gaussian Blur (Effet › Flou et netteté › Flou gaussien) 25 et Effect › Color Correction › Levels (Effet › Correction colorimétrique › Niveaux) sur le Channel Alpha (couche Alpha) : Input Black (Noir en entrée) ≈ 110, Input White (Blanc en entrée) ≈ 140.
- Papier déchiré et coulures : Shape Layer incliné à 60° avec Effect › Stylize › Roughen Edges (Effet › Esthétiques › Bords irréguliers) ; pour des coulures qui vivent, ajouter Effect › Distort › Turbulent Displace (Effet › Distorsion › Déplacement de turbulence) animé. Couvrir en 4-6 im, découvrir avec le bord arrière.
- Occultation : l'objet (train, mur de tunnel) traverse en interpolation Linear (Linéaire), tête en 14 im, avec Effect › Blur & Sharpen › Directional Blur (Flou directionnel). Changer le décor derrière pendant les 23 im d'occultation ; Effect › Color Correction › Exposure (Effet › Correction colorimétrique › Exposition) −0,3 sur l'intérieur pendant le passage.
- Son : poser le souffle, le vent ou le frottement sur toute la durée du volet, pic d'intensité à l'image de couverture totale.
