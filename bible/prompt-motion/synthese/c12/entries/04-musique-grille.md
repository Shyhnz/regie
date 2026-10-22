## Étape 4 · La musique et la grille : tempo, mesures, temps forts, bande-son

On choisit le tempo d'après la durée, on pose la grille (temps, mesures, images par temps) et on décide d'où vient le son, avant toute animation. C'est le facteur le plus lié à la note : les 129 vidéos animées sur la musique font 4,06 de moyenne et 14 des 17 notes de 5 ; les 12 à musique posée après coup, 3,33 et aucune. On livre une grille de tempo, une carte des sections et la piste, ou sa partition codée.

![Sept images carrées, une par temps : le point orange de « HI. » en saut, le fond crème, « I'M OPUS 5.5 », le point seul sur noir, « WATCH WHAT I CAN DO. », « I CAN » devenu en-tête, puis le fond orange de STRETCH](ILLUS:musique-grille-1)

*[Kinetic type showreel](https://prompt-motion.com/zheke-38deff), 0:00.47 à 0:03.28 : une image par temps (28,125 im à 128 BPM, 60 fps) ; chaque coupe, départ ou atterrissage tombe sur le temps, à 0 im près (étude 60 fps).*

**Ce que font les meilleures vidéos** (toutes animées sur la musique)

- Le tempo découle de la durée : 15 s = 32 temps = 8 mesures à 128 BPM chez [Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a) et zheke, toutes notées 5. À 96 BPM, 15 s font 6 mesures de 2,5 s ([Trezio app motion reel](https://prompt-motion.com/agonaliu-466a8f)).
- La grille est en images : zheke coupe sur round(n × 28,125), écart 0 im. [Chain.wtf pitch video](https://prompt-motion.com/spearwtf-3c1fd1) prend 150 BPM = 12 im à 30 fps : aucune dérive sur 30 s.
- La bande-son est composée en code sur la même horloge (environ 51 constats). [Product intro synced to music](https://prompt-motion.com/bogdandragomir-35e024), « Create the music too » : 15 gestes sur 19 à ±2 im. [Supademo launch video](https://prompt-motion.com/jhylee95-e1152f) : 39 sur 41 à ±1 im.
- Une piste existante est mesurée puis recoupée en mesures entières : [Reddit marketing tool launch video](https://prompt-motion.com/anthonyriera-9b1b2a) (skill product-film) fait 33 × 1,6 s = 52,8 s, avec 38 événements sur 61 à ±2 im.
- La structure est écrite en temps : [Prompt Motion site promo](https://prompt-motion.com/antonio-kodheli-490109) place ses actions de b0 à b46, toutes à 1-4 im d'un temps ; mix demandé à -14 LUFS, mesuré à -14,1.
- La durée tombe sur des mesures entières : 96 vidéos, 3,99 de moyenne, 10 notées 5 ; sinon 98 vidéos, 3,86, 5 notées 5.

**Ce qui manque aux moins bonnes**

- La musique posée après coup : [Email tool promo reel](https://prompt-motion.com/melvynx-6cde6c) part environ 7 im après les croches. [Motion design showreel](https://prompt-motion.com/samuel-spitz-974923), minuté en secondes rondes, ne colle à sa piste que sur 2,5 s.
- La musique fabriquée après l'image : [Tennis game launch video](https://prompt-motion.com/deifosv-04e4d3) (prompt Suno) garde une avance constante de 3 im sur ses flashs.
- Le tempo écrit au lieu d'être mesuré : [Food craving launch film](https://prompt-motion.com/ultimaxbt-2ddf1e) annonce 130 BPM, le morceau en mesure 119,4.
- Le rendu jamais vérifié (environ 59 vidéos) : [Kinetic type and particle showreel](https://prompt-motion.com/m1n9-k7-ff9ab9) sort à 127,7 au lieu de 128 BPM, rafale 7-8 im avant le kick. [Chaotic Claude POV video](https://prompt-motion.com/kloss-xyz-15182a) : piste trop longue de 0,153 s, dérive de 3 à 5 im.

**Décisions**

- Source du son : partition codée sur la même horloge (défaut), ou piste fournie dont on mesure BPM et premier temps. Une voix off devient l'horloge : voir *Le calage sur la voix off* au chapitre 9.
- Tempo : BPM = 60 × nombre de temps / durée ; 120 ou 128 BPM par défaut.
- Nombre de mesures et carte des sections : intro, montée, drop, respiration, signature, queue.
- Temps forts : révélation sur le drop, quasi-silence avant le logo, dernier accent sur la signature.
- Mixage : -14 LUFS intégrés, crête ≤ -1 dBTP.

**Livrable**

```text
GRILLE (étape 4)
Son : [partition codée / piste mesurée : BPM, 1er temps à x s]
BPM 128 · FPS 60 · 1 temps = 28,125 im · 1 mesure = 112,5 im
Durée : 8 mesures = 15,0 s · image 0 = 1er temps
Mesure | Section                  | Événement attendu
1-2    | intro, sans basse        | accroche
3-4    | montée                   | promesse
5      | drop                     | révélation du produit
6-7    | corps                    | preuves
8      | quasi-silence 0,2-0,7 s  | logo sur le 1er temps
Mixage : -14 LUFS · crête ≤ -1 dBTP
```

**Règles**

1. Préférer un tempo à temps entier : à 60 fps, 120 BPM = 30 im, 150 BPM = 24 im. Sinon, calculer chaque temps depuis l'image 0 : round(n × 28,125) à 128 BPM. Voir *La grille de tempo : une horloge, une scène par mesure* au chapitre 9.
2. Durée = nombre entier de mesures, une scène par mesure.
3. Le son lit la même table que l'image. Une piste fournie se mesure dans le fichier, jamais d'après le chiffre annoncé. Voir *La musique calquée sur le montage* au chapitre 9.
4. Le drop tombe sur la révélation, sans pourcentage fixe : tôt si l'accroche révèle, tard après une montée ; 0,2 à 0,7 s de quasi-silence avant le logo (skill cinetic). Voir *Le temps fort : montée, silence d'un temps, impact sur la révélation* au chapitre 9.
5. Les bruitages se calent sur l'image : voir *Le bruitage à l'image près et la sonification* et *Couper en avance, atterrir sur le temps* au chapitre 9.
6. Ralentir, c'est changer de tempo ou retirer des événements par mesure, jamais étirer.

**La méthode Otom, corrigée**

Le guide n'a pas d'étape musique : le son est au « niveau 3 » (guide Otom, p. 4), et la fiche 10 conseille « Ajoutez une voix off ou une musique au montage » (p. 13). La Bible a raison contre lui : 3,33 de moyenne pour la musique posée, 4,06 pour l'image animée sur la musique. Son correctif 01, « Ralentis l'ensemble de 30 % » (p. 14), décale toutes les coupes d'un film calé. On garde sa checklist (p. 17) en ajoutant « tempo et grille choisis » dans AVANT et « calage musical vérifié » dans APRÈS.

**Erreur fréquente** : poser la musique au montage, ou croire le BPM écrit dans le prompt sans mesurer le fichier.

**Dans HyperFrames**

La piste se déclare à la racine : `<audio id="score" src="assets/score.wav" data-start="0" data-duration="15" data-track-index="10">`. Sans `id`, le rendu est muet. Mesurer une piste fournie avec numpy (comme `beats.py` de product-film). Après `npx hyperframes render --fps 60 --quality delivery`, lire le niveau avec `ffmpeg -i out.mp4 -af ebur128=peak=true -f null -`. Extraire ensuite 3 images (début, milieu, fin) sur des temps pour vérifier le calage.

```js
// Grille de tempo : la seule horloge du film (image et son)
const FPS = 60, BPM = 128;
const BEAT = 60 / BPM;                  // 0,46875 s = 28,125 im
const BAR = 4 * BEAT;                   // 1,875 s = 112,5 im
const BARS = 8;                         // 8 mesures = 15,0 s
// (mesure m, temps b) → image entière la plus proche → secondes
const at = (m, b = 0) => Math.round((m * 4 + b) * BEAT * FPS) / FPS;
// Carte des sections : la même table sert à la partition
const SECTIONS = [
  { bar: 0, name: "intro", cue: "#hook" },
  { bar: 2, name: "montee", cue: "#promise" },
  { bar: 4, name: "drop", cue: "#reveal" },   // la révélation
  { bar: 7, name: "sortie", cue: "#logo" },
];
tl.set(SECTIONS.map(s => s.cue).join(","), { autoAlpha: 0 }, 0);
SECTIONS.forEach(s => tl.set(s.cue, { autoAlpha: 1 }, at(s.bar)));
// Le logo naît sur le 1er temps de la mesure 8, après un temps de quasi-silence
tl.set("#logo", { scale: 0.6 }, 0)
  .to("#logo", { scale: 1, duration: 10 / FPS, ease: "back.out(1.7)" }, at(7));
tl.set("#hud", { textContent: `${BPM} BPM · ${BARS} mesures · ${BARS * BAR} s` }, 0);
```

**Dans After Effects**

- Composition › Composition Settings (Paramètres de composition) : 60 fps, durée = mesures (0:00:15:00 pour 8 mesures à 128 BPM).
- Un marqueur de composition par premier temps (images 0, 113, 225, 338, 450, 563, 675, 788) : touche * du pavé numérique, sans calque sélectionné.
- Piste fournie : Animation › Keyframe Assistant › Convert Audio to Keyframes (Assistant d'image clé › Convertir l'audio en images clés) ; les pics doivent tomber sur les marqueurs.
- Pas de mesure de niveau en LUFS dans After Effects : mesurer le fichier exporté avec ffmpeg. Ne jamais allonger par Layer › Time › Time Stretch (Calque › Temps › Extension temporelle).

**À cocher**

- [ ] Source du son décidée avant la première animation : partition codée ou piste mesurée.
- [ ] BPM = 60 × temps / durée ; durée = nombre entier de mesures ; temps en images entières ou calculé depuis l'image 0.
- [ ] Carte des sections écrite : drop sur la révélation, 0,2 à 0,7 s de quasi-silence avant le logo.
- [ ] Piste fournie : BPM et premier temps mesurés dans le fichier.
- [ ] Après rendu : 3 attaques (début, milieu, fin) à ±2 im de la grille ; -14 LUFS, crête ≤ -1 dBTP.
