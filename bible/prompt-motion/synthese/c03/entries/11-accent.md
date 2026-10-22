## Le mot accent : couleur, italique, deux tons (accent keyword, italic serif accent word, two-tone headline)

Dans une phrase uniforme, un seul mot ou la seconde ligne change de traitement : couleur de marque, serif italique, dégradé, noir contre gris. L'œil trouve le mot clé sans zoom ni effet, au même corps que le reste. Le piège est la répétition : le mot accent en italique revient dans 17 des 58 vidéos, souvent à chaque titre. Les meilleures font bouger l'accent sur la musique. Vue dans 58 vidéos, dont 38 notées 4 ou 5.

![Huit images : MOTION entre deux filets ; la couleur orange passe du M au O, puis au T, puis au I qui reste orange](ILLUS:accent-1)

*[3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155), 0:01.00 à 0:01.80 : l'accent orange saute de lettre en lettre sur la grille, et le I le garde comme un curseur.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Accent qui saute de lettre en lettre | [3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155), 0:01.05 | Étude 60 fps : M, O, T, I au pas de 14, 7, 14 im, 1 im avant la grille ; montée 5 im sine.inOut, retour 18 im sine.out |
| Graisse qui suit la voix | [Synced lyrics motion video](https://prompt-motion.com/samaote-5e2fc2), 0:06.80 | Mots appuyés par le chant en serif très grasse 10 à 11 % H ; phrases calmes en italique fin ≈ 4,5 % H |
| Mot clé en serif italique de couleur | [FundMyCompute platform overview](https://prompt-motion.com/jayscambler-3f8889), 0:02.42 | Grotesque serrée + serif italique verte : #075648 sur clair, #61E2B4 sur sombre ; 18 % H par ligne à l'accueil |
| Italique au même corps | [Studio website showreel](https://prompt-motion.com/andginja-333d32), 0:01.90 | Serif italique fine bleu glacier #95C3CC dans une grotesque ExtraBold blanche, même corps ; signature de chaque chapitre |
| Expression noire dans un texte gris | [Frame by Frame launch video](https://prompt-motion.com/notdwd-7de38a), 0:05.29 | Corps Inter 400 gris #BCBCBA à 4,4 % H ; seule « frame for frame » en 600 noir, lisible à distance |
| Distillation : le reste s'éteint | [Distilbook motion showreel](https://prompt-motion.com/itisrazak-3ad902), 0:09.60 | Paragraphe serif ≈ 2,5 % H : du quasi noir au gris clair en ≈ 0,3 s ; 8 mots-clés restent lisibles |
| Ligne 2 = verdict coloré | [Backlink audit data promo](https://prompt-motion.com/palashbagchi11-0a4b6b), 0:13.27 | Ligne 1 noire ; ligne 2 brique #A3434A si elle aggrave, grise #8C8C8C si elle rassure ; même corps ≈ 10 % H |
| Dégradé unique avec lueur | [Ora 2 image model launch film](https://prompt-motion.com/rossaxbt-3085b7), 0:10.20 | Seul « better » en dégradé rose #E05DD0 → violet #8F7CF7 avec lueur ; seule couleur de tout le film |

![Trois images : Get supported avec supported en serif italique verte sur fond clair, puis 11 credits et accounted for. en italique vert clair sur fond sombre](ILLUS:accent-2)

*[FundMyCompute platform overview](https://prompt-motion.com/jayscambler-3f8889), 0:02.83 à 0:12.57 : la même recette à chaque scène, vert foncé sur clair, vert clair sur sombre.*

**Règles de construction**

1. Un accent par écran, sur le mot qui porte le sens : la chute, le bénéfice ou le verdict, souvent le dernier mot ou la 2e ligne (aschapmann, devius-maximus, iammxfschr, kloss-xyz, thilina-a). Le guide le dit aussi : « une seule couleur d'accent, réservée à ce qui compte » (guide Otom, p. 6).
2. Même corps, même ligne de base : l'emphase vient du style, pas de la taille (andginja, blushpetal795, souravbhar871, bogdandragomir). Si le mot accent est l'information principale du plan, passe-le à ×1,5 ou ×2 : linearuncle finit en ×1,5 et jaune ; le guide demande ×2 et seul dans l'accent (guide Otom, p. 14).
3. Une couleur d'accent par film, en deux valeurs : foncée sur fond clair, claire sur fond sombre (jayscambler #075648 / #61E2B4, agonaliu #2B40EA / #A2AEFF, ho-ba #B05838 / #D88C60). Sur un fond de la couleur d'accent, l'accent passe au noir (devius-maximus).
4. Deux tons : la partie secondaire en gris moyen (#818181, #8E8E8E, #6E6E73), même graisse (reyzostyle, davidmarcus, wozu-co). Quand une ligne arrive, la précédente passe au gris : une seule idée active (davidmarcus, visheshbaghell).
5. Faire bouger l'accent plutôt que le répéter : saut de lettre au pas de 7 à 14 im (sahildesigner23), extinction du reste en 0,3 s (itisrazak), mot accent qui entre en dernier en 5 im (tstfully, fractadev).
6. Le duo grotesque + serif italique de couleur à chaque titre devient mécanique : quickdesignio (6 titres) est jugé « cliché », tstfully (5 titres sur 6) « mécanique ». Sans charte, le rendu tend vers le générique (guide Otom, p. 4) : ce duo en est la forme la plus visible.

**Verdict** : à adapter. Garde un seul système d'accent par film, mais pas sur chaque titre : un titre sur trois au plus, sinon c'est le même accent répété partout que tu rejettes. Fais-le vivre une fois sur la musique (saut de lettre, extinction du reste) au lieu de le poser.

**Quand l'utiliser** : partout où une phrase porte un mot clé : promo SaaS (titres de fonction, bénéfice en 2e ligne), explainer de données (verdict coloré), typo cinétique 1600 (graisse qui suit la voix, accent qui saute sur le temps). Il se décide au système de design (couleur d'accent et style d'accent), puis se place à la construction de chaque plan. À éviter quand le mot reçoit déjà un zoom ou une échelle, et ne jamais cumuler couleur, italique, soulignement et dégradé.

**HyperFrames (GSAP)**

```js
// Accent qui saute de lettre en lettre, titre en deux tons, puis distillation du paragraphe
const FPS = 60, F = n => n / FPS;
const BEAT = 60 / 128, at = b => b * BEAT;          // 128 BPM
const ACCENT = "#FF6B4A", INK = "#F3EFE6", DIM = "#5C5C5C";

// 1) Lettres de MOTION (spans .ch) : M, O, T, I au pas de 14, 7, 14 im, 1 im avant la grille
const ch = gsap.utils.toArray("#motion .ch");
const steps = [1.5, 2, 2.25, 2.75];                  // demi-temps, temps, ¼, ¾ de la mesure
steps.forEach((b, i) => {
  const t = at(4 + b) - F(1);
  tl.to(ch[i], { color: ACCENT, duration: F(5), ease: "sine.inOut" }, t);
  if (i < steps.length - 1)                          // le I garde l'accent, comme un curseur
    tl.to(ch[i], { color: INK, duration: F(18), ease: "sine.out" }, t + F(5));
});

// 2) Deux tons : la ligne 2 arrive, la ligne 1 passe au gris en 8 im (une seule idée active)
tl.set("#l2", { autoAlpha: 0 }, 0)
  .to("#l2", { autoAlpha: 1, duration: F(6), ease: "power2.out" }, at(10))
  .to("#l1", { color: "#8E8E8E", duration: F(8), ease: "power1.out" }, at(10));

// 3) Distillation : les mots ordinaires s'éteignent en 0,3 s, les .key prennent l'accent
tl.to("#para .w:not(.key)", { color: DIM, duration: 0.3, ease: "power1.out" }, at(14))
  .to("#para .key", { color: ACCENT, duration: F(6), ease: "power2.out" }, at(14));
```

**After Effects**

- Accent fixe : sélectionner le mot dans le calque de texte et changer police (serif italique), couleur ou graisse dans le Character panel (panneau Caractère) ; un calque garde des styles mixtes. Même corps que le reste.
- Saut de lettre : Text › Animate › Fill Color › RGB (Texte › Animer › Couleur de remplissage › RVB) (accent). Range Selector › Advanced (Sélecteur de plage › Avancé) : Units Index (Unités Index), Based On Characters (Basé sur Caractères), Start 0, End 1 (Début 0, Fin 1), Shape « Round » (Forme « Arrondi »). Clés d'Offset (Décalage) 0, 1, 2, 3 sur les marqueurs de la grille, 1 im avant ; transition de 5 im, retour en 18 im.
- Deux tons : la 2e ligne en gris dès la frappe ; ou animateur Fill Color gris sur la ligne 1, de 0 à 100 % en 8 im quand la ligne 2 entre.
- Distillation : dupliquer le calque, ne garder que les mots-clés sur la copie du dessus ; sur le calque de base, Effect › Generate › Fill (Effet › Générer › Remplissage) gris, Opacity (Opacité) 0 → 100 % en 0,3 s (9 im à 30 fps).
- Couleur d'accent en deux valeurs (foncée sur clair, claire sur sombre) déclarées une fois : un Null Object (Objet nul) « Charte » avec Effect › Expression Controls › Color Control (Effet › Paramètres pour expressions › Paramètre couleur) (×2), relié aux couleurs de remplissage par le Pick Whip (sélecteur de propriété) (icône en spirale).
