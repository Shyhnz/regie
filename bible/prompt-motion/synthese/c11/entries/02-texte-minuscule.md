## Le texte illisible : trop petit, trop pâle ou coupé par le bord

C'est le tic n° 1 du corpus. Un texte qu'on devrait lire fait 1,5 % de la hauteur du cadre (médiane de 131 mesures relevées, 90 % sous 3 % H) : sur un téléphone tenu droit, une vidéo 16:9 fait environ 220 points de haut, soit un texte de 3 points. L'œil essaie, échoue, et la démonstration devient un décor. Son voisin, le mot coupé par le bord, est un rejet explicite de l'utilisateur. Texte minuscule ou pâle : 133 vidéos, dont 99 notées 4 ou 5 (53 %) et 9 des 17 notées 5. Mots coupés et collisions : 41 vidéos, dont 34 notées 4 ou 5.

**Quand s'en servir** : on fixe les tailles plancher et les marges au système de design (étape 6), en % de la hauteur, pas en px. Au découpage (étape 5), chaque démo d'interface reçoit un zoom qui cadre l'information. Au contrôle qualité (étape 9), on vérifie sur des images réduites à la largeur d'un téléphone. Le défaut passe à l'analyse sur grand écran (note moyenne 3,81 avec, 3,93 sans), pas sur téléphone.

![Quatre images d'une page produit violette pâle : le titre « Your agent cleans the list. » reste lisible, le chat de l'agent et ses trois adresses vérifiées ne se lisent pas](ILLUS:texte-minuscule-1)

