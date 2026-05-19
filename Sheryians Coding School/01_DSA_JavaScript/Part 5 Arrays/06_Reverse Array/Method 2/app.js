// Reverse Array 2 - without extra space - optimized

// Marked first element as i & lasat as j
// swap i and j
// do same mark for 2nd elements from both side as i+1 & j-1
// swap

let arr = [10, 20, 30, 40, 50];

// for loop
// for (let i = 0; i<Math.floor(arr.length/2); i++) {
//     let target =  arr.length - 1 - i
//     let copy = arr[i];
//     arr[i] = arr[target]
//     arr[target] = copy;
// }
// console.log(arr);

// while loop
let i=0;
let j = arr.length-1;

while(i!=j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log(arr);
