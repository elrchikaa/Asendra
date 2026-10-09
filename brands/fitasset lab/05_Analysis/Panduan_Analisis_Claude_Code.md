# Panduan analisis pola di Claude Code — fitasset lab

Task 2.1 (pola ide) dan 2.2 (pola visual & produksi) dijalankan di Claude Code di laptopmu, dari file yang sudah kamu download. Panduan ini memastikan yang dianalisis hanya konten yang benar-benar menang.

## Yang dianalisis
`Daftar_File_Analisis_fitasset_lab.csv` (folder ini) adalah daftar resminya. Aturannya:
- **Masuk analisis** kalau angkanya ≥ 1.5x median akun itu (reels = views, feed/carousel = likes). Kalau median akun tidak tersedia, masuk karena angka absolutnya tinggi.
- **Analisis ide (2.1)** tidak memakai konten bertanda "Referensi" di Content Bank dan akun khusus visual hook (@energisemotiv).
- **Pola dianggap TERBUKTI** kalau muncul di **≥3 konten dari ≥2 akun berbeda** (aturan project). 2 konten atau hanya 1 akun = KANDIDAT.

Ringkasan: **37 file** masuk analisis visual, **27 file** masuk analisis ide, **14 file** tidak perlu didownload (lihat kolom "Perlu download?").

## Langkah

**0. Buka Claude Code di folder brand**
```
C:\Users\ASUS_M3400Q\Documents\Asendra\brands\fitasset lab
```

**1. Download file** sesuai `04_Content_Examples\Download_List_fitasset_lab.xlsx`, simpan di `04_Content_Examples\<akun>\` dengan nama file yang sudah ditentukan. File bertanda "Tidak perlu" boleh dilewati.

**2. Log isi konten** (skill `organic-content-logger`). Tempel prompt ini:
```
Pakai skill organic-content-logger. Log semua file di 04_Content_Examples\<akun>\ yang kolom
"Masuk analisis visual (2.2)" = Ya di 05_Analysis\Daftar_File_Analisis_fitasset_lab.csv.
Satu file = satu baris. Kode format ada di nama file (lihat 04_Content_Examples\_README.md).
Tambahkan kolom: Akun, Nama file, Link, Angka, Rasio vs median, Masuk analisis ide (ambil dari CSV daftar).
Untuk carousel, catat jumlah slide. Untuk video, catat durasi (detik) dan jumlah potongan/cut.
Simpan ke 05_Analysis\Content_Details_fitasset_lab.csv.
```

**3. Cari pola** (skill `organic-benchmark-builder`). Tempel prompt ini:
```
Pakai skill organic-benchmark-builder untuk brand fitasset lab, input 05_Analysis\Content_Details_fitasset_lab.csv.
Aturan tambahan project (menang atas aturan default skill):
- Label [PERMANEN]/TERBUKTI hanya kalau pola muncul di ≥3 konten dari ≥2 akun berbeda. Sisanya [OBSERVASI]/KANDIDAT.
- Tiap pola tulis: jumlah konten, jumlah akun, nama akun, dan link bukti.
- Pisahkan jadi dua bagian:
  A. Pola ide (2.1): topik, angle, hook (teks/verbal), struktur isi, CTA. Pakai hanya baris "Masuk analisis ide" = Ya.
  B. Pola produksi (2.2): visual hook 1–3 detik pertama, typography, warna, footage/ilustrasi, editing & pacing,
     durasi video, jumlah slide carousel, audio. Pakai semua baris.
   - @energisemotiv hanya dicatat untuk visual hook (bagian 2.2), tidak dihitung di pola ide.
- Rambu brand (lihat di bawah) dicatat di bagian akhir sebagai "yang tidak ditiru".
Simpan ke 05_Analysis\Benchmark_Guideline_fitasset_lab.md
```

**4. Kabari aku** kalau `Benchmark_Guideline_fitasset_lab.md` sudah jadi. Dari file itu aku susun task 2.4–2.9: spec reels, idea bank 30 ide, script template, prompt pack (Higgsfield/Kling/Veo + Remotion/HyperFrames), dan daftar aset. Style carousel (2.3) juga dijalankan setelah langkah ini, lihat `06_Automation_Kit\01_Carousel_Style\`.

## Rambu brand
- @energisemotiv di-ACC khusus untuk visual hook reels & carousel. Catat 1–3 detik pertama, typography, dan komposisinya saja; topiknya jangan dihitung sebagai pola ide.
- @mrfreevalue di-ACC sebagian. Konten pamer mobil/uang hanya referensi, bukan pola ide.
- Konten B2B @conor_harris_ dan @zacperna banyak jalan lewat iklan. Kalau polanya muncul, tandai "organik + iklan".
