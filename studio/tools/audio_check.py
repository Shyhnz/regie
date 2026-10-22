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
