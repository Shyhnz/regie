## Le rendu cassé : saccade, zoom pixelisé, images parasites (stutter, pixelated zoom, stray frames, muddy flash)

Ce tic vient de la fabrication, pas de la mise en scène : le spectateur voit la machine au lieu du message. Il frappe les bonnes vidéos autant que les faibles : 47 des 186 notées 4 ou 5 (25 %), 10 des 47 notées 1 à 3 (21 %), dont 6 notées 5. Note moyenne : 3,93 avec, 3,84 sans. C'est un défaut de finition, invisible à vitesse réelle, qu'on ne trouve qu'image par image. Le zoom pixelisé est en plus un rejet explicite de l'utilisateur. Gravité 2. Vu dans 57 vidéos (68 défauts, 1 cliché).

![Cinq images consécutives : la maquette de téléphone avance par grands sauts nets, sans aucune traînée](ILLUS:rendu-casse-1)

*[Design portfolio video reel](https://prompt-motion.com/kikelopezdesign-7cc9e8), 0:06.83 à 0:06.97 (5 images consécutives à 30 fps) : la maquette avance d'environ 178 px par image (14 % de la largeur) et chaque image reste nette. L'œil voit des sauts, pas un mouvement.*

**Symptôme mesuré**

- **Saccade et flou raté** (17 vidéos) : geste rapide net à chaque image, ou flou fait de 3 à 4 copies en escalier.
- **Couleur terne** (17) : flash gris moyen, morphing interpolé en RVB qui traverse un violet boueux, halo qui brûle 30 % du cadre ([Beat-synced bouncing 3D ball](https://prompt-motion.com/gorden-sun-041f56)), paliers de dégradé.
- **Images parasites** (12) : image grise, noire ou sautée, trou de fond vide, affiche du film en image 0.
- **Définition** (9) : exports 848 × 480 ou 854 × 480, sources agrandies au zoom. 37 vidéos du corpus sortent en 1280 × 720.

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Poussée sans flou | [Supasito launch video](https://prompt-motion.com/wozu-co-242285), 0:04.72 | ×1,0 → ×2,2 en 8 im, aucune traînée : lue comme une coupe |
| Flou en escalier | [Morphing UI states loop](https://prompt-motion.com/demonugc-4c5753), 0:02.00 | 4 sous-images à ≈ 50 px/im : 3 à 4 copies espacées de 12 px |
| Flou en éventail | [Type, form, space showreel](https://prompt-motion.com/web3wesley-7bb108), 0:05.30 | Notée 5 : rotations rapides à 30 fps, sous-images visibles en éventail (f159-f166) |
| Zoom pixelisé | [Photon journey from the Sun](https://prompt-motion.com/apoorvjain25-d24184), 0:13.67 | Plongée dans la Terre : texture agrandie, pâteuse, côtes floues |
| Image parasite | [What happens in one second](https://prompt-motion.com/nolkeeg-bf062e), 0:27.37 | Images noires isolées f1642, f1648, f1807 : rendu 3D pas prêt à la capture |
| Flash gris | [Motion designer showreel](https://prompt-motion.com/teslachartz-c58b32), 0:07.50 | Voile #7F7E7B sur une palette saturée : bien calé, mais il éteint l'image |
| Morph RVB boueux | [Motion design showreel](https://prompt-motion.com/samuel-spitz-974923), 0:04.30 | Rouge → bleu par un violet ≈ #8C3F8F pendant ≈ 6 im, hors palette |

![Huit images : la Terre grossit jusqu'à remplir le cadre, puis sa texture devient floue et pâteuse](ILLUS:rendu-casse-2)

*[Photon journey from the Sun](https://prompt-motion.com/apoorvjain25-d24184), 0:12.97 à 0:13.97 : nette tant qu'elle est petite, la Terre devient une bouillie de couleurs dès que le zoom dépasse la définition de sa texture.*

![Neuf images consécutives : particules sur fond noir, une image grise isolée, puis un disque orange sur crème](ILLUS:rendu-casse-3)

*[Bold typographic motion showreel](https://prompt-motion.com/motiondsgnr-9dcfa6), 0:04.43 à 0:04.57 : l'image f270 (0:04.50) est un mélange à 50 % du noir et du crème, luminance 125 entre 30 et 221. À vitesse réelle, on la lit comme un raté.*

**Règles**

1. **60 fps, 1920 × 1080 au moins** (1080 × 1920 en vertical). 129 vidéos à 60 fps ont 4,03 de moyenne et 14 des 17 notes de 5 ; 93 à 30 fps, 3,65 et 3. À 30 fps, les morphings de 3 im et les lettres posées une par image saccadent ([Claude motion design showreel](https://prompt-motion.com/ayushunleashed-ece3e3)).
2. **Le flou suit la vitesse.** Aucun sous 12 px/im ; directionnel dès ≈ 40 px/im, 8 à 16 sous-images ; au-delà de 60 à 80 px/im, refaire le geste. Une poussée de plus de ×1,5 en moins de 10 im est toujours floutée. Le texte atterrit net (voir *Le flou de mouvement et les traînées* au chapitre 6 et *La poussée vers le sujet : lente, calibrée ou en punch sur le temps* au chapitre 5).
3. **Aucune source agrandie au-delà de 100 %.** Taille de la source ≥ taille affichée au zoom maximal ; sinon vectoriel, texte vivant ou zoom réduit. Jamais de `will-change: transform` sur un texte zoomé : figé en image, il pixelise (savoir-faire HyperFrames).
4. **Les couleurs de passage restent dans la palette.** Un flash prend une couleur pleine (blanc franc, accent, couleur du plan suivant), jamais un gris moyen (#7F7E7B, #B2B2B2, #BCB4C4 relevés). Un morphing s'interpole en OKLCH ou bascule net sur un temps (voir *Le coup de flash : surexposition, image négative, glitch RVB* et *Le morphing de forme : un objet qui change au lieu de couper* au chapitre 6).
5. **Zéro image orpheline.** Pas d'image grise, noire ou dupliquée hors flash voulu sur un temps. L'image 0 est la première image voulue, pas l'affiche : 6 im de carte de fin avant le noir d'ouverture dans [Drone Emprit showreel](https://prompt-motion.com/ismailfahmi-557268).
6. **Polices et encodage vérifiés sur le fichier.** Police auto-hébergée, rendu après `document.fonts.ready` : [Spotify product film](https://prompt-motion.com/brainextends-e19ac3) sort en police de repli. Halo, grain et dégradés se relisent après encodage web (voir *La finition de rendu : grain, vignette, halo, ombres douces, reflets* au chapitre 6) ; une trame en zigzag moire à la compression ([Reddit marketing tool launch video](https://prompt-motion.com/anthonyriera-9b1b2a)).

**Le guide Otom, corrigé.** Son correctif 02 (« n'anime que transform et opacity », p. 14) vise la capture d'écran en temps réel, où le navigateur peine. Dans un rendu image par image, la saccade vient de la cadence et du flou absent : on garde la règle, on ajoute 60 fps et le flou. La Bible corrige aussi le MP4 à 30 fps (p. 16) et les Google Fonts (p. 7). Son erreur d'export (p. 5-6), la capture d'une fenêtre, vaut chez nous pour l'image sautée de [Shop chatbot mascot promo](https://prompt-motion.com/anas0ra-e57aea), probable capture en temps réel.

**Quand s'en servir** : la cadence, le flou et la taille des sources se décident au système de design et au rendu (chapitre 12, Méthode de production, étapes 6 et 10). Le contrôle se fait à l'étape 9, sur un rendu de travail, avant le master.

**Contrôle avant rendu**

| Quoi | Image à extraire | Mesure | Seuil |
| --- | --- | --- | --- |
| Fichier | ffprobe | Cadence, taille, nombre d'images | 60 fps ; ≥ 1920 × 1080 ; images = durée × 60 |
| Gestes rapides | Bande pleine résolution, 6 à 8 im, sur chaque poussée, filé et rotation | px par image ; copies en escalier | Flou dès ≈ 40 px/im ; 0 copie visible ; arrivée nette |
| Zooms | Image au zoom maximal, recadrée sans mise à l'échelle | Pixels, bavures | 0 pixel visible |
| Images parasites | Luminance moyenne de chaque image | Pic, creux, image de passage unique | 0 hors flash voulu sur un temps |
| Couleurs de passage | Milieu de chaque morphing et de chaque flash | Couleur au centre de l'objet | Dans la palette ; aucun gris moyen |

```bash
ffprobe -v error -count_frames -select_streams v:0 -show_entries \
  stream=width,height,r_frame_rate,nb_read_frames -of compact rendu.mp4
PY TOOLS/illus.py range rendu.mp4 205 212 8 geste.jpg
ffmpeg -v error -ss 13.67 -i rendu.mp4 -frames:v 1 -vf "crop=480:270" zoom-1x1.png
ffmpeg -v error -i rendu.mp4 -vf "signalstats,metadata=print:key=lavfi.signalstats.YAVG:file=-" -f null - \
 | awk -F= '/YAVG/{y[n++]=$2} END{for(i=1;i<n-1;i++){a=y[i]-y[i-1];b=y[i+1]-y[i];
   if((a>25&&b<-25)||(a<-25&&b>25)||(a>40&&b>40)||(a<-40&&b<-40)) printf "image %d Y=%.0f\n",i,y[i]}}'
ffmpeg -v error -ss 4.35 -i rendu.mp4 -frames:v 1 -vf "crop=8:8:960:540,scale=1:1" \
  -f rawvideo -pix_fmt rgb24 - | xxd -p
```

Le balayage de luminance (pic, creux ou image de passage unique) trouve f270 de [Bold typographic motion showreel](https://prompt-motion.com/motiondsgnr-9dcfa6) et f1642, f1648, f1807 de [What happens in one second](https://prompt-motion.com/nolkeeg-bf062e). Il signale aussi les flashs voulus : on vérifie qu'ils tombent sur un temps. L'échantillon de couleur (crop au centre de l'objet) rend #8B8784 sur le flash gris de teslachartz.

**À cocher**

- [ ] Fichier à 60 fps, ≥ 1920 × 1080, nombre d'images = durée × 60.
- [ ] Chaque geste de plus de 40 px/im flouté (8 à 16 sous-images), sans copie visible, arrivée nette.
- [ ] Au zoom maximal, recadrage 1:1 sans pixel ni bavure : source ≥ taille affichée.
- [ ] 0 image isolée grise, noire ou sautée au balayage de luminance ; image 0 voulue.
- [ ] Flashs et morphings : couleur de passage dans la palette, aucun gris moyen.
- [ ] Police de la marque à l'image ; fichier web relu sur téléphone, sans paliers ni moiré.
