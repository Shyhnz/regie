## Le changement d'état : bouton, toggle, toast, tampon (UI state change, button morph, toggle, toast, stamp slam, strike-through verdict)

Un composant d'interface change d'état pour dire « c'est fait » : bouton devenu coche, onglet, île, toast, tampon, prix biffé. C'est la preuve d'une action, jouée en 3 à 20 images au lieu d'être écrite. Calé sur un temps fort, il ponctue le plan comme une chute. Vue dans 56 vidéos, dont 39 notées 4 ou 5.

![Six images : la pilule noire « Generate » est pressée, son libellé se floute, elle se contracte en cercle, un arc de chargement tourne, puis une coche blanche se trace](ILLUS:changement-d-etat-1)

*[Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86), 0:00.47 à 0:01.17 : pression, libellé flouté, pilule contractée en cercle, spinner, coche finie sur le temps 2.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Bouton → loader → coche | [Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86), 0:00.52 | étude 60 fps : largeur 44,6 → 15,4 % du cadre en 15 im (ressort ≈ power1.out), coche en 5 im finie sur le temps |
| Soulignement d'onglet qui glisse | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:05.50 | étude 60 fps : 13 im en power3.out, 31 % du trajet dès la 1re image ; onglet suivant 30 im (1 temps) plus tard |
| Toggle liquide à deux bords | [Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86), 0:05.50 | bord avant ressort ω 21, bord arrière ω 13,5 : bouton étiré ×1,26 en course ; une bascule par demi-temps (15 im) |
| Île qui se déplie puis se replie | [AgentHud project motion video](https://prompt-motion.com/jazzen-chen-4542ae), 0:11.25 | pilule de 8 à 45 % de la largeur en ≈ 10 im, contenu ≈ 5 im après ; repli en ease-out expo posé sur l'attaque |
| Statuts qui basculent en cascade | [Quetzal social app reel](https://prompt-motion.com/miskinho-443898), 0:07.83 | 6 pastilles « Scheduled » → « ✓ Live », une toutes les 7,0 im, soit la double-croche à 125 BPM (±1,4 im) |
| Tampon écrasé, carte secouée | [Flexprice motion showreel](https://prompt-motion.com/sudeepsd-1a3485), 0:12.43 | « PAID » incliné −10°, ×2,2 → ×1 en 2 im (30 fps), ≈ 20 gouttes d'encre ; la carte tremble ±6 px pendant 8 im |
| Ancien prix biffé, nouveau validé | [Second brain service promo](https://prompt-motion.com/theviableedge-9065be), 0:06.87 | étude 60 fps : deux puces volent en power2.inOut 30 im ; biffure en 6 im, puis soulignement vert « ACTIVE » en 4 im |
| Toast de confirmation | [Studio website showreel](https://prompt-motion.com/andginja-333d32), 0:08.50 | après le clic, « Brief sent. » en fondu et léger glissement, ≈ 5 im (30 fps), posé sur le temps 9,07 s |

![Six images : le curseur clique « Approve script », le bouton passe au vert « Approved », une onde s'ouvre, puis le tampon vert « EVERY WORD ✓ » arrive très grand et s'écrase sur la carte](ILLUS:changement-d-etat-2)

*[DistilBook product explainer](https://prompt-motion.com/sudo-kiran-6609ed), 0:08.77 à 0:09.57 : clic, bouton vert, onde, puis tampon arrivé à 30 % de la largeur, écrasé en 6 im.*

**Règles de construction**

1. Caler le pic de vitesse, pas le départ. Le composant part 3 à 5 im avant le temps et y atteint sa vitesse maximale : 14 morphs mesurés à ±1 im (twoclipping-5cba86). Le soulignement de steventey part 4 im avant la grosse caisse : 80 % du trajet est fait sur le temps.
2. Durées : 11 à 20 im à 60 fps (0,18 à 0,33 s) pour un changement de forme, moins d'un temps. Confirmation (coche, « Copied », toast) en 0,05 à 0,17 s (listudio, antonio-kodheli, andginja). Tampon en 0,07 à 0,1 s (aschapmann, ceowinkz, sudeepsd, sudo-kiran-6609ed).
3. Ressort selon le sens (étude 60 fps de twoclipping-5cba86). Pour rétrécir : amortissement ζ 0,8 à 0,9, dépassement ≤ 2 %. Pour agrandir : 0,6 à 0,75, dépassement 3 à 8 %. Le contenant bouge d'abord, le contenu suit 4 à 5 im après (jazzen-chen, twoclipping). À la sortie, le libellé se floute avant que la forme bouge.
4. Plusieurs composants : un par double-croche. Statuts toutes les 7 im à 125 BPM (miskinho) ; cartes retournées en vague à 3-5 im d'écart, finie sur le temps (thilina-a-891c09). Une liste qui bascule d'un bloc perd l'effet de roulement.
5. La couleur dit le verdict : vert pour validé, gris et croix rouge pour le perdant (samuel-yostt : bord vert de 3 px et « Winner »). Changer la couleur pendant le mouvement : fond blanc → noir en 12 im sine.inOut pendant le repli en toast (twoclipping). Marquer la validation par une pulsation de +8 % en 14 im.
6. Un état faux se voit : lecteur qui affiche ▶ pendant la lecture (demonugc-4c5753), puces à 1 % de la hauteur (manuelogomigo).

Le guide Otom interdit d'animer la largeur (guide Otom, p. 14) ; un morph de bouton l'exige : poser le composant en position absolue. Tampon : voir « Le claquement d'échelle : slam, tampon, pop ». Biffure : « Le trait sur le mot : souligner, surligner, raturer, écrire ».

**Verdict** : à reprendre. C'est la ponctuation qui manque à une démo : couplé au compteur qui roule (steventey : onglet et chiffre partent ensemble), il prouve au lieu d'affirmer. Un seul tampon par film, sinon il devient l'accent répété partout que tu rejettes.

**Quand l'utiliser** : en promo SaaS / interface pour la démonstration et la preuve (bouton validé, statut « Live », toast). En typo cinétique 1600 et en explainer pour la chute (tampon, prix biffé). En showreel, le morph bouton → cercle → île sert de transition. On fixe la courbe par sens et la couleur de validation au système de design, l'instant au découpage. À éviter si l'état n'est pas le message, ou si le texte du composant tombe sous 1,5 % de la hauteur.

**HyperFrames (GSAP)**

```js
// Bouton → loader → coche → toast, 120 BPM, 60 fps, cadre carré 1080 (mesures twoclipping-5cba86)
const FPS = 60, BEAT = 60 / 120;                 // 1 temps = 30 im
const at = b => b * BEAT, F = n => n / FPS;
const T1 = at(1), T2 = at(2), T3 = at(3);
// #cta en position absolue ; .arc et .tick : <path pathLength="1" stroke-dasharray="1">
tl.set("#cta .arc, #cta .tick", { strokeDashoffset: 1 }, 0)
  .set("#toast", { autoAlpha: 0, y: 24 }, 0)
  // pression : −1 % pendant 1 im, 5 im avant le temps
  .to("#cta", { scale: 0.99, duration: F(1), ease: "none" }, T1 - F(5))
  .to("#cta", { scale: 1, duration: F(2), ease: "power1.out" }, T1 - F(4))
  // le libellé se floute et sort en 6 im
  .to("#cta .label", { filter: "blur(8px)", autoAlpha: 0, duration: F(6), ease: "power1.in" }, T1 - F(4))
  // pilule 482 px → cercle 166 px en 15 im : pic de vitesse près du temps 1
  .to("#cta", { width: 166, borderRadius: 83, duration: F(15), ease: "power1.out" }, T1 - F(4))
  // spinner : un quart d'arc qui tourne jusqu'à la coche
  .to("#cta .arc", { strokeDashoffset: 0.75, duration: F(4), ease: "none" }, T1 + F(6))
  .to("#cta .spin", { rotation: 540, svgOrigin: "83 83", duration: T2 - T1 - F(11), ease: "none" }, T1 + F(6))
  .set("#cta .arc", { autoAlpha: 0 }, T2 - F(5))
  // coche tracée en 5 im, finie sur le temps 2
  .to("#cta .tick", { strokeDashoffset: 0, duration: F(5), ease: "power2.out" }, T2 - F(5))
  // pulsation de validation : +8 % aller-retour en 14 im
  .to("#cta", { scale: 1.08, duration: F(7), ease: "sine.inOut", yoyo: true, repeat: 1 }, T2)
  // toast : fondu et montée de 24 px en 5 im, posé sur le temps 3
  .to("#toast", { autoAlpha: 1, y: 0, duration: F(5), ease: "power2.out" }, T3 - F(5));
```

**After Effects**

- Un Composition Marker (repère de composition) par temps (30 im à 120 BPM, 60 fps). Bouton : Shape Layer (calque de forme), Add › Rectangle (Ajouter › Rectangle), Roundness (Arrondi) à la demi-hauteur. Rectangle Path › Size (Taille) 482 × 166 → 166 × 166 en 15 im, départ 4 im avant le repère. Dans le Graph Editor (éditeur de graphique), Speed Graph (graphique de vitesse), influence sortante 70 % pour l'ease-out. Ressort : expression de « Le système de courbes : expo-out pour entrer, ease-in pour sortir ».
- Libellé : Effect › Blur & Sharpen › Gaussian Blur (Effet › Flou et netteté › Flou gaussien), Blurriness 0 → 20 et Opacity (Opacité) 100 → 0 % en 6 im.
- Spinner et coche en Stroke (Contour) seul, avec Add › Trim Paths (Réduire les tracés). Spinner : End 25 % et expression `time * 720` sur Offset. Coche tracée à la Pen Tool (outil Plume) : End 0 → 100 % en 5 im, dernière clé sur le repère du temps 2.
- Toast : Position Y +24 px → 0 et Opacity 0 → 100 % en 5 im, clé d'arrivée sur le repère. Animation › Keyframe Assistant › Easy Ease In (Assistant d'image clé › Lissage de vitesse en entrée) sur cette clé.
