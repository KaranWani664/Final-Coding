// if n = 5
// then a square of * should be given with 5 rows & 5 columns
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

let prompt = require('prompt-sync')();
let n = Number(prompt("Tell me how much time you want to print that number "));

for (let i = 1; i<=n; i++) {
    process.stdout.write("* ");
}
console.log(" ");

for (let i = 1; i<=n; i++) {
    process.stdout.write("* ");
}
console.log(" ");

for (let i = 1; i<=n; i++) {
    process.stdout.write("* ");
}
console.log(" ");

for (let i = 1; i<=n; i++) {
    process.stdout.write("* ");
}
console.log(" ");

for (let i = 1; i<=n; i++) {
    process.stdout.write("* ");
}
console.log(" ");