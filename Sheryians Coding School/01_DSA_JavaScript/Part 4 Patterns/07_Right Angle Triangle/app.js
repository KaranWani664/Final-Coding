// Right Angle Triangle

let prompt = require('prompt-sync')();
let n = Number(prompt("Tell me how much rows you want to print with that number "))

// * 
// * * 
// * * *
// * * * * 
// * * * * * 

for (let i = 1; i<=n; i++) {
    for (let j = 1; j<=i ; j++){
        process.stdout.write("* ");
    }
    console.log(" ");
}

console.log(" ");

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let i = 1; i<=n; i++) {
    for (let j = 1; j<=i ; j++){
         process.stdout.write(String(j + " "));
    }
    console.log(" ");
}

// 