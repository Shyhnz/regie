## Les planches et les mesures (contact sheets, strips, audio measurement)

On regarde avant de dépenser (P : « fait regarder Opus avant de dépenser du GPU ; l'essentiel du polissage vient de cette ligne »). Ordre : images témoins d'un morceau, puis planche du premier montage et 18 images à demi-résolution, puis rendu complet ; on ne re-rend que les plages fautives (P). Pour le son, Claude n'entend pas : il mesure le fichier décodé (F). Deux scripts du studio font ces contrôles.

**Quand s'en servir** : `review.sh` aux portes 4 et 5 et à chaque tour ; `audio_check.py` en phase 8, puis sur le MP4 final.

**`tools/review.sh`** : planche à 4 images/s, planche téléphone à 360 px, 18 témoins, une bande de 8 images par couture, détection des images noires et des gels.

```sh
#!/bin/zsh
# review.sh — planches de revue d'un rendu (rôle : critique).
# usage : tools/review.sh <video.mp4> <dossier de sortie> [instants des coutures en secondes, séparés par des virgules]
# Produit : planche 4 images/s, planche téléphone (360 px), 18 images à demi-résolution, une bande de 8 images par couture.
set -e
V="$1"; OUT="$2"; SEAMS="$3"
mkdir -p "$OUT"
FPS=$(ffprobe -v error -select_streams v:0 -show_entries stream=r_frame_rate -of csv=p=0 "$V" | awk -F/ '{print $1/$2}')
DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$V")
NB=$(ffprobe -v error -count_frames -select_streams v:0 -show_entries stream=nb_read_frames -of csv=p=0 "$V")
echo "fps=$FPS durée=$DUR images=$NB (attendu $(printf '%.0f' $(( DUR * FPS ))))"

# Planche à 4 images/s, 8 colonnes
ffmpeg -v error -y -i "$V" -vf "fps=4,scale=320:-2,tile=8x$(( ( $(printf '%.0f' $(( DUR * 4 ))) + 7 ) / 8 ))" -frames:v 1 "$OUT/planche-4ips.png"
# Planche téléphone : une image par seconde à 360 px
ffmpeg -v error -y -i "$V" -vf "fps=1,scale=360:-2,tile=5x$(( ( $(printf '%.0f' $DUR) + 4 ) / 5 ))" -frames:v 1 "$OUT/planche-telephone.png"
# 18 images témoins à demi-résolution, régulièrement réparties (prompt pack « No After Effects »)
for i in $(seq 0 17); do
  T=$(( DUR * (i + 0.5) / 18 ))
  ffmpeg -v error -y -ss "$T" -i "$V" -frames:v 1 -vf "scale=iw/2:-2" "$OUT/temoin-$(printf '%02d' $i).png"
done
ffmpeg -v error -y -pattern_type glob -i "$OUT/temoin-*.png" -vf "scale=480:-2,tile=6x3" -frames:v 1 "$OUT/planche-18.png"
# Bandes de 8 images consécutives autour de chaque couture
if [ -n "$SEAMS" ]; then
  for S in ${(s:,:)SEAMS}; do
    F=$(printf '%.0f' $(( S * FPS )))
    ffmpeg -v error -y -i "$V" -vf "select='between(n\,$(( F - 4 ))\,$(( F + 3 )))',scale=480:-2,tile=8x1" -fps_mode vfr -frames:v 1 "$OUT/couture-f$F.png"
  done
fi
# Images noires et gels. Attention : freezedetect (n=0.003) compte une poussée lente de 2-3 % comme un gel ;
# une tenue voulue avec poussée (60-96 im, Bible) est permise, regarder la planche avant de corriger.
ffmpeg -v info -i "$V" -vf "blackdetect=d=0.01:pix_th=0.05,freezedetect=n=0.003:d=0.5" -an -f null - 2>&1 | grep -E "black_start|freeze_start|freeze_duration" > "$OUT/detect.txt" || true
echo "planches dans $OUT ; détections : $(wc -l < "$OUT/detect.txt") ligne(s) dans detect.txt"
```

**`tools/audio_check.py`** : sonie intégrée et crête vraie, sonie par demi-seconde, part sous 60 Hz et bande du téléphone, décalage et émergence de chaque repère de `timeline.js`. Avec `--stems coups.wav lit.wav`, l'émergence se mesure coups contre lit, sur 30 ms (sur 60 ms, un tic semblait trop faible et on l'aurait poussé jusqu'à l'écrêtage : appris sur le film test).

