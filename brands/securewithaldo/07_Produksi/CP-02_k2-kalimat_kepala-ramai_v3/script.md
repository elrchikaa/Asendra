# CP-02 v3 · "Kepalaku malah makin ramai"

Revisi owner 15 Okt: posisi kalimat dihitung **dari objek di foto**, bukan dari luas langit (foto berikutnya bisa tanpa langit). v1 dan v2 disimpan. Revisi ke-2 (owner 15 Okt): objek dihitung kotak penuh (kepala sampai kaki), garis laut/danau/atap jadi batas yang tidak boleh dilewati teks; slide 1 dicek manual.

| | |
|---|---|
| Format | Carousel K2 satu kalimat di foto (layout 12 `k2-kalimat`) + penutup simpan (layout 08), 6 slide 4:5 |
| Pilar · topik | P1 Pas kepala lagi lari · T4 Menenangkan diri saat cemas |
| Style | securewithaldo v3 (draft) |
| Bahasa | Indonesia (bukan tipe dialog) |
| CTA | Simpan (satu aksi) |
| Foto | `Raw image/DUSK WIDE` (aset owner), urut dari senja ke malam |
| Status | Sample tes owner, menunggu ACC |

Posisi dihitung dengan `06_Automation_Kit/tools/posisi_teks.py`: cari objek utama (orang/benda menonjol), hindari objek lain dan area ramai, taruh kotak teks di ruang bersih terdekat ke objek utama dengan jarak aman tetap, sedekat mungkin ke tengah.

| # | Foto | Objek utama → posisi | Posisi | Kalimat |
|---|---|---|---|---|
| 1 | 01_senja-danau-pink | dua orang di bukit → di atas garis gunung/danau, ±90 px dari kepala cewek (dicek manual) | 49% | Langitnya pelan pelan gelap. *Kepalaku malah makin ramai.* |
| 2 | 02_senja-danau-jingga | bukit + pasangan; area di atas pasangan ramai (pantulan, lampu rumah) → ruang bersih terdekat di atas bukit | 28% | Belum ada kabar dari sore. Aku udah nyusun *lima cerita* sendiri. |
| 3 | 03_laut-ungu | dua orang di tepi laut → di atas garis laut | 42% | Terus aku inget, *cerita di kepalaku bukan bukti.* |
| 4 | 04_tebing-langit | pasangan di tebing → di atas garis laut | 51% | Jadi aku lihat *yang beneran ada* di depanku. |
| 5 | 05_malam-biru | pasangan + bangunan → di atas garis atap dengan jarak aman | 48% | Malam ini aku masih utuh. *Besok aku tanya pelan pelan.* |
| 6 | – | – | – | Simpan ini buat malam pas *kepalamu mulai lari.* |

## Caption
> Kepalamu bisa nyusun lima cerita dalam satu sore. Nggak semuanya perlu kamu percaya malam ini.
>
> Simpan buat malam berikutnya pas kepalamu mulai lari.
