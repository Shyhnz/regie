## L'accroche de la première seconde (hook, cold open, question / number / problem opener)

La première seconde pose une tension à résoudre : un chiffre extrême, une question au client, un problème daté, un paradoxe, une promesse de liste ou une scène qui montre l'idée. Une question ouverte retient jusqu'à sa réponse ; un pré-titre « Introducing » ou un écran noir retarde l'idée et perd le fil d'actualité. Les meilleures posent leur tension avant 1 s : le chiffre de Photon journey est complet à 0,7 s. Vue dans 28 vidéos, dont 19 notées 4 ou 5.

![« Your buyers now ask ChatGPT. » s'écrit mot par mot, puis « Be the answer. » souligné de vert](ILLUS:accroche-1)

*[Datagran ChatGPT ads explainer](https://prompt-motion.com/charlesmendez-73b6e4), 0:00.00 à 0:03.97 : le constat s'écrit un groupe de mots par temps, puis la promesse tombe sur le drop et se souligne.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Constat → promesse sur le drop | [Datagran ChatGPT ads explainer](https://prompt-motion.com/charlesmendez-73b6e4), 0:00.00 | « now ask » sur le temps 1, « ChatGPT. » sur le temps 2, « Be » sur le drop (2,0 s), « answer. » au temps suivant ; 8 mots en 4 s |
| Chiffre extrême | [Photon journey from the Sun](https://prompt-motion.com/apoorvjain25-d24184), 0:00.47 | « 15,000,000 °C » tapé à 1 caractère par image (8 im), ≈ 7 % H, sous un surtitre mono 1,5 % H ; effacé en 2 im avant le flash |
| Problème daté puis négation | [Lightspark social promo video](https://prompt-motion.com/davidmarcus-a28a60), 0:00.00 | « Money still moves like it's 1973. » / « Not anymore. » : 8 mots en 3 s, avant toute preuve |
| Question au client | [Tented image gen product video](https://prompt-motion.com/justincooperman-e7bbc4), 0:00.00 | « Need an on-brand image for your next email? » ≈ 5 % H, « on-brand » en vert sauge, fondu 10 im, tenue ≈ 1 s |
| Chiasme et détail d'humour | [DistilBook product explainer](https://prompt-motion.com/sudo-kiran-6609ed), 0:00.00 | « Nobody reads the PDF. / But everyone watches the video. » sur deux décors opposés ; « opened 0 times » lisible au second regard |
| La preuve avant la phrase | [Whiteboard skill tutorial](https://prompt-motion.com/lemomo-ai-0d9cff), 0:00.00 | 4 films de styles opposés coupés toutes les 12 im (0,5 s) ; « Thirty-nine film styles. » entre dès f6 |
| L'idée montrée par une scène | [Reflex brand motion reel](https://prompt-motion.com/reflex-cloud-72ffe5), 0:00.25 | flash sur l'impact f15 ; pupille 58 → 20 % de l'iris en 8 im, ressort à 25 % ; « latency 234 ms » = un demi-temps à 128 BPM |
| Enjeu binaire permanent | [Ball escaping twelve rings](https://prompt-motion.com/kantamk-61f410), 0:00.00 | « Can it escape all 12 rings? » à l'écran dès l'image 0 ; réponse « ESCAPED. » à 84 % de la durée |

![Gros plan d'un œil : un flash, la pupille se contracte d'un coup, les crochets passent au violet et l'étiquette devient « response »](ILLUS:accroche-2)

*[Reflex brand motion reel](https://prompt-motion.com/reflex-cloud-72ffe5), 0:00.17 à 0:00.50 : le stimulus tombe sur le premier impact, la pupille réagit en 8 im ; le nom « reflex » est montré, pas écrit.*

**Règles de construction**

1. Tension lisible avant 1 s, dès l'image 0 si possible. Contre-exemples : 0,3 s de noir puis « Introducing » gris immobile 33 im (Matra caption app promo), 1,07 s de noir (UK dubstep track), prompt tapé pendant 4 s (Animated business explainer).
2. 5 à 8 mots, en deux temps : constat puis retournement, ou question puis réponse 0,6 s plus tard (Brieform). Phrase complète tenue 1,1 à 1,2 s (Brieform, Gene Spectra), soit environ une seconde pour quatre mots (guide Otom, p. 6).
3. Gros : 5 à 16 % H pour les mots de l'accroche (Tented 5 %, Photon 7 %, Brieform 9 %, Bento.surf 16 %). Un micro-texte à 1,5 % H sur un écran presque vide pendant 1,6 s fait une accroche faible (Nohandslabs brand promo).
4. Une seule couleur d'accent, sur le mot de la tension : « ChatGPT. » en vert, « prospectez ? » en orange. En explainer, la couleur peut monter du neutre à l'alarme sur 3 lignes (Derivative concept explainer).
5. Calage, sur les vidéos animées sur la musique : un groupe de mots par temps pendant le constat, puis la promesse sur le drop (Datagran). Le chiffre s'efface 2 im avant le flash (Photon) ; le stimulus est l'impact lui-même (Reflex, f15).
6. Payer la tension : la réponse arrive (84 % de la durée chez Ball escaping), le chiasme revient en fin (« Stop sending documents. / Start sending videos. »), la liste annoncée justifie la grille finale (Talking-head clip edit).

**Verdict** : à reprendre. Le couple constat → promesse sur le drop est la grammaire 1600 appliquée à l'ouverture ; le pré-titre « Introducing » et l'écran noir sont des clichés, remplace-les par la tension elle-même dès l'image 0.

**Quand l'utiliser** : partout, c'est le plan 1 de toute vidéo. En promo SaaS, la question au client ou le problème chiffré ; en typo cinétique 1600, le constat → promesse mot par temps ; en explainer, le chiffre extrême ou le paradoxe ; en marque, la scène qui montre le nom. On l'écrit au script (étape 2) et on la cale sur la grille au découpage (étape 5). Le guide conseille de tester deux accroches en ne faisant varier que le premier plan (guide Otom, p. 10). À éviter : une accroche qui promet ce que la vidéo ne paie pas.

**HyperFrames (GSAP)**

```js
// Accroche en deux temps : constat un groupe de mots par temps, promesse sur le drop (temps 4)
const FPS = 60;
const BEAT = 60 / 120;                       // 120 BPM : 1 temps = 30 im
const at = b => b * BEAT;
const fr = n => n / FPS;
const DROP = at(4);                          // premier coup fort de la musique (2,0 s)
// Ligne 1 : « Your buyers » temps 0, « now ask » temps 1, « ChatGPT. » (accent) temps 2
[["#w-your", 0], ["#w-buyers", 0], ["#w-now", 1], ["#w-ask", 1], ["#w-chatgpt", 2]]
  .forEach(([sel, b]) => {
    tl.set(sel, { autoAlpha: 0, yPercent: 40, filter: "blur(8px)" }, 0)
      .to(sel, { autoAlpha: 1, yPercent: 0, filter: "blur(0px)",
                 duration: fr(8), ease: "power3.out" }, at(b));
  });
// Sortie verticale floue juste avant le drop (durée estimée)
tl.to("#line1", { yPercent: -60, autoAlpha: 0, filter: "blur(10px)",
                  duration: fr(6), ease: "power2.in" }, DROP - fr(8));
// Ligne 2 : « Be » sur le drop, « the » au demi-temps, « answer. » au temps suivant
[["#w-be", 0], ["#w-the", 0.5], ["#w-answer", 1]].forEach(([sel, b]) => {
  tl.set(sel, { autoAlpha: 0, scale: 1.15 }, 0)
    .to(sel, { autoAlpha: 1, scale: 1, duration: fr(6), ease: "expo.out" }, DROP + at(b));
});
// Soulignement vert tracé de gauche à droite sous la promesse
tl.set("#underline", { scaleX: 0, transformOrigin: "0% 50%" }, 0)
  .to("#underline", { scaleX: 1, duration: fr(14), ease: "power2.out" }, DROP + at(1) + fr(4));
// Promesse tenue jusqu'au temps 8 (4,0 s), coupe vers le chapitre 1 sur le temps
tl.set("#hook", { autoAlpha: 0 }, at(8))
  .set("#chapter1", { autoAlpha: 1 }, at(8));
```

**After Effects**

- Un calque de texte par groupe de mots ; un marqueur de composition par temps (touche * du pavé numérique) ; le drop se repère sur la forme d'onde (touches LL sur le calque audio). Chaque calque démarre sur son marqueur.
- Entrée de chaque groupe en 8 im : Opacity (Opacité) 0 → 100 %, Position Y +40 % de la hauteur de ligne, Effect › Blur & Sharpen › Gaussian Blur (Effet › Flou et netteté › Flou gaussien) 8 → 0. Influence d'entrée 80 % dans le Graph Editor (éditeur de graphes).
- Promesse : « Be » sur le marqueur du drop, « answer. » un temps plus tard ; Scale (Échelle) 115 → 100 % en 6 im, influence d'entrée 90 %.
- Soulignement : calque de forme Rectangle avec Add › Trim Paths (Ajouter › Réduire les tracés), End de 0 à 100 % en 14 im, 4 im après « answer. ».
- Test de deux accroches : dupliquer la composition du plan 1 (Edit › Duplicate (Édition › Dupliquer)) et ne changer que ce plan.
