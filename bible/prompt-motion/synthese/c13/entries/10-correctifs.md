## Prompts correctifs (fix-up prompts)

Une V1 n'est pas la vidéo finale : comptez 2 à 5 allers-retours (guide Otom, p. 6). Au contrôle qualité (chapitre 12, Méthode de production), on nomme le défaut, on colle un correctif, on revérifie au même instant. Nos correctifs visent les défauts les plus fréquents des 233 vidéos (chapitre 11, Cohérence et clichés).

**Mode d'emploi**

- Une ou deux corrections par message : avec dix, « Claude en corrige huit et en casse deux autres » (guide Otom, p. 6).
- Citer l'instant, « entre 3 et 5 secondes » (p. 14), ou la mesure ; une capture plus une phrase (p. 15).
- Verrouiller la version qui marche et en garder une copie ; si le défaut revient, décrire le résultat attendu (p. 15).
- Un ressenti se dit en nombres (flxrnc) : « fais pop » = échelle 1,0 → 1,08 → 1,0 en 6 images ; « ça traîne » = tenues raccourcies d'un temps.

**Six correctifs du guide repris tels quels (guide Otom, p. 14)**

```text
03 · Trop de choses bougent en même temps
Il y a trop d'éléments animés simultanément. Un seul élément principal doit bouger à la fois. Décale les éléments secondaires de 100 à 150 ms et supprime les mouvements purement décoratifs.
```

```text
04 · Le texte est illisible
Le texte doit être lisible sur un téléphone. Taille minimale : 4 % de la hauteur du cadre pour les textes secondaires, 8 % pour les titres. Vérifie le contraste avec le fond, et coupe les phrases de plus de 8 mots en deux lignes.
```

Plus strict que notre plancher (3 % à lire, 6 % pour le message) : utile pour un public qui découvre l'offre.

```text
05 · Les éléments sont mal alignés
Aligne tous les éléments sur une grille de 12 colonnes avec des marges identiques de chaque côté. Les textes d'une même scène partagent le même bord gauche. Liste-moi les éléments que tu as déplacés.
```

```text
06 · On ne sait pas où regarder
La hiérarchie visuelle n'est pas claire. Dans chaque scène, l'élément le plus important doit être au moins deux fois plus grand que le reste et seul dans la couleur d'accent. Réduis et éclaircis tout ce qui est secondaire.
```

```text
07 · La charte n'est pas respectée
Reprends strictement ma charte : [BLOC CHARTE]. Remplace toute couleur qui n'y figure pas. Fais-moi la liste des couleurs et polices réellement utilisées dans le fichier, pour vérification.
```

```text
10 · Ça ne fait pas assez professionnel
Regarde cette animation comme un directeur artistique exigeant. Liste les 5 défauts qui la rendent amateur (rythme, espacements, typographie, cohérence des mouvements, finition), classés par impact, puis corrige les 3 premiers uniquement.
```

**Quatre correctifs du guide, corrigés par la Bible**

01 : « Ralentis l'ensemble de 30 % », texte immobile 1,5 s, écran final 2,5 s. Étirer décale la grille ; 2,5 s figées sont un temps mort.

```text
01 · L'animation va trop vite (version Bible)
[3 à 5 s] va trop vite. Pas de ralenti global : la grille se décalerait. Baisse le tempo (128 → 110 BPM) en gardant des mesures entières, ou retire un événement par mesure. Chaque phrase reste lisible 0,4 s + caractères / 15 (1 s au moins), sans se figer : poussée de 2 %. Le carton final tient une mesure au plus, animé.
```

02 : la Bible garde le linéaire pour la mécanique (voir *Le système de courbes* au chapitre 9).

```text
02 · Les mouvements sont saccadés (version Bible)
N'anime que transform et opacity. Entrées en ease-out, sorties en ease-in jusqu'à la coupe, déplacements en ease-in-out ; linéaire pour les tracés, défilements et le x d'un saut. Rends à 60 fps ; au-delà de 40 px par image, flou directionnel de 8 à 16 sous-images.
```

08 : l'image en double et la pause de 0,5 s gèlent chaque tour (voir *Le bouclage* au chapitre 10).

```text
08 · La boucle saute (version Bible)
Rends les images 0 à N-1 : l'image qui suivrait la dernière est la première, sans image en double. Chaque élément revient à son état de départ, immobile 8 à 10 images autour de la couture, ou dans un geste qui la traverse. Durée en mesures entières : la musique boucle en phase.
```

09 : « Supprime les dégradés, les ombres floues, les rebonds » ; or 14 des 17 vidéos notées 5 ont un dépassement, 5 un dégradé.

```text
09 · Le rendu est trop générique (version Bible)
Retire les figures toutes faites : halos néon, gerbes de particules, globe de points, HUD de coin, icônes génériques, rebond élastique répété. Garde un dépassement court (2 à 20 %) sur les entrées clés, et les dégradés si le style les porte. Un seul geste graphique fort, propre à [mon secteur], qui évolue de scène en scène. Propose-moi deux directions avant de modifier.
```

