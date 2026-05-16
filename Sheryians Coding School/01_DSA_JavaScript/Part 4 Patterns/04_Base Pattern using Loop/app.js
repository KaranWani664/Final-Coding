// Base Pattern using loop & User Input

// * * * * *

let prompt = require('prompt-sync')();
let n = Number(prompt("Tell me how much time you want to print that number "));
// process.stdout.write(n); // This requires only string values Number(prompt()) will give error
for (let i = 1; i<=n; i++) {
    process.stdout.write("* ");
}

// i <= n (The Correct One): This is a comparison. It checks if i is less than or equal to n. It evaluates to true or false.

// i = n (The Infinite Loop): This is an assignment, not a check. It forces i to become equal to n on every single iteration. In JavaScript, an assignment also returns the value that was assigned. As long as n is any number other than 0, JavaScript treats that number as true, so the loop never stops.

// i == n (The One That Never Runs): This is a comparison. It asks, "Is i exactly equal to n right now?" Since i starts at 0, if n is any number greater than 0 (like 5), 0 == 5 is false, so the loop exits immediately before even running once.