# Brief — Analisis style visual (task 2.2 + dasar 2.3/2.4)

Untuk dijalankan di **Claude Code**. Buka Claude Code di folder `C:\Users\ASUS_M3400Q\Documents\Asendra\brands`, supaya `CLAUDE.md` (konteks project) otomatis terbaca dan keempat brand bisa diakses. `CLAUDE.md` tidak perlu ditempel; cukup tempel prompt di bawah.

Kalau nanti lanjut membangun template carousel (task 2.3), beri akses ke perpustakaan template dengan perintah `/add-dir C:\Users\ASUS_M3400Q\Documents\Asendra\carousel-studio` di dalam Claude Code.

## Tujuan
Dari postingan akun **benchmark style** yang sudah di-download, temukan **sistem visual yang terbukti menang**, lalu tulis spesifikasinya cukup detail supaya bisa dibangun ulang:
- carousel lewat skill `carousel-style-cloner`
- reels lewat Remotion / HyperFrames / generator video

Hasilnya dipakai untuk task 2.3 (style carousel), 2.4 (spec reels) dan 2.7 (ACC style).

## Input yang sudah siap
| Brand | Akun style yang sudah di-download | File angka per postingan |
|---|---|---|
| securewithaldo | sincere.emotion, wordsyoucantfind, littleplumpoetry, alexaubreypoetry, sulichii, noteovt | `securewithaldo\05_Analysis\Data_Performa_Download_securewithaldo.csv` |
| auraneuro | mr.psikologi, dark.psychologyyyy, byimpact | `auraneuro\05_Analysis\Data_Performa_Download_auraneuro.csv` |
| evotitan | papanca.io | `evotitan\05_Analysis\Data_Performa_Download_evotitan.csv` |
| fitasset lab | hormozi, thewealthydesk, energisemotiv | `fitasset lab\05_Analysis\Data_Performa_Download_fitasset_lab.csv` |

