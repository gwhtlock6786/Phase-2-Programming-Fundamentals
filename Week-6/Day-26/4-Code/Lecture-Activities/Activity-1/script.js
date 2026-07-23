/*
=========================================
Activity 1: Array Basics Practice
Goal: Create arrays and access items by index.
=========================================
*/

// =========================================
// Create an array of employee names
// =========================================

// Create an array named "employees" that stores
// the names of five restaurant employees.
const employees = ["Sarah", "Michael", "Emily", "James", "Olivia"];

// =========================================
// Access the first employee
// =========================================

// Arrays start counting at index 0.
// This retrieves the first employee in the array.
const firstEmployee = employees[0];

// Display the first employee in the console.
console.log("First employee:", firstEmployee);

// =========================================
// Access the last employee
// =========================================

// The last item is always located at
// array.length - 1 because length starts counting at 1
// while indexes start counting at 0.
const lastEmployee = employees[employees.length - 1];

// Display the last employee in the console.
console.log("Last employee:", lastEmployee);

// =========================================
// Find the total number of employees
// =========================================

// The .length property returns the total number
// of items stored in the array.
const totalEmployees = employees.length;

// Display the total number of employees.
console.log("Total employees:", totalEmployees);

// =========================================
// Create an array of restaurant shifts
// =========================================

// This array stores the available work shifts.
const shifts = ["Morning", "Afternoon", "Evening"];

// =========================================
// Display the shifts array
// =========================================

// Log the entire shifts array.
console.log("Available shifts:", shifts);

// ======================================================
// TESTING SECTION
// These console.log statements test every requirement
// and several additional use cases.
// ======================================================

console.log("\n========== TESTING ARRAY BASICS ==========");

// Test 1 - Entire employees array
console.log("Employees Array:");
console.log(employees);

// Test 2 - First employee
console.log("\nTest 1 - First Employee");
console.log("Expected: Sarah");
console.log("Actual:", employees[0]);

// Test 3 - Last employee
console.log("\nTest 2 - Last Employee");
console.log("Expected: Olivia");
console.log("Actual:", employees[employees.length - 1]);

// Test 4 - Total employees
console.log("\nTest 3 - Employee Count");
console.log("Expected: 5");
console.log("Actual:", employees.length);

// Test 5 - Entire shifts array
console.log("\nTest 4 - Shifts Array");
console.log(shifts);

// Test 6 - Number of shifts
console.log("\nTest 5 - Total Shifts");
console.log("Expected: 3");
console.log("Actual:", shifts.length);

// Test 7 - Individual shift access
console.log("\nTest 6 - Individual Shift Access");
console.log("Morning Shift:", shifts[0]);
console.log("Afternoon Shift:", shifts[1]);
console.log("Evening Shift:", shifts[2]);

// Test 8 - Verify first employee using stored variable
console.log("\nTest 7 - Stored Variable");
console.log(firstEmployee);

// Test 9 - Verify last employee using stored variable
console.log("\nTest 8 - Stored Variable");
console.log(lastEmployee);

// Test 10 - Verify total employees using stored variable
console.log("\nTest 9 - Stored Variable");
console.log(totalEmployees);

console.log("\n========== ALL TESTS COMPLETE ==========");
