## Guide du showreel éditorial néo-suisse avec habillage (editorial neo-Swiss showreel, chaptered reel, frame chrome)

Le film en chapitres : bande démo, ouverture d'agence, promo SaaS à plusieurs fonctions, pour designers et développeurs. Il tient par une horloge, un chapitre par mesure, des aplats ou un papier à 2-3 encres, et un objet fil rouge. Voir *Le néo-suisse pop à HUD de bande démo* et *L'éditorial imprimé : papier, serif et encre* (chapitre 1).

**Quand le choisir, quand l'éviter** : pour relier des sujets disparates. À éviter quand un seul message prime : l'effet catalogue touche 30 vidéos néo-suisses sur 43 (chapitre 1). Claude y retombe sans charte : on le choisit exprès.

**Verdict** : reprendre l'horloge, le fil rouge, les coutures motivées ; doser le HUD, un réflexe d'Opus.

**Vidéos modèles** (mesures : étude 60 fps de chaque vidéo, chapitre 14)

| Vidéo | Ce qu'on lui prend | Mesure clé |
| --- | --- | --- |
| [Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af) | grille calculée, 5 polices à rôle fixe, marges de 96 px | arrivées 4-7 im, sorties sine.in 4-5 im |
| [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61) | poussée avant la coupe, silence écrit, un seul rebond | +3 à +5 % sur les 8 dernières images |
| [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a) | 4 aplats qui s'échangent le fond, plongée | ×16 à ×29 en 19-26 im |
| [Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e) | escalade point → ligne → plan → volume | décalages de 7 im (quart de temps) |
| [Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be) | le mot fait ce qu'il dit | une coupe toutes les 14 im |

**Mesures (60 fps)** : 128 BPM, 1 temps = 28,125 im, mesure = 112,5 im, 8 mesures = 900 im. Figé médian : 13 % en néo-suisse, 52 % en éditorial (chapitre 1). Entrées 0,2-0,5 s (arbitrage).

**Brief (phase 1)**

```text
SPEC 1920×1080 · 60 fps · 8 mesures à 128 BPM = 15,0 s = 900 im · piste composée sur la même horloge · boucle : serre-livres ou non
MATIÈRE  un sujet réel par chapitre, un mot chacun · logo vectoriel · polices (grotesque variable, serif, mono) · l'objet fil rouge
INACCEPTABLE  catalogue sans message · HUD de viseur · « CLAUDE » à l'écran · texte lu < 3 % H · fondu enchaîné · fin figée
```

« CLAUDE » sort dans 32 runs sur 33 du prompt canonique (*Ce que Claude fait seul*, chapitre 12) : écrire « Sujet : <produit> ».

**Référence (phase 2)** : on étudie **la couture entre deux chapitres** (B) : départ contre la grille, sortie, image de l'aplat, entrée. Et le rôle du fil rouge par chapitre.

**STYLE.md prérempli (phase 3)**

```text
JETONS
fond #0F0F0D · papier #F3EEE6 · vermillon #DE5332 = le fil rouge seul · outremer #3134F0, citron #D4F53C = fonds de chapitre
variante éditoriale : papier #F0EBDD · encre #0D0B08 · vermillon #C85A40 = annotations (chapitre 1)
polices : grotesque extra-grasse 15-50 % H · serif italique pour la signature · mono pour l'habillage
tailles : texte lu ≥ 3 % H · message ≥ 6 % H · mono qui informe ≥ 2,5 % H · nom final ≥ 13 % H (chapitre 11)
courbes : enter expo.out 8-26 im · move expo.inOut d'un temps · exit power2.in à expo.in 4-14 im · pop back.out(1.7)
RÈGLES PAR CLASSE
titres : sous masque ou depuis +90 % L, sans dépassement · formes : un geste par temps
caméra : une plongée dans un glyphe en fin de mesure · habillage : immobile pendant les coutures (chapitre 2)
HIÉRARCHIE
un héros par plan ; secondaires 100-200 ms après, à 50-70 % de la course ; ambiant < 5 % (F)
INTERDITS → À LA PLACE
HUD de viseur (REC, timecode, FPS, BPM) → « 0N / 08 » qui informe, ou rien
légende mono à 1,5 % H → texte ≥ 3 % H, ou supprimé
fondu enchaîné → plongée, iris, compression puis éclosion, stores
glitch RVB en série → 2 ou 3 fois au plus
même accent à chaque coupe → 2 fois au plus, jamais deux coupes de suite (chapitre 11)
carte de fin figée → poussée +3 à +5 % sur les 8 dernières images
GARDE-FOUS
contenu à 96 px des bords, habillage à 2-3 % · couleur du fil rouge · logo · 900 im exactes
```

**Le HUD, à doser.** Opus pose un habillage de régie dans 27 runs sur 33 du prompt canonique (chapitre 12) ; aucune vidéo notée 1 à 3 n'en a, c'est un tic d'ambition (chapitre 11). Il informe à 2,5 % H au moins, ou reste décor : 14 px, 25 % d'opacité au plus, immobile. Sans raison tirée du brief, rien.

**Timeline type (phase 4)** : chapitres en f0, 113, 225, 338, 450, 563, 675, 788.

