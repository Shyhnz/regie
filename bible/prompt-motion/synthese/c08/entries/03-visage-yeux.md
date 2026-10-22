## Le visage minimal : jouer par les yeux, le clignement et les signes (minimal face acting, eye swaps, blink, cartoon reaction marks)

Deux yeux, parfois deux barres de sourcils, portent tout le jeu d'acteur. Chaque expression est un dessin à part, échangé d'une image à l'autre : l'état se lit instantanément, même à petite taille. Un signe cartoon au-dessus de la tête (« ! », ampoule, goutte, cœurs) précise l'émotion. Vue dans 15 vidéos, dont 14 notées 4 ou 5.

![Agent corail à son bureau : un papillon se pose sur sa tête, ses yeux se ferment de bonheur, deviennent des cœurs, et trois cœurs montent à droite](ILLUS:visage-yeux-1)

*[Animated agent session story](https://prompt-motion.com/jake11moran-a269c4), 0:32.33 à 0:33.33 : le papillon se pose, les yeux passent à « fermés heureux » puis en cœurs, l'écran vire au vert et trois cœurs montent.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Bibliothèque d'états d'yeux | [Animated agent session story](https://prompt-motion.com/jake11moran-a269c4), 0:00.50 | au moins 12 états (endormi, sursaut, ^^, idée, sourcils en V, X, spirales, goutte, cœurs, clin d'œil), chacun basculé en 1 image |
| Sursaut en une image | [Animated agent session story](https://prompt-motion.com/jake11moran-a269c4), 0:07.21 | tassé à f173, pleine hauteur bouche en « o » à f174 ; « ! » à f176, qui grossit jusqu'à f179 (24 fps) |
| Clignement en 3 images | [Scrabble tile character story](https://prompt-motion.com/anilraok-eff262), 0:01.53 | mi-clos, fermé, mi-clos : 0,1 s à 30 fps ; les tuiles voisines clignent en décalé (Q à f34, U à f46) |
| Les sourcils jouent seuls | [Scrabble tile character story](https://prompt-motion.com/anilraok-eff262), 0:18.53 | bord intérieur relevé de 15° = tristesse, abaissé de 20° = détermination ; yeux +30 % à la surprise, puis en fente |
| Visage-écran à glyphes | [The Last Light animated short](https://prompt-motion.com/faroukzy-9ff23e), 2:08.00 | visière sombre, yeux cyan : ^^, gouttes, sourcils en V, « … » au réveil ; une émotion par plan, lisible à 10 % de la hauteur |
| Clignement qui fait la chute | [Photon journey from the Sun](https://prompt-motion.com/apoorvjain25-d24184), 0:17.07 | paupière fermée en 2 im (30 fps), son coupé net ≈ 0,1 s, étincelle sur la paupière puis halo 3 im |
| Signes qui s'empilent | [Pixel art LLM history](https://prompt-motion.com/pluginplay-3d4006), 0:19.88 | gros plan de réaction : 1 goutte de sueur à 20,1 s, puis 2, 3, 4 entre 21,5 et 21,85 s ; pupilles qui rétrécissent à 22,0 s |
| Icônes du produit qui changent d'humeur | [sweetRegret app update reel](https://prompt-motion.com/thilina-a-891c09), 0:04.10 | friandises qui dorment en mode sombre ; chocolats grognons qui écarquillent les yeux à f601, quand la limite est dépassée |

![Tuile Q en cinq expressions : sourcils tristes, neutre, surprise yeux agrandis, yeux en fente, sourcils en V déterminés](ILLUS:visage-yeux-2)

*[Scrabble tile character story](https://prompt-motion.com/anilraok-eff262), 0:18.53 à 0:24.83 : sans bouche, l'angle des sourcils et la taille des yeux suffisent à jouer tristesse, surprise, soupçon et détermination.*

**Règles de construction**

1. Remplacer, ne pas interpoler : un dessin par état, échangé en 1 image (jake11moran, thilina ; trois textures chez [Shop chatbot mascot promo](https://prompt-motion.com/anas0ra-e57aea)). Seule exception : le réveil en 2 étapes, yeux mi-ouverts puis grands ouverts (anas0ra, f40-f44).
2. Clignement de 0,07 à 0,1 s : 3 im à 30 fps (anilraok, gizakdag), 4 im à 60 fps (en-ra). Décaler les clignements d'un personnage à l'autre ; en placer un sur les plans fixes et le carton final.
3. La bascule part sur l'accent. Modèles animés sur la musique : sursaut à f174 pour un accent à f174,4, idée à f320 pour f319,6, papillon posé à f778 sur l'attaque (jake11moran) ; chocolats écarquillés sur le temps de la 3e chute (thilina).
4. Le signe suit la bascule de 2 im, en haut à droite de la tête, entre en 1 à 3 im avec un petit rebond d'échelle (jake11moran). Le tenir ≈ 0,5 s (« ! » de pluginplay). Graduer en empilant : 1 à 4 gouttes, 3 cœurs à 2-3 im d'écart.
5. Les sourcils font l'émotion : 15 à 20° d'angle suffisent, et les yeux grossissent de 30 % pour la surprise (anilraok). Une émotion par plan (faroukzy).
6. Taille : yeux ≈ 12 % de la largeur du visage, visage d'au moins 10 % de la hauteur du cadre. Contre-exemple : balle-personnage à 2-4 % de la hauteur, sans changement d'expression ([Beat-synced bouncing 3D ball](https://prompt-motion.com/gorden-sun-041f56)).

**Verdict** : à reprendre. Cinq dessins d'yeux font une gamme complète, et c'est ce qui sépare un personnage d'un objet. Réserve chaque signe cartoon à un moment fort : le même « ! » partout devient l'accent répété que tu rejettes.

**Quand l'utiliser** : pour toute mascotte, en explainer narratif ou court récit, et en promo SaaS quand les icônes du produit réagissent (badge qui sourit quand la tâche passe). Fonctions : problème (goutte de sueur), preuve ou succès (yeux en cœur), chute (dernier clignement). La bibliothèque d'yeux se dessine au système de design, une fois pour tout le film. À éviter en éditorial sobre ou typographie pure, et sous 10 % de la hauteur du cadre.

**HyperFrames (GSAP)**

```js
// Visage minimal : états d'yeux échangés en 1 image, sursaut + « ! », clignement, cœurs
const FPS = 60, BEAT = 60 / 120;                  // 120 BPM
const at = b => b * BEAT, F = n => n / FPS;
const EYES = ["#eyes-sleep", "#eyes-open", "#eyes-happy", "#eyes-heart"];
const face = (id, t) => EYES.forEach(s => tl.set(s, { autoAlpha: s === id ? 1 : 0 }, t));
// paupière (#lids, origine en haut) : 0 = ouvert, 1 = fermé ; 3 poses de 2 im = 0,1 s
const blink = t => tl.set("#lids", { scaleY: 0.5 }, t).set("#lids", { scaleY: 1 }, t + F(2))
  .set("#lids", { scaleY: 0.5 }, t + F(4)).set("#lids", { scaleY: 0 }, t + F(6));
tl.set("#lids", { scaleY: 0, transformOrigin: "50% 0%" }, 0)
  .set(["#bang", ".heart"], { autoAlpha: 0 }, 0);
face("#eyes-sleep", 0);
// sursaut sur le temps 2 : yeux et corps changent sur la même image, sans intermédiaire
const WAKE = at(2);
face("#eyes-open", WAKE);
tl.set("#body", { scaleY: 1.12, scaleX: 0.94, transformOrigin: "50% 100%" }, WAKE)
  .to("#body", { scaleY: 1, scaleX: 1, duration: F(10), ease: "power2.out" }, WAKE + F(2))
  .set("#bang", { autoAlpha: 1, scale: 0.3 }, WAKE + F(5))          // « ! » 2 im (24 fps) après
  .to("#bang", { scale: 1, duration: F(8), ease: "back.out(2.5)" }, WAKE + F(5))
  .set("#bang", { autoAlpha: 0 }, WAKE + F(5) + 0.5);               // tenu 0,5 s
blink(at(4) + F(10));
// sourcils : détermination sur le temps 5, bord intérieur abaissé de 20°
tl.set("#brow-l", { rotation: 20 }, at(5)).set("#brow-r", { rotation: -20 }, at(5));
// compliment sur le temps 6 : yeux heureux, puis cœurs 5 im après, 3 cœurs qui montent
const LOVE = at(6);
face("#eyes-happy", LOVE);
face("#eyes-heart", LOVE + F(5));
tl.set(".heart", { autoAlpha: 1, scale: 0.4, y: 0 }, LOVE + F(8))
  .to(".heart", { scale: 1, y: -140, duration: F(30), ease: "power2.out", stagger: F(6) }, LOVE + F(8))
  .to(".heart", { autoAlpha: 0, duration: F(10), stagger: F(6) }, LOVE + F(38));
```

**After Effects**

- Dessiner chaque état d'yeux sur son calque, dans une précomposition « Yeux », un état par image. Layer › Time › Enable Time Remapping (Calque › Temps › Activer le remappage temporel), keyframes en Hold (Animation › Toggle Hold Keyframe, Activer/désactiver l'image clé maintenue) : la valeur choisit l'état, échangé en 1 image.
- Clignement : paupière en Shape Layer (calque de forme) de la couleur du visage, Anchor Point (Point d'ancrage) en haut. Scale (Échelle) en Y : 0, 50, 100, 50, 0 %, une clé toutes les 2 im à 60 fps, en Hold.
- Sourcils : Rotation (Rotation) à 15° pour la tristesse, −20° pour la détermination (en miroir sur l'autre sourcil), en Hold keyframes.
- « ! » : calque de texte, Scale 30 → 110 → 100 % en 8 im avec Easy Ease (Lissage de vitesse), 5 im après la bascule, Opacity (Opacité) coupée 0,5 s plus tard. Cœurs : 3 calques décalés de 6 im, Position Y −140 px en 30 im.
- Calage : afficher la Waveform (forme d'onde) du calque audio (L deux fois) et poser chaque bascule d'état sur l'image de l'attaque, jamais avant.
