// ======================================================
// Activity 1: Map Practice
// Goal: Learn how to transform arrays using map()
// File: map-practice.js
// ======================================================

// ======================================================
// Starter Data
// ======================================================

// Restaurant menu prices (before tax)
const prices = [7.99, 12.5, 5.99, 18.75, 9.25];

// Employee names
const employees = ["maria", "james", "alex", "sam"];

// Restaurant orders
const orders = [
  { item: "Burger", quantity: 2, unitPrice: 8.99 },
  { item: "Fries", quantity: 3, unitPrice: 3.5 },
  { item: "Drink", quantity: 2, unitPrice: 2.25 },
];

// ======================================================
// Exercise 1 - Add 8% Tax to All Prices
// ======================================================

// Use map() to create a NEW array.
// Each price is multiplied by 1.08 to add 8% tax.
// toFixed(2) keeps only two decimal places.
// Number() converts the string returned by toFixed()
// back into a number.
const pricesWithTax = prices.map((price) => {
  return Number((price * 1.08).toFixed(2));
});

// ======================================================
// Exercise 2 - Capitalize Employee Names
// ======================================================

// map() goes through every employee name.
// toUpperCase() converts each name to uppercase.
const uppercaseEmployees = employees.map((employee) => {
  return employee.toUpperCase();
});

// ======================================================
// Exercise 3 - Calculate Order Line Totals
// ======================================================

// map() creates a new array.
// Multiply quantity by unitPrice for each order.
// toFixed(2) rounds to two decimal places.
const lineTotals = orders.map((order) => {
  return Number((order.quantity * order.unitPrice).toFixed(2));
});

// ======================================================
// Exercise 4 - Extract Item Names
// ======================================================

// map() returns only the item property
// from each order object.
const itemNames = orders.map((order) => {
  return order.item;
});

// ======================================================
// Console Log Test Cases
// ======================================================

console.log("========================================");
console.log("Original Prices:");
console.log(prices);

console.log("\nPrices With 8% Tax:");
console.log(pricesWithTax);

console.log("\nExpected:");
console.log([8.63, 13.5, 6.47, 20.25, 9.99]);

// ------------------------------------------------------

console.log("\n========================================");
console.log("Original Employee Names:");
console.log(employees);

console.log("\nUppercase Employee Names:");
console.log(uppercaseEmployees);

console.log("\nExpected:");
console.log(["MARIA", "JAMES", "ALEX", "SAM"]);

// ------------------------------------------------------

console.log("\n========================================");
console.log("Original Orders:");
console.log(orders);

console.log("\nLine Totals:");
console.log(lineTotals);

console.log("\nExpected:");
console.log([17.98, 10.5, 4.5]);

// ------------------------------------------------------

console.log("\n========================================");
console.log("Item Names:");
console.log(itemNames);

console.log("\nExpected:");
console.log(["Burger", "Fries", "Drink"]);

// ------------------------------------------------------

console.log("\n========================================");
console.log("Verification Checks");

// Compare arrays by converting them to strings.
console.log(
  "Prices Correct:",
  JSON.stringify(pricesWithTax) ===
    JSON.stringify([8.63, 13.5, 6.47, 20.25, 9.99]),
);

console.log(
  "Employees Correct:",
  JSON.stringify(uppercaseEmployees) ===
    JSON.stringify(["MARIA", "JAMES", "ALEX", "SAM"]),
);

console.log(
  "Line Totals Correct:",
  JSON.stringify(lineTotals) === JSON.stringify([17.98, 10.5, 4.5]),
);

console.log(
  "Item Names Correct:",
  JSON.stringify(itemNames) === JSON.stringify(["Burger", "Fries", "Drink"]),
);

console.log("========================================");
