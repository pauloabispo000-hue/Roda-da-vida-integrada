import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const root=new URL('./',import.meta.url);
http.createServer(async(req,res)=>{try{const path=new URL(req.url,'http://localhost').pathname;const files={'/':'index.html','/app.js':'app.js','/model.js':'model.js','/style.css':'style.css','/logo.jpg.jpeg':'logo.jpg.jpeg'};if(!files[path]){res.writeHead(404);return res.end('Não encontrado');}const file=files[path];res.setHeader('Content-Type',file.endsWith('.jpeg')?'image/jpeg':file.endsWith('.js')?'text/javascript; charset=utf-8':file.endsWith('.css')?'text/css; charset=utf-8':'text/html; charset=utf-8');res.end(await readFile(new URL(file,root)));}catch{res.writeHead(500);res.end('Erro ao carregar página');}}).listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log('Roda da Vida iniciada na porta '+(process.env.PORT||3000)));
