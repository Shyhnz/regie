## Étape 10 · Le rendu et l'export : 60 images par seconde, flou réel, fichier vérifié

Dernière étape, une fois passées la grille de *Étape 9 · Le contrôle qualité : une grille chiffrée, sur le rendu* et la boucle de *Itérer : la boucle de correction* : rendre le master image par image, l'encoder pour chaque diffusion, puis vérifier le fichier livré, pas l'aperçu. La cadence pèse : 129 vidéos à 60 fps ont 4,03 de moyenne et 14 des 17 notes de 5 ; 93 à 30 fps, 3,65 et 3. L'écart tient parmi les seules vidéos animées sur la musique (4,13 contre 3,93). On livre un dossier : master, version web, déclinaisons, affiche et un court compte rendu chiffré.

![Une barre de saisie recule en tournant avec un flou directionnel continu, puis l'écran du téléphone se pose net](ILLUS:rendu-2)

*[Food craving launch film](https://prompt-motion.com/ultimaxbt-2ddf1e), 0:00.17 à 0:00.83 : 8 sous-images fusionnées donnent un flou directionnel continu sur le recul, puis l'interface se pose nette. Vidéo notée 3, montrée pour la technique de rendu seulement.*

**Ce que font les meilleures vidéos**

- Un flou calculé, nul au repos : [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a) (5/5) affiche « 60 FPS · 180° SHUTTER » dans son habillage, flou fort seulement sur la bascule caméra (étude 60 fps).
- Un master haute cadence : [Reddit marketing tool launch video](https://prompt-motion.com/anthonyriera-9b1b2a), faite par le skill product-film, rend à 240 im/s puis moyenne 4 sous-images par image de sortie.
- Des boucles au pixel près : 0,33/255 d'écart à la couture pour [Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86), image 899 = image 0 pour [Second brain service promo](https://prompt-motion.com/theviableedge-9065be) (5/5).
- Un fichier mesuré : [Prompt Motion site promo](https://prompt-motion.com/antonio-kodheli-490109) vise -14 LUFS et livre -14,1.
- Les skills recomposent chaque format depuis la même timeline (cinetic : 9:16, 1:1, 4:5), jamais par recadrage.

**Ce qui manque aux moins bonnes**

- 30 fps faute de consigne : impacts de 3 im saccadés dans [Photon journey from the Sun](https://prompt-motion.com/apoorvjain25-d24184) et [ODATANO Cardano hype edit](https://prompt-motion.com/maxalexweber-67688b).
- 60 fps demandés, 30 livrés : [Food craving launch film](https://prompt-motion.com/ultimaxbt-2ddf1e) (calage à ±33 ms), [Spotify product film](https://prompt-motion.com/brainextends-e19ac3) (plus une police de repli).
- Un fichier jamais relu : 449 images au lieu de 450 dans [Motion designer showreel](https://prompt-motion.com/hanifproduktif-54bdee), image en avance d'environ 1 im sur le son ; piste audio plus longue de 0,153 s dans [Chaotic Claude POV video](https://prompt-motion.com/kloss-xyz-15182a).
- Trop peu de sous-images : 3 laissent des copies (image ci-dessous), 4 font un escalier à 50 px/im ([Morphing UI states loop](https://prompt-motion.com/demonugc-4c5753)) ; à travers une coupe, elles fabriquent un fondu d'une image ([Ora 2 image model launch film](https://prompt-motion.com/rossaxbt-3085b7)).
- Une petite définition : 53 vidéos publiées autour de 720 px de côté ont 3,72 de moyenne, contre 3,91 pour les 178 en 1080 ou plus. Prudence : X réencode parfois, et deux 5/5 sont publiés en 720p.

![Un mur de cartes vidéo file vers la gauche ; les cartes se dédoublent en copies décalées au lieu de se fondre en flou](ILLUS:rendu-1)

*[UGC ad generator promo](https://prompt-motion.com/twoclipping-6dd14e), 0:05.93 à 0:06.10 : à 3 sous-images par image, le mur de cartes qui file se dédouble en copies.*

**Décisions**

- Cadence et taille : 60 fps, 1920 × 1080 au moins ; 30 fps seulement pour alléger un fichier.
- Flou : aucun sous 12 px/im ; 8 à 16 sous-images sur les 1 à 3 gestes rapides ; au-delà de 60 à 80 px/im, refaire le geste (coupe, masque).
- Encodage : master H.264 High, yuv420p, BT.709 ; web CRF 23, débit plafonné à 4 Mb/s, AAC 160k, +faststart.
- Livrables : master, web, 9:16 et 1:1 recomposés, affiche, GIF éventuel à 25 fps.
- Lecture : boucle ou lecture unique, décidée au brief.

**Livrable**

```text
LIVRAISON · <film> · v<N>
<film>-master.mp4  1920×1080 · 60 fps · <images> im · H.264 High yuv420p bt709 · AAC 48 kHz
<film>-web.mp4     CRF 23 · 4 Mb/s max · +faststart · <taille> Mo
<film>-9x16.mp4    recomposé depuis la même timeline
<film>-poster.jpg  image à <t> s, tout le texte visible
Contrôles : images = durée × 60 · audio ≤ image + 40 ms · decode OK · true peak ≤ -1 dBTP · image 0 non vide · vu sur téléphone
```

**Règles**

1. 60 fps écrit dans la composition et passé au rendu : HyperFrames rend à 30 par défaut.
2. Le flou suit la vitesse (skill cinetic ; voir *Le flou de mouvement et les traînées* au chapitre 6). Un texte à lire atterrit net ; aucune moyenne à travers une coupe.
3. Le fichier fait foi : nombre d'images exact, audio plus long de 40 ms au plus, soit 1 image et 1 trame AAC (NuOps : +18 ms ; skill cinetic), décodage complet sans erreur.
4. Une timeline, plusieurs formats : recomposer, jamais recadrer ; une version courte retire des mesures entières, sans accélérer le film (voir *Formats et zones sûres : vertical, carré, cinémascope* au chapitre 2).
5. Une boucle rend les images 0 à N-1 ; on la contrôle en enchaînant 3 lectures (voir *Le bouclage : serre-livres, rappel et boucle parfaite* au chapitre 10).
6. On regarde le fichier web, pas le master, sur un téléphone, avant de publier.

**La méthode Otom, corrigée**

On garde la structure du prompt de rendu (guide Otom, p. 16) : installer, convertir, valider l'aperçu, puis rendre ; le MP4 « à privilégier » ; la relecture sur mobile. La Bible corrige : 60 fps et non 30 ; un GIF à une cadence juste en centièmes (10, 20, 25 ou 50 fps), car 15 fps tombe à 7 cs et tourne 5 % trop lentement ; une boucle rendue de 0 à N-1 ; des polices auto-hébergées. L'export par capture d'écran sert d'aperçu, jamais de livrable.

**Erreur fréquente** : enregistrer une fenêtre avec la barre d'adresse et le curseur (guide Otom, p. 5-6). Chez nous : livrer sans relire le fichier, comme les 449 images au lieu de 450.

**Dans HyperFrames**

Racine en `data-fps="60"` ; flou par le composant (`npx hyperframes add motion-blur`, puis `data-hf-motion-blur='{"samplesPerFrame": 8}'` sur l'élément rapide, animé en x, y, scale ou rotation). Encodage web d'après le savoir-faire HyperFrames : 26 Mo pour 55 s en 1080p60, sans bandes sur les dégradés ; le réencodage perd une partie des balises BT.709 : `setparams` les réécrit sans convertir, ce qui suffit car le master HyperFrames est déjà en BT.709.

```bash
npx hyperframes check
npx hyperframes render --fps 60 --quality delivery --output renders/film-v9.mp4
ffprobe -v error -count_frames -select_streams v:0 -show_entries \
  stream=width,height,r_frame_rate,nb_read_frames,pix_fmt,color_space -of compact renders/film-v9.mp4
ffmpeg -v error -i renders/film-v9.mp4 -f null - && echo decode OK
ffmpeg -i renders/film-v9.mp4 -c:v libx264 -preset slow -crf 23 -maxrate 4M -bufsize 8M \
  -pix_fmt yuv420p -vf setparams=color_primaries=bt709:color_trc=bt709:colorspace=bt709:range=tv \
  -c:a aac -b:a 160k -movflags +faststart web/film.mp4
ffmpeg -i web/film.mp4 -af ebur128=peak=true -f null -      # true peak après encodage
ffmpeg -ss 3.3 -i renders/film-v9.mp4 -frames:v 1 web/film-poster.jpg
```

**Dans After Effects**

- Composition › Composition Settings (Paramètres de composition) : 1920 × 1080, 60 fps ; onglet Advanced (Avancé) : Shutter Angle (Angle d'obturateur) 180°, Samples Per Frame (Échantillons par image) 16 ; Motion Blur (Flou de mouvement) sur les seuls calques rapides.
- Composition › Add to Render Queue (Ajouter à la file d'attente de rendu) : Render Settings › Best Settings (Paramètres optimaux) ; Output Module (Module de sortie) en H.264, audio AAC 48 kHz. Pour des préréglages web : Composition › Add to Adobe Media Encoder Queue (Ajouter à la file d'attente d'Adobe Media Encoder).
- Déclinaisons : Edit › Duplicate (Édition › Dupliquer) la composition, la passer en 1080 × 1920 et recomposer les calques, sans mettre le master à l'échelle.
- Affiche : Composition › Save Frame As › File (Enregistrer l'image sous › Fichier) à l'instant où tout le texte est là.

**À cocher**

- [ ] Rendu à 60 fps et à la taille du brief ; nombre d'images = durée × 60, exactement.
- [ ] Flou sur les gestes de plus de 12 px/im, 8 à 16 sous-images, sans copie visible ; aucun geste au-delà de 80 px/im.
- [ ] Fichier web en H.264 yuv420p BT.709 et +faststart ; audio ≤ image + 40 ms ; decode OK ; true peak ≤ -1 dBTP.
- [ ] Image 0 non vide et affiche extraite à l'instant où tout le texte est visible.
- [ ] Déclinaisons recomposées, pas recadrées ; boucle rendue de 0 à N-1.
- [ ] Fichier web regardé sur un téléphone, son coupé puis avec le son.
