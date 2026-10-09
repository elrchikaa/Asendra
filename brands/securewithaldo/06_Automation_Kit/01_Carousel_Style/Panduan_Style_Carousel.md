# Style carousel — securewithaldo (produk HERE) (task 2.3)

Dijalankan di Claude Code pakai skill `carousel-style-cloner` (perpustakaan `C:\Users\ASUS_M3400Q\Documents\Asendra\carousel-studio`).
**Jalankan setelah** `05_Analysis\Benchmark_Guideline_securewithaldo.md` jadi. Kalau analisismu menemukan style lain yang lebih kuat, ganti kandidat di bawah dan kabari aku.

Kandidat diambil dari carousel/foto-carousel dengan angka tertinggi di Content Bank. Urutan = prioritas.

### 1. `here-kertas`
Gambar tunggal / carousel pendek: kertas krem bertekstur, serif di tengah, baris terakhir italic. Paling cocok untuk kalimat "yang dia bilang / yang aku rasakan".

- **Bukti:** Terbukti di 2 akun (3 konten).
- **Referensi:**
   - @sincere.emotion: https://www.instagram.com/p/DRYCctzkkcH/ (146K likes · 240.9x median)
   - @sincere.emotion: https://www.instagram.com/p/DNpWQJRN5La/ (28.1K likes · 46.4x)
   - @healingwhispers3: https://www.instagram.com/p/DT3OiL9gnza/ (198K likes · 102.6x (krem/maroon + serif kecil))

**Prompt 1 — unduh referensi (Mode A0):**
```
Pakai skill carousel-style-cloner. Download carousel ini ke inbox/here-kertas: https://www.instagram.com/p/DRYCctzkkcH/ https://www.instagram.com/p/DNpWQJRN5La/ https://www.instagram.com/p/DT3OiL9gnza/
```
**Prompt 2 — bikin style (Mode A):**
```
Pakai skill carousel-style-cloner. Bikin style baru dari inbox/here-kertas.
Brand: securewithaldo (produk HERE). Baca brand guide di C:\Users\ASUS_M3400Q\Documents\Asendra\brands\securewithaldo\_Brand_Docs dan
05_Analysis\Benchmark_Guideline_securewithaldo.md bagian pola produksi.
Jangan terlalu duplikat referensi: ganti minimal satu ciri yang paling mudah dikenali, tawarkan 3–4 opsi warna.
Teks contoh di layouts pakai bahasa Indonesia sesuai voice brand.
```

### 2. `here-kartu-gelap`
Slide teks polos: kartu hitam, serif putih kecil, frasa kunci bold, wordmark kecil. Versi foto-carousel TikTok dan gambar IG.

- **Bukti:** Pola "kartu teks polos" ada di 2 akun (noteovt hitam, penyambutsenja putih). Gaya kartu hitamnya sendiri baru dari 1 akun.
- **Referensi:**
   - @noteovt: https://www.tiktok.com/@noteovt/photo/7550949083519700229 (4.9M views · 751x)
   - @noteovt: https://www.tiktok.com/@noteovt/photo/7687485590941551893 (2.5M views · 383x)
   - @noteovt: https://www.tiktok.com/@noteovt/photo/7690571832994303252 (422K views · 65x (pertanyaan pancingan))
   - @penyambutsenja: https://www.instagram.com/p/DeBXxLCE_l5/ (11.8K likes · 6.5x (versi latar putih))

**Prompt 1 — unduh referensi (Mode A0):**
```
Pakai skill carousel-style-cloner. Download carousel ini ke inbox/here-kartu-gelap: https://www.tiktok.com/@noteovt/photo/7550949083519700229 https://www.tiktok.com/@noteovt/photo/7687485590941551893 https://www.tiktok.com/@noteovt/photo/7690571832994303252 https://www.instagram.com/p/DeBXxLCE_l5/
```
**Prompt 2 — bikin style (Mode A):**
```
Pakai skill carousel-style-cloner. Bikin style baru dari inbox/here-kartu-gelap.
Brand: securewithaldo (produk HERE). Baca brand guide di C:\Users\ASUS_M3400Q\Documents\Asendra\brands\securewithaldo\_Brand_Docs dan
05_Analysis\Benchmark_Guideline_securewithaldo.md bagian pola produksi.
Jangan terlalu duplikat referensi: ganti minimal satu ciri yang paling mudah dikenali, tawarkan 3–4 opsi warna.
Teks contoh di layouts pakai bahasa Indonesia sesuai voice brand.
```

### 3. `here-edukasi`
Carousel edukasi: kertas krem + doodle sederhana + judul CAPS, isi berupa tabel "yang dia bilang vs artinya" atau siklus.

- **Bukti:** Terbukti di 3 akun (4 konten).
- **Referensi:**
   - @sulichii: https://www.instagram.com/p/DV7BEJkkyec/ (2.9K likes · 2.6x)
   - @sulichii: https://www.instagram.com/p/DW3MqIok0s2/ (2.3K likes · 2.1x)
   - @thesecurerelationship: https://www.instagram.com/p/CzbcC59LiXP/ (10.8K likes · 3.6x (infografis siklus))
   - @jessicabaumlmhc: https://www.instagram.com/p/DdrvnVzIGhV/ (1.9K likes · 2.8x (tabel))

**Prompt 1 — unduh referensi (Mode A0):**
```
Pakai skill carousel-style-cloner. Download carousel ini ke inbox/here-edukasi: https://www.instagram.com/p/DV7BEJkkyec/ https://www.instagram.com/p/DW3MqIok0s2/ https://www.instagram.com/p/CzbcC59LiXP/ https://www.instagram.com/p/DdrvnVzIGhV/
```
**Prompt 2 — bikin style (Mode A):**
```
Pakai skill carousel-style-cloner. Bikin style baru dari inbox/here-edukasi.
Brand: securewithaldo (produk HERE). Baca brand guide di C:\Users\ASUS_M3400Q\Documents\Asendra\brands\securewithaldo\_Brand_Docs dan
05_Analysis\Benchmark_Guideline_securewithaldo.md bagian pola produksi.
Jangan terlalu duplikat referensi: ganti minimal satu ciri yang paling mudah dikenali, tawarkan 3–4 opsi warna.
Teks contoh di layouts pakai bahasa Indonesia sesuai voice brand.
```

## Setelah style jadi
1. Lihat `_sheet.png` dan `compare-*.png` yang ditunjukkan skill, minta revisi kalau perlu.
2. Bilang "approve style <nama>" di Claude Code. Skill tidak akan approve tanpa persetujuanmu.
3. Tulis nama style yang sudah approved di kolom **Style** di database Notion *Content Pipeline*, supaya script & produksi berikutnya memakai style yang sama.
