const fs = require('fs');

const readEmpty = fs.createReadStream('empty.txt');
readEmpty.on('readable', () => {
  console.log(`empty.txt-readable: ${readEmpty.read()}`);
});
readEmpty.on('end', () => {
  console.log('end of empty.txt');
});

const readNonEmpty = fs.createReadStream('not-empty.txt');
readNonEmpty.on('readable', () => {
  console.log(`not-empty.txt-readable: ${readNonEmpty.read()}`);
});
readNonEmpty.on('end', () => {
  console.log('end of not-empty.txt');
});
