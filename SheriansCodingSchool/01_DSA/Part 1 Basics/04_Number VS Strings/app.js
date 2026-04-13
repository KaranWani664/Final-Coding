//Number
10
//10 + 1 = 11

//String
"10"
//"10" + "1" = "101"
//"1" + "1" = "11"

//Addition
let a = 10;
let b = 12;
console.log(a+b);
//22
//Number

//Concatenation
let c = 10;
let d = "12";
console.log(c+d);
//1012
console.log(typeof(c+d));
//String

//Sum with message
let e = 10;
let f = 20;
console.log("The Sum of 10 & 20 is " + e + f);
//Converts to complete string because of cancatenation
//The Sum of 10 & 20 is 1020

//Operator => +
//Operend => a

//Sum with message
let e = 10;
let f = 20;
console.log("The Sum of 10 & 20 is " + (e + f));
//Uses BODMAS and keep String and Number Seperate for Calculation but Output is String
//The Sum of 10 & 20 is 30
console.log(typeof("The Sum of 10 & 20 is " + (e + f)));

