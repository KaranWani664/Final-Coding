//Loops in JavaScript

//1. For Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//2. While Loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

//3. Do-While Loop
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

//4. For...in Loop (used for iterating over object properties)
let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};
for (let key in person) {
    console.log(key + ": " + person[key]); // Output: name: Alice, age: 25, city: New York
}

//5. For...of Loop (used for iterating over iterable objects like arrays)
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color); // Output: red, green, blue
}
// foreach Loop (used for iterating over arrays)
colors.forEach(function(color) {
    console.log(color); // Output: red, green, blue
});

//6. nested Loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(i + ", " + j);
    }
}
// Output:
// 1, 1
// 1, 2
// 2, 1
// 2, 2
// 3, 1
// 3, 2

// Outer loop starts from 1 and goes up to 5
for (let i = 1; i <= 5; i++) {
    
    // Inner loop starts from 1 and goes only up to the current value of i
    for (let j = 1; j <= i; j++) {
        console.log(i + " " + j);
    }
    
}
// Output:
// 1 1
// 2 1
// 2 2
// 3 1
// 3 2
// 3 3
// 4 1
// 4 2
// 4 3
// 5 1
// 5 2
// 5 3
// 5 4
// 5 5

//7. Switch Case
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Invalid day");
}

