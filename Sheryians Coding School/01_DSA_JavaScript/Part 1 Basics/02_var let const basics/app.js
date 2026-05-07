// JS can work without ;
var A = 11
console.log(A)

// This will work
var a = 12;
console.log(a);

// This will also work
b = 13;
console.log(b);

// This will also work
c = 14
console.log(c);
var c;

// This will give you undefined value
console.log(d);
var d = 15;

// This won't work because e is not defined error before printing
e = 16
console.log(e);
let e;


// b & c are working and e is not working because of Hoisting.

// Hoisting
// Temporal Dead Zone

// 