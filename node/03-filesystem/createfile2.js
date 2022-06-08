const fs = require('fs');

const args = process.argv.slice(2);

// let contents = args[0];
// let filepath = args[1];

console.log('args: ', args);

let [filepath, ...contents] = args;

console.log('filepath: ', filepath);

contents = contents.join(' ') + '\n';
console.log('contents: ', contents);

// a append mode
fs.writeFile(filepath, contents, { flag: 'a' }, (err) => {
  if (err) {
    throw new Error('Can not write to file');
  }

  console.log('File has been written');
});
