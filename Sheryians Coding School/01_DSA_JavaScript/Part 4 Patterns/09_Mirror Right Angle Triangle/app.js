// Mirror Right Angle Triangle

let prompt = require('prompt-sync')();
let n = Number(prompt("Tell me how much rows you want to print with that number "))

//         *
//       * *
//     * * *
//   * * * *
// * * * * *

// Inverted Right Angle Triangle as Space and Right Angle Triangle After Space

for (let i = 1; i<=n; i++) {
    // Inverted
    for (let j = n-1; j>=i; j--){
        process.stdout.write("_ ");
    }    
    
    // Right
    for (let k = 1; k<=i; k++) {
            process.stdout.write("* ");
    }
    console.log(" ");
}