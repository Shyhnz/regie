## Les ingrédients qui changent le résultat (prompt ingredients)

Aucun ingrédient de prompt ne fait monter la note de fabrication : Claude l'apporte seul. Chaque ingrédient sert à obtenir **ce qu'on veut**, et ce qui est chiffré est obéi presque à la lettre. Un adjectif, lui, est interprété, souvent à la baisse. Cette entrée sert à relire un brief avant de l'envoyer : chaque ligne doit acheter une décision. Règle de décision : remplacer chaque adjectif par un nombre.

**Ce que disent les chiffres**

Les notes sont tassées : 73 % des 230 vidéos sont notées 4. Chaque ingrédient a été comparé avec et sans, par un test de permutation (20 000 tirages). Un seul écart est net : la durée chiffrée, 3,95 (n = 148) contre 3,70 (n = 82), p = 0,001. Mais les prompts sans durée comptent 40 demandes d'une ligne. Au-delà de 100 caractères, l'écart tombe à +0,19 (p = 0,04, fragile). Tous les autres écarts sont **non significatifs** (p > 0,2). L'effet des ingrédients se lit donc dans la **conformité** : ce que la vidéo tient de ce qui est écrit.

**Le tableau des ingrédients**

| Ingrédient | Effet mesuré | Exemple |
| --- | --- | --- |
| Durée en secondes | 138 durées sur 148 tenues à ±10 % ; sans durée, médiane 38,6 s (de 10 à 457 s) | [Brieform product presentation](https://prompt-motion.com/majorbaguette-fb11d7) : « 30 seconds long », 900 images exactes |
| Tempo chiffré (BPM) | 13 prompts, note 3,69 (non significatif) ; tempo mesuré égal au demandé dans 10 cas ; animées sur la musique 7 sur 13 | [Frame by Frame launch video](https://prompt-motion.com/notdwd-7de38a) : grille en formule à 124 BPM, 7 coupes à 1 image près |
| Calage demandé, sans BPM | 10 prompts, 8 animées sur la musique (80 %), note 4,10 ; petit effectif | [Supademo launch video](https://prompt-motion.com/jhylee95-e1152f) : « retimed until synced », 39 gestes sur 41 à ±1 image |
| Son demandé (musique composée, bruitages) | musique composée demandée : 8 prompts, 8 bandes-son, 4 calées ; son demandé sans calage : 11 sur 17 animées sur la musique | [Lighthouse keeper silent short](https://prompt-motion.com/kamstudiolabs-0b0824) : « sound tells half the story », bruitages à 0-9 images des événements |
| Storyboard minuté | 8 prompts, 3,75 (non significatif) ; suivi à 0,1 s ou à 1 image près | [Speech built as architecture](https://prompt-motion.com/gdgtify-287ddf) : 7 bascules à 0,1 s de la borne demandée |
| Liste d'interdits | 17 prompts, 3,88 (non significatif) ; 12 tenues sur 15 vérifiées, 3 échecs dans des prompts de 4 024 à 8 142 car. | [Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4) : 19 interdits tenus |
| Référence de style | 37 prompts, 3,78 (non significatif) ; transmet le look, pas toujours le rythme | [Engraving-style Claude ad](https://prompt-motion.com/lexnlin-038035), 5 : vidéo jointe, « Study the reference closely: smoothness, timing, shot durations » |
| Matière de marque, codes hex | 67 prompts, 3,79 (non significatif) ; vrais textes, logo et couleurs à l'écran | [SaaS launch video](https://prompt-motion.com/aschapmann-131210) : vrai slogan, rouge #FE412F, logo vectorisé |
| Format, taille, 60 fps | ratio demandé tenu dans presque tous les cas relevés ; 60 fps demandés 12 fois, obtenus 10 | [Prompt Motion site promo](https://prompt-motion.com/antonio-kodheli-490109) : 1280×720 au lieu de 1920×1080 |
| Étape de contrôle | 18 prompts, 3,83 (non significatif) ; ce qui est mesuré est tenu | [Paper-style product launch film](https://prompt-motion.com/ik-builds-b8bdcf) : « -14 LUFS », mesuré -14,2 LUFS |
| Concept unique | non testé ; ordonne les effets en récit | [Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e), 5 : « art-directed rather than a random collection of effects » |
| Bloc `<inputs>` « Ask me for… » | 10 prompts, 3,80 (non significatif) ; Claude réclame la matière avant d'écrire | [Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86) : états, couleur et piste demandés d'abord |
| Taille minimale du texte | absente des 230 prompts ; texte trop petit dans 82 %, 76 % et 93 % des vidéos selon la longueur du prompt | [UGC ad generator promo](https://prompt-motion.com/twoclipping-6dd14e) : « big type » rendu à environ 4 % de la hauteur |

Lecture : une ligne de prompt chiffrée est une valeur que Claude ne choisira plus. Le reste du chapitre détaille chaque groupe : *Durée, tempo et carte des temps (duration, BPM, beat map)*, *Références de style et de goût (style references, named looks)*, *Interdits et contrôle qualité (banned list, QA loop)* et *Donner la matière : contenu exact, marque et entrées (inputs, brand assets, real content)*.

**Ce qui est chiffré est obéi, l'adjectif est tenu à la baisse**

- « 120 BPM, 7 bars » donne 840 images, soit 14,00 s exactes ([Morphing UI states loop](https://prompt-motion.com/demonugc-4c5753)). La même vidéo sort muette : un tempo écrit ne garantit pas une bande-son.
- « Make the last frame identical to the first » est tenu au pixel près dans [Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86) (écart 0,33/255). La même phrase est à moitié tenue dans [Morphing UI states loop](https://prompt-motion.com/demonugc-4c5753) : curseur qui saute de 140 px. Sans vérification demandée, une consigne dépend du tirage.
- « The key output as big type » donne une liste à environ 4 % de la hauteur ([UGC ad generator promo](https://prompt-motion.com/twoclipping-6dd14e)).
- « Keep each scene on screen long enough to read » donne 40 % de maintiens statiques ; « Springs » sans chiffre donne un ease-out sans dépassement ([SaaS launch video](https://prompt-motion.com/aschapmann-131210)).
- « Every scene needs room to breathe » donne 34 % d'immobilité ([Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4)).

**Remplacer chaque adjectif par un nombre**

Selon un article de flxrnc (X) repris dans nos apports, les adjectifs sont « l'endroit où vit le look par défaut ». Traductions tirées de nos mesures :

| Adjectif du brief | Nombre à écrire |
| --- | --- |
| « dynamique », « rapide » | 128 BPM ; un geste par temps ; aucun plan immobile plus de 1 s |
| « gros texte » | message ≥ 64 px en 1920×1080 ; aucun texte lu sous 3 % de la hauteur |
| « assez long pour lire » | 0,2 s par mot en liste rythmée ; ≥ 1,0 s pour une phrase immobile |
| « ressorts », « vivant » | back.out, dépassement de 2 à 20 % sur les entrées clés |
| « transitions fluides » | transition motivée (objet relais, volet de 250 ms) plutôt qu'un fondu enchaîné |
| « couleurs de la marque » | 3 à 5 codes hex avec leur rôle (fond, texte, accent) |

Le seuil de 64 px vient du skill motion-premiers-principes ; les temps de lecture suivent l'arbitrage de la Bible (0,2 s par mot mesuré, plancher de 1,0 s pour une phrase). Pour les courbes, voir *Le système de courbes : expo-out pour entrer, ease-in pour sortir (easing system, damped springs, spacing, hold-keyframe snap)* au chapitre 9. Pour la grille, *La grille de tempo : une horloge, une scène par mesure (beat grid, BPM frame grid, shared beat clock, bar-locked scenes)* au chapitre 9. Pour les couleurs, *La palette fermée et l'accent qui a un sens (restricted palette, single accent color, semantic color coding)* au chapitre 6. Pour le concept, *Le dispositif unique : une métaphore ou un concept décliné dans chaque scène (extended metaphor, governing concept, self-demonstrating content)* au chapitre 10.

**Ce que dit le guide Otom, corrigé**

Le prompt maître en 9 sections (guide Otom, p. 7) couvre objectif, charte, contenu, mouvement, durée, références, contraintes, méthode et critères. Il n'a ni musique, ni tempo, ni grille : la Bible ajoute ces lignes, car 14 des 17 vidéos notées 5 sont animées sur la musique. Il écrit « Pas de rebond » (guide Otom, p. 7) : la Bible le corrige, 14 des 17 vidéos notées 5 ont un dépassement ou un ressort ; il est permis sur ce qui naît. Il demande des codes couleur exacts plutôt que « bleu » (guide Otom, p. 5) : d'accord. Son lexique de 6 mouvements (guide Otom, p. 5) va dans notre sens, car chaque phrase type porte un nombre (« glisse de 30 px », « 120 ms d'écart »).

**À cocher**

- [ ] Chaque adjectif du brief souligné, puis réécrit en valeur (px, %, s, BPM, hex).
- [ ] Durée, tempo, format et 60 fps écrits en chiffres.
- [ ] Taille minimale du texte écrite : message ≥ 64 px, rien de lu sous 3 % de la hauteur.
- [ ] Tenue maximale écrite : aucun plan immobile plus de 1 s.
- [ ] Un concept en une phrase, qui ordonne les effets.
- [ ] Chaque consigne critique a son contrôle (image extraite, mesure, seuil).
