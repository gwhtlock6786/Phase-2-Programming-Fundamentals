// ============================================
// DAY 32: ARRAY METHODS PRACTICE
// map, filter, reduce Exercises
// ============================================
// Instructions:
// - Complete each TODO below
// - Test your code by running: node day-32-data-exercises-starter.js
// - Check your answers against the solution file when done

// ============================================
// RESTAURANT DATA (do not modify)
// ============================================

const menuItems = [
  {
    id: 1,
    name: "Classic Burger",
    price: 10.99,
    category: "entree",
    available: true,
  },
  {
    id: 2,
    name: "Caesar Salad",
    price: 8.5,
    category: "entree",
    available: true,
  },
  {
    id: 3,
    name: "French Fries",
    price: 4.99,
    category: "side",
    available: true,
  },
  {
    id: 4,
    name: "Onion Rings",
    price: 5.99,
    category: "side",
    available: false,
  },
  {
    id: 5,
    name: "Grilled Chicken",
    price: 14.99,
    category: "entree",
    available: true,
  },
  {
    id: 6,
    name: "Ice Cream",
    price: 3.99,
    category: "dessert",
    available: false,
  },
  {
    id: 7,
    name: "Apple Pie",
    price: 4.99,
    category: "dessert",
    available: true,
  },
  {
    id: 8,
    name: "Mashed Potatoes",
    price: 3.99,
    category: "side",
    available: true,
  },
];

const employees = [
  { name: "Maria", shift: "morning", hoursWorked: 32, hourlyRate: 15 },
  { name: "James", shift: "evening", hoursWorked: 40, hourlyRate: 14 },
  { name: "Alex", shift: "morning", hoursWorked: 28, hourlyRate: 16 },
  { name: "Sam", shift: "evening", hoursWorked: 35, hourlyRate: 15 },
  { name: "Jordan", shift: "morning", hoursWorked: 40, hourlyRate: 17 },
];

const orderItems = [
  { item: "Burger", quantity: 2, unitPrice: 10.99 },
  { item: "Fries", quantity: 3, unitPrice: 4.99 },
  { item: "Drink", quantity: 2, unitPrice: 2.5 },
  { item: "Ice Cream", quantity: 1, unitPrice: 3.99 },
];

const inventory = [
  { item: "Burger Patties", quantity: 50, unitCost: 2.5, category: "meat" },
  { item: "Chicken Breast", quantity: 8, unitCost: 3.75, category: "meat" },
  { item: "Lettuce", quantity: 20, unitCost: 1.25, category: "produce" },
  { item: "Tomatoes", quantity: 3, unitCost: 0.75, category: "produce" },
  { item: "Cheese", quantity: 40, unitCost: 2.0, category: "dairy" },
  { item: "Buns", quantity: 100, unitCost: 0.5, category: "bread" },
];

console.log("✅ Data loaded successfully!\n");

// ============================================
// PART 1: MAP EXERCISES (transform arrays)
// ============================================

console.log("=== PART 1: MAP EXERCISES ===\n");

// EXAMPLE (completed for you):
// Get just the item names from menuItems

// map() loops through every item and returns a new array
// containing only the name property.
const itemNames = menuItems.map((item) => item.name);

console.log("EXAMPLE - Item names:", itemNames);
console.log(""); // Blank line

// TODO 1: Use map() to add 8% tax to all menu prices
// Create a new array with each price multiplied by 1.08
// Expected result: [11.87, 9.18, 5.39, 6.47, 16.19, 4.31, 5.39, 4.31]

// map() creates a new array.
// Each item price is multiplied by 1.08 to add 8% tax.
const pricesWithTax = menuItems.map((item) => {
  return Number((item.price * 1.08).toFixed(2));
});

console.log("TODO 1 - Prices with tax:", pricesWithTax);
console.log("");

// TODO 2: Use map() to get just the employee names in UPPERCASE
// Hint: use .toUpperCase() on the name
// Expected result: ['MARIA', 'JAMES', 'ALEX', 'SAM', 'JORDAN']

// map() returns a new array of employee names.
// toUpperCase() changes each name to uppercase.
const employeeNamesUpper = employees.map((employee) => {
  return employee.name.toUpperCase();
});

console.log("TODO 2 - Employee names (uppercase):", employeeNamesUpper);
console.log("");

// TODO 3: Use map() to calculate weekly pay for each employee
// Formula: hoursWorked × hourlyRate
// Create new objects with all original properties plus weeklyPay
// Hint: Use spread operator { ...employee, weeklyPay: ... }

