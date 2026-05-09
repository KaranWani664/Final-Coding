// Factors of number
let pr = prompt("Give us your number to find factors");
console.log(pr);
let n = Number(pr);
console.log("Input is : " + n);

console.log(n); //0 for null

if (pr === null || isNaN(n) || !Number.isInteger(n) || n<=0) {
    console.log("Invalid Input / Cancelled / Give me Positive Integer Number");
} else {
    const array = [];
    for (let i = 1; i<=Math.floor(n/2); i++){
        if(n % i === 0) {
            array.push(i);
        }
    }
    array.push(n);

    console.log(array);
}
