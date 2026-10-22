## Les tics de vidéo générée, par fréquence

Les 1 141 défauts et 163 clichés relevés dans les 233 vidéos se rangent en 18 tics, classés ici par nombre de vidéos touchées. C'est le point d'entrée du contrôle qualité : chaque tic a son entrée, son contrôle chiffré et sa ligne dans la grille finale. La gravité dit ce qu'on corrige d'abord : **G3** casse la lecture, le calage ou le message ; **G2** affaiblit le rythme ou la finition ; **G1** signe le gabarit IA, sans bloquer la lecture.

**Quand s'en servir** : deux fois par vidéo. Au découpage en plans (étape 5), on relit le storyboard contre les 18 lignes : figures, HUD, accent répété et durée s'évitent avant le code. Au contrôle qualité (étape 9), on passe le rendu dans l'ordre G3, puis G2, puis G1. Une vidéo avec un tic G3 ne part pas.

![Six images de six vidéos : tableau de bord aux étiquettes minuscules, page de lecture immobile, plateau de Scrabble du carton final, hub en étoile à câbles orange, « EVERY FR » coupé par le bord, « INTENT » dédoublé en rouge et cyan](ILLUS:tics-1)

*Six tics en six images. [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:06.50 : étiquettes à 1,5-2,4 % H, dans une vidéo notée 5. [Sotto reading app explainer](https://prompt-motion.com/1stnoel-c20a89), 0:33.00 : 6,8 s sans déplacement. [Scrabble tile character story](https://prompt-motion.com/anilraok-eff262), 0:38.00 : carton final tenu 6,5 s (vidéo 9:16, vignette recadrée). [AIsa API key promo](https://prompt-motion.com/0xfemyn-e114d3), 0:09.00 : hub en étoile à câbles lumineux. [Claude motion designer showreel](https://prompt-motion.com/mrtanviir-132457), 0:03.20 : « FRAME » coupé en « FR » par le bord. [Claude motion reel](https://prompt-motion.com/codestackr-c071bf), 0:03.00 : séparation rouge/cyan, rejouée sur presque chaque mot.*

Fréquence : nombre de vidéos touchées · part des 186 vidéos notées 4 ou 5 (part des 47 notées 1 à 3).

| Tic | Fréquence | Pourquoi ça dessert | À faire à la place |
| --- | --- | --- | --- |
| Texte minuscule ou pâle (G3) | 133 · 53 % (72 %) | Médiane relevée 1,5 % H : 3 points sur un téléphone tenu droit. La démo devient décor. | Texte à lire ≥ 3 % H, message ≥ 6 % H ; zoom calibré ×1,35 à ×2,3 sur l'information ; sinon décor assumé. |
| Son posé, absent ou décalé (G3) | 104 · 38 % (70 %) | Impacts à plat. 123 des 129 vidéos animées sur la musique sont notées 4-5, contre 4 des 12 à musique posée. | Tempo et grille avant de construire ; coupes sur round(n × images par temps), image 1 à 3 im avant l'attaque. |
| Temps mort (G3) | 103 · 36 % (77 %) | Contraire de la grammaire 1600 : maintiens médians à 42 % de la durée. | Tenue = temps de lecture calculé ; au-delà d'un temps, poussée de 2-3 % ou pulsation sur le temps. |
| Figures toutes faites (G1) | 79 · 39 % (13 %) | Sphère de points, particules en logo, hub en étoile, « +248 % » : signent « vidéo générée », ne disent rien du produit. | Une figure née de la donnée métier, reliée à l'objet relais ; storyboard relu contre la liste noire. |
| Fin figée, trop longue ou absente (G2) | 64 · 30 % (19 %) | L'énergie tombe au moment de l'appel ; carton immobile médian 1,9 s. | Gel final de 0,1 à 1,2 s avec micro-mouvement ; nom ≥ 13 % H ; un appel concret. |
| Même accent répété (G2) | 59 · 25 % (26 %) | S'use dès la 3e occurrence ; rejet explicite de l'utilisateur. | Accent réservé aux 1 ou 2 plus gros temps forts ; ≤ 3 fois à l'identique, jamais sur deux coupes de suite. |
| Fondu par défaut, transition sans motif (G2) | 59 · 19 % (51 %) | Effet diaporama ; le fondu est banni comme signe d'IA par 5 prompts du site. | Transition motivée (objet relais, coupe sur le mouvement, iris né d'un point) ; fondu aux bornes d'acte, ≤ 1 par acte. |
| Rendu cassé (G2) | 57 · 25 % (21 %) | Saccade, pixels, image grise : on voit la machine ; zoom pixelisé rejeté par l'utilisateur. | 60 fps, ≥ 1920 × 1080 ; flou de 8 à 16 sous-images au-delà de ≈ 40 px/im ; sources ≥ taille au zoom maximal. |
| Surcharge (G2) | 53 · 28 % (2 %) | L'œil ne sait où regarder ; tic d'ambition, 52 des 53 vidéos sont notées 4-5. | Un point focal ; ≤ 7 mots par écran en 16:9 ; la rafale est une texture, le mot porteur tient ensuite son temps. |
| HUD de régie décoratif (G1) | 48 · 26 % (0 %) | Squelette par défaut du showreel Claude : du texte illisible qui attire l'œil sans rien dire. | Habillage qui informe, à 2,5-4 % H, ou rien ; jamais par défaut dans une promo produit. |
| Glitch RVB, décodage, stroboscope (G2) | 47 · 23 % (9 %) | Effet « tech » bon marché ; en stroboscope, risque photosensible. | 1 ou 2 glitchs motivés par vidéo (panne, « mais »), 3 à 12 im à 60 fps ; ≤ 3 flashs plein cadre par seconde. |
| Mouvement plat (G2) | 47 · 20 % (21 %) | Caméra figée 30 à 50 s, glissements linéaires : rien ne guide l'œil. | Une poussée ou un recadrage par scène vers une cible ; ease-out pour entrer ; dépassement de 2 à 20 % sur les entrées clés. |
| Brief perdu, outil à l'écran (G3) | 46 · 16 % (34 %) | Impubliable : chiffres inventés, demande ratée ou cuisine à l'écran. | Textes et chiffres définitifs dans le prompt, « n'ajoute aucun contenu fictif » ; brief relu case par case. |
| Mots coupés, collisions (G3) | 41 · 18 % (15 %) | Faute de mise en page ; rejet explicite de l'utilisateur. | Cadre final de chaque poussée = cible entière + 6 % de marge ; ≥ 48 px entre texte et objet. |
| Accroche lente (G2) | 37 · 17 % (13 %) | Noir ou point minuscule : la 1re seconde décide, et l'image 0 sert de vignette. | Premier mot ou objet fort avant 0,5 s ; image 0 déjà composée. |
| Effet catalogue, durée hors format (G2) | 34 · 15 % (13 %) | 7 à 12 techniques en 15 s, ou 45 à 76 s pour 15 demandées : aucune promesse retenue. | Une idée par plan ; durée rendue = durée demandée (±0,5 s) ; couper une idée plutôt qu'accélérer. |
| Rupture de système (G2) | 26 · 12 % (6 %) | Couleur, police ou rendu hors charte : la vidéo semble faite de morceaux. | 3 à 5 couleurs à rôle fixe, ≤ 3 familles de caractères ; une exception voulue dure moins d'1 s. |
| Étoiles, confettis de fête (G1) | 12 · 6 % (2 %) | Accent générique ; « les étoiles sur chaque zoom » sont rejetées par l'utilisateur. | Rien par défaut ; une célébration pour un vrai temps fort, une fois, dans la palette du film. |

Hors tableau : 15 défauts isolés et 20 clichés volontaires de la parodie [Deliberately terrible motion showreel](https://prompt-motion.com/henkpoley-3d3407).

**Lecture**

1. Le tic le plus répandu touche aussi les bonnes vidéos : texte minuscule dans 133 vidéos, dont 99 notées 4 ou 5 ; 90 % des tailles relevées sont sous 3 % H.
2. Trois tics signent les vidéos faibles : temps mort (77 % des notées 1-3, note moyenne 3,66 avec contre 4,02 sans), son posé (70 %, 3,69 contre 4,00), fondu par défaut (51 %, 3,61 contre 3,95).
3. Quatre tics sont des tics d'ambition, presque absents des vidéos faibles : HUD (aucune notée 1-3), surcharge (52 sur 53 notées 4-5), figures toutes faites (73 sur 79), glitch (43 sur 47). Ils forment le squelette par défaut du « showreel Claude ».
4. Même les 17 vidéos notées 5 n'y échappent pas : 9 ont du texte minuscule, 11 une figure toute faite, 6 une fin figée. Un contrôle avant rendu en retire la plupart.
5. Les rejets de l'utilisateur recoupent 5 tics : accent répété (59 vidéos), mots coupés (41), zoom pixelisé (dans « rendu cassé »), mur de mots flous (dans « figures toutes faites »), étoiles sur chaque zoom (12).

**Le guide Otom, corrigé** : son test des 3 secondes (guide Otom, p. 6) passe en premier. Vu une fois, sans le son, le spectateur redit le message ; s'il décrit un effet, cherchez surcharge, effet catalogue ou glitch. Ses 4 règles anti-« template » (p. 6) couvrent 4 lignes : point focal (surcharge), pauses (temps mort), accent unique (rupture de système), vrais contenus (brief perdu). La Bible en corrige deux : la pause est un temps de lecture calculé par mot, pas un texte figé ; plusieurs accents sont permis si chacun a un rôle fixe.

**Contrôle avant rendu** : chaque ligne renvoie au contrôle de son tic, dans son entrée (par exemple *Le texte illisible : trop petit, trop pâle ou coupé par le bord*). La liste complète est dans *Grille de contrôle avant rendu*, à la fin du chapitre. Renvois techniques : *Le maintien : temps de lecture ou temps mort* et *La grille de tempo : une horloge, une scène par mesure* au chapitre 9, *Le fondu et le passage par le fond* au chapitre 4, *Formats et zones sûres : vertical, carré, cinémascope* au chapitre 2.

**À cocher**

- [ ] Storyboard relu contre les 18 lignes avant la construction : 0 figure toute faite ni HUD sans raison écrite tirée du brief
- [ ] Test des 3 secondes passé : 1 spectateur, son coupé, redit le message en une phrase
- [ ] 0 tic G3 sur le rendu (texte, son, temps mort, brief, mots coupés)
- [ ] Tics G2 corrigés ou justifiés par écrit, une ou deux corrections par aller-retour
- [ ] Grille de contrôle passée sur le rendu final, 3 tours au plus
