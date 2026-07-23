// ======================================================
// ACTIVITY 3: ARRAY OF OBJECTS - EMPLOYEE LIST
// Goal: Learn how to store multiple objects inside an
// array and loop through them using forEach().
// ======================================================

// ======================================================
// CREATE AN ARRAY OF EMPLOYEE OBJECTS
// ======================================================

// Create an array named "staff".
// Each item inside the array is an employee object.
let staff = [
  // Employee 1
  {
    name: "Sarah Johnson",
    role: "Server",
    hourlyRate: 18.5,
  },

  // Employee 2
  {
    name: "Michael Davis",
    role: "Cook",
    hourlyRate: 21.75,
  },

  // Employee 3
  {
    name: "Emily Carter",
    role: "Host",
    hourlyRate: 17.25,
  },

  // Employee 4
  {
    name: "David Wilson",
    role: "Manager",
    hourlyRate: 28.0,
  },

  // Employee 5
  {
    name: "Jessica Brown",
    role: "Server",
    hourlyRate: 19.25,
  },
];

// ======================================================
// DISPLAY ALL EMPLOYEES
// ======================================================

// Display a heading in the console.
console.log("=================================");
console.log("RESTAURANT STAFF");
console.log("=================================");

// Loop through every employee object in the array.
staff.forEach(function (employee, index) {
  // Display the employee number.
  console.log("Employee #" + (index + 1));

  // Display the employee's name.
  console.log("Name: " + employee.name);

  // Display the employee's role.
  console.log("Role: " + employee.role);

  // Display the employee's hourly rate.
  console.log("Hourly Rate: $" + employee.hourlyRate.toFixed(2));

  // Add a separator line.
  console.log("------------------------------");
});

// ======================================================
// ADD A NEW EMPLOYEE
// ======================================================

// Add another employee object to the end of the array.
staff.push({
  name: "Chris Taylor",

  role: "Dishwasher",

  hourlyRate: 16.5,
});

// Tell the user the employee was added.
console.log("A new employee has been added!");

// ======================================================
// DISPLAY UPDATED EMPLOYEE LIST
// ======================================================

console.log("=================================");
console.log("UPDATED STAFF LIST");
console.log("=================================");

// Loop through the updated array.
staff.forEach(function (employee, index) {
  console.log(
    index +
      1 +
      ". " +
      employee.name +
      " - " +
      employee.role +
      " ($" +
      employee.hourlyRate.toFixed(2) +
      "/hour)",
  );
});

// ======================================================
// DISPLAY ONLY SERVERS
// ======================================================

console.log("=================================");
console.log("SERVER EMPLOYEES");
console.log("=================================");

// Loop through every employee.
staff.forEach(function (employee) {
  // Check if the employee's role is "Server".
  if (employee.role === "Server") {
    // Display only server employees.
    console.log(
      employee.name + " - $" + employee.hourlyRate.toFixed(2) + "/hour",
    );
  }
});

// ======================================================
// TESTING SECTION
// ======================================================

console.log("=================================");
console.log("TESTING");
console.log("=================================");

// Display the complete staff array.
console.log("Entire Staff Array:");
console.log(staff);

// Display the total number of employees.
console.log("---------------------------------");
console.log("Total Employees:");
console.log(staff.length);

// Verify that push() worked.
console.log("---------------------------------");
console.log("Newest Employee Added:");
console.log(staff[staff.length - 1]);

// Display employee names only.
console.log("---------------------------------");
console.log("Employee Names:");

staff.forEach(function (employee) {
  console.log(employee.name);
});

// Display employee roles only.
console.log("---------------------------------");
console.log("Employee Roles:");

staff.forEach(function (employee) {
  console.log(employee.role);
});

// Display employee hourly rates only.
console.log("---------------------------------");
console.log("Hourly Rates:");

staff.forEach(function (employee) {
  console.log("$" + employee.hourlyRate.toFixed(2));
});

// Count the number of servers.
console.log("---------------------------------");

let serverCount = 0;

// Loop through every employee.
staff.forEach(function (employee) {
  // If the employee is a server...
  if (employee.role === "Server") {
    // Increase the server count.
    serverCount++;
  }
});

// Display the total number of servers.
console.log("Number of Servers:");
console.log(serverCount);

// Display the highest hourly rate.
console.log("---------------------------------");

let highestRate = 0;

// Loop through every employee.
staff.forEach(function (employee) {
  // Check if this employee has the highest rate.
  if (employee.hourlyRate > highestRate) {
    // Save the new highest rate.
    highestRate = employee.hourlyRate;
  }
});

// Display the highest hourly rate.
console.log("Highest Hourly Rate:");
console.log("$" + highestRate.toFixed(2));

// Display all employees earning more than $20/hour.
console.log("---------------------------------");
console.log("Employees Earning More Than $20/Hour");

staff.forEach(function (employee) {
  if (employee.hourlyRate > 20) {
    console.log(employee.name + " - $" + employee.hourlyRate.toFixed(2));
  }
});

// Final summary.
console.log("---------------------------------");
console.log("FINAL SUMMARY");

console.log("Employees in Database: " + staff.length);

console.log("Server Employees: " + serverCount);

console.log("Highest Hourly Rate: $" + highestRate.toFixed(2));

console.log("Activity Complete!");
