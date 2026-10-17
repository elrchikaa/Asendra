# auraneuro — Panduan Penerapan di video-studio

Versi 1.0 · 17 Oktober 2026. Baca bersama `desain.md` pada folder yang sama, terutama §3.3–3.4 dan §11. Berkas ini mengatur jalur reels; bukan keputusan final format video.

## Status keputusan

- **Belum dikunci:** format reels #1/#2, varian tetap A–F, durasi, musik, footage, dan pemakaian cover tambahan.
- **Arah owner terbaru:** kemungkinan besar **tanpa thumbnail tambahan**. Gunakan frame konten nyata yang bekerja di feed. Jangan membuat thumbnail terpisah sebagai default lalu menganggap sudah dipilih.
- **Sudah berlaku:** identitas font/warna, frekuensi latar feed 50/25/25, margin judul terhadap crop, aturan jarak, body justify, CTA tengah, dan hasil koreksi ilustrasi.
- “Oke” untuk pratinjau CTA turun tidak mengunci D–F menjadi format reels final.

## Parameter output dan preview

| Parameter | Nilai |
|---|---|
| Kanvas |1080 × 1920, 9:16 |
| Tampak feed | Crop tengah 1080 × 1440: y 240–1680 |
| Margin judul editorial |108 px dari crop; judul mulai y 348 pada A–F |
| Batas kanan teks editorial |x≈950 px; perhatikan kolom ikon video |
| Safe zone konservatif isi |y 240–1470 |
| CTA D–F yang disetujui dalam pratinjau feed | Hingga y≈1534; pengecualian spesifik, wajib uji overlay UI sebelum produksi |
| Body reels #2 | Arimo 3.9 cqw ≈42.1 px, line-height 1.13; justify, terakhir kiri |
| Heading/CTA | Tengah; sans Arimo 700 + serif Instrument Serif Italic, glow sesuai latar |
| Grain | Diam |

## Dua jalur konten

### Reels #1: jendela klip

Pusat konten adalah footage/klip. Opsi tanpa cover tambahan dan opsi cover PNG tetap tercatat. Untuk arah tanpa thumbnail, pilih frame nyata yang jelas saat dipotong 3:4. Periksa wajah, judul, transisi, dan UI. Dua contoh reels #1 tetap disertakan saat menilai mockup feed campuran.

### Reels #2: paragraf dan ilustrasi

Pertahankan model judul + paragraf utuh + CTA, bukan otomatis mengubahnya ke daftar. Simpan semua varian:

- A: paragraf terbuka.
- B: paragraf dalam panel tipis.
- C: paragraf + figur samar. Judul sejajar A/B; figur ditata independen.
- D: paragraf → antrean/pintu → CTA.
- E: identitas/kelompok → paragraf → CTA.
- F: paragraf → hadiah/transaksi → CTA.

Ukuran SVG yang sedang ditinjau pada 1080: D maksimum ≈423 px tinggi, E≈380 px, F≈314 px; batas lebar≈961 px. Bentuk terlihat dapat lebih kecil daripada kotak SVG. Kunci ukuran ilustrasi ketika hanya margin judul yang direvisi; jangan mengecilkannya otomatis melalui flex. Pertahankan jarak judul–gambar, gambar–body, dan gambar/body–CTA. Tidak semua ilustrasi harus sama besar.

## Urutan produksi dan QC

1. Tentukan tujuan konten, model reels, dan varian yang diuji. Tandai keputusan yang masih kondisional.
2. Tentukan frame muka feed dari konten nyata; cover terpisah hanya bila kemudian dipilih owner.
3. Terapkan font, latar, margin 108 px dari crop, dan satu pesan visual yang sama keluarga dengan carousel.
4. Pilih ilustrasi yang menerangkan topik. Jangan memakai patung dekoratif untuk semua paragraf atau menyalin ilustrasi akun referensi tanpa izin.
5. Hitung ukuran dan jarak dari bentuk/huruf yang terlihat. Saat konflik, tampilkan kompromi; jangan mengubah naskah/ukuran gambar tanpa memberitahu owner.
6. Tampilkan tiga pemeriksaan: frame 9:16, crop 3:4, dan grid campuran carousel+reels. Cek versi UI gelap/terang bila relevan.
7. Untuk CTA yang masuk y 1470–1534, uji overlay caption/ikon. Pengecualian feed tidak otomatis aman untuk video penuh. Bila tertutup, buat adaptasi yang dijelaskan; jangan menandai lulus secara palsu.
8. Uji waktu baca paragraf, awal/tengah/akhir gerak, transisi, loop, dan kompresi output. Durasi tidak ditetapkan dari durasi animasi saja.
9. Tidak ada grain beranimasi atau kilau menyapu. Gerak lain yang relevan tetap boleh; teks jangan dobel selama transisi.
10. Ekspor video melalui pipeline video-studio yang tersedia. HTML mockup atau screenshot statis belum berarti MP4 final selesai.
11. Simpan font/aset/kredit, naskah, konfigurasi, previewcrop, dan keputusan versi. Laporkan apa yang benar-benar diuji.

## Contoh instruksi siap pakai

> Buat reels auraneuro di video-studio. Baca desain.md dan desain-video-studio.md. Format reels masih kondisional; arah sementara tanpa thumbnail tambahan. Gunakan frame konten nyata yang aligned dengan feed carousel. Pertahankan margin judul 108 px dari crop, body justify, heading/CTA tengah, dan ukuran ilustrasi yang sudah ditinjau. Cek 9:16, crop 3:4, grid campuran, serta UI reels. Pengecualian CTA 1534 berlaku hanya untuk komposisi feed yang disetujui; jangan klaim aman di video tanpa pengujian. Ajukan format yang sesuai brief tanpa menghapus opsi lain.
