// Prompt function to use in Terminal using Node & Prompt-Sync from npm

// let a = prompt("Enter a number");
// console.log(a);
// Error in Terminal when directly using node app.js - ReferenceError: prompt is not defined at Object.<anonymous> 

// Solution use Prompt Sync

// Go to -> https://www.npmjs.com/package/prompt-sync
// paste in terminal -> npm i prompt-sync

let prompt = require('prompt-sync')();
let a = prompt("Enter a number ");
process.stdout.write(a);
console.log(a);
console.log(a);