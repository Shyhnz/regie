## Blender pour les plans 3D lourds (Blender CLI, Cycles, image sequence, timeline bridge)

HyperFrames reste le moteur du film ; Blender ne rend que les plans que le navigateur rend mal, en suite d'images que HyperFrames habille de texte, de logo et de son. Une seule horloge sert aux deux : `timeline.js` (B/05, P). Blender n'apporte que quatre choses : le transport de lumière (verre, eau, métal, caustiques, volumes), les simulations (tissu, liquide, fumée, avalanches d'objets), un vrai flou de mouvement avec une vraie profondeur de champ, et les assets 3D réels. Le texte et l'interface restent en HTML, ou en Three.js quand ils vivent dans un espace 3D (ZLHad/OpenVideoHarness, hraness/slopcamera). Tout plan Blender doit répondre en une phrase à « pourquoi ce plan exige Blender » ; sans réponse, il passe en Three.js ou en 2D.

**Quand s'en servir** : seulement quand l'interrupteur « Blender » du film est activé dans la Régie. On marque les plans au découpage (phase 4, « · Blender » dans la colonne Plan de SHOTLIST.md), on les essaie au storyboard (une image à demi-résolution), on les construit à la phase 5. En promo, 1 à 3 plans héros ; en short, 1 ou 2 au plus.

**Choisir le moteur du plan**

| Le plan montre | Moteur |
| --- | --- |
| Verre, liquide clair, métal brossé ou chrome qui reflète un décor, lumière volumétrique | Blender (Cycles) |
| Tissu, fluide, fumée, fracture, avalanche de milliers d'objets, corps mou qui se touche | Blender (simulation bakée) |
| Macro avec vraie profondeur de champ, maquette, miniature | Blender |
| Personnage en volume, riggé | Blender (B/06) ; en 2D si le style est plat (EGSECDA) |
| Objet en primitives biseautées, lumière simple, caméra qui traverse un espace d'objets | Three.js dans la composition (F) |
| Titres, interface, chiffres, sous-titres | HTML, toujours, même posés sur un plan Blender |
| Typo cinétique pure, objet seul sans décor | 2D : une poussée suffit (c05) |

Refuser : la 3D générique (première cause de casse de style dans les vidéos notées 4-5, c01), une orbite de 10 s sans événement (B/05), un produit sans vrai modèle (C/14, W). Si l'utilisateur trouve le plan « cheap », changer le concept avant l'outil (ZLHad).

**Le dossier du film**

```text
blender/
  build.py        construit scene.blend depuis build/timeline.json (rejouable, aucune action à la main)
  gpu.py          choisit Metal à chaque rendu (--factory-startup l'efface)
  preview.py      aperçu : 50 %, 40 échantillons
  scene.blend     produit par build.py, jamais retouché à la main
build/timeline.json   export de timeline.js, refait avant chaque build
renders/blender/<plan>/f_0000.png …   suite d'images du plan
assets/3d/<plan>.mp4 (plein cadre) ou <plan>.webm (avec alpha)   ce que la composition lit
```

**Le pont timeline.js → Python**

Les fonctions ne se sérialisent pas : on exporte les valeurs calculées, avec l'image de chaque événement, avant chaque build.

```sh
mkdir -p build && node -e "const T=require('./timeline.js');const f=T.frame;process.stdout.write(JSON.stringify({FPS:T.FPS,BPM:T.BPM,BEAT:T.BEAT,DURATION:T.DURATION,FRAMES:f(T.DURATION),LAYOUT:T.LAYOUT,EVENTS:T.EVENTS.map((e)=>({...e,frame:f(e.t)})),SECTIONS:T.SECTIONS},null,1))" > build/timeline.json
```

```python
import json, sys
T = json.load(open(sys.argv[sys.argv.index('--') + 1]))
FPS = T['FPS']
EV = {e['id']: e['frame'] for e in T['EVENTS']}   # image globale de chaque événement
```

**Construire la scène (build.py)**

1. `scene.frame_start = 0` : l'image n de Blender est l'image n de `timeline.js` et de HyperFrames (Blender compte depuis 1 par défaut, ffmpeg aussi).
2. Cadence et taille du film : `render.fps = T['FPS']` (60 au studio), 1920×1080 ou le format de la déclinaison. Rendre à une autre cadence fait saccader le plan contre l'HTML : si le budget ne tient pas, le dire dans le handoff.
3. Unités déclarées une fois (1 unité = 1 m) ; cotes du fabricant notées avec leur source, aucune inventée (B/05, ww-w-ai/super-video-agent).
4. Mouvement : pour chaque image n, t = n / FPS, valeur calculée par les mêmes courbes que `motion.js` (ressorts `spring(t, ζ, f)` en formule fermée), puis `keyframe_insert(frame=n)` en interpolation linéaire. Jamais de handler `frame_change` : le flou de mouvement interpole les clés (ZLHad).
5. Caméra calée sur les temps forts : un événement, un geste ; jamais garée, orbite de 45-60° au plus, poussée expo-out de 0,8 s sur un temps (B/05) ; coup de vitesse en e^(−Δ/6,5) sur le temps fort, creux 5 images avant (EGSECDA). Une orbite seule ne compte pas comme une animation (sunxiayi).
6. Physique : formule fermée d'abord (rebond, ressort, engrenage) ; sinon simuler une fois puis `bpy.ops.rigidbody.bake_to_keyframes` et supprimer le monde physique ; tissu, fluide et fumée en cache. **Jamais de simulation calculée pendant le rendu** (ZLHad).
7. Hasard à graine fixe ; variation par instance (Object Info › Random) de ±3-5 % sur rugosité et teinte contre l'effet jouet (sunxiayi).
8. Le code bpy reste dans `blender/` ; pas de réseau, pas d'écriture hors du dossier du film. Ce qu'on essaie dans Blender ouvert (MCP) finit dans `build.py`.

**Rendre**

```sh
B=/Applications/Blender.app/Contents/MacOS/Blender
# 1. construire
"$B" -b --factory-startup -noaudio --python-exit-code 1 -P blender/build.py -- build/timeline.json blender/scene.blend
# 2. essai : 18 images à 50 % réparties sur le plan, lues en planche avant de dépenser du GPU
"$B" -b blender/scene.blend -noaudio --python-exit-code 1 -P blender/gpu.py -P blender/preview.py -o //../renders/blender/<plan>-essai/f_#### -F PNG -x 1 -f 0,12,24,…
# 3. rendu par morceaux de 30 images, un Blender neuf par morceau, images déjà faites sautées
"$B" -b blender/scene.blend -noaudio --python-exit-code 1 -P blender/gpu.py -o //../renders/blender/<plan>/f_#### -F PNG -x 1 -s 0 -e 29 -a
```

- `--python-exit-code 1` toujours : sans lui, une erreur Python sort avec le code 0 (timscheuerai/launch-video-kit). `-f` et `-a` en dernier, sinon les options suivantes sont ignorées en silence. Jamais `-y` (exécute les scripts du .blend).
- Budget avant le rendu complet : rendre 5 images du plan le plus lourd, budget = images × médiane × 1,5, écrit dans le handoff ; s'arrêter au-delà (ZLHad). Repère mesuré ici (`videos/blender-softness`, 18 oct.) : 1080×1920 à 60 fps, Cycles 48 échantillons débruités sur Metal, **médiane 5,5 s par image, première image 86 s** (compilation des noyaux Metal), 210 images en 21 min.
- Long rendu : tâche de fond (`run_in_background`) avec `caffeinate -i`, un morceau après l'autre, reprise là où il s'est arrêté ; ne re-rendre que les plages fautives (P). Un chien de garde trop court tue la première image.

**Réglages**

| Réglage | Valeur | Pourquoi |
| --- | --- | --- |
| Moteur | Cycles, en aperçu comme en final | La réfraction EEVEE casse le verre clair en bandes noires (edenfunf/reelmimic). EEVEE seulement pour des aperçus sans verre. |
| Périphérique | Metal seul, jamais Metal + CPU | Mélanger change l'image d'un rendu à l'autre (ZLHad). |
| Échantillons | 40 en aperçu ; 48-64 débruités en final, 96 en gros plan | P, softness, ZLHad. Time limit 0, adaptatif coupé, graine fixe : rendu déterministe. |
| Débruitage | OpenImageDenoise en final | Vérifier le scintillement sur 8 images de suite ; si les petits points deviennent des taches, monter les échantillons et le couper. |
| `use_persistent_data` | coupé | Un objet est sorti noir sur 18 images, pour aucun gain de temps (ZLHad). |
| View Transform | Standard (aplats, toon, couleurs de l'HTML) ; Khronos PBR Neutral (produit aux couleurs de marque) ; AgX seulement pour un rendu cinéma sans couleur imposée | AgX assombrit un quasi-blanc de 18 % et vire un rouge émissif au rose. Hexa de marque converti en linéaire. |
| Fond | `film_transparent` (+ `film_transparent_glass` pour le verre) si le plan se pose sur l'HTML ; opaque sinon | Un PNG RGBA plein cadre opaque pèse 2 Mo l'image pour rien (softness). |
| Flou de mouvement | shutter 0,5 | L'obturateur 180° de la Bible (c06). |
| Profondeur de champ | `focus_object` sur un empty, f/4,5, 0 lamelle ; miniature : 54 mm, f/4,5, point à 30 cm | ZLHad. |
| Bloom (Glare) | selon le guide de style ; interdit en produit 3D studio (B/05) | Seulement au-dessus de 1,05 quand il est permis (EGSECDA). |

**Matières, lumière, caméra (points de départ, à juger sur l'image)**

- Verre de marque : transmission 1, rugosité 0,04, IOR 1,47 ; au-dessus de 0,1 il devient une carte grise, le givre se fait en HTML (timscheuerai). Il se lit au décalage du fond et au reflet des bords : il lui faut quelque chose derrière.
- Chrome : métal 1, rugosité 0,05 ; sans rien à refléter il se lit comme du plastique : studio à 0,1 de gris, une bande blanche sur 140°, une ligne d'horizon fine (B/05).
- Toon : Diffuse → Shader to RGB → ColorRamp constant 3 bandes → Emission ; soleil force π, angle 0 ; View Transform Standard (EGSECDA). Clay : Subsurface 0,3-0,5, rugosité 0,3, rim colorée.
- Lumières : les trois points de F (B/05) sont en unités Three.js ; départ Blender = une AREA de taille 2, 600 W, à 3-4 m, #FFF4E5, puis calibrer à l'image. Un balayage de lumière par plan héros, énergie 6-10 (edenfunf). Cacher les lampes des reflets du verre : Object › Visibility › Ray Visibility › Glossy (B/05, piège 5).
- Volume : brume dans une boîte finie, densité 0,004-0,006 ; jamais d'émission volumique collée à la caméra.

**Entrer dans la composition HyperFrames**

```sh
# plein cadre, sans alpha : H.264 haute qualité, BT.709 explicite (sinon BT.601, 21 niveaux d'écart)
ffmpeg -framerate 60 -start_number 0 -i renders/blender/<plan>/f_%04d.png -vf "scale=out_color_matrix=bt709:out_range=tv,format=yuv420p,setparams=colorspace=bt709:color_primaries=bt709:color_trc=bt709:range=tv" -c:v libx264 -crf 14 -preset slow assets/3d/<plan>.mp4
# avec alpha (objet posé sur l'HTML) : WebM VP9, lu en transparence par Chrome
ffmpeg -framerate 60 -start_number 0 -i renders/blender/<plan>/f_%04d.png -c:v libvpx-vp9 -pix_fmt yuva420p -auto-alt-ref 0 -b:v 0 -crf 18 assets/3d/<plan>.webm
```

Dans la composition, le plan Blender est un `<video>` comme les autres : avec un `id`, sans `crossorigin`, sans ancêtre qui porte `data-start`, calé sur l'image de début du plan dans `timeline.js` (règles HyperFrames). Le texte se pose en HTML par-dessus. Relais Blender → Three.js dans un même plan : fondu de 0,6 s, Blender rendu 0,2 s au-delà ; axes (x, y, z) Blender = (x, z, −y) Three.js (ZLHad). Le WebM alpha dans un rendu HyperFrames est à vérifier au premier film : si les bords sortent sombres, l'alpha a été lu prémultiplié.

**Le MCP Blender** (installé le 14 oct.) : utile pour construire en regardant (Blender ouvert, Preferences › System › Allow Online Access, add-on sur le port 9876) et pour chercher dans la documentation de l'API ; ses outils `_for_cli` marchent Blender fermé. Le résultat de `execute_blender_code` doit être un dict. Les longs rendus passent par la ligne de commande, jamais par le MCP, et tout geste utile finit dans `build.py`.

**Les pannes et leur ligne**

| Symptôme | Correctif |
| --- | --- |
| Erreur Python, mais Blender sort avec le code 0 | `--python-exit-code 1` sur chaque appel. |
| Options ignorées en silence | `-f` / `-a` en dernier. |
| Rendu sur CPU, 10 fois plus lent | `-P blender/gpu.py` à chaque rendu : `--factory-startup` efface le choix Metal. |
| Décalage d'une image avec l'HTML | `frame_start = 0` et `-start_number 0` à l'encodage. |
| Objet noir sur une plage d'images | `use_persistent_data` coupé ; pas de verre empilé (rebonds de transmission épuisés). |
| Blocs blancs dans le verre | Lampes cachées des rayons Glossy. |
| Couleur de marque fausse | View Transform Standard ou PBR Neutral, hexa en linéaire ; contrôle à ≤ 3 niveaux de l'HTML. |
| Bords sombres autour d'un objet détouré | Alpha droit (PNG) lu comme prémultiplié : `overlay=format=auto`. |
| Couleurs ternes dans le MP4 | BT.709 explicite à l'encodage. |
| Première image très longue | Compilation Metal (86 s mesurées) : ne pas la compter dans le budget, ne pas tuer le rendu. |

**À cocher**

- [ ] Chaque plan Blender a sa phrase « pourquoi Blender » dans SHOTLIST.md.
- [ ] `build/timeline.json` refait avant le build ; `scene.blend` produit par `build.py` seul.
- [ ] 18 images à 50 % regardées en planche avant le rendu complet ; budget écrit dans le handoff.
- [ ] Nombre d'images = durée du plan × FPS ; aucune image noire, luminance moyenne sans chute.
- [ ] Pastille de couleur de marque à ≤ 3 niveaux de l'HTML.
- [ ] Bords alpha vérifiés sur fond noir, blanc et couleur de marque (WebM).
- [ ] Le plan joue dans la composition à sa place, ses coutures regardées image par image.

Sources : P = Prompt Pack « No After Effects » ; F = @flxrnc ; W = @0xwhrrari ; B/05, B/06, C/14 de cette méthode ; dépôts open source cités entre parenthèses (règles complètes dans `awesome-video-skills/apports/c05.md`, chercher « Blender ») ; mesures : `videos/blender-softness`.
