## Parcourir un canevas (pan, whip pan, page scroll, lateral truck, follow pan, single-canvas camera)

Tout le film tient sur une grande surface plate (planche, page, interface) et la caméra glisse d'une zone à l'autre au lieu de couper. Le lien entre deux écrans devient évident : on voit d'où vient la section suivante. Deux régimes font la famille : le panoramique lisible de 24 à 48 im, et le filé de 8 à 16 im avec flou directionnel. Vue dans 29 vidéos, dont 21 notées 4 ou 5.

![Le tableau de bord remonte et s'assombrit, la liste des écritures entre par le bas, puis un ticket arrive à droite, sans aucune coupe](ILLUS:canevas-parcouru-1)

*[Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4), 0:03.67 à 0:04.67 : la caméra quitte le graphique, descend vers « Letzte Buchungen » et accueille le ticket : un seul plateau, un seul plan.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Plateau d'interface unique | [Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4), 0:03.73 | étude 60 fps : départ power1.in 4 im avant le demi-temps, 48 im au total, arrivée sur le temps f271 ; décor −40 % H |
| Tableau blanc parcouru en filés | [Whiteboard skill tutorial](https://prompt-motion.com/lemomo-ai-0d9cff), 0:12.67 | 1,1 largeur de cadre en 14 im, ease-in-out, flou horizontal de 5-8 % L (f306-f312) ; autres filés de 10 à 19 im |
| Filé de carte en carte, HUD fixe | [Amazon wholesale pitch video](https://prompt-motion.com/ceowinkz-7c776b), 0:05.55 | 8 im ease-in-out, sortie en traînées dès f336, nouvelle carte posée f340 sur le temps ; le cadre HUD ne bouge pas |
| Page qui arrive floue et se pose | [Launch video remake comparison](https://prompt-motion.com/notdwd-c2037d), 0:05.29 | arrive 39 % H trop bas, floue (24 px) ; expo.out : −25 % puis −17 % du reste par image ; dérive −6 px |
| Défilement de page | [Prompt Motion site promo](https://prompt-motion.com/antonio-kodheli-490109), 0:04.60 | la page monte de 45 % H en 25 im (30 fps), ease-in-out, sans flou ; départ sur le temps 9 (4,5 s) |
| Caméra qui suit l'objet | [Orange dot motion system](https://prompt-motion.com/ultimaxbt-bbebf5), 0:03.30 | le point quitte le i en arc, la caméra file à droite en ≈ 10 im avec flou, le point retombe sur l'origine du graphe |
| Travelling avec parallaxe | [Pelican riding a bicycle](https://prompt-motion.com/axtonliu-0b861d), 0:01.00 | lampadaires : le cadre en 47 im, linéaire ; pélican : 35 → 75 % L en 6 s ; horizon fixe : 3 vitesses |
| Suivi de la frappe | [mdfor.dev product intro video](https://prompt-motion.com/ho-ba-f3f0e9), 0:11.00 | poussée × 1,6 dans l'éditeur, puis glissés de ≈ 1 s en ease-in-out qui gardent le curseur au tiers supérieur |

![Le titre et la capture d'écran partent à gauche en se floutant, la zone suivante du tableau blanc arrive avec le feutre qui entre dans le champ](ILLUS:canevas-parcouru-2)

*[Whiteboard skill tutorial](https://prompt-motion.com/lemomo-ai-0d9cff), 0:12.58 à 0:13.25 : filé d'une largeur de cadre, flou horizontal au pic, image nette dès que le feutre se pose.*

**Règles de construction**

1. Deux régimes, rien entre les deux. Panoramique de lecture : 24 à 48 im à 60 fps (0,4 à 0,8 s), ease-in-out (Taxtello 48, Cinetic skill launch film 24). Filé : 8 à 16 im avec flou directionnel (Amazon 8, Orange dot ≈ 10, Whiteboard 14) ; courbes et flou dans l'entrée « Le filé » du chapitre 4.
2. Courbes mesurées : départ en power1.in (Taxtello, étude 60 fps, rms 2,7 %), arrivée de page en expo.out (Launch video remake). Le linéaire sert seulement au travelling continu : 15 % L en 3 s (DistilBook motion explainer), parallaxe du pélican.
3. Distances : un défilement couvre 20 à 60 % de la hauteur (Voice agent 20, Tented 25, Taxtello 40, Prompt Motion 45, Tally 60). Un changement de zone couvre environ une largeur de cadre (Whiteboard 1,1). Au-delà, filer ou couper.
4. Un repère reste fixe pendant le mouvement : cadre HUD (Amazon), phrase du haut (Sketchbook animals), règle et tête de lecture (Cinetic). Il prouve que c'est la caméra qui bouge.
5. Calage (vidéos animées sur la musique) : départ autour du demi-temps, arrivée sur le temps. Taxtello arrive f270 pour le temps f271 ; Amazon se pose sur le temps ; Supademo enchaîne 6 recadrages en 6 s, presque tous à ±1 im d'un temps.
6. Contre-exemples : des virages de 3 à 5 im sans flou se lisent comme des coupes (Starry Night cat-spotting game) ; une seule courbe de 6 s n'a aucun accent (Visual guides library) ; un mot géant filé linéairement à 6 % L par image est coupé par le bord (« SHA » → « HAP », Claude motion design showreel).

**Verdict** : à reprendre. C'est la façon la plus claire de montrer une interface comme un seul espace. Garde le flou pour le filé et ne laisse jamais le mot clé coupé par le bord, ce que tu rejettes.

**Quand l'utiliser** : en promo SaaS / interface, pour passer du tableau de bord au détail, d'une page à la section suivante, ou suivre un message envoyé. En explainer, pour parcourir un tableau blanc ou un schéma géant ; en 3D illustrée, pour un travelling avec parallaxe. On dessine le canevas entier et l'itinéraire de la caméra au découpage, puis on cale les arrivées aux enchaînements. À éviter sur des mots géants en typo cinétique et pour un changement de chapitre : préférer l'iris ou la coupe sur le temps.

**HyperFrames (GSAP)**

```js
// Canevas unique (Taxtello, étude 60 fps) : tout le film est un grand plateau #board ;
// la « caméra » est la transformation inverse du plateau. Le HUD reste hors du plateau.
// HTML : <div id="board"> <section id="kpi">… <section id="ledger">… <section id="step3">… </div>
// CSS : #board { position:absolute; left:0; top:0; width:5760px; height:3240px }
//       SVG : <filter id="fx"><feGaussianBlur id="blurX" stdDeviation="0 0"/></filter>
const FPS = 60, f = n => n / FPS;
const BEAT = 60 / 120, at = b => b * BEAT;           // 120 BPM : 1 temps = 30 im
const W = 1920, H = 1080;
// Cadrer une section : offsets de mise en page, lus après document.fonts.ready
// (une section en display:none mesure 0 : l'afficher le temps de la mesure)
const frame = (sel, k = 1) => {
  const el = document.querySelector(sel);
  const cx = el.offsetLeft + el.offsetWidth / 2, cy = el.offsetTop + el.offsetHeight / 2;
  return { x: W / 2 - cx * k, y: H / 2 - cy * k, scale: k };
};
tl.set("#board", { transformOrigin: "0 0", ...frame("#kpi") }, 0)
  // 1. Panoramique de section à section : 48 im, départ juste avant le demi-temps, arrivée sur le temps 8
  .to("#board", { ...frame("#ledger"), duration: f(48), ease: "power2.inOut" }, at(8) - f(48))
  // 2. Filé vers une zone éloignée (≈ 1,1 largeur de cadre) : 14 im, flou horizontal au pic
  .to("#board", { ...frame("#step3"), duration: f(14), ease: "power3.inOut" }, at(12) - f(14))
  .set("#board", { filter: "url(#fx)" }, at(12) - f(14)).set("#board", { filter: "none" }, at(12))
  .to("#blurX", { attr: { stdDeviation: "60 0" }, duration: f(7), ease: "power2.in", yoyo: true, repeat: 1 }, at(12) - f(14))
  // 3. Page qui arrive 39 % H trop bas et floue, puis se pose en expo.out (43 im)
  .set("#page", { autoAlpha: 1, y: 0.39 * H, filter: "blur(24px)" }, at(16))
  .to("#page", { y: 0, filter: "blur(0px)", duration: f(43), ease: "expo.out" }, at(16))
  .to("#page", { y: -6, duration: f(30), ease: "none" }, at(16) + f(43));   // jamais tout à fait immobile
```

**After Effects**

- Monter le canevas entier dans une composition géante (5 760 × 3 240 px), puis le placer dans la composition 1 920 × 1 080 : Layer › Pre-compose (Calque › Précomposer). Le précomp est le plateau ; HUD et titres fixes restent au-dessus, hors du précomp.
- Panoramique : Position du précomp, 2 clés à 48 im d'écart, la dernière sur le marqueur du temps. Easy Ease (Lissage de vitesse), puis Speed Graph (éditeur de graphe de vitesse) : influence 60 % en sortie et en entrée (≈ power2.inOut).
- Filé : mêmes clés à 14 im d'écart, influence 85 %. Flou : commutateur Motion Blur (Flou de mouvement), ou Effect › Blur & Sharpen › Directional Blur (Effet › Flou et netteté › Flou directionnel), Blur Length (Longueur) 0 → 60 → 0. Réglages détaillés dans l'entrée « Le filé » du chapitre 4.
- Page qui se pose : Position Y de +39 % H à 0 en 43 im ; 1re clé en Linear (Linéaire) pour partir à pleine vitesse, 2e clé influence entrante 95 % (≈ expo.out). Effect › Blur & Sharpen › Gaussian Blur (Flou gaussien), Blurriness (Flou) 24 → 0 sur les mêmes images.
- Parallaxe : passer les calques en 3D avec des Z différents (fond 2 000, sujet 0, premier plan −600), Layer › New › Camera (Calque › Nouveau › Caméra), Type One-Node Camera (Caméra à un nœud). Animer sa Position X en Linear : chaque plan défile à sa vitesse.
