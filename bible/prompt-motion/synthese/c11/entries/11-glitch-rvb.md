## Le glitch RVB, le décodage et le stroboscope gratuits (RGB split, slice glitch, text scramble, strobe)

Tranches décalées, franges rouge et cyan, texte qui se décode en glyphes aléatoires, stroboscope plein cadre : c'est le cliché « tech » le plus relevé du corpus (31 techniques jugées « cliché », 53 défauts). Il touche 47 vidéos : 43 des 186 notées 4 ou 5 (23 %), 4 des 47 notées 1 à 3 (9 %), et 5 des 17 notées 5. C'est un tic d'ambition, pas de vidéo ratée : 4,02 de moyenne avec, 3,82 sans. Aucun des 47 prompts ne le demande (zéro mention de glitch, RGB, flash ou décodage, prompt médian de 150 caractères) : c'est un réflexe de Claude, surtout en showreel (26 des 47) et sur musique (41 des 47). Gravité 2 ; 3 quand il devient stroboscope.

**Symptôme mesuré**

- Sous-familles : tranches, séparation RVB et aberration chromatique dans 38 vidéos ; décodage de texte dans 11 ; stroboscope, négatif en rafale ou moiré dans 6.
- Répétition : au moins 17 des 47 vidéos le rejouent 3 fois ou plus. Environ 18 mots à franges dans [Photon journey from the Sun](https://prompt-motion.com/apoorvjain25-d24184) ; 9 coupes identiques dans [Fitters Bible app promo](https://prompt-motion.com/adamdesgns-478d6d) ; 8 dans [Mathematics motion showreel](https://prompt-motion.com/math-files-39c9d0) ; 6 décodages en 15 s dans [Reflex brand motion reel](https://prompt-motion.com/reflex-cloud-72ffe5).
- Durée : 20 im de bruit à 30 fps dans [Chaotic Claude POV video](https://prompt-motion.com/kloss-xyz-15182a), 22 im dans [Claude motion reel](https://prompt-motion.com/jasonzhou1993-8595e0). Au-delà de 12 im à 60 fps, l'œil ne voit plus que du bruit.
- Hors grille : coupe 3,9 im avant le temps et 7,3 im avant le kick dans [Kinetic type and particle showreel](https://prompt-motion.com/m1n9-k7-ff9ab9) ; glitchs isolés pendant les maintiens dans [ODATANO Cardano hype edit](https://prompt-motion.com/maxalexweber-67688b), noté 3.
- Illisible : décodage de sous-titres mono à 1 % H dans [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), à 1,2 % H dans [Motion designer portrait showreel](https://prompt-motion.com/ndhabarde11-f155b4).
- Photosensible : stroboscope de lettres d'1 s dans Chaotic Claude POV video (0:34.50), mesuré à 8 flashs dans la seconde ; rembobinage de 13 coupes en 1,1 s dans [Orange dot motion system](https://prompt-motion.com/ultimaxbt-bbebf5).

![Six mots plein cadre, ABSORBED, 170,000 YEARS, SPEED, ALMOST, YOU, YOU BLINKED, tous avec la même frange rouge à gauche et cyan à droite, sur six décors différents](ILLUS:glitch-rvb-1)

*[Photon journey from the Sun](https://prompt-motion.com/apoorvjain25-d24184), 0:01.43 à 0:18.47 : la même aberration rouge/cyan d'environ 1 % L, sur l'image d'arrivée de chaque mot impact. Au troisième, ce n'est plus un accent.*

![Six images d'un format vertical : « I WAS BORN. » terracotta et blanc, découpé en tranches décalées avec franges rouge, jaune et cyan, pendant 20 images](ILLUS:glitch-rvb-2)

*[Chaotic Claude POV video](https://prompt-motion.com/kloss-xyz-15182a), 0:03.30 à 0:03.93 : tranches, RVB et deux flashs blancs pendant environ 20 im à 30 fps. Repris une dizaine de fois comme transition par défaut.*

**Les cas tolérés, et pourquoi**

| Cas | Vidéo et minutage | Mesure |
| --- | --- | --- |
| Glitch unique, calé | [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:10.08 | 5 tranches à ±5 % L, recalées en 8 im par paliers, sur la croche ; sa fiche le juge « seule concession au cliché » |
| Panne racontée | [LiteLLM promo reel](https://prompt-motion.com/misbahsy-80eaec), 0:09.50 | blocs noirs en 18 im sous « Providers fail. » : le texte dit que ça casse |
| Négatif rare | [Engraving-style Claude ad](https://prompt-motion.com/lexnlin-038035), 0:01.17 | 4 négatifs de 2 im en 11 s, au plus 1 flash par seconde mesuré |
| Code qui se corrompt | [UK dubstep track with ASCII visuals](https://prompt-motion.com/rames-jusso-589f80), 0:18.50 | le contenu se dégrade en glyphes sur 4 s, puis coupe vers l'ASCII |
| Rafale de rappel (limite) | [Kinetic type showreel](https://prompt-motion.com/zheke-38deff), 0:09.37 | franges puis inversion jaune et cyan : seule sortie de palette d'un film noté 5 |

**Pourquoi ça dessert** : l'effet dit « technologie » sans rien dire du produit. Répété, il devient la signature d'une vidéo générée, et c'est le « même accent répété partout » que l'utilisateur rejette. Sur le site prompt-motion, « RGB split » figure dans les listes d'interdits du modèle de showreel et de l'article « make AI motion graphics look less AI » ; un seul des 233 prompts du corpus l'interdit ([UGC ad generator promo](https://prompt-motion.com/twoclipping-6dd14e)). Sans interdit écrit, il revient.

**Règle**

1. Un sens écrit, sinon rien : panne, code corrompu, « mais », bascule vers un rendu numérique. Le décodage, seulement si le texte parle de code, de chiffrement ou d'URL.
2. Deux occurrences au plus par vidéo, jamais à l'identique : la seconde change d'amplitude ou de direction, ou monte en intensité.
3. Court : 3 à 12 im à 60 fps (2 à 4 im à 30 fps), positions par paliers d'une image sur deux.
4. Sur le temps, avec un son : pic sur l'image du temps ou 1 à 2 im avant l'attaque (voir « Couper en avance, atterrir sur le temps » au chapitre 9).
5. Jamais pendant un message à lire : brouillage seulement en transition de 0,8 s au plus (skill motion-premiers-principes), sur un libellé d'au moins 4 % H.
6. Au plus 3 flashs plein cadre par seconde (règle d'accessibilité courante) ; un stroboscope ne dépasse pas 0,5 s, en amplitude réduite.
7. Franges et blocs dans les couleurs de la palette. Dans un film imprimé ou éditorial, pas de glitch du tout : il « jure avec l'esthétique imprimée » de [Indian civilisation history film](https://prompt-motion.com/buildfastwithai-53234e).

**Verdict** : cliché par défaut ; à adapter seulement quand le script dit « ça casse », en promo d'outil développeur, d'IA ou de crypto. À éviter en typo cinétique 1600 et pour une marque premium. On le décide au découpage, on le traque au contrôle qualité. À la place : une coupe sèche sur le temps, un trait qui raye le mot réfuté, un volet en trame ou en tuiles, un objet relais, un flash dans la couleur d'accent. Le détail des mécaniques est au chapitre 4 (« Le glitch en tranches et RVB, un cliché »), au chapitre 3 (« Le texte qui s'écrit sur place : frappe, décodage, glitch ») et au chapitre 6 (« Le coup de flash : surexposition, image négative, glitch RVB »).

**Contrôle avant rendu**

| Contrôle | Image à extraire | Mesure | Seuil |
| --- | --- | --- | --- |
| Sens et nombre | aucune : chercher `glitch`, `rgb`, `chromatic`, `scramble` dans le code | raison écrite de chacun, nombre d'occurrences | ≤ 2, chacune motivée ; 0 sur un texte à lire |
| Durée et calage | bande à pleine cadence autour de chaque glitch (`illus.py range`, 8 à 12 images) | durée en images, écart au temps | 3 à 12 im à 60 fps ; pic à 0 à 2 im avant l'attaque |
| Photosensibilité | luminance moyenne de chaque image du film : `ffmpeg -i film.mp4 -vf signalstats,metadata=print:key=lavfi.signalstats.YAVG:file=yavg.txt -f null -` | paires de variations opposées d'au moins 20 sur 255, sur 1 s glissante | ≤ 3 par seconde |
| Test des 3 secondes | le film une fois, sans le son, à un tiers | ce qu'il retient | son message, pas « ça glitchait » |

Repères mesurés avec ce compteur : stroboscope de Chaotic Claude POV video 8 flashs par seconde, [Shin Majin-shiki promo](https://prompt-motion.com/majin-appsheet-2d3c1a) 5, tunnel de [Poster breaking its frame](https://prompt-motion.com/pankajkumar-dev-0bee87) 4. Engraving-style Claude ad et Keyframe motion design reel restent à 1. C'est un indicateur, pas le test complet WCAG 2.3.1 : au-dessus de 3, on corrige.

Le test des 3 secondes vient du guide Otom (p. 6), comme sa règle « un seul point focal à la fois » : un glitch plein cadre vole le point focal au mot. Son correctif 09, « Le rendu est trop générique » (p. 14), ne cite pas le glitch : ajoute-le à la liste des suppressions, mais garde rebonds et dégradés, que la Bible autorise.

**À cocher**

- [ ] ≤ 2 glitchs ou décodages dans la vidéo, chacun avec une raison écrite
- [ ] Chacun dure 3 à 12 im à 60 fps et tombe sur un temps, avec un son
- [ ] Aucun glitch ni brouillage pendant un texte à lire ; libellé décodé ≥ 4 % H
- [ ] ≤ 3 flashs plein cadre par seconde mesurés ; aucun stroboscope de plus de 0,5 s
- [ ] Franges et blocs dans la palette ; aucun glitch dans un style imprimé ou éditorial
