## Le dossier de studio (studio folder, reusable production base)

Un studio, c'est un dossier qu'on copie au début de chaque film et qu'on enrichit à la fin : « si la seule trace du film est une conversation, on n'a pas de système de production, on a eu une session chanceuse » (W). Le studio de base vit dans `videos/_studio/` ; chaque film en est une copie. Il garde le contrat de rendu, les interdits, la grille de revue et les composants validés ; on ne change que le brief et la matière (P : « seul le bloc BRAND change »).

**Quand s'en servir** : à la phase 0 de chaque film (parcours A), puis à la phase 9 pour y verser ce que le film a appris.

```sh
rsync -a --exclude renders --exclude out --exclude reviews videos/_studio/ videos/<film>/
```

| Fichier | Rôle | Phase |
| --- | --- | --- |
| `BRIEF.md` | réalisateur : à retenir, faits, inacceptable, SPEC | 1 |
| `REFERENCE.md` | référence : grammaire mesurée / estimée / proposée | 2 (porte 1) |
| `STYLE.md` | jetons, règles par classe, interdits vivants, garde-fous | 3 |
| `SHOTLIST.md` | plans en états d'entrée / de sortie, raison, héros, couture | 4 (porte 2) |
| `timeline.js` | la seule source du temps : grille, événements, ancres, repères son | 4 |
| `motion.js` | les seuls nombres de mouvement : courbes, durées, décalages, ressorts | 3 |
| `CONTRACT.md` | contrat de rendu, grandit à chaque panne corrigée | 5 |
| `JOURNAL.md` | reçus : prompts et relances, comptés | toutes |
| `prompts/PROMPTS.md` | prompts de chaque porte, critique, correction, son | toutes |
| `tools/review.sh` | planches 4 ips, téléphone, 18 témoins, bandes de couture, noirs et gels | 4-7 |
| `tools/audio_check.py` | sonie, crête, bandes, attaque et émergence de chaque repère (`--stems coups.wav lit.wav`) | 8 |
| `tools/sound-exemple.py` | exemple de bande-son composée en code depuis `timeline.js`, gain de chaque coup réglé en boucle fermée, limiteur −2,2 dB, sonie −14 LUFS | 8 |

**Les gabarits des fichiers de décision**

```markdown
# BRIEF — <film>

Rôle : réalisateur. Une page. Rempli après un seul tour de questions (trois au plus). Ce qui n'est pas fixé ici prend la valeur par défaut écrite entre crochets.

## Le film
- À retenir (une phrase, 15 mots au plus) :
- Public :
- Diffusion : [lancement avec son] / fil mobile muet / boucle de page d'accueil
- Inacceptable si :
- SPEC : [1920×1080] · [60 fps] · durée [15 s = 8 mesures à 128 BPM] · son [composé en code sur la même horloge] · boucle [non]
- Déclinaisons : [16:9 maître] ; 9:16 ; 1:1 ; 4:5 (recomposées, jamais recadrées)
- Style (guide B) :

## Faits (Claude ne les change pas)
| Fait | Valeur exacte | Fichier |
| --- | --- | --- |
| Nom du produit | | |
| Promesse | | |
| Logo | | `assets/logo.svg` |
| Écrans | | `assets/screens/…` |
| Chiffres | | source : |
| Textes définitifs | | |
| Polices | | `assets/fonts/…` |
| Couleurs de marque | | |
| Piste ou BPM | | `assets/audio/…` |

Texte le plus long à réutiliser (pour le test de mise en page) :

## Choix laissés au film (Claude propose)
Caméra, ouverture, transitions, rythme interne, effets dans les interdits du style.

## Manques
Chaque manque est une question, pas une invention.
- [ ]
```

```markdown
# RÉFÉRENCE — <film>

Rôle : référence. On donne un **rôle** à la référence : on l'étudie pour une seule chose.

- Référence : `assets/reference.mp4` · dimensions · cadence · durée (ffprobe)
- Ce qu'on étudie :

## Grammaire
| | Mesuré | Estimé | Proposé pour notre film |
| --- | --- | --- | --- |
| Palette (hex) | | | |
| Typo (famille, largeur, graisse, % H) | | | |
| Composition (où va l'œil d'abord) | | | |
| Rythme (temps moyen entre deux changements) | | | |
| Mouvement (snap, glisse, dépassement, coupe, tenue) | | | |
| Texture (grain, papier, verre, rien) | | | |

## L'événement étudié
| | Image source | Temps | Valeur | Mesuré / estimé |
| --- | --- | --- | --- | --- |
| Entrée | | | | |
| Atterrissage | | | boîte de départ → d'arrivée | |
| Tenue lisible | | | | |
| Coupe | | | | |
Ordre d'apparition (produit, titre, étiquettes) :
État transmis au plan suivant :
Valeurs incertaines et images qui les vérifieraient :

## NE PAS COPIER
Sujets, logos, textes, images propres au produit de la référence.

## Proposition
Un plan original avec notre matière, qui reprend la décision apprise (mise en page, point focal, entrée, réponse du produit, tenue).
```

```markdown
# SHOTLIST — <film>

Rôle : timeline. Ce que le spectateur sait à chaque instant. Images **globales** à 60 fps (préciser « locale » sinon). Grille : <BPM> BPM, 1 temps = <fps × 60 / BPM> im, temps n = round(n × …) depuis f0. La source des nombres est `timeline.js` ; ce tableau en est la lecture humaine.

| # | Plan (bibliothèque C) | Images | Mesure.temps | État d'entrée | État de sortie | Raison d'exister | Héros | Son | Couture vers le suivant |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | | f0–f | 1.1 | | | | | | |

Contrôles avant la porte 2 :
- [ ] La somme des plans fait la durée ; au moins 3 longueurs de plans.
- [ ] Chaque plan a une raison d'exister et un seul héros ; un temps qui ne change rien est coupé.
- [ ] Rien d'immobile plus de 48 im hors tenue voulue (60-96 im, poussée 2-3 %).
- [ ] Drop sur un 1er temps et sur la révélation ; signature 1,5-2,5 s animée.
- [ ] Chaque couture décidée ; texte le plus long tenu dans chaque boîte.
```

**À cocher**

- [ ] Le film part d'une copie de `videos/_studio/`, jamais d'un dossier vide.
- [ ] Chaque fichier de décision est rempli avant la porte qui le demande.
- [ ] En fin de film, contrat, interdits et composants sont revenus dans le studio de base.
