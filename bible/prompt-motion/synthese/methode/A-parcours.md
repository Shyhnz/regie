# A · Le parcours de production : un studio, cinq rôles, six portes

Ce parcours est notre façon de produire une vidéo, du brief au fichier livré. Il suit la méthode des quatre sources (« Motion Engineering » de @0xwhrrari, le guide de lancement de @beamnxw, le « Motion Lab » de @flxrnc, le prompt pack « No After Effects »), et prend ses seuils chiffrés dans la Bible. Une idée le résume : **un prompt fait un clip ; un studio fait le clip suivant sans se reconstruire**. On ne juge donc pas seulement le MP4 : on construit un dossier, une timeline et une boucle de revue qui servent encore au film d'après.

**Comment s'en servir.** On suit les phases dans l'ordre. Chaque phase tient un rôle, écrit un fichier et finit, quand il y en a une, sur une **porte** : Claude s'arrête, montre une preuve, attend l'accord. Entre deux portes, il travaille seul aussi longtemps qu'il faut. Le détail chiffré de chaque étape est dans le chapitre 12 (*Méthode de production*) ; les techniques sont dans les chapitres 1 à 11 et 14 ; les gabarits sont dans E (*Outils*).

## Les cinq rôles

| Rôle | Sa question | Son fichier |
| --- | --- | --- |
| **Réalisateur** | Que doit retenir le spectateur, et qu'est-ce qui rendrait le film inacceptable ? | `BRIEF.md` |
| **Référence** | À quoi le film doit-il ressembler, en chiffres ? | `REFERENCE.md`, `STYLE.md` |
| **Timeline** | Qu'est-ce qui change à chaque temps, et quel son l'accompagne ? | `SHOTLIST.md`, `timeline.js` |
| **Rendu** | Comment chaque image est-elle produite, à coup sûr ? | `CONTRACT.md`, le code |
| **Critique** | Qu'est-ce qui a échoué, à quel instant, pourquoi ? | `reviews/vN.md` |

La règle qui les tient ensemble : **ne jamais fondre les cinq en une seule étape non regardée**. C'est de là que vient le look générique : Claude comble chaque décision manquante par sa valeur par défaut la plus sûre (voir *Ce que Claude fait seul* au chapitre 12). Notre travail est de supprimer les décisions manquantes avant le premier rendu.

## Le parcours en un tableau

| Phase | Rôle | Étapes du chapitre 12 | Fichier | Porte |
| --- | --- | --- | --- | --- |
| 0 Ouvrir le studio | — | — | dossier du film | — |
| 1 Le brief | Réalisateur | 1, et la phrase de l'étape 2 | `BRIEF.md` | — |
| 2 La référence | Référence | 3 (références) | `REFERENCE.md` | **Porte 1** : matière et références |
| 3 Le style | Référence | 3 et 6 | `STYLE.md` | — |
| 4 La timeline | Timeline | 2, 4, 5, 8 | `SHOTLIST.md`, `timeline.js` | **Porte 2** : style et liste des plans |
| 5 Le premier morceau | Rendu | 7 (plan héros) | `CONTRACT.md`, ouverture + plan héros | **Porte 3** : images témoins |
| 6 Le film entier | Rendu | 7, 8 | toutes les scènes | **Porte 4** : premier montage et planche |
| 7 La critique et les réparations | Critique | 9 et « Itérer » | `reviews/vN.md`, `JOURNAL.md` | **Porte 5** : zéro défaut bloquant |
| 8 Le son, les formats, la livraison | Timeline, Rendu | 4 (son), 10 | `out/` | **Porte 6** : livrables vérifiés |
| 9 Ranger le studio | tous | « Itérer » (guide de style) | contrat, style, interdits, composants | — |

---

## Phase 0 · Ouvrir le studio

**But** : partir d'une base, pas d'une page blanche. « Si la seule trace du film est une conversation, on n'a pas de système de production, on a eu une session chanceuse. »

**Ce qu'on fait**
- Créer le dossier du film en copiant le studio du film précédent : on garde le contrat de rendu, la grille de revue, les interdits du style, les composants validés ; on change le brief et la matière.
- Arborescence (HyperFrames) :

