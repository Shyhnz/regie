## Le mot clé plein cadre (keyword slam, full-frame keyword, calibrated push-in, punch-in)

Le mot qui porte la phrase occupe seul l'écran, pile sur le temps fort. L'œil reçoit le choc et la musique le confirme : le mot prend du poids sans autre effet. Dans les meilleures vidéos, il arrive à ×1,4 à ×1,7 et se pose en 2 à 11 images (*Le claquement d'échelle*, chapitre 3).

![Aplat rouge vide, puis MOTION énorme et flou qui se pose net avec une trace en contour, tient, grossit un peu, et la coupe tombe sur du noir](ILLUS:C07-mot-cle-plein-cadre)

*[Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:01.78 à 0:02.35 : 6 im de rouge vide, « MOTION » claque sur le temps 4 (f113) à ×1,42, se pose en 11 im, tient, pousse de 3,6 % et la coupe du temps 5 (f141) l'emporte.*

**Quand l'utiliser** : fonction « mot clé » ou « accroche ». En typo cinétique 1600, c'est le mot fort sur le temps fort ; en promo SaaS, le bénéfice, le chiffre ou le nom du produit. Place : un premier temps de mesure, souvent le drop de la mesure 2 (*Le temps fort*, chapitre 9). Un mot par phrase ou par mesure, jamais sur chaque mot d'une rafale ni sur une ligne de plus de 3 mots. Deux routes : le **claquement** (le mot entre trop grand) ou la **poussée calibrée** (la caméra va du texte au mot et le cadre seul, *La poussée vers le sujet*, chapitre 5).

**L'événement** (états et minutage, 60 fps, 128 BPM : 1 temps = 28,125 im ; locale f0 = le temps fort)

| Image (locale) | Temps | Ce qu'on voit | Ce qui bouge (héros / secondaires) | Courbe | Son |
| --- | --- | --- | --- | --- | --- |
| f−6 | −6 im | fin du plan d'avant : aplat vide, immobile | rien | — | la batterie se tait |
| f0 | temps 1 | état d'entrée : mot à ×1,6, flou 24 px, il déborde | héros : échelle seule | power2.out | grosse caisse en f1 |
| f2 | +2 im | mot encore flou | trace en contour à 108 %, 50 % | — | — |
| f11 | 0,18 s | mot net, posé à ×1, entier | la trace s'éteint | — | queue du coup |
| f11-f19 | | tenue : on lit le mot | rien | — | — |
| f19 | | | héros : +3,6 % | power2.in, 8 im | montée |
| f28 | temps 2 | état de sortie : coupe en pleine vitesse | le plan suivant arrive lancé | coupe | coup suivant |

Valeurs de l'étude 60 fps de grace-sunnyy : ×1,42 à la 1re image, power2.out 11 im, flou 24 → 0, poussée +3,6 % sur 8 im, coupe f141.

**Règles**

1. **Un seul héros.** Le mot est seul au cadre ; le reste attend, descend à 40 % ou ne bouge pas (F). Deux accessoires au plus, éteints avec l'échelle : flou de zoom, trace, secousse de 0,4 à 1 % du cadre (*Le claquement d'échelle*). Pas de frange RVB systématique.
2. **Échelle et courbe.** Slam : départ ×1,4 à ×1,7, ease-out, 2 à 4 im pour un mot nu, 11 à 14 im avec flou. Punch discret : ×1,1 à ×1,2. Tampon : ease-in de 5 à 7 im qui s'arrête sec (*Le claquement d'échelle*).
3. **Le mot reste entier.** Le débordement dure 1 à 2 im au plus. Posé, le mot garde au moins 6 % de marge, soit 88 % de la largeur au plus (*La poussée vers le sujet*). Les autres mots sortent en entier : jamais un mot coupé par le bord.
4. **Calage.** En ease-out, la plus grande image tombe sur le coup ; en ease-in, l'arrivée. L'image mène le son d'une image (F ; 1 à 3 im selon *Couper en avance, atterrir sur le temps*, chapitre 9). Poussée calibrée : posée 0 à 2 im avant le temps.
5. **Poussée calibrée.** ×1,35 à ×2,3 en 0,3 à 0,9 s, power2 ou power3.inOut. Flou obligatoire au-delà de ×1,5 en moins de 10 im (*La poussée vers le sujet*). Le cadre final se calcule sur la boîte du mot, jamais à l'œil.
6. **Rareté, puis vie.** Un slam par phrase ou par mesure : partout, il devient l'accent répété (*Le même accent répété à l'identique*, chapitre 11). Après l'impact, pas d'image figée : poussée de +3,6 % jusqu'à la coupe. Le « fais claquer » de F (1,0 → 1,08 → 1,0 en 6 im, pic sur le temps) sert à relancer un mot déjà à l'écran.

