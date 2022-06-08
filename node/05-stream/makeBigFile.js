const fs = require('fs');

let contents = '';
for (let i = 0; i < 400000; i++) {
  contents +=
    'Because Duplex and Transform streams are both Readable and Writable, each maintains two separate internal buffers used for reading and writing, allowing each side to operate independently of the other while maintaining an appropriate and efficient flow of data. For example, net.Socket instances are Duplex streams whose Readable side allows consumption of data received from the socket and whose Writable side allows writing data to the socket. Because data may be written to the socket at a faster or slower rate than data is received, each side should operate (and buffer) independently of the other. The mechanics of the internal buffering are an internal implementation detail and may be changed at any time. However, for certain advanced implementations, the internal buffers can be retrieved using writable.writableBuffer or readable.readableBuffer. Use of these undocumented properties is discouraged';
}

fs.writeFile('bigfile.txt', contents, { flag: 'a' }, (err) => {
  if (err) {
    throw new Error('Can not make bigfile');
  }
});
