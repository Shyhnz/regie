## Le décor qui bat la mesure : pulsations et métronome (beat-pulsing elements, kick pump, logo ring metronome, on-screen beat counter)

Un élément secondaire réagit à chaque temps ou à chaque grosse caisse sans faire avancer le récit : pompe d'échelle ou de lumière, anneau qui part du logo, bouton d'appel qui pulse, métronome de 4 à 8 cases dans l'habillage. Il rend la pulsation visible et garde vivants les plans tenus. Mesuré au mieux : 23 changements de case sur 23 entre −1,8 et +0,2 image du kick. Vue dans 25 vidéos, dont 25 notées 4 ou 5 (24 animées sur la musique, seules retenues comme modèles).

![Un champ de cubes 3D noirs entouré d'un anneau de cubes blancs ; au centre, le groupe de cubes orange monte, retombe, puis remonte au temps suivant](ILLUS:decor-qui-bat-1)

*[3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155), 0:10.15 à 0:10.85 : les cubes orange montent sur la grosse caisse puis retombent lentement, comme un sidechain ; le reste du champ ne bouge pas.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Pompe façon sidechain | [3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155), 0:10.18 | Étude 60 fps : surface orange +37 % en 9 im (power1.out), retour en 13 im (sine.inOut), départ 1,6 im avant le kick |
| Pulsation sèche de lumière | [Psychedelic hypnotic eye showreel](https://prompt-motion.com/monokern-ade5b6), 0:04.52 | Luminance +16 à +23 en 1-2 im, 7 kicks sur 7 à 0-1 im ; halo cyan qui s'étend en 10 im puis s'éteint en 5 im |
| Métronome du HUD | [3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155), 0:00.50 | 4 carrés d'≈ 1 % de la hauteur, un allumé par temps ; 23 changements sur 23 entre −1,8 et +0,2 im du kick |
| Compteur de croches en 6/8 | [Synced lyrics motion video](https://prompt-motion.com/samaote-5e2fc2), 0:00.50 | Étude 60 fps : 6 tirets, un par croche (22,785 im), qui change 0-1 im avant ; « BAR 0N / 13 » avance au 1er temps |
| Logo-métronome | [Supademo launch video](https://prompt-motion.com/jhylee95-e1152f), 0:00.00 | Anneau du logo de 3,8 à 6,2 % de la hauteur en 14 im, presque linéaire, relancé à chaque temps, 1-2 im avant la barre |
| Battement de cœur | [Step race app promo](https://prompt-motion.com/marklaunches-3b9492), 0:00.57 | Point +50 % et halo +30 % en 1 im, retombée 4 im ; « dub » plus faible 5 im après ; 9 coups sur 9 à ±1,5 im |
| Bouton d'appel qui bat | [Tennis game launch video](https://prompt-motion.com/deifosv-04e4d3), 0:26.97 | Seule la zone du bouton change : 4 pulsations à 15 im (1 temps), attaque 1 im, décroissance 4-6 im, 3 im avant le kick |
| Ressort d'échelle au demi-temps | [Kinetic type showreel](https://prompt-motion.com/zheke-38deff), 0:04.22 | Étude 60 fps : OVER SHOOT respire de ≈ 120 à 80 puis 115 %, période ≈ 14 im, pics 2 im avant les barres |

![Tunnel d'anneaux d'yeux turquoise : un halo clair part de l'anneau central, s'étend vers l'extérieur puis s'éteint](ILLUS:decor-qui-bat-2)

*[Psychedelic hypnotic eye showreel](https://prompt-motion.com/monokern-ade5b6), 0:05.47 à 0:05.77 : sur la grosse caisse de 5,50 s, le halo part de l'anneau central, s'étend en 10 im et s'éteint en 5.*

**Règles de construction**

1. Attaque 0 à 2 im avant le kick, jamais après : −1,6 im pour les cubes de sahildesigner23, 1-2 im pour l'anneau de jhylee95, 0-2 im pour l'oscilloscope de rneayan, 1,4 im pour la bascule de kangaroohere. 3 im d'avance (deifosv) reste la limite.
2. Enveloppe de grosse caisse : attaque 1 à 2 im, relâche 4 à 15 im (monokern, crazyalphaaa, deifosv, math-files). La respiration lente, 6 à 9 im de montée et 13 à 20 im de retour, va aux objets en volume (cubes, point final × 1,11 puis × 1,18 chez sahildesigner23).
3. Amplitude selon la cible : 2 à 3 % pour un titre tenu (tankazunori0914), 8 à 10 % pour un anneau (micheleharmonic), +28 à +38 % d'aire pour une matière (crazyalphaaa), +15 % de lumière sur un plan tenu (jesscaroline7).
4. Un élément secondaire, pas le message : coin, HUD, bouton. math-files pulse dans 7 sections sur 9 et s'arrête pendant Euler et sur la carte finale, où le texte prend le relais. Une pulsation plein cadre se limite à quelques temps (monokern : 7 kicks).
5. Elle sert les plans tenus : podium immobile éclairci sur chaque temps (jesscaroline7), tenue de 5 s gardée vivante (tankazunori0914), point final qui pulse au lieu d'un carton figé (sahildesigner23). Un défilement continu peut aussi battre, par bascule d'état sur le temps (kangaroohere).
6. Métronome : une case par temps (4 en 4/4, 8 sur 2 mesures chez crazyalphaaa), un tiret par croche en 6/8 (samaote), ≈ 1 % de la hauteur, piloté par l'horloge du code, jamais à l'œil.

**Verdict** : à reprendre, dans un coin ou sur un objet. Sur tout le cadre et en permanence, il devient un clignotement de discothèque : c'est l'accent répété partout que tu rejettes.

**Quand l'utiliser** : en showreel et typo cinétique 1600 (HUD, métronome, point final), en promo SaaS (bouton d'appel sur la carte de fin) et en 3D (pompe de matière). Il sert les maintiens, la carte de fin et l'habillage. On le choisit au système de design (habillage et métronome), puis à la construction de chaque plan tenu. Le guide Otom fait pulser le bouton « une seule fois » (guide Otom, p. 10) dans une pub sans musique ; avec une musique, une pulsation par temps sur la carte tenue la garde vivante. À éviter sans musique et sur le texte qu'on lit.

**HyperFrames (GSAP)**

```js
// Décor qui bat (128 BPM, 60 i/s) : grille du code 1 im avant le kick
const FPS = 60, BEAT = 60 / 128, F = n => n / FPS;
const beat = n => Math.max(0, n * BEAT - F(1));

// Pompe façon sidechain : montée courte, relâche plus longue
const pump = (sel, t, amt, up = 9, down = 13) =>
  tl.to(sel, { scale: 1 + amt, duration: F(up), ease: "power1.out" }, t)
    .to(sel, { scale: 1, duration: F(down), ease: "sine.inOut" }, t + F(up));

// Lumière sèche : 1 im d'attaque, halo qui s'étend 10 im puis s'éteint en 5
const flash = t =>
  tl.set("#glow", { opacity: 0.6 }, t)
    .to("#glow", { opacity: 0, duration: F(10), ease: "power2.out" }, t + F(1))
    .set("#halo", { scale: 1, opacity: 0.8 }, t)
    .to("#halo", { scale: 1.6, duration: F(10), ease: "power2.out" }, t)
    .to("#halo", { opacity: 0, duration: F(5), ease: "none" }, t + F(10));

for (let n = 20; n < 24; n++) pump("#cubes", beat(n), 0.17);  // une mesure, pas plus
for (let n = 8; n < 15; n++) flash(beat(n));                  // 7 kicks plein cadre

// Métronome du HUD : 4 cases d'≈ 1 % de la hauteur, une allumée par temps
const cells = gsap.utils.toArray(".metro i");
for (let n = 0; n < 32; n++) {
  tl.set(cells, { backgroundColor: "#3A3A3A" }, beat(n))
    .set(cells[n % 4], { backgroundColor: "#FF5A1F" }, beat(n));
}
// Carte de fin : le point final pulse sur les temps 3 et 4 de la dernière mesure
pump("#dot", beat(30), 0.11, 6, 14);
pump("#dot", beat(31), 0.18, 8, 19);
```

**After Effects**

- Composition à 60 i/s ; un marqueur de composition par grosse caisse (touche * du pavé numérique, Add Marker / Ajouter un marqueur), recalé sur la Waveform (forme d'onde) du son avec LL.
- Pompe sur Scale (Échelle), en expression (Alt + clic sur le chronomètre) : `m=thisComp.marker; n=m.numKeys?m.nearestKey(time).index:0; if(n&&m.key(n).time>time)n--; t=n?time-m.key(n).time:99; a=framesToTime(2); k=t<a?t/a:Math.exp(-(t-a)/framesToTime(5)); value*(1+0.12*k)` (attaque 2 im, relâche ≈ 10 im). Décaler les marqueurs d'1 im avant le kick.
- Variante sans marqueurs : Animation › Keyframe Assistant › Convert Audio to Keyframes (Assistant d'image clé › Convertir l'audio en images clés), puis relier l'échelle au curseur Both Channels (Les deux canaux) avec `linear()`.
- Lumière : sur un calque d'effets, Effect › Color Correction › Exposure (Correction colorimétrique › Exposition) ou Effect › Stylize › Glow (Esthétique › Lueur), piloté par la même expression.
- Métronome : 4 calques de forme ; Opacity (Opacité) de la case 1 en expression `b=Math.floor((time+framesToTime(1))*128/60); b%4==0?100:25`, puis 1, 2, 3 pour les autres cases.
