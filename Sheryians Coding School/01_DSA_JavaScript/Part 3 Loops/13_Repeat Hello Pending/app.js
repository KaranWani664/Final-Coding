// This is just like Exit 07WhileLoop but you have to do this with do while exit when user prompt 0 

let pr = prompt("Give us your number to reverse");
console.log(pr);
let n = Number(pr);
console.log("Input is : " + n);
console.log(n); //0 for null

if (pr === null || isNaN(n) || !Number.isInteger(n) || n<=0) {
    console.log("Invalid Input / Cancelled / Give me Positive Integer Number");
} else {
    
}
