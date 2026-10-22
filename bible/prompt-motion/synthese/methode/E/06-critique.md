## Le critique et la grille de revue (independent critic, rendered-frames review)

Le critique ne voit pas le code et ne juge que les images rendues : « ne décris pas ce que tu voulais faire » (W). Il travaille dans une session neuve ou un sous-agent, avec le brief, le style, la liste des plans et les planches (B). Il note cinq critères, coche huit points, passe la grille chiffrée du chapitre 11 et sort les trois défauts les plus graves, chacun avec son instant, sa preuve et un correctif local. « L'agent a fait une vidéo » s'arrête quand le fichier existe ; « l'agent a dirigé une vidéo » s'arrête quand les preuves disent que le film marche (W).

**Quand s'en servir** : à la porte 4 sur le premier montage, puis à chaque tour de la phase 7 jusqu'à zéro défaut bloquant.

```text
Tu reçois BRIEF.md, STYLE.md, SHOTLIST.md et les images de reviews/v[N]/. Tu n'as pas vu le code.
Ne décris pas ce que le film voulait faire. Juge seulement les images rendues.
Note de 1 à 5 : accroche, lisibilité, continuité, mouvement, calage son.
Coche la liste : texte lisible à taille téléphone ; rien hors zone sûre ; vrais assets ; typo et couleurs constantes ; aucune image ratée en milieu de transition ; coupes et sons ensemble ; vraie accroche dans les 2 premières secondes ; dernière image assez forte pour une affiche.
Passe la grille de contrôle de la Bible (chapitre 11).
Classe les défauts : bloquant, gênant, visible à l'arrêt seulement.
Pour les trois plus graves : instant (image globale), preuve, correctif local, ce qui doit rester fixe.
```

**Les deux vues d'animateur** (F) : la pelure d'oignon (images superposées à 25 % : espacement régulier = mouvement robotique ; serré près des clés = la courbe marche) et le graphe de vitesse (droites = linéaire ; angles = départs et arrêts morts). Commande de la pelure d'oignon sur 8 images d'un rendu :

```sh
ffmpeg -i renders/draft.mp4 -vf "select='between(n,240,247)',tmix=frames=8" -frames:v 1 reviews/pelure-f240.png
```

**À cocher**

- [ ] Critique faite sans le code, sur les images seulement.
- [ ] 5 notes, 8 points, grille du chapitre 11.
- [ ] 3 défauts les plus graves avec instant, preuve, correctif local et ce qui reste fixe.
