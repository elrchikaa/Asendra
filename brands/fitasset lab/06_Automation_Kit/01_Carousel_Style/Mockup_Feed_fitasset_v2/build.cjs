// Mockup feed v2 Fitasset: carousel (latar foto + kartu tweet), tweet polos, skema di dalam kartu, reels (latar video, kartu sama).
// Jalankan dari root Asendra: node "brands/fitasset lab/06_Automation_Kit/01_Carousel_Style/Mockup_Feed_fitasset_v2/build.cjs"
const fs=require('fs'),path=require('path');
const sharp=require('../../../../../carousel-studio/node_modules/sharp');
const O=__dirname;fs.mkdirSync(path.join(O,'preview'),{recursive:true});
const C={ink:'#151719',paper:'#f5f5f0',muted:'#6b706b',line:'#d9dcd4',accent:'#c9ef67'};
const F='Arial,Helvetica,sans-serif';
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
// bungkus teks otomatis per lebar (perkiraan lebar Arial 0.53 × ukuran)
function wrap(text,width,size){const max=Math.floor(width/(size*0.53));const out=[];for(const para of String(text).split('\n')){let cur='';for(const w of para.split(' ')){if((cur+' '+w).trim().length>max&&cur){out.push(cur);cur=w}else cur=(cur+' '+w).trim()}out.push(cur)}return out}
const T=(lines,x,y,size,fill=C.ink,weight=400,lh=1.22,anchor='start')=>lines.map((s,i)=>`<text x="${x}" y="${y+i*size*lh}" font-family="${F}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${esc(s)}</text>`).join('');
const R=(x,y,w,h,fill,r=0,stroke='none',sw=3)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
const L=(x,y,x2,y2,c=C.ink,w=3)=>`<path d="M${x} ${y} L${x2} ${y2}" fill="none" stroke="${c}" stroke-width="${w}"/>`;
const ARR=(x,y,x2,y2,c=C.ink)=>{const a=Math.atan2(y2-y,x2-x),h=16;return L(x,y,x2,y2,c,4)+`<path d="M${x2-h*Math.cos(a-0.5)} ${y2-h*Math.sin(a-0.5)} L${x2} ${y2} L${x2-h*Math.cos(a+0.5)} ${y2-h*Math.sin(a+0.5)}" fill="none" stroke="${c}" stroke-width="4"/>`};
const img={};for(const f of fs.readdirSync(path.join(O,'assets')).filter(f=>f.endsWith('.jpg')))img[f.slice(0,-4)]='data:image/jpeg;base64,'+fs.readFileSync(path.join(O,'assets',f)).toString('base64');
const W=1080;let H=1440;
const svg=(inner,h=H,bg=C.ink)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${h}" viewBox="0 0 ${W} ${h}"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset=".55" stop-color="#000" stop-opacity=".55"/><stop offset="1" stop-color="#000" stop-opacity=".92"/></linearGradient></defs>${R(0,0,W,h,bg)}${inner}</svg>`;
const photo=(name,h,y=0,ph=h)=>`<image href="${img[name]}" x="0" y="${y}" width="${W}" height="${ph}" preserveAspectRatio="xMidYMid slice"/>`+R(0,Math.round(ph*0.35)+y,W,Math.round(ph*0.65),'url(#g)');
// header kartu ala tweet: avatar + nama + handle (tanpa centang verifikasi)
const who=(x,y,dark=false,s=1)=>`<circle cx="${x+30*s}" cy="${y+30*s}" r="${30*s}" fill="${C.accent}"/>`+T(['f.'],x+30*s,y+42*s,32*s,C.ink,700,1,'middle')+T(['Fitasset Lab'],x+76*s,y+26*s,30*s,dark?'#fff':C.ink,700)+T(['@fitasset.lab'],x+76*s,y+62*s,25*s,dark?'#a9afa8':C.muted);
const CX=140,CW=800,PAD=44; // kartu: lebar 74% kanvas, mulai ±58% dari atas (terukur dari referensi)
function card(y,h,inner,swipe=false){return R(CX,y,CW,h,'#fff',30)+who(CX+PAD,y+PAD)+inner+(swipe?`<circle cx="${CX+CW-58}" cy="${y+h-56}" r="22" fill="none" stroke="${C.ink}" stroke-width="3"/>`+ARR(CX+CW-70,y+h-56,CX+CW-46,y+h-56):'')}
function textCard(text,size=46,{h=H,swipe=false}={}){const lines=wrap(text,CW-2*PAD,size);const ch=PAD+60+34+lines.length*size*1.22+PAD+(swipe?40:0);const y=Math.max(Math.round(h*0.58),Math.min(h-ch-90,Math.round(h*0.58)));return card(y,ch,T(lines,CX+PAD,y+PAD+60+34+size*0.9,size),swipe)}
const foot=(n,of,dark=true)=>T([`${n} / ${of}`],W-90,H-50,24,dark?'#bfc3bc':C.muted,400,1,'end');
// slide jenis 1: foto + kartu
const fotoKartu=(name,text,n,of,size=46)=>svg(photo(name,H)+textCard(text,size,{swipe:n===1})+foot(n,of));
// slide jenis 2: foto di atas + kartu besar berisi skema
function skema(name,title,draw,n,of){const need=draw.need||480;const tl=wrap(title,CW-2*PAD,40);const head=PAD+60+30+tl.length*49+30;const h=head+need+PAD;const y=Math.min(560,H-80-h);const ph=Math.min(H,y+320);return svg(photo(name,ph)+R(0,ph,W,H-ph,'#000')+card(y,h,T(tl,CX+PAD,y+PAD+60+30+34,40,C.ink,700)+draw(CX+PAD,y+head,CW-2*PAD,need))+foot(n,of))}
// slide jenis 3: tweet polos
function tweet(text,dark,n,of,size=66){const lines=wrap(text,W-2*120,size);const hh=lines.length*size*1.22;const y=Math.round((H-hh)/2);return svg(who(120,y-150,dark,1.15)+T(lines,120,y+size*0.85,size,dark?'#fff':C.ink)+foot(n,of,dark),H,dark?C.ink:'#fff')}
function listItem(num,head,body,dark,n,of){return svg(who(120,240,dark,1.15)+T([String(num)],120,560,190,C.accent,700,1)+T(wrap(head,840,62),120,700,62,dark?'#fff':C.ink,700)+T(wrap(body,840,40),120,700+wrap(head,840,62).length*76+40,40,dark?'#c9cdc6':C.muted)+foot(n,of,dark),H,dark?C.ink:'#fff')}
// ===== skema (digambar di dalam kartu: x,y,w,h) =====
const box=(x,y,w,h,label,hi=false,size=32)=>R(x,y,w,h,hi?C.accent:'#f3f4ef',16,C.ink,2.5)+T(wrap(label,w-36,size),x+18,y+h/2+size*0.35-(wrap(label,w-36,size).length-1)*size*0.6,size,C.ink,600,1.2);
const S={
 flow:labels=>(x,y,w,h)=>{const bh=Math.min(110,(h-3*36)/4);let s='';labels.forEach((l,i)=>{const by=y+i*(bh+36);s+=box(x,by,w,bh,l,i===2);if(i<3)s+=ARR(x+w/2,by+bh+2,x+w/2,by+bh+32)});return s},
 beforeAfter:(a,b)=>(x,y,w,h)=>T(['TERLALU UMUM'],x,y+24,22,C.muted,700)+R(x,y+40,w,150,'#eceee8',16)+T(wrap(a,w-40,36),x+20,y+105,36,C.muted)+L(x+20,y+93,x+w-60,y+93,'#c55037',5)+T(['LEBIH JELAS'],x,y+250,22,C.muted,700)+R(x,y+266,w,230,C.accent,16)+T(wrap(b,w-40,38),x+20,y+330,38,C.ink,600),
 compare:(l,r,rows)=>(x,y,w,h)=>{const cw=(w-20)/2;let s=box(x,y,cw,80,l,false,30)+box(x+cw+20,y,cw,80,r,true,30);rows.forEach(([a,b],i)=>{const ry=y+140+i*120;s+=T(wrap(a,cw-10,30),x+6,ry,30)+T(wrap(b,cw-10,30),x+cw+26,ry,30,C.ink,700)+L(x,ry+50,x+w,ry+50,C.line,2)});return s},
 ladder:steps=>(x,y,w,h)=>{let s='';const sh=Math.min(130,(h-40)/3);steps.forEach(([a,b],i)=>{const bw=w*(0.55+i*0.225),by=y+(2-i)*(sh+20);s+=R(x,by,bw,sh,i===2?C.accent:'#f3f4ef',16,C.ink,2.5)+T([a],x+20,by+52,32,C.ink,700)+T([b],x+20,by+94,24,C.muted)});return s},
 stack:items=>(x,y,w,h)=>{let s='';const ih=Math.min(115,(h-3*14)/4);items.forEach(([a,b],i)=>{const by=y+i*(ih+14);s+=R(x,by,w,ih,i===0?C.accent:'#f3f4ef',16,C.ink,2.5)+T([a],x+24,by+48,32,C.ink,700)+T([b],x+24,by+86,24,C.muted)});return s},
 hub:(c,br)=>(x,y,w,h)=>{const bw=(w-40)/3;let s=box(x+w/2-180,y,360,100,c,true,34);br.forEach((b,i)=>{const bx=x+i*(bw+20);s+=L(x+w/2,y+100,bx+bw/2,y+230,C.ink,3)+box(bx,y+230,bw,110,b,false,26)});return s+T(wrap('Sesuaikan dengan hak pakai produk.',w,24),x,y+400,24,C.muted)},
 capacity:(used,total)=>(x,y,w,h)=>{let s='';const cw=(w-3*14)/4,ch=62;for(let i=0;i<total;i++){const cx=x+(i%4)*(cw+14),cy=y+Math.floor(i/4)*(ch+14);s+=R(cx,cy,cw,ch,i<used?C.ink:'#eceee8',10)+T([i<used?'sesi':'kosong'],cx+cw/2,cy+40,22,i<used?'#fff':C.muted,400,1,'middle')}return s+T([`${used} dari ${total} slot terisi`],x,y+Math.ceil(total/4)*(ch+14)+40,30,C.ink,700)+T(['Ilustrasi, bukan data.'],x,y+Math.ceil(total/4)*(ch+14)+80,22,C.muted)},
 calc:(a,b,res)=>(x,y,w,h)=>T([a],x,y+70,64,C.ink,700)+R(x,y+110,w,150,C.accent,18)+T([res],x+24,y+200,62,C.ink,700)+T(['OMZET KOTOR'],x+24,y+240,20,C.ink,700)+T(wrap(b,w,30),x,y+320,30)+T(['Angka simulasi. Bukan janji penghasilan.'],x,y+h-10,22,C.muted),
 check:items=>(x,y,w,h)=>items.map((it,i)=>R(x,y+i*92,40,40,'#fff',8,C.ink,3)+T(wrap(it,w-70,32),x+64,y+i*92+30,32)).join(''),
};
for(const [k,v] of Object.entries({flow:560,beforeAfter:500,compare:500,ladder:450,stack:520,hub:430,capacity:420,calc:470,check:370})){const f=S[k];S[k]=(...a)=>{const d=f(...a);d.need=v;return d}}
// ===== POSTS =====
const P=[];
const car=(id,tag,title,note,cost,slides)=>P.push({kind:'carousel',id,tag,title,note,cost,slides});
car('kapasitas','Foto + kartu','Kalender = plafon','Cover dan isi foto + kartu, skema slot di slide 3.','Foto bank + teks + angka slot',[
 fotoKartu('lelah','Jadwalmu sudah penuh dari pagi sampai malam, tapi penghasilanmu tetap segitu-segitu saja.',1,4),
 fotoKartu('dampingi','Masalahnya bukan kurang kerja keras. Kamu menjual sesuatu yang jumlahnya terbatas: jam.',2,4),
 skema('gym-kosong','Satu minggu kerja coach 1-on-1',S.capacity(14,16),3,4),
 fotoKartu('nulis-program','Jalan keluarnya: bagian kerja yang berulang dijadikan aset. Program, checklist, tracker.',4,4)]);
