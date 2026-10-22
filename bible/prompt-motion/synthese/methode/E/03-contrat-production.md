## Le contrat de production et les prompts de porte (production contract, review gates)

Le prompt utile n'est pas « fais une vidéo virale » : c'est un contrat de production, avec des décisions, des fichiers et des conditions d'arrêt (W). Claude peut travailler des heures entre deux portes ; à chaque porte, il s'arrête et montre une preuve. Il construit d'abord un morceau, puis attend (B). Ces prompts suivent le parcours A ; le prompt de **direction** du film (rôle, non-négociables, charte, structure au temps, interdits) reste le gabarit du chapitre 13 (*Gabarit à copier : promo SaaS de 30 s, style 1600*), collé en phase 4.

**Quand s'en servir** : le contrat en tête de toute session longue ; un prompt par phase.

**Le contrat de production**

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

**Phase 1 · Brief**

```text
Lis BRIEF.md et le dossier assets/. Ne rends rien.
1. Liste chaque fait produit utilisé (texte, chiffre, écran, logo) avec son fichier source.
2. Liste ce qui manque ou est illisible ; pour chaque manque, pose la question au lieu de l'inventer.
3. Reformule en une phrase ce que le spectateur doit retenir, et ce qui rendrait le film inacceptable.
Arrête-toi et attends ma réponse.
```

**Phase 2 · Référence (porte 1)**

```text
Analyse [l'événement à étudier] dans assets/reference.mp4.
Donne d'abord dimensions, cadence et durée (ffprobe).
Extrais une vue d'ensemble à 2 images/s, puis les images consécutives autour de l'entrée et de l'atterrissage ; regarde-les.
Remplis REFERENCE.md : grammaire (palette hex, typo, composition, rythme, mouvement, texture) en séparant mesuré, estimé et proposé ;
l'événement (images, boîtes de départ et d'arrivée, durée, échelle, opacité, dépassement, ordre d'apparition, état transmis) ;
pour chaque valeur incertaine, les images qui la vérifieraient. Ne copie ni sujet, ni logo, ni texte.
Propose un plan original avec nos assets. Rends ce plan avant toute construction.
```

**Phases 3-4 · Style et timeline (porte 2)**

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

**Phase 5 · Premier morceau (porte 3)**

```text
Lis STYLE.md, SHOTLIST.md, timeline.js, motion.js et CONTRACT.md.
Construis seulement l'ouverture et le plan [héros], en respectant le contrat.
Active window.DEBUG : compteur d'image et étiquettes calées sur leurs images.
Lance npx hyperframes check à 0 erreur.
Rends les images témoins [t1, t2, t3, t4] et regarde-les à 360 px de large : le texte principal se lit-il ? le résultat est-il visible ? rien n'est coupé ni ne chevauche ? la fin a-t-elle la place ?
Audit : vérifie chaque nombre de timeline.js sur la scène (atterrissages, étiquettes, tailles) et corrige les écarts.
Rapporte : fichiers modifiés, images rendues, contrôles faits, questions ouvertes. Attends mon accord.
```

**Phase 6 · Film entier (porte 4)**

```text
Construis les scènes restantes dans l'ordre de SHOTLIST.md, une à la fois : check à 0 erreur et images à ses repères −2, 0, +2 im avant la suivante.
L'état final de chaque scène est l'état initial de la suivante quand la couture est continue.
Rends un brouillon complet, puis lance tools/review.sh : planche à 4 images/s, planche téléphone, bandes de 8 images autour de chaque couture.
Montre le brouillon et les planches. Ne dis pas que c'est fini.
```

**À cocher**

- [ ] Le contrat de production est en tête de la session.
- [ ] Chaque porte a donné une preuve (fichier ou images) et un accord noté dans `JOURNAL.md`.
- [ ] Aucun « fini » sans planche ni mesure.
