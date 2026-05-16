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
         process.stdout.write(j + " "); 
         // Used Cconcatenation but we can also use String(j)
    }
    console.log(" ");
}

console.log(" ");

// in js ch++ will not work

// A
// A B
// A B C
// A B C D
// A B C D E

for (let i = 1; i<=n; i++) {
    for (let j = 1; j<=i ; j++){
         process.stdout.write(String.fromCharCode(j + 64) + " ");
    }
    console.log(" ");
}

console.log(" ");


for (let i = 1; i<=n; i++) {
    let ascii = 65;
    for (let j = 1; j<=i ; j++){
         process.stdout.write(String.fromCharCode(ascii) + " ");
         ascii++;
    }
    console.log(" ");
}
