## Le saut du personnage (character jump, anticipation, squash and stretch, follow-through)

La mascotte se ramasse, part étirée, vole, s'écrase au contact ; ses membres arrivent après le corps. Chaque contact tombe sur un temps et change l'écran : le saut fait avancer le film. Tout s'écrit en images et en échelles : accroupi de 11 im à 1,2 × 0,75, 25 im en l'air, écrasement 1,25 × 0,7 (F).

![Une silhouette de kangourou enchaîne quatre sauts sur des arcs pointillés ; à chaque atterrissage une lettre de « Roo's » jaillit sous ses pattes et un anneau s'ouvre au sol](ILLUS:C13-saut-personnage)

*[Motion designer showreel](https://prompt-motion.com/kangaroohere-b10f8d), 0:00.33 à 0:01.83 : quatre sauts de 24 im ; à chaque atterrissage (f32, f56, f80, f104), une lettre jaillit et un anneau s'ouvre.*

**Quand l'utiliser** : accroche (entrée du héros), démo où le personnage presse les boutons (P), mots qui naissent un par saut, couture par le dernier saut. Promo SaaS à mascotte, explainer. À éviter sans personnage (voir *Le geste physique sur le temps* au chapitre 9), sous 24 fps, et quand le saut ne change rien.

**L'événement** (états et minutage, 60 fps, 128 BPM : 1 temps = 28,125 im ; plan de 2 mesures, f0 = 1er temps)

| Image (locale) | Temps | Ce qu'on voit | Ce qui bouge (héros / secondaires) | Courbe | Son |
| --- | --- | --- | --- | --- | --- |
| f0 | 0 | entrée : mascotte sur le pad 1, pads 2 et 3 éteints | rien | — | nappe |
| f20-f31 | 0,7-1,1 | accroupi | corps → 1,2 × 0,75 en 11 im | power2.in | grincement |
| f31 | 1,1 | décollage | corps 0,85 × 1,28 ; bras à f35 (+4), jambes à f37 (+6) | x `none`, y sine.out | souffle |
| f56 | 2 | contact : pad 2 allumé, 1er mot | 1,25 × 0,7 tenu 2 im, ressort ζ 0,55 posé en 15 im ; anneau 10 im | y power1.in | écrasement f57 |
| f77-f113 | 2,7-4 | 2e saut, contact au 1er temps de la mesure 2 | 2e mot ; les bras se posent (2,2 Hz, ζ 0,22) | idem | f114 |
| f153-f171 | 5,4-6,1 | accroupi profond 18 im, l'arc pointillé se dessine | corps seul | power2.in | montée |
| f171-f225 | 6,1-8 | salto sur l'arc, vol de 54 im | sommet dans le cadre | y gravité | sifflement |
| f225 | 8 | sortie : contact sur le logo, la mise en page change | 1,25 × 0,7 ; le logo répond sur la même image | — | impact fort f226 |

**Règles de construction**

1. Mêmes échelles à chaque saut : 1,2 × 0,75, 0,85 × 1,28, 1,25 × 0,7 (F), entre la tuile rigide (−8 à −20 %) et la mascotte molle (35-45 % de sa hauteur) de *Le poids du personnage* au chapitre 8. Garde-fou : les proportions du personnage ne changent pas (F).
2. À rebours depuis le temps : contact = image du temps à ±1 im (chapitre 9), décollage = contact − 25 im, accroupi = décollage − 11 im (F). L'anticipation dure plus que le geste : 6 à 15 im contre 1 à 3 (chapitre 9).
3. Le corps mène : bras +4 im, jambes +6 im ; après l'arrêt, les bras se posent à 2,2 Hz, ζ 0,22 (F, relance 2). Taille et position rebondissent, jamais l'opacité ni la couleur (F).
4. Chaque saut atterrit sur quelque chose qui change ; sinon on le coupe (P). L'impact sort du corps sur l'image du contact, 3 à 10 im (chapitre 8).
5. Arc : x linéaire, y en gravité (chapitre 9). Le sommet reste dans le cadre (P, relance 3 : apex de 0,55 à 0,36 m). Personnage d'au moins 10 % de la hauteur (chapitre 8).

**Variantes**

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Mascotte qui écrit le logo | [Motion designer showreel](https://prompt-motion.com/kangaroohere-b10f8d), 0:00.25 | sauts de 24 im, lettre en ressort +39 % posée en 15 im ; hors grille, le son suit le geste |
| Saut qui sort du cadre | [Anime maid dance showreel](https://prompt-motion.com/topi-003-b0e12c), 0:12.40 | monte de ≈ 60 % H en 14 im, flash blanc f768 sur le temps 32 |
| Accroupi, salto, frappe au sol | [Fiery samurai kata](https://prompt-motion.com/chrisjdimarco-f068db), 0:06.98 | accroupi ≈ 10 im, vol de 44 im à ≈ 15 % H, flash à l'impact |
| Préparer au demi-temps, partir sur le temps | [Type, form, space showreel](https://prompt-motion.com/web3wesley-7bb108), 0:01.10 | écrasé ×0,59 en 6 im, tenu 4 im, envol sur le temps |
| Atterrissage dans la poussière | [Scrabble tile character story](https://prompt-motion.com/anilraok-eff262), 0:23.40 | contacts à −12 % puis −20 % de hauteur, poussière ≈ 10 im |

**Verdict** : à reprendre pour toute mascotte, si chaque contact change l'écran.

**Ligne de SHOTLIST**

```text
4 Mascotte | f450-f675 (mesures 5-6) | posée sur le pad 1 → posée sur le logo, nouvelle mise en page
raison : trois fonctions, une par saut | héros : la mascotte ; mots et pads répondent
repères : accroupis f470, f527, f603 ; contacts f506, f563, f675 (temps 2, mesure 6, mesure 7)
son : grincement, souffle, écrasement 1 im après chaque contact
couture : le dernier contact est la coupe ; le logo hérite de l'écrasement
```

**HyperFrames (GSAP)**

```js
const FPS = 60, BPM = 128, BEAT = 60 / BPM;
const at = (bar, beat = 0) => ((bar - 1) * 4 + beat) * BEAT;
const F = n => n / FPS, snap = t => Math.round(t * FPS) / FPS;
// ressort amorti (ζ, durée, Hz ; par défaut repos à 1 % en fin de durée)
const spring = (z, dur, hz = 4.6 / (z * dur) / (2 * Math.PI)) => p => {
  if (p >= 1) return 1;
  const w = 2 * Math.PI * hz, wd = w * Math.sqrt(1 - z * z), t = p * dur;
  return 1 - Math.exp(-z * w * t) * (Math.cos(wd * t) + (z * w / wd) * Math.sin(wd * t));
};
const H = 1080;   // x, angles des membres : à mesurer sur le dessin du personnage
tl.set("#hero", { transformOrigin: "50% 100%", x: 0, y: 0, scaleX: 1, scaleY: 1 }, 0)
  .set(["#arms", "#legs", "#armsFT"], { rotation: 0 }, 0)
  .set(".word", { autoAlpha: 0, scale: 0 }, 0);
function hop(i, land, x1, crouch = 11, air = 25, apex = 0.15) {   // sommet ≈ 15 % H (chrisjdimarco)
  const go = land - F(air);
  // anticipation 1,2 × 0,75, décollage étiré 0,85 × 1,28 (F)
  tl.to("#hero", { scaleX: 1.2, scaleY: 0.75, duration: F(crouch), ease: "power2.in" }, go - F(crouch))
    .set("#hero", { scaleX: 0.85, scaleY: 1.28 }, go)
    .to("#hero", { scaleX: 1, scaleY: 1, duration: F(12), ease: "sine.out" }, go + F(1))
  // arc : x linéaire, y en gravité, sommet à mi-vol
    .to("#hero", { x: x1, duration: F(air), ease: "none" }, go)
    .to("#hero", { y: -apex * H, duration: F(air / 2), ease: "sine.out" }, go)
    .to("#hero", { y: 0, duration: F(air / 2), ease: "power1.in" }, go + F(air / 2))
  // chevauchement : bras +4 im, jambes +6 im, reposés au contact
    .to("#arms", { rotation: -35, duration: F(8), ease: "power2.out" }, go + F(4))
    .to("#legs", { rotation: 20, duration: F(8), ease: "power2.out" }, go + F(6))
    .to(["#arms", "#legs"], { rotation: 0, duration: F(6), ease: "power2.out" }, land)
  // contact sur l'image du temps : 1,25 × 0,7 tenu 2 im, ressort ζ 0,55 posé en 15 im
    .set("#hero", { scaleX: 1.25, scaleY: 0.7 }, land)
    .to("#hero", { scaleX: 1, scaleY: 1, duration: F(15), ease: spring(0.55, F(15)) }, land + F(2))
  // continuité : bras à 2,2 Hz, ζ 0,22 (départ explicite = déterministe)
    .fromTo("#armsFT", { rotation: 18 }, { rotation: 0, duration: 1.5, ease: spring(0.22, 1.5, 2.2), immediateRender: false }, land)
  // ce qui change : le mot naît en ressort, l'opacité ne rebondit pas
    .set(`#word${i}`, { autoAlpha: 1 }, land)
    .to(`#word${i}`, { scale: 1, duration: F(17), ease: "back.out(2.2)" }, land);
}
hop(1, snap(at(5, 2)), 300);
hop(2, snap(at(6)), 600);
hop(3, snap(at(7)), 1000, 18, 54, 0.33);   // salto : accroupi 18 im, vol 54 im (F), sommet 0,33 H (levabashidze)
```

**After Effects**

- Ancrage aux pieds avec le Pan Behind (Anchor Point) Tool (outil Déplacement arrière). Scale (Échelle) sans Constrain Proportions (Conserver les proportions) : 120/75, 85/128, 125/70 %, poses d'une image en Animation › Toggle Hold Keyframe (Activer/désactiver l'image clé maintenue).
- Position › Separate Dimensions (Séparer les dimensions) : X en Linear (Linéaire), Y en Easy Ease (Lissage de vitesse) au sommet, vitesse maximale au contact dans le Speed Graph (graphe de vitesse).
- Bras et jambes enfants du corps par Parent & Link (Parent et lien) ; décaler leurs images clés de 4 et 6 im avec Alt (Option sur Mac) + flèche droite.
- Repos des bras : expression sur Rotation, `n=marker.numKeys; while(n>0&&marker.key(n).time>time) n--; if(n==0) value; else {t=time-marker.key(n).time; w=2*Math.PI*2.2; z=0.22; value+18*Math.exp(-z*w*t)*Math.cos(w*Math.sqrt(1-z*z)*t)}`, un marqueur de calque par contact.
- Composition Marker (marqueur de composition) tous les 28,125 im ; contact sur l'image arrondie du temps. Motion Blur (Flou de mouvement) activé.

**Contrôle** : rendre f0, f31, f44 (sommet), f56, et des bandes de 8 images f52-f59 et f221-f228 autour des contacts. On regarde : écrasement sur l'image du temps, mot ou pad qui change sur la même image, bras en retard, sommet dans le cadre. Pelure d'oignon f113-f171 : les bras oscillent de moins en moins (F). Audit numérique (F) : lire l'échelle du corps à f30, f31, f56, f225.
