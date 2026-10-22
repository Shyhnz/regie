# Chapitre 13 · Statistiques des prompts (étape 1)

**Les constats les plus nets (détails et effectifs dans les sections).**

1. **Le prompt d'une ligne est le seul qui coûte** : 100 car. ou moins, note 3,62 (n = 64, 41 % de vidéos notées 2 ou 3) contre 3,95 pour les autres (n = 166) ; p < 0,001. Au-delà, la longueur ne change plus la note (3,75 à 4,00, écarts non significatifs) et aucune vidéo notée 5 n'a un prompt de plus de 994 car.
2. **Aucun ingrédient ne fait monter la note de fabrication** (BPM, interdits, référence de style, storyboard, hex, format, 60 fps, contrôle : tous p > 0,2). Seule la durée chiffrée ressort (3,95 contre 3,70, p = 0,001), surtout parce que les prompts sans durée sont des demandes vagues ; hors prompts d'une ligne, l'écart tombe à +0,19 (p = 0,04, fragile).
3. **Ce qui est chiffré est obéi** : 138 durées demandées sur 148 tenues à ±10 % ; storyboards en secondes ou en temps suivis à 0,1 s ou à 1 image près (gdgtify-287ddf, notdwd-7de38a, demonugc-4c5753) ; 12 listes d'interdits tenues sur 15 vérifiées. Ce qui n'est pas chiffré (« big type », « room to breathe ») est tenu à la baisse.
4. **Claude met de la musique sans qu'on la demande** : 100 des 184 prompts muets sur le son (54 %) donnent une vidéo animée sur la musique, 31 des 33 runs du prompt canonique ; tempo choisi 120 BPM (60 cas) ou 128 BPM (37 cas). Demander un BPM ne garantit pas le calage (7 sur 13), car les prompts qui le chiffrent attendent souvent une piste de l'utilisateur.
5. **Les longs prompts perdent la fin et les interdits** : les 3 listes d'interdits non tenues et la seule outro perdue (ultimaxbt-2ddf1e) sont dans des prompts de 4 024 à 8 142 car. ; 0 vidéo notée 5 au-delà de 1 000 car. ; la petite typo (82 à 93 % des vidéos) et les temps morts (53 à 73 %) sont aussi fréquents quelle que soit la longueur, faute de seuil chiffré dans les prompts.

Base : 233 vidéos, dont 230 avec un prompt visible (3 vidéos de skill sans prompt : anthonyriera-9b1b2a, jake11moran-a269c4, lexnlin-6161a6). Note = `craft` (2 à 5) de l'analyse vidéo. Moyenne générale des 230 : **3,86** (17 notées 5, 166 notées 4, 45 notées 3, 2 notées 2).

**Lecture des écarts.** Les notes sont tassées (73 % de 4) : un écart de moyenne de 0,1 à 0,2 point ne veut rien dire avec ces effectifs. Chaque comparaison porte un test de permutation bilatéral sur la différence de moyennes (20 000 tirages, graine fixe). « Net » : p < 0,01 ; « fragile » : 0,01 ≤ p < 0,05 ; au-delà : non significatif. Moins de 10 vidéos dans un groupe : à lire comme des cas, pas comme une tendance.

**Biais à garder en tête.** Le prompt « showreel » canonique (« make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are… go all out ») est recopié mot pour mot dans 33 vidéos ; il pèse sur toute tranche de 101 à 300 caractères. Les prompts longs viennent de quelques auteurs (twoclipping ×3, notdwd ×2, ultimaxbt ×2).

## 1. Note moyenne par tranche de longueur de prompt