car('opini','Tweet polos','Opini tanpa foto','Latar putih polos, header tweet, teks besar. Paling murah.','1 input: teks',[
 tweet('Klien tidak membayar untuk jam latihannya. Klien membayar supaya tidak bingung lagi harus mulai dari mana.',false,1,3),
 tweet('Jam bisa ditawar. Kejelasan tidak.',false,2,3,72),
 tweet('Jadi berhenti jualan "sesi". Jualan jalan yang jelas dari kondisi sekarang ke target.',false,3,3)]);
car('alur','Foto + skema','Konten → klien','Foto cover, alur 4 langkah di dalam kartu.','Foto + 4 label',[
 fotoKartu('rekam','Kontenmu ramai yang like, tapi DM tetap sepi. Ada satu langkah yang sering hilang.',1,3),
 skema('laptop-gym','Alur dari konten sampai jadi klien',S.flow(['Konten edukasi','DM / komentar','Konsultasi 15 menit','Paket dengan sistem']),2,3),
 fotoKartu('consultation','Langkah ketiga yang sering dilewati. Orang jarang membeli paket tanpa diajak bicara dulu.',3,3)]);
car('bedah','Foto + skema','Bedah kalimat offer','Sebelum/sesudah di dalam kartu, ditutup checklist.','2 kalimat + checklist',[
 fotoKartu('ngobrol','Offer-mu kedengaran sama dengan 10 coach lain? Coba bedah kalimatnya.',1,3),
 skema('consultation','Jelaskan apa yang klien terima',S.beforeAfter('"Program latihan personal."','"Program 8 minggu, tracker mingguan, dan evaluasi tiap Minggu."'),2,3),
 skema('catat','Cek sebelum menulis offer',S.check(['Isi layanan disebut','Bentuk pendampingan jelas','Durasi dan batas jelas','Langkah berikutnya jelas']),3,3)]);
