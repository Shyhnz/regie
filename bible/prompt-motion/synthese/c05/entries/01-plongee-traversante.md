## La plongée traversante (zoom-through, push-through, fly-through, tunnel, warp)

La caméra fonce en accélérant vers un élément précis (anneau, astre, glyphe, carte, volume filaire) jusqu'à ce qu'il remplisse le cadre ; sa matière devient le plan suivant. Le tunnel en est la version continue : des formes répétées en profondeur défilent vers la caméra. Dans les vidéos notées 5, la course visible dure 6 à 18 images à 60 fps (0,1 à 0,3 s) et la coupe tombe sur le temps. Vue dans 51 vidéos, dont 46 notées 4 ou 5.

![Un anneau corail entoure la calligraphie, grossit en accélérant jusqu'à déborder le cadre avec un flou de bougé, puis coupe sur un flocon](ILLUS:plongee-traversante-1)

*[Engraving-style Claude ad](https://prompt-motion.com/lexnlin-038035), 0:02.95 à 0:03.12 : l'anneau passe d'environ 25 % à 120 % de la largeur, puis la coupe ouvre sur le flocon.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Dans un anneau tracé | [Engraving-style Claude ad](https://prompt-motion.com/lexnlin-038035), 0:02.95 | étude 60 fps : 290 → 1 760 px (×6,1) en 8 im, power1.in sur le log de l'échelle ; coupe 1,8 im avant l'attaque |
| Dans un astre, puis flash | [Synced lyrics motion video](https://prompt-motion.com/samaote-5e2fc2), 0:11.17 | étude 60 fps : soleil de 35,5 % L au hors-cadre en 18 im, power4.in ; flash 1,7 im avant le 1er temps |
| À travers un nuage de particules | [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 0:09.90 | points → gros disques flous, luminance noir → crème en 6 im (power2.in) ; crème plein sur le temps, 0 im (étude 60 fps) |
| À travers un volume filaire | [Kinetic shapes showreel](https://prompt-motion.com/shinskinakamoto-20190b), 0:09.28 | cube ×3 en 5 im, arêtes en chapelets de perles ; coupe sur un blanc tenu 3 im, pile sur le temps |
| Dans un glyphe qui devient un point | [Ondefica app motion reel](https://prompt-motion.com/jesscaroline7-1ff7cb), 0:09.65 | flèche : 0,9 → 22 % de l'aire en 21 im, ×1,35 par image à la fin ; coupe sur le temps vers un point blanc |
| Dans une carte du mur, flou raccordé | [org2html product showreel](https://prompt-motion.com/kyonax-on-tech-aabc1d), 0:10.95 | carte 18 % → plus de 100 % L en 19 im (expo-in) ; coupe sur le temps, le plan B entre flou pendant 3 im |
| Tunnel d'anneaux de texte | [Code-only motion design reel](https://prompt-motion.com/johnsavage-ai-b091c0), 0:11.20 | une couche franchit la caméra toutes les 6 à 8 im ; entrée sur le 1er temps de la mesure 7, fond qui change de couleur |
| Descente des puissances de dix (Powers of Ten) | [The Last Light animated short](https://prompt-motion.com/faroukzy-9ff23e), 0:01 | Terre 8 → 18 → 33 → 76 % L en 11 s puis déborde ; voiles de nuages en fondu : 18 s sans coupe |

![Tunnel d'anneaux de texte circulaire : chaque couche grossit vers la caméra avec des traînées radiales, le fond passe du bleu au noir, au crème puis au rouge](ILLUS:plongee-traversante-2)

*[Code-only motion design reel](https://prompt-motion.com/johnsavage-ai-b091c0), 0:11.62 à 0:12.20 : chaque couche traverse l'objectif en flou radial et le fond change de couleur à chaque passage.*

**Règles de construction**

1. Accélérer jusqu'à la coupe, sans freiner. Courbes mesurées : power1.in sur le log de l'échelle (Engraving), power4.in (Synced lyrics), power3.in pour 12 à 24 im (Claude motion design showreel). En fin de course, la taille gagne ×1,2 à ×1,35 par image.
2. Course visible de 5 à 21 im à 60 fps : 5 (Kinetic shapes), 8 (Engraving), 18 (Synced lyrics), 19 (org2html), 21 (Ondefica). Plus lente, c'est une poussée (famille de la poussée vers le sujet).
3. Calage, tiré des vidéos animées sur la musique : plein cadre ou coupe sur le temps, ou 1 à 2 im avant ; toute l'accélération tient dans la dernière croche (Synced lyrics part 3 im après la croche). Contre-exemple : [Abstract motion design reel](https://prompt-motion.com/ajith-io-b5626e) part 4 im après le temps, sans appui.
4. Après le plein cadre, 0 à 3 im d'aplat, de flash ou de blanc. [Shape and dot motion showreel](https://prompt-motion.com/umangratani-57f86a) laisse 5 im de bleu vide, [Claude motion designer showreel](https://prompt-motion.com/mrtanviir-132457) 8 im de lignes pâles : la plongée « perd toute énergie ».
5. Ce qu'on traverse devient le plan B : même couleur (le marine de la carte devient le fond du carton dans [Particle sphere motion reel](https://prompt-motion.com/blue-clarity-ef56d0)), même forme (la flèche devient le point), ou flou raccordé des deux côtés de la coupe. Textes et tracés restent vectoriels, jamais un bitmap agrandi.
6. Le tunnel bat la mesure et mène quelque part : une couche par 6 à 8 im, ou un mot par temps ([Motion design showreel](https://prompt-motion.com/safarkhanshuvo-ffd52d)), puis une sortie (le cas de base au bout du tunnel de [Recursion explained in genres](https://prompt-motion.com/emollick-8661a8)). Régulier et « sans accent sur les temps », il reste un fond décoratif.

**Verdict** : à reprendre. C'est la mécanique de ta « plongée dans un glyphe puis flash de couleur » et de ton tunnel filaire néon ; une à deux plongées par vidéo, sinon chaque scène finit pareil. Le saut en hyperespace (étoiles étirées) est un cliché : traverse plutôt un objet du plan.

**Quand l'utiliser** : en showreel, en typo cinétique 1600 et en promo SaaS, comme transition de chapitre (« on entre dans le détail ») ou comme accroche (descente des puissances de dix). On la choisit aux enchaînements, une fois le drop et les 1ers temps repérés sur la grille ; le tunnel se décide dès la direction artistique. La version courte (contreforme, point, tuile) est au chapitre 4 (la plongée éclair), les mesures complètes au chapitre 14 (études 60 fps). À éviter en explainer posé et à chaque fin de scène.

**HyperFrames (GSAP)**

```js
// Plongée dans l'anneau (Engraving, étude 60 fps) : ×6,1 en 8 im, power1.in sur ln(échelle)
const FPS = 60, f = n => n / FPS;
const BEAT = 60 / 128, at = b => b * BEAT;          // 128 BPM
const CUT = at(16) - f(2);                           // l'image précède l'attaque audio de ≈ 2 im
// Mesurer après document.fonts.ready, scène A affichée (sinon rect = 0).
const st = document.querySelector("#sceneA").getBoundingClientRect();
const rg = document.querySelector("#ring").getBoundingClientRect();
const ox = rg.x + rg.width / 2 - st.x, oy = rg.y + rg.height / 2 - st.y;
const cam = { z: 0 };                                // z = ln(échelle)
const apply = () => { const k = cam.z / Math.log(6.1);   // l'anneau glisse vers le centre
  gsap.set("#sceneA", { transformOrigin: `${ox}px ${oy}px`, scale: Math.exp(cam.z),
    x: (st.width / 2 - ox) * k, y: (st.height / 2 - oy) * k }); };
apply();
tl.to(cam, { z: Math.log(6.1), duration: f(8), ease: "power1.in", onUpdate: apply }, CUT - f(8))
  .to("#sceneA", { filter: "blur(14px)", duration: f(4), ease: "power2.in" }, CUT - f(4))
  .set("#sceneA", { autoAlpha: 0 }, CUT)
  .set("#sceneB", { autoAlpha: 1, filter: "blur(10px)" }, CUT)  // flou raccordé
  .to("#sceneB", { filter: "blur(0px)", duration: f(3), ease: "power1.out" }, CUT);

// Tunnel (Code-only) : 8 anneaux, un franchit la caméra tous les 7 im
const RINGS = gsap.utils.toArray(".tunnel-ring"), STEP = f(7), LIFE = STEP * RINGS.length;
const T0 = at(24), T1 = at(32);                      // 2 mesures, puis on débouche
tl.set("#tunnel", { autoAlpha: 1 }, T0).set("#tunnel", { autoAlpha: 0 }, T1);
RINGS.forEach((el, i) => {
  for (let t = T0 - (i + 1) * STEP; t < T1; t += LIFE) {   // tunnel déjà plein à T0
    tl.set(el, { scale: 0.04, rotation: 0, autoAlpha: 0 }, t)
      .to(el, { scale: 3.5, autoAlpha: 1, rotation: 12, duration: LIFE, ease: "expo.in" }, t);
  }
});
```

**After Effects**

- Layer › Pre-compose (Calque › Précomposer) la scène A, puis placer l'Anchor Point (point d'ancrage) au centre de l'anneau avec le Pan Behind Tool (outil Déplacer l'arrière-plan, Y).
- Scale (Échelle) 100 → 610 % en 8 im : expression `t = linear(time, t0, t1, 0, 1); s = 100*Math.exp(Math.log(6.1)*t*t); [s, s]` (t0, t1 : début et fin de course, en s). Animation › Keyframe Assistant › Exponential Scale (Assistant d'image clé › Échelle exponentielle) donne la version à vitesse perçue constante.
- Flou des 4 dernières images : Effect › Blur & Sharpen › CC Radial Fast Blur (Effet › Flou et netteté › CC Radial Fast Blur), Amount 0 → 60. Activer le Motion Blur (flou de mouvement).
- Coupe : Edit › Split Layer (Édition › Scinder le calque), Ctrl+Maj+D, 2 im avant l'attaque audio ; la scène B garde 3 im de Gaussian Blur (Flou gaussien) 10 → 0, ou un Solid (solide) blanc d'1 image.
- Tunnel : 8 calques 3D Layer (Calque 3D) espacés de 400 px en Z ; Layer › New › Camera (Calque › Nouveau › Caméra) 35 mm, Position Z en Linear (Linéaire), une couche franchie par 7 im.
