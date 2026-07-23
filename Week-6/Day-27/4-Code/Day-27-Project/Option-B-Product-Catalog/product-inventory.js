// ======================================================
// PROJECT: PRODUCT CATALOG
// Option B - Retail Store Inventory Database
//
// Goal:
// Practice using arrays, objects, loops, calculations,
// and filtering inventory data.
// ======================================================

// ======================================================
// CREATE PRODUCT INVENTORY
// ======================================================

// Create an array called products.
// Each item inside the array is a product object.
let products = [
  // Product 1
  {
    name: "Wireless Headphones",
    price: 59.99,
    category: "Electronics",
    quantity: 12,
  },

  // Product 2
  {
    name: "Coffee Mug",
    price: 12.99,
    category: "Kitchen",
    quantity: 4,
  },

  // Product 3
  {
    name: "Notebook",
    price: 5.99,
    category: "Office Supplies",
    quantity: 25,
  },

  // Product 4
  {
    name: "Bluetooth Speaker",
    price: 39.99,
    category: "Electronics",
    quantity: 3,
  },

  // Product 5
  {
    name: "Water Bottle",
    price: 18.5,
    category: "Fitness",
    quantity: 8,
  },
];

// ======================================================
// DISPLAY ALL PRODUCTS
// ======================================================

console.log("=================================");
console.log("PRODUCT INVENTORY");
console.log("=================================");

// Loop through every product.
products.forEach(function (product, index) {
  // Display product number.
  console.log("Product #" + (index + 1));

  // Display product name.
  console.log("Name:", product.name);

  // Display product price.
  console.log("Price: $" + product.price.toFixed(2));

  // Display product category.
  console.log("Category:", product.category);

  // Display available quantity.
  console.log("Quantity:", product.quantity);

  // Separator between products.
  console.log("------------------------------");
});

// ======================================================
// CALCULATE TOTAL INVENTORY VALUE
// ======================================================

// Create a variable to store total inventory value.
let totalInventoryValue = 0;

// Loop through every product.
products.forEach(function (product) {
  // Calculate the value of this product.
  // Price multiplied by quantity.
  let productValue = product.price * product.quantity;

  // Add the product value to the total.
  totalInventoryValue += productValue;
});

// Display the total inventory value.
console.log("=================================");
console.log("TOTAL INVENTORY VALUE");
console.log("=================================");

console.log("$" + totalInventoryValue.toFixed(2));

// ======================================================
// DISPLAY LOW STOCK PRODUCTS
// ======================================================

console.log("=================================");
console.log("LOW STOCK PRODUCTS");
console.log("(Less than 5 items)");
console.log("=================================");

// Loop through every product.
products.forEach(function (product) {
  // Check if quantity is less than 5.
  if (product.quantity < 5) {
    // Display products that need restocking.
    console.log(
      product.name + " - Only " + product.quantity + " left in stock",
    );
  }
});

// ======================================================
// TESTING SECTION
// ======================================================

console.log("=================================");
console.log("TESTING PRODUCT DATABASE");
console.log("=================================");

// Display the entire product array.
console.log("Complete Product Array:");

console.log(products);

// Display total number of products.
console.log("---------------------------------");

console.log("Number of Products:", products.length);

// Test accessing individual products.
console.log("---------------------------------");

console.log("First Product:");

console.log(products[0]);

// ======================================================
// DISPLAY PRODUCT NAMES ONLY
// ======================================================

console.log("---------------------------------");

console.log("Product Names:");

products.forEach(function (product) {
  console.log(product.name);
});

// ======================================================
// DISPLAY PRODUCTS BY CATEGORY
// ======================================================

console.log("---------------------------------");

console.log("Electronics Products:");

// Loop through products.
products.forEach(function (product) {
  // Check category.
  if (product.category === "Electronics") {
    console.log(product.name);
  }
});

// ======================================================
// COUNT LOW STOCK ITEMS
// ======================================================

console.log("---------------------------------");

console.log("Low Stock Count:");

// Create counter variable.
let lowStockCount = 0;

// Loop through products.
products.forEach(function (product) {
  // Check stock amount.
  if (product.quantity < 5) {
    // Increase counter.
    lowStockCount++;
  }
});

// Display number of low stock products.
console.log(lowStockCount);

// ======================================================
// FIND MOST EXPENSIVE PRODUCT
// ======================================================

console.log("---------------------------------");

console.log("Most Expensive Product:");

// Store highest price.
let highestPrice = 0;

// Store product name.
let mostExpensiveProduct = "";

// Loop through products.
products.forEach(function (product) {
  // Check if this product costs more.
  if (product.price > highestPrice) {
    // Save highest price.
    highestPrice = product.price;

    // Save product name.
    mostExpensiveProduct = product.name;
  }
});

// Display result.
console.log(mostExpensiveProduct + " costs $" + highestPrice.toFixed(2));

// ======================================================
// FINAL SUMMARY
// ======================================================

console.log("=================================");

console.log("PROJECT COMPLETE");

console.log("Total Products:", products.length);

console.log("Inventory Value: $" + totalInventoryValue.toFixed(2));

console.log("Low Stock Items:", lowStockCount);

console.log("=================================");
