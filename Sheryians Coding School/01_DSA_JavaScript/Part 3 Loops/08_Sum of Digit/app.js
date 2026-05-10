// While Loop
// Sum of digit

// 1234 = 1+2+3+4
// 1234 = 4+3+2+1

let pr = prompt("Give us your number for Sum of its digits");
console.log(pr);
let n = Number(pr);
console.log("Input is : " + n);
console.log(n); //0 for null

if (pr === null || isNaN(n) || !Number.isInteger(n) || n<=0) {
    console.log("Invalid Input / Cancelled / Give me Positive Integer Number");
} else {
    let Total = 0;
    while(n>0){
        Rem = n % 10;
        Total += Rem;
        n = Math.floor(n / 10);
    }
    console.log(Total);
}
