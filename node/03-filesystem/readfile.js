const fs = require('fs'); //filesystem

//callback syntax
fs.readFile('data-files/file1.txt', (err, contents) => {
  if (err) {
    console.log('Error is : ', err);
    return;
  }

  console.log(contents.toString());
});
