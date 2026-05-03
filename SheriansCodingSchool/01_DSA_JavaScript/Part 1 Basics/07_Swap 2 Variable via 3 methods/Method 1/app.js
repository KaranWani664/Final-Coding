let a = 10;
let b = 20;

let c = a; // Copied value of a
a = b; // Copied value of b
b = c; // Copied value of c which is a
console.log(a);
console.log(b);