# Style Analysis — securewithaldo (produk HERE)

Task 2.2 (dasar 2.3 / 2.4 / 2.7). Dibuat 9 Okt 2026 dari 57 postingan `Masuk analisis = Ya` di `Data_Performa_Download_securewithaldo.csv`.
Data per postingan: `Style_Log_securewithaldo.csv`. Artifact: https://claude.ai/artifact/TjfzUU2bg9V7jx3KhtBZLf (HTML + thumbnail di `Bedah_Konten_Benchmark_securewithaldo/`).

Label: **[FAKTA]** terlihat di file/CSV · **[PENALARAN]** kesimpulan. TERBUKTI = ≥3 konten dari ≥2 akun. Hex dihitung k-means; nama font = perkiraan bentuk huruf.

## Ringkasan

| Kode | Keluarga | Format | Konten | Akun | Median rasio | Status |
|---|---|---|---|---|---|---|
| K1 | Kartu teks polos, serif kecil | carousel | 12 | 2 (sincere.emotion · noteovt) | 4.45x | TERBUKTI |
| K2 | Foto penuh + 1 kalimat kecil putih | carousel | 15 | 2 (wordsyoucantfind · littleplumpoetry) | 2.2x | TERBUKTI |
| K3 | Tulisan tangan di latar tekstur warna | carousel | 3 | 1 (alexaubreypoetry) | 2.3x | KANDIDAT |
| K4 | Edukasi doodle, Bahasa Indonesia | carousel | 4 | 1 (sulichii) | 2.35x | KANDIDAT |
| R1 | Reels 1 shot footage + teks statis, 6–8 detik | reels | 11 | 2 (sincere.emotion · littleplumpoetry) | 2.2x | TERBUKTI |
| R2 | Reels skit dua peran 'Anxious x Avoidant' | reels | 6 | 1 (sulichii) | 7.95x | KANDIDAT |
| R3 | Reels talking head + kotak kutipan | reels | 2 | 1 (sulichii) | 4.5x | KANDIDAT |
| – | Tunggal: komik dialog, huruf kolase, papan jalan, foto halaman buku | carousel | 4 | 2 | 4.45x | dicatat saja |

Pengelompokan dikonfirmasi owner 9 Okt 2026 (K1 gabungan sincere + noteovt, K2 gabungan wycf + plum, R1 terbukti dengan 1 reel plum).

Koreksi terhadap Kurasi: reels sincere memakai footage alam yang digelapkan (bukan latar hitam polos); baris terakhir italic tidak muncul di 8 carousel sincere yang masuk analisis. [FAKTA]

## K1 · Kartu teks polos, serif kecil — TERBUKTI

12 konten · 2 akun (sincere.emotion · noteovt) · median 4.45x · rentang 1.7–242.3x

**Cara jalan**

- Slide 1: 1 klaim / pertanyaan / judul 'N tanda…' di tengah, tanpa gambar
- Opsional baris kredensial di bawah judul ('P.S: I loved an avoidant for 9 years')
- Slide tengah: 1 poin per slide, 15–50 kata, rata kiri, latar krem dan hitam bergantian
- Slide akhir: mockup produk atau 'Comment KATA' (5 dari 8 carousel sincere)
- noteovt: cukup 1 kartu hitam, ditutup pertanyaan ('Apa jawabanmu?')

**Bukti [FAKTA]**

- DRYCctzkkcH (@sincere.emotion): 146.850 likes, 242.3x. Outlier terbesar di seluruh sampel — https://www.instagram.com/p/DRYCctzkkcH/
- DNpWQJRN5La (@sincere.emotion): 28.187 likes, 46.5x — https://www.instagram.com/p/DNpWQJRN5La/
- Ddf0DibhDl_ (@noteovt): noteovt 6.611 likes, 12.5x, gambar tunggal Bahasa Indonesia — https://www.instagram.com/p/Ddf0DibhDl_/
- DdD61kJhxJa (@noteovt): noteovt 5.676 likes, 10.8x — https://www.instagram.com/p/DdD61kJhxJa/
- Dd6oBxoFgKY (@sincere.emotion): 5.627 likes, 9.3x — https://www.instagram.com/p/Dd6oBxoFgKY/

