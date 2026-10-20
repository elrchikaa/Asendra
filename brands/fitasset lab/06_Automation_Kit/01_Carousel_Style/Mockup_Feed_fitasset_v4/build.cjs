// Gabung page.html + posts.js + _img.json jadi index.html mandiri. Jalankan: node build.cjs (dari folder ini atau root).
const fs=require('fs'),path=require('path'),O=__dirname;
const page=fs.readFileSync(path.join(O,'page.html'),'utf8');
const posts=fs.readFileSync(path.join(O,'posts.js'),'utf8');
const img=fs.readFileSync(path.join(O,'_img.json'),'utf8');
fs.writeFileSync(path.join(O,'index.html'),page.replace('/*IMGS*/{}',()=>img).replace('/*POSTS*/',()=>posts));
console.log('ok',(fs.statSync(path.join(O,'index.html')).size/1e6).toFixed(2)+' MB');
