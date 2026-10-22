## Trop d'information pour le temps donné : surcharge et effet catalogue (information overload, unreadable burst, catalogue reel, off-format length)

C'est le tic de l'ambition : il touche presque uniquement les bonnes vidéos. La surcharge est relevée dans 53 vidéos, dont 52 notées 4 ou 5 (28 % des 186) et une seule notée 1 à 3 (2 %) ; note moyenne 4,11 avec, 3,79 sans. L'effet catalogue touche 34 vidéos, dont 28 notées 4 ou 5 (15 %) et 3 notées 5. L'œil ne sait plus où regarder et ne retient que « l'effet de masse » : au test des 3 secondes, le spectateur décrit un effet, pas un message. Gravité 2. Vu dans 77 vidéos, dont 70 notées 4 ou 5 et 9 notées 5.

![Huit images sur une seconde : « One studio. From the story to the » puis film, website, app, software se remplacent, chacun flou à mi-changement](ILLUS:surcharge-1)

*[Studio website showreel](https://prompt-motion.com/andginja-333d32), 0:12.30 à 0:13.37 : le dernier mot change toutes les 4 im à 30 fps (0,13 s). Film, website, app : on voit un clignotement, on ne lit que « software », tenu à la fin.*

**Symptôme mesuré**

- **Texte trop bref** (28 vidéos) : mots tenus 3 à 10 im. TYPE change de police toutes les 3 im ([Motion designer showreel](https://prompt-motion.com/zaqailo-212ad3)) ; ARCS, OVERLAP, SNAP et SOUL restent 7 im chacun ([Motion designer showreel](https://prompt-motion.com/eyishazyer-af035b)) ; 10 mots en contour lumineux à 0,27 s ([Oscilloscope-style studio motion graphic](https://prompt-motion.com/rneayan-ea6129)).
- **Plan chargé** (27) : plusieurs choses à lire en même temps. Huit éléments simultanés de 9 à 15 s (livre, PDF, URL, flux, anneau de mots, cartes, curseur, mot changeant) dans [DistilBook motion explainer](https://prompt-motion.com/sudo-kiran-b055de).
- **Effet catalogue** (34) : sept ou huit chapitres-techniques en 15 s, ou une durée hors format. 45 s au lieu de 15 ([Lead Notifi product ad](https://prompt-motion.com/leadnotifi-e83f94), [Email tool promo reel](https://prompt-motion.com/melvynx-6cde6c)) ; 76 s pour quatre fonctions ([CloudJoi search showcase](https://prompt-motion.com/lester-tyy-f897f7)).

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Rafale d'images | [Engraving-style Claude ad](https://prompt-motion.com/lexnlin-038035), 0:04.12 | Notée 5 : 3 à 5 im par gravure, la plupart impossibles à identifier |
| Rafale lisible (modèle) | [Motion designer showreel](https://prompt-motion.com/teslachartz-c58b32), 0:11.00 | 6 mots tenus 15 im chacun (une croche à 120 BPM, 60 fps) : chacun se lit |
| Grille de démos | [Particle sphere motion reel](https://prompt-motion.com/blue-clarity-ef56d0), 0:10.80 | 9 micro-animations en boucle sous un HUD, à lire en 1,5 s |
| Tableau de bord | [Datagran ChatGPT ads explainer](https://prompt-motion.com/charlesmendez-73b6e4), 0:44.00 | 5 KPI décalés de 3 im, une courbe en 1,4 s, un chat qui répond : 7 s pour tout |
| Deux textes à la fois | [SaaS product launch video](https://prompt-motion.com/xelandre-363f00), 0:04.00 | Titre serif et sous-titre karaoké (≈ 1,5 % H) à lire ensemble pendant 20 s |
| Mots superposés | [DistilBook product explainer](https://prompt-motion.com/sudo-kiran-4f8b59), 0:20.60 | Fondus de 4 à 6 im : « Hola » et « Bonjour » lisibles ensemble, sur une grille de 4 boucles |
| Catalogue | [Claude motion designer showreel](https://prompt-motion.com/3xtihor-0f6911), 0:09.60 | 8 chapitres en 15 s ; bento de 5 mini-démos visible ≈ 1 s |
| Durée hors format | [Lism CSS 1.0 release video](https://prompt-motion.com/ddryo-loos-300829), 0:00.00 | 55,7 s pour une consigne de 15 s : dix chapitres au lieu de trois ou quatre |

![Huit images à 5 im d'écart : cheval, écorché, squelette, torse, bustes ; une gravure différente à chaque image](ILLUS:surcharge-2)

*[Engraving-style Claude ad](https://prompt-motion.com/lexnlin-038035), 0:04.12 à 0:04.70 : une gravure toutes les 3 à 5 im. Comme texture, ça marche (vidéo notée 5) ; aucune image ne porte un message à lire.*

![Trois images d'une grille de neuf cartes animées en boucle : ondes, barres, cadran, code, points, horloge, rayons, courbe](ILLUS:surcharge-3)

*[Particle sphere motion reel](https://prompt-motion.com/blue-clarity-ef56d0), 0:10.80 à 0:12.35 : neuf démos bougent en même temps. L'œil saute de carte en carte et n'en lit aucune avant la coupe.*

**Règles**

1. **Un seul point focal.** Pendant une lecture : 1 mouvement principal et 2 ambiances au plus (amplitude ≤ 10 %, hors de la zone du texte) ; avec 3 éléments ou plus, un tiers au plus bouge (skill motion-premiers-principes). C'est la règle anti-« template » n° 1 et le correctif 03 du guide Otom (p. 6 et 14), repris tels quels : secondaires décalés de 100 à 150 ms, soit 7 im à 128 BPM (voir *Un élément par temps, les détails sur les demi-temps* au chapitre 9).
2. **Un seul texte à lire à la fois**, 7 mots au plus par écran en 16:9 (5 à 6 en 9:16), 2 niveaux typographiques. Pas de titre et de sous-titre karaoké ensemble ; pas de fondu où deux mots se lisent.
3. **Le temps de lecture se calcule, selon le cas.** Mot à mot sur le temps : environ 0,2 s par mot ; un mot neuf tient au moins 15 im à 60 fps, 7 im pour un mot court déjà vu, 3 à 4 im pour une couleur ou une forme, jamais un texte. Phrase immobile : 0,4 s + caractères / 15, plancher 1,0 s. La Bible corrige le guide Otom : pas de 1,5 s forfaitaire (p. 7).
4. **La rafale est une texture.** Une par film, puis son mot porteur tenu au moins son temps de lecture ; une liste rythmée reste ensuite affichée en entier (voir *L'accélération par subdivisions et la rafale* au chapitre 9).
5. **Une idée par plan, un message toutes les 2 à 4 s, un fil commun.** Huit chapitres d'une mesure tiennent s'ils déclinent une seule idée (voir *Le chapitrage : un chapitre par mesure* au chapitre 10) ; huit techniques sans lien font catalogue. Le message principal se lit avant 30 % de la durée. S'il manque du temps, on coupe une idée, on n'accélère pas.
6. **Durée rendue = durée demandée**, à 0,5 s près. Les 17 vidéos notées 5 ont une durée médiane de 15,06 s ; au-delà de 60 s, la moyenne tombe à 3,54.

**Avec le style 1600.** « Quelque chose bouge toutes les 0,5 à 1 s » reste juste : ce qui casse, c'est la quantité à lire, pas la cadence. Un mot par temps (0,47 s à 128 BPM) passe s'il fait 1 à 3 mots. S'il doit aussi démontrer un effet, il lui faut deux temps : STRETCH, STAGGER et SNAP se lisent à peine en un temps dans [Kinetic type showreel](https://prompt-motion.com/zheke-38deff), pourtant notée 5. C'est aussi la première « erreur fréquente » du guide Otom : « Vouloir tout dire » (p. 5).

**Quand s'en servir** : le budget de mots se fixe au script (étape 2), le nombre d'idées et la durée au découpage (étape 5) ; on contrôle à l'étape 9 (chapitre 12, Méthode de production).

**Contrôle avant rendu**

| Quoi | Image à extraire | Mesure | Seuil |
| --- | --- | --- | --- |
| Point focal | Image au milieu de chaque plan dense | Éléments en mouvement ; blocs de texte à lire | 1 principal + 2 ambiances ; ≤ 7 mots ; 1 texte à lire |
| Rafales | Bande de la rafale à pleine cadence | Images par mot | Mot à lire ≥ 15 im à 60 fps ; mot porteur tenu ensuite ≥ son temps de lecture |
| Catalogue | Storyboard et planche à 4 images/s | Idées par mesure ; instant du message | ≤ 1 idée par plan ; message avant 30 % de la durée |
| Durée | ffprobe | Durée du fichier | Durée demandée ± 0,5 s |
| Premier passage | Une lecture, vitesse normale, son coupé | Messages non lus ; ce qu'on retient | 0 message raté ; on redit le message, pas un effet |

```bash
ffmpeg -v error -i rendu.mp4 -vf "fps=4,scale=320:-1,tile=10x6" -frames:v 1 planche.jpg
python3 ~/.claude/skills/motion-premiers-principes/scripts/temps-lecture.py --fichier messages.txt
ffprobe -v error -show_entries format=duration -of csv=p=0 rendu.mp4
```

Sur la planche à 4 images/s (15 s par feuille), un message à lire doit apparaître immobile et complet sur au moins 4 vignettes par seconde de temps de lecture. `messages.txt` liste `début|fin|texte` pour chaque phrase immobile ; les mots d'une rafale se comptent sur la bande, image par image. Le test du premier passage est le test des 3 secondes du guide Otom (p. 6) : un spectateur, une seule lecture, « qu'as-tu retenu ? ».

**À cocher**

- [ ] Un seul point focal par plan : 1 mouvement principal et 2 ambiances au plus pendant la lecture.
- [ ] Un seul texte à lire à la fois, ≤ 7 mots par écran en 16:9 (5 à 6 en 9:16).
- [ ] Chaque mot à lire tenu ≥ 15 im à 60 fps ; phrase immobile ≥ 0,4 s + caractères / 15.
- [ ] Une rafale au plus, et son mot porteur tenu ensuite son temps de lecture.
- [ ] Une idée par plan, message lisible avant 30 % de la durée.
- [ ] Durée rendue = durée demandée (± 0,5 s) ; test des 3 secondes réussi.
