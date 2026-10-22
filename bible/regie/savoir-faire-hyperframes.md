# Savoir-faire HyperFrames : les pannes déjà rencontrées

Chaque ligne a coûté une itération ou un retour de l'utilisateur pendant la fabrication des films qui ont servi à écrire la méthode. Claude les relit avant de construire. Quand un correctif marche dans un film, il entre aussi dans `CONTRACT.md` du studio.

- **Version par version** : copier le dossier du projet précédent (sans les rendus) plutôt que modifier une version validée ; puis modifier → `npx hyperframes check` → planche `snapshot --at …` regardée → rendu `--fps 60 --quality delivery`. Épingler `hyperframes@0.8.145`.
- **Zooms** : mesurer la cible après `document.fonts.ready`, en passant les ancêtres cachés en `display:block` le temps de la mesure (une scène invisible au montage mesure 0, le zoom part ailleurs). Jamais `will-change: transform` sur un texte zoomé : le texte reste pixelisé.
- **GSAP** : `fromTo` affiche son état de départ tout de suite ; utiliser `set` + `immediateRender: false`. Plusieurs `fromTo` sur une même cible déclenchent des avertissements.
- **Ne jamais renvoyer une timeline depuis une promesse** (`return tl` dans un `then`) : une timeline GSAP a une méthode `then()`, la promesse attend sa fin, qui n'arrive jamais en pause ; la timeline n'est jamais enregistrée et rien ne bouge (`sweep_static`). Renvoyer `{ tl }`.
- **Deux `tl.set` au même instant sur la même propriété** (masquer puis montrer à t = 0) : au rendu, le dernier ne gagne pas toujours. Un élément visible dès le début n'a pas de réglage d'entrée.
- **Texte qui chevauche volontairement** (anneau 3D, décor) : un seul `textPath` SVG plutôt qu'une lettre par `span`, et `data-layout-ignore` sur les décors. Profondeur d'un texte par `text-shadow` empilés, pas par des copies dans le DOM.
- **Une seule composition racine par dossier** (`multiple_root_compositions`) : une déclinaison 9:16 vit dans `formats/vertical.html` (chemins `../`), rendue avec `render -c formats/vertical.html` ; `snapshot` ne capture que `index.html`.
- **Projet en `"type": "module"`** : `require('./timeline.js')` renvoie `{}` ; charger les fichiers partagés avec `vm.runInNewContext`.
- **Ajuster un texte** : mesurer les `span` des mots, pas la ligne à 100 % de largeur (`scrollWidth` vaut toute la largeur). L'audit de contraste signale les scènes cachées à opacité 0 : cacher les scènes inactives avec `autoAlpha` (visibilité).
- **Studio HyperFrames** réécrit les fichiers (`data-hf-id`) : relire avant d'écrire ; modifier par remplacement exact d'une chaîne, en vérifiant le nombre de remplacements.
- **Typographie** : polices de marque chargées en local par `@font-face` ; une police sans italique n'a pas d'oblique synthétique. Les textes français contiennent des espaces fines insécables (U+202F, U+00A0) : rechercher et remplacer en les tolérant.
- **Shell zsh** : les crochets dans un nom de fichier cassent les motifs (mettre les chemins entre guillemets).
- **Explorer en parallèle** : plusieurs sous-agents qui construisent chacun une variante de style, puis un montage ffmpeg étiqueté et une planche pour comparer.
- **Livraison web** : x264 `-preset slow -crf 23 -maxrate 4M`, `+faststart` (environ 26 Mo pour 55 s en 1080p60, sans bandes sur les dégradés) ; affiche = une image du début où tout le texte est posé.
