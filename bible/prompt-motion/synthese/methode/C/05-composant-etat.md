## Le composant qui change d'état (single morphing container, UI state list, layout reflow)

Un seul objet traverse le parcours : RECHERCHE → RÉSULTAT → DÉTAIL → ACTION → CONFIRMATION. Il change de taille, de couleur, de contenu et de place sans cesser d'être le même objet (W). L'œil suit une forme au lieu de relire un écran : [Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86) enchaîne 14 états en 14 s sans une coupe (voir *Le morphing de forme* au chapitre 6).

![Huit images : le bouton noir « Generate » devient un cercle de chargement, une île, une carte, un lecteur, puis un curseur de volume ; toujours le même conteneur](ILLUS:C05-composant-etat)

*[Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86), 0:00.50 à 0:04.00 : chaque morph a son pic de vitesse sur un temps ou un demi-temps.*

**Quand l'utiliser** : la démonstration d'un parcours en promo SaaS, quand tout se fait au même endroit. Place : RÉVÉLATION ou démo, souvent juste après le plan C04 (le curseur déclenche une bascule). À éviter quand les états sont des écrans entiers sans élément commun : une coupe sur le temps est plus nette (voir *La mise en page qui se recompose* au chapitre 2).

**L'événement** (60 fps, 128 BPM : 1 temps = 28,125 im ; images locales)

La liste des états d'abord, puis les passages (W). Chaque morph part 4 im avant son temps, où tombe son pic de vitesse.

| Image (locale) | Temps | Ce qu'on voit | Ce qui bouge (héros / secondaires) | Courbe | Son |
| --- | --- | --- | --- | --- | --- |
| f0-f49 | temps 0 → 1,75 | entrée RECHERCHE : barre 40 % L × 7 % H, la requête s'écrit | une lettre par quart de temps (7 im) | coupe | tic par lettre |
| f52-f72 | pic sur le temps 2 (f56) | RÉSULTAT : la barre devient une liste de 3 lignes | conteneur ; lignes 5 im après, à 4 im d'écart | ≈ ζ 0,72, 20 im | souffle f57 |
| f84 | temps 3 | la ligne choisie s'éclaire | surlignage | power1.out, 6 im | — |
| f109-f131 | pic sur le temps 4 (f113) | DÉTAIL : carte de 50 % L × 48 % H | conteneur, puis contenu | ≈ ζ 0,72, 22 im | souffle f114 |
| f165-f180 | pic sur le temps 6 (f169) | ACTION : bouton de 22 % L | conteneur | ≈ ζ 0,82, 15 im | — |
| f195 | temps 7 − 2 im | l'appui : bouton 1 → 0,92 → 1 | bouton | none 1 im, power2.out 6 im | clic f196 |
| f221-f236 | pic sur le temps 8 (f225) | CONFIRMATION : cercle, noir → vert | conteneur ; couleur | ≈ ζ 0,82 ; sine.inOut 12 im | — |
| f248-f267 | coche finie sur le temps 9 (f253) | coche, puis pulsation de +8 % | coche, conteneur | power2.out 5 im ; sine.inOut 14 im | attaque f254 |
| f338 | temps 12 | sortie : cercle vert et coche, tenus 1,4 s | — | — | — |

**Règles**

