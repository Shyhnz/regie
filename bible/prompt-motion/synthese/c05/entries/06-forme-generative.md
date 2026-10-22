## La forme 3D générative : nuage de points, filaire et métaballes (point-cloud morph, wireframe mesh, metaballs, dotted globe, shatter and reassemble)

Un objet 3D calculé en code sert de héros et change d'état sur les temps : nuage de points, maillage filaire, métaballes, globe en trame de points, triangles qui éclatent puis se réassemblent. Il donne un sujet visuel à une idée abstraite (données, IA, réseau). 9 des 17 vidéos notées 5 du corpus en ont un ; mais la chaîne sphère → tore → nœud, sans sujet, revient dans 14 vidéos. Vue dans 35 vidéos, dont 34 notées 4 ou 5.

![Huit images : l'octaèdre rouge éclate en 128 triangles qui tournent en nuage, puis les triangles se resserrent et l'octaèdre se reforme, net, au centre de l'interface de logiciel 3D](ILLUS:forme-generative-1)

*[Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:04.63 à 0:05.37 : éclatement sur un temps, réassemblage au temps suivant ; l'interface affiche SHATTER puis REASSEMBLE.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Éclatement puis réassemblage | [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:04.70 | 128 triangles dispersés ×3,2 en 8 im power1.out sur le temps, regroupés en 8 im power3.out au suivant (étude 60 fps) |
| Éclats qui respirent | [Motion designer showreel](https://prompt-motion.com/zaqailo-212ad3), 0:08.00 | 300 éclats : rayon ×1,6 en 33 im ease-out, implosion en 4 im ease-in, pointes au demi-temps |
| Nuage de points qui change de forme | [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 0:08.00 | 1 400 points : sphère née en 17 im (0 → 69 % H) sur le temps, morphs de 18 im centrés sur les temps (étude 60 fps) |
| Balayage d'état | [Motion designer showreel](https://prompt-motion.com/zaqailo-212ad3), 0:07.60 | une bande monte en 18 im, linéaire : points devant, facettes ombrées derrière |
| Filaire qui pousse en pivotant | [Motion designer showreel](https://prompt-motion.com/teslachartz-c58b32), 0:05.50 | tore filaire de 4 % à 55 % H en 12 im ease-out, en pivotant de 90° sur l'axe vertical |
| Métaballes qui fusionnent | [Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e), 0:06.70 | 3 volumes → sphère chromée en 18 im power2.inOut, au quart de temps, puis poussée de 31 im (étude 60 fps) |
| Logo qui passe en 3D | [Engraving-style Claude ad](https://prompt-motion.com/lexnlin-038035), 0:06.60 | sphère → astérisque extrudé de 256 à 943 px en 23 im power3.out, puis réduit à un point en 4 im (étude 60 fps) |
| Globe en trame de points | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:02.07 | calotte de 140 % H montée en 21 im power2.out pile sur le drop, arcs vers le compteur (étude 60 fps) |

![Six images : sur la sphère de points, une bande monte du bas vers le haut ; derrière elle, la sphère devient un polyèdre à facettes orange, rouge et bleu](ILLUS:forme-generative-2)

*[Motion designer showreel](https://prompt-motion.com/zaqailo-212ad3), 0:07.57 à 0:07.93 : le changement de rendu a une direction, donc il se lit.*

**Règles de construction**

1. Chaque changement d'état tombe sur un temps. Le morph de 18 im est centré sur le temps ; l'éclatement part sur le temps, le réassemblage s'amorce au suivant. Contre-exemples : les métaballes sans calage de [3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155), le nœud 4 im après le temps de [Claude motion design reel](https://prompt-motion.com/ghinaiya-nirmal-5d8fec).
2. Naissance depuis un point en 12 à 17 im, jusqu'à 45-70 % de la hauteur. L'octaèdre de [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61) naît en back.out(1.4), +8,6 %, le seul dépassement de la vidéo (étude 60 fps).
3. Dispersion lente, effondrement rapide : 33 im pour s'ouvrir, 4 im pour imploser ; 4 im pour réduire l'astérisque 3D à un point. Ce point sert de relais à la transition (chapitre 4, « La compression : en point ou en ligne, puis l'éclosion »).
4. Un changement de rendu a une direction : bande ou ligne linéaire qui traverse l'objet en 18 im. Sa traversée du centre tombe sur le temps (f360,5 chez [Motion designer showreel](https://prompt-motion.com/teslachartz-c58b32)).
5. Tenir chaque forme deux temps ou plus (≈ 1 s). À un temps par forme (0,5 s), le nuage de [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d) est jugé « à peine lisible ». Profondeur sans lumière : points chauds devant, froids derrière ([Particle sphere motion reel](https://prompt-motion.com/blue-clarity-ef56d0)).
6. La forme porte le sujet : l'astérisque est le logo, le globe lance le compteur de clics, trois objets fusionnent en un. La chaîne sphère → tore → cube sans sujet est jugée cliché ([Shape and dot motion showreel](https://prompt-motion.com/umangratani-57f86a), [Claude motion reel](https://prompt-motion.com/jasonzhou1993-8595e0)).

**Verdict** : à adapter. Garde l'objet génératif quand il est le logo, la donnée ou le produit (triangles → logo, globe → compteur). Remplace la démo sphère → tore → nœud par une seule forme liée au sujet. Le tore filaire est proche de ton tunnel néon : donne-lui un rôle.

**Quand l'utiliser** : en showreel, en explainer de données, IA ou réseau, et en 3D. En promo SaaS, une fois, pour rendre visible une idée abstraite (réseau mondial → globe) ou pour la signature (éclats → logo). Fonction : accroche de chapitre, transition par effondrement en point, chute ou logo final. Choix à la direction artistique (y a-t-il un objet héros ?), réglage à la construction du plan. À éviter en typo cinétique 1600 au-delà de 1 à 2 s, et partout où la forme ne dit rien du sujet.

**HyperFrames (GSAP)**

```js
// Nuage de 1 400 points (canvas 2D) : naît sur le temps, sphère → tore, éclate puis se reforme
const FPS = 60, f = n => n / FPS;
const BEAT = 60 / 120, at = b => b * BEAT;     // 120 BPM : 1 temps = 30 im
const cv = document.querySelector("#cloud"), ctx = cv.getContext("2d");
const N = 1400, W = cv.width, H = cv.height, R = 0.345 * H;   // diamètre final 69 % H
const P = Array.from({ length: N }, (_, i) => {   // sphère de Fibonacci : aucun aléatoire
  const y = 1 - 2 * (i + 0.5) / N, r = Math.sqrt(1 - y * y), a = i * 2.39996;
  const u = (i / N) * Math.PI * 42, v = i * 2.39996, q = 0.7 + 0.3 * Math.cos(v);
  return { s: [r * Math.cos(a), y, r * Math.sin(a)], t: [q * Math.cos(u), 0.3 * Math.sin(v), q * Math.sin(u)],
           k: Math.abs(Math.sin(i * 12.9898)) };    // écart d'éclatement propre à chaque point
});
const S = { size: 0, morph: 0, spin: 0, burst: 0 };
function draw() {                                // redessine tout à partir de S : sûr au saut d'image
  ctx.clearRect(0, 0, W, H);
  const c = Math.cos(S.spin), sn = Math.sin(S.spin);
  for (const p of P) {
    const [x0, y, z0] = p.s.map((v, j) => v + (p.t[j] - v) * S.morph);
    const x = x0 * c - z0 * sn, z = x0 * sn + z0 * c, d = 3 / (3 + z);   // perspective
    const g = R * S.size * d * (1 + S.burst * (1 + p.k));
    ctx.fillStyle = z < 0 ? "#F4EDE4" : "#5B6BFF";      // devant chaud, derrière froid
    ctx.fillRect(W / 2 + x * g, H / 2 + y * g, 3 * d, 3 * d);
  }
}
const T0 = at(16);
tl.to(S, { spin: Math.PI * 2, duration: at(6), ease: "none", onUpdate: draw }, T0)
  .to(S, { size: 1, duration: f(17), ease: "power1.out", onUpdate: draw }, T0)            // naissance
  .to(S, { morph: 1, duration: f(18), ease: "sine.inOut", onUpdate: draw }, at(18) - f(9)) // tore centré sur le temps 18
  .to(S, { burst: 0.6, duration: f(8), ease: "power1.out", onUpdate: draw }, at(20))       // éclatement : nuage sur ≈ 85 % L
  .to(S, { burst: 0, duration: f(8), ease: "power3.out", onUpdate: draw }, at(21));        // réassemblage
```

**After Effects**

- Globe en trame de points : une grille de points (Shape Layer (calque de forme) Ellipse + Add › Repeater (Ajouter › Répéteur) deux fois), Pre-compose (précomposer), puis Effect › Perspective › CC Sphere (Effet › Perspective › CC Sphere), Rotation Y en Linear (linéaire).
- Éclatement : Effect › Simulation › Shatter (Éclatement) sur le logo précomposé, motif en triangles, départ sur le temps ; dispersion visible en 8 im. Pour le réassemblage, précomposer puis Layer › Time › Time-Reverse Layer (Calque › Temps › Inverser le temps du calque).
- Métaballes : cercles dans un seul calque de forme, Effect › Blur & Sharpen › Gaussian Blur (Flou gaussien) à 30-40, puis Effect › Matte › Simple Choker (Cache › Étrangleur simple) pour durcir le bord. Fusion en 18 im, Easy Ease (lissage de vitesse), centrée sur un marqueur de temps.
- Filaire → plein : rendre l'objet deux fois (filaire et ombré, depuis Blender ou HyperFrames), empiler, et révéler l'ombré par Effect › Transition › Linear Wipe (Balayage linéaire) en 18 im, images clés linéaires, milieu sur le temps.
