## Un seul langage d'image : style maison ou pastiche de genre (consistent illustration style, art direction, genre pastiche)

Toutes les images du film suivent une seule grammaire : gravure détourée, pixel art à pas unique, bichromie, étalonnage commun. Ou le film emprunte en bloc les codes d'un genre (jeu 8-bit, feutrine, manga) parce qu'il explique le sujet. La cohérence fait passer des images de sources diverses pour une direction artistique : chez lexnlin, plus de 60 gravures forment un seul monde. Vue dans 25 vidéos, dont 18 notées 4 ou 5.

![Six images : l'écran titre SUPER RECURSIVE QUEST dans un cadre, puis le niveau 8-bit plein cadre avec HUD, boîte de dialogue et badge SAVING, le bloc « ? » qui s'ouvre sur un tableau LEVEL 4, et ce tableau devenu documentaire nature](ILLUS:langage-image-1)

*[Recursion explained in genres](https://prompt-motion.com/emollick-8661a8), 0:14.50 à 0:19.33 : tout le kit du jeu vidéo (police Press Start 2P, HUD, chrono, bloc « ? ») sert la métaphore « sauvegarder = empiler ».*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Fonds d'archives détourées | [Engraving-style Claude ad](https://prompt-motion.com/lexnlin-038035), 0:00.75 | Plus de 60 gravures N&B sur blanc pur, sans cadre ; étude 60 fps : carrousel de 9 images en 33 im, plans de 2 à 7 im |
| Pastiche 8-bit qui explique | [Recursion explained in genres](https://prompt-motion.com/emollick-8661a8), 0:14.50 | HUD LEVEL 3, TIME 300 → 288, badge « SAVING… » puis « SAVED! » : le cadre de pile mis en attente ; 4,8 s |
| Pastiche émission enfant en feutrine | [Recursion explained in genres](https://prompt-motion.com/emollick-8661a8), 0:30.00 | Poupée russe qui s'ouvre, étiquettes « 3! » « 4! » ; la TV sur ressort devient le portail suivant ; 4,9 s |
| Pixel art à grille unique | [Chuseok pixel night scene](https://prompt-motion.com/hoyoyoda-3a5c08), 0:00.00 | Pixel logique ≈ 10 px (grille 192 × 108), plus proche voisin, tramage sur 2 tons ; lune, sprites et police au même pas |
| Codes du jeu vidéo sur la grille | [Personal skills showreel](https://prompt-motion.com/ibrahimwasim240-809370), 0:13.77 | « WARNING » seul 8 im ; le boss tombe sur le 1er temps (f834) ; touche = silhouette blanche 3 im, 4 touches à 0,35 s |
| Bichromie d'affiche | [Ora 2 image model launch film](https://prompt-motion.com/rossaxbt-3085b7), 0:14.75 | Le portrait vire en rose #F07ACB / bleu #3A3FD0 à mesure que « Style strength » monte ; 27 im |
| Étalonnage commun des images générées | [fal motion design showreel](https://prompt-motion.com/influencer-seo-ce8c33), 0:01.07 | Une dizaine de sujets aux noirs profonds, matières désaturées, reflets violets ; scènes de 2 temps (58 im à 124 BPM) |
| Case manga qui claque | [Talking-head clip edit](https://prompt-motion.com/sab8a-364a5a), 0:19.00 | Case inclinée de 22 × 28 % du cadre, pleine en 1 im ; mots de 130 % flous à 100 % nets en 2 im |

![Six images verticales : cavalier de Muybridge, cheval écorché sur une règle, squelette annoté d'un cercle, buste de marbre sous des réglures, tête antique avec ellipse sur l'œil, profil de proportions](ILLUS:langage-image-2)

*[Engraving-style Claude ad](https://prompt-motion.com/lexnlin-038035), 0:04.08 à 0:04.92 : six sources différentes, une seule grammaire (noir et blanc détouré, filet noir, point corail).*

**Règles de construction**

1. Fixer la grammaire au système de design : une technique de rendu, un pas, un étalonnage, et une seule couleur hors matière. Pixel de 10 px partout (hoyoyoda) ; N&B sur blanc avec le seul corail en accent (lexnlin) ; violet partout (influencer-seo).
2. Un écart de registre se voit en une image, et chaque cas est « à adapter ». Gravure réaliste dans un système plat (utopyaszx), pavillon plat sous un ciel en shader (demitiyageekzen), dioramas 3D dans un film plat (jesscaroline7).
3. Un pastiche prend tout le kit (police, HUD, texture, son) et une métaphore exacte : « SAVING… » = mise en pile. Le genre gratuit devient cliché : synthwave de 14 im sur « DESIGN » (rendesr), cosmos à étoile ✦ (ajith-io).
4. Durées : un genre qui explique tient 4 à 5 s (emollick, 4,8 et 4,9 s). Un insert de genre entre en 1 im : case manga (sab8a), image d'impact en silhouette d'1 im suivie de 3 im de halo (faroukzy).
5. Sur la musique, seulement dans les vidéos animées dessus : changement d'univers sur le 1er temps de mesure (ibrahimwasim, 8 niveaux sur 8). Coupes 1,8 à 2,3 im avant l'attaque (lexnlin, 67 sur 87). Scènes de 2 temps (influencer-seo).
6. Jamais d'émoji en guise de logo ou d'illustration : rendu qui dépend du système, échelles hétérogènes (alex-prompter, yunn260414). Dessiner un pictogramme au trait dans le système, ou coder des silhouettes par accessoire (triglyceee).

Pour une métaphore qui gouverne tout le film, voir chapitre 10, « Le dispositif unique ». Pour l'image dans la lettre, voir chapitre 3, « La lettre comme image ».

**Verdict** : à reprendre. Le style maison se choisit une fois et ne bouge plus. Le pastiche est « à adapter » : à garder seulement s'il explique le propos, avec tout son kit, sinon c'est un cliché.

**Quand l'utiliser** : à l'étape direction artistique, avant le moindre plan, puis verrouillé au système de design (filtre, pas, police). Archives détourées pour un showreel éditorial ; étalonnage commun pour une promo SaaS qui montre des images générées ; pastiche pour un explainer. En typo cinétique 1600, l'image reste secondaire : une seule texture, pas de genre. À éviter quand le genre n'a aucun lien avec le sujet.

**HyperFrames (GSAP)**

```js
// Langage unique : étalonnage commun, HUD 8-bit en paliers, case manga qui claque en 1 image
const FPS = 30, F = n => n / FPS;                 // 30 im/s comme le pastiche mesuré
const BEAT = 60 / 120;                            // 120 BPM
const at = b => b * BEAT;
// CSS posé une fois (pas animé) : .img { filter: url(#grade) }  ← feColorMatrix SVG maison
// pixel art : sprites dessinés à 192 × 108, .pix { image-rendering: pixelated }, agrandis × 10
const hud = { t: 300 };
const timeEl = document.querySelector("#time");
// chrono 8-bit : 300 → 288 en ≈ 4 s, affichage par unités entières (≈ 3 par seconde)
tl.to(hud, { t: 288, duration: 4, ease: "none",
  onUpdate: () => { timeEl.textContent = "TIME " + Math.ceil(hud.t); } }, at(1));
// badge de sauvegarde : deux états francs, aucun fondu (grammaire 8-bit)
tl.set("#saving", { autoAlpha: 1 }, at(3))
  .set("#saving", { autoAlpha: 0 }, at(5))
  .set("#saved", { autoAlpha: 1 }, at(5));
// case manga : pleine en 1 im, inclinée, puis mots de 130 % flous à 100 % nets en 2 im
const P = at(8);
tl.set("#panel", { autoAlpha: 1, rotation: -4 }, P)
  .set(".manga-word", { autoAlpha: 0, scale: 1.3, filter: "blur(8px)" }, 0)
  .to(".manga-word", { autoAlpha: 1, scale: 1, filter: "blur(0px)",
      duration: F(2), ease: "power2.out", stagger: F(6) }, P + F(1));
// image d'impact : 1 im en silhouette, puis 3 im de halo blanc
tl.set("#impact", { autoAlpha: 1 }, at(12))
  .set("#impact", { autoAlpha: 0 }, at(12) + F(1))
  .fromTo("#bloom", { autoAlpha: 1 }, { autoAlpha: 0, duration: F(3), ease: "power1.out",
      immediateRender: false }, at(12) + F(1));
```

**After Effects**

- Étalonnage commun : un Layer › New › Adjustment Layer (Calque › Nouveau › Calque d'effets) au-dessus de toutes les images. Effect › Color Correction › Curves (Correction colorimétrique › Courbes) écrase les noirs, Tritone (Trois tons) donne la teinte maison.
- Bichromie : Effect › Color Correction › Tint (Teinte), Map Black To #3A3FD0, Map White To #F07ACB. Animer Amount to Tint (Quantité de teinte) de 0 à 100 % en 27 im.
- Pixel art : sprites importés à leur taille native, Scale (Échelle) 1000 %. Layer › Quality › Draft (Calque › Qualité › Brouillon) agrandit sans lissage. Un seul pas pour tous les calques.
- Chrono 8-bit : expression sur Source Text (Texte source) : `"TIME " + Math.ceil(300 - (time - inPoint) * 3)`. Badges en images clés maintenues (Toggle Hold Keyframe, Basculer l'interpolation maintenue).
- Case manga : Shape Layer (calque de forme) rectangle incliné de −4°, contour noir sur bord blanc, coupé net sur l'image. Mots : Scale 130 → 100 % et Fast Box Blur (Flou rapide) 8 → 0 en 2 im, décalés de 6 im.
