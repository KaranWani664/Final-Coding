// Guess the number
// 1st - Computer Chooses a number i.e. 7
// 2nd - is it 4 ?
// 1st - Too Low
// 2nd - is it 8 ?
// 1st - Too High
// 2nd - is it 7 ?
// 1st - Correct

// 1 to 100

let random = Math.floor(Math.random()*100)+1;
console.log(random);

let Guess = -1;

while(Guess !== random){
    Guess = Number(prompt("Guess number"));
    
    if (isNaN(Guess) || Guess === null || Guess <= 0 || Guess > 100 || !Number.isInteger(Guess) ) {
        console.log("Invalid & Try again between 1 to 100");
        continue;
    }

    if (Guess>random){
        console.log("Too High, try again");
    } else if (Guess<random){
        console.log("Too low, try again");
    } else {
        console.log("Guess is correct");
    }

}