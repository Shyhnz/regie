## Le piège des prompts trop longs (prompt length, lost tail)

Un prompt-cahier des charges de 4 000 à 15 000 caractères obtient une conformité spectaculaire sur le début du film, puis perd la fin. Il noie aussi ses interdits, et ne règle jamais la lisibilité si elle n'est pas chiffrée. **Quand s'en servir** : au moment d'écrire le prompt de production (étape « prompt Claude » du parcours), dès que le brouillon dépasse 3 000 caractères. **Ce qu'on décide** : ce qui reste dans le prompt, ce qui part dans un fichier de timeline, ce qu'on répète en tête et ce qu'on fait vérifier par une image. **Ce qu'on vérifie** : la dernière scène, image par image, avant le rendu complet.

**Ce que dit le corpus**

- 15 prompts dépassent 1 000 caractères, dont 9 au-delà de 4 000 (moyenne 3,78). Aucune des 17 vidéos notées 5 n'a un prompt de plus de 994 caractères. Mais la longueur ne fait pas baisser la note : 3,96 entre 101 et 400 caractères contre 3,89 au-delà de 400, p = 0,51 (non significatif). Le coût est ailleurs : dans la conformité à la fin et aux interdits.
- **La fin faiblit.** Une fin figée, bâclée ou perdue est relevée dans 9 des 15 vidéos à prompt de plus de 1 000 caractères (60 %), contre 63 sur 215 en dessous (29 %) ; p = 0,02 (fragile : recherche par mots clés dans les défauts relevés, petits effectifs).
- **Les interdits noyés sautent.** Sur 15 listes d'interdits vérifiées, les 3 non tenues sont dans des prompts de 4 024 à 8 142 caractères. Les 12 tenues vont de 202 à 15 306 caractères : un long prompt peut tenir ses interdits, mais tous les échecs sont longs.
- **Ce que la longueur ne règle pas.** Texte trop petit dans 14 des 15 vidéos à prompt de plus de 1 000 caractères (93 %), temps morts dans 11 (73 %). Aucun de ces prompts ne donne une taille minimale en % de la hauteur.
- **Biais d'auteur.** 7 des 15 longs prompts viennent de 3 auteurs (twoclipping ×3, notdwd ×2, ultimaxbt ×2) : les tendances sont des cas, pas des lois.

![Six images d'un même film : le début suit le prompt (téléphone, wok, cartes de plats), la fin n'est plus que du texte noir sur blanc](ILLUS:prompts-longs-1)

