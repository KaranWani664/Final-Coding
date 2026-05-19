// Max of n elements in Array

// Max work as it will go to 1st element and consider it as max then goes to 2nd compare and keep the max and so on till last element it compares all the elements to find Max

let arr = [10, 2, 78, 100, 150, 89, 4];

// We can find it by sort method also

// Without sorting method
// Consider that arr is hidden and fresh prompt by user

// so take max as 1st element
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max)