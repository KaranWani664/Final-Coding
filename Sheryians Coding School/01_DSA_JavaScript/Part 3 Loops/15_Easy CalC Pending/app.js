// Sasta CalC
// press 1 for addition
// press 1 for substraction etc.
// Wrong option invalid
// Take 2 variable

let pr = prompt("Give us your number to reverse");
console.log(pr);
let n = Number(pr);
console.log("Input is : " + n);
console.log(n); //0 for null

if (pr === null || isNaN(n) || !Number.isInteger(n) || n<=0) {
    console.log("Invalid Input / Cancelled / Give me Positive Integer Number");
} else {
    
}
