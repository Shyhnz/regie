## Le nuage de particules qui prend forme (particle swarm into text or logo, point-cloud morph, flow field, disintegration)

Des milliers de points suivent un champ (bruit de curl, tourbillon, nuée), puis convergent vers une cible qui a un sens : mot, chiffre, logo, globe. À l'inverse, le mot se défait en poussière soufflée. La forme naît du chaos en 0,25 à 0,8 s : une révélation. Ici, la cible compte ; pour un objet 3D qui change de forme, voir le chapitre 5, « La forme 3D générative : nuage de points, filaire et métaballes ». Vue dans 50 vidéos, dont 48 notées 4 ou 5.

![Huit images : le losange rouge se défait en points, un tourbillon envahit le cadre, puis les points se rangent en ORDER, souligné de rouge](ILLUS:nuage-forme-1)

*[Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:06.10 à 0:07.07 : 4 096 points suivent un champ de bruit de curl pendant un temps, se rangent en ORDER, et le soulignement part sur le temps 15.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Chaos → mot | [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:06.67 | Étude 60 fps : dispersion 32 im power2.out dès le temps 13, convergence 14 im power1.inOut, mot net 2 im avant le temps 15 |
| Anneau → mot sur le 1er temps | [Type, form, space showreel](https://prompt-motion.com/web3wesley-7bb108), 0:10.77 | Étude 60 fps : pelote, bande, puis TIME (20 % H) en 14 im à 30 fps, expo.inOut, du temps 23 au 1er temps de la mesure 7 |
| Nuage → chiffre | [Kinetic type showreel](https://prompt-motion.com/itsuki-dev-10942d), 0:07.72 | 6 000 points → « 2026 » de 35 % H en ≈ 35 im ease-out ; maintien scintillant 33 im |
| Nuée → globe | [Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), 0:20.70 | les oiseaux se posent sur une sphère et deviennent sa trame de points en 48 im ; « a world » sur le temps (étude 60 fps) |
| Logo → matière du produit | [org2html product showreel](https://prompt-motion.com/kyonax-on-tech-aabc1d), 0:01.47 | logo désagrégé de haut en bas en 14 im, glyphes or déposés ligne à ligne en code ; 0,63 s en cloche |
| Logo → chiffre | [Nohandslabs brand promo](https://prompt-motion.com/robvjourney-ce3e1a), 0:05.05 | les carrés de la main pixelisée traversent l'écran et se rangent en « 95% » (30 % H) en ≈ 27 im, ease-in-out |
| Comète → ligne d'interface | [Product intro synced to music](https://prompt-motion.com/bogdandragomir-35e024), 0:03.10 | enveloppe et ≈ 200 points montent en courbe en 33 im ease-out, puis deviennent une ligne de liste en 6 im |
| Mot soufflé | [Particle sphere motion reel](https://prompt-motion.com/blue-clarity-ef56d0), 0:07.93 | sur la grosse caisse, CLAUDE se défait de gauche à droite en ≈ 10 im ; points étirés en traits horizontaux, ease-in |

![Huit images : le logo pixelisé se défait en glyphes or, qui glissent en diagonale puis se déposent en code source dans un éditeur](ILLUS:nuage-forme-2)

*[org2html product showreel](https://prompt-motion.com/kyonax-on-tech-aabc1d), 0:01.43 à 0:02.13 : la marque devient la matière première du produit, le texte.*

**Règles de construction**

1. La matière vit (au moins un temps), converge, puis tient. Convergence de 14 à 50 im à 60 fps (0,25 à 0,8 s) : 14 im (grace-sunnyy), 27 (robvjourney), 35 (itsuki-dev), 49-50 (jasonzhou1993, blue-clarity). Courbe en cloche (power1.inOut) ou ease-out ; les traînées s'allongent au pic de vitesse (raphaelaubryy).
2. Calage, d'après les vidéos animées sur la musique : départ sur un temps, mot lisible sur le temps suivant ou 1 à 3 im avant. ORDER est net 2 im avant le temps 15 ; TIME se lit 3 im avant le 1er temps ; CLAUDE part sur la grosse caisse de 6,513 s. Contre-exemples hors grille : SWARM (zheke, étude 60 fps), OPUS (raphaelaubryy).
3. Lisible : mot de 20 à 35 % de la hauteur, points clairs et denses sur fond sombre, tenu 30 à 35 im (≈ 0,5 s) en scintillant. Tenu 0,3 s (motiondsgnr, vanshwtfff), peu contrasté (web3wesley) ou sous 18 % H (zheke, johnsavage-ai), il se lit mal. Pour finir net, le grain se solidifie en lettres pleines sur le demi-temps (topi-003-9ca6b5).
4. Ordre de lecture : les lettres se forment ou se défont de gauche à droite, 2 à 4 im par lettre. C → E en 12 à 14 im (blue-clarity, topi-003-9ca6b5), 3 à 4 im par lettre (lukasersil, shneural).
5. Souffler, c'est accélérer : traînées horizontales en ease-in sur 10 à 21 im, lancées sur un temps (blue-clarity, jasonzhou1993), puis coupe sur le temps suivant.
6. La cible et la matière disent le sujet : nuée → monde, logo → code, bruit débruité en IMAGINE avec un compteur DENOISING STEP 49 → 0 (kloss-xyz). À l'inverse, 9 vidéos écrivent MOTION ou CLAUDE et 7 tournent en galaxie ou vortex sans motif : jugés génériques ou clichés.

**Verdict** : à adapter. Garde la convergence quand la cible est ton logo, ton chiffre clé ou ta donnée, et que la matière vient du produit (pixels, glyphes, points). C'est la version numérique de ta « feuille qui devient logo » ; oublie MOTION en particules et la galaxie.

**Quand l'utiliser** : en promo SaaS, une seule fois : signature (particules → logo), preuve (nuage → chiffre clé), ou passage de la marque au produit (logo → code, enveloppe → ligne de liste). En showreel et en explainer IA ou données : révélation de chapitre. Matière choisie à la direction artistique, calage réglé à la construction du plan. À éviter en typo cinétique 1600 au-delà d'1 s, pour un petit texte, et si la matière ne dit rien du sujet.

**HyperFrames (GSAP)**

```js
// Nuage seedé : champ tourbillonnant au temps 13, ORDER net au temps 15, soufflé au temps 16
const FPS = 60, F = n => n / FPS;
const BEAT = 60 / 128, at = b => b * BEAT;  // 128 BPM : 1 temps = 28,125 im
const cv = document.querySelector("#swarm"), ctx = cv.getContext("2d"), W = cv.width, H = cv.height;
let seed = 42; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;  // aléatoire seedé
await document.fonts.ready;  // setup async : publier window.__timelines[id] = tl à la fin
const off = new OffscreenCanvas(W, H), o = off.getContext("2d");
o.font = `800 ${0.23 * H}px Manrope`; o.textAlign = "center"; o.textBaseline = "middle";
o.fillText("ORDER", W / 2, H / 2);  // mot de 23 % H, comme dans l'étude
const px = o.getImageData(0, 0, W, H).data, P = [];
for (let y = 0; y < H; y += 6) for (let x = 0; x < W; x += 6)  // une cible tous les 6 px
  if (px[(y * W + x) * 4 + 3] > 128) P.push({ tx: x, ty: y, x: rnd() * W, y: rnd() * H, d: 0.35 * x / W });
const S = { t: 0, open: 0, conv: 0, blow: 0 }, io = gsap.parseEase("power1.inOut");
const cl = v => Math.min(1, Math.max(0, v));
function draw() {  // tout dépend de S : sûr au saut d'image
  ctx.clearRect(0, 0, W, H); ctx.fillStyle = "#F2EDE4";
  for (const p of P) {
    const a = 3 * (Math.sin(p.y * 0.006 + S.t) + Math.cos(p.x * 0.004 - S.t));  // champ pseudo-curl
    const fx = p.x + Math.cos(a) * 0.18 * H * S.open, fy = p.y + Math.sin(a) * 0.18 * H * S.open;
    const k = io(cl((S.conv - p.d) / 0.65));  // lettres de gauche à droite
    const w = cl((S.blow - p.d) / 0.65) ** 2;  // souffle en ease-in, même ordre
    ctx.fillRect(fx + (p.tx - fx) * k + 0.6 * W * w, fy + (p.ty - fy) * k, 3 + 16 * w, 3);  // traînée
  }
}
const u = { onUpdate: draw };
tl.set(cv, { autoAlpha: 0 }, 0).set(cv, { autoAlpha: 1 }, at(13))
  .to(S, { t: 6, duration: at(4), ease: "none", ...u }, at(13))  // le champ tourne
  .to(S, { open: 1, duration: F(32), ease: "power2.out", ...u }, at(13))  // dispersion 32 im
  .to(S, { conv: 1, duration: F(20), ease: "none", ...u }, at(15) - F(22)) // 13 im par point, net 2 im avant le temps
  .to(S, { blow: 1, duration: F(20), ease: "none", ...u }, at(16));  // soufflé sur le temps 16
```

**After Effects**

- Mot soufflé : Layer › Pre-compose (Calque › Précomposer), puis Effect › Simulation › Shatter (Effet › Simulation › Éclatement). View (Affichage) sur Rendered (Rendu), Pattern (Motif) Squares, Repetitions (Répétitions) 80, Physics › Gravity Direction (Direction de la gravité) 90° (vers la droite).
- Ordre gauche → droite : Gradient Layer (Calque de dégradé) = solide avec Effect › Generate › Gradient Ramp (Générer › Dégradé), noir à gauche ; Invert Gradient si l'éclatement part de la droite. Shatter Threshold (Seuil d'éclatement) 0 → 100 % en 10 im, à partir du marqueur du temps.
- Convergence : dupliquer la précomposition et appliquer Layer › Time › Time-Reverse Layer (Calque › Temps › Inverser le temps du calque). Le souffle ease-in devient une arrivée ease-out ; finir 1 à 3 im avant le marqueur du temps suivant.
- Vie du nuage : Effect › Simulation › CC Particle World, Physics › Animation en Vortex, puis fondu de 4 à 6 im vers le calque inversé. Effect › Time › Echo (Temps › Écho) pour les traînées.
- Pour des milliers de points qui visent des lettres : rendre la séquence dans HyperFrames (PNG avec alpha), ou le plug-in payant Trapcode Form. Scintillement de la tenue : expression wiggle(10, 12) sur Opacity (Opacité).
