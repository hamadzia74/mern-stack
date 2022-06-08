const fs = require('fs');

const readableStream = fs.createReadStream('bigfile.txt');
const writableStream = fs.createWriteStream('bigfile-copy.txt');

readableStream.pipe(writableStream);