car('listicle','Tweet polos','Listicle bernomor','Ritme 1 poin per slide (dari thewealthydesk), tampilan tweet hitam.','Judul + 3–7 poin',[
 tweet('5 hal yang harus kamu tahu sebelum konsultasi pertama dengan calon klien.',true,1,3,64),
 listItem(1,'Targetnya, dalam kalimat dia sendiri.','Tulis persis kata-katanya. Kamu akan memakainya lagi saat menjelaskan paket.',true,2,3),
 listItem(2,'Apa yang sudah pernah dia coba.','Supaya kamu tidak menawarkan hal yang sudah gagal untuknya.',true,3,3)]);
car('paket','Foto + skema','Jual sesi vs paket','Perbandingan dua kolom lalu tumpukan isi paket.','Pasangan baris + 4 komponen',[
 fotoKartu('coaching','Klien tidak membeli jam. Klien membeli hasil yang jelas prosesnya.',1,3),
 skema('ngobrol','Bedanya terlihat di isi layanan',S.compare('Per sesi','Paket + sistem',[['Bayar per datang','Bayar per program'],['Jadwal latihan','Program + target'],['Tanpa catatan','Tracker + evaluasi']]),2,3),
 skema('tunjuk-layar','Tunjukkan fungsi tiap komponen',S.stack([['Program','Arah latihan 8 minggu'],['Tracker','Mencatat progres'],['Panduan','Cara pakai program'],['Check-in','Evaluasi mingguan']]),3,3)]);
