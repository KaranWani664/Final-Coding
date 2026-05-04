// Math Functions

// Math.round() - to give round figure without decimal
// .0 to .4 will give lower value
// .5 to .9 will give Higher value 
console.log(Math.round(10.6));
console.log(Math.round(10.4));
console.log();

// Math.ceil() - opposite of floor, it will give higher/next number without decimal from .1 to .9
console.log(Math.ceil(10.1));
console.log();

// Math.floor() - opposite of ceil, it will give lower/current number without decimal from .1 to .9
console.log(Math.floor(10.8))
console.log();

// Math.trunc() //Removes all the decimal part after .
console.log(Math.trunc(13.98))
console.log();

// Math.pow() - needs 2 parameter 
console.log(Math.pow(2, 5)) // in backend its 2^5 means 2 raised to 5 => 2*2*2*2*2 = 32
console.log();

// Math.sqrt() - Square Root
console.log(Math.sqrt(68));
console.log(Math.sqrt(64));
console.log();

// Math.cbrt() - Cube Root
console.log(Math.cbrt(8));
console.log(Math.cbrt(15));
console.log(Math.cbrt(27));
console.log();

// Math.abs() - absolute - remove -ve sign
console.log(Math.abs(-15));
console.log(Math.abs(15));
console.log();

// Math.max() - can use multiple parameters
console.log(Math.max(14, 18, 1, 98, 67, 52));
console.log();

// Math.min()
console.log(Math.min(14, 18, 1, 98, 67, 52));
console.log();

// Math.random() - Gives random value between 0 to 1, Don't change return value with parameters - consider every parameter as blank - ()
console.log(Math.random(14, 18, 1, 98, 67, 52));
console.log(Math.random());
//To get values in use just use *10
console.log(Math.random()*10);
console.log(Math.ceil(Math.random()*10));
// For OTP
console.log(Math.trunc(Math.random()*9000+1000));
console.log();

// Math.PI
console.log(Math.PI);
console.log();

// toFixed() - to decide how many integers after decimal is required
let a = 85.312456321321321321322132213213213213213213212313211
console.log(a.toFixed(4));
console.log(a.toFixed(24));
console.log(typeof(a.toFixed(4)));

console.log(Number(a.toFixed(4)));
console.log(Number(a.toFixed(24)));
console.log(typeof(a.toFixed(4)));

console.log();

// Questions

// Q1
// Calculate area and perimeter of rectangle
// Area of Rectangle = l*b
// Perimeter of Rectangle = 2(l*b)
let c = 10;
let d = 15;

Area = (c*d);
console.log(Area);

Perimeter = 2*(c*d);
console.log(Perimeter);

console.log();

// Q2
// Area of Triangle by Heron's Formula - Square Root of (s * (s-a) * (s-b) * (s-c))
// S Stands for Semi Parameter
let e = 5;
let f = 10;
let g = 3;
let s = (e+f+g)/2;
console.log(s);
let h = (s * (s-e) * (s-f) * (s-g))
console.log(h);
console.log(Math.sqrt(Math.abs(s * (s-e) * (s-f) * (s-g))));

console.log();

let i = 5;
let j = 10;
let k = 3;
let l = (i+j+k)/2;
console.log(l);
let m = (l * (l-i) * (l-j) * (l-k))
console.log(m);
console.log(Math.sqrt(l * (l-i) * Math.abs((l-i)) * (l-k)));

console.log();

let n = 5;
let o = 4;
let p = 3;
let q = (n+o+p)/2;
console.log(q);
let r = (q * (q-n) * (q-o) * (q-p))
console.log(r);
console.log(Math.sqrt(q * (q-n) * (q-o) * (q-p)));

console.log();

// Circumference of Circle - 2*3.14*radius
let t = 15
console.log(2*Math.PI*t);
console.log((2*Math.PI*t).toFixed(2));
console.log(Number((2*Math.PI*t).toFixed(2)));

