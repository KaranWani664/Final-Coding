// Array - Collection of values which includes different data types also
// Array is a linear data structure which stores multiple values in a linear manner

let arr = [];
console.log(arr);

// arrayName.push(value) - To Insert Values

arr.push(100);
console.log(arr);
arr.push(10);
console.log(arr);
arr.push(20);
console.log(arr);
arr.push(30);
console.log(arr);
arr.push(false);
console.log(arr);
arr.push("K");
console.log(arr);

console.log("  ");

console.log(arr[1]);

// arrayName.pop(value) - To Delete Last Value

arr.pop();
console.log(arr);
arr.pop();
console.log(arr);

arr[0] = 200;
arr[1] = 500;
arr[3] = 50;
arr[5] = 10;
arr[4] = 15;
arr[7] = 300;

console.log(arr);

// consider as arr - here size is declared but js is dynamic just like before all values will be considered
let arrs = new Array(3);
arrs.push(500); // This will keep starting 0,1,2 empty and pust will effect at 5th place
console.log(arrs);
arrs[4] = 50;
console.log(arrs);