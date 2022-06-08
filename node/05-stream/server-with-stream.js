const fs = require('fs');
console.log('process pid: ', process.pid);

const http = require('http');

// req => readable Stream;
// res => writable Stream;
const server = http.createServer((req, res) => {
  fs.readFile('bigfile.txt', (err, contents) => {
    if (err) {
      throw new Error(err);
    }

    // res.write('<h1>Heading</h1>');
    // res.write('somthing more');

    // res.end('our response end here');

    // res.end(contents);
    res.pipe(contents);
  });
});

const port = 3002;

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
