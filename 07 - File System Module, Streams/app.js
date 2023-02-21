const fs = require('fs'); let counter=0;

const readStream=fs.createReadStream('./example.txt','utf8');
const writeStream=fs.createWriteStream('./example2.txt');

readStream.on('data',(chunk)=>{
    writeStream.write(chunk, (err)=>{
        if(err) console.log(err);
        else{
            console.log("Succesfully Written to File");
        }
    })
});
