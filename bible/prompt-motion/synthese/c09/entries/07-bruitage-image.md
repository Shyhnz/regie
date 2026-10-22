## Le bruitage à l'image près et la sonification (hit-point SFX, picture-locked sound design, per-glyph ticks, mickey-mousing, sonification)

Chaque geste visible reçoit son son, posé sur l'image de contact ou 1 image après : choc grave au rebond, tic par lettre, souffle sur la transition, clic sur le curseur, accord résolu sous le logo. À l'extrême, c'est l'événement qui produit la note : la collision joue la mélodie. Le son confirme le geste et donne du poids aux micro-événements ; chez hanifproduktif, 33 gestes sur 39 ont leur attaque 0 à 2 im après l'image. Vue dans 53 vidéos, dont 46 notées 4 ou 5 (29 animées sur la musique, seules retenues comme modèles).

![Une bille noire rebondit sur fond crème ; sa trajectoire en pointillés rouges montre des rebonds de plus en plus bas et rapprochés](ILLUS:bruitage-image-1)

*[Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), 0:12.93 à 0:15.10 : chaque rebond est 25 % plus court que le précédent, et chaque contact déclenche un choc grave 1 image plus tard, même hors de la grille.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Choc à l'image de contact | [Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), 0:13.00 | Étude 60 fps : 5 contacts (f780, 825, 859, 884, 903), choc grave à +1 im (17 ms) chaque fois, déclenché par la simulation |
| Un tic par lettre | [Photo retouch app promo](https://prompt-motion.com/oliahmed205-3e31c4), 0:00.24 | 9 attaques aiguës (> 2 kHz) espacées de ≈ 46 ms, soit le décalage exact des lettres de EVERY et PHOTO ; écart image/son ≈ 0 im |
| Tics quantifiés à la double-croche | [Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), 0:25.00 | 8 clics toutes les 0,125 s sous une frappe à 0,71 caractère par image : le son range le geste au lieu de le doubler |
| Frappe qui accélère | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:00.20 | Intervalles 0,24 → 0,12 s pendant que la frappe passe de 1 à 8 caractères par image : le son suit la courbe, pas la grille |
| Hauteur qui monte de lettre en lettre | [Motion designer showreel](https://prompt-motion.com/kangaroohere-b10f8d), 0:00.20 | Glissando 300 → 800 Hz pendant chaque saut ; note d'atterrissage 900, 1 100, 1 300 puis 1 750 Hz |
| Souffle, trou de basse, grosse caisse | [SaaS launch video](https://prompt-motion.com/aschapmann-131210), 0:03.83 | Whoosh sur l'image où le flou commence ; basse coupée 4 im (0,13 s) sous l'éclair ; kick sur la 1re pose suivante |
| Collision = note (sonification) | [Ball escaping twelve rings](https://prompt-motion.com/kantamk-61f410), 0:00.13 | Chaque rebond joue la note suivante de « La Lettre à Élise » : 64 sur 67 à 1-2 im ; tonique la3 + la2 sur la sortie finale |
| Accord résolu sous le nom | [Personal research intro reel](https://prompt-motion.com/madhav-xo-f97f20), 0:06.53 | Accord de ré majeur (587, 1 174, 1 470, 1 760 Hz), traîne de −6 à −37 dB en 3 s ; glissando 560 → 370 Hz sur l'extinction |

![Une bille rose sort d'un anneau : l'anneau éclate en particules et le compteur passe de 12 à 11 RINGS LEFT ; en bas, « every bounce plays the next note »](ILLUS:bruitage-image-2)

*[Ball escaping twelve rings](https://prompt-motion.com/kantamk-61f410), 0:01.83 à 0:02.10 : à la sortie, particules, flash d'anneau, compteur et accent sonore partent sur la même image.*

**Règles de construction**

1. Attaque 0 à 1 im après l'image de contact, jamais avant. Mesuré : +1 im (hbcoop), ≈ 0 im (oliahmed205), 0 à 1,4 im (johnsavage-ai), médiane −0,7 im sur 434 collisions (kamstudiolabs-447565). Dès 2 à 3 im de retard, ça se sent : +81 ms constants chez apoorvjain25 (30 fps). Contre-exemples sans musique calée : +5 im chez hqmank, +6 im chez pluginplay.
2. Le son naît de l'événement : une seule table d'instants pilote l'image et les clips sonores. Les rebonds de hbcoop sortent de la grille du tempo et restent justes ; kantamk et kamstudiolabs-447565 n'ont aucun son sans geste ni geste muet.
3. Densité : un tic par lettre tant que les lettres sont espacées d'au moins 2,5 im (46 ms chez oliahmed205, 42 ms chez kloss-xyz-15182a). Plus vite, quantifier à la double-croche (hbcoop, 8 clics pour 40 caractères).
4. Hiérarchie : le coup fort est réservé aux gestes majeurs. polydao monte à −7/−9 dBFS sur les premiers temps de chapitre, contre −16 en croisière. kloss-xyz-fe0c31 ne frappe ni la frappe ni les compteurs. Creuser avant le choc : −39 dB puis impact à −5 dB (crazyalphaaa), basse coupée 4 im (aschapmann).
5. Le timbre imite le geste : montée de hauteur pour un saut (kangaroohere), balayage 1,2 kHz → 500 Hz pour un rebond (jasonzhou1993), un instrument par type d'action (jake11moran), accord résolu sous la marque (madhav, daniel-haida).
6. Avant l'entrée du rythme, les bruitages portent seuls l'intro : clics à ±1 im sur les sauts du carré avant le drop de 1,0 s (arjunsh1607), contacts sonores avant la musique pleine à 1,9 s (johnsavage-ai).

**Verdict** : à reprendre. C'est ce qui fait sonner « pro » une promo calée sur la musique ; garde la hiérarchie, car le même impact sur chaque coupe redevient du bruit, comme l'accent répété que tu rejettes.

**Quand l'utiliser** : dans tous les styles, surtout en promo SaaS (clic, frappe, notification), en typo cinétique 1600 (tic par lettre, choc sur le mot clé) et en 3D ou physique (rebonds, collisions). Il sert l'accroche avant le beat, la démonstration et la signature (accord sous le logo). Il se décide à l'étape musique et grille (liste des sons), se pose à la construction du plan et se vérifie au contrôle qualité. La vidéo doit rester lisible sans le son (guide Otom, p. 5) : le bruitage confirme le sens, il ne le porte pas.

**HyperFrames (GSAP)**

```js
// Rebonds + chocs nés de la même table (120 BPM, 60 i/s) ; restitution 0,75
const FPS = 60, BEAT = 60 / 120, at = b => b * BEAT, F = n => n / FPS;
const FLOOR = 68.4, TOP = 26.9;                 // sol et départ, en % de la hauteur
const HITS = []; let t = at(26), gap = F(45);   // 1er contact sur le temps 26
for (let i = 0; i < 5; i++) { HITS.push(t); t += gap; gap *= 0.75; }

// Chute initiale : 35 im en power1.in, contact pile sur le temps
tl.set("#ball", { y: `${TOP}vh` }, HITS[0] - F(35))
  .to("#ball", { y: `${FLOOR}vh`, duration: F(35), ease: "power1.in" }, HITS[0] - F(35));

HITS.forEach((hit, i) => {
  // écrasement 1,44:1 sur la seule image de contact
  tl.set("#ball", { scaleX: 1.44, scaleY: 1 / 1.44 }, hit)
    .set("#ball", { scaleX: 1, scaleY: 1 }, hit + F(1));
  const next = HITS[i + 1];
  if (next === undefined) return;
  const half = (next - hit) / 2;                // montée puis chute, même durée
  const apex = FLOOR - (FLOOR - TOP) * (half / F(35)) ** 2;
  tl.to("#ball", { y: `${apex}vh`, duration: half - F(1), ease: "power2.out" }, hit + F(1))
    .to("#ball", { y: `${FLOOR}vh`, duration: half, ease: "power1.in" }, hit + half);
});

// Le son : un <audio id="hit-N" class="sfx-hit" data-start="…" data-volume="…"> par contact,
// écrit par le même script de build que HITS (data-volume 1 au 1er choc, 0,4 aux suivants).
// Garde-fou : chaque attaque doit tomber 0 à 1 im après l'image de contact.
document.querySelectorAll("audio.sfx-hit").forEach((a, i) => {
  const d = (parseFloat(a.dataset.start) - HITS[i]) * FPS;
  if (!(d >= 0 && d <= 1)) console.warn(`${a.id} : ${d.toFixed(1)} im du contact ${i + 1}`);
});
```

**After Effects**

- Repérer les contacts : sur le calque animé, touche * du pavé numérique (Add Marker, Ajouter un marqueur) à chaque image de contact ; afficher la Waveform (forme d'onde) du calque son avec LL.
- Poser chaque bruitage : glisser le calque son avec Maj pour l'aimanter au marqueur, puis Alt + Page Down pour le décaler d'1 image (+1 im). Audio Levels (Niveaux audio) : 0 dB pour le choc majeur, −8 dB pour les rebonds suivants.
- Tics par lettre : dupliquer le calque de tic (Ctrl + D) et décaler chaque copie de 3 im (Alt + Page Down trois fois), au rythme du Range Selector (Sélecteur de plage) du texte.
- Rebond : Position Y avec une clé par contact, intervalles × 0,75 ; dans le Speed Graph (éditeur de graphe de vitesse), montée en sortie de clé à influence 66 % (≈ power2.out), chute qui arrive à vitesse maximale. Scale (Échelle) 144 / 69 % sur l'image de contact seule, en Toggle Hold Keyframe (Activer/désactiver l'image clé maintenue).
- Trou de basse : Effect › Audio › High-Low Pass (Passe-haut/Passe-bas) sur la musique, en High Pass à 200 Hz pendant 4 im sous l'éclair. Après export, revérifier le décalage sur le MP4 : l'encodage AAC peut ajouter 2 à 3 im.
