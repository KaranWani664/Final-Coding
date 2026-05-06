// Electricity Bill Calculation
// Upto 100 - 4.2 Rs/Unit
// 101 to 200 - 6 Rs/Unit
// 201 to 400 - 8 Rs/Unit
// More than 400 - 13 Rs/Unit

let unit = Number(prompt("Give Bill Unit"));
console.log(unit);

let Amount = 0;

if (isNaN(unit) || unit<0) {
    console.log("Wrong Input")
} else if (unit>400) { 
    Amount = ((unit-400) * 13) + (200 * 8) + (100 * 6) + (100 * 4.2);
} else if (unit>200) {
    Amount = ((unit - 200) * 8) + (100 * 6) + (100 * 4.2);
} else if (unit>100) {
    Amount = ((unit-100) * 6) + (100 * 4.2);
} else {
    Amount = (unit * 4.2);
}

console.log("Your Electricity Bill Amount is " + Amount);