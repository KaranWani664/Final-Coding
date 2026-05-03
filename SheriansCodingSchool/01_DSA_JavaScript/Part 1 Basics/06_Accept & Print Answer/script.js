// Static Value - Self Given Value
let age = 10;

// Dynamic Value - User Input
let ageUserInput = prompt();
//prompt() - function for user input - alert box of string type will popup to write a message

// if same variable is created again that variable won't work as same name of ageui but one is () and other ("Q") 

let ageUserInput_W_Question = prompt("What is your age give user input"); 
// Question inside () in "" or '' quotes only.

console.log(age);
console.log(typeof(age));

console.log(ageUserInput);
console.log(typeof(ageUserInput));

console.log(ageUserInput_W_Question);
console.log(typeof(ageUserInput_W_Question));

// use ctrl+shift+j in browser and then enter vaulues and paste all 6 console.log commands in console

// To store number input in number format in DB

// Change String Type to Int Type for numbers of prompt function
let numberUserInput = Number(prompt("Write a number"));
console.log(numberUserInput);
console.log(typeof(numberUserInput));

// Better version seperate and use of Number(Variable_Name) function

let height = prompt("Give height in cm");
height = Number(height);
console.log(height);
console.log(typeof(height));

// Number Function explanation
// Number(12) -> Number 
// Number("12") -> Number 
// Number("Karan") -> NaN     
// Number("Karan22") -> NaN

