## Durée, tempo et carte des temps (duration, BPM, beat map)

Ce qui est écrit en nombres est obéi. Une durée demandée est tenue à ±10 % dans 138 prompts sur 148 ; un tempo demandé est retrouvé à l'identique dans 10 prompts sur 13 ; une carte écrite en temps est suivie à 1 à 4 images près. Écrire le tempo ne fait pas monter la note (3,69 contre 3,87, p = 0,28, non significatif) : il fixe la **synchro par construction**, au lieu de la laisser au hasard du tirage.

**Quand s'en servir** : dans tout prompt de vidéo avec du son, à l'étape « musique et grille » du parcours (chapitre 12, *Méthode de production*), avant le découpage en plans. En typographie cinétique façon 1600, c'est la ligne clé du prompt.

**Ce qu'on décide** : la durée en nombre entier de mesures ; le tempo (BPM) ; la structure écrite en mesures et en temps plutôt qu'en secondes ; qui fournit la musique (piste fournie, musique composée en code, aucune).

**Ce qu'on vérifie** : la durée du fichier, le tempo réel de la piste, et une image par temps où quelque chose a changé.

![Une image par temps à 120 BPM : bouton, chargement, validation, île, lecteur, pause, glissé, bascule, curseur de volume](ILLUS:duree-tempo-1)

*[Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86), 0:00.27 à 0:04.27, une image toutes les 0,5 s (1 temps à 120 BPM) : le prompt dit « 120 BPM, 7 bars, something happens on every beat », et chaque temps montre un nouvel état.*

**Ce que Claude choisit seul**

