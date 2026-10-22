## La boucle parfaite (seamless loop, perfect loop, loop seam)

La dernière image coule dans la première : en lecture automatique, on ne voit pas où le film recommence. Les meilleures boucles mesurées finissent à moins de 1/255 d'écart moyen avec l'image 0 (*Le bouclage*, chapitre 10). Tout repose sur une règle du contrat de rendu : on rend les images 0 à N−1, et N−1 coule dans 0 (F).

![Le point quitte la virgule de « 5.5 », se pose écrasé dans « HI. », la dernière image et l'image 0 sont identiques, puis il repart](ILLUS:C12-boucle-parfaite)

*[Kinetic type showreel](https://prompt-motion.com/zheke-38deff), 0:14.53 à 0:00.33 : le point s'envole f879, se pose écrasé dans « HI. » f893 ; f899 et f0 sont identiques, l'écrasement continue et le point repart.*

**Quand l'utiliser** : la fonction « boucle » : post réseau, vidéo héro de page d'atterrissage, GIF. Le mode de lecture se décide au brief (ligne SPEC), l'élément planté au script. À éviter quand le film finit sur une signature en lecture unique (voir *La signature finale*).

**L'événement** (états et minutage, 60 fps, 128 BPM : 1 temps = 28,125 im ; images globales, N = 900)

| Image (globale) | Temps | Ce qu'on voit | Ce qui bouge (héros / secondaires) | Courbe | Son |
| --- | --- | --- | --- | --- | --- |
| f844 | 30 | état d'entrée : la carte finale lisible | secondaires : le titre sort par le haut, 2 im par mot | power1.in, 17 im | — |
| f855-f889 | → 31 | l'icône rejoint la place exacte de l'image 0 | héros : l'icône, mi-course sur le temps 31 (f872) | power2.inOut, 34 im | — |
| f889-f899 | → 32 | 11 im immobiles : l'état de l'image 0 | ambiant seul, périodique | none | queue de la mesure 8 |
| f899 | 32 − 1 im | dernière image rendue (N−1) | — | — | — |
| f0 | 0 | état de sortie = image 0, une composition finie | — | — | la mesure 1 repart, sans clic |
| f0-f10 | | 10 im immobiles, puis le premier geste | héros : l'icône monte | power3.out, 30 im | — |

Minutage de l'étude 60 fps de theviableedge, posé sur la grille.

**Règles**

1. **Images 0 à N−1, N en mesures entières.** 900 im = 8 mesures à 128 BPM : la musique boucle en phase (chapitre 10). Rendre l'image N montre deux fois l'image 0 : c'est l'accroc de la couture (F).
2. **Cycles entiers.** Tout mouvement continu suit la phase p = image / N, en linéaire. Un carré tourne de 90° par tour, une onde fait 2 cycles entiers. Pour une dérive organique, le bruit se lit sur un cercle : il revient à son départ (F).
3. **L'image 0 est une composition finie** (F) : c'est elle qu'on voit pendant le chargement. L'élément planté y tient seul 12 à 30 im ; 0,5 s de noir au départ casse la boucle (chapitre 10).
4. **Retour exact.** Position, taille, couleur : écart final mesuré de 0,13 à 0,9/255. Retour en power2.inOut ≈ 34 im pour traverser le cadre ; power1.in ou power2.in en 5 à 8 im pour se refermer en point (chapitre 10).
5. **Deux coutures, pas trois.** Soit 8 à 10 im immobiles de chaque côté, soit un geste qui traverse sans s'arrêter. Jamais un objet qui bouge encore d'un côté et pas de l'autre (chapitre 10).
6. **Pas d'attente.** 1 s immobile à la fin et 0,5 s au départ font 1,5 s d'attente par tour (fiche de Shape morphing through UI states).

**Variantes**

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Couture tenue | [Second brain service promo](https://prompt-motion.com/theviableedge-9065be), 0:14.30 | 4 carrés au centre en 34 im power2.inOut, 8 + 10 im immobiles, écart 0,13/255 (étude 60 fps) |
| Geste qui traverse la couture | [Kinetic type showreel](https://prompt-motion.com/zheke-38deff), 0:14.65 | envol f879, posé écrasé f893 (temps 31,75), écrasement continu f0-f2 ; écart 0,9/255 (étude 60 fps) |
| Iris refermé sur le point d'ouverture | [Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e), 0:14.73 | disque 97 → 2,5 % H en 8 im power1.in, puis 8 im de point seul sur noir = f0 (étude 60 fps) |
| Boucle d'interface, mais trop d'attente | [Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86), 0:12.50 | identique au pixel près (0,33/255), mais ≈ 1 s de bouton seul en fin de tour |
| Contre-exemple : la boucle accroche | [Morphing UI states loop](https://prompt-motion.com/demonugc-4c5753), 0:13.98 | bouton 10 px trop bas qui bouge encore de 3 px/im, curseur qui saute d'environ 140 px |

**Ligne de SHOTLIST**

```text
Plan 8 · Couture de boucle · globales f844-f899 → f0-f10 · SPEC : boucle oui, N = 900 (8 mesures), rendu f0 à f899
Entrée : la carte finale lisible (icône en haut, titre).
Sortie : l'état exact de l'image 0 : icône seule au centre, mêmes position, taille et couleur.
Raison : le spectateur ne voit pas la fin ; le film recommence sans couture.
Héros : l'icône qui revient. Secondaire : le titre. Ambiant : bruit sur un cercle, anneau à 90° par tour.
Repères : sortie du titre f844 · retour f855-f889 (mi-course f872) · immobile f889-f899 et f0-f10.
Son : la mesure 8 coule dans la mesure 1 ; WAV maître sans couture, aucun clic.
```

**HyperFrames (GSAP)**

```js
// Boucle de 8 mesures : phase périodique, retour exact sur l'image 0, couture tenue ≈ 20 im
const FPS = 60, BPM = 128, BEAT = 60 / BPM;
const at = (bar, beat = 0) => ((bar - 1) * 4 + beat) * BEAT;
const F = n => n / FPS;
const snap = t => Math.round(t * FPS) / FPS;              // chaque temps arrondi depuis l'image 0
const N = Math.round(at(9) * FPS), DUR = N / FPS;         // 900 im = 15 s : on rend les images 0 à N − 1
// bruit lisse à graine fixe, lu sur un cercle : à p = 1 il revient exactement à p = 0
const hash = (i, j) => { const s = Math.sin(i * 127.1 + j * 311.7) * 43758.5453; return s - Math.floor(s); };
const sm = t => t * t * (3 - 2 * t);
const noise2 = (x, y) => {
  const i = Math.floor(x), j = Math.floor(y), u = sm(x - i), v = sm(y - j);
  const a = hash(i, j), b = hash(i + 1, j), c = hash(i, j + 1), d = hash(i + 1, j + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
};
const loopNoise = (p, r, k) => noise2(r * Math.cos(2 * Math.PI * p) + k + 0.5, r * Math.sin(2 * Math.PI * p) + k + 0.5);
// 1. l'ambiant suit la phase p = image / N, en linéaire, avec des cycles entiers
const phase = { p: 0 };
tl.to(phase, { p: 1, duration: DUR, ease: "none", onUpdate: () =>
    document.querySelectorAll(".blob").forEach((el, k) => gsap.set(el, {
      xPercent: (loopNoise(phase.p, 1.5, 3 * k) - 0.5) * 8,           // dérive de ± 4 %
      yPercent: (loopNoise(phase.p, 1.5, 3 * k + 1) - 0.5) * 8 })) }, 0)
  .to("#ring", { rotation: 90, duration: DUR, ease: "none" }, 0);   // motif à 4 branches : 90° par tour
// 2. image 0 = composition finie : l'icône seule au centre, tenue 10 im
const HOME = { x: 0, y: 0, scale: 1 }, TOP = window.TIMELINE.anchors.markTop;   // {y, scale}
tl.set("#mark", HOME, 0)
  .set("#title .w", { yPercent: 110 }, 0)
  .to("#mark", { y: TOP.y, scale: TOP.scale, duration: F(30), ease: "power3.out" }, F(10))
  .to("#title .w", { yPercent: 0, duration: F(21), ease: "power3.out", stagger: F(5) }, F(20))
  // … le film …
  // 3. temps 30 : le titre sort par le haut, 2 im par mot
  .to("#title .w", { yPercent: -110, duration: F(17), ease: "power1.in", stagger: F(2) }, snap(at(8, 2)))
  // 4. retour exact sur l'état de l'image 0 : 34 im, mi-course sur le temps 31
  .to("#mark", { ...HOME, duration: F(34), ease: "power2.inOut" }, snap(at(8, 3)) - F(17))
  .set("#title .w", { yPercent: 110 }, snap(at(8, 3)) + F(17))     // rangé comme en f0
  .set({}, {}, DUR);                                                // la timeline dure N images pile
```

**After Effects**

- Composition › Composition Settings (Composition › Paramètres de composition) : 900 images à 60 i/s, soit 8 mesures à 128 BPM ; un marqueur par mesure.
- Copier les clés de l'image 0 (Position, Scale (Échelle), Opacity (Opacité)) et les coller à l'arrivée du retour.
- Cycles entiers : `loopOut("cycle")` sur une propriété animée, ou `linear(time, 0, thisComp.duration, 0, 90)` sur Rotation. `wiggle()` n'est pas périodique : pas dans une boucle.
- Bruit sur un cercle, en expression sur Position : `p = time / thisComp.duration * 2 * Math.PI; value + [noise([Math.cos(p), Math.sin(p)]), noise([Math.cos(p) + 9, Math.sin(p) + 9])] * amp;` (amp sous 5 % de la course du héros, F).
- Rendre la zone de travail 0 à 899 : Render Settings › Time Span › Work Area Only (Paramètres de rendu › Durée › Zone de travail uniquement).

**Contrôle**

En 3 lectures (F) : `ffmpeg -stream_loop 2 -i out/film.mp4 -c copy out/loop_check.mp4`, puis regarder la couture trois fois à vitesse normale. Avant : ffprobe compte N images, pas N+1. Bande de 8 images f896-f899 puis f0-f3 : couture tenue, écart moyen f899-f0 sous 1/255 ; geste qui traverse, pas de f899 à f0 égal aux pas voisins. f0 se lit seule. Son : le MP4 ajoute un bourrage de 16 ms ; garder le WAV maître sans couture. Pour un MP4 à un tour : fondu de 2 ms sur les 96 premiers et derniers échantillons (F).
