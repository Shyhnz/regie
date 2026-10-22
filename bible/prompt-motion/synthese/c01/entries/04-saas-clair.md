## La démo produit claire : keynote, verre et plan-séquence (light product demo, Apple-style keynote, frosted glass, continuous shot)

L'interface vit à l'écran sur fond blanc ou crème : frappe, curseur, changements d'état, souvent en plan-séquence ou par un seul conteneur qui se transforme. **Palette type** : page #FDFDFB, crème #F3EEE6, encre #111111, gris #9A9A9A du mot variable, un accent de marque #EE5B30 (ou #1E73BE, #4A7559), halo pastel #F9C6AE ou brume #B7CFEB. **Polices** : grotesque neutre (Inter dans 26 vidéos sur 37, Geist dans 8, Manrope) en casse de phrase (28 vidéos), interlettrage ≈ −3 %, souvent un point final ; titres à 5-12 % de la hauteur ; mono pour URL et code. **Matières** : halo (21 vidéos), flou de mouvement (19), ombres douces (14), verre dépoli (5). Vu dans 37 vidéos, dont 23 notées 4 ou 5 (aucune notée 5, 14 notées 3, moyenne 3,62).

![Planche de style : neuf vidéos de la famille, interfaces claires, verre dépoli, crème et blanc, un accent par vidéo](ILLUS:style-saas-clair)

*Planche de style : Shape morphing, Photo print, Frame by Frame, Ren, Ora 2, Cinetic skill, ViralGrow, Prompt Motion, Commotion.*

