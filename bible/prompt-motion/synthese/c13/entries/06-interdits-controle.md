## Interdits et contrôle qualité (banned list, QA loop)

On écrit ces deux blocs après la structure au temps, et on les relit au contrôle qualité (étape 9 du parcours). On décide 5 à 9 interdits, chacun avec son remplacement, et un contrôle mesurable par risque. Une liste d'interdits ne fait pas la note : 17 prompts en ont une, note 3,88 contre 3,86 sans (p = 1,00, non significatif), et 16 des 17 vidéos notées 5 n'en ont aucune. Elle retire des tics : 12 listes tenues sur 15 vérifiées.

![En haut, 3 tirages du prompt « showreel » canonique avec HUD de coin ; en bas, un prompt voisin qui interdit les coins](ILLUS:interdits-controle-1)

*En haut : [Claude motion designer showreel](https://prompt-motion.com/stephanlivera-df17a2), [Motion designer showreel](https://prompt-motion.com/eyishazyer-af035b) et [Kinetic type showreel](https://prompt-motion.com/itsuki-dev-10942d) (0:07, 0:07, 0:03), prompt canonique de 151 car. : labels, timecode et crochets dans les quatre coins. En bas : [Claude self-intro motion graphic](https://prompt-motion.com/1littlecoder-9fef89) (0:03, 0:07.3, 0:09), même famille de prompt plus une phrase, « Avoid the frames and texts on the corners which are typical ai made giveaways! » : rien aux angles, tout centré.*

**Ce qui arrive sans interdit**

L'analyse note l'absence d'interdit dans 44 vidéos et y relève les tics : glitch RVB ou aberration dans 14, HUD de coin dans 11, flash répété dans 7, fondu comme transition unique dans 6, texte qui se décode dans 6, mots coupés par le bord dans 5. 8 de ces vidéos sont notées 5 : Claude fabrique bien, mais avec ses tics (voir *L'habillage persistant : HUD, chapitres et gabarit fixe* au chapitre 2, et *Le glitch en tranches et RVB, un cliché* au chapitre 4). Le relevé complet des tics est au chapitre 11 (Cohérence et clichés).

**Ce que donnent les interdits écrits**

