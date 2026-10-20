// QC otomatis mockup: safe zone (_operating-system/standards/aturan-layout-safe-zone.md), ukuran huruf minimum,
// teks keluar/mepet kotak, teks tabrakan/terlalu rapat, teks menimpa kotak lain. Jalankan di halaman: fetch('qc.js').then(r=>r.text()).then(eval)
window.QC=()=>{const out=[];const blk=e=>e.closest('h4,h5,p,.who,.n,.bar,.cite');let cnt=0;
document.querySelectorAll('#cars .post, #reels .post, #covers, #grid, #p1').forEach(post=>{const title=post.querySelector('h3')?.textContent||post.id;
 post.querySelectorAll('.cv').forEach((cv,si)=>{cnt++;const C=cv.getBoundingClientRect();const W=C.width,H=C.height;const reel=cv.classList.contains('r916');const u=W/100;
  const safe=reel?{l:C.left+W*35/1080,r:C.right-W*100/1080,t:C.top+H*220/1920,b:C.bottom-H*450/1920}:{l:C.left+W*50/1080,r:C.right-W*120/1080,t:C.top+W*0.03,b:C.bottom-H*180/1440};
  const texts=[];const walker=document.createTreeWalker(cv,NodeFilter.SHOW_TEXT);let n;
  while(n=walker.nextNode()){if(!n.textContent.trim())continue;const rg=document.createRange();rg.selectNodeContents(n);const rs=[...rg.getClientRects()].filter(r=>r.width>0);if(!rs.length)continue;
   texts.push({el:n.parentElement,R:{l:Math.min(...rs.map(r=>r.left)),r:Math.max(...rs.map(r=>r.right)),t:Math.min(...rs.map(r=>r.top)),b:Math.max(...rs.map(r=>r.bottom))},t:n.textContent.trim().slice(0,30)});}
  const tag=(m,t)=>out.push(`${title} #${si+1}: ${m} «${t}»`);
  texts.forEach(x=>{const R=x.R;const fs=parseFloat(getComputedStyle(x.el).fontSize)/W*1080;if(fs<31.5&&!x.el.matches('.who i,.sw'))tag(`huruf ${fs.toFixed(0)}px`,x.t);
   if(R.r>safe.r+1||R.b>safe.b+1||R.l<safe.l-1||R.t<safe.t-1)tag(`luar safe zone`,x.t);
   let e=x.el;while(e&&e!==cv){const cs=getComputedStyle(e);if(cs.display==='inline'){e=e.parentElement;continue}const boxed=(cs.backgroundColor!=='rgba(0, 0, 0, 0)'&&cs.backgroundImage==='none')||(cs.borderStyle!=='none'&&parseFloat(cs.borderWidth)>0);if(boxed){if(e.matches('.who i'))break;const B=e.getBoundingClientRect();const cp=cs.clipPath!=='none'?0.07*B.width:0;const g=Math.min(R.l-B.left-cp,B.right-R.r-cp,R.t-B.top,B.bottom-R.b);if(g<-1)tag('keluar kotak',x.t);else if(g<1.4*u)tag(`mepet ${(g/u).toFixed(1)}`,x.t);break}e=e.parentElement}});
  for(let i=0;i<texts.length;i++)for(let j=i+1;j<texts.length;j++){const A=texts[i],B=texts[j];const ba=blk(A.el),bb=blk(B.el);if(ba&&ba===bb)continue;const a=A.R,b=B.R;
   const ix=Math.min(a.r,b.r)-Math.max(a.l,b.l),iy=Math.min(a.b,b.b)-Math.max(a.t,b.t);
   if(ix>1&&iy>1)tag('tabrakan «'+B.t+'»',A.t);else if(iy>2&&ix>-1*u&&ix<=1)tag(`rapat-h «${B.t}»`,A.t);else if(ix>2&&iy>-0.9*u&&iy<=1)tag(`rapat-v «${B.t}»`,A.t);}
  const boxes=[...cv.querySelectorAll('*')].filter(e=>{const cs=getComputedStyle(e);if(e.matches('.tab,.phn,.paper,.stk div'))return true;return cs.backgroundColor!=='rgba(0, 0, 0, 0)'&&cs.backgroundImage==='none'&&!e.matches('.dim,.dimtop,.shade,.tw,.cv,.who i')&&e.getBoundingClientRect().width>0});
  texts.forEach(x=>boxes.forEach(B=>{if(B.contains(x.el)||x.el.contains(B))return;const b=B.getBoundingClientRect(),R=x.R;if(Math.min(R.r,b.right)-Math.max(R.l,b.left)>1&&Math.min(R.b,b.bottom)-Math.max(R.t,b.top)>1)tag('menimpa '+(B.className||B.tagName),x.t)}));
 });});return {kanvas:cnt,issues:[...new Set(out)]}};

// keseimbangan: jarak teks pertama ke tepi atas kotak vs teks terakhir ke tepi bawah
window.QCBAL=()=>{const out=[];document.querySelectorAll('#cars .post, #p1').forEach(post=>{const title=post.querySelector('h3')?.textContent||post.id;post.querySelectorAll('.cv').forEach((cv,si)=>{const u=cv.getBoundingClientRect().width/100;
 cv.querySelectorAll('.card,.paper,.calc,.tb,.ns,.stk div,.st div,.mx>div,.ak>div,.ba div,.fn div,.bub,.o,.an span,.sp .lb span').forEach(B=>{const b=B.getBoundingClientRect();const rs=[];const w=document.createTreeWalker(B,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode()){if(!n.textContent.trim())continue;const r=document.createRange();r.selectNodeContents(n);rs.push(...[...r.getClientRects()].filter(x=>x.width>0))}if(!rs.length)return;
  const top=Math.min(...rs.map(r=>r.top))-b.top,bot=b.bottom-Math.max(...rs.map(r=>r.bottom));const em=getComputedStyle(B).marginTop;
  if(B.matches('.st div'))return; // tangga: harga sengaja di bawah
  if(Math.abs(top-bot)>3*u&&Math.max(top,bot)>1.8*Math.min(top,bot))out.push(`${title} #${si+1}: ${B.className||B.tagName} atas ${(top/u).toFixed(1)} vs bawah ${(bot/u).toFixed(1)}cqw`)})})});return [...new Set(out)]};
// label kurva tidak boleh menempel/menabrak garis (jarak minimal 2cqw)
window.QCKURVA=()=>{const out=[];document.querySelectorAll('.kv').forEach((kv,ki)=>{const cv=kv.closest('.cv');const u=cv.getBoundingClientRect().width/100;const path=kv.querySelector('path');const svg=path.ownerSVGElement;const m=svg.getScreenCTM();const L=path.getTotalLength();const pts=[];for(let i=0;i<=200;i++){const p=path.getPointAtLength(L*i/200).matrixTransform(m);pts.push(p)}
 kv.querySelectorAll('.lb').forEach(lb=>{const r=lb.getBoundingClientRect();const d=Math.min(...pts.map(p=>Math.hypot(Math.max(r.left-p.x,0,p.x-r.right),Math.max(r.top-p.y,0,p.y-r.bottom))))/u-0.7;if(d<2||d>4.5)out.push(`kurva ${ki+1}: label «${lb.textContent}» jarak terdekat ke garis ${d.toFixed(1)}cqw (target 2–4.5)`)})});return out};
