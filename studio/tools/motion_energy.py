#!/usr/bin/env python3
"""Énergie de mouvement d'un rendu : le « mou » en chiffres.

Usage : python3 -I motion_energy.py film.mp4 [--bpm 120] [--fps 60]

Mesure la différence moyenne de luminance entre deux images successives (160×90, flou σ 2 :
le grain animé ne compte pas, seuls les vrais gestes comptent).
Rapporte : part d'images quasi immobiles, demi-temps calmes, événements par seconde,
énergie par seconde, et la liste des demi-temps calmes (à corriger en priorité).
Seuils (refonte « punch », 21 oct. 2026) : immobiles ≤ 15 %, demi-temps calmes ≤ 10 %,
événements ≥ 3 par seconde, aucune seconde sous 0,5 d'énergie hors tenue de fin.
"""
import re, subprocess, sys, tempfile, os

STILL, CALM, PEAK = 0.15, 0.4, 1.5


def main():
    args = sys.argv[1:]
    if not args:
        sys.exit(__doc__)
    src = args[0]
    bpm = float(args[args.index('--bpm') + 1]) if '--bpm' in args else 120.0
    fps = int(args[args.index('--fps') + 1]) if '--fps' in args else 60
    with tempfile.TemporaryDirectory() as d:
        out = os.path.join(d, 'm.txt')
        subprocess.run(['ffmpeg', '-v', 'error', '-i', src, '-vf',
                        f'scale=160:90,gblur=sigma=2,tblend=all_mode=difference,signalstats,metadata=print:key=lavfi.signalstats.YAVG:file={out}',
                        '-f', 'null', '-'], check=True)
        v = [float(x) for x in re.findall(r'YAVG=([\d.]+)', open(out).read())]
    n = len(v)
    half = round(fps * 60 / bpm / 2)
    halves = [sum(v[i:i + half]) / len(v[i:i + half]) for i in range(0, n, half)]
    calm = [i for i, h in enumerate(halves) if h < CALM]
    peaks = sum(1 for i in range(1, n - 1) if v[i] > PEAK and v[i] >= v[i - 1] and v[i] >= v[i + 1])
    dur = n / fps
    print(f'{os.path.basename(src)} : {n} images')
    print(f'  quasi immobiles : {sum(1 for x in v if x < STILL) / n:.0%}   (cible ≤ 15 %)')
    print(f'  demi-temps calmes : {len(calm)}/{len(halves)} = {len(calm) / len(halves):.0%}   (cible ≤ 10 %)')
    print(f'  événements : {peaks} = {peaks / dur:.1f}/s   (cible ≥ 3/s)')
    print(f'  énergie moyenne : {sum(v) / n:.2f}')
    print('  énergie par seconde : ' + ' '.join(f'{sum(v[i:i + fps]) / fps:.1f}' for i in range(0, n, fps)))
    if calm:
        print('  demi-temps calmes (s) : ' + ' '.join(f'{i * half / fps:.1f}' for i in calm))


if __name__ == '__main__':
    main()
