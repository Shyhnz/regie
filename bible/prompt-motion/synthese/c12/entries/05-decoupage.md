## Étape 5 · Le découpage en plans : la carte des temps validée avant le code

Le découpage pose chaque plan sur la grille de l'étape 4 : fonction, durée en temps, image, mouvement, courbe, son et couture avec le suivant. On le fait avant toute animation : « corriger ce tableau prend une phrase ; corriger l'animation codée demande un aller-retour complet » (guide Otom, p. 8). Le temps mort, qui touche environ 43 des 47 vidéos notées 3 ou moins, se décide ici. On livre une carte des temps et 3 ou 4 images fixes validées.

![Huit images, une toutes les 1,875 s : astérisque, CLAUDE, courbes, étoile, Truchet, sphère, mur NEVER, signature](ILLUS:carte-des-temps-1)

*[Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be), 0:01.17 à 0:14.30 : une image par mesure à 128 BPM ; chapitres changés sur des 1ers temps (f113, f338, f450, f675, f788), longs d'une ou deux mesures.*

**Ce que font les meilleures vidéos**

- Elles coupent les idées sur la mesure. [Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be) (5/5) coupe sur des multiples exacts de 1,875 s ; [3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155) (5/5) affiche « 128 BPM · BAR n/8 ».
- Elles varient la longueur des plans sur une grille fixe. [Kinetic type showreel](https://prompt-motion.com/zheke-38deff) (5/5) : verbes d'un temps, puis de deux, rafale en doubles puis triples croches, drop au 1er temps de la mesure 7 (étude 60 fps).
- Elles écrivent la carte en temps musicaux : [Frame by Frame launch video](https://prompt-motion.com/notdwd-7de38a) (coupes sur 0,048 + 0,4838·k s, verrou de phase p = 2,8e-6) ; [UGC ad generator promo](https://prompt-motion.com/twoclipping-6dd14e) (« 10 bars at 120 BPM »), suivi presque à la lettre.
- Elles écrivent les coutures en métamorphoses (« le point grandit en pilule ») : [Photo print app launch film](https://prompt-motion.com/twoclipping-221cab) devient un plan-séquence.
- Elles valident avant de construire : « show me the beat map and four stills before building » ([Orange dot motion system](https://prompt-motion.com/ultimaxbt-bbebf5)) ; product-film impose le même arrêt.

**Ce qui manque aux moins bonnes**

- Des maintiens à la place des gestes : 47 % du film chez [FigPad product promo](https://prompt-motion.com/ai-baymax-0ef9dd), 64 % chez [Tally product demo](https://prompt-motion.com/visheshbaghell-3aba37), 83 % chez [Animated business explainer](https://prompt-motion.com/alex-prompter-1ea044).
- Une grille trop régulière : [Motion design principles reel](https://prompt-motion.com/tolgayhickiran-e90799), 8 plans de 1,875 s « sans respiration ».
- Une minuterie en secondes hors grille : [Spotify product film](https://prompt-motion.com/brainextends-e19ac3) tombe à l'heure, mais 8 changements sur 21 seulement sur un temps.
- Une carte validée puis non tenue : [Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4) suit la sienne à ±0,5 s jusqu'à 9 s, puis la comprime : 1,6 s d'immobilité finale.
- Un carton final figé (environ 61 vidéos) : 4,2 s immobiles sur 15 s chez [Gene Spectra promo](https://prompt-motion.com/madebyjmayala-b9204d).

**Décisions** (défaut entre parenthèses)

- La fonction de chaque plan : accroche, présentation, preuve, démonstration, chute, signature (15 s : accroche, 4 ou 5 plans, rafale, signature).
- Sa durée en temps, jamais en secondes (2, 4 ou 8 temps ; plan médian de 60 à 90 im, skill cinetic).
- La place du drop et de la signature (drop sur un 1er temps et sur la révélation ; signature de 1,5 à 2,5 s, animée).
- La transition à chaque couture (étape 8) et la courbe dominante de chaque plan.
- Les images à valider (ouverture, plan produit, temps fort, signature).

**Livrable** : la feuille de timing (une ligne par plan) et 3 ou 4 images fixes. Exemple pour 15 s à 128 BPM, 60 fps (1 temps = 28,125 im) :

| Mesure.temps · plan | Temps · image | Ce qu'on voit | Ce qui bouge | Courbe | Son | Transition |
| --- | --- | --- | --- | --- | --- | --- |
| 1.1 Accroche (4 t) | 0,00 · f0 | question de 3 mots, ≥ 12 % H | un mot par temps, le 4e pour lire | expo.out, 10-12 im | pied + clic par mot | le point du « ? » en relais |
| 2.1 Problème (2 t) | 1,875 · f113 | 6 cartes de tâches en vrac | cascade à 2 im, dérive 2 % | power3.out | tic par carte | coupe sur le temps |
| 2.3 Retournement (2 t) | 2,81 · f169 | les cartes se rangent | redressement en colonne | power2.inOut | glissé | compression en point |
| 3.1 Présentation (4 t) | 3,75 · f225 | logo et nom du produit | iris né du point, nom sous masque | power2.out | impact | poussée vers l'interface |
| 4.1 Démonstration (8 t) | 5,625 · f338 | interface, poussée ×2 à ×3 | un geste par temps | power2.inOut | clics UI | le chiffre devient compteur |
| 6.1 Rafale (3,5 t) | 9,375 · f563 | 4 bénéfices, un mot par croche | coupe toutes les 14 im | expo.out, 9-13 im | charleston | vide d'½ temps |
| 6.4½ Silence | 11,02 · f661 | un point seul | rien, compté | — | coupure | coupe sèche |
| 7.1 Drop (4 t) | 11,25 · f675 | la promesse en mot géant | claquement, flash de 2 im | back.out(1.7) | drop | le mot se replie en logo |
| 8.1 Signature (4 t) | 13,125 · f788 → f900 | logo, slogan, URL | bloc monté en 60-80 im, poussée 2 % | power2.out | accord final | fin à 15,00 s |

Feuille vierge : mêmes colonnes ; image du temps n = round(n × 28,125), depuis f0.

**Règles**

1. Toute durée s'écrit en temps : nombre de mesures = durée × BPM ÷ 240. Changements d'idée sur un 1er temps, accents sur les temps, détails sur les demi-temps (voir *Un élément par temps, les détails sur les demi-temps* au chapitre 9).
2. Au moins 3 longueurs de plans, et des plans qui raccourcissent avant la signature (voir *Le récapitulatif en rafale avant la signature* et *L'escalade puis la résolution* au chapitre 10).
3. Jamais plus de 48 im (0,8 s) sans événement, sauf une tenue voulue de 60 à 96 im sur l'affirmation clé, avec poussée de 2 à 3 % (skill cinetic). Lecture : environ 0,2 s par mot sur le temps ; phrase immobile : 0,4 s + caractères ÷ 15, au moins 1,0 s (skill motion-premiers-principes).
4. Un ½ temps de vide avant le drop, le drop sur un 1er temps (zheke, étude 60 fps ; voir *Le maintien : temps de lecture ou temps mort* au chapitre 9).
5. Signature de 1,5 à 2,5 s, toujours animée (voir *La signature finale : logo, slogan, appel, sans temps mort* au chapitre 10).

**La méthode Otom, corrigée** : on reprend « ce qui apparaît, comment, et pendant combien de temps » (p. 5) et le storyboard validé avant le code (p. 6). Sa feuille à 3 colonnes (p. 8) gagne mesure.temps, courbe, son et transition. Elle finit sur 2 s de « Rien : pause de lecture », 25 % du film : la Bible a raison, signature animée de 1,5 à 2,5 s. Ses entrées de 500 ms deviennent 0,21 à 0,47 s (médiane 0,30 s, chapitre 14).

**Erreur fréquente** : valider la carte puis ne plus la regarder : Claude la suit au début, la comprime à la fin.

**Dans HyperFrames**

- La carte devient `STORYBOARD.md` (un `## Frame N` par ligne : `duration`, `transition_in`, clés libres `bars`, `curve`, `sound`) et des constantes partagées :

```js
// Carte des temps → constantes : aucun plan ne contient de durée en dur
const FPS = 60, BPM = 128, BEAT = 60 / BPM;
const at = (bar, beat = 1, frac = 0) => ((bar - 1) * 4 + (beat - 1) + frac) * BEAT;
const frameOf = t => Math.round(t * FPS);                 // depuis f0, sans cumul d'arrondi
const CUES = window.CUES = {
  accroche: at(1), probleme: at(2), retournement: at(2, 3), presentation: at(3),
  demo: at(4), rafale: at(6), vide: at(6, 4, 0.5), drop: at(7), signature: at(8), fin: at(9),
};
console.assert(frameOf(CUES.fin) === 900, "la carte ne fait pas 32 temps");
```

- Les 4 images à valider : `npx hyperframes snapshot --at 1.2,6.6,11.5,14.5`.
- Repères vérifiés sur le rendu : `ffmpeg -i out.mp4 -vf "select='eq(n\,113)+eq(n\,675)+eq(n\,788)'" -fps_mode passthrough cue-%02d.png`.

**Dans After Effects**

- Composition à 60 i/s de 32 temps (15:00). Un marqueur de composition par ligne, nommé comme elle (« 7.1 Drop »), à l'image calculée.
- Une pré-composition par plan (Layer › Pre-compose (Calque › Précomposer)), de la longueur de sa ligne, calée sur son marqueur.
- Les 4 images à valider : Composition › Save Frame As › File (Composition › Enregistrer l'image sous › Fichier).
- Les expressions lisent la carte : `thisComp.marker.key("7.1 Drop").time`.

**À cocher**

- [ ] Chaque ligne est en mesure.temps et la somme fait la durée (15 s = 32 temps à 128 BPM).
- [ ] Au moins 3 longueurs de plans ; une rafale avant la signature.
- [ ] Aucun trou de plus de 48 im sans événement, hors tenue voulue de 60 à 96 im avec poussée de 2 à 3 %.
- [ ] Drop sur un 1er temps et sur la révélation, sans pourcentage fixe ; signature de 1,5 à 2,5 s, animée.
- [ ] Une transition nommée à chaque couture.
- [ ] 3 ou 4 images validées avant le code ; repères recontrôlés sur le rendu, à ±2 im.
