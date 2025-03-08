// server.ts
import { fileURLToPath } from 'url';
import { dirname, join, extname } from 'path';
import http from 'http';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port: number = 3000;

const server = http.createServer((req, res) => {
  const requestUrl: string = req.url ?? '/';
  const sanitizedPath = requestUrl.replace(/^(\.\.[/\\])+/, '');
  const filePath: string = join(
    __dirname + '/src',
    sanitizedPath === '/' ? 'index.html' : sanitizedPath
  );
  const ext = extname(filePath).toLowerCase();

  const mimeTypes: { [key: string]: string } = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
  };

  const contentType: string = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Página não encontrada</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end(`Erro no servidor: ${error.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`Acesse http://localhost:${port}`);
});
