## Étape 8 · Les enchaînements : chaque plan naît du précédent

L'étape 8 dessine chaque couture entre deux plans, après le découpage et pendant la construction. Une couture réussie fait passer l'œil d'un plan à l'autre par ce qui traverse : objet, forme, couleur, direction ou vitesse. Le même accent ou la même transition répétés sont relevés dans environ 79 vidéos, dont 3 seulement des 17 notées 5. On livre la liste des coutures, une ligne par passage.

![Un point lumineux s'étire en ligne, se divise en sept rails, puis les rails deviennent les bandes du mot LINE](ILLUS:enchainements-1)

*[Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e), 0:01.00 à 0:02.17 : le point s'étire en ligne, la ligne se divise en 7 rails, les rails deviennent les bandes du mot LINE. Aucune coupe : l'œil suit la forme.*

**Ce que font les meilleures vidéos**

- [Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e) (5/5) prend « every shot transitioning naturally into the next » à la lettre : point → ligne → plan → volumes → fluide → particules → mot. Seules 3 coupes franches : des flashs d'une image, à 0-0,5 im du temps (étude 60 fps).
- [Second brain service promo](https://prompt-motion.com/theviableedge-9065be) (5/5) : zéro coupe. Le bureau s'écrase dans une ligne, la ligne s'ouvre en fenêtre de code en 28 im, la fenêtre devient une puce qui plonge dans la frise.
- [AllInvestView product promo](https://prompt-motion.com/rammanq-f5a90f) : « un objet survit à chaque transition » (point, logos, courbe). Claude l'a décidé seul ; il faut l'écrire pour l'obtenir à coup sûr.
- [Claude motion designer showreel](https://prompt-motion.com/mrtanviir-132457) : 8 mesures, 8 scènes, et chaque mesure se ferme sur un geste qui prépare la suivante (contraction, plongée dans le point, inversion, raccord couleur).
- [Four seasons train window](https://prompt-motion.com/itsolelehmann-e47532) : un décor qui a ses occultants (train croisé, tunnel) motive les transitions sans consigne.

**Ce qui manque aux moins bonnes**

- Le même accent à chaque coupe : flash blanc 14 fois en 30 s ([Tennis game launch video](https://prompt-motion.com/deifosv-04e4d3)), cercle plein cadre 7 fois dont 4 en 13 s ([Lead Notifi product ad](https://prompt-motion.com/leadnotifi-e83f94)), même chute de fenêtre 8 fois ([Tally product demo](https://prompt-motion.com/visheshbaghell-3aba37)).
- Le fondu par défaut : 7 transitions sur 7 ([Matra caption app promo](https://prompt-motion.com/gautam-mer1-2ae354)), flou et fondu au noir 9 fois ([MotionSites one million visitors](https://prompt-motion.com/viktoroddy-98c1d8)). 41 % des vidéos à fondu sont notées 3 ou moins, contre 20 % du corpus.
- Le fondu mal construit : deux calques à 50 % sur noir, −25 % de luminance à mi-course, 12 fois ([Norilu product launch video](https://prompt-motion.com/sachaarbonel-8f14f4)) ; double exposition de 7 à 12 im ([ocrX app launch video](https://prompt-motion.com/mehul4795-4a7007)).
- Des coupes sans rien de commun : 12 coupes sèches à la seconde ([Motion designer showreel](https://prompt-motion.com/hanifproduktif-54bdee)). Sans « sans coupe » écrit, une transition continue devient une coupe ([Orange dot motion system](https://prompt-motion.com/ultimaxbt-bbebf5)).

![Six images de flash blanc, toutes les deux secondes, dans la même vidéo](ILLUS:enchainements-2)

*[Tennis game launch video](https://prompt-motion.com/deifosv-04e4d3), 0:01.97 à 0:15.97, contre-exemple : le même voile blanc à 90 %, ici 6 de ses 14 retours.*

**Décisions**

- Par couture : ce qui traverse, le type, la durée, le temps d'atterrissage (par défaut le 1er temps de la mesure).
- L'énergie suit la musique (skill cinetic) : haute 9 à 18 im à 60 fps sur un drop, moyenne 18 à 30 im, calme 30 à 48 im sur une respiration. Par défaut ≤ 0,5 s.
- Une transition signature tirée de la marque, 3 apparitions (ouverture, milieu, fin), chacune différente (taille, direction, centre, rôle) ; tout autre type ≤ 2 fois.
- Arbitrage : pas de plafond à 2 ou 3 types (skill motion-premiers-principes) ; la variété est permise si chaque transition est motivée (cinetic : 6 à 8 types). Le vocabulaire suit le style (chapitre 1).
- Répertoire : voir *L'objet relais*, *La compression : en point ou en ligne, puis l'éclosion*, *L'iris né d'un point*, *La coupe sèche sur le temps* et *Vider le cadre avant la coupe* au chapitre 4 ; *Le morphing de forme : un objet qui change au lieu de couper* au chapitre 6 ; *Le fil rouge : un objet, un exemple ou un plan continu traverse le film* au chapitre 10.

**Livrable** : la colonne « Transition » de la carte des temps, et la liste des coutures.

```text
COUTURES · <projet> · 128 BPM · 60 fps (1 temps = 28,125 im)
n° | plan A → plan B     | ce qui traverse | type          | énergie | durée | atterrit | usages
1  | accroche → problème | point du titre  | objet relais  | haute   | 24 im | 3.1      | 1/2
2  | problème → produit  | couleur accent  | iris (signat.)| haute   | 18 im | 5.1      | 1/3
```

**Règles**

1. Quelque chose traverse chaque couture. Une coupe sans élément commun n'est permise que sur le temps, dans une rafale.
2. Les deux côtés au repos, ou le plan B part à la vitesse du plan A : sortie en accélération, coupe au pic de vitesse (skill cinetic).
3. L'arrivée tombe sur le temps : coupe 0 à 2 im avant ; mi-course sur le temps pour un geste ease-in-out ; impact sur le temps pour une chute.
4. Jamais deux copies d'un objet en fondu : morpher un seul objet. Un fondu ne touche que le contenu, en 1 à 12 im (voir *Le fondu et le passage par le fond*, chapitre 4).
5. Le point focal du plan B naît à moins d'un tiers d'écran de celui du plan A, sinon un mouvement y conduit l'œil. Aucune transition pendant la lecture d'un message.

**La méthode Otom, corrigée**

On reprend « ce qui apparaît, comment, et combien de temps » (guide Otom, p. 5), et la « coupe ou volet rapide de 250 ms » (guide Otom, p. 10), posée sur la grille. Le prompt maître donne « fondu enchaîné » en exemple (guide Otom, p. 7) : la Bible a raison contre lui. Banni par 5 prompts de 4 créateurs, il n'est que dans 2 des 17 vidéos notées 5. Écrire « objet relais, coupe sur le mouvement ou volet de 250 ms sur le temps ».

**Erreur fréquente** : laisser Claude choisir chaque transition au fil du code. Il pose le même fondu, flash ou cercle à chaque coupe.

**Dans HyperFrames**

Une couture = un bloc de timeline autour de son atterrissage. Mesurer après `document.fonts.ready`, scènes cachées affichées le temps de la mesure (savoir-faire HyperFrames). Après rendu, 8 images autour de chaque couture : `ffmpeg -i renders/out.mp4 -vf "select='between(n,446,453)',scale=480:-1,tile=8x1" -frames:v 1 -fps_mode vfr couture-2.png`.

```js
// Coutures déclarées, comptées, puis posées sur la grille
const BEAT = 60 / 128, at = (bar, beat = 0) => (bar * 4 + beat) * BEAT;
const SEAMS = [
  { a: "#hook", b: "#pain", type: "relais", land: at(2) },
  { a: "#pain", b: "#prod", type: "iris", land: at(4), signature: true },
];
const uses = {};
SEAMS.forEach(s => (uses[s.type] = (uses[s.type] || 0) + 1));
for (const [t, n] of Object.entries(uses)) {
  const max = SEAMS.some(s => s.type === t && s.signature) ? Infinity : 2;
  if (t !== "coupe" && n > max) console.warn(`« ${t} » utilisé ${n} fois`);
}
await document.fonts.ready;
const r = sel => document.querySelector(sel).getBoundingClientRect();
const p = r("#hook .dot"), q = r("#pain .dot"), land = SEAMS[0].land, d = 0.4;
tl.set("#relay", { x: p.x, y: p.y, autoAlpha: 1 }, land - d)   // #relay en absolu, en 0,0
  .set("#hook .dot", { autoAlpha: 0 }, land - d)
  .to("#hook .content", { autoAlpha: 0, duration: 0.25, ease: "power2.in" }, land - d)
  .to("#relay", { x: q.x, y: q.y, duration: d, ease: "power3.inOut" }, land - d)
  .set("#relay", { autoAlpha: 0 }, land)                     // arrivée sur le temps
  .set("#pain .dot", { autoAlpha: 1 }, land);
```

**Dans After Effects**

- Une pré-composition par couture : Layer › Pre-compose (Calque › Précomposer).
- L'objet relais : Layer › Transform › Auto-Orient (Calque › Transformation › Orientation automatique), trajectoire en arc, Motion Blur (Flou de mouvement) activé.
- Raccord de vitesse : Animation › Keyframe Velocity (Vitesse de l'image clé), même vitesse (px/s) en sortie de A et en entrée de B.
- Volets et iris : Effect › Transition › Venetian Blinds (Stores vénitiens) ou Iris Wipe (Balayage iris) ; Graph Editor (Éditeur de graphiques) pour poser le pic de vitesse sur le temps.

**À cocher**

- [ ] Liste des coutures écrite avant la construction, avec ce qui traverse chacune.
- [ ] Chaque type ≤ 2 fois, la signature varie ; les coupes sèches tombent 0 à 2 im avant le temps.
- [ ] Aucun fondu enchaîné par défaut, aucun fondu de deux calques à 50 % sur noir.
- [ ] Chaque couture ≤ 0,5 s (≤ 0,8 s si calme), arrivée à ≤ 1 im du temps prévu, vue sur 8 images.
- [ ] Point focal de B à moins d'1/3 d'écran de celui de A, ou conduit par un mouvement.
