// Reverse Array 1 - With extra space - not optimized

// Array 1 last element to Array 2 First element & so on for all elements

let arr = [10, 20, 30, 40, 50];
let temp = new Array(arr.length);

for (let i = arr.length - 1; i >= 0; i--) {
    temp.push(arr[i])
    arr.pop();
}

// or
// let j = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//     temp[j] = arr[i];
//     j++
// }

console.log(arr);
console.log(temp);

