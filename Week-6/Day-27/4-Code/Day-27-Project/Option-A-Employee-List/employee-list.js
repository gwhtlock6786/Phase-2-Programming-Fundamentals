// ======================================================
// PROJECT: EMPLOYEE LIST DATABASE
// Option A - Restaurant Employee Database
//
// Goal:
// Practice using arrays, objects, loops, calculations,
// and filtering data.
// ======================================================

// ======================================================
// CREATE EMPLOYEE DATABASE
// ======================================================

// Create an array called employees.
// Each item inside the array is an employee object.
let employees = [
  // Employee 1
  {
    name: "Sarah Johnson",
    role: "Server",
    hourlyRate: 18.5,
    shift: "Morning",
  },

  // Employee 2
  {
    name: "Michael Davis",
    role: "Cook",
    hourlyRate: 21.75,
    shift: "Evening",
  },

  // Employee 3
  {
    name: "Emily Carter",
    role: "Host",
    hourlyRate: 17.25,
    shift: "Morning",
  },

  // Employee 4
  {
    name: "David Wilson",
    role: "Manager",
    hourlyRate: 28.0,
    shift: "Evening",
  },

  // Employee 5
  {
    name: "Jessica Brown",
    role: "Server",
    hourlyRate: 19.25,
    shift: "Evening",
  },
];

// ======================================================
// DISPLAY ALL EMPLOYEES
// ======================================================

// Display a heading.
console.log("=================================");
console.log("ALL RESTAURANT EMPLOYEES");
console.log("=================================");

// Loop through every employee in the array.
employees.forEach(function (employee, index) {
  // Display employee number.
  console.log("Employee #" + (index + 1));

  // Display employee name.
  console.log("Name:", employee.name);

  // Display employee position.
  console.log("Role:", employee.role);

  // Display hourly pay.
  console.log("Hourly Rate: $" + employee.hourlyRate.toFixed(2));

  // Display work shift.
  console.log("Shift:", employee.shift);

  // Add space between employees.
  console.log("------------------------------");
});

// ======================================================
// CALCULATE TOTAL PAYROLL COST
// ======================================================

// Assume every employee works 40 hours per week.
let typicalHours = 40;

// Create a variable to store total payroll.
let totalPayroll = 0;

// Loop through every employee.
employees.forEach(function (employee) {
  // Calculate each employee's weekly pay.
  let weeklyPay = employee.hourlyRate * typicalHours;

  // Add the employee pay to the total.
  totalPayroll += weeklyPay;
});

// Display total payroll cost.
console.log("=================================");
console.log("TOTAL WEEKLY PAYROLL");
console.log("=================================");

console.log("Total Payroll: $" + totalPayroll.toFixed(2));

// ======================================================
// DISPLAY MORNING SHIFT EMPLOYEES
// ======================================================

console.log("=================================");
console.log("MORNING SHIFT EMPLOYEES");
console.log("=================================");

// Loop through employees.
employees.forEach(function (employee) {
  // Check if employee works morning shift.
  if (employee.shift === "Morning") {
    // Display employee information.
    console.log(employee.name + " - " + employee.role);
  }
});

// ======================================================
// DISPLAY EVENING SHIFT EMPLOYEES
// ======================================================

console.log("=================================");
console.log("EVENING SHIFT EMPLOYEES");
console.log("=================================");

// Loop through employees.
employees.forEach(function (employee) {
  // Check if employee works evening shift.
  if (employee.shift === "Evening") {
    // Display employee information.
    console.log(employee.name + " - " + employee.role);
  }
});

// ======================================================
// TESTING SECTION
// ======================================================

console.log("=================================");
console.log("TESTING DATABASE");
console.log("=================================");

// Test the entire array.
console.log("Employee Database:");
console.log(employees);

// Test employee count.
console.log("---------------------------------");

console.log("Total Employees:", employees.length);

// Test first employee.
console.log("---------------------------------");

console.log("First Employee:");

console.log(employees[0]);

// Test accessing individual properties.
console.log("---------------------------------");

console.log("Employee Names:");

employees.forEach(function (employee) {
  console.log(employee.name);
});

// ======================================================
// PAYROLL TESTING
// ======================================================

console.log("---------------------------------");

console.log("Individual Weekly Pay:");

// Calculate and display each employee pay.
employees.forEach(function (employee) {
  let pay = employee.hourlyRate * typicalHours;

  console.log(employee.name + ": $" + pay.toFixed(2));
});

// ======================================================
// COUNT EMPLOYEES BY SHIFT
// ======================================================

console.log("---------------------------------");

console.log("Shift Counts");

// Create counters.
let morningEmployees = 0;

let eveningEmployees = 0;

// Count employees.
employees.forEach(function (employee) {
  if (employee.shift === "Morning") {
    morningEmployees++;
  }

  if (employee.shift === "Evening") {
    eveningEmployees++;
  }
});

// Display totals.
console.log("Morning Employees:", morningEmployees);

console.log("Evening Employees:", eveningEmployees);

// ======================================================
// FIND HIGHEST PAID EMPLOYEE
// ======================================================

console.log("---------------------------------");

console.log("Highest Paid Employee");

// Store highest rate.
let highestRate = 0;

// Store employee name.
let highestPaidEmployee = "";

// Loop through employees.
employees.forEach(function (employee) {
  // Check if current employee makes more.
  if (employee.hourlyRate > highestRate) {
    highestRate = employee.hourlyRate;

    highestPaidEmployee = employee.name;
  }
});

// Display result.
console.log(
  highestPaidEmployee + " earns $" + highestRate.toFixed(2) + " per hour.",
);

// ======================================================
// FINAL SUMMARY
// ======================================================

console.log("=================================");

console.log("PROJECT COMPLETE");

console.log("Employees:", employees.length);

console.log("Weekly Payroll: $" + totalPayroll.toFixed(2));

console.log("Morning Shift:", morningEmployees);

console.log("Evening Shift:", eveningEmployees);

console.log("=================================");
