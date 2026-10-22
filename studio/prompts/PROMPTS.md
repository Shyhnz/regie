# Prompts du studio

À coller tels quels, crochets remplis. Chaque prompt finit par un arrêt : Claude montre une preuve et attend.

## 0. Le contrat de production (en tête de toute session longue)

```text
Tu diriges et tu fabriques un film de motion codé, dans ce dossier de studio.
But : un film de [durée] s pour [produit / public]. Le spectateur doit retenir : [une phrase].
Entrées : seulement les assets de assets/ et les textes approuvés de BRIEF.md. Un manque est bloquant : tu demandes, tu n'inventes pas.
Fichiers : BRIEF.md, REFERENCE.md, STYLE.md, SHOTLIST.md, timeline.js (seule source du temps), motion.js (seuls nombres de mouvement), CONTRACT.md (contrat de rendu), JOURNAL.md.
Construction : HyperFrames, 1920×1080, 60 fps ; chaque image se rend directement (fonction pure du temps) ; mouvement, repères son et transitions sur la même timeline ; source éditable et commande de rendu reproductible.
Portes (tu t'arrêtes à chacune et montres la preuve) :
1. inventaire des assets + REFERENCE.md ;
2. STYLE.md + SHOTLIST.md + timeline.js, avant toute construction ;
3. ouverture et plan héros seuls, images témoins + audit des nombres ;
4. premier montage + planche + bandes autour des coutures ;
5. critique sur les images seules, 3 défauts les plus graves réparés en local ;
6. son mesuré, déclinaisons recomposées, fichiers vérifiés (ffprobe, téléphone).
Ne dis jamais « fini » parce qu'une commande s'est terminée sans erreur : fini, c'est quand les preuves disent que le film marche.
Livre : vidéos, affiche, planches, source, liste des assets, et une note sur ce qui demande encore un regard humain.
```

## 1. Brief (phase 1)

```text
Lis BRIEF.md et le dossier assets/. Ne rends rien.
1. Liste chaque fait produit utilisé (texte, chiffre, écran, logo) avec son fichier source.
2. Liste ce qui manque ou est illisible ; pour chaque manque, pose la question au lieu de l'inventer.
3. Reformule en une phrase ce que le spectateur doit retenir, et ce qui rendrait le film inacceptable.
Arrête-toi et attends ma réponse.
```

## 2. Référence (phase 2, porte 1)

```text
Analyse [l'événement à étudier] dans assets/reference.mp4.
Donne d'abord dimensions, cadence et durée (ffprobe).
Extrais une vue d'ensemble à 2 images/s, puis les images consécutives autour de l'entrée et de l'atterrissage ; regarde-les.
Remplis REFERENCE.md : grammaire (palette hex, typo, composition, rythme, mouvement, texture) en séparant mesuré, estimé et proposé ;
l'événement (images, boîtes de départ et d'arrivée, durée, échelle, opacité, dépassement, ordre d'apparition, état transmis) ;
pour chaque valeur incertaine, les images qui la vérifieraient. Ne copie ni sujet, ni logo, ni texte.
Propose un plan original avec nos assets. Rends ce plan avant toute construction.
```

## 3-4. Style et timeline (phases 3-4, porte 2)

```text
Lis BRIEF.md, REFERENCE.md et le guide de style [B…] de la Bible. Ne rends rien.
Remplis STYLE.md (jetons, règles par classe d'objet, hiérarchie, interdits avec leur remplacement, garde-fous) et règle motion.js en conséquence.
Remplis SHOTLIST.md : pour chaque plan (pris dans la bibliothèque C), images globales de début et de fin sur la grille [BPM, 60 fps],
état d'entrée, état de sortie, raison d'exister, héros et son mouvement, repère son, couture vers le suivant.
Remplis timeline.js : grille, tous les événements, ancres de mise en page en pixels, tous les repères son.
Pose le texte le plus long de chaque boîte et signale toute boîte qui dépasse ses lignes.
Signale tout plan sans raison d'exister, toute exigence contradictoire, tout manque.
Arrête-toi et montre-moi STYLE.md, SHOTLIST.md et timeline.js.
```

## 5. Premier morceau (phase 5, porte 3)

```text
Lis STYLE.md, SHOTLIST.md, timeline.js, motion.js et CONTRACT.md.
Construis seulement l'ouverture et le plan [héros], en respectant le contrat.
Active window.DEBUG : compteur d'image et étiquettes calées sur leurs images.
Lance npx hyperframes check à 0 erreur.
Rends les images témoins [t1, t2, t3, t4] et regarde-les à 360 px de large : le texte principal se lit-il ? le résultat est-il visible ? rien n'est coupé ni ne chevauche ? la fin a-t-elle la place ?
Audit : vérifie chaque nombre de timeline.js sur la scène (atterrissages, étiquettes, tailles) et corrige les écarts.
Rapporte : fichiers modifiés, images rendues, contrôles faits, questions ouvertes. Attends mon accord.
```

## 6. Film entier (phase 6, porte 4)

