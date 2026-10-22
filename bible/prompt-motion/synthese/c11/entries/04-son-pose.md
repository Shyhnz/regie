## Le son posé, absent ou décalé (laid-on music, silent video, audio offset, tempo drift)

Le son qui ne pilote pas l'image prend trois formes : la vidéo muette, la musique de fond posée sans calage, la piste décalée de plus de 2 images. Dans les trois cas, les impacts tombent à plat et le montage paraît aléatoire. Les verdicts de `videos.json` sont nets : animée sur la musique, 129 vidéos, moyenne 4,06, 123 notées 4 ou 5 et 14 des 17 notées 5 ; musique posée, 12 vidéos, 3,33, aucune notée 5 ; sans musique, 33 vidéos, 3,52, dont 31 sans aucune piste. Le tic touche 104 vidéos, dont 71 notées 4 ou 5 (38 %) et 33 des 47 notées 1 à 3 (70 %) ; note moyenne 3,69 avec, 4,00 sans.

**Quand s'en servir** : à l'étape 4 (musique et grille), avant toute construction : tempo, mesures, temps forts. À l'étape 7, chaque geste s'écrit sur la grille. À l'étape 9, on mesure le calage sur le rendu ; à l'étape 10, l'amorce de l'encodeur et la crête. Une vidéo muette n'est acceptable que si le brief l'a décidé.

![Dix images consécutives d'un titre « JEV CLICKS. » avec, sous chacune, le niveau audio : l'onde du clic part à f111-f112, la crête sonore n'arrive qu'à f117](ILLUS:son-pose-1)

