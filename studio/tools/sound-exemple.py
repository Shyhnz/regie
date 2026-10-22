"""sound.py — la bande-son composée en code, lue dans timeline.js (même horloge que l'image).

usage : python sound.py <timeline.js> <sortie.wav> [gain_sfx_db] [gain_global_db]
Musique : 128 BPM, la mineur (Am F C G), sections de timeline.js (intro, montée, vide, drop, final).
Bruitages : un par repère de timeline.js, attaque calée à l'échantillon sur l'instant du repère (1 image après l'image).
Aucun échantillon externe, hasard à graine fixe : deux rendus donnent le même fichier.
"""
import json, subprocess, sys, wave
import numpy as np

SR = 48000
rng = np.random.default_rng(42)


def load(tl):
    # vm plutôt que require : marche aussi dans un projet en "type": "module"
    js = ("const fs=require('fs'),vm=require('vm'),c={};vm.runInNewContext(fs.readFileSync(%s,'utf8'),c);const T=c.T;"
          "console.log(JSON.stringify({BPM:T.BPM,D:T.DURATION,BEAT:T.BEAT,"
          "S:T.SECTIONS,cues:T.CUES.map(x=>({...x,t:T.cueTime(x)}))}))") % json.dumps(tl)
    return json.loads(subprocess.run(["node", "-e", js], capture_output=True, text=True, check=True).stdout)


def env(n, a, d):  # attaque linéaire de a échantillons puis décroissance exponentielle (constante d s)
    t = np.arange(n) / SR
    e = np.exp(-t / d)
    if a > 0:
        e[:a] *= np.linspace(0, 1, a)
    return e


def lowpass(x, fc):  # filtre à un pôle, appliqué deux fois
    a = np.exp(-2 * np.pi * fc / SR)
    for _ in range(2):
        y = np.empty_like(x); acc = 0.0
        for i in range(len(x)):
            acc = (1 - a) * x[i] + a * acc; y[i] = acc
        x = y
    return x


def lp_fast(x, fc):  # version vectorisée approchée (moyenne glissante) pour les longs signaux
    k = max(1, int(SR / (2 * fc)))
    return np.convolve(x, np.ones(k) / k, mode="same")


def hp_fast(x, fc):
    return x - lp_fast(x, fc)


def note(m):
    return 440.0 * 2 ** ((m - 69) / 12)


def add(buf, sig, t, gain=1.0, pan=0.0):
    i = int(round(t * SR))
    if i >= buf.shape[1] or i + len(sig) <= 0:
        return
    j0 = max(0, -i); sig = sig[j0:]; i = max(0, i)
    n = min(len(sig), buf.shape[1] - i)
    l, r = np.cos((pan + 1) * np.pi / 4), np.sin((pan + 1) * np.pi / 4)
    buf[0, i:i + n] += gain * l * 1.414 * sig[:n]
    buf[1, i:i + n] += gain * r * 1.414 * sig[:n]


# ---------- instruments (chaque attaque commence en phase cosinus : la crête tombe sur l'instant) ----------
def kick(dur=0.32):
    n = int(dur * SR); t = np.arange(n) / SR
    f = 48 + 110 * np.exp(-t / 0.035)
    ph = 2 * np.pi * np.cumsum(f) / SR
    body = np.cos(ph) * env(n, 24, 0.11)
    knock = np.cos(2 * np.pi * 190 * t) * env(n, 12, 0.012) * 0.6
    return body + knock


def snare(dur=0.22):
    n = int(dur * SR); t = np.arange(n) / SR
    nz = hp_fast(rng.standard_normal(n), 1200) * env(n, 24, 0.06)
    tone = np.cos(2 * np.pi * 210 * t) * env(n, 24, 0.04)
    return 0.7 * nz + 0.5 * tone


def hat(dur=0.05, bright=7000):
    n = int(dur * SR)
    return hp_fast(rng.standard_normal(n), bright) * env(n, 12, 0.012)


def saw(f, n):
    t = np.arange(n) / SR
    return 2 * ((f * t) % 1) - 1


