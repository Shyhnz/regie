## Le néo-suisse pop à HUD de bande démo (neo-Swiss flat colour, camera HUD, showreel template)

C'est le gabarit par défaut d'Opus 5.5 quand on lui demande un « showreel… go all out » : 15 s = 8 mesures à 128 BPM, un chapitre numéroté par mesure, des aplats en 4 à 6 couleurs qui s'échangent le fond, une grotesque extra-grasse en capitales et un HUD de caméra permanent (repères d'angle, timecode, mono). Famille la plus nombreuse, avec le plus de 5/5, elle tient par une horloge unique et par un objet qui traverse tous les chapitres. Vu dans 43 vidéos, dont 43 notées 4 ou 5 (8 notées 5, moyenne 4,19).

**Ce qui le définit**

- Palette : #0F0F0D fond noir chaud ; #F3EEE6 crème (fonds clairs, texte sur noir) ; #DE5332 vermillon (balle, point final, fond de chapitre) ; #3134F0 outremer (formes, fonds) ; #D4F53C citron (soulignements, fonds de mot, 19 vidéos) ; #F3C744 jaune Bauhaus (14 vidéos).
- Polices : grotesque très grasse étendue ou condensée en capitales (Archivo Black, Archivo variable en largeur 125, Anton, Inter Display Black) à 15-50 % de la hauteur, axes variables animés ; serif italique (Instrument Serif) pour la signature dans 19 vidéos ; mono capitales espacées à 1-1,5 % pour le HUD dans 37 vidéos sur 43.
- Matières : flou de mouvement (41 vidéos), aplats nets (30), vignettage (26), grain (24).

![Planche de style : aplats vifs, grotesque géante, formes Bauhaus et HUD de caméra](ILLUS:style-neo-suisse-hud)

*Planche : neuf vidéos, toutes notées 5 sauf la dernière (Claude motion designer showreel, 0:06.78), chacune au milieu d'un chapitre.*

