// This is part of NodeJS

import { createInterface } from 'readline';

// Create the interface for input and output
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const studentData = {};

console.log("--- Student Registration (Terminal) ---");

// Step-by-step questions
rl.question('Full Name: ', (name) => {
  studentData.name = name;
  
  rl.question('Email: ', (email) => {
    studentData.email = email;
    
    rl.question('Course: ', (course) => {
      studentData.course = course;

      // Final output
      console.log("\nRegistration Successful!");
      console.table(studentData);
      
      rl.close(); // Close the interface or it will hang
    });
  });
});
