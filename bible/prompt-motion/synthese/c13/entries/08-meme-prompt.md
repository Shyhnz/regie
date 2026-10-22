## Même prompt, résultats différents (same prompt, different runs)

Un prompt identique ne donne pas la même vidéo. D'un tirage à l'autre changent la bande-son quand elle n'est pas demandée, le tempo, la cadence, la tenue des consignes non vérifiées, et la note d'un point au plus. Ne changent pas la durée écrite et les réflexes du modèle. **Quand s'en servir** : à l'exploration (combien de tirages lancer), puis à l'itération (comment garder ce qui marche). **Ce qu'on décide** : 2 ou 3 tirages comparés, ce qu'on verrouille par écrit pour réduire l'écart, la version de référence. **Ce qu'on vérifie** : les tirages côte à côte, aux mêmes instants.

**Ce que dit le corpus**

- **Le prompt canonique, 33 tirages** (« Make a dynamic 15-second motion graphics video… Go all out. ») : notes 4 × 5 et 29 × 4, aucune sous 4. Musique : 31 animées sur la musique, 2 partielles. Tempo : 128 BPM × 20, 120 BPM × 9, autres × 4. Cadence : 60 fps × 25, 30 fps × 8. Durée : 14,9 à 15,1 s, sauf 2 vidéos publiées en plusieurs versions bout à bout.
- **Le squelette est stable** : HUD ou timecode dans 27 tirages, chiffres de preuve dans 28, nom CLAUDE ou Opus dans 32. [Claude motion reel](https://prompt-motion.com/jasonzhou1993-8595e0) et [Kinetic type showreel](https://prompt-motion.com/itsuki-dev-10942d) ont presque le même plan : CLAUDE, HUD, 8 sections d'une mesure à environ 128 BPM.
- **L'audience varie bien plus que la note** : de 0 à 17 023 likes, médiane 5. Les 6 auteurs qui disent avoir réglé l'effort au maximum sont aux deux bouts du tableau, de 1 à 17 023 likes (site prompt-motion). L'effort n'a pas réduit l'écart.
- **5 groupes identiques hors canon** : écart de note de 0 ou 1 point ; durée identique à 0,06 s près dans les 5 ; verdict musique différent dans 3 groupes sur 5.

![Deux tirages du même prompt de 202 caractères aux mêmes instants : en haut un point orange qui traverse gribouillis et mots, en bas des phrases à la première personne ponctuées d'un point](ILLUS:meme-prompt-1)

*En haut [Claude self-intro motion graphic](https://prompt-motion.com/1littlecoder-9fef89), en bas [Kinetic type self-portrait](https://prompt-motion.com/souravbhar871-61f424), à 0:02, 0:05 et 0:08 : même prompt, deux palettes et deux typographies. Le même réflexe revient pourtant : le point qui ponctue chaque mot et sert de transition, puis un iris final. Le premier est calé à 120 BPM, le second est muet.*

**Ce qui change d'un tirage à l'autre**

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Bande-son présente ou absente | [Claude self-intro motion graphic](https://prompt-motion.com/1littlecoder-9fef89) / [Kinetic type self-portrait](https://prompt-motion.com/souravbhar871-61f424), 10 s | 120 BPM calage serré contre vidéo muette ; notes 4 et 4 ; rien sur le son dans le prompt |
| Lecture de « go all out » | [Distilbook product video](https://prompt-motion.com/ajith-io-c52e09) / [Distilbook motion showreel](https://prompt-motion.com/itisrazak-3ad902), 40 s | démo sobre 65 % quasi figée (3) contre showreel à 144 BPM, 24 mesures (4) ; sortie 848 × 480 pour le second |
| Consignes non vérifiées | [Morphing UI states loop](https://prompt-motion.com/demonugc-4c5753) / [Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86), 14 s | zoom absent, boucle qui accroche, muette (3) contre boucle au pixel près, un état par temps (4) |
| Contenu inventé | [DistilBook product explainer](https://prompt-motion.com/sudo-kiran-4f8b59) / [DistilBook motion explainer](https://prompt-motion.com/sudo-kiran-b055de), 30 s | deux arcs différents (problème → 3 étapes, chaos → clarté) ; 30 fps contre 60 ; 120 BPM et 4 dans les deux |
| Un mot ajouté | [DistilBook product explainer](https://prompt-motion.com/sudo-kiran-6609ed), 30 s | « very good script » et « good music » : voix off en chiasme, 27 % de maintiens |
| Prompt reformulé | [Negroni recipe animation](https://prompt-motion.com/ror-fly-9950f1) / [White Russian recipe animation](https://prompt-motion.com/sarut0bisasuke-cefa43), 30 s | même squelette (verre tracé, graduations, étapes cochées), 30,00 s, muettes, 4 et 4 |

Les deux tirages du prompt en blocs de 2 711 caractères (groupe 3) méritent une précaution. Le texte est identique, mais son bloc `<inputs>` demande des états et une piste à l'utilisateur. Ce que chacun a fourni dans la conversation n'est pas visible : la vidéo muette vient sans doute d'une piste jamais donnée. L'écart mesure donc aussi ce qu'on fournit, pas seulement le hasard.

![Deux tirages du même prompt aux mêmes instants : en haut chaque état d'interface remplit le carré, en bas les mêmes états restent minuscules dans un carré vide](ILLUS:meme-prompt-2)

*En haut [Shape morphing through UI states](https://prompt-motion.com/twoclipping-5cba86), en bas [Morphing UI states loop](https://prompt-motion.com/demonugc-4c5753), de 0:01 à 0:13 toutes les 2 s : même structure au temps (14,06 et 14,00 s, 7 mesures à 120 BPM). Mais « The camera zooms so each state fills the frame » n'est tenu que dans le premier ; dans le second, les objets occupent 4 à 60 % de la largeur et le texte 1 % de la hauteur. Le contrôle « one frame per beat » demandé n'a rien rattrapé.*

**Lecture.** Ce qui est chiffré tient d'un tirage à l'autre : durée, nombre de mesures, tempo quand il est écrit. Ce qui est laissé ouvert varie : son, cadence, résolution, contenu, interprétation d'un adjectif (« go all out » donne une démo lente ou une rafale). Une consigne écrite mais sans chiffre ni contrôle mesurable (« fills the frame ») varie aussi. Pour réduire l'écart, on écrit en nombres ; pour profiter de l'écart, on tire 2 ou 3 fois et on choisit.

**Guide Otom.** « Comptez 2 à 5 allers-retours pour une animation soignée » (guide Otom, p. 6) et « J'ai corrigé deux points à la fois maximum » (checklist, p. 17) : d'accord. Pour itérer sans tout casser : « cette version est la référence, ne touche plus à la scène 1 », une copie du fichier de chaque version validée. Si un défaut revient, décrire le résultat attendu plutôt que le problème, ou repartir d'une nouvelle conversation avec le dernier fichier validé (guide Otom, p. 15). La Bible ajoute un temps avant les allers-retours : comparer plusieurs tirages, car le premier n'est qu'un échantillon.

**Règles**

1. **À l'exploration, 2 ou 3 tirages** du même prompt, comparés sur une même planche aux mêmes instants (`planche.py`, une ligne par tirage). On choisit sur la planche, pas sur le souvenir.
2. **Tout ce qui doit être constant est écrit en nombres** : durée, tempo et source de la musique (fournie, composée, aucune), 60 fps, résolution, taille minimale du texte, boucle. Et chaque consigne a son contrôle mesurable (« le sujet occupe au moins 60 % de la largeur à chaque temps »).
3. **La version choisie est verrouillée** : dossier copié avant toute modification, jamais édité en place (savoir-faire HyperFrames), et « cette version est la référence » écrit dans la conversation.
4. **Itérer avec 1 ou 2 corrections par message**, en citant l'instant (« à 0:08, … »). Pour réutiliser un prompt chiffré : au premier essai ne changer que les mots (produit, nom), au second un seul nombre à la fois (apport flxrnc).
5. **Ne pas compter sur un réglage** : l'effort maximal n'a pas réduit l'écart sur 6 tirages du prompt canonique.

Voir le détail des tirages notés 5 du prompt canonique au chapitre 14 : *Blue editorial motion showreel — @fionntobin*, *Claude motion design reel — @tequilafunks*, *3D motion design showreel — @sahildesigner23*, *Type, form, space showreel — @Web3Wesley*, et un tirage noté 4, *Claude motion designer showreel — @stephanlivera*. Le tirage réussi du prompt en blocs : *Shape morphing through UI states — @twoclipping*. Pour la boucle : *Le bouclage : serre-livres, rappel et boucle parfaite (bookend, callback, seamless loop)* au chapitre 10. L'itération est décrite au chapitre 12 (Méthode de production) ; les réflexes par défaut dans *Ce que Claude fait d'un prompt d'une ligne*.

**À cocher**

- [ ] 2 ou 3 tirages comparés sur une même planche, aux mêmes instants, avant de choisir.
- [ ] Musique (source et BPM), durée, 60 fps, résolution et boucle écrits en nombres, pas laissés au tirage.
- [ ] Chaque consigne de cadrage chiffrée et contrôlée (sujet ≥ 60 % de la largeur, texte ≥ seuil en % de la hauteur).
- [ ] Version retenue copiée dans un nouveau dossier et déclarée « référence ».
- [ ] 1 ou 2 corrections par message, avec l'instant ; 2 à 5 allers-retours prévus.
