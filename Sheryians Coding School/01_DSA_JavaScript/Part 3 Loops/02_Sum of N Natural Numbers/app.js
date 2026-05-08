// Sum of n Natural Numbers

let n = Number(prompt("Give us your natural number"));
console.log("Input is : " + n);

let Total = 0;

if (isNaN(n) || n>9) {
    console.log("Invalid Input");
} else {
    if (n<0) {
        console.log("Give me positive Number");
    } else {
        for (let i=1; i<=n; i++){
            Total += i;
        }
        console.log(Total);
    }
}