```text
videos/<film>/
  BRIEF.md          but en une phrase, public, faits sur le produit, inacceptable
  REFERENCE.md      ce que la référence enseigne, mesuré / estimé / proposé
  STYLE.md          jetons, règles de mouvement par classe, interdits, garde-fous
  SHOTLIST.md       plans : états d'entrée et de sortie, raison d'être, héros, couture
  timeline.js       la seule source du temps : grille, événements, ancres, repères son
  CONTRACT.md       contrat de rendu, augmenté à chaque panne corrigée
  JOURNAL.md        chaque prompt et chaque relance, datés et comptés
  assets/           logo, captures, polices, piste : tout ce qui est réel et approuvé
  index.html, compositions/   le film
  reviews/          planches, bandes, notes de critique par version (v1, v2…)
  renders/, out/    rendus de travail, livrables par format
```

- Une version validée est copiée, jamais retouchée sur place (`rsync` sans les rendus ; voir *Itérer : la boucle de correction* au chapitre 12).

**À cocher**
- [ ] Dossier créé depuis le studio précédent ; `CONTRACT.md` et les interdits du style recopiés.
- [ ] `JOURNAL.md` ouvert : le prompt de départ y sera collé tel quel.

---

## Phase 1 · Le brief (rôle : réalisateur)

**But** : un document de production d'une page avant toute tâche de rendu. Un brief de réalisateur, pas un « prompt d'ambiance » : « fais une vidéo produit de malade » laisse toutes les décisions importantes à Claude.

**Les cinq questions** (W)
1. Quel est le produit ?
2. Quelle est **la seule chose** que le spectateur doit retenir ? (une phrase, 15 mots au plus)
3. Quelle référence a le droit d'influencer le film ?
4. Quels éléments doivent venir du vrai produit ?
5. Qu'est-ce qui rendrait le résultat **inacceptable** ?

**Faits et choix, séparés.** Le brief range d'un côté les faits (produit, écrans, chiffres, logo, textes définitifs), que Claude ne touche pas ; de l'autre les choix de film (caméra, ouverture, transitions), qu'il peut proposer. « Il peut inventer un mouvement de caméra, pas ton tableau de bord ; proposer une ouverture plus forte, pas remplacer ton logo. »

**Décisions** (valeurs par défaut au chapitre 12, *Étape 1*)
- Objectif, public, diffusion, une phrase chacun.
- Ligne SPEC : 1920×1080 à 60 fps, durée en mesures entières, BPM, son oui/non, boucle oui/non.
- Déclinaisons : listées dès maintenant (16:9 maître ; 9:16, 1:1, 4:5 recomposés).
- Inventaire de la matière : chaque fichier avec son chemin dans `assets/`. Pour un film produit, Claude va chercher sur le vrai site les écrans exacts qu'il compte animer, et on relit cette liste.
- Le texte le plus long qu'on réutilisera (titre, nom de produit), pour le test de mise en page de la phase 4.

**Règle de blocage.** Un écran, un logo ou un chiffre manquant **arrête** le travail : Claude demande, il ne dessine pas un faux convaincant. Une référence floue appelle une question ou une image d'essai, pas « 900 belles images fausses » (W).

**Livrable** : `BRIEF.md`, rempli après un seul tour de questions (trois au plus).

**Prompt (phase 1)**

```text
Lis BRIEF.md et le dossier assets/. Ne rends rien.
1. Liste chaque fait produit utilisé (texte, chiffre, écran, logo) avec son fichier source.
2. Liste ce qui manque ou est illisible ; pour chaque manque, pose la question au lieu de l'inventer.
3. Reformule en une phrase ce que le spectateur doit retenir, et ce qui rendrait le film inacceptable.
Arrête-toi et attends ma réponse.
```

**À cocher**
- [ ] Phrase à retenir, 15 mots au plus ; « inacceptable » écrit.
- [ ] Ligne SPEC complète ; déclinaisons listées.
- [ ] Faits et choix séparés ; chaque fait a son fichier dans `assets/`.
- [ ] Aucun manque ouvert, ou chaque manque posé en question.

---

## Phase 2 · La référence (rôle : référence)

**But** : donner à Claude une grammaire visuelle qu'il peut inspecter. Sans elle, il prend la sienne, et des films sans rapport finissent par se ressembler.

