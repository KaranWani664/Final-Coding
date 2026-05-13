// Sasta CalC - Java Calc without switch case
// press 1 for addition
// press 1 for substraction etc.
// Wrong option invalid
// Take 2 variable

let running = true;

while (running) {
    let choice = prompt("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Exit\n\nEnter choice:");

    if (choice === "5" || choice === null) {
        alert("Exiting... Tata, Bye Bye!");
        running = false;
    } 
    else if (choice === "1" || choice === "2" || choice === "3" || choice === "4") {
        let num1 = Number(prompt("Enter first number:"));
        let num2 = Number(prompt("Enter second number:"));

        let result;
        if (choice === "1") {
            result = "Result: " + (num1 + num2);
        } else if (choice === "2") {
            result = "Result: " + (num1 - num2);
        } else if (choice === "3") {
            result = "Result: " + (num1 * num2);
        } else if (choice === "4") {
            if (num2 !== 0) {
                result = "Result: " + (num1 / num2);
            } else {
                result = "Error: Cannot divide by zero!";
            }
        }
        alert(result);
        console.log(result);
    } 
    else {
        alert("Wrong option! Invalid choice.");
    }
}