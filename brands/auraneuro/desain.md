# auraneuro — Aturan Desain Carousel & Reels

Versi 1.0 · 17 Oktober 2026 · bahasa konten: Indonesia.

Dokumen ini adalah sumber aturan desain auraneuro untuk manusia maupun AI yang belum membaca percakapan pembuatannya. Dapat dipakai lintas model, perangkat, dan akun. Isinya menggabungkan keputusan owner sampai 17 Oktober 2026 dan spesifikasi mockup v34. **Keputusan final identitas tidak sama dengan persetujuan seluruh contoh, seluruh ukuran, atau pilihan format reels.**

## 1. Cara memakai dan urutan keputusan

1. Baca dokumen ini sebelum mendesain. Untuk pelaksanaan, baca juga `desain-carousel-studio.md` atau `desain-video-studio.md` sesuai hasil yang dibuat.
2. Instruksi langsung owner yang lebih baru mengalahkan versi dokumen ini. Catat perubahan beserta tanggal dan cakupannya; jangan mengubah aturan lain diam-diam.
3. Bedakan label berikut: **FINAL** = dikunci owner; **ATURAN** = hasil koreksi yang wajib diwarisi; **ACUAN SAAT INI** = angka implementasi mockup untuk direproduksi, masih bisa dikoreksi; **KONDISIONAL** = pilihan yang tersedia, belum diputuskan menjadi format tetap; **REKOMENDASI** = saran produksi, bukan keputusan owner.
4. Angka dari mockup adalah titik awal yang bisa diuji, bukan izin mengorbankan makna atau keterbacaan. Jika konflik, pertahankan keputusan owner dan laporkan bagian yang tidak muat.
5. Jangan menjadikan opsi yang kebetulan aktif di browser sebagai keputusan final. Local storage, tombol, atau default kode bukan bukti pilihan owner.
6. Dilarang menyebut pola referensi sebagai terbukti meningkatkan performa hanya karena terlihat menarik. Referensi visual dan bukti performa adalah dua hal berbeda.

### 1.1 Keputusan owner yang dikunci

| Hal | Keputusan |
|---|---|
| Frekuensi latar cover di feed | **FINAL:** 50% hitam, 25% putih/terang, 25% merah, termasuk reels yang terlihat di grid |
| Dunia visual | **FINAL:** campur, berganti sesuai topik; bukan satu dunia untuk semua postingan |
| Ruang kosong di bawah elemen | **FINAL:** bervariasi; tidak diseragamkan atau selalu diisi |
| Merah utama | **FINAL:** `#C80A0A` seperti mockup saat ini |
| Font | **FINAL:** Arimo Bold 700 untuk sans heading, Arimo 400/700 untuk body; Instrument Serif Italic 400 untuk serif |
| Nomor slide | **FINAL:** seluruh opsi menjadi variasi: Romawi serif, label arsip, dan kurung; tidak memilih satu sebagai satu-satunya gaya |
| Format reels | **KONDISIONAL:** belum ditetapkan; simpan seluruh opsi dan keputusan perbaikannya |
| Thumbnail reels | **ARAH SEMENTARA:** kemungkinan besar tanpa thumbnail tambahan. Frame konten harus bekerja sendiri saat terlihat di feed; jangan menganggap pilihan ini sudah final |
| Pemisahan produksi | **FINAL:** carousel ke carousel-studio; reels ke video-studio. Keduanya memakai identitas yang sama |

### 1.2 Keputusan yang belum dikunci

- Pilihan tetap reels #1 dengan/tanpa cover tambahan; reels #2 frame pembuka seperti cover atau teks penuh.
- Pemakaian rutin varian reels #2 A, B, C, D, E, atau F; jangan menghapus varian lama ketika menambah yang baru.
- Seluruh angka ukuran judul untuk semua panjang naskah. Skala saat ini adalah acuan, bukan alasan menolak koreksi owner.
- Distribusi persis dunia visual, pilihan tekstur setiap slide, dan pilihan nomor per konten.
- Durasi, musik, transisi, footage, dan ritme reels final. Preview mockup bukan video produksi.
- Tidak ada keputusan bahwa semua carousel harus berjumlah sepuluh slide atau selalu memakai struktur yang sama.

## 2. Identitas yang harus terasa

Auraneuro membahas kendali diri, pengaruh, persuasi, dan membaca permainan sosial secara agresif tetapi etis. Visual terasa tegas, gelap, bertekstur, penuh kontras, dan terarah. Hindari tampilan motivasi generik, horor sembarang, atau diagram presentasi kantor yang penuh panel paragraf.

Referensi visual utama adalah Kallaway: judul sans tebal + serif italic, sosok/objek monokrom bercahaya, latar hitam bertekstur, dan satu pesan visual. Auraneuro mengadaptasi mekanismenya; bukan menyalin seluruh feed, karakter, watermark, tulisan, atau klaim.

Reels auraneuro sendiri menjadi acuan model paragraf. Referensi thebrainlabco menambah gagasan ilustrasi yang menjelaskan topik, tanpa mengambil palet krem, tipografi, watermark, dan klaim neurosainsnya.

Semua naskah akhir berbahasa Indonesia dan mengikuti Voice DNA: konkret, mudah dibayangkan, vonis/pesan di depan lalu alasan, tanpa slogan seminar. Contoh naskah di mockup hanya bahan uji desain; jangan langsung menganggap klaim Supreme, Hermes, Apple, atau psikologi tertentu siap diterbitkan tanpa pemeriksaan isi.

## 3. Kanvas, koordinat, margin, dan crop

### 3.1 Sistem satuan

- Carousel organik: **1080 × 1440 px, 3:4**.
- Reels: **1080 × 1920 px, 9:16**.
- Simulasi grid/feed reels: ambil area tengah **1080 × 1440**, yaitu y=240–1680 dari frame reels. Jangan mengecilkan seluruh frame 9:16 supaya muat di 3:4.
- Dalam spesifikasi ini, `1cqw = 1% lebar kanvas = 10.8 px` pada lebar 1080. Persentase `top`/`bottom` biasa memakai tinggi kanvas; jangan tertukar.
- Meta Ads 4:5 merupakan output berbeda. Jangan menganggap desain organik 3:4 otomatis siap iklan; lakukan penataan ulang bila diminta.

### 3.2 Margin carousel

