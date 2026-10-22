## Lettres en vol : chute, rebond, écrasement, trajectoire courbe (letter drop, bounce, squash and stretch, curved fly-in, whip-in with motion blur)

Les lettres ou les mots se déplacent réellement dans le cadre avant de se poser : chute avec gravité, rebond, écrasement au contact, arc avec rotation, glissé filé, éclats qui s'assemblent. Le mouvement physique donne du poids au mot : chez Kinetic type showreel, chaque lettre tombe en 4 images, s'écrase à 49 % de sa hauteur puis revient en ressort. Sans courbe d'amorti ni décalage entre lettres, le même geste paraît mécanique. Vue dans 49 vidéos, dont 49 notées 4 ou 5.

![Les lettres de SQUASH tombent une à une, floues et étirées, s'écrasent sur la ligne de base puis rebondissent](ILLUS:vol-1)

*[Kinetic type showreel](https://prompt-motion.com/zheke-38deff), 0:02.83 à 0:03.27 : les lettres tombent à 2 images d'écart, étirées et floues, s'écrasent au contact puis se stabilisent en ressort amorti.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Chute et écrasement en ressort | [Kinetic type showreel](https://prompt-motion.com/zheke-38deff), 0:02.85 | chute 4 im en sine.in, contact à scaleY 0,49 / scaleX 1,33, elastic.out(1, 0.5) sur 21 im, 2 im par lettre (étude 60 fps) |
| Chute en arc avec rotation | [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 0:03.02 | lettres inclinées −30°, 3 im d'écart, sine.out 9 im jusqu'à 15 % H sous leur place, retour sine.inOut 12 im (étude 60 fps) |
| Chute vive sans écrasement | [Type, form, space showreel](https://prompt-motion.com/web3wesley-7bb108), 0:01.83 | expo.out, 95 % du trajet en 4 im, 1 im par lettre, départ sur le 1er temps de la mesure 2 (étude 60 fps) |
| Rebond (bounce) | [Motion principles showreel](https://prompt-motion.com/chatgptastra-0d95c7), 0:03.73 | chute 3-4 im avec flou vertical, rebond de 15-20 % de la lettre, tout posé en 10 im, contacts sur la grosse caisse |
| Glissé filé avec flou | [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:02.35 | « IS » entre de +1 500 px en expo.out : 70 % du trajet en 3 im, flou proportionnel à la vitesse, coupe sur le temps (étude 60 fps) |
| Cascade montante qui pivote | [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:02.82 | 1,3 im par lettre en circ.out, gris 40 % vers encre, mot incliné −6° redressé en 14 im (étude 60 fps) |
| Rotation 3D par lettre | [Motion designer showreel](https://prompt-motion.com/himanshutwtxs-5f4b43), 0:04.67 | rotateY 450° (1,25 tour), dos bleu en miroir, 1,5 im d'écart, posé en 10 im (30 fps) en ease-out |
| Éclats qui s'assemblent | [Kinetic type showreel](https://prompt-motion.com/zheke-38deff), 0:08.48 | éclats convergents en power1.inOut sur 12 im, +1,7 % d'aire puis repos, verrouillage sur le demi-temps (+1 im) (étude 60 fps) |

![Les lettres de MOVE entrent par le haut, inclinées, descendent en arc, forment une arche puis se posent à plat](ILLUS:vol-2)

*[Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 0:03.02 à 0:03.42 : chaque lettre descend en courbe en se redressant ; le mot forme une arche, passe sous sa ligne puis remonte à plat avant le temps.*

**Règles de construction**

1. Deux registres. Lourd : chute en ease-in (sine.in ou power1.in, 4 à 6 im), vitesse maximale au contact, puis écrasement. Vif : expo.out ou power3.out, 70 à 95 % du trajet dans les 3-4 premières images, arrêt sans rebond.
2. Écrasement sur l'image de contact : hauteur 0,5 à 0,8, largeur 1,1 à 1,33, origine en bas au centre. Puis ressort : elastic.out(1, 0.5) sur 21 im (1,17 puis 0,93), ou dépassement de 17 à 39 % et rebond de 7 % en 15 im ([Motion designer showreel](https://prompt-motion.com/kangaroohere-b10f8d), 0:00.52).
3. Décalage court : 1 à 3 im par lettre à 60 fps (17 à 50 ms), mot entier posé en 10 à 20 im. Le guide Otom propose 80 à 150 ms entre éléments (guide Otom, p. 7) : valable pour des blocs, trop lent pour des lettres.
4. Calage : le contact clé tombe sur le temps (TYPE dans Type, form, space showreel, BOUNCE dans Motion principles showreel, logo de Jev engineering showreel sur l'impact sonore), ou le mot est à plat 1-2 im avant. Le ressort finit avant la coupe suivante (1 im avant chez Kinetic type showreel).
5. Arc plutôt que ligne droite : entrée inclinée de 15 à 30° qui se déroule à 0°, x et y sur des courbes différentes. La ligne de base ondule pendant l'arrivée, puis s'aplatit.
6. Flou directionnel proportionnel à la vitesse, sur les 2-3 premières images seulement ; étirement × 1,5 pendant une chute. Le guide Otom dit « pas de rebond » (guide Otom, p. 7) : nos mesures le contredisent, on garde un rebond court sur les mots clés.

**Verdict** : à reprendre. C'est la famille de tes trajectoires courbes avec écrasement à l'atterrissage et de tes rebonds ; réserve-la à 1 à 3 mots clés par vidéo et choisis un seul registre (lourd ou vif) pour toute la vidéo.

**Quand l'utiliser** : typo cinétique 1600 et showreel éditorial, pour un verbe ou un mot accent posé sur un temps fort ; promo SaaS pour le nom du produit, un chiffre ou le logo final. Elle sert l'accroche, le mot clé et la signature ; on fixe son registre au système de design (courbe signature), on la cale au découpage musical puis en construisant le plan. À éviter sur des phrases de plus de 3 mots, dans une démo d'interface calme et sur chaque mot de la vidéo.

**HyperFrames (GSAP)**

```js
// Chute lettre à lettre, écrasement et ressort (Kinetic type showreel), puis variante en arc (MOVE)
const FPS = 60, BEAT = 60 / 128;               // 128 BPM : 1 temps = 28,125 im
const at = b => b * BEAT, F = n => n / FPS;
const W = 1920, H = 1080;                      // taille de la composition
// un <span class="l"> en inline-block par lettre
const L = gsap.utils.toArray("#squash .l");
const first = at(6.5) - F(2 * 4);              // la 5e lettre touche sur le demi-temps
tl.set(L, { autoAlpha: 0, y: -0.7 * H, scaleY: 1.5, transformOrigin: "50% 100%" }, 0);
L.forEach((el, i) => {
  const hit = first + F(2 * i);                // 2 im par lettre
  tl.set(el, { autoAlpha: 1 }, hit - F(4))
    .to(el, { y: 0, duration: F(4), ease: "sine.in" }, hit - F(4))            // gravité, étirée
    .set(el, { scaleY: 0.49, scaleX: 1.33 }, hit)                             // image de contact
    .to(el, { scaleY: 1, scaleX: 1, duration: F(21), ease: "elastic.out(1, 0.5)" }, hit);
});
// Variante en arc : x et y découplés, rotation qui se déroule, passage sous la ligne
const M = gsap.utils.toArray("#move .l");
tl.set(M, { autoAlpha: 0 }, 0);
M.forEach((el, i) => {
  const t0 = at(8) + F(3 * i);                 // départ sur le temps 8, 3 im d'écart
  tl.set(el, { autoAlpha: 1, x: 0.19 * W, y: -0.36 * H, rotation: -30 }, t0)
    .to(el, { x: 0, rotation: 0, duration: F(14), ease: "power2.out" }, t0)
    .to(el, { y: 0.15 * H, duration: F(9), ease: "sine.out" }, t0)           // 15 % H sous sa place
    .to(el, { y: 0, duration: F(12), ease: "sine.inOut" }, t0 + F(9));       // remonte à plat
});
```

**After Effects**

- Une lettre par calque, Anchor Point (point d'ancrage) en bas au centre (Pan Behind Tool (outil Déplacement arrière)). Composition Markers (marqueurs de composition) sur chaque temps ; la 5e lettre touche sur le demi-temps.
- Position Y : 2 images clés à 4 im d'écart ; dans le Speed Graph (éditeur de graphe de vitesse), Influence (influence) 33 % au départ, arrivée à pleine vitesse (gravité). Scale (Échelle) 100/150 % pendant la chute.
- Scale à l'image de contact 133/49 %, puis Y 117 % (+5 im), 93 % (+10 im), 100 % (+15 im) en Easy Ease (Lissage de vitesse) ; décaler les calques de 2 im (Animation › Keyframe Assistant › Sequence Layers (Animation › Assistant d'image clé › Séquencer les calques)).
- Arc : Position avec poignée de Bézier tirée vers le haut, Rotation −30° → 0° en 14 im (Influence 75 % à l'arrivée), dépassement de 15 % H sous la ligne puis retour en 12 im.
- Glissé filé : Position X depuis +1 500 px, Influence 90 % à l'arrivée (70 % du trajet en 3 im) ; Motion Blur (Flou de mouvement) activé, ou Effect › Blur & Sharpen › Directional Blur (Effet › Flou et netteté › Flou directionnel) sur les 3 premières images.
