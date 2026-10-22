## Le compteur qui roule (rolling counter, count-up, odometer, slot reel)

Un nombre monte vers sa cible en décélérant, chiffres qui défilent comme un odomètre, puis se fige sur un temps. L'œil le suit jusqu'au bout : la preuve devient un événement. Les meilleures vidéos le font en power3.out ou power2.out, en 1 à 2 temps (28 à 60 im à 60 fps), et seuls les derniers chiffres tournent encore à l'arrivée. Vue dans 99 vidéos, dont 84 notées 4 ou 5.

![Compteur de clics au-dessus d'un globe : 671,752 puis 972,38x, 1,141,233… jusqu'à 1,284,003, les derniers chiffres floutés en plein roulement et le zéro de tête grisé](ILLUS:compteur-qui-roule-1)

*[Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:02.38 à 0:04.37 : le compteur héros monte en power3.out ; les chiffres de gauche se figent tôt, les deux derniers roulent avec flou jusqu'à la fin.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Héros en power3.out | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:02.30 | 0 → 1 284 093 en 131 im (2,2 s), rms 0,3 % ; moitié de la valeur en 17 % du temps (étude 60 fps) |
| Un temps exact | [Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:03.77 | 0 → 128 en 28 im, power1.out, du temps 8 au temps 9 à 128 BPM ; incréments 9, 9, 8… 1 (étude 60 fps) |
| Rouleaux verrouillés de gauche à droite | [Jev engineering showreel](https://prompt-motion.com/polydao-7a572b), 0:20.15 | prix flou verticalement ; « $0. » fixé f1222, « 4 » f1229, « 2 » f1234 ; « / M » posé au demi-temps f1216 |
| Largeur fixe, zéros de tête grisés | [MotionSites one million visitors](https://prompt-motion.com/viktoroddy-98c1d8), 0:18.30 | « 0,000,000 » : zéros #3A3438 qui blanchissent en devenant significatifs ; 112 im en ease-in-out |
| Le compteur entraîne son voisin | [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 0:10.20 | +0 → +248 % en 60 im = 2 temps, power2.out ; l'anneau 0 → 87 % part 6 im plus tard, même courbe (étude 60 fps) |
| Ease-in qui chauffe (le problème) | [AIsa API key promo](https://prompt-motion.com/0xfemyn-e114d3), 0:01.87 | ≈ ×1,25 par image, arrêt sec sur 5,000 sans ralenti ; le blanc vire au rouge-orangé #E8513A avec la valeur |
| Attente à 99 % | [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:12.63 | 99 % tenu 21 im pendant la coupure de basse ; 100 % sur la double-croche, −0,5 im (étude 60 fps) |
| Cascade de rouleaux | [LiteLLM promo reel](https://prompt-motion.com/misbahsy-80eaec), 0:11.33 | « 140+ » posé au demi-temps f690, puis « 1,800+ » et « 58.8k » décalés de 0,4 à 0,5 s ; chiffres ≈ 17 % H |

![Odomètre 0,000,000 : les zéros de tête gris passent au blanc un à un, les derniers chiffres roulent avec flou, une courbe monte dessous jusqu'à 1,000,000](ILLUS:compteur-qui-roule-2)

*[MotionSites one million visitors](https://prompt-motion.com/viktoroddy-98c1d8), 0:18.30 à 0:22.03 : la largeur ne bouge jamais, les zéros gris blanchissent dès qu'ils comptent.*

**Règles de construction**

1. Courbe : power3.out pour une preuve (5 compteurs de Dub promo video, rms 0,3 %), power2.out sur 2 temps (sudo-kiran-49176d, twoclipping-5cba86). Repère : la moitié de la valeur au premier cinquième du temps. Ease-in-out quand le chiffre mime un processus (images rendues : grace-sunnyy, power2.inOut 40 im ; envoi en % : manuelogomigo). Ease-in pour un problème qui s'emballe.
2. Durée : 1 temps (28 im à 128 BPM) pour un chiffre de passage, 2 temps (60 im à 120 BPM) pour une preuve, 2,2 s au plus pour le héros (131 à 140 im). Un chiffre déjà connu claque en 7 à 12 im (52 → 128 BPM en 7 im, m1n9-k7). Le guide Otom propose 2,5 s (p. 8) : nos meilleures vidéos restent sous 2,3 s.
3. Calage (vidéos animées sur la musique) : départ sur un temps ou un demi-temps, arrivée sur le temps suivant ou 1 à 4 im avant (fionntobin 0 im, grace-sunnyy −1, palashbagchi −2, twoclipping −4). Une attente à 99 % se tient jusqu'à la reprise. Contre-exemple : « 2.0M+ » devenu « 2M+ » hors temps décale le « + » de 4 % de la largeur (astrodevil).
4. Largeur fixe : chiffres tabulaires (tabular-nums, guide Otom p. 8), zéros de tête à 20 % d'opacité (nolkeeg) ou gris (viktoroddy), séparateurs immobiles. En chasse variable, le bloc centré change de largeur (henkvaness) : aligner à gauche. En français : virgule décimale, espace insécable avant l'unité (guide Otom, p. 8).
5. Rouleaux : seuls les chiffres qui changent tournent, avec flou vertical ; ceux de gauche se figent d'abord, environ 2 im d'écart par colonne (ghinaiya-nirmal, 900 en 13 im). Le « + » s'ajoute au dernier pas.
6. Un compteur héros par plan, de 10 à 30 % de la hauteur ; à 2,5 % il est illisible sur téléphone (samuel-yostt). Le voisin (anneau, barre, filet) suit avec la même courbe, 0 à 6 im plus tard ; un changement de couleur au seuil tombe sur le temps (daniel-haida : arc vert à 85, f600, temps f601).

**Verdict** : à reprendre. Ton effet préféré, et la valeur sûre des plans de preuve : un héros par plan, power3.out, posé sur le temps. Si chaque plan en a un, alterne avec un chiffre qui claque en 8 im.

**Quand l'utiliser** : promo SaaS (utilisateurs, gains, prix), explainer de données, showreel éditorial, typo cinétique 1600 quand la voix cite un chiffre. Il sert la preuve, la chute ou l'accroche chiffrée ; en ease-in, il pose le problème. Courbe et police tabulaire se fixent au système de design ; départ et arrivée se calent en construisant le plan. À éviter pour un chiffre inventé ou approximatif, pour deux héros dans le même plan, et sous 3 % de la hauteur.

**HyperFrames (GSAP)**

```js
// Odomètre héros : 0 → 1 284 093 en power3.out sur 2 temps, un rouleau par colonne, zéros grisés
const FPS = 60, BEAT = 60 / 120;                     // 120 BPM : 1 temps = 30 im
const at = b => b * BEAT, F = n => n / FPS;
const TARGET = 1284093, START = at(8), DUR = at(2);  // part sur le temps 8, posé sur le temps 10
const ease = gsap.parseEase("power3.out");
// DOM : .col (overflow:hidden, 1em) > .strip « 0…9 0 » (11 chiffres empilés), virgules fixes, tabular-nums
const cols = [...document.querySelectorAll("#counter .col")].reverse();   // cols[0] = unités
const val = t => TARGET * ease(gsap.utils.clamp(0, 1, (t - START) / DUR));
function draw() {
  const t = tl.time(), v = val(t), dv = v - val(t - F(1));              // vitesse = écart sur 1 image
  cols.forEach((col, k) => {
    const p = 10 ** k;                                                    // odomètre mécanique :
    const pos = k === 0 ? v % 10                                          // les unités tournent en continu,
      : Math.floor(v / p) % 10 + Math.max(0, (v % p) - (p - 1));          // les autres au passage du 9
    gsap.set(col.firstElementChild, { yPercent: -pos * 100 / 11,
      filter: `blur(${Math.min(dv / p * 0.5, 4).toFixed(2)}px)` });      // flou tant que la colonne tourne
    gsap.set(col, { opacity: v >= p || k === 0 ? 1 : 0.2 });             // zéros de tête à 20 %
  });
}
tl.to({}, { duration: DUR + F(2), ease: "none", onUpdate: draw }, START);
draw();                                                                   // état de départ : 0,000,000
// « + » au dernier pas ; anneau 0 → 87 % qui suit 6 im plus tard, même courbe (<circle pathLength="100">)
tl.set("#plus", { autoAlpha: 0 }, 0)
  .set("#plus", { autoAlpha: 1 }, START + DUR)
  .fromTo("#ring-arc", { strokeDashoffset: 100 },
    { strokeDashoffset: 13, duration: DUR, ease: "power3.out", immediateRender: false }, START + F(6));
```

**After Effects**

- Compteur simple : expression sur Source Text (Texte source) du calque de texte, power3.out exact sur 60 im : `t = linear(time, inPoint, inPoint + 1, 0, 1); v = 1284093 * (1 - Math.pow(1 - t, 3)); String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")`. Calque démarré sur un Composition Marker (marqueur de composition) posé sur le temps.
- Odomètre : un Null Object (objet nul) « Ctrl » porte Effect › Expression Controls › Slider Control (Effet › Options pour expressions › Paramètre glissière) avec la même formule. Une colonne = un texte « 0 à 9 puis 0 », un chiffre par ligne, sous un rectangle en Track Matte (cache par approche) Alpha.
- Position de chaque colonne : `v = thisComp.layer("Ctrl").effect("Slider Control")("Slider"); k = 0; p = Math.pow(10, k); pos = k == 0 ? v % 10 : Math.floor(v / p) % 10 + Math.max(0, v % p - (p - 1)); value - [0, pos * 120]` (120 = interligne en px ; k = 1, 2… ensuite).
- Activer Motion Blur (Flou de mouvement) sur les colonnes et la composition : le mouvement piloté par expression est flouté aussi, donc seules les colonnes qui tournent se floutent. Zéros de tête : Opacity (Opacité) `v >= p || k == 0 ? 100 : 20`.
- Anneau : calque de forme Ellipse + Trim Paths (Réduire les tracés), End (Fin) avec la même expression décalée de 6 im (`time - 6 * thisComp.frameDuration`), cible 87.
