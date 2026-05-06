// INR Denominations means Amount of Notes of 500, 200, 100, etc.

// Can be done using loops

// 4888
// 4888 - 4500 <= (500*9) = 388
// 388 - 300 <= (100*3) = 88
// 88 - 50 <= (50*1) = 38
// 38 - 30 <= (10*3) = 8
// 8 - 5 <= (5*1) = 3
// 3 - 2 <= (2*1) = 1
// 1 - 1 <= (1*1) = 0

// 4500
// 4500/500 = 9

// console.log(4823/500); // 9.646 
// console.log(4823%500); // 323

let amount = Number(prompt("Give Total Amount"));
console.log(amount);

let count = 0;

if (isNaN(amount) || amount<0) {
    console.log("Invalid Input");
} else {
    if (amount===0) {
        console.log("You will not get any denomination");
    } else {
        if (amount>=500) {
        count = Math.trunc(amount / 500);
        console.log("You will get " + count + " Notes of 500");
        amount %= 500;
        } 
        if (amount>=200) {
            count = Math.trunc(amount / 200);
            if (count > 0) {
                console.log("You will get " + count + " Notes of 200");
            }
            amount %= 200;
        }
        if (amount>=100) {
            count = Math.trunc(amount / 100);
            if (count > 0) {
                console.log("You will get " + count + " Notes of 100");
            }
            amount %= 100;
        }
        if (amount>=50) {
            count = Math.trunc(amount / 50);
            if (count > 0) {
                console.log("You will get " + count + " Notes of 50");
            }
            amount %= 50;
        }
        if (amount>=20) {
            count = Math.trunc(amount / 20);
            if (count > 0) {
                console.log("You will get " + count + " Notes/Coins of 20");
            }
            amount %= 20;
        }
        if (amount>=10) {
            count = Math.trunc(amount / 10);
            if (count > 0) {
                console.log("You will get " + count + " Notes/Coins of 10");
            }
            amount %= 10;
        }
        if (amount>=5) {
            count = Math.trunc(amount / 5);
            if (count > 0) {
                console.log("You will get " + count + " Coins of 5");
            }
            amount %= 5;
        }
        if (amount>=2) {
            count = Math.trunc(amount / 2);
            if (count > 0) {
                console.log("You will get " + count + " Coins of 2");
            }
            amount %= 2;
        }
        if (amount>0){
            count = Math.trunc(amount / 1);
            if (count > 0) {
            console.log("You will get " + amount + " Coins of 1");
            }
        }
        console.log(amount);
    }
console.log(amount);   
}