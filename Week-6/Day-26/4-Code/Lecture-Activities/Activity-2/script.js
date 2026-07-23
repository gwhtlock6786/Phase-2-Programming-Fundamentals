/*
=========================================
Activity 2: Push, Pop, Shift, Unshift Practice
Goal: Add and remove items from arrays using all four methods.
=========================================
*/

// =========================================
// Create the starting waitlist
// =========================================

// Create an array containing the names of customers
// currently waiting for a table.
const waitlist = ["Chen", "Williams", "Brown"];

// Display the original waitlist.
console.log("Starting Waitlist:", waitlist);

// =========================================
// Add a customer to the end using push()
// =========================================

// The push() method adds one or more items
// to the END of an array.
waitlist.push("Martinez");

// Display the updated waitlist.
console.log("After push():", waitlist);

// =========================================
// Add a customer to the beginning using unshift()
// =========================================

// The unshift() method adds one or more items
// to the BEGINNING of an array.
waitlist.unshift("VIP Guest");

// Display the updated waitlist.
console.log("After unshift():", waitlist);

// =========================================
// Remove the first customer using shift()
// =========================================

// The shift() method removes the FIRST item
// from an array and returns the removed value.
const seatedCustomer = waitlist.shift();

// Display the customer who was seated.
console.log("Customer Seated:", seatedCustomer);

// Display the updated waitlist.
console.log("After shift():", waitlist);

// =========================================
// Remove the last customer using pop()
// =========================================

// The pop() method removes the LAST item
// from an array and returns the removed value.
const customerLeft = waitlist.pop();

// Display the customer who left.
console.log("Customer Left:", customerLeft);

// Display the updated waitlist.
console.log("After pop():", waitlist);

// ======================================================
// TESTING SECTION
// These console.log statements test every required
// use case from the activity.
// ======================================================

console.log("\n========== TESTING WAITLIST OPERATIONS ==========");

// ------------------------------------------
// Test 1 - Final waitlist
// ------------------------------------------
console.log("\nTest 1 - Final Waitlist");
console.log("Expected: [ 'Chen', 'Williams', 'Brown' ]");
console.log("Actual:", waitlist);

// ------------------------------------------
// Test 2 - Customer added to end
// ------------------------------------------
console.log("\nTest 2 - push() Result");
console.log("Martinez should have been added to the end before later removal.");
console.log("Customer removed by pop():", customerLeft);
console.log("Expected: Martinez");
console.log("Actual:", customerLeft);

// ------------------------------------------
// Test 3 - Customer added to beginning
// ------------------------------------------
console.log("\nTest 3 - unshift() Result");
console.log(
  "VIP Guest should have been added to the beginning before being seated.",
);
console.log("Customer removed by shift():", seatedCustomer);
console.log("Expected: VIP Guest");
console.log("Actual:", seatedCustomer);

// ------------------------------------------
// Test 4 - Verify first customer after all operations
// ------------------------------------------
console.log("\nTest 4 - Current First Customer");
console.log("Expected: Chen");
console.log("Actual:", waitlist[0]);

// ------------------------------------------
// Test 5 - Verify last customer after all operations
// ------------------------------------------
console.log("\nTest 5 - Current Last Customer");
console.log("Expected: Brown");
console.log("Actual:", waitlist[waitlist.length - 1]);

// ------------------------------------------
// Test 6 - Verify total customers remaining
// ------------------------------------------
console.log("\nTest 6 - Remaining Customer Count");
console.log("Expected: 3");
console.log("Actual:", waitlist.length);

// ------------------------------------------
// Test 7 - Display each remaining customer
// ------------------------------------------
console.log("\nTest 7 - Remaining Customers");
console.log("Customer 1:", waitlist[0]);
console.log("Customer 2:", waitlist[1]);
console.log("Customer 3:", waitlist[2]);

// ------------------------------------------
// Test 8 - Verify saved removed values
// ------------------------------------------
console.log("\nTest 8 - Saved Removed Customers");
console.log("Seated Customer:", seatedCustomer);
console.log("Customer Who Left:", customerLeft);

// ------------------------------------------
// Test 9 - Display final array
// ------------------------------------------
console.log("\nTest 9 - Final Waitlist Array");
console.log(waitlist);

console.log("\n========== ALL TESTS COMPLETE ==========");