| Tranche | Vidéos | Note moyenne | Notées 5 | Notées 2-3 | Animées sur la musique | Exemples |
| --- | --- | --- | --- | --- | --- | --- |
| 1 à 100 car. | 64 | 3,62 | 3 | 26 | 27 (42 %) | hbcoop-de365c, sudo-kiran-49176d, zheke-38deff |
| 101 à 200 car. | 106 | 4,00 | 10 | 10 | 70 (66 %) | emollick-8661a8, fionntobin-97b7af, grace-sunnyy-29bc61 |
| 201 à 400 car. | 33 | 3,85 | 2 | 6 | 16 (48 %) | samaote-5e2fc2, steventey-0d20e4, 1littlecoder-9fef89 |
| 401 à 1 100 car. | 13 | 4,00 | 2 | 2 | 8 (62 %) | lexnlin-038035, lukasersil-0ed38e, abderrahmen-g-9e8ed0 |
| 1 101 à 5 000 car. | 8 | 3,75 | 0 | 2 | 3 (38 %) | antonio-kodheli-490109, gdgtify-287ddf, ik-builds-b8bdcf |
| 5 001 à 15 306 car. | 6 | 3,83 | 0 | 1 | 2 (33 %) | daniel-haida-8691d4, notdwd-7de38a, notdwd-c2037d |

- Le prompt canonique seul (33 vidéos) : moyenne **4,12**, 4 notées 5, 31 animées sur la musique. Les autres prompts de 101 à 200 car. : 73 vidéos, moyenne 3,95.
- Prompts de 100 car. ou moins contre prompts de plus de 400 car. : 3,62 (n = 64) contre 3,89 (n = 27) ; p = 0,05 (non significatif).
- 101 à 400 car. contre plus de 400 car. : 3,96 (n = 139) contre 3,89 ; p = 0,51 (non significatif).
- Au-delà de 4 000 car. : 9 prompts, moyenne 3,78, aucune vidéo notée 5 ; notes : antonio-kodheli-490109 (4, 4024 car.), gdgtify-287ddf (4, 4373 car.), ultimaxbt-2ddf1e (3, 4667 car.), twoclipping-221cab (4, 5222 car.), rossaxbt-3085b7 (4, 5800 car.), brainextends-e19ac3 (3, 8142 car.), notdwd-7de38a (4, 10311 car.), notdwd-c2037d (4, 10419 car.), daniel-haida-8691d4 (4, 15306 car.).
- Les 17 vidéos notées 5 ont des prompts de 11 à 994 car. (médiane 151) ; 4 viennent du prompt canonique. Médiane des 230 : 151 car.

- Prompts de 100 car. ou moins contre tous les autres : 3,62 (n = 64) contre 3,95 (n = 166) ; p < 0,001 (net).

**Verdict.** Seuls les prompts d'une ligne sans durée ni sujet clair (100 car. ou moins) tirent la note vers le bas : 41 % de vidéos notées 2 ou 3, contre 9 % entre 101 et 200 car. Au-delà de 100 car., la courbe est plate (3,75 à 4,00) et aucun écart n'est significatif. Les 17 vidéos notées 5 ont toutes un prompt de moins de 1 000 car. La longueur ne fait pas la qualité de fabrication (craft), que Claude apporte seul ; elle fait la **conformité** à une intention (voir sections 5 et 7).

## 2. Effet de chaque ingrédient sur la note

| Ingrédient présent dans le prompt | Avec : vidéos | Avec : note | Sans : vidéos | Sans : note | Écart | Test |
| --- | --- | --- | --- | --- | --- | --- |
| Durée chiffrée | 148 | 3,95 | 82 | 3,70 | +0,26 | p = 0,001 (net) |
| Tempo chiffré (BPM) | 13 | 3,69 | 217 | 3,87 | −0,18 | p = 0,28 (non significatif) |
| Calage musical demandé (BPM ou non) | 23 | 3,87 | 207 | 3,86 | +0,01 | p = 1,00 (non significatif) |
| Liste d'interdits | 17 | 3,88 | 213 | 3,86 | +0,02 | p = 1,00 (non significatif) |
| Au moins un interdit visuel | 20 | 3,85 | 210 | 3,86 | −0,01 | p = 1,00 (non significatif) |
| Référence de style nommée ou jointe | 37 | 3,78 | 193 | 3,88 | −0,09 | p = 0,41 (non significatif) |
| Storyboard minuté (s, temps, images) | 8 | 3,75 | 222 | 3,86 | −0,11 | p = 0,73 (non significatif) |
| Séquence de scènes (minutée ou non) | 22 | 3,73 | 208 | 3,88 | −0,15 | p = 0,29 (non significatif) |
| Codes couleur hex | 8 | 3,75 | 222 | 3,86 | −0,11 | p = 0,73 (non significatif) |
| Matière de marque (site, logo, repo, captures) | 67 | 3,79 | 163 | 3,89 | −0,10 | p = 0,22 (non significatif) |
| Format ou taille | 20 | 3,75 | 210 | 3,87 | −0,12 | p = 0,38 (non significatif) |
| 60 fps demandés | 12 | 3,75 | 218 | 3,87 | −0,12 | p = 0,58 (non significatif) |
| Étape de contrôle (images, critique) | 18 | 3,83 | 212 | 3,86 | −0,03 | p = 1,00 (non significatif) |
| Bloc <inputs> | 10 | 3,80 | 220 | 3,86 | −0,06 | p = 0,76 (non significatif) |

