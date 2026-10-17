# CP-01 · "Aku boleh jujur sebentar?"

| | |
|---|---|
| Brand | securewithaldo |
| Format | Carousel K2 dialog objek berpasangan (satu percakapan bersambung), 7 slide 4:5 |
| Pilar · topik | P3 Bilang apa, ngapain · T3 Komunikasi & kalimat ganti (slot K2 T3 di Peta Style ↔ Topik) |
| Style | `securewithaldo` v2 (layout 23 `k2-pasangan` + 27 `cta-kirim`) |
| Bahasa | Indonesia (tidak ada kalimat yang perlu diganti English) |
| CTA | Kirim ke seseorang (satu aksi). Tidak pakai komen KATA karena daftar keyword resmi belum ada (W30) |
| Foto | `Raw image/Observed table` (aset owner), disalin ke `assets/` |
| Status | Draft produksi, menunggu ACC owner |

## Ide
Bagian dari T3 yang paling susah buat si cemas: kalimat pertama sebelum jujur soal takutnya. Carousel memperlihatkan satu percakapan utuh di meja kafe: si cemas bilang takutnya tanpa interogasi, pasangannya menjawab tenang. Bukan naskah buat mengontrol (rambu T3), tapi contoh jujur yang aman.

## Naskah per slide

| # | Peran | Pola visual | Foto (`assets/`) | Kalimat cemas (Figtree, dekat dia) | Jawaban (Instrument miring, dekat pasangannya) | Posisi teks |
|---|---|---|---|---|---|---|
| 1 | HOOK | k2-pasangan | 01_meja-dinding-putih | Aku boleh jujur sebentar? | Boleh. Aku dengerin kok. | cemas kiri · jawab bawah |
| 2 | BUILD | k2-pasangan | 02_meja-bangku-kecil | Tadi pas kamu lama bales, aku takut. | Makasih udah bilang, bukan nebak sendirian. | atas · bawah rata kanan |
| 3 | BUILD | k2-pasangan | 03_meja-lampu-dinding | Aku cuma butuh tahu kita baik baik aja. | Kita baik baik aja. Tadi aku lagi kerja. | atas · bawah rata kanan |
| 4 | TENSION | k2-pasangan | 04_meja-pintu-toko | Kalau aku nanya lagi lain kali, kamu capek? | Nggak. Mending kamu tanya daripada nahan sendiri. | atas · bawah |
| 5 | TENSION | k2-pasangan | 05_meja-bayang-daun | Kalau nanti aku masih takut juga? | Ya bilang lagi. Kita obrolin bareng. | atas · bawah |
| 6 | PAYOFF | k2-pasangan | 06_meja-coretan-dinding | Makasih ya, udah dengerin. | Makasih juga udah jujur. Aku nggak ke mana mana. | kiri · bawah |
| 7 | CTA | cta-kirim | – | label: *buat yang lagi belajar jujur* | Kirim ini ke seseorang yang *masih nahan takutnya sendirian.* | k1 kartu terang |

Kesinambungan: tiap jawaban menyambung langsung kalimat cemasnya (takut → bilang, baik baik aja → baik baik aja, nanya lagi → tanya, takut lagi → bilang lagi, makasih → makasih juga). Slide 6 menutup dengan "Aku nggak ke mana mana" (arti tagline HERE) tanpa jualan.

## Caption

> Kalimat pertama yang paling susah: "aku boleh jujur sebentar?"
>
> Setelah itu biasanya lebih ringan. Kamu nggak lagi nebak sendirian, dan dia juga nggak perlu nebak isi kepalamu.
>
> Kirim ke seseorang yang lagi belajar jujur soal takutnya.

## Cek sebelum ACC
- [x] Satu percakapan bersambung, jawaban nyambung ke kalimat cemas
- [x] Ejaan nggak / udah / kalau, tanpa tanda pisah, tanpa emoji di layar
- [x] Jarak teks ke orang konsisten (34 px), teks tidak menimpa orang, di dalam bingkai 108 px
- [x] CTA satu aksi, diulang di caption
- [x] `check.mjs` BERSIH (7 slide)
- [ ] ACC owner

## File
- `carousel.html` → `png/` (final 2160×2700) · `png/preview/` (1080×1350) · `_sheet.png`
