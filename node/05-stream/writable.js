const fs = require('fs');

const writableStream = fs.createWriteStream('bigfile-copy.txt');

writableStream.write('some data\n');
writableStream.write('some more data\n');
writableStream.write('another data data\n');

writableStream.end();
