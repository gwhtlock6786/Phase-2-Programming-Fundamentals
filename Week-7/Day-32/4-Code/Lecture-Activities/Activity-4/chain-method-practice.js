// ======================================================
// Activity 4: Chained Methods Challenge
// Goal: Combine filter(), map(), and reduce()
// for more complex data operations.
// File: chained-methods.js
// ======================================================

// ======================================================
// Starter Data
// ======================================================

// Inventory items with category, price, and stock information
const inventory = [
  {
    name: "Burger Patties",
    category: "meat",
    price: 5.5,
    stock: 30,
  },
  {
    name: "Chicken Breast",
    category: "meat",
    price: 6.25,
    stock: 20,
  },
  {
    name: "Apples",
    category: "produce",
    price: 1.25,
    stock: 15,
  },
  {
    name: "Bananas",
    category: "produce",
    price: 0.75,
    stock: 40,
  },
  {
    name: "Carrots",
    category: "produce",
    price: 2.5,
    stock: 25,
  },
  {
    name: "Milk",
    category: "dairy",
    price: 3.5,
    stock: 10,
  },
  {
    name: "Cheese",
    category: "dairy",
    price: 4.75,
    stock: 18,
  },
];

// ======================================================
// Challenge 1
// Get names of all meat items
// Using: filter() + map()
// ======================================================

// Step 1:
// filter() keeps only items where category is "meat".
//
// Step 2:
// map() creates a new array containing only names.
const meatItems = inventory
  .filter((item) => {
    return item.category === "meat";
  })
  .map((item) => {
    return item.name;
  });

// ======================================================
// Challenge 2
// Calculate total value of produce inventory
// Using: filter() + map() + reduce()
// ======================================================

// Step 1:
// filter() finds only produce items.
//
// Step 2:
// map() calculates the value of each item:
// price * stock
//
// Step 3:
// reduce() adds all produce values together.
const produceValue = inventory
  .filter((item) => {
    return item.category === "produce";
  })
  .map((item) => {
    return item.price * item.stock;
  })
  .reduce((total, value) => {
    return total + value;
  }, 0);

// Round result to two decimal places.
const formattedProduceValue = Number(produceValue.toFixed(2));

// ======================================================
// Challenge 3
// Find low stock items and calculate reorder cost
// Using: filter() + map() + reduce()
// ======================================================

// Business rule:
// Any item with less than 25 in stock needs to be reordered.
//
// We will order 50 units of each item.
//
// Reorder cost formula:
// price * 50
//
// Steps:
// 1. filter() gets low-stock items.
// 2. map() calculates reorder cost.
// 3. reduce() adds all costs together.

const reorderCost = inventory
  .filter((item) => {
    return item.stock < 25;
  })
  .map((item) => {
    return item.price * 50;
  })
  .reduce((total, cost) => {
    return total + cost;
  }, 0);

// Round reorder cost.
const formattedReorderCost = Number(reorderCost.toFixed(2));

// ======================================================
// Console Log Test Cases
// ======================================================

console.log("========================================");
console.log("Original Inventory:");
console.log(inventory);

// ------------------------------------------------------

console.log("\nChallenge 1: Meat Item Names");
console.log(meatItems);

console.log("\nExpected:");
console.log(["Burger Patties", "Chicken Breast"]);

// ------------------------------------------------------

console.log("\n========================================");
console.log("Challenge 2: Total Produce Inventory Value");
console.log(formattedProduceValue);

console.log("\nExpected:");
console.log("$36.25");

// ------------------------------------------------------

console.log("\n========================================");
console.log("Challenge 3: Low Stock Reorder Cost");
console.log(formattedReorderCost);

console.log("\nExpected:");

console.log("Low stock items: Chicken Breast, Apples, Milk, Cheese");

console.log("Reorder Cost: $837.50");

// ======================================================
// Verification Checks
// ======================================================

console.log("\n========================================");
console.log("Verification Checks");

// Check Challenge 1 results
console.log(
  "Meat Items Correct:",
  JSON.stringify(meatItems) ===
    JSON.stringify(["Burger Patties", "Chicken Breast"]),
);

// Check Challenge 2 result
console.log("Produce Value Correct:", formattedProduceValue === 36.25);

// Check Challenge 3 result
console.log("Reorder Cost Correct:", formattedReorderCost === 837.5);

console.log("========================================");
