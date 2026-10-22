## Guide typo cinétique à accent unique, façon 1600 (kinetic typography, single accent, word-by-word on the beat)

Le mot est l'image : un mot plein cadre par temps, fond uni, un seul accent chaud, calé sur la musique ou la voix. C'est ton style cible (agence 1600), seule famille du corpus notée 4 ou 5 partout. Ce guide tire de *La typographie cinétique à accent unique, façon 1600* (chapitre 1) des décisions prêtes, phase par phase.

**Quand le choisir, quand l'éviter** : promo SaaS de 15 à 45 s, lancement, manifeste, public large (chapitre 1). À éviter pour une démo d'interface à lire en détail : prends le guide promo SaaS. Variantes du même squelette au chapitre 1 : crème et ressorts francs (*Les aplats pop*), nuit et mono (*La nuit électrique*).

**Vidéos modèles**

| Vidéo | Ce qu'on lui prend | Mesure clé |
| --- | --- | --- |
| [Kinetic type showreel](https://prompt-motion.com/zheke-38deff) (5/5) | la grille exacte, le point fil rouge, la rafale avant le drop | étude 60 fps de zheke : coupes sur round(n × 28,125), écart 0 im ; rafale 4 × 7 im puis 6 × 3-4 im |
| [Dub promo video](https://prompt-motion.com/steventey-0d20e4) (5/5) | l'avance sur la grosse caisse, un seul ressort, les compteurs | étude 60 fps de steventey : coupe 4 im avant le coup, image pleine 1 im avant ; ressort ζ ≈ 0,5 |
| [Synced lyrics motion video](https://prompt-motion.com/samaote-5e2fc2) (5/5) | le mot net sur sa syllabe, un chapitre par mesure | étude 60 fps de samaote : mots à ±2 im, flou 6-8 im avant, phrase finale immobile 34 im |
| [Chunku product promo](https://prompt-motion.com/reyzostyle-b55864) | slam sur le drop, second accent | orange = mot clé, vert = preuve (chapitre 1) |

**Brief (phase 1)** : durée médiane du style 20 s, 120 BPM dans 12 vidéos sur 25 (chapitre 1). Phrase à retenir : 15 mots au plus (W). Budget : un mot par temps, 40 mots au plus.

```text
SPEC 1920×1080 · 60 fps · 10 mesures à 120 BPM (1 temps = 30 im) = 20 s = 1 200 im · son : piste composée ou voix off · boucle : non
MATIÈRE  texte exact · voix + horodatages mot à mot, ou piste + BPM · polices du site · logo · 1-2 preuves réelles
INACCEPTABLE  un mot coupé par le bord · le même accent à chaque coupe · une image figée > 0,5 s · un message sous 64 px · un zoom pixelisé
```

**Référence (phase 2)** : on étudie une seule chose, **le calage d'un mot** (B). Sur trois coups : l'image où le mot devient lisible, celle de la grosse caisse, l'écart entre deux mots (≈ 6 im chez 1600, chapitre 1). Puis comment le mot clé prend l'accent, et ce qui relie deux phrases (point, virgule, logo).

**STYLE.md prérempli (phase 3)**

```text
JETONS
fond #0B0908 · texte #EDE8E3 · accent #FC833B = le mot clé, un par phrase · gris #818181 = mots déjà dits
lueur #3A1410 = halo derrière le mot · preuve #4ADE80 = second rôle, rare (chapitre 1)
polices : titres grotesque très grasse (Manrope pour NuOps) · accent serif italique · mono capitales 1-1,5 % H en étiquette
tailles : mot héros 20-40 % H, ≤ 90 % de la largeur · message ≥ 64 px · texte lu ≥ 3 % H
courbes : enter power3.out 10-18 im · exit power2.in à power4.in 6-15 im, finie sur la coupe · move power2.inOut 10-13 im
pop : ressort ζ ≈ 0,5, dépassement 12-15 %, repos 30 im · lettres elastic.out(1, 0.5) 21 im · compteur power3.out 33-140 im
RÈGLES PAR CLASSE
micro-interface : curseur power2.out 12 im, appui −8 % en 1 im, retour 6 im (steventey)
panneaux de preuve : entrée ≤ 0,5 s, cadrés seuls, sortie ease-in
caméra : poussée qui cadre le mot clé seul ; tenue +2 à +5 % ; coup de zoom ×1,33 en 7 im power2.in (zheke)
titres : un mot par temps ou par croche, traitement neuf à chaque mot, aucun dépassement sur un texte lu
mascotte = le point : saut d'un temps, power1.out 13 im puis power1.in 15 im, étiré 1,6:1, écrasé 1,9:1 (zheke)
HIÉRARCHIE
un héros par plan, le mot ; secondaires 100-200 ms après, à 50-70 % de la course (F) ; ambiant : la lueur, < 5 % (F)
INTERDITS → À LA PLACE
même accent à chaque coupe → chaque retour varie, 2 fois au plus
mot coupé par le bord → héros ≤ 90 % de la largeur, marge 6 %
zoom inutile ou pixelisé → poussée sur le mot clé, texte rendu à sa taille finale
mur de mots flous → un mot net par temps ; filigrane en contour, net
étoiles autour du mot → le mot fait ce qu'il dit (SQUASH s'écrase)
fondu enchaîné réflexe → coupe sèche sur le temps, ou couture écrite
glitch, stroboscope gratuits → un flash à une charnière, ≤ 3 par seconde (F)
carte de fin figée → gel final ≤ 1,2 s, un élément vivant
GARDE-FOUS
couleur d'accent de la marque · textes définitifs du brief · logo · un seul mot clé par phrase
```

Le rebond reste permis sur ce qui naît d'un point et sur un mot qui joue son sens (15 vidéos sur 25, chapitre 1).

**Timeline type (phase 4)** : 10 mesures à 120 BPM, une mesure = 120 im, drop sur le 1er temps de la mesure 5.

| Mesure (images) | Fonction | Plan de la bibliothèque C | Couture vers la suivante |
| --- | --- | --- | --- |
| 1 (f0-f119) | accroche : tension lisible avant 1 s | C01 Accroche de la première seconde | coupe sèche sur le temps |
| 2-3 (f120-f359) | le problème, un mot par temps | C02 Le problème montré, puis C07 Le mot clé plein cadre | plongée dans un glyphe, flash |
| 4 (f360-f479) | montée à la croche, ½ temps vide | C08 La rafale récapitulative (courte) | compression en point |
| 5 (f480-f599) | révélation sur le drop | C03 La révélation du produit | le point devient l'iris (C10 La couture par objet relais) |
| 6-7 (f600-f839) | preuves : un chiffre, un état | C06 La preuve chiffrée, C05 Le composant qui change d'état | filé |
| 8 (f840-f959) | rappel en rafale | C08 La rafale récapitulative | volet plein |
| 9 (f960-f1079) | la promesse | C07 Le mot clé plein cadre, C09 La tenue vivante | le point revient (C10) |
| 10 (f1080-f1199) | marque, slogan, appel | C11 La signature finale, ou C12 La boucle parfaite | fin sur le son |

Une seule rafale longue par film (*L'accélération par subdivisions et la rafale*, chapitre 9).

**Coutures types**
- **Coupe sèche sur le temps**, entre deux mots : image pleine 1 im avant, coupe 4 im avant la grosse caisse (étude 60 fps de steventey).
- **Plongée dans un glyphe, flash** : zoom power4.in 18 im jusqu'au flash, 1-2 im avant le 1er temps, puis recul power3.out 36-46 im (étude 60 fps de samaote).
- **Compression en point, puis iris** : trait puis point en power2.in 10 im, éclair d'1 im, éclosion en ressort (steventey) ; ou iris circ.in 14 im fini sur le 1er temps (samaote).
- **Filé** : sortie power3.in 12 im, entrée power3.out 11 im, vitesse maximale sur l'image du raccord (steventey).
- **Le point relais** : il saute un temps exact et devient le point du mot suivant (zheke).
- **Celle qu'on n'utilise pas** : le fondu enchaîné, 16 % des vidéos du style contre 29 % du corpus (chapitre 1), et le glitch.

**Bloc BRAND à échanger** (P)

```text
HERO    <la phrase à retenir, 15 mots au plus> · mot clé en accent : <mot>
APP     <produit> · preuve 1 : <chiffre réel + source> · preuve 2 : <écran réel, fichier>
RESULT  <l'état final ou le chiffre qui conclut>
SET     accent <hex de marque> · polices <titres> / <mono> (fichiers locaux) · <voix.wav + horodatages> ou <piste.wav, BPM>
```

**Portes spécifiques**
- **Porte 1** : piste ou voix fournie ; BPM mesuré, ou horodatages mot à mot de la voix.
- **Porte 2** : une ligne de `SHOTLIST.md` par mot (temps, image pleine, traitement) ; aucun traitement plus de 2 fois.
- **Porte 3** : rendre le mot d'accroche posé, le drop, le mot clé plein cadre (bords), 8 images autour d'un coup : image pleine 1 im avant.
- **Porte 5** : ≥ 75 % des coupes à ±2 im (*Étape 9 · Le contrôle qualité*, chapitre 12) ; sur voix, le mot net 2 à 4 im avant sa syllabe (chapitre 9).
- **Porte 6** : musique baissée d'environ 5 dB sous la voix (*Le calage sur la voix off*, chapitre 9).

**Pièges du style**
1. **Texte trop petit** : relevé dans 17 vidéos sur 25, dont steventey (chapitre 1). Contrôle : planche à 360 px de large.
2. **Temps mort** : image figée médiane 29 % (chapitre 1). Contrôle : `freezedetect`, aucun gel > 0,5 s sans poussée.
3. **Rafale illisible** : un mot neuf demande 15 im, 3-4 im ne portent qu'une forme (chapitre 9). Contrôle : la rafale image par image.
4. **Mot hors syllabe** : « love » 5,4 im trop tôt chez samaote (étude 60 fps). Contrôle : 8 images autour de chaque mot clé.

**HyperFrames (GSAP)** : squelette de `timeline.js`.

```js
const FPS = 60, BPM = 120, BEAT = 60 / BPM;            // 1 temps = 30 im
const at = (bar, beat = 0) => ((bar - 1) * 4 + beat) * BEAT;
const F = n => n / FPS, LEAD = F(1);                   // image pleine 1 im avant le temps
const words = [ { id: "#w1", bar: 1, beat: 0 }, { id: "#w2", bar: 1, beat: 1 } ]; // SHOTLIST
const tl = gsap.timeline({ paused: true });
words.forEach(({ id, bar, beat }) => {
  const t = at(bar, beat) - LEAD - F(10);              // entrée finie sur l'image pleine
  tl.set(id, { autoAlpha: 1, yPercent: 60 }, t)
    .to(id, { yPercent: 0, duration: F(10), ease: "power3.out" }, t)
    .to(id, { scale: 1.03, duration: BEAT, ease: "none" }, t + F(10)) // jamais figé
    .to(id, { yPercent: -40, autoAlpha: 0, duration: F(8), ease: "power3.in" },
      at(bar, beat + 1) - LEAD - F(8));                // sortie finie sur la coupe
});
// mot clé sur le drop (mesure 5) : slam 1,3 -> 1 en 10 im, puis poussée lente
tl.set("#key", { autoAlpha: 1 }, at(5) - LEAD)
  .fromTo("#key", { scale: 1.3 }, { scale: 1, duration: F(10), ease: "expo.out",
    immediateRender: false }, at(5) - LEAD)
  .to("#key", { scale: 1.04, duration: at(6) - at(5) - F(10), ease: "none" }, at(5) + F(9));
```

**À cocher**
- [ ] Grille fixée avant d'animer : BPM mesuré ou horodatages de la voix.
- [ ] Un mot par temps ; un mot clé par phrase en accent ; chaque traitement 2 fois au plus.
- [ ] Héros à 20-40 % H, rien de coupé par le bord ; planche à 360 px lue.
- [ ] Aucun gel > 0,5 s sans poussée ; gel final ≤ 1,2 s.
- [ ] Image pleine 1 im avant chaque temps ; ≥ 75 % des coupes à ±2 im.