**Donner un rôle à la référence** (B). On l'étudie pour une chose précise : une entrée de carte qui atterrit, une transition qui garde le produit à l'écran, un clic qui rend le résultat évident, un rythme de typo. On suit l'objet principal de sa première position à son atterrissage ; on note quand le texte devient lisible et quand l'événement suivant vole l'attention.

**Méthode d'extraction** : 2 images/s pour la vue d'ensemble, puis les images consécutives autour des événements (notre outillage des études 60 fps, chapitre 14, fait la même chose plus finement). Les positions estimées par Claude sont approximatives : on les vérifie sur les images extraites.

**Ce que `REFERENCE.md` contient** (W et B)
- Palette réelle en hex (pas « premium »), typo (famille, largeur, graisse, échelle en % de la hauteur), composition (où va l'œil d'abord), rythme (temps moyen entre deux changements qui comptent), mouvement (snap, glisse, dépassement, coupe, tenue), texture (grain, papier, verre, rien).
- Pour l'événement étudié : instants et numéros d'image (entrée, atterrissage, tenue, coupe), boîtes de départ et d'arrivée, direction, durée, échelle, opacité, dépassement visible ; ordre d'apparition produit / titre / étiquettes ; tenue lisible ; état transmis au plan suivant.
- Trois colonnes séparées : **mesuré**, **estimé**, **proposé**. Pour une valeur incertaine : quelles images la vérifieraient.
- NE PAS COPIER : sujets, logos, textes, images propres au produit de la référence.
- Une proposition : un plan original avec notre matière, qui reprend la décision apprise.

**Prompt (phase 2)**

```text
Analyse [l'événement à étudier] dans reference.mp4.
Donne d'abord dimensions, cadence et durée (ffprobe).
Extrais une vue d'ensemble à 2 images/s, puis les images consécutives autour de l'entrée et de l'atterrissage ; regarde-les.
Écris REFERENCE.md : palette en hex, typo, composition, rythme, mouvement, texture ;
instants et numéros d'image de l'entrée, de l'atterrissage, de la tenue et de la coupe ;
boîtes de départ et d'arrivée, durée, échelle, opacité, dépassement ; ordre d'apparition ; état transmis au plan suivant.
Sépare valeurs mesurées, estimations visuelles et choix proposés. Pour chaque valeur incertaine, dis quelles images la vérifieraient.
Ne copie ni sujet, ni logo, ni texte. Propose un plan original avec nos assets.
Rends ce plan avant toute construction.
```

### Porte 1 · Matière et références approuvées

Claude montre : l'inventaire des faits avec leurs fichiers, les manques, `REFERENCE.md`. On approuve, on corrige ou on fournit ce qui manque. Rien n'est construit avant.

**À cocher**
- [ ] Tous les assets réels présents, dimensions et polices vérifiées.
- [ ] `REFERENCE.md` avec ses trois colonnes, et une liste NE PAS COPIER.
- [ ] Accord donné, noté dans `JOURNAL.md`.

---

## Phase 3 · Le style (rôle : référence)

**But** : transformer la référence et le style choisi (guide B, chapitre 1) en un **guide de style**, pas en collage de plans empruntés. Chaque adjectif devient un nombre : « chaque adjectif remplacé par un nombre est une décision reprise au modèle » (F).

**Ce que `STYLE.md` contient**
1. **Les jetons** : couleurs en hex avec un rôle chacune, polices locales et tailles en % de la hauteur, marges, courbes nommées, ressorts en taux d'amortissement. Un seul fichier de jetons est lu par tout le code : aucun nombre en dur dans les plans (F, `motion.js` ; voir E).
2. **Une règle de mouvement par classe d'objet** (W) :

| Classe | Règle | Valeurs par défaut |
| --- | --- | --- |
| Micro-interface (bouton, puce, curseur) | rapide, dépassement minime | retour 100-200 ms ; appui : échelle 1 → 0,92 → 1 en 9 im à 30 fps (B) |
| Panneaux, cartes | posé contrôlé | ressort ζ 0,8 à 1,0 |
| Caméra | douce, presque invisible | les courbes les plus douces (quart-inOut) ; parallaxe 1,0 / 0,5 / 0,2 |
| Titres | entrée forte, tenue stable | entrée selon le style (B) ; aucun dépassement sur le texte ; tenue : formule de la Bible |
| Mascotte, personnage | joueuse, clairement voulue | ressort ζ 0,4-0,6 ; principes chiffrés (voir C) |