- **ATURAN:** seluruh slide menyisakan **120 px di kanan** untuk elemen penting, bukan hanya cover.
- Area judul cover utama: kiri sekitar 120 px, kanan sekitar 120 px; judul di tengah area itu.
- Area slide isi umumnya: kiri 8% = 86.4 px, kanan minimal 120 px. Tepi kiri antarblok teks harus konsisten.
- Judul cover mulai **y≈108 px**, sama dengan 7.5% tinggi carousel atau 10 cqw.
- Jangan menaruh teks penting sampai ke pinggir bawah. Ruang bawah boleh berbeda antarslide sesuai komposisi.
- Gambar dekoratif boleh menembus tepi; teks, wajah penting, angka, dan label tidak boleh terpotong tanpa tujuan yang jelas.

### 3.3 Margin reels saat masuk feed

- **ATURAN:** judul pada frame reels yang berfungsi sebagai muka feed memakai jarak minimal **108 px dari batas atas crop 3:4**, sama seperti carousel.
- Dengan crop mulai y=240, judul reels dimulai **y≈348**. Rumus: `240 + 108`; CSS: `top:calc(12.5% + 10cqw)`.
- **A–F memakai titik awal judul yang sama.** Jangan menaikkan E/F untuk membesarkan gambar; jangan menurunkan judul C untuk memusatkan figur.
- Perubahan posisi figur harus independen dari judul. Pemusatan matematis gambar belum tentu menyeimbangkan seluruh komposisi; tetap lihat hasil crop.
- Reels #1 pada mockup punya margin sekitar 134 px dari crop, masih lebih longgar dari minimum 108. Bukan kesalahan karena tidak lebih mepet dari carousel.

### 3.4 Safe zone video dan pengecualian CTA yang disetujui

- Acuan konservatif video: hindari atas 220 px, bawah 450 px; teks penting umumnya x 35–1045 dan y 240–1470 setelah memperhitungkan crop. Kolom ikon kanan bawah membutuhkan jarak lebih besar; sistem editorial memakai kanan 12% sehingga teks berakhir x 950.4.
- **PENGECUALIAN SPESIFIK OWNER:** setelah melihat pratinjau, owner menjawab “oke” pada 17 Oktober 2026 untuk CTA D–F yang turun hingga **y≈1534**. Tujuannya mempertahankan ukuran ilustrasi E/F serta margin atas judul dan jarak teks. CTA masih masuk crop feed y 240–1680.
- Ini **bukan** perubahan global safe zone platform. Area 1470–1534 berisiko tertutup UI/caption pada tampilan reels penuh. Jangan menyatakan bahwa persetujuan komposisi feed membuktikan aman pada semua perangkat.
- Untuk produksi video, uji dengan overlay UI reels dan preview caption aktual. Jika tertutup, siapkan adaptasi video yang mempertahankan identitas serta versi crop feed; jangan diam-diam mengecilkan gambar atau menggeser judul. Sampaikan komprominya.
- Persetujuan CTA ini tidak mengunci D–F sebagai format reels final.

## 4. Sistem feed: frekuensi dan ragam

### 4.1 Latar dihitung per postingan

- **FINAL:** 50% hitam, 25% putih/terang, 25% merah. Yang dihitung adalah warna latar dominan postingan, bukan persentase piksel dalam satu gambar.
- Pada 12 postingan: **6 hitam + 3 putih/terang + 3 merah**. Reels, carousel figur, dan cover diagram semuanya masuk hitungan.
- Jika batch bukan kelipatan 4, gunakan akumulasi beberapa batch untuk mendekati 50/25/25. Jangan mengklaim rasio persis bila hitungan tidak memungkinkan.
- Acuan urutan mockup 12 slot (kiri→kanan, atas→bawah): `hitam, merah, hitam / putih, hitam, putih / hitam, merah, hitam / hitam, putih, merah`.
- Urutan persis boleh menyesuaikan kalender konten; frekuensinya tetap. Jangan mewarnai postingan semata-mata mengikuti urutan saat thumbnail yang terlihat sebenarnya berbeda.
- Rasio ini mengatur tampak depan feed. Tidak mewajibkan rasio identik di dalam setiap carousel.

### 4.2 Porsi jenis cover

- Cover diagram menjadi variasi sekitar 30% maksimum, tidak mendominasi jenis visual lain.
- Acuan mockup 12: **3 diagram (25%)**, 4 carousel dengan figur/objek, 2 reels #1, 3 reels #2.
- Dua reels #1 wajib tetap muncul di mockup feed saat membandingkan opsi; jangan hilang karena feed dipenuhi diagram.
- Diagram tambahan yang tidak muat porsi feed disimpan di galeri alternatif terpisah, bukan memaksa semuanya masuk grid.
- Angka 12 slot adalah alat uji komposisi, bukan kuota produksi konten bulanan yang telah dikunci.

### 4.3 Dunia visual campur

| Dunia | Bahasa visual | Penerapan dan batas |
|---|---|---|
| Marmer Klasik | Patung kepala klasik, alas museum, cahaya kontur | Wibawa, retorika, posisi sosial; hindari hanya mengulang satu patung |
| Atlas Tubuh | Otak, tangan, mata, anatomi gravir | Kendali, perhatian, bahasa tubuh; bersihkan tulisan Latin/Inggris yang tidak relevan |
| Peta Langit | Peta bintang, lingkaran orbit, cincin | Gunakan sebagai metafora/visual; jangan mengubah brand menjadi ramalan/astrologi |
| Berkas Rahasia | Dokumen, foto arsip, tabel, cap, sensor | Sesuai topik membongkar pola; bukan bukti kriminal palsu atau label dekoratif sembarang |
| Wayang & Blencong | Wayang, lampu, kelir, bayangan | Metafora dalang/kendali yang relevan dan menghormati budaya |
| Panggung & Tali | Topeng, tali, tirai, lampu panggung | Persona/permainan sosial; jangan otomatis menjadi visual horor |

- Pilih dunia dari pesan konten, bukan rotasi acak tanpa alasan. Dalam satu feed bergantian; satu carousel tetap terasa sebagai satu keluarga.
- Istana & Intrik serta Cetak Biru Pikiran pernah disimpan sebagai ide lanjutan, belum menjadi pilihan produksi yang wajib.
- Label lama seperti “Galeri No.” atau nomor koleksi dekoratif bukan izin menambahkan tulisan tanpa fungsi.

## 5. Warna dan kontras

### 5.1 Token dasar

| Peran | Nilai acuan |
|---|---|
| Merah brand | `#C80A0A` |
| Hitam latar | `#151313`; boleh variasi sangat gelap sesuai tekstur |
| Putih/terang latar | `#E3E1DE`, bukan harus putih layar murni |
| Teks di hitam | `#F4F1EE` |
| Teks di terang | `#151212` |
| Teks sans di merah | `#FFF6F3` atau putih yang setara |
| Kata kunci di merah | Hitam sangat gelap, acuan `#0D0202`, agar terbaca |
| Teks sekunder di hitam/terang | `#958C89` / `#5F5856`; periksa ukuran kecil dan kontras |

