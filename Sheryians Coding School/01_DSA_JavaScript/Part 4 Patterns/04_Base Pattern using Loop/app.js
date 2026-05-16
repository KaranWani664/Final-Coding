// Base Pattern using loop & User Input

// * 
// * 
// * 
// * 
// * 

let prompt = require('prompt-sync')();
let n = prompt("Tell me how much time you want to print that number ");
process.stdout.write(n);
console.log(" ");

for (let i = 0; i<=n; i++) {
    process.stdout.write("* ");
}