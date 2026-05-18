// V Pattern

// *       *
//  *     *
//   *   *
//    * *
//     *

// Consider Col = 2*n-1
// left side of v in 1st 5 col & right side of v in next 5 col

// i==j left
// i+j == n*2 right

let prompt = require('prompt-sync')();
let n = prompt("Give me a number ");

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n*2-1; j++) {
        if (i == j || i+j == n*2) {
            process.stdout.write("* ");
        } else {
            process.stdout.write("_ ");
        }
    }
    console.log("  ");
}