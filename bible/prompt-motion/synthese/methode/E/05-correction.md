## La correction exécutable (four-field fix, scoped repair loop)

Une remarque devient une correction que Claude peut exécuter et qu'on peut vérifier : où, constat, changement, ce qui reste fixe, puis les images qui prouvent (B). On répare en local : défaut, une modification bornée, images touchées, frontière de la scène voisine, lecture à vitesse normale. Par tour : jusqu'à **3 corrections chiffrées et une seule note de goût** (décision de l'utilisateur, 20 oct.). L'ordre : information manquante et texte illisible, puis timing, puis détail visuel (B).

**Quand s'en servir** : en phase 7, pour chaque défaut retenu par le critique ; et chaque fois qu'on a une remarque.

**Le gabarit**

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

**Traduire une sensation en nombres** (F, valeurs adaptées à notre grille de 128 BPM à 60 fps)

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

**À cocher**

- [ ] Chaque correction a ses quatre champs et ses images de vérification.
- [ ] 3 corrections chiffrées au plus, 1 note de goût au plus, ce tour.
- [ ] Avant/après au même instant ; frontière voisine revue ; lecture à vitesse normale.
