const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const types = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.jpeg':'image/jpeg', '.png':'image/png' };

http.createServer((request, response) => {
  const urlPath = request.url === '/' ? '/index.html' : decodeURIComponent(request.url.split('?')[0]);
  const file = path.resolve(root, `.${urlPath}`);
  if (!file.startsWith(root)) { response.writeHead(403); response.end(); return; }
  fs.readFile(file, (error, data) => {
    if (error) { response.writeHead(404); response.end('Not found'); return; }
    response.writeHead(200, {
      'Content-Type': types[path.extname(file)] || 'application/octet-stream',
      'Cache-Control': 'no-store, no-cache, must-revalidate'
    });
    response.end(data);
  });
}).listen(5173, '127.0.0.1');
