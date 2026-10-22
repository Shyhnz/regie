## Grille de contrôle avant rendu (QC checklist, 3-second test, anti-template rules)

La grille réunit les 23 contrôles chiffrés du chapitre, dans l'ordre où on les passe : A brief et storyboard, B code, C rendu image par image, D son, E fichier, F tests humains. C'est l'outil de l'étape 9 ; la procédure est dans *Étape 9 · Le contrôle qualité : une grille chiffrée, sur le rendu*, au chapitre 12. Elle porte aussi le tic du brief perdu (consigne ignorée, chiffre inventé, outil à l'écran) : 46 vidéos, 16 % des notées 4 ou 5, 34 % des notées 1 à 3. On la passe à chaque version, puis sur le master.

![Planche à 4 images par seconde : 48 vignettes, chaque message tenu 2 à 4 vignettes pendant qu'un point ou un objet bouge](ILLUS:grille-controle-1)

*[Kinetic type showreel](https://prompt-motion.com/zheke-38deff) (5/5), 0:00 à 0:11.75, K2 : chaque message reste complet 2 à 4 vignettes. Mesures : maintiens 6 % (le plus long 0,43 s), coupes à 81 % à ±2 im de la grille, crête à −0,4 dBTP : même une 5/5 rate D2.*

**Les commandes** (testées en bash et zsh)

```bash
R=renders/out.mp4
#K1 fichier et piste son
ffprobe -v error -show_entries stream=codec_type,codec_name,pix_fmt,width,height,r_frame_rate:format=duration -of compact=p=0 "$R"
#K2 planche à 4 i/s (une page = 12 s)
ffmpeg -v error -y -i "$R" -vf "fps=4,scale=480:-1,tile=8x6" planche-%02d.jpg
#K3 image à 3,5 s, puis à la taille d'un téléphone
ffmpeg -v error -y -ss 3.5 -i "$R" -frames:v 1 t3.5.png
ffmpeg -v error -y -ss 3.5 -i "$R" -frames:v 1 -vf scale=400:-1 t3.5-tel.png
#K4 maintiens ≥ 0,4 s
D=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$R")
ffmpeg -nostats -i "$R" -vf "freezedetect=n=0.003:d=0.4" -map 0:v -f null - 2>&1 | grep -o "freeze_duration: [0-9.]*" | awk -v D="$D" '{s+=$2; if($2>m)m=$2} END{printf "maintiens %.0f %%, plus long %.2f s\n", 100*s/D, m}'
#K5 images isolées, puis secondes à > 6 sauts
ffmpeg -v error -i "$R" -vf "signalstats,metadata=print:key=lavfi.signalstats.YAVG:file=luma.txt" -f null -
awk -F'[ :=]+' '/pts_time/{t[n]=$NF} /YAVG/{y[n++]=$NF} END{for(i=1;i<n-1;i++){a=y[i]-y[i-1]; b=y[i+1]-y[i]; if((a>40||a<-40)&&(b>40||b<-40)) printf "image isolée %d (%.3f s)\n", i, t[i]}}' luma.txt
awk -F'[ :=]+' '/pts_time/{t=$NF} /YAVG/{if(n++ && ($NF-p>50 || p-$NF>50)) c[int(t)]++; p=$NF} END{for(s in c) if(c[s]>6) print "seconde " s " : " c[s] " sauts"}' luma.txt
#K6 coupes contre la grille (T0 = premier temps)
ffmpeg -nostats -i "$R" -vf "scdet=threshold=10" -an -f null - 2>&1 | grep -o "lavfi.scd.time: [0-9.]*" | awk -v BPM=128 -v FPS=60 -v T0=0 '{h=30/BPM; k=int(($2-T0)/h+0.5); d=($2-T0-k*h)*FPS; if(d<0)d=-d; n++; if(d<=2)ok++} END{if(n) printf "%d coupes, %.0f %% à ±2 im\n", n, 100*ok/n}'
#K7 calage : 18 images (0,3 s) sur la forme d'onde
ffmpeg -v error -y -ss 2.10 -t 0.30 -i "$R" -filter_complex "[0:v]scale=200:-2,tile=18x1[b];[0:a]showwavespic=s=3600x200[w];[b][w]vstack" -frames:v 1 calage.png
#K8 crête vraie
ffmpeg -nostats -i "$R" -af ebur128=peak=true -f null - 2>&1 | grep -A1 "True peak" | tail -1
```

Essai : K5 trouve l'image grise f270 de [Bold typographic motion showreel](https://prompt-motion.com/motiondsgnr-9dcfa6). Vidéo réencodée par un réseau : `n` de K4 à 0,01-0,02.

| # | Contrôle | Comment (image, commande, mesure) | Seuil | Si raté → |
| --- | --- | --- | --- | --- |
| A1 | Message | Brief, storyboard | Une phrase, lisible avant 30 % de la durée | Réécrire, avancer |
| A2 | Contenu réel | Chaque chiffre, nom, prix pointé au brief | 0 inventé ; textes définitifs dans le prompt | Fournir le texte |
| A3 | Liste noire | Storyboard contre sphère de points, mur de mots, HUD, étoiles | 0 figure sans raison écrite | Figure née du contenu |
| A4 | Une idée par plan | Storyboard minuté | ≤ 1 idée par plan, 1 message par 2 à 4 s ; durée ±0,5 s | Couper une idée |
| A5 | Grille musicale | Carte des temps | Tempo choisi avant de construire ; coupes sur round(n × images par temps) | Recaler |
| A6 | Système | Charte | 3 à 5 couleurs à rôle, ≤ 3 familles, 1 objet relais, 2 ou 3 types de transitions | Fermer la charte |
| B1 | Couleurs, polices | Code, ou correctif 07 du guide Otom (p. 14) | Tout dans la charte ; polices locales, `document.fonts.ready` | Remplacer l'intrus |
| B2 | Courbes | Ease de chaque déplacement | 0 linéaire (sauf tracés) ; ease-out entre, ease-in sort ; dépassement 2 à 20 % | Changer l'ease |
| B3 | Accents | Inventaire des tweens d'accent | ≤ 2 identiques, jamais 2 coupes de suite ; ≤ 2 glitchs ; flash sur 1 ou 2 temps forts | Varier, supprimer |
| C1 | Planche 4 i/s | K2, K4 ; avant rendu, `keepsMoving` (`maxStaticSec` = 1 temps) au `*.motion.json` | Aucun maintien > 1 temps sans micro-mouvement ; maintiens ≥ 0,4 s ≤ 15 % (seuil proposé) ; message ≥ T_min ; 1er élément fort < 0,5 s ; gel final ≤ 1,2 s | Dérive 2 à 3 % ou pulsation |
| C2 | Taille, contraste | K3 au milieu de chaque tenue : capitale en px ÷ H ; contraste par `check` | Texte lu ≥ 3 % H (32 px en 1080p), message ≥ 6 % H (≥ 90 px en 9:16) ; ≥ 4,5:1 ; décor ≤ 14 px, ≤ 25 % | Zoom sur l'info |
| C3 | Bords | `npx hyperframes check --at-transitions --snapshots` ; bande au pic des poussées | 0 glyphe coupé ; marge ≥ 6 % (9:16 : y 360 à 1420) ; ≥ 48 px texte / objet | Recadrer |
| C4 | Point focal | `npx hyperframes snapshot --at <milieu de chaque plan>` | 1 principal + 2 ambiances ; ≤ 7 mots (16:9) ; écart ≤ 1/3 d'écran, ou pont | Retirer une ambiance |
| C5 | Transitions | Bande de 6 im au milieu | Double image ≤ 4 im ; pas de gris boueux ; fondu long aux bornes d'acte | Objet relais |
| C6 | Rapides, zooms | Bande pleine résolution ; K3 au zoom maximal, crop 1:1 | Flou 8 à 16 sous-images au-delà de ≈ 40 px/im ; aucune source agrandie > 100 % | Flou, vectoriel |
| C7 | Luminance | K5 | 0 image isolée ; ≤ 3 flashs plein cadre par s (≤ 6 sauts > 50/255, détection proposée) | Supprimer, espacer |
| D1 | Calage | K6 ; K7 sur 3 impacts (début, milieu, fin) | ≥ 75 % à ±2 im (hasard : 26 à 44 %) ; image 1 à 3 im avant l'attaque, ≤ 100 ms, sans dérive | Recaler |
| D2 | Piste | K1, K8 | Piste (ou « muet » au brief) ; crête ≤ −1 dBTP | Limiteur |
| E1 | Fichier | K1 | 60 fps ; ≥ 1920×1080 ; H.264 yuv420p ; durée demandée | `render --fps 60` |
| E2 | Brief | Prompt et rendu côte à côte | 0 consigne non tenue, 0 faute, 0 curseur ou filigrane | Corriger |
| F1 | 3 secondes | Une lecture sans le son, regard neuf | Il redit le message | Simplifier |
| F2 | Téléphone | Vitesse normale, son coupé puis avec | 0 message raté ; chaque crête sonore a sa réponse visuelle | Grossir, tenir |
| F3 | Rejets | Rendu complet | 0 accent répété, zoom inutile ou pixelisé, mot coupé, mur de mots flous, flèche inutile, jargon neutre | Retirer |

**Le test des 3 secondes et les 4 règles anti-« template »**

Le test (guide Otom, p. 6) : montrer la vidéo une fois, sans le son, puis demander « qu'as-tu retenu ? ». S'il redit le message, ça marche ; s'il décrit un effet (« ça bougeait beaucoup »), simplifier. Regarder 3 fois : en entier, scène par scène, sur un téléphone (p. 6).

1. Un seul point focal à la fois (guide Otom, tel quel) : C4.
2. Le temps de lire, sans immobilité. Le guide fige le texte 1,5 s (p. 7) ; la Bible corrige : mot à mot ≈ 0,2 s par mot ; phrase 0,4 s + caractères / 15, plancher 1,0 s ; pendant la tenue, dérive de 2 à 3 % : C1.
3. Un accent par rôle. Le guide veut une seule couleur d'accent ; la Bible en permet plusieurs à rôle fixe, avec ≤ 1 mot accent par plan, 5 à 10 % de la surface : A6, B3.
4. De vrais contenus, jamais de faux texte (tel quel) : A2, E2.

Boucle de vérification (p. 15) : 3 tours au plus, livrer avec les points non résolus ; ses captures à 0, 20… 100 % deviennent K2 et des bandes de 0,2 s autour des actions clés.

Renvois : *Le maintien : temps de lecture ou temps mort* (chapitre 9), *Formats et zones sûres : vertical, carré, cinémascope* (chapitre 2), *Le flou de mouvement et les traînées* (chapitre 6), *La signature finale : logo, slogan, appel, sans temps mort* (chapitre 10).

**À cocher** (version imprimable)

- [ ] A1 Message en une phrase, lisible avant 30 %
- [ ] A2 0 contenu inventé
- [ ] A3 Storyboard relu contre la liste noire
- [ ] A4 ≤ 1 idée par plan, durée ±0,5 s
- [ ] A5 Tempo et grille choisis avant de construire
- [ ] A6 3 à 5 couleurs, ≤ 3 familles, 1 objet relais
- [ ] B1 Couleurs et polices dans la charte
- [ ] B2 0 déplacement linéaire
- [ ] B3 Accent identique ≤ 2 fois, ≤ 2 glitchs
- [ ] C1 Aucun maintien > 1 temps ; gel final ≤ 1,2 s
- [ ] C2 Texte ≥ 3 % H, message ≥ 6 % H, ≥ 4,5:1
- [ ] C3 0 glyphe coupé, marge ≥ 6 %
- [ ] C4 1 point focal, ≤ 7 mots
- [ ] C5 Double image ≤ 4 im
- [ ] C6 Flou au-delà de 40 px/im, 0 pixel
- [ ] C7 0 image isolée, ≤ 3 flashs/s
- [ ] D1 Calage ≥ 75 % à ±2 im, sans dérive
- [ ] D2 Crête ≤ −1 dBTP
- [ ] E1 60 fps, ≥ 1920×1080, H.264
- [ ] E2 Brief tenu, 0 faute
- [ ] F1 Test des 3 secondes réussi
- [ ] F2 Vu sur téléphone, 0 message raté
- [ ] F3 0 rejet de l'utilisateur
