## Grilles, bento et rangées de cartes (modular grid, bento grid, staggered card row)

Plusieurs modules (cartes, vignettes, cellules) sont rangés sur une grille, visible ou implicite : bento à carte héro, mosaïque 2 × 2, triptyque, grille suisse. Ils entrent en cascade décalée, se tracent depuis le centre ou se multiplient pour dire l'échelle. La grille montre plusieurs choses à la fois sans désordre, et la cascade impose l'ordre de lecture : dans les meilleures vidéos, 3 à 7 images séparent deux modules. Vue dans 34 vidéos, dont 23 notées 4 ou 5.

![Grille suisse sur papier beige : les filets noirs se tracent, le disque rouge pousse dans la 4e cellule, puis « was » et « over » claquent dans leurs cellules](ILLUS:grilles-bento-1)

*[Synced lyrics motion video](https://prompt-motion.com/samaote-5e2fc2), 0:20.63 à 0:21.97 : la grille 4 × 3 se trace en décalé, le soleil naît dans sa case, puis chaque mot se pose dans sa cellule sur sa syllabe.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Grille suisse tracée, un mot par cellule | [Synced lyrics motion video](https://prompt-motion.com/samaote-5e2fc2), 0:20.70 | étude 60 fps : filets de 2 px tracés en décalé en 14 im ; disque 0 → 12,9 % L en 19 im, power1.out |
| Grille qui explose depuis le centre | [Geometric motion designer showreel](https://prompt-motion.com/leonkohli-6dc01b), 0:04.00 | 4 anneaux de tuiles en 4 im (30 fps), ≈ 1 im par anneau, tuile 0 → 100 % en 3 im, burst à 1 im du kick |
| Bento à carte héro, une carte par temps | [AjustaCV Pro pricing promo](https://prompt-motion.com/thayto-dev-44b911), 0:05.63 | 6 cases ≈ 28 × 33 %, gouttières 1 % ; cartes 2-6 sur les temps 12-16 (28 im), fondu 12 im, ordre en Z |
| Spécimen sur grille 12 colonnes | [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:07.50 | étude 60 fps : coupe sur le temps, colonnes en 8 im, 5 modules à 4-7 im d'écart, power2.out ; sortie power4.in 7 im |
| Cartes qui volent et se posent en 3 × 3 | [Ora 2 image model launch film](https://prompt-motion.com/rossaxbt-3085b7), 0:06.40 | 9 cartes ≈ 19 % L, rotation 5-15° annulée à l'atterrissage, 3-5 im d'écart, ease-out sans dépassement |
| Bandes verticales en escalier | [Photo retouch app promo](https://prompt-motion.com/oliahmed205-3e31c4), 0:05.03 | 6 bandes 15 % L × 85 % H, une toutes les 3 im, 18 im ease-out ; dernière posée 0-2 im avant la frappe |
| Multiplication pour dire l'échelle | [Chaotic Claude POV video](https://prompt-motion.com/kloss-xyz-15182a), 1:16.90 | 1 → 4 → 16 → 64 → ≈ 260 cartes, un palier toutes les 45 im (3 temps), cascade de 12-17 im |
| Grille dépliée depuis une vignette | [Photo print app launch film](https://prompt-motion.com/twoclipping-221cab), 0:03.73 | 4 vignettes sortent en croix en 10 im, puis 4 coins ; 3 × 3 de carrés ≈ 20 % L, aucun fondu |

![Point orange au centre, puis anneaux de tuiles Bauhaus qui remplissent le cadre en 4 images](ILLUS:grilles-bento-2)

*[Geometric motion designer showreel](https://prompt-motion.com/leonkohli-6dc01b), 0:03.97 à 0:04.13 : le point grossit, 4 repères en croix, puis la grille pousse en anneaux autour de lui ; le point reste la tuile centrale.*

**Règles de construction**

1. Décalage entre modules : 3 à 7 im à 60 fps (0,05 à 0,12 s) quand la grille se lit comme un tout (Ora 2, Photo retouch, Keyframe reel). Une carte par temps (28 im à 128 BPM) seulement si chaque carte porte une démo à lire (AjustaCV). Le guide Otom propose « 4 cartes, 120 ms d'écart » (guide Otom, p. 5) : c'est le haut de la fourchette mesurée, les meilleures vidéos vont plus vite.
2. Chaque module entre en 6 à 18 im, ease-out (power2.out ou power3.out), sans dépassement : fondu, montée de 2 % de la hauteur, léger défloutage. Le dernier module se pose sur le temps (Commotion f407, Photo retouch f334).
3. Géométrie : gouttières de 1 à 1,5 % de la largeur, rayon ≈ 1,5 à 2 %, zone utile ≈ 7 à 92 % de la largeur. Le guide Otom demande une grille de 12 colonnes à marges identiques, textes calés sur le même bord gauche (guide Otom, p. 14) ; le Keyframe reel l'affiche même : « 12-col grid · 24px gutter ».
4. Lisibilité : 3 à 6 cartes avec un titre d'au moins 2,5 % de la hauteur. Au-delà, ou avec du texte à 1 % (AjustaCV, Claude motion designer showreel), la grille devient une texture d'échelle : il faut alors un titre par-dessus, sous un voile (GenVizu, mur incliné à −15°).
5. La cascade part de l'objet du plan précédent : du point central (Geometric showreel), de la vignette pivot (Photo print), sinon en Z, ligne par ligne.
6. Sortie en 6-7 im : rétrécissement et fondu en power4.in, fini pile sur la coupe (Keyframe reel f556-f562).

**Verdict** : à reprendre. La grille radiale née d'un point est ta « compression puis explosion » appliquée à la mise en page ; garde 3 à 6 cartes lisibles, sinon c'est le mur de mots flous que tu rejettes.

**Quand l'utiliser** : en promo SaaS / interface et en showreel éditorial, pour la présentation des fonctions ou la preuve d'abondance (multiplication, mur de cartes). En typo cinétique 1600, la grille suisse sert de partition : un mot par cellule, calé sur la voix. On la choisit au système de design (colonnes, gouttières, rayon), puis au découpage pour fixer le nombre de cartes. À éviter pour un message unique ou quand le texte des cartes ne peut pas dépasser 2 % de la hauteur.

**HyperFrames (GSAP)**

```js
// Bento 3 × 2 : carte héro sur la coupe, puis les 5 autres en cascade (ordre en Z)
const FPS = 60, f = n => n / FPS;          // images → secondes
const BEAT = 60 / 128;                     // 128 BPM
const at = b => b * BEAT;
const CUT = at(16);                        // coupe sur le 1er temps d'une mesure
const EACH = BEAT;                         // une carte par temps (lecture) ; f(4) pour une rafale
const cards = gsap.utils.toArray(".bento .card:not(.hero)");

// états de départ posés dès t = 0 (pas de fromTo nu)
tl.set(".bento .card", { autoAlpha: 0, y: "2%", scale: 0.96, filter: "blur(6px)" }, 0)
  .set(".bento .hero h2", { yPercent: 100 }, 0)          // le h2 est dans un parent overflow:hidden
  // carte héro : s'encre en 15 im, sans dépassement
  .to(".bento .hero", { autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)",
                        duration: f(15), ease: "power2.out" }, CUT)
  .to(".bento .hero h2", { yPercent: 0, duration: f(11), ease: "power3.out" }, CUT + f(7))
  // 5 cartes : 12 im chacune, décalées de EACH
  .to(cards, { autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", duration: f(12),
               ease: "power3.out", stagger: EACH },  // ordre du DOM = ordre en Z
      CUT + EACH)
  // variante radiale (grille née d'un point) : stagger: { each: f(2), grid: "auto", from: "center" }
  // pas de temps mort : poussée lente de 3 % pendant la tenue
  .to(".bento", { scale: 1.03, duration: at(20) - CUT - f(7), ease: "none" }, CUT)
  // sortie : rétrécit et s'éteint en 7 im, finie sur la coupe suivante
  .to(".bento .card", { scale: 0.9, autoAlpha: 0, duration: f(7), ease: "power4.in" }, at(20) - f(7));
```

**After Effects**

- Construire la grille : calques de forme Rectangle (Roundness (Arrondi des angles) ≈ 2 % de la hauteur), gouttières de 19 à 29 px en 1920 × 1080. View › Show Grid (Affichage › Afficher la grille) et Window › Align (Fenêtre › Aligner) pour répartir les cartes.
- Une carte : Position y +22 px → 0, Opacity (Opacité) 0 → 100 %, Scale (Échelle) 96 → 100 % en 12 im. Sur la clé d'arrivée, Animation › Keyframe Assistant › Easy Ease In (Animation › Assistant d'image clé › Lissage de vitesse entrant), puis influence 80 % dans le Speed Graph (éditeur de graphe de vitesse).
- Cascade : sélectionner les cartes dans l'ordre en Z et Animation › Keyframe Assistant › Sequence Layers (Séquencer les calques), ou décaler chaque calque de 4 im (Alt + Page Down (Alt + Pg suiv)). Pour une carte par temps à 128 BPM : 28 im.
- Grille radiale : sur le Scale de chaque tuile, l'expression `c=[thisComp.width,thisComp.height]/2; d=length(transform.position,c)/length(c); t0=framesToTime(Math.round(d*4)); s=ease(time-inPoint,t0,t0+framesToTime(3),0,100); [s,s]` (≈ 1 im par anneau, 3 im par tuile).
- Sortie : Scale 100 → 90 % et Opacity → 0 en 7 im, Easy Ease Out (Lissage de vitesse sortant) sur la première clé (accélération), dernière clé sur l'image de coupe.