**Variantes**

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Slam avec flou et trace | [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:01.88 | ×1,42 → 1, power2.out 11 im, flou 24 → 0 ; coupe +0,5 im après le temps 4 (étude 60 fps) |
| Plein cadre sur aplat, chute comique | [Recursion explained in genres](https://prompt-motion.com/emollick-8661a8), 0:02.00 | mot ≈ 80 % L et 45 % H, ≈ 8 % trop grand, posé en 2 im (30 fps), tenu 15 im, coupe sèche |
| Tampon qui accélère | [Dubz Up motion showreel](https://prompt-motion.com/devius-maximus-beab45), 0:14.48 | 2,6 → 1,0 en 7 im ease-in, arrêt sec sur l'attaque du mot dit |
| Recul depuis l'intérieur des lettres | [Claude motion designer showreel](https://prompt-motion.com/crazyalphaaa-bc7e75), 0:03.50 | ≈ ×3,5 → ×1 en 11 im expo-out ; mot posé à 71 % L, tenu 8 im |
| Poussée qui coupe le mot (contre-exemple) | [Shape and dot motion showreel](https://prompt-motion.com/umangratani-57f86a), 0:02.80 | ×1,5 sur le temps ; « FRAME » reste coupé en « FR » 0,45 s |

**Ligne de SHOTLIST**

```text
Plan 2 · Mot clé « LIVE » · locale f0 = temps 1 de la mesure 3 = globale f225 (fin f253)
Entrée : aplat accent vide 6 im (f219-f224). Sortie : « LIVE » posé à 88 % L, ×1,036, coupe en mouvement.
Raison : le bénéfice en un mot, sur le drop.
Héros : le mot, échelle seule. Secondaire : trace en contour (f227-f236).
Repères (globaux) : coup f225 · posé f236 · poussée f244-f252 · coupe f253.
Son : grosse caisse f226 · silence f219-f224.
Couture : coupe franche sur le temps, le plan suivant entre déjà lancé.
```

**HyperFrames (GSAP)**

```js
// Mot clé plein cadre : claquement sur le temps 1 de la mesure 3, tenue, poussée, coupe
const FPS = 60, BPM = 128, BEAT = 60 / BPM;
const at = (bar, beat = 0) => ((bar - 1) * 4 + beat) * BEAT;
const fr = n => n / FPS;                          // images → secondes
const snap = t => Math.round(t * FPS) / FPS;      // chaque temps arrondi seul, depuis l'image 0
const HIT = snap(at(3)), CUT = snap(at(3, 1));    // f225 → f253 : un temps

// État d'entrée : aplat vide, mot et trace cachés
tl.set("#kw, #kw-ghost", { autoAlpha: 0 }, 0)
  .set("#kw", { autoAlpha: 1, scale: 1.6, filter: "blur(24px)" }, HIT)
  // La plus grande image tombe sur le coup, posée en 11 im
  .to("#kw", { scale: 1, filter: "blur(0px)", duration: fr(11), ease: "power2.out" }, HIT)
  .set("#kw-ghost", { autoAlpha: 0.5, scale: 1.08 }, HIT + fr(2))
  .to("#kw-ghost", { autoAlpha: 0, duration: fr(8), ease: "power1.out" }, HIT + fr(2))
  // Pas d'image figée : +3,6 % en power2.in sur les 8 im avant la coupe
  .to("#kw", { scale: 1.036, duration: fr(8), ease: "power2.in" }, CUT - fr(8))
  .set("#shot-kw", { autoAlpha: 0 }, CUT);

// Route 2 : poussée calibrée de la phrase vers le mot (mesure faite à l'échelle 1, polices prêtes)
const W = 1920, H = 1080, FILL = 0.88, MAX = 2.3; // 6 % de marge de chaque côté
const r = document.querySelector("#phrase .key").getBoundingClientRect();
const s = Math.min(MAX, (W * FILL) / r.width);
const LAND = snap(at(5)) - fr(2), PUSH = fr(26); // posée 2 im avant le temps
tl.set("#cam", { transformOrigin: "0 0", x: 0, y: 0, scale: 1 }, 0)
  .to("#phrase .w:not(.key)", { autoAlpha: 0, duration: fr(13), ease: "power2.in" }, LAND - PUSH) // sortie 2 fois plus courte (F)
  .to("#cam", { scale: s, x: W / 2 - (r.x + r.width / 2) * s, y: H / 2 - (r.y + r.height / 2) * s,
                duration: PUSH, ease: "power3.inOut" }, LAND - PUSH);
// Pas de will-change: transform sur le texte zoomé : il serait pixelisé.
```

**After Effects**

- Slam : Scale (Échelle) 160 → 100 % sur 11 im, 1re image clé sur le marqueur du temps fort. Speed Graph (graphe de vitesse) : départ à vitesse maximale, Influence (influence) d'arrivée ≈ 70 % (≈ power2.out).
- Flou : Effect › Blur & Sharpen › Radial Blur (Effet › Flou et netteté › Flou radial), Type Zoom, Amount (Quantité) 24 → 0 sur les mêmes 11 im.
- Trace : Edit › Duplicate (Édition › Dupliquer), copie en Stroke (contour) seul, Scale 108 %, Opacity (Opacité) 50 → 0 % de +2 à +10 im.
- Poussée calibrée : Layer › Pre-compose (Calque › Précomposer), Anchor Point (point d'ancrage) au centre du mot avec le Pan Behind Tool (outil Déplacer l'arrière-plan, Y), Scale en Easy Ease (Lissage de vitesse, F9), finie 2 im avant le marqueur ; Motion Blur (flou de mouvement) activé.
- Vérifier le cadre final avec Title/Action Safe (zones de sécurité) : mot entier, marge d'au moins 6 %.

**Contrôle** : rendre f−6, f0, f1, f2, f11, f19, f27, f28 (images globales relatives au début du plan), puis la bande de 8 images f0-f7. On regarde : f0 tombe sur l'image du temps et le son suit d'une image ; le débordement ne dure pas plus de f0-f1 ; à f11 le mot est net, entier, marge ≥ 6 % ; aucun autre accent n'est visible ; de f19 à f28 l'échelle monte encore ; à 360 px de large, le mot se lit en une image. Sur la planche du film : ce plan n'apparaît qu'une fois par mesure.
