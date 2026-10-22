## Le corps : poses tenues sur le temps, cycles et mouvement secondaire (pose-to-pose on beat, walk cycle, puppet rig, secondary motion, follow-through)

Deux façons d'animer un corps en code : des poses clés atteintes sur le temps et marquées 4 à 6 im, ou un cycle continu (marche, danse) où le corps rebondit, avec un mouvement secondaire en retard. Les poses sont plus sûres : la meilleure occurrence (note 5) pose 3 attitudes sur 3 temps, à 0,1-0,4 im près. La marche à deux poses qui glisse reste le cliché du personnage généré. Vue dans 15 vidéos, dont 13 notées 4 ou 5.

![Coureur pictogramme cobalt qui franchit deux haies ; sur l'image 5, des repères en X gris encadrent une pose aux membres à 45°](ILLUS:corps-poses-cycles-1)

*[Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:05.92 à 0:07.08 : le coureur traverse en 3 temps ; sur chaque temps, une pose aux membres à 45° ou 90°, marquée par des repères en X (image 5).*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Une pose clé par temps | [Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:06.10 | poses f366, f394, f422 = temps 13, 14, 15 (+0,1 à +0,4 im) ; traversée linéaire de 90 im, 1,07 % L par image (étude 60 fps) |
| Pantin tiré d'une seule illustration | [Anime maid dance showreel](https://prompt-motion.com/topi-003-b0e12c), 0:01.60 | 14 os, figure à 85-90 % H ; bas du rebond sur chaque temps à ±1 im, amplitude ≈ 3 % H, 150 BPM |
| Cycle à 2 poses tenues (stepped) | [Chuseok pixel night scene](https://prompt-motion.com/hoyoyoda-3a5c08), 0:00.00 | maillet haut, maillet bas ; période 60 im, puis 30 im dès 4,0 s : la cadence double au changement d'acte |
| Silhouette sans visage | [Lighthouse keeper silent short](https://prompt-motion.com/kamstudiolabs-0b0824), 0:09.90 | aplat noir à 25-30 % H, 5 poses lisibles (assis, debout, bras tendu, bras levé…) ; marche raide |
| Écharpe qui suit la tête | [Fiery samurai kata](https://prompt-motion.com/chrisjdimarco-f068db), 0:07.40 | pans du bandeau en retard, à l'opposé du mouvement pendant le salto et les rotations |
| Corps en segments suiveurs | [Pixel wizard crypto animation](https://prompt-motion.com/0xevinho-3777d8), 0:10.97 | ≈ 25 segments sur le chemin exact de la tête : S, crochet vers la lune, retombée ; 48 im (1,6 s) |
| Geste climax en ease-in-out | [Pelican riding a bicycle](https://prompt-motion.com/axtonliu-0b861d), 0:25.23 | ailes ouvertes en 29 im (0,97 s), départ lent, arrivée douce ; envergure ≈ 45 % L, tenue ≈ 4 s |
| Contre-exemple : la marche qui patine | [Deliberately terrible motion showreel](https://prompt-motion.com/henkpoley-3d3407), 0:43.48 | gag voulu : jambes à 2 poses changées toutes les 30 im, corps qui glisse à 23 % L/s, ombre à mi-vitesse |

![Dragon de feu en pixel art dont le long corps segmenté repasse exactement par le chemin de sa tête, du chevalier jusqu'à la lune puis sur le mannequin](ILLUS:corps-poses-cycles-2)

*[Pixel wizard crypto animation](https://prompt-motion.com/0xevinho-3777d8), 0:11.27 à 0:12.57 : chaque segment du dragon passe là où la tête est passée : S horizontal, crochet vers la lune, retombée sur le mannequin.*

**Règles de construction**

1. Une pose clé par temps, visible sur l'image du temps ou 1 im après (fionntobin, 128 BPM). Style sec : la pose change en 1 image sur le temps, puis s'amortit en 3-4 im (topi-003, f216, f240, f264). Marque chaque pose 4 à 6 im.
2. Une pose se lit à sa silhouette : membres à 45° ou 90°, épais d'au moins 2,6 % H, figure ≥ 25 % H. Sous 15-20 % H, deux figures fusionnent ([Shadow theatre home story](https://prompt-motion.com/x4b47x-9cc84f)). Sans photo, une silhouette SVG suffit (guide Otom, p. 9).
3. Un cycle porte du poids : le corps touche le bas sur chaque temps (±1 im) et remonte d'≈ 3 % H en sine.inOut (topi-003). Contre-exemple : le pélican pédale un coup toutes les 0,43 s, corps et tête immobiles : c'est mécanique.
4. Le déplacement suit la foulée, sinon les pieds patinent (henkpoley). Pour un sticker rigide, un sautillement d'≈ 1 % H par pas et une rotation sur la tangente suffisent ([Sketchbook animals come alive](https://prompt-motion.com/abderrahmen-g-9e8ed0), 1,5 % L par image).
5. Mouvement secondaire : l'élément souple (écharpe, jupe, cheveux) répète le chemin du maître avec retard et continue après l'arrêt. La berceuse du phare oscille encore 1 s après le départ du gardien ; avec la pendule, elle tient un plan de 4 s.
6. Gabarit d'une action : anticipation 0,3-0,5 s, coup 6-8 im, traînée ≈ 10 im, suite 0,5-0,8 s (samouraï). Poids et écrasement : entrée « Le poids du personnage » de ce chapitre et chapitre 9, « Le geste physique sur le temps ».

**Verdict** : à adapter. Reprends les poses sur le temps et le mouvement secondaire, qui coûtent peu ; n'écris un cycle que si le corps rebondit sur le temps. La marche à deux poses qui glisse est un cliché : remplace-la par trois poses sur trois temps.

**Quand l'utiliser** : style personnages, explainer illustré, showreel éditorial ; en typo cinétique 1600, un pictogramme qui court entre deux mots sur 3 temps. Fonction : démonstration par un geste, transition (il traverse le cadre), signature. Se décide à la direction artistique (silhouette ou personnage détaillé), puis à la construction du plan. À éviter : figure sous 15 % H, marche de plus de 2 s sans rebond, personnage plaqué sur une démo d'interface.

**HyperFrames (GSAP)**

```js
// Coureur pose à pose sur le temps + écharpe en segments suiveurs (60 fps, 128 BPM)
const FPS = 60, BEAT = 60 / 128, F = n => n / FPS;        // 1 temps = 28,125 im
const Q = n => Math.floor(n * BEAT * FPS) / FPS;           // temps n → image floor(n × 28,125)
const POSES = {                                            // angles en degrés : 45° ou 90° seulement
  haie:   { thighF: -90, shinF: 0,  thighB: 45, shinB: 90, armF: -90, armB: 45 },
  foulee: { thighF: -45, shinF: 45, thighB: 45, shinB: 0,  armF: 45,  armB: -45 },
};
const SEQ = ["haie", "foulee", "haie"];                    // temps 13, 14, 15
const T0 = F(346);
// traversée linéaire : 2,4 % → 98,5 % de la largeur en 90 im (1,07 % par image)
tl.set("#runner", { x: 46 }, T0).to("#runner", { x: 1891, duration: F(90), ease: "none" }, T0);
SEQ.forEach((name, i) => {
  const t = Q(13 + i) + F(1);                              // pose visible 1 im après le temps
  Object.entries(POSES[name]).forEach(([limb, deg]) => {
    // entre deux poses (non mesuré) : sine.inOut sur un demi-temps
    tl.to(`#runner .${limb}`, { rotation: deg, duration: BEAT / 2, ease: "sine.inOut" }, t - BEAT / 2);
  });
  tl.set("#marks", { autoAlpha: 1 }, t).set("#marks", { autoAlpha: 0 }, t + F(5)); // repères X 5 im
  if (name === "haie") {                                   // saut plat : la tête monte de 4,6 % H
    tl.to("#runner .body", { y: -50, duration: F(10), ease: "power2.out" }, t - F(13))
      .to("#runner .body", { y: 0, duration: F(10), ease: "power2.in" }, t + F(10));
  }
});
// écharpe : 6 segments sur le chemin de la tête, chacun 2 im plus tard (MotionPathPlugin)
tl.to("#scarf .seg", { motionPath: { path: "#headPath", align: "#headPath", alignOrigin: [0.5, 0.5] },
  duration: F(90), ease: "none", stagger: F(2) }, T0);
// autre plan, cycle de danse à 150 BPM : bas du rebond sur chaque temps, +3 % H, sine.inOut
const B2 = 60 / 150;
tl.fromTo("#dancer", { y: 0 }, { y: -32, duration: B2 / 2, ease: "sine.inOut",
  yoyo: true, repeat: 15, immediateRender: false }, 1.6);  // 8 temps à partir de la mesure 2
```

**After Effects**

- Rig : un calque de forme par membre, Anchor Point (Point d'ancrage) sur l'articulation, chaque segment relié à son parent par le Parent & Link (Parent et lien) ; cuisse → bassin, tibia → cuisse.
- Poses : un marqueur par temps (Layer › Markers › Add Marker, Calque › Marqueurs › Ajouter un marqueur), puis des clés de Rotation sur le marqueur + 1 im. Pour le style sec : Animation › Toggle Hold Keyframe (Image clé de maintien), et un repère en X visible 5 im.
- Rebond de cycle, expression sur Position : `b=60/150; [value[0], value[1]-16*(1-Math.cos(2*Math.PI*time/b))]` ; le bas tombe sur chaque temps, 32 px = 3 % H.
- Segments suiveurs : la tête porte les clés de Position ; chaque segment reçoit `thisComp.layer("Tete").transform.position.valueAtTime(time-(index-1)*2*thisComp.frameDuration)`, soit 2 im de retard par segment.
- Pantin tiré d'une illustration : Puppet Position Pin Tool (outil Coin de position de marionnette) ; Motion Blur (Flou de mouvement) pour les coups de 6-8 im.
