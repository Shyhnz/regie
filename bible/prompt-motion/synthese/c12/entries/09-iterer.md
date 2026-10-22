## Itérer : la boucle de correction

Itérer, c'est ce qu'on fait entre le contrôle qualité et le rendu final : corriger une ou deux choses par tour, en citant l'instant, sans casser ce qui marche. Le guide Otom prévoit 2 à 5 allers-retours ; la promo NuOps est passée par 8 versions en une journée (v2 à v9). Le corpus ne publie que le premier prompt : les règles viennent donc des skills, du guide Otom et de notre savoir-faire, et chacune dit sa source. On livre un journal de versions et, une fois la vidéo validée, un guide de style mis à jour.

![Le même instant de la promo NuOps dans quatre versions : mot coupé par le bord, zoom recalé, étoiles ajoutées, puis mot seul plein cadre](ILLUS:iterer-1)

*Promo NuOps (exemple maison, hors corpus), même instant 0:18.10 dans quatre versions : v3 coupe le mot au bord, v4 recale le zoom, v5 ajoute des étoiles autour du mot, v6 les retire et cadre le mot seul.*

**Ce que font les meilleures vidéos**

- Elles ont itéré hors champ : au moins 8 vidéos trahissent une conversation cachée. [Backlink audit data promo](https://prompt-motion.com/palashbagchi11-0a4b6b) (4/5) n'a pour prompt qu'une retouche « ajoute une musique… 2 versions, paysage et portrait » ; [Email verification tool promo](https://prompt-motion.com/kmasiff-cc72cb) cale ses scènes de 83 im sur les temps sans que son prompt le demande.
- Une consigne d'itération vérifiable marche : « retimed until synced » donne 39 gestes sur 41 à ±1 im ([Supademo launch video](https://prompt-motion.com/jhylee95-e1152f)).
- « Start over if it doesn't feel like done by a pro » pousse [Portfolio motion reel](https://prompt-motion.com/heyiammallik-e72d17) vers des coupes sur la croche et des transitions motivées.
- Le skill cinetic fait au moins 2 tours pour un film de lancement et 5 au plus ; chaque défaut porte une gravité (P0 sur un temps fort, P1 visible en lecture normale, P2 visible à l'arrêt) et un vérificateur tente de le réfuter avant correction.
- Le skill product-film garde chaque version dans `out/<film>/vN/` et verse chaque remarque du client dans `BRAND.md`.

**Ce qui manque aux moins bonnes**

- Une boucle de contrôle sans seuil ne corrige que ce qu'elle nomme : [Taxtello bookkeeping app film](https://prompt-motion.com/daniel-haida-8691d4) « itère » sur 10 images (« Apple-tier ? ») mais laisse des lignes d'interface à environ 1 % de la hauteur.
- Trop de demandes par tour : NuOps v5 traitait 4 demandes ; l'une a posé des étoiles autour de chaque zoom, rejetées en v6 (« pas de bon goût »). Un correctif a créé un accent répété.
- Un correctif vérifié là où on regarde : le zoom recalé en v4 restait faux dans chaque scène masquée au montage (mesure à 0 px), découvert seulement en v6 (savoir-faire HyperFrames).
- Des juges indulgents : des critiques automatiques disent « SHIP » en v2, le client trouve encore 9 points en 7 tours (apports open source, motion-video-kit).

**Décisions**

- Ce qui est verrouillé. Par défaut : tout plan validé, dit en clair (« v6 est la référence ; ne touche plus aux scènes 1 à 3 »).
- Les corrections du tour : 1 ou 2, chacune avec son instant (à 0,1 s ou en mesure.temps), ce qu'on voit, et le résultat attendu.
- Le nombre de tours : 2 au moins pour un lancement, 5 au plus.
- Erreur ou goût. Une erreur (mot coupé, image noire, son décalé) devient un contrôle permanent ; un goût va dans le guide de style et la liste des effets aimés.
- Quand changer d'angle : un défaut signalé 2 fois. On décrit le résultat attendu, ou on repart d'une conversation neuve avec la dernière version validée.

**Livrable**

```text
JOURNAL · <film>
v6 · <date> · copie de v5 · dossier videos/<film>-v6/
  1. 0:18.10 · étoiles autour du zoom · attendu : mot seul, plein cadre · fait
  2. <instant> · <ce qu'on voit> · attendu : <résultat> · fait / en partie / pas fait
  Verrouillé : scènes 1 à 3 · Verdict : référence / à reprendre
```

Après validation, le guide de style animé : rythme, tailles en % du cadre, mouvements permis et interdits, accents, tempo, courbes signature, 3 erreurs corrigées en route.

**Règles**

1. Au plus 2 corrections par tour, chacune avec son instant et une capture (guide Otom, p. 6 et 15 ; apports open source : « 1 ou 2 notes par tour »).
2. Une version = une copie du dossier précédent ; on ne retouche jamais une version validée (savoir-faire HyperFrames ; skill product-film).
3. Chaque correction se prouve par un avant/après au même instant, puis on revoit tout le plan touché et chaque scène qui partage le code modifié (cas NuOps v4 → v6).
4. On ralentit ou on accélère par la grille : changer le tempo, ou retirer des événements par mesure ; jamais un facteur global (voir *Étape 4 · La musique et la grille : tempo, mesures, temps forts, bande-son*).
5. On s'arrête quand la grille de l'étape 9 passe sans défaut bloquant, ou au 5e tour, ou quand la liste ne rétrécit plus (un run open source est passé de 8 à 3, 2, puis 1 défaut). On livre avec ce qu'on changerait encore.
6. Chaque erreur réelle devient une règle numérotée, avec sa cause (apports open source, mortiflix et live-panel).

**La méthode Otom, corrigée**

On reprend tel quel (guide Otom, p. 6 et 15) : la V1 est un premier jet ; 2 à 5 allers-retours ; une capture de l'instant fautif ; « cette version est la référence, ne touche plus à la scène 1 » ; une copie de chaque version validée ; changer d'angle quand un défaut revient ; le prompt « guide de style animé », auquel la Bible ajoute le tempo et les courbes signature. « Claude en corrige huit et en casse deux » n'est pas sourcé ; NuOps v5 montre le mécanisme. Des 10 correctifs (p. 14), 03 à 07 et 10 se gardent ; la Bible corrige les autres (voir le chapitre 13, Écrire un prompt de motion) : 01 ralentit par le tempo et non de 30 %, 02 garde le linéaire des tracés, 08 rend les images 0 à N-1, 09 traite rebonds et dégradés selon le style (chapitre 1, Styles).

**Erreur fréquente** : envoyer dix remarques en un message (guide Otom, p. 6). Chez nous, 4 demandes en v5 ont produit un défaut nouveau, retiré au tour suivant.

**Dans HyperFrames**

- Nouvelle version : `rsync -a --exclude renders --exclude snapshots videos/promo-v5/ videos/promo-v6/` (savoir-faire HyperFrames). Relire avant d'écrire : Studio réécrit les fichiers (`data-hf-id`).
- Après chaque correction : `npx hyperframes check`, puis `npx hyperframes snapshot --at 18.1,18.6` aux instants des notes. Pour le mouvement, rendre la seule scène touchée : `npx hyperframes render -c compositions/s04.html --quality draft -o renders/s04-v6.mp4`.
- Avant/après : `ffmpeg -ss 18.1 -i v5.mp4 -ss 18.1 -i v6.mp4 -filter_complex hstack -frames:v 1 avant-apres.png`. Un correctif qui ne tient pas : 8 images consécutives, `ffmpeg -ss 18.0 -i v6.mp4 -vf "scale=480:-1,tile=8x1" -frames:v 1 bande.png`.
- Poser chaque scène à une mesure fixe, pour qu'une correction interne ne décale jamais les autres :

```js
// Scènes posées sur la grille : retoucher s04 ne déplace ni s03 ni s05
const BEAT = 60 / 120, at = b => b * BEAT;           // 120 BPM
const SCENES = [
  { id: "s03", bar: 6,  build: buildS03 },           // mesure de départ (4 temps)
  { id: "s04", bar: 9,  build: buildS04 },           // v6 : seule s04 change
  { id: "s05", bar: 12, build: buildS05 },
];
SCENES.forEach((s, i) => {
  const sub = s.build(), start = at(s.bar * 4), next = SCENES[i + 1];
  if (next && start + sub.duration() > at(next.bar * 4)) console.warn(`${s.id} déborde sur ${next.id}`);
  tl.add(sub, start);                                // position absolue, jamais à la suite
});
```

**Dans After Effects**

- File › Increment and Save (Fichier › Incrémenter et enregistrer) à chaque tour ; archiver une version validée par File › Dependencies › Collect Files (Fichier › Dépendances › Rassembler les fichiers).
- Une variante sans risque : Edit › Duplicate (Édition › Dupliquer) sur la composition dans le panneau Project (Projet) ; verrouiller les calques validés avec le commutateur Lock (verrou).
- Noter chaque remarque sur un marqueur de composition (Composition Marker) à son instant, avec le résultat attendu en commentaire.
- Avant/après : Take Snapshot (Prendre un instantané, Maj+F5) avant la correction, puis Show Snapshot (Afficher l'instantané, F5) à la même image.
- Re-rendre le seul intervalle touché : poser la Work Area (zone de travail, touches B et N), puis Render Settings › Time Span › Work Area Only (Paramètres de rendu › Durée › Zone de travail uniquement).

**À cocher**

- [ ] Au plus 2 corrections ce tour, chacune avec son instant (à 0,1 s) et le résultat attendu.
- [ ] La version précédente est copiée et intacte ; les plans validés sont listés comme verrouillés.
- [ ] Chaque correction a son avant/après au même instant, et chaque scène qui partage le code touché est revue.
- [ ] Tour 5 au plus, et la liste des défauts rétrécit d'un tour à l'autre.
- [ ] Les erreurs réelles sont ajoutées aux contrôles ; les goûts sont notés dans le guide de style.
