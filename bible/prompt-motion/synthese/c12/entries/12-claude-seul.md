## Ce que Claude fait seul : les réflexes de fabrication d'Opus 5.5 quand le prompt se tait

Quand le prompt ne fixe pas une valeur de fabrication, Opus 5.5 la choisit, et presque toujours la même. Ce qui est chiffré est obéi : 138 durées demandées sur 148 sont tenues à ±10 %. Ce qui est tu revient au réflexe. Cette entrée sert à chaque étape du parcours : elle dit quelles valeurs accepter et lesquelles écrire dans le brief. Le contenu et la lecture du prompt sont traités au chapitre 13, Écrire un prompt de motion ; ici, la fabrication seule.

![Huit images, une au milieu de chaque mesure : ligne et point, RHYTHM, morphing, grille de quarts de cercle, 2026 en particules, tunnel, harmonographe, carte CLAUDE.](ILLUS:claude-seul-1)

*[Kinetic type showreel](https://prompt-motion.com/itsuki-dev-10942d), 0:00.93 à 0:14.07 : une image au milieu de chacune des 8 mesures à 128 BPM. Le HUD numérote 01/08 à 08/08 et le film finit sur la carte « CLAUDE. ». Le prompt d'une ligne ne demandait rien de tout cela.*

**Les réflexes mesurés**

| Réflexe | Fréquence mesurée | Garder ou écraser | Ligne de brief |
| --- | --- | --- | --- |
| Durée | non demandée (84 vidéos) : médiane 38 s, quartiles 24 et 60 s ; demandée : tenue dans 93 % des cas | écraser | « Durée : 30,0 s. » |
| Tempo | sans BPM dans le prompt (178 vidéos mesurées) : 120 BPM 74 fois, 128 BPM 42 fois (65 %) | garder | « 128 BPM, 4/4. » |
| Durée en mesures entières | 87 de ces 178 vidéos (49 %) ; 15 s à 128 BPM = 8 mesures, 35 vidéos | garder, rendre explicite | « 30 s = 16 mesures. » |
| Bande-son | rien sur le son (184 prompts) : 100 animées sur la musique (54 %), 31 muettes (17 %), 12 à musique posée (7 %) | garder, mais l'exiger | « Bande-son composée en code sur la même horloge. » |
| Cadence | sans consigne (219 vidéos) : 60 fps 119 fois (4,04 de moyenne, 14 des 17 notes de 5), 30 fps 90 fois (3,66, 3 notes de 5) | écraser | « 60 fps. » |
| Taille | sans consigne (211 vidéos) : 1920×1080 139 fois, 1280×720 36 fois (17 %) | écraser | « 1920×1080. » |
| Structure | prompt canonique (33 runs) : chapitres numérotés 22, HUD de régie 27, chiffres de preuve 28, rafales 24, carte de fin 25 | garder le chapitrage, écraser le HUD | « Un plan par mesure ; pas de HUD décoratif. » |
| Sujet | sans produit à montrer, Claude se met en scène : nom « CLAUDE » ou « Opus » à l'écran dans 32 runs sur 33 | écraser | « Sujet : <produit>, jamais Claude. » |
| Texte | trop petit dans environ 188 vidéos, dont 13 des 17 notées 5 ; aucun des 230 prompts ne fixe une taille en % | écraser | « Aucun texte lu sous 3 % de la hauteur. » |
| Fin | signature finale dans 110 vidéos ; fin figée relevée dans environ 61 | écraser | « Carte finale ≤ 1,5 s, vivante. » |

**La grille musicale, son meilleur réflexe**

Sans consigne, Claude choisit le tempo d'après la durée : 15 s à 128 BPM font 32 temps, soit 8 mesures exactes. Il écrit la timeline en secondes rondes (multiples de 0,25 ou 0,5 s) et compose la bande-son sur la même horloge. À 120 BPM, une demi-seconde vaut un temps : le calage devient automatique. [Fitters Bible app promo](https://prompt-motion.com/adamdesgns-478d6d) cale ainsi coupes et temps sans le demander. Le réflexe casse dès que la grille ne divise plus la seconde. [FigPad product promo](https://prompt-motion.com/ai-baymax-0ef9dd) programme ses scènes à 13,6 et 19,6 s sur une piste de 100 BPM : synchro partielle, note 3. [Motion design showreel](https://prompt-motion.com/samuel-spitz-974923) pose une piste de 124 BPM sur une timeline en demi-secondes : elle ne colle que 2,5 s. Règle : écrire la carte des temps en mesures et en temps, jamais en secondes (voir *La grille de tempo : une horloge, une scène par mesure* au chapitre 9).

Le prompt « showreel… go all out » montre le gabarit complet (76 vidéos, 4,07 de moyenne, 9 notées 5) : 120 ou 128 BPM (57 sur 74 mesurés), 60 fps (61 sur 76), animé sur la musique (60), 15 s (53). Puis un chapitre d'une mesure (voir *Le chapitrage : un chapitre par mesure* au chapitre 10), un habillage de régie (voir *L'habillage persistant : HUD, chapitres et gabarit fixe* au chapitre 2) et une carte « Claude. » à point coloré (voir *La signature finale : logo, slogan, appel, sans temps mort* au chapitre 10). Solide, mais uniforme : deux runs du même prompt ont « presque le même squelette ».

