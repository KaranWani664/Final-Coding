// Switch Case & One Case

// Missing Break -> Fall Throw Condition

// Use Switch case when you are working with constants
// Use if else when you are working with variable like a & Expressions like 19>12

// Switch Case - it will check switch(12) - here 12 match with case 12 or not otherwise default will run

let day = 2

switch(day) {
    case 1:console.log("monday");
    break;
    case 2:console.log("tuesday");
    break;
    default:console.log("wrong");
    break;
}

let days = 3

switch(days) {
    case 1:
    case 2:
    case 3:
        console.log("monday");
        break;
    case 4:console.log("tuesday");
    break;
    default:console.log("wrong");
    break;
}

// You can't write condition in place of true but you can write in place of case number

// Even if both are true because of break only 1 will work

// Only 1st Possible True will work no false will work

switch(true) {
    case 19>6:
        console.log("Hey1");
        break;
    case 10<9:
        console.log("Hey2");
        break; 
    default: console.log("Invalid");
} //Hey1

switch(true) {
    case 19>6:
        console.log("Hey1");
        break;
    case 10>9:
        console.log("Hey2");
        break; 
    default: console.log("Invalid");
} //Hey1

dec = 0.2+0.3;

switch(true) {
    case 0.4:
        console.log("Hey1");
        break;
    case 0.5:
        console.log("Hey2");
        break; 
    default: console.log("Invalid");
} //Hey2

//0.30000000000000004 - 0.3 will not work because value mismatch
// Default will work

dec = 0.1+0.2;

switch(true) {
    case 0.3:
        console.log("Hey1");
        break;
    case 0.5:
        console.log("Hey2");
        break; 
    default: console.log("Invalid");
} //Invalid