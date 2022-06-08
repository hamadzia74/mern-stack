const fs = require('fs');

const readableStream = fs.createReadStream('bigfile.txt');

// internal buffer => 16kb
readableStream.on('readable', () => {
  // data chunk will be a buffer
  const dataChunk = readableStream.read();
  if (!dataChunk) {
    console.log('data finished');
  }
  console.log('data from stream: ', dataChunk.toString());
});
