const fs = require('fs');

const path = process.argv[2];

fs.unlink(path, (err) => {
  if (err) {
    throw new Error('cant delete file');
  }

  console.log('file has been deleted');
});