*[Email verification tool promo](https://prompt-motion.com/kmasiff-cc72cb), 0:12.20 à 0:13.15 : chaque vignette fait 400 px de large, la taille d'une vidéo sur un téléphone. Le titre passe ; le chat, à environ 1,5 % H, tenu 1,38 s sans zoom, non.*

**Symptôme mesuré**

- Ce qui est trop petit, parmi les 133 vidéos : interface ou code (70), légendes et annotations (49), sujet minuscule dans un plan large (14), contraste insuffisant (13).
- La cause la plus fréquente : une interface rendue à 1:1 dans un plan large, jamais recadrée. 20 défauts associent texte minuscule et absence de zoom. Cas extrême : une interface de bureau dans un cadre 9:16, titres à 1,2 % H et corps à 0,5 % H.
- Le temps aggrave la taille : 1,5 à 2,4 % H tenus 0,25 à 0,5 s ne se lisent pas, même sur grand écran.
- Mots coupés, trois mécanismes. La poussée caméra recadre trop serré : « FRAME » devient « FR » pendant 0,3 à 0,45 s dans 3 showreels. Le dépassement élastique sort du cadre : STRETCH à ≥ 145 % de largeur, 2 im. La mise en page n'a pas de marge : 1 à 3 % au bord.

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Étiquettes d'interface | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:06.17 à 0:07.25 | mono à 1,5-2,4 % H, lisibles 0,25 à 0,5 s, dans une vidéo notée 5 |
| Interface de bureau en 9:16 | [PicTwin AI app ad](https://prompt-motion.com/l3d1c-0e35a3), 0:03 à 0:26 | titres d'interface à 1,2 % H, texte courant à 0,5 % H, pendant 23 s |
| Agent qui pilote le produit | [Supademo launch video](https://prompt-motion.com/jhylee95-e1152f), 0:15.47 à 0:20.97 | interface à 1,2-1,8 % H, 6 recadrages en 6 s |
| Texte pâle | [SuperX feature release teaser](https://prompt-motion.com/robj3d3-b18fad), 0:14.10 | URL grise à environ 1 % H ; la plupart des plans sous 25 % de luminance |
| Poussée qui coupe le mot | [Claude motion designer showreel](https://prompt-motion.com/mrtanviir-132457), 0:02.85 à 0:03.35 | « FRAME » réduit à « FR » pendant 0,3 s, au pic de la poussée |
| Dépassement hors cadre | [Motion principles showreel](https://prompt-motion.com/chatgptastra-0d95c7), 0:04.40 | STRETCH passe de 0,05 à ≥ 1,45 de largeur en 6-7 im ; il déborde des deux bords 2 im |
| Titre sans marge | [Celld job ownership explainer](https://prompt-motion.com/0xnfrith-5be616), 0:31.00 à 0:40.10 | « THE OWNER DIES » coupé en « NER DIES » pendant 9 s, marge gauche de 1 à 3 % |

![Six images sur fond rouge : « EVERY FRAME » arrive flou, puis la poussée cadre « EVERY FR » et « ON », le reste du mot sorti par le bord droit](ILLUS:mot-coupe-1)

*[Claude motion designer showreel](https://prompt-motion.com/mrtanviir-132457), 0:02.85 à 0:03.35 : la poussée sur « ON » laisse « FRAME » coupé au bord droit pendant 0,3 s. Même défaut dans [Abstract motion design reel](https://prompt-motion.com/ajith-io-b5626e) et [Shape and dot motion showreel](https://prompt-motion.com/umangratani-57f86a) (0,45 s).*

**Règles**

1. Tailles plancher, en corps de police rendu à l'écran : texte à lire ≥ 3 % H (32 px en 1080p) ; mono qui informe ≥ 2,5 % H ; message ≥ 6 % H en 16:9 (64 px), ≥ 90 px en 9:16 ; nom de la signature ≥ 13 % H. Le guide Otom demande 4 % et 8 % (guide Otom, p. 14) : à garder pour un public qui découvre l'offre.
2. Une interface ne se lit jamais entière : poussée calibrée ×1,35 à ×2,3 en 0,3 à 0,9 s sur l'élément qui porte l'information. Modèle : [UGC ad generator promo](https://prompt-motion.com/twoclipping-6dd14e), 0:03.53, ×2,3, titre de 3 à 7 % H. Un zoom sans cible est un zoom inutile, rejeté lui aussi.
3. Tout le reste est décor assumé : ≤ 14 px, ≤ 25 % d'opacité, immobile (skill motion-premiers-principes). Le HUD de régie entre dans ce cas.
4. Contraste ≥ 4,5:1 pour tout texte à lire ; pas de trait fin sur fond chargé ou en mouvement. Phrases de plus de 8 mots coupées en deux lignes (guide Otom, p. 14).
5. Marges : le cadre final d'une poussée ou d'un dépassement contient la cible entière, à 6 % des bords en 16:9 et 4:5. En 9:16, la Bible corrige le guide (6 % sur chaque bord, p. 7) : texte entre y 360 et y 1420 sur 1920. Au moins 48 px entre un texte et un objet animé.
6. Seul le décor peut déborder (mot géant en contour, mur de mots en filigrane). Un mot héros rogné reste rejeté, même voulu : « well » calé contre le bord dans [Email tool promo reel](https://prompt-motion.com/melvynx-6cde6c), 0:25.00.

**Contrôle avant rendu**

- **Taille** : une image au milieu de chaque tenue de texte et au pic de chaque poussée, puis la même réduite à 400 px de large. Mesurer la hauteur d'une capitale et la diviser par 0,7 pour obtenir le corps. Seuils de la règle 1 ; le texte doit se lire sur l'image réduite.
- **Contraste** : pipette sur le texte et sur le fond, rapport de luminance WCAG ≥ 4,5:1.
- **Interface** : une image par plan de démo. L'élément qui porte l'information occupe assez du cadre pour que son texte dépasse 3 % H.
- **Bords et collisions** : bande de 6 à 8 images autour du pic de chaque poussée, dépassement élastique et entrée latérale. 0 glyphe hors cadre, marge ≥ 6 %, ≥ 48 px entre texte et objet.

```bash
ffmpeg -v error -ss 12.6 -i rendu.mp4 -frames:v 1 -vf scale=400:-1 t12.6-tel.png   # largeur téléphone
ffmpeg -v error -ss 2.85 -t 0.5 -i rendu.mp4 -vf "fps=12,scale=400:-1,tile=6x1" -frames:v 1 pic-2.85.png
```

Dans HyperFrames, la même vérification se fait sur le DOM, avant le rendu (textes à lire marqués `data-lire`, en `display: block`) :

```js
// Contrôle de taille et de marge, à lancer à la main sur la composition (pas au rendu)
const W = 1920, H = 1080, MARGE = 0.06;
const stage = document.querySelector("#stage");               // racine de la composition (à adapter)
function verifier(t) {
  tl.seek(t, false);
  const s = stage.getBoundingClientRect(), k = s.height / H;   // échelle de l'aperçu
  document.querySelectorAll("[data-lire]").forEach(el => {
    const r = el.getBoundingClientRect();                      // inclut les scale() des parents
    if (!r.width || getComputedStyle(el).opacity === "0") return;
    const corps = parseFloat(getComputedStyle(el).fontSize) * (r.height / el.offsetHeight) / k;
    if (corps < 0.03 * H) console.warn(`${t} s, ${el.id} : corps ${(100 * corps / H).toFixed(1)} % H`);
    const x0 = (r.left - s.left) / k, x1 = (r.right - s.left) / k;
    const y0 = (r.top - s.top) / k, y1 = (r.bottom - s.top) / k;
    if (x0 < MARGE * W || x1 > (1 - MARGE) * W || y0 < MARGE * H || y1 > (1 - MARGE) * H)
      console.warn(`${t} s, ${el.id} : hors de la marge de 6 %`);
  });
}
document.fonts.ready.then(() => [3.1, 6.5, 12.6].forEach(verifier)); // tenues et pics de poussée
```

Dans After Effects, afficher les repères Title/Action Safe (marges de sécurité titre/action), réglés à 6 % dans Preferences › Grids & Guides (Préférences › Grilles et repères), et parcourir chaque pic de poussée image par image.

Renvois : *Formats et zones sûres : vertical, carré, cinémascope* et *L'habillage persistant : HUD, chapitres et gabarit fixe* au chapitre 2, *Le casting typographique : deux ou trois voix à rôles fixes* au chapitre 3, *La poussée vers le sujet : lente, calibrée ou en punch sur le temps* au chapitre 5, *La maquette d'appareil et l'interface reconstruite* au chapitre 7.

**À cocher**

- [ ] Aucun texte à lire sous 3 % H ; message ≥ 6 % H en 16:9 (≥ 90 px en 9:16)
- [ ] Chaque démo d'interface a un zoom de ×1,35 à ×2,3 qui cadre l'information
- [ ] Contraste ≥ 4,5:1 sur tout texte à lire
- [ ] 0 glyphe coupé au pic des poussées et des dépassements ; marge ≥ 6 % (zone sûre en 9:16)
- [ ] Images réduites à 400 px relues : tout ce qui doit être lu se lit
