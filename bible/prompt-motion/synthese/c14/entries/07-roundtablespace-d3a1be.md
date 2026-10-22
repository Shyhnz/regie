## Easing and morphing showreel — @RoundtableSpace

Craft **5/5** · 15.061 s · 60 fps · fiche : [Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be)

Une bobine qui enseigne l'easing et l'applique. L'étude montre que le tableau des six courbes utilise exactement les eases GSAP par défaut (rms 0,3 à 1,5 %) sur 2 temps pile, que chaque mot de « EASE IN. EASE OUT. NEVER LINEAR. » suit sa courbe (power2.in, expo.out, back.out, none), et que tout part sur une croche exacte.

![Six courbes, même trajet, 57 im (temps 9 → 11)](ILLUS:roundtablespace-d3a1be-1)

*[Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be), 0:04.22 à 0:05.15 : Six courbes, même trajet, 57 im (temps 9 → 11) : expo.out arrive presque d'emblée, back.out dépasse de 18 %, elastic sort du cadre, bounce rebondit, tout se pose f310.*

![IN](ILLUS:roundtablespace-d3a1be-2)

*[Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be), 0:11.48 à 0:12.15 : IN. accélère et s'arrête net (f689-f695), EASE monte en expo.out (f703-f712), OUT. freine en expo.out (f717-f730) : une coupe toutes les 14 im.*

**Grille** : 128 BPM, grille dès f0 : 1 temps = 28,125 im, croche = 14 im, 8 mesures = 900 im. Coupes et départs sur le temps (0 à +1 im), barres audio à +2 im. Chapitres aux 1ers temps de mesure (f113, f338, f450, f675, f788), typo à la croche.

**Feuille de timing (extrait)**

| Temps | Élément | Mouvement | Durée | Courbe | Calage |
| --- | --- | --- | --- | --- | --- |
| 0:01.67 (f100-f110) | astérisque (effondrement en point) | diamètre : 45,6 % H → 1 % H (point blanc) | 10 im (0.17 s) | sine.in | départ f100 = demi-temps 3,5 +1,6 im ; point f110, 2,5 im avant le temps 4 |
| 0:01.92 (f115-f126) | disque rouge (2e iris) | rayon : 0 → 87 % H (plein cadre f129) ; décalage +3 im après le disque crème (1/8 de temps) | 11 im (0.18 s) | power2.out | départ f115-f116 = temps 4 + 1/8 (f116,0) ; plein f126-f129 = demi-temps 4,5 |
| 0:01.95 (f117-f131) | lettres de « CLAUDE » (montée masquée) | y du haut de la lettre : 53,5 % H → 39,8 % H (puis 36,5 % f150) ; décalage C et L f117, A f119, U f121, D f123, E f125 : 2 im, gauche → droite | 14 im (0.23 s) | power1.out | 1res lettres f117 = temps 4 + 1/8 (f116,0) +1 im ; mot complet f131 |
| 0:04.22 (f253-f310) | bille « expo-out » | x : 34,3 % L → 88,5 % L ; décalage même piste A 34,3 % L → B 88,5 % L, mêmes images de départ et d'arrivée | 57 im (0.95 s) | expo.out | 71 % du trajet en 10 im |
| 0:04.22 (f253-f310) | bille « elastic » | x : 34,3 % L → 88,5 % L (1er pic hors cadre f259-f262) ; décalage même piste A 34,3 % L → B 88,5 % L, mêmes images de départ et d'arrivée | 57 im (0.95 s) | elastic.out(1, 0.3), dépassement ≥ 21 % (≈ 35 % théorique, hors cadre) | oscillations f263-f305 |
| 0:05.48 (f329-f337) | bille fusionnée (écrasement) | rapport largeur / hauteur : 1,00 → 1,84 (f333) puis 1,32 (f337) | 8 im (0.13 s) | none | coupe en négatif f338 = temps 12 (f337,5, +0,5 im) |
| 0:05.63 (f338-f365) | cercle crème sur bleu | diamètre : 12,4 % H → 40,6 % H (f352) puis 33,7 % H (f365) ; décalage 12 satellites sortent un par un f339-f353 | 27 im (0.45 s) | sine.out aller (14 im) + sine.out retour (13 im), dépassement 32 % | posé f365 = temps 13 (0 im) |
| 0:06.10 (f366-f390) | forme centrale : cercle → triangle | rayon du sommet le plus loin : 16,9 % H → 25,4 % H (f378-f380) puis 22,3 % H (f389) ; décalage satellites changent de forme en même temps | 24 im (0.40 s) | none puis sine.out, dépassement 57 % (pointes plus aiguës que le triangle final) | sursaut d'1 image f366 = temps 13 (f365,6, 0 im) |
| 0:10.98 (f659-f675) | tore 3D → noir | échelle (plongée dans le trou) : 100 % → > 400 % puis noir f665-f674 | 16 im (0.27 s) | expo.in | plongée f659-f665 ≈ demi-temps 23,5 (f661) ; noir 10 im ; EASE f675 = temps 24 |
| 0:11.48 (f689-f695) | « IN. » (crème sur noir) | x du bord gauche : 74,4 % L → 25,6 % L | 6 im (0.10 s) | power2.in | coupe f689 = demi-temps 24,5 (f689,1, 0 im) |
| 0:11.72 (f703-f712) | « EASE » condensé bleu (lettre E) | y du haut de la lettre : 92,6 % H → 15,4 % H ; décalage E et A f703, S f706, E f707 (0 à 4 im) | 9 im (0.15 s) | expo.out | coupe f703 = temps 25 (f703,1, 0 im) |
| 0:11.95 (f717-f730) | « OUT. » (crème sur bleu) | x du bord droit : 29,0 % L (f718) → 81,2 % L | 13 im (0.22 s) | expo.out | coupe f717 = demi-temps 25,5 (f717,2, 0 im) |
| 0:12.20 (f732-f742) | lettres de « NEVER » (chute) | y du centre (lettre V) : hors cadre en haut → 49,9 % H (pic 56,3 % f737) ; décalage 1 im par lettre, gauche → droite (N f732 … R f735) | 10 im (0.17 s) | back.out(1.7), dépassement 11 % | coupe f731 = temps 26 (f731,25, 0 im) |
| 0:12.65 (f759-f775) | « LINEAR. » | x du bord gauche : 27,2 % L → 14,8 % L | 16 im (0.27 s) | none | coupe f759 = temps 27 (f759,4, 0 im) |
| 0:12.92 (f775-f787) | point rouge de « LINEAR. » (fouetté) | diamètre : 5,2 % H → 83 % H (f785) puis plein cadre f787 | 12 im (0.20 s) | power4.in | départ f775 = demi-temps 27,5 +1,6 im ; plein f787 = temps 28 −0,5 im |
| 0:13.58 (f815-f832) | astérisque (logo) | x du centre : 48,2 % L → 17,8 % L ; décalage lettres de droite à gauche : E f817 … C f830, ≈ 2 im | 17 im (0.28 s) | power2.out | départ f815-f816 = temps 29 (f815,6, 0 im) ; mot complet f830 = demi-temps 29,5 |