Median feed sincere cuma 606 likes, jadi 8 carousel ini 1.8x sampai 242x. 7 dari 8 carousel sincere memakai selang krem/hitam.

**Kenapa works [PENALARAN]:** Tanpa foto, mata langsung ke kalimat. Kalimatnya terdengar seperti catatan pribadi seseorang yang pernah mengalami, bukan poster motivasi, jadi orang menyimpan dan mengirimkannya. Selang krem/hitam memberi ritme saat digeser tanpa menambah elemen.

**Produksi untuk securewithaldo:** 0 kredit. Semua slide bisa dirakit di carousel-studio (HTML). Paling dekat dengan bentuk produk HERE (video typography).

**Palet**

- K1a sincere: `#F2F3EE` latar krem bertekstur · 58% · `#030303` latar slide gelap · 31% · `#312B26` teks di krem (terukur) · `#FFFFFB` teks di hitam (titik terang terukur) · `#B0AEA9` grain / sorot cahaya · 5% · `#B27057` aksen nama produk di slide CTA · <1%
- K1b noteovt: `#000000` latar · 96% · `#BFBFBF` teks (terukur)

**Font**

- Newsreader: Pengganti gratis untuk serif gaya Times yang agak rapat di sincere (perkiraan bentuk huruf, file font asli tidak tersedia).
- Lora: Pengganti gratis untuk serif noteovt yang lebih lebar.

**Spec**

| Aspek | Isi |
|---|---|
| Kanvas | 1080×1350 (4:5), sama dengan sincere. noteovt 1440×1920 (3:4). |
| Margin & zona (terukur) | Cover: kiri/kanan ±14%, blok teks di tengah vertikal (mulai ±38% dari atas). Isi: kiri ±10%, kanan ±15% (rata kiri, baris tidak penuh), blok mulai ±21% dari atas. noteovt: blok sempit, kiri/kanan ±28–30%, wordmark ±9% dari bawah. |
| Ukuran teks (terukur) | Tinggi baris isi ≈4.7% lebar kanvas, jarak antarbaris ≈6.7% (line-height ±1.4). Cover ≈5.6% dengan jarak ≈9.4%. noteovt jauh lebih kecil: ≈2.7% lebar dengan jarak ≈6% (spasi lega). |
| Hierarki & batas | Cover 6–15 kata (median 2–3 baris). Isi 15–50 kata, ±6 baris. Usulan batas: cover ≤ 15 kata, isi ≤ 55 kata. Kata kunci bold, tidak ada warna kedua di slide isi. |
| Rumus cover | (a) klaim/judul Title Case di tengah, atau (b) judul bold + 1 baris kredensial pengalaman. Tanpa gambar, logo, atau nomor. |
| Jumlah slide | 6–12 (median 9.5). noteovt: 1 kartu. |
| Elemen berulang | Selang krem/hitam, sorot cahaya ber-grain di pojok slide hitam, slide akhir mockup 2 ebook di tablet. Tidak ada nomor slide atau handle (sincere). noteovt: wordmark kecil berspasi lebar. |

**Lakukan:** Satu gagasan per slide, kalimat pendek seperti catatan; Selang terang/gelap untuk ritme; Kredensial pengalaman Aldo di cover (aku/kita); Bold hanya di 1 frasa per slide (W14)  
**Hindari:** Ikon, stiker, atau foto yang memecah fokus; Teks isi lebih kecil dari ±4.5% lebar (W16); Menyalin kalimat sincere/noteovt (W26); Krem + hitam persis sama dengan sincere

## K2 · Foto penuh + 1 kalimat kecil putih — TERBUKTI

15 konten · 2 akun (wordsyoucantfind · littleplumpoetry) · median 2.2x · rentang 1.5–24.2x

