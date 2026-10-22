## Le tracé qui se dessine : plume, connecteur, logo au trait (stroke draw-on, trim path, write-on, path reveal led by a pen head)

Un trait se révèle le long de son chemin : connecteur, anneau autour d'un détail, schéma ou logo. Souvent une tête visible (point, comète, étincelle) le mène, puis reste comme ponctuation. Il conduit l'œil où il faut et dit « ceci est relié » ou « ceci compte ». Dans [Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), le point trace un cercle en 57 im et passe à mi-tour pile sur le temps. Vue dans 84 vidéos, dont 71 notées 4 ou 5.

![Huit images sur papier crème : le point noir, au bout d'une ligne, trace un cercle complet autour d'elle](ILLUS:trace-1)

*[Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), 0:04.47 à 0:05.53 : le point sert de plume et trace le cercle dont la ligne est le diamètre ; le bout gauche tombe sur le temps.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Point-plume : ligne puis cercle | [Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), 0:04.52 | Étude 60 fps : allers-retours de 22 à 46 im en power1.inOut, cercle de 57 im en power2.inOut, 180° pile sur le temps |
| Ligne d'origine qui pousse du centre | [Kinetic type showreel](https://prompt-motion.com/itsuki-dev-10942d), 0:00.48 | ligne rouge de 2 px, 30 → 100 % L en 12 im, ease-out, départ sur le premier temps (−0,2 im) |
| Le point s'élance, la ligne devient les rails | [Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e), 0:01.10 | Étude 60 fps : point en power2.in, 10 im ; la ligne ondule sur le temps, puis s'ouvre en 7 rails (sine.out, 14 im) |
| Connecteur source → réponse | [Second brain service promo](https://prompt-motion.com/theviableedge-9065be), 0:09.13 | Étude 60 fps : courbe en S tracée en 11 im (power2.inOut), réponse « $219/yr » au bout, pastille PASS 14 im après |
| Arbre de connecteurs puis impulsions | [Amazon wholesale pitch video](https://prompt-motion.com/ceowinkz-7c776b), 0:09.88 | 3 courbes de Bézier vers 3 cartes décalées de 4 im, puis impulsions lumineuses en boucle pendant 1,8 s |
| Logo du point au remplissage | [Studio website showreel](https://prompt-motion.com/andginja-333d32), 0:00.00 | point → filet de 25 % L en 4 im, contours en 12 im, remplissage 8 im, photo en 3 im : 31 im |
| Anneau d'annotation au pinceau | [Engraving-style Claude ad](https://prompt-motion.com/lexnlin-038035), 0:00.70 | Étude 60 fps : anneau tracé en 5 im (sine.inOut) ; le point du « ? » devient la pointe du pinceau en 2 im |
| Tracé fixe, point voyageur sur une rafale | [Engraving-style Claude ad](https://prompt-motion.com/lexnlin-038035), 0:08.27 | Étude 60 fps : le point parcourt 4 119 px en 137 im (sine.in), 16 → 44 px/im, pendant ≈ 40 coupes dessous |

![Six images : une courbe en S sarcelle relie un fichier à la question, puis la réponse $219/yr et la pastille PASS apparaissent](ILLUS:trace-2)

*[Second brain service promo](https://prompt-motion.com/theviableedge-9065be), 0:09.10 à 0:09.53 : le lien entre la source et la réponse est dessiné au lieu d'être dit.*

**Règles de construction**

1. La durée suit la fonction. Anneau ou annotation : 4 à 11 im (lexnlin 5, tolgayhickiran-e90799 5 à 30 fps, gabrielbuzziv-4ff0c6 4, theviableedge 11). Ligne d'origine : 10 à 13 im, dont 80 à 90 % en 6 à 10 im (raphaelaubryy-4b137e, ndhabarde11-f155b4). Trajet de plume ou logo : 30 à 60 im (andginja 31, math-files-39c9d0 35, hbcoop 57).
2. Trois courbes. Ligne qui pousse : ease-out expo. Plume en aller-retour ou en cercle : power1 à power2.inOut, mi-course sur le temps (9 gestes sur 10 chez hbcoop). Plume qui écrit : vitesse constante (zheke-38deff, 3,7 % L par image, rms 0,3 %). Le guide demande de remplacer les courbes linéaires (guide Otom, p. 14) : pour une plume, garde le linéaire.
3. La tête mène puis reste. Environ 42 vidéos sur 84 ont une tête de 1 à 2 % H, souvent avec halo ; le trait fait 0,2 à 1 % H. Le point de souravbhar871-61f424 s'arrête sur le point final de « through ».
4. Le trait a une destination : il relie, entoure ou devient l'élément suivant (la ligne de ndhabarde11 devient bord de masque, celle de lukasersil des rails). Contre-exemple : le tube rayé qui boucle sans rien relier (3 vidéos), lent et uniforme, « la mesure la plus molle ».
5. Calage (vidéos animées sur la musique) : un trait ease-out part sur le temps (itsuki-dev −0,2 im). Un logo tracé se pose sur le temps (gabrielbuzziv, temps 26). Contre-exemple : le tracé du logo de daniel-haida-8691d4 finit 9 im avant le temps où tombe l'impact (étude 60 fps).
6. Fais vivre le lien sans le retracer : impulsions de 0,3 à 0,5 s par trajet (misbahsy-80eaec) ; seules, elles ne tiennent pas 5 s (elliot-garreffa-f334bc). Logo : garde la structure du guide (contours décalés, remplissage, contours effacés), pas ses 2,8 s (guide Otom, p. 12) ; nos logos durent 4 à 31 im.

**Verdict** : à reprendre, toujours avec une destination. Le point-plume et le connecteur sont ton match cut en version dessinée. Un trait qui ne relie, n'entoure ni ne devient rien est la flèche inutile que tu rejettes.

**Quand l'utiliser** : en typo cinétique 1600, la ligne d'origine sert d'accroche puis de ligne de base au titre. Le point-plume peut porter le film (« Le fil rouge », chapitre 10). En promo SaaS, le connecteur source → réponse sert la démonstration, l'arbre d'intégrations la preuve, le logo au trait la signature. Épaisseur, couleur et tête se fixent au système de design ; le tracé se place à la construction du plan. À éviter sur un mot (voir « Le trait sur le mot », chapitre 3), ou au-delà de 1,5 s si le texte n'avance pas avec le trait.

**HyperFrames (GSAP)**

```js
// Point-plume (ligne puis cercle, mi-course sur le temps), puis connecteur source → réponse
// MotionPathPlugin requis : gsap.registerPlugin(MotionPathPlugin)
const FPS = 60, BEAT = 60 / 120, at = b => b * BEAT;     // 120 BPM
const F = n => n / FPS;
const mid = (b, n) => at(b) - F(n) / 2;                 // départ qui met la mi-course sur le temps b
// Chemin SVG caché : pointillé de sa longueur, décalé d'autant
const prep = sel => {
  const p = document.querySelector(sel), L = p.getTotalLength();
  tl.set(p, { strokeDasharray: L, strokeDashoffset: L }, 0);
  return p;
};
// Trait et tête partagent durée et courbe : la tête reste au bout du trait
const draw = (p, t, n, ease) => tl
  .to(p, { strokeDashoffset: 0, duration: F(n), ease }, t)
  .to("#pen", { motionPath: { path: p, align: p, alignOrigin: [0.5, 0.5] },
                duration: F(n), ease }, t);
const line = prep("#pen-line");                         // du centre vers la droite
const ring = prep("#pen-ring");                         // part du bout droit, sens anti-horaire
draw(line, mid(4.5, 23), 23, "power1.inOut");           // mi-course sur le demi-temps 4,5
draw(ring, mid(10, 57), 57, "power2.inOut");            // 180° pile sur le temps 10

// Connecteur en S (vidéo sans musique) : 11 im, réponse au bout du trait, PASS 14 im plus tard
const link = prep("#link"), t0 = 9.13;
tl.set(["#answer", "#pass", "#pulse"], { autoAlpha: 0 }, 0)
  .to(link, { strokeDashoffset: 0, duration: F(11), ease: "power2.inOut" }, t0)
  .set("#answer", { autoAlpha: 1 }, t0 + F(11))
  .to("#pass", { autoAlpha: 1, duration: F(6), ease: "power2.out" }, t0 + F(25))
  // impulsion qui court sur le lien : 0,4 s par trajet, 4 passages
  .set("#pulse", { autoAlpha: 1 }, t0 + F(25))
  .to("#pulse", { motionPath: { path: link, align: link, alignOrigin: [0.5, 0.5] },
                  duration: 0.4, ease: "none", repeat: 3 }, t0 + F(25));
```

**After Effects**

- Tracé : Pen Tool (outil Plume) sur un Shape Layer (calque de forme), Fill (Fond) désactivé, Stroke (Contour) de 0,2 à 1 % H, Line Cap › Round Cap (Extrémité › Arrondie). Add › Trim Paths (Ajouter › Réduire les tracés), End (Fin) 0 → 100 %.
- Courbes dans le Graph Editor (éditeur de graphiques) : ligne qui pousse, influence 0 % au départ et ≈ 90 % à l'arrivée. Plume en aller-retour : Easy Ease (Lissage de vitesse), influence 33 % des deux côtés (≈ power1.inOut) ; cercle, 60 à 65 % (≈ power2.inOut). Place la mi-course sur le marqueur du temps.
- Tête : copie le Path (Tracé) du trait, Edit › Copy (Édition › Copier), puis colle-le sur la Position d'une Ellipse, Edit › Paste (Coller) : trajectoire à vitesse constante. Cale ses clés extrêmes sur celles de Trim Paths, même influence.
- Connecteur : Trim Paths End 0 → 100 % en 11 im. Impulsion : un second contour sur le même chemin, Trim Paths Start 0 / End 8 %, expression sur Offset (Décalage) `(time - inPoint) * 900` (un trajet en 0,4 s).
- Logo : Layer › Create › Create Shapes from Vector Layer (Calque › Créer › Créer des formes à partir d'un calque vectoriel). Un Trim Paths par groupe, décalés de 3 à 4 im. Puis Fill Opacity (Opacité du fond) 0 → 100 % en 8 im pendant que Stroke Opacity (Opacité du contour) revient à 0.
