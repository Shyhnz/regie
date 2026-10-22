## La mise au point et la profondeur sans 3D (rack focus, depth of field, layered 2.5D depth, foreground blur)

La profondeur vient du flou, pas de la géométrie. Un mot passe du flou au net en 5 im, comme un objectif qui fait le point ; un fond se floute et s'assombrit pour céder la place ; des plans étagés, plus ou moins flous ou brumeux, font croire à la 3D. C'est le moyen le plus simple de hiérarchiser deux couches et de donner un air filmé à du HTML plat. Vue dans 9 vidéos, dont 8 notées 4 ou 5.

![Le mot CLEAR, très flou sur fond crème, devient net en quatre images pendant que quatre crochets rouges se referment depuis les coins](ILLUS:mise-au-point-profondeur-1)

*[Portfolio motion reel](https://prompt-motion.com/heyiammallik-e72d17), 0:01.50 à 0:01.58 : la coupe arrive sur « CLEAR, » flou ; 5 im plus tard le mot est net et cadré par le viseur.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Mise au point sur le mot clé | [Portfolio motion reel](https://prompt-motion.com/heyiammallik-e72d17), 0:01.50 | flou ≈ 20 px → net en 5 im ; 4 crochets rouges se referment depuis les coins ; net sur la barre f94 |
| Mise au point pendant l'impact | [Claude motion reel](https://prompt-motion.com/codestackr-c071bf), 0:02.00 | « I » à ≈ 20 % H, flou fort → net en 5 im pendant que l'onde de choc s'ouvre, sur le drop |
| Ouverture qui fait le point | [SaaS launch video](https://prompt-motion.com/aschapmann-131210), 0:00.00 | mur de messages flou ≈ 12 px → net en 30 im (2 temps) ease-out pendant que les premiers mots entrent |
| Défocalisation qui relègue le fond | [SaaS launch video](https://prompt-motion.com/aschapmann-131210), 0:03.80 | titre flou + fondu en 6 im ; mur flou et à ≈ 30 % de luminosité en 10 im ; scène 2 posée dessus, sans coupe |
| Mise au point sur la carte d'interface | [Parenting app hype video](https://prompt-motion.com/francoxavier33-d2dfd2), 0:03.03 | téléphone flou 6-8 px + voile blanc ≈ 45 % en 5 im ; carte nette inclinée +8° → −2° en 5-6 im |
| Macro à faible profondeur de champ | [Distilbook motion showreel](https://prompt-motion.com/itisrazak-3ad902), 0:00.00 | 2-3 premières lignes nettes, bas de page flou ; plan incliné −4° → −2°, dérive ≈ 10 % L en 35 im |
| Premier plan flou géant | [GravityDEX anime hype edit](https://prompt-motion.com/micheleharmonic-77628e), 0:09.60 | tranche de pièce floue (≈ 5 % L de flou) sur 50-60 % du cadre, dérive lente ; les mots se posent dessus |
| Plans étagés et brume | [Shadow theatre home story](https://prompt-motion.com/x4b47x-9cc84f), 0:00.00 | 4 plans : lointain clair et brumeux (#9C7A62), arbres, maison noire, sol noir sur ≈ 20 % du bas |

![Un téléphone net affiche une appli ; il se floute et pâlit pendant qu'une carte Create todo nette arrive par la droite, inclinée, et se pose](ILLUS:mise-au-point-profondeur-2)

*[Parenting app hype video](https://prompt-motion.com/francoxavier33-d2dfd2), 0:02.97 à 0:03.37 : l'appli passe au second plan en 5 im ; seule la carte reste nette, le contexte reste visible.*

**Règles de construction**

1. Un mot à lire passe du flou au net en 5 im à 60 fps (≈ 0,08 s), en ease-out (heyiammallik, codestackr). Départ ≈ 20 px pour un mot à 20 % H. Seul un fond peut prendre 1 s, parce que le texte entre par-dessus pendant ce temps (aschapmann).
2. Calage (modèles animés sur la musique) : la coupe tombe sur le temps avec le mot flou, le net arrive 4 à 5 im après, sur la barre (heyiammallik, f90 → f94). Pour une sortie, le flou démarre ≈ 0,25 s avant la grosse caisse, avec le souffle (aschapmann, f115) ; la scène suivante se pose sur le coup (f122).
3. Pour céder la place, flouter et assombrir ensemble : 12 px et ≈ 30 % de luminosité (aschapmann), 6-8 px et voile blanc ≈ 45 % (francoxavier). Le contexte reste reconnaissable ; la hiérarchie se lit sans zoom.
4. Une seule couche nette à la fois : un mot, une carte, 2-3 lignes (itisrazak). Le premier plan flou est grand et sans détail : 50-60 % du cadre (micheleharmonic), ou un nuage d'≈ 30 fragments (agonaliu).
5. Sans flou, la perspective atmosphérique suffit : le lointain plus clair et moins contrasté (x4b47x, 4 plans). Un seul traitement par film : chez faroukzy, robot ombré façon 3D et humains en aplats jurent au dernier acte.
6. En vraie 3D, le point peut glisser pendant une orbite : plans flous à 6,0 s, nets à 6,5 s (samuel-spitz). Voir « Filmer une scène 3D ». Le flou comme transition entre deux plans est traité au chapitre 4 (« Le fondu et le passage par le fond »).

**Verdict** : à reprendre pour le mot clé et la carte d'interface. Pour un fond de texte flou, assombris-le à ≈ 30 % : sinon on retombe dans le « mur de mots flous » que tu rejettes.

**Quand l'utiliser** : en typo cinétique 1600, un mot clé qui fait le point sur le temps, une ou deux fois par vidéo, jamais à chaque mot. En promo SaaS, la carte nette sur l'appli floutée montre une fonction sans zoom. En ouverture, le fond qui fait le point installe le décor ; en court métrage ou personnages, les plans étagés donnent la profondeur. On fixe le flou de fond standard au système de design (6-12 px, ≈ 30 % de luminosité), puis on le place à la construction du plan. À éviter sur un texte à lire plus de 5 im flou.

**HyperFrames (GSAP)**

```js
// 1) Mise au point du mot clé en 5 im + crochets ; 2) le fond cède la place ; 3) bascule de netteté entre couches
const FPS = 60;
const BEAT = 60 / 120;                       // 120 BPM : 1 temps = 30 im
const at = b => b * BEAT;
const F = n => n / FPS;

// 1. Coupe sur le temps 3 : mot flou (≈ 20 px pour 20 % H), net 5 im plus tard
const CUT = at(3);
tl.set("#word", { autoAlpha: 0, filter: "blur(20px)" }, 0)
  .set("#word", { autoAlpha: 1 }, CUT)
  .to("#word", { filter: "blur(0px)", duration: F(5), ease: "power2.out" }, CUT)
  // crochets : partent des coins du cadre (data-dx / data-dy en px) et se referment sur le mot
  .set(".bracket", { autoAlpha: 0 }, 0)
  .set(".bracket", { autoAlpha: 1, x: (i, el) => +el.dataset.dx, y: (i, el) => +el.dataset.dy }, CUT)
  .to(".bracket", { x: 0, y: 0, duration: F(5), ease: "power3.out" }, CUT);

// 2. Sortie : départ 16 im avant la grosse caisse (le souffle), le fond reste en arrière-plan
const NEXT = at(8);
tl.set("#bg", { filter: "blur(0px) brightness(1)" }, 0)
  .to("#title", { filter: "blur(12px)", autoAlpha: 0, duration: F(12), ease: "power2.in" }, NEXT - F(16))
  .to("#bg", { filter: "blur(12px) brightness(0.3)", duration: F(20), ease: "power2.inOut" }, NEXT - F(16))
  .set("#scene2", { autoAlpha: 1 }, NEXT);

// 3. Couches .layer (data-z : 0 fond, 1 milieu, 2 premier plan) : ≈ 6 px de flou par plan d'écart
const layers = gsap.utils.toArray(".layer");
const blurFor = (el, z) => `blur(${Math.abs(+el.dataset.z - z) * 6}px)`;
layers.forEach(el => tl.set(el, { filter: blurFor(el, 0) }, 0));       // net sur le fond
layers.forEach(el => tl.to(el, { filter: blurFor(el, 2), duration: F(30), ease: "power2.inOut" }, at(10)));
```

**After Effects**

- Mot clé : Effect › Blur & Sharpen › Gaussian Blur (Effet › Flou et netteté › Flou gaussien), Blurriness (Flou) 20 → 0 en 5 im à partir de l'image du temps ; influence d'arrivée 70 % dans le Speed Graph (éditeur de graphe de vitesse).
- Crochets : 4 Shape Layers (calques de forme) en L, Position du coin du cadre vers le mot en 5 im, influence d'arrivée 80 % (≈ power3.out).
- Fond qui cède : sur le seul calque de fond, Gaussian Blur 0 → 12 et Levels (Niveaux) › Output White (Blanc en sortie) 255 → 77 (≈ 30 %), en 20 im, 16 im avant le marqueur de la grosse caisse.
- Vraie profondeur : plans en 3D Layer (calque 3D) espacés en Z, caméra avec Camera Options › Depth of Field (Options de caméra › Profondeur de champ) sur On. Layer › Camera › Link Focus Distance to Layer (Calque › Caméra › Lier la distance de mise au point au calque) sur le plan net ; pour basculer, animer Focus Distance (Distance de mise au point) d'un plan à l'autre en 30 im.
- Brume sans 3D : un Solid (solide) couleur du ciel au-dessus de chaque plan lointain, Opacity (Opacité) 30 à 50 %, plus forte pour le plus éloigné.
