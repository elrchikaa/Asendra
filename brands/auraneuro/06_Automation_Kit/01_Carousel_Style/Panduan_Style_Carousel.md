# Style carousel — auraneuro (task 2.3)

Dijalankan di Claude Code pakai skill `carousel-style-cloner` (perpustakaan `C:\Users\ASUS_M3400Q\Documents\Asendra\carousel-studio`).
**Jalankan setelah** `05_Analysis\Benchmark_Guideline_auraneuro.md` jadi. Kalau analisismu menemukan style lain yang lebih kuat, ganti kandidat di bawah dan kabari aku.

Kandidat diambil dari carousel/foto-carousel dengan angka tertinggi di Content Bank. Urutan = prioritas.

### 1. `aura-kartu-putih`
Foto-carousel kartu putih: judul CAPS hitam, ikon stick figure / stabilo kuning, tanda ">>>" di slide pertama.

- **Bukti:** Terbukti di 2 akun (4 konten), angka paling besar di brand ini.
- **Referensi:**
   - @ricebucket24: https://www.tiktok.com/@ricebucket24/photo/7675761820455505170 (18.8M views · 136x)
   - @ricebucket24: https://www.tiktok.com/@ricebucket24/photo/7677797403893763336 (446K views · 3.2x)
   - @kelaskehidupan: https://www.tiktok.com/@kelaskehidupan/photo/7398914997411253509 (5.0M views · 83x)
   - @kelaskehidupan: https://www.tiktok.com/@kelaskehidupan/photo/7501687861163330821 (3.6M views · 60x)

**Prompt 1 — unduh referensi (Mode A0):**
```
Pakai skill carousel-style-cloner. Download carousel ini ke inbox/aura-kartu-putih: https://www.tiktok.com/@ricebucket24/photo/7675761820455505170 https://www.tiktok.com/@ricebucket24/photo/7677797403893763336 https://www.tiktok.com/@kelaskehidupan/photo/7398914997411253509 https://www.tiktok.com/@kelaskehidupan/photo/7501687861163330821
```
**Prompt 2 — bikin style (Mode A):**
```
Pakai skill carousel-style-cloner. Bikin style baru dari inbox/aura-kartu-putih.
Brand: auraneuro. Baca brand guide di C:\Users\ASUS_M3400Q\Documents\Asendra\brands\auraneuro\_Brand_Docs dan
05_Analysis\Benchmark_Guideline_auraneuro.md bagian pola produksi.
Jangan terlalu duplikat referensi: ganti minimal satu ciri yang paling mudah dikenali, tawarkan 3–4 opsi warna.
Teks contoh di layouts pakai bahasa Indonesia sesuai voice brand.
```

### 2. `aura-gelap`
Carousel gelap: visual AI merah-hitam, bar putih, teks merah & putih, ">>>" sebagai penanda geser.

- **Bukti:** Carouselnya baru dari 1 akun. Warna & teks CAPS satu kata yang sama dipakai di reels @dark_psychology_77, jadi gaya visualnya lintas 2 akun.
- **Referensi:**
   - @dark.psychologyyyy: https://www.instagram.com/p/DdZMQrdj_za/ (5.1K likes · 8.2x)
   - @dark.psychologyyyy: https://www.instagram.com/p/DdwsZ3gj-r-/ (3.5K likes · 5.7x)
   - @dark.psychologyyyy: https://www.instagram.com/p/Ddd9rkqj0Jk/ (1.4K likes · 2.3x)

**Prompt 1 — unduh referensi (Mode A0):**
```
Pakai skill carousel-style-cloner. Download carousel ini ke inbox/aura-gelap: https://www.instagram.com/p/DdZMQrdj_za/ https://www.instagram.com/p/DdwsZ3gj-r-/ https://www.instagram.com/p/Ddd9rkqj0Jk/
```
**Prompt 2 — bikin style (Mode A):**
```
Pakai skill carousel-style-cloner. Bikin style baru dari inbox/aura-gelap.
Brand: auraneuro. Baca brand guide di C:\Users\ASUS_M3400Q\Documents\Asendra\brands\auraneuro\_Brand_Docs dan
05_Analysis\Benchmark_Guideline_auraneuro.md bagian pola produksi.
Jangan terlalu duplikat referensi: ganti minimal satu ciri yang paling mudah dikenali, tawarkan 3–4 opsi warna.
Teks contoh di layouts pakai bahasa Indonesia sesuai voice brand.
```

## Setelah style jadi
1. Lihat `_sheet.png` dan `compare-*.png` yang ditunjukkan skill, minta revisi kalau perlu.
2. Bilang "approve style <nama>" di Claude Code. Skill tidak akan approve tanpa persetujuanmu.
3. Tulis nama style yang sudah approved di kolom **Style** di database Notion *Content Pipeline*, supaya script & produksi berikutnya memakai style yang sama.
