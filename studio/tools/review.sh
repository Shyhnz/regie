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
