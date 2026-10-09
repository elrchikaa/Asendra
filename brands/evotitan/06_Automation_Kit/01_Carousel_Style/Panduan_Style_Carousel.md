# Style carousel — evotitan (task 2.3)

Dijalankan di Claude Code pakai skill `carousel-style-cloner` (perpustakaan `C:\Users\ASUS_M3400Q\Documents\Asendra\carousel-studio`).
**Jalankan setelah** `05_Analysis\Benchmark_Guideline_evotitan.md` jadi. Kalau analisismu menemukan style lain yang lebih kuat, ganti kandidat di bawah dan kabari aku.

Kandidat diambil dari carousel/foto-carousel dengan angka tertinggi di Content Bank. Urutan = prioritas.

### 1. `evo-program`
Gambar / carousel "program dalam satu halaman": tabel latihan atau protokol, angka besar, foto atlet. Diwarnai palet Evotitan (#151F21, #E9EDF0, aksen lime #B2F617 hanya untuk sinyal).

- **Bukti:** Terbukti di 2 akun (4 konten). Palet sudah ada di Brand Context, jadi diferensiasi warna otomatis.
- **Referensi:**
   - @papanca.io: https://www.instagram.com/p/DRwJF-xDLBx/ (193K likes · 136.5x)
   - @papanca.io: https://www.instagram.com/p/Dbz--lRAPwD/ (46.8K likes · 33.1x)
   - @papanca.io: https://www.instagram.com/p/DakAVriAECn/ (9.2K likes · 6.5x)
   - @moreplatesmoredates: https://www.instagram.com/p/DRxuhMliQoW/ (57.9K likes (hasil lab / bloodwork))

**Prompt 1 — unduh referensi (Mode A0):**
```
Pakai skill carousel-style-cloner. Download carousel ini ke inbox/evo-program: https://www.instagram.com/p/DRwJF-xDLBx/ https://www.instagram.com/p/Dbz--lRAPwD/ https://www.instagram.com/p/DakAVriAECn/ https://www.instagram.com/p/DRxuhMliQoW/
```
**Prompt 2 — bikin style (Mode A):**
```
Pakai skill carousel-style-cloner. Bikin style baru dari inbox/evo-program.
Brand: evotitan. Baca brand guide di C:\Users\ASUS_M3400Q\Documents\Asendra\brands\evotitan\_Brand_Docs dan
05_Analysis\Benchmark_Guideline_evotitan.md bagian pola produksi.
Jangan terlalu duplikat referensi: ganti minimal satu ciri yang paling mudah dikenali, tawarkan 3–4 opsi warna.
Teks contoh di layouts pakai bahasa Indonesia sesuai voice brand.
```

## Setelah style jadi
1. Lihat `_sheet.png` dan `compare-*.png` yang ditunjukkan skill, minta revisi kalau perlu.
2. Bilang "approve style <nama>" di Claude Code. Skill tidak akan approve tanpa persetujuanmu.
3. Tulis nama style yang sudah approved di kolom **Style** di database Notion *Content Pipeline*, supaya script & produksi berikutnya memakai style yang sama.
