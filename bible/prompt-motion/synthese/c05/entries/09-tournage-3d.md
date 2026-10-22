## Filmer une scène 3D : orbite, grue, poursuite et angles (orbit, crane, chase cam, low-angle, turntable, camera roll)

Dans une vraie scène 3D (Three.js, WebGL), la caméra se conduit comme sur un tournage : orbite, grue, poursuite, choix d'angle. Le mouvement révèle le volume que l'image fixe aplatit : 50 à 60° d'orbite en 41 im font lire trois objets comme des solides. Le prix : une scène entière à construire, et une caméra trop longue se lit comme un jeu vidéo. Vue dans 18 vidéos, dont 15 notées 4 ou 5.

![Sphère bleue, cube rouge et prisme jaune sur un sol noir ; la caméra tourne autour d'eux](ILLUS:tournage-3d-1)

*[Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e), 0:05.65 à 0:06.70 : après le flash du drop, la caméra tourne d'environ 55° ; reflets et ombres font lire les solides.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Orbite qui révèle les volumes | [Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e), 0:05.65 | étude 60 fps : ≈ 50-60° en 41 im (1,5 temps) power1.out, départ 1 im après le flash du temps 12 |
| Orbite lente sous l'action | [Type, form, space showreel](https://prompt-motion.com/web3wesley-7bb108), 0:07.80 | ≈ 10-15° et blocs +20-30 % en 2,3 s, continu, sous une balle qui rebondit sur chaque temps |
| Travelling qui se rapproche du sujet | [Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), 0:12.88 | étude 60 fps : balle 10,4 → 21,1 % H en 180 im (6 temps) sine.inOut, départ au 1er impact |
| Grue vers la vue de dessus | [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:07.03 | étude 60 fps : tangage ≈ 35 → 90° en 12 im sine.in, zoom ≈ ×3 en 11 im sine.out ; plat tenu 6 im |
| Grue montante de sortie | [Pelican riding a bicycle](https://prompt-motion.com/axtonliu-0b861d), 0:30.97 | le sujet passe de ≈ 45 % à ≈ 10 % de la hauteur en ≈ 5 s ; la montée libère le ciel pour le titre |
| Poursuite verrouillée avec roulis | [Porco Rosso sunset dogfight](https://prompt-motion.com/nft-chen-5f8bb0), 0:08.00 | avion fixe à ≈ 55 % L et 65-72 % H (dérive 3-5 %) ; l'horizon tourne de ≈ −30° à 80° en 5 s, ≈ 20°/s |
| Caméra sur rail qui suit le flux | [AI data centre 3D tour](https://prompt-motion.com/sayan-shanky-f850d8), 0:07.80 | 14,5 s continus sur une spline, ≈ 1,7 % L par image constant ; les tirets ambre coulent dans le sens de la caméra |
| Un angle par accord au climax | [Beat-synced bouncing 3D ball](https://prompt-motion.com/gorden-sun-041f56), 0:53.83 | 4 coupes toutes les 13-14 im, chacune à moins d'1 im d'une attaque, gros plan au contact |

![Pélican à vélo vu de dos sur une jetée ; la caméra monte vers la mer et le titre apparaît dans le ciel](ILLUS:tournage-3d-2)

*[Pelican riding a bicycle](https://prompt-motion.com/axtonliu-0b861d), 0:30.97 à 0:36.00 : la grue de sortie monte et pivote ; le sujet tombe à ≈ 10 % du cadre, le titre prend le ciel.*

**Règles de construction**

1. La durée dépend de la fonction. Révéler un volume : 1 à 1,5 temps en power1.out (lukasersil). Accompagner une action : 4 à 6 temps en sine.inOut (hbcoop, web3wesley). Au-delà de 8 s sans événement, le plan s'use : 11 s d'orbite (buildfastwithai) et 8 à 12 s de travelling linéaire (blueoctopusai) sont notés 3.
2. Verrouiller le sujet, faire bouger le monde : 3 à 5 % de dérive en poursuite (nft-chen), vélo fixe à ≈ 60 % de la hauteur (axtonliu). Le sujet pèse au moins 10 % de la hauteur : la balle de gorden-sun n'en fait que 2 à 4 % pendant 50 s, défaut du film.
3. 45 à 60° d'orbite suffisent (lukasersil ; axtonliu, 45° en 8,5 s ; samuel-spitz, ≈ 35°). L'axe porte le sens : contre-plongée avec ≈ 60 % de ciel pour grandir le héros (axtonliu), plongée zénithale pour écraser l'adversaire (ryzoft).
4. La grue vers la vue de dessus ramène au plat : départ sur le temps, plat tenu 6 im, ré-habillage au 1er temps de la mesure (levabashidze). Chez anilraok, 40 → 90° en 54 im changent la grille 3D en page de journal.
5. Départs et coupes sur la grille (modèles animés sur la musique). L'orbite part 1 im après le flash du drop (lukasersil), la grue au temps 15 à +0,1 im (levabashidze), les coupes d'angle à moins d'1 im d'une attaque (gorden-sun). Contre-exemple : le tonneau de nft-chen (musique partielle) part à 6 im de la grille.
6. Une caméra physique : flou de mouvement dans les virages rapides (levabashidze) ; sans lui, les drones qui frôlent l'objectif saccadent (ryzoft). Pas de traversée du décor : 1 à 3 im de violet uni quand la caméra de gorden-sun entre dans un champignon. Un brouillard au point de fuite simule une profondeur infinie (sayan-shanky).

Feuilles de timing complètes : chapitre 14 (lukasersil, levabashidze). Bascule 2D vers 3D : « Du plat au volume ».

**Verdict** : à reprendre, court et calé : une orbite de 1 à 1,5 temps sur le drop, une grue qui ramène au plat. L'orbite de 10 s sans événement est un cliché de démo Three.js : coupe-la en angles sur les accords.

**Quand l'utiliser** : en 3D (objet produit, scène Three.js), en showreel éditorial pour un chapitre « volume » d'un ou deux temps, en promo SaaS pour un schéma d'architecture parcouru sur rail. Fonctions : présentation d'objet, démonstration d'un parcours, transition vers le plat, chute qui libère le titre. On la décide à la direction artistique (vraie 3D ou non), puis au découpage. À éviter en typo cinétique pure, ou pour un objet seul sans décor : une poussée 2D suffit.

**HyperFrames (GSAP)**

```js
// Orbite puis grue, fonctions du temps HyperFrames (hf-seek), jamais de requestAnimationFrame.
// scene, camera, renderer déjà créés ; data-duration sur la racine.
const FPS = 60;
const BEAT = 60 / 128;                         // 128 BPM : 1 temps = 28,125 im
const at = b => b * BEAT;
const F = n => n / FPS, DEG = Math.PI / 180;
const seg = (t0, dur, ease) => ({ t0, dur, ease: gsap.parseEase(ease) });
const ORBIT = seg(at(12) + F(1), F(41), "power1.out"); // 1 im après le flash du drop
const TILT = seg(at(15), F(12), "sine.in");            // tangage 35° → 89,9° (vue de dessus)
const DOLLY = seg(at(15) + F(14), F(11), "sine.out");  // puis rapprochement ×3
const p = (s, t) => s.ease(gsap.utils.clamp(0, 1, (t - s.t0) / s.dur));
const lerp = gsap.utils.interpolate;
const target = new THREE.Vector3(0, 0.6, 0);

function renderAt(t) {
  const az = lerp(30, -25, p(ORBIT, t)) * DEG;   // azimut : 55° d'orbite
  const el = lerp(35, 89.9, p(TILT, t)) * DEG;   // 89,9° : évite le lookAt dégénéré à 90°
  const d = lerp(9, 3, p(DOLLY, t));
  camera.position.set(target.x + d * Math.cos(el) * Math.sin(az),
                      target.y + d * Math.sin(el),
                      target.z + d * Math.cos(el) * Math.cos(az));
  camera.lookAt(target);
  renderer.render(scene, camera);
}
window.addEventListener("hf-seek", e => renderAt(e.detail.time));
renderAt(window.__hfThreeTime || 0);

// Calques HTML sur la même grille : flash d'1 image, flou pendant la bascule, titre au temps 16
tl.set("#flash", { autoAlpha: 0 }, 0)
  .set("#flash", { autoAlpha: 1 }, at(12))
  .set("#flash", { autoAlpha: 0 }, at(12) + F(1))
  .set("#three-layer", { filter: "blur(0px)" }, 0)
  .to("#three-layer", { filter: "blur(4px)", duration: F(4), ease: "sine.in", yoyo: true, repeat: 1 }, at(15) + F(5))
  .set("#title", { autoAlpha: 0, y: 40 }, 0)
  .to("#title", { autoAlpha: 1, y: 0, duration: F(14), ease: "power3.out" }, at(16));
```

**After Effects**

- Layer › New › Camera (Calque › Nouveau › Caméra), Two-Node Camera (caméra à deux nœuds), Angle of View (angle de champ) ≈ 50°. Objets en 3D Layer (calque 3D) ; volumes extrudés via Composition Settings › 3D Renderer (Paramètres de composition › Rendu 3D) en Cinema 4D.
- Orbite : Layer › New › Null Object (Objet nul) au centre des volumes, caméra rattachée au nul par Parent & Link (Parent et lien). Y Rotation (Rotation Y) du nul de 30° à −25° en 41 im ; dans le Speed Graph (éditeur de graphe de vitesse), influence d'arrivée ≈ 66 %, départ sans lissage (≈ power1.out).
- Grue : X Rotation (Rotation X) du nul de −35° à −90° en 12 im, départ lissé et arrivée sèche (≈ sine.in) ; puis Position Z de la caméra divisée par 3 en 11 im. Activer Motion Blur (Flou de mouvement), Shutter Angle (Angle d'obturateur) 180° dans Composition Settings › Advanced (Avancé).
- Poursuite : sujet rattaché à la caméra, donc fixe à l'écran. Z Rotation (Rotation Z) du nul de −30° à 80° en 5 s, Easy Ease (Lissage de vitesse, F9).
- Angles sur les accords : un Composition Marker (marqueur de composition) par attaque, une caméra par angle, coupée au marqueur par Edit › Split Layer (Édition › Scinder le calque).
