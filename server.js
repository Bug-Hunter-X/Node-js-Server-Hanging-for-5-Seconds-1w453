const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running operation
  const start = Date.now();
  while (Date.now() - start < 5000) {
    // Wait for 5 seconds
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});