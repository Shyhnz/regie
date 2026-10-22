## Donner la matière : contenu exact, marque et entrées (inputs, brand assets, real content)

Quand le prompt ne donne rien, Claude remplit le vide : logo, nom de marque, arguments, chiffres, clients. L'analyse relève 43 constats de contenu inventé faute de matière fournie. La note de fabrication n'en souffre pas : les 67 prompts qui donnent de la matière de marque sont notés 3,79, contre 3,89 sans (p = 0,22, non significatif). La matière ne rend pas la vidéo plus belle ; elle la rend **vraie**, c'est-à-dire montrable par la marque.

**Quand s'en servir** : à chaque vidéo de marque (promo SaaS, lancement, explainer produit), avant d'écrire la moindre ligne de direction. C'est l'entrée de l'étape « brief » du chapitre 12 (*Méthode de production*). Une ligne sans matière ne sert qu'à explorer un style.

**Ce qu'on décide** : quelle matière on fournit (URL, dépôt, logo, charte, textes, captures, clips), sous quelle forme (bloc charte collé, ou bloc `<inputs>` qui la demande), et ce qui se passe si une pièce manque.

**Ce qu'on vérifie** : aucun chiffre, nom ou client à l'écran qui ne vienne de la matière fournie ; couleurs échantillonnées à l'image égales aux hex de la charte ; logo net et police réelle, pas une police de repli.

![En haut, le logo vectorisé depuis le vrai site devient personnage et porte le vrai slogan ; en bas, un logo et des montants inventés par Claude](ILLUS:matiere-1)

