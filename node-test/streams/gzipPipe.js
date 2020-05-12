const fs = require('fs');
const zlib = require('zlib');

const r = fs.createReadStream('not-empty.txt');
const z = zlib.createGzip();
const w = fs.createWriteStream('not-empty.txt.gz');
r.pipe(z).pipe(w);