- Kata kunci serif pada hitam/terang umumnya merah. Di latar merah jangan merah-di-merah; gunakan hitam atau pengecualian marmer yang disebut kemudian.
- Merah brand jangan otomatis dipakai untuk seluruh body kecil. Uji kontras sesuai ukuran dan ketebalan, bukan hanya mengikuti token.
- Jangan mengganti merah ke `#AA0202` atau `#D01010` hanya karena pilihan lama masih ada di kode.

### 5.2 Aksen tambahan terbatas

| Aksen | Nilai acuan | Fungsi |
|---|---|---|
| Hijau | `#76DD91` | Respons dengan batas, keadaan terurut, perbandingan positif |
| Kuning | `#F0D66A` | Titik keputusan/jeda atau satu kata penting |
| Oranye | `#FF6B24` | Satu tahap diagram yang perlu disorot |
| Putih | `#FFFFFF` | Garis/diagram pada latar merah |

- Aksen harus menjelaskan makna; bukan menambah warna karena slide terasa kosong.
- Batasi umumnya satu warna tambahan per frame, di luar palet utama. Jangan menambah latar hijau/kuning/oranye ke hitungan cover 50/25/25.
- Oranye coklat/muted pada tangga pernah ditolak; jangan mengembalikannya. Arah yang diminta: lebih vibrant dan senada merah/kuning/hijau saat ini.
- Di latar terang, aksen boleh digelapkan untuk kontras. Implementasi diagram memakai kuning `#806313` dan hijau `#267744` bila perlu. Perubahan nilai untuk keterbacaan tidak menjadikannya warna brand baru.
- Angka 02 pada kotak oranye memakai tinta gelap; angka 01/03 pada kotak gelap memakai putih.

## 6. Tipografi

### 6.1 Keluarga dan peran

- Sans: **Arimo**, heading 700, body 400, bold 700 untuk penekanan terpilih.
- Serif: **Instrument Serif Italic**, weight 400. Bukan serif roman tegak atau faux-bold.
- Font pembanding lama seperti Inter Tight, Heros, Newsreader, Tinos dan lainnya tidak menjadi opsi brand yang masih bebas dipilih.
- Muat file font lokal dan tunggu font selesai dimuat sebelum mengukur atau merender. Jangan menilai ukuran dari fallback Arial/Georgia lalu mengaku sesuai.
- Body tidak seluruhnya bold; highlight sesuai makna. Kata sans tertentu boleh diberi aksen secara manual jika sama pentingnya, contoh kutipan “nanti aku bantu”. Bukan semua kutipan otomatis merah.

### 6.2 Kapitalisasi

| Lokasi | Aturan |
|---|---|
| Judul cover/hook | Sans CAPS dan kata kunci serif italic CAPS |
| Headline/subheading serif slide isi | Title Case: kapital di awal setiap kata pada frasa |
| Serif inline sebagai body | Boleh lowercase khusus body |
| Body Arimo | Kapital normal sesuai kalimat, bukan seluruh paragraf CAPS |

### 6.3 Hierarki dan ukuran

Satu fokus utama per frame; umumnya maksimal tiga tingkat peran teks. Jangan membuat semua baris sama besar atau membuat konteks kecil yang justru paling menyala.

| Peran | Acuan pada 1080 | Status |
|---|---|---|
| Sans cover hook pendek | 5.8 cqw ≈62.6 px | Sebelum fitting lebar |
| Sans hook 35–50 karakter | 5.2 cqw ≈56.2 px | Sebelum fitting |
| Sans hook 51–66 karakter | 4.6 cqw ≈49.7 px | Sebelum fitting |
| Sans hook>66 karakter | 4.2 cqw ≈45.4 px | Sebelum fitting; pertimbangkan menulis ulang |
| Serif cover maksimum menurut panjang | 26 / 19 / 14 / 11 cqw ≈281 /205 /151 /119 px | Fitting setiap baris, bukan semua memakai maksimum |
| Serif cover diagram/reels editorial | Maksimum 14 cqw ≈151 px | Bisa lebih kecil karena frasa panjang |
| Headline contoh slide isi ringkas | 7.2 cqw ≈77.8 px | Acuan saat ini |
| Subheading langkah/perbandingan | 5.6 cqw ≈60.5 px | Acuan saat ini |
| Body ringkas dan reels #2 | 3.9 cqw ≈42.1 px | Hasil koreksi: jangan dikecilkan lagi untuk memuat naskah |
| Body baca biasa pada layout lama | Sekitar 4.3–4.45 cqw ≈46–48 px | Untuk uraian yang berbeda peran; bukan wajib mengecilkannya ke 42 |
| Body kecil pendukung cover | 3.1 cqw ≈33.5 px | Khusus satu kalimat pendek/konteks cover |
| CTA “Cek caption!” | 3.6 cqw ≈38.9 px, bold 700 | Rata tengah |

- Standar umum lama menyarankan headline 96 px/body 48 px. Owner meminta contoh brand lebih ringkas; tabel ini mencatat pengecualian hasil revisi, **bukan** mengganti standar semua brand.
- Penolakan ukuran terlalu kecil pernah terjadi setelah body diturunkan ke sekitar 36 px. Jangan menjadikan 36 px default isi auraneuro.
- Gunakan line-height sekitar 1.0–1.15 sesuai peran; body ringkas 1.12 dan body reels 1.13. Jangan membuat line-height 0 pada italic.
- Bila body padat: carousel pecah menjadi slide bermakna; reels sesuaikan naskah/durasi/format secara sadar. Jangan mengurangi font secara otomatis setiap kali tidak muat.

### 6.4 Fitting judul dan pemenggalan

1. Tentukan sans pembuka, satu frasa fokus, dan sans penutup opsional dari makna hook.
2. Hitung panjang seluruh hook untuk memilih batas ukuran, lalu ukur font aktual.
3. Tiap baris serif dipaskan sendiri mendekati 70% lebar kanvas, dengan maksimum pada tabel dan batas area aman. Baris pendek boleh lebih besar daripada baris panjang.
4. Acuan algoritme: ukur baris pada 10 cqw; `ukuranBaru = 10 × (0.70 × lebarKanvas) / lebarHurufTerukur`, lalu batasi maksimum. Jangan meluaskan melewati margin hanya untuk mencapai 70%.
5. Frasa serif lebih dari 11 karakter yang memiliki beberapa kata boleh dipecah menjadi dua baris seimbang **per makna**. Jangan memotong kata. Algoritme seimbang hanya bantuan, bukan pengganti keputusan penulis.
6. Sans pembuka dipertahankan satu baris bila muat. Jika panjang, pecah manual di jeda makna; jangan menyerahkan semua ke auto-wrap.
7. Kutipan bertanda petik diperlakukan sebagai satu frasa dan satu font; jangan setengah kutipan di sans dan setengahnya di serif. Hindari pecah kutipan di tengah.
8. Satu kata penutup jangan menggantung di baris sendiri. Gabungkan dengan frasa fokus bila maknanya tepat atau susun ulang hook.
9. Ukur ulang pada grid kecil dan render penuh. Pilihan font/fitting yang berbeda per mesin tidak boleh mengubah susunan makna.

