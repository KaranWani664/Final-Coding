// Left Rotation by 1 Element

let arr = [1, 2, 3, 4, 5];
// here 5 will go to 4 and so on till 1 goes to 5

// Bruteforce
// let temp = [];
// for (let i = 1; i <= arr.length - 1; i++) {
//     temp.push(arr[i]);
// }
// temp.push(arr[0]);
// console.log(temp);

// Optimized
let copy = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
    console.log(arr);
}
arr[arr.length - 1] = copy;
// or
// arr.pop()
// arr.push(copy);
console.log(arr);