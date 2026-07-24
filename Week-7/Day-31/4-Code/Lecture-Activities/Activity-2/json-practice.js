// ==========================================================
// JSON STRINGIFY & PARSE PRACTICE
// Activity 2
//
// Goal:
// Learn how to convert JavaScript arrays and objects
// into JSON strings and convert them back into usable
// JavaScript data.
// ==========================================================

console.log("====================================");
console.log("JSON STRINGIFY & PARSE PRACTICE");
console.log("====================================");

// ==========================================================
// EXERCISE 1
// Convert an array into a JSON string
// ==========================================================

console.log("\n---------- Exercise 1 ----------");

// Create an array of menu items
const menuItems = ["Burger", "Fries", "Shake", "Salad"];

// Convert the array into a JSON string
const menuText = JSON.stringify(menuItems);

// Display the JSON string
console.log("Menu as text:");
console.log(menuText);

// Display the data type
console.log("Type:", typeof menuText);

// Display the original array
console.log("Original Array:");
console.log(menuItems);

// ==========================================================
// EXERCISE 2
// Convert the JSON string back into an array
// ==========================================================

console.log("\n---------- Exercise 2 ----------");

// Parse the JSON string back into a JavaScript array
const menuAgain = JSON.parse(menuText);

// Display the recreated array
console.log("Parsed Array:");
console.log(menuAgain);

// Display the first menu item
console.log("First Item:", menuAgain[0]);

// Display the type
console.log("Type:", typeof menuAgain);

// Display every menu item
console.log("\nMenu Items:");

menuAgain.forEach(function (item, index) {
  console.log(index + 1 + ".", item);
});

// ==========================================================
// EXERCISE 3
// Convert an object into a JSON string
// ==========================================================

console.log("\n---------- Exercise 3 ----------");

// Create an order object
const order = {
  tableNumber: 5,
  items: ["Coffee", "Pancakes"],
  total: 15.99,
  paid: false,
};

// Display the object
console.log("Original Order:");
console.log(order);

// Convert the object into a JSON string
const orderText = JSON.stringify(order);

// Display the JSON string
console.log("\nOrder as Text:");
console.log(orderText);

// Display the data type
console.log("Type:", typeof orderText);

// ==========================================================
// EXERCISE 4
// Convert the JSON string back into an object
// ==========================================================

console.log("\n---------- Exercise 4 ----------");

// Parse the JSON string back into an object
const orderAgain = JSON.parse(orderText);

// Display the recreated object
console.log("Parsed Order:");
console.log(orderAgain);

// Display individual properties
console.log("Table Number:", orderAgain.tableNumber);

console.log("Items:", orderAgain.items);

console.log("Order Total: $" + orderAgain.total);

console.log("Paid?", orderAgain.paid);

// Display each ordered item
console.log("\nOrdered Items:");

orderAgain.items.forEach(function (item) {
  console.log("-", item);
});

// ==========================================================
// EXERCISE 5
// Save and load from localStorage
// ==========================================================

console.log("\n---------- Exercise 5 ----------");

// Save the JSON string into localStorage
localStorage.setItem("currentOrder", orderText);

// Confirmation
console.log("Order saved to localStorage.");

// Load the saved JSON string
const loadedText = localStorage.getItem("currentOrder");

// Display the loaded text
console.log("\nLoaded JSON:");
console.log(loadedText);

// Convert the JSON string back into an object
const loadedOrder = JSON.parse(loadedText);

// Display the loaded object
console.log("\nLoaded Order:");
console.log(loadedOrder);

// Display individual properties
console.log("Loaded Table:", loadedOrder.tableNumber);

console.log("Loaded Items:", loadedOrder.items);

console.log("Loaded Total: $" + loadedOrder.total);

console.log("Loaded Paid Status:", loadedOrder.paid);

// ==========================================================
// BONUS TESTING
// ==========================================================

console.log("\n====================================");
console.log("BONUS TESTING");
console.log("====================================");

// Check whether menuAgain is an array
console.log("Is menuAgain an array?", Array.isArray(menuAgain));

// Check whether loadedOrder is an object
console.log("Is loadedOrder an object?", typeof loadedOrder === "object");

// Display how many menu items exist
console.log("Number of Menu Items:", menuAgain.length);

// Display how many items were ordered
console.log("Number of Ordered Items:", loadedOrder.items.length);

// Display a formatted order summary
console.log("\nOrder Summary");

console.log("-----------------------");

console.log("Table:", loadedOrder.tableNumber);

console.log("Items:", loadedOrder.items.join(", "));

console.log("Total: $" + loadedOrder.total);

console.log("Paid:", loadedOrder.paid);

console.log("-----------------------");

// ==========================================================
// FINAL TESTING
// ==========================================================

console.log("\n====================================");
console.log("FINAL TEST RESULTS");
console.log("====================================");

console.log("✔ Array successfully converted to JSON");

console.log("✔ JSON converted back into array");

console.log("✔ Object successfully converted to JSON");

console.log("✔ JSON converted back into object");

console.log("✔ Object saved to localStorage");

console.log("✔ Object loaded from localStorage");

console.log("✔ Activity completed successfully!");