*[Food craving launch film](https://prompt-motion.com/ultimaxbt-2ddf1e), 0:01.50, 0:04.50, 0:07.00 en haut, 0:12.40, 0:14.00, 0:15.90 en bas : le début suit le prompt de 4 667 caractères (compositeur irisé, wok orange, inondation lime et cartes) ; l'outro demandée « 92px, white on black », le coursier, l'épingle devenue logo et la serif ont disparu : « Cross AI » noir sur blanc, à environ 3 % de la hauteur, figé 2,5 s.*

**Ce qui se perd, cas par cas**

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Fin du film perdue | [Food craving launch film](https://prompt-motion.com/ultimaxbt-2ddf1e), 0:12.40 à 0:16.25 | outro, coursier, logo et serif perdus ; 4 images témoins demandées, dont l'outro, jamais exigées |
| Storyboard compressé à la fin | [Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4), 0:11.00 | suivi à ±0,5 s jusqu'à 9 s ; signature à 11 s au lieu de 12,8 s ; 1,6 s d'immobilité finale |
| Interdit noyé | [Spotify product film](https://prompt-motion.com/brainextends-e19ac3), f71 et f119 | fondus et titres superposés malgré l'interdit placé à 81 % du texte ; 30 fps au lieu de 60, police de repli |
| Structure contre interdit | [Prompt Motion site promo](https://prompt-motion.com/antonio-kodheli-490109), dernières 5 s | « dead holds » interdits, mais b32 à b46 = 7 s d'outro : 5 s de carte fixe |
| Maintien final rallongé | [Ora 2 image model launch film](https://prompt-motion.com/rossaxbt-3085b7), fin | maintien d'environ 2,7 s après « Out now » au lieu des 2 s demandées |
| Promesse finale réduite | [Speech built as architecture](https://prompt-motion.com/gdgtify-287ddf), fin | la « plateforme assemblée » écrite à 98 % du texte n'est qu'un mot posé sur une poutre ; 2,7 s de tableau figé |

Deux nuances. D'abord, c'est **la fin du film** qui se perd, pas forcément la fin du texte : l'outro d'ultimaxbt-2ddf1e est décrite à 59 % du prompt, la serif à 24 %. Ensuite, quand le prompt se contredit, **la structure chiffrée l'emporte** sur l'interdit verbal (antonio-kodheli-490109). Même revers côté interdits : 19 interdits tous tenus chez daniel-haida-8691d4, mais une « prudence générale » (image sombre, interface petite), et « every scene needs room to breathe » y produit 34 % d'immobilité.

**Ce qui marche dans les longs prompts**

- **Le début est obéi à la lettre** : 7 cues tenus à 0,1 s ([Speech built as architecture](https://prompt-motion.com/gdgtify-287ddf)) ; 7 coupes à l'image près sur une formule de temps ([Frame by Frame launch video](https://prompt-motion.com/notdwd-7de38a)). Le prompt long vaut pour un remake mesuré, pas pour une première exploration.
- **Le pilote avant la production** : « show me the beat map and 4 stills… before writing the full film » ([Photo print app launch film](https://prompt-motion.com/twoclipping-221cab), [Orange dot motion system](https://prompt-motion.com/ultimaxbt-bbebf5)). Le bloc ne sert que si l'on regarde vraiment ces images, la dernière comprise.
- **Le détail sorti du prompt** : « Every cue lives in timeline.ts (in beats) » (antonio-kodheli-490109) ; toutes ses actions tombent à 1 à 4 images d'un temps.

**Guide Otom.** Rempli, le prompt maître en 9 sections fait environ 2 800 caractères, sous la zone à risque ; mais ses critères de qualité sont à la fin (§9), là où ultimaxbt-2ddf1e a perdu outro, logo et serif : les répéter en tête (guide Otom, p. 7). « Envoyer dix remarques en un seul message. Claude en corrige huit et en casse deux autres » (guide Otom, p. 6) : même logique pour un premier prompt surchargé. **Correction de la Bible** : le guide veut un écran final tenu « au moins 2,5 s » (p. 14) ; nos mesures en font un temps mort. Fin animée de 1,5 à 2 s.

**Règles**

1. **3 000 caractères au plus** pour le prompt lui-même (seuil de travail, non mesuré : aucune liste d'interdits ratée sous 4 024, aucune note 5 au-delà de 994). Le minutage détaillé va dans un fichier (`timeline` en temps, `copy` pour les textes) que le prompt cite.
2. **Les contraintes critiques en tête** (durée, tempo, taille minimale du texte, maintien maximal, fin), puis **répétées en contrôles mesurables** dans le bloc de vérification.
3. **La dernière scène écrite comme les autres** : durée en temps, ce qui bouge, jamais « enough stillness ». Une image témoin de la dernière scène et une bande des 2 dernières secondes avant le rendu complet.
4. **Relire le prompt contre lui-même** : la somme des durées de la structure ne doit créer aucun maintien interdit. Passe « brouillon, critique, réécriture » (apport OpenMontage) : chaque adjectif remplacé par un nombre.
5. **Chaque interdit a son remplacement**, plus une densité minimale (un événement toutes les 0,5 à 1 s en style 1600), sinon la liste éteint l'image.

Voir aussi *La signature finale : logo, slogan, appel, sans temps mort (end card, logo lockup, tagline + URL + CTA, outro)* et *Le récapitulatif en rafale avant la signature (recap montage, accelerating rewind, recap grid)* au chapitre 10, *Le maintien : temps de lecture ou temps mort (reading hold, living hold, dead hold, static end card)* au chapitre 9, l'étude *Taxtello bookkeeping app film — @daniel_haida* au chapitre 14, et *Interdits et contrôle qualité* dans ce chapitre.

**À cocher**

- [ ] Prompt de 3 000 caractères au plus ; minutage détaillé dans un fichier de timeline séparé.
- [ ] Durée, tempo, taille minimale du texte (% de la hauteur), maintien maximal (1 s) écrits dans les 5 premières lignes.
- [ ] Dernière scène décrite en temps et en mouvement ; fin animée de 1,5 à 2 s, aucune carte figée.
- [ ] Somme des durées de la structure relue : aucun bloc sans action de plus de 1 s.
- [ ] Image témoin de la dernière scène et bande des 2 dernières secondes validées avant le rendu complet.