*En haut : [SaaS launch video](https://prompt-motion.com/aschapmann-131210), 0:10.6 et 0:29.0 : le navire-logo tracé en SVG depuis le vrai site, puis le vrai slogan « Turn Reddit users into customers ». En bas : [Amazon wholesale pitch video](https://prompt-motion.com/ceowinkz-7c776b), 0:00.9 et 0:06.9 : logo « W » et « $10,000 » inventés, faute de matière.*

**Ce que Claude invente quand on ne donne rien**

- Des chiffres plausibles présentés comme des faits : « 212 accounts posting in sync » dans [Drone Emprit showreel](https://prompt-motion.com/ismailfahmi-557268) ; une latence de 234 ms dans [Reflex brand motion reel](https://prompt-motion.com/reflex-cloud-72ffe5) ; 5 820 fiches dans [Fitters Bible app promo](https://prompt-motion.com/adamdesgns-478d6d).
- Des clients fictifs pour rendre la démo concrète : « Orbit » dans [Supademo launch video](https://prompt-motion.com/jhylee95-e1152f) ; Brightside Solar et Maya Chen dans [Datagran ChatGPT ads explainer](https://prompt-motion.com/charlesmendez-73b6e4).
- Une identité entière : [Amazon wholesale pitch video](https://prompt-motion.com/ceowinkz-7c776b) reçoit 176 car. sans logo ni chiffre ; Claude dessine un logo, invente « Winkz Brands », 5 arguments et des commandes de 5 000 à 10 000 $.
- Sa propre signature quand il n'y a pas de marque : « CLAUDE », un losange rouge, dans [Keyframe motion design reel](https://prompt-motion.com/grace-sunnyy-29bc61) (noté 5, mais générique).

Tout est crédible, rien n'est montrable tel quel.

**Ce que change chaque niveau de matière**

| Ce qu'on donne | Vidéo (note) | Ce que ça produit |
| --- | --- | --- |
| Un nom seul | [Website analyzer product promo](https://prompt-motion.com/en-ra-81c6dd) (4) | « RedSeed » devient un outil Reddit, avec un client fictif SkinPal et un orange #E24E23 déduits du nom |
| Une URL | [Dub promo video](https://prompt-motion.com/steventey-0d20e4) (5) | « launch saas video for https://dub.co » : liens courts, analytics, partenaires, orange de marque |
| « Lis le site et le code » | [SaaS launch video](https://prompt-motion.com/aschapmann-131210) (4) | vrai slogan, rouge #FE412F, logo tracé en SVG et animé comme un personnage |
| Accès au projet | [GenVizu product launch](https://prompt-motion.com/listudio-820c7b) (4) | « Investigate my project » : vraies images de la galerie, écrans réels, rien d'inventé |
| Images jointes | [Overthinking motion study](https://prompt-motion.com/gizakdag-cf4ae6) (4) | 5 illustrations de l'artiste animées en décors à 2,5D ; récit et palette tenus |
| Ressources imposées | [Design portfolio video reel](https://prompt-motion.com/kikelopezdesign-7cc9e8) (4) | « using only the portfolio's own resources » : logo K, vraies captures, orange de la marque |
| Charte chiffrée | [Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4) (4) | #0C0F1A, #E8B84B et #34D399 retrouvés à l'image ; deux polices et écrans réels |
| Interdit d'inventer | [Paper-style product launch film](https://prompt-motion.com/ik-builds-b8bdcf) (4) | preuve qualitative (plafond barré, courbe en S), aucun pourcentage inventé |

Une URL seule vaut un brief produit minimal : elle donne le métier, les fonctions et la couleur. Elle ne donne ni les textes définitifs ni les chiffres. Les 16 prompts avec une URL sont notés 3,81 contre 3,86 (p = 0,81, non significatif).

**Demander la matière : le bloc `<inputs>`**

Dix prompts du corpus commencent par un bloc qui demande la matière avant de travailler. Extrait de [UGC ad generator promo](https://prompt-motion.com/twoclipping-6dd14e) (4, animée sur la musique) : « Ask me for: the product name and a one-line promise, 3 to 5 UI moments to show, one accent color… » (« Demande-moi le nom, la promesse, 3 à 5 moments d'interface, une couleur d'accent »). Les vrais clips fournis rendent le produit crédible ; le storyboard est suivi presque à la lettre.

Le même bloc prévoit souvent des valeurs par défaut : « If I skip anything, use the defaults ». [Launch video remake comparison](https://prompt-motion.com/notdwd-c2037d) les utilise toutes : Claude n'a rien à inventer. Le piège est la pièce demandée et jamais fournie. [Morphing UI states loop](https://prompt-motion.com/demonugc-4c5753) reprend mot pour mot le prompt d'une vidéo animée sur la musique ; la chanson demandée n'arrive pas, et la vidéo sort muette (note 3). Règle : pour chaque entrée, écrire ce que Claude fait si elle manque.

**Le bloc charte, corrigé**

Le guide Otom propose un bloc charte « à remplir une fois », à coller dans chaque demande (guide Otom, p. 5). On le reprend, avec deux corrections de la Bible. L'exemple « À éviter : dégradés, émojis, rebonds » devient la liste d'interdits **du style choisi** : 126 vidéos ont des dégradés, dont 5 des 17 notées 5, et 14 des 17 ont un dépassement ou un ressort (contradictions 2 et 9 du digest Otom). Et la police va en fichier local, pas en « équivalent Google Fonts » : au rendu HyperFrames, une police distante sort en police de repli (contradiction 12 ; [Spotify product film](https://prompt-motion.com/brainextends-e19ac3) l'a subi).

```text
CHARTE
Entreprise : [nom], [activité en une ligne], [URL]
Fond [#hex] · Texte [#hex] · Accent 1 [#hex] = [rôle] · Accent 2 [#hex] = [rôle]
Titres : [police, fichier local] · Texte courant : [police, fichier local]
Logo : [fichier SVG joint]
Ton visuel : [3 adjectifs]
À éviter : [interdits du style choisi, voir chapitre 1]
Textes définitifs, dans l'ordre : [scène 1] / [scène 2] / … / [signature + URL]
Chiffres vérifiés : [valeur, source] ; aucun autre chiffre à l'écran.
```

Sous le bloc, la phrase du guide, reprise telle quelle : « Ces textes sont définitifs : ne les reformule pas et n'ajoute aucun contenu fictif » (guide Otom, p. 7). Sa règle anti-« template » n° 4 dit la même chose : « De vrais contenus. Vos chiffres, vos produits, vos noms. Jamais de faux texte » (guide Otom, p. 6). En anglais, la formule testée du corpus est celle d'ik-builds : « No invented results: no %, multipliers, customer names or figures ». Si la démo a besoin d'un client exemple, on le fournit soi-même, précis et un peu décalé, plutôt que de laisser Claude en inventer un générique (apports du lot 1, chapitre 13).

**Qualité de la matière**

« Des images de mauvaise qualité donnent un résultat de mauvaise qualité » (guide Otom, p. 4). En pratique : logo en SVG, captures à la résolution du rendu, clips réels plutôt que maquettes. Pour la police, prendre celle du site de la marque plutôt que celle d'une référence admirée (effets aimés de l'utilisateur) ; pour NuOps, Manrope et JetBrains Mono, chargées en `@font-face` local (savoir-faire HyperFrames). Pour la mise en scène de cette matière, voir *La maquette d'appareil et l'interface reconstruite* et *Le compteur qui roule* au chapitre 7, *La vraie matière : captures, vidéos et photos réelles détourées* au chapitre 8, *La palette fermée et l'accent qui a un sens* au chapitre 6, *Le casting typographique : deux ou trois voix à rôles fixes* et *La signature : lockup du logo et point relais* au chapitre 3.

**À cocher**

- [ ] URL du site ou accès au dépôt donnés dans le prompt.
- [ ] Logo joint en SVG ; polices de la marque en fichiers locaux.
- [ ] 3 à 5 hex de la charte, chacun avec son rôle.
- [ ] Textes définitifs dans l'ordre, et « aucun chiffre, nom ou client inventé » écrit en toutes lettres.
- [ ] Pour chaque entrée demandée, ce que Claude fait si elle manque (dont la musique).
- [ ] Après rendu : 0 chiffre ou nom à l'écran hors matière fournie ; hex vérifiés à la pipette sur 3 images.
