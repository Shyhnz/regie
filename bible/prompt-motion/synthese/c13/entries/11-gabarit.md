## Gabarit à copier : promo SaaS de 30 s, style 1600 (prompt template)

**Quand s'en servir** : pour toute promo produit de 20 à 40 s en typographie cinétique, après le brief et la grille (étapes 1 et 4 du parcours). On décide avant d'envoyer les textes définitifs, la charte et la source du son ; on vérifie le MP4, pas le code. Le gabarit fusionne les blocs des meilleurs prompts du corpus (`<inputs>`, `<direction>`, `<structure>`, `<build>`, `<start>`) et le prompt maître en 9 sections (guide Otom, p. 7), corrigé par nos mesures. Tout y est en nombres : ce qui est chiffré est obéi (138 durées sur 148 tenues à ±10 %).

```text
RÔLE
Tu es motion designer senior. Promo SaaS de 30 s en typo cinétique calée sur la musique (style 1600) : un mouvement toutes les 0,5 à 1 s.
NON NÉGOCIABLE, vérifié sur le rendu : texte ≥ 4 % de la hauteur (H), titres ≥ 8 % H, mot clé ≥ 12 % H ; rien d'immobile plus d'un temps (0,47 s) ; aucun mot coupé par le bord ; fin animée.
Avant tout code : carte des temps + 4 images témoins (M1, M6, M11, M16) ; attends mon accord.

ENTRÉES ET CHARTE
Produit [nom] · [URL] · promesse [1 phrase] · public [qui]
Format [16:9 ; en 9:16, zone sûre de la plateforme] · logo [SVG joint] · captures [3 à 5]
Fond [#] · texte [#] · accent [#] = [rôle] · accent 2 [#] = [rôle]
Polices locales [titres] · [texte] · [mono]
Textes définitifs : ne les reformule pas, n'invente ni chiffre ni client.

DIRECTION
1 à 3 mots par temps, détails sur les demi-temps ; ≤ 7 mots et 1 point focal par écran.
Phrase à lire : 0,4 s + caractères/15 (1 s min.), en poussée de 2-3 %.
Entrées 0,2-0,5 s expo.out, sorties ≤ 0,3 s power3.in ; dépassement ≤ 3 % sur le texte, 2-20 % sur les formes.
Transitions variées et motivées (objet relais, iris né d'un point, compression-éclosion, stores) ; jamais deux fois le même accent.
Zoom seulement pour cadrer un mot clé seul. Fond [aplat / dégradé fluide de la charte].

STRUCTURE : 128 BPM, 16 mesures = 30,0 s ; Mn part à (n−1) × 1,875 s
Scène sur le temps 1, coupe 1-2 im avant le temps.
M1 accroche, un mot par temps : [3-5 mots]
M2 retournement : [question ou chiffre]
M3 problème montré : [objet concret]
M4 il s'accumule, à la croche
M5 compression en un point, ½ temps de silence
M6 DROP : [produit] + [promesse]
M7 démo : [moment d'interface 1]
M8 démo : [moment 2]
M9 démo : [moment 3]
M10 mot clé seul plein cadre : [mot]
M11 preuve, compteur : [chiffre réel]
M12 preuve : [chiffre ou client réel]
M13 preuve : [chiffre]
M14 rafale récap à la croche : [4-8 mots]
M15 le logo se construit : [slogan]
M16 [URL ou appel] sur le temps 1 ; gel ≤ 1 s, micro-mouvement

INTERDITS → À LA PLACE
HUD, timecode, labels de coin → rien aux angles
fondu enchaîné → transition motivée
flash, onde de choc → 2 au plus (M6, M15)
glitch RVB, étoiles, confettis, flèches → rien
rebond élastique répété → un ressort court
mot flou ou pixelisé → net
tout ce qui fait gabarit

CONSTRUCTION
HyperFrames, 1920×1080, 60 fps. Une timeline GSAP en pause, tout fonction du temps.
Temps n = image round(n × 28,125). Son : [bande-son composée en code sur cette grille / ma piste : mesure son BPM et son 1er temps]. -14 LUFS.
Polices auto-hébergées, mesures après document.fonts.ready.

CONTRÔLE ET LIVRAISON
npx hyperframes check ; une image par temps sur M1, M6, M11, M16.
Sur le MP4 : critères NON NÉGOCIABLES, 3 attaques à ±2 im, M16 entière. Livre le MP4 et ce que tu n'as pas tenu.
```

**Mode d'emploi.** Remplacer chaque [crochet], sans ajouter de ligne. Vide, le gabarit fait 2 779 caractères ; rempli avec des textes types, 2 983. C'est la taille du prompt maître Otom (environ 2 800), loin des 4 024 caractères où commencent les échecs (voir *Le piège des prompts trop longs*). Au-delà de 3 000, raccourcir les textes, jamais les lignes NON NÉGOCIABLE. Autre durée : BPM = 60 × temps ÷ durée ; à 120 BPM, 30 s = 15 mesures de 2 s. Pour réutiliser un prompt réussi : d'abord changer les mots, puis un seul nombre à la fois.

**Version courte (8 lignes), pour explorer**