// map() creates new employee objects.
// Spread operator copies existing properties.
// weeklyPay is calculated and added.
const employeesWithPay = employees.map((employee) => {
  return {
    ...employee,
    weeklyPay: employee.hoursWorked * employee.hourlyRate,
  };
});

console.log("TODO 3 - Employees with weekly pay:");
if (employeesWithPay) {
  employeesWithPay.forEach((emp) => {
    console.log(`  ${emp.name}: $${emp.weeklyPay}`);
  });
}
console.log("");

// TODO 4: Use map() to create display strings for the menu
// Format: "Item Name - $Price (Category)"
// Example: "Classic Burger - $10.99 (entree)"

// map() transforms each object into a formatted string.
const menuDisplay = menuItems.map((item) => {
  return `${item.name} - $${item.price} (${item.category})`;
});

console.log("TODO 4 - Menu display strings:");
if (menuDisplay) {
  menuDisplay.forEach((line) => console.log("  " + line));
}
console.log("");

// TODO 5: Use map() to calculate line totals for order items
// Formula: quantity × unitPrice
// Add lineTotal property to each item

// map() creates new objects.
// Spread copies the original item.
// Adds calculated lineTotal property.
const orderWithTotals = orderItems.map((item) => {
  return {
    ...item,
    lineTotal: Number((item.quantity * item.unitPrice).toFixed(2)),
  };
});

console.log("TODO 5 - Order with line totals:");
if (orderWithTotals) {
  orderWithTotals.forEach((item) => {
    console.log(
      `  ${item.item}: ${item.quantity} × $${item.unitPrice} = $${item.lineTotal}`,
    );
  });
}
console.log("");

// ============================================
// PART 2: FILTER EXERCISES (select items)
// ============================================

console.log("=== PART 2: FILTER EXERCISES ===\n");

// TODO 6: Use filter() to find all menu items under $10
// Expected: 5 items

// filter() creates a new array containing only items
// that pass the condition.
// Here we keep menu items where the price is less than $10.
const budgetItems = menuItems.filter((item) => {
  return item.price < 10;
});

console.log("TODO 6 - Items under $10:");
if (budgetItems) {
  budgetItems.forEach((item) => console.log(`  ${item.name} - $${item.price}`));
  console.log(`  Total found: ${budgetItems.length}`);
}
console.log("");

// TODO 7: Use filter() to find only dessert items
// Expected: 2 items (Ice Cream, Apple Pie)

// filter() checks every menu item.
// Only items with category === "dessert" are returned.
const desserts = menuItems.filter((item) => {
  return item.category === "dessert";
});

console.log("TODO 7 - Desserts only:");
if (desserts) {
  desserts.forEach((item) => console.log(`  ${item.name}`));
}
console.log("");

// TODO 8: Use filter() to find available menu items
// Hint: Check if available === true (or just use item.available)

// The available property is already a boolean.
// filter() keeps only items where available is true.
const availableItems = menuItems.filter((item) => {
  return item.available;
});

console.log("TODO 8 - Available items:");
if (availableItems) {
  console.log(`  ${availableItems.length} items available`);
  availableItems.forEach((item) => console.log(`  ✅ ${item.name}`));
}
console.log("");

// TODO 9: Use filter() to find morning shift employees

// filter() checks each employee.
// Only employees whose shift is "morning"
// are returned.
const morningShift = employees.filter((employee) => {
  return employee.shift === "morning";
});

console.log("TODO 9 - Morning shift:");
if (morningShift) {
  morningShift.forEach((emp) => console.log(`  ${emp.name}`));
}
console.log("");

// TODO 10: Use filter() with multiple conditions
// Find items that are: available AND under $10
// Hint: Use && to combine conditions

// filter() can use multiple conditions.
// The item must:
// 1. Be available
// 2. Cost less than $10
//
// Both conditions must be true because we use &&.
const budgetAndAvailable = menuItems.filter((item) => {
  return item.available && item.price < 10;
});

console.log("TODO 10 - Budget AND available:");
if (budgetAndAvailable) {
  console.log(`  ${budgetAndAvailable.length} items match both conditions`);

  budgetAndAvailable.forEach((item) =>
    console.log(`  ${item.name} - $${item.price}`),
  );
}
console.log("");

// ============================================
// PART 3: REDUCE EXERCISES (calculate totals)
// ============================================

