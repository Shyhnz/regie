## Le plan produit 3D en studio (3D product shot, glint sweep, spring lid, push-in, snap shut)

Le produit seul, comme en studio : un reflet balaie la matière, l'objet se prépare 3 images, s'ouvre en ressort, la caméra pousse, puis il se referme sur le temps. Chaque adjectif devient un nombre : 448 mots et 15 relances chez F, contre 27 mots qui rendent halo et particules.

![Un portable 3D referme son capot : petits pas, puis grands, arrêt sec](ILLUS:C14-produit-3d-studio)

*[Lidlezz app promo](https://prompt-motion.com/cansincengiz-me-cf68dd), 0:02.00 à 0:02.23 : le capot tombe de ≈ 110° en 9 im en accélérant et s'arrête sec à f132.*

**Quand l'utiliser** : révélation d'un objet physique dans un film produit 3D lent (entrées de 0,6 à 0,9 s permises, F), vers 5 à 9 s d'une promo de 16 s (W). À éviter en typo cinétique, et sans vrai modèle du produit : le manque est bloquant (W).

**L'événement** (60 fps, 128 BPM : 1 temps = 28,125 im ; temps de F sur notre grille, durées en images gardées)

| Image (locale) | Temps | Ce qu'on voit | Ce qui bouge (héros / secondaires) | Courbe | Son |
| --- | --- | --- | --- | --- | --- |
| f0-f28 | 0-1 | entrée : boîtier fermé de 3/4, reflet déjà mi-face | le reflet ; caméra en dérive | `none` | scintillement |
| f39-f55 | 1,4-2 | couvercle pressé de 1,5°, boîtier écrasé de 2 % en 14 im, tenu 3 im | couvercle | power2.in | souffle |
| f56 | 2 | 1re image hors de la pose pressée | couvercle vers 100°, ζ 0,6, ≈ 10 % de dépassement, posé en 24 im | ressort | clic, 880 Hz, 120 Hz (f57) |
| f84 | 3 | les écouteurs montent de 4,0, le gauche 4 im après | ζ 0,7 ; dès f92, inclinés de 14° et tournés de 35°, ζ 0,5 | ressorts | pops |
| f113 | 4 | poussée 20,2 → 16 en 48 im ; grue 12 → 19° | caméra | expo.out | souffle |
| f135-f225 | 4,8-8 | tenue : flottement 0,05 sur un sinus d'1 s ; 2e reflet sur les têtes | caméra avance de 0,4 | sine | scintillement |
| f225-f264 | 8-9,4 | redressés en 12 im, descendus en 27 im | écouteurs | power2.inOut | glissé, clic |
| f266-f281 | 9,5-10 | le couvercle tombe en 15 im, fermé sur f281 | couvercle ; boîtier recule de 1,5 % | power2.in | clic, 200 Hz, 70 Hz (f282) |
| f281-f315 | 10-11,2 | sortie : rebond de 3°, posé en 18 im ; caméra revenue ; reflet f309 | — | power2.inOut | tics |

**Règles de construction**

1. Un héros par temps : reflet, couvercle, écouteurs, caméra, couvercle. Le second écouteur suit à 4 im ; l'ambiant reste sous 5 % de la course (F).
2. Un ressort par rôle : couvercle ζ 0,6, montée 0,7, inclinaison 0,5 ; jamais l'opacité ni la couleur (F).
3. Le coup tombe sur l'image du temps. Un ressort parti au repos sur le temps y laisse la pose pressée : on le lâche ½ image plus tôt (F, tour 4). La fermeture accélère et s'arrête sur le temps (Lidlezz : 110° → 0° en 9 im). Le son suit d'1 im (F).
4. La caméra ne se gare jamais, sur les courbes les plus douces (F) : orbite de 34 à 10°, sous les 45-60° de *Filmer une scène 3D* (chapitre 5).
5. Le reflet vit dans les reflets, pas dans l'éclairage : bande de 2,4, sur les seules surfaces courbes (F, tours 2 et 3). *La finition de rendu* (chapitre 6) dit un reflet par film ; ici il accroche, puis revient une fois (F).
6. Interdits (F) : dégradés violets ou bleus, halos, bloom, néon, flares, particules, plateau tournant, fond sombre, texte.

**Variantes**

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Capot qui claque sans rebond | [Lidlezz app promo](https://prompt-motion.com/cansincengiz-me-cf68dd), 0:02.05 | 110° → 0° en 9 im, départ sur le temps, contact f132 |
| Reflet porté par la rotation | [Lidlezz app promo](https://prompt-motion.com/cansincengiz-me-cf68dd), 0:08.30 | capot #A9AFC8 → presque blanc en ≈ 20 im |
| Orbite qui révèle les volumes | [Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e), 0:05.65 | ≈ 50-60° en 41 im, power1.out (étude 60 fps) |
| Reflet de marque sur le logo | [Flexprice motion showreel](https://prompt-motion.com/sudeepsd-1a3485), 0:13.87 | bande de 25 % du logo, 16 im à 30 fps |

**Verdict** : à reprendre ; en promo rythmée, couper la tenue et garder le reste.

**Ligne de SHOTLIST**

```text
3 Produit | f225-f563 (mesures 3-5) | boîtier fermé, reflet mi-face → refermé, caméra revenue
raison : la matière et le geste | héros : couvercle, écouteurs, caméra
repères : pression f264-f280 ; ouverture f281 ; montée f309 ; poussée f338 ; descente f450 ; fermeture f506
son : claquement f282, pops, coup de fermeture f507
couture : le reflet suivant (f534) porte au plan d'après
```

**HyperFrames (GSAP)**

```js
// tl anime S ; la scène Three.js (lid, body, buds, sheen déjà créés) est dessinée depuis S.
const FPS = 60, BPM = 128, BEAT = 60 / BPM;
const at = (bar, beat = 0) => ((bar - 1) * 4 + beat) * BEAT;
const F = n => n / FPS, snap = t => Math.round(t * FPS) / FPS, DEG = Math.PI / 180;
const spring = (z, dur, hz = 4.6 / (z * dur) / (2 * Math.PI)) => p => { if (p >= 1) return 1;
  const w = 2 * Math.PI * hz, wd = w * Math.sqrt(1 - z * z), t = p * dur;
  return 1 - Math.exp(-z * w * t) * (Math.cos(wd * t) + (z * w / wd) * Math.sin(wd * t)); };
const T = b => snap(at(3, b)); // plan en mesure 3 ; b = temps local
const S0 = { glint: 0, lid: 0, squash: 0, riseR: 0, riseL: 0, turn: 0, float: 0, dist: 20.2, elev: 12, az: 34 }, S = { ...S0 };
tl.set(S, { ...S0 }, 0)
  .to(S, { glint: 1, duration: F(28), ease: "none" }, T(0)) // reflet : 1 temps
  .to(S, { az: 10, duration: T(8) - T(0), ease: "sine.inOut" }, T(0))
  .to(S, { lid: -1.5, squash: 0.02, duration: F(14), ease: "power2.in" }, T(2) - F(17))
  .to(S, { lid: 100, squash: 0, duration: F(24), ease: spring(0.6, F(24)) }, T(2) - F(0.5)) // lâché ½ im tôt
  .to(S, { riseR: 1, duration: F(28), ease: spring(0.7, F(28)) }, T(3))
  .to(S, { riseL: 1, duration: F(28), ease: spring(0.7, F(28)) }, T(3) + F(4))
  .to(S, { turn: 1, duration: F(28), ease: spring(0.5, F(28)) }, T(3) + F(8))
  .to(S, { elev: 19, duration: T(4.6) - T(3), ease: "power3.inOut" }, T(3))
  .to(S, { dist: 16, duration: F(48), ease: "expo.out" }, T(4)) // poussée
  .to(S, { dist: 15.6, duration: T(8) - T(4) - F(48), ease: "sine.inOut" }, T(4) + F(48))
  .to(S, { float: T(8) - T(4.8), duration: T(8) - T(4.8), ease: "none" }, T(4.8)) // phase en s
  .to(S, { turn: 0, duration: F(12), ease: "power2.out" }, T(8))
  .to(S, { riseR: 0, riseL: 0, duration: F(27), ease: "power2.inOut" }, T(8) + F(12))
  .to(S, { dist: 20.2, elev: 12, az: 34, duration: T(11.2) - T(8), ease: "power2.inOut" }, T(8))
  .to(S, { lid: 0, duration: F(15), ease: "power2.in" }, T(10) - F(15)) // fermé sur le temps 10
  .to(S, { lid: 3, squash: 0.015, duration: F(5), ease: "power2.out" }, T(10))
  .to(S, { lid: 0, squash: 0, duration: F(13), ease: "power2.inOut" }, T(10) + F(5));
function draw() {
  sheen.value = S.glint; // bande du reflet (uniform du shader)
  lid.rotation.x = -S.lid * DEG;
  body.scale.set(1 + S.squash / 2, 1 - S.squash, 1 + S.squash / 2);
  buds.forEach((b, i) => { const r = i ? S.riseL : S.riseR, k = i ? 1 : -1; // gauche : 4 im de retard
    b.position.y = 4.0 * r + 0.05 * r * Math.sin(2 * Math.PI * Math.max(0, S.float - i * F(4)));
    b.rotation.set(0, -k * 35 * S.turn * DEG, k * 14 * S.turn * DEG); });
  const el = S.elev * DEG, az = S.az * DEG, d = S.dist;
  camera.position.set(d * Math.cos(el) * Math.sin(az), d * Math.sin(el), d * Math.cos(el) * Math.cos(az));
  camera.lookAt(0, 2.3 + 1.9 * S.riseR, 0); // cible 2,3 → 4,2 (F)
  renderer.render(scene, camera);
}
tl.eventCallback("onUpdate", draw); draw();
```

**After Effects**

- Composition Settings › 3D Renderer (Paramètres de composition › Rendu 3D) en Advanced 3D (3D avancée) ; le modèle .glb entre par File › Import (Fichier › Importer).
- Layer › New › Light (Calque › Nouveau › Lumière) : Environment (Environnement), clé en haut à gauche, contre-jour en haut à droite (F) ; tourner l'environnement 1 temps pour le reflet.
- Couvercle enfant d'un Null Object (objet nul) posé sur la charnière, par Parent & Link (Parent et lien). X Rotation (Rotation X) 0 → −1,5° en 14 im, 3 im en Toggle Hold Keyframe (image clé maintenue), puis l'expression de ressort de *Le système de courbes* (chapitre 9), z = 0.6.
- Fermeture : Easy Ease Out (Lissage de vitesse sortant) au départ, Linear (Linéaire) à l'arrivée, sur le Composition Marker (marqueur de composition) du temps.
- Two-Node Camera (caméra à deux nœuds) : Position Z en 48 im, influence entrante 95 % (≈ expo.out, chapitre 9). Motion Blur (Flou de mouvement).

**Contrôle** : rendre f0, f55, f56, f70, f92, f113, f169, f264, f299 et la bande f277-f284. On rejoue les 4 tours de F. 1. Matière : céramique détachée du fond, chrome en bandes sombres et claires, aucun « œil ». 2. Pixels : reflet allumé ou éteint ne change que la bande (178 864 pixels changeaient). 3. Reflets isolés : le second ne flashe pas la cavité (207 791 pixels) ; la caméra vit dans la tenue. 4. Image par image : f55 pressée, f56 en mouvement, f281 fermée, pas d'image tenue de trop.
