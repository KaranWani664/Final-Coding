// Sum of n Natural Numbers
let pr = prompt("Give us your number");

if (pr === null) {
    console.log("cancelled")
} else {
    let n = Number(pr);
    console.log("Input is : " + n);

    if (isNaN(n)) {
        console.log("Invalid Input");
    } else {
        if (n<=0) {
            console.log("Give me positive & More than Zero Number.");
        } else {
            let Factorial = 1;
            for (let i=1; i<=n; i++){
                Factorial *= i;
            }
            console.log(Factorial);
        }
    }
}




