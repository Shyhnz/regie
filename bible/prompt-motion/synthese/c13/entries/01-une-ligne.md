## Ce que Claude fait d'un prompt d'une ligne (one-line prompt, default template)

Un prompt d'une ligne (100 caractères ou moins) laisse Claude décider du sujet, du message et de la forme. Il fabrique bien, mais il fabrique **sa** vidéo. Les 64 vidéos nées d'une ligne sont notées 3,62 en moyenne, et 26 sont notées 2 ou 3 (41 %). Les 166 autres sont notées 3,95 (écart net, p < 0,001). Le coût tombe presque entier sur les vidéos de marque. Cette entrée sert au brief : décider si une ligne suffit, sinon quels mots ajouter.

![Neuf vignettes de runs différents du même prompt : HUD de coin avec timecode et 128 BPM, mot MOTION en grand, cartes « Claude. » et « CLAUDE » avec la mention motion designer.](ILLUS:showreel-defaut)

*Neuf des 33 runs du prompt canonique, dont [Claude motion designer showreel](https://prompt-motion.com/stephanlivera-df17a2), [Claude motion design reel](https://prompt-motion.com/tequilafunks-97f6c9) et [3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155) : même habillage de régie, même sujet « Claude », même carte « motion designer ».*

**Quand une ligne suffit, quand elle coûte**

| Type de demande en une ligne | Vidéos | Note moyenne | Notées 2 ou 3 |
| --- | --- | --- | --- |
| Montre-toi, sujet libre (showreel) | 10 | 4,20 | 1 |
| Produit, marque, appli | 24 | 3,38 | 15 (63 %) |
| Explainer d'un sujet | 13 | 3,38 | 7 |
| Produit, prompt de plus de 100 car. | 83 | 3,89 | 13 (16 %) |

L'écart produit en une ligne contre produit cadré est net (p < 0,001). Une ligne suffit donc pour **explorer** : voir ce que Claude propose, tester un concept, trouver une idée de gabarit. Elle coûte pour une **promo de marque** ou un **explainer**, où le message compte plus que la virtuosité. Les trois lignes notées 5 sont toutes des demandes « montre-toi » : [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d) (« Go all out. », 11 car.), [Kinetic type showreel](https://prompt-motion.com/zheke-38deff) et [Full Stop figure sequence](https://prompt-motion.com/hbcoop-de365c).

**Le gabarit par défaut : « showreel… go all out »**

Le prompt « make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are… go all out » est recopié mot pour mot 33 fois. Résultat : 4 vidéos notées 5, 29 notées 4, aucune sous 4 (4,12 de moyenne). Mais le squelette se répète :

- nom « CLAUDE » ou « Opus » à l'écran dans 32 runs ; principes du métier montrés à l'écran dans environ 13 ;
- HUD de régie ou timecode dans 27 (voir *L'habillage persistant : HUD, chapitres et gabarit fixe (persistent frame chrome, HUD overlay, chapter labels, fixed layout template)* au chapitre 2) ;
- chapitres numérotés dans 22 (voir *Le chapitrage : un chapitre par mesure (chaptering, one bar per chapter, numbered sections, step tabs)* au chapitre 10) ;
- chiffres de preuve ou compteur dans 28, rafales à la croche dans 24 (voir *L'accélération par subdivisions et la rafale (accelerando, subdivision build-up, rapid-fire burst, burst and breathe)* au chapitre 9) ;
- carte de fin dans 25 (voir *La signature finale : logo, slogan, appel, sans temps mort (end card, logo lockup, tagline + URL + CTA, outro)* au chapitre 10).

[Claude motion reel](https://prompt-motion.com/jasonzhou1993-8595e0) et [Kinetic type showreel](https://prompt-motion.com/itsuki-dev-10942d) ont « presque le même squelette » : sujet CLAUDE, HUD, 8 sections d'une mesure. La fabrication (15 s = 8 mesures à 128 BPM, 60 fps, bande-son non demandée dans 31 runs) est détaillée au chapitre 12, Méthode de production, entrée *Ce que Claude fait seul : les réflexes de fabrication d'Opus 5.5 quand le prompt se tait*. Ici, on regarde le contenu.

**Ce que les mots déclenchent**

| Mot du prompt | Ce que Claude en fait | Vidéo |
| --- | --- | --- |
| « showreel », « motion designer » | Claude devient le sujet et montre son métier | [Kinetic type showreel](https://prompt-motion.com/zheke-38deff), 5 : « HI. I'M OPUS 5.5 », liste « I CAN + verbe » où chaque verbe s'exécute |
| « go all out » | quantité plutôt que message | [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 5 : six disciplines en 12 s, aucun message |
| « Apple-style » | vocabulaire générique et sûr | [Matra caption app promo](https://prompt-motion.com/gautam-mer1-2ae354), 3 : flou d'entrée, « Introducing », dégradé, bento |
| « professional » | lenteur et silence | [Handwoven textiles brand explainer](https://prompt-motion.com/amitsingha89-150378), 2 : 7 scènes lentes en 54 s, aucune piste audio |
| « show me… » sans le mot vidéo | une page interactive | [AI data centre 3D tour](https://prompt-motion.com/sayan-shanky-f850d8), 4 : page 3D à 11 chapitres, musique posée |
| une URL + « launch saas video » | arc problème → preuves → slogan, vraie charte | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 5 |

**Le sujet vient de la ligne… ou du dossier**

Cinq des 33 runs canoniques sont devenus des promos de produit, toutes notées 4 : [Enxovaly baby app promo](https://prompt-motion.com/gabrielbuzziv-4ff0c6), [AjustaCV Pro pricing promo](https://prompt-motion.com/thayto-dev-44b911), [LiteLLM promo reel](https://prompt-motion.com/misbahsy-80eaec), [Lead Notifi product ad](https://prompt-motion.com/leadnotifi-e83f94) et [Travel visa service promo](https://prompt-motion.com/thismacapital-dfba20). Le prompt ne nomme aucun produit : le dépôt ou la conversation ont fourni marque, textes et langue (probable). Le contexte pèse plus que la phrase. Un skill open source en tire une règle : « le fichier fixe le look, pas l'ambition ; quand je dis go all out, va à fond » (motion-graphics-skills, brand-intake). Test : la même ligne dans un dossier vide et dans le projet doit rester ambitieuse ; seule la seconde doit ressembler à la marque.

**Les trois ajouts qui coûtent dix mots**

1. **La durée en secondes.** Elle ne change pas la note d'une ligne (3,73 avec, n = 22, contre 3,57 sans, n = 42 ; p = 0,39, non significatif). Elle borne le résultat : sans durée, les 11 explainers d'une ligne durent de 53 à 457 s, dont 6 plus de 2 minutes. [Brieform product presentation](https://prompt-motion.com/majorbaguette-fb11d7) demande « 30 seconds long » : 900 images exactes.
2. **Le sujet ou l'URL.** [Dub promo video](https://prompt-motion.com/steventey-0d20e4) ajoute une seule ligne au prompt canonique : « it should be a launch saas video for https://dub.co ». L'URL ancre le vrai produit : lien court, clics, partenaires, noir et orange de marque. Voir *Donner la matière : contenu exact, marque et entrées (inputs, brand assets, real content)* dans ce chapitre.
3. **Le son.** Seules 27 lignes sur 64 (42 %) donnent une vidéo animée sur la musique, contre 70 sur 106 (66 %) entre 101 et 200 car. Quand le prompt demande un calage sans BPM, 8 vidéos sur 10 sont animées sur la musique. Sans mot sur le son, la présentation Brieform ci-dessus sort muette.

Ces trois ajouts font passer une ligne entre 101 et 200 caractères. Les 106 prompts de cette tranche sont notés 4,00, dont 10 notés 5 ; hors les 33 copies du canonique, 3,95. Ils ne garantissent pas le message : il reste à l'écrire (voir *Les ingrédients qui changent le résultat (prompt ingredients)* dans ce chapitre).

**Ce qu'on vérifie sur la V1**

La vidéo raconte-t-elle notre message, ou le métier de Claude ? Trois signes trahissent le showreel par défaut : « Claude » ou « Opus » à l'écran, du vocabulaire d'animateur (« squash », « stagger », « easing »), un HUD de régie qui n'informe pas. Le test des 3 secondes du guide Otom tranche : montrer la vidéo une fois, sans le son, et demander ce qu'on a retenu. S'il décrit un effet, le mouvement a pris le dessus (guide Otom, p. 6).

**Ce que dit le guide Otom.** « Sans charte, le rendu tend vers une esthétique générique » (guide Otom, p. 4) : d'accord, et chiffré ici (3,38 pour une promo en une ligne). « "Une animation dynamique" ne veut rien dire pour Claude » (guide Otom, p. 5) : à nuancer. Le prompt canonique ne décrit aucune scène et donne 4 vidéos notées 5 sur 33 ; il ne donne pas notre message. Combien de runs lancer et comment choisir : voir *Même prompt, résultats différents (same prompt, different runs)* dans ce chapitre.

**À cocher**

- [ ] Durée écrite en secondes (une ligne sans durée : jusqu'à 457 s pour un explainer).
- [ ] Sujet, URL ou dossier du projet donné ; jamais « Claude » comme sujet d'une promo.
- [ ] Son demandé (« bande-son composée en code, calée sur le temps ») ou exclu par écrit.
- [ ] Message écrit en une phrase avant de lancer ; sinon, prompt d'exploration assumé.
- [ ] En exploration : 2 ou 3 runs comparés avant de retenir une piste.
- [ ] Sur la V1 : aucun « Claude », « Opus » ni jargon d'animateur à l'écran ; test des 3 secondes passé.