*[Browser automation skill launch](https://prompt-motion.com/hqmank-7c61f1), 0:01.83 à 0:01.98 : l'onde du clic part à 1,85-1,87 s ; la crête du son (−5 dBFS, barre bleue) arrive à 1,95 s, 5 im (83 ms) plus tard. Même retard sur les 6 sons ponctuels de la vidéo.*

**Symptôme mesuré**

- Musique posée : les gestes tombent sur la grille au niveau du hasard. 11 sur 29 à ±2 im d'un temps pour 33 % de hasard ([ocrX app launch video](https://prompt-motion.com/mehul4795-4a7007)) ; 5 sur 19 sous une voix off pour 26 % ([Dubz Up motion showreel](https://prompt-motion.com/devius-maximus-beab45)). Les modèles animés sur la musique : 16 sur 18 ([Claude motion designer showreel](https://prompt-motion.com/3xtihor-0f6911)), 19 sur 23 ([Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), noté 5), 27 sur 28 ([Kinetic type showreel](https://prompt-motion.com/zheke-38deff), noté 5).
- La cause : une timeline écrite en secondes rondes, sous une piste ajoutée après. Scène de 3,50 s pile, cartes toutes les 18 im contre un demi-temps de 19,05 im.
- Mesure faite pour cette entrée sur les 202 vidéos qui ont une piste : le premier échantillon audible n'arrive jamais avant 0,043 s (2 048 échantillons à 48 kHz, amorce d'encodeur probable) ; médiane 0,052 s chez les animées, 0,085 s chez leonkohli et ghinaiya-nirmal, où les analyses mesurent l'image 85 à 100 ms en avance. Crête vraie au-dessus de 0 dBFS : 34 vidéos sur 200 mesurables, dont 26 animées.

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Musique posée | [ocrX app launch video](https://prompt-motion.com/mehul4795-4a7007), 0:10.57 | double exposition puis coupe f329, 9 im après le temps ; 38 % des gestes sur un temps, le hasard |
| Piste ajoutée après | [Alan agent platform promo](https://prompt-motion.com/prasad-pilla-2c0cba), 0:00.78 | piste qui démarre à 0,78 s ; 8 gestes sur 38 calés (21 %, hasard 26 %) |
| Calage par coïncidence | [Motion design showreel](https://prompt-motion.com/samuel-spitz-974923), 0:02.50 | timeline en secondes rondes à 124 BPM : juste 2,5 s, puis dérive jusqu'à environ 10 im |
| Muette | [Bold Pilot SEO promo](https://prompt-motion.com/utopyaszx-1b2f94), 0:00 à 0:15 | aucune piste, alors qu'un geste toutes les 0,25 s appelait une musique calée |
| Son en retard | [Pixel art LLM history](https://prompt-motion.com/pluginplay-3d4006), 0:13.02 | flash d'impact f781 : son 6 im (0,10 s) après, 4 impacts sur 4 |
| Dérive de tempo | [Kinetic type and particle showreel](https://prompt-motion.com/m1n9-k7-ff9ab9), 0:01.94 à 0:13.22 | piste à 127,7 au lieu de 128 BPM : image en avance de 3-4 im, puis 7-8 im dans la rafale finale |
| Calage qui décroche | [Flowdrive motion showreel](https://prompt-motion.com/manuelogomigo-f33ca9), 0:05.30 | serré jusqu'à 5,3 s, puis 7 gestes sur 19, le hasard (noté 5 malgré tout) |

![Dix images consécutives : noir bleu nuit silencieux, puis coupe sur « Claude » en tranches ; la barre audio, vide pendant le noir, remonte à −2 dBFS deux à trois images après la coupe](ILLUS:son-pose-3)

*Le modèle, [Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:13.05 à 0:13.20 (noté 5, animé sur la musique) : le noir est posé sur un silence de la piste, la coupe sur « Claude » tombe sur le temps 28, l'attaque pleine 2 à 3 im plus tard. 8 chapitres = 8 mesures à 128 BPM ; 46 départs de geste sur 46 suivent une double-croche de moins d'une image.*

**Règles**

1. S'il y a du son, il pilote : tempo et grille se choisissent avant de construire, et chaque geste s'écrit en temps musicaux sur round(n × images par temps). Les modèles de calage viennent des seules vidéos animées sur la musique.
2. Muet = décision écrite au brief (boucle d'interface, sous-titres), jamais un oubli. 1 seule des 33 vidéos sans musique est notée 5.
3. Au moins 75 % des gestes clés à ±2 im de la grille utilisée (temps, demi-temps, ou double-croche si la piste y vit, comme fionntobin). À 30 fps, fenêtre de ±1 im : avec les demi-temps, ±2 im couvrent 67 % du cycle (leonkohli). Le hasard fait 26 à 44 % selon le tempo.
4. L'image devance l'attaque de 1 à 3 im à 60 fps (17 à 50 ms), jamais plus d'environ 100 ms. Un bruitage arrive 0 à 1 im après son contact, jamais 5 (hqmank).
5. Même écart au début, au milieu et à la fin : tempo exact dans le code de la piste, amorce de l'encodeur mesurée sur le fichier final, piste décalée si besoin.
6. Chaque crête de la musique a sa réponse visuelle, chaque impact majeur a son son. Contre-exemple : le crash de 14,0 s de [Tennis game launch video](https://prompt-motion.com/deifosv-04e4d3) passe sur un téléphone figé 2,4 s.

**Le guide Otom, corrigé.** Il place le son au niveau 3, « au montage », et dit que l'animation « n'en a pas besoin » (p. 4 et 13). La Bible corrige : une piste ajoutée après, c'est exactement la musique posée (3,33 de moyenne). On garde son exigence d'une vidéo lisible sans le son (p. 5 et 10) et son test des 3 secondes, son coupé (p. 6) : c'est un test de lecture, pas une raison de poser la musique après.

**Contrôle avant rendu**

| Quoi | Mesure sur le rendu | Seuil |
| --- | --- | --- |
| Piste | `ffprobe -v error -show_streams rendu.mp4` | un flux audio, même durée que la vidéo à 1 im près, ou « muet » écrit au brief |
| Amorce et crête | `silencedetect` et `ebur128` (commande ci-dessous) | premier son audible connu et compensé ; crête vraie ≤ −1 dBTP |
| Calage | gestes clés de la timeline contre la grille (extrait ci-dessous) | ≥ 75 % à ±2 im (±1 im à 30 fps) |
| Décalage | crête audio image par image autour de 3 impacts : début, milieu, fin | image 1 à 3 im avant l'attaque, ≤ 100 ms, même écart aux 3 endroits |
| Test muet puis sonore | une lecture son coupé, une avec le son | message compris sans le son ; aucune crête sans geste, aucun impact sans son |

```bash
ffmpeg -hide_banner -i rendu.mp4 -vn -af "silencedetect=n=-60dB:d=0.02,ebur128=peak=true" -f null - 2>&1 | grep -E "silence_end|Peak:"
ffmpeg -hide_banner -ss 1.80 -t 0.2 -i rendu.mp4 -vn -af "asetnsamples=n=800:p=0,astats=metadata=1:reset=1,ametadata=print:key=lavfi.astats.Overall.Peak_level:file=-" -f null - 2>/dev/null | paste - -   # crête par image (800 échantillons = 1 im à 48 kHz et 60 fps)
```

```js
// HyperFrames, timeline à plat : part des gestes clés sur la grille (tweens marqués data: "cle" ou "pose")
const FPS = 60, IPT = 60 * FPS / 128, PAS = IPT / 2;    // 28,125 im par temps ; grille au demi-temps
const cles = tl.getChildren(false, true, false).filter(t => t.data === "cle" || t.data === "pose");
const ok = cles.filter(t => {
  const f = (t.data === "pose" ? t.endTime() : t.startTime()) * FPS;
  return Math.abs(f - Math.round(Math.round(f / PAS) * PAS)) <= 2;
});
console.log(`${ok.length}/${cles.length} gestes clés à ±2 im de la grille`);  // viser ≥ 75 %
```

Dans After Effects, afficher la forme d'onde (touches L L sur le calque audio) et poser un marqueur de composition (Composition Marker) par temps ; chaque image clé d'impact se cale 1 à 3 images avant le marqueur.

Renvois au chapitre 9 : *La grille de tempo : une horloge, une scène par mesure*, *Couper en avance, atterrir sur le temps*, *Le bruitage à l'image près et la sonification*, *La musique calquée sur le montage* et *Le temps fort : montée, silence d'un temps, impact sur la révélation*.

**À cocher**

- [ ] Tempo et grille choisis avant la construction, ou « muet » écrit au brief
- [ ] ≥ 75 % des gestes clés à ±2 im de la grille (±1 im à 30 fps)
- [ ] Image 1 à 3 im avant l'attaque, ≤ 100 ms, même écart au début et à la fin
- [ ] Chaque crête sonore a sa réponse visuelle, chaque impact majeur son son
- [ ] Piste présente sur le fichier final, crête vraie ≤ −1 dBTP
