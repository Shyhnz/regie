## Prompts modèles annotés (annotated model prompts)

Devant une page blanche, on copie un prompt qui a déjà donné une vidéo notée 5, puis on ajoute les lignes qui lui manquaient. Les 17 vidéos notées 5 ont des prompts de 11 à 994 caractères (médiane 151). Les quatre modèles ci-dessous couvrent quatre besoins et ont chacun une étude image par image à 60 fps au chapitre 14. Quatre cas ne font pas une loi : aucun ingrédient ne fait monter la note de façon significative (voir *Les ingrédients qui changent le résultat*). Ces modèles montrent la conformité : chaque ligne écrite se retrouve à l'image.

![Quatre vignettes : le tableau de bord de Dub sur fond noir, le soleil éclipsé et le mot « night » sous un HUD de mesure, un cercle bleu, un carré rouge et un triangle jaune sur papier crème, le mot « ask » en serif noire sur blanc avec un trait corail](ILLUS:prompts-modeles-1)

*[Dub promo video](https://prompt-motion.com/steventey-0d20e4) à 0:06, [Synced lyrics motion video](https://prompt-motion.com/samaote-5e2fc2) à 0:10, [Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e) à 0:04, [Engraving-style Claude ad](https://prompt-motion.com/lexnlin-038035) à 0:02.30 : quatre prompts de 204 à 994 caractères, quatre directions artistiques que Claude a choisies seul.*

**Quel modèle copier**

| Besoin | Modèle (longueur) | Ce que le prompt fixe | Lignes à ajouter |
| --- | --- | --- | --- |
| Promo SaaS d'un vrai produit | Dub promo video (204 car.) | durée, URL, « launch saas » | taille du texte, son, fin |
| Clip calé sur une musique fournie | Synced lyrics motion video (224 car.) | piste jointe, synchro voix et temps | une seule DA, contraste, flashs comptés |
| Showreel ou film de marque à concept | Motion techniques showreel (744 car.) | liste de techniques, enchaînement, concept | tempo, habillage lisible, liste courte |
| Pub rapide avec référence | Engraving-style Claude ad (994 car.) | recherche, interdits, référence, fin | message, durée minimale de plan |

**1. La promo SaaS en deux lignes**

[Dub promo video](https://prompt-motion.com/steventey-0d20e4) : noté 5, 15,1 s, 120 BPM, 60 fps. C'est le prompt canonique du showreel (« go all out »), plus une ligne : « it should be a launch saas video for https://dub.co ».

- L'URL ancre le vrai produit et sa charte : liens courts dub.sh, clics, leads, ventes, partenaires, orange de marque.
- « launch saas » déclenche l'arc de lancement : une URL de 164 caractères tapée, compressée en point, d'où jaillit le lien court, puis preuves, fonctions, slogan. Voir *L'arc de pitch : problème → solution → preuves → appel* (chapitre 10).
- « showreel » pousse la variété des transitions (compression, éclair, filé, iris) et une rafale de 8 fonctions.
- Rien sur le son : Claude choisit 120 BPM et déclenche chaque geste 4 images avant la grosse caisse ; 5 compteurs en power3.out, signature en iris de 5 images (étude *Dub promo video — @steventey*, chapitre 14).
- Manquait : la lisibilité (textes d'interface à 1,5-2,4 % de la hauteur, visibles 0,25 à 0,5 s) et un vocabulaire propre (globe à points, halos néon, déjà vus).

À ajouter : « texte à lire ≥ 3 % de la hauteur, message ≥ 6 % » ; « durée en mesures entières (16 s = 8 mesures à 120 BPM) » ; « ni globe à points ni halo néon ».

**2. Le clip calé sur une musique fournie**

[Synced lyrics motion video](https://prompt-motion.com/samaote-5e2fc2) : noté 5, 224 car., 29,7 s, 6/8 à 158 croches par minute, 60 fps. La ligne clé : « based on the attached music, perfectly syncing the lyrics and animation to the vocals and beat ».

- La piste jointe est l'entrée décisive : Claude en lit le tempo et la mesure, affichés à l'écran (« 6/8 · 158 »).
- Deux cibles nommées, deux niveaux tenus : les mots suivent la voix, à ±2 images d'une croche ou d'une double-croche ; les 13 chapitres suivent les mesures, à ±2 images du premier temps (étude *Synced lyrics motion video — @samaote*). Voir *Le calage mot à mot* (chapitre 3).
- Rien sur le style : Claude tire une dramaturgie des paroles (embrasement, éclipse, sourire).
- Manquait : le contraste (texte crème sur beige), la retenue (9 flashs en 30 s), l'unité (13 looks en 30 s) et l'accroche (4,5 s de petit italique avant le premier événement fort).

À ajouter : « une seule direction artistique » ; « contraste du texte ≥ 4,5:1 sur chaque fond » ; « flash plein cadre réservé aux 2 plus gros temps forts » ; « premier mot lisible avant 0,5 s ».

**3. Le showreel à concept**

[Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e) : noté 5, 744 car., 15,1 s, 128 BPM, 60 fps. Deux phrases font le film : « every shot transitioning naturally into the next » et « meticulously art-directed rather than like a random collection of effects ».

- La seconde change un catalogue en récit : Claude cherche un fil (Kandinsky : point, ligne, plan, volume) qui ordonne les 12 techniques imposées.
- La première est prise à la lettre : chaque chapitre naît de l'objet du précédent ; 3 flashs seulement. Voir *Le fil rouge* (chapitre 10) et *L'objet relais* (chapitre 4).
- Rien sur la musique : Claude dimensionne 15 s = 32 temps = 900 images à 128 BPM ; événements à 0-1 image de n × 28,125, décalages d'un quart de temps (7 images), ressorts back.out(2.2) à +15 % (étude *Motion techniques showreel — @lukasersil*).
- Manquait : la liste impose fluide et particules hors concept, les deux chapitres les plus faibles ; HUD et légendes à 1,2 % de la hauteur.

À ajouter : « 5 techniques au plus, toutes au service du concept » ; « un habillage informe et fait ≥ 2,5 % de la hauteur, sinon rien » ; « 128 BPM, 8 mesures ».

**4. La pub rapide avec référence et interdits**

[Engraving-style Claude ad](https://prompt-motion.com/lexnlin-038035) : noté 5, 994 car., 14,5 s, 1080 × 1920, 60 fps ; 1 344 likes sur le site. Blocs research, design, rules, ideas ; extraits : « no beige "artsy" look, no eyebrow labels », « Every morph has to be perfect », « Study the reference closely: smoothness, timing, shot durations », « ending on the Claude logo ».

- Interdits tenus : blanc pur #FFFFFF au lieu du sépia que la gravure appelait, aucune étiquette.
- « Every morph » donne des morphs qui racontent : ask? → task (le « ? » vole en arc 6 images et devient « t »), draft → craft.
- La référence donne le rythme : 56 plans en 14,5 s ; 67 coupes sur 87 précèdent leur attaque sonore de 1,8 à 2,3 images (étude *Engraving-style Claude ad — @LexnLin*). Pas de BPM : la grille, ce sont les attaques.
- « ending on the Claude logo » : Claude ouvre aussi sur le logo, d'où une boucle.
- Manquait : un message (on retient « penser », pas ce que fait Claude) et une durée minimale de plan : rafales de 3 à 5 images, gravures impossibles à identifier ; mots et images coupés par le bord.

À ajouter : « le message en une phrase » ; « une image à reconnaître reste au moins 0,2 s (12 images) ; plus court, c'est une texture » ; « rien de lisible coupé par le bord, marge 6 % ».

**Lignes à emprunter à des prompts notés 4**

- « retimed until synced » ([Supademo launch video](https://prompt-motion.com/jhylee95-e1152f), musique composée) : 39 gestes sur 41 calés à ±1 image.
- « Make the last frame identical to the first, cursor position and speed included » ([Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86)) : boucle au pixel près (écart 0,33/255). Formuler plutôt « l'image qui suivrait la dernière est la première » (correctif 08 de *Prompts correctifs*).
- « then render it, check the frames yourself and fix anything that overlaps, clips or feels rushed » ([SaaS launch video](https://prompt-motion.com/aschapmann-131210)) : aucun chevauchement, marges ≥ 9 %.

**Contrepoint : les 12 prompts du guide Otom**

Les prompts métier du guide (guide Otom, p. 8 à 13) suivent tous le même schéma : durée, format et fichier, « Charte : [BLOC CHARTE] », contexte, déroulé minuté par tranches, contraintes de mise en page. Bon squelette pour une animation sobre : un déroulé minuté est obéi (voir *Durée, tempo et carte des temps*). La Bible corrige deux points : il n'y a ni musique ni grille, et les fins sont des pauses de 2 à 3 s. Le prompt 01 « KPI animé » finit ainsi : « 6 à 8 s : pause, tout reste immobile » (guide Otom, p. 8), soit 25 % de la durée figée. À 120 BPM, ses 8 s font 4 mesures ; la dernière garde le chiffre à l'écran, mais vivant (pulsation sur le temps, poussée de 2 %).

**À cocher**

- [ ] Modèle choisi selon le besoin : promo SaaS, clip sur musique fournie, showreel à concept, pub avec référence.
- [ ] Lignes manquantes ajoutées : texte à lire ≥ 3 % de la hauteur (message ≥ 6 %), son et tempo, fin animée d'une mesure au plus.
- [ ] Durée minimale écrite : 0,2 s par mot ou par image à reconnaître.
- [ ] Prompt sous 3 000 caractères (les 17 vidéos notées 5 sont sous 1 000).
- [ ] Étude 60 fps du modèle relue avant de juger la V1.