```text
BUT : [public] retient « [promesse] » et va sur [URL].
SORTIE : MP4 HyperFrames 1920×1080, 60 fps, 30 s, bande-son composée en code, -14 LUFS.
TEMPS : 128 BPM, 16 mesures, une scène par mesure, 1 à 3 mots par temps, drop en M6 ; rien d'immobile plus de 0,47 s.
LOOK : typo cinétique style 1600 ; fond [#], texte [#], accent [#] ; polices locales [ ] ; texte ≥ 4 % H, titres ≥ 8 %, mot clé ≥ 12 %.
MOUVEMENT : entrées 0,2-0,5 s expo.out, dépassement court sur ce qui naît, transitions motivées et variées.
PLANS : accroche M1-2, problème M3-5, produit et démo M6-10, preuves M11-13, rafale M14, logo et [URL] M15-16, fin animée.
INTERDITS : HUD et coins, fondu enchaîné, glitch, étoiles, mots flous ou coupés, chiffres inventés, tout ce qui fait gabarit.
CONTRÔLE : carte des temps + 4 images avant le film ; sur le MP4, tailles, bords et calage à ±2 im vérifiés.
```

863 caractères : la zone des 17 vidéos notées 5 (prompts de 11 à 994 caractères). Pour tester un concept ; pour livrer, le gabarit complet.

**Pourquoi chaque bloc, et ce qui arrive sans lui**

- **Rôle et non-négociables.** Aucun des 230 prompts ne chiffre la taille du texte : il est trop petit dans 76 à 93 % des vidéos, et le temps mort touche 53 à 73 %, quelle que soit la longueur. Ces critères vont en tête, pas en fin comme au §9 du guide Otom : [Food craving launch film](https://prompt-motion.com/ultimaxbt-2ddf1e) (4 667 caractères) a perdu outro, logo et serif. Les 4 images témoins reprennent le bloc `<start>` de [Orange dot motion system](https://prompt-motion.com/ultimaxbt-bbebf5) ; sans elles, on découvre les erreurs au rendu complet.
- **Entrées et charte.** Sans matière, Claude invente (43 constats) : logo, marque et chiffres de [Amazon wholesale pitch video](https://prompt-motion.com/ceowinkz-7c776b). Avec la page et le logo, [SaaS launch video](https://prompt-motion.com/aschapmann-131210) retrouve le vrai slogan et le rouge #FE412F. La note ne bouge pas (3,79 contre 3,89, non significatif) : la matière fait la ressemblance. Bloc charte du guide Otom (p. 5), sans son « À éviter : dégradés, rebonds ».
- **Direction.** Une intention sans chiffre est tenue à la baisse : « long enough to read » donne 40 % de maintiens. Les 50 entrées des études 60 fps ont 0,30 s de médiane ; 14 des 17 vidéos notées 5 ont un dépassement. La Bible corrige donc « Pas de rebond » et « immobile au moins 1,5 s » (guide Otom, p. 7). Voir *Le système de courbes* et *Le maintien* au chapitre 9, *L'objet relais* et *L'iris né d'un point* au chapitre 4.
- **Structure au temps.** Un storyboard écrit est suivi à 0,1 s ([Speech built as architecture](https://prompt-motion.com/gdgtify-287ddf)), une grille en formule à 1 image ([Frame by Frame launch video](https://prompt-motion.com/notdwd-7de38a)). Animées sur la musique, 129 vidéos font 4,06 ; à musique posée, 12 font 3,33. Sans durée, Claude livre de 10 à 457 s ; muet sur le son, il cale une bande-son une fois sur deux (54 %). Voir *La grille de tempo* et *Couper en avance, atterrir sur le temps* au chapitre 9, *L'arc de pitch* et *La signature finale* au chapitre 10.
- **Interdits.** 12 listes tenues sur 15 vérifiées ; les 3 échecs sont dans des prompts de 4 024 à 8 142 caractères. Un interdit sans remplacement appauvrit la palette ([Launch video remake comparison](https://prompt-motion.com/notdwd-c2037d)). Sans liste, le prompt canonique met un HUD dans environ 27 runs sur 33. Ce sont les interdits de ce style et les rejets de l'utilisateur ; dégradé fluide et dépassement restent permis.
- **Construction.** À 60 fps, 129 vidéos font 4,03 et 14 des 17 notes de 5 ; à 30 fps, 3,65 : la Bible corrige le rendu à 30 fps (guide Otom, p. 16). Le temps calculé en image entière donne 0 image d'écart chez [Kinetic type showreel](https://prompt-motion.com/zheke-38deff). Les polices Google sortent en repli au rendu ([Spotify product film](https://prompt-motion.com/brainextends-e19ac3)).
- **Contrôle et livraison.** Demander un contrôle ne monte pas la note (3,83, non significatif), mais retire des défauts : images à chaque coupe et critique neuve, aucun glitch ([Prompt Motion site promo](https://prompt-motion.com/antonio-kodheli-490109)). « Une image par temps » vérifie la grille, pas la logique ([Morphing UI states loop](https://prompt-motion.com/demonugc-4c5753)). M16 se vérifie en entier : c'est la fin qui se perd. Les captures à 0, 20… 100 % de la boucle Otom (p. 15) ratent les pics : on vise les attaques.

**À cocher**

- [ ] Chaque [crochet] rempli ; gabarit rempli ≤ 3 000 caractères.
- [ ] Durée en mesures entières : 30 s = 16 mesures à 128 BPM, drop en M6 (31 %).
- [ ] Tailles en tête : texte ≥ 4 % H, titres ≥ 8 %, mot clé ≥ 12 % ; rien d'immobile plus de 0,47 s.
- [ ] Textes définitifs ; chiffres et clients réels ; 3 à 5 hex avec leur rôle.
- [ ] Carte des temps et 4 images témoins validées avant le film complet.
- [ ] Sur le MP4 : 3 attaques à ±2 im de la grille, M16 vue en entier, liste des écarts lue.