**Cara jalan**

- Slide 1: foto penuh + 1 frasa/kalimat pembuka kecil di ruang kosong foto
- wycf: tiap slide foto baru, kalimat melanjutkan cerita atau mengulang awal kalimat ('I want to…', 'I love our little…')
- plum: 1 foto yang sama di semua slide, hanya teks yang berganti (5 dari 5 carousel plum)
- Slide akhir wycf: foto buku fisik (7 dari 7); plum: tanpa CTA

**Bukti [FAKTA]**

- Dd13yTvk1CK (@wordsyoucantfind): 201.105 likes, 24.2x — https://www.instagram.com/p/Dd13yTvk1CK/
- DbTg5Gjlaym (@littleplumpoetry): plum 188.463 likes, 13.1x (2 cangkir teh, teks berganti) — https://www.instagram.com/p/DbTg5Gjlaym/
- DZkobTGTlVm (@littleplumpoetry): plum 138.382 likes, 9.6x (gambar tunggal) — https://www.instagram.com/p/DZkobTGTlVm/
- DcjZhFrFXL5 (@littleplumpoetry): plum 60.907 likes, 4.2x — https://www.instagram.com/p/DcjZhFrFXL5/
- Dd_wnu4mCdM (@wordsyoucantfind): 50.222 likes, 6.1x — https://www.instagram.com/p/Dd_wnu4mCdM/

Median keluarga ini paling rendah di antara yang terbukti (2.2x), tapi angka absolutnya paling besar karena akunnya besar.

**Kenapa works [PENALARAN]:** Fotonya terasa seperti momen nyata, kalimatnya kecil seperti bisikan. Format 'yang dia bilang / jawabanku' di dua objek (plum) gampang dibaca sekilas dan dikirim ke pasangan.

**Produksi untuk securewithaldo:** 0 kredit kalau foto diambil sendiri pakai HP (W4). Varian still-life plum paling murah: 1 foto untuk 1 carousel. Varian foto pasangan butuh stok foto atau generate.

**Palet**

- K2a wordsyoucantfind: `#43362D` cokelat hangat foto · 27% · `#1A1613` bayangan · 26% · `#71604F` · 19% · `#998F7E` · 18% · `#EFEBE0` teks (terukur)
- K2b littleplumpoetry: `#B5BBB9` kain/piring · 32% · `#9C9A8F` · 31% · `#382519` kayu meja · 24% · `#923B0E` objek (kopi/buah) · 4%

**Font**

- Crimson Pro: Pengganti gratis untuk serif wycf (perkiraan).
- Work Sans: plum memakai sans kecil lowercase gaya Helvetica/Arial.

**Spec**

| Aspek | Isi |
|---|---|
| Kanvas | wycf 1080×1350 (4:5). plum 3072×4096 (3:4). |
| Margin & zona | Belum diukur (latar foto). Teks selalu diletakkan di area foto yang paling polos; plum menaruh teks di dalam objek (isi cangkir, belahan apel). |
| Ukuran teks | Belum diukur. Terlihat lebih kecil dari K1; 1 kalimat 1–2 baris. |
| Hierarki & batas | 1 frasa atau 1 kalimat per slide (wycf 1–25 kata, plum 5–12 kata). Tanpa judul. |
| Rumus cover | Foto penuh + kalimat pembuka yang menggantung ('When I say… I mean…') atau dialog 2 objek. |
| Jumlah slide | wycf 5–15 (median 7). plum 1–4. |
| Elemen berulang | wycf: slide akhir foto buku fisik, kadang foto halaman buku berisi tulisan lengkap. plum: foto top-down di kayu/kain, piring bermotif bunga. |

