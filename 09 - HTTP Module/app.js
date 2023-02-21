const http = require('http');

//basic hello world output
// const server=http.createServer((req,res)=>{
//     res.write("Hello NodeJS from VSCODE");
//     res.end();
// })

// server.listen(3000);

//sending response relative to the request url
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write("Hello NodeJS from VSCODE");
        res.end();
    }else{
        res.write("This is not root dir.")
        res.end();
    }
})

server.listen(3000);