| Vidéo | Ce qui la rend exemplaire | Palette |
| --- | --- | --- |
| [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61) (5/5) | scène = mesure, transition = croche, silence écrit avant le logo, losange rouge qui traverse tout | #131110, #E83D24, #E7E2DB |
| [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a) (5/5) | 4 couleurs qui s'échangent le fond, chaque principe démontré par sa courbe (EASE IN. en expo.in) | #0F0F0D, #DE5332, #3134F0 |
| [Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e) (5/5) | fil Kandinsky point → ligne → plan → volume, triade liée aux formes, chaque chapitre né du précédent | #2B3AF4, #EB2A2A, #F5CF24 |
| [Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be) (5/5) | chaque mot bouge selon la courbe qu'il nomme ; 6 lettres → 6 points → 6 billes | #EF4A3A, #2D2DF5, #DDF53A |
| [Type, form, space showreel](https://prompt-motion.com/web3wesley-7bb108) (5/5) | un seul vermillon porte la continuité (point final, O de FORM, balle), CV en serre-livres | #121014, #EFEAE0, #FF4B1F |
| [Claude motion design reel](https://prompt-motion.com/tequilafunks-97f6c9) (5/5) | courbe d'accélération fil rouge, axes de l'Archivo animés, accelerando final 15-15-7,5-3,75 im | #0B0B0D, #FA5F1F, #3040FA |
| [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d) (5/5) | un chapitre par mesure à 120 BPM, un fond par chapitre, chaque sortie fabrique l'entrée suivante | #F2463A, #BFF337, #305CF8 |

**Quand le choisir** : bande démo, ouverture d'agence, promo « déguisée en showreel » ([Flexprice motion showreel](https://prompt-motion.com/sudeepsd-1a3485)), chapitres d'une promo SaaS qui veut montrer de la virtuosité ; public de designers et de développeurs. À éviter quand le message doit primer : un effet catalogue ou générique est relevé dans 30 vidéos sur 43. C'est aussi le style où retombe Claude sans charte (guide Otom, p. 4). Pour ta promo, emprunte-lui l'horloge et les transitions, et garde la typographie cinétique comme style.

**Mesures (60 fps)**

- Tempo : 40 vidéos sur 43 animées sur la musique ; 128 BPM dans 25, 120 BPM dans 13. Durée 15,06 s pour presque toutes : 8 mesures à 128 BPM.
- Cadence : 1 temps = 28,125 im à 60 fps, mesure = 112,5 im. Plan médian 1,29 s (1,11 s si calé) ; image figée médiane 13 %, la plus basse avec la 3D. Une scène par mesure, un geste par temps, détails sur les croches.
- Courbes signature (9 études 60 fps) : entrées expo.out ou power4.out en 8-26 im, 70 % du trajet en 3 im (grace) ; plongées et sorties power2.in à expo.in en 4-14 im, jusqu'à ×16-×29 en 19-26 im (levabashidze) ; transformations d'exactement 1 temps en expo.inOut ; ressorts back.out(1.7) à back.out(3) ; balles en chute power1.in et montée sine.out, écrasement 1,6:1 une image au contact. Dépassement médian ≈ 40 % (17 mesures).

**Transitions types** : plongée dans un glyphe ou un objet (79 % des vidéos, 2,1× le corpus), compression puis éclosion (63 %), iris né d'un point (60 %), stores et bandes (44 %). Voir *La plongée éclair*, *La compression : en point ou en ligne, puis l'éclosion*, *L'iris né d'un point* et *Les stores et les bandes en escalier* au chapitre 4. Ce sont tes transitions préférées.

**Structure type** : un chapitre par mesure (72 %, 2,1× le corpus), signature finale (56 %), serre-livres et boucle (37 %). Voir *Le chapitrage : un chapitre par mesure* au chapitre 10 et *La grille de tempo : une horloge, une scène par mesure* au chapitre 9.

**Règles du style**

1. Une horloge : coupe sur l'image ceil(n × 28,125) à 128 BPM et 60 fps ; chapitre au 1er temps, geste sur le temps, détail sur la croche.
2. 4 à 6 aplats qui tournent comme fonds (voir *Les fonds pleins qui changent sur le temps* au chapitre 6), mais un seul objet de couleur fil rouge du premier au dernier plan.
3. Chaque chapitre naît d'un objet du précédent (plongée dans le O, point → iris) ; aucun fondu enchaîné.
4. Le HUD est un décor : texte trop petit relevé dans 32 vidéos sur 43. Mono ≤ 14 px et opacité ≤ 25 % (skill motion-premiers-principes) ; rien d'utile dedans. Voir *L'habillage persistant : HUD, chapitres et gabarit fixe* au chapitre 2.
5. Glitch RVB réservé à 2 ou 3 moments rapides : il est relevé comme défaut dans 22 vidéos.
6. Pas de carton final figé (2 s chez grace-sunnyy) : poussée de +3 à +5 % sur les 8 dernières images.

**Verdict** : à adapter. Reprends l'horloge, le fil rouge et les transitions motivées ; remplace le catalogue de techniques par un message et allège le HUD.

**HyperFrames (GSAP)**

```css
:root { --ink:#0F0F0D; --paper:#F3EEE6; --red:#DE5332; --blue:#3134F0; --lime:#D4F53C;
  --display:"Archivo", sans-serif; --display-wdth:125; --serif:"Instrument Serif", serif;
  --mono:"JetBrains Mono", monospace; --hud-size:14px; --hud-alpha:.25; }
```

```js
// Kit : 128 BPM, 8 mesures = 15 s, un chapitre par mesure, balle-métronome
const FPS = 60, BEAT = 60 / 128;                     // 1 temps = 28,125 im
const at = b => Math.ceil(b * BEAT * FPS) / FPS;     // coupe sur l'image ceil(n × 28,125)
const F = n => n / FPS;
const BG = ["#0F0F0D", "#DE5332", "#F3EEE6", "#3134F0", "#D4F53C"];
gsap.utils.toArray(".chapter").forEach((ch, i) => {
  const t = at(4 * i);                                // 1er temps de la mesure
  tl.set(".stage", { backgroundColor: BG[i % BG.length] }, t)
    .set(ch, { autoAlpha: 1 }, t)
    .set(".hud-chapter", { textContent: String(i + 1).padStart(2, "0") + " / 08" }, t)
    .from(ch.querySelector(".title"), { xPercent: 90, duration: F(14), ease: "expo.out", immediateRender: false }, t)
    .to(ch.querySelector(".shape"), { rotate: 90, scale: 1.4, duration: BEAT, ease: "expo.inOut" }, at(4 * i + 1))
    .to(ch.querySelector(".glyph-o"), { scale: 24, duration: F(22), ease: "expo.in" }, at(4 * i + 4) - F(22))
    .set(ch, { autoAlpha: 0 }, at(4 * i + 4));        // la plongée finit sur la coupe
});
for (let b = 0; b < 32; b++) {                        // contact sur le temps, sommet au demi-temps
  tl.set(".ball", { scaleX: 1.6, scaleY: 0.6 }, at(b))
    .to(".ball", { y: -220, scaleX: 0.85, scaleY: 1.15, duration: BEAT / 2 - F(1), ease: "sine.out" }, at(b) + F(1))
    .to(".ball", { y: 0, scaleX: 1, scaleY: 1, duration: BEAT / 2, ease: "power1.in" }, at(b) + BEAT / 2);
}
```

**After Effects**

- Composition 1920 × 1080 à 60 fps, 900 im ; un marqueur par mesure aux images 0, 113, 225, 338, 450, 563, 675, 788.
- Un Solid (Solide) de fond par chapitre ; le HUD dans une précomposition (Layer › Pre-compose, Calque › Précomposer) à 25 % d'opacité, avec Effect › Text › Timecode (Texte › Code temporel).
- Titre : Position depuis +90 % de la largeur en 14 im, Graph Editor (Éditeur de graphique) influence entrante 90 % (≈ expo.out), Motion Blur (Flou de mouvement) activé.
- Plongée : Scale (Échelle) du O de 100 à 2 400 % en 22 im, influence sortante 90 % sur la première clé (≈ expo.in) ; aplat de la couleur du O au 1er temps suivant.

**À cocher**

- [ ] Durée en mesures : 8 mesures à 128 BPM = 15,0 s, chaque chapitre au 1er temps.
- [ ] Chaque chapitre naît d'un objet du précédent ; aucun fondu enchaîné.
- [ ] Un objet de couleur fil rouge du premier au dernier plan.
- [ ] HUD ≤ 14 px, opacité ≤ 25 %, aucune information utile dedans.
- [ ] Le message tient en une phrase ; 3 ou 4 démonstrations de technique au plus dans une promo.
