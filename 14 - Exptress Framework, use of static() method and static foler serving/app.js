const express = require('express');
const path = require('path');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.get('/person/:name/:surname/:gender/:age', (req,res)=>{
    res.send(req.query);
});


app.listen(3000);