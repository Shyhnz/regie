## La montée sous masque (masked rise, baseline mask reveal, staggered line / word / letter rise)

Le texte monte de derrière une ligne invisible, le plus souvent sa propre ligne de base, qui le coupe net. Il apparaît déjà à sa place, sans flou ni fondu, et l'ease-out le rend lisible dès la 2e image. Dans les vidéos notées 5, un mot plein cadre se pose en 4 à 7 images à 60 fps, avec 1 image de décalage entre les lettres. Vue dans 99 vidéos, dont 91 notées 4 ou 5.

![Six images : un fond cobalt vide, puis les lettres E, V, E, R, Y sortent une à une du bas du cadre jusqu'à former EVERY plein cadre](ILLUS:masque-1)

*[Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:02.00 à 0:02.17 : les cinq lettres de « EVERY » sortent du bas du cadre à 1 image d'écart ; le mot est complet en 8 images.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Lettre à lettre plein cadre | [Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:02.00 | Étude 60 fps : power3.out 7 im, 1 im par lettre, 40 % du trajet dès la 1re image ; 1re image +0,5 im après la double-croche |
| Marque lettre à lettre, plus lente | [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:13.15 | Étude 60 fps : power4.out 17 im, 2,2 im par lettre ; le mot glisse de 12,7 % L (sine.inOut 20 im) pour rester centré |
| Titre mot à mot | [Second brain service promo](https://prompt-motion.com/theviableedge-9065be), 0:00.58 | Étude 60 fps : chaque mot power3.out 21 im, course 10 % H ; écarts 5, 6, 7 puis 2 im (sans musique) |
| Lignes empilées pleine largeur | [Kinetic type showreel](https://prompt-motion.com/zheke-38deff), 0:01.88 | Étude 60 fps : 4 lignes à 7 im d'écart (1/4 de temps), 10 à 12 im chacune, power3.out ; 1re ligne sur le temps 4 |
| Lettres qui pivotent en montant | [Kinetic type and particle showreel](https://prompt-motion.com/m1n9-k7-ff9ab9), 0:01.90 | −10° → 0°, 9 im par lettre, 2 im d'écart ; départ sur le 1er temps de la mesure 2 |
| Filet visible qui sert de masque | [Synced lyrics motion video](https://prompt-motion.com/samaote-5e2fc2), 0:00.05 | Étude 60 fps : horizon tracé depuis le centre en 49 im ; mots en circ.out 19 im, course 12,6 % H, sur l'attaque vocale |
| Montée avec dépassement | [Claude motion reel](https://prompt-motion.com/jasonzhou1993-8595e0), 0:02.82 | back.out de paramètre 2,2 : chaque lettre dépasse de 10 à 15 % de sa hauteur ; 2,5 im d'écart, mot posé sur le temps |
| Sortie par le même masque | [Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:03.58 | Étude 60 fps : « written. » coule sous sa ligne en 4 im sine.in (6 % du trajet à la 1re image), fini 1 im après la double-croche |

![Six images sur fond noir : WATCH, WHAT, I CAN en orange et DO. montent l'une après l'autre pendant qu'un point orange saute et se pose comme point final de DO.](ILLUS:masque-2)

*[Kinetic type showreel](https://prompt-motion.com/zheke-38deff), 0:01.87 à 0:02.45 : quatre lignes pleine largeur montent à 1/4 de temps d'écart ; le point orange devient le point de « DO. » sur le temps suivant.*

**Règles de construction**

1. Deux vitesses d'arrivée. Mot plein cadre qui claque : 4 à 7 im à 60 fps, en power3.out ou expo.out, 40 % du trajet dès la 1re image (fionntobin, tequilafunks, « EASE » de roundtablespace en 9 im). Titre posé ou marque : 14 à 21 im en power3.out ou power4.out (levabashidze 17, sudo-kiran 16, steventey 18, theviableedge 21).
2. Le décalage dépend de l'unité : 1 à 1,5 im par lettre sur un mot plein cadre, 2 à 2,5 im pour une marque, 3 à 5 im par mot, 7 im par ligne (1/4 de temps à 128 BPM). Le guide Otom propose 120 ms entre les mots (guide Otom, p. 13), soit 7 im : la valeur mesurée pour les lignes de zheke.
3. Course : toute la hauteur de l'unité pour un mot géant ; 10 à 15 % de la hauteur du cadre suffisent pour un titre de 6 à 8 % H. Pas de fondu en plus : le masque fait seul l'apparition (madebyjmayala). Pas de dépassement, sauf effet voulu.
4. La 1re image visible tombe 0 à 1 im après le temps (fionntobin +0,5, tequilafunks +1, zheke 0). Le mot entier tient dans une croche ou moins : 8 im pour « EVERY », 17 im pour « One idea. » chez miskinho.
5. La sortie rejoue le geste dans le même masque, en ease-in (sine.in, power2.in) de 4 à 6 im. Elle finit 1 à 2 im avant le coup suivant (hqmank, palashbagchi, zheke).
6. Varier : le décalage se comprime quand le montage accélère (2 im sur les plans de 0,5 s, 1 im sur ceux de 0,25 s chez crazyalphaaa). L'ordre peut partir d'un impact, de droite à gauche (himanshutwtxs). Une vidéo qui fait entrer tous ses titres à l'identique est jugée « à adapter » (thilina-a).

**Verdict** : à reprendre. C'est l'entrée de texte par défaut de la typo cinétique : nette, lisible dès la 2e image, sans le flou que tu rejettes. Alterne-la avec le claquement d'échelle ou la chute, sinon le même accent revient sur chaque mot.

**Quand l'utiliser** : en typo cinétique 1600, en promo SaaS (titres de fonction), en showreel éditorial et en explainer. Elle sert la présentation, les titres de chapitre et la signature (marque lettre à lettre), et l'accroche quand le mot est plein cadre. On fixe sa courbe et son décalage au système de design, une fois pour tout le film, puis on la place à la construction du plan. À éviter sur du texte courant de plus de deux lignes, et sur chaque mot d'une rafale à la croche.

**HyperFrames (GSAP)**

```js
// Montée sous masque : mot plein cadre lettre à lettre, titre mot à mot, puis sortie
// HTML : <span class="mask"><span class="ch">E</span></span>… (une .mask par unité)
// CSS : .mask { display:inline-block; overflow:hidden; vertical-align:bottom; }
const FPS = 60;
const BEAT = 60 / 128;                 // 128 BPM : 1 temps = 28,125 im
const at = b => b * BEAT;
const F = n => n / FPS;                // images → secondes

// 1. Tout est caché sous sa ligne dès l'image 0 (pas de fromTo nu)
tl.set("#every .ch, #title .word", { yPercent: 100 }, 0);

// 2. Double-croche 4,25 : « EVERY », 1 im par lettre, 7 im power3.out
tl.to("#every .ch", {
  yPercent: 0, duration: F(7), ease: "power3.out", stagger: F(1)
}, at(4.25));

// 3. Temps 6 : titre mot à mot, 5 im d'écart, 18 im power3.out
tl.to("#title .word", {
  yPercent: 0, duration: F(18), ease: "power3.out", stagger: F(5)
}, at(6));

// 4. Sortie : les 4 mots coulent sous leur ligne (sine.in 5 im, 2 im d'écart),
//    le dernier disparaît 1 im avant le temps 8
const OUT = F(5), GAP = F(2), N = 4;
tl.to("#title .word", {
  yPercent: 100, duration: OUT, ease: "sine.in", stagger: GAP
}, at(8) - F(1) - OUT - GAP * (N - 1));
```

**After Effects**

- Le masque : un Shape Layer (calque de forme) Rectangle dont le bord bas suit la ligne de base, placé au-dessus du texte ; dans la colonne Track Matte (Cache) du calque de texte, choisir Alpha Matte (Cache alpha). Pour un filet visible (horizon, soulignement), garder ce filet comme bord du rectangle.
- Mots et lignes : un calque par unité, Position Y de +100 % de la hauteur de l'unité à 0. Deux images clés à 18 im (titre) ou 7 im (mot plein cadre). Dans le Speed Graph (éditeur de graphique de vitesse) : clé de départ à vitesse maximale, Influence (influence) entrante d'environ 80 % à l'arrivée (≈ power3.out).
- Décalage : sélectionner les calques dans l'ordre, puis Animation › Keyframe Assistant › Sequence Layers (Animation › Assistant d'image clé › Séquencer les calques), Overlap (chevauchement) réglé pour 5 im d'écart entre mots ou 7 im entre lignes.
- Lettres : Animate › Position (Animer › Position) (Y = hauteur de capitale) sur le calque de texte. Dans Range Selector › Advanced (Sélecteur de plage › Avancé) : Based On Characters (Basé sur Caractères), Shape Square (Forme Carré), Smoothness (Lissage) 100 %. Offset (Décalage) de 0 à 100 % sur 11 im pour « EVERY » (7 im + 4 × 1 im). Pour une marque de 5 à 6 lettres, un calque par lettre donne les durées exactes.
- Sortie : mêmes calques, Position vers +100 % en 5 im, vitesse nulle au départ et maximale à l'arrivée (≈ sine.in), dernière clé posée 1 im avant le marqueur du temps suivant.