**Lakukan:** Foto still-life dari HP sendiri (cangkir, HP terbalik, bantal); Dialog dua objek: 'yang dia bilang' / 'yang aku rasain'; Teks di area polos foto; Satu foto dipakai ulang, teks berganti  
**Hindari:** Foto pasangan romantis/intim (DdrZuA2mLU2): tidak sesuai isi brand; Foto stok yang terlihat AI; Menerjemahkan surat cinta wycf (W26); Teks di atas area ramai

## K3 · Tulisan tangan di latar tekstur warna — KANDIDAT

3 konten · 1 akun (alexaubreypoetry) · median 2.3x · rentang 1.9–8.5x

**Cara jalan**

- Slide 1: 'N sentences that made my brain go like oh shit:' (2 dari 3)
- Slide tengah: 1 kalimat per slide, tulisan tangan satu warna
- Slide akhir: foto buku + 'comment KATA and i'll send you the link'

**Bukti [FAKTA]**

- DeMjN2Fkun3 (@alexaubreypoetry): 63.951 likes, 8.5x — https://www.instagram.com/p/DeMjN2Fkun3/
- DeCQHtRkp3d (@alexaubreypoetry): 16.959 likes, 2.3x — https://www.instagram.com/p/DeCQHtRkp3d/
- DeJvBkrkoAR (@alexaubreypoetry): 14.546 likes, 1.9x — https://www.instagram.com/p/DeJvBkrkoAR/

Baru 1 akun. Bentuk 'N kalimat' juga muncul di K1 dan R1, jadi struktur listicle-nya terbukti, tulisan tangannya belum.

**Kenapa works [PENALARAN]:** Tulisan tangan terasa seperti catatan pribadi yang difoto. Judul 'N kalimat yang bikin aku tersadar' menjanjikan isi yang bisa disimpan.

**Produksi untuk securewithaldo:** 0 kredit (font tulisan tangan + tekstur). Risiko: terlihat murahan kalau font handwriting-nya generik.

**Palet**

- 3 varian alex: `#B6B6AC` kertas abu (DeMj) · `#100F64` tinta biru (terukur) · `#6F2328` cat air maroon (DeCQ) · `#F1D0CE` teks di maroon · `#012F83` kanvas biru (DeJv) · `#E9F7FF` teks di biru

**Font**

- Patrick Hand: Pengganti gratis untuk tulisan tangan alex (perkiraan).

**Spec**

| Aspek | Isi |
|---|---|
| Kanvas | 1206×1508 (4:5). |
| Margin & zona (terukur) | Kiri ±15%, kanan ±13%, blok di tengah vertikal (±36% atas dan bawah). |
| Ukuran teks (terukur) | Tinggi baris ≈6.7% lebar, jarak ≈8.9%. |
| Hierarki & batas | 1 kalimat 8–20 kata per slide. |
| Rumus cover | Judul listicle angka + titik dua, tanpa gambar (DeCQ menambah ilustrasi kupu-kupu). |
| Jumlah slide | 7–13. |
| Elemen berulang | Slide akhir foto buku + CTA kata kunci. |

**Lakukan:** Satu warna tinta di satu warna latar; Judul angka + titik dua  
**Hindari:** Kata kasar di judul ('oh shit'); Lebih dari 1 warna tinta

## K4 · Edukasi doodle, Bahasa Indonesia — KANDIDAT

4 konten · 1 akun (sulichii) · median 2.35x · rentang 1.7–17.6x

**Cara jalan**

- Slide 1: doodle besar + judul CAPS (pertanyaan/aturan/fase) + subjudul + panah geser
- Slide tengah: judul CAPS poin + 2–4 kalimat 'Dulu… Sekarang…' + 1 doodle
- Slide akhir: kesimpulan reflektif (3 dari 4) atau sampul ebook + link Lynk (1 dari 4)

**Bukti [FAKTA]**

- DVrhcQLkvFV (@sulichii): 19.220 likes, 17.6x ('Fase healing anxious') — https://www.instagram.com/p/DVrhcQLkvFV/
- DV7BEJkkyec (@sulichii): 2.866 likes, 2.6x — https://www.instagram.com/p/DV7BEJkkyec/
- DW3MqIok0s2 (@sulichii): 2.256 likes, 2.1x — https://www.instagram.com/p/DW3MqIok0s2/
- DWScGm6j9mR (@sulichii): 1.816 likes, 1.7x — https://www.instagram.com/p/DWScGm6j9mR/