Même calcul **hors prompt canonique** (ses 33 copies, notées 4,12 en moyenne, sont « avec durée » et « sans » tout le reste) :

| Ingrédient | Avec | Sans (hors canon) | Écart | Test |
| --- | --- | --- | --- | --- |
| Durée chiffrée | 115 · 3,90 | 82 · 3,70 | +0,21 | p = 0,009 (net) |
| Tempo chiffré (BPM) | 13 · 3,69 | 184 · 3,83 | −0,13 | p = 0,43 (non significatif) |
| Calage musical demandé (BPM ou non) | 23 · 3,87 | 174 · 3,81 | +0,06 | p = 0,69 (non significatif) |
| Liste d'interdits | 17 · 3,88 | 180 · 3,81 | +0,07 | p = 0,65 (non significatif) |
| Au moins un interdit visuel | 20 · 3,85 | 177 · 3,81 | +0,04 | p = 0,83 (non significatif) |
| Référence de style nommée ou jointe | 37 · 3,78 | 160 · 3,83 | −0,04 | p = 0,74 (non significatif) |
| Storyboard minuté (s, temps, images) | 8 · 3,75 | 189 · 3,82 | −0,07 | p = 0,74 (non significatif) |
| Séquence de scènes (minutée ou non) | 22 · 3,73 | 175 · 3,83 | −0,10 | p = 0,54 (non significatif) |
| Codes couleur hex | 8 · 3,75 | 189 · 3,82 | −0,07 | p = 0,75 (non significatif) |
| Matière de marque (site, logo, repo, captures) | 67 · 3,79 | 130 · 3,83 | −0,04 | p = 0,68 (non significatif) |
| Format ou taille | 20 · 3,75 | 177 · 3,82 | −0,07 | p = 0,66 (non significatif) |
| 60 fps demandés | 12 · 3,75 | 185 · 3,82 | −0,07 | p = 0,78 (non significatif) |
| Étape de contrôle (images, critique) | 18 · 3,83 | 179 · 3,82 | +0,02 | p = 1,00 (non significatif) |
| Bloc <inputs> | 10 · 3,80 | 187 · 3,82 | −0,02 | p = 1,00 (non significatif) |

**Seul écart net : la durée chiffrée.** Mais les 82 prompts sans durée comptent 40 demandes d'une ligne (jeux, modèle 3D, sections à faire défiler, « montre-moi un data center »). Au-delà de 100 car., avec durée 4,00 (n = 124) contre sans durée 3,81 (n = 42) ; p = 0,039 (significatif, fragile). Écrire une durée accompagne une demande de vidéo cadrée ; ce n'est pas un levier de qualité à lui seul. Tous les autres ingrédients sont neutres sur la note de fabrication : leur effet est sur la conformité (section 7).

## 3. Verdict musique selon ce que dit le prompt

