// ======================================================
// ACTIVITY 2: BUILD AN EMPLOYEE RECORD
// Goal: Learn how to create objects, read properties,
// update values, and perform calculations using object data.
// ======================================================

// ======================================================
// CREATE EMPLOYEE 1 OBJECT
// ======================================================

// Create an object named employee1.
// This object stores information about one employee.
let employee1 = {
  // Employee's name.
  name: "Sarah Johnson",

  // Employee's job title.
  role: "Cashier",

  // Employee's hourly pay rate.
  hourlyRate: 18.5,

  // Number of hours worked this week.
  hoursThisWeek: 38,

  // Indicates whether the employee works full-time.
  isFullTime: true,
};

// ======================================================
// CALCULATE EMPLOYEE 1 WEEKLY PAY
// ======================================================

// Multiply the hourly rate by the number of hours worked.
let employee1WeeklyPay = employee1.hourlyRate * employee1.hoursThisWeek;

// Display the weekly pay.
console.log("Employee 1 Weekly Pay: $" + employee1WeeklyPay.toFixed(2));

// ======================================================
// CREATE EMPLOYEE 2 OBJECT
// ======================================================

// Create another employee object.
let employee2 = {
  // Employee's name.
  name: "Michael Davis",

  // Employee's job title.
  role: "Cook",

  // Hourly pay.
  hourlyRate: 21.75,

  // Hours worked this week.
  hoursThisWeek: 42,

  // Full-time status.
  isFullTime: true,
};

// ======================================================
// CALCULATE EMPLOYEE 2 WEEKLY PAY
// ======================================================

// Calculate employee2's weekly earnings.
let employee2WeeklyPay = employee2.hourlyRate * employee2.hoursThisWeek;

// Display employee2's weekly pay.
console.log("Employee 2 Weekly Pay: $" + employee2WeeklyPay.toFixed(2));

// ======================================================
// GIVE EMPLOYEE 1 A RAISE
// ======================================================

// Increase employee1's hourly rate by $1.50.
employee1.hourlyRate += 1.5;

// ======================================================
// DISPLAY BOTH EMPLOYEES
// ======================================================

// Display employee1's updated information.
console.log("Employee 1");
console.log("Name:", employee1.name);
console.log("Hourly Rate: $" + employee1.hourlyRate.toFixed(2));

// Display employee2's information.
console.log("Employee 2");
console.log("Name:", employee2.name);
console.log("Hourly Rate: $" + employee2.hourlyRate.toFixed(2));

// ======================================================
// TESTING SECTION
// ======================================================

console.log("==================================");
console.log("EMPLOYEE RECORD TESTING");
console.log("==================================");

// Display the complete employee objects.
console.log("Employee 1 Object:");
console.log(employee1);

console.log("Employee 2 Object:");
console.log(employee2);

// Verify weekly pay calculations.
console.log("----------------------------------");
console.log("Weekly Pay Verification");

console.log(
  employee1.name +
    " earned $" +
    (employee1.hourlyRate * employee1.hoursThisWeek).toFixed(2),
);

console.log(
  employee2.name +
    " earned $" +
    (employee2.hourlyRate * employee2.hoursThisWeek).toFixed(2),
);

// Verify employee1 received the raise.
console.log("----------------------------------");
console.log("Raise Verification");

console.log(
  employee1.name + "'s new hourly rate is $" + employee1.hourlyRate.toFixed(2),
);

// Display employee names only.
console.log("----------------------------------");
console.log("Employee Names");

console.log(employee1.name);
console.log(employee2.name);

// Display employee roles.
console.log("----------------------------------");
console.log("Employee Roles");

console.log(employee1.role);
console.log(employee2.role);

// Display full-time status.
console.log("----------------------------------");
console.log("Full-Time Status");

console.log(employee1.name + ": " + employee1.isFullTime);
console.log(employee2.name + ": " + employee2.isFullTime);

// Display all property names.
console.log("----------------------------------");
console.log("Employee 1 Property Names");
console.log(Object.keys(employee1));

console.log("Employee 2 Property Names");
console.log(Object.keys(employee2));

// Display all property values.
console.log("----------------------------------");
console.log("Employee 1 Property Values");
console.log(Object.values(employee1));

console.log("Employee 2 Property Values");
console.log(Object.values(employee2));

// Display every key/value pair.
console.log("----------------------------------");
console.log("Employee 1 Entries");
console.log(Object.entries(employee1));

console.log("Employee 2 Entries");
console.log(Object.entries(employee2));

// Verify that the raise was exactly $1.50.
console.log("----------------------------------");
console.log("Raise Amount Check");

let originalRate = 18.5;
let raiseAmount = employee1.hourlyRate - originalRate;

console.log("Raise Given: $" + raiseAmount.toFixed(2));

// Final summary.
console.log("----------------------------------");
console.log("FINAL SUMMARY");

console.log(
  employee1.name +
    " (" +
    employee1.role +
    ") earns $" +
    employee1.hourlyRate.toFixed(2) +
    "/hour.",
);

console.log(
  employee2.name +
    " (" +
    employee2.role +
    ") earns $" +
    employee2.hourlyRate.toFixed(2) +
    "/hour.",
);