Satu-satunya carousel berbahasa Indonesia yang khusus anxious/avoidant. Kurasi menyebut juga @thesecurerelationship dkk., tapi akun itu tidak ada di set download style ini.

**Kenapa works [PENALARAN]:** Doodle stick figure membuat topik berat terasa ringan dan tidak klinis. Format 'fase' memberi pembaca peta posisi dirinya, jadi disimpan.

**Produksi untuk securewithaldo:** Doodle perlu dibuat: gambar sendiri, ilustrasi stok line-art, atau generate (kredit, wajib ACC per item). Teksnya 0 kredit.

**Palet**

- sulichii: `#DAD8D6` latar kertas · 84% · `#6F3B13` judul, teks, doodle (terukur) · `#CABEB4` tekstur · 6% · `#B8A290` tekstur · 5%

**Font**

- Montserrat 800: Judul CAPS sans tebal (perkiraan).
- Quicksand: Isi sans membulat (perkiraan).

**Spec**

| Aspek | Isi |
|---|---|
| Kanvas | 1080×1350 (4:5). |
| Margin & zona (terukur) | Konten penuh sampai ±5–7% dari tepi (termasuk header kecil, handle, nomor slide). Judul di atas, doodle di sepertiga bawah. |
| Ukuran teks (terukur) | Tinggi baris rata-rata ≈3.7% lebar (judul lebih besar, isi lebih kecil). |
| Hierarki & batas | Judul 3–8 kata CAPS, isi 15–45 kata. |
| Rumus cover | Doodle + judul pertanyaan/aturan + 1 kalimat janji + panah. |
| Jumlah slide | 8–11. |
| Elemen berulang | Header 'SULICHII | ATTACHMENT STYLE', handle kiri bawah, nomor slide kanan bawah, panah di cover. |

**Lakukan:** Bahasa sehari-hari aku/kamu; Format fase/aturan/langkah; Satu warna tinta  
**Hindari:** Stick figure cokelat yang sama dengan sulichii; Doodle stok yang dipakai akun lain

## R1 · Reels 1 shot footage + teks statis, 6–8 detik — TERBUKTI

11 konten · 2 akun (sincere.emotion · littleplumpoetry) · median 2.2x · rentang 1.6–5.0x

**Cara jalan**

- Detik 0: teks sudah lengkap di layar (judul CAPS + paragraf), footage pelan di belakang
- Detik 0–7.7: tidak ada cut, teks tidak berubah
- Baris terakhir: 'Read caption' / 'Read below' (10 dari 10 sincere)
- Caption berisi lanjutan list (mis. poin 4–5)

**Bukti [FAKTA]**

- DddaXrrzVOG (@sincere.emotion): 373.536 views, 2.9x — https://www.instagram.com/reel/DddaXrrzVOG/
- DdYBk16A3QK (@sincere.emotion): 366.578 views, 2.8x — https://www.instagram.com/reel/DdYBk16A3QK/
- DZp3jABz4pf (@littleplumpoetry): plum 352.090 views, 5.0x — https://www.instagram.com/reel/DZp3jABz4pf/
- Dd258FtAi-6 (@sincere.emotion): 333.366 views, 2.6x — https://www.instagram.com/reel/Dd258FtAi-6/

Median views sincere 130.500, jadi rasio 1.6–2.9x tetap berarti 200–370 ribu views per reel. Durasi 7.6–7.7 detik di 10 dari 10 reel sincere; 0 cut di 11 dari 11 (ffmpeg).

**Kenapa works [PENALARAN]:** 60–80 kata tidak mungkin terbaca dalam 7.7 detik, jadi orang menonton ulang atau menahan layar, lalu lanjut ke caption. Judul berangka ('6 SIGNS…') di 6 dari 10 reel menjanjikan list yang dipotong.

