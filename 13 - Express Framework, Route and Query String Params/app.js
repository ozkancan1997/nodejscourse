const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send("Hello World from Express.js");
});

app.get('/person/:name/:surname/:gender/:age', (req,res)=>{
    res.send(req.query);
});

app.listen(3000);