### 6.5 Jarak antarbaris judul

- Sans→serif, serif→serif, serif→sans penutup, dan sans→sans: **3 cqw =32.4 px**, diukur dari tepi huruf kapital yang terlihat, bukan kotak font yang mengandung ruang tak terlihat.
- Implementasi memakai pemotongan kotak font (`text-box:trim-both cap alphabetic`) pada baris yang sesuai. Jika mesin tidak mendukung, pakai pengukuran glyph/render dan penyesuaian eksplisit; jangan menganggap gap CSS sama dengan jarak visual.
- Judul→figur cover utama: acuan 4.8 cqw ≈51.8 px. Elemen terasa dekat sebagai satu komposisi, tanpa menabrak huruf/glow.
- Body pendukung cover: jarak 1.5 cqw ≈16.2 px dari baris judul terakhir; hanya untuk konteks singkat, bukan paragraf reels.
- Kotak frasa kecil: jarak atas 2 cqw ≈21.6 px, padding vertikal 1.2 cqw dan horizontal 1.8 cqw ≈13 × 19 px. Ukuran mengikuti frasa.

## 7. Glow, grain, tekstur, dan cahaya

### 7.1 Huruf bercahaya

- Serif kata kunci harus ber-glow; jangan ada variasi baru yang kehilangan glow saat contoh lama tetap memilikinya.
- Inti huruf tetap tajam; glow bukan blur seluruh teks.
- Acuan glow merah di gelap: tiga lapis radius 0.3 cqw,2.6 cqw,7 cqw dengan opasitas merah sekitar 75%,60%,32%. Latar terang lebih ringan; di merah gunakan bayangan gelap yang membantu bentuk huruf.
- Subheading serif, frasa serif body, label perbandingan, dan angka langkah yang memakai aksen juga mewarisi treatment relevan. Glow hijau mengikuti hijau, bukan otomatis merah.
- Jangan menganggap larangan kilau animasi berarti menghapus glow statis.

### 7.2 Grain

- **ATURAN:** grain diam, halus seperti film, bukan semut TV. Grain harus di belakang teks.
- Seluruh latar punya grain super tipis; lapisan kedua lebih terasa dari sisi/pojok tertentu, memudar ke area lain.
- Variasi arah: kanan, kiri, atas, bawah, kiri atas, kanan atas, kiri bawah, kanan bawah, empat pojok, atau penuh sangat tipis.
- Latar merah: butir halus rapat, gradasi jauh dan lembut. Kekasaran hitam/merah sudah dikurangi; jangan kembali ke noise kasar versi awal.
- Acuan implementasi aset sekarang:

| Latar | Grain dasar | Grain bergradasi |
|---|---|---|
| Hitam | `grain_dk.webp`, screen, tile 384 px, opacity 0.11 | Aset sama, opacity 0.35; versi penuh 0.10 |
| Putih/terang | `grain_lt.webp`, multiply, tile 384 px, opacity 0.32 | Aset sama, opacity 1 dengan mask yang memudar |
| Merah | `grain_hd.webp`, overlay, tile 512 px, opacity 0.04 | `grain_rd.webp`, normal, tile 384 px, opacity 0.45; penuh 0.18 |

- Angka opacity bergantung pada file teksturnya. Jangan menerapkan angka ini ke noise baru yang jauh lebih kasar lalu menganggap hasil setara.
- Urutan konseptual: latar/tekstur/cahaya → figur/gambar → teks/label tajam. Jangan menaruh grain di atas huruf sampai mengurangi keterbacaan.

### 7.3 Figur, pencahayaan, marmer

- Figur cover monokrom, putih/terang, bertekstur gravir/stipple/halftone, boleh bercahaya di tepi. Jangan mengganti figur menjadi siluet hitam karena efek lampu belakang.
- Glow mengikuti kontur cutout; bukan cakram putih besar di belakang kepala yang tidak mengikuti bentuk.
- Cahaya bisa putih di kontur, merah di kontur, atau lampu belakang. Variasi ini tidak wajib muncul pada tiap postingan.
- Terang: bayangan lembut untuk memisahkan objek dari kertas; jangan memaksakan aura merah pekat ke semua figur.
- Marmer: merah, hitam urat putih, hitam urat merah, putih urat abu, dan merah tua. Urat samar di area teks; gunakan peneduhan lokal jika mengganggu.
- Marmer merah tua: kata kunci boleh putih dengan glow merah. Ini pengecualian kontras tekstur, bukan menghapus merah dari identitas.
- Kertas terang: grid titik/kotak sangat samar. Jangan membuat grid jadi fokus.
- Peta langit boleh menembus bawah frame. Cincin terluar tidak menyentuh judul; saat digeser ke sisi, perbesar secukupnya agar sisi lain tidak kosong tanpa sengaja.

## 8. Komposisi dan ruang kosong

- **FINAL:** ruang bawah bervariasi antarpostingan. Opsi: polos, gradasi bawah, memperbesar elemen, atau gabungan keduanya.
- Jangan memaksa setiap gambar berhenti pada garis bawah yang sama. Bedakan ruang kosong yang disengaja dari layout yang menumpuk di atas dan terasa belum selesai.
- Gradasi bawah adalah variasi cover, bukan lapisan wajib pada semua slide 2+.
- Pembesaran elemen tidak mengubah margin judul, safe zone teks, atau keterbacaan. Jika aset tidak cukup tajam, cari aset lain.
- Hindari menduplikasi satu pesan sebagai label dekoratif di beberapa tempat. Satu informasi tampil sekali, kecuali ada fungsi bukti/penjelasan yang jelas.
- Tidak ada logo/nama akun pada carousel. Tidak ada handle, nomor koleksi, “SIGNAL”, “LIVE”, atau label dekoratif tanpa konteks. Kredit aset yang memang wajib tetap boleh dicantumkan secara fungsional.
- Ikon carousel/reels di pojok grid mockup serta garis merah crop adalah alat preview; **bukan** bagian gambar yang diekspor.
- Rata umumnya konsisten per frame. Pengecualian owner: heading/CTA reels tengah + paragraf justify; serta kelompok perbandingan tengah + isi kartu kiri.