**Produksi untuk securewithaldo:** 0 kredit kalau footage direkam sendiri (langit, jalan malam, jendela). Render HyperFrames 1 template, ganti teks.

**Palet**

- sincere: `#0F0D0D` footage digelapkan · 37% · `#2A231B` · 34% · `#3D3B3A` · 18% · `#FFFFFF` teks putih

**Font**

- Poppins 700: Judul sans geometris tebal CAPS (perkiraan).
- Newsreader: Varian DdS3RmjgVz4: isi pakai serif.

**Spec**

| Aspek | Isi |
|---|---|
| Kanvas | File unduhan 720×1280. Produksi 1080×1920 (9:16). |
| Durasi & ritme | 7.6–7.7 detik (sincere), 6.4 detik (plum). 0 cut per 10 detik. |
| Zona teks (terukur, frame detik 1) | Kiri ±13%, kanan ±14%, atas ±19%, bawah ±19%. Footage digelapkan sampai luma median ±32 dari 255. |
| Gaya teks | Judul CAPS sans tebal 2–4 baris, paragraf sans semibold, baris penutup kecil 'Read caption'. Semua rata tengah, statis, tanpa animasi. |
| Audio | Semua reel punya audio (rata-rata -15.6 sampai -17.3 dB). Isi audio belum ditranskrip. |
| Hook visual | Frame detik 0 = frame detik 3 = frame akhir. Hook sepenuhnya dari judul. |

**Lakukan:** Judul berangka + list dipotong, sisanya di caption; Footage pelan rekaman sendiri, digelapkan; Teks tetap di zona aman ±13% sisi  
**Hindari:** Angle 'bikin dia balik/memohon' (DdsoUQ_AozH); Menyebut pikiran bunuh diri (Dd0VTS_A_Cv); Framing 'abuse' berlebihan (catatan Kurasi)

## R2 · Reels skit dua peran 'Anxious x Avoidant' — KANDIDAT

6 konten · 1 akun (sulichii) · median 7.95x · rentang 3.5–20.0x

**Cara jalan**

- Detik 0–1: judul kuning di atas ('Kalo mereka Deep Talk') + label 'Avoidant X Anxious' di atas kepala
- Dialog bergantian, masing-masing pegang mic, kamera statis
- Subtitle per 2–4 kata, 1 kata di-highlight
- 65–95 detik, tanpa kartu CTA

**Bukti [FAKTA]**

- DWn6pB6k_9p (@sulichii): 290.400 views, 20.0x — https://www.instagram.com/reel/DWn6pB6k_9p/
- DVpNnQ1j80- (@sulichii): 270.350 views, 18.6x — https://www.instagram.com/reel/DVpNnQ1j80-/
- DVXNZaCkzmZ (@sulichii): 145.403 views, 10.0x — https://www.instagram.com/reel/DVXNZaCkzmZ/
- DVNS_SPEoJ9 (@sulichii): 86.241 views, 5.9x — https://www.instagram.com/reel/DVNS_SPEoJ9/

Rasio tertinggi di antara keluarga reels, Bahasa Indonesia. Baru 1 akun. Dua peran kemungkinan diperankan orang yang sama (belum dipastikan).

**Kenapa works [PENALARAN]:** Penonton melihat pola 'satu ngejar, satu menjauh' dari luar, jadi bisa menertawakan dirinya tanpa merasa dihakimi. Label peran membuat orang menandai pasangannya.

**Produksi untuk securewithaldo:** Butuh rekaman orang di depan kamera (Aldo + lawan main, atau Aldo 2 peran dengan split screen). Tidak cocok kalau akun dijalankan faceless.

**Palet**

- sulichii: `#BA9A87` ruangan/kulit · 30% · `#201B1C` baju/gelap · 22% · `#8D705A` · 19% · `#CEC0B6` · 13%

