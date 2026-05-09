/**
 * Goal: Find all factors of N with maximum efficiency.
 * Time Complexity: O(sqrt(N))
 * Space Complexity: O(number_of_factors)
 */

let pr = prompt("Enter a number:");
let n = Number(pr);

// 1. Efficient Input Validation
// We check for Integers and specifically handle 1 and very large numbers.
if (!Number.isInteger(n) || n < 1) {
    console.error("Invalid Input: Please provide a positive whole number.");
} else if (n > Number.MAX_SAFE_INTEGER) {
    // Safety check: JavaScript loses precision after 9,007,199,254,740,991
    console.warn("Warning: This number is too large for precise calculation in JS.");
} else {
    const factors = [];
    const limit = Math.sqrt(n);

    // 2. The Optimized Loop
    for (let i = 1; i <= limit; i++) {
        if (n % i === 0) {
            factors.push(i); // Add the smaller factor
            
            let partner = n / i;
            if (i !== partner) {
                factors.push(partner); // Add the larger "partner" factor
            }
        }
    }

    // 3. Performance-Optimized Sort
    // Default .sort() is for strings; (a-b) is required for numbers.
    factors.sort((a, b) => a - b);

    console.log(`Found ${factors.length} factors for ${n}:`, factors);
}