def pad_chord(ms, dur):
    n = int(dur * SR); x = np.zeros(n)
    for m in ms:
        for det in (-0.08, 0.08):
            x += saw(note(m) * (1 + det / 100), n)
    x = lp_fast(x, 1400) / (2 * len(ms))
    a = int(0.08 * SR); r = int(0.15 * SR)
    e = np.ones(n); e[:a] = np.linspace(0, 1, a); e[-r:] *= np.linspace(1, 0, r)
    return x * e


def bass(m, dur):
    n = int(dur * SR); t = np.arange(n) / SR
    x = 0.7 * np.cos(2 * np.pi * note(m) * t) + 0.35 * lp_fast(saw(note(m), n), 900)
    return x * env(n, 48, dur * 0.7)


def tick(f=2600, dur=0.03):
    n = int(dur * SR); t = np.arange(n) / SR
    return np.cos(2 * np.pi * f * t) * env(n, 6, 0.012) + 0.3 * hp_fast(rng.standard_normal(n), 3000) * env(n, 6, 0.003)


def knock():
    n = int(0.12 * SR); t = np.arange(n) / SR
    return np.cos(2 * np.pi * 320 * t) * env(n, 12, 0.03) + 0.5 * np.cos(2 * np.pi * 760 * t) * env(n, 6, 0.012)


def whoosh(dur=0.24):
    n = int(dur * SR)
    nz = rng.standard_normal(n)
    x = hp_fast(lp_fast(nz, 3500), 500)
    return x * env(n, int(0.001 * SR), dur / 4)


def land():
    n = int(0.12 * SR); t = np.arange(n) / SR
    return np.cos(2 * np.pi * (90 + 60 * np.exp(-t / 0.02)) * t) * env(n, 24, 0.04) + 0.25 * lp_fast(rng.standard_normal(n), 900) * env(n, 12, 0.02)


def bell(f, dur=0.9):
    n = int(dur * SR); t = np.arange(n) / SR
    x = sum(a * np.cos(2 * np.pi * f * k * t) * env(n, 6, dur / (2 + k)) for k, a in ((1, 1.0), (2.76, 0.4), (5.4, 0.15)))
    x[:int(0.003 * SR)] += 0.8 * np.cos(2 * np.pi * 3 * f * t[:int(0.003 * SR)]) * np.linspace(1, 0, int(0.003 * SR))  # attaque franche : la plus grande crête est la première
    return x


def impact(dur=0.5):
    n = int(dur * SR); t = np.arange(n) / SR
    sub = np.cos(2 * np.pi * (40 + 70 * np.exp(-t / 0.05)) * t) * env(n, 24, 0.16)
    nz = lp_fast(rng.standard_normal(n), 2500) * env(n, 12, 0.05)
    return sub + 0.6 * nz


def suck(dur=0.2):
    n = int(dur * SR)
    x = hp_fast(lp_fast(rng.standard_normal(n), 4000), 400)
    e = np.linspace(1, 0, n) ** 2  # attaque en tête : la crête sur l'instant de la compression
    return x * e


def scratch():
    n = int(0.09 * SR)
    return hp_fast(lp_fast(rng.standard_normal(n), 5000), 1500) * env(n, 6, 0.03)


def click():
    n = int(0.06 * SR); t = np.arange(n) / SR
    return np.cos(2 * np.pi * 4200 * t) * env(n, 6, 0.004) + 0.8 * np.cos(2 * np.pi * 900 * t) * env(n, 6, 0.018)


SFX = {
    "tick": lambda: tick(), "knock": knock, "whoosh": whoosh, "land": land, "ding": lambda: bell(1760, 0.6),
    "impact": impact, "suck": suck, "boom": lambda: impact(0.9), "swish": lambda: whoosh(0.15),
    "glock0": lambda: bell(note(84)), "glock1": lambda: bell(note(88)), "glock2": lambda: bell(note(91)), "glock3": lambda: bell(note(96)),
    "scratch": scratch, "chord": lambda: bell(note(81), 1.5), "click": click,
}
GAIN = {"tick": 0.35, "knock": 0.5, "whoosh": 0.22, "land": 0.5, "ding": 0.3, "impact": 0.75, "suck": 0.3, "boom": 0.95,
        "swish": 0.18, "glock0": 0.32, "glock1": 0.32, "glock2": 0.32, "glock3": 0.36, "scratch": 0.3, "chord": 0.35, "click": 0.25}


