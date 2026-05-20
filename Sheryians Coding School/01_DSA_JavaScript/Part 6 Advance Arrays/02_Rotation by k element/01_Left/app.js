// Left Rotation by K Element

// K is user input

let arr = [1, 2, 3, 4, 5]
// if K is 2
// Answer is [3, 4, 5, 1, 2]

let prompt = require('prompt-sync')();
let k = Number(prompt("Give how much rotaion is required in number "));
k = k % arr.length; // Only for my to print but can be used for both
console.log(k);

// My - Bruteforce - enable above k rule when using

// let copy = []

// for (let j = 0; j < k; j++) {
//     copy.push(arr[j]);
// }
// for (let i = 0; i < arr.length - k; i++) {
//     arr[i] = arr[i + k];
// }

// console.log(copy);
// console.log(arr);

// for (let n = 0; n < k; n++) {
//     arr[(arr.length - k + n)] = copy[n]
// }

// console.log("Final : " + "[" + arr + "]");

// YT - Not Optimized

// for (let j = 0; j<k; j++) {
//     let copy = arr[0];
//         for (let i = 0; i<arr.length - 1; i++) {
//         arr[i] = arr[i+1];
//         }
//     arr[arr.length - 1] = copy;
//     console.log(arr)
// }
// console.log(arr);

// YT - Optimized