## 9. Cover carousel: keluarga yang tersedia

### 9.1 Cover figur/objek

- Sans pembuka → kata kunci serif → sans penutup bila perlu → figur/objek relevan di bawah.
- Figur menjadi visual utama yang mudah dikenali di grid. Bukan foto stok kantor netral yang tidak menjelaskan konflik hook.
- Boleh ada variasi sans dominan jika pesan menuntutnya. Fokus satu frasa; konteks lebih kecil/netral.
- Opsi seluruh judul all-sans pada contoh “Kenapa Yang Diam Justru Paling Ditakuti” pernah ditolak. Jangan mengembalikannya sebagai opsi yang sudah disetujui. Penggantinya campuran sans dan serif dengan hierarki jelas.
- Cover berbody boleh satu kalimat pendukung dekat judul. Jangan mengulang hook atau menambah uraian penuh.
- Kotak kecil boleh memberi konteks; jangan menjadikannya panel besar. Pada varian kotak, serif “BATAS YANG JELAS” tetap dominan dan bercahaya.

### 9.2 Cover diagram

- Diagram menggantikan figur sebagai visual utama. Ini adaptasi untuk cover carousel, meski contoh feed Kallaway banyak memakai diagram di reels.
- Diagram menyampaikan hubungan/urutan, tidak menjadi kumpulan kotak berisi paragraf.
- Komposisi: judul sama keluarga dengan cover lain, diagram tengah, satu kalimat makna di bawah jika membantu.
- Acuan penempatan: judul y 108; bidang diagram kiri 10%, kanan 14%, top 35%, tinggi 43% carousel; kalimat bawah bottom 12.8%, font 3.7 cqw ≈40 px.
- Bentuk ditentukan isi: cabang untuk keputusan, tangga untuk tahap, dua jalur untuk perbandingan, siklus untuk pengulangan. Jangan memakai tangga hanya karena ingin tampak seperti infografik.
- Galeri saat ini: A cabang keputusan (kuning), B tangga respons (oranye), C dua jalur (hijau), D siklus (putih di merah). Nama A–D ini **diagram**, berbeda dari nama A–F **reels #2**.

### 9.3 Kebersihan diagram: aturan hasil revisi

1. Teks di dalam kotak/belah ketupat punya padding nyata, termasuk sisi miring dan sudut. Ukur huruf, bukan hanya anchor tengah.
2. “Tenggat / bentrok?” harus berada aman di dalam belah ketupat; perkecil huruf atau perluas bidang sesuai hubungan, jangan biarkan garis menyentuh huruf.
3. Label “Ya”/“Tidak” tidak boleh dilewati garis. Putuskan/rutekan garis di sekeliling label, atau sediakan latar label yang bersih.
4. “Langsung iya” dan label panjang lain tidak menempel pada bingkai. Perbesar node atau kecilkan label sesuai hierarki; jangan memipihkan huruf.
5. “Tanya / tenggat” dan “Sepakati / urutan” satu kelompok. Jarak cukup lega tetapi tidak terasa dua label terpisah. Acuan 45 unit SVG antara anchor dua baris, font 40/32 pada viewBox 700 × 620; ini koordinat SVG, **bukan** 45 px final kanvas.
6. Angka pada kotak tangga harus berpusat secara visual. Gunakan metrik huruf untuk baseline; `dominant-baseline:middle` saja pernah menghasilkan angka terlalu tinggi. Jika sengaja angka di atas, ubah bentuk menjadi batang yang jelas, bukan kotak nanggung.
7. Label “Menumpuk” masuk ke batang/kartu hasilnya, atau beri jeda jelas dari kalimat penutup. Jangan menumpuk label tepat di atas kalimat bawah.
8. Panah siklus mengikuti kelengkungan lingkaran. Kepala panah mengikuti garis singgung di ujung arc; jangan menggambar kepala miring yang tampak terlepas.
9. Garis, node, label, dan footnote tidak bersinggungan. Periksa di ukuran penuh dan thumbnail; simetri koordinat saja belum cukup.
10. Diagram slide isi v23 ditolak karena penuh dan tidak proporsional. Jangan memakainya sebagai template produksi.

## 10. Slide isi carousel

### 10.1 Pilihan struktur

- Listicle: satu poin/kejadian utama per slide; nomor opsional sesuai fungsi.
- Storytelling: adegan → eskalasi → pola → penjelasan → tindakan/payoff. Alur mockup sepuluh slide adalah contoh, bukan formula wajib.
- Teks + figur menembus bawah; teks di atas figur pudar; kertas fotokopi; marmer; dialog/chat; diagram; dan perbandingan boleh digunakan sesuai materi.
- Campur kepadatan dan latar untuk ritme, tetapi jangan mengganti sistem font/margin setiap slide.
- Hook harus dipenuhi isi. Hindari klaim ekstrem yang hanya dipakai agar judul terasa dramatis.

### 10.2 Teks dan langkah

- Headline, subheading, dan body tidak otomatis diturunkan ukurannya karena frame terlihat kosong. Tentukan berdasarkan peran tabel tipografi.
- Satu frasa harus terbaca sebagai satu unit; gap antar kelompok lebih besar daripada antarbaris dalam kalimat.
- Angka untuk 1–4 langkah: Arimo 700, merah ber-glow, sekitar 9.2 cqw ≈99.4 px, sejajar secara vertikal dengan keseluruhan blok teks langkah. Bukan angka tipis yang menggantung di atas label.
- Jika langkah lebih banyak, acuan indeks 7.4 cqw ≈79.9 px; jangan memadatkan daftar panjang sampai body terlalu kecil. Pertimbangkan memecah slide.
- Label langkah serif Title Case sekitar 60.5 px; body 42.1 px. Acuan jarak antar langkah 6 cqw ≈64.8 px; jarak label–body 1.8 cqw ≈19.4 px.

### 10.3 Nomor slide sebagai variasi

| Gaya | Bentuk | Acuan implementasi |
|---|---|---|
| Romawi serif | `II`, `III`, `IV` + garis pendek | Instrument Serif Italic, aksen, sekitar 11 cqw ≈119 px |
| Label arsip | `POIN 02` + garis kecil | Arimo, jarak huruf lebar; awal 3.1 cqw ≈33.5 px |
| Kurung | `[ 02 ]` | Arimo 700, aksen, awal 4.6 cqw ≈49.7 px |

