// Primitive Data Types
    let firstName = "John"; // string
    console.log(typeof firstName); // Output: string

    let age = 30; // number
    console.log(typeof age); // Output: number

    let bigNumber = 123456789012345678901234567890n; // bigint
    console.log(typeof bigNumber); // Output: bigint

    let isStudent = true; // boolean
    console.log(typeof isStudent); // Output: boolean

    let hobbies = null; // null
    console.log(typeof hobbies); // Output: object

    let address; // undefined
    console.log(typeof address); // Output: undefined

    let id = Symbol("id"); // symbol
    console.log(typeof id); // Output: symbol

// Non-Primitive (Reference) Data Types
    // Objects in JavaScript
    let person = {
        name: "John",
        age: 30
    }; // object
    console.log(typeof person); // Output: object

    // Arrays in JavaScript
    let colors = ["red", "green", "blue"]; // array
    console.log(typeof colors); // Output: object
    console.log(Array.isArray(colors)); // true

    // Functions in JavaScript
    function greet() {
    console.log("Hello");
    } // function
    console.log(typeof greet); // Output: function

    function greet() {
        console.log("Hello!");
    }

    // Functions are also objects in JS
    // Adding a property to the function!
    greet.language = "English";

    console.log(greet.language); // Output: English
    greet();                     // Output: Hello!

// Type Conversion


// Type Coercion


// falsey values in JavaScript
// false
// 0
// ""
// null
// undefined
// NaN

// truthy values in JavaScript
// true
// any non-zero number (e.g., 1, -1, 0.5)
// any non-empty string (e.g., "hello", "0")
// any object (e.g., {}, [])

// Equality Operators
let num1 = 10;
let num2 = "10";
let num3 = 10;

console.log(num1 == num2); // true (type coercion)
console.log(num1 === num3); // true (strict equality)