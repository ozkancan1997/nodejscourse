const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/objects.json');
    res.writeHead(200, {'Conten-type' : 'text/html'})
    readStream.pipe(res);
}).listen(3000);