- **FINAL:** ketiganya tersedia untuk variasi. Jangan mengunci Romawi hanya karena default mockup `num:'rom'`.
- **REKOMENDASI:** pilih gaya yang cocok dengan keluarga konten; konsistensi dalam satu rangkaian membantu pembaca. Tidak perlu mengganti bentuk nomor pada setiap slide tanpa alasan.
- Nomor slide/poin ini berbeda fungsi dari indeks 01/02/03 pada diagram. Jangan memaksa diagram memakai Romawi karena carousel lain memakai Romawi.

### 10.4 Kartu perbandingan

- Bila susunan kiri membuat kanan terasa kosong karena kartu, pusatkan kelompok heading+kartu di area aman.
- **Isi kartu tetap rata kiri**, karena bisa bertambah elemen lain. Jangan otomatis menjadikan semua paragraf di kartu rata tengah.
- Tanpa elemen tambahan: lebar kartu mengikuti baris terpanjang + padding kiri/kanan sama. Kartu boleh berbeda lebar, tetapi pusatnya sama.
- Jangan menyediakan kolom kosong besar untuk elemen yang belum ada.
- Acuan padding kartu 2.8 × 3 cqw ≈30 × 32 px; jarak antarkartu 3 cqw ≈32 px; label 60.5 px; body 42.1 px.
- Label “Tanpa Batas” merah; “Dengan Batas” hijau. Tanda ×/✓ membantu makna, bukan satu-satunya pembeda.

### 10.5 Diagram slide isi

- Heading memberi konteks, gambar menjelaskan hubungan, kalimat bawah memberi makna. Tiga bagian tidak saling mengulang seluruh informasi.
- Contoh hubungan: dua hal bergabung, cabang, siklus, sebab–respons. Diagram tidak wajib pada tiap slide.
- Acuan v24 bidang gambar 64% lebar × 42.06 cqw tinggi ≈691 × 454 px. Heading mulai sekitar y 245; gambar sekitar y 504; kalimat sekitar y 1044. Sesuaikan isi dan cek jarak visual.
- Label SVG sekitar 38 unit dan label kecil 34 unit sebelum scaling, bukan ukuran font final langsung. Ukuran hasil render harus terbaca.

## 11. Reels: keputusan kondisional dan identitas bersama

### 11.1 Arah saat ini

- Keputusan reels belum final. Owner menyatakan **kemungkinan besar tidak memakai thumbnail tambahan**.
- Desainlah frame video yang benar-benar muncul sebagai tampak depan feed. Jangan membuat cover cantik yang tidak pernah muncul dalam konten lalu menganggap feed beres.
- Carousel-studio menghasilkan carousel; video-studio menghasilkan video. Frame video tetap mengikuti palet, font, margin judul crop, glow, dan bahasa visual yang sama.
- Keselarasan tidak mensyaratkan semua reels memakai patung atau layout cover yang identik. Judul, tekstur, warna, proporsi, dan ilustrasi relevan menyatukan feed.

### 11.2 Reels #1: jendela klip

- Konten berpusat pada jendela footage/klip, dengan teks relevan. Mockup jendela memakai posisi top 29.5%, tinggi 41% frame, latar hampir hitam; ini acuan komposisi, bukan footage final.
- Opsi yang tersimpan: tanpa cover tambahan, atau cover PNG. Pilihannya belum dikunci; arah terbaru cenderung tanpa thumbnail tambahan.
- Bila tanpa cover, pilih frame nyata yang terbaca di crop 3:4 dan tidak menampilkan transisi/layar kosong. Periksa wajah, teks, dan jendela klip terhadap UI.
- Tetap tampilkan reels #1 saat menguji feed campuran; jangan diganti seluruhnya oleh carousel/diagram/reels paragraf.

### 11.3 Reels #2: teks utuh

- Model konten mengikuti akun auraneuro: **judul + satu paragraf utuh + “Cek caption!”**. Acuan panjang sekitar 45–65 kata, menyesuaikan naskah sebenarnya.
- Jangan mengubahnya menjadi dua kalimat sangat pendek atau daftar hanya agar layout mudah. Jika struktur isi perlu berubah, jelaskan dan minta arah sesuai cakupan tugas.
- Heading tengah, body justify dengan baris terakhir kiri, CTA tengah. Ini pengecualian eksplisit terhadap prinsip satu sumbu rata.
- Body Arimo 400/700, 3.9 cqw/1.13; hindari jarak kata ekstrem akibat justify. Periksa tiap baris secara visual dan atur naskah/pemenggalan bila perlu.
- Area editorial: kiri 8%, kanan 12%; judul mulai y 348 untuk seluruh A–F. Ukuran sans awal 6.4 cqw ≈69 px, serif maksimum 14 cqw ≈151 px.
- Judul boleh sedikit lebih besar daripada v30, tetapi tidak diperbesar sampai menghapus ruang baca. Font body tidak ikut berubah ketika judul dipindah.

### 11.4 Perpustakaan varian A–F, jangan dihapus

| Varian | Urutan/format | Catatan keputusan |
|---|---|---|
| A | Judul → garis pendek → paragraf terbuka → CTA | Varian lama dipertahankan; bukan otomatis rekomendasi final, ruang bawahnya pernah dinilai terlalu kosong |
| B | Judul → garis → paragraf dalam panel tipis → CTA | Panel memberi kelompok, bukan kartu tebal; padding 3.2 cqw ≈35 px |
| C | Judul → garis → paragraf dengan figur samar → CTA | Figur di belakang boleh; judul wajib sejajar A/B, jangan ikut diturunkan |
| D | Judul → paragraf → ilustrasi antrean/pintu → CTA | Ilustrasi menjelaskan akses/penolakan, bukan patung dekoratif acak |
| E | Judul → ilustrasi identitas/kelompok → paragraf → CTA | Jarak judul–ilustrasi dan ilustrasi–body keduanya wajib diperiksa |
| F | Judul → paragraf → ilustrasi hadiah→transaksi → CTA | Ilustrasi lebih lebar, CTA tetap terpisah |

- C: acuan figur dekoratif lebar 65% kanvas, opacity 0.075, center x 50% dan y 55% frame. Itu posisi figur, **bukan** posisi judul atau jaminan otomatis bahwa komposisi sudah seimbang.
- Naskah contoh D/E/F berbeda sesuai topik. Jangan memakai ilustrasi hadiah untuk paragraf identitas hanya demi konsistensi bentuk.
- Referensi thebrainlabco: garis pandang/figur untuk perhatian dan lingkaran/figur/objek untuk batas toleransi. Prinsip yang diambil: ilustrasi bermakna dan alur baca, bukan klaim ilmiahnya.

### 11.5 Aturan ukuran ilustrasi dan jarak yang tidak boleh terulang salah

