// 1. Get user input via a popup box
let pr = prompt("Give us your number to find factors");

// 2. Convert the string input (from prompt) into a real Number
let n = Number(pr);

// 3. VALIDATION: Check if the input is:
// - null (user clicked 'Cancel')
// - NaN (user typed letters instead of numbers)
// - Not an integer (user typed a decimal like 5.5)
// - Zero or Negative (factors are usually for positive whole numbers)
if (pr === null || isNaN(n) || !Number.isInteger(n) || n <= 0) {
    console.log("Invalid Input / Cancelled / Give me Positive Integer Number");
} else {
    // 4. Create an empty list (array) to store the factors we find
    const array = [];

    // 5. MATH TRICK: Factors always come in pairs (e.g., for 12: 2 and 6 are a pair)
    // We only need to check numbers up to the square root of n to find all pairs.
    const limit = Math.sqrt(n);

    // 6. Start a loop from 1 up to the square root value
    for (let i = 1; i <= limit; i++) {
        
        // 7. If n divided by i has a remainder of 0, i is a factor!
        if (n % i === 0) {
            
            // 8. Add the small factor (i) to our list
            array.push(i);
            
            // 9. Find the "partner" factor (n / i)
            // Example: If n is 12 and i is 2, the partner is 6.
            // We check 'if (i !== n / i)' so we don't add 10 twice for 100 (10x10)
            if (i !== n / i) {
                array.push(n / i);
            }
        }
    }

    // 10. Because we added factors in pairs (1, 100, 2, 50), they are messy.
    // This sorts them from smallest to largest.
    array.sort((a, b) => a - b);

    // 11. Output the final list to the console
    console.log("Factors are:", array);
}