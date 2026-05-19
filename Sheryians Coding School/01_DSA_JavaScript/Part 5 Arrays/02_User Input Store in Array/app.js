// How to store user input in an Array

// use of for loop, 5 time loop will iterate, prompt value store in a variable named as ans & empty array is already created & we will puth those ans values in that array.

// Bruteforce

// let arr = new Array(5);
// arr[0] = Number(prompt("Give me a number"));
// arr[1] = Number(prompt("Give me a number"));
// arr[2] = Number(prompt("Give me a number"));
// arr[3] = Number(prompt("Give me a number"));
// arr[4] = Number(prompt("Give me a number"));
// console.log(arr)


// let arr = new Array(5);
// for(let i = 1; i<=5; i++){
//     arr.push(Number(prompt("Give me a number")));
//     console.log(arr);
// }
// console.log(arr);

// Output - [empty × 5, 10, 20, 30, 40, 50]

let arr = new Array(4);
for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(prompt("Give me a number"));
    console.log(arr);
}
// Output
// (4) [0, empty × 3]
// (4) [0, 0, empty × 2]
// (4) [0, 0, 0, empty]
// (4) [0, 0, 0, 0]

// if we use <= instead of < we end up in infinite loop that breaks the fix length of array
// Infinite
// let arr = new Array(4);
// for (let i = 0; i <= arr.length; i++) {
//     arr[i] = Number(prompt("Give me a number"));
//     console.log(arr);
// }