1. **Batas maksimum mengikuti D**, bukan seluruh ilustrasi diwajibkan sama dimensi. Skalakan proporsional, jangan stretch.
2. Acuan bidang SVG pada 1080: D maksimum ≈961 px lebar dan 423 px tinggi; E tinggi ≈380 px; F tinggi ≈314 px pada bentuk ilustrasi saat ini. Kotak SVG mengandung ruang internal: bandingkan **bentuk yang terlihat**, bukan angka kotaknya saja.
3. E/F pernah ikut mengecil ketika judul dikoreksi. **Dilarang:** perubahan yang hanya diminta pada judul tidak boleh otomatis mengecilkan ilustrasi yang baru ditinjau. Kunci ukuran ilustrasi per varian, lalu atur ulang ruang lain secara sadar.
4. Jangan memperbesar ilustrasi dengan mengangkat judul ke margin 44 px dari crop. Margin 108 px tetap.
5. Periksa minimal tiga jarak: tepi huruf terakhir judul→bentuk ilustrasi/body; bentuk ilustrasi→body; ilustrasi/body→CTA. Jangan hanya melihat gap antar kotak CSS.
6. Ilustrasi di bawah body (D/F) diberi ruang atas; E diberi ruang sebelum dan sesudah gambar. Koreksi “body mepet” berlaku juga bila setelah judul langsung gambar.
7. Acuan CSS ilustrasi saat ini: gap antarbagian 3 cqw; margin sesudah judul 3 cqw tambahan; margin atas bidang gambar 4 cqw; E margin sebelum body 5 cqw; CTA padding atas 2 cqw. Ini mekanisme mockup, bukan jaminan jarak terlihat sama ketika aset diganti.
8. Area SVG harus mengikuti bidang yang dialokasikan. Jangan biarkan tinggi intrinsik SVG menembus CTA; bug ini pernah terjadi. Ukur bounding box dan lihat render.
9. Owner mengizinkan CTA D–F turun bersamaan sampai y 1534 untuk mempertahankan komposisi ini. Lihat pengecualian safe zone §3.4 sebelum produksi video.
10. Untuk ilustrasi baru, tentukan rasio dan ukuran bentuk yang terlihat, uji terhadap batas D dan jarak teks, lalu cek grid. Jangan menyalin tinggi E secara buta untuk gambar yang bentuknya berbeda.

### 11.6 Motion dan waktu baca

- Grain tetap diam. Judul tidak perlu bergerak untuk membuat feed terasa hidup.
- Kilauan cahaya yang menyapu cover sudah ditolak/dihapus. Jangan menambahkan kembali efek “sheen”.
- Motion lain tetap boleh: cap jatuh, peta berputar pelan, wayang/topeng bergoyang, lampu panggung, dorong kamera pelan, anatomi berdenyut. Hapus hanya efek yang diminta, bukan semua gerak.
- Motion tidak boleh membuat dua salinan kata/angka terlihat bersamaan saat transisi atau membawa teks keluar margin.
- Video teks penuh harus memberikan waktu membaca satu paragraf. Durasi ditentukan lewat uji baca; jangan menetapkan durasi hanya agar cocok animasi pendek.
- Mockup HTML dan contoh motion bukan bukti video final, sinkron audio, kompresi, atau UI reels sudah diuji.

## 12. CTA carousel dan CTA reels tidak disamakan

- “Cek caption!” adalah CTA contoh reels #2. Bukan CTA jualan wajib untuk seluruh carousel.
- Carousel menentukan tujuan per konten: menyimpan, membagikan, membaca lanjut, atau langkah produk yang relevan. Jangan menambahkan produk yang belum ada dalam brief.
- Slide CTA jualan: headline klaim/core promise yang bersumber, subheadline yang menjelaskan nilai, lalu satu tindakan jelas. Tidak cukup hanya “klik link di bio” + sampul.
- Sediakan tiga keluarga visual ketika membangun template CTA: tanpa preview, preview produk asli, bukti asli. Tidak semua dipakai sekaligus dalam satu konten.
- Preview produk boleh campuran sampul+halaman isi yang terbaca, tidak diblur. Bukti/testimoni harus asli, data pribadi ditutup.
- Bentuk CTA boleh tombol, kata kunci, atau teks bold; jangan selalu mengulang kalimat identik. Tema boleh bervariasi dalam identitas brand.
- Tidak ada angka pembeli, hasil, atau studi karangan. Naskah CTA mengikuti produk/voice dan persetujuan konten, bukan contoh brand lain.
- Rasio funnel 40/40/20 dari standar lintas brand adalah bahan pertimbangan, **bukan kuota auraneuro yang telah dipilih owner**.

## 13. Aset, bukti, dan portabilitas

- Gunakan aset bebas/berlisensi tepat, aset asli brand, atau ilustrasi buatan sendiri yang relevan. Simpan sumber, kredit, lisensi, dan tanggal ambil.
- Prioritas foto: resmi/bebas pakai; lalu media dengan kredit yang benar; lalu ilustrasi. Aturan proyek melarang penggunaan foto Getty/Reuters/AP tanpa sumber alternatif yang diizinkan.
- Jangan membuat foto berita palsu atau bukti/testimoni palsu. Screenshot bukti mempertahankan tampilan asli yang terbaca, tidak dicelup warna brand.
- Logo/ikon/teks asing yang tertanam pada aset dibersihkan jika tidak relevan; jangan menghilangkan kredit yang diwajibkan lisensi.
- Gambar transparan harus mempunyai tepi bersih, tidak membawa kotak latar, dan cukup tajam pada render 1080. Tetap periksa hasil glow/cutout.
- Generate berbayar memerlukan persetujuan sesuai aturan aset proyek; jangan menganggap dokumen desain ini adalah izin membelanjakan kredit.
- File font inti: `Arimo.ttf`, `InstrumentSerif-Italic.ttf`; bawa juga lisensi font dan kredit aset saat pindah perangkat.
- Di folder brand ini, aset ada di `06_Automation_Kit/01_Carousel_Style/Mockup_Feed_auraneuro/fonts/` dan `.../img/`.
- File Markdown menjelaskan aturan, tetapi tidak menyertakan bitmap/font di dalamnya. Untuk reproduksi visual yang sama, pindahkan juga aset tersebut dan minimal satu screenshot acuan terbaru. Tanpa aset, AI boleh merekonstruksi prinsip, tidak boleh mengklaim hasil identik.
- Jangan bergantung pada path pengguna Windows atau akses localhost dari perangkat lain. Gunakan path relatif di proyek; URL publik mockup hanya untuk referensi visual, bukan pengganti font/aset lokal.

