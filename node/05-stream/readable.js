const fs = require('fs');

console.log('process pid: ', process.pid);

const http = require('http');

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream('bigfile.txt');
  fileStream.pipe(res);
});

const port = 3002;

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
