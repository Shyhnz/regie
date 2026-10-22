## L'interlettrage et les axes variables (tracking-in, tracking expansion, variable-font weight / width wave)

Le mot reste à sa place, mais sa forme bouge : l'interlettrage (tracking) se resserre ou s'ouvre, la graisse ou la chasse d'une police variable change d'un coup ou en vague lettre à lettre. C'est l'animation la plus typographique : elle fait vivre un mot seul sans zoom ni déplacement. Le geste va du coup de 4 im (« STRETCH » passe de 62 à 125 % de chasse en 0,17 s) au souffle d'une mesure entière sur une note tenue. Vue dans 25 vidéos, dont 24 notées 4 ou 5.

![Huit images : WEIGHT passe de filiforme à très gras, STRETCH s'élargit avec un flou horizontal sur fond bleu, puis SPACE ouvre son interlettrage sur fond crème](ILLUS:interlettrage-1)

*[Claude motion design reel](https://prompt-motion.com/tequilafunks-97f6c9), 0:10.53 à 0:11.33 : trois axes en 0,8 s, un par temps ou demi-temps : graisse 100 → 900, chasse 62 → 125 %, interlettrage −0,04 → 0,32 em.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Resserrement d'entrée (tracking-in) | [Claude motion reel](https://prompt-motion.com/jasonzhou1993-8595e0), 0:02.33 | Lettres au-delà de 100 % L → mot à 47 % L en 11 im (0,18 s), ease-out, flou horizontal ; légende « tracking 150 → −6 » |
| Resserrement « slam » | [Browser automation skill launch](https://prompt-motion.com/hqmank-7c61f1), 0:17.23 | Le mot déborde le cadre, flou fort, net en 2 im (0,03 s) sur coupe franche ; mot ≈ 9 % H |
| Rampe de graisse sur le temps | [Claude motion design reel](https://prompt-motion.com/tequilafunks-97f6c9), 0:10.50 | Étude 60 fps : Thin tenu 4 im, puis Black en 6 im power1.out (30 fps) ; mot 69,4 → 78,6 % L |
| Coup de chasse | [Claude motion design reel](https://prompt-motion.com/tequilafunks-97f6c9), 0:10.97 | Étude 60 fps : 47,9 → 81,1 % L en 5 im (0,17 s) power4.out, 90 % atteints 2 im après la coupe du temps |
| Souffle sur la note tenue | [Synced lyrics motion video](https://prompt-motion.com/samaote-5e2fc2), 0:16.20 | Étude 60 fps : « you » de 13,1 à 21,8 % L (écart ×3, échelle ×1,4) en 88 im linéaires, toute la mesure |
| Fermeture et graisse | [Synced lyrics motion video](https://prompt-motion.com/samaote-5e2fc2), 0:25.17 | Étude 60 fps : 59,3 → 30,6 % L, encre ×4,5, 94 im sine.inOut, départ sur le 1er temps de la mesure |
| Vague de chasse lettre à lettre | [Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be), 0:02.27 | Étude 60 fps : chaque lettre 6 ↔ 22,5 % L, sine.inOut, période ≈ 50 im, 7 im (¼ de temps) entre lettres |
| Vague de graisse aller-retour | [Code-only motion design reel](https://prompt-motion.com/johnsavage-ai-b091c0), 0:02.85 | 900 → 200 → 900, 2 im par lettre : 10 im, 7 im tenus, 10 im ; du temps 3 au temps 4 |

![Six images : le mot through, très espacé et flou sous une éclipse, se resserre et devient gras pendant que la lune couvre le soleil](ILLUS:interlettrage-2)

*[Synced lyrics motion video](https://prompt-motion.com/samaote-5e2fc2), 0:25.20 à 0:26.73 : « t h r o u g h » se ferme en 1,6 s et prend de la graisse pendant que la lune ferme la lumière.*

**Règles de construction**

1. Deux régimes, jamais entre les deux. Le coup dure 2 à 11 im à 60 fps (0,03 à 0,37 s) en power3 ou power4.out (tequilafunks, web3wesley, jasonzhou, m1n9-k7). Le souffle dure 1 à 1,6 s, en linéaire ou sine.inOut, sur une note tenue (samaote 88 et 94 im, roundtablespace 62 im).
2. Tracking-in d'entrée : départ à +40 à +100 % d'interlettrage, gris ou à 30 % d'opacité, resserré en 5 à 11 im ease-out avec flou horizontal (m1n9-k7, macrohou, majin-appsheet, codestackr, reyzostyle). Le débordement ne dure que le début du resserrement (2 im chez hqmank) ; posé, le mot tient en entier dans le cadre.
3. C'est la fin du geste qui tombe sur la grille. Black atteint sur le temps, 90 % de la chasse 2 im après la coupe (tequilafunks) ; départ du souffle sur le 1er temps de la mesure (samaote) ; vague décalée au quart de temps (roundtablespace, stephanlivera).
4. Le geste dit le mot : WEIGHT s'épaissit, STRETCH s'étire, « through » se ferme avec l'éclipse, « I think » s'épaissit quand la pensée aboutit (souravbhar871). Sans ce lien, c'est un tic de démonstration.
5. Animer de vrais axes (wght 100 à 900, wdth 62 à 125 sur Archivo), pas un scaleX : les fûts gardent leur épaisseur (3xtihor). Les étiquettes « WGHT 200-900 » ou « font-stretch » en direct (web3wesley, johnsavage) appartiennent aux showreels de typo.

**Verdict** : à reprendre. C'est la meilleure façon de garder un mot seul vivant pendant sa tenue, sans zoom inutile ni temps mort. Le tracking-in d'entrée est devenu courant : réserve-le à un titre par film et préfère le coup d'axe calé sur le temps.

**Quand l'utiliser** : en typo cinétique 1600 et en showreel éditorial, sur un mot seul plein cadre (8 à 17 % H) : accroche, temps fort, ou tenue d'une note chantée à la place d'une poussée de 2 %. Le choix se fait au système de design (une police variable à axes wght et wdth, auto-hébergée), puis à la construction du plan. À éviter sur les phrases longues, les textes d'interface et sous 5 % H, où la variation ne se voit pas.

**HyperFrames (GSAP)**

```js
// Tracking-in, rampe de graisse, souffle sur note tenue, vague de chasse (police variable)
// CSS : .vf { font-family: "Archivo VF"; font-variation-settings: "wght" var(--wght), "wdth" var(--wdth); }
// Police auto-hébergée (@font-face local) ; mesurer après document.fonts.ready
const FPS = 60, F = n => n / FPS;
const BEAT = 60 / 128, at = b => b * BEAT;          // 128 BPM

// 1) Tracking-in : +0,6 em, gris et flou → serré, crème, net en 8 im ; posé sur le temps 4
tl.set("#w1", { letterSpacing: "0.6em", color: "#5A5A5A", filter: "blur(6px)", autoAlpha: 1 }, at(4) - F(8))
  .to("#w1", { letterSpacing: "0em", color: "#EEECE6", filter: "blur(0px)",
               duration: F(8), ease: "power3.out" }, at(4) - F(8));

// 2) Rampe de graisse : Thin tenu 8 im après la coupe, puis Black en 12 im, atteint sur le temps 9
tl.set("#w2", { "--wght": 100, "--wdth": 100, autoAlpha: 1 }, at(9) - F(20))
  .to("#w2", { "--wght": 900, duration: F(12), ease: "power1.out" }, at(9) - F(12));

// 3) Coup de chasse 62 → 125 en 10 im power4.out, départ sur la coupe du temps 10
tl.set("#w3", { "--wght": 900, "--wdth": 62, autoAlpha: 1 }, at(10))
  .to("#w3", { "--wdth": 125, duration: F(10), ease: "power4.out" }, at(10));

// 4) Souffle : interlettrage ×3 et échelle ×1,4 en linéaire sur toute la mesure (note tenue)
tl.set("#w4", { letterSpacing: "0em", scale: 1 }, 0)       // valeur de départ explicite (pas « normal »)
  .to("#w4", { letterSpacing: "0.25em", scale: 1.4, duration: at(4), ease: "none" }, at(16));

// 5) Vague de chasse : chaque lettre (spans .ch préparés à la main) va et vient, ¼ de temps d'écart
tl.set("#w5 .ch", { "--wdth": 62 }, 0)
  .to("#w5 .ch", { "--wdth": 125, duration: BEAT, ease: "sine.inOut",
                   yoyo: true, repeat: 1, stagger: BEAT / 4 }, at(20));
```

**After Effects**

- Police variable obligatoire (Archivo, Inter, Roboto Flex…). Graisse et chasse : Text › Animate › Variable Font Axes (Texte › Animer › Axes de police variable) (After Effects 24 et plus), valeur 100 → 900 ou 62 → 125. Interlettrage : Animate › Tracking (Animer › Approche), Tracking Amount (Valeur d'approche).
- Coup : 2 images clés sur 5 à 10 im (à 60 fps), Speed Graph (éditeur de graphe de vitesse), Influence (influence) ≈ 85 % sur la clé d'arrivée (≈ power4.out). Placer la clé d'arrivée sur le marqueur du temps (Layer › Markers › Add Marker (Calque › Marqueur)).
- Tracking-in : Tracking de +600 à 0 en 8 im, Opacity (Opacité) 30 → 100 %, et Effect › Blur & Sharpen › Directional Blur (Effet › Flou et netteté › Flou directionnel) (direction 90°, 20 → 0) sur les mêmes clés.
- Souffle : Tracking et Scale (Échelle) 100 → 140 % sur une mesure, interpolation linéaire, sans lissage.
- Vague : Range Selector, Advanced › Shape « Triangle » ou « Round » (Sélecteur de plage, Avancé › Forme « Triangle » ou « Arrondi »), Based On Characters (Basé sur Caractères) ; animer l'Offset (Décalage) de −100 à 100 % sur 2 temps. Pour un aller-retour, deux passages.
