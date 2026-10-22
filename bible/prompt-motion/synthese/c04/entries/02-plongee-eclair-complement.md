**Compléments tirés des 233 vidéos**

| Variante | Vidéo et minutage | Mesure clé |
| --- | --- | --- |
| Plongée dans la contreforme du O | [3D motion design showreel](https://prompt-motion.com/sahildesigner23-ee3155), 0:05.25 | ×2,3 puis traversée en 13 im (power1.in), 83 % du trajet dans le dernier tiers, flou et copies fantômes ; atterrit 2 im avant le 1er temps de mesure (étude 60 fps) |
| La contreforme montre déjà le plan B | [Code-only motion design reel](https://prompt-motion.com/johnsavage-ai-b091c0), 0:03.18 | la scène 3D suivante apparaît dans le O une double-croche avant le zoom ; zoom lancé sur le temps 4, ease-in exponentiel |
| Balle qui fonce vers la caméra et devient le fond | [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a), 0:01.57 | 66 → 826 px en 19 im, profondeur (1/échelle) linéaire, −0,052 par image ; aplat orange au 1er temps de la mesure 2, +0,5 im (étude 60 fps) |
| Balle en perspective accélérée | [Claude motion design reel](https://prompt-motion.com/tequilafunks-97f6c9), 0:01.70 | 1,9 → 204 % H en 11 im (power3.in), ×1,35 par image ; disque à halo sur le temps, plein cadre sur l'attaque (étude 60 fps, 30 fps) |
| Plongée dans le point final | [Kinetic type self-portrait](https://prompt-motion.com/souravbhar871-61f424), 0:00.98 | le point reste fixe à (68 %, 72 %) pendant que tout grossit, ×1,1 → ×3 en 5 im ; plein cadre en 12 im, sans flou |
| Fouetté puis plongée dans le point | [Easing and morphing showreel](https://prompt-motion.com/roundtablespace-d3a1be), 0:12.92 | le mot file à gauche ×3,5 avec flou horizontal ; le point passe de 5,2 à 83 % H, plein en 12 im (power4.in), 0,5 im avant le temps (étude 60 fps) |
| Sphère qui s'assombrit en route | [Claude motion design showreel](https://prompt-motion.com/sudo-kiran-49176d), 0:07.77 | 68 → 204 % H en 12 im (power3.in), orange → bordeaux → noir ; noir plein 2 im avant le temps, nouvelle sphère sur le temps (étude 60 fps) |
| Barre de progression qui devient l'écran | [Flowdrive motion showreel](https://prompt-motion.com/manuelogomigo-f33ca9), 0:03.48 | pilule de 3 % H → plein cadre en 16 im, surtout en hauteur (ease-in), bords flous ; 5 im d'aplat avant le vignettage |
| Écran du décor, aller et retour | [Recursion explained in genres](https://prompt-motion.com/emollick-8661a8), 0:04.77 | lecteur de 35 % L au plein cadre en 11 im, petits-grands-petits pas (ease-in-out), aucun flou ; retour symétrique en ≈ 10 im à 0:52.77 |
| Disque du logo qui devient la toile | [Dub promo video](https://prompt-motion.com/steventey-0d20e4), 0:12.50 | disque blanc de 0 à 85 % L en 5 im (sine.out) après 1 im gris ; la marque se pose ensuite 38 → 19 % H en expo.out (étude 60 fps) |

**Règles nouvelles ou corrigées**

1. Deux courbes selon ce qu'on traverse. Un objet qui vient vers la caméra (balle, point, glyphe) accélère : power3.in à power4.in, ×1,3 à ×1,8 par image à la fin. Un écran ou une tuile d'interface garde l'ease-in-out du pilote, sans flou.
2. Pour une vraie perspective, animer la profondeur, pas l'échelle : z linéaire de 1 à 0,08, échelle = 1/z (rms 0,9 % sur la balle de [Swiss-style motion showreel](https://prompt-motion.com/levabashidze-2d713a)). La croissance devient exponentielle d'elle-même.
3. Le plein cadre tombe sur le temps fort ou 0,5 à 2 im avant ; le plan B frappe sur cet aplat. L'aplat ne tient que 1 à 5 im, sinon il devient un temps mort.
4. Annoncer la sortie : la couleur de l'objet devient le fond suivant, et la contreforme montre le plan B quelques images avant la traversée. Si l'objet change de couleur, il le fait pendant la plongée, pas après.