| Mesure | Fonction | Plan C | Couture |
| --- | --- | --- | --- |
| 1 | accroche | C01 Accroche de la première seconde | plongée dans le O |
| 2 | sujet 1 ou problème | C07 Le mot clé plein cadre, ou C02 Le problème montré | iris |
| 3 | sujet 2 ou révélation | C03 La révélation du produit | compression, éclosion |
| 4 | sujet 3 | C05 Le composant qui change d'état | stores |
| 5 | preuve | C06 La preuve chiffrée | objet relais |
| 6 | sujet 5 | C10 La couture par objet relais | plongée |
| 7 | rafale, puis silence | C08 La rafale récapitulative | 7 im de noir et un point |
| 8 | signature | C11 La signature finale, ou C12 La boucle parfaite | — |

**Coutures types**

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Plongée dans un glyphe | [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:10.80 | O de 36 à 1 045 px en 26 im, expo.in, aplat au 1er temps |
| Iris né d'un point | [Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:11.00 | 14 im en sine.in, plein cadre 1 im avant le temps |
| Silence écrit, éclosion | [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:11.07 | anneau fermé en 4 im, 7 im de noir, éclatement sur le temps |
| Objet relais final | [Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:13.13 | la marque tombe en 14 im (power1.in), devient le point final |
| Celle qu'on n'utilise pas | le fondu enchaîné | 41 % des vidéos éditoriales : le piège (chapitre 1) |

**Bloc BRAND à échanger** (P)

```text
HERO    <le fil rouge : forme, couleur, rôle par chapitre>
APP     <8 chapitres : un mot réel chacun>
RESULT  <la phrase à retenir, 15 mots au plus · le nom à 13 % H>
SET     <aplats ou papier + 3 encres · polices · 128 BPM · « 0N / 08 » ou rien>
```

**Portes spécifiques**
- **Porte 2** : chapitres sur le 1er temps ; coutures nées d'un objet ; HUD justifié par le brief, ou rayé.
- **Porte 3** : f112, f113, f788, f899 ; corps de l'habillage mesuré.
- **Porte 4** : bande de 8 images autour de chaque 1er temps ; départs à 0-1 im de la grille.
- **Porte 5** : test des 3 secondes, muet : le spectateur cite le message, pas un effet (chapitre 11).

**Pièges du style**
1. **Texte trop petit** : 32 vidéos néo-suisses sur 43 (chapitre 1). Contrôle : planche à 400 px de large.
2. **Catalogue** : message en une phrase, 3 ou 4 démonstrations au plus.
3. **Figé éditorial** : `freezedetect`, gels ≥ 0,4 s ≤ 15 % de la durée (*Le temps mort : quand l'image s'arrête*, chapitre 11).
4. **Fin figée** : 2 s chez grace-sunnyy (chapitre 1). Contrôle : planche de la mesure 8.

**HyperFrames (GSAP)**

```js
// 8 chapitres d'une mesure, plongée finie sur la coupe
const FPS = 60, BPM = 128, BEAT = 60 / BPM;
const at = (bar, beat = 0) => ((bar - 1) * 4 + beat) * BEAT;
const F = n => n / FPS, N = 8;
const tl = gsap.timeline({ paused: true });
const BG = ["#0F0F0D", "#3134F0", "#F3EEE6", "#D4F53C"];
tl.set(".chapter", { autoAlpha: 0 }, 0);
for (let b = 1; b <= N; b++) {
  const ch = `#ch${b}`;
  tl.set(".chapter", { autoAlpha: 0 }, at(b)).set(ch, { autoAlpha: 1 }, at(b))
    .set("#stage", { backgroundColor: BG[(b - 1) % 4] }, at(b))
    .set("#hud-num", { textContent: `0${b} / 08` }, at(b))   // informe, ≥ 2,5 % H
    .from(`${ch} .title`, { yPercent: 110, duration: F(14), ease: "expo.out",
      immediateRender: false }, at(b))
    .to(`${ch} .title`, { scale: 1.04, duration: F(8), ease: "power2.in" }, at(b + 1) - F(8));
  if (b < N) tl.to(`${ch} .glyph`, { scale: 24, duration: F(22), ease: "expo.in" },
    at(b + 1) - F(22));
}
// le point change de place à chaque mesure, jamais de couleur
[[12, 80], [50, 50], [88, 20], [30, 70], [70, 30], [50, 88], [20, 20], [50, 62]]
  .forEach(([x, y], i) => tl.to("#dot", { left: `${x}%`, top: `${y}%`,
    duration: BEAT, ease: "expo.inOut" }, at(i + 1)));
```

**After Effects**
- Composition 1920 × 1080 à 60 fps ; un marqueur par mesure (Layer › Markers › Add Marker (Calque › Marqueurs › Ajouter un marqueur)).
- Habillage en précomposition (Layer › Pre-compose (Calque › Précomposer)), immobile aux coutures.
- Plongée : Scale (Échelle) de 100 à 2 400 % en 22 im, influence sortante 90 % (≈ expo.in), Motion Blur (Flou de mouvement).

**À cocher**
- [ ] 900 im ; chapitres sur le 1er temps.
- [ ] Chaque couture née d'un objet ; aucun fondu enchaîné.
- [ ] HUD : ≥ 2,5 % H s'il informe, sinon ≤ 14 px, ≤ 25 %, immobile.
- [ ] Aucun texte lu sous 3 % H (planche à 400 px).