- **File angka** berisi tiap postingan yang ada di folder download: likes, views, komentar, jumlah slide, durasi, tanggal, rasio vs median akun, dan kolom **`Masuk analisis`** (Ya kalau ≥ 1.5x median). Angka diambil 9 Okt 2026.
- **Peran tiap akun** (style Utama/Pendukung + rambu) ada di `01_Benchmark_Accounts\Kurasi_Benchmark_Style_vs_Ide_<brand>.xlsx`, sheet "Kurasi per akun".
- **Dokumen brand** ada di `_Brand_Docs\`.
- Khusus fitasset: baca juga `00_Market_Brief\Riset_Selera_Visual_fitasset_lab.md` dan `Opsi_Style_Carousel_Profesional_fitasset_lab.md`.

## Langkah

**0. Siapkan alat (sekali saja)**
```
pip install pillow numpy scikit-learn imageio-ffmpeg opencv-python
```
Fungsinya: mengambil warna dominan (k-means), ukuran gambar, frame video, durasi, dan deteksi cut.

**1. Saring.** Pakai hanya baris `Masuk analisis = Ya` di file angka. Postingan lain boleh dilihat sebagai pembanding, tapi tidak dihitung sebagai bukti.
- Pengecualian: baris `Cek manual` yang kolom Catatan-nya menyebut **"proxy komentar ≥1.5x"** (likes disembunyikan, khusus @byimpact) boleh dipakai, tapi hanya sebagai bukti **KANDIDAT**. Satu keluarga style tidak boleh berstatus TERBUKTI kalau buktinya cuma dari proxy komentar.

**2. Catat tiap postingan (data, belum kesimpulan)** ke `<brand>\05_Analysis\Style_Log_<brand>.csv`. Kolom:
- **Identitas & angka:** akun, shortcode, tipe (carousel/reel/gambar), jumlah slide atau durasi, angka, rasio
- **Ukuran:** rasio aspek & resolusi
- **Warna:** palet 5 hex dominan + porsinya (hitung dengan k-means, jangan ditebak)
- **Latar:** foto / ilustrasi / warna polos / tekstur
- **Tipografi:** serif / sans / tulisan tangan, tebal/tipis, kapital/tidak, ukuran headline relatif terhadap lebar
- **Teks:** perkiraan jumlah kata per slide, posisi teks (atas/tengah/bawah, rata kiri/tengah)
- **Elemen grafis:** ikon, panah, doodle, mockup UI, wordmark/logo, nomor slide, penanda geser (">>>")
- **Orang:** ada wajah orang? orang asli atau AI?
- **Struktur carousel:** fungsi slide 1 / slide tengah / slide terakhir (CTA?)
- **Video:** frame detik 0, 1 dan 3 (visual hook), jumlah cut per 10 detik, teks di layar (gaya & posisi), ada stream audio atau tidak

Lihat tiap gambar langsung. Untuk video, ambil frame dengan ffmpeg lalu lihat frame-nya.

**3. Kelompokkan jadi "keluarga style".** Postingan dengan sistem visual yang sama digabung, walaupun beda akun. Tiap keluarga mencatat:
- jumlah konten, jumlah akun, median rasio
- status **TERBUKTI** (≥ 3 konten dari ≥ 2 akun) atau **KANDIDAT**

**4. Tulis spec tiap keluarga yang terbukti, cukup untuk dibangun ulang:**
- kanvas & margin
- grid/zona teks
- palet hex beserta perannya
- font (sebut juga alternatif yang gratis kalau font aslinya berbayar)
- hierarki & batas karakter per slide
- rumus cover
- rentang jumlah slide
- elemen berulang
- untuk reels: durasi, ritme cut, gaya teks
- daftar **lakukan / hindari**

**5. Rekomendasi per brand:**
- 1–2 style carousel dan 1–2 style reels
- **apa yang sengaja dibuat beda dari referensi** (warna brand, font, elemen khas) supaya tidak menjiplak
- kecocokan dengan voice & rambu brand

**6. Simpan hasil:**
- `<brand>\05_Analysis\Style_Analysis_<brand>.md` (laporan)
- `<brand>\05_Analysis\Style_Log_<brand>.csv` (data per postingan)
- **satu Artifact per brand** (lihat di bawah)

## Spesifikasi Artifact "Style Board — <brand>"
- **Ringkasan atas:** jumlah postingan dianalisis, jumlah keluarga style, mana yang terbukti.
- **Kartu per keluarga style:**
  - nama, status, jumlah konten/akun, median rasio
  - **4–8 thumbnail contoh**: perkecil ke ≤ 600 px JPEG sebelum di-upload sebagai file artifact, supaya ringan
  - swatch palet + hex
  - contoh tipografi
  - sketsa layout (zona teks/gambar)
  - lakukan / hindari
- **Tabel semua postingan:** thumbnail kecil, akun, angka, rasio, keluarga style, link.
- **Rekomendasi untuk brand:** style terpilih + bedanya dengan referensi.
- **Biarkan artifact private.** Thumbnail adalah konten milik akun lain, hanya untuk analisis internal.

## Prompt untuk ditempel di Claude Code
Ganti `<brand>` sesuai folder. Jalankan satu brand per sesi.
```
Baca CLAUDE.md dan Brief_Analisis_Style_Claude_Code.md di folder ini, lalu kerjakan analisis style untuk brand <brand>.
Pakai hanya postingan dengan Masuk analisis = Ya di <brand>\05_Analysis\Data_Performa_Download_<brand>.csv.
Ikuti langkah 1–6 dan buat Artifact "Style Board — <brand>" sesuai spesifikasi.
Sebelum menulis kesimpulan, tunjukkan dulu daftar keluarga style + jumlah bukti, dan tunggu konfirmasiku.
```

## Catatan per brand
- **Semua brand:** konten TikTok tidak bisa di-download, jadi dilewati. Analisis style hanya dari file Instagram yang ada. Akun yang style-nya cuma ada di TikTok tidak perlu disebut sebagai "kurang data".
- **securewithaldo:** noteovt baru 6 gambar IG. Akun puisi berbahasa Inggris: ambil sistem visualnya, bukan isinya.
- **auraneuro:**
  - **byimpact** sudah di-ACC sebagai benchmark style (sudah masuk file Kurasi). Likes carousel-nya disembunyikan, jadi pakai aturan proxy komentar di langkah 1.
  - dark.psychologyyyy berbahasa Korea: ambil visualnya, abaikan teksnya.
- **evotitan:**
  - Baru papanca.io, jadi hampir semua keluarga style akan berstatus KANDIDAT. Itu wajar, tulis apa adanya.
  - Rekomendasi wajib memakai palet resmi Evotitan (Brand Context §11): #151F21, #E9EDF0, #B2F617 (hanya untuk sinyal), #757D81, #A8823C.
- **fitasset lab:**
  - hormozi dan thewealthydesk diturunkan karena tidak diikuti market PT Indonesia (lihat Riset_Selera_Visual). Analisis tetap boleh, tapi kesimpulan harus menyebut kecocokan dengan market.
  - energisemotiv = khusus visual hook (cover/detik pertama), bukan sistem carousel penuh.
  - @canggihfit di-ACC (sheet "Usulan akun baru (ACC)") tapi lebih kuat sebagai acuan **reels**; belum di-download.
  - Opsi carousel profesional (@lynk.id dll.) ada di `00_Market_Brief\Opsi_Style_Carousel_Profesional_fitasset_lab.md` dan belum di-download. Kalau belum ada file-nya, rekomendasi carousel fitasset ditulis sebagai sementara.
- Abaikan file non-konten di folder download (`desktop.ini`, `Screenshot ….png`, `_README.md`).

## Jangan
- Jangan menyimpulkan style dari postingan yang `Masuk analisis = Tidak`.
- Jangan menebak hex warna atau angka. Hitung, atau tulis "belum diukur".
- Jangan menyalin teks, logo, atau foto referensi ke template brand.
