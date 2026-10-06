import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), 'public');
const port = Number(process.env.PORT);
if (!Number.isInteger(port) || port < 1024 || port > 65535) {
  throw new Error('Defina PORT com a porta declarada para esta sessão.');
}
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.ico': 'image/x-icon', '.pdf': 'application/pdf' };
const server = http.createServer(async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    return res.end();
  }
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const requested = pathname === '/' ? '/index.html' : pathname;
    const target = path.resolve(root, `.${requested}`);
    if (!target.startsWith(root + path.sep)) {
      res.writeHead(403);
      return res.end('Acesso negado');
    }
    const info = await stat(target);
    if (!info.isFile()) throw new Error('not_found');
    const bytes = await readFile(target);
    res.writeHead(200, { 'Content-Type': types[path.extname(target)] || 'application/octet-stream', 'Content-Length': bytes.length, 'Cache-Control': 'no-cache', 'X-Content-Type-Options': 'nosniff' });
    res.end(req.method === 'HEAD' ? undefined : bytes);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<!doctype html><html lang="pt-BR"><head><meta name="robots" content="noindex"><title>Página não encontrada</title></head><body><h1>Página não encontrada</h1><a href="/">Voltar ao evento</a></body></html>');
  }
});
server.on('error', (error) => { console.error(error.message); process.exit(1); });
server.listen(port, '127.0.0.1', () => console.log(`Prévia local pronta: http://127.0.0.1:${port}`));
