"""Cari posisi teks dari OBJEK di foto (bukan dari luas langit).

Cara kerja:
1. Foto di-crop seperti object-fit: cover ke rasio slide (default 4:5).
2. Peta objek: tepi kuat + kontras lokal tinggi (siluet orang, gunung, bangunan, pohon). Tekstur halus (awan, air, tembok)
   tidak dihitung objek karena tepinya lemah.
3. Kotak teks dicoba di banyak posisi vertikal di dalam bingkai aman (8%-92%). Kotak sah kalau tidak menyentuh objek
   (objek dilebarkan sebesar jarak aman) dan isinya cukup polos.
4. Skor kotak = jarak ke objek terdekat (makin dekat makin baik, minimal jarak aman) + sedikit penalti kalau jauh dari tengah.
   Hasil: posisi tengah kotak (top %) + objek terdekat ada di atas atau di bawahnya.

Pakai: py -I posisi_teks.py <foto> [baris_teks=2] [--cek cek.png] [--hindari x0,y0,x1,y1]
  --hindari: tandai area (persen kanvas) yang terlewat deteksi, mis. siluet yang menyatu dengan danau. Selalu lihat gambar --cek.
"""
import sys
import numpy as np
from PIL import Image, ImageFilter

W, H = 270, 338            # resolusi kerja (4:5)
GAP = 0.035                # jarak aman teks ke objek, ±47 px di kanvas 1350
LINE = 0.045               # tinggi 1 baris teks kalimat (±60 px di kanvas 1350)
FRAME_Y, FRAME_X = 0.08, 0.10

def crop_cover(im, ratio=0.8):
    w, h = im.size
    if w / h > ratio:
        nw = int(h * ratio); x = (w - nw) // 2; return im.crop((x, 0, x + nw, h))
    nh = int(w / ratio); y = (h - nh) // 2; return im.crop((0, y, w, y + nh))

def saliency(g):
    """Spectral residual (Hou & Zhang 2007): bagian yang 'beda' dari pola foto = objek (orang, bangunan, siluet).
    Pola berulang (awan, air, rumput, tembok) jadi rendah."""
    small = np.asarray(g.resize((64, 80)), dtype=np.float32)
    f = np.fft.fft2(small); amp = np.log(np.abs(f) + 1e-6); ph = np.angle(f)
    k = np.ones((3, 3)) / 9.0
    pad = np.pad(amp, 1, mode='wrap')
    avg = sum(pad[dy:dy + amp.shape[0], dx:dx + amp.shape[1]] * k[dy, dx] for dy in range(3) for dx in range(3))
    sal = np.abs(np.fft.ifft2(np.exp((amp - avg) + 1j * ph))) ** 2
    im = Image.fromarray((sal / sal.max() * 255).astype(np.uint8)).resize((W, H), Image.BILINEAR).filter(ImageFilter.GaussianBlur(4))
    return np.asarray(im, dtype=np.float32) / 255

