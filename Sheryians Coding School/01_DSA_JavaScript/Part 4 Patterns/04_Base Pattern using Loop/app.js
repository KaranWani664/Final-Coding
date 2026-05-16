// Base Pattern using loop & User Input

// * * * * *

let prompt = require('prompt-sync')();
let n = Number(prompt("Tell me how much time you want to print that number "));
// process.stdout.write(n); // This requires only string values Number(prompt()) will give error
for (let i = 1; i<=n; i++) {
    process.stdout.write("* ");
}