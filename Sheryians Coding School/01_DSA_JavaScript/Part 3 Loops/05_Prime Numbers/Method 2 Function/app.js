// Prime number
let pr = prompt("Give us your number to find Prime or Not");
console.log(pr);
let n = Number(pr);
console.log("Input is : " + n);

console.log(n); //0 for null

if (pr === null || isNaN(n) || !Number.isInteger(n) || n<=0) {
    console.log("Invalid Input / Cancelled / Give me Positive Integer Number");
} else {
    let Prime = true;
    for (let i = 2; i<=Math.floor(n/2); i++){
        if(n % i === 0) {
            Prime = false;
            break;
        }
    }
    console.log(Prime);
}

function isPrime(n) {
    if (n<=1) return false;
    if (n==2) return true;
    if (n%2==0) return false;

}


// If a number is not divisible from 2 to its square root then it will not be divided further after root

// Means 37 is not divided from 2 to 6 then it wont have any factor further