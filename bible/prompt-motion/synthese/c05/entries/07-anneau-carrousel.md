## L'anneau et le carrousel cylindriques (3D text ring, orbiting text cylinder, cylinder carousel, slot-machine reel)

Du texte, des cartes ou des pastilles sont posés sur un cylindre qui tourne. Un seul plan montre beaucoup d'éléments, avec une vraie profondeur : la face arrière, en miroir à 25-30 % d'opacité, donne le volume. Quand la rotation s'arrête sur un temps, elle devient un choix : le verdict, le logo, la carte retenue. Vue dans 16 vidéos, dont 15 notées 4 ou 5.

![Cinq rangées de texte colorées tournent sur un cylindre ; la face arrière se lit en miroir, plus pâle, et la caméra passe de la plongée à la vue de face](ILLUS:anneau-carrousel-1)

*[Claude motion designer showreel](https://prompt-motion.com/3xtihor-0f6911), 0:07.43 à 0:08.93 : les rangées défilent avec un flou horizontal, la caméra descend presque de face puis remonte ; l'arrière reste lisible en miroir.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Anneau de texte multi-rangées | [Claude motion designer showreel](https://prompt-motion.com/3xtihor-0f6911), 0:07.00 | 5 rangées de 7 % H, cylindre de 65 % L, arrière à 25 % ; plongée de 25°, face, plongée, en 1,9 s |
| Anneau en orbite autour d'un objet | [Claude motion reel](https://prompt-motion.com/codestackr-c071bf), 0:07.37 | ellipse de 75 % L, capitales de 4 % H ; demi-tour en 1,3 s ; avant orange, arrière bleu et en miroir |
| Cylindres empilés d'un temps | [Kinetic type showreel](https://prompt-motion.com/zheke-38deff), 0:05.15 | 3 anneaux « LOOP • », celui du haut vu de dos à 30 % ; 1 temps exact, coupes f309 et f337 (étude 60 fps) |
| Anneau de cartes autour du titre | [DistilBook product explainer](https://prompt-motion.com/sudo-kiran-4f8b59), 0:00.00 | ≈ 16 feuilles de 5 % H passent devant et derrière le texte, puis avancent jusqu'à 25 % H en 17 im et s'éparpillent |
| Carrousel de vidéos fouetté | [UGC ad generator promo](https://prompt-motion.com/twoclipping-6dd14e), 0:10.20 | ≈ 10 clips, reflets à 30 % ; accélère sur le demi-temps f617, traînées de 15-20 % L par image, lisible sur le temps f662 |
| Ruban déplié en cylindre | [Distilbook motion showreel](https://prompt-motion.com/itisrazak-3ad902), 0:26.68 | départ sur le temps f1601, flou fort f1614-f1628, ease-out jusqu'à 3 vignettes lisibles ; l'étiquette change à chaque carte |
| Tambour de machine à sous | [Ren app launch video](https://prompt-motion.com/macrohou-33959d), 0:14.17 | fenêtre de 22 % L ; 1 pastille toutes les 3-4 im, puis toutes les 5 im, arrêt sur WORKED vers le temps f931 (probable) |
| Rouleaux arrêtés un par temps | [Chain.wtf pitch video](https://prompt-motion.com/spearwtf-3c1fd1), 0:06.37 | 3 rouleaux floutés s'arrêtent à f203, f215, f227 (1 temps = 12 im à 150 BPM, 30 fps), puis noir 1 im, flash 1 im |

![Un carrousel de clips verticaux avec reflets au sol accélère jusqu'à des traînées floues, puis freine et redevient lisible](ILLUS:anneau-carrousel-2)

*[UGC ad generator promo](https://prompt-motion.com/twoclipping-6dd14e), 0:10.25 à 0:11.10 : le fouetté part du demi-temps, les cartes deviennent des traînées au pic, puis se posent nettes sur le temps.*

**Règles de construction**

1. On lit l'avant, on devine l'arrière : miroir à 25-30 % d'opacité (Claude motion designer showreel, Kinetic type showreel) ou autre couleur (Claude motion reel). La perspective fait le reste : 5 % H devant, 2,5 % derrière.
2. Taille : anneau de 65 à 75 % de la largeur, glyphes de 4 à 12 % de la hauteur, capitales larges. Sous 3 % H, crénelé, l'anneau se lit comme du bruit (Motion designer showreel). Exception voulue : le micro-texte de 0,6 % H en texture (DistilBook motion explainer).
3. Vitesse de lecture : environ 2 à 3° par image à 60 fps. Le demi-tour en 1,3 s (2,3°/im) reste lisible ; le tour en 2 s (3°/im) sur des glyphes petits ne l'est plus. Plus vite, c'est un fouetté : il lui faut le flou et un arrêt.
4. Durée courte : de 1 temps (Kinetic type showreel, 28 im) à 4 temps (Claude motion designer showreel, 1,9 s à 128 BPM). L'anneau est un passage.
5. Calage (vidéos animées sur la musique) : fouetté parti du demi-temps, lisible sur le temps, 0,8 s ease-in-out (UGC) ; un rouleau arrêté par temps (Chain.wtf). Contre-exemple : l'anneau de PicTwin, sans musique, accélère 4 s sans s'arrêter.
6. Cartes : celle du centre en pleine taille, les voisines compressées et assombries, reflets au sol à 30 %. Une étiquette ou un compteur qui change à chaque carte donne un sens à la rotation (« 0 / 24 »).

**Verdict** : à reprendre. C'est ton anneau de texte en orbite : garde l'arrière en miroir à 25 %, des glyphes d'au moins 5 % H et un arrêt sur le temps. Une fois par film, sinon il devient l'accent répété que tu rejettes.

**Quand l'utiliser** : en typo cinétique 1600 et en showreel, pour faire tourner une liste de mots clés (compétences, valeurs, fonctions) en un seul plan. En promo SaaS, le carrousel montre une galerie et le tambour révèle un verdict. On le décide au découpage (un plan de 1 à 4 temps), arrêt calé sur la grille. À éviter pour une phrase à lire en entier : seule la face avant est lisible.

**HyperFrames (GSAP)**

```js
// Anneau de texte 3D (Claude motion designer showreel) : cylindre CSS 3D, arrière en miroir à 25 %.
// HTML : <div id="cam" data-layout-ignore><div id="tilt"></div></div>  (chevauchements voulus)
// CSS : #cam { position:absolute; inset:0; perspective:1600px; visibility:hidden }
//       #tilt, .row { position:absolute; left:50%; top:50%; transform-style:preserve-3d }
//       .g { position:absolute; font:800 84px/1 Manrope; white-space:pre; backface-visibility:visible }
const FPS = 60, f = n => n / FPS;
const BEAT = 60 / 128, at = b => b * BEAT;          // 128 BPM : 1 temps = 28,1 im
const R = 620;                                      // rayon : anneau ≈ 65 % de 1920 px
const ROWS = [["MOTION DESIGN • ", "#D6FF42"], ["KINETIC TYPE • ", "#F3EEE3"], ["LOOP FOREVER • ", "#F08AD0"]];
const rows = ROWS.map(([txt, col], k) => {
  const n = txt.length * Math.round(64 / txt.length), step = 360 / n;   // ≈ 64 glyphes, sans couture
  const row = document.createElement("div");
  row.className = "row"; row.style.top = `${(k - 1) * 92}px`;          // rangées à ≈ 8,5 % H d'écart
  const glyphs = [...txt.repeat(n / txt.length)].map((c, i) => {
    const g = document.createElement("span");
    g.className = "g"; g.textContent = c; g.style.color = col;
    g.style.transform = `translate(-50%,-50%) rotateY(${i * step}deg) translateZ(${R}px)`;
    return row.appendChild(g);
  });
  document.querySelector("#tilt").appendChild(row);
  return { row, glyphs, step };
});
// Profondeur : opacité recalculée depuis l'angle à chaque image (fonction pure du temps)
const shade = () => rows.forEach(({ row, glyphs, step }) => {
  const r = gsap.getProperty(row, "rotationY");
  glyphs.forEach((g, i) => { g.style.opacity = gsap.utils.clamp(0.25, 1, 0.6 + Math.cos((i * step + r) * Math.PI / 180)); });
});
const T0 = at(16);                                   // 1er temps de la mesure 5
tl.set("#cam", { autoAlpha: 1 }, T0)
  .fromTo("#tilt", { rotationX: -25, scale: 0.8 }, { rotationX: -4, scale: 1, duration: at(2), ease: "power2.out", immediateRender: false }, T0)
  .to("#tilt", { rotationX: -18, duration: at(2), ease: "sine.inOut" }, T0 + at(2))
  .fromTo(rows.map(o => o.row), { rotationY: 0 }, { rotationY: -260, duration: at(4), ease: "none", onUpdate: shade, immediateRender: false }, T0)
  .to("#cam", { autoAlpha: 0, duration: f(6), ease: "power1.in" }, T0 + at(4) - f(6));   // 2,3°/im
shade();
```

**After Effects**

- Anneau rapide : la rangée, répétée sans couture, dans une composition large comme la circonférence (≈ 3 900 px), puis Layer › Pre-compose (Calque › Précomposer). Effect › Perspective › CC Cylinder : Rotation X −25° → −4° → −18° (Easy Ease, 2 temps chacun), Rotation Y −260° en 112 im (4 temps), en Linear (Linéaire).
- Face arrière : Edit › Duplicate (Édition › Dupliquer). Copie du dessous : CC Cylinder › Render (Rendu) Inside (Intérieur), Opacity (Opacité) 25 % ; copie du dessus : Render Outside (Extérieur). Le miroir est automatique.
- Texte qui passe derrière un objet : Animate › Enable Per-character 3D (Animer › Activer la 3D par caractère), masque ellipse, Path Options › Path (Options de tracé › Tracé), Perpendicular To Path activé. Calque couché (X Rotation 90°), lettres redressées par un animateur X Rotation −90° ; animer First Margin (Marge initiale) ; Layer › New › Camera (Calque › Nouveau › Caméra).
- Carrousel et tambour : cartes 3D parentées à un Null Object (Objet nul), Anchor Point (Point d'ancrage) Z décalé du rayon ; animer la Y Rotation du nul (X pour un tambour). Fouetté de 45 im, Speed Graph (éditeur de graphe de vitesse) influence 70 %, dernière clé sur le temps, Motion Blur (Flou de mouvement) activé.
- Reflet : carte dupliquée, Scale (Échelle) Y −100 %, Opacity 30 %, Effect › Transition › Linear Wipe (Balayage linéaire) avec Feather (Contour progressif) 60 %.