def main():
    tl, out = sys.argv[1], sys.argv[2]
    sfx_db = float(sys.argv[3]) if len(sys.argv) > 3 else 0.0
    args = [a for a in sys.argv if a != "--no-norm" and not a.startswith("--try=")]
    glob_db = float(args[4]) if len(args) > 4 else 0.0
    T = load(tl)
    B, D = T["BEAT"], T["D"]
    N = int(round(D * SR))
    mus = np.zeros((2, N)); fx = np.zeros((2, N))
    sec = {s["name"]: (s["from"], s["to"]) for s in T["S"]}
    beats = int(round(D / B))
    chords = [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]]  # Am F C G
    roots = [45, 41, 48, 43]
    in_ = lambda name, t: sec[name][0] <= t < sec[name][1]
    for bar in range(beats // 4):
        t0 = bar * 4 * B
        ch = chords[bar % 4]
        if t0 < sec["final"][0]:
            add(mus, pad_chord([m + 12 for m in ch], 4 * B), t0, 0.18 if t0 < sec["drop"][0] else 0.22)
    for n in range(beats * 4):  # doubles croches
        t = n * B / 4
        if in_("vide", t):
            continue
        if n % 2 == 0 and t < sec["final"][0]:
            add(mus, hat(), t, 0.09 if t < sec["drop"][0] else 0.12, pan=0.3)
        if in_("drop", t) and n % 2 == 1:
            add(mus, hat(0.03, 9000), t, 0.05, pan=-0.3)
    for n in range(beats):
        t = n * B
        if in_("montee", t) and n % 2 == 0:
            add(mus, kick(), t, 0.45)
        if in_("drop", t):
            add(mus, kick(), t, 0.85)
            if n % 2 == 1:
                add(mus, snare(), t, 0.42)
            r = roots[(n // 4) % 4]
            add(mus, bass(r, B / 2), t, 0.38); add(mus, bass(r, B / 2), t + B / 2, 0.30)
    # montée : souffle qui s'ouvre jusqu'au vide
    a, b = sec["montee"][0] + 2 * B, sec["vide"][0]
    n = int((b - a) * SR)
    rise = hp_fast(rng.standard_normal(n), 800) * np.linspace(0, 1, n) ** 2
    add(mus, rise, a, 0.12)
    # final : accord qui se pose (la mineur add9) et finit en fondu avant 15,0 s
    f0 = sec["final"][0]
    fin = pad_chord([57, 60, 64, 71], D - f0)
    add(mus, fin, f0, 0.3)
    add(mus, bass(45, 1.2), f0, 0.4)
    add(mus, kick(), f0, 0.9)
    add(mus, bell(note(81), 1.5), f0 + 1 / 60, 0.35)  # l'accord-cloche de la signature : musique, pas bruitage
    # pompe de grosse caisse sur le lit pendant le drop
    pump = np.ones(N)
    for n_ in range(beats):
        t = n_ * B
        if in_("drop", t):
            i = int(t * SR); k = int(0.18 * SR)
            pump[i:i + k] *= 1 - 0.45 * np.exp(-np.arange(min(k, N - i)) / (0.06 * SR))
    mus *= pump
    # bruitages sur leurs repères. Gain réglé en boucle fermée par la mesure (Motion Lab) : chaque coup 3 à 6 dB
    # au-dessus du lit, sur les 60 premières ms, coups contre lit (stems séparés). Cible 4,5 dB, 6 dB pour les temps forts.
    BIG = {"boom", "impact", "chord"}
    w = int(0.03 * SR)  # 30 ms : la fenêtre d'un tic ; 60 ms écrasait les coups courts
    rms = lambda a: float(np.sqrt(np.mean(a ** 2)) + 1e-9)
    bedm = mus.mean(axis=0)
    T["cues"] = [c for c in T["cues"] if c["kind"] != "chord"]  # joué dans le lit
    sigs = [SFX[c["kind"]]() for c in T["cues"]]
    gains = [GAIN[c["kind"]] for c in T["cues"]]
    ITER = 7
    for it in range(ITER):
        fx = np.zeros((2, N))
        for c, sig, g in zip(T["cues"], sigs, gains):
            add(fx, sig, c["t"], g, pan=0.0)
        if it == ITER - 1:
            break
        fxm = fx.mean(axis=0)
        for k, c in enumerate(T["cues"]):
            i = int(c["t"] * SR)
            bed = rms(bedm[i:i + w])
            if bed < 1e-3:
                continue  # lit muet (intro, vide) : gain de base
            em = 20 * np.log10(rms(fxm[i:i + w]) / bed)
            target = 6.0 if c["kind"] in BIG else 4.5
            gains[k] *= min(4.0, max(0.25, 10 ** ((target - em) / 20)))
            if it == ITER - 2 and "--debug" in sys.argv: print(c["event"], round(em, 1), round(gains[k], 3))
    fx *= 10 ** (sfx_db / 20)
    mix = (mus + fx) * 10 ** (glob_db / 20)
    # stems pour le contrôle (audio_check --stems)
    for name, st in (("fx", fx), ("bed", mus)):
        st2 = np.clip((st * 10 ** (glob_db / 20)).T, -1, 1)
        with wave.open(out.replace(".wav", f"-{name}.wav"), "wb") as wv:
            wv.setnchannels(2); wv.setsampwidth(2); wv.setframerate(SR); wv.writeframes((st2 * 32767).astype("<i2").tobytes())
    # fondu des 12 dernières centièmes, pas de clic final
    k = int(0.12 * SR); mix[:, -k:] *= np.linspace(1, 0, k)
    mix -= mix.mean(axis=1, keepdims=True)
    # limiteur : plafond -2,2 dBFS (marge pour la crête vraie après encodage AAC, Motion Lab), attaque 1 ms, retour 60 ms
    ceil = 10 ** (-2.2 / 20)
    pk = np.abs(mix).max(axis=0)
    need = np.minimum(1.0, ceil / np.maximum(pk, 1e-9))
    la = int(0.001 * SR)
    g = np.minimum.accumulate(np.r_[need[la:], np.ones(la)][::-1])[::-1] if False else need.copy()
    # anticipation : chaque réduction commence 1 ms avant la crête
    for sh in range(1, la + 1):
        g[:-sh] = np.minimum(g[:-sh], need[sh:])
    rel = np.exp(-1 / (0.06 * SR)); out_g = np.empty_like(g); acc = 1.0
    for i in range(len(g)):
        acc = g[i] if g[i] < acc else g[i] + (acc - g[i]) * rel
        out_g[i] = acc
    mix = mix * out_g
    pcm = np.clip(mix.T, -1, 1)
    with wave.open(out, "wb") as w:
        w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
        w.writeframes((pcm * 32767).astype("<i2").tobytes())
    if True:
        import re
        err = subprocess.run(["ffmpeg", "-nostats", "-i", out, "-af", "ebur128=peak=true", "-f", "null", "-"], capture_output=True, text=True).stderr
        lufs = float(re.search(r"I:\s+(-?[\d.]+) LUFS", err[err.rfind("Summary:"):]).group(1))
        tries = int(next((a.split("=")[1] for a in sys.argv if a.startswith("--try=")), "0"))
        if abs(lufs + 14) > 0.3 and tries < 4:
            argv = [a for a in sys.argv if a != "--no-norm" and not a.startswith("--try=")]
            glob = (float(argv[4]) if len(argv) > 4 else 0.0) + (-14 - lufs)
            subprocess.run([sys.executable, sys.argv[0], tl, out, str(sfx_db), f"{glob:.2f}", f"--try={tries + 1}"], check=True)
            return
    print(f"écrit {out} : {D:.3f} s, {len(T['cues'])} repères, gain global {glob_db:+.2f} dB")


if __name__ == "__main__":
    main()
