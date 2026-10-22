## Étapes 3 et 6 · La direction artistique et le système de design : choisir un style, puis le figer en jetons

À l'étape 3, on choisit un style, des références et des interdits. À l'étape 6, après la grille et le découpage, on le fige en jetons que tout le code lit. Les vidéos notées 5 sont denses mais tenues : 8 chapitres en 15 s sous un même habillage, 2 à 4 couleurs, 3 familles de caractères. On livre une fiche de direction, puis un fichier de jetons et un guide de style animé.

![Six images d'un même showreel, du début à la fin : grille de carrés cobalt, « 75 » en serif, coureur, trame, système de signes sur cobalt, signature « Claude. » ; mêmes repères dans les coins](ILLUS:direction-systeme-1)

*[Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:01.33 à 0:14.33 : deux couleurs (crème #EEEBDF, cobalt #2923C5), une serif, une grotesque et une mono ; compteur « 0X / 08 » et numéro d'image fixes dans les coins.*

**Ce que font les meilleures vidéos**

- Un système tient la densité. [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a) (5/5) : 8 chapitres en 15 s, HUD constant, 4 couleurs qui s'échangent le fond, 3 familles de caractères. [Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af) (5/5) : 5 polices à rôle fixe, marges de 96 px, ligne de base commune à 92,5 % de la hauteur.
- Un objet fil rouge. [Engraving-style Claude ad](https://prompt-motion.com/lexnlin-038035) (5/5) : trois encres (#FFFFFF, #141413, corail #D97757), le point corail dans presque chaque plan, qui finit en logo.
- Des gabarits : [Moroccan political history timeline](https://prompt-motion.com/triglyceee-bd5b08) tient 116 plans avec 5 gabarits.
- Des interdits courts et nommés : « no beige artsy look, no eyebrow labels » donne chez lexnlin un blanc pur, zéro étiquette.
- Une référence transcrite en chiffres : [Frame by Frame launch video](https://prompt-motion.com/notdwd-7de38a) traduit sa référence en px par image et retrouve 7 coupes à 1 image près.

**Ce qui manque aux moins bonnes**

- Le texte trop petit, premier défaut du corpus : environ 188 vidéos, dont 13 des 17 notées 5. Listes à environ 1 % de la hauteur chez [Product intro synced to music](https://prompt-motion.com/bogdandragomir-35e024), interface à 1,2 % chez [Supademo launch video](https://prompt-motion.com/jhylee95-e1152f).
- Sans interdits, les tics reviennent : HUD de viseur, glitch RVB, texte brouillé, flashs. Environ 66 constats, dont 7 sur des vidéos notées 5. [Kinetic type and particle showreel](https://prompt-motion.com/m1n9-k7-ff9ab9) les a tous, plus un mur de mots flous.
- Le patchwork : [Synced lyrics motion video](https://prompt-motion.com/samaote-5e2fc2) enchaîne 13 univers en 30 s (planche ci-dessous).
- Les interdits noyés ou trop nombreux : [Spotify product film](https://prompt-motion.com/brainextends-e19ac3) (prompt de 8 142 caractères) garde des fondus interdits et sort en police de repli malgré « Geist or Inter ». Les 19 interdits de [Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4) éteignent l'image.

![Planche : en haut, trois chapitres du showreel suisse (orange, trame noire, bleu) ; en bas, trois chapitres du clip solaire (coucher de soleil, soleil en gros plan, grille éditoriale serif)](ILLUS:direction-systeme-2)

*En haut, [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:02, 0:08 et 0:13 : 4 couleurs qui s'échangent le fond, même HUD mono. En bas, [Synced lyrics motion video](https://prompt-motion.com/samaote-5e2fc2), 0:05, 0:14 et 0:21.5 : le HUD tient, mais rendu, palette et typo changent à chaque chapitre.*

**Décisions**

- Étape 3 : la famille de style (chapitre 1, Styles), 3 adjectifs, 4 à 6 captures de référence et 2 lignes de rythme.
- Étape 3 : 5 à 9 interdits qui disent quoi faire à la place, terminés par « rien qui ressemble à un modèle ».
- Étape 3 : 3 images de style (ouverture, plan produit, temps fort) validées avant de construire.
- Étape 6 : couleurs en hex, un rôle chacune ; un accent par sens, plusieurs permis si chacun a le sien.
- Étape 6 : 2 polices + 1 mono, locales ; tailles en % de la hauteur ; 3 courbes + 1 ressort ; marges ; habillage oui ou non.

**Livrable**

```text
DIRECTION (étape 3)
Style : [famille] · Ton : [3 adjectifs]
Références : [4-6 captures] · Rythme : [2 lignes]
Interdits : [pas de X → faire Y] × 5 à 9 · rien qui ressemble à un modèle
Images de style validées : ouverture · produit · temps fort
JETONS (étape 6)
Couleurs : fond #… · encre #… · accent #… = [sens], ≤ 8 % des pixels
Polices : titre / texte / mono · message ≥ 6 % H · texte lu ≥ 3 % H
Courbes : entrée · déplacement · sortie · ressort · décalages
Marges : 96 px (16:9) ou zone sûre 9:16 · habillage : oui / non
```

**Règles**

1. Un style par film ; changer d'univers seulement sous des jetons communs (habillage, polices, marges). Voir *L'habillage persistant : HUD, chapitres et gabarit fixe* au chapitre 2.
2. Chaque couleur a un rôle ; l'accent couvre au plus 8 % des pixels (skill cinetic). Voir *La palette fermée et l'accent qui a un sens* au chapitre 6.
3. Texte lu ≥ 3 % de la hauteur (environ 4 % en 9:16), message ≥ 6 %. Habillage ≤ 14 px et ≤ 25 % d'opacité (skill motion-premiers-principes).
4. Deux ou trois familles de courbes, une par rôle : entrées power2/3.out en 10 à 12 im, sorties power2-4.in en 6-7 im, ressort back.out(3) à +20 % au plus (étude 60 fps de zheke). Voir *Le système de courbes* au chapitre 9.
5. Deux voix typographiques à rôles fixes, plus une mono. Voir *Le casting typographique : deux ou trois voix à rôles fixes* au chapitre 3.

**La méthode Otom, corrigée**

On reprend le bloc charte en hex (guide Otom, p. 5), la référence en 4 à 6 captures + 2 lignes de rythme (p. 4) et les correctifs 04 à 07 (p. 14). La Bible corrige trois points. « À éviter : [dégradés, émojis, rebonds] » devient la liste d'interdits du style choisi. Le dépassement court (2 à 20 %) reste permis : 14 des 17 vidéos notées 5 en ont un. Les dégradés sont une règle de style (126 vidéos, dont 5 notées 5) ; le dégradé fluide est aimé de l'utilisateur. Les interdits durs du skill cinetic (pas de serif, d'orange, de crème) sont un goût maison : trois vidéos notées 5 en utilisent. Polices auto-hébergées, pas Google Fonts.

**Erreur fréquente** : donner « bleu » au lieu d'un code hex (guide Otom, p. 5) ; chez nous, laisser Claude choisir la taille du texte.

**Dans HyperFrames**

Jetons en tête de composition, aucune valeur en dur dans les scènes. Polices en `@font-face` locales ; mesurer après `document.fonts.ready`. Manrope n'a pas d'italique : pas d'oblique synthétique (savoir-faire HyperFrames). Les 3 images de style : `npx hyperframes snapshot --at 0.5,6,9`.

```js
// Jetons : seule source des couleurs, tailles et courbes
const FPS = 60, H = 1080;                      // hauteur du cadre 16:9
const pct = p => Math.round(H * p / 100);      // % de la hauteur → px
const TOKENS = {
  color: { paper: "#EEEBDF", ink: "#0D0B1D", accent: "#2923C5" }, // accent = « nouveau »
  size: { hero: pct(12), message: pct(6), read: pct(3), hud: 14 },
};
const EASE = { in: "power3.out", move: "power2.inOut", out: "power3.in", pop: "back.out(1.7)" };
const DUR = { in: 12 / FPS, move: 12 / FPS, out: 7 / FPS, stagger: 2 / FPS };
const css = document.documentElement.style;    // jetons → variables CSS
Object.entries(TOKENS.color).forEach(([k, v]) => css.setProperty(`--${k}`, v));
Object.entries(TOKENS.size).forEach(([k, v]) => css.setProperty(`--size-${k}`, `${v}px`));
css.setProperty("--margin", "96px");
// Une entrée de titre n'utilise que des jetons
tl.set(".title", { yPercent: 100, autoAlpha: 0 }, 0)
  .to(".title", { yPercent: 0, autoAlpha: 1, duration: DUR.in,
                  ease: EASE.in, stagger: DUR.stagger }, 0.5);
```

**Dans After Effects**

- Un calque Null « CONTROLS » porte les jetons : Effect › Expression Controls › Color Control (Paramètres pour expressions › Paramètre couleur), Slider Control (Paramètre glissière) pour les tailles, reliés par le pickwhip.
- Character panel (panneau Caractère) : tailles en px depuis les %, soit 32 px pour 3 % et 65 px pour 6 % d'une hauteur de 1080.
- Title/Action Safe (marges de sécurité titre/action) et une grille de 12 colonnes en repères.
- Courbes : Easy Ease (Lissage de vitesse, F9), puis Graph Editor (éditeur de graphique) ; enregistrer chaque courbe en Animation › Save Animation Preset (Enregistrer l'animation prédéfinie).

**À cocher**

- [ ] Style choisi au chapitre 1, 3 adjectifs, 4 à 6 références et 2 lignes de rythme.
- [ ] 5 à 9 interdits, chacun avec sa solution, en tête du prompt.
- [ ] 3 images de style validées avant la construction.
- [ ] Couleurs en hex avec un rôle ; accent ≤ 8 % des pixels.
- [ ] Texte lu ≥ 3 % de la hauteur (4 % en 9:16), message ≥ 6 % ; polices locales chargées.
- [ ] 3 courbes nommées et 1 ressort dans les jetons ; aucune valeur en dur dans les plans.
