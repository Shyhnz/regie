## Le calage sur la voix off (voice-over sync, karaoke captions, picture leads the voice, dead-air jump cuts)

Quand une voix porte le récit, c'est elle l'horloge, pas la musique. Chaque phrase déclenche sa scène, chaque mot clé son mot ou son icône à l'écran. L'image part toujours un peu avant le son : 0,3 à 0,5 s avant la phrase pour un changement de scène, 2 à 4 im avant la syllabe pour un mot. L'œil se pose avant que l'oreille reçoive le mot, donc lecture et écoute coïncident. Vue dans 14 vidéos, dont 10 notées 4 ou 5.

![Phrase française en gris dont les mots passent un à un à l'encre noire pendant la narration ; le téléphone à droite met les mêmes mots en gras](ILLUS:calage-voix-1)

*[Sotto reading app explainer](https://prompt-motion.com/1stnoel-c20a89), 0:31.60 à 0:34.50 : karaoké sur la voix française ; chaque mot passe du gris à l'encre quand il est prononcé, la traduction anglaise arrive juste après le dernier mot.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Mot clé qui devance la voix | [Dubz Up motion showreel](https://prompt-motion.com/devius-maximus-beab45), 0:04.40 | YOUR visible f264, voix f268 (−4 im) ; BRAIN'S −2 im ; EVERY −4 im. Condensé de mots clés, pas une transcription |
| Une scène par phrase | [DistilBook product explainer](https://prompt-motion.com/sudo-kiran-6609ed), 0:04.00 | 9 scènes pour 9 phrases en 30 s ; chaque transition démarre 0,1 à 0,3 s avant la phrase suivante |
| Carton calé sur le mot clé | [Sotto reading app explainer](https://prompt-motion.com/1stnoel-c20a89), 0:47.50 | « Read and listen » à 47,5 s pour « Reading » à 47,6 s ; 16 changements sur 16 à 0-0,4 s avant le mot |
| Karaoké mot à mot | [Sotto reading app explainer](https://prompt-motion.com/1stnoel-c20a89), 0:31.70 | un mot toutes les 0,2 à 0,4 s, bascule gris → encre en 3 im au plus |
| Tracé qui précède la phrase | [Replica symmetry breaking whiteboard](https://prompt-motion.com/tak3sh8-be5012), 0:02.93 | 36 départs sur 36 : médiane 15 im (0,5 s) avant la voix ; la gomme part ≈ 1,2 s avant la phrase suivante |
| Icônes au débit de la parole | [Whiteboard skill tutorial](https://prompt-motion.com/lemomo-ai-0d9cff), 0:53.30 | micro, note, cadre, curseurs : une icône toutes les 1,2-1,3 s, dessinée en 6-8 im sur son mot |
| Mots posés sur les syllabes chantées | [Synced lyrics motion video](https://prompt-motion.com/samaote-5e2fc2), 0:04.37 | 5 mots sur 7 à ±2 im de la croche, juste avant la syllabe ; net sur la syllabe, flou 6-8 im avant (étude 60 fps) |
| Coupes sautées qui retirent les blancs | [Talking-head clip edit](https://prompt-motion.com/sab8a-364a5a), 0:00.75 | coupes franches dans le même cadre (f18, f235, f705) : le saut de pose devient le rythme |

![Feutre bleu qui dessine un micro, une note, un cadre puis des curseurs sous le sous-titre, au fil de la phrase prononcée](ILLUS:calage-voix-2)

*[Whiteboard skill tutorial](https://prompt-motion.com/lemomo-ai-0d9cff), 0:52.92 à 0:57.33 : sur « records the voice, writes the music, draws every frame and mixes », chaque icône se dessine au moment où son mot est dit.*

**Règles de construction**

1. Deux niveaux d'avance. Scène : 0,1 à 0,5 s avant la phrase (sudo-kiran 0,1-0,3 s ; yunn260414 médiane 0,33 s ; tak3sh8 0,5 s ; xelandre-363f00 : 6 sur 7 à moins de 0,4 s). Mot : 2 à 4 im (0,03-0,07 s) avant la syllabe.
2. Cale sur des horodatages mot à mot : repères de mots du TTS ou alignement forcé. Contre-exemple : [What is Git explainer](https://prompt-motion.com/yunn260414-60d996) lance ses sous-étapes à pas fixe et affiche les fichiers 0,9 à 1,9 s trop tôt, jusqu'à 5,5 s.
3. Écris un condensé, pas une transcription : 1 à 3 mots clés par phrase (devius-maximus). Pour une ligne de sous-titre, couper en deux au-delà de 8 mots (guide Otom, p. 14).
4. Karaoké : un mot toutes les 0,2 à 0,45 s, bascule en 3 im au plus. Trois états (dit, en cours en couleur d'accent, à venir en gris) ([Distilbook product video](https://prompt-motion.com/ajith-io-c52e09), 1stnoel).
5. N'anime pas puis attends. Contre-exemple : [Derivative concept explainer](https://prompt-motion.com/linearuncle-5d2bae) part bien sur la phrase (46 sur 99 à ±1 im) mais garde 65 % d'images figées, maintiens médians de 4,4 s. Pendant la phrase, un geste secondaire par mot clé.
6. Laisse passer la voix : musique baissée d'≈ 5 dB sous le slogan parlé ([Motion designer showreel](https://prompt-motion.com/kangaroohere-b10f8d)). Retire les blancs : yunn260414 laisse 1,03-1,08 s de silence machine entre chaque phrase, soit ≈ 30 % de silence total.

**Verdict** : à reprendre. C'est la moitié « voix » du style 1600 que tu vises : l'image annonce chaque mot, et les gestes secondaires remplissent la phrase pour qu'il n'y ait aucun temps mort.

**Quand l'utiliser** : dès qu'une voix off porte le message : explainer, tutoriel, promo SaaS narrée, typo cinétique 1600. Se décide à l'étape du script (voix écrite et générée avant l'image, avec ses horodatages), puis au découpage (une scène par phrase). Avec voix et musique, la voix commande les scènes et les mots, la musique les gestes secondaires. À éviter : un karaoké sous une typo cinétique qui affiche déjà les mots.

**HyperFrames (GSAP)**

```js
// Calage sur la voix : horodatages mot à mot exportés du TTS (ou d'un alignement forcé)
const FPS = 60, F = n => n / FPS;
const LEAD_SCENE = 0.3;   // la scène part 0,3 s avant sa phrase (mesuré : 0,1 à 0,5 s)
const LEAD_WORD = F(3);   // le mot clé s'affiche 3 im avant sa syllabe (mesuré : 2 à 4 im)
const words = [           // t : début du mot en s ; s : n° de phrase ; key : mot clé affiché
  { t: 0.42, w: "Your", s: 0, key: true }, { t: 0.61, w: "brain's", s: 0, key: true },
  { t: 0.98, w: "always", s: 0 }, { t: 2.35, w: "Every", s: 1, key: true },
];
tl.set(".scene, .kw", { autoAlpha: 0 }, 0);
// 1. une scène par phrase : la précédente sort en 9 im (power2.in), la suivante entre en 14 im
const starts = [...new Set(words.map(x => x.s))].map(s => words.find(x => x.s === s).t);
starts.forEach((t0, i) => {
  const at = Math.max(0, t0 - LEAD_SCENE);
  if (i > 0) tl.to(`#scene${i - 1}`, { autoAlpha: 0, scale: 1.04, duration: F(9), ease: "power2.in" }, at - F(9));
  tl.set(`#scene${i}`, { autoAlpha: 1 }, at)
    .from(`#scene${i} .hero`, { yPercent: 40, autoAlpha: 0, duration: F(14), ease: "power3.out", immediateRender: false }, at);
});
// 2. mots clés : chacun claque 3 im avant sa syllabe, puis se pose en 8 im
words.filter(x => x.key).forEach((x, i) => {
  tl.set(`#kw${i}`, { autoAlpha: 1, scale: 1.08 }, x.t - LEAD_WORD)
    .to(`#kw${i}`, { scale: 1, duration: F(8), ease: "power3.out" }, x.t - LEAD_WORD);
});
// 3. karaoké : chaque mot du sous-titre passe à l'encre en 3 im quand il est prononcé
words.forEach((x, i) => {
  tl.to(`#cap .w${i}`, { color: "#241E17", duration: F(3), ease: "none" }, x.t - F(2));
});
```

**After Effects**

- Voix sur un calque audio : touches LL pour afficher la Waveform (forme d'onde). Repérer chaque début de phrase et chaque mot clé par un marqueur : Layer › Markers › Add Marker (Calque › Marqueurs › Ajouter un marqueur).
- Pour trouver les attaques : Animation › Keyframe Assistant › Convert Audio to Keyframes (Assistant d'image clé › Convertir l'audio en images clés), puis lire les pics du calque Audio Amplitude (Amplitude audio) dans le Graph Editor (éditeur de graphiques).
- In Point (point d'entrée) de chaque scène 18 im (0,3 s) avant son marqueur de phrase ; mot clé 3 im avant sa syllabe, Scale (Échelle) 108 → 100 % en 8 im, influence entrante 85 %.
- Karaoké : calque texte, Animate › Fill Color › RGB (Animer › Couleur de fond › RVB), Range Selector (Sélecteur de plage) en Advanced › Units: Index (Avancé › Unités : Index). Une clé de End par mot, à l'image du mot, en Toggle Hold Keyframe (Image clé de maintien).
- Musique : Audio Levels (Niveaux audio) baissés de 5 dB sous la voix par deux images clés ; supprimer les blancs entre phrases en coupant le calque voix (Edit › Split Layer, Édition › Scinder le calque).
