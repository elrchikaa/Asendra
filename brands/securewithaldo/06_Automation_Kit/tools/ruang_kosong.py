"""Cari area paling kosong di foto (paling sedikit detail/objek) untuk menaruh teks.
Pakai: py -I ruang_kosong.py <foto> [rasio=0.8] [tinggi_pita=0.12]
Foto di-crop seperti object-fit: cover ke rasio slide (default 4:5). Skor = kepadatan tepi (detail) per pita horizontal
di dalam bingkai aman (8%-92% tinggi). Hasil: pita paling kosong (top % kanvas) + 3 kandidat berikutnya.
"""
import sys
import numpy as np
from PIL import Image, ImageFilter

def crop_cover(im, ratio):
    w, h = im.size
    if w / h > ratio:
        nw = int(h * ratio); x = (w - nw) // 2; return im.crop((x, 0, x + nw, h))
    nh = int(w / ratio); y = (h - nh) // 2; return im.crop((0, y, w, y + nh))

def main():
    path = sys.argv[1]; ratio = float(sys.argv[2]) if len(sys.argv) > 2 else 0.8
    band = float(sys.argv[3]) if len(sys.argv) > 3 else 0.12
    im = crop_cover(Image.open(path).convert('L'), ratio).resize((270, 338))
    e = np.asarray(im.filter(ImageFilter.FIND_EDGES), dtype=np.float32)
    H = e.shape[0]; bh = int(H * band); res = []
    for top in range(int(H * .08), int(H * .92) - bh, 2):
        res.append((float(e[top:top + bh, int(e.shape[1] * .1):int(e.shape[1] * .9)].mean()), top / H))
    # area kosong terbesar yang menyambung: pita dengan skor <= 1.6 x skor terbaik (min 2.5), lalu ambil tengahnya
    lim = max(min(r[0] for r in res) * 1.6, 2.5)
    rows = [r[1] for r in sorted(res, key=lambda r: r[1]) if r[0] <= lim]
    runs, cur = [], [rows[0]] if rows else []
    for t in rows[1:]:
        if t - cur[-1] <= 2.5 / H: cur.append(t)
        else: runs.append(cur); cur = [t]
    if cur: runs.append(cur)
    if runs:
        r = max(runs, key=lambda x: x[-1] - x[0])
        a0, a1 = r[0], r[-1] + band
        print('area kosong terbesar: %.0f%%-%.0f%%  -> taruh teks di tengahnya: top %.0f%% (pakai transform translateY(-50%%))' % (a0 * 100, a1 * 100, (a0 + a1) / 2 * 100))
    res.sort()
    best = res[0]
    print('paling kosong: top %.0f%%  (skor detail %.1f)' % (best[1] * 100, best[0]))
    seen = [best[1]]
    for sc, t in res[1:]:
        if all(abs(t - x) > band for x in seen):
            print('kandidat     : top %.0f%%  (skor detail %.1f)' % (t * 100, sc)); seen.append(t)
        if len(seen) >= 4: break

if __name__ == '__main__':
    main()