## 14. Prosedur kerja untuk AI baru

1. Baca status keputusan §1 dan tentukan studio/output. Jangan meminta owner memilih ulang warna/font/dunia visual yang sudah final.
2. Pahami topik, audience, hook, bukti, tujuan, dan CTA. Pilih visual yang menjelaskan pesan.
3. Buat peta frame/slide dengan satu fokus tiap frame. Tentukan background dan jenis cover dalam peta feed 50/25/25.
4. Kunci kanvas, crop, margin, font, dan ukuran teks sebelum menghitung ruang gambar. Muat font aktual.
5. Pilih keluarga komposisi. Jika reels, tulis opsi mana yang sedang diuji; jangan mengunci keseluruhan format reels dari satu contoh.
6. Tata judul per makna, ukur batas huruf dan margin crop. Pilih ilustrasi serta ukur bentuknya, bukan kotak kosong file.
7. Periksa hasil render sendiri sebelum mengirim: ukuran penuh, thumbnail grid, semua slide/varian yang terdampak. Perbaiki tabrakan tanpa menunggu owner menemukannya.
8. Jika revisi hanya menyasar margin, jangan ikut mengganti naskah/font/warna/ukuran gambar tanpa sebab. Jika harus berubah karena konflik ruang, jelaskan sebelum menganggap selesai.
9. Catat keputusan baru, spesifikasi baru, dan status yang belum final. Simpan versi sebelumnya; jangan menimpa berkas milik user yang tidak diminta.
10. Laporkan perubahan, yang sudah dicek, dan yang belum. “Sudah dirender” tidak sama dengan “sudah dilihat”. Jangan mengklaim HP/video final sudah diuji hanya dari browser desktop.

## 15. Checklist penerimaan

### Identitas dan feed

- [ ] Rasio latar seluruh postingan terlihat 50/25/25; pada 12 slot tepat 6/3/3.
- [ ] Dunia visual campur dan relevan, bukan satu objek yang diulang.
- [ ] Porsi diagram tidak mendominasi; contoh 3/12; reels #1 tetap hadir di uji feed.
- [ ] Arimo + Instrument Serif benar-benar termuat; merah utama `#C80A0A`.
- [ ] Ruang bawah bervariasi dengan alasan; bukan semuanya kosong atau semuanya dipenuhi gradasi.
- [ ] Tidak ada logo akun/label dekoratif/crop overlay yang ikut output carousel.

### Tipografi dan komposisi

- [ ] Judul cover mulai 108 px; reels editorial 348 px dari frame penuh atau 108 px dari crop.
- [ ] A–F sejajar, termasuk C; figur tidak menggeser posisi judul.
- [ ] Gap judul diukur dari huruf, kutipan utuh, tidak ada kata menggantung.
- [ ] Body ringkas ≈42 px tidak dikecilkan untuk memuat konten; maksimal tiga peran ukuran jelas.
- [ ] Serif cover CAPS; serif headline/subheading isi Title Case; lowercase hanya body.
- [ ] Glow ada dan inti huruf tajam. Grain diam di belakang teks.
- [ ] Perubahan judul tidak diam-diam mengubah ukuran ilustrasi E/F.
- [ ] Body E tidak menempel ke ilustrasi; D/F punya jarak body–gambar; CTA terpisah.
- [ ] Area aman kanan 120 px pada semua carousel; crop dan overlay reels diuji terpisah.

### Diagram dan output

- [ ] Label muat dengan padding; garis tidak melewati huruf; panah mengikuti lintasan.
- [ ] Angka tangga terpusat secara visual; jarak dua baris label optimal.
- [ ] “Menumpuk” dan kalimat bawah tidak terlihat satu tumpukan teks.
- [ ] Gambar tidak stretch; figur/cincin tidak menyentuh judul; batas maksimum mengikuti D.
- [ ] Render penuh dan grid dilihat; video juga diperiksa di awal/tengah/transisi/akhir.
- [ ] CTA 1534 hanya dipakai dengan memahami pengecualian feed; belum otomatis aman di UI reels.
- [ ] Semua klaim/angka/aset punya dasar. Naskah mockup tidak otomatis menjadi naskah final.
- [ ] Opsi reels yang belum dipilih tetap ditandai kondisional.

## 16. Sumber dan riwayat, bukan aturan tambahan tersembunyi

Sumber utama: keputusan owner pada iterasi mockup sampai v34, termasuk persetujuan CTA turun dan keputusan identitas pada 17 Oktober 2026. Angka implementasi diperiksa dari HTML dan pengukuran browser; bukan hasil penelitian efektivitas desain.

Sumber pendukung di folder brand:

- `_Brand_Docs/Auraneuro_-_Brand_Brief_v2_FINAL.md` dan `Auraneuro_-_Voice_DNA_v1_1.md`: positioning/isi/suara.
- `06_Automation_Kit/01_Carousel_Style/HANDOFF_Mockup_auraneuro.md`: riwayat revisi, termasuk keputusan yang sudah diganti.
- `06_Automation_Kit/01_Carousel_Style/Mockup_Feed_auraneuro/index.html`: snapshot implementasi. Bila CSS lama bertentangan dengan keputusan terbaru di sini, jangan memulihkan perilaku lama hanya karena masih ada dalam source.
- `05_Analysis/Analisis_Tone_Kallaway_auraneuro.md`: pengukuran referensi. Saran grain beranimasi pada analisis awal **sudah diganti** keputusan owner: grain diam.
- `05_Analysis/Analisis_Feed_Diagram_dan_Reels_auraneuro_v1.md` dan `Analisis_Referensi_Ilustrasi_Reels2_auraneuro_v1.md`: konteks eksplorasi; paragraf rata kiri pada versi awal **sudah diganti** justify.
- Standar proyek: layout/safe zone, menulis carousel, aset visual, dan CTA. Inti yang diperlukan sudah dirangkum di dokumen ini. Aturan platform/harga/tool yang berubah perlu diperiksa saat produksi; jangan memakai tanggal dokumen sebagai jaminan masih berlaku selamanya.

Mockup publik: https://auraneuro-feed-mockup.reybuss.chatgpt.site . Dokumen ini mengatur desain, bukan kredensial hosting. Jangan memasukkan token, data login, atau informasi akun ke paket panduan.

Riwayat versi 1.0: pertama kali menyatukan keputusan desain sebagai pedoman portabel; frekuensi warna, dunia campur, ruang bawah bervariasi, font, merah, dan tiga gaya nomor ditegaskan final; reels tetap kondisional dan dipisahkan jalur studionya. Tidak berarti seluruh gambar contoh sudah menjadi template produksi final.
