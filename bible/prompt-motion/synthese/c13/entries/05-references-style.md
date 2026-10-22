## Références de style et de goût (style references, named looks)

On s'en sert à l'étape « direction artistique », en écrivant le bloc LOOK du prompt. On y décide deux références : une pour le **look** (couleur, matière, typo), une pour le **rythme** (durée des plans, densité, transitions). Un mot de style suffit pour le look ; le mouvement ne passe jamais par un nom, il s'écrit en nombres. 37 prompts nomment ou joignent une référence ; leur note est de 3,78 contre 3,88 sans référence (p = 0,41, non significatif). La référence règle le look, pas la qualité de fabrication.

![Planche de 6 vidéos : un mot de style dans le prompt suffit à fixer une direction artistique entière](ILLUS:references-style-1)

*Un mot = une DA. En haut : [Risograph studio intro](https://prompt-motion.com/rneayan-474bcf) à 0:20 et [Oscilloscope-style studio motion graphic](https://prompt-motion.com/rneayan-ea6129) à 0:15, même auteur, même phrase coréenne, deux mots de style ; puis [Four seasons train window](https://prompt-motion.com/itsolelehmann-e47532) à 0:12 (« Grand Budapest Hotel style »). En bas : [Database client launch video](https://prompt-motion.com/iammxfschr-d68f90) à 0:10 (« à la Anthropic »), [Email verification tool promo](https://prompt-motion.com/kmasiff-cc72cb) à 0:09.5 (« YC videos and Claude social videos »), [DeFi Saver stop-motion explainer](https://prompt-motion.com/nikolajankovic-ce4ff4) à 0:20 (« hand-drawn stop-motion »).*

**Ce que dit le prompt, ce qui en sort**

| Référence écrite | Vidéo (note) | Ce qu'elle a fixé, ce qu'elle n'a pas fixé |
| --- | --- | --- |
| « with Risograph style » (41 car.) | [Risograph studio intro](https://prompt-motion.com/rneayan-474bcf) (3) | 5 encres, grain, surimpression, décalage de repérage ; mais 69 s, rien sur les courbes ni la densité |
| « with Oscilloscope style » (58 car.) | [Oscilloscope-style studio motion graphic](https://prompt-motion.com/rneayan-ea6129) (4) | phosphore vert, rémanence, typo au contour, sinus et Lissajous ; accroche après 2 s d'écran plat |
| « Grand Budapest Hotel style » | [Four seasons train window](https://prompt-motion.com/itsolelehmann-e47532) (4) | rose-violet-or, symétrie frontale ; aucun roulis, gestes hors temps |
| « so a la anthropic like? » | [Database client launch video](https://prompt-motion.com/iammxfschr-d68f90) (4) | ivoire, serif éditoriale, un accent ; « punchy » lu comme synchro, pas comme énergie |
| « 吉卜力运镜 » (caméra Ghibli) | [Porco Rosso sunset dogfight](https://prompt-motion.com/nft-chen-5f8bb0) (4) | caméra de poursuite au lieu de plans larges en couches : le nom n'a pas transmis le mouvement |
| « an Apple-style 30s video » | [Matra caption app promo](https://prompt-motion.com/gautam-mer1-2ae354) (3) | noir, « Introducing », halo, bento ; fondu pour 7 transitions sur 7 |
| « typical… launch videos… on Twitter » | [Visual guides library launch](https://prompt-motion.com/techyoutbe-945b56) (3) | gabarit générique, muet, fondus et longs maintiens |
| « Study the reference closely… change the design overall » | [Engraving-style Claude ad](https://prompt-motion.com/lexnlin-038035) (5) | durées de plan très courtes reprises, design propre : 56 plans en 14,5 s |

**Ce qu'une référence transmet, et ce qu'elle ne transmet pas**

1. **Un mot de technique, d'œuvre ou de médium fixe le look entier.** « Pixel art », « hand-drawn whiteboard », « paper cut-out shadow theatre », « inside of a van gogh painting », « Pixar-level » : chaque fois, palette, matière et typo suivent. Mais la note ne suit pas : sur 12 cas relevés à la main, moyenne 3,5 (6 notés 3). Le médium donne la cohérence, pas le rythme.
2. **Le mouvement ne passe pas par un nom.** Grand Budapest donne la couleur et la composition ; « Sledgehammer and Big Time » donne la pâte à modeler mais pas la pixilation saccadée ([Clay-style music video](https://prompt-motion.com/davidshulmanfl-371638), 3, 8 plans de 7,5 s). Le rythme s'écrit : durée des plans, événements par seconde, tempo (voir *Durée, tempo et carte des temps*).
3. **Une référence générique convoque des clichés.** « Apple-style » et « Twitter launch videos » donnent les deux notes 3 du tableau. Une marque précise marche mieux : « YC videos and Claude social videos » fixe lavande, fenêtres flottantes, surtitres mono.
4. **Sans aucune référence, Claude prend ses registres par défaut** : keynote SaaS clair (crème, halos, Inter), keynote sombre (noir, révélations floues), HUD « IA » (coins de viseur, glitch RVB). 9 cas relevés, moyenne 3,67, dont [Supasito launch video](https://prompt-motion.com/wozu-co-242285) (3) et [Lidlezz app promo](https://prompt-motion.com/cansincengiz-me-cf68dd) (4).
5. **Un concept vaut une référence.** « self-referential & clever » donne une structure récursive ([Recursion explained in genres](https://prompt-motion.com/emollick-8661a8), 5) ; « art-directed rather than like a random collection of effects » donne le fil Bauhaus 1923 de [Motion techniques showreel](https://prompt-motion.com/lukasersil-0ed38e) (5). 6 cas à concept : moyenne 4,33. Petit effectif choisi à la main : un indice, pas une mesure.
6. **Une référence musicale structure le récit.** « Use the Oppenheimer theme music as inspiration, but compose it yourself » a donné fission, silence puis souffle, et le calage ([Distilbook promo showreel](https://prompt-motion.com/ajith-io-4c248f), 4, animée sur la musique). « 140 BPM rusko/skream style » a donné une grille commune au son et à l'image ([UK dubstep track with ASCII visuals](https://prompt-motion.com/rames-jusso-589f80), 4).
7. **Une vidéo de référence non jointe n'est pas vérifiable.** [Distilbook motion showreel](https://prompt-motion.com/ajith-io-ea7f2d) dit « download it » : impossible de séparer ce qui vient d'elle. Claude ne lit pas toujours une vidéo depuis un lien (guide Otom, p. 4).

**Comment formuler**

- **Look** : une œuvre, une technique ou une marque précise, plus les hex de la marque. Le « pastiche de genre » doit rester un seul langage d'image (voir *Un seul langage d'image : style maison ou pastiche de genre* au chapitre 8) ; la matière se règle ensuite (voir *La finition de rendu : grain, vignette, halo, ombres douces, reflets* et *Le fond d'ambiance : halo radial, dégradé fluide, grille fine* au chapitre 6).
- **Rythme** : 4 à 6 captures des moments clés et deux lignes sur le rythme ; « Reprenez la logique, jamais la création » (guide Otom, p. 4). Le prompt maître dit : « Reprends-en [le rythme / la palette / le type de transition], sans copier le contenu » (guide Otom, p. 7). D'accord, avec une correction de la Bible : les deux lignes de rythme doivent être **chiffrées** (secondes par plan, mots par seconde, BPM), sinon elles sont tenues à la baisse comme tout adjectif.
- **Garde-fou** : « Do not imitate a particular Apple commercial shot-for-shot. Capture the philosophy » ([Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4), 4).
- **Concept** : un dispositif qui ordonne les effets (voir *Le dispositif unique : une métaphore ou un concept décliné dans chaque scène* et *Le fil rouge : un objet, un exemple ou un plan continu traverse le film* au chapitre 10).

**Le goût de l'utilisateur**

La référence de rythme maison est la vidéo de l'agence 1600 : 88,6 s, 60 fps, typographie cinétique calée sur une voix française, noir chaud et orange #FC833B. On en reprend la grammaire, pas la peau : la police reste celle du site de la marque (pour NuOps, Manrope et JetBrains Mono), pas celle de l'agence (effets aimés). Ses deux lignes chiffrées : quelque chose bouge toutes les 0,5 à 1 s ; un mot par temps environ 0,2 s en liste rythmée, une phrase immobile à lire au moins 1,0 s (arbitrage 1 de la Bible). On ajoute 2 à 4 effets aimés (transitions motivées et enchaînées, zoom calibré qui cadre le mot clé seul, dégradé fluide de marque) et 2 à 4 rejetés (même accent répété, zooms inutiles, mots coupés par le bord, murs de mots flous). Les modèles mesurés sont au chapitre 14 : *Engraving-style Claude ad — @LexnLin* et *Motion techniques showreel — @lukasersil*.

```text
LOOK : <œuvre, technique ou marque précise> ; couleurs <hex et rôle> ; police <celle du site>.
RYTHME : reprends le rythme des 6 captures jointes, pas leur contenu, leur palette ni leur police.
  Un événement toutes les 0,5 à 1 s ; mots seuls à ~0,2 s ; plans de 1 à 2 s ; <BPM>.
GOÛT : oui à <2 à 4 effets aimés> ; non à <2 à 4 rejets>.
```

**À cocher**

- [ ] Une référence de look nommée (œuvre, technique ou marque précise), jamais « Apple-style » seul.
- [ ] Une référence de rythme jointe (vidéo ou 4 à 6 captures) avec 2 lignes chiffrées (s par plan, mots par s, BPM).
- [ ] « Reprends le rythme, pas le contenu » écrit, police et couleurs de la marque imposées.
- [ ] 2 à 4 effets aimés et 2 à 4 rejets listés.
- [ ] Sur le rendu : le look tient sur 6 images à 0, 20, 40, 60, 80, 100 % ; la durée médiane des plans est à ±20 % de celle de la référence.
