## Guide de l'explainer de données et de diagrammes (data explainer, animated diagram, voice-led explainer)

Le film qui fait comprendre un mécanisme ou un chiffre : explainer technique, tutoriel, « comment ça marche ». Chaque plan est un diagramme qui démontre l'idée, construit dans l'ordre où la voix le nomme. Palette de *L'éditorial imprimé* ou du *Carnet* (chapitre 1), recettes du chapitre 7.

**Quand le choisir, quand l'éviter** : un mécanisme à expliquer, avec voix off. À éviter en typo 1600 pure : à un événement par 0,5 s, un schéma n'a pas le temps d'être lu (*L'illustration qui explique*, chapitre 8).

**Verdict** : à adapter. Les 23 fiches explainers ont 3,52 de moyenne (`videos.json`). Garder le diagramme juste, prendre le rythme des promos.

**Vidéos modèles**

| Vidéo | Ce qu'on lui prend | Mesure clé |
| --- | --- | --- |
| [Recursion explained in genres](https://prompt-motion.com/emollick-8661a8) | le dispositif unique | remontée 17,5 s après 42 s de descente (chapitre 10) |
| [Second brain service promo](https://prompt-motion.com/theviableedge-9065be) | une donnée suivie, le balayage qui compte | étude 60 fps de theviableedge : 64 im, power2.inOut |
| [Dub promo video](https://prompt-motion.com/steventey-0d20e4) | compteurs de preuve | étude 60 fps de steventey : moitié de la valeur en 17-19 % du temps |
| [History of AI timeline](https://prompt-motion.com/kloss-xyz-fe0c31) | un diagramme juste par chapitre | 21 coupes sur 25 suivies d'une attaque à 0-5 im (fiche) |
| [DistilBook product explainer](https://prompt-motion.com/sudo-kiran-6609ed) | une scène par phrase | scène 0,1 à 0,3 s avant sa phrase (chapitre 9) |

**Mesures (60 fps)** : fiches explainers à 60 fps : 3,8 de moyenne ; à 30 fps : 3,4. À 120 BPM, 1 temps = 30 im. Arrivées power2.out en 22-42 im, 95 % du trajet 1 à 3 im avant le temps (étude 60 fps de daniel-haida).

**Brief (phase 1)**

```text
SPEC 1920×1080 · 60 fps · 30 s = 15 mesures à 120 BPM · voix off, musique dessous · boucle : en option
MATIÈRE  script condensé (1 à 3 mots clés par phrase) + horodatages mot à mot · chaque chiffre et sa source · 3 à 8 nœuds · unités
INACCEPTABLE  chiffre inventé · axe qui ne part pas de 0 · libellé < 2,5 % H · image qui attend la voix · flèche qui n'explique rien
```

**Référence (phase 2)** : on étudie **un schéma qui se construit sur une phrase** (B) : du mot dit au nœud lisible. Mesurer l'avance, l'ordre, la tenue. Modèle : [Replica symmetry breaking whiteboard](https://prompt-motion.com/tak3sh8-be5012), tracés 15 im avant la voix en médiane (*Le calage sur la voix off*, chapitre 9).

**STYLE.md prérempli (phase 3)**

```text
JETONS
papier #F0EBDD · encre #0D0B08 · accent #C85A40 = la donnée qui compte · gris #6E6A5D = légendes, réseau inactif
vert = validé, rouge = perdant · une couleur par flux, tenue tout le film (chapitre 7)
variante dessinée : papier #F2F1EC, feutres #2A2A2A / #D8693F (chapitre 1)
polices : serif titres ≥ 6 % H · libellés ≥ 2,5 % H · chiffres tabulaires, héros à 10-30 % H (chapitre 7)
courbes : enter power3.out · arrivée power2.out · traverse power2.inOut · exit power1-2.in, deux fois plus court
ressorts : texte ζ 1,0 (F) · nœud qui naît : dépassement 3-8 % (chapitre 7)
RÈGLES PAR CLASSE
données : une progression pilote barre, tête et chiffre (même départ, courbe, durée)
schéma : lien ≈ 8 im → contour ≈ 12 im → libellé ; même rang en cascade de 2-4 im
paquet : un seul, 0,3-0,4 s en ease-in-out ; il allume la cible sur le temps
désignation : retenus à 100 %, autres à 25-50 %
caméra : poussée ×1,35 à ×2,3 sur ce qui informe ; aucun plan > 4 s fixe (chapitre 11)
voix : scène 0,1-0,5 s avant la phrase ; mot clé 2-4 im avant sa syllabe (chapitre 9)
HIÉRARCHIE
un héros : la donnée qui change ; le reste en gris ; ambiant : flux de points, < 5 % (F)
INTERDITS → À LA PLACE
image qui attend la voix → un geste secondaire par mot clé
flèche décorative → paquet qui trace le lien
étapes à pas fixe → horodatages mot à mot
même fondu à chaque chapitre → les points deviennent le graphique suivant
GARDE-FOUS
chaque chiffre = sa source · unité écrite à l'écran · échelle à 0 · code couleur des flux
```

**Timeline type (phase 4)** : 15 mesures de 120 im ; scènes sur les phrases, gestes secondaires sur la grille.

| Mesures | Fonction | Plan C | Couture |
| --- | --- | --- | --- |
| 1 | accroche chiffrée | C01 Accroche de la première seconde | compression en point |
| 2-3 | problème | C02 Le problème montré | le point devient le 1er nœud |
| 4-7 | mécanisme, une étape par phrase | C05 Le composant qui change d'état ; C04 La démo au curseur | paquet relais |
| 8-11 | preuves | C06 La preuve chiffrée | C10 La couture par objet relais |
| 12 | chute | C07 Le mot clé plein cadre | coupe sur le temps |
| 13-14 | schéma tenu | C09 La tenue vivante, ou C08 La rafale récapitulative | recul révélateur |
| 15 | signature | C11 La signature finale ; option C12 La boucle parfaite | — |

**Coutures types**

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Compression en point | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:01.33 | URL compressée en 10 im (power2.in), éclair d'1 im |
| Paquet qui allume la cible | [Commotion app showreel](https://prompt-motion.com/amol909s-27533e), 0:10.00 | 9 im à 30 fps, cible allumée au demi-temps |
| Points devenus graphique | [Crux motion design showreel](https://prompt-motion.com/marouanegazouzi-6071d5), 0:02.50 | pluie empilée en histogramme en 0,9 s |
| Tracé, puis gomme | [Replica symmetry breaking whiteboard](https://prompt-motion.com/tak3sh8-be5012), 0:02.93 | gomme ≈ 1,2 s avant la phrase suivante (chapitre 9) |
| Celle qu'on n'utilise pas | [AI data centre 3D tour](https://prompt-motion.com/sayan-shanky-f850d8) | le même fondu de 0,6 s à chaque chapitre (fiche) |

**Bloc BRAND à échanger** (P)

```text
HERO    <la donnée suivie (chiffre, ticket, prix) et sa source>
APP     <3 à 8 nœuds, dans l'ordre où la voix les nomme>
RESULT  <la preuve chiffrée · la phrase à retenir, 15 mots au plus>
SET     <papier, encre, 1 accent · couleur par flux · voix + horodatages · 120 BPM>
```

**Portes spécifiques**
- **Porte 1** : chaque chiffre a sa source ; sans voix finale et horodatages, pas de timeline.
- **Porte 2** : une scène par phrase, départ à phrase − 0,3 s ; unité de chaque graphique écrite.
- **Porte 3** : schéma complet réduit à 400 px (libellés lus) ; écart image/voix mesuré par mot clé.
- **Porte 6** : musique à −5 dB sous la voix, blancs retirés (chapitre 9).

**Pièges du style**
1. **L'image attend la voix** : [Derivative concept explainer](https://prompt-motion.com/linearuncle-5d2bae), 65 % figé (chapitre 9). Contrôle : `freezedetect` (chapitre 11).
2. **Micro-textes** : libellés à 1-1,5 % H jugés trop petits (chapitre 7). Contrôle : planche à 400 px de large.
3. **Pas fixe** : [What is Git explainer](https://prompt-motion.com/yunn260414-60d996) affiche ses fichiers jusqu'à 5,5 s trop tôt (chapitre 9). Contrôle : écarts image/voix.

**HyperFrames (GSAP)**

```js
// Schéma sur la voix : lien → nœud → libellé, puis le paquet
const FPS = 60, BPM = 120, BEAT = 60 / BPM;          // 1 temps = 30 im
const at = (bar, beat = 0) => ((bar - 1) * 4 + beat) * BEAT;
const F = n => n / FPS, LEAD = F(3);
const tl = gsap.timeline({ paused: true });
// t : début du mot clé (TTS) ; liens en <path pathLength="1">
const steps = [{ t: 6.2, n: "#n1" }, { t: 7.4, n: "#n2" }, { t: 8.5, n: "#n3" }];
tl.set(".node, .label, .link", { autoAlpha: 0 }, 0);
steps.forEach(({ t, n }, i) => {
  const t0 = t - LEAD - F(12);                        // nœud posé 3 im avant
  if (i > 0) tl.fromTo(`#l${i}`, { autoAlpha: 1, strokeDashoffset: 1 },
    { strokeDashoffset: 0, duration: F(8), ease: "power2.out", immediateRender: false }, t0 - F(8));
  tl.fromTo(n, { autoAlpha: 1, scale: 0.6 }, { scale: 1, duration: F(12),
      ease: "back.out(1.4)", immediateRender: false }, t0)
    .fromTo(`${n} .label`, { autoAlpha: 0, yPercent: 40 }, { autoAlpha: 1, yPercent: 0,
      duration: F(10), ease: "power3.out", immediateRender: false }, t0 + F(4));
});
// le paquet allume la cible sur le temps
tl.fromTo("#packet", { autoAlpha: 1, left: "38%" }, { left: "62%", duration: F(20),
    ease: "power2.inOut", immediateRender: false }, at(6) - F(20))
  .to("#n3", { backgroundColor: "#C85A40", duration: F(3), ease: "none" }, at(6));
```

**After Effects**
- Voix : LL affiche la Waveform (forme d'onde) ; un marqueur par phrase et mot clé (Layer › Markers › Add Marker (Calque › Marqueurs › Ajouter un marqueur)).
- Liens : Add › Trim Paths (Ajouter › Raccorder les tracés), End 0 → 100 % en 8 im ; nœud : Scale (Échelle) 60 → 100 % en 12 im.
- Musique : Audio Levels (Niveaux audio) baissés de 5 dB sous la voix.

**À cocher**
- [ ] Chiffres sourcés ; échelle à 0 ; unité à l'écran.
- [ ] Une scène par phrase, 0,1-0,5 s avant ; mot clé 2-4 im avant.
- [ ] Libellés ≥ 2,5 % H (planche à 400 px).
- [ ] Gels ≥ 0,4 s ≤ 15 % de la durée.
