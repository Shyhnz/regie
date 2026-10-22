## Le pixel art et le rétro numérique (pixel art, 8/16-bit game UI, retro web)

La grammaire du jeu vidéo 8 ou 16 bits : police bitmap, gros pixels, tramage, flashs d'impact d'une image, chiffres de dégâts, HUD de score. Le spectateur connaît ces codes : un niveau ou un « LEVEL UP! » se lit sans explication. Famille souvent muette (4 sur 6), aucune notée 5. Vu dans 6 vidéos, dont 4 notées 4 ou 5.

**Ce qui définit le style**

- **Palette** : nuit violette #1A1530 (fond), aurore #3A2858 (dégradé tramé), or pâle #E8D8A0 (lune, titres), orange #F09030 (feu, horizon), rouge #E03030 (impact, dégâts), vert #60D060 (gain, validation). Jaune-or dans les 6 vidéos, nuit violette dans 5.
- **Typographie** : police bitmap (Press Start 2P, Silkscreen) en capitales dans 5 vidéos sur 6, chasse fixe, sans lissage ; titres à contour et ombre de 6 à 13 % de la hauteur, légendes à 4 %, mono pour le HUD.
- **Matières et mouvement** : pixel logique de 4 à 10 px réels, agrandi au plus proche voisin, tramage en damier, aucun flou ; paliers et poses tenues, flashs de palette.

