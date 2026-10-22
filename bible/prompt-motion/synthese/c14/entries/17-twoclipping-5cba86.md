## Shape morphing through UI states — @twoclipping

Craft **4/5** · 14.058 s · 60 fps · fiche : [Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86)

Une seule forme change d'état 14 fois sans coupe, toute en ressorts. L'étude mesure ces ressorts (ω 16-19 rad/s, ζ 0,62-0,90, rms 0,2-2,3 %) et révèle la règle de calage : ce n'est pas le départ qui tombe sur le temps, c'est le pic de vitesse, atteint 3-5 im après le départ.

![Trois bascules au demi-temps (pics f334, f349, f364)](ILLUS:twoclipping-5cba86-1)

*[Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86), 0:05.43 à 0:06.13 : Trois bascules au demi-temps (pics f334, f349, f364) : bord avant ω 21-26, bord arrière ω 13,5-14, bouton étiré ×1,26 au milieu de chaque course.*

![Indicateur liquide Day → Week → Month (pics f409, f424, étirement ×1,32), puis la barre s'ouvre en carte, ζ…](ILLUS:twoclipping-5cba86-2)

*[Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86), 0:06.73 à 0:07.43 : Indicateur liquide Day → Week → Month (pics f409, f424, étirement ×1,32), puis la barre s'ouvre en carte, ζ 0,72, pic f440 sur le demi-temps 14,5.*

**Grille** : 119,9 BPM : 1 temps = 30,025 im, temps 0 à f4 (0,067 s), 28 temps = 7 mesures = 840 im. Chaque morph place son pic de vitesse sur un temps ou un demi-temps (±1 im), départ 3-5 im avant. Bascules au demi-temps (15 im), frappe au quart (7,5 im).

**Feuille de timing (extrait)**

| Temps | Élément | Mouvement | Durée | Courbe | Calage |
| --- | --- | --- | --- | --- | --- |
| 0:00.52 (f31-f46) | forme : bouton → cercle | largeur : 44,6 % W → 15,4 % W | 15 im (0.25 s) | ressort ω 19, ζ 0,90 (≈ power1.out), dépassement 0,2 % | pic de vitesse f35-f36 = temps 1 (+1,5 im) |
| 0:01.00 (f60-f74) | cercle + check | hauteur (pulsation de validation) : 15,0 % H → 16,25 % H puis 15,0 % | 14 im (0.23 s) | sine.inOut (aller 7 im + retour 7 im), dépassement +8,3 % (pic f67) | check tracé f58-f63, finit sur le temps 2 (f64) ; pic de la pulsation +3 im |
| 0:01.25 (f75-f95) | forme : cercle → île (pilule) | bord gauche (largeur 15 → 61 % W) : 42,3 % W → 19,3 % W | 20 im (0.33 s) | ressort ω 17,5, ζ 0,74 (≈ back.out(1.0)), dépassement 3,2 % | pic f79 = demi-temps 2,5 (0 im) ; 98 % à f95 ≈ temps 3 |
| 0:01.75 (f105-f125) | forme : île → lecteur | hauteur : 15,1 % H → 43,75 % H | 20 im (0.33 s) | ressort ω 18, ζ 0,62 (≈ back.out(2.2)), dépassement 8,3 % à l'écran (pic f119, recadrage caméra probable) | pic f109 = demi-temps 3,5 (0 im) ; 98 % f125 = temps 4, 1er temps de la mesure 2 (+1) |
| 0:03.03 (f182-f210) | tête de lecture (glissé) | x : 38,2 % W → 71,25 % W | 28 im (0.47 s) | power2.inOut | accélère sur le temps 6 (f184) ; posée f210, 4 im avant le temps 7 |
| 0:03.75 (f225-f240) | forme : lecteur → slider | hauteur : 43,75 % H → 13,06 % H | 15 im (0.25 s) | ressort ω 17,5, ζ 0,84 (≈ back.out(1.0)), dépassement 0,8 % | pic f229 = demi-temps 7,5 (0 im) |
| 0:04.72 (f283-f299) | pilule du volume (au-delà du max) | bord droit : 86,9 % W → 93,0 % W (+8 % de longueur) | 16 im (0.27 s) | power1.out | — |
| 0:05.25 (f315-f330) | forme : slider → toggle | largeur : 73,8 % W → 33,4 % W | 15 im (0.25 s) | ressort ω 16,5, ζ 0,82 (≈ power2.out), dépassement 1,1 % | pic f319-f320 = demi-temps 10,5 (0/+1 im) |
| 0:05.50 (f330-f341) | bouton du toggle, bord avant (gauche) | x : 50,6 % W → 35,0 % W | 11 im (0.18 s) | ressort ω 21, ζ 0,80, dépassement 1,5 % | pic f334 = temps 11 (0 im) : pas un raté |
| 0:05.50 (f330-f346) | bouton du toggle, bord arrière (droit) | x : 64,2 % W → 50,8 % W ; décalage mi-course 3-4 im après le bord avant | 16 im (0.27 s) | ressort ω 13,5, ζ 0,74, dépassement 3,2 % | — |
| 0:06.75 (f405-f420) | indicateur d'onglets Day → Week, bord avant (droit) | x : 35,5 % W → 62,15 % W | 15 im (0.25 s) | ressort ω 20,5, ζ 0,78, dépassement 2,0 % | pic f408-f409 = demi-temps 13,5 |
| 0:07.25 (f435-f456) | forme : onglets → carte graphique | hauteur : 11,7 % H → 58,7 % H | 21 im (0.35 s) | ressort ω 17, ζ 0,72 (≈ back.out(1.4)), dépassement 3,8 % | pic f440 = demi-temps 14,5 (+1 im) |
| 0:07.50 (f450-f480) | compteur « total views » | valeur : 48 278 → 84 320 | 30 im (0.50 s) | power2.out | se pose f480, 4 im avant le temps 16 (1er temps de la mesure 5) |
| 0:07.57 (f454-f481) | courbe du graphique | x de la pointe du tracé : 19,5 % W → 82,1 % W | 27 im (0.45 s) | power1.out | se pose 3 im avant le temps 16 |
| 0:10.02 (f601-f623) | forme : recherche → palette ⌘K | hauteur : 11,8 % H → 56,1 % H ; décalage 5 lignes en cascade f610-f620, ≈ 3 im | 22 im (0.37 s) | ressort ω 16, ζ 0,70 (≈ back.out(1.4)), dépassement 4,6 % | pic f605 = temps 20, 1er temps de la mesure 6 |
| 0:10.52 (f631-f661) | texte tapé « frame » | lettres : « » → « frame » ; décalage f631, f638, f646, f653, f661 : 7,5 im = 1/4 de temps | 30 im (0.50 s) | coupe | grille au quart de temps décalée de −3,5 im (comme les départs de ressort) |
| 0:11.75 (f705-f717) | conteneur palette → toast | luminance du fond : 255 (blanc) → 24 (noir) | 12 im (0.20 s) | sine.inOut | mi-course f710 = demi-temps 23,5 |
| 0:12.75 (f765-f781) | forme : toast → bouton | largeur : 66,8 % W → 43,0 % W | 16 im (0.27 s) | ressort ω 17, ζ 0,80 (≈ sine.out), dépassement 1,5 % | pic f770 = demi-temps 25,5 (0 im) |

**Courbes de la vidéo**

| Mouvement | Courbe | Durée | Preuve |
| --- | --- | --- | --- |
| Morphs du conteneur qui rétrécit (bouton → cercle, lecteur → slider, carte → recherche, toast → bouton) | ressort ω 16-19, ζ 0,78-0,90 (≈ sine.out / power2.out) | 13-16 im jusqu'à 98 % | 6 mesures, ressort rms 0,2 à 0,9 % (eases GSAP 4,1 à 7,2 %) |
| Morphs du conteneur qui s'agrandit (île, lecteur, carte, palette) | ressort ω 16-18, ζ 0,62-0,74 (≈ back.out(1.0-1.4)) | 20-22 im jusqu'à 98 % | 4 mesures, dépassement 3,2 à 8,3 %, ressort rms 0,8 à 2,3 % |
| Bord avant du bouton de toggle et de l'indicateur d'onglets | ressort ω 20-30, ζ 0,78-0,92 | 10-11 im | 4 mesures, rms 0,7 à 1,6 % |
| Bord arrière (rattrape le bord avant : étirement ×1,26-1,32) | ressort ω 13,5-16, ζ 0,74-0,88 (≈ sine.out) | 17-26 im | 3 mesures, rms 0,7 à 1,1 % |
| Compteurs et tracé de courbe | power2.out / sine.out (ressort ω 10,5-15, ζ 0,82-0,94) | 22-30 im | 3 mesures, power2.out rms 2,0 %, ressorts 0,6 à 1,9 % |
| Glissés en manipulation directe (tête de lecture, volume) | power2.inOut (traversée) / power1.out (tirer) / sine.in (lâcher vers 0) | 10-28 im | 4 mesures, rms 2,8 à 5,9 % |
| Couleur du conteneur et pulsations (check, Entrée) | sine.inOut | 7 + 7 im (pulsation), 12 im (blanc → noir) | 3 mesures, rms 4,6 à 5,0 % |

**Leçons**

1. Caler le pic de vitesse, pas le départ : chaque ressort part 3-5 im avant le temps et atteint sa vitesse maximale sur le temps (±1 im, 14 morphs mesurés).
2. Ressort de conteneur : ω 16-19 rad/s. ζ 0,8-0,9 pour rétrécir (dépassement ≤ 2 %), ζ 0,6-0,75 pour agrandir (3-8 %). 98 % atteint en 13-22 im, moins d'un temps.
3. Étirement liquide : bord avant ω 20-30, bord arrière ω 13,5-16, même départ. La mi-course arrière suit de 3-4 im et l'objet s'allonge de 26-32 %.
4. Densité : un geste par demi-temps pendant les bascules (15 im d'écart), une lettre tapée par quart de temps (7,5 im). Jamais plus de 9 im totalement figés.
5. Compteurs et tracés sont plus lents que les formes (ω 10-15, 22-30 im, sans dépassement) et se posent 3-4 im avant le temps suivant.
6. Changer la couleur du conteneur pendant le repli (blanc → noir en 12 im, sine.inOut), et marquer chaque validation par une pulsation de ±2-8 % en 14 im.

**HyperFrames (GSAP)**

```js
// f315 → f456 (2,35 s) : slider → toggle → bascule à deux bords → onglets → carte
const FPS = 60, BEAT = 30.025, B0 = 4.02;   // 119,9 BPM : temps k à l'image B0 + k × BEAT
const F = n => n / FPS;                      // images → secondes
const at = k => F(B0 + k * BEAT - 4);        // départ 4 im avant le temps : pic de vitesse SUR le temps
// ressort fermé (réponse à un échelon), normalisé sur la durée du tween
const spring = (w, z, d) => {
  const wd = w * Math.sqrt(1 - z * z);
  const s = t => 1 - Math.exp(-z * w * t) * (Math.cos(wd * t) + z * w / wd * Math.sin(wd * t));
  return p => s(p * d) / s(d);
};
const tl = gsap.timeline({ paused: true });
// 1. slider → toggle (demi-temps 10,5) : on rétrécit, ζ 0,82, dépassement 1 %
tl.to("#shape", { width: "33.4%", height: "18%", duration: F(24), ease: spring(16.5, 0.82, F(24)) }, at(10.5))
// 2. bascule (temps 11) : deux bords, deux ressorts, même départ → bouton étiré ×1,26
  .to("#knob", { "--left": "35%",   duration: F(16), ease: spring(21, 0.80, F(16)) }, at(11))
  .to("#knob", { "--right": "50.8%", duration: F(26), ease: spring(13.5, 0.74, F(26)) }, at(11))
  .to("#track", { backgroundColor: "#D6D6D2", duration: F(12), ease: "sine.inOut" }, at(11))
// 3. indicateur d'onglets Day → Week (demi-temps 13,5) : même paire de ressorts
  .to("#ind", { "--right": "62.15%", duration: F(15), ease: spring(20.5, 0.78, F(15)) }, at(13.5))
  .to("#ind", { "--left": "36.8%",   duration: F(24), ease: spring(16, 0.88, F(24)) }, at(13.5))
// 4. onglets → carte (demi-temps 14,5) : on agrandit, ζ 0,72, dépassement 3,8 %
  .to("#shape", { height: "58.7%", duration: F(30), ease: spring(17, 0.72, F(30)) }, at(14.5))
// 5. compteur 0 → 84 320 et courbe : plus lents, posés 4 im avant le temps 16
  .to("#count", { textContent: 84320, snap: { textContent: 1 }, duration: F(32), ease: "power2.out" }, F(448))
  .fromTo("#line", { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: F(27), ease: "sine.out" }, F(454));
```

**After Effects**

- Composition 1440 × 1440 à 60 i/s, marqueurs aux images 4 + 30,025 × k (4, 34, 64, 94…). Le milieu de chaque morph tombe sur un marqueur, sa première clé 4 images avant.
- Ressort exact par expression sur Rectangle Path › Size (Tracé de rectangle › Taille) : t = time − début ; wd = w·√(1−z²) ; p = 1 − e^(−z·w·t)·(cos(wd·t) + z·w/wd·sin(wd·t)). w = 17 ; z = 0,85 pour rétrécir, 0,65 pour agrandir.
- Toggle et onglets : piloter bord gauche et bord droit séparément (deux Slider Control (Paramètre glissière)). Bord avant w 21-30, z 0,85 ; bord arrière w 13,5-16, z 0,75 ; même image de départ. L'étirement ×1,3 apparaît seul.
- Sans expression : clé de départ influence 10 %, clé d'arrivée 75-80 % ; pour agrandir, une clé de dépassement de 3-8 % à +11 images, puis retour en 9 images.
- Échange de contenu : ancien calque Gaussian Blur (Flou gaussien) 0 → 20 et Opacity (Opacité) 100 → 0 en 6 images ; nouveau 20 → 0 en 6-8 images, chevauchement 2-3 images ; sous-éléments décalés de 3-4 images.
