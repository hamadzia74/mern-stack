const fs = require('fs');

let contents = process.argv[2];
let filepath = process.argv[3];

fs.writeFile(filepath, contents, (err) => {
  if (err) {
    throw new Error('Can not write to file');
  }

  console.log('File has been written');
});
