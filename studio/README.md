# Studio de base

Le point de départ de chaque film (Bible, méthode A, phase 0). On le copie, on ne le modifie qu'en phase 9 (ranger le studio).

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

Après chaque film : les lignes nouvelles de `CONTRACT.md`, les interdits nouveaux de `STYLE.md` et les composants validés reviennent ici.
