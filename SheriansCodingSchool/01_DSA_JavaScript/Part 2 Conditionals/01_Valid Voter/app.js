// Valid Voter - Who can vote

let age = prompt("What is your age");

console.log(Number(age));

if (isNaN(age)) {
    console.log("Invalid Input")
} else {
    if (age >= 18) {
    console.log("You can vote");
    } else {
        console.log("You can't vote");
    }
}

//isNaN(NaN) -> True <- To check NaN Values
//NaN === NaN -> False <- considered as string
