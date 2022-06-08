const { createGzip } = require('zlib');
const { createReadStream, createWriteStream } = require('fs');

let inputFile = process.argv[2];
let outputFile = process.argv[3];

const inputStream = createReadStream(inputFile);

const outputStream = createWriteStream(outputFile);

inputStream.pipe(createGzip()).pipe(outputStream);
