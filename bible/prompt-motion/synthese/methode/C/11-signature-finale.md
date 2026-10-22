## La signature finale (end card, logo lockup, tagline + CTA, outro)

Le dernier plan assemble la marque, un étage par temps : icône, nom, slogan, appel. Il dure environ une mesure, reste vivant jusqu'au bout et finit sur une image assez forte pour être une affiche (W). Dans les vidéos notées 5/5, l'image vraiment figée dure 0,1 à 1,2 s (*La signature finale*, chapitre 10).

![La marque Dub naît sur fond blanc, le nom sort à sa droite, puis le slogan monte mot à mot et les deux boutons arrivent](ILLUS:C11-signature-finale)

*[Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:12.47 à 0:14.67 : après l'iris, la marque se pose et « dub » sort de derrière elle. Le slogan monte un mot toutes les 6 im, puis les boutons ; 46 im de tenue sur un fond qui dérive.*

**Quand l'utiliser** : la fin de tout film en lecture unique. Promo SaaS : icône, nom, slogan, bouton. Typo cinétique 1600 : le point du film devient l'icône ou le point final du nom (*La signature : lockup du logo et point relais*, chapitre 3). Sur la dernière mesure, plus un temps de queue où la musique se pose. Pas dans une boucle (voir *La boucle parfaite*).

**L'événement** (états et minutage, 60 fps, 128 BPM : 1 temps = 28,125 im ; locale f0 = 1er temps de la mesure 8 = globale f788)

| Image (locale) | Temps | Ce qu'on voit | Ce qui bouge (héros / secondaires) | Courbe | Son |
| --- | --- | --- | --- | --- | --- |
| f0 | 0 | état d'entrée : le point relais du film, seul | — | — | dernier impact f1 |
| f0-f22 | 0 → ¾ | le point devient l'icône | héros : échelle 0 → 1, pic +25 % | back.out(3), 22 im | — |
| f28-f56 | 1 → 2 | l'icône glisse à gauche ; le nom sort de derrière elle | héros : icône ; nom 1 im après, posé sur le temps 2 | expo.inOut 28 im ; nom power3.out 27 im | — |
| f56-f82 | 2 | le slogan monte, un mot toutes les 6 im | secondaires : mots sous masque | power3.out, 14 im | — |
| f84-f96 | 3 | l'appel monte, son soulignement se trace | secondaire : bouton ou URL | power1.out 12 im ; trait 6 im | clic f85 |
| f96-f140 | 3 → 5 | tenue vivante, ≈ 0,73 s ; pulsation du point ×1,11 sur le temps 4 (f112) | ambiant : poussée de 2 %, linéaire | none ; sine | dernier accord f113, qui s'éteint |
| f140 | 5 | état de sortie : la carte complète, l'affiche | rien de visible | — | fin du son |

Pop et glissé : étude 60 fps de manuelogomigo ; slogan et appel : celle de steventey ; nom, pulsation, poussée : chapitre 3.

**Règles**

1. **Un étage par temps, quatre au plus** : icône, nom, slogan, appel (*La signature finale*, chapitre 10). L'icône bouge d'abord ; le nom sort d'un masque collé à son bord, fini sur un temps ou un demi-temps, en 10 à 30 im (*La signature*, chapitre 3).
2. **1,5 à 2,5 s, animée** (*Étape 5*, chapitre 12 ; mesuré : 1,8 à 2,6 s). Gel vrai de 0,1 à 1,2 s ; au-delà, un micro-geste : poussée de 2 %, pulsation ×1,11, curseur qui clignote. 2,5 s figées sont un temps mort.
3. **Lisible au téléphone** : nom à 13 % H ou plus ; une mention mono à 1-1,5 % H n'est qu'un décor (chapitre 10). Contraste ≥ 4,5:1 sur le fond animé (F).
4. **Un appel concret, dans le système du film** : URL, commande, bouton propre au produit ; même police, même fond (chapitre 10).
5. **La fin répond au début** : le point planté dans la première seconde revient, même couleur, même taille (*La signature*, chapitre 3). Garde-fou : le logo garde ses proportions et ses couleurs ; tout passe par la position, le masque et l'ordre.
6. **La dernière image est l'affiche** (W). Fondu au noir seulement en lecture unique : 12 im power1.inOut, noir sur les 2 dernières images, la musique s'éteint avec (sudo-kiran, chapitre 10). Sinon le film finit sur la carte.

**Variantes**

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Iris, marque réduite, slogan mot à mot | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:12.50 | iris 5 im sur l'impact, marque ×0,5 en expo.out 34 im, 6 im par mot, tenue 46 im |
| Pop, glissé, slogan tapé | [Flowdrive motion showreel](https://prompt-motion.com/manuelogomigo-f33ca9), 0:13.17 | back.out(3) +25 % en 22 im, glissé expo.inOut d'un temps, slogan tapé, gel 20 im |
| Le point d'ouverture devient le point final | [3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155), 0:13.12 | point de 50 à 77,6 % L en 31 im power1.out ; lettres en 22 im, ≈ 3 im d'écart |
| Point qui tombe et rebondit | [Claude motion design reel](https://prompt-motion.com/tequilafunks-97f6c9), 0:12.80 | chute 6 im, contact sur le temps 26, écrasé 2,15:1, rebonds de 14, 8, 4 im ; 1 s de tenue avec curseur |
| Cliché : le carton figé | [Risograph studio intro](https://prompt-motion.com/rneayan-474bcf), 0:56.20 | nom posé en 4 temps, puis ≈ 10 s sans nouvel élément et un fondu au noir de 1,7 s |

**Ligne de SHOTLIST**

```text
Plan 8 · Signature · locale f0 = 1er temps de la mesure 8 = globale f788 ; fin globale f928 (8 mesures + 1 temps de queue)
Entrée : le point relais du film, seul, à sa place de la fin du plan 7.
Sortie : la carte complète, qui sert d'affiche : icône + nom (≥ 13 % H), slogan, bouton + URL.
Raison : retenir le nom et l'action à faire.
Héros : l'icône, puis un étage par temps. Secondaires : slogan, appel.
Repères locaux : pop f0-f22 · glissé et nom f28-f56 · slogan f56-f82 · appel f84-f96 · pulsation f112 · fin f140.
Son : impact f1 · clic f85 · dernier accord f113, éteint en f140.
Couture d'entrée : le point relais.
```

**HyperFrames (GSAP)**

```js
// Signature sur la mesure 8 + 1 temps de queue : icône née du point, nom, slogan, appel, tenue vivante
const FPS = 60, BPM = 128, BEAT = 60 / BPM;
const at = (bar, beat = 0) => ((bar - 1) * 4 + beat) * BEAT;
const F = n => n / FPS;                                    // images → secondes
const S = k => Math.round(at(8, k) * FPS) / FPS;           // temps k de la signature, arrondi depuis l'image 0
const SHIFT = window.TIMELINE.anchors.lockupShift;         // px : décalage qui centre l'icône seule
// états de départ (HTML : #card > #lockup > #mark + .name-mask{overflow:hidden} > #name)
tl.set("#mark", { scale: 0 }, 0)
  .set("#lockup", { x: SHIFT }, 0)
  .set("#name", { xPercent: -105 }, 0)                     // caché derrière le bord de l'icône
  .set("#tagline .w", { yPercent: 110 }, 0)                // chaque mot sous son masque
  .set("#cta", { y: 36, autoAlpha: 0 }, 0)                 // 3,3 % H plus bas
  .set("#cta .rule", { scaleX: 0, transformOrigin: "0% 50%" }, 0)
  // 1. temps 0 : le point relais devient l'icône (pop, pic +25 %)
  .set("#relay", { autoAlpha: 0 }, S(0))
  .to("#mark", { scale: 1, duration: F(22), ease: "back.out(3)" }, S(0))
  // 2. temps 1 : l'icône glisse, le nom sort de derrière elle 1 im après, posé sur le temps 2
  .to("#lockup", { x: 0, duration: S(2) - S(1), ease: "expo.inOut" }, S(1))
  .to("#name", { xPercent: 0, duration: S(2) - S(1) - F(1), ease: "power3.out" }, S(1) + F(1))
  // 3. temps 2 : le slogan, un mot toutes les 6 im
  .to("#tagline .w", { yPercent: 0, duration: F(14), ease: "power3.out", stagger: F(6) }, S(2))
  // 4. temps 3 : l'appel monte, son soulignement se trace
  .to("#cta", { y: 0, autoAlpha: 1, duration: F(12), ease: "power1.out" }, S(3))
  .to("#cta .rule", { scaleX: 1, duration: F(6), ease: "power2.out" }, S(3) + F(3))
  // 5. tenue vivante : poussée de 2 % jusqu'à la fin, pulsation du point sur le temps 4
  .to("#card", { scale: 1.02, duration: S(5) - S(3) - F(12), ease: "none" }, S(3) + F(12))
  .to("#mark .dot", { scale: 1.11, duration: F(6), ease: "sine.out" }, S(4))
  .to("#mark .dot", { scale: 1, duration: F(14), ease: "sine.inOut" }, S(4) + F(6))
  .set({}, {}, S(5));                                      // dernière image = l'affiche ; le son finit ici
```

**After Effects**

- Icône et nom dans une Pre-comp (précomposition) « lockup ». Un rectangle parenté à l'icône, bord collé au sien, sert de cache au nom : Layer › Track Matte › Alpha Matte (Calque › Cache › Cache alpha).
- Pop : Scale (Échelle) 0 → 125 → 100 % (clés f0, f11, f22). Glissé : 2 clés de Position, temps 1 et 2, forte influence des deux côtés ; au Speed Graph (graphe de vitesse), pic à mi-course.
- Slogan : un calque par mot, décalés de 6 im avec Animation › Keyframe Assistant › Sequence Layers (Animation › Assistant d'image clé › Séquencer les calques).
- Tenue : Scale de la carte 100 → 102 % en clés Linear (linéaires) jusqu'à la fin ; pulsation du point à 111 % sur le temps 4 (6 im aller, 14 im retour).
- L'affiche : Composition › Save Frame As › File (Composition › Enregistrer l'image sous › Fichier) sur la dernière image.

**Contrôle**

Rendre f0, f11, f28, f42, f56, f84, f112, f140 (depuis le début du plan) et la bande f52-f59, où le nom se pose. f140 à 360 px de large : tout est lisible, rien n'est coupé, elle tient seule comme affiche. Jamais deux entrées sur la même image. f96-f140 : la poussée bouge à chaque image. Son : dernier accord sur f113, piste finie avec la dernière image, sans clic.
