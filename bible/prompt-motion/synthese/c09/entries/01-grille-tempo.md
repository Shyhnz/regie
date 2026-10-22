## La grille de tempo : une horloge, une scène par mesure (beat grid, BPM frame grid, shared beat clock, bar-locked scenes)

On fixe le tempo avant d'animer, puis on le convertit en images : à 128 BPM et 60 im/s, un temps vaut 28,125 im et une mesure 112,5 im. Toutes les durées deviennent des nombres entiers de temps, et chaque scène commence sur le premier temps d'une mesure. Image et son lisent la même horloge : le montage est musical par construction. Les meilleures vidéos posent 17 à 21 gestes clés sur 19 à 25 à ±2 im de la grille, contre 36 % au hasard. Vue dans 107 vidéos, dont 93 notées 4 ou 5.

![Huit images d'un même reel, une par mesure : courbe de Bézier, MEANING, éclats triangulaires, nuage de particules, planche « 900 frames · 128 BPM », SPIN sur rouge, puis la signature CLAUDE ; le HUD du bas affiche « 128 BPM BAR n »](ILLUS:grille-tempo-1)

*[Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:01.17 à 0:14.30 : une image par mesure de 1,875 s ; chaque scène change de fond, de sujet et de technique sur le premier temps.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Une scène par mesure, 8 mesures = 15 s | [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:01.88 | Étude 60 fps : coupes sur ceil(n × 28,125) = f113, 225, 338, 450, 563, 675, de 0 à +0,9 im |
| Grille calculée depuis l'image 0 | [Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:00.00 | Étude 60 fps : 46 départs sur 46 partent de floor(n × 28,125) et se voient 0,1 à 1 im après le temps |
| Durée totale écrite en temps | [Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e), 0:15.00 | Le HUD affiche « 32 BEATS 15.000 S » ; 17 gestes clés sur 19 à ±2 im de la grille |
| Tempo à temps entier : 120 BPM = 30 im | [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 0:02.00 | Étude 60 fps : timeline sur f = 30 n, un chapitre par mesure de 120 im ; la batterie sonne 1 à 2 im après |
| Sections de durées croissantes en temps | [Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), 0:02.0 | « FIG. N » change à ≤ 1 im d'un temps ; planches de 4, 4, 4, 4, 8, 8, 10 et 10 temps |
| Mesure composée (6/8) | [Synced lyrics motion video](https://prompt-motion.com/samaote-5e2fc2), 0:00.10 | Étude 60 fps : croche = 22,785 im (158 par minute), 13 chapitres sur 13 premiers temps à ±2 im |
| Sans BPM : la grille, ce sont les attaques | [Engraving-style Claude ad](https://prompt-motion.com/lexnlin-038035), 0:00.50 | Étude 60 fps : 67 coupes sur 87 précèdent leur bruitage de 1,8 à 2,3 im (hasard 43 %) |
| Contre-exemple : boucle minutée en secondes | [Travel visa service promo](https://prompt-motion.com/thismacapital-dfba20), 0:04.92 | Musique partielle : cycle de 36 im contre un temps de 30 im, 2 événements sur 11 calés |

**Règles de construction**

1. Choisir le tempo d'après la durée. Images par temps = 60 × FPS / BPM. À 60 im/s : 120 BPM = 30 im, 128 BPM = 28,125 im, 96 BPM = 37,5 im, 150 BPM = 24 im. 15 s tombent sur 8 mesures à 128 BPM ou 6 mesures à 96 BPM ; à 120 BPM, viser 14 ou 16 s.
2. Calculer chaque temps depuis l'image 0, sans cumuler d'arrondi : temps n à l'image round(n × 28,125), soit une alternance de 28 et 29 im. Une grille arrondie à 28 im dérive d'1 im tous les 8 temps (étude 60 fps de stephanlivera). Sinon, choisir un tempo à temps entier : 128,57 BPM donne 28 im exactes (jasonzhou1993).
3. Une scène par mesure, coupe sur le premier temps, de −2 à +1 im. Mesuré chez grace-sunnyy, sahildesigner23, sudo-kiran, miskinho et mrtanviir. 88 des 129 vidéos animées sur la musique le font.
4. Caler l'image sur le code, pas sur l'onde. Dans les bandes-son composées en code, l'attaque audible arrive 1 à 2 im après l'image (zheke +1, manuelogomigo +1,5, stephanlivera +1,4 à +2,1 : latence d'encodage). C'est perçu comme simultané : ne pas le « corriger ».
5. Vérifier une piste existante avant de caler. Les pièges mesurés : grille décalée d'un demi-temps (calée sur le charleston), tempo lu aux 2/3 ou à la moitié (80 au lieu de 120, 85 au lieu de 128), tempo qui change de section (coda de zheke à 2/3 de 128). Mesurer la grosse caisse sous 150 Hz.
6. Ralentir en changeant de tempo ou en retirant des événements par mesure. Le guide propose « Ralentis l'ensemble de 30 % » (guide Otom, p. 14) : sur une grille, cela décale toutes les coupes.

**Verdict** : à reprendre, toujours. C'est la condition des autres familles du chapitre : un mot par temps, un drop sur la révélation et des coupes en avance n'existent que sur une horloge commune. La musique se compose ou se choisit avant d'animer, jamais au montage.

**Quand l'utiliser** : dans tout film avec musique, typo cinétique 1600, promo SaaS, showreel ; c'est la structure même du film. On la fixe à l'étape « musique et grille », avant le découpage : la table des scènes s'écrit en mesures. Le guide conseille d'ajouter la musique au montage (guide Otom, p. 13) : 12 vidéos à musique posée font 3,33 de moyenne et aucune n'a 5. À éviter seulement en voix off longue (on cale sur les phrases) ou en boucle muette.

**HyperFrames (GSAP)**

```js
// Table des scènes écrite en mesures, convertie en images exactes
const FPS = 60, BPM = 128;
const BEAT = 60 / BPM;                       // 0,46875 s = 28,125 im
const BAR = 4 * BEAT;                        // 1,875 s = 112,5 im
// temps n → image entière la plus proche → secondes (alternance 28 / 29 im)
const at = b => Math.round(b * BEAT * FPS) / FPS;
const bar = m => at(m * 4);                  // 1er temps de la mesure m (m = 0 : la 1re)
// 15 s = 8 mesures : une scène par mesure, même table que la bande-son
const scenes = ["#intro", "#kinetic", "#dimension", "#systems",
                "#grid", "#transitions", "#identity", "#end"];
tl.set(scenes.join(","), { autoAlpha: 0 }, 0);
scenes.forEach((sel, m) => {
  tl.set(sel, { autoAlpha: 1 }, bar(m));                       // coupe sur le 1er temps
  // entrée du titre : 70 % du trajet en 3 im, posé en 12 im
  tl.fromTo(`${sel} .title`, { xPercent: 90 },
    { xPercent: 0, duration: 12 / FPS, ease: "expo.out", immediateRender: false }, bar(m));
  if (m < scenes.length - 1) {
    // poussée +4 % sur les 8 dernières images, finie sur la coupe suivante
    tl.to(sel, { scale: 1.04, duration: 8 / FPS, ease: "power2.in" }, bar(m + 1) - 8 / FPS);
    tl.set(sel, { autoAlpha: 0 }, bar(m + 1));
  }
});
tl.set("#hud", { textContent: `${BPM} BPM · 8 BARS · ${8 * BAR} S` }, 0);
// La piste audio démarre à t = 0 = premier temps ; son attaque arrivera 1 à 2 im après l'image
```

**After Effects**

- Composition › Composition Settings (Composition › Paramètres de composition) : Frame Rate (fréquence d'images) 60, Duration (durée) 0:00:15:00. Afficher le temps en images : File › Project Settings › Time Display Style › Frames (Fichier › Paramètres du projet › Style d'affichage du temps › Images).
- Poser la piste à 0:00. Placer un marqueur de composition sur chaque premier temps : images 0, 113, 225, 338, 450, 563, 675, 788. Sans calque sélectionné, touche * du pavé numérique. Couper chaque scène sur son marqueur, sans tenir compte de l'onde.
- HUD de contrôle : sur un calque de texte, Alt-clic sur le chronomètre de Source Text (Texte source), expression `b = Math.floor(time * 128 / 60); "BAR " + (Math.floor(b / 4) + 1) + "/8 · " + (b % 4 + 1)`.
- Vérifier la grille d'une piste existante : Animation › Keyframe Assistant › Convert Audio to Keyframes (Assistant d'image clé › Convertir l'audio en images clés). Les pics de Both Channels (Les deux couches) doivent tomber sur les marqueurs, pas entre deux.
- Ne jamais allonger avec Layer › Time › Time Stretch (Calque › Temps › Extension temporelle) : changer de tempo et refaire les marqueurs.
