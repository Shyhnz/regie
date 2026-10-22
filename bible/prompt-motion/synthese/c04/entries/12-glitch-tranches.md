## Le glitch en tranches et RVB, un cliché (slice glitch, RGB split, block glitch)

L'image se découpe en tranches horizontales décalées pendant 2 à 12 im autour de la coupe. S'y ajoutent canaux rouge et cyan écartés, blocs ou image fantôme. Il masque la coupe et donne un coup d'énergie. Mais il ne raconte rien, sauf une panne, un code corrompu ou une rupture dans le texte : 13 des 34 occurrences sont jugées clichés, 5 seulement à reprendre. Vue dans 31 vidéos, dont 29 notées 4 ou 5.

![Six images : le bouton bleu « Gamble responsibly » sur fond blanc, puis la boîte « DOUBLE IT » qui arrive en tranches décalées et canaux RVB écartés, et se recale nette](ILLUS:glitch-tranches-1)

*[Chain.wtf pitch video](https://prompt-motion.com/spearwtf-3c1fd1), 0:02.30 à 0:02.53 : la coupe glitch tombe sur le premier temps ; le ton passe de « responsable » à « double la mise ».*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Coupe glitch sur le premier temps | [Chain.wtf pitch video](https://prompt-motion.com/spearwtf-3c1fd1), 0:02.37 | 4 im à 30 fps, tranches décalées de 5 à 15 % L, RVB fort ; sur la grille, attaque à +1,4 im, musique +8 dB |
| Tranches RVB par paliers | [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61), 0:10.08 | 5 tranches à ±5 % L, recalées en 11 im, une position toutes les 2 im (30 i/s) ; demi-temps +0,3 im (étude 60 fps) |
| Glitch sur un silence avant l'impact | [Personal skills showreel](https://prompt-motion.com/ibrahimwasim240-809370), 0:02.55 | 12 im de tranches puis de pixels ; son à −50 dB pendant 5 im ; plan B sur le premier temps, avec l'impact le plus fort |
| Corruption des glyphes | [UK dubstep track with ASCII visuals](https://prompt-motion.com/rames-jusso-589f80), 0:18.50 | rampe de 4 s : quelques symboles, 20 % du code à 0:21, 40 % à 0:22.4 ; coupe vers l'ASCII au demi-temps |
| Image fantôme entre deux rendus | [AgentHud project motion video](https://prompt-motion.com/jazzen-chen-4542ae), 0:08.45 | 2 à 3 im où ancien et nouveau rendu se superposent, léger décalage vertical ; net pile sur la grille |
| Mot qui casse le discours | [Talking-head clip edit](https://prompt-motion.com/sab8a-364a5a), 0:05.34 | 2 im à 24 fps, RVB ≈ 1,5 % L et tranches, puis coupe franche sur le mot « BUT » |
| Panne racontée en blocs | [LiteLLM promo reel](https://prompt-motion.com/misbahsy-80eaec), 0:09.50 | blocs verticaux noirs remplacent le plan clair en 18 im sous « Providers fail. » ; départ 7 im après le temps |
| Glitch-flash à chaque coupe (contre-exemple) | [Mathematics motion showreel](https://prompt-motion.com/math-files-39c9d0), 0:01.95 | bandes de 50 à 100 px 2-3 im, flash gris (luminance 9 → 42-51) éteint en 15-16 im ; identique aux 8 coupes |

![Six images : un éditeur de code vert dont des caractères isolés deviennent des symboles, de plus en plus nombreux, puis coupe sur le logo DUB dessiné en caractères ASCII](ILLUS:glitch-tranches-2)

*[UK dubstep track with ASCII visuals](https://prompt-motion.com/rames-jusso-589f80), 0:18.00 à 0:23.00 : le code se corrompt en symboles sur 4 s, et l'image suivante est faite de caractères.*

**Règles de construction**

1. Le sens d'abord : une panne, un code corrompu, un « mais », un changement de rendu numérique. Sans cela, c'est un tic. Exemple : le glitch de [Indian civilisation history film](https://prompt-motion.com/buildfastwithai-53234e), seul élément numérique d'un langage imprimé.
2. Court : 2 à 4 im à 30 fps, 3 à 12 im à 60 fps. À 20 im et plus ([Chaotic Claude POV video](https://prompt-motion.com/kloss-xyz-15182a), [Claude motion reel](https://prompt-motion.com/jasonzhou1993-8595e0)), l'œil ne voit que du bruit.
3. Amplitude : 3 à 5 tranches de 2 à 8 % H, décalées de 2 à 15 % L ; canaux RVB écartés de 1 à 2 % L. Positions par paliers d'une image sur deux plutôt qu'interpolées.
4. Une ou deux fois par vidéo, au maximum. À l'identique sur 8 à 10 coupes ([Fitters Bible app promo](https://prompt-motion.com/adamdesgns-478d6d) : 9 fois), il devient la signature d'une vidéo IA.
5. Sur le temps, avec le son : glitch sur la grille et l'attaque, ou 5 im de silence puis l'impact. Contre-exemples : flashs internes aléatoires hors grille (kloss-xyz), départ sur une double-croche ([What day is it](https://prompt-motion.com/tankazunori0914-0fc886)).
6. Pas de stroboscope : [Motion design showreel](https://prompt-motion.com/safarkhanshuvo-ffd52d) change d'état à chaque image pendant 12 im. Règle d'accessibilité courante : pas plus de 3 flashs par seconde.

**Verdict** : cliché. À la place : une coupe sèche sur le temps, un trait qui raye le mot réfuté, un volet en trame ou en tuiles, un objet relais. Garde-le pour une seule panne racontée ; et dans un univers de code, corromps le contenu lui-même (glyphes) plutôt que l'image.

**Quand l'utiliser** : en promo d'outil développeur, d'IA ou de crypto, et en montage énergique (hype edit), seulement là où le script dit « ça casse ». Fonction : rupture (« mais »), panne, bascule d'un rendu à un autre. Il se décide au découpage, phrase par phrase, et se traque au contrôle qualité. À éviter en typo cinétique 1600, en showreel éditorial et pour une marque premium, entre deux plans propres sans rapport.

**HyperFrames (GSAP)**

```js
// Le plan B arrive en 5 tranches décalées + RVB, recalé en 8 im (60 fps), sur le temps de la panne
const FPS = 60, f = n => n / FPS;
const BEAT = 60 / 128;                       // 128 BPM : 1 temps = 28,125 im
const at = b => b * BEAT;
const T = at(16);                            // le temps où le texte dit « ça casse »
const OFF = [-5, 3, -2, 5, -4];              // décalages fixes en % de la largeur (pas d'aléatoire)
const STEPS = [1, -0.6, 0.3, 0];             // 4 paliers d'une image sur deux, puis recalé
const slices = gsap.utils.toArray(".slice"); // 5 copies du plan B empilées
slices.forEach((s, i) => { s.style.clipPath = `inset(${i * 20}% 0 ${80 - i * 20}% 0)`; });
tl.set([".slice", "#sceneB"], { autoAlpha: 0 }, 0);
// 1. Coupe sur le temps : A disparaît, B arrive en tranches, rouge et cyan écartés de 1,5 % L
tl.set("#sceneA", { autoAlpha: 0 }, T)
  .set(".slice", { autoAlpha: 1 }, T)
  .set(".slice .title", { textShadow: "-1.5vw 0 #ff2a55, 1.5vw 0 #22e0ff" }, T);
// 2. Paliers : les tranches sautent sans interpolation, comme une image mal décodée
STEPS.forEach((k, n) => {
  slices.forEach((s, i) => tl.set(s, { xPercent: OFF[i] * k }, T + f(2 * n)));
});
tl.set(".slice .title", { textShadow: "none" }, T + f(4));   // RVB coupé à mi-course
// 3. Image propre : le plan B entier reprend la main
tl.set(".slice", { autoAlpha: 0 }, T + f(8))
  .set("#sceneB", { autoAlpha: 1 }, T + f(8));
```

**After Effects**

- Dupliquer le plan B 5 fois : Edit › Duplicate (Édition › Dupliquer) ; sur chaque copie, un Mask (masque) rectangulaire couvre 1/5 de la hauteur.
- Position X de chaque copie : 4 Hold Keyframes (images clés maintenues), clic droit › Toggle Hold Keyframe (Activer/Désactiver l'image clé maintenue), une toutes les 2 im. Décalages de ±2 à ±5 % L, tous à zéro à +8 im.
- RVB : sur une copie du titre, Effect › Channel › Shift Channels (Effet › Canal › Décaler les couches) pour ne garder que le rouge. La décaler de 1,5 % L, en Mode Screen (Écran) ; la couper à +4 im.
- Pour l'aspect « numérique », Effect › Time › Posterize Time (Effet › Temps › Postérisation temporelle) à 30 i/s sur la Pre-comp (précomposition) du glitch.
- Caler l'image du glitch sur une attaque de la piste, ou couper le son 5 im avant l'impact. Une seule occurrence dans la vidéo.
