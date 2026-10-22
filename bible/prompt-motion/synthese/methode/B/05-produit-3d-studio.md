## Guide du film produit 3D en studio (3D product film, studio lighting, hero object)

Un objet seul, à ses vraies cotes, sous une lumière de studio en trois points : il s'ouvre et se referme sur le temps, devant un public qui juge la finition. Ce guide tire de *La 3D et la lumière de cinéma* (chapitre 1) sa version studio claire, d'après l'expérience des écouteurs de F.

**Quand le choisir, quand l'éviter** : quand la matière et le geste mécanique sont le message. Sinon, non : la « 3D générique » est la première cause de casse de style des vidéos notées 4-5 (chapitre 1). Sans objet, un ou deux plans suffisent.

**Vidéos modèles**

| Vidéo | Ce qu'on lui prend | Mesure clé |
| --- | --- | --- |
| [3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155) (5/5) | la croissance mécanique | étude 60 fps de sahildesigner23 : extrusion en 1 temps exact, linéaire |
| [Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e) (5/5) | l'orbite qui fait lire les volumes | étude 60 fps de lukasersil : ≈ 50-60° en 41 im, power1.out, 1 im après le flash |
| [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a) (5/5) | la grue qui ramène au plat | étude 60 fps de levabashidze : ≈ 35 → 90° en 12 im sine.in, plat tenu 6 im |
| [Motion design showreel](https://prompt-motion.com/samuel-spitz-974923) | le mot qui nomme la matière | défauts : étiquettes à ≈ 1 % H, sphère chromée cliché |

**Brief (phase 1)** : style lent : 120 BPM (1 temps = 30 im, comme F), révélations de 0,6 à 0,9 s (F, permises ici seulement). Promo réseau : 12 à 17 s (*Règles d'or*, règle 21). Le prompt suit les blocs de F : GOAL, OUTPUT, TIME, MODEL, LOOK, SHOTS, CAMERA, BANNED, QA ; `STYLE.md` fournit LOOK et BANNED.

```text
SPEC 1920×1080 · 60 fps · 8 mesures à 120 BPM = 16 s = 960 im · son composé depuis timeline.js · boucle : option, 6 s = 360 im
MATIÈRE  cotes en cm (CAO ou photos des 6 faces) · matières : hex, rugosité, vernis · logo SVG · textes définitifs
INACCEPTABLE  proportion fausse · accent hors de sa pièce · halo, bloom, particules, fond bleu nuit · reflet qui brûle la face · texte < 3 % H
```

**Référence (phase 2)** : un seul événement, **l'ouverture** (B) : images de la pression, du dépassement maximal, du repos. Puis un reflet : largeur, vitesse, pixels touchés. Face, dessus et flanc : trois valeurs distinctes (F, tour 2).

**STYLE.md prérempli (phase 3)** : valeurs de F, à remplacer par celles du produit.

```text
JETONS
fond #F0EDE8 → #DEDAD3 aux coins, tramé · corps #F4F1EC (rugosité 0,38, vernis 0,35) · chrome métal 1, rugosité 0,05
accent #D97757 = la marque, sur une seule pièce · encre #1C1B1A
lumières : clé #FFF4E8 × 3,0 haut avant gauche · remplissage #E8EEF5 × 0,6 bas droite · contre #FFFFFF × 4,0 haut arrière droite
reflets : studio construit en code · ombre de contact 0,55 · vignette 8 % · grain 2 % à graine
polices : titres grotesque très grasse 14-18 % H (chapitre 1) · texte lu et fiche technique ≥ 3 % H
courbes : enter quint-out 0.22,1,0.36,1 · move quart-inOut 0.76,0,0.24,1 · exit expo-in 0.7,0,0.84,0, 40-50 % plus court
ressorts : couvercle ζ 0,6 (≈ 10 % de dépassement) · pièces ζ 0,7 · suite des tiges ζ 0,5 · texte ζ 1
RÈGLES PAR CLASSE
pièces : révélation 0,6-0,9 s, dépassement ≤ 10 %, anticipation tenue 3 im avant le temps
caméra : champ 30°, jamais garée ; orbite 45-60° au plus ; poussée expo-out 0,8 s sur un temps
titres : sans dépassement ; ancrés dans la scène, ou sur un plan à eux
HIÉRARCHIE
un héros par plan ; le second élément part 4 im après (F) ; ambiant : flottement 0,05 sur un sinus d'1 s
INTERDITS → À LA PLACE
dégradé violet ou bleu, lueur, bloom, néon, flare → studio clair, trois lumières chiffrées
particules décoratives → une bande de reflet qui traverse la matière
plateau tournant générique → orbite calée, coupée en angles sur les accords
fond sombre → fond clair chaud, tramé
texte HTML à plat sur la 3D → texte ancré, ou plan de titre à part
sphère chromée de démo → le vrai produit, à ses cotes
reflet-projecteur sur toute la face → la bande dans les reflets seulement (F)
GARDE-FOUS
cotes du produit · logo jamais redessiné · héros ≥ 10 % H · image figée < 15 %, carton final compris (chapitre 1)
```

**Timeline type (phase 4)** : 8 mesures à 120 BPM, une mesure = 120 im ; chaque geste clé sur un temps.

| Mesure (images) | Fonction | Plan de la bibliothèque C | Couture vers la suivante |
| --- | --- | --- | --- |
| 1 (f0-f119) | accroche : le reflet est sur la face à l'image 0 ; l'objet s'ouvre sur le temps 3 (f60) | C01 Accroche de la première seconde, C14 Le plan produit 3D en studio | les pièces montent sur le temps 4 (f90) |
| 2 (f120-f239) | poussée sur le 1er temps, tenue sur la matière | C03 La révélation du produit, C09 La tenue vivante | la caméra glisse encore |
| 3-4 (f240-f479) | une valeur réelle, en fiche | C06 La preuve chiffrée | plongée dans l'écran (C10 La couture par objet relais) |
| 5-6 (f480-f719) | l'usage : l'écran du produit, en HTML | C05 Le composant qui change d'état, C04 La démo au curseur | recul : l'écran redevient l'objet |
| 7 (f720-f839) | la promesse, un mot | C07 Le mot clé plein cadre | grue vers le plat |
| 8 (f840-f959) | tout se referme sur le temps ; logo | C11 La signature finale, ou C12 La boucle parfaite | fin sur le claquement |

**Coutures types**
- **Le reflet qui traverse** : bande de 2,4 unités en 0,5 s, linéaire ; la suivante repart à 5,5 s pour boucler (F).
- **La plongée dans l'objet** : power2.in de 21 im, l'écran passe de 18,5 % à 98 % de la largeur, la suite se pose sur la barre (étude 60 fps de sahildesigner23).
- **La grue vers le plat** : départ sur le temps, plat tenu 6 im, habillage au 1er temps de la mesure (chapitre 5).
- **Celle qu'on n'utilise pas** : l'orbite de 10 s sans événement, cliché de démo Three.js (chapitre 5).

**Bloc BRAND à échanger** (P)

```text
HERO     <l'objet> · cotes en cm · pièces mobiles : <couvercle, tiroir, écran…>
PRODUIT  matières <hex, rugosité, vernis> · accent <hex de marque> sur <la pièce>
RESULT   <l'état final : fermé, allumé, posé> · logo SVG · <une valeur réelle et sa source>
SET      studio clair <hex> · clé, remplissage, contre en couleur et intensité · moteur : Three.js ou Blender
```

**Le moteur** : Three.js dans HyperFrames pour un objet en primitives biseautées, lumière en code (F). Blender et Cycles pour le verre et les reflets multiples (P) : une suite d'images, que HyperFrames habille de texte, logo et son. Les deux lisent `timeline.js`.

**Portes spécifiques**
- **Porte 1** : le modèle (bloc MODEL de F) vérifié contre les cotes ; aucune pièce inventée (W).
- **Porte 3** : témoins à 0 ; 1,25 ; 2,9 et 4,9 s (1er tour de F) : l'objet se détache du fond, le chrome a des bandes sombres et claires. Blender : 18 images à demi-résolution d'abord (P).
- **Porte 4** : 8 images autour de chaque ressort ; anticipation au nombre exact d'images.
- **Porte 6** : boucle jouée trois fois ; l'image N−1 coule dans l'image 0 (F).

**Pièges du style**
1. **Le reflet-projecteur** : la bande change 178 864 pixels, toute la face s'allume (F, tour 2). Contrôle : rendu avec et sans la bande.
2. **Le chrome lu comme du plastique** : il n'a rien à refléter. Liquid Chrome (F) : studio à 0,1 de gris, un seul fond blanc de 140°, une ligne d'horizon fine. Contrôle : bandes sombres et claires sur le témoin.
3. **Le héros minuscule** : 2-4 % H pendant 50 s dans [Beat-synced bouncing 3D ball](https://prompt-motion.com/gorden-sun-041f56). Contrôle : planche, héros ≥ 10 % H.
4. **L'image de trop** : anticipation tenue 4 im au lieu de 3 (F, tour 4). Contrôle : les images 57 à 60 une par une.
5. **Les lumières dans le verre** : blocs blancs dans les surfaces brillantes (P). Contrôle : les cacher des rayons brillants (Blender : Object Properties › Visibility › Ray Visibility › Glossy).

**HyperFrames (GSAP)** : l'ouverture de F ; `renderAt(t)` dessine la scène depuis `rig`.

```js
const FPS = 60, BPM = 120, BEAT = 60 / BPM;               // 1 temps = 30 im
const at = (bar, beat = 0) => ((bar - 1) * 4 + beat) * BEAT;
const F = n => n / FPS;
// ressort fonction pure du temps (F) : zeta = amortissement, f en Hz
const spring = (t, zeta, f) => {
  const w = 2 * Math.PI * f, wd = w * Math.sqrt(1 - zeta * zeta);
  return 1 - Math.exp(-zeta * w * t) * (Math.cos(wd * t) + (zeta * w / wd) * Math.sin(wd * t));
};
const springEase = (dur, zeta, f) => p => spring(p * dur, zeta, f) / spring(dur, zeta, f);
const rig = { glint: -80, lid: 0, squash: 1, budR: 0, budL: 0, dist: 21 }; // lu par renderAt(t)
const tl = gsap.timeline({ paused: true, onUpdate: () => renderAt(tl.time()) });
tl.set(rig, { glint: -80, lid: 0, squash: 1, budR: 0, budL: 0, dist: 21 }, 0)
  .to(rig, { glint: 0, duration: 0.5, ease: "none" }, 0)               // accroche : le reflet balaie
  .to(rig, { dist: 20.2, duration: at(1, 4), ease: "none" }, 0)        // caméra jamais garée
  // anticipation 0,72 → 0,95 s : couvercle −1,5°, boîtier −2 %
  .to(rig, { lid: -1.5, squash: 0.98, duration: 0.23, ease: "power2.in" }, 0.72)
  // sur le temps (1,0 s) : 100°, ζ 0,6, posé à 1,4 s
  .to(rig, { lid: 100, squash: 1, duration: 0.4, ease: springEase(0.4, 0.6, 3) }, at(1, 2))
  // le héros monte, le second 4 im après, ζ 0,7
  .to(rig, { budR: 4, duration: 0.75, ease: springEase(0.75, 0.7, 2) }, at(1, 3))
  .to(rig, { budL: 4, duration: 0.75, ease: springEase(0.75, 0.7, 2) }, at(1, 3) + F(4))
  .to(rig, { dist: 16, duration: 0.8, ease: "expo.out" }, at(1, 4))   // poussée sur le temps 4
  .to(rig, { dist: 15.6, duration: 1.2, ease: "none" }, 2.8);         // dérive de la tenue
```

**À cocher**
- [ ] Cotes, matières et accent du vrai produit ; liste BANNED collée au prompt.
- [ ] Clé, remplissage, contre chiffrés ; ressorts en ζ ; révélations de 0,6 à 0,9 s ; texte sans dépassement.
- [ ] Caméra jamais garée ; image figée < 15 % ; héros ≥ 10 % H.
- [ ] Reflets vus avec et sans bande ; témoins vus avant le rendu complet.
