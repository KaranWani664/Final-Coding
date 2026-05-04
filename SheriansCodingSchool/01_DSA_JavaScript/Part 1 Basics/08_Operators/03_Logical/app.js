// Logical AND (&&) , Logical OR (||)
// It is used to check multiple conditions

// && - True only when all are true & if any false then direct false
console.log(10>6 && 5<9);
console.log(10>6 && 15<9);
console.log(10>60 && 5<9);
console.log(10>60 && 15<9);
//We can write multiple conditions
console.log(10>6 && 5<9 && 4>2);

// Ampercent Rule - if 1st false then direct give false no further check

// || - false only if all false & if any true then direct true
console.log(10<6 || 15<9 || 18>9);
console.log(10<6 || 15<9 || 18<9);
console.log("OR " + 10<6 || 15<9 || 18>9);
console.log("OR " + (10<6 || 15<9 || 18>9));
