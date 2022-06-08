const fs = require('fs');

fs.opendir('data-files', async (err, directories) => {
  if (err) {
    throw new Error(err);
  }

  for (let dir of directories) {
    if (dir.isDirectory()) {
      console.log('folder: ', dir.name);
    } else {
      console.log('file: ', dir.name);
    }
  }
});
