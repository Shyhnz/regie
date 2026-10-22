# Contrat de rendu

À coller sous tout prompt de construction. Chaque ligne ferme une façon dont un rendu tourne mal. **Quand un correctif marche, on ajoute sa ligne ici** (section « Appris en production ») : ce fichier est la mémoire du studio.

## Le contrat

1. Moteur : HyperFrames `hyperframes@0.8.145`, GSAP `3.14.2` (épinglés). Aucune requête réseau hors ces bibliothèques ; polices locales en `@font-face` dans `assets/fonts/`.
2. Chaque image est une fonction pure du temps : l'image 240 se rend directement, sans rejouer 0 à 239.
3. Une timeline GSAP en pause par composition, enregistrée dans `window.__timelines["<id>"]`. Ni `Date.now`, ni `setTimeout` / `setInterval`, ni `requestAnimationFrame` propre, ni transition CSS, ni `Math.random()` : le hasard passe par `mulberry32(graine)`.
4. Tout nombre vient de `motion.js` (courbes, durées, décalages, ressorts) ou de `timeline.js` (temps, événements, ancres, repères son). Aucune image écrite en dur dans un plan.
5. Positions et durées en temps musicaux : `T.at(mesure, temps)`. Chaque temps est calculé depuis l'image 0 et arrondi seul.
6. États de départ posés avec `tl.set(...)` ou `immediateRender: false` ; jamais un `fromTo` nu qui affiche son état de départ trop tôt.
7. On anime `transform` et `opacity` ; ni `width`, `height`, `top`, `left` pendant un mouvement.
8. Mesures de mise en page après `document.fonts.ready`, ancêtres cachés passés en `display:block` le temps de la mesure. Jamais `will-change: transform` sur un texte zoomé.
9. Boucle : images 0 à N−1, l'image N−1 coule dans l'image 0 ; cycles entiers ; bruit échantillonné sur un cercle.
10. Rendu : `npx hyperframes render --fps 60 --quality delivery` ; 1920×1080 au moins ; durée = `data-duration` de la racine.
11. Instruments de mise au point (compteur d'image, étiquettes calées) derrière `window.DEBUG`, à `false` au rendu final.

## Appris en production

- Texte qui chevauche volontairement (anneau 3D, décor) : un seul `textPath` SVG, `data-layout-ignore` sur le décor (promo v8).
- Manrope n'a pas d'italique : aucune oblique synthétique (promo v9).
- Copie française : espaces fines insécables U+202F / U+00A0 dans les nombres ; recherches tolérantes (promo v9).
- Studio HyperFrames réécrit les fichiers (`data-hf-id`) : relire avant d'écrire.
- Ne jamais renvoyer une timeline GSAP depuis une promesse (`return tl` dans un `then`) : elle a une méthode `then()`, la promesse attend sa fin, qui n'arrive jamais en pause ; la timeline n'est jamais enregistrée et rien ne bouge (`sweep_static`). Renvoyer `{ tl }` (film test 15 s, 20 oct.).
- Jamais deux `tl.set` au même instant sur la même propriété (ex. masquer puis montrer à t = 0) : au rendu HyperFrames le dernier ne gagne pas toujours ; la scène 1 restait invisible. Un élément visible dès le début n'a pas de réglage d'entrée (film test 15 s).
