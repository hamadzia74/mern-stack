const fs = require('fs');

const readableStream = fs.createReadStream('bigfile.txt');
const writableStream = fs.createWriteStream('bigfile-copy.txt');

// internal buffer => 16kb
readableStream.on('readable', () => {
  // data chunk will be a buffer
  const dataChunk = readableStream.read();
  if (!dataChunk) {
    writableStream.end();
    console.log('data finished');
  } else {
    writableStream.write(dataChunk);
  }
});