car('tangga','Foto + skema','Tangga offer','Tangga 3 tingkat lalu hub satu aset tiga pemakaian.','3 tingkat + 1 pusat 3 cabang',[
 fotoKartu('kelas','Satu keahlian yang sama bisa dijual dengan tiga tingkat bantuan.',1,3),
 skema('kelas','Dari mandiri sampai 1-on-1',S.ladder([['Program mandiri','tanpa pendampingan'],['Kelas grup','1 coach, banyak klien'],['Coaching 1-on-1','pendampingan penuh']]),2,3),
 skema('nulis-program','Satu program, tiga peran',S.hub('Workout plan',['Bonus paket','Produk mandiri','Materi kelas']),3,3)]);
car('produk','Foto + kartu','Isi produk fitness','Foto produk (meal prep) untuk Lini 1–3.','Foto produk + teks',[
 fotoKartu('mealprep','Klienmu sering tanya "makannya gimana?" Jawaban yang kamu ketik ulang tiap minggu itu sebenarnya produk.',1,3),
 fotoKartu('rencana','Tulis sekali dalam bentuk meal plan yang rapi. Kirim ke semua klien yang membutuhkan.',2,3),
 tweet('Pekerjaan yang kamu ulang lebih dari 3 kali layak dijadikan template.',false,3,3,62)]);
