//Operators in JavaScript

// Arithmetic
// Assignment
// Comparison
// Logical
// Unary
// Ternary

//Arithmetic Operators
let a = 10;
let b = 5;
let c = a + b; // Addition
let d = a - b; // Subtraction
let e = a * b; // Multiplication
let f = a / b; // Division
let g = a % b; // Modulus

//Assignment Operators
// Assignment operators are used to assign values to variables. They include the basic assignment operator (=) and compound assignment operators (+=, -=, *=, /=, %=).
let x = 10;
x += 5; // x = x + 5
x -= 3; // x = x - 3
x *= 2; // x = x * 2
x /= 4; // x = x / 4
x %= 3; // x = x % 3

//Comparison Operators
// Equality (==), Strict Equality (===), Inequality (!=), Strict Inequality (!==), Greater Than (>), Less Than (<), Greater Than or Equal To (>=), Less Than or Equal To (<=)

let num1 = 10;
let num2 = 20;
console.log(num1 == num2);

console.log(num1 === num2);
// == → checks value only
// === → checks value + type

console.log(num1 != num2);

console.log(num1 > num2);

console.log(num1 < num2);

console.log(num1 >= num2);

console.log(num1 <= num2);

//Logical Operators
// Logical AND (&&) Both must be true
// Logical OR (||) Either must be true
// Logical NOT (!) Negates the boolean value
let isSunny = true;
let isWarm = false;
let isWeekend = true;
console.log(isSunny && isWarm); // false
console.log(isSunny && isWeekend); // true
console.log(isSunny || isWarm); // true
console.log(!isSunny); // false 
// Returns first truthy 
console.log(0 && "Hello"); // 0
console.log("" || "Hello"); // Hello

//Unary Operators
// Unary plus (+), Unary negation (-), Increment (++), Decrement (--), Logical NOT (!)
let num = 5;
console.log(+num); // 5
console.log(-num); // -5

num++;
console.log(num); // 6

num--;
console.log(num); // 5

console.log(!num); // false
// The logical NOT operator (!) negates the boolean value of num. Since num is 5 (which is truthy), !num evaluates to false.

// Pre-increment and Post-increment
let count = 0;
console.log(count++); // Output: 0 (post-increment: returns the value before incrementing)
console.log(count);   // Output: 1 (count is now incremented)
count = 0; // Reset count
console.log(++count); // Output: 1 (pre-increment: increments the value before returning it)
console.log(count);   // Output: 1 (count is already incremented)

//Ternary Operator
// condition ? expressionIfTrue : expressionIfFalse
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes
