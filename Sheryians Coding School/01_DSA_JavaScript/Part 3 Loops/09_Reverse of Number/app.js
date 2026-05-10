// Reverse a Number using Whole Loop

// 123 -> (3)*10+2 = (30+2)*10+1 = (320)+1 = 321

let pr = prompt("Give us your number to reverse");
console.log(pr);
let n = Number(pr);
console.log("Input is : " + n);
console.log(n); //0 for null
console.log("");

if (pr === null || isNaN(n) || !Number.isInteger(n) || n<=0) {
    console.log("Invalid Input / Cancelled / Give me Positive Integer Number");
} else {
    let final = 0;
    while(n>0){
        let rem = n % 10;
        final = final*10 + rem;
        n = Math.floor(n/10);
        
        console.log(final);
        console.log(n);
        console.log("");
    }
    console.log(final);
}