| Ce que dit le prompt sur le son | Vidéos | Animée sur la musique | Partielle | Musique posée | Voix off | Sans musique | Note moyenne |
| --- | --- | --- | --- | --- | --- | --- | --- |
| tempo chiffré (BPM) | 13 | 7 (54 %) | 5 (38 %) | 0 (0 %) | 0 (0 %) | 1 (8 %) | 3,69 |
| calage demandé, sans BPM | 10 | 8 (80 %) | 2 (20 %) | 0 (0 %) | 0 (0 %) | 0 (0 %) | 4,10 |
| son ou musique demandés, sans calage | 17 | 11 (65 %) | 4 (24 %) | 0 (0 %) | 2 (12 %) | 0 (0 %) | 3,94 |
| voix off demandée | 5 | 0 (0 %) | 0 (0 %) | 0 (0 %) | 5 (100 %) | 0 (0 %) | 3,40 |
| rien sur le son | 184 | 100 (54 %) | 37 (20 %) | 12 (7 %) | 4 (2 %) | 31 (17 %) | 3,86 |
| son optionnel ou coupé | 1 | 0 (0 %) | 0 (0 %) | 0 (0 %) | 0 (0 %) | 1 (100 %) | 4,00 |

- Quand le prompt ne dit **rien** du son (184 vidéos), Claude ajoute quand même une bande-son calée dans 100 cas (54 %). Hors prompt canonique : 69 sur 151 (46 %). Le canonique seul : 31 sur 33.
- Tempo chiffré : 13 prompts ; verdicts brainextends-e19ac3 = partielle, demonugc-4c5753 = sans-musique, notdwd-c2037d = partielle, rossaxbt-3085b7 = partielle, twoclipping-221cab = partielle, ultimaxbt-2ddf1e = partielle ; les autres sont animés sur la musique. Les « partielle » ont tous une piste à fournir par l'utilisateur ou un prompt de plus de 4 000 car.
- Musique posée sans calage (12 vidéos au total) : 12 viennent de prompts muets sur le son, aucune d'un prompt qui chiffre le tempo.

### Qui fournit la musique

| Source de la musique selon le prompt | Vidéos | Animée sur la musique | Partielle | Autre | Note moyenne |
| --- | --- | --- | --- | --- | --- |
| Piste demandée à l'utilisateur ou jointe | 12 | 6 | 5 | 1 (sans-musique) | 3,92 |
| Musique composée ou générée par Claude (« compose it yourself », « made in code », « score the music ») | 8 | 4 | 3 | 1 (voix-off) | 3,88 |

Petits effectifs : à lire comme des cas. Une piste à fournir n'assure pas le calage (5 « partielle » sur 12, et demonugc-4c5753 publiée muette). Demander une musique composée donne toujours une bande-son (8 sur 8), calée dans la moitié des cas ; « sound tells half the story » (kamstudiolabs-0b0824) suffit à obtenir des bruitages à l'image près.

### Tempo demandé et tempo mesuré

| Vidéo | Tempo demandé | Tempo mesuré (videos.json) | Calage (sync) | Note |
| --- | --- | --- | --- | --- |
| rames-jusso-589f80 | 140 | 140 | serree | 4 |
| wani-shola-16ca7a | 120 | 120 | serree | 3 |
| twoclipping-6dd14e | 120 | 120 | serree | 4 |
| demonugc-4c5753 | 120 | 120 | sans-musique | 3 |
| twoclipping-5cba86 | 120 | 120 | serree | 4 |
| antonio-kodheli-490109 | 120 | 120 | serree | 4 |
| ultimaxbt-2ddf1e | 130 | 119 | lache | 3 |
| twoclipping-221cab | 120 | 120 | lache | 4 |
| rossaxbt-3085b7 | 129.83 | 129.8 | serree | 4 |
| brainextends-e19ac3 | 120 | 79 | lache | 3 |
| notdwd-7de38a | 124 | 124 | serree | 4 |
| notdwd-c2037d | 124 | 124 | lache | 4 |
| daniel-haida-8691d4 | 115 | 120 | serree | 4 |

