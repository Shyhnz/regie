## Le prompt son (picture-locked sound from the timeline)

Le son se fabrique par un prompt à part, qui lit le même `timeline.js` que l'image (P, F). Le film doit d'abord marcher muet : le fil joue sans le son (F). Puis chaque coup tombe une image après son image, parce que la lumière arrive avant le son (F). Le contrôle n'est pas l'écoute mais la mesure : sonie par demi-seconde, attaques, émergence, bandes (P, F). Test final : fermer les yeux ; un son sans forme sans l'image n'est pas fini (W).

**Quand s'en servir** : en phase 8, une fois l'image verrouillée ; la grille, la carte des sections et les repères sont décidés dès la phase 4 (chapitre 12, *Étape 4*).

```text
Ajoute le son. Lis timeline.js : chaque repère son tombe 1 image après son événement image.
[Synthétise tout en code (numpy) : pas d'échantillons, pas de voix. / Piste fournie assets/audio/… : mesure son BPM et son premier temps dans le fichier, recoupe-la sur des mesures entières.]
Musique : [tempo, tonalité, sections : intro légère, drop sur la révélation, quasi-silence 0,2-0,7 s avant le logo, accord final qui se pose].
Bruitages : [un par repère : clic, whoosh, impact, tic…].
48 kHz stéréo, −14 LUFS intégrés, crête vraie ≤ −1 dBTP après encodage AAC.
Mesure, n'écoute pas : lance tools/audio_check.py (attaque de chaque repère à l'échantillon, coups 3-6 dB au-dessus du lit, sonie par demi-seconde, part sous 60 Hz, bande 200 Hz-6 kHz). Corrige jusqu'à ce que les mesures passent.
Multiplexe dans le MP4 et revérifie sur le fichier décodé.
```

**Un exemple qui marche** : `tools/sound-exemple.py` (film test NuOps 15 s) compose la musique (128 BPM, la mineur, sections de `timeline.js`) et les bruitages ; il règle le gain de chaque coup en boucle fermée, à 4,5 dB au-dessus du lit (6 dB pour les temps forts), passe un limiteur à −2,2 dB et normalise à −14 LUFS. Résultat mesuré : 35 repères sur 36 dans la cible ; sur le MP4 web décodé, −13,9 LUFS, crête vraie −1,3 dBTP, 30 repères sur 35 à ±1 image.

**Ce que montrent les sources** : la bande-son du film « No After Effects » n'a demandé aucune relance, parce que sa sonie par demi-seconde montrait le drop pile sur l'explosion de l'image (P). Celles du Motion Lab en ont demandé 5 et 12, toutes tirées de mesures : 80 % de l'énergie sous 60 Hz, inaudible au téléphone ; coups seulement 0,5 à 1,6 dB au-dessus du lit ; crête remontée par l'AAC (F).

**À cocher**

- [ ] Image validée muette avant le son.
- [ ] Repères lus dans `timeline.js`, 1 image après l'image.
- [ ] Mesures passées sur le fichier décodé, puis écoute au casque et au téléphone.
