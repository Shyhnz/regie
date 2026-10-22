## La jauge qui se remplit (progress bar, radial gauge, ring, stepper, checklist ticking)

Une barre, un anneau, un niveau de liquide ou une frise d'étapes se remplit, presque toujours avec un chiffre lié. L'œil lit l'avancement ou le seuil avant de lire le nombre. Le dernier pour-cent peut devenir une chute : bloqué à 99 % pendant 21 images, il fait attendre le temps fort. Vue dans 41 vidéos, dont 32 notées 4 ou 5.

![Six images sur fond bleu : le pourcentage géant passe de 041 % à 099 % pendant que la barre se remplit des vignettes de chapitre, puis la barre pleine gonfle en aplat crème](ILLUS:jauge-progression-1)

*[Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:11.57 à 0:13.10 : barre et chiffre montent ensemble, 99 % reste figé pendant la coupure de basse, puis la barre pleine gonfle en plein cadre.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Barre et pourcentage liés, 99 % tenu | [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:11.33 | Étude 60 fps : 0 → 41 % en 10 im (power2.out), 41 → 83 % en 36 im (sine.inOut), 99 % tenu 21 im |
| Pourcentage en ease-in-out, barre à tête lumineuse | [Flowdrive motion showreel](https://prompt-motion.com/manuelogomigo-f33ca9), 0:02.11 | Étude 60 fps : 1,5 → 98,7 % en 65 im, power1.inOut (rms 0,44 %) ; 99 tenu 6 im, puis coche verte |
| Écran de rendu, tuiles qui s'allument | [3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155), 0:07.50 | Étude 60 fps : 0 → 100 % en 65 im, linéaire avec palier à 68-71 % ; 99 % tenu 3 im ; 100 % au demi-temps (+1 im) |
| Anneau qui déborde | [Flexprice motion showreel](https://prompt-motion.com/sudeepsd-1a3485), 0:02.13 | 0 → 100 % en 18 im (30 fps), ease-in-out ; jaune à 97 % ; arc rouge +18 % en 6 im, ease-out, « OVERAGE » |
| Anneau segmenté et compteur à rouleaux | [Geometric motion designer showreel](https://prompt-motion.com/leonkohli-6dc01b), 0:08.97 | 4 arcs de 3 à 5 im en relais depuis midi ; anneau 65 % H ; dernier chiffre posé 1,5 im avant le kick |
| Jauge liquide pilotée par le score | [Lead Notifi product ad](https://prompt-motion.com/leadnotifi-e83f94), 0:30.00 | Cercle 45 % H posé sur le temps ; deux vagues décalées et bulles ; score 1 → 92 en 1,5 s |
| Pastille qui avance par doubles-croches | [Enxovaly baby app promo](https://prompt-motion.com/gabrielbuzziv-4ff0c6), 0:10.03 | 12 pas de 8,33 % toutes les 3,75 im (double-croche à 120 BPM) ; coche dorée sur le temps 24 |
| Frise d'étapes à coche tracée | [Negroni recipe animation](https://prompt-motion.com/ror-fly-9950f1), 0:03.90 | 6 étapes ; cercle rempli puis coche tracée ; liaison vers l'étape suivante colorée en ≈ 10 im |

![Six images sur fond bleu nuit : l'anneau blanc passe de 0 à 78 %, vire au jaune à 100 %, puis un arc rouge repart de midi jusqu'à 118 %](ILLUS:jauge-progression-2)

*[Flexprice motion showreel](https://prompt-motion.com/sudeepsd-1a3485), 0:02.13 à 0:03.13 : l'anneau se remplit, vire au jaune à 100 %, puis déborde en rouge jusqu'à 118 % : le dépassement facturé devient l'image.*

**Règles de construction**

1. Une valeur, plusieurs témoins. Barre, anneau et chiffre lisent la même variable, avec le même départ et la même arrivée (levabashidze, blushpetal795, tankazunori0914 : 275 / 365 et 75,3 %). Chez ror-fly, niveau du verre, barre et compteur disent 1.0 oz au même instant.
2. La courbe dit la nature de la charge. Score ou résultat : ease-out fort (en-ra, 0 → 76 en 12 im). Chargement : ease-in-out, 18 im à 30 fps (sudeepsd) à 65 im à 60 fps (manuelogomigo). Rendu machine : linéaire avec un palier (sahildesigner23). Soit 0,6 à 1,1 s pour un remplissage héros.
3. Taille : jauge héroïne de 42 à 65 % de la hauteur, chiffre de 10 à 25 % (blushpetal795, sudeepsd, leonkohli, kangaroohere). Une jauge de coin à 1,5-2 % H ne se lit pas sur un téléphone (anthonyriera, prasad-pilla).
4. Le dernier pour-cent attend le temps fort. Tenir 99 % de 3 à 21 im, puis 100 % sur le temps ou la double-croche (levabashidze, −0,5 im ; sahildesigner23, +1 im). Voir « Le temps fort : montée, silence d'un temps, impact sur la révélation ».
5. L'arrivée change d'état : couleur au seuil (jaune à 97 % chez sudeepsd), coche (gabrielbuzziv, ror-fly), ou barre pleine qui gonfle en plein cadre, power2.in en 7 im (levabashidze). Le gonflement est détaillé dans « La plongée éclair ».
6. Par paliers, un palier par subdivision : une double-croche (gabrielbuzziv), un temps (rneayan, pastille remplie en 2 im à 145 BPM). Contre-exemple : checklist à 12 im d'écart, 2 lignes sur 6 sur la grille (sachaarbonel, noté 3).

Le guide Otom remplit sa barre « objectif » en 1,5 s (guide Otom, p. 8) : borne haute, pour un plan calme ; nos mesures restent sous 1,1 s.

**Verdict** : à reprendre. Le 99 % qui attend le temps fort et la barre pleine qui devient l'écran viennent de vidéos notées 5. Évite la jauge décorative, dont le chiffre ne veut rien dire (ghinaiya-nirmal). Le gag de la barre bloquée (melvynx, henkpoley) sert une fois, pour la douleur « avant ».

**Quand l'utiliser** : en promo SaaS / interface pour un import, un quota, un score ou un parcours en étapes (démonstration, preuve). En showreel éditorial, l'écran de rendu fait une chute avant la signature, et sa barre pleine sert de transition. On la décide au découpage (le 100 % sur un temps fort) et au système de design (une seule forme de jauge par film). La barre permanente du film relève de « L'habillage persistant : HUD, chapitres et gabarit fixe », le chiffre de « Le compteur qui roule ».

**HyperFrames (GSAP)**

```js
// Barre et pourcentage pilotés par une seule valeur ; 99 % tenu, 100 % sur le temps, barre → écran
const FPS = 60;
const BEAT = 60 / 128;                        // 128 BPM (Swiss-style motion showreel)
const at = b => b * BEAT;
const im = n => n / FPS;                      // images → secondes
const pct = document.querySelector("#pct");   // chiffres en font-variant-numeric: tabular-nums
const g = { v: 0 };                           // la seule source de vérité
const draw = () => {
  pct.textContent = String(Math.floor(g.v)).padStart(3, "0");   // « 041 », « 099 », « 100 »
  gsap.set("#fill", { scaleX: g.v / 100 });
};
const T0 = at(24);                            // 1er temps de la mesure 7
tl.set("#fill", { scaleX: 0, transformOrigin: "0% 50%" }, 0)
  .set(["#gauge", "#status-run"], { autoAlpha: 1 }, T0)
  // 1. élan : 0 → 41 % en 10 im (power2.out), puis palier de 5 im
  .to(g, { v: 41, duration: im(10), ease: "power2.out", onUpdate: draw }, T0)
  // 2. 41 → 83 % en sine.inOut, posé 1 im avant le temps 26
  .to(g, { v: 83, duration: at(26) - T0 - im(16), ease: "sine.inOut", onUpdate: draw }, T0 + im(15))
  // 3. 83 → 99 % à vitesse constante, jusqu'au temps 27
  .to(g, { v: 99, duration: BEAT - im(1), ease: "none", onUpdate: draw }, at(26))
  // 4. 99 % tenu ≈ 20 im ; 100 % sur la double-croche 27,75
  .to(g, { v: 100, duration: im(1), ease: "none", onUpdate: draw }, at(27.75) - im(1))
  .set("#status-run", { autoAlpha: 0 }, at(27.75))
  .set("#status-done", { autoAlpha: 1 }, at(27.75))      // « RENDER COMPLETE »
  // 5. la barre pleine gonfle en plein cadre : hauteur ×10 en 7 im (power2.in), pleine au temps 28
  .to("#bar", { scaleY: 10, duration: im(7), ease: "power2.in" }, at(28) - im(7))
  .set("#gauge-digits", { autoAlpha: 0 }, at(28));
```

**After Effects**

- Une valeur pilote tout : un Null Object (objet nul) « Jauge » avec Effect › Expression Controls › Slider Control (Effet › Options pour expressions › Paramètre glissière). Images clés 0, 41, 41, 83, 99, 100 aux mêmes images que la recette GSAP.
- Barre : calque de forme Rectangle, Anchor Point (point d'ancrage) au bord gauche, expression sur Scale (Échelle) : `s = thisComp.layer("Jauge").effect("Slider Control")("Slider"); [s, 100]`. Anneau : Ellipse sans fond, Add › Trim Paths (Ajouter › Réduire les tracés), End (Fin) relié au Slider ; Offset (Décalage) pour partir de midi.
- Chiffre : Text layer (calque de texte), expression sur Source Text (Texte source) : `Math.floor(thisComp.layer("Jauge").effect("Slider Control")("Slider")) + "%"`, police à chiffres tabulaires.
- Courbes : clé d'arrivée de l'élan en Easy Ease In (lissage de vitesse en entrée, Maj+F9) ; segment 41 → 83 en Easy Ease (lissage de vitesse, F9). Sur la clé 99, Animation › Toggle Hold Keyframe (Activer/désactiver l'image clé maintenue) ; la clé 100 sur le marqueur du temps. Vérifier dans le Graph Editor (éditeur de graphiques).
- Barre → plein cadre : Scale Y de 100 à 1000 % en 7 im, première clé en Easy Ease Out (Ctrl/Cmd+Maj+F9) = power2.in. Débordement : second anneau rouge, Trim Paths End 0 → 18 % en 6 im ; couleur du Stroke (Contour) en clés maintenues, blanc puis jaune à 97 %.
