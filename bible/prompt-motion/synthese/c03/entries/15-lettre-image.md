## La lettre comme image : contour, ombre empilée, remplissage, mot géant (outline type, stacked offset shadow, image-filled letters, knockout, full-bleed giant word)

La lettre devient une surface : contour seul, ombre dure empilée, remplissage d'image ou de vidéo, défonce sur une forme, verre, ou mot géant en filigrane. Un seul mot ainsi traité suffit à faire un plan. Il doit démontrer ce qu'il nomme : VIDEO rempli d'une vidéo, FLUID qui change de couleur avec le fluide. Le mot fait alors 22 à 92 % de la hauteur. Le WordArt arc-en-ciel et les ombres sans rôle en sont la version cliché. Vue dans 46 vidéos, dont 40 notées 4 ou 5.

![Six images sur fond crème : un blob en dégradé grandit derrière le mot FLUID ; les parties de lettres sur le blob sont blanches, celles hors du blob noires, et le dégradé passe du bleu-violet au vert puis à l'orange](ILLUS:lettre-image-1)

*[Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 0:06.27 à 0:07.53 : FLUID est blanc sur le blob et noir hors de lui ; le blob change de dégradé à chaque temps.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Défonce sur une forme | [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 0:06.40 | Étude 60 fps : capitale 26 % H, lettres posées à ≈ 3 im d'écart ; dégradé du blob changé aux temps 13, 14 et 15, à 0 im |
| Mot rempli de son médium | [fal motion design showreel](https://prompt-motion.com/influencer-seo-ce8c33), 0:01.97 | 32 % H, 79 % L : IMAGE rempli d'une photo, VIDEO d'une vidéo en mouvement, AUDIO en contour, 3D extrudé |
| Chiffre géant en fenêtre | [DistilBook product explainer](https://prompt-motion.com/sudo-kiran-6609ed), 0:16.00 | « 15 » à 60 % H montre un style toutes les ≈ 7,5 im ; compteur « STYLE 01 / 15 » → « 15 / 15 » en haut à droite |
| Contour seul | [Chunku product promo](https://prompt-motion.com/reyzostyle-b55864), 0:00.28 | « FILM. » en contour de 2-3 px, ×1,13 → ×1 en 9 im ease-out ; entre un mot plein et un mot espacé |
| Ombre empilée | [Paper-style product launch film](https://prompt-motion.com/ik-builds-b8bdcf), 0:07.12 | Capitales crème à 17,6 % H, 3-4 copies décalées alternant vert #3C6C54 et brique #9C5448 ; balle teal en point final |
| Lettres en verre | [Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e), 0:07.90 | Étude 60 fps : FLUID à 78 % L, ≈ 3 im par lettre en power2.out ; contour gris sur marbrure, lisibilité faible |
| Mot vertical rogné | [Motion designer showreel](https://prompt-motion.com/kangaroohere-b10f8d), 0:06.02 | TRENDING tourné de 90°, 92 % H, collé au bord gauche (x 1-9 %) : titre la pile de cartes sans prendre le centre |
| Mot fantôme derrière l'objet | [Motion design showreel](https://prompt-motion.com/samuel-spitz-974923), 0:08.30 | « chrome » en serif italique à 35 % H, gris #3A3A3A sur noir, caché au centre par la sphère qu'il nomme |

![Huit images sur fond sombre : IMAGE rempli d'une photo violette, VIDEO rempli de chrome liquide, AUDIO en contour à moitié rempli avec un égaliseur, puis 3D extrudé avec une basket](ILLUS:lettre-image-2)

*[fal motion design showreel](https://prompt-motion.com/influencer-seo-ce8c33), 0:02.17 à 0:05.50 : IMAGE rempli d'une photo, VIDEO de chrome liquide, AUDIO en contour à moitié rempli, puis 3D extrudé.*

**Règles de construction**

1. Un mot par plan, grand : 22 à 92 % H (teslachartz-c58b32 22 %, sudo-kiran 26 %, influencer-seo 32 %, sudo-kiran-6609ed 60 %, kangaroohere 92 %). Le traitement dit le mot ; sinon c'est du WordArt (henkpoley-3d3407, gag noté cliché).
2. Remplissage d'image ou verre : la lettre perd du contraste. Les suffixes remplis de photo se lisent moins bien que le « RE » plein (oliahmed205-3e31c4). Le verre gris se perd sur la marbrure (lukasersil). Image claire sur fond sombre, lettres grasses à 26 % H au moins, contour fin.
3. Contour : 1 à 3 px en 1080 p, une ligne sur deux au plus (plein puis contour chez oliahmed205, plein, contour et réserve chez blue-clarity-ef56d0). `-webkit-text-stroke` sur une police variable trace les chevauchements internes (le « D » d'astrodevil-3f2054) : police statique ou contour SVG.
4. Ombre empilée : dure, sans flou, décalage de 1,5 à 3 % H (3xtihor-0f6911 1,5 %, eyishazyer-af035b 2 à 3 %, tankazunori-0fc886 8 couches sur 2 % L), deux couleurs de la palette au plus. L'extrusion rouge et violette d'eyishazyer est « l'effet rétro le plus vu » : anime-la (lexnlin-6161a6 la rétracte sur ≈ 2 s) ou évite-la.
5. Mot géant en décor : faible contraste (#3A3A3A sur noir, 25 % d'opacité chez micheleharmonic-77628e), rogné exprès, derrière l'objet. Jamais le message à lire : un mot à lire garde sa marge (le K de hoyoyoda-3a5c08 mangé par la lune est un défaut).
6. Changements de matière sur le temps : dégradé du blob changé aux temps 13, 14 et 15 à 0 im (sudo-kiran, 5/5). Lettres posées à ≈ 3 im d'écart (sudo-kiran, lukasersil).

**Verdict** : à reprendre, un traitement par film. La défonce sur une forme fluide (ton mesh gradient) et le mot rempli de son médium démontrent le mot ; l'extrusion décalée et le WordArt sont à éviter. Le mot géant rogné reste un décor, puisque tu rejettes les mots coupés par le bord.

**Quand l'utiliser** : en typo cinétique 1600 et en showreel éditorial, mot plein cadre en défonce sur le fond fluide, pour l'accroche ou une transition (le blob devient la forme suivante). En promo SaaS, chiffre géant qui sert de fenêtre sur les écrans du produit (preuve), mot rempli de son médium pour une liste de capacités, mot vertical rogné pour titrer une colonne de cartes. On le fixe au système de design, un seul traitement de lettre ; à éviter au-delà de 3 mots ou sur un fond chargé.

**HyperFrames (GSAP)**

```js
// Défonce : FLUID noir (#dark) + copie blanche (#light) découpée par le blob (clip-path SVG)
// <clipPath id="clip"><use href="#blob"/></clipPath> ; <text id="light" clip-path="url(#clip)">
const FPS = 60, BEAT = 60 / 120, at = b => b * BEAT;    // 120 BPM
const B = window.BLOB_SHAPES;   // 4 tracés du blob, même nombre de points (interpolables)
const G = [["#4B6BFF", "#B04BFF"], ["#C8F03C", "#2E7BFF"], ["#FF6A1A", "#FFD23C"]];
tl.set("#dark tspan, #light tspan", { attr: { "fill-opacity": 0 } }, 0)
  .set("#blob", { attr: { d: B[0] } }, 0);
["#dark", "#light"].forEach(id =>                         // lettres à 3 im d'écart, ensemble
  tl.to(`${id} tspan`, { attr: { "fill-opacity": 1 }, duration: 2 / FPS, ease: "none", stagger: 3 / FPS }, at(12.5)));
G.forEach(([a, b], i) => {
  tl.to("#blob", { attr: { d: B[i + 1] }, duration: BEAT, ease: "sine.inOut" }, at(13 + i))
    .set("#g stop:first-child", { attr: { "stop-color": a } }, at(13 + i))   // dégradé changé
    .set("#g stop:last-child",  { attr: { "stop-color": b } }, at(13 + i));  // sur le temps, 0 im
});

// Chiffre géant en fenêtre : #big { background-clip: text; color: transparent }
for (let i = 0; i < 15; i++) {
  const t = at(20) + i * 7.5 / FPS;                       // une image toutes les 7,5 im
  tl.set("#big", { backgroundImage: `url(styles/${i + 1}.jpg)` }, t)
    .set("#count", { textContent: `STYLE ${String(i + 1).padStart(2, "0")} / 15` }, t);
}

// Ombre empilée dure (text-shadow en couches, pas de copies DOM) qui se rétracte sur 2 s
tl.set("#stack", { textShadow: "8px 8px 0 #3C6C54, 16px 16px 0 #9C5448, 24px 24px 0 #3C6C54" }, 0)
  .to("#stack", { textShadow: "0px 0px 0 #3C6C54, 0px 0px 0 #9C5448, 0px 0px 0 #3C6C54",
                  duration: 2, ease: "sine.inOut" }, at(32));
```

**After Effects**

- Défonce : deux calques de texte identiques, noir et blanc ; le blanc prend le blob en Alpha Matte (Cache alpha) (colonne Track Matte (Cache) du calque). Le blob : Shape Layer (calque de forme) au tracé animé, Effect › Generate › 4-Color Gradient (Effet › Générer › Dégradé 4 couleurs), couleurs en Hold keyframes (images clés maintenues) (clic droit › Keyframe Interpolation › Hold (Interpolation d'images clés › Maintien)) sur chaque temps.
- Variante mode différence : Layer › Blending Mode › Difference (Calque › Mode de fusion › Différence) sur un texte crème posé au-dessus du blob.
- Mot rempli : calque vidéo ou image sous le texte, en Alpha Matte du texte. Pour le « 15 », les images en calques successifs de 7 et 8 im en alternance (7,5 im en moyenne), via Animation › Keyframe Assistant › Sequence Layers (Animation › Assistant d'image clé › Séquencer les calques).
- Contour : Character panel (panneau Caractère), Fill (remplissage) désactivé, Stroke (contour) de 2 px. Ombre empilée : dupliquer 3 à 4 fois (Ctrl+D), décaler de 0,5 à 0,8 % H par copie vers le bas à droite, couleur par Effect › Generate › Fill (Effet › Générer › Remplissage) ; pas de Drop Shadow (Ombre portée) floue.
- Mot géant en décor : Opacity (Opacité) 25 %, Layer › Transform › Rotate 90° Clockwise (Calque › Transformation › Rotation 90°) pour le mot vertical ; tout mot à lire garde 5 % de marge.
