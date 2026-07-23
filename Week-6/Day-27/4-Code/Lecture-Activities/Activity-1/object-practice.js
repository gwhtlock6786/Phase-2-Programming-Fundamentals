// ======================================================
// ACTIVITY 1: CREATE YOUR FIRST OBJECTS
// Goal: Learn how to create objects, access properties,
// update properties, and add new properties.
// ======================================================

// ======================================================
// CREATE A RESTAURANT OBJECT
// ======================================================

// Create an object named "restaurant".
// Objects store related pieces of information using
// key-value pairs.
let restaurant = {
  // The restaurant's name.
  name: "Bella Italia",

  // The type of food served.
  cuisine: "Italian",

  // Current customer rating (1-5).
  rating: 4,

  // Whether the restaurant is currently open.
  isOpen: true,
};

// ======================================================
// ACCESS PROPERTIES USING DOT NOTATION
// ======================================================

// Dot notation is the most common way to access
// object properties.

// Display the restaurant's name.
console.log("Restaurant Name:", restaurant.name);

// Display the cuisine.
console.log("Cuisine:", restaurant.cuisine);

// Display the rating.
console.log("Rating:", restaurant.rating);

// Display whether the restaurant is open.
console.log("Open:", restaurant.isOpen);

// ======================================================
// ACCESS PROPERTIES USING BRACKET NOTATION
// ======================================================

// Bracket notation is useful when the property name
// is stored inside a variable or contains spaces.

// Display the restaurant's name.
console.log("Restaurant Name:", restaurant["name"]);

// Display the cuisine.
console.log("Cuisine:", restaurant["cuisine"]);

// Display the rating.
console.log("Rating:", restaurant["rating"]);

// Display whether the restaurant is open.
console.log("Open:", restaurant["isOpen"]);

// ======================================================
// UPDATE AN EXISTING PROPERTY
// ======================================================

// Change the restaurant's rating from 4 to 5.
restaurant.rating = 5;

// ======================================================
// ADD A NEW PROPERTY
// ======================================================

// Add an address property that did not exist before.
restaurant.address = "123 Main Street";

// ======================================================
// DISPLAY THE UPDATED OBJECT
// ======================================================

// Display the complete object after the changes.
console.log("Updated Restaurant Object:");
console.log(restaurant);

// ======================================================
// TESTING SECTION
// ======================================================

console.log("========== TESTING ==========");

// Display the original object.
console.log("Current Restaurant Object:");
console.log(restaurant);

// Verify each property using dot notation.
console.log("Dot Notation Test");
console.log("Name:", restaurant.name);
console.log("Cuisine:", restaurant.cuisine);
console.log("Rating:", restaurant.rating);
console.log("Open:", restaurant.isOpen);
console.log("Address:", restaurant.address);

// Verify each property using bracket notation.
console.log("Bracket Notation Test");
console.log("Name:", restaurant["name"]);
console.log("Cuisine:", restaurant["cuisine"]);
console.log("Rating:", restaurant["rating"]);
console.log("Open:", restaurant["isOpen"]);
console.log("Address:", restaurant["address"]);

// Change the rating again to demonstrate updating.
restaurant.rating = 3;

console.log("Rating Changed Again:");
console.log("New Rating:", restaurant.rating);

// Add another property.
restaurant.phone = "(555) 123-4567";

console.log("Phone Property Added:");
console.log(restaurant.phone);

// Display the finished object.
console.log("Final Restaurant Object:");
console.log(restaurant);

// Display all property names.
console.log("Property Names:");
console.log(Object.keys(restaurant));

// Display all property values.
console.log("Property Values:");
console.log(Object.values(restaurant));

// Display all key/value pairs.
console.log("Entries:");
console.log(Object.entries(restaurant));