console.log("=== PART 3: REDUCE EXERCISES ===\n");

// TODO 11: Use reduce() to sum all menu prices
// Start with 0 as the initial value

// reduce() combines all values into one final result.
//
// accumulator = running total
// item = current menu item being processed
//
// We add each item's price to the accumulator.
const totalMenuValue = menuItems.reduce((total, item) => {
  return total + item.price;
}, 0);

// Round answer to 2 decimal places.
const formattedMenuValue = Number(totalMenuValue.toFixed(2));

console.log("TODO 11 - Total menu value: $" + formattedMenuValue);
console.log("");

// TODO 12: Use reduce() to calculate total hours worked by all employees

// reduce() loops through every employee.
// We add each employee's hoursWorked value.
//
// Starting value is 0 because we are adding numbers.
const totalHours = employees.reduce((total, employee) => {
  return total + employee.hoursWorked;
}, 0);

console.log("TODO 12 - Total hours worked:", totalHours);
console.log("");

// TODO 13: Use reduce() to calculate the order total
// Formula for each item: quantity × unitPrice
// Then sum all line totals

// Each order item has:
// quantity
// unitPrice
//
// First calculate the item's subtotal.
// Then add it to the running total.
const orderTotal = orderItems.reduce((total, item) => {
  // Calculate the current item's cost.
  const itemTotal = item.quantity * item.unitPrice;

  // Add current item cost to the total.
  return total + itemTotal;
}, 0);

// Round to two decimal places.
const formattedOrderTotal = Number(orderTotal.toFixed(2));

console.log("TODO 13 - Order total: $" + formattedOrderTotal.toFixed(2));
console.log("");

// TODO 14: Use reduce() to count how many items are in the 'entree' category
// Hint: Use a conditional inside reduce
// If item.category === 'entree', add 1 to count, otherwise add 0

// reduce() can be used as a counter.
//
// If the current item is an entree:
// increase count by 1.
//
// Otherwise:
// keep count the same.
const entreeCount = menuItems.reduce((count, item) => {
  if (item.category === "entree") {
    return count + 1;
  }

  return count;
}, 0);

console.log("TODO 14 - Number of entrees:", entreeCount);
console.log("");

// TODO 15: Use reduce() to find the highest priced menu item
// Hint: Compare item.price with accumulator, return the higher one
// Start with 0 as initial value

// reduce() compares every item price.
//
// The accumulator stores the highest price found so far.
//
// If the current item's price is higher,
// replace the accumulator.
const highestPrice = menuItems.reduce((highest, item) => {
  if (item.price > highest) {
    return item.price;
  }

  return highest;
}, 0);

console.log("TODO 15 - Highest price: $" + highestPrice.toFixed(2));
console.log("");

// ============================================
// BONUS CHALLENGE: CHAINING
// ============================================

console.log("=== BONUS CHALLENGE ===\n");

// BONUS: Find all available entrees, calculate their average price
// 1. filter() to get available entrees
// 2. map() to extract just the prices
// 3. reduce() to sum the prices
// 4. Divide by length for average

// Step 1: filter()
// --------------------------------------------
// Get only menu items that:
// - Are available
// - Are in the entree category
//
// filter() returns a new array containing
// only items that match both conditions.

const availableEntrees = menuItems.filter((item) => {
  return item.available && item.category === "entree";
});

// Step 2: map()
// --------------------------------------------
// We only need the prices for the average calculation.
//
// map() transforms the objects into numbers.

const entreePrices = availableEntrees.map((item) => {
  return item.price;
});

// Step 3: reduce()
// --------------------------------------------
// Add all entree prices together.
//
// reduce() combines the array into one value.
//
// Starting value is 0.

const entreePriceSum = entreePrices.reduce((total, price) => {
  return total + price;
}, 0);

// Step 4: Calculate Average
// --------------------------------------------
// Average formula:
//
// total of all values ÷ number of values
//
// We divide by entreePrices.length
// to get the average price.

const averageEntreePrice = entreePriceSum / entreePrices.length;

console.log("BONUS - Available entree price list:", entreePrices);

console.log("BONUS - Total entree price:", `$${entreePriceSum.toFixed(2)}`);

console.log(
  "BONUS - Average available entree price: $" + averageEntreePrice.toFixed(2),
);

// ============================================
// END OF EXERCISES
// ============================================

console.log("\n✅ All exercises complete! Check your results above.");
console.log("💡 Compare with the solution file to check your answers.");