| Vidéo | Ce qui la rend exemplaire | Palette |
| --- | --- | --- |
| [Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86) | Étude 60 fps : une forme sans coupe sur 12 états, en ressorts | #F2F0EB · #131310 · #FFFFFF · #1EA85D |
| [Photo print app launch film](https://prompt-motion.com/twoclipping-221cab) | Plan-séquence : chaque scène naît de l'objet précédent | #EEEEEA · #0A0A0B · #E9E7FA · #3355DD |
| [Frame by Frame launch video](https://prompt-motion.com/notdwd-7de38a) | Entrées exponentielles, flou calé sur la vitesse, verre dépoli | #FDFDFB · #B7CFEB · #1E2F52 · #2F6BFF |
| [Cinetic skill launch film](https://prompt-motion.com/lexnlin-6161a6) | Le curseur de texte relie toutes les scènes, une scène par mesure | #F8FAFB · #111418 · #1E73BE · #D63A40 |
| [ViralGrow product promo](https://prompt-motion.com/samuel-yostt-891f87) | Avatar → bobine, carte → téléphone, mur → logo, sur 128 BPM | #FFFFFF · #F9C6AE · #EE5B30 · #111111 |
| [UGC ad generator promo](https://prompt-motion.com/twoclipping-6dd14e) | Une scène par mesure de 2 s, clair puis nuit après le drop | #F6F3EF · #FF5A36 · #111111 · #0B0B0B |

**Quand le choisir** : démo d'une fonctionnalité, page d'accueil animée, tutoriel, public déjà intéressé ; ton calme et crédible. Trois adjectifs pour la charte (guide Otom, p. 5) : clair, précis, aéré. Pour NuOps : la démo d'un module sur le site, ou les respirations claires d'une promo nuit. À éviter pour une accroche sociale non rythmée, et au-delà de 31 s (moyenne 3,30). Le guide Otom (p. 4) part de vos captures : reconstruisez plutôt l'interface en HTML, pour la grossir.

**Tempo et cadence (mesurés)** : 14 vidéos sur 37 seulement animées sur la musique, et toutes notées 4 (moyenne 4,00, contre 3,43 en synchro partielle et 3,25 en musique posée ou muette). 120 BPM dans 8, 128 dans 3. Durée médiane 23 s, plan médian 3,6 s, 12 plans-séquence, image figée 42 %. Modèles de calage (animés sur la musique) : Shape morphing met le pic de vitesse de chaque morph sur le temps (départ 3-5 im avant) ; Cinetic skill change de scène à chaque mesure, 1 im avant le temps ; UGC ad generator part sur le temps, atterrit 5-8 im plus tard ; Frame by Frame coupe 5-7 im avant la grosse caisse. Photo print et Ora 2 (synchro partielle) sont des modèles de style, pas de calage.

**Courbes signature** (étude 60 fps de Shape morphing) : ressorts amortis partout, ω 16-19. Le conteneur qui grandit : ζ 0,62-0,74 (≈ back.out(1.0-1.4)), dépassement 3-8 %. Celui qui rétrécit : ζ 0,78-0,90 (≈ sine.out), 2 % au plus. Bord avant et bord arrière décalés de 3-4 im : étirement ×1,26-1,32. Compteurs power2.out en 22-30 im. Ressort décrit dans 13 vidéos sur 37.

**Transitions types** : *L'objet relais* (49 %) et *L'iris né d'un point*, au chapitre 4 ; *Le morphing de forme* (chapitre 6) ; *La mise en page qui se recompose* (chapitre 2, 3,3 fois le corpus) ; *La poussée et le volet plein* (35 %). *Le fondu et le passage par le fond* sert dans 51 % des vidéos : c'est le tic de la famille.

**Structure type** : *La signature finale* (57 %), *L'arc de pitch* (30 %), *Le bouclage : serre-livres, rappel et boucle parfaite* (27 %), *Le fil rouge*, au chapitre 10.

**Règles du style**

1. Musique choisie avant la construction, une scène par mesure (2 s à 120 BPM).
2. Aucun maintien de plus de 1 s, image figée sous 20 %. Le guide Otom (p. 7 et 14) fige un texte 1,5 s et la fin 2,5 s ; la Bible corrige (voir *Le maintien : temps de lecture ou temps mort*, chapitre 9).
3. Message à au moins 6 % de la hauteur ; l'interface sous 2 % se lit par une poussée calibrée, sans mot coupé (titre coupé ≈ 20 im dans ViralGrow). Curseur : arrêt de 130 à 270 ms avant le clic, pas 300 ms (guide Otom, p. 11 ; voir *Le curseur acteur*, chapitre 7).
4. Ressorts (grandir ζ 0,6-0,75, rétrécir 0,8-0,9), jamais un ease-in-out uniforme (« un peu mou » dans [Tented image gen product video](https://prompt-motion.com/justincooperman-e7bbc4)).
5. Flou de mouvement au-delà de 40 px par image, à 8-16 sous-images : à 3 ou 4, des copies fantômes ([Morphing UI states loop](https://prompt-motion.com/demonugc-4c5753)). Voir *Le flou de mouvement et les traînées* (chapitre 6).

**Verdict** : à adapter. La crédibilité est là, la cadence non. Les 17 vidéos notées 5 ont un plan médian de 0,47 s, 10 % d'image figée, un plus long maintien de 1,27 s ; cette famille, 3,6 s, 42 % et 2,38 s (6,8 s et 57 % chez ses notées 3). 20 vidéos sur 37 finissent sur plus de 1,5 s figées (3 sur 17). 38 % sont animées sur la musique (14 sur 17). Le texte d'interface illisible fait perdre le point dans 15 vidéos (3 sur 17). Pour viser 5 : garder plan-séquence et ressorts, mais un geste par demi-temps et une scène par mesure, comme Shape morphing.

**HyperFrames (GSAP)**

```css
:root { --page:#FDFDFB; --ink:#111111; --accent:#EE5B30; --glow:#F9C6AE; }
@font-face { font-family:"Inter"; src:url(assets/fonts/Inter-var.woff2); font-weight:100 900; } /* locale */
body { background:radial-gradient(40% 50% at 85% 10%, var(--glow), transparent), var(--page); letter-spacing:-.03em; }
```

```js
// Kit « SaaS clair » : 120 BPM, une scène par mesure, ressorts de l'étude 60 fps
await document.fonts.ready;
const BEAT = 60 / 120, at = b => b * BEAT, F = n => n / 60;
const bar = k => at(4 * k);                         // début de la mesure k (2 s)
const spring = (w, z, d) => { const wd = w * Math.sqrt(1 - z * z);   // ressort amorti normalisé
  const s = t => 1 - Math.exp(-z * w * t) * (Math.cos(wd * t) + z * w / wd * Math.sin(wd * t));
  return p => s(p * d) / s(d); };
// Bouton -> carte (grandir, ζ 0,72) : départ 4 im avant, pic sur le temps
tl.to("#shape", { width: "62%", height: "58%", borderRadius: 28, duration: F(30), ease: spring(17, 0.72, F(30)) }, bar(1) - F(4))
// Échange de contenu par le flou, 2 im de chevauchement
  .to("#old", { filter: "blur(20px)", autoAlpha: 0, duration: F(6), ease: "sine.in" }, bar(1))
  .fromTo("#new", { filter: "blur(20px)", autoAlpha: 0 },
    { filter: "blur(0px)", autoAlpha: 1, duration: F(8), ease: "sine.out", immediateRender: false }, bar(1) + F(4))
// Curseur : arrêt de 8 im, clic 1 im avant le temps 6
  .to("#cursor", { x: 640, y: 380, duration: F(24), ease: "power2.inOut" }, at(6) - F(33))
  .to("#cursor", { scale: 0.85, duration: F(4), ease: "power2.in", yoyo: true, repeat: 1 }, at(6) - F(1))
// Carte -> pilule (rétrécir, ζ 0,85, dépassement ≤ 2 %)
  .to("#shape", { width: "33%", height: "14%", borderRadius: 999, duration: F(24), ease: spring(17, 0.85, F(24)) }, bar(2) - F(4))
  .to("#glow", { xPercent: 6, yPercent: -4, duration: bar(4), ease: "sine.inOut" }, 0);   // halo vivant
```

**After Effects**

- Fond : solide #FDFDFB, deux solides pastel #F9C6AE floutés par Effect › Blur & Sharpen › Gaussian Blur (Flou et netteté › Flou gaussien), qui dérivent.
- Verre dépoli : Layer › New › Adjustment Layer (Calque › Nouveau › Calque d'effets) avec Gaussian Blur, limité à la carte par un Track Matte (Cache par approche) Alpha ; Layer Styles › Drop Shadow (Styles de calque › Ombre portée) douce.
- Morphs : expression de ressort sur Rectangle Path › Size (Tracé de rectangle › Taille), w = 17, z = 0,72 pour grandir, 0,85 pour rétrécir.
- Motion Blur (Flou de mouvement) activé, Samples Per Frame (Échantillons par image) à 16 dans Composition Settings › Advanced (Paramètres de composition › Avancé).

**À cocher**

- [ ] Musique choisie avant ; une scène par mesure ; pic de vitesse des morphs sur le temps.
- [ ] Image figée sous 20 % ; aucun maintien de plus de 1 s ; fin animée, 1 s au plus.
- [ ] Message à au moins 6 % de la hauteur ; détails lus par une poussée ; aucun mot coupé.
- [ ] Ressorts, pas d'ease-in-out uniforme ; même transition deux fois au plus.
- [ ] Flou à 8-16 sous-images ; rendu à 60 fps ; 15 à 25 s.