| Interdit écrit (extrait) | Vidéo (note, longueur du prompt) | Sur le rendu |
| --- | --- | --- |
| « no beige "artsy" look, no eyebrow labels » | [Engraving-style Claude ad](https://prompt-motion.com/lexnlin-038035) (5, 994 car.) | tenu : blanc pur #FFFFFF au lieu du sépia, zéro étiquette |
| « Banned: bouncy easing, particle bursts, glows… anything that looks like a template » | [Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86) (4, 2 711) | tenu : le seul dégradé est dans le contenu |
| « beat-snapped slams, white flashes, 3D » | [Ora 2 image model launch film](https://prompt-motion.com/rossaxbt-3085b7) (4, 5 800) | tenu : rafales en coupes simples, aucun éclair |
| « avoid using screenshots as raw; break them down into components » | [mdfor.dev product intro video](https://prompt-motion.com/ho-ba-f3f0e9) (4) | tenu, et l'interdit crée la matière animable |
| « no violet, magenta, orange » sans couleur de remplacement | [Launch video remake comparison](https://prompt-motion.com/notdwd-c2037d) (4, 10 419) | tenu, mais palette pâle |
| 19 interdits (pas de rebond, de zoom constant…) | [Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4) (4, 15 306) | tous tenus, mais image sombre, UI petite, peu d'énergie |
| « Banned: crossfades… holds longer than 1s » | [Food craving launch film](https://prompt-motion.com/ultimaxbt-2ddf1e) (3, 4 667) | non tenu : 6 coupes franches, fondus, fin figée 2,5 s |
| « dead holds » interdits, outro de 7 s dans la structure | [Prompt Motion site promo](https://prompt-motion.com/antonio-kodheli-490109) (4, 4 024) | non tenu : 5 s de carte fixe, la structure l'emporte |

**Règles pour écrire la liste**

1. **Partir des tics mesurés et des rejets de l'utilisateur.** Les plus bannis (blog prompt-motion, 16 listes) : lueurs (7 prompts), « anything that looks like a template » (7), gerbes de particules (6), maintiens longs et temps morts (6), fondus enchaînés (5), rebond cartoon (3), texte dans les coins (2). Ajouter les rejets maison : même accent répété partout, zooms inutiles, mots coupés par le bord, zooms pixelisés, murs de mots flous, flèches décoratives.
2. **Un remplacement par interdit.** « No crossfades: every scene grows out of the one before » (blog prompt-motion) : la transition motivée est décrite au chapitre 4 (voir *Le fondu et le passage par le fond*). Sans remplacement, l'interdit appauvrit (notdwd-c2037d, daniel-haida-8691d4).
3. **Chiffrer, jamais d'adjectif.** « holds longer than 1s » se vérifie ; « every scene needs room to breathe » a donné 34 % d'immobilité, « long enough to read » 40 % de maintiens statiques ([SaaS launch video](https://prompt-motion.com/aschapmann-131210)). Voir *Le maintien : temps de lecture ou temps mort* au chapitre 9.
4. **5 à 9 items sur une ligne, préfixés « Avoid: », terminés par « anything that looks like a template ».** Une liste nue peut être lue comme une demande de dessiner ces défauts ; le préfixe l'écarte (apport des skills open source).
5. **Interdits par style, pas universels.** Le guide Otom écrit « Pas de rebond » et « Pas de dégradé » (guide Otom, p. 7). La Bible corrige : 14 des 17 vidéos notées 5 ont un dépassement court (2 à 20 % sur les entrées clés), et les dégradés sont dans 126 vidéos dont 5 notées 5 ; l'utilisateur aime le dégradé fluide. On interdit le rebond élastique répété, pas le dépassement. Le fondu enchaîné, exemple du guide (p. 7), est un cliché banni par 5 prompts. Les interdits de chaque style sont au chapitre 1 (Styles).
6. **Liste en tête, cohérente avec la structure.** Les 3 listes non tenues sont dans des prompts de 4 024 à 8 142 car. (voir *Le piège des prompts trop longs*). Une structure qui contredit l'interdit l'emporte (antonio-kodheli-490109), et l'interdit doit couvrir le contenu réel choisi (bouton « Generate » visible dans 2 clips).

**Le contrôle demandé dans le prompt**

18 prompts demandent un contrôle : note 3,83 (non significatif). Chaque contrôle n'attrape que ce qu'il mesure :

- « Render one frame per beat » vérifie la grille, pas la logique : un clic sur « Chart » qui finit sur « Activity » ([Morphing UI states loop](https://prompt-motion.com/demonugc-4c5753), 3).
- « Probe 20 or more frames… fix anything cluttered, overlapping » : aucun chevauchement, mais la liste reste à 4 % de la hauteur ([UGC ad generator promo](https://prompt-motion.com/twoclipping-6dd14e)).
- Planche contact sans contrôle des transitions : un glitch de 2 im passe ([Spotify product film](https://prompt-motion.com/brainextends-e19ac3), 3).
- « Render stills at every cut… fresh critic who didn't build it » : aucun glitch, mix à -14,1 LUFS (antonio-kodheli-490109).
- Scan des écarts entre images (« only the 16th-note runs may jump ») : aucune apparition brutale (rossaxbt-3085b7).
- 10 images et « does this look like Apple-tier? », sans question de taille : lignes d'UI à 1 % de la hauteur (daniel-haida-8691d4).
- « re-measured after AAC encode » : -14,2 LUFS et -2,7 dBTP mesurés sur le fichier publié ([Paper-style product launch film](https://prompt-motion.com/ik-builds-b8bdcf)).

D'où un contrôle chiffré par risque : texte ≥ 64 px en 16:9 et ≥ 90 px en 9:16 (skill motion-premiers-principes) ; aucun plan sans mouvement plus de 1 s ; dernière scène vue en image ; état attendu après chaque clic ; chaque coupe à ±1 im d'un temps si la vidéo est animée sur la musique ; pour une boucle, rendre les images 0 à N-1 (l'image qui suivrait la dernière est la première).

**Guide Otom.** À reprendre : la boucle de vérification, captures à 0, 20, 40, 60, 80, 100 % et à chaque scène, 3 tours au plus, points non résolus listés (guide Otom, p. 15). La Bible ajoute des bandes à 0,2 s autour de chaque action clé (une image fixe ne montre pas un mouvement) et le contrôle du calage musical. Le test des 3 secondes et les 4 règles anti-« template » (guide Otom, p. 6) aussi, corrigés : plusieurs accents si chacun a un rôle, un temps de lecture par mot, jamais une pause forfaitaire. Dans HyperFrames : `npx hyperframes check`, `snapshot --at …`, puis images extraites du MP4 final avec ffmpeg (savoir-faire HyperFrames).

```text
Avoid: <tic 1> (instead: <remplacement>); Avoid: <tic 2> (instead: …); … ; anything that looks like a template.
QA before delivery: stills at every cut + 0.2 s strips around each key action;
text >= 64 px (16:9); no still shot > 1 s; last scene checked; each cut within 1 frame of a beat.
Check every Avoid on the final MP4, then list what you fixed and what remains.
```

**À cocher**

- [ ] 5 à 9 interdits, chacun avec son remplacement, préfixés « Avoid: », en tête du prompt.
- [ ] Dernière ligne : « anything that looks like a template » ; aucun interdit de style imposé à un autre style.
- [ ] Aucun interdit contredit par la structure (durée de l'outro, maintiens, contenu réel choisi).
- [ ] Un contrôle chiffré par risque : texte ≥ 64 px (16:9) ou ≥ 90 px (9:16), maintien ≤ 1 s, dernière scène, coupe à ±1 im du temps.
- [ ] Chaque interdit revérifié sur le MP4 final (images extraites + bandes à 0,2 s), 3 tours au plus.