```text
Construis les scènes restantes dans l'ordre de SHOTLIST.md, une à la fois : check à 0 erreur et images à ses repères −2, 0, +2 im avant la suivante.
L'état final de chaque scène est l'état initial de la suivante quand la couture est continue.
Rends un brouillon complet, puis lance tools/review.sh : planche à 4 images/s, planche téléphone, bandes de 8 images autour de chaque couture.
Montre le brouillon et les planches. Ne dis pas que c'est fini.
```

## 7a. Le critique (phase 7) — dans une session neuve ou un sous-agent

```text
Tu reçois BRIEF.md, STYLE.md, SHOTLIST.md et les images de reviews/v[N]/. Tu n'as pas vu le code.
Ne décris pas ce que le film voulait faire. Juge seulement les images rendues.
Note de 1 à 5 : accroche, lisibilité, continuité, mouvement, calage son.
Coche la liste : texte lisible à taille téléphone ; rien hors zone sûre ; vrais assets ; typo et couleurs constantes ; aucune image ratée en milieu de transition ; coupes et sons ensemble ; vraie accroche dans les 2 premières secondes ; dernière image assez forte pour une affiche.
Passe la grille de contrôle de la Bible (chapitre 11).
Classe les défauts : bloquant, gênant, visible à l'arrêt seulement.
Pour les trois plus graves : instant (image globale), preuve, correctif local, ce qui doit rester fixe.
```

## 7b. Une correction (au plus 3 chiffrées et 1 note de goût par tour)

```text
Révise [composition] d'après BRIEF.md et SHOTLIST.md.
Où : image globale [N], scène [nom].
Constat : [ce qu'on voit].
Changement : seulement [quoi], [valeurs exactes, images de départ et d'arrivée, marges].
Reste fixe : [événements, géométrie, textes, repères son qui ne bougent pas].
Vérifie : images [N1, N2, N3] et aperçu de [A] à [B] ; images intermédiaires sans chevauchement ni saut ; frontière avec la scène voisine.
Rapporte les valeurs changées et les fichiers produits.
```

Ordre des réparations : information manquante et texte illisible → timing → détail visuel.

```text
Le correctif en [N] n'a pas tenu. Rends [N−1] et [N+1], mets-les côte à côte, liste chaque différence. Trouve la ligne qui la cause, ne corrige qu'elle, puis rends de nouveau les deux images.
```

## 7c. Traduire une sensation en nombres (avant d'envoyer une note)

| Ressenti | À envoyer |
| --- | --- |
| « Fais claquer » | échelle 1,0 → 1,08 → 1,0 sur 6 im, pic sur le temps |
| « Plus premium » | entrées power4.out, ressorts ζ 0,8, aucun dépassement sur le texte |
| « Ça traîne » | chaque tenue −1 temps (28 im à 128 BPM, 60 fps) : les coupes restent sur la grille |
| « C'est chargé » | un héros à la fois ; le reste part 150 ms après, à 60 % de sa course |
| « Ça fait IA » | nomme les défauts utilisés, ajoute-les aux interdits de STYLE.md, rends de nouveau |
| « Trop de mouvement » | retire 30 % des mouvements, garde ceux qui guident l'œil |
| « La fin est sèche » | tenue de 36 im avec poussée de 2 %, puis repos en ressort ζ 0,8 |
| « On ne sait pas où regarder » | après chaque mouvement, un seul point focal ; le reste descend à 40 % |

Relances d'inspection prêtes (une ou deux par tour) :

```text
Rends les images [f0, f…] et décris chacune en une phrase comme un spectateur. Est-ce que ça correspond à SHOTLIST.md ? Corrige ce qui ne correspond pas.
Fais une planche d'une image sur 12. Marque chaque image où deux choses bougent en même temps, puis corrige la hiérarchie.
Superpose les images [a] à [b] à 25 % (pelure d'oignon). L'espacement doit se serrer près des clés. Ajuste la courbe jusqu'à ce qu'il le fasse.
Trace la position x et l'échelle du héros par image (PNG). Montre où le mouvement est linéaire ou s'arrête net, puis corrige avec nos jetons.
Relis comme un motion designer senior : 10 notes classées par impact, chacune avec son image et le changement de code exact. Applique les 3 premières.
```

## 8. Le son (phase 8)

```text
Ajoute le son. Lis timeline.js : chaque repère son tombe 1 image après son événement image.
[Synthétise tout en code (numpy) : pas d'échantillons, pas de voix. / Piste fournie assets/audio/… : mesure son BPM et son premier temps dans le fichier, recoupe-la sur des mesures entières.]
Musique : [tempo, tonalité, sections : intro légère, drop sur la révélation, quasi-silence 0,2-0,7 s avant le logo, accord final qui se pose].
Bruitages : [un par repère : clic, whoosh, impact, tic…].
48 kHz stéréo, −14 LUFS intégrés, crête vraie ≤ −1 dBTP après encodage AAC.
Mesure, n'écoute pas : lance tools/audio_check.py (attaque de chaque repère à l'échantillon, coups 3-6 dB au-dessus du lit, sonie par demi-seconde, part sous 60 Hz, bande 200 Hz-6 kHz). Corrige jusqu'à ce que les mesures passent.
Multiplexe dans le MP4 et revérifie sur le fichier décodé.
```
