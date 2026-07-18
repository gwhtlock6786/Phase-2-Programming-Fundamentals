console.log("\nActivity 1");
console.log("My first JavaScript!");
console.log(10 + 5);
console.log(100 / 4);
console.log("Hello " + "World");
console.log(typeof 42);
console.log(typeof "Hello");
console.log("==============================================");

console.log("\nActivity 2");
// Create constants for a restaurant
const restaurantName = "Golden Fork Grill";
const taxRate = 0.075;

// Create variables that can change
let tableCount = 20;
let currentGuests = 0;

console.log(restaurantName);
console.log(taxRate);
console.log(tableCount);
console.log(currentGuests);

// This should work (let can change)
currentGuests = 5;
console.log(currentGuests);

try {
  // This should cause an error (const cannot change)
  restaurantName = "Silver Spoon";
  // You should see: TypeError: Assignment to constant variable
} catch (error) {
  console.log(error);
}

console.log("I ran ");

console.log("==============================================");

console.log("\nActivity 3");
//Create variables of each type:
// String
let itemName = "Burger";

// Number
let price = 12.99;
let quantity = 2;

// Boolean
let inStock = true;
let isVegetarian = false;

// Null
let allergens = null;

// Undefined (declare without value)
let specialInstructions;
//Check the type of each variable:
console.log(typeof itemName); // string
console.log(typeof price); // number
console.log(typeof inStock); // boolean
console.log(typeof allergens); // object (JavaScript quirk)
console.log(typeof specialInstructions); // undefined
//Experiment with type combinations:
// Number + Number = math
console.log(5 + 3); // 8

// String + String = joined text
console.log("Hello " + "World"); // Hello World

// String + Number = joined text (number becomes string)
console.log("Price: $" + 12.99); // Price: $12.99
console.log("5" + 3); // 53 (not 8!)
//Create a mini receipt using variables:
const itemName1 = "Coffee";
const price1 = 3.5;
const quantity1 = 2;

let subtotal = price1 * quantity1;

console.log("Item: " + itemName1);
console.log("Quantity: " + quantity1);
console.log("Price each: $" + price1);
console.log("Subtotal: $" + subtotal);
