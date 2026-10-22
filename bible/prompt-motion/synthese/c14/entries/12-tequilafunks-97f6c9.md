## Claude motion design reel — @tequilafunks

Craft **5/5** · 15.104 s · 30 fps · fiche : [Claude motion design reel](https://prompt-motion.com/tequilafunks-97f6c9)

Un reel qui démontre sa propre courbe : la balle trace cubic-bezier(0.83, 0, 0.17, 1) avec x linéaire et y en power3.inOut (rms 2,5 %), puis EASE rejoue la même courbe. L'étude chiffre l'accelerando RHYTHM, révèle trois anneaux de voxels (un par temps) et un rebond final de 14,6 % H qui décroît ×0,2.

![La balle trace sa courbe](ILLUS:tequilafunks-97f6c9-1)

*[Claude motion design reel](https://prompt-motion.com/tequilafunks-97f6c9), 0:01.23 à 0:02.07 : La balle trace sa courbe : x linéaire, y power3.inOut (f37-f50), puis plonge vers la caméra (×1,35 par image) et devient le fond orange sur le temps 4 (f60).*

![Point final](ILLUS:tequilafunks-97f6c9-2)

*[Claude motion design reel](https://prompt-motion.com/tequilafunks-97f6c9), 0:12.80 à 0:13.87 : Point final : chute 6 im, contact f390 sur le temps 26 (écrasé 2,15:1), rebonds de 14, 8 et 4 im, hauteur ×0,2, repos f416.*

**Grille** : 120 BPM à 30 fps : 1 temps = 15 im, 1 chapitre = 1 mesure = 60 im. Le code coupe sur f15n ; la batterie tombe 2-2,5 im plus tard. RHYTHM : 15, 15, 7,5, 7,5, 3,75 × 4 im ; contact du point sur le temps 26.

**Feuille de timing (extrait)**

| Temps | Élément | Mouvement | Durée | Courbe | Calage |
| --- | --- | --- | --- | --- | --- |
| 0:01.23 (f37-f50) | balle orange sur la courbe | x : 34,5 % L → 62,9 % L | 13 im (0.43 s) | none | 13 im entre le temps 2 (f30) et le temps 4 (f60) |
| 0:01.23 (f37-f50) | balle orange sur la courbe | y : 77,7 % H (bas) → 22,4 % H (haut) | 13 im (0.43 s) | power3.inOut | pente maximale f43-f45 = temps 3 (f45) |
| 0:01.70 (f51-f62) | balle qui plonge vers la caméra | diamètre : 1,9 % H → 204 % H (plein cadre) | 11 im (0.37 s) | power3.in | disque à halo 111 % H f60 = temps 4 (0 im) ; plein cadre f62 = attaque audio |
| 0:02.03 (f61-f68) | lettre « M » de MOTION | y (montée sous masque) : +16,6 % H → 0 ; décalage M f61, O f61, T f62, I f64, O f65, N f67 ≈ 1,2 im | 7 im (0.23 s) | power3.out | départ f61 = temps 4 +1 im |
| 0:02.53 (f76-f88) | MOTION → DESIGN (palettes) | hauteur des lettres (retournement) : 100 % → ≈ 25 % puis 100 % ; décalage ≈ 1 im par lettre, gauche → droite ; 4 im par lettre | 12 im (0.40 s) | power2.inOut | départ f76 = temps 5 +1 im |
| 0:03.50 (f105-f116) | volet à bandes | surface couverte : 10 % → 97 % ; décalage ≈ 1 im entre bandes, alternance gauche / droite | 11 im (0.37 s) | power2.inOut | départ f105 = temps 7 (0 im) ; mi-parcours f111 |
| 0:06.07 (f182-f190) | mosaïque → monde de voxels | inclinaison caméra : 0° → ≈ 55° (isométrique) | 8 im (0.27 s) | power2.inOut | départ f182 = temps 12 +2 im ; arène f189-f190 = demi-temps |
| 0:06.47 (f194-f234) | tour de voxels → anneau | rayon de l'anneau : tour 3 × 3 → mur (≈ 45 % L) ; décalage 3 cycles de 15 im : tours f194, f209, f224 | 40 im (1.33 s) | power2.out | chaque tour 1 im avant un temps (f195, f210, f225), anneau au mur 10 im plus tard |
| 0:09.67 (f290-f300) | sphère de filaments (compression) | diamètre : 74 % H → point orange puis disque 110 % H | 10 im (0.33 s) | power2.in | cible orange f299, disque plein f300 = temps 20 (0 im) |
| 0:10.03 (f301-f312) | mot EASE | x (bord droit) : 39,8 % L → 79,4 % L | 11 im (0.37 s) | power3.inOut | moitié du trajet f306-f307 ; posé f311 = demi-temps 20,5 (−1 im) |
| 0:10.50 (f315-f325) | WEIGHT | graisse (largeur du mot) : Thin 100 (69,4 % L) → Black 900 (78,6 % L) | 10 im (0.33 s) | power1.out | coupe f315 = temps 21 ; Black atteint f325 |
| 0:10.97 (f329-f334) | STRETCH | chasse (largeur du mot) : 47,9 % L (62 %) → 81,1 % L (125 %) | 5 im (0.17 s) | power4.out | coupe f330 = temps 22 (fondu f329) ; 90 % atteint f332 |
| 0:10.00 (f300-f360) | montage RHYTHM (8 plans) | coupes : EASE → CLAUDE ; décalage plans de 15, 15, 7,5, 7,5, 3,75 × 4 im : f300, 315, 330, 337, 345, 349, 352, 356, 360 | 60 im (2.00 s) | coupe | toutes les coupes = round(15 × temps) ; 1 image de fondu à chaque coupe |
| 0:11.87 (f356-f364) | flash crème → logo | luminance moyenne : 125 (bleu) → 224 (f357-f358) puis 23 | 8 im (0.27 s) | power2.out (décroissance) | montée f356 = double-croche 23,75 ; noir f364 |
| 0:12.80 (f384-f390) | point orange (chute) | y (centre) : 3,9 % H → 41,8 % H (ligne de base) | 6 im (0.20 s) | sine.inOut | contact f390 = temps 26 (0 im) |
| 0:13.00 (f390-f391) | point orange (impact) | écrasement l/h : 2,15:1 → 0,84:1 (étiré) | 1 im (0.03 s) | coupe | 1 image d'écrasement f390 |
| 0:13.00 (f390-f397) | point orange (rebond 1, montée) | y : 41,8 % H → 27,1 % H (−14,6 % H) | 7 im (0.23 s) | sine.out | sommet f397 |
| 0:13.23 (f397-f404) | point orange (rebond 1, chute) | y : 27,1 % H → 40,5 % H ; décalage rebonds suivants : 8 im (−3 % H, f404-f412) puis 4 im (−0,7 % H, f412-f416) | 7 im (0.23 s) | power1.in | 2e contact f404 ; repos f416 |

**Courbes de la vidéo**

| Mouvement | Courbe | Durée | Preuve |
| --- | --- | --- | --- |
| La courbe signature : balle sur le graphe, mot EASE (cubic-bezier(0.83, 0, 0.17, 1)) | power3.inOut (x linéaire pour la balle) | 11-13 im | balle y rms 2,5 %, x « none » 0,8 % ; EASE 4,6 % |
| Volets et transitions qui couvrent le cadre | power2.inOut | 11 im | bandes rms 6,2 % (aire couverte) |
| Entrées de lettres et axes variables (montée sous masque, chasse, interlettrage) | power3.out / power4.out | 4-7 im | M de MOTION 2,3 %, STRETCH 0,8 %, SPACE 3,7 % |
| Graisse variable après un temps de lecture | power1.out | 4 im tenues + 6 im | WEIGHT rms 4,9 % |
| Rebond d'objet (point final) | sine.out (montée) / power1.in (chute) | 7 + 7 im, puis 4 + 4, 2 + 2 | rms 1,1 % et 3,2 % ; écrasement 2,15:1 sur 1 im |
| Plongée vers la caméra (objet → fond) | power3.in (croissance ×1,35 par image) | 11 im | rms 7,7 % : croissance perspective plutôt qu'un ease standard |
| Flash blanc qui redescend sur le logo | power2.out | 5 im | luminance 212 → 23, rms 2,0 % |

**Leçons**

1. À 120 BPM et 30 fps, écrire coupes et départs sur f15n ; découper le dernier chapitre en 15, 15, 7,5, 7,5 puis 4 × 3,75 im jusqu'au logo.
2. Montrer une courbe : x linéaire, y avec l'ease (power3.inOut ≈ cubic-bezier(0.83, 0, 0.17, 1)) sur 13 im, puis rejouer la même courbe sur un mot.
3. Un axe variable lisible : tenir l'état de départ 4 im, puis changer en 5-6 im (power1.out à power4.out) et tenir 3 im avant la coupe.
4. Rebond de point : chute vers le temps, écrasement 2:1 sur 1 image, rebonds de 14, 8, 4 im, hauteur ×0,2 à chaque fois ; montée sine.out, chute power1.in.
5. Un geste de fond par temps : trois anneaux de voxels toutes les 15 im ; les tuiles tournent sur les temps 9, 10 et 11.
6. Lettres en cascade de 1 à 1,5 im à 30 fps, montée power3.out en 7 im : le mot complet tient en un demi-temps.

**HyperFrames (GSAP)**

```js
// Chapitre 05 RHYTHM, f300 → f360 (1 mesure) : accelerando + EASE qui rejoue sa courbe
const FPS = 30, BEAT = 0.5;                  // 120 BPM : 1 temps = 15 im
const F = n => n / FPS;                       // images → secondes
const B = n => n * BEAT;                      // temps → secondes (temps 20 = f300)
const tl = gsap.timeline({ paused: true });
// durées des plans en temps : 1, 1, 1/2, 1/2, puis 4 × 1/4 = 4 temps
const plans = ["ease","weight","stretch","space","scale","spin","flip","flash"];
const durs  = [1, 1, 0.5, 0.5, 0.25, 0.25, 0.25, 0.25];
let t = B(20);
plans.forEach((id, k) => {
  tl.set("#" + id, { autoAlpha: 1 }, t)                       // coupe sur round(15 × temps)
    .set("#" + id, { autoAlpha: 0 }, t + B(durs[k]));
  t += B(durs[k]);
});
// EASE : traverse 40 % L en 11 im, courbe de l'intro
tl.fromTo("#ease .w", { xPercent: -75 }, { xPercent: 0, duration: F(11),
    ease: "power3.inOut" }, B(20) + F(1));                  // ≈ cubic-bezier(0.83,0,0.17,1)
// WEIGHT : 4 im en Thin, puis Black en 6 im
tl.fromTo("#weight .w", { fontVariationSettings: "'wght' 100" },
    { fontVariationSettings: "'wght' 900", duration: F(6), ease: "power1.out" }, B(21) + F(4));
// STRETCH : chasse 62 → 125 en 5 im
tl.fromTo("#stretch .w", { fontStretch: "62%" }, { fontStretch: "125%",
    duration: F(5), ease: "power4.out" }, B(22) - F(1));
// SPACE : interlettrage en 4 im
tl.fromTo("#space .w", { letterSpacing: "-0.04em" }, { letterSpacing: "0.32em",
    duration: F(4), ease: "power3.out" }, B(22.5));
// flash crème puis redescente au noir en 5 im sur le temps 24
tl.fromTo("#flashbg", { opacity: 1 }, { opacity: 0, duration: F(5),
    ease: "power2.out" }, B(24) - F(1));
```

**After Effects**

- Composition 1920 × 1080 à 30 i/s, marqueurs toutes les 15 images. Couper sur les marqueurs ; la musique arrive 2 im après, ne pas recaler sur l'onde.
- Balle sur la courbe : Separate Dimensions (Séparer les dimensions). X linéaire sur 13 im ; Y départ et arrivée vitesse 0 influence 83 % (≈ cubic-bezier(0.83, 0, 0.17, 1)). Même clé pour EASE sur 11 im.
- Point final : contact image 390, Scale (Échelle) 215/47 % sur 1 image, puis rebonds de 14, 8, 4 im (14,6, 3, 0,7 % H) ; montées Easy Ease Out (Lissage de vitesse à la sortie), chutes influence 33 % au départ.
- Accelerando : couper aux images 300, 315, 330, 337, 345, 349, 352, 356, 360 ; ajouter une image de fondu enchaîné sur chaque coupe.
- WEIGHT : texte variable, Weight (Graisse) 100 tenue 4 im puis 900 en 6 im (arrivée influence 50 %). STRETCH : Width (Chasse) 62 → 125 % en 5 im, arrivée influence 90 % (power4.out).
