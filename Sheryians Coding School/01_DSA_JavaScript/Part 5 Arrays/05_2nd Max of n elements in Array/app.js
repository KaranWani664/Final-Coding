// 2nd Max of n elements in Array

let arr = [10, 30, 56, 43, 29, 14, 49, 60, 52, 57, 14, 58, -5];

// max as 1 & compare it with 1 & 2 & keep 2 as 2nd max

let max = -Infinity; // we can use Math.max(arr[0], arr[1]); also
let secondMax = -Infinity; // we can use Math.min(arr[0], arr[1]); also

for (let i = 0; i < arr.length; i++) {
    
    if (max<arr[i]) {
        secondMax = max;
        max = arr[i];
    } else if (arr[i]!=max && secondMax<arr[i]) {
        secondMax = arr[i];
    }
    
}

console.log(max);
console.log(secondMax);