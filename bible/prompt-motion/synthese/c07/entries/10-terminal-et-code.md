## Le terminal qui tape et le code qui pilote le rendu (terminal typing, block caret, log output, typed code, live code-to-render)

Un terminal ou un éditeur tape une commande au curseur bloc, imprime son journal ligne par ligne jusqu'au statut vert, ou le code tapé change un aperçu à la même image. Pour un public développeur, c'est la preuve la plus crédible : une vraie commande, un vrai résultat. Le défaut récurrent est la taille : 8 fiches jugent le texte illisible, entre 0,8 et 1,3 % de la hauteur. Vue dans 35 vidéos, dont 27 notées 4 ou 5.

![Terminal à côté du titre « Updates in one command. » : la commande se tape, puis le journal s'imprime ligne à ligne jusqu'à la ligne verte](ILLUS:terminal-et-code-1)

*[Database client launch video](https://prompt-motion.com/iammxfschr-d68f90), 0:19.02 à 0:21.70 : « /queryglow update » tapé à 2 im par caractère, puis une ligne de journal par demi-temps jusqu'au « ✓ Update complete » vert.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Commande puis journal au demi-temps | [Database client launch video](https://prompt-motion.com/iammxfschr-d68f90), 0:19.02 | 30 car./s ; 8 lignes toutes les 13 im (demi-temps à 136 BPM), fondu de 5-6 im ; succès final en vert |
| Tests au vert, une seule rupture | [Second brain service promo](https://prompt-motion.com/theviableedge-9065be), 0:09.72 | un PASS toutes les 5 im exactes ; test 6 en FAIL, « fixed, re-run », PASS 23 im après ; 8/8 (étude 60 fps) |
| Le code pilote l'aperçu | [Personal skills showreel](https://prompt-motion.com/ibrahimwasim240-809370), 0:05.57 | 5 lignes en ≈ 1,3 s ; le héros saute dès que sa ligne est écrite ; tests, déploiement ; la scène dure 1 mesure |
| Propriété après propriété | [Lism CSS 1.0 release video](https://prompt-motion.com/ddryo-loos-300829), 0:18.30 | un attribut toutes les ≈ 8 im (30 fps), effet à la même image : marge hachurée, arrondi, ombre, fond bleu |
| Bug rouge, correction verte | [Claude self-promo spot](https://prompt-motion.com/slvdev-64c45a), 0:09.60 | ligne fautive surlignée en rouge à 10,0 s, réécrite et verte à 10,5 s ; 3 pilules de test cochées en décalé |
| Terminal né du caret | [Cinetic skill launch film](https://prompt-motion.com/lexnlin-6161a6), 0:24.00 | caret → bloc bleu flou → fenêtre de ≈ 45 % L sur le temps ; sorties lues après une coupe à ×1,6 |
| Commande héros lisible | [fal motion design showreel](https://prompt-motion.com/influencer-seo-ce8c33), 0:00.00 | mono capitales ≈ 7 % H, 2 im par caractère à 60 fps, curseur bloc lavande : le produit posé en API dès la 1re seconde |
| Le code comme matière | [Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), 0:08.40 | 7 lignes GLSL couchées au sol, lues à travers la lentille qu'elles calculent ; sol glissé de 35 % L en 108 im (étude) |

![Code hero.js à gauche, aperçu du jeu à droite : la ligne surlignée fait sauter le héros, puis tests et déploiement](ILLUS:terminal-et-code-2)

*[Personal skills showreel](https://prompt-motion.com/ibrahimwasim240-809370), 0:05.57 à 0:08.33 : cause et effet à la même image, puis tests et déploiement dans la même mesure.*

**Règles de construction**

1. Une ligne qui compte, en grand : la commande et le statut final font au moins 4 % H (guide Otom, p. 14) ; le journal peut rester une texture. Sinon, couper vers un cadrage serré au moment de lire (×1,6 chez lexnlin).
2. Taper peu, imprimer le reste : une commande de 15 à 40 caractères à 30 car./s (iammxfschr, influencer-seo, imthatcarlos), les sorties ligne entière. Au-delà de 50 car./s (ezshine) ou d'une ligne toutes les 2,4 im (parkerrex), on ne lit plus qu'un flot.
3. Journal en cadence : une ligne par demi-temps (iammxfschr : 8 sur 8 sur la grille), ou toutes les 5 im sans musique (theviableedge). Une seule rupture, FAIL puis PASS 23 im après, crée le suspense. Le vert est réservé au succès.
4. Cause et effet à la même image : l'aperçu change quand la ligne ou la propriété est écrite (ibrahimwasim, ho-ba, ddryo-loos). Code à gauche, aperçu à droite, ≈ 45 % L chacun.
5. Calage, d'après les vidéos animées sur la musique : la fenêtre naît sur le temps (lexnlin, 24,0 s) ; la barre de déploiement devient la scène suivante sur le 1er temps (ibrahimwasim, f501) ; le curseur clignote au tempo (hbcoop : 1 temps allumé, 1 éteint). Contre-exemples : validation à −3,4 im du demi-temps puis 1,05 s figée (kyonax), curseur à 41 im sans rapport avec 120 BPM (madhav-xo).
6. Jamais de terminal figé : enchaîner sur le résultat visible (viktoroddy : 3 cartes jaillissent du terminal en 20 im). Contre-exemples : 1 s figée (davidmarcus), 1,5 s (astrodevil).

Le prompt tapé dans un champ et sa réponse en flux : voir « Le prompt tapé et la réponse en flux » (chapitre 7). Cadence de frappe et curseur : voir « Le texte qui s'écrit sur place » (chapitre 3).

**Verdict** : à reprendre pour un public développeur : une commande courte et lisible, un journal en cadence, un verdict vert, puis le résultat à l'image. Pour un client non technique, à adapter : garder une seule ligne en grand ; les commentaires de code dans chaque plan (grace-sunnyy) y sont du bruit.

**Quand l'utiliser** : promo SaaS d'outil développeur (API, CLI, SDK, base de données), lancement open source, showreel « fait en code ». Il sert l'accroche (commande d'ouverture), la preuve (tests verts, journal), la démonstration (code → aperçu) et l'appel final (commande d'installation à copier, hqmank). Il se décide au découpage et au système de design : une mono, une couleur de curseur, le vert pour le succès. À éviter en vertical à petit corps.

**HyperFrames (GSAP)**

```js
// Terminal né sur le temps, commande tapée, journal au demi-temps, curseur au tempo
const FPS = 60, BEAT = 60 / 136;                 // 136 BPM : 1 temps = 26,5 im
const at = b => b * BEAT, F = n => n / FPS, HALF = BEAT / 2;
const T0 = at(32);                               // 1er temps de la mesure 9
// 1. la fenêtre grandit depuis le caret, flou → net (ouverture sine.out 26 im, étude theviableedge)
tl.set("#term", { autoAlpha: 1, scaleX: 0.02, scaleY: 0.1, filter: "blur(12px)", transformOrigin: "0% 0%" }, T0)
  .to("#term", { scaleX: 1, scaleY: 1, filter: "blur(0px)", duration: F(26), ease: "sine.out" }, T0);
// 2. commande : un <span> par caractère, 2 im chacun (30 car./s) ; #caret suit le dernier span
const cmd = document.querySelector("#cmd"), txt = "$ ./queryglow update";
cmd.innerHTML = [...txt].map(c => `<span style="display:none">${c}</span>`).join("");
const t1 = T0 + at(1);                           // frappe sur le temps suivant
[...cmd.children].forEach((s, i) => tl.set(s, { display: "inline" }, t1 + F(2 * i)));
// 3. journal : une ligne par demi-temps, fondu de 6 im ; la dernière (✓ …) est verte en CSS
const t2 = Math.ceil((t1 + F(2 * txt.length)) / HALF) * HALF;   // demi-temps suivant
const lines = gsap.utils.toArray("#log li");
lines.forEach((li, i) => {
  tl.set(li, { autoAlpha: 0, y: 6 }, 0)
    .to(li, { autoAlpha: 1, y: 0, duration: F(6), ease: "power2.out" }, t2 + i * HALF);
});
// 4. après le statut : curseur 1 temps allumé, 1 temps éteint
const tEnd = Math.ceil((t2 + lines.length * HALF) / BEAT) * BEAT;
for (let b = 0; b < 4; b++)
  tl.set("#caret", { autoAlpha: 0 }, tEnd + at(2 * b)).set("#caret", { autoAlpha: 1 }, tEnd + at(2 * b + 1));
// 5. code → aperçu : l'effet part à l'image du dernier caractère de sa ligne
const typed = (start, n) => start + F(2 * n);
tl.to("#hero", { y: -120, duration: F(14), ease: "power2.out", yoyo: true, repeat: 1 }, typed(t1, txt.length));
```

**After Effects**

- Fenêtre : Layer › New › Shape Layer (Calque › Nouveau › Calque de forme), Rectangle Path (Tracé rectangulaire) ; Size (Taille) de la taille du caret à ≈ 45 % de la largeur en 26 im, depuis un Composition Marker (marqueur de composition) sur le temps. Effect › Blur & Sharpen › Gaussian Blur (Effet › Flou et netteté › Flou gaussien) de 12 à 0.
- Commande : expression sur Source Text (Texte source), `s="$ ./queryglow update"; n=Math.floor((time-inPoint)/(2*thisComp.frameDuration)); s.substr(0,Math.max(0,n))`.
- Journal : un calque de texte par ligne, expression sur Opacity (Opacité) : `k=60/136/2; t0=thisComp.marker.key("log").time+(index-thisComp.layer("L1").index)*k; linear(time,t0,t0+6*thisComp.frameDuration,0,100)`. Le marqueur de composition « log » tombe sur le demi-temps qui suit la frappe.
- Cause et effet : clés de l'aperçu à l'image du dernier caractère (début + 2 im × caractères). Badges de test décalés de 5 im : Animation › Keyframe Assistant › Sequence Layers (Assistant d'image clé › Séquencer les calques), Overlap (Chevauchement) coché.
- Curseur au tempo : Opacity `Math.floor((time-inPoint)/(60/136))%2 ? 0 : 100`. Pour lire les sorties, coupe vers Scale (Échelle) 160 % sur la précomposition du terminal, sur le temps.
