# Style carousel — fitasset lab (task 2.3)

Dijalankan di Claude Code pakai skill `carousel-style-cloner` (perpustakaan `C:\Users\ASUS_M3400Q\Documents\Asendra\carousel-studio`).
**Jalankan setelah** `05_Analysis\Benchmark_Guideline_fitasset_lab.md` jadi. Kalau analisismu menemukan style lain yang lebih kuat, ganti kandidat di bawah dan kabari aku.

Kandidat diperbarui 8 Okt dari riset selera visual market (`00_Market_Brief/Riset_Selera_Visual_fitasset_lab.md`): diambil dari akun Indonesia yang benar-benar diikuti PT/coach. Urutan = prioritas. Style lama `fit-owner-teks` (@hormozi, @thewealthydesk) dicabut karena market tidak mengikuti akun-akun itu.

### 1. `fit-kartu-teks-id`
Kartu teks besar polos berbahasa Indonesia santai (latar gelap atau putih), headline opini / "berita" (FAKTA, NEWS FLASH), kadang foto coach kecil. Tanpa ornamen template.

- **Bukti:** Terbukti di 2 akun Indonesia yang diikuti PT/coach (riset 8 Okt). Versi reels-nya di @canggihfit 17.4K & 13.1K likes. Akun ini masih menunggu ACC kamu sebagai benchmark.
- **Referensi:**
   - @canggihfit: https://www.instagram.com/p/DdxnDbvE-dz/ (7.0K likes · 2.1x median)
   - @halimjiang: https://www.instagram.com/p/DcSmL9gGSed/ (812 likes · 3.5x)
   - @halimjiang: https://www.instagram.com/p/DbuCb6GGT4m/ (516 likes · 2.2x)
   - @halimjiang: https://www.instagram.com/p/DcaX_NgmQOQ/ (487 likes · 2.1x)

**Prompt 1 — unduh referensi (Mode A0):**
```
Pakai skill carousel-style-cloner. Download carousel ini ke inbox/fit-kartu-teks-id: https://www.instagram.com/p/DdxnDbvE-dz/ https://www.instagram.com/p/DcSmL9gGSed/ https://www.instagram.com/p/DbuCb6GGT4m/ https://www.instagram.com/p/DcaX_NgmQOQ/
```
**Prompt 2 — bikin style (Mode A):**
```
Pakai skill carousel-style-cloner. Bikin style baru dari inbox/fit-kartu-teks-id.
Brand: fitasset lab. Baca brand guide di C:\Users\ASUS_M3400Q\Documents\Asendra\brands\fitasset lab\_Brand_Docs dan
05_Analysis\Benchmark_Guideline_fitasset_lab.md bagian pola produksi.
Jangan terlalu duplikat referensi: ganti minimal satu ciri yang paling mudah dikenali, tawarkan 3–4 opsi warna.
Teks contoh di layouts pakai bahasa Indonesia sesuai voice brand.
```

### 2. `fit-bukti-pt`
Carousel bukti sosial: foto asli PT/coach + cerita karier atau hasil (lulus sertifikasi, naik level). Teks sedikit, foto dominan.

- **Bukti:** Terbukti di 2 akun (4 konten). Butuh foto & cerita asli (klien/pembeli fitasset); jangan dikarang.
- **Referensi:**
   - @apki_indonesia: https://www.instagram.com/p/DdtguFen14U/ (1.9K likes · 12.7x)
   - @apki_indonesia: https://www.instagram.com/p/DeMAiZaEVDM/ (311 likes · 2.0x)
   - @raiinstitute: https://www.instagram.com/p/DdDvxxrkuGO/ (3.4K likes · 18.6x)
   - @raiinstitute: https://www.instagram.com/p/DdDuKOzictF/ (829 likes · 4.6x)

**Prompt 1 — unduh referensi (Mode A0):**
```
Pakai skill carousel-style-cloner. Download carousel ini ke inbox/fit-bukti-pt: https://www.instagram.com/p/DdtguFen14U/ https://www.instagram.com/p/DeMAiZaEVDM/ https://www.instagram.com/p/DdDvxxrkuGO/ https://www.instagram.com/p/DdDuKOzictF/
```
**Prompt 2 — bikin style (Mode A):**
```
Pakai skill carousel-style-cloner. Bikin style baru dari inbox/fit-bukti-pt.
Brand: fitasset lab. Baca brand guide di C:\Users\ASUS_M3400Q\Documents\Asendra\brands\fitasset lab\_Brand_Docs dan
05_Analysis\Benchmark_Guideline_fitasset_lab.md bagian pola produksi.
Jangan terlalu duplikat referensi: ganti minimal satu ciri yang paling mudah dikenali, tawarkan 3–4 opsi warna.
Teks contoh di layouts pakai bahasa Indonesia sesuai voice brand.
```

### 3. `fit-editorial`
Cover editorial: foto sinematik + typography besar berlapis di belakang subjek. Hanya untuk diuji sebagai varian cover.

- **Bukti:** Kamu ACC untuk visual hook, tapi diikuti 0 dari 54 PT/coach ID. Uji A/B dulu melawan fit-kartu-teks-id.
- **Referensi:**
   - @energisemotiv: https://www.instagram.com/p/DdjoLbamj4K/ (2.5K likes · 1.9x)

**Prompt 1 — unduh referensi (Mode A0):**
```
Pakai skill carousel-style-cloner. Download carousel ini ke inbox/fit-editorial: https://www.instagram.com/p/DdjoLbamj4K/
```
**Prompt 2 — bikin style (Mode A):**
```
Pakai skill carousel-style-cloner. Bikin style baru dari inbox/fit-editorial.
Brand: fitasset lab. Baca brand guide di C:\Users\ASUS_M3400Q\Documents\Asendra\brands\fitasset lab\_Brand_Docs dan
05_Analysis\Benchmark_Guideline_fitasset_lab.md bagian pola produksi.
Jangan terlalu duplikat referensi: ganti minimal satu ciri yang paling mudah dikenali, tawarkan 3–4 opsi warna.
Teks contoh di layouts pakai bahasa Indonesia sesuai voice brand.
```

## Setelah style jadi
1. Lihat `_sheet.png` dan `compare-*.png` yang ditunjukkan skill, minta revisi kalau perlu.
2. Bilang "approve style <nama>" di Claude Code. Skill tidak akan approve tanpa persetujuanmu.
3. Tulis nama style yang sudah approved di kolom **Style** di database Notion *Content Pipeline*, supaya script & produksi berikutnya memakai style yang sama.
