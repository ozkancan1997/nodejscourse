const fs = require('fs'); let counter=0;
const zlib = require('zlib');

// const gzip = zlib.createGzip();

// const readStream=fs.createReadStream('./example.txt','utf8');
// const writeStream=fs.createWriteStream('./example2.txt.gz'); // name of both compressed file and new text file

//Instead of using an event, we used pipe, then we use zlib for compression
// readStream.pipe(gzip).pipe(writeStream);

//For reading from compressed file and uncompress it
// const gunzip = zlib.createGunzip();
// const readStream2=fs.createReadStream('./example2.txt.gz');
// const writeStream2=fs.createWriteStream('./example3.txt');

// readStream2.pipe(gunzip).pipe(writeStream2);