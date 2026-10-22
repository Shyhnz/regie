## Le morphing de forme : un objet qui change au lieu de couper (shape morph, path morph, single morphing container, metaballs, dot-to-pill)

Une forme interpole son contour vers la suivante : disque, triangle, étoile ; point, pilule, bouton, barre, anneau ; goutte qui se divise ou fusionne (métaballes). Le spectateur suit un seul objet, donc le récit continue : [Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86) enchaîne 14 états d'interface en 14 s, sans une coupe. En abstrait, un morph par temps ; en interface, un seul conteneur. Vue dans 64 vidéos, dont 57 notées 4 ou 5.

![Six images sur fond bleu : le disque crème devient une forme molle, puis un triangle qui tourne entouré d'échos rouges](ILLUS:morph-1)

*[Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be), 0:06.07 à 0:06.53 : le cercle passe par une forme molle, tourne et se pose en triangle ; les 12 satellites changent de forme en même temps.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Primitive par temps, avec tour et échos | [Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be), 0:06.10 | Étude 60 fps : sursaut d'1 im pile sur le temps, ≈ 1 tour, dépassement 24 à 57 %, posé en ≈ 20 im (sine.out) |
| Morph court, puis la forme tient | [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:04.22 | Étude 60 fps : 7 à 8 im juste après le temps (0 im), forme tenue 20 im ; passage violet terne #8A5CC0 (RVB) |
| Ressort élastique à 200 sommets | [Particle sphere motion reel](https://prompt-motion.com/blue-clarity-ef56d0), 0:04.00 | 4 im de bascule puis ≈ 10 im d'oscillation (elastic), rotation 25° → 0°, départs sur les grosses caisses |
| Conteneur d'interface unique | [Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86), 0:01.25 | Étude 60 fps : cercle → pilule, 15 → 61 % L en 20 im, ressort ζ 0,74 (≈ back.out(1.0)), pic de vitesse au demi-temps |
| Point → pilule → carte | [ViralGrow product promo](https://prompt-motion.com/samuel-yostt-891f87), 0:00.50 | sur le temps (f29,8), barre orange de 26 × 5 % du cadre, puis pilule blanche de 40 × 23 % en 4 im, ease-out |
| Barre de progression → anneau | [Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4), 0:09.37 | Étude 60 fps : enroulement en 18 im (power1.inOut), pic de vitesse pile sur le temps, puis score 63 → 94 dans l'anneau |
| Mitose sur les temps | [Lead Notifi product ad](https://prompt-motion.com/leadnotifi-e83f94), 0:00.97 | 1 → 2 → 4 → 8 points, chaque division en 4 à 6 im sur les temps 1, 2, 3 ; retour à 1 point en 4 im au temps 6 |
| Point final → logo | [Engraving-style Claude ad](https://prompt-motion.com/lexnlin-038035), 0:12.10 | Étude 60 fps : le point corail passe de 56 à 702 px en 32 im (sine.inOut), branches une à une, tenu 15 im |

![Six images : la barre or s'enroule en anneau, qui rejoint une carte où s'affiche le score 70](ILLUS:morph-2)

*[Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4), 0:09.23 à 0:09.83 : la barre de paiement devient la jauge de santé fiscale, sans coupe.*

**Règles de construction**

1. Un morph par temps, court, puis la forme vit. Départ sur le temps (3xtihor-0f6911 : 0 im d'écart), transformation de 3 à 15 im (ayushunleashed-ece3e3 3 à 5, levabashidze 7 à 8, 3xtihor 12 à 15). Puis rotation lente ou dérive jusqu'au temps suivant.
2. Masque l'interpolation : rotation de 30° à un tour pendant le morph (3xtihor 30 à 45°, umangratani-57f86a 90 à 150°). Flou de mouvement sur les 2 ou 3 images rapides, puis pose avec dépassement. Une forme molle de 1 à 3 im passe ; des sommets mal appariés donnent les « formes cabossées » de raphaelaubryy-4b137e.
3. Même nombre de sommets des deux côtés (blue-clarity : 200). MorphSVGPlugin le fait ; dans After Effects, ajoute-les à la main.
4. Couleur : un fondu RVB entre deux teintes éloignées passe par une boue (#8A5CC0 chez levabashidze, #9A4BB5 puis beige chez mrtanviir-132457). Interpole en OKLCH, ou change de couleur d'un coup à l'arrivée (sudiyasa-f48ac9 vire au rose en 1 im). Voir « La palette fermée et l'accent qui a un sens ».
5. En interface, un seul conteneur en ressort amorti (ζ 0,62 à 0,90, dépassement 0,2 à 8 %). L'ancien contenu sort flou en 2 à 7 im ; le nouveau entre en cascade de 4 im (ratheejaisal-1f4538). Le pic de vitesse tombe sur le temps ou le demi-temps, pas le départ (twoclipping, daniel-haida). Exemple type du guide : « le bouton se transforme en coche » (guide Otom, p. 11).
6. Le morph a une destination. La chaîne cercle → triangle → étoile revient dans 19 vidéos ; deux lui donnent un sens : l'œil de la marque (sudiyasa) et le code forme-couleur de Kandinsky (lukasersil-0ed38e). Le ressort se mérite : samaote-5e2fc2 le garde pour le dernier geste, ligne → sourire, +21 %.

**Verdict** : à reprendre, avec une destination. Le conteneur unique et le point qui devient bouton remplacent la coupe, comme tes match cuts. La chaîne de primitives sans sujet est un cliché de showreel : termine-la sur ton logo ou ton produit.

**Quand l'utiliser** : en promo SaaS, pour la démonstration (bouton → chargement → coche, carte → barre de progression, barre → jauge) ; un conteneur tient le plan entier. En typo cinétique 1600, pour la signature : point final → logo, point → ligne → sourire (voir « L'objet relais », chapitre 4). Forme signature et ressort maison se fixent au système de design ; le morph remplace la coupe aux enchaînements. À éviter sur du texte à lire, en chaîne de plus de 4 formes sans destination, et pour la 3D (voir « La forme 3D générative », chapitre 5).

**HyperFrames (GSAP)**

```js
// Une forme par temps (tour, ressort, couleur OKLCH), puis un conteneur d'interface
// MorphSVGPlugin requis : gsap.registerPlugin(MorphSVGPlugin)
const FPS = 60, BEAT = 60 / 128, at = b => b * BEAT;   // 128 BPM : 1 temps ≈ 28 im
const F = n => n / FPS;
const hero = document.querySelector("#hero");         // <path> ; cibles cachées
const steps = [
  { shape: "#tri",    from: "#f4efe6", to: "#ff5a36" },
  { shape: "#star",   from: "#ff5a36", to: "#3134f0" },
  { shape: "#square", from: "#3134f0", to: "#f4efe6" },
];
tl.set(hero, { transformOrigin: "50% 50%", "--from": steps[0].from, "--to": steps[0].from, "--k": 0 }, 0);
steps.forEach((s, i) => {
  const t = at(13 + i);                               // départ pile sur les temps 13, 14, 15
  tl.to(hero, { morphSVG: { shape: s.shape, shapeIndex: "auto" },
                duration: F(10), ease: "power2.inOut" }, t)
    .to(hero, { rotation: "+=120", duration: F(20), ease: "back.out(1.7)" }, t)
    // couleur mélangée en OKLCH (pas de passage boueux), CSS du path :
    // fill: color-mix(in oklch, var(--from) calc(100% - var(--k) * 1%), var(--to));
    .set(hero, { "--from": s.from, "--to": s.to, "--k": 0 }, t)
    .to(hero, { "--k": 100, duration: F(10), ease: "none" }, t);
});

// Conteneur unique : taille et rayon en ressort (≈ back.out(1.0), dépassement ≈ 3 %)
const ui = (b, w, h, r) => tl.to("#shell", { width: w, height: h, borderRadius: r,
  duration: F(20), ease: "back.out(1.0)" }, at(b));
tl.set("#shell .player > *", { autoAlpha: 0 }, 0);
ui(18, 1170, 160, 80);                                // cercle → îlot (pilule)
ui(19, 1170, 470, 40);                                // îlot → lecteur
tl.to("#shell .island", { autoAlpha: 0, filter: "blur(6px)", duration: F(6), ease: "power1.in" }, at(19))
  .to("#shell .player > *", { autoAlpha: 1, duration: F(12), ease: "power2.out", stagger: F(4) }, at(19) + F(6));
```

**After Effects**

- Formes : Ellipse, Rectangle et Polystar sont paramétriques ; clic droit › Convert To Bezier Path (Convertir en tracé de Bézier). Clé sur le Path (Tracé) de A au temps, copie le Path de B, colle-le 10 im plus loin. Égalise les sommets avec l'Add Vertex Tool (outil Ajouter un sommet) et aligne le départ : Layer › Mask and Shape Path › Set First Vertex (Calque › Masque et tracé de forme › Définir le premier sommet).
- Rotation +120° en 20 im : Easy Ease (Lissage de vitesse), plus une clé à +130° vers la 8e image dans le Graph Editor (éditeur de graphiques). Motion Blur (flou de mouvement) activé.
- Couleur : AE interpole Fill Color (Couleur du fond) en RVB. Ajoute une clé intermédiaire tirée de la palette, ou passe la couleur d'un coup à l'arrivée avec Toggle Hold Keyframe (Image clé maintenue).
- Conteneur d'interface : un Rectangle, Size (Taille) et Roundness (Arrondi) animés ; clé à +3 % de la taille finale 6 im après l'arrivée, retour en 10 im. L'ancien contenu : Gaussian Blur (Flou gaussien) 0 → 8 px et Opacity (Opacité) à 0 en 6 im.
- Métaballes 2D : cercles précomposés, Effect › Blur & Sharpen › Gaussian Blur (Effet › Flou et netteté › Flou gaussien) ≈ 30 px. Puis Effect › Color Correction › Levels (Correction colorimétrique › Niveaux), canal Alpha, Input Black ≈ 120, Input White ≈ 135 : bords nets, ponts gluants.
