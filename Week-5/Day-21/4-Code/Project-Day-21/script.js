/* ==========================================================
   JAVASCRIPT FUNDAMENTALS PRACTICE
   Week 5 - Day 21
   Topics:
   - Variables (let & const)
   - Arithmetic Operators
   - String Concatenation
   - Data Types
   - console.log()

   NOTE:
   This file is designed for beginners. Every line includes
   comments explaining what the code is doing.
==========================================================*/

/* ==========================================================
   PROGRAM 1 - SIMPLE RESTAURANT CALCULATOR
   Goal:
   • Store prices using const
   • Store quantities using let
   • Calculate subtotals
   • Calculate sales tax
   • Display a formatted receipt
==========================================================*/

// ---------- Item Prices ----------

// The price of one hamburger.
const burgerPrice = 8.99;

// The price of one order of fries.
const friesPrice = 3.49;

// The price of one soft drink.
const drinkPrice = 2.25;

// ---------- Item Quantities ----------

// Number of burgers ordered.
let burgerQty = 2;

// Number of fries ordered.
let friesQty = 1;

// Number of drinks ordered.
let drinkQty = 2;

// ---------- Tax Rate ----------

// Sales tax (7%)
const taxRate = 0.07;

// ---------- Calculate Subtotals ----------

// Burger subtotal = price × quantity
let burgerSubtotal = burgerPrice * burgerQty;

// Fries subtotal = price × quantity
let friesSubtotal = friesPrice * friesQty;

// Drink subtotal = price × quantity
let drinkSubtotal = drinkPrice * drinkQty;

// ---------- Calculate Order Totals ----------

// Add all subtotals together.
let subtotal = burgerSubtotal + friesSubtotal + drinkSubtotal;

// Calculate tax amount.
let tax = subtotal * taxRate;

// Calculate final total.
let total = subtotal + tax;

// ---------- Display Receipt ----------

// Display a title.
console.log("========== Restaurant Receipt ==========");

// Display each item and subtotal.
console.log("Burgers: $" + burgerSubtotal.toFixed(2));
console.log("Fries:   $" + friesSubtotal.toFixed(2));
console.log("Drinks:  $" + drinkSubtotal.toFixed(2));

// Display subtotal.
console.log("----------------------------------------");
console.log("Subtotal: $" + subtotal.toFixed(2));

// Display tax.
console.log("Tax:      $" + tax.toFixed(2));

// Display total.
console.log("----------------------------------------");
console.log("Total:    $" + total.toFixed(2));

/* ==========================================================
   PROGRAM 2 - STRING BUILDER
   Goal:
   • Create customer information
   • Combine strings with the + operator
   • Display formatted messages
==========================================================*/

// ---------- Customer Information ----------

// Store the customer's first name.
const firstName = "Sarah";

// Store the customer's last name.
const lastName = "Johnson";

// Store the customer's loyalty points.
let loyaltyPoints = 275;

// ---------- Build Strings ----------

// Combine the first and last name into one string.
let fullName = firstName + " " + lastName;

// Create a welcome message.
let welcomeMessage = "Welcome, " + fullName + "!";

// Create a loyalty message.
let pointsMessage = "You currently have " + loyaltyPoints + " loyalty points.";

// ---------- Display Messages ----------

// Print a blank line for spacing.
console.log("");

// Display section title.
console.log("========== Customer Welcome ==========");

// Display the customer's full name.
console.log("Customer: " + fullName);

// Display the welcome message.
console.log(welcomeMessage);

// Display the loyalty points message.
console.log(pointsMessage);

/* ==========================================================
   PROGRAM 3 - NUMBER GAME SETUP
   Goal:
   • Create variables for a guessing game
   • Demonstrate all five data types
   • Display current game information
==========================================================*/

// ---------- Number Data Type ----------

// The secret number never changes, so use const.
const secretNumber = 17;

// ---------- String Data Type ----------

// Store the player's name.
let playerName = "Alex";

// ---------- Boolean Data Type ----------

// Has the player guessed correctly?
let hasWon = false;

// ---------- Null Data Type ----------

// The player has not made a guess yet.
let playerGuess = null;

// ---------- Undefined Data Type ----------

// The game difficulty has not been assigned yet.
let difficulty;

// ---------- Additional Variables ----------

// Count how many guesses the player has made.
let guessCount = 0;

// Maximum number of guesses allowed.
const maxGuesses = 5;

// ---------- Display Game Information ----------

console.log("");

console.log("========== Number Guessing Game ==========");

console.log("Welcome, " + playerName + "!");

console.log("Try to guess the secret number.");

console.log("Maximum guesses: " + maxGuesses);

console.log("");

// ---------- Display Current Game State ----------

console.log("Current Game State");

console.log("------------------");

console.log("Secret Number: " + secretNumber);

console.log("Player Guess: " + playerGuess);

console.log("Guess Count: " + guessCount);

console.log("Player Won: " + hasWon);

console.log("Difficulty: " + difficulty);

console.log("");

// ---------- Display Data Types ----------

console.log("========== Data Types ==========");

// typeof tells us what data type a value is.
console.log("playerName: " + typeof playerName);

console.log("secretNumber: " + typeof secretNumber);

console.log("hasWon: " + typeof hasWon);

// JavaScript reports null as an object (this is a historical quirk).
console.log("playerGuess: " + typeof playerGuess);

console.log("difficulty: " + typeof difficulty);
