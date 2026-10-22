## Étape 1 · Le brief : objectif, public, diffusion, durée, format

Le brief fixe, avant toute image, le but de la vidéo, son public, sa diffusion, sa durée, son format et ses matières réelles. Claude invente tout ce que le brief ne fixe pas, y compris le sujet. Sans durée écrite, la médiane des 90 vidéos concernées est de 38,6 s, alors que 14 des 17 vidéos notées 5 durent 12 à 17 s. On livre un fichier `BRIEF.md` d'une page, avec une ligne de spécification.

![Six images de la promo Dub : compteur de clics sur un globe orange, tableau de bord, logo, réseau de partenaires, « One platform. », carte finale « Turn clicks into revenue »](ILLUS:entrees-1)

*[Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:03.00 à 0:14.67 : une URL suffit. Produit, chiffres, orange de marque et logo viennent de dub.co, jusqu'à la carte finale « Start for free · dub.co ».*

**Ce que font les meilleures vidéos**

- Elles sont courtes. De 12 à 17 s : 93 vidéos, 4,08 de moyenne, 14 des 17 notées 5. De 32 à 60 s : 44 vidéos, 3,66, aucune notée 5. Au-delà de 60 s : 3,54.
- Leur durée est écrite, et elle est tenue : à ±10 % dans 128 cas sur 140 ; « 15 s » donne 15,06 s dans 51 cas.
- Une URL vaut un brief produit : [Dub promo video](https://prompt-motion.com/steventey-0d20e4) (5/5) tire de dub.co le produit, les chiffres, la charte orange et le logo (voir l'étude *Dub promo video — @steventey* au chapitre 14).
- Une contrainte d'usage pèse plus qu'un adjectif : « hero asset for the course landing page » donne à [Second brain service promo](https://prompt-motion.com/theviableedge-9065be) (5/5) une boucle parfaite, sans son, lisible muette (étude *Second brain service promo — @TheViableEdge* au chapitre 14).
- Une piste fournie donne tempo et carrure : [Synced lyrics motion video](https://prompt-motion.com/samaote-5e2fc2) (5/5) est en 6/8 à 158 BPM.

**Ce qui manque aux moins bonnes**

- Une durée sans plafond d'idées déborde. Pour 15 s demandées : 55,7 s livrées pour [Lism CSS 1.0 release video](https://prompt-motion.com/ddryo-loos-300829), 45 s pour [Lead Notifi product ad](https://prompt-motion.com/leadnotifi-e83f94) et [Email tool promo reel](https://prompt-motion.com/melvynx-6cde6c). Pour 80 s : 294,6 s ([Animated space cartoon episode](https://prompt-motion.com/ryzoft-4f85bd)).
- Le format laissé au hasard : sans consigne, 1280×720 dans 36 cas (18 %). L'interface devient illisible dans [Studio website showreel](https://prompt-motion.com/andginja-333d32) et [Recruiter self-intro reel](https://prompt-motion.com/blushpetal795-0c85c2).
- Pas d'entrées : Claude se prend pour sujet (28 vidéos, dont 7 notées 5). [3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155) (5/5) n'écrit presque aucun mot. Bien pour un showreel, pas pour une promo.
- Le brief perdu : au moins 8 vidéos montrent un contenu absent du prompt publié ([Personal skills showreel](https://prompt-motion.com/ibrahimwasim240-809370), [Travel visa service promo](https://prompt-motion.com/thismacapital-dfba20)…). Le vrai brief passait par la conversation.

**Décisions** (valeur par défaut)

- Objectif et public : une phrase chacun (« faire demander une démo à un DAF de PME »).
- Diffusion : fil mobile muet, boucle de page d'accueil, ou lancement avec son (défaut).
- Durée : 15 s pour une promo réseau (8 mesures à 128 BPM), 20 à 45 s pour un lancement. Idées : 3 ou 4 notions pour 15 s, une fonction produit par 8 à 10 s ; leur ordre se fixe à l'étape 2 (voir *L'arc de pitch : problème → solution → preuves → appel* au chapitre 10).
- Format : 1920×1080 à 60 fps. Le 16:9 est le maître ; 9:16 et 4:5 sont recomposés depuis la même timeline, jamais recadrés.
- Son : oui (musique composée ou piste fournie). Muet seulement pour une boucle de page d'accueil.
- Entrées : URL, logo SVG, 3 ou 4 captures, textes et chiffres définitifs, piste ou BPM, référence en 4 à 6 captures plus 2 lignes de rythme.

**Livrable** : `BRIEF.md`, rempli après un seul tour de questions. Il devient l'en-tête du prompt (chapitre 13, « Écrire un prompt de motion »).

```text
BRIEF · <produit> · v1 · <date>
Objectif   : <ce que le spectateur fait après la vidéo>
Public     : <qui, ce qu'il sait déjà>
Diffusion  : <plateforme> · <son / muet> · <boucle / lecture unique>
SPEC       : 1920x1080@60, 15s (8 mesures), 128BPM, audio: composée
Formats    : 1080x1920 (texte entre y 360 et 1420) · 1080x1350
Idées (3)  : 1. <…>  2. <…>  3. <…>
Entrées    : URL · logo.svg · 4 captures · chiffres · piste ou BPM · 6 captures de référence
Charte     : fond #… · texte #… · accent #… · titres <police> · ton <3 adjectifs>
Interdits  : <ceux du style choisi>
Hypothèses : <tout ce qu'on a fixé par défaut>
```

**Règles**

1. Un seul tour de questions, trois au plus : le produit en une ligne, le format et la durée, le lieu de diffusion (comme le skill cinetic). Tout le reste prend une valeur par défaut, écrite.
2. Écrire la durée en mesures entières (15 s = 8 mesures à 128 BPM) et le nombre d'idées (3 ou 4 pour 15 s). Les 96 vidéos calées ainsi ont 3,99 de moyenne et 10 notes de 5 ; les 98 autres, 3,86 et 5.
3. 1920×1080 et 60 fps au minimum : 129 vidéos à 60 fps ont 4,03 de moyenne et 14 des 17 notes de 5 ; les 93 à 30 fps, 3,65.
4. Le format se décide ici : chaque déclinaison est une composition recomposée (voir *Formats et zones sûres : vertical, carré, cinémascope* au chapitre 2).
5. Fournir les vrais mots et les vrais chiffres. Sinon Claude les invente : 90 constats dans 84 vidéos.

**La méthode Otom, corrigée**

On reprend les étapes 1 « Définir l'objectif » et 2 « Choisir format, durée et support » (guide Otom, p. 5) : une animation, un message ; le format décidé avant ; 6 à 15 s pour un fil mobile, ce que confirment nos 12 à 17 s. Des trois façons de démarrer (p. 4), la B, « depuis vos images », est celle d'une promo. Trois corrections, et la Bible a raison. Le son n'est pas un « niveau 3 » ajouté au montage (p. 4) : il se décide au brief, car les 12 vidéos à musique posée après coup ont 3,33 de moyenne et aucune note de 5. La marge de 6 % (p. 7) suffit en 16:9 et 4:5 ; en 9:16, on applique la zone sûre de la plateforme. Le MP4 se rend à 60 fps, pas à 30 (p. 16).

**Erreur fréquente** : « Vouloir tout dire : l'offre, les chiffres, l'équipe et le contact dans 10 secondes » (guide Otom, p. 5). Nos mesures en ajoutent une : écrire « 15 s » sans plafonner les idées, et recevoir 45 à 56 s.

**Dans HyperFrames**

- Un dossier par vidéo, `BRIEF.md` à la racine. Chaque version validée est copiée (rsync sans les rendus), jamais modifiée sur place (savoir-faire HyperFrames).
- Fixer `data-width`, `data-height` et `data-duration` de la composition racine dès la création : la longueur rendue est `data-duration`, pas celle de la timeline.

```js
// La ligne SPEC du brief en constantes : tout le projet en dépend
const SPEC = { w: 1920, h: 1080, fps: 60, bpm: 128, mesures: 8 };
const BEAT = 60 / SPEC.bpm;                  // 0,469 s
const BAR = 4 * BEAT;                        // 1,875 s = 112,5 images à 60 fps
const DUREE = SPEC.mesures * BAR;            // 15,0 s : nombre entier de mesures
const root = document.querySelector("[data-composition-id]");
console.assert(+root.dataset.width === SPEC.w && +root.dataset.height === SPEC.h, "format différent du brief");
console.assert(Math.abs(+root.dataset.duration - DUREE) < 1 / SPEC.fps, "data-duration différent du brief");
// Zone de texte : 6 % en 16:9 et 4:5 ; en 9:16, entre y = 360 et y = 1420
const SAFE = SPEC.h > SPEC.w
  ? { top: 360, bottom: 1420, side: 0.06 * SPEC.w }
  : { top: 0.06 * SPEC.h, bottom: 0.94 * SPEC.h, side: 0.06 * SPEC.w };
```

**Dans After Effects**

- Composition › New Composition (Composition › Nouvelle composition) : Preset Custom, 1920 × 1080, Frame Rate 60, Duration 0:00:15:00 (900 im, 8 mesures à 128 BPM).
- File › Project Settings (Fichier › Paramètres du projet) › Time Display Style : Frames (une mesure à 128 BPM = 112,5 im).
- Une composition par format (1920×1080, 1080×1920, 1080×1350) qui reçoit la même précomposition de contenu, recomposée calque par calque, jamais réduite par Scale (Échelle).
- Afficher Title/Action Safe (Zones admissibles titre/action) depuis le bouton Choose grid and guide options (Options de grille et de repères) du panneau Composition.
- La ligne SPEC dans un calque texte en Layer › Guide Layer (Calque › Calque repère) : visible au travail, absent du rendu.

**À cocher**

- [ ] Objectif, public et diffusion écrits, une phrase chacun.
- [ ] Ligne SPEC complète : taille@fps, durée en mesures entières, BPM, audio.
- [ ] Durée de 12 à 17 s pour une promo réseau (45 s au plus pour un lancement) ; 3 ou 4 idées pour 15 s.
- [ ] Format maître 1920×1080 à 60 fps ; déclinaisons listées avec leur zone sûre.
- [ ] Entrées réunies : URL, logo SVG, 3 ou 4 captures, textes et chiffres définitifs, piste ou BPM.
- [ ] Un seul tour de questions (3 au plus), hypothèses écrites dans `BRIEF.md`.
