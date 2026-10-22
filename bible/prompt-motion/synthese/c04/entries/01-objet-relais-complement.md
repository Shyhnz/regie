**Compléments tirés des 233 vidéos**

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Point qui saute d'un mot à l'autre | [Kinetic type showreel](https://prompt-motion.com/zheke-38deff), 0:00.47 | saut de 28 im = 1 temps : montée power1.out 13 im, chute power1.in 15 im, x linéaire ; devient la virgule de « 5.5 » (étude 60 fps) |
| Objet qui devient le point final | [Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), 0:23.07 | globe 29,6 → 6,4 % L en 54 im (power2.inOut), puis 11,9 → 1,45 % H en 56 im ; la phrase se tape jusqu'à lui (étude 60 fps) |
| Persistance à travers la coupe franche | [Claude self-intro motion graphic](https://prompt-motion.com/1littlecoder-9fef89), 0:02.00 | fond, couleurs et typo changent en 1 im ; le point orange garde sa place à 2 % H près, trois fois de suite |
| Sujet de la phrase → en-tête fixe | [Kinetic type showreel](https://prompt-motion.com/zheke-38deff), 0:02.60 | « I CAN » de 48 à 11 % H et de 90 à 55 % L en 7 im (ease-in-out), flou vertical à mi-course, puis tenu 8,4 s en tête |
| Ligne relais entre trois chapitres | [Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:05.50 | graphique écrasé sur sa ligne en 5 im (power1.in), 2 im de ligne seule, la ligne devient la piste, puis 12 tirets → grille 12 × 8 (étude 60 fps) |
| Montant qui voyage, le décor bouge autour | [Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4), 0:06.52 | le chiffre reste à x 47-60 %, ×2 puis ×0,6 ; le panneau sort de 40 % L en 10 im ; seul l'atterrissage tombe sur l'attaque |
| Pastille → carte (morph de conteneur) | [Website analyzer product promo](https://prompt-motion.com/en-ra-81c6dd), 0:02.50 | hauteur 12 → 43 % H en 10 im (≈ power3.out), sombre → blanc par les gris ; ancien texte flou en 2-3 im, nouveau net à 15 im |
| Objet 3D aplati en logo 2D | [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:05.40 | octaèdre face caméra, ombrage → aplat rouge en 10 im (power2.out), tenu 7 im, puis coupe sur le temps (étude 60 fps) |
| Rafale en raccord de position | [Engraving-style Claude ad](https://prompt-motion.com/lexnlin-038035), 0:00.75 | 9 images radiales, même centre, même anneau de 87 % L ; plans de 2 à 7 im (médiane 4 im), lisibles |
| Fenêtre → puce → marqueur de frise | [Second brain service promo](https://prompt-motion.com/theviableedge-9065be), 0:11.43 | puce 32,6 → 11,7 % L en 10 im, ease-in jusqu'à l'impact, vire du noir au vert juste avant d'arriver |

**Règles nouvelles ou corrigées**

1. Corrige la règle 3 pour un objet qui saute : x linéaire et y en power1.out puis power1.in donnent une vraie parabole. Le saut dure un temps exact (28 im à 128 BPM) ou un demi-temps (14 im). Étirement 1,6:1 au décollage, écrasement 1,9:1 à l'impact, rond en 4 im.
2. Complète la règle 5 : pour un geste ease-in-out, caler la mi-course (pic de vitesse) sur le temps, pas le départ. Départ = temps − durée / 2 ; c'est le cas de 9 gestes sur 10 dans [Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c). Pour un saut ou une chute, caler l'impact.
3. Quand le relais change d'échelle d'un facteur 5 à 20, interpoler l'échelle en logarithme (sine.inOut sur log(échelle)) ; sinon il semble s'arrêter puis plonger. Puis le laisser seul et immobile 2 à 8 im avant la suite, le temps que l'œil le retrouve.
4. Coupe franche avec relais : garder position et taille à 2 % du cadre près, tout le reste peut changer (fond, couleur, typo, même 3D → aplat). La coupe tombe sur le temps et devient invisible.
