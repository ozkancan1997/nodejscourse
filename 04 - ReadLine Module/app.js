const readline = require('readline');

const rl = readline.createInterface({input : process.stdin, output : process.stdout});


let num1 = Math.ceil(Math.random()*10);
let num2 = Math.ceil(Math.random()*10);
let answer = num1 * num2;

let inputC=(userInput)=>{
    if(userInput.trim()==answer){
        rl.close();
    }else{
        rl.setPrompt("Not Correct, Try Again\n");
        rl.prompt();
    }
}

rl.question(`What is ${num1} times ${num2}?\n`, inputC);

rl.on('close', ()=> console.log("Correct"));

rl.on('line', inputC);
