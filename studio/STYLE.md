# STYLE — <film>

Rôle : référence. Départ : le guide du style choisi (Bible, B). Chaque adjectif est devenu un nombre ; les nombres vivent dans `motion.js`.

## Jetons
- Couleurs : fond `#` · texte `#` · accent `#` = <rôle> · accent 2 `#` = <rôle> (accent ≤ 8 % des pixels)
- Polices (locales) : titres · texte · mono
- Tailles : texte lu ≥ 3 % H (4 % en 9:16) · message ≥ 6 % H · mot clé ≥ 12 % H
- Marges : ≥ 6 % (zone sûre de la plateforme en 9:16)
- Courbes et ressorts : voir `motion.js`

## Règles de mouvement par classe d'objet
| Classe | Règle | Jeton |
| --- | --- | --- |
| Micro-interface | rapide, dépassement minime | `EASE.enter`, `DUR.feedback`, appui `PRESS` |
| Panneaux, cartes | posé contrôlé | `SPRING.panel` |
| Caméra | douce, presque invisible | `EASE.camera` |
| Titres | entrée forte, tenue stable, aucun dépassement | `EASE.enter`, `DUR.enter` |
| Mascotte | joueuse, voulue | `SPRING.playful` |

## Hiérarchie
Un héros par plan. Secondaires à 50-70 % de sa course, 100-200 ms après. Ambiant < 5 % de la course, sinus lent, jamais arrêté. Position et taille peuvent rebondir ; opacité et couleur jamais.

## Interdits → à la place (liste vivante)
| Interdit | À la place | Ajouté le / pourquoi |
| --- | --- | --- |
| fondu enchaîné par défaut | couture décidée (objet relais, coupe sur le temps, iris) | départ |
| même accent à chaque coupe | chaque accent ≤ 2 fois | goût de l'utilisateur |
| étoiles, flèches, confettis décoratifs | rien | goût de l'utilisateur |
| mur de mots flous | mots nets | goût de l'utilisateur |
| mot coupé par le bord, zoom pixelisé | zoom calibré qui cadre le mot seul | goût de l'utilisateur |
| HUD, timecode, étiquettes de coin décoratifs | rien aux angles | réflexe d'Opus |
| texte qui bouge pendant qu'on le lit | tenue vivante (poussée 2 %) | F |
| tout qui apparaît ensemble en fondu montant | un héros à la fois | F |

## Garde-fous (ne changent jamais)
Logo, couleurs de marque, textes définitifs, proportions du personnage.