Tempo choisi par Claude quand le prompt ne dit rien du son (150 vidéos avec un tempo mesuré) : 120 BPM × 60, 128 BPM × 37, 80 BPM × 7, 110 BPM × 5, 96 BPM × 4, 100 BPM × 4.
Prompt canonique (33 vidéos) : 128 BPM × 20, 120 BPM × 9, 130 BPM × 1, 120.2 BPM × 1, 128.57 BPM × 1, 160 BPM × 1.

## 4. Durée demandée et durée obtenue

Sur 148 prompts avec une durée lisible, **138 (93 %)** donnent une vidéo à ±10 % de la durée demandée (ou dans la fourchette à ±10 %). Les grands écarts (×2 à ×3,7) sont des vidéos publiées en plusieurs versions bout à bout ou étirées par Claude ; aucune n'est plus courte que demandé de plus de 10 %.

Hors tolérance :

| Vidéo | Demandé | Obtenu | Écart | Note |
| --- | --- | --- | --- | --- |
| ddryo-loos-300829 | 15 s | 55,7 s | 272 % | 4 |
| melvynx-6cde6c | 15 s | 45,1 s | 201 % | 4 |
| leadnotifi-e83f94 | 15 s | 45,1 s | 200 % | 4 |
| shneural-2abdfa | 15 s | 31,9 s | 113 % | 4 |
| pluginplay-3d4006 | 0-15 s | 26,0 s | 74 % | 4 |
| jacksonfall-54b2ac | 30 s | 35,5 s | 18 % | 3 |
| henkpoley-3d3407 | 60 s | 69,5 s | 16 % | 3 |
| hqmank-7c61f1 | 20 s | 23,0 s | 15 % | 4 |
| alex-prompter-1ea044 | 30 s | 34,5 s | 15 % | 2 |
| heyiammallik-e72d17 | 30 s | 34,1 s | 14 % | 4 |

Sans durée dans le prompt (82 vidéos) : durée médiane obtenue 38,6 s (de 10,0 à 457,0 s). Prompt canonique : durées de 14,9 à 45,1 s, médiane 15,1 s.

Cadence : 60 fps demandés dans 12 prompts, obtenus dans 10 ; sans demande, 60 fps dans 119 vidéos sur 218.

## 5. Storyboard au temps, séquence, cadence

| Structure donnée par le prompt | Vidéos | Note moyenne | Notées 5 | Animées sur la musique | Exemples |
| --- | --- | --- | --- | --- | --- |
| Storyboard minuté (s, temps ou images) | 8 | 3,75 | 0 | 4 | daniel-haida-8691d4, notdwd-7de38a, notdwd-c2037d |
| Séquence de scènes sans minutage | 14 | 3,71 | 0 | 4 | ror-fly-9950f1, dale-vaz-cc612a, pluginplay-3d4006 |
| Règle de cadence seule (« un plan par temps », « accroche dans la 1re seconde ») | 5 | 4,20 | 1 | 4 | lukasersil-0ed38e, ik-builds-b8bdcf, reflex-cloud-72ffe5 |
| Aucune structure | 203 | 3,87 | 16 | 114 | emollick-8661a8, fionntobin-97b7af, grace-sunnyy-29bc61 |

- Storyboard minuté contre le reste : p = 0,73 (non significatif). Les 8 storyboards minutés sont tous des prompts de 2 500 à 15 300 car. : l'effet du storyboard ne se sépare pas de celui de la longueur.

## 6. Même prompt, résultats différents

Groupes de prompts identiques (après normalisation de la casse, de la ponctuation et des accents), hors prompt canonique :

