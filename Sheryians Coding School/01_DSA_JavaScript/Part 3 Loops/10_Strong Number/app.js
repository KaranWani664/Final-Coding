// Strong Number 

let pr = prompt("Give us your number to Give Strong Number");
console.log(pr);
let n = Number(pr);
let original = n;
console.log("Input is : " + n);
console.log(n); //0 for null

if (pr === null || isNaN(n) || !Number.isInteger(n) || n<=0) {
    console.log("Invalid Input / Cancelled / Give me Positive Integer Number");
} else {
    let sum = 0;
    let rem = 0;
    while(n>0){
        rem = n % 10;

        let fact = 1;
        while(rem>0){
            fact *= rem;
            rem--;
        }
        sum = sum + fact;
        n = Math.floor(n/10);
    }
    console.log(sum);

    if ( sum === original ) {
        console.log("This is strong number");
    } else {
        console.log("This is not a strong number");
    }
    
}

// Strong Number
// (1! + 4! + 5! = 1+24+120 = 145) (Is Strong)

// Armstrong Number
// (1^3 + 5^3 + 3^3 = 1+125+27 = 153) (Is Armstrong)