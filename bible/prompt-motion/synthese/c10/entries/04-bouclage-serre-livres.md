## Le bouclage : serre-livres, rappel et boucle parfaite (bookend, callback, seamless loop)

La fin rejoue l'ouverture : l'objet du début revient transformé, une réplique plantée est payée, ou la dernière image rejoint la première pour boucler sans couture. Le spectateur reconnaît le premier plan, donc il sent que le film est fini ; en lecture automatique, il ne voit pas où la vidéo recommence. Les meilleures boucles mesurées finissent à moins de 1/255 d'écart moyen avec l'image 0. Vue dans 65 vidéos, dont 57 notées 4 ou 5.

![Le carton CLAUDE et son anneau rétrécissent vers le centre avec un flou radial jusqu'à ne laisser qu'un point rouge](ILLUS:bouclage-serre-livres-1)

*[Motion design principles reel](https://prompt-motion.com/tolgayhickiran-e90799), 0:14.60 à 0:14.93 : le carton final se replie vers le centre en 5 im et laisse le point rouge de la première image.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Retour exact à l'image 0, couture tenue | [Second brain service promo](https://prompt-motion.com/theviableedge-9065be), 0:14.30 | 4 carrés reviennent au centre en 34 im power2.inOut ; 8 + 10 im immobiles à la couture ; écart 0,13/255 (étude 60 fps) |
| Geste qui traverse la couture | [Kinetic type showreel](https://prompt-motion.com/zheke-38deff), 0:14.65 | point envolé f879, posé écrasé f893 (quart de temps 31,75) ; l'écrasement continue f0-f2 ; 900 im = 8 mesures (étude 60 fps) |
| Iris qui se referme sur le point d'ouverture | [Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e), 0:14.73 | disque crème 97 → 2,5 % H en 8 im power1.in, puis 8 im de point seul sur noir = f0 (étude 60 fps) |
| Texte qui rétrécit en point | [Motion design principles reel](https://prompt-motion.com/tolgayhickiran-e90799), 0:14.79 | échelle 100 → 28 % en 5 im (30 fps), ease-in + flou radial, départ sur le demi-temps ; point de 0,6 % H = f0 |
| Balle d'ouverture → point final du nom | [Claude motion design showreel](https://prompt-motion.com/rendesr-86be44), 0:13.77 | chute 18 im en ease-in, étirée 1:1,6 puis écrasée 1,6:1 à l'impact, 1,4 im avant le temps |
| Logo serre-livres | [Engraving-style Claude ad](https://prompt-motion.com/lexnlin-038035), 0:00.00 | verrouillage tenu 20 im, fuite en 6 im power1.in ; fermeture sur le même verrouillage tenu 71 im (étude 60 fps) |
| Le chiffre planté revient résolu | [AIsa API key promo](https://prompt-motion.com/0xfemyn-e114d3), 0:06.40 | libellé « API KEYS TO MANAGE: 1 » (≈ 1 % H) répond au compteur à 5 000 de la scène problème |
| Même geste inversé, même place | [Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), 0:24.03 | zoom ×9 d'ouverture (81 im) rejoué à l'envers en 56 im, sine.inOut sur log(échelle) ; point final à x 71 %, y 57 %, comme le curseur de f0 (étude 60 fps) |

![Le titre sort par le haut, les quatre carrés du logo glissent jusqu'au centre et s'y arrêtent, comme sur l'image 0](ILLUS:bouclage-serre-livres-2)

*[Second brain service promo](https://prompt-motion.com/theviableedge-9065be), 0:14.17 à 0:14.98 : le titre sort en power1.in, les carrés rejoignent la position exacte de l'image 0 et s'immobilisent.*

**Règles de construction**

1. Planter l'élément seul à l'écran dans la première seconde, tenu 12 à 30 im : 12 im chez Second brain, 20 im chez Engraving-style, 30 im (un temps) chez Full Stop.
2. Revenir sur l'état exact : position, taille, couleur. Écart final mesuré 0,13 à 0,9/255. Contre-exemples : bouton 10 px trop bas qui bouge encore de 3 px/im (Morphing UI states loop), 0,5 s de noir initial qui casse la boucle (Kinetic type motion showreel).
3. Courbe du retour : power2.inOut sur ≈ 34 im pour traverser le cadre ; power1.in ou power2.in sur 5 à 8 im pour se refermer en point ; sinon le geste d'ouverture inversé.
4. Couture : soit 8 à 10 im immobiles de chaque côté, soit un geste qui la traverse sans s'arrêter. Rendre les images 0 à N-1 : l'image qui suivrait la dernière est la première. Le guide demande « la dernière image identique à la première » (guide Otom, p. 14) ; avec un geste qui traverse, cette image en double gèle chaque tour.
5. Durée = nombre entier de mesures, pour que la musique boucle en phase : 900 im = 8 mesures à 128 BPM (Kinetic type, Motion techniques), 16 s = 8 mesures à 120 BPM avec coupe nette (Website analyzer product promo).
6. Serre-livres sans boucle : le retour change une chose, qui dit la résolution. Phare rallumé au même cadrage (Lighthouse keeper silent short), compteur 5 000 → 1 (AIsa).

**Verdict** : à reprendre. C'est la fin la plus sûre d'un reel ou d'un post réseau, et la famille de ton « texte qui rétrécit en point » ; garde un seul élément rappelé, jamais tout le premier plan.

**Quand l'utiliser** : en typo cinétique 1600 et en showreel, la balle ou le point d'ouverture devient le point final du nom ; en promo SaaS, le logo ou le chiffre du problème revient résolu sur la carte finale. On décide le mode de lecture (boucle ou lecture unique) au brief (guide Otom, p. 5), l'élément planté au script (étape 2), la couture au découpage (étape 5). À éviter si l'ouverture était faible ou si l'élément n'a été vu qu'une demi-seconde.

**HyperFrames (GSAP)**

```js
// Boucle de 8 mesures : la carte finale se replie en point et rend l'état exact de l'image 0
const FPS = 60;
const BEAT = 60 / 128;                       // 128 BPM : 1 temps = 28,125 im
const at = b => b * BEAT;
const fr = n => n / FPS;
const DUR = at(32);                          // 900 im : rendre les images 0 à 899, jamais 900
// L'état de l'image 0 est une fonction : appliqué au début, rejoué à la fin
const seed = t => {
  tl.set("#dot", { scale: 1, autoAlpha: 1, x: 0, y: 0 }, t)   // point rouge seul, centré
    .set("#endcard", { autoAlpha: 0, scale: 1, filter: "blur(0px)" }, t);
};
seed(0);
tl.to("#dot", { scale: 0.4, duration: fr(4), ease: "power2.out" }, fr(10))  // 10 im tenues, puis élan
  .set("#dot", { autoAlpha: 0 }, at(1));     // il passe le relais à la scène 1 sur le temps 1
// … le film …
const fold = at(31.5);                       // repli sur le demi-temps 31,5
tl.set("#endcard", { autoAlpha: 1 }, at(29))
  .to("#endcard", { scale: 0.28, filter: "blur(8px)",
                    duration: fr(10), ease: "power2.in" }, fold)
  .set("#endcard", { autoAlpha: 0 }, fold + fr(10));
seed(fold + fr(10));                         // le point de l'image 0 reprend sa place exacte
tl.set({}, {}, DUR);                         // la timeline dure 15 s pile
// Contrôle : comparer seek(0) et seek(DUR) sur une capture ; écart attendu < 1/255.
```

**After Effects**

- Composition › Composition Settings (Composition › Paramètres de composition) : durée 15:00 à 60 i/s, soit 8 mesures à 128 BPM. Poser un marqueur de composition sur chaque mesure.
- Copier les images clés de l'image 0 (Position, Scale (Échelle), Opacity (Opacité)) et les coller au point d'arrivée : l'état final est le même, au pixel près.
- Repli : Scale de 100 à 28 % en 10 im, influence d'entrée de 85 % dans le Graph Editor (éditeur de graphes), mode Speed Graph (graphe de vitesse). Ajouter Effect › Blur & Sharpen › CC Radial Fast Blur (Effet › Flou et netteté › CC Radial Fast Blur) sur les mêmes images.
- Couture : allonger la composition d'une image, poser la clé identique à l'image 0 sur cette image 900, puis rendre la zone de travail 0 à 899 (Render Settings › Time Span › Work Area Only (Paramètres de rendu › Durée › Zone de travail uniquement)).
- Pour un élément qui tourne en continu à travers la couture, expression `loopOut("cycle")` sur sa propriété animée.
