## Le fil rouge : un objet, un exemple ou un plan continu traverse le film (throughline object, running example, one continuous shot, powers of ten)

Un même élément relie toutes les scènes : point de couleur relais, caret, phrase épinglée, fichier ou prix suivi d'étape en étape, ou plan-séquence sans coupe. Le spectateur suit un seul objet au lieu de relire chaque scène, donc on peut couper toutes les secondes sans le perdre. Chez le meilleur exemple, un disque orange tient 13 rôles en 14,7 s. Vue dans 35 vidéos, dont 31 notées 4 ou 5.

![La balle orange devient plein cadre, puis le point du i de « motion », puis celui de « design »](ILLUS:fil-rouge-1)

*[Geometric motion designer showreel](https://prompt-motion.com/leonkohli-6dc01b), 0:01.67 à 0:03.07 : la balle posée envahit l'écran, redevient le point du i de « motion », puis celui de « design ».*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Point de couleur qui change de rôle | [Geometric motion designer showreel](https://prompt-motion.com/leonkohli-6dc01b), 0:00.00 | disque #FF5E1E : balle, plein cadre, point du i, centre de grille, sphère, curseur, point du logo ; 13 rôles en 14,7 s |
| Le caret relais | [Cinetic skill launch film](https://prompt-motion.com/lexnlin-6161a6), 0:00.00 | trait bleu 0,3 % L × 6 % H dans tous les plans : curseur, tête de lecture, barre du logo « cl » ; coupes 1 im avant le temps |
| Phrase à compléter épinglée | [AIsa API key promo](https://prompt-motion.com/0xfemyn-e114d3), 0:00.00 | « > your agent needs ▮ » tapé à 1 caractère par image (20 im), épinglé à y ≈ 12 % ; 5 mots changent dessous toutes les 7 im |
| Un fichier traverse les fonctions | [Flowdrive motion showreel](https://prompt-motion.com/manuelogomigo-f33ca9), 0:00.00 | « hero-film.mp4 » déposé, téléversé, diffusé, livré, servi : 7 étapes de 1,4 à 2 s, puis aspiré dans le logo (étude 60 fps) |
| Une seule donnée suivie | [Second brain service promo](https://prompt-motion.com/theviableedge-9065be), 0:00.50 | prix $189 contre $219 : conflit, décision, test qui répond $219 avec sa source ; 4 étapes en 10 s |
| Plan continu, chaque écran né du précédent | [Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4), 0:09.37 | 0 coupe en 14 s ; barre → anneau en 18 im power1.inOut, pic de vitesse sur le temps 19 (étude 60 fps) |
| Dézoom d'échelle sans coupe | [Product intro synced to music](https://prompt-motion.com/bogdandragomir-35e024), 0:01.40 | grille de capsules ×41 en 36 im, vitesse constante en logarithme (×1,25 toutes les 2 im) (étude 60 fps) |
| Compteur en running gag | [Talking-head clip edit](https://prompt-motion.com/sab8a-364a5a), 0:06.50 | pilule « ♥ N like counter » incrémentée à l'image où « like » s'affiche ; 13 incréments en 31 s, repris en fin |

![La barre or du statut de paiement s'enroule en anneau, devient la jauge de score qui monte et passe au vert](ILLUS:fil-rouge-2)

*[Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4), 0:09.25 à 0:10.17 : la barre de paiement plonge et s'enroule en anneau ; l'anneau devient la jauge, qui vire au vert à 85.*

**Règles de construction**

1. Un seul fil par film, choisi au script : un objet (point, caret), un cas (fichier, prompt, client), une donnée (prix, nombre) ou un plan continu. Écrire pour chaque plan le rôle qu'il y tient.
2. Le fil motive les transitions : chaque passage part de lui ou y revient. Un point rouge plaqué sans rôle n'est qu'une signature de style.
3. Forme et couleur constantes : la seule couleur chaude du film, ≈ 1,3 % H au minimum pour un point (Claude self-intro motion graphic, #F0583A). Un fil en texte à 1,5 % H est illisible sur mobile (Sahi trading terminal reveal).
4. Une place stable : épinglé (y ≈ 12 % chez AIsa), au centre, ou à la même position d'un plan à l'autre. Le thermomètre de DeFi Saver survit à 3 effacements sans bouger du tiers droit.
5. En plan continu : le pic de vitesse d'une transformation inOut tombe sur le temps ; une aspiration power2.in de 9 im finit 3 im avant le temps. Chez Taxtello, 12 événements clés sur 15 sont à ±2 im de la grille.
6. Fil de données : les chiffres se recoupent exactement. Chez Flexprice, 1 284 302 événements au compteur et sur la facture, total 513,72 + 1 030,00 + 56,80 = 1 600,52 $. En zoom d'échelle, chaque palier change d'environ ×3 à ×5 et garde un élément du plan précédent (AI data centre 3D tour).

**Verdict** : à reprendre. C'est ton raccord « le point d'un mot devient le point du graphique » élevé en principe de film : il rend lisible un montage d'une idée par seconde. Change son rôle à chaque plan, jamais seulement sa place.

**Quand l'utiliser** : en typo cinétique 1600 et en showreel, un point de couleur ; en promo SaaS, un fichier, un prompt ou un prix suivi de la saisie au résultat ; en explainer de données, un nombre qui se recoupe. C'est le « geste graphique fort répété dans toutes les scènes » du guide (guide Otom, p. 14). On le choisit au script (étape 2), on écrit sa feuille de rôles au découpage (étape 5), on règle ses trajets aux enchaînements (étape 8). À éviter pour un plan isolé ou une démo à une seule scène.

**HyperFrames (GSAP)**

```js
// Un seul point orange traverse le film : à chaque arrivée il devient l'élément du plan suivant
// (mesurer après document.fonts.ready, scènes affichées ; composition 1920 × 1080 à l'échelle 1)
const FPS = 60;
const BEAT = 60 / 120;                       // 120 BPM : 1 temps = 30 im
const at = b => b * BEAT;
const fr = n => n / FPS;
const D = 16;                                // diamètre du point : ≈ 1,5 % de 1080
const spot = sel => {
  const r = document.querySelector(sel).getBoundingClientRect();
  return { x: r.left + r.width / 2 - D / 2, y: r.top + r.height / 2 - D / 2 };
};
// Feuille de rôles écrite au découpage : un rôle par plan, une arrivée sur un temps
const roles = [
  { sel: "#s1 .ball-rest", beat: 4 },        // balle posée
  { sel: "#s2 .i-dot",     beat: 8 },        // point du i de « motion »
  { sel: "#s3 .grid-core", beat: 12 },       // centre de la grille
  { sel: "#s4 .logo-dot",  beat: 28 }        // point final du logo
];
roles.forEach(r => tl.set(r.sel, { autoAlpha: 0 }, 0));   // le fil remplace les points des scènes
const p0 = spot(roles[0].sel);
tl.set("#thread", { x: p0.x, y: p0.y, autoAlpha: 1 }, 0);
roles.slice(1).forEach((r, i) => {
  const a = spot(roles[i].sel), b = spot(r.sel);
  const land = at(r.beat), d = fr(24);       // trajet de 24 im, pic de vitesse au milieu
  tl.to("#thread", { x: b.x, duration: d, ease: "power2.inOut" }, land - d)
    .to("#thread", { y: Math.min(a.y, b.y) - 120, duration: d / 2, ease: "power1.out" }, land - d)
    .to("#thread", { y: b.y, duration: d / 2, ease: "power1.in" }, land - d / 2)
    .to("#thread", { scaleX: 1.6, scaleY: 0.6, duration: fr(3), ease: "power2.out",
                     yoyo: true, repeat: 1 }, land);        // écrasement à l'arrivée
});
```

**After Effects**

- Un seul calque Ellipse « fil » (Layer › New › Shape Layer (Calque › Nouveau › Calque de forme)) posé au-dessus de toutes les précompositions, jamais à l'intérieur de l'une d'elles.
- Position : une clé par arrivée, chacune sur un marqueur de temps ; poignées de Bézier tirées vers le haut pour l'arc, 24 im de trajet. Dans le Graph Editor (éditeur de graphes), mode Speed Graph (graphe de vitesse), influence d'environ 65 % en entrée et en sortie.
- Pendant un rôle, le point suit le mot qui bouge : scinder le calque à chaque rôle (Edit › Split Layer (Édition › Scinder le calque)) et parenter chaque morceau au calque qui le porte (colonne Parent & Link (Parent et lien)).
- Arrivée : Scale (Échelle) 160/60 % puis 100 % en 6 im, Motion Blur (Flou de mouvement) activé.
- Dézoom d'échelle continu : deux clés d'échelle puis Animation › Keyframe Assistant › Exponential Scale (Animation › Assistant d'image clé › Échelle exponentielle), ×41 en 36 im.
