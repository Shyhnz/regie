## L'habillage persistant : HUD, chapitres et gabarit fixe (persistent frame chrome, HUD overlay, chapter labels, fixed layout template)

Des éléments fixes dans les marges (équerres d'angle, marque, « 0N / 08 », barre de progression) restent identiques sur tous les plans, et les zones de contenu gardent leur place : seul le contenu change. Le spectateur garde ses repères entre des plans disparates et sait où il en est. Dans les meilleures, les marges ne bougent pas d'un pixel : 96 px (5 % de la largeur) pour le texte sur les 900 images de Blue editorial motion showreel. Vue dans 95 vidéos, dont 84 notées 4 ou 5.

![Six chapitres d'une bobine : fonds noir, orange, motif, bleu, crème, avec les mêmes équerres d'angle, le même chapitre en bas à gauche et le même timecode en bas à droite](ILLUS:habillage-persistant-1)

*[Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:00.67 à 0:14.00 : six chapitres très différents, un seul cadre ; les équerres, le chapitre et le timecode changent de couleur avec le fond, jamais de place.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| HUD de bobine (coins, chapitre, timecode) | [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:00.00 | Corps ≈ 1,5 % H, marges ≈ 2,5 % ; 8 tirets, chapitre courant surligné ; timecode juste (00:00:01:12 à f72) |
| Habillage éditorial (en-tête, « 0N / 08 », compteur) | [Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:00.00 | Marges 96 px ; grands mots et compteur « NNN / 900 » sur la même ligne de base, y ≈ 92,5 % H |
| HUD qui bat la mesure | [Synced lyrics motion video](https://prompt-motion.com/samaote-5e2fc2), 0:00.50 | Étude 60 fps : le tiret change 75 fois, à −1,2 à 0 im de chaque croche ; chapitres à ±2 im du 1er temps |
| HUD didactique (nom de la courbe) | [Type, form, space showreel](https://prompt-motion.com/web3wesley-7bb108), 0:00.00 | Étude 60 fps : 26 changements d'étiquette sur la grille des temps, 21 exacts, 5 à ±2 im |
| Frise d'étapes en pied de cadre | [Second brain service promo](https://prompt-motion.com/theviableedge-9065be), 0:05.88 | Étude 60 fps : trait rempli jusqu'à l'étape suivante en 20 im power2.inOut, marqueur actif ×1,5 |
| Index de présentation | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:10.53 | « 0N / 08 » en haut à droite, « [ LINKS ] » en bas à gauche, filet rempli de N/8 ; 8 cartes en 2 s |
| Gabarit de scène fonction | [Flowdrive motion showreel](https://prompt-motion.com/manuelogomigo-f33ca9), 0:02.15 | Libellé ≈ 1 % H, titre serif 2 à 4 mots ≈ 7 %, visuel sur l'autre moitié ; 6 fonctions en 10,5 s |
| Grille éditoriale de chapitre | [AI data centre 3D tour](https://prompt-motion.com/sayan-shanky-f850d8), 0:00 | Marge gauche 2,1 % L ; bloc « N of 11 » entre 70 et 89 % H, 31 % L, identique sur 11 chapitres |

![Six moments d'une promo : la frise à quatre étapes en bas du cadre reste en place pendant que le contenu change, et le marqueur actif avance d'AUDIT à HANDOFF](ILLUS:habillage-persistant-2)

*[Second brain service promo](https://prompt-motion.com/theviableedge-9065be), 0:02.50 à 0:11.50 : la frise « 01 AUDIT … 04 HANDOFF » ne bouge pas ; seul le marqueur actif grossit et le trait avance.*

**Règles de construction**

1. Deux marges, pas une : l'habillage à 2 à 3 % des bords (équerres de levabashidze, crazyalphaaa, zaqailo), le contenu à ≈ 5 % (96 px chez fionntobin et heyiammallik). Le guide Otom demande 6 % sans aucun texte (guide Otom, p. 7) : les vidéos mesurées ne le respectent que pour le contenu.
2. Un texte d'habillage qui informe doit se lire. Le corps mesuré va de 0,7 à 1,7 % H, et 23 fiches le jugent illisible sur téléphone. Le guide fixe 4 % H au minimum pour un texte secondaire (guide Otom, p. 14). Chapitre et étape : 2,5 à 4 % H ; coins et filets peuvent rester fins.
3. Chaque changement d'habillage tombe sur la grille : chapitre au 1er temps de la mesure (±2 im chez samaote, web3wesley, levabashidze). La barre de progression est linéaire et vaut la fraction écoulée (polydao : 22,9 % à 5,5 s sur 24 s).
4. L'habillage ne bouge pas pendant les transitions : c'est lui qui fait le lien. Sa couleur s'inverse avec le fond sur l'image de la coupe (13 vidéos), ou passe en mode Différence (crazyalphaaa).
5. Il s'installe dans la 1re seconde (filet déplié en 10 im chez levabashidze, HUD posé f0-f20 chez stephanlivera). Il sort ou se réduit aux équerres sur le carton final (rendesr, motiondsgnr, misbahsy).

**Verdict** : à adapter. Garde le gabarit (mêmes marges, « 0N / 04 », frise d'étapes calée sur la mesure) ; retire le viseur décoratif (REC, « 1920×1080 · 60 FPS », timecode, BPM). Ce viseur revient dans des dizaines de bobines Claude, et 4 fiches le classent déjà cliché ; il ne dit rien au client d'une promo SaaS.

**Quand l'utiliser** : dans une promo SaaS en chapitres (une fonction par scène), un showreel éditorial ou un explainer données long, où des plans disparates doivent se lire comme un seul film. Il sert la présentation et la démonstration, pas l'accroche ni la chute. Il se décide au système de design, avant la construction des plans : marges, zones et numérotation figées pour tout le film. À éviter dans un spot de moins de 10 s ou une typo cinétique pure à la 1600, où il n'y a ni chapitres ni progression à montrer.

**HyperFrames (GSAP)**

```js
// Habillage fixe : filet d'ouverture, barre de progression, chapitre et frise sur la mesure
const FPS = 60;
const BEAT = 60 / 128, at = b => b * BEAT;   // 128 BPM ; 1 chapitre = 1 mesure de 4 temps
const CH = 4, END = at(4 * CH);               // 4 chapitres = 7,5 s
const INK = ["#14130F", "#F4F0E8", "#14130F", "#F4F0E8"]; // HUD inversé selon le fond

// 1. Installation : le filet du bas se déplie depuis le centre en 10 im
tl.set("#hud", { autoAlpha: 1 }, 0)
  .set("#hud-rule", { scaleX: 0, transformOrigin: "50% 50%" }, 0)
  .to("#hud-rule", { scaleX: 1, duration: 10 / FPS, ease: "power2.out" }, 0);

// 2. Barre de progression : fraction exacte du temps écoulé, donc linéaire
tl.set("#hud-bar", { scaleX: 0, transformOrigin: "0% 50%" }, 0)
  .to("#hud-bar", { scaleX: 1, duration: END, ease: "none" }, 0)
  .set("#rail-fill", { scaleX: 0, transformOrigin: "0% 50%" }, 0);

// 3. Chapitres : un <span class="hud-label" data-ch="i"> par chapitre, bascule au 1er temps
for (let i = 0; i < CH; i++) {
  const t0 = at(4 * i);
  tl.set(".hud-label", { autoAlpha: 0 }, t0)
    .set(`.hud-label[data-ch="${i}"]`, { autoAlpha: 1 }, t0)
    .set("#hud", { color: INK[i] }, t0)                  // même image que la coupe du fond
    .set(".rail-dot", { scale: 1 }, t0)
    .to(`.rail-dot[data-ch="${i}"]`, { scale: 1.5, duration: 20 / FPS, ease: "power2.inOut" }, t0)
    .to("#rail-fill", { scaleX: i / (CH - 1), duration: 20 / FPS, ease: "power2.inOut" }, t0);
}

// 4. Carton final : textes et barres sortent en 12 im, les équerres restent
tl.to("#hud .hud-text, #hud-bar, #rail", { autoAlpha: 0, duration: 12 / FPS, ease: "power1.in" }, END);
```

**After Effects**

- Preferences › Grids & Guides (Préférences › Grilles et repères) : marges Action-Safe 5 % et Title-Safe 10 % (marges de sécurité Action et Titre), soit 2,5 % et 5 % par bord. Afficher ces marges (bouton Choose grid and guide options (Options de grille et de repère)) : habillage sur la première, contenu sur la seconde.
- Monter tout le HUD dans une composition « HUD » posée en haut de la pile sur toute la durée (Layer › Pre-compose (Calque › Précomposer)). Rien de l'habillage ne vit dans les compositions de scène.
- Barre de progression : calque de forme Rectangle, Anchor Point (point d'ancrage) au bord gauche, expression sur Scale (Échelle) `[linear(time, 0, thisComp.duration, 0, 100), 100]`. Timecode, si gardé : Effect › Text › Timecode (Effet › Texte › Code temporel).
- Chapitres : Source Text (Texte source) avec une image clé par chapitre sur le 1er temps de la mesure (Animation › Toggle Hold Keyframe (Animation › Activer/désactiver l'image clé maintenue)). Couleur : effet Fill (Remplir) avec images clés maintenues aux mêmes images, ou mode de fusion Difference (Différence).
- Frise : remplissage en Scale X sur 20 im, influence ≈ 60 % en entrée et en sortie dans le Graph Editor (éditeur de graphique) (≈ power2.inOut) ; marqueur actif 100 → 150 % sur les mêmes images.