**Les tics qui reviennent si rien n'est interdit**

Comptés par mots-clés dans les défauts relevés, donc des ordres de grandeur : HUD, timecodes et étiquettes de coin dans environ 58 vidéos ; glitch RVB dans 46 ; confettis et particules de fête dans 39 ; mots coupés par le bord dans 30 ; flash blanc dans 26 ; texte brouillé dans 19. [Tennis game launch video](https://prompt-motion.com/deifosv-04e4d3) répète le même flash blanc 14 fois en 30 s, faute d'interdit. Le chapitre 11, Cohérence et clichés, donne le contrôle de chacun.

**Ce que Claude ne fait pas seul**

- Vérifier le fichier encodé. [EyezOn 100 users thank-you](https://prompt-motion.com/sudiyasa-f48ac9) et [Motion designer showreel](https://prompt-motion.com/hanifproduktif-54bdee) sortent 449 images au lieu de 450. [Browser automation skill launch](https://prompt-motion.com/hqmank-7c61f1) garde un retard du son de 83 ms, [Claude motion design reel](https://prompt-motion.com/ghinaiya-nirmal-5d8fec) de 86 ms (5 images à 60 fps).
- Mesurer une piste fournie. [Food craving launch film](https://prompt-motion.com/ultimaxbt-2ddf1e) annonce 130 BPM pour une piste à 119 ; [Spotify product film](https://prompt-motion.com/brainextends-e19ac3) en demande 120, on en mesure 79. Les deux finissent en synchro partielle, notées 3.
- Tenir les interdits d'un long prompt : 3 échecs sur 15 listes vérifiées, tous dans des prompts de 4 024 à 8 142 caractères.
- Fixer seul une taille lisible ou une tenue maximale : une intention sans chiffre (« big type », « room to breathe ») est tenue à la baisse.

**La méthode Otom, corrigée.** Le guide écrit que « une animation dynamique » ne veut rien dire pour Claude (guide Otom, p. 5). Nos mesures nuancent : Opus 5.5 pose seul une grille juste, une structure en mesures et une bande-son calée dans 54 % des cas. Il ne règle seul ni la lisibilité ni le contrôle du fichier. Le guide fait rendre le MP4 à 30 fps (guide Otom, p. 16) : la Bible a raison, 60 fps (4,03 de moyenne contre 3,65).

**Les lignes de brief qui écrasent un réflexe**

```text
FABRICATION (à coller dans chaque brief)
- 1920×1080, 60 fps. Durée 30,0 s = 16 mesures à 128 BPM, 4/4.
- Carte des temps écrite en mesures et temps, jamais en secondes rondes.
- Bande-son composée en code sur la même horloge ; premier son à t = 0.
  (Piste fournie : mesure son tempo et son premier temps avant tout.)
- Message ≥ 64 px ; aucun texte lu sous 32 px (3 % de la hauteur).
- Aucun plan immobile plus de 1 s ; carte finale ≤ 1,5 s, avec une poussée de 2 %.
- Sujet : <produit>. Jamais Claude, Opus ni « motion designer ».
- Interdits : HUD et timecodes décoratifs, glitch RVB, flash blanc répété,
  confettis, mots coupés par le bord.
- Avant de livrer : nombre d'images = durée × 60 ; écart son/image ≤ 1 im
  sur 3 impacts ; une image extraite par mesure.
```

Le seuil de 64 px vient du skill motion-premiers-principes ; celui de 3 % suit nos défauts mesurés.

**À cocher**

- [ ] Durée, cadence (60 fps) et taille (1920×1080) écrites dans le brief.
- [ ] Tempo choisi pour que la durée fasse un nombre entier de mesures ; carte des temps en mesures.
- [ ] Bande-son demandée sur la même horloge, ou piste fournie mesurée avant la construction.
- [ ] Taille minimale du texte (3 % de la hauteur) et tenue maximale (1 s) chiffrées.
- [ ] Tics par défaut interdits nommément (HUD, glitch, flash répété, confettis).
- [ ] Fichier encodé contrôlé : images = durée × 60, son décalé de 1 im au plus.
