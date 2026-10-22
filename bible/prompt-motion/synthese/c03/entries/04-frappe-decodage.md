## Le texte qui s'écrit sur place : frappe, décodage, glitch (typewriter, caret, backspace retype, text scramble decode, slice glitch)

Les caractères apparaissent ou se fixent un par un à leur place, sans bouger : frappe au curseur, effacement puis retape, glyphes aléatoires qui se résolvent, ou mot recomposé par tranches. La frappe dit « interface, code, pensée en direct » et se cale sans effort sur les doubles-croches : 3 images par lettre à 60 fps font 20 caractères par seconde. Le décodage par glyphes aléatoires est le cliché de la famille : 32 occurrences dans 29 vidéos, 5 jugées clichés et 18 « à adapter ». Vue dans 90 vidéos, dont 82 notées 4 ou 5.

![Légende « a point » effacée lettre à lettre, « FIG. 2 » qui change, puis « a line » tapé derrière un curseur vermillon pendant que le point trace une ligne](ILLUS:frappe-decodage-1)

*[Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), 0:01.80 à 0:02.47 : « a point » s'efface à 1 image par lettre, « FIG. 2 » change pile sur le temps, puis « a line » se tape à 3 images par lettre derrière le curseur.*

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Légende effacée puis retapée | [Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c), 0:01.88 | effacement 1 im par lettre, numéro changé sur le temps (0 im), frappe 3 im par lettre 4 im après (étude 60 fps) |
| Frappe à vitesse variable | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:00.23 | 164 caractères en 50 im, power2.inOut : 1 car./im, pic 12 car./im, fin 1 car./5 im sur le temps (étude 60 fps) |
| Un groupe de mots par temps | [Nohandslabs brand promo](https://prompt-motion.com/robvjourney-ce3e1a), 0:02.02 | chaque ligne part sur un temps (f120, f150, f180), 1,4 im par lettre, curseur clignotant à 1 période par temps |
| Réécriture dans le sillage | [Drone Emprit showreel](https://prompt-motion.com/ismailfahmi-557268), 0:02.72 | effacement par la gauche à 1,2 car./im, nouvelle phrase 14 im derrière le front : la ligne n'est jamais vide |
| Décodage motivé (chiffrement) | [Trezio app motion reel](https://prompt-motion.com/agonaliu-466a8f), 0:10.50 | mot de passe remplacé par des glyphes pervenche, front de 4 caractères toutes les 8 im |
| Libellé décodé à chaque changement | [AgentHud project motion video](https://prompt-motion.com/jazzen-chen-4542ae), 0:07.50 | mono grasse ≈ 4,5 % H, figée de gauche à droite en 7-8 im, glyphes non résolus en vert |
| Mot assemblé par tranches | [Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e), 0:01.88 | 6 bandes depuis les deux bords, power3.out, 1-2 im d'écart du centre vers les bords, posé en 20 im (étude 60 fps) |
| Dépixelisation d'impact | [QuickDesign brand promo](https://prompt-motion.com/quickdesignio-dd93d0), 0:08.25 | « UPSCALE 4K » passe de gros blocs à net en 3 im : le mot montre ce qu'il nomme |

![Six bandes crème glissent depuis la gauche et la droite avec flou de mouvement et composent le mot LINE](ILLUS:frappe-decodage-2)

*[Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e), 0:01.85 à 0:02.28 : sur le kick, les bandes glissent depuis les deux bords et freinent en power3.out ; LINE est lisible à 0:02.08 et posé à 0:02.28.*

**Règles de construction**

1. Cadence : 1 caractère toutes les 1 à 3 im à 60 fps (20 à 60 car./s). À partir d'environ 40 car./s, une ligne longue devient une texture (Flexprice motion showreel : 42 car./s) ; la lecture se fait alors pendant le maintien qui suit.
2. L'effacement va 2 à 3 fois plus vite que la frappe (1 im contre 3 im par lettre) et finit 1 im avant le temps. Le nouveau texte part sur le temps ou 3-4 im après.
3. Le départ tombe sur un temps ; pour une phrase longue, la fin aussi (dernier caractère sur le temps f64 dans Dub promo video). Le curseur clignote au tempo : à 120 BPM, une période de 30 im ou de 60 im.
4. Frappe « humaine » : 1 car./im dans les mots, 2 à 5 im de pause aux espaces, 3 im au retour à la ligne (Full Stop figure sequence, étude 60 fps). Calculer le départ pour que la ligne finie soit centrée : elle ne se recentre jamais pendant la frappe.
5. Décodage : un libellé court, motivé (code, URL, chiffrement), une fois par vidéo, en 8 à 24 im. Hauteur d'au moins 4 % du cadre pour un texte secondaire (guide Otom, p. 14) ; à 1 % H, il est illisible (Claude motion design showreel, 0:00.93). Six emplois en 15 s dans Reflex brand motion reel : cliché.
6. Tranches et glitch : bandes en power2-3.out, 1 à 4 im d'écart, 14 à 24 im au total (Blue editorial motion showreel : 14 im). Le glitch d'impact dure 2 à 4 im et sert une fois ; à 1 im il est invisible, répété 3 fois en 1,5 s il lasse.

**Verdict** : à reprendre pour la frappe, la retape et les tranches ; le décodage aléatoire est à adapter (court, motivé, lisible, une seule fois). Une seule voix « machine » par vidéo : une police mono, une couleur de curseur.

**Quand l'utiliser** : promo SaaS et interface (prompt, URL, champ de saisie, terminal), explainer à légendes numérotées, typo cinétique 1600 quand une phrase de voix s'écrit au tempo. Elle sert l'accroche (le prompt tapé), la démonstration et la signature ; on la fixe au système de design (police mono, couleur du curseur) puis on la cale en construisant le plan. À éviter pour un titre héros de plus de 20 caractères dans un plan rythmé, sous 4 % de hauteur, et en décodage sur chaque sous-titre.

**HyperFrames (GSAP)**

```js
// Légende effacée puis retapée sur le temps, curseur au tempo, étiquette décodée (glyphes seedés)
const FPS = 60, BEAT = 60 / 120;                 // 120 BPM : 1 temps = 30 im
const at = b => b * BEAT, F = n => n / FPS;
// un <span> par caractère, en display:none ; conteneur en white-space:pre, #caret placé juste après
const split = (sel, txt) => { const el = document.querySelector(sel);
  el.innerHTML = [...txt].map(c => `<span style="display:none">${c}</span>`).join("");
  return [...el.children]; };
const oldCh = split("#cap-old", "a point"), newCh = split("#cap-new", "a line");
tl.set(oldCh, { display: "inline" }, 0);          // état de départ
// effacement de droite à gauche, 1 im par lettre, fini 1 im avant le temps 4
oldCh.forEach((s, i) => tl.set(s, { display: "none" }, at(4) - F(i + 1)));
tl.set("#fig", { textContent: "FIG. 2" }, at(4)); // le numéro change pile sur le temps
newCh.forEach((s, i) => tl.set(s, { display: "inline" }, at(4) + F(4 + 3 * i))); // 3 im par lettre
// curseur : allumé pendant la frappe, puis clignote un demi-temps sur deux
for (let b = 5; b < 8; b++)
  tl.set("#caret", { autoAlpha: 0 }, at(b)).set("#caret", { autoAlpha: 1 }, at(b + 0.5));
// étiquette décodée en 24 im : préfixe juste, reste en glyphes qui changent à chaque image
const label = document.querySelector("#label"), target = "POST /v1/chat/completions";
const GL = "#%&$@*+=<>/01", st = { p: 0 };
tl.set(label, { textContent: "" }, 0).to(st, { p: 1, duration: F(24), ease: "none",
  onUpdate() {
    const k = Math.floor(st.p * target.length), f = Math.round(tl.time() * FPS);
    label.textContent = target.slice(0, k) + [...target.slice(k)]
      .map((c, i) => c === " " ? " " : GL[(i * 7 + f * 13) % GL.length]).join("");
  } }, at(6));
```

**After Effects**

- Frappe exacte et seek-safe : sur le calque de texte, expression sur Source Text (Texte source) : `s = "a line"; n = Math.floor((time - inPoint) / (3 * thisComp.frameDuration)); s.substr(0, Math.max(0, n)) + (Math.floor(time / 0.25) % 2 ? "" : "|")` (3 im par lettre, curseur au demi-temps à 120 BPM).
- Effacement : même expression avec `s.length - n` et 1 im par lettre ; démarrer le calque pour que la dernière lettre disparaisse 1 im avant le marqueur du temps. Poser un Composition Marker (marqueur de composition) sur chaque temps.
- Décodage : Animation › Animate Text › Character Offset (Animation › Animer le texte › Décalage de caractère) (valeur 20), plus un Wiggly Selector (Sélecteur tremblement) ; animer le Start (Début) du Range Selector (Sélecteur de plage) de 0 à 100 % en 24 im, images clés linéaires.
- Tranches : dupliquer le mot 6 fois, un Mask (masque) rectangulaire par bande ; Position X depuis ±100 % de la largeur, Influence (influence) 85 % à l'arrivée dans le Speed Graph (éditeur de graphe de vitesse), décalage 1-2 im ; Motion Blur (Flou de mouvement) activé.
- Dépixelisation : Effect › Stylize › Mosaic (Effet › Styliser › Mosaïque), Horizontal Blocks (Blocs horizontaux) 12 → 48 → 200 sur 3 images en interpolation Hold (maintenue) (Toggle Hold Keyframe (Basculer l'image clé maintenue)).
