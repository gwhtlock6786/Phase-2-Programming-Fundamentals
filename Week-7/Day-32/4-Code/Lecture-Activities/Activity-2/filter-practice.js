// ======================================================
// Activity 2: Filter Practice
// Goal: Learn how to select specific items from arrays
// using the filter() method.
// File: filter-practice.js
// ======================================================

// ======================================================
// Starter Data
// ======================================================

// Restaurant menu with prices and categories
const menu = [
  { name: "Burger", price: 10.99, category: "main" },
  { name: "Salad", price: 8.5, category: "main" },
  { name: "Fries", price: 4.99, category: "side" },
  { name: "Soup", price: 5.99, category: "side" },
  { name: "Steak", price: 24.99, category: "main" },
  { name: "Cookie", price: 2.99, category: "dessert" },
];

// Employee work schedule
const schedule = [
  { name: "Maria", day: "Monday", hours: 8 },
  { name: "James", day: "Monday", hours: 6 },
  { name: "Maria", day: "Tuesday", hours: 8 },
  { name: "Alex", day: "Monday", hours: 4 },
  { name: "James", day: "Tuesday", hours: 8 },
];

// ======================================================
// Exercise 1 - Filter Menu Items Under $10
// ======================================================

// filter() creates a NEW array.
// Only items with a price less than $10 are kept.
const budgetItems = menu.filter((item) => {
  return item.price < 10;
});

// ======================================================
// Exercise 2 - Filter Only Side Dishes
// ======================================================

// Keep only menu items where the category is "side".
const sideItems = menu.filter((item) => {
  return item.category === "side";
});

// ======================================================
// Exercise 3 - Filter Main Dishes Over $5
// ======================================================

// Keep menu items that:
// 1. Cost more than $5
// 2. Belong to the "main" category
const expensiveMains = menu.filter((item) => {
  return item.price > 5 && item.category === "main";
});

// ======================================================
// Exercise 4 - Filter Monday Shifts
// ======================================================

// Keep only shifts that happened on Monday.
const mondayShifts = schedule.filter((shift) => {
  return shift.day === "Monday";
});

// ======================================================
// Exercise 5 - Filter Full 8-Hour Shifts
// ======================================================

// Keep only shifts where the employee worked 8 hours.
const fullShifts = schedule.filter((shift) => {
  return shift.hours === 8;
});

// ======================================================
// Console Log Test Cases
// ======================================================

console.log("========================================");
console.log("Original Menu");
console.log(menu);

// ------------------------------------------------------

console.log("\nBudget Items (Under $10)");
console.log(budgetItems);

console.log("\nExpected:");
console.log([
  { name: "Salad", price: 8.5, category: "main" },
  { name: "Fries", price: 4.99, category: "side" },
  { name: "Soup", price: 5.99, category: "side" },
  { name: "Cookie", price: 2.99, category: "dessert" },
]);

// ------------------------------------------------------

console.log("\n========================================");
console.log("Side Dishes");
console.log(sideItems);

console.log("\nExpected:");
console.log([
  { name: "Fries", price: 4.99, category: "side" },
  { name: "Soup", price: 5.99, category: "side" },
]);

// ------------------------------------------------------

console.log("\n========================================");
console.log("Main Dishes Over $5");
console.log(expensiveMains);

console.log("\nExpected:");
console.log([
  { name: "Burger", price: 10.99, category: "main" },
  { name: "Salad", price: 8.5, category: "main" },
  { name: "Steak", price: 24.99, category: "main" },
]);

// ------------------------------------------------------

console.log("\n========================================");
console.log("Monday Shifts");
console.log(mondayShifts);

console.log("\nExpected:");
console.log([
  { name: "Maria", day: "Monday", hours: 8 },
  { name: "James", day: "Monday", hours: 6 },
  { name: "Alex", day: "Monday", hours: 4 },
]);

// ------------------------------------------------------

console.log("\n========================================");
console.log("8-Hour Shifts");
console.log(fullShifts);

console.log("\nExpected:");
console.log([
  { name: "Maria", day: "Monday", hours: 8 },
  { name: "Maria", day: "Tuesday", hours: 8 },
  { name: "James", day: "Tuesday", hours: 8 },
]);

// ======================================================
// Verification Checks
// ======================================================

console.log("\n========================================");
console.log("Verification Checks");

// Check the number of items returned.
console.log("Budget Items Correct:", budgetItems.length === 4);

console.log("Side Dishes Correct:", sideItems.length === 2);

console.log("Main Dishes Over $5 Correct:", expensiveMains.length === 3);

console.log("Monday Shifts Correct:", mondayShifts.length === 3);

console.log("8-Hour Shifts Correct:", fullShifts.length === 3);

console.log("========================================");