```python
"""audio_check.py — mesurer le son au lieu de l'écouter (Motion Lab, prompt pack « No After Effects »).

usage : python audio_check.py <fichier .wav ou .mp4> <timeline.js> [--stems coups.wav lit.wav]
Lit les repères son de timeline.js (via node), décode l'audio avec ffmpeg et rapporte :
- sonie intégrée (LUFS) et crête vraie (dBTP) par ffmpeg ebur128 ;
- sonie par demi-seconde ;
- part de l'énergie sous 60 Hz et dans la bande du téléphone (200 Hz-6 kHz) ;
- pour chaque repère : décalage de l'attaque (ms et images) et émergence au-dessus du lit (dB).
Seuils : attaque à ±1 image du repère, coups 3 à 6 dB au-dessus du lit, -14 ±1 LUFS, crête ≤ -1 dBTP.
"""
import json, subprocess, sys, re
import numpy as np

SR = 48000


def decode(path):
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", path, "-ac", "1", "-ar", str(SR), "-f", "f32le", "-"],
                         capture_output=True, check=True).stdout
    return np.frombuffer(raw, dtype=np.float32)


def ebur128(path):
    err = subprocess.run(["ffmpeg", "-nostats", "-i", path, "-af", "ebur128=peak=true", "-f", "null", "-"],
                         capture_output=True, text=True).stderr
    summ = err[err.rfind("Summary:"):]
    i = re.search(r"I:\s+(-?[\d.]+) LUFS", summ)
    p = re.search(r"Peak:\s+(-?[\d.]+) dBFS", summ)
    return (float(i.group(1)) if i else None, float(p.group(1)) if p else None)


def db(x):
    return 20 * np.log10(max(float(x), 1e-9))


def main():
    path, tl = sys.argv[1], sys.argv[2]
    T = json.loads(subprocess.run(["node", "-e",
        f"const fs=require('fs'),vm=require('vm'),c={{}};vm.runInNewContext(fs.readFileSync({json.dumps(tl)},'utf8'),c);const T=c.T;console.log(JSON.stringify({{fps:T.FPS,cues:T.CUES.map(x=>({{...x,t:T.cueTime(x)}}))}}))"],
        capture_output=True, text=True, check=True).stdout)
    fps = T["fps"]
    x = decode(path)
    lufs, tp = ebur128(path)
    print(f"Sonie intégrée {lufs} LUFS (cible -14 ±1) · crête vraie {tp} dBTP (cible ≤ -1)")

    half = SR // 2
    segs = [db(np.sqrt(np.mean(x[i:i + half] ** 2))) for i in range(0, len(x) - half + 1, half)]
    print("Sonie par demi-seconde (dB RMS) : " + " ".join(f"{v:.0f}" for v in segs))

    spec = np.abs(np.fft.rfft(x)) ** 2
    freqs = np.fft.rfftfreq(len(x), 1 / SR)
    tot = spec.sum() + 1e-12
    print(f"Énergie sous 60 Hz : {100 * spec[freqs < 60].sum() / tot:.1f} % · bande téléphone 200 Hz-6 kHz : "
          f"{100 * spec[(freqs >= 200) & (freqs <= 6000)].sum() / tot:.1f} %")

    # Avec --stems <coups.wav> <lit.wav> : attaque mesurée sur les coups seuls, émergence = coups contre lit (Motion Lab).
    fx = bed = None
    if "--stems" in sys.argv:
        k = sys.argv.index("--stems"); fx, bed = decode(sys.argv[k + 1]), decode(sys.argv[k + 2])
    env = np.abs(fx if fx is not None else x)
    bad = 0
    print("Repères : événement · attendu (s) · décalage de la crête (ms / im) · émergence (dB)")
    for c in T["cues"]:
        t = c["t"]
        a, b = int((t - 0.03) * SR), int((t + 0.06) * SR)
        if a < 0 or b > len(x):
            continue
        k = a + int(np.argmax(env[a:b]))
        off = (k / SR - t) * 1000
        if fx is not None:
            hit = np.sqrt(np.mean(fx[int(t * SR):int((t + 0.03) * SR)] ** 2))
            bd = np.sqrt(np.mean(bed[int(t * SR):int((t + 0.03) * SR)] ** 2))
            em = db(hit) - db(bd) if bd > 1e-3 else float("nan")
        else:
            hit = np.sqrt(np.mean(x[int(t * SR):int((t + 0.06) * SR)] ** 2))
            bd = np.sqrt(np.mean(x[max(0, int((t - 0.25) * SR)):int((t - 0.05) * SR)] ** 2))
            em = db(hit) - db(bd)
        flag = "" if abs(off) <= 1000 / fps and (em != em or 2.5 <= em <= 7) else "  ← à revoir"  # nan : lit muet (intro, vide)
        bad += bool(flag)
        print(f"  {c['event']:<22} {t:7.3f}  {off:+6.1f} ms / {off * fps / 1000:+.2f} im  {em:+5.1f} dB{flag}")
    print(f"{bad} repère(s) à revoir sur {len(T['cues'])}")


if __name__ == "__main__":
    main()
```

**Les seuils** : attaque à ±1 image de son repère, le son 1 image après l'image (F ; Bible : écart constant de 1 à 3 im) ; coups 3 à 6 dB au-dessus du lit (F) ; −14 ±1 LUFS ; crête vraie ≤ −1 dBTP après encodage AAC (F) ; nombre d'images = durée × 60 ; aucune image noire isolée ; aucun gel au-delà d'un temps hors tenue voulue (chapitre 12, *Étape 9*).

**À cocher**

- [ ] Planches regardées en entier, dont la planche téléphone.
- [ ] Une bande par couture, sans image ratée.
- [ ] `audio_check.py` : 0 repère à revoir, sonie et crête dans la cible.
