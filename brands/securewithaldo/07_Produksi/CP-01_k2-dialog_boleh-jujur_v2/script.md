# CP-01 v2 · "Can I be honest?"

Revisi dari CP-01 (v1 tetap disimpan di `../CP-01_k2-dialog_boleh-jujur/`). Perubahan dari catatan owner 14 Okt:
- Carousel tipe dialog **full English** (termasuk slide CTA dan caption).
- Font dialog **Figtree semua**: kalimat cemas tegak, jawaban miring, ukuran sama (style v3 draft).
- Posisi teks dari **analisis foto**: di keenam foto pasangan duduk di sepertiga bawah, tembok kosong di atas kepala, lantai/jalan di bawah ramai. Jadi kedua kalimat duduk di tembok di atas kepala orangnya (jarak tetap 34 px), rata tengah di atas tiap orang (owner 15 Okt). Lebar kolom per slide dihitung dari jarak dua orang (16,5–25%) supaya selalu ada celah ±4% di tengah. Slide 5 fotonya dicerminkan supaya orang yang bicara duluan ada di kiri.
- Foto slide 6 diganti (`06_meja-tembok-lampu`, Observed table): foto lama punya coretan di tembok tepat di atas kepala.

| | |
|---|---|
| Pilar · topik | P3 · T3 Komunikasi & kalimat ganti |
| Format | K2 dialog objek berpasangan, 7 slide 4:5 |
| Style | securewithaldo v3 (draft): layout `k2-pasangan` + `cta-kirim` |
| CTA | Send to someone (satu aksi) |
| Status | Menunggu ACC owner. Setelah v3 di-approve, folder dibuat ulang lewat `new-carousel.mjs` supaya style tersalin |

| # | Cemas (Figtree tegak, rata tengah di atas orang 1) | Jawaban (Figtree miring, rata tengah di atas orang 2) |
|---|---|---|
| 1 | Can I be honest? | Of course. I'm listening. |
| 2 | When you didn't reply earlier, I got scared. | Thank you for telling me instead of guessing alone. |
| 3 | I just need to know we're okay. | We're okay. I was just buried in work. |
| 4 | Will you get tired if I ask again next time? | No. I'd rather you ask than hold it in. |
| 5 | What if I'm still scared later? | Then tell me again. We'll talk it through. |
| 6 | Thanks for hearing me out. | Thanks for being honest. I'm not going anywhere. |
| 7 | label: *for the ones learning to be honest* | Send this to someone who's *still holding their fear alone.* |

## Caption

> The hardest sentence is the first one: "can I be honest?"
>
> After that, it usually gets lighter. You stop guessing alone, and they don't have to guess what's in your head.
>
> Send this to someone who's learning to say their fears out loud.

## Cek
- [x] Satu percakapan bersambung, tiap jawaban nyambung ke kalimat sebelumnya
- [x] Teks di ruang kosong terbesar, tidak menimpa orang, di dalam bingkai 108 px
- [x] CTA satu aksi, diulang di caption
- [x] `check.mjs` BERSIH (7 slide)
- [ ] ACC owner
