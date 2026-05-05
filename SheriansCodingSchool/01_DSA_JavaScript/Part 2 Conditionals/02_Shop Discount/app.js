// Amount -> Discount
// 0 to 5000 - 0%
// 5001 to 7000 - 5%
// 7001 to 9000 - 10%
// more than 9000 - 20%

// Find Payable Bill Amount 
let FinalPrice = 0;
let Discount = 0;
let Price = Number(prompt("What is Gross Bill Amount"));
console.log(Price);

if (isNaN(Price) || Price < 0) {
    console.log("Wrong Input");
} else {
    if (Price<5001) {
        Discount = 0;
    } else if (Price>5000 && Price<=7000) { 
        Discount = 5;
    } else if (Price>7000 && Price<=9000) {
        Discount = 10;
    } else {
        Discount = 20;
    }
    
    FinalPrice = Price - Math.floor(Price*(Discount/100));
    // Or Price * 0.95 or Price - (Price*0.05)

    console.log("Your Total Billing Amount after discount of " + Discount + " is " + FinalPrice);
}