**Nos correctifs (défauts mesurés)**

Interface illisible : 133 vidéos, médiane 1,5 % de la hauteur, dont [Dub promo video](https://prompt-motion.com/steventey-0d20e4), notée 5. Contrôle : chaque tenue vue à 400 px de large.

```text
L'interface de [6 à 9 s] est illisible sur téléphone. Recadre au lieu de réduire : une poussée calibrée (×1,35 à ×2,3) cadre l'information, qui fait au moins 3 % de la hauteur (6 % pour le message), contraste 4,5:1. Le reste devient décor : 14 px et 25 % d'opacité au plus, immobile.
```

Temps mort : 103 vidéos ; « long enough to read » a donné 40 % de maintiens ([SaaS launch video](https://prompt-motion.com/aschapmann-131210)). Contrôle : planche à 4 images/s. Voir *Le maintien : temps de lecture ou temps mort* (chapitre 9).

```text
Entre [8 et 11 s], l'image s'arrête. Aucun maintien immobile au-delà d'un temps. Une tenue dure le temps de lecture des mots affichés et reste vivante : poussée de 2 à 3 % ou détail qui pulse sur le temps. Ne coupe jamais sur une image immobile.
```

Fin figée : 64 vidéos, médiane 1,9 s ; 2,5 s chez [Food craving launch film](https://prompt-motion.com/ultimaxbt-2ddf1e). Contrôle : 3 dernières secondes à 4 images/s. Voir *La signature finale* (chapitre 10).

```text
La fin est figée [2,5 s]. La signature tient une mesure au plus, animée : un élément par temps (marque, nom, slogan, URL), puis une pulsation. Nom à 13 % de la hauteur au moins, appel concret, police et fond du film. L'image ne s'arrête pas avant le son.
```

Même accent répété : 59 vidéos ; flash 14 fois en 30 s ([Tennis game launch video](https://prompt-motion.com/deifosv-04e4d3)). Contrôle : une image par occurrence.

```text
Le [flash blanc] revient [14] fois. Le même accent identique 3 fois au plus, jamais sur deux coupes de suite, réservé aux 1 ou 2 plus gros temps forts. Ailleurs, varie l'amplitude, la direction ou la couleur. Liste-moi les accents retirés.
```

Mot coupé par le bord : 41 vidéos ; « FRAME » réduit à « FR » 0,3 s ([Claude motion designer showreel](https://prompt-motion.com/mrtanviir-132457)). Contrôle : pic de chaque poussée et dépassement. Voir *Formats et zones sûres* (chapitre 2).

```text
À [2,9 s], « [mot] » est coupé par le bord. Le cadre final d'une poussée ou d'un dépassement contient la cible entière, marge 6 % ; seul le décor déborde. 48 px au moins entre texte et objet animé. En 9:16, texte entre y = 360 et y = 1420.
```

Rendu cassé : 57 vidéos (zoom pixelisé : [Photon journey from the Sun](https://prompt-motion.com/apoorvjain25-d24184) ; 30 fps et police de repli : [Spotify product film](https://prompt-motion.com/brainextends-e19ac3)). Contrôle : ffprobe, bande sur chaque mouvement rapide. Voir *Le flou de mouvement et les traînées* (chapitre 6).

```text
[Pixels au zoom de 12 s]. Rends à 60 fps, 1920 × 1080 au moins. Source agrandie au moins aussi grande que sa taille au zoom maximal ; pas de will-change sur un texte zoomé. Flou de 8 à 16 sous-images, ou mouvement ralenti. Polices auto-hébergées, mesurées après document.fonts.ready.
```

Son décalé : 104 vidéos à son posé, absent ou décalé ; tempo annoncé 130, mesuré 119 (Food craving launch film). Contrôle : 3 attaques à ±2 images de la grille. Voir *Couper en avance, atterrir sur le temps* (chapitre 9).

```text
L'image ne tombe pas sur la musique. Mesure dans le fichier le tempo et le premier temps, sans te fier au BPM annoncé. Chaque geste clé sur round(n × images par temps), image pleine 1 à 3 images avant l'attaque. Retime jusqu'au calage, puis donne-moi le relevé.
```

Fondu par défaut : 59 vidéos, 51 % des notées 1 à 3 contre 19 % des 4 ou 5 ; HUD décoratif : 48. Contrôle : milieu de chaque transition. Voir *Le fondu et le passage par le fond* (chapitre 4).

```text
Remplace chaque fondu par une transition motivée : objet relais, coupe sur le mouvement, iris né d'un point. Fondu seulement aux bornes d'acte. Retire tout repère de production à l'écran (timecode, numéros de cue).
```

**À cocher**

- [ ] Défaut nommé avec son instant (secondes, ou mesure et temps) et une capture.
- [ ] Un correctif collé, deux au plus par message.
- [ ] Version précédente copiée et déclarée référence.
- [ ] Rendu revérifié au même instant, avec le contrôle chiffré du correctif.
- [ ] Après deux essais vains : décrire le résultat attendu ou repartir de la version validée.
