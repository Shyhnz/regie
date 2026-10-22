## La rafale récapitulative (recap burst, accelerando, subdivision build-up, burst and breathe)

Juste avant la signature, le film repasse ses mots clés : un par croche, puis un par double-croche, puis un demi-temps de vide. La densité qui monte fabrique la tension ; le vide fait frapper la fin. Les vidéos notées 5 font ce résumé en une mesure, entre 10 et 13,5 s d'un film de 15 s (*Le récapitulatif en rafale avant la signature*, chapitre 10).

![Rafale de mots glitchés sur des fonds différents, de plus en plus courts, puis un point orange seul sur noir, puis le drop](ILLUS:C08-rafale-recap)

*[Kinetic type showreel](https://prompt-motion.com/zheke-38deff), 0:10.08 à 0:11.28 : « GO FASTER » pousse jusqu'à la coupe, les rappels passent à 7 im puis à 3-4 im, un demi-temps de noir laisse naître un seul point, et le drop tombe f675. Ici la rafale précède le drop ; la signature vient 2 s plus tard.*

**Quand l'utiliser** : fonction « rafale », juste avant la signature, dans la dernière mesure de la timeline type. Typo cinétique 1600, showreel, promo SaaS qui a montré au moins 4 fonctions. À éviter sous 4 chapitres ou sous 10 s : il n'y a rien à rappeler. À éviter aussi quand chaque mot doit être lu (prix, chiffres, preuve) et sans musique (*L'accélération par subdivisions et la rafale*, chapitre 9).

**L'événement** (60 fps, 128 BPM : 1 temps = 28,125 im ; locale f0 = 1er temps de la mesure qui précède la signature ; chaque coupe 1 im avant l'image indiquée)

| Image (locale) | Temps | Ce qu'on voit | Ce qui bouge (héros / secondaires) | Courbe | Son |
| --- | --- | --- | --- | --- | --- |
| f0 | temps 1 | état d'entrée : mot 1, déjà vu, dans le fond et la typo de son chapitre | héros : le mot, 1,08 → 1 | power2.out | coup f1 |
| f14 · f28 · f42 | croches | mots 2, 3, 4, un fond chacun | 1 im de fondu à l'entrée | power2.out | un coup par croche |
| f56 | temps 3 | mot 5 : passage aux doubles-croches | coupe sèche | — | la subdivision double |
| f63 → f91 | doubles | mots 6 à 10, courts, 7 im chacun | coupe sèche | power2.out | montée |
| f98 | temps 4,5 | vide : fond neutre, un point seul naît au centre | point 0 → 1 | back.out(3), 7 im | la musique se coupe |
| f113 | temps 1 suivant | état de sortie : flash, puis la signature | flash qui retombe | power4.out, 26 im | drop |

Croches : round(k × 14,0625) ; doubles : round(k × 7,03). Vide de 14 im et point seul : étude 60 fps de zheke. Flash : *Le récapitulatif en rafale*.

**Règles**

1. **Une mesure, une fois.** La rafale tient une mesure et finit 1,5 à 3 s avant la fin du film : la signature prend le reste (chapitre 10). Une seule rafale par film, encadrée de passages qui respirent (chapitre 9) ; deux, c'est l'accent répété.
2. **Rappeler, ne rien apprendre.** Chaque mot a déjà été vu. La durée du plan décide de ce qu'il porte : 15 im, un mot neuf lisible dès la 2e image ; 7 im, un mot court ou déjà vu ; 3 à 4 im, une couleur ou une forme, jamais un texte (chapitre 9).
3. **Le chapitre se reconnaît avant le mot.** Chaque plan garde le fond, la couleur et la typo de son chapitre ; le mot reste au centre du cadre (chapitres 9 et 10). Un micro-geste par plan : réduction de 8 % sur sa durée.
4. **Diviser par deux, sur la grille.** Croche → double-croche (→ triple en toute fin, zheke). Chaque coupe se calcule depuis l'image 0, 1 à 2 im avant le coup (*Couper en avance, atterrir sur le temps*).
5. **Le vide d'un demi-temps.** La rafale s'arrête, l'image et le son se vident ensemble, à 1 im près (*Le temps fort*, chapitre 9). Un seul point, au centre exact de ce qui va naître. Puis la signature sur le 1er temps : flash ou iris de 5 im (steventey).
6. **Trois flashs par seconde au plus** (F). Aux doubles-croches, les fonds changent de teinte, pas de clarté : pas de noir ↔ blanc à chaque coupe. Le seul grand saut de lumière est le flash final. Steventey adoucit chaque coupe par une image grise unie et 2 im de fondu.

**Variantes**

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Doubles puis triples, ½ temps de vide | [Kinetic type showreel](https://prompt-motion.com/zheke-38deff), 0:10.32 | 4 plans de 7 im, 6 de 3-4 im, 14 im de noir avec un point, drop f675 (étude 60 fps) |
| Un mot par double-croche | [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 0:12.00 | 11 mots + 1 point en 90 im (120 BPM), 1 im de fondu sur les croches, coupe sèche entre (étude 60 fps) |
| Accelerando 1, ½, ¼ | [Claude motion design reel](https://prompt-motion.com/tequilafunks-97f6c9), 0:10.00 | 15, 15, 7,5, 7,5 puis 4 × 3,75 im à 30 fps : une mesure de 60 im, puis CLAUDE |
| Une fonction par croche (promo SaaS) | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:10.75 | 8 cartes de 15 im : 1 im grise, 2 im de fondu, ≈ 6 im d'animation, 5-6 im figées ; iris de 5 im f750 (étude 60 fps) |
| Rembobinage du film | [3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155), 0:11.15 | tête de lecture power1.inOut 99 im, ≈ 12,6× ; arrêt 12 im sur la 1re image, iris 7 im |

**Ligne de SHOTLIST**

```text
Plan 9 · Rafale récapitulative · locale f0 = temps 1 de la mesure 7 = globale f675 (fin f787)
Entrée : coupe depuis la preuve. Sortie : écran vide, point central ; la signature naît du point en f788.
Raison : rappeler les 4 fonctions en une mesure, sans rien apprendre.
Héros : un mot par plan, au centre. Secondaire : aucun.
Repères (globaux, coupes 1 im avant) : croches f675 f689 f703 f717 · doubles f731 f738 f745 f752 f759 f766 · vide f773 · drop f788.
Son : un coup par croche, puis par double-croche, silence f773-f787, drop f788.
Couture : le point du vide devient le flash puis la marque.
```

**HyperFrames (GSAP)**

```js
// Rafale récapitulative : mesure 7, 4 croches, 6 doubles-croches, ½ temps de vide, signature mesure 8
const FPS = 60, BPM = 128, BEAT = 60 / BPM;
const at = (bar, beat = 0) => ((bar - 1) * 4 + beat) * BEAT;
const fr = n => n / FPS;
const snap = t => Math.round(t * FPS) / FPS;      // chaque coupe arrondie seule depuis l'image 0
const LEAD = fr(1);                               // l'image précède le coup d'1 im
const shots = gsap.utils.toArray("#recap .shot"); // 10 mots déjà vus, chacun dans la DA de son chapitre
const beats = [0, 0.5, 1, 1.5, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5]; // croches, puis doubles, puis le vide

tl.set(shots, { autoAlpha: 0 }, 0).set("#dot, #flash, #logo", { autoAlpha: 0 }, 0);
shots.forEach((el, i) => {
  const t0 = snap(at(7, beats[i])) - LEAD, t1 = snap(at(7, beats[i + 1])) - LEAD;
  if (i < 4) tl.to(el, { autoAlpha: 1, duration: fr(1), ease: "none" }, t0); // croche : 1 im de fondu
  else tl.set(el, { autoAlpha: 1 }, t0);                                      // double : coupe sèche
  tl.fromTo(el, { scale: 1.08 }, { scale: 1, duration: t1 - t0, ease: "power2.out",
            immediateRender: false }, t0)
    .set(el, { autoAlpha: 0 }, t1);
});

// ½ temps de vide : un point seul naît au centre, l'audio se coupe sur les mêmes images
const VOID = snap(at(7, 3.5)) - LEAD, DROP = snap(at(8)) - LEAD;
tl.set("#dot", { autoAlpha: 1, scale: 0 }, VOID)
  .to("#dot", { scale: 1, duration: fr(7), ease: "back.out(3)" }, VOID)
  .set("#dot", { autoAlpha: 0 }, DROP)
  // Signature sur le 1er temps de la mesure 8 : le seul grand flash de la rafale
  .set("#flash", { autoAlpha: 1 }, DROP)
  .to("#flash", { autoAlpha: 0, duration: fr(26), ease: "power4.out" }, DROP + fr(1))
  .set("#logo", { autoAlpha: 1 }, DROP);
```

**After Effects**

- Composition à 60 fps ; un marqueur par croche sur le calque audio (touche * du pavé numérique) : 14, 14, 14, 14 im, puis 7 im pour les doubles.
- Chaque mot dans la DA de son chapitre : Layer › Pre-compose (Calque › Précomposer), un précomp par chapitre, recadré à sa durée avec Alt + [ et Alt + ].
- Animation › Keyframe Assistant › Sequence Layers (Animation › Assistant d'image clé › Séquencer les calques), sans chevauchement, puis reculer le groupe d'une image (Alt + Page Up) pour l'avance.
- Micro-geste : Scale (Échelle) 108 → 100 % sur la durée du plan, Influence (influence) d'arrivée 80 % dans le Speed Graph (graphe de vitesse). Opacity (Opacité) 0 → 100 % en 1 im sur les 4 croches seulement.
- Vide : 14 im de fond neutre, une Ellipse en calque de forme, Scale 0 → 100 % en 7 im avec dépassement. Flash : Layer › New › Solid (Calque › Nouveau › Solide) blanc, Opacity 100 → 0 % en 26 im, sur le marqueur du drop.

**Contrôle** : rendre f0, f14, f42, f56, f63, f91, f98, f113, puis une bande de 8 images f94-f101 (fin de rafale et entrée du vide) et une autre f109-f116 (drop). On regarde : chaque coupe tombe 1 im avant round(k × 14,0625) ; chaque mot se lit à 360 px de large dès sa 2e image ; aucun mot n'est neuf ; on compte au plus 3 grands sauts de clarté par seconde ; de f98 à f112, l'image est vide sauf le point et le son se tait ; le drop arrive sur le 1er temps. La planche du film n'a qu'une rafale.