| Prompt (début) | Vidéos (note · verdict musique · durée · BPM mesuré) | Écart de note |
| --- | --- | --- |
| make a dynamic 10-second motion graphics video that shows who are you … | 1littlecoder-9fef89 (4 · animee-sur-la-musique · 10,0 s · 120.2 BPM)<br>souravbhar871-61f424 (4 · sans-musique · 10,0 s · — BPM) | 0 |
| Research Distilbook.Make a dynamic 40-second motion graphics video on … | ajith-io-c52e09 (3 · partielle · 40,1 s · 120 BPM)<br>itisrazak-3ad902 (4 · animee-sur-la-musique · 40,0 s · 144 BPM) | 1 |
| <inputs> Ask me for: 8 to 12 UI states I want the shape to become (e.g… | demonugc-4c5753 (3 · sans-musique · 14,0 s · 120 BPM)<br>twoclipping-5cba86 (4 · animee-sur-la-musique · 14,1 s · 120 BPM) | 1 |
| Show me what goes on inside an AI data centre.… | mdaman010-e7226a (3 · musique-posee · 98,0 s · 78 BPM)<br>sayan-shanky-f850d8 (4 · musique-posee · 97,9 s · 72 BPM) | 1 |
| make a dynamic 30-seconds motion graphic video about the distilbook li… | sudo-kiran-4f8b59 (4 · animee-sur-la-musique · 30,1 s · 120 BPM)<br>sudo-kiran-b055de (4 · animee-sur-la-musique · 30,1 s · 120 BPM) | 0 |

Paires proches (même gabarit, une variable change) :

| Paire | Ce qui change | Résultats |
| --- | --- | --- |
| ror-fly-9950f1 / sarut0bisasuke-cefa43 | même demande de recette de cocktail en 30 s, reformulée | 4 · sans-musique · 30,0 s / 4 · sans-musique · 30,0 s |
| sudo-kiran-4f8b59 / sudo-kiran-6609ed | même produit DistilBook, second prompt avec « very good script » et « good music » | 4 · animee-sur-la-musique · 30,1 s / 4 · voix-off · 30,1 s |
| itisrazak-3ad902 / bizibeast-10f264 | même gabarit « Research X. 40-second… », produit différent | 4 · animee-sur-la-musique · 40,0 s / 4 · animee-sur-la-musique · 40,0 s |
| ajith-io-4c248f / ajith-io-ea7f2d | même auteur, même produit : musique Oppenheimer contre vidéo de référence | 4 · animee-sur-la-musique · 40,0 s / 4 · partielle · 32,0 s |
| topi-003-9ca6b5 / topi-003-b0e12c | gabarit japonais du showreel, sujet « fille de l'image qui danse » ajouté | 4 · animee-sur-la-musique · 15,1 s / 4 · animee-sur-la-musique · 15,1 s |
| rneayan-474bcf / rneayan-ea6129 | même studio, style Risograph contre Oscilloscope | 3 · animee-sur-la-musique · 69,3 s / 4 · animee-sur-la-musique · 39,6 s |

**Prompt canonique, 33 vidéos** : notes 4 × 5, 29 × 4, 0 × 3 (moyenne 4,12) ; musique : animee-sur-la-musique × 31, partielle × 2 ; cadence : 60/1 × 25, 30/1 × 8 ; durée 14,9 à 45,1 s.
Notées 5 : fionntobin-97b7af, sahildesigner23-ee3155, tequilafunks-97f6c9, web3wesley-7bb108. Notées 3 : aucune.

**Ce qui varie d'un tirage à l'autre** (d'après l'analyse) : la présence d'une bande-son (1littlecoder-9fef89 à 120 BPM, souravbhar871-61f424 muette, même prompt de 202 car.), le tempo (ajith-io-c52e09 à 120 BPM, itisrazak-3ad902 à 144 BPM), la tenue des consignes non vérifiées (twoclipping-5cba86 : boucle au pixel près ; demonugc-4c5753 : boucle qui accroche, zoom caméra absent, vidéo muette), et la note (5 paires sur 5 identiques ou à 1 point). **Ce qui ne varie pas** : la durée quand elle est écrite (écarts de 0,05 s), et les réflexes du modèle (1littlecoder et souravbhar871 inventent tous deux le point qui ponctue chaque mot et sert de transition, puis un iris final).

## 7. Ce que le prompt fixe est tenu (conformité mesurée)

La note de fabrication ne bouge presque pas avec les ingrédients ; la **conformité** à ce qui est écrit, si. Mesures relevées dans l'analyse image par image (`insights.jsonl`, `prompt_vs_result`) :

| Ce que le prompt écrit | Vidéo (note) | Ce qui est mesuré dans la vidéo |
| --- | --- | --- |
| Storyboard en secondes : 7 cues (0-3, 3-6,5 … 18-20 s) | gdgtify-287ddf (4) | chaque bascule tombe sur la borne demandée à 0,1 s près |
| Grille en formule (beat k = 0,048 + 0,4838·k s) et coupes exactes f72, f101, f159 | notdwd-7de38a (4) | les 7 coupes tombent à 1 image près ; verrou de phase mesuré |
| « 120 BPM, 7 bars, something happens on every beat » | demonugc-4c5753 (3) | durée exacte 840 im = 14,00 s ; 15 gestes sur 20 à 0-1 im d'un temps |
| Structure en temps musicaux b0 à b46 dans un fichier de timeline | antonio-kodheli-490109 (4) | toutes les actions à 1-4 images d'un temps |
| « Score the music so every cut … lands on a beat or drop; retimed until synced » | jhylee95-e1152f (4) | 39 gestes sur 41 calés à ±1 image |
| Storyboard minuté 0-1,2 / 1,2-4,4 / … / 12,8-15 s | daniel-haida-8691d4 (4) | suivi à ±0,5 s jusqu'à 9 s, puis compressé : signature à 11 s au lieu de 12,8 s |
| Minuterie de 15 scènes au dixième de seconde, hors grille | brainextends-e19ac3 (3) | scènes à l'heure, mais 8 changements sur 21 seulement sur un temps |
| Seulement « 10 s » (aucun tempo) | 1littlecoder-9fef89 (4) | 6 plans de 1 à 2 s sur une grille de 0,5 s (120 BPM) choisie par Claude |
| « Make the last frame identical to the first, cursor included » | twoclipping-5cba86 (4) | boucle identique au pixel près (écart 0,33/255) |
| Même phrase, même prompt | demonugc-4c5753 (3) | boucle à moitié tenue : bouton à 10 px, curseur qui saute de 140 px |
| Mastering « -14 LUFS, -2 dBTP, re-measured after AAC encode » | ik-builds-b8bdcf (4) | mesuré -14,2 LUFS et -2,7 dBTP sur le fichier publié |
| « the key output as big type » (sans taille chiffrée) | twoclipping-6dd14e (4) | liste en petit corps, environ 4 % de la hauteur |

**Lecture.** Un minutage écrit en secondes ou en temps est obéi presque littéralement ; une intention sans chiffre (« big type », « room to breathe », « fill the frame ») est interprétée, souvent à la baisse.

## 8. Les interdits sont-ils respectés ?

Sur les 17 prompts à liste d'interdits, l'analyse vérifie le respect dans 15 : **12 tenus**, 3 non tenus.

| Vidéo | Longueur du prompt | Note | Résultat |
| --- | --- | --- | --- |
| 1littlecoder-9fef89 | 202 car. | 4 | tenu : aucun label de coin, composition centrée |
| souravbhar871-61f424 | 202 car. | 4 | tenu : rien aux angles |
| lexnlin-038035 | 994 car. | 5 | tenu : blanc pur au lieu du sépia, zéro étiquette |
| ik-builds-b8bdcf | 1528 car. | 4 | tenu : pas de jargon à l'écran, pas de chiffres inventés |
| twoclipping-6dd14e | 2515 car. | 4 | tenu : aucun point final à l'écran |
| twoclipping-5cba86 | 2711 car. | 4 | tenu : pas de rebond, particules, glow ni dégradé sur le chrome |
| ultimaxbt-bbebf5 | 3367 car. | 4 | tenu : respectés, une ombre douce en entorse |
| gdgtify-287ddf | 4373 car. | 4 | tenu : aucun cliché de manifestation, aucune secousse |
| twoclipping-221cab | 5222 car. | 4 | tenu : presque tous ; le seul fondu est motivé |
| rossaxbt-3085b7 | 5800 car. | 4 | tenu : ni slam, ni flash blanc, ni 3D |
| notdwd-7de38a | 10311 car. | 4 | tenu : ni fondu enchaîné, ni image figée hors S7, ni violet |
| daniel-haida-8691d4 | 15306 car. | 4 | tenu : les 19 interdits tenus |
| antonio-kodheli-490109 | 4024 car. | 4 | non tenu : « dead holds » interdits mais la structure impose 5 s de carte fixe ; « Generate » visible dans 2 clips réels |
| ultimaxbt-2ddf1e | 4667 car. | 3 | non tenu : 6 coupes franches, fondus, fin figée 2,5 s malgré « no cuts, no fades, holds > 1 s » |
| brainextends-e19ac3 | 8142 car. | 3 | non tenu : fondus enchaînés et titres superposés (f71, f119) malgré l'interdit |

Les 3 échecs viennent de prompts de 4 024 à 8 142 car. Deux effets secondaires sont relevés : un interdit sans remplacement appauvrit (notdwd-c2037d : sans violet ni orange, palette trop pâle ; gdgtify-287ddf et daniel-haida-8691d4 : interdits tenus mais « prudence générale », image sombre, peu d'énergie).

## 9. Les défauts qui ne dépendent pas de la longueur

Part des vidéos dont la liste de défauts (`flaws`) mentionne chaque problème (recherche de mots clés, ordre de grandeur) :

| Défaut | 1 à 200 car. (n = 170) | 201 à 1 000 car. (n = 45) | plus de 1 000 car. (n = 15) |
| --- | --- | --- | --- |
| Texte trop petit ou illisible | 139 (82 %) | 34 (76 %) | 14 (93 %) |
| Temps mort, plan figé, maintien | 103 (61 %) | 24 (53 %) | 11 (73 %) |
| Fondu générique | 36 (21 %) | 8 (18 %) | 4 (27 %) |
| HUD, labels de coin, timecode | 49 (29 %) | 9 (20 %) | 1 (7 %) |

Aucun des 230 prompts ne donne une taille minimale de texte en % de la hauteur (4 donnent des tailles en px pour quelques textes : notdwd ×2, rossaxbt, ultimaxbt-2ddf1e « 92px »). Une durée maximale de maintien chiffrée n'apparaît que dans 2 prompts (« holds longer than 1s » : twoclipping-221cab, ultimaxbt-2ddf1e) ; 4 autres bannissent « dead time », « dead holds » ou « frozen frames » sans chiffre. À l'inverse, les formules positives sans chiffre produisent du temps mort : « keep each scene on screen long enough to read » donne 40 % de maintiens statiques (aschapmann-131210), « every scene needs room to breathe » 34 % d'immobilité (daniel-haida-8691d4). Les prompts longs écartent le HUD et les coins, pas la petite typo ni les temps morts.

## 10. Ce que Claude fait d'un prompt d'une ligne (prompt canonique)

- Durée : 31 sur 33 entre 14,9 et 15,1 s (2 vidéos publiées à 31,9 et 45,1 s, probablement plusieurs versions montées bout à bout).
- Tempo : 128 BPM dans 21 vidéos, 120 BPM dans 10 ; 128 BPM **et** 15 s dans 19 : 15 s = 32 temps = 8 mesures exactes à 128 BPM.
- Son : 31 sur 33 animées sur une bande-son que personne n'a demandée ; cadence 60 fps dans 25.
- Gabarit relevé dans l'analyse (mots clés, ordre de grandeur) : HUD de régie ou timecode dans 27 vidéos, chapitres ou sections numérotés dans 22, carte de fin ou signature dans 25, chiffres de preuve ou compteur dans 28, rafales à la croche ou au demi-temps dans 24, nom « CLAUDE » ou « Opus » à l'écran dans 32.
- Notes : 4 × 5, 29 × 4, aucune sous 4. Le gabarit par défaut est solide mais uniforme : jasonzhou1993-8595e0 et itsuki-dev-10942d ont « presque le même squelette » (même sujet CLAUDE, même HUD, 8 sections d'une mesure à environ 128 BPM).