- Sur 184 prompts muets sur le son, 100 vidéos (54 %) sortent animées sur une musique. Tempo choisi : 120 BPM (60 vidéos) ou 128 BPM (37).
- La durée tombe sur des mesures entières. Sur 127 vidéos animées sur la musique avec un tempo mesuré, 78 (61 %) durent un nombre entier de mesures à 0,15 mesure près ; un tirage au hasard en donnerait environ 30 %.
- Le prompt « showreel » canonique donne 128 BPM et 15 s dans 19 runs sur 33 : 32 temps, 8 mesures exactes.
- Avec « 10 s » pour seule indication, [Claude self-intro motion graphic](https://prompt-motion.com/1littlecoder-9fef89) pose 6 plans de 1 à 2 s sur une grille de 0,5 s (120 BPM).
- Sans durée écrite (82 vidéos), la durée va de 10 à 457 s, médiane 38,6 s.

Le même prompt muet sur le son peut sortir avec ou sans musique : [Kinetic type self-portrait](https://prompt-motion.com/souravbhar871-61f424) est muet, son jumeau 1littlecoder est calé à 120 BPM. Ce qui n'est pas écrit varie.

**Ce qui est obéi quand on l'écrit (modèles : vidéos animées sur la musique)**

| Ce que le prompt écrit | Vidéo (note) | Ce qui est mesuré |
| --- | --- | --- |
| « 120 BPM, 7 bars, something happens on every beat » | [Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86) (4) | 28 temps, 840 images à 60 fps ; chaque pic de vitesse sur un temps ou un demi-temps, ±1 im |
| « 120 BPM, 46 beats. b0–2: … b13–16: the music drops » | [Prompt Motion site promo](https://prompt-motion.com/antonio-kodheli-490109) (4) | toutes les actions à 1-4 im d'un temps ; mais b32-46 impose 5 s de carte fixe |
| Formule « beat k = 0,048 + 0,4838·k s », coupes à f72, f101, f159 | [Frame by Frame launch video](https://prompt-motion.com/notdwd-7de38a) (4) | les 7 coupes tombent à 1 image près, à 124 BPM |
| « Score the music so every cut… lands on a beat or drop; retimed until synced » | [Supademo launch video](https://prompt-motion.com/jhylee95-e1152f) (4) | 39 gestes sur 41 à ±1 image ; silence et drop programmés |
| « Create the music too and make sure the video is synced with it » | [Product intro synced to music](https://prompt-motion.com/bogdandragomir-35e024) (4) | grille commune à 96 BPM : 6 mesures = 15,05 s, chapitres au 1er temps, lignes sur les demi-temps |
| « based on the attached music, perfectly syncing the lyrics… to the vocals and beat » | [Synced lyrics motion video](https://prompt-motion.com/samaote-5e2fc2) (5) | tempo lu dans la piste (6/8 à 158) ; 13 chapitres d'une mesure ; mots sur les syllabes |

Sans piste : « compose la musique » et « cale chaque coupe sur un temps ». Avec une piste jointe : nommer les deux cibles, voix et temps, comme samaote.

**Ce qui n'est pas obéi, et pourquoi (contre-exemples)**

- **La piste attendue n'arrive pas.** Les prompts qui chiffrent un tempo attendent souvent une chanson de l'utilisateur : 7 animées sur 13, 5 partielles. Avec une piste demandée, 6 vidéos animées sur 12. [Morphing UI states loop](https://prompt-motion.com/demonugc-4c5753) a le même prompt que twoclipping-5cba86, mais sort muet.
- **Le tempo annoncé n'est pas celui de la piste.** [Food craving launch film](https://prompt-motion.com/ultimaxbt-2ddf1e) écrit 130 BPM ; la piste mesure 119 : calage lâche, note 3. [Launch video remake comparison](https://prompt-motion.com/notdwd-c2037d) coupe 0,12 s avant la grosse caisse au lieu de 0,067 s.
- **Une minuterie en secondes hors grille.** [Spotify product film](https://prompt-motion.com/brainextends-e19ac3) minute 15 scènes au dixième de seconde, sans grille : scènes à l'heure, mais 8 changements sur 21 seulement sur un temps (partielle, note 3).
- **La fin d'un long storyboard.** [Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4) suit ses minutages à ±0,5 s jusqu'à 9 s, puis compresse : signature à 11 s au lieu de 12,8 s (voir *Le piège des prompts trop longs*).
- **Rien sur le son.** Les 12 vidéos à musique posée sans calage viennent toutes de prompts muets sur le son. Elles sont notées 3,33 en moyenne, aucune 5 ; les 129 vidéos animées sur la musique, 4,06, dont 14 des 17 notées 5.

Un minutage en secondes est obéi aussi ([Speech built as architecture](https://prompt-motion.com/gdgtify-287ddf) : 7 repères à 0,1 s près), mais cette vidéo muette n'est pas un modèle de calage.

**Écrire la carte des temps**

Choisir la durée en mesures : durée = mesures × 4 × 60 / BPM. 15 s = 8 mesures à 128 BPM ; 30 s = 16 mesures à 128 BPM, ou 15 à 120 ; 20 s = 10 mesures à 120 ; 15 s = 6 mesures à 96. À 60 fps, un temps fait 30 images à 120 BPM, 28,125 à 128.

Les messages changent sur les mesures (2 s à 120 BPM), les temps servent aux accents (skill motion-premiers-principes). Pour le temps de lecture, deux cas (arbitrage du 20 octobre). En typographie cinétique mot à mot, environ 0,2 s par mot, liste rythmée d'un mot par temps. Pour une phrase entière immobile, T_min = 0,4 s + caractères / 15, plancher 1,0 s.

Du guide Otom, on garde la section « Durée et format » (guide Otom, p. 7) et le storyboard Temps · Ce qu'on voit · Ce qui bouge (p. 8), en ajoutant les colonnes Mesure/temps et Courbe. La Bible corrige quatre points. Le son n'est pas ajouté « au montage » (p. 4 et 13) : la musique pilote l'animation. « Chaque texte immobile au moins 1,5 s » (p. 7) devient le temps de lecture ci-dessus, avec un micro-mouvement pendant la tenue. Les entrées de 500 ms sont au haut de la fourchette : médiane mesurée 0,30 s. Le MP4 se rend à 60 fps, pas 30.

Pour une musique générée, découper la piste en sections dont la somme fait la durée du film (apports du lot 1, chapitre 13). Bloc à coller dans le prompt :

```text
MUSIQUE ET GRILLE
- 30 s à 128 BPM = 64 temps = 16 mesures (1 mesure = 1,875 s ; 1 temps = 28,125 images à 60 fps).
- Musique : [piste jointe, tempo mesuré X BPM, 1er temps à Y s] OU [compose-la en code à ce tempo].
  Si aucune piste n'arrive, compose-la : jamais de vidéo muette.
- Sections : intro m1-2, montée m3-8, drop au 1er temps de m9 sur la révélation, break m15, fin m16.
- Chaque plan change au 1er temps d'une mesure ; les détails tombent sur les demi-temps.
- Coupe 1 à 3 images avant le temps ; aucun plan figé plus d'une mesure.
STRUCTURE (en mesures)
m1 : [accroche] · m2-3 : [problème] · m4-9 : [démo] · m10-12 : [preuves] · m13-14 : [rafale] · m15-16 : [signature animée]
```

Voir au chapitre 9 *La grille de tempo : une horloge, une scène par mesure*, *Couper en avance, atterrir sur le temps*, *Un élément par temps, les détails sur les demi-temps*, *Le temps fort : montée, silence d'un temps, impact sur la révélation*, *Le maintien : temps de lecture ou temps mort* et *La musique calquée sur le montage* ; au chapitre 10, *Le chapitrage : un chapitre par mesure*. Grilles mesurées au chapitre 14 : *Shape morphing through UI states — @twoclipping*, *Synced lyrics motion video — @samaote*, *Product intro synced to music — @BogdanDragomir*.

**À cocher**

- [ ] Durée = nombre entier de mesures au tempo choisi (ex. 30 s = 16 mesures à 128 BPM).
- [ ] Tempo écrit en BPM, et structure écrite en mesures ou en temps, pas en secondes.
- [ ] Source de la musique dite (jointe, composée en code, aucune), avec la consigne si elle manque.
- [ ] Tempo de la piste jointe mesuré avant de caler (écart toléré : 0 BPM).
- [ ] Après rendu : durée du MP4 à ±1 image de la grille ; une image par temps extraite, chacune différente de la précédente.
- [ ] Coupes et entrées à ±2 images d'un temps ou d'un demi-temps sur 10 points contrôlés.