**Font**

- Luckiest Guy: Judul display kuning tebal (perkiraan).
- Anton: Subtitle CAPS tebal (perkiraan).

**Spec**

| Aspek | Isi |
|---|---|
| Kanvas | 9:16, file 720×1280. |
| Durasi & ritme | 71.9–95.5 detik. 0–1 cut per video (kamera statis). |
| Gaya teks | Judul ±15–20% dari atas, label peran di atas kepala, subtitle di dada. |
| Audio | Dialog (belum ditranskrip). |

**Lakukan:** Dua peran adil: dua-duanya punya sisi; Ditutup ke belajar regulasi (DWdrJC7k2zd)  
**Hindari:** Mempermalukan perilaku anxious; Menjadikan avoidant penjahat tunggal

## R3 · Reels talking head + kotak kutipan — KANDIDAT

2 konten · 1 akun (sulichii) · median 4.5x · rentang 3.5–5.5x

**Cara jalan**

- Detik 0: kotak kutipan putih di kiri atas (kalimat khas avoidant / pertanyaan)
- Talking head 1 orang, subtitle CAPS dengan 1 kata kuning
- ±65 detik

**Bukti [FAKTA]**

- DXQRGX4k5v8 (@sulichii): 80.465 views, 5.5x — https://www.instagram.com/reel/DXQRGX4k5v8/
- DWvLMN5E21F (@sulichii): 50.164 views, 3.5x — https://www.instagram.com/reel/DWvLMN5E21F/

Baru 2 konten dari 1 akun.

**Kenapa works [PENALARAN]:** Kutipan di atas berfungsi sebagai judul yang bisa dibaca tanpa suara.

**Produksi untuk securewithaldo:** Butuh rekaman talking head.

**Palet**

- sulichii: `#978475` ruangan · 30% · `#1D1411` · 25% · `#D7BEAF` · 17% · `#AD542B` sofa · 8%

**Spec**

| Aspek | Isi |
|---|---|
| Kanvas | 9:16. |
| Durasi | 64.7–67.1 detik, 0–1 cut. |

**Lakukan:** Kutipan = kalimat yang sering didengar si cemas  
**Hindari:** Diagnosis pasangan

## Mekanik lintas style

| Pola | Konten | Akun | Status | Bukti |
|---|---|---|---|---|
| Slide akhir berisi produk/buku + CTA | 20 | 4 | TERBUKTI | alex 6/6, wycf 8/8, sincere 5/8, sulichii 1/4: DeHKKnUEoJP, Dd6oBxoFgKY, DW3MqIok0s2 |
| 'Comment KATA' → link dikirim lewat DM | 8 | 2 | TERBUKTI | alex 6 (LEARNING / BEGIN), sincere 2 (HEALING): DeMjN2Fkun3, DRYCctzkkcH |
| Judul berangka / list ('5 signs', '11 sentences', 'Fase 1–9') | 12 | 3 | TERBUKTI | sincere 3 carousel + 6 reels, alex 2, sulichii 1: DdYBk16A3QK, DeMjN2Fkun3, DVrhcQLkvFV |
| Awal kalimat diulang tiap slide ('I want to…', 'it had to…') | 3 | 2 | TERBUKTI | wycf 2, alex 1: Dd7IABgmE2E, DdxBH8_kxBx, DeJvBkrkoAR |
| Isi dipotong, lanjutannya di caption ('Read caption') | 10 | 1 | KANDIDAT | sincere 10 reels: Dd258FtAi-6 |
| Kredensial pengalaman pribadi ('I loved an avoidant for 9 years') | 4 | 1 | KANDIDAT | sincere DNpW, Dd2A, Dd4Q, DdS3: DNpWQJRN5La |
| 1 foto dipakai ulang, hanya teks yang berganti | 5 | 1 | KANDIDAT | plum 5 carousel: DbTg5Gjlaym |
| Carousel yang sama dijadikan reel | 1 | 1 | KANDIDAT | sincere Dd4Q → Ddk4: Dd4QnR3Gwza, Ddk4ipuNE8L |
| Pertanyaan pancingan komentar ('Apa jawabanmu?') | 1 | 1 | KANDIDAT | noteovt Ddf0 (12.5x): Ddf0DibhDl_ |

