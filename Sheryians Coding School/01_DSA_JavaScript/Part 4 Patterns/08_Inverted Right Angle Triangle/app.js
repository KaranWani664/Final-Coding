// Inverted Right Angle Triangle

let prompt = require('prompt-sync')();
let n = Number(prompt("Tell me how much rows you want to print with that number "))

// * * * * * 
// * * * *
// * * *
// * *
// *

for (let i = 1; i<=n; i++ ) {
    for (let j = 1; j<=i; j-- ) {
        process.stdout.write("* ");
    }
}