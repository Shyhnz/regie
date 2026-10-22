## Guide promo SaaS et démo d'interface (SaaS promo, product UI demo, cursor-driven event, rebuilt UI)

L'interface du produit, reconstruite en HTML, est le héros : un clic visible cause chaque résultat, un chiffre réel prouve la promesse. Deux décors au chapitre 1 : *La promo SaaS sur fond nuit* (la base de NuOps) et *La démo produit claire*. La méthode vient de B : chaque plan est un événement, le brief s'écrit en coordonnées, chaque correction en 4 champs.

**Quand le choisir, quand l'éviter** : lancement d'un SaaS, d'un outil de développeur ou d'IA, en 15 à 30 s ; démo d'une fonctionnalité pour un public déjà intéressé (chapitre 1). À éviter si l'interface ne peut pas être agrandie, ou au-delà de 31 s. Pour viser 5 : ce décor avec la cadence de la typo cinétique (chapitre 1).

**Vidéos modèles**

| Vidéo | Ce qu'on lui prend | Mesure clé |
| --- | --- | --- |
| [Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4) | chaque objet devient l'écran suivant | étude 60 fps : 95 % du trajet 1 à 3 im avant le temps ; aspiration power2.in 9 im |
| [Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86) | un composant, 14 états, en ressorts | étude 60 fps : pic de vitesse sur le temps, départ 3-5 im avant ; ζ 0,62-0,74 pour grandir, 0,78-0,90 pour rétrécir |
| [Dub promo video](https://prompt-motion.com/steventey-0d20e4) (5/5) | le clic qui lance le drop, les compteurs | étude 60 fps : curseur en 12 im, bouton −8 % en 1 im, drop 4 im après le clic |
| [Cinetic skill launch film](https://prompt-motion.com/lexnlin-6161a6) | un fil rouge, une scène par mesure | scène changée 1 im avant le temps (chapitre 1) |

**Brief (phase 1)** : squelette de W sur 8 mesures à 128 BPM (parcours A) ; durée médiane du style 18 s (chapitre 1). Faits et choix séparés : Claude invente une caméra, jamais ton tableau de bord (W).

```text
SPEC 1920×1080 · 60 fps · 8 mesures à 128 BPM (1 temps = 28,125 im) = 15 s = 900 im · musique choisie avant · boucle : non
MATIÈRE  écrans exacts du vrai site (fichiers) · liste des états : RECHERCHE → RÉSULTAT → DÉTAIL → ACTION → CONFIRMATION (W) · chiffres réels + source · logo · polices du site
MISE EN PAGE (B)  marge 64 px · boîte du titre x, y, largeur, corps, interlignage, 2 lignes max · carte produit x, y, L, H · ordre : fond, carte, contenu, curseur, titre · ancres des boutons mesurées sur l'écran ajusté
INACCEPTABLE  un écran inventé · un texte d'interface illisible · un curseur qui erre · un fondu par défaut · le même effet 3 fois
```

**Référence (phase 2)** : rôle unique, **un clic qui rend le résultat évident** (B). Suivre le curseur jusqu'à l'appui ; noter l'arrêt avant le clic, l'image où le résultat devient lisible, celle où l'événement suivant prend l'attention.

**STYLE.md prérempli (phase 3)**

```text
JETONS
NuOps : fond #000F1E · accent #02D6B6 · Manrope + JetBrains Mono (chapitre 1)
corpus nuit : fond #0A0D18 · cartes #161B2D · halo #2A1B5C qui dérive · gains #34D399 · respiration #F4F4F4
variante claire : page #FDFDFB · encre #111111 · halo pastel #F9C6AE
tailles : message ≥ 6 % H · texte lu ≥ 3 % H · interface < 2 % H = décor · curseur 2,3-3 % H · compteur héros 10-30 % H · nom final ≥ 13 % H
courbes : arrive power2.out 22-42 im · suck power2.in 9-14 im · morph power1.inOut à power2.inOut 18-58 im, pic sur le temps · compteur power3.out
ressorts : grandir ζ 0,6-0,75 (dépassement 3-8 %) · rétrécir ζ 0,8-0,9 (≤ 2 %) · pastilles et logo : back.out court
RÈGLES PAR CLASSE
micro-interface : bouton −8 % en 1 im, curseur −15 à −20 % en 2-4 im, onde 9-20 im ; changement d'état 11-20 im, contenu 4-5 im après le contenant
curseur : trajet 0,2-0,7 s en courbe, ease-out ; arrêt 0,13-0,27 s ; appui 1 à 4 im avant le temps fort ; chaque clic déclenche la suite
panneaux, maquettes : un seul geste ease-out 10-16 im, sans dépassement ; inclinaison −10 à −12° ramenée à 0 ou −4°
caméra : poussée qui cadre seul l'élément à lire ; interface construite 2 fois plus grande
titres : fondu 7-11 im + montée 1,5-1,9 % H en power1.out 24 im (Taxtello) ; le texte secondaire 0,1 s après l'objet (B)
HIÉRARCHIE
le bouton possède l'écran jusqu'à sa réponse, puis le résultat possède la fenêtre de lecture (B) ; secondaires 100-200 ms après, à 50-70 % de la course (F)
INTERDITS → À LA PLACE
fondu enchaîné par défaut → objet relais, aspiration, iris né d'un point
écran manquant dessiné en faux → arrêt, question (W)
interface sous 2 % H à lire → poussée calibrée sur l'élément
curseur qui erre ou attend → arrêt ≤ 0,27 s, chaque clic cause un état
même effet à chaque chapitre → une transition motivée par chapitre, 2 fois au plus
maquette qui glisse seule → l'appareil aspire, éjecte ou finit un recul
ease-in-out uniforme → ressort selon le sens
zoom sur un module ou un prix sans raison → zoom seulement sur ce qu'on doit lire
carte de fin figée → gel ≤ 1,2 s, reflet ou bouton qui pulse une fois
GARDE-FOUS
écrans, chiffres, logo, textes définitifs : du réel seulement · un composant qui change d'état reste le même objet (W)
```

Sources : chapitre 1 (les deux décors) et chapitre 7 (*Le curseur acteur*, *Le changement d'état*, *La maquette d'appareil et l'interface reconstruite*, *Le compteur qui roule*).

**Timeline type (phase 4)** : 8 mesures à 128 BPM, une mesure = 112,5 im, chaque début arrondi depuis l'image 0.

| Mesure (images) | Fonction | Plan de la bibliothèque C | Couture vers la suivante |
| --- | --- | --- | --- |
| 1 (f0-f112) | accroche : une question ou un chiffre | C01 Accroche de la première seconde | un point de la question devient relais |
| 2 (f113-f224) | le problème, la friction montrée | C02 Le problème montré | compression du chaos en point |
| 3 (f225-f337) | le produit entre par une interaction | C03 La révélation du produit | morph du conteneur |
| 4-5 (f338-f562) | démo : l'événement au curseur | C04 La démo au curseur, C05 Le composant qui change d'état, C09 La tenue vivante | le résultat devient compteur (C10 La couture par objet relais) |
| 6 (f563-f674) | preuve | C06 La preuve chiffrée | aspiration en pastille |
| 7 (f675-f787) | la promesse en un mot | C07 Le mot clé plein cadre (ou C08 La rafale récapitulative) | iris né d'un point |
| 8 (f788-f899) | logo, slogan, appel cliqué | C11 La signature finale | fin sur le son |

Appareil héros : C14 Le plan produit 3D en studio remplace C03. L'événement de démo, écrit pour `SHOTLIST.md` (B, seuils du chapitre 7 ; recette GSAP dans C04) :

```text
DÉMO f338-f562 · entrée : tableau rempli, carte posée · sortie : fichier exporté, nom lisible · héros : le curseur, puis le fichier
f420 le curseur part (20 im, courbe, ease-out) · f440 posé sur le bouton (arrêt 8 im)
f448 appui, 2 im avant le 1er temps de la mesure 5 : bouton −8 % en 1 im, onde 12 im · f454 curseur vers son repos, à 24 px de l'étiquette (B)
f478 résultat posé sur le temps · f506 coche verte (C05) · lecture jusqu'à f562, poussée 1,00 → 1,03 (B)
son : clic f449, attaque de révélation f479 (1 im après l'image, F)
```

**Coutures types**
- **L'objet relais** (31 % des vidéos nuit, 49 % des claires) : barre → anneau → « o » du logo, pic de vitesse de l'inOut sur le temps (étude 60 fps de Taxtello).
- **L'aspiration** : power2.in 9 im, l'objet disparaît 3 im avant le temps, la pastille bascule en roulement de 2-3 im fini sur le temps (Taxtello).
- **Le clic qui coupe** : drop 4 im après le clic (steventey) ; ou zoom 8 im après le clic (*Le curseur acteur*, chapitre 7).
- **Le morph du conteneur** : départ 3-5 im avant, pic de vitesse sur le temps ou le demi-temps (étude 60 fps de Shape morphing).
- **Celle qu'on n'utilise pas** : le fondu et le passage par le fond, le tic des vidéos notées 3 (44 % des vidéos nuit) ; le glitch en tranches, un cliché.

**Bloc BRAND à échanger** (P)

```text
HERO    <ce que le spectateur retient, 15 mots au plus>
APP     <produit> · écrans : <fichiers> · états : <liste dans l'ordre> · bouton de la démo : <nom>
RESULT  <ce que l'appui produit + chiffre de preuve et sa source>
SET     fond <hex> · accent <hex> · polices <titres> / <mono> · piste <fichier, BPM> · formats <16:9, 9:16…>
```

**Portes spécifiques**
- **Porte 1** : chaque écran animé existe en fichier ; liste des états écrite ; ancres des boutons mesurées sur l'écran ajusté (B).
- **Porte 2** : chaque démo écrite comme événement (départ, curseur, appui, résultat, lecture) ; le texte le plus long tient en 2 lignes (B).
- **Porte 3** : les trois images de B (ouverture, résultat, carte de fin). Puis la planche à 360 px (chapitre 12) et 8 images autour de l'appui.
- **Porte 5** : corrections au format 4 champs (où, constat, changement, ce qui reste fixe), dans l'ordre de B : information et lisibilité, puis timing, puis détail.
- **Porte 6** : clic sur l'appui, attaque la plus forte sur la révélation ; écoute au téléphone (B).

**Pièges du style**
1. **Interface illisible** : elle fait perdre le point dans 15 vidéos (3 sur 17 notées 5) (chapitre 1). Contrôle : planche à 360 px.
2. **Cadence lente** : plan médian 2,3 s, 31 % d'image figée (nuit), contre 0,47 s et 10 % chez les notées 5 (chapitre 1). Contrôle : `freezedetect`.
3. **Effet répété** : 18 vidéos nuit sur 32 ; flash blanc 14 fois en 30 s ([Tennis game launch video](https://prompt-motion.com/deifosv-04e4d3)). Contrôle : chaque accent 2 fois au plus.
4. **Fin figée** : 20 vidéos claires sur 37 finissent sur plus de 1,5 s figées (chapitre 1). Contrôle : gel final ≤ 1,2 s.

**À cocher**
- [ ] Chaque écran vient du vrai produit ; aucun manque comblé par un faux.
- [ ] Chaque démo est un événement en images globales, avec son repère son.
- [ ] Le curseur s'arrête 0,13-0,27 s, appuie 1 à 4 im avant le temps, et chaque clic cause un état.
- [ ] Texte à lire ≥ 6 % H, sinon poussée calibrée ; planche à 360 px lue.
- [ ] Une transition motivée par chapitre, 2 fois au plus ; aucun fondu par défaut.
- [ ] Figé sous 15 %, aucun maintien > 1 s, gel final ≤ 1,2 s.
