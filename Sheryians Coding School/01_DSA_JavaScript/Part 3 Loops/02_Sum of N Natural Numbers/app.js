// Sum of n Natural Numbers
let pr = prompt("Give us your natural number");

if (pr === null) {
    console.log("cancelled")
} else {
    let n = Number(pr);
    // If we cancel prompt function without Number() rule then it will give null value
    console.log("Input is : " + n);

    let Total = 0;

    if (isNaN(n) || n>9) {
        console.log("Invalid Input, Give me any natural number in range of 1 to 9");
    } else {
        if (n<=0) {
            console.log("Give me positive & More than Zero Number.");
        } else {
            for (let i=1; i<=n; i++){
                Total += i;
            }
            console.log(Total);
        }
    }
}

// if we Press Cancel in prompt popup then it will run else block



