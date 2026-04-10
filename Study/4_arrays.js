// Arrays in JavaScript

//1. Creating an Array
let fruits = ["apple", "banana", "cherry"];
console.log(fruits); // Output: ["apple", "banana", "cherry"]

//2. Accessing Array Elements
console.log(fruits[0]); // Output: "apple"
console.log(fruits[1]); // Output: "banana"
console.log(fruits[2]); // Output: "cherry"

//3. Modifying Array Elements
fruits[1] = "blueberry";
console.log(fruits); // Output: ["apple", "blueberry", "cherry"]

//4. Array Length
console.log(fruits.length); // Output: 3

//5. Adding Elements to an Array
fruits.push("date");
console.log(fruits); // Output: ["apple", "blueberry", "cherry", "date"]

//6. Removing Elements from an Array
fruits.pop();
console.log(fruits); // Output: ["apple", "blueberry", "cherry"]

//7. Adding Elements at the Beginning of an Array
fruits.shift();
console.log(fruits); // Output: ["blueberry", "cherry"]

//8. Removing Elements from the Beginning of an Array
fruits.unshift("avocado");
console.log(fruits); // Output: ["avocado", "blueberry", "cherry"]

//9. Array Methods
let numbers = [1, 2, 3, 4, 5];
// join(separator) → returns a string with all array elements joined by the specified separator
console.log(numbers.join(", ")); // Output: "1, 2, 3, 4, 5"
// slice(start, end) → returns a new array from start index to end index (exclusive)
console.log(numbers.slice(1, 4)); // Output: [2, 3, 4]
// splice(start, deleteCount, item1, item2, ...) → removes elements from an array and/or adds new elements
console.log(numbers.splice(2, 1)); // Output: [3]
// The above line removes 1 element at index 2 (which is the number 3) and returns it as an array
console.log(numbers); // Output: [1, 2, 4, 5]
// indexOf(element) → returns the first index of the specified element, or -1 if not found
console.log(numbers.indexOf(4)); // Output: 2
// includes(element) → returns true if the array contains the specified element, otherwise false
console.log(numbers.includes(5)); // Output: true
// reverse() → reverses the order of the elements in the array
console.log(numbers.reverse()); // Output: [5, 4, 2, 1]
// sort() → sorts the elements of the array in place and returns the sorted array
console.log(numbers.sort()); // Output: [1, 2, 4, 5]