**Courbes de la vidéo**

| Mouvement | Courbe | Durée | Preuve |
| --- | --- | --- | --- |
| Entrées qui freinent : mots, lettres, course expo | expo.out | 9-13 im (57 im pour la course) | 3 mesures : EASE rms 0,1 %, OUT. 1,7 %, bille 0,3 % |
| Accélérations vers un arrêt net ou une coupe (IN., fouetté, effondrement) | power2.in / power4.in / sine.in | 6-12 im | 3 mesures, rms 1,9 à 4,9 % |
| Iris, anneaux et révélations circulaires | power1.out / power2.out | 9-21 im | 5 mesures, rms 1,7 à 3,8 % (iris crème partiel 7,4 %) |
| Ressorts d'arrivée (lettres qui tombent, billes du tableau) | back.out(1.7) / back.out(2.2) / elastic.out(1, 0.3) / bounce.out | 11 im (lettres), 57 im (billes) | 4 mesures, rms 1,4 à 5,3 %, dépassement 11 à 35 % |
| Dérives et balayages à vitesse constante | none | 16-57 im | LINEAR. rms 0,3 %, bille 0,9 %, onde Truchet 2,4 % |
| Montées de lettres sous masque | power1.out (12 im) puis circ.out (31 im) | 12-31 im | lettre A de CLAUDE, rms 4,8 et 3,5 % |
| Respirations de forme (cercle, morphs) | sine.out aller-retour | 13-14 + 11-13 im | 2 mesures, rms 6,6 à 7,1 %, dépassement 32-57 % |

**Leçons**

