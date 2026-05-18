// X Pattern

// *       *
//   *   *
//     *
//   *   *
// *       *

// row count = i, col count = j 
// for top left to bottom right line
// i=1,j=1 .... i=5,j=5
// i == j give star 

// for top right to bottom left line
// i=1,j=5  i=2,j=4  ... i=5,j=1
// i+j == n+1 give star

let prompt = require('prompt-sync')();
let n = Number(prompt("Tell me how much rows you want to print with that number "))

for (let i = 1; i<=n; i++) {
    for (let j = 1; j<=n; j++) {
        if(i==j || i+j==n+1){
            process.stdout.write("* ");
        } else {
            process.stdout.write("  ");
        }
    }
    console.log(" ");
}