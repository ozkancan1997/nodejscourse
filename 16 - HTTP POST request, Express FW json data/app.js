const express = require('express');
const app = express();
const path = require('path');


app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.post('/post', (req, res)=>{
    console.log(req.body);
    res.json({success : true});
})

app.listen(3000);