car('simulasi','Foto + skema','Omzet ≠ laba','Hitungan simulasi di dalam kartu, label wajib.','Angka + asumsi',[
 fotoKartu('tunjuk-layar','10 klien × Rp300 ribu kelihatan besar. Belum tentu itu yang masuk ke kantongmu.',1,3),
 skema('laptop-gym','Baca angkanya sampai akhir',S.calc('10 × Rp300rb','Kurangi waktu layanan, platform, iklan, dan biaya lain untuk melihat laba.','Rp3 juta'),2,3),
 tweet('Omzet menunjukkan penjualan. Laba menunjukkan bisnismu sehat atau tidak.',true,3,3)]);
// ===== REELS =====
H=1920;
function reelFrame(bg,text,step,of,end=false){return svg(photo(bg,H)+textCard(text,56,{h:H})+R(60,70,W-120,8,'#ffffff40',4)+R(60,70,(W-120)*step/of,8,'#fff',4)+T(['REELS · mockup frame'],60,140,24,'#ffffffaa',700),H)}
const reel=(id,title,footage,code,audio,frames,caption)=>P.push({kind:'reels',id,tag:'Reels',title,note:footage,cost:code,audio,caption,slides:frames.map((f,i)=>reelFrame(f[0],f[1],i+1,frames.length,i===frames.length-1))});
reel('r-kapasitas','Kalender = plafon gaji','B-roll coach mendampingi latihan (Pexels/Pixabay), 6–8 dtk, grading gelap.','V1 B-roll kerja coach · 0 kredit','Ambience gym / musik instrumental, tanpa VO',[['dampingi','Kalendermu adalah plafon gajimu.'],['lelah','Ada 3 cara menaikkan plafon itu tanpa menambah jam kerja. Yang ketiga paling jarang dipakai coach.'],['dampingi','Jawabannya di caption ↓']],'Kalender adalah plafon gaji coach 1-on-1. Tiga cara menaikkannya:\n1) Naikkan harga dengan paket yang isinya jelas.\n2) Pindahkan sebagian klien ke kelas grup.\n3) Jadikan pekerjaan yang berulang (program, meal plan, checklist) sebagai aset yang bisa dipakai lagi.\nSimpan, lalu tulis di komentar kamu mau mulai dari nomor berapa.');
reel('r-pricing','Klien beli hasil','B-roll konsultasi coach dan klien di meja gym.','V1 B-roll kerja coach · 0 kredit','Musik instrumental',[['consultation','Klien tidak beli jam. Klien beli hasil.'],['ngobrol','Kalau offer-mu masih "sesi 60 menit", kamu sedang bersaing di harga. Ini yang perlu diganti.'],['consultation','Jawabannya di caption ↓']],'Ganti "sesi 60 menit" dengan tiga hal:\n1) Target: apa yang klien capai dalam 8 minggu.\n2) Isi: program, tracker, evaluasi mingguan.\n3) Batas: berapa kali check-in, lewat apa.\nKlien membandingkan kejelasan, bukan hanya harga.');
reel('r-produk','Program yang terbuang','POV tangan menulis program / mengetik di laptop. Bisa direkam sendiri pakai HP.','V2 tangan / POV · 0 kredit','Ambience + ketikan',[['rencana','Program yang kamu tulis ulang untuk tiap klien adalah aset yang kamu buang.'],['nulis-program','Coach yang penghasilannya naik tanpa tambah jam biasanya melakukan satu hal ini dulu.'],['rencana','Jawabannya di caption ↓']],'Satu hal itu: menulis program sekali dalam format template, lalu memakainya berkali-kali.\n• Jadi bonus paket coaching\n• Jadi produk mandiri harga rendah\n• Jadi materi kelas grup\nPastikan hak pakainya sesuai lisensi kalau kamu memakai template orang lain.');
reel('r-checkin','Klien berhenti','POV scroll chat di HP, jari mengetik pesan check-in.','V2 tangan / POV · 0 kredit','Musik pelan',[['checkin-hp','Klien berhenti bukan karena programnya jelek.'],['checkin-hp','Biasanya karena satu pesan yang tidak pernah dikirim coach di minggu kedua.'],['checkin-hp','Jawabannya di caption ↓']],'Pesan minggu kedua: "Apa yang paling susah dari program minggu ini?"\nMinggu kedua adalah saat semangat awal turun. Satu pertanyaan ini membuka ruang untuk menyesuaikan program sebelum klien diam-diam berhenti.\nSimpan template pesannya.');
reel('r-konten','Konten tidak jadi klien','B-roll orang merekam konten dengan HP + tripod.','V1 B-roll · 0 kredit','Trending audio',[['rekam','Coach paling pintar jarang yang paling laku.'],['rekam','Bukan soal algoritma. Ada satu langkah di antara konten dan klien yang sering dilewati.'],['rekam','Jawabannya di caption ↓']],'Langkah yang dilewati: ajakan bicara.\nKonten → DM → konsultasi 15 menit → paket.\nTanpa konsultasi, orang yang tertarik tidak punya jalan untuk bertanya. Tambahkan satu kalimat ajakan di setiap konten edukasi.');
reel('r-lisensi','Beli template ≠ boleh jual','Screen recording scroll template/produk Fitasset asli (sementara pakai foto laptop sebagai placeholder).','V4 screen recording produk · 0 kredit','Musik instrumental',[['laptop-gym','Beli template bukan berarti boleh menjualnya lagi.'],['tunjuk-layar','Ada 3 jenis hak pakai. Salah pilih bisa membuat produkmu ditarik.'],['laptop-gym','Jawabannya di caption ↓']],'Tiga jenis hak pakai yang umum:\n• Personal: hanya untuk dipakai sendiri/klien sendiri\n• MRR: boleh dijual ulang, tidak boleh mengubah hak jual\n• PLR: boleh diubah dan diberi merek sendiri\nDetail tiap produk mengikuti dokumen lisensinya. (Isi ini contoh; cocokkan dengan lisensi final Fitasset.)');
// urutan feed: campur reels di antara carousel
const order=['kapasitas','r-kapasitas','opini','alur','paket','r-pricing','bedah','r-produk','listicle','tangga','r-checkin','produk','simulasi','r-konten','r-lisensi'];
const posts=order.map(id=>P.find(p=>p.id===id));
(async()=>{
 const data=[];let k=0;
 for(const p of posts){k++;const urls=[];for(let i=0;i<p.slides.length;i++){const buf=await sharp(Buffer.from(p.slides[i])).resize(p.kind==='reels'?540:540).jpeg({quality:82}).toBuffer();fs.writeFileSync(path.join(O,'preview',`${String(k).padStart(2,'0')}-${p.id}-${i+1}.jpg`),buf);urls.push('data:image/jpeg;base64,'+buf.toString('base64'))}data.push({...p,slides:urls})}
 const tpl=fs.readFileSync(path.join(O,'page.html'),'utf8');
 fs.writeFileSync(path.join(O,'index.html'),tpl.replace('/*DATA*/[]',JSON.stringify(data)));
 console.log('ok',data.length,'posts');
})();