def object_map(im):
    g = im.convert('L').resize((W, H))
    edge = np.asarray(g.filter(ImageFilter.FIND_EDGES), dtype=np.float32)
    edge = np.asarray(Image.fromarray(edge.clip(0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(2)), dtype=np.float32)
    sal = saliency(g)
    obj = sal > max(sal.mean() * 3.0, 0.12)
    obj[:6, :] = obj[-6:, :] = False; obj[:, :6] = obj[:, -6:] = False   # pinggir foto bukan objek
    o = np.asarray(Image.fromarray((obj * 255).astype(np.uint8)).filter(ImageFilter.MedianFilter(5))) > 127
    # saring: objek asli (orang, benda, bangunan) punya tepi tegas; bercak cahaya/awan tepinya lembut -> dibuang
    from scipy import ndimage
    lab, n = ndimage.label(ndimage.binary_dilation(o, iterations=2))
    keep = np.zeros_like(o)
    ref = np.percentile(edge, 90)
    for i in range(1, n + 1):
        m = lab == i
        if edge[m].mean() >= ref * 0.6:
            keep |= m
    keep = keep & ndimage.binary_dilation(o, iterations=2)
    # objek dihitung sebagai KOTAK PENUH (kepala sampai kaki), bukan bercak: siluet sering cuma tertangkap sebagian
    lab3, n3 = ndimage.label(keep)
    box = np.zeros_like(keep)
    for sl in ndimage.find_objects(lab3):
        if sl is None: continue
        ys, xs = sl
        h = ys.stop - ys.start
        box[max(ys.start - max(4, h // 3), 0):ys.stop + 2, max(xs.start - 3, 0):xs.stop + 3] = True   # + ruang kepala
    keep = box
    # objek utama = komponen paling menonjol (luas x ketegasan tepi x saliency); teks didekatkan ke objek ini,
    # objek lain cukup dihindari
    lab2, n2 = ndimage.label(ndimage.binary_dilation(keep, iterations=6))
    main = np.zeros_like(keep)
    if n2:
        scores = [((lab2 == i) & keep).sum() * edge[lab2 == i].mean() * sal[lab2 == i].mean() for i in range(1, n2 + 1)]
        main = (lab2 == int(np.argmax(scores)) + 1) & keep
    return keep, edge, main

def horizon_lines(im):
    """Garis horizontal panjang yang tegas (garis laut/danau, atap, tepi meja): baris di mana banyak kolom punya
    perubahan terang-gelap vertikal yang kuat. Dipakai sebagai batas yang tidak boleh dilewati teks."""
    g = np.asarray(im.convert('L').resize((W, H)).filter(ImageFilter.GaussianBlur(1.5)), dtype=np.float32)
    gy = np.abs(np.diff(g, axis=0, prepend=g[:1]))
    x0, x1 = int(FRAME_X * W), int((1 - FRAME_X) * W)
    thr = np.percentile(gy[:, x0:x1], 93)
    strong = gy[:, x0:x1] > thr
    # dihitung per pita 3 baris (garis miring tipis tetap tertangkap), lalu cari bentangan sambung terpanjang
    band = np.zeros_like(strong)
    for y in range(H):
        band[y] = strong[max(y - 1, 0):y + 2].any(axis=0)
    rows = np.zeros(H, dtype=bool)
    need = 0.35 * (x1 - x0)
    for y in range(int(0.05 * H), H):
        run = best = 0
        for v in band[y]:
            run = run + 1 if v else 0
            best = max(best, run)
        rows[y] = best >= need          # garis laut/atap menyambung panjang; tepi awan terputus-putus
    return rows

def best_position(path, lines=2):
    im = crop_cover(Image.open(path).convert('RGB'))
    obj, edge, main = object_map(im)
    gap = int(GAP * H)
    line_rows = horizon_lines(im)
    obj = obj.copy(); obj[line_rows, :] = True        # garis panjang = batas (selebar slide)
    # --hindari x0,y0,x1,y1 (persen kanvas, boleh diulang): area yang terlewat deteksi (mis. siluet menyatu dengan latar)
    for k, arg in enumerate(sys.argv):
        if arg == '--hindari':
            x0_, y0_, x1_, y1_ = [float(v) / 100 for v in sys.argv[k + 1].split(',')]
            obj[int(y0_ * H):int(y1_ * H), int(x0_ * W):int(x1_ * W)] = True
            main[int(y0_ * H):int(y1_ * H), int(x0_ * W):int(x1_ * W)] = True
    dil = np.asarray(Image.fromarray((obj * 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(2 * gap + 1))) > 127
    busy_max = np.percentile(edge, 70)                # area lebih ramai dari ini = tidak cocok untuk teks
    ys, xs = np.nonzero(main)                          # jarak diukur ke objek utama
    cands = []
    # kotak lebar (80% kanvas, n baris) sampai sempit (52%, n+1 baris); boleh geser kiri-kanan
    for wfrac, nl in ((0.80, lines), (0.64, lines + 1), (0.52, lines + 1)):
        bw = int(wfrac * W); bh = int((LINE * nl + 0.02) * H)
        for left in range(int(FRAME_X * W), int((1 - FRAME_X) * W) - bw + 1, 6):
            for top in range(int(FRAME_Y * H), int((1 - FRAME_Y) * H) - bh, 2):
                bx, by = slice(left, left + bw), slice(top, top + bh)
                if dil[by, bx].any():                 # tidak boleh menyentuh objek/garis (+ jarak aman) sama sekali
                    continue
                busy = edge[by, bx].mean()
                if busy > busy_max:
                    continue
                cy, cx = top + bh / 2, left + bw / 2
                if len(ys):                           # jarak tepi kotak ke piksel objek terdekat
                    dy = np.maximum(np.maximum(top - ys, ys - (top + bh)), 0)
                    dx = np.maximum(np.maximum(left - xs, xs - (left + bw)), 0)
                    k = np.argmin(np.hypot(dx, dy)); near = float(np.hypot(dx[k], dy[k]))
                    side = 'atas objek' if ys[k] > top + bh else ('bawah objek' if ys[k] < top else 'samping objek')
                else:
                    near, side = abs(cy - H / 2), 'tanpa objek menonjol'
                s_ = near / H + 0.30 * abs(cy / H - 0.5) + 0.10 * abs(cx / W - 0.5) + busy / 255 * 0.5 + (0.80 - wfrac) * 0.15
                cands.append((s_, cy / H, side, near / H, busy, left / W, (left + bw) / W, nl))
    cands.sort()
    return cands, obj | main

def main():
    path = sys.argv[1]
    lines = int(sys.argv[2]) if len(sys.argv) > 2 and not sys.argv[2].startswith('--') else 2
    cands, obj = best_position(path, lines)
    if '--peta' in sys.argv:
        out = sys.argv[sys.argv.index('--peta') + 1]
        Image.fromarray((obj * 255).astype(np.uint8)).save(out)
    if not cands:
        print('tidak ada ruang kosong yang cukup: pakai kartu teks (K1) atau foto lain'); return
    s, c, side, near, busy, l, r, nl = cands[0]
    if '--cek' in sys.argv:          # gambar cek: objek (merah) + kotak teks (hijau)
        from PIL import ImageDraw
        out = sys.argv[sys.argv.index('--cek') + 1]
        im = crop_cover(Image.open(path).convert('RGB')).resize((W, H))
        red = Image.new('RGB', (W, H), (255, 40, 40)); m = Image.fromarray((obj * 140).astype(np.uint8))
        im.paste(red, (0, 0), m); d = ImageDraw.Draw(im)
        bh = (LINE * nl + 0.02) * H
        d.rectangle((l * W, c * H - bh / 2, r * W, c * H + bh / 2), outline=(80, 255, 120), width=2)
        im.save(out)
    print('posisi teks: top %.0f%%; left %.0f%%; right %.0f%% (style="top:%.0f%%;left:%.0f%%;right:%.0f%%;transform:translateY(-50%%)") | %s, jarak ke objek %.0f%% tinggi' % (c * 100, l * 100, (1 - r) * 100, c * 100, l * 100, (1 - r) * 100, side, near * 100))

if __name__ == '__main__':
    main()
