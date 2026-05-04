//Unary Operator ++ --

// ++ increment
// i++ Post increment - Print First Increase Later
let a = 10;
console.log("a = " + a);
let b = a++;
console.log("b = " + b);
console.log("a = " + a);

console.log();

// ++i Pre increment - Increase First Print Later 
let c = 10;
console.log("c = " + c);
let d = ++c;
console.log("d = " + d);
console.log("c = " + c);

console.log();

// -- decrement
// i-- Post decrement - Print First Decrease Later
let e = 10;
console.log("e = " + e);
let f = e--;
console.log("f = " + f);
console.log("e = " + e);

console.log();

// --i Pre decrement - Decrease First Print Later
let g = 10;
console.log("g = " + g);
let h = --g;
console.log("h = " + h);
console.log("g = " + g);

console.log();

// Questions
// Q1
console.log("Q1");

let i = 11; // here i = 11
i = i++ + ++i; // i = i++(11 taken then i = 12) + ++i(1+12 = 13 taken)
// i = 11 + 13
console.log(i);
// 24

console.log();

// Q2 
console.log("Q2");

let j = 11, k = 22;
let l = j + k + j++ + k++ + ++j + ++k;
// l = 11 + 22 + 11(then 12) + 22(then 23) + 13 + 24
// l = 11 + 22 + 11 + 22 + 13 + 24
console.log("j = " + j); // 13
console.log("k = " + k); // 24
console.log("l = " + l); // 103

console.log();

// Q3
console.log("Q3");

let m = true; //This will work only in js because true is considered as 1
m++;
console.log(m);
console.log(typeof(m));
// 2

console.log();

let n = false; //This will work only in js because false is considered as 0
n++;
console.log(n);
console.log(typeof(n));
// 1

console.log();

// Unary Operators are not assigned on constants like 11++
// let o = 10++;
// console.log(o);
// Invalid left-hand side expression in postfix operation

// Q4

// let p = 11;
// let q = --(p++);
// its like --11
// console.log(p, q);
// Invalid left-hand side expression in prefix operation