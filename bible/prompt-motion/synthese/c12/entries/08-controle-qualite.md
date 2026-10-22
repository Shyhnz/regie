## Étape 9 · Le contrôle qualité : une grille chiffrée, sur le rendu

L'étape 9 vérifie le rendu réel, jamais le code : après chaque tour de construction, puis sur le master. Elle passe une grille de seuils : lisibilité, temps de lecture, temps morts, bords, répétitions, images parasites, calage, fichier. Le texte trop petit touche environ 188 vidéos, dont 13 des 17 notées 5 : même les meilleures laissent passer ce qu'une mesure aurait vu. On livre la grille remplie et les défauts classés, chacun avec son instant.

![Bande image par image : une balle, un disque, une image noire isolée, puis une éclaboussure](ILLUS:controle-1)

*[Geometric motion designer showreel](https://prompt-motion.com/leonkohli-6dc01b), 0:06.93 à 0:07.13 : une image noire isolée (f211, 0:07.03) entre la balle et l'éclaboussure. Invisible à vitesse réelle, évidente image par image ; `blackdetect` la trouve en une commande.*

**Ce que font les meilleures vidéos**

- [Launch video remake comparison](https://prompt-motion.com/notdwd-c2037d) : 4 images témoins (f40, f86, f150, f230) avant le rendu complet : le contrôle le moins cher.
- [Prompt Motion site promo](https://prompt-motion.com/antonio-kodheli-490109) : rendus fixes à chaque coupe, chasse aux gels et aux sauts d'une image, critique neuf. Aucun glitch ; -14 LUFS demandés, -14,1 mesurés.
- [Ora 2 image model launch film](https://prompt-motion.com/rossaxbt-3085b7) : planche contact et scan des sauts d'une image. Aucune apparition brutale hors rafales.
- [SaaS launch video](https://prompt-motion.com/aschapmann-131210) : « vérifie les images toi-même, corrige ce qui se chevauche, est coupé ou va trop vite ». Aucun chevauchement, marges ≥ 9 %.
- Boucles comparées au pixel : écart 0,33/255 ([Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86)), 1,9/255 ([Orange dot motion system](https://prompt-motion.com/ultimaxbt-bbebf5)).

Toutes sont notées 4. Les 18 prompts avec une étape de contrôle ont 3,78 de moyenne et aucun 5 : un contrôle corrige ce qu'il nomme, pas le reste.

**Ce qui manque aux moins bonnes**

- Un contrôle sans mesure : « Inspect contact sheets » laisse passer un glitch de 2 im ([Spotify product film](https://prompt-motion.com/brainextends-e19ac3)) ; 10 images et « Apple-tier? » laissent l'interface à ≈ 1 % de la hauteur ([Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4)).
- Des images parasites : image noire isolée f562 dans [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a) (5/5) ; f1642, f1648 et f1807 dans [What happens in one second](https://prompt-motion.com/nolkeeg-bf062e).
- Un fichier faux : 449 images au lieu de 450, tout le film en avance d'une image ([Motion designer showreel](https://prompt-motion.com/hanifproduktif-54bdee), [EyezOn 100 users thank-you](https://prompt-motion.com/sudiyasa-f48ac9)).
- Calage et texte non relus : image décalée de 3 à 4 im des attaques ([Claude motion designer showreel](https://prompt-motion.com/mrtanviir-132457)) ; « 1 steps » au moment clé ([Step race app promo](https://prompt-motion.com/marklaunches-3b9492)).

![Planche à une image par seconde, à 360 px de large : seuls le chiffre, les titres et le logo se lisent](ILLUS:controle-qualite-2)

*[Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4), une image par seconde de 0 à 13 s, à 360 px de large (taille téléphone) : seuls 48.260, les titres et le logo se lisent ; les lignes d'interface disparaissent.*

**Décisions**

- Les images : planche à 4 images/s ; 8 images autour de chaque couture et temps fort ; une image par seconde à 360 px de large.
- Les mesures automatiques : ffprobe, `blackdetect`, `freezedetect`, détection de coupes, `ebur128`.
- Qui juge : un regard neuf (sous-agent critique, ou les 4 regards du skill cinetic : réalisateur, images, son, direction artistique), pas le constructeur.
- Le seuil de livraison : zéro défaut bloquant (B dans la grille).
- Le détail de chaque tic et son contrôle sont au chapitre 11 (*Les tics de vidéo générée, par fréquence*).

**Livrable**

```text
GRILLE · <projet> vN    B = bloquant    résultat | instant
texte lu      hauteur / H         ≥ 3 % (4 % en 9:16)   B
message       taille / H          ≥ 6 % en 16:9
lecture       tenue complète      mot à mot ≈ 0,2 s/mot ; phrase 0,4 s + car./15, ≥ 1 s   B
temps mort    freezedetect        aucun gel > 1 temps ; final ≤ 1,2 s   B
bords         lettres hors cadre  0 (marge 6 %, zone sûre 9:16)     B
contraste     WCAG                ≥ 4,5:1 (3:1 grand texte)
répétition    même accent         ≤ 2 ; signature : chaque retour varie
parasites     noires, sauts 1 im  0   B
calage        coupes / attaques   ≥ 75 % à ±2 im ; image 1-3 im avant, écart constant   B
son           ebur128             -14 ±1 LUFS, crête ≤ -1 dBTP
fichier       ffprobe             images = durée × fps, 60 fps, 1920×1080   B
3 secondes    un spectateur       redit le message
```

**Règles**

1. Un contrôle nomme une mesure et un seuil, sinon il rate ce qu'il ne nomme pas.
2. Une image fixe ne montre ni un mouvement ni un pic : bande de 8 images à 1/60 s autour de chaque action clé.
3. Lire à la taille du téléphone (360 px de large). Ce qui ne s'y lit pas grossit ou disparaît.
4. Classer par impact : bloquant (temps fort, logo, fait faux), gênant (vu à vitesse normale), visible à l'arrêt seulement. Corriger 1 ou 2 défauts par tour (voir *Itérer : la boucle de correction*).
5. Repasser la grille sur le master, pas seulement sur l'aperçu. Le storyboard de [Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4), tenu jusqu'à 9 s, finit compressé : 1,6 s d'immobilité finale.

**La méthode Otom, corrigée**

On reprend « regardez l'animation trois fois » : en entier, scène par scène, sur un téléphone (guide Otom, p. 6). Plus le test des 3 secondes (p. 6), la boucle de vérification en 3 tours avec les points non résolus (p. 15), et 5 défauts classés dont 3 corrigés (p. 14). On corrige : des captures à 0, 20… 100 % ne voient ni mouvement ni calage, d'où les bandes et la mesure des attaques ; la checklist « Après » (p. 17) gagne « calage musical vérifié ». Le texte « immobile 1,5 s » et l'écran final de 2,5 s sont faux : la Bible a raison, on mesure par mot, et un plan figé est un temps mort (voir *Le maintien : temps de lecture ou temps mort*, chapitre 9 ; *La signature finale : logo, slogan, appel, sans temps mort*, chapitre 10).

**Erreur fréquente** : « vérifie ton travail » sans seuil : Claude regarde 8 à 20 images, ôte les chevauchements, laisse le texte à 1 % de la hauteur.

**Dans HyperFrames**

Avant rendu : `npx hyperframes check --at-transitions --snapshots` (débordements, chevauchements, contraste WCAG AA), puis `npx hyperframes snapshot --at 1.88,3.75,7.5` aux temps forts ; regarder chaque PNG (savoir-faire HyperFrames). Après rendu :

```bash
M=renders/out.mp4
ffprobe -v error -count_frames -select_streams v:0 -show_entries stream=nb_read_frames,r_frame_rate,width,height -of csv=p=0 "$M"
ffmpeg -i "$M" -vf "fps=4,scale=320:-1,tile=8x8" -fps_mode vfr planche-%02d.png
ffmpeg -i "$M" -vf "fps=1,scale=360:-1,tile=5x3" -fps_mode vfr telephone-%02d.png
ffmpeg -i "$M" -vf "blackdetect=d=0:pix_th=0.10" -an -f null - 2>&1 | grep black_start
ffmpeg -i "$M" -vf "freezedetect=n=0.001:d=0.25" -an -f null - 2>&1 | grep freeze_
ffmpeg -i "$M" -vf "select='gt(scene,0.25)',showinfo" -an -f null - 2>&1 | grep -o "pts_time:[0-9.]*"
ffmpeg -i "$M" -af ebur128=peak=true -vn -f null - 2>&1 | tail -12
```

Essayé sur le corpus : `blackdetect` trouve l'image f211 ci-dessus ; `freezedetect` relève 3 gels de 0,30 à 0,38 s dans [Kinetic type showreel](https://prompt-motion.com/zheke-38deff). Deux coupes à 1 image d'écart signalent une image parasite. Comparer les coupes aux attaques audio (librosa) ; temps de lecture avec `temps-lecture.py` (skill motion-premiers-principes).

**Dans After Effects**

- Composition › Save Frame As › File (Enregistrer l'image sous › Fichier) à chaque marqueur, en résolution Full (Intégrale).
- Title/Action Safe (Zones admissibles titre/action) affichées, Info panel (panneau Info) pour mesurer les tailles en px.
- Calage : forme d'onde du calque (touches LL) contre les marqueurs, ou Animation › Keyframe Assistant › Convert Audio to Keyframes (Convertir l'audio en images clés).
- Brouillon H.264 par Adobe Media Encoder, puis les mêmes commandes ffmpeg sur le fichier.

**À cocher**

- [ ] `check` sans erreur ; planche à 4 images/s et planche à 360 px regardées en entier.
- [ ] Bande de 8 images autour de chaque couture et temps fort : 0 image parasite.
- [ ] Texte lu ≥ 3 % de la hauteur (4 % en 9:16), contraste ≥ 4,5:1, 0 mot coupé par le bord.
- [ ] Aucun gel > 1 temps ; gel final ≤ 1,2 s ; chaque accent ≤ 2 fois.
- [ ] Calage : ≥ 75 % à ±2 im, image 1 à 3 im avant, écart constant ; -14 ±1 LUFS ; nombre d'images = durée × fps.
- [ ] Test des 3 secondes réussi ; défauts restants listés avec leur instant.
