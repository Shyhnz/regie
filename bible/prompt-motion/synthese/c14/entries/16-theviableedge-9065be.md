## Second brain service promo — @TheViableEdge

Craft **5/5** · 15.0 s · 60 fps · fiche : [Second brain service promo](https://prompt-motion.com/theviableedge-9065be)

Plan-séquence muet en boucle où chaque objet devient le suivant : un dictionnaire de courbes très net. L'étude mesure power2.inOut pour ce qui traverse le cadre (scan, retour de boucle, rms 0,6 %), power3.out pour les mots qui entrent, power1/2.in pour ce qui sort ou s'écrase, et un ressort à vitesse initiale nulle sur la rotation de la ligne.

![Raccord par la ligne](ILLUS:theviableedge-9065be-1)

*[Second brain service promo](https://prompt-motion.com/theviableedge-9065be), 0:04.88 à 0:05.63 : Raccord par la ligne : rotation 88,5° → 0° (dépassement −5° à f316), puis tout le bureau s'écrase dans le trait, power1.in, f317-f338 (21 im).*

![Logo](ILLUS:theviableedge-9065be-2)

*[Second brain service promo](https://prompt-motion.com/theviableedge-9065be), 0:11.82 à 0:12.52 : Logo : marqueurs décollés toutes les 5 im (f709, f714, f719, f725), montée verticale puis virage à droite, freinage power2.out, posés f747-f764.*

**Grille** : Sans musique : aucun BPM. Unités internes mesurées : décalage de 5 im (carrés, marqueurs, tests PASS), 3 im (mots du titre final), 2 im (sorties). Étapes de 2,3 à 2,8 s puis 1,1 s. Tenues strictes : 10 + 8 im à la couture, 33 im sur le carton final.

**Feuille de timing (extrait)**

| Temps | Élément | Mouvement | Durée | Courbe | Calage |
| --- | --- | --- | --- | --- | --- |
| 0:00.20 (f12-f20) | 4 carrés du logo | échelle (aire) : 1 → 0,75 (aire 288 → 162 px) ; décalage simultané | 8 im (0.13 s) | sine.out | sans musique |
| 0:00.33 (f20-f53) | carré orange (éclat) | x : 47,5 % W → 8,0 % W (écart max) ; décalage 4 carrés ensemble, chacun à ±11 % W au-delà de sa case | 33 im (0.55 s) | power2.out, dépassement 3,4 % (revient à 9,3 % W de f53 à f112) | sans musique |
| 0:00.43 (f26-f112) | carré orange (chute vers la frise) | y : 34,1 % H → 92,6 % H ; décalage atterrissages f104-f116 | 86 im (1.43 s) | power2.out | sans musique |
| 0:00.58 (f35-f56) | mot « It's » | y (sous masque, ligne de base 56 % H) : +10,2 % H → 0 (haut 45,8 % H) ; décalage It's f35, not f40, a f46, prompting f53, problem. f55 : 5, 6, 7 puis 2 im | 21 im (0.35 s) | power3.out | sans musique |
| 0:01.67 (f100-f112) | biffure orange sur « prompting » | x de l'extrémité droite : 36,9 % W → 62,6 % W | 12 im (0.20 s) | power1.inOut | sans musique |
| 0:02.20 (f132-f146) | mot « context » (orange) | y (monte à la place de « prompting ») : +9,3 % H → 0 (haut 46,7 % H) ; décalage « prompting » sort par le haut f126-f134 | 14 im (0.23 s) | circ.out | sans musique |
| 0:03.12 (f187-f204) | mot « It's » | y (sortie par le haut, sous masque) : 0 → −10 % H ; décalage It's f187, a/context f195, problem. f199 : 8 puis 4 im | 17 im (0.28 s) | power2.in | sans musique |
| 0:03.40 (f204-f268) | ligne de scan + lueur chaude | x : 4,1 % W → 95,9 % W | 64 im (1.07 s) | power2.inOut | sans musique |
| 0:04.88 (f293-f332) | ligne noire (72 % W) | rotation : 88,5° → 0° | 39 im (0.65 s) | back.out(1.0), dépassement 5,6 % (−5° à f316) | sans musique |
| 0:05.28 (f317-f338) | tout le bureau (cartes, courbes, étiquettes) | hauteur (scaleY vers la ligne) : 75,6 % H → 1 % H | 21 im (0.35 s) | power1.in | sans musique |
| 0:05.83 (f350-f380) | fenêtre de code noire | hauteur : 0 → 72,2 % H | 30 im (0.50 s) | sine.out | sans musique |
| 0:09.72 (f583-f618) | badges PASS de la suite de 8 tests | apparition (flash vert puis repos) : — → PASS ; décalage f583, f588, f593, f598, f603, —, f613, f618 : 5 im exactes | 35 im (0.58 s) | coupe | sans musique |
| 0:10.13 (f608-f631) | test 6 « Stale information detection » | état : FAIL (orange) f608 → PASS f631 ; décalage « fixed, re-run » + rotateur f616-f627 | 23 im (0.38 s) | coupe | sans musique |
| 0:11.43 (f686-f702) | puce de livraison | y (plongée vers la case 04) : 47,3 % H → 90,4 % H | 16 im (0.27 s) | power1.inOut | sans musique |
| 0:11.82 (f709-f752) | marqueur orange → logo | y : 92,5 % H → 36,2 % H ; décalage décollages orange f709, violet f714, bleu f719, vert f725 : 5, 5, 6 im | 43 im (0.72 s) | power2.out | sans musique |
| 0:12.60 (f756-f778) | mot « Build » (titre final) | y (sous masque) : +7,7 % H → 0 ; décalage Build f756, and f759, deliver f762, professional f764, second f768, brains. f770 : 3 im | 22 im (0.37 s) | power3.out | sans musique |
| 0:14.12 (f847-f864) | mot « Build » | y (sortie par le haut, sous masque) : 0 → −8,6 % H ; décalage 2 im par mot (Build f864 → brains. f872 disparus) | 17 im (0.28 s) | power1.in | sans musique |
| 0:14.30 (f858-f892) | 4 carrés du logo → centre | x et y : x 31,4 / y 36,2 % → x 46,8 / y 49,9 % ; décalage simultané | 34 im (0.57 s) | power2.inOut | sans musique |

**Courbes de la vidéo**

| Mouvement | Courbe | Durée | Preuve |
| --- | --- | --- | --- |
| Traversées du cadre et retour de boucle (ligne de scan, carrés vers le centre) | power2.inOut | 34-64 im | 3 mesures, rms 0,6 à 0,7 % |
| Entrées de mots sous masque (accroche, mot remplaçant, titre final) | power3.out (circ.out pour le mot échangé) | 14-22 im | 5 mesures, rms 1,4 à 3,7 % |
| Sorties de mots vers le haut, rétraction des traits | power2.in / power1.in | 13-17 im | 4 mesures, rms 2,9 à 3,9 % |
| Vols d'objets : éclat des carrés, marqueurs vers le logo (après un élan) | power2.out long | 33-86 im | 4 mesures, rms 2,6 à 3,6 % |
| Objet aspiré : bureau écrasé dans la ligne, puce qui plonge | power1.in / power1.inOut | 16-21 im | 2 mesures, rms 2,5 et 2,7 % |
| Fenêtre qui s'ouvre et se referme | sine.out | 24-30 im | 4 mesures, rms 3,9 à 4,9 %, départ doux 2 im |
| Rotation de raccord (ligne verticale → horizontale) | back.out(1.0) | 39 im | 1 mesure, dépassement 5,6 %, rms 4,9 % |
| Biffure d'un mot | power1.inOut | 12 im | 1 mesure, rms 1,8 % |

**Leçons**

1. Une courbe par fonction : inOut (power2) pour traverser le cadre, out (power3) pour entrer, in (power1-2) pour sortir ou s'écraser. Jamais d'out sur une sortie.
2. Raccord d'objet en trois temps : aspiration power1.in 21 im, tenue 12 im du trait seul, ouverture sine.out 30 im. La fermeture est le miroir exact (sine.out 26 im).
3. Décalages : 5 im entre objets, 5-7 im entre mots de l'accroche, 3 im au titre final, 2 im en sortie : on sort deux fois plus vite qu'on entre.
4. Tests au vert : un badge toutes les 5 im, puis une seule rupture (FAIL, « fixed, re-run » 12 im, PASS 23 im après) : l'irrégularité voulue crée le suspense.
5. Sans musique, rien ne s'arrête : 3 tenues strictes en 15 s (10, 8, 33 im). La lecture de la thèse (40 im) garde une micro-dérive des documents.
6. Boucle : finir sur la position exacte de l'image 0 en power2.inOut 34 im, puis 18-20 im immobiles de part et d'autre de la couture.

**HyperFrames (GSAP)**

```js
// f187 → f392 (3,4 s) : sortie du titre, scan, ligne, écrasement, fenêtre
const FPS = 60;                       // pas de musique : on compte en images
const F = n => n / FPS;               // images → secondes
const tl = gsap.timeline({ paused: true });
// 1. mots du titre : sortie par le haut sous masque (overflow:hidden), power2.in
tl.to("#w-its",     { yPercent: -140, duration: F(17), ease: "power2.in" }, F(187))
  .to("#w-context", { yPercent: -140, duration: F(14), ease: "power2.in" }, F(195))
  .to("#w-problem", { yPercent: -140, duration: F(14), ease: "power2.in" }, F(199))
// 2. ligne de scan : tracée en 4 im, puis traverse 4,1 → 95,9 % en 64 im
  .fromTo("#scan", { scaleY: 0 }, { scaleY: 1, duration: F(4), ease: "power2.out" }, F(198))
  .fromTo("#scan", { left: "4.1%" }, { left: "95.9%", duration: F(64), ease: "power2.inOut" }, F(204))
// compteur : sauts calés sur le passage de la ligne, pas sur un temps
  .set("#count", { textContent: "03" }, F(226))
  .set("#count", { textContent: "06" }, F(240))
  .set("#count", { textContent: "09" }, F(248))
// 3. ligne noire 72 % W : arrive verticale, ressort jusqu'à -5° puis 0°
  .fromTo("#line", { rotation: 88.5, autoAlpha: 1 },
          { rotation: 0, duration: F(39), ease: "back.out(1.0)" }, F(293))
// 4. le bureau s'écrase dans la ligne : aspiration power1.in
  .to("#desk", { scaleY: 0.013, transformOrigin: "50% 50%", duration: F(21), ease: "power1.in" }, F(317))
  .set("#desk", { autoAlpha: 0 }, F(338))
// 5. tenue 12 im du trait seul, puis il s'ouvre en fenêtre (sine.out)
  .set("#line", { autoAlpha: 0 }, F(350))
  .fromTo("#win", { height: "0.6%", width: "67.6%" },
          { height: "72.2%", duration: F(30), ease: "sine.out" }, F(350))
  .to("#win", { width: "75.4%", duration: F(24), ease: "sine.out" }, F(351));
```

**After Effects**

- Ligne de scan : X Position (Position X) de 52 à 1228 px en 64 images. Easy Ease (Lissage de vitesse) sur les deux clés, influence 50 % (= power2.inOut). Tracé vertical préalable : Scale (Échelle) Y 0 → 100 % en 4 images.
- Rotation de la ligne : clés à 0, +23 et +39 images (88,5°, −5°, 0°). Première clé vitesse nulle, influence 33 % ; dépassement de 5,6 % puis retour doux, influence 60 %.
- Écrasement : Scale Y du précomp « bureau » 100 → 1 % en 21 images ; clé de départ influence 33 %, clé d'arrivée linéaire (= power1.in). Puis 12 images de tenue avant d'ouvrir la fenêtre.
- Mots sous Alpha Matte (cache alpha) : Y Position (Position Y) +10 % H → 0 en 21 images, influence d'arrivée 75 % (power3.out), calques décalés de 5-7 images. Sortie vers le haut en 14-17 images, influence de départ 60 %.
- Boucle : carrés du logo vers le centre en 34 images, Easy Ease 50 % ; dernière clé à l'image 892, comp de 900 images ; 20 images immobiles autour de la couture.
