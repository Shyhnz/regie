## La finition de rendu : grain, vignette, halo, ombres douces, reflets (film grain, vignette, bloom and glow, soft drop shadows, sheen sweep, paper texture)

Une couche constante posée sur tout le film : grain fin, vignette, ombres de contact, halo, parfois un reflet sur le logo. Elle enlève l'aspect vectoriel plat et unifie des plans hétérogènes. Réglage type : coins assombris de 20 à 30 %, grain à peine visible. Vue dans 94 vidéos, dont 76 notées 4 ou 5.

![Une balle noire décolle d'un sol papier ; son ombre floue s'éloigne et pâlit pendant la montée, puis se resserre à la chute](ILLUS:finition-1)

*[Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), 0:11.92 à 0:13.17 : sans ligne de sol, l'écart entre la balle et son ombre donne seul la hauteur.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Grain et vignette, franges sur l'impact | [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 0:00.00 | grain fin et vignette légère permanents ; franges RVB 3 im, sur le seul bord de l'iris (f359-f361) |
| Vignette chiffrée sur aplats | [Motion design showreel](https://prompt-motion.com/safarkhanshuvo-ffd52d), 0:00.00 | centre → coins −30 à −40 % : orange #FF4C1E → #B53414, crème #F2EEE8 → #9A9A97 |
| Papier riso fixe | [Indian civilisation history film](https://prompt-motion.com/buildfastwithai-53234e), 0:00.00 | taches de luminance ±4 %, identiques d'une image à l'autre : matière imprimée |
| Ombre de contact qui donne la hauteur | [Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), 0:06.30 | ombre floue #B7B6AB décalée en bas à droite ; elle s'éloigne quand la balle monte (étude 60 fps) |
| Ombre portée d'interface | [Website analyzer product promo](https://prompt-motion.com/en-ra-81c6dd), 0:00.00 | flou 40-60 px, opacité 8-10 %, décalée vers le bas ; aucun contour |
| Double halo du carton final | [Launch video remake comparison](https://prompt-motion.com/notdwd-c2037d), 0:10.03 | halo serré 2-4 px + halo large ≈ 20 % H ; fond radial #272729 → #020204 ; interdit sur l'interface |
| Reflet de marque sur le logo | [Flexprice motion showreel](https://prompt-motion.com/sudeepsd-1a3485), 0:13.87 | bande jaune #FEC300 de 25 % du logo, vitesse constante, 16 im à 30 fps (0,53 s), une seule fois |
| Trait qui tremble (line boil) | [Distilbook motion showreel](https://prompt-motion.com/ajith-io-ea7f2d), 0:01.10 | lignes redessinées toutes les 3 im, contours toutes les 4 im ; caméra et objets restent à 60 im/s |

![Le logo flexprice sur fond bleu nuit : une bande jaune traverse la marque puis le mot de gauche à droite et disparaît](ILLUS:finition-2)

*[Flexprice motion showreel](https://prompt-motion.com/sudeepsd-1a3485), 0:13.80 à 0:14.40 : le reflet prend la couleur d'accent au lieu d'un éclat blanc générique.*

**Règles de construction**

1. Grain et vignette d'abord, sur tout le film, réglés une fois. Six vidéos notées 5 posent un grain fin (samaote, sudo-kiran-49176d, grace-sunnyy, tequilafunks, sahildesigner23, emollick). La vignette assombrit les coins de 10 % (shinskinakamoto) à 40 % (safarkhanshuvo), le plus souvent 20 à 30 % (teslachartz, utopyaszx).
2. Le grain bouge pour faire vivre les maintiens. Pendant 98 im de maintien, seuls le grain et la couronne bougent (samaote, étude 60 fps). Un re-tirage global peut tomber sur un temps (bogdandragomir, +1 im, étude 60 fps). Papier fixe pour le look imprimé.
3. Les effets d'optique forts tombent sur l'impact : franges RVB 3 im sur l'iris, flare de 18 im à +2 im du 3e temps (jazzen-chen). Permanents, ils s'usent (gizakdag, crazyalphaaa) ; en retard de 0,7 s, ils deviennent un gag (henkpoley).
4. Ombres larges, diffuses, faibles : flou 30 à 60 px, opacité 8 à 15 %, décalage vers le bas (en-ra, ho-ba, wani-shola). Seules, elles font le rendu SaaS par défaut (ajith-io-c52e09, rammanq : « à adapter »). L'ombre de contact qui raconte la hauteur reste la meilleure (hbcoop, 5/5).
5. Un halo à la fois, sur l'élément à regarder : rayon 2 à 3 fois l'objet (tstfully). La lueur de 15-20 px passe d'un élément à l'autre en 8-10 im (yunn260414). Une lanterne qui brûle 40 % du cadre efface le visage (ryzoft).
6. Un seul reflet par film, sur le logo final, à vitesse constante et dans la couleur de marque. Il dure 8 im (samuel-yostt) à 16 im (sudeepsd, theviableedge).

Le guide Otom demande de supprimer les ombres floues, signe de rendu générique (guide Otom, p. 14). Les mesures nuancent : l'ombre de contact qui joue la hauteur porte une 5/5.

**Verdict** : à reprendre, dosée. Grain et vignette sont le réglage par défaut des meilleurs reels ; halo, flare et franges RVB se gardent pour l'impact. Un reflet ou un halo répété à chaque plan devient l'accent répété partout que tu rejettes.

**Quand l'utiliser** : à décider au système de design (étape 6), comme la palette, puis à poser en dernier sur tout le film. Typo cinétique 1600 et showreel : grain et vignette. Promo SaaS : ombres de contact et halo qui guide l'œil. Explainer éditorial : papier ou riso. À éviter sur les captures à petit texte, où grain et halo bavent. Voir aussi « Le fond d'ambiance : halo radial, dégradé fluide, grille fine » et « Le glitch en tranches et RVB, un cliché ».

**HyperFrames (GSAP)**

```js
// Grain seedé (30 tirages/s), ombre de contact liée à la hauteur, reflet final unique.
// Vignette = calque CSS fixe : radial-gradient(ellipse, transparent 45%, rgba(0,0,0,.3) 100%)
const FPS = 60, f = n => n / FPS;
const BEAT = 60 / 120, at = b => b * BEAT;          // 120 BPM : 1 temps = 30 im
const TOTAL = at(30);                                // 15 s
const rng = a => () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
// 1. Tuile de bruit 256 px tirée une fois (graine 7), en overlay à 8 % (#grain : inset -128px)
const c = document.createElement("canvas"); c.width = c.height = 256;
const g = c.getContext("2d"), img = g.createImageData(256, 256), r = rng(7);
for (let i = 0; i < img.data.length; i += 4) {
  img.data[i] = img.data[i + 1] = img.data[i + 2] = 128 + (r() - 0.5) * 90; img.data[i + 3] = 255; }
g.putImageData(img, 0, 0);
gsap.set("#grain", { backgroundImage: `url(${c.toDataURL()})`, opacity: 0.08 });
// 2. La tuile saute à une position pseudo-aléatoire toutes les 2 im : fonction du temps seul
const STEPS = Math.round(TOTAL * 30), jit = (k, s) => Math.floor(rng(k * 7919 + s)() * 256) - 128;
tl.to("#grain", { x: STEPS, y: STEPS, duration: TOTAL, ease: `steps(${STEPS})`,
  modifiers: { x: gsap.utils.unitize(v => jit(Math.round(v), 1)),
               y: gsap.utils.unitize(v => jit(Math.round(v), 2)) } }, 0);
// 3. Ombre de contact (Full Stop, étude 60 fps) : lancer au temps 24, apogée 25 im, impact au temps 26
tl.to("#ball", { y: "-33vh", duration: f(25), ease: "power2.out" }, at(24))
  .to("#shadow", { scale: 0.6, opacity: 0.35, filter: "blur(18px)", duration: f(25), ease: "power2.out" }, at(24))
  .to("#ball", { y: 0, duration: f(35), ease: "power1.in" }, at(24) + f(25))
  .to("#shadow", { scale: 1, opacity: 0.8, filter: "blur(6px)", duration: f(35), ease: "power1.in" }, at(24) + f(25));
// 4. Reflet de marque (Flexprice) : bande de 25 % du logo, linéaire, 0,53 s ; #logo { overflow: hidden }
tl.set("#sheen", { xPercent: -150 }, 0)
  .to("#sheen", { xPercent: 450, duration: 0.53, ease: "none" }, at(28));
```

**After Effects**

- Grain : Layer › New › Adjustment Layer (Calque › Nouveau › Calque d'effets) tout en haut, puis Effect › Noise & Grain › Add Grain (Effet › Bruit et grain › Ajout de grain). Viewing Mode (Mode d'affichage) sur Final Output, sinon seul un rectangle d'aperçu est traité. Intensity 0,3-0,5, Size 1, Animation Speed 0,5 (30 tirages/s à 60 fps).
- Vignette : un solide noir avec un masque Ellipse inversé, Mask Feather (Contour progressif du masque) ≈ 40 % de la largeur, Opacity (Opacité) 25 à 30 %.
- Ombre de contact : un calque de forme Ellipse sous l'objet, Effect › Blur & Sharpen › Gaussian Blur (Flou et netteté › Flou gaussien) 6 → 18. Lier Scale et Opacity à la hauteur par expression : `linear(thisComp.layer("Balle").transform.position[1], 300, 650, 60, 100)`.
- Halo : Effect › Stylize › Glow (Esthétiques › Lueur), Glow Radius 20-40, sur le seul élément à regarder. Double halo : calque dupliqué, Gaussian Blur ≈ 20 % H, mode Add (Addition).
- Reflet : Effect › Generate › CC Light Sweep (Générer › CC Light Sweep), Light Color à la couleur de marque, Width ≈ 25 % du logo. Center : 2 clés à 0,53 s d'écart, en Linear (Linéaire). Trait qui tremble : expression `posterizeTime(15); wiggle(15, 2)` sur Position.