1. La liste des états d'abord (W) : un élément nouveau par état, un état par temps ou deux. Un saut qui ne change rien est coupé (P). Un mot neuf tient au moins 15 im (voir *Trop d'information pour le temps donné* au chapitre 11) ; l'état final tient 1 s au moins.
2. Ressort selon le sens (étude 60 fps de twoclipping-5cba86) : pour agrandir, ζ 0,6 à 0,75, 20 à 22 im, dépassement 3 à 8 % ; pour rétrécir, ζ 0,8 à 0,9, 13 à 16 im, dépassement ≤ 2 %. Départ 3 à 5 im avant le temps, pic de vitesse sur le temps.
3. Le contenant bouge d'abord, le contenu suit 4 à 5 im après. L'ancien contenu se floute avant que la forme bouge ; le nouveau entre en cascade de 4 im (voir *Le changement d'état* au chapitre 7).
4. Opacité et couleur ne rebondissent jamais (F). La couleur change pendant le repli, en 12 im ; le vert dit « validé ». Une seule pulsation de +8 % en 14 im marque la validation.
5. Si le conteneur grandit, ses voisins s'écartent dans le même geste de 11 à 20 im, aucun trou vide plus de 0,5 s (*La mise en page qui se recompose*, chapitre 2).
6. Jamais plus de 48 im sans événement hors tenue voulue (*Étape 5*, chapitre 12). Texte ≥ 3 % H. Libellés et contenus viennent du vrai produit (W), jamais inventés.

**Variantes**

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Bouton → chargement → coche | [Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86), 0:00.52 | étude 60 fps : largeur 44,6 → 15,4 % en 15 im, coche en 5 im finie sur le temps |
| Barre de recherche → palette ⌘K | [Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86), 0:10.02 | étude 60 fps : hauteur 11,8 → 56,1 % H en 22 im, ζ 0,70 ; 5 lignes à ≈ 3 im d'écart |
| Statuts qui basculent en cascade | [Quetzal social app reel](https://prompt-motion.com/miskinho-443898), 0:07.83 | 6 pastilles « Scheduled » → « ✓ Live », une toutes les 7,0 im |
| Barre de progression → anneau | [Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4), 0:09.37 | étude 60 fps : enroulement en 18 im, pic de vitesse pile sur le temps |

**Ligne de SHOTLIST**

```text
Plan 2 · Composant qui change d'état · f225-f563 (mesures 3-5, 128 BPM, 60 fps, images globales)
Entrée : barre de recherche 40 % L × 7 % H, centrée, vide.
Sortie : cercle vert 9 % H et sa coche, à la même place.
Raison : le parcours entier tient dans un seul objet.
Héros : le conteneur, toujours ; un seul contenu lisible à la fois.
Repères : RÉSULTAT f281 · DÉTAIL f338 · ACTION f394 · appui f420 · CONFIRMATION f450 · coche f478 · fin f563.
Son : tic par lettre f225-f274 · clic f421 · attaque claire f479.
Couture : le cercle vert devient le point relais du plan Preuve.
```

**HyperFrames (GSAP)**

```js
// Un seul conteneur : RECHERCHE → RÉSULTAT → DÉTAIL → ACTION → CONFIRMATION
const FPS = 60, BPM = 128, BEAT = 60 / BPM;
const at = (bar, beat = 0) => ((bar - 1) * 4 + beat) * BEAT;
const F = n => n / FPS;
const P0 = at(3), T = b => P0 + b * BEAT;          // le plan commence à la mesure 3
const GROW = "back.out(1.4)", SHRINK = "power2.out"; // ≈ ζ 0,72 pour agrandir, ≈ ζ 0,82 pour rétrécir
// #box en position absolue ; un enfant par état (.st-search … .st-done)
const swap = (from, to, t) => tl                   // l'ancien se floute, le nouveau suit 5 im après
  .to(from, { autoAlpha: 0, filter: "blur(6px)", duration: F(4), ease: "power1.in" }, t - F(8))
  .set(`${to} > *`, { autoAlpha: 0, y: 10 }, P0)
  .set(to, { autoAlpha: 1 }, t)
  .to(`${to} > *`, { autoAlpha: 1, y: 0, duration: F(10), ease: "power3.out", stagger: F(4) }, t + F(5));
const morph = (w, h, r, ease, dur, b) =>            // départ 4 im avant : pic de vitesse sur le temps b
  tl.to("#box", { width: w, height: h, borderRadius: r, duration: F(dur), ease }, T(b) - F(4));
tl.set("#box", { width: 768, height: 76, borderRadius: 38, backgroundColor: "#111318" }, P0)
  .set(".st-results, .st-detail, .st-action, .st-done", { autoAlpha: 0 }, P0)
  .set(".st-search .q span", { autoAlpha: 0 }, P0)
  .to(".st-search .q span", { autoAlpha: 1, duration: F(1), stagger: BEAT / 4 }, P0); // une lettre par quart de temps
morph(768, 300, 24, GROW, 20, 2);  swap(".st-search", ".st-results", T(2));   // RÉSULTAT
tl.to(".st-results .pick", { backgroundColor: "#2A2F38", duration: F(6), ease: "power1.out" }, T(3));
morph(960, 520, 28, GROW, 22, 4);  swap(".st-results", ".st-detail", T(4));   // DÉTAIL
morph(420, 96, 48, SHRINK, 15, 6); swap(".st-detail", ".st-action", T(6));    // ACTION
tl.to("#box", { scale: 0.92, duration: F(1), ease: "none" }, T(7) - F(2))     // l'appui
  .to("#box", { scale: 1, duration: F(6), ease: "power2.out" }, T(7) - F(1));
morph(96, 96, 48, SHRINK, 15, 8);  swap(".st-action", ".st-done", T(8));      // CONFIRMATION
tl.to("#box", { backgroundColor: "#1F9D55", duration: F(12), ease: "sine.inOut" }, T(8) - F(4))
  .fromTo(".st-done path", { strokeDashoffset: 60 }, { strokeDashoffset: 0, duration: F(5),
    ease: "power2.out", immediateRender: false }, T(9) - F(5))                 // coche finie sur le temps 9
  .to("#box", { scale: 1.08, duration: F(7), ease: "sine.inOut", yoyo: true, repeat: 1 }, T(9));
```

**After Effects**

- Un seul Shape Layer (calque de forme) Rectangle : animer Rectangle Path › Size (Taille) et Roundness (Arrondi), pas Scale, pour garder les coins nets.
- Chaque morph : clés posées 4 im avant le Composition Marker (repère de composition) du temps. Pour agrandir, un léger dépassement (3 à 8 %) dessiné dans le Graph Editor (éditeur de graphique) ; pour rétrécir, aucun.
- Contenus : un calque de texte par état, parenté au conteneur (Parent & Link (Parent et lien)) ; l'ancien sort en Opacity (Opacité) → 0 en 4 im avant le morph, le nouveau entre 5 im après, calques décalés de 4 im.
- Couleur : Fill (Fond) noir → vert en 12 im pendant le repli. Coche : Trim Paths (Réduire les tracés), End 0 → 100 % en 5 im, finie sur le repère du temps 9.

**Contrôle**

Images globales depuis le début du plan G. Bandes de 8 images autour de chaque pic (G+52, G+109, G+165, G+221) : le conteneur ne disparaît jamais, aucun ancien texte sur le nouveau. G+84 : la ligne choisie se distingue. G+253 : coche complète. G+338 : sortie nette à 360 px de large. Graphe de vitesse (F) : pic sur chaque temps à ±1 im.
