// Inverted Right Angle Triangle

let prompt = require('prompt-sync')();
let n = Number(prompt("Tell me how much rows you want to print with that number "))

// * * * * * 
// * * * *
// * * *
// * *
// *

for (let i = 1; i<=n; i++ ) {
    for (let j = n; j>=i; j-- ) {
        process.stdout.write("* ");
    }
    console.log(" ");
}

// if j = 1 then j = n-i+1