![Six vignettes : lac nocturne et dégâts, lune et lapin lunaire, plateforme d'arcade, boomerang et cartouche de JRPG, jeu de cartes, parodie de web 2003](ILLUS:style-pixel-retro)

*Planche de style : les 6 vidéos de la famille ; les deux dernières sont notées 3.*

| Vidéo | Ce qui la rend exemplaire | Palette |
| --- | --- | --- |
| [Personal skills showreel](https://prompt-motion.com/ibrahimwasim240-809370) | CV en niveaux d'arcade, un niveau par mesure, transitions motivées (barre de déploiement → navigateur) | #0C0C14, #BCF840, #48F0F8, #EC2888 |
| [Pixel wizard crypto animation](https://prompt-motion.com/0xevinho-3777d8) | flash d'1 image au départ, 2 à l'impact, étalonnage par sort, escalade en 4 cycles jusqu'à REKT | #1A1530, #E8D8A0, #E03030, #60D060 |
| [Chuseok pixel night scene](https://prompt-motion.com/hoyoyoda-3a5c08) | une seule grille de pixels, chaîne de causes sans texte, boucle parfaite cachée sous un volet à 7 bandes | #140F2E, #3A2A6E, #F9E3A0, #E5364A |
| [Pixel art LLM history](https://prompt-motion.com/pluginplay-3d4006) | métaphore du boomerang tenue en 3 actes, compteur élevé au carré, chute comique | #2A1748, #F2607A, #FFD57A, #D63A4E |
| [Pixel art card battle game](https://prompt-motion.com/aisongman-71ffac) (3/5) | code couleur des camps lisible, mais capture brute à 15 fps, muette | #1E2350, #1F6B45, #C0304A, #F0A830 |

**Quand le choisir** : produit gaming, crypto, outil de développeur, CV ludique, carte de fête en boucle. Public de joueurs, ton complice. À éviter pour une promo SaaS B2B sérieuse et dès que le texte doit être lu sur téléphone.

**Tempo et cadence mesurés** : durée médiane 22,5 s (16 à 26 s), plan médian 2,2 s, image figée médiane 25 %. Modèle de calage (seule vidéo animée sur la musique) : [Personal skills showreel](https://prompt-motion.com/ibrahimwasim240-809370) à 86,4 BPM. Une mesure (2,78 s) = un niveau, 9 mesures = 25,0 s. Les 8 changements de niveau tombent sur le 1er temps à 0-1 im près, la chute sur le 4e. Sans musique, l'horloge est interne. Le pilon de [Chuseok pixel night scene](https://prompt-motion.com/hoyoyoda-3a5c08) passe de 60 à 30 im par frappe à f240 : ce doublement fait la bascule d'acte. Contre-exemple (synchro partielle) : Pixel art LLM history, époques hors grille, son 6 im en retard.

**Courbes signature** (pas d'étude 60 fps) : des paliers, boomerang tourné par crans de 45° toutes les 2-3 im, lapin à 2 poses, texte en tout ou rien. Frappe à 1 lettre par image (BLIZZARD : 8 lettres en 8 im à 30 fps), effacement 1,3 fois plus rapide. Anneau de choc en ease-out fort : rayon de 4 à 20 % de la hauteur en 7 im. Chute en ease-in : la bougie géante passe de 5 à 50 % de la hauteur en 4 im. Tampon sans courbe : REKT saute de 29 à 20 % de la largeur en 1 im.

**Transitions types** : fondu tramé depuis le noir (11 im), voir *La décomposition en trame, tuiles et particules* au chapitre 4 ; volet à bandes décalées d'1 à 1,5 im, voir *Les stores et les bandes en escalier* ; allumage cathodique, voir *La compression : en point ou en ligne, puis l'éclosion* ; flash d'impact, voir *Le coup de flash : surexposition, image négative, glitch RVB* au chapitre 6.

**Structure type** : *L'escalade puis la résolution* (4 cycles de plus en plus gros, ou 3 actes de 12,3, 7,1 et 6,6 s) et *La chute : constat puis retournement* (REKT, KA-BOOM) au chapitre 10 ; dispositif unique (1 compétence = 1 niveau) ; boucle sur PRESS START.

**Règles du style**

1. Une seule grille : pas logique constant (≈ 10 px à 1080p chez Chuseok), déplacements par pas entiers. Les anneaux et lasers vectoriels lisses de Pixel wizard sont le cliché de la famille.
2. Ponctuer par la palette, pas par la coupe : 1 im de flash au départ, 2 im à l'impact (blanc, puis palette inversée), toute la scène teintée dans la couleur de l'action pendant qu'elle dure.
3. Sujet ≥ 15 % de la hauteur, texte ≥ 4 %. Les 6 vidéos échouent quelque part : personnages à 6-10 %, HUD à 1,6 %.
4. Titre de 12 caractères au plus, tapé à 1 lettre par image, puis tenu le temps de lecture (≈ 0,2 s par mot).
5. Avec musique : une scène par mesure, changement sur le 1er temps, chute sur le 4e, puis « bam… BAM » à 1 temps d'écart (42 im). Couper le son 4-5 im (−50 dB) avant le gros impact.
6. Animer les paliers dans le code et rendre à 60 fps ; une capture à 15 fps réduit chaque geste à 2-3 images (Pixel art card battle game).

**Verdict** : à adapter. Pour une promo SaaS, prendre la grammaire d'arcade comme métaphore (score qui roule, niveau par mesure, LEVEL CLEAR) plutôt que le pixel lui-même, comme Personal skills showreel. Ne pas répéter le même tampon : ses 3 tampons identiques usent l'accent (ton rejet du même accent partout).

**HyperFrames (GSAP)**

```js
// Kit pixel-rétro : palette, grille, frappe 1 lettre/image, flash 1+2 im, une mesure par niveau
const FPS = 60, BEAT = 60 / 86.4, BAR = 4 * BEAT;   // 86,4 BPM : 1 mesure = 2,78 s
const at = b => b * BEAT, fr = n => n / FPS;
// CSS : --night #1A1530, --dusk #3A2858, --moon #E8D8A0, --fire #F09030, --hit #E03030, --gain #60D060 ;
// .px { image-rendering: pixelated; font-family: "Press Start 2P"; } (police auto-hébergée)
await document.fonts.ready;
const PX = 10, snap = v => Math.round(v / PX) * PX;  // pas logique : 10 px à 1080p
const t0 = BAR, hit = t0 + at(3);                   // niveau sur le 1er temps, impact sur le 4e
const ch = [...document.querySelectorAll("#title .ch")];
tl.set(ch, { autoAlpha: 0 }, 0);
ch.forEach((c, i) => tl.set(c, { autoAlpha: 1 }, t0 + fr(i)));             // 1 lettre par image
ch.forEach((c, i) => tl.set(c, { autoAlpha: 0 }, hit + fr(Math.round((ch.length - 1 - i) / 1.3))));
tl.set("#scene", { filter: "hue-rotate(-40deg) saturate(1.4)" }, t0)      // étalonnage du sort
  .set("#flash", { autoAlpha: 1, backgroundColor: "#F4F4F4" }, hit)        // flash 1 : blanc
  .set("#scene", { filter: "invert(1)" }, hit + fr(1))                    // flash 2 : inversé
  .set("#flash", { autoAlpha: 0 }, hit + fr(1))
  .set("#scene", { filter: "none" }, hit + fr(2))
  .fromTo("#ring", { scale: 0.2, autoAlpha: 1 },
    { scale: 1, duration: fr(7), ease: "expo.out", immediateRender: false }, hit)
  .to("#ring", { autoAlpha: 0, duration: fr(2), ease: "steps(2)" }, hit + fr(7))
  .to("#cake", { y: 260, duration: fr(12), ease: "power2.in",
    modifiers: { y: y => snap(parseFloat(y)) + "px" } }, t0 + at(1))      // chute sur la grille
  .set("#level-2", { autoAlpha: 1 }, t0 + BAR);                          // « BAM » : niveau suivant
```

**After Effects**

- Dessiner chaque scène dans une précomposition à 192 × 108, puis l'agrandir ×10 dans la composition 1920 × 1080 à 60 fps avec Layer › Quality › Draft (Calque › Qualité › Brouillon), qui échantillonne au plus proche voisin.
- Paliers : Animation › Toggle Hold Keyframe (Image clé maintenue) sur les sprites, ou Effect › Time › Posterize Time (Postérisation temporelle) à 12 im/s. Frappe : Animate › Opacity (Animer › Opacité), Range Selector (Sélecteur de plage) en Units: Index, de 0 à N en N images.
- Flash : un solide blanc d'1 image, puis 1 image d'Effect › Channel › Invert (Couches › Inverser) sur un calque d'effets ; fondu tramé avec Effect › Transition › Block Dissolve (Fondu en blocs), blocs de 10 px, Feather 0.
- Musique : un repère par mesure (166,7 im à 86,4 BPM) avec Layer › Markers › Add Marker (Calque › Repères › Ajouter un repère) ; chaque niveau commence sur un repère.

**À cocher**

- [ ] Un seul pas de pixel dans tout le film ; aucun trait vectoriel lisse.
- [ ] Sujet ≥ 15 % de la hauteur, texte ≥ 4 %, vérifiés sur une image réduite à 390 px.
- [ ] Flash d'1 image au départ et de 2 images à l'impact, sans coupe de caméra.
- [ ] Avec musique : chaque changement de scène sur un 1er temps, à ±1 image.
- [ ] Le même tampon ou la même exclamation n'apparaît pas plus de 2 fois.
- [ ] Rendu à 60 fps, son présent (bruitage 8-bit sur chaque impact).