3. **La hiérarchie** (F) : un héros par plan ; le reste attend, descend à 40 % ou ne bouge pas. Secondaires à 50-70 % de la course du héros, 100 à 200 ms après lui. Ambiant sous 5 % de la course, en sinus lent, jamais arrêté. Position et taille peuvent rebondir ; **opacité et couleur jamais**. « Si tout dépasse, rien n'a l'air précis. »
4. **Les interdits, vivants** : ceux du style (guide B), ceux de l'utilisateur (*Effets aimés*), puis, après chaque premier rendu, chaque défaut que Claude a utilisé quand même, nommé et ajouté (F). Chaque interdit dit quoi faire à la place (chapitre 12, *Étapes 3 et 6*).
5. **Les garde-fous** : ce qui ne doit jamais changer (proportions du personnage, logo, couleur de marque, textes définitifs). « Chaque style qui compte a besoin d'une ligne comme celle-là » (F).

**Seuils de la Bible qui s'imposent ici** : texte lu ≥ 3 % de la hauteur (4 % en 9:16), message ≥ 6 % ; accent ≤ 8 % des pixels ; contraste ≥ 4,5:1 sur chaque image, y compris sur fond animé ; jamais plus de 3 flashs par seconde (chapitre 12, *Étapes 3 et 6* ; F pour les deux derniers).

**À cocher**
- [ ] Jetons dans un seul fichier ; aucun nombre de style ailleurs.
- [ ] Une règle de mouvement par classe d'objet présente dans le film.
- [ ] Règle du héros et des secondaires écrite.
- [ ] Interdits avec leur remplacement ; garde-fous écrits.

---

## Phase 4 · La timeline (rôle : timeline)

**But** : dire **ce que le spectateur sait à chaque instant**, sur une grille musicale, dans un fichier unique que l'image et le son liront. Une liste d'effets n'est pas un storyboard : « zoome, puis morphe, puis ajoute des particules » décrit une activité, pas un sens (W).

**4.1 Le script** (chapitre 12, *Étape 2*) : texte exact de chaque écran, temps de lecture, budget de mots. Une phrase d'ouverture courte ; toute explication de plusieurs phrases a sa propre scène (B). **Test du texte le plus long** : on pose la plus longue version prévue dans sa boîte ; si elle passe à 3 lignes, on raccourcit, on élargit ou on déplace, avant tout mouvement (B).

**4.2 La grille** (chapitre 12, *Étape 4*) : tempo, mesures, carte des sections, source du son. Images par temps = fps × 60 / BPM ; **chaque temps se calcule depuis l'image 0 et s'arrondit seul**, jamais un pas arrondi additionné (après 32 temps on serait à 2 images de la musique, F). On coupe sur le temps, on change la mise en page sur la mesure.