1. Un mot par croche : coupe toutes les 14 im (675, 689, 703, 717, 731, 745, 759) ; le geste dure 6 à 13 im, le reste se lit immobile.
2. Faire faire au mot ce qu'il dit : IN. power2.in 6 im arrêt sec, OUT. expo.out 13 im, NEVER back.out(1.7) 11 im, LINEAR. none 0,78 % L par image.
3. Tableau d'easing en 2 temps exacts (57 im) : none, power2.inOut, expo.out, back.out, elastic.out(1, 0.3), bounce.out partent ensemble et arrivent ensemble sur le temps.
4. Morph sur le temps : sursaut d'1 image (+6 % de taille) pile sur l'image du temps, puis 25 im de déformation et de ressort avant le temps suivant.
5. Iris en cascade : effondrement sine.in 10 im, 3 im de point seul, disque crème sur le temps, disque rouge power2.out 3 im après (1/8 de temps).
6. Fouetté final : dérive linéaire 16 im, puis le point grossit power4.in 12 im et remplit le cadre pile sur le 1er temps de la mesure suivante.

**HyperFrames (GSAP)**

```js
// KINETIC TYPE f675 → f788 (1,9 s) : un mot par croche, chaque mot suit la courbe qu'il nomme
const FPS = 60, BEAT = 60 / 128;            // 1 temps = 28,125 im, croche = 14 im
const F = n => n / FPS;                      // images → secondes
const B = n => n * BEAT;                     // temps musicaux → secondes
const tl = gsap.timeline({ paused: true });
const cut = (id, t) => tl.set(".word", { autoAlpha: 0 }, t).set(id, { autoAlpha: 1 }, t);
// EASE (temps 24) : arrive écrasé ×1,56 en hauteur, posé en 6 im
cut("#ease1", B(24));
tl.from("#ease1", { scaleY: 1.56, duration: F(6), ease: "power2.out" }, B(24));
// IN. (demi-temps 24,5) : ease-in pur 74 → 26 % L en 6 im, arrêt sec
cut("#in", B(24.5));
tl.fromTo("#in", { left: "74.4%" }, { left: "25.6%", duration: F(6), ease: "power2.in" }, B(24.5));
// EASE condensé (temps 25) : lettres qui montent du bas, expo.out 9 im
cut("#ease2", B(25));
tl.from("#ease2 .ch", { yPercent: 160, duration: F(9), ease: "expo.out",
  stagger: i => F([0, 0, 3, 4][i]) }, B(25));          // E, A f703 ; S f706 ; E f707
// OUT. (demi-temps 25,5) : entre par la gauche, expo.out 13 im
cut("#out", B(25.5));
tl.from("#out", { xPercent: -100, duration: F(13), ease: "expo.out" }, B(25.5));
// NEVER (temps 26) : lettres qui tombent, back.out(1.7) 11 im, +11 %, 1 im par lettre
cut("#never", B(26));
tl.from("#never .ch", { yPercent: -260, rotation: -20, duration: F(11),
  ease: "back.out(1.7)", stagger: F(1) }, B(26))
  .set("#never-rows", { autoAlpha: 1 }, B(26.5));       // pile de 5 rangées
// LINEAR. (temps 27) : dérive à vitesse constante, 0,775 % L par image
cut("#linear", B(27));
tl.fromTo("#linear", { left: "27.2%" }, { left: "14.8%", duration: F(16), ease: "none" }, B(27))
// fouetté f775 : le point grossit power4.in et couvre le cadre sur le temps 28
  .to("#linear .dot", { scale: 40, duration: B(28) - F(775), ease: "power4.in" }, F(775))
  .to("#linear .txt", { xPercent: -150, scale: 3.5, duration: F(10), ease: "power3.in" }, F(775));
```

**After Effects**

- Composition 1920 × 1080 à 60 i/s. Marqueurs à la croche, round(n × 14,0625) : 675, 689, 703, 717, 731, 745, 759, 773, 788. Une coupe de mot par marqueur, jamais entre.
- IN. : X Position (Position X) 74 → 26 % L en 6 im ; clé de départ influence 50 %, clé d'arrivée sans lissage (vitesse maximale) : le mot s'arrête net, sans rebond.
- OUT. : X Position depuis hors cadre gauche en 13 im ; clé de départ vitesse maximale, arrivée influence 90 % (≈ expo.out). EASE condensé : même réglage, 9 im, calques décalés de 0-4 im.
- NEVER : par lettre, Y Position (Position Y) du haut → 6 % sous la ligne à +5 im → repos à +11 im, Rotation −20° → 0 ; calques décalés d'1 im de gauche à droite.
- Tableau d'easing : 6 calques, X 34 → 88,5 % L sur 57 im (2 temps). linear : clés linéaires ; ease-in-out : influences 66 % ; back, elastic, bounce : expression ou script d'easing.