## Rekomendasi untuk securewithaldo (usulan, menunggu pilihan owner)

Brand belum punya Visual Identity Guideline. Warna dan font di bawah adalah arah yang dibandingkan berdampingan dengan referensi di tahap style carousel (W5), bukan keputusan.

### Carousel
1. **K1 Kartu teks polos serif (utama).** Bukti terkuat (12 konten, 2 akun, median 4.45x, outlier 242x), nol kredit, paling dekat dengan HERE.
   Sengaja dibuat beda: warna brand sendiri (arah biru malam / hijau sage / plum redup, bukan krem #F2F3EE + hitam sincere) · label momen kecil di atas cover ala judul video HERE ("pas chatnya cuma dibaca") · serif lain (mis. Newsreader) · Bahasa Indonesia aku/kamu · wordmark kecil securewithaldo.
2. **K2 varian still-life (kedua).** Terbukti, 1 foto HP untuk 1 carousel, dialog dua objek pas untuk "yang dia bilang / yang aku rasain".
   Sengaja dibuat beda: objek dunia si cemas (HP terbalik, dua cangkir, bantal, jam) · foto sendiri (W4) · warna disamakan dengan palet K1 · isi rasa aman, bukan surat cinta.
   - Kandidat untuk dites: **K4 doodle** (sulichii 17.6x, satu-satunya carousel Indonesia khusus anxious). Butuh ilustrasi sendiri; jangan pakai stick figure cokelat yang sama.

### Reels
1. **R1 1 shot + teks statis 7–8 detik (utama).** Terbukti, 1 template HyperFrames.
   Sengaja dibuat beda: tipografi serif sama dengan K1 (DdS3RmjgVz4 membuktikan isi serif jalan) · footage malam rekaman sendiri (kamar gelap, lampu jalan, layar HP mati) · penutup "baca caption".
2. **R2 skit "Anxious x Avoidant" (perlu keputusan).** Median 7.95x, Bahasa Indonesia, tapi kandidat dan butuh Aldo tampil di kamera. Putuskan dulu: akun personal (tampil wajah) atau faceless. Kalau faceless, R1 dibuat dua varian (footage dan kartu polos tanpa footage).

### Voice & rambu
- K1 dan R1 paling pas dengan pola "pengakuan → buka luka → beri nama pola → kembalikan pilihan" dan sudut pandang aku/kita. Kredensial pengalaman ala sincere cocok dengan "aku anxious yang sedang belajar".
- Tidak ditiru: angle "bikin dia balik/memohon" (DdsoUQ_AozH), menyebut pikiran bunuh diri (Dd0VTS_A_Cv), framing "emotional abuse" berlebihan (Dd258FtAi-6), foto intim (DdrZuA2mLU2), kata kasar di judul (DeMjN2Fkun3).
- Aturan HERE: tanpa "jangan overthinking", tidak mempermalukan cek HP/stalking, tidak menakut-nakuti soal ditinggal, tidak klinis. Akun puisi Inggris: ambil sistem visual, kalimat tidak diterjemahkan (W26).

## Catatan data
- Isi suara reels belum ditranskrip (whisper belum terpasang). Semua 19 reels punya audio.
- Ukuran & margin teks terukur hanya untuk latar polos/tekstur (K1, K3, K4) dan frame R1; K2 "belum diukur".
- DNpWQJRN5La dan Dd2ABjDiBrY = carousel yang sama (repost tanpa slide CTA), keduanya dihitung sesuai CSV.
- Alat yang dipasang untuk analisis: Python 3.12, FFmpeg 9.0.2, pillow, numpy, scikit-learn, opencv-python, openpyxl.
