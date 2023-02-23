const express = require('express');
const path = require('path');
const app = express();
const joi = require('joi');


// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

// app.get('/', (req,res)=>{
//     res.sendFile(path.join(__dirname, 'index.html'));
// })

// app.post('/post', (req, res)=>{
//     console.log(req.body);
//     res.json({success : true});
// })

// app.listen(3000);

const schema = joi.object().keys({
    email : joi.string().trim().email().required(),
    pass : joi.string().min(5).max(12).required(),
})


app.use(express.urlencoded({extended : false}));
// app.use(express.json());


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/',(req,res)=>{
    let result = schema.validate(req.body);
    // res.send(result);
    if(result.error) res.send("An error occured");
    else res.send("Submitted successfully");

});


app.listen(3000);