**4.3 Les plans comme états et événements** (W, B, P). Chaque plan de `SHOTLIST.md` porte :
- son **état d'entrée** et son **état de sortie** (ce qui est à l'écran, où, à quelle taille) ;
- sa **raison d'exister** (ce que le spectateur apprend) — « si l'agent ne sait pas dire pourquoi le plan 4 existe, le plan 4 n'a rien à faire dans le rendu » ;
- son **héros** et son mouvement unique ;
- ses repères en images **globales** (préciser « locale » sinon : locale 30 d'une scène qui commence en 120 = globale 150) ;
- sa **couture** vers le suivant : ce qui traverse, le type, la durée (chapitre 12, *Étape 8*). Une transition est une décision : rien par défaut, jamais de fondu enchaîné réflexe.

Pour une démonstration produit, le plan s'écrit comme un **événement** (B) : état de départ → curseur sur l'action → l'appui s'enregistre → le résultat apparaît → on le tient assez pour lire son nom. Pour une interface, on écrit d'abord la **liste des états** (RECHERCHE → RÉSULTAT → DÉTAIL → ACTION → CONFIRMATION) ; un même composant peut changer de taille, couleur, contenu et place sans cesser d'être le même objet (W). **Chaque temps change quelque chose** ; un saut, un temps ou un plan qui ne change rien est coupé (P).

Squelette par défaut d'une promo de 15-16 s (W, à poser sur 8 mesures à 128 BPM) : ACCROCHE (une image qui gagne l'attention, avant 1 s selon la Bible) → PROBLÈME (montrer la friction, pas un paragraphe) → RÉVÉLATION (le produit entre par une vraie interaction) → PREUVE (un écran ou un chiffre démontre l'affirmation) → FIN (état final propre, appel lisible, animée).

**4.4 Qui possède l'écran** (B) : l'attention reste sur le bouton jusqu'à sa réponse, puis le résultat possède la fenêtre de lecture. Si le curseur croise un titre pendant une entrée, on retarde un événement ou on change le trajet. La lecture se compte à partir du moment où les mots sont lisibles.

**4.5 Les repères son, sur la même ligne** (W, P, B) : chaque événement image a son repère son à côté (appui → clic ; révélation → attaque la plus forte ; tenue de fin → la musique se pose). Le son ne s'ajoute pas au montage ; il se compose ou se mesure ici, et le fichier son se fabrique en phase 8 à partir de ces repères.

**4.6 Un seul fichier de temps** (P : « une mise en page, trois lecteurs ») : `timeline.js` tient la grille (`at(mesure, temps)`), chaque événement, les ancres de mise en page en pixels (boutons, boîtes de titre) et chaque repère son. L'image le lit, le son le lit, la 3D le lit s'il y en a. « Les pixels sont l'API. »

**Exemple de lignes** (promo, 60 fps, 128 BPM, 1 temps = 28,125 im) :

| Plan | Images | État d'entrée → de sortie | Raison | Héros | Son | Couture |
| --- | --- | --- | --- | --- | --- | --- |
| 1 Accroche | f0-f112 | vide → la question posée, 12 % H | sentir le problème | les mots, un par temps | pied + clic par mot | le point du « ? » devient relais |
| 3 Démo | f338-f562 | tableau rempli → fichier exporté lisible | voir la promesse tenue | le curseur, puis le fichier | clic f450, révélation f464 | le fichier devient compteur |

**Prompt (phase 4)**

```text
Lis BRIEF.md, REFERENCE.md et STYLE.md. Ne rends rien.
Écris SHOTLIST.md : pour chaque plan, images globales de début et de fin sur la grille [BPM, fps],
état d'entrée, état de sortie, raison d'exister, héros et son mouvement, repère son, couture vers le suivant.
Écris timeline.js : la grille (chaque temps calculé depuis l'image 0), tous les événements, les ancres de mise en page en pixels, tous les repères son.
Pose le texte le plus long de chaque boîte et signale toute boîte qui dépasse ses lignes.
Signale tout plan dont tu ne peux pas dire la raison d'exister, toute exigence contradictoire, tout manque.
Arrête-toi et montre-moi STYLE.md, SHOTLIST.md et timeline.js.
```

### Porte 2 · Guide de style et liste des plans approuvés

Claude montre `STYLE.md`, `SHOTLIST.md`, `timeline.js`. On vérifie : la somme des plans fait la durée ; chaque plan a une raison d'être et un héros ; chaque couture est décidée ; chaque événement a son repère son ; les seuils de la Bible sont tenus (chapitre 12, *Étape 5* : pas plus de 48 im sans événement hors tenue voulue, au moins 3 longueurs de plans, drop sur un 1er temps, signature de 1,5 à 2,5 s animée). « Corriger ce tableau prend une phrase ; corriger l'animation codée, un aller-retour complet. »

**À cocher**
- [ ] Chaque plan : états d'entrée et de sortie, raison, héros, repères en images globales.
- [ ] Texte le plus long tenu dans chaque boîte.
- [ ] Une seule source du temps ; repères son à côté des événements.
- [ ] Accord donné, noté dans `JOURNAL.md`.

---

## Phase 5 · Le premier morceau (rôle : rendu)

**But** : prouver le système sur un morceau avant de dépenser le film entier. On construit **l'ouverture et le plan héros seulement**, on regarde, on attend (B : « construis la première étape, rends ses images, rapporte, attends »).

**Le contrat de rendu** (F, W) entre dans `CONTRACT.md` et s'applique à tout le film :
- chaque image est une fonction pure du temps : l'image 240 se rend directement, sans rejouer 0 à 239 ;
- une timeline GSAP en pause par composition ; ni horloge, ni `setTimeout`, ni transition CSS, ni `Math.random` sans graine ;
- bibliothèques épinglées ; polices locales, mesures après `document.fonts.ready` ;
- tout nombre vient des jetons ou de `timeline.js` ;
- boucle : images 0 à N−1, l'image N−1 coule dans l'image 0.
Le contrat grandit : **chaque panne corrigée y ajoute sa ligne**. C'est la mémoire du studio (F). Détail HyperFrames : chapitre 12, *Étape 7*, et *Savoir-faire HyperFrames*.

**Les instruments de mise au point** (F), pendant les tours seulement : compteur d'image dans un coin, tête de lecture, étiquettes qui s'allument sur leur image prévue (un mouvement en retard se voit tout de suite). On les retire au rendu final.

**Les images témoins** (B, P) : ouverture (fin de l'entrée et tenue), résultat produit, temps fort, et, si elle est construite, la fin. Chaque image a une question : le texte principal se lit-il ? le résultat est-il visible ? rien n'est coupé ni ne chevauche ? la fin a-t-elle la place ?

**L'audit numérique** (F) : Claude lit la scène vivante image par image et compare aux nombres de `timeline.js` (chaque atterrissage sur son image, chaque étiquette sur son instant, chaque taille au-dessus de son seuil). Les échecs se corrigent avant de montrer.

**Prompt (phase 5)**

```text
Lis BRIEF.md, STYLE.md, SHOTLIST.md, timeline.js et CONTRACT.md.
Construis seulement l'ouverture et le plan [héros], en respectant le contrat.
Ajoute un compteur d'image et des étiquettes calées sur leurs images (retirables).
Lance npx hyperframes check à 0 erreur.
Rends les images [f…, f…, f…, f…] et regarde-les ; vérifie chaque nombre de timeline.js sur la scène (audit) et corrige les écarts.
Rapporte : fichiers modifiés, images rendues, contrôles faits, questions ouvertes. Attends mon accord.
```

### Porte 3 · Images témoins inspectées

On regarde les 3 ou 4 images, à taille de téléphone. On valide la direction (style, tailles, hiérarchie) avant tout le reste : c'est la porte la moins chère pour changer d'avis.

**À cocher**
- [ ] `check` à 0 erreur ; audit numérique sans écart.
- [ ] 3 ou 4 images témoins vues, chacune avec sa réponse.
- [ ] Interdits respectés ; ceux que Claude a utilisés quand même ajoutés à `STYLE.md`.

---

## Phase 6 · Le film entier (rôle : rendu)

**But** : construire les scènes restantes dans l'ordre de la liste, une à la fois, chacune contrôlée avant la suivante (chapitre 12, *Étape 7*), puis rendre le premier montage.

**Règles**
- Chaque scène reçoit sa matière, sa raison et ses états de frontière. L'état final d'une scène est l'état initial de la suivante pour une transition continue (B).
- Polices, palette, espacements, éléments récurrents : dans les réglages partagés ; une exception de scène est écrite (B).
- Après chaque scène : `check`, images à ses repères −2, 0, +2 im.
- Les transitions qui chevauchent deux scènes sont comptées dans la durée totale (B).

**La planche et les bandes.** Le rendu de travail donne : une planche (4 images/s ; une image à chaque temps fort), une bande de 8 images autour de chaque couture et de chaque transition rapide, une planche à 360 px de large pour lire au téléphone (chapitre 12, *Étape 9* ; W, F). Pour les mouvements, deux vues d'animateur (F) : la **pelure d'oignon** (images superposées à 25 % : un espacement régulier = mouvement robotique ; serré près des clés = la courbe marche) et le **graphe de vitesse** (droites = linéaire, angles = départs et arrêts morts).

### Porte 4 · Premier montage et planche

Claude montre le premier montage, la planche, les bandes. Il ne dit pas que c'est fini parce que le rendu s'est terminé sans erreur : « le premier s'arrête quand le fichier existe ; le second, quand les preuves disent que le film marche » (W).

---

## Phase 7 · La critique et les réparations (rôle : critique)

**But** : juger seulement les images rendues, trouver les défauts les plus graves, les réparer en local, recommencer jusqu'à zéro défaut bloquant.

**Qui juge.** Pas le constructeur : une session neuve ou un sous-agent, qui ne reçoit que `BRIEF.md`, `STYLE.md`, `SHOTLIST.md`, la planche, les bandes et les images (B, W ; chapitre 12, *Étape 9*). Il note cinq critères (accroche, lisibilité, continuité, mouvement, calage son) et passe la grille chiffrée du chapitre 11 (*La grille de contrôle*) et la liste de W :

- [ ] texte lisible à la taille du téléphone ;
- [ ] rien hors de la zone sûre ;
- [ ] vrais assets, aucun remplaçant inventé ;
- [ ] typo et couleurs constantes d'une scène à l'autre ;
- [ ] aucune image ratée en milieu de transition ;
- [ ] coupes et sons ensemble ;
- [ ] une vraie accroche dans les 2 premières secondes ;
- [ ] une dernière image assez forte pour être une affiche.

**Prompt du critique** (W)

```text
Ne décris pas ce que le film voulait faire. Juge seulement les images rendues.
Note de 1 à 5 : accroche, lisibilité, continuité, mouvement, calage son.
Passe la grille de contrôle et la liste des 8 points.
Donne les défauts classés par impact (bloquant, gênant, visible à l'arrêt seulement).
Pour les trois plus graves : instant (image globale), preuve (l'image), correctif local, et ce qui doit rester fixe.
```

**Le format d'une correction** (B) : quatre champs, puis la vérification.

```text
Où : image globale 210, scène Démo.
Constat : le curseur recouvre l'étiquette du résultat.
Changement : seulement le trajet du curseur après l'appui ; départ en 204, repos atteint en 210, à 24 px de l'étiquette, trajet qui ne la croise jamais.
Reste fixe : l'appui en 195, la révélation en 210, la géométrie de la carte, les textes, les repères son.
Vérifie : images 195, 210, 222, 240 et aperçu de 180 à 249 ; images intermédiaires sans chevauchement ni saut.
```

**L'ordre des réparations** (B) : d'abord l'information manquante et le texte illisible ; puis le timing ; puis le détail visuel.

**Combien par tour.** Jusqu'à **3 corrections chiffrées** au format 4 champs, et **une seule note de goût** (décision de l'utilisateur, 20 oct.). Les sources envoient 3 à 6 changements chiffrés par tour (F, P) ; la Bible plafonnait à 2 parce que 4 demandes mêlées de goût avaient créé un défaut (NuOps v5). Un changement chiffré et local se vérifie ; un goût change le film entier. Une sensation se traduit en nombres avant d'être envoyée (F ; table dans E) : « ça traîne » devient « chaque tenue −1 temps » ; « ça fait IA » devient « nomme les défauts utilisés, bannis-les, rends ».

**La boucle locale** (B) : défaut → une modification bornée → images touchées → frontière de la scène voisine → lecture à vitesse normale. On re-rend seulement la plage fautive (P : f105-145 et f285-360). Un correctif qui ne tient pas : rendre l'image d'avant et l'image d'après, lister chaque différence, trouver la ligne, ne corriger qu'elle (F).

**Le journal.** Chaque relance va dans `JOURNAL.md`, telle qu'envoyée, avec la preuve qui l'a motivée (planche, images, mesure) et le résultat (P, F). Les relances créatives se comptent à part des correctifs techniques. Deux à quatre tours est normal ; trois prompts, c'est un bon chiffre (F) ; cinq tours au plus (chapitre 12).

### Porte 5 · Zéro défaut bloquant

On s'arrête quand la grille passe sans défaut bloquant, au 5e tour, ou quand la liste ne rétrécit plus. On livre avec la liste de ce qu'on changerait encore.

**À cocher**
- [ ] Critique faite par un regard neuf, sur les images seulement.
- [ ] Chaque correction au format 4 champs, avec ses images de vérification.
- [ ] Avant/après au même instant ; frontières voisines revues ; lecture à vitesse normale.
- [ ] `JOURNAL.md` à jour ; liste des défauts plus courte qu'au tour précédent.

---

## Phase 8 · Le son, les formats, la livraison (rôles : timeline, rendu)

**8.1 Le son.** Le film doit d'abord marcher **muet** : le fil joue sans le son (F). Le son se fabrique ensuite par un prompt à part, qui lit le même `timeline.js` (P, F) : composé en code, ou piste fournie mesurée et recoupée sur des mesures entières (chapitre 12, *Étape 4*). Chaque coup tombe **1 image après** son image : la lumière arrive avant le son (F ; Bible : image 1 à 3 im avant, écart constant). Claude n'entend pas : il **mesure** le fichier décodé (F, P) :
- chaque attaque à sa place, à l'échantillon près ;
- coups 3 à 6 dB au-dessus du lit ;
- l'énergie ne s'écrase pas sous 60 Hz ; la bande du téléphone (200 Hz-6 kHz) porte le mix ;
- sonie par demi-seconde : le drop tombe où l'image explose, rien ne dépasse du groove ;
- −14 LUFS intégrés, crête vraie ≤ −1 dBTP **après** l'encodage AAC (limiter le WAV plus bas si besoin).
Puis le test de W : fermer les yeux et écouter ; un son qui n'a pas de forme sans l'image n'est pas fini. Écoute finale au casque et sur le haut-parleur du téléphone (B).

**8.2 Les formats.** Chaque déclinaison est une composition à part, depuis la même timeline et la même matière, jamais un recadrage : en 9:16, texte plus grand, moins d'éléments à la fois, hiérarchie verticale plus forte, autre trajet de caméra ; en 1:1, typo plus serrée et tenues plus courtes (W). Une planche par déclinaison : « un export n'est pas correct parce que l'encodeur a fini, mais parce que la composition a survécu au changement de format ».

**8.3 Le rendu et le fichier** : chapitre 12, *Étape 10* (60 fps, flou réel, nombre d'images exact, encodage web, image 0 et affiche). On regarde le fichier web, pas le master, à vitesse normale, en suivant le premier message, l'action produit et la fin (B).

### Porte 6 · Son, formats et livrables vérifiés

**Livrables** : vidéos finales par format, affiche (une image approuvée), planches, source, liste des assets, et une courte note sur ce qui demande encore un regard humain (W).

**À cocher**
- [ ] Image regardée muette d'abord ; son composé ou mesuré depuis `timeline.js`.
- [ ] Attaques mesurées sur le fichier décodé ; coups 3-6 dB au-dessus du lit ; −14 LUFS, ≤ −1 dBTP après AAC.
- [ ] Chaque déclinaison recomposée, avec sa planche.
- [ ] ffprobe : taille, cadence, durée, nombre d'images conformes ; fichier web vu au téléphone.
- [ ] Note « reste à regarder » écrite.

---

## Phase 9 · Ranger le studio

**But** : que le film suivant parte plus haut. « Le modèle donne la vitesse, le brief la direction, le moteur le contrôle, la planche la preuve ; la boucle transforme la preuve en progrès » (W).

**Ce qu'on range**
- `CONTRACT.md` : une ligne par panne corrigée (police de repli, saut à la couture, son en retard…).
- `STYLE.md` du style : les nouveaux interdits ; les goûts validés dans *Effets aimés*.
- Les composants validés (entrée de carte, curseur, bloc de texte, transition signature), à réutiliser en revoyant leur timing quand la matière change (B).
- `JOURNAL.md` : nombre de prompts, de relances créatives et techniques, temps passé. Ce sont nos reçus.
- Le guide de style animé de la vidéo (chapitre 12, *Itérer*).

Le film suivant : on change le bloc de marque (produit, écrans, résultat), on garde le reste (P : « seul le bloc BRAND change »). On garde les nombres au premier essai et on ne change que les mots ; au second, un seul nombre à la fois (F).

**À cocher**
- [ ] Contrat, interdits, composants, journal mis à jour dans le studio de base.
- [ ] Erreurs devenues contrôles ; goûts notés dans le style.
