## Le casting typographique : deux ou trois voix à rôles fixes (type system, font pairing, grotesque + italic serif + mono)

Le film donne un rôle stable à chaque famille de caractères : une grotesque grasse affirme, une serif italique porte le mot pivot ou le murmure, une mono étiquette la machine et les données. L'œil lit la hiérarchie sans effort, et chaque voix garde aussi son geste d'entrée. Dans les fiches mesurées, l'écart d'échelle entre le cri et le murmure va de 4:1 à 16:1. Vue dans 81 vidéos, dont 70 notées 4 ou 5.

![Six images sur fond cobalt : EVERY en capitales condensées géantes rétrécit en sur-titre, « frame » en serif italique descend, « filmed » en grotesque légère est tapé puis barré, « written. » en grotesque noire tombe en morceaux](ILLUS:voix-1)

*[Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:02.08 à 0:03.57 : quatre familles, quatre rôles et quatre gestes dans une seule phrase, de 3 % à 69 % de la hauteur.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Trio grotesque étendue + serif italique + mono | [Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be), 0:02.15 | CLAUDE de 7 à 93 % L, capitale ≈ 20 % H ; « motion designer » en italique ≈ 7 % H ; labels mono sur un filet en tête |
| Un geste par voix | [Blue editorial motion showreel](https://prompt-motion.com/fionntobin-97b7af), 0:01.98 | Étude 60 fps : condensée en 7 im power3.out, 1 im par lettre ; italique en 5 im power2.out ; légère tapée à 4 im par lettre ; Black en 4 im expo.out |
| Une seule famille variable | [Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e), 0:11.48 | Étude 60 fps : largeur de MOTION 77,5 → 35 → 100 % L, deux fois 13 im, sur un demi-temps puis un temps ; mono pour le reste |
| Deux grotesques Black | [Kinetic type showreel](https://prompt-motion.com/zheke-38deff), 0:00 | Étendue pour la phrase, condensée pour les verbes ; capitales, interlettrage 0 à −2 %, mots à 90-95 % de la largeur |
| Cri et murmure | [EyezOn 100 users thank-you](https://prompt-motion.com/sudiyasa-f48ac9), 0:00.97 | « 100 » en condensée grasse ≈ 48 % H contre « one hundred » en italique 12 % H et une phrase à 3 % H |
| Une police par sujet | [Claude self-promo spot](https://prompt-motion.com/slvdev-64c45a), 0:00 | Grotesque grasse pour les actions, serif italique pour le littéraire, mono pour le code et les données : la police porte le sens |
| Système éditorial tout en serif | [Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), 0:00 | Garalde : en-têtes en petites capitales 1,5 % H à +15 % ; légende « FIG. N » vermillon + italique 4 % H ; phrase finale romaine 9 % H |
| La marque parle, l'appli montre | [Ren app launch video](https://prompt-motion.com/macrohou-33959d), 0:00 | Récit en néo-grotesque demi-grasse 5 à 9 % H, phrases de 3 à 6 mots ; l'interface est en serif de texte |

![Quatre images sur fond rouge : CLAUDE en grotesque très étendue noire change de chasse lettre par lettre, puis « motion designer » apparaît dessous en serif italique crème](ILLUS:voix-2)

*[Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be), 0:02.33 à 0:03.28 : masse noire étendue contre italique fine ; la chasse ondule (vague de 7 im par lettre) sans changer de voix.*

**Règles de construction**

1. Trois voix au plus, une règle d'attribution écrite : affirmation, nuance, machine. « Deux voix, aucune troisième police » chez kyonax-on-tech ; à cinq familles et plus, la lisibilité se défait (souravbhar871, sudo-kiran-b055de, jugés « à adapter »). Le bloc charte du guide ne prévoit que deux polices, titres et texte courant (guide Otom, p. 5).
2. Le contraste porte le sens. Rapport d'échelle de 4:1 (apoorvjain25) à 6:1 (gdgtify) entre le mot porteur et le murmure. En chute sur deux lignes, l'italique peut garder le même corps que la grotesque (cansincengiz-me, ≈ 5 % H).
3. Chaque voix garde son geste : montée sous masque pour la grotesque, descente ou fondu court pour l'italique, frappe pour la mono. Mesures de fionntobin ci-dessus ; italique montée sous masque à 4 im d'écart chez tequilafunks.
4. Tailles : les petits textes de cette famille mesurent souvent 0,8 à 2,4 % H ; 8 fiches les jugent trop petits ou illisibles sur téléphone. Le guide fixe 4 % H pour un texte secondaire et 8 % pour un titre (guide Otom, p. 14). Une mono qui porte une information doit faire au moins 2,5 % H.
5. Changer de voix seulement quand le rôle change : de la démonstration à la signature (umangratani), de la marque à l'interface (macrohou), d'une étape du produit à l'autre (itisrazak).
6. Polices auto-hébergées, timeline construite après `document.fonts.ready`. Une italique doit être une vraie fonte : Manrope n'a pas d'italique, l'oblique synthétique se voit.

**Verdict** : à reprendre. C'est le socle typographique des vidéos notées 5. Le trio grotesque + italique serif + mono est devenu le défaut des showreels Claude (« duo efficace mais très répandu ») : garde les rôles, mais choisis au moins une famille propre à la marque.

**Quand l'utiliser** : dans tous les styles, et on la décide une fois, à l'étape du système de design, avant tout plan. En typo cinétique 1600, trio cri / murmure / mono ; en promo SaaS, une voix pour la marque, une pour l'interface, la mono pour les chiffres ; en explainer, une police par locuteur (henkvaness, kloss-xyz). À éviter : une police par mot, sauf si la diversité est le message.

**HyperFrames (GSAP)**

```js
// Casting à trois voix : chaque famille a un rôle ET un geste (mesures de Blue editorial, étude 60 fps)
// CSS : .cri {font-family:"Archivo"; font-weight:900; font-stretch:125%}
//       .pivot {font-family:"Instrument Serif"; font-style:italic}  (vraie italique, auto-hébergée)
//       .machine {font-family:"JetBrains Mono"; letter-spacing:.2em; font-size:2.6vh} (≥ 2,5 % H)
// Chaque mot dans un .mask {overflow:hidden} ; lettres du cri déjà découpées en <span class="ch">
// Polices auto-hébergées (@font-face local) : jamais de police de repli au rendu
const FPS = 60, BEAT = 60 / 128, at = b => b * BEAT, f = n => n / FPS;
const GESTE = {
  cri: (el, t) => {                               // montée sous masque, 7 im, 1 im d'écart par lettre
    const ch = el.querySelectorAll(".ch");
    tl.set(ch, { yPercent: 100 }, 0)
      .to(ch, { yPercent: 0, duration: f(7), ease: "power3.out", stagger: f(1) }, t);
  },
  pivot: (el, t) => {                             // descend d'un masque en 5 im
    tl.set(el, { yPercent: -100 }, 0)
      .to(el, { yPercent: 0, duration: f(5), ease: "power2.out" }, t);
  },
  machine: (el, t) => {                           // frappe : mono = chasse fixe, donc 1 cran = 1 lettre
    const n = el.textContent.length;
    tl.set(el, { clipPath: "inset(0 100% 0 0)" }, 0)
      .to(el, { clipPath: "inset(0 0% 0 0)", duration: f(4 * n), ease: `steps(${n})` }, t);
  },
};
const dire = (sel, voix, b) => GESTE[voix](document.querySelector(sel), at(b));
dire("#every", "cri", 4.25);                      // double-croche 4,25
dire("#frame", "pivot", 5.75);                    // double-croche 5,75
dire("#credit", "machine", 6);                    // sur le temps 6
```

**After Effects**

- Un calque de texte modèle par voix (police, graisse, interlettrage, taille en % de la hauteur), dupliqué pour chaque réplique : cri 20 à 28 % H (216 à 300 px en 1080), pivot 7 à 12 % H, mono 2,5 % H au moins (27 px). Italique réelle seulement : jamais le bouton Faux Italic (Faux italique) du Character panel (panneau Caractère).
- Cri : Animate › Position (Animer › Position) sur le calque de texte, Y = hauteur du corps, Range Selector (sélecteur de plage) par caractère ; Offset (Décalage) animé pour 1 im d'écart, 7 im par lettre ; Easy Ease (lissage de vitesse), Influence (influence) ≈ 80 % à l'arrivée (≈ power3.out). Un rectangle en Alpha Matte (Cache alpha) sert de masque de ligne.
- Pivot : Position Y en 2 images clés sur 5 im, depuis le haut du masque, Influence ≈ 60 % à l'arrivée (≈ power2.out).
- Machine : Animation › Browse Presets › Text (Animation › Parcourir les paramètres prédéfinis › Texte), préréglage Typewriter (Machine à écrire), réglé à 4 im par lettre ; départ sur le marqueur du temps.
