// ======================================================
// SHOPPING LIST APP
// ======================================================

// Create an array to hold our shopping list items.
let shoppingList = ["Milk", "Bread", "Eggs"];

// ======================================================
// DISPLAY LIST FUNCTION
// ======================================================

// This function displays every item from the array.
function displayList() {
  // Find the unordered list on the webpage.
  let listElement = document.getElementById("shopping-items");

  // Remove all current list items.
  listElement.innerHTML = "";

  // Loop through every item inside the shopping list array.
  shoppingList.forEach(function (item, index) {
    // Create a new list item.
    let li = document.createElement("li");

    // Display the item number and item name.
    li.textContent = index + 1 + ". " + item;

    // Add the new list item to the unordered list.
    listElement.appendChild(li);
  });

  // Update the total item count.
  document.getElementById("item-count").textContent =
    "Total Items: " + shoppingList.length;
}

// ======================================================
// ADD ITEM FUNCTION
// ======================================================

// This function adds one hardcoded item.
function addItem(newItemValue) {
  // Add another item to the end of the array.
  shoppingList.push(newItemValue);

  // Show the updated shopping list.
  displayList();
}

// ======================================================
// BUTTON EVENT LISTENER
// ======================================================

// Find the button.
let addButton = document.getElementById("add-button");
let newItemInput = document.getElementById("newItem");

// When the button is clicked...
addButton.addEventListener("click", function () {
  //makes sure there is a value if not it doesnt add it to the array
  if (!newItemInput.value == "") {
    // Run the addItem function.
    addItem(newItemInput.value);
  }

  //clears the input
  newItemInput.value = "";
});

// ======================================================
// INITIAL DISPLAY
// ======================================================

// Display the shopping list when the page loads.
displayList();

// ======================================================
// TESTING
// ======================================================

// Display the original array.
console.log("Current Shopping List:");
console.log(shoppingList);

// Display every item individually.
console.log("Items in the array:");

shoppingList.forEach(function (item, index) {
  console.log(index + 1 + ". " + item);
});

// Display the total number of items.
console.log("Total Items:", shoppingList.length);

// Add a test item to demonstrate push().
shoppingList.push("Apples");

// Display the updated array.
console.log("After adding Apples:");
console.log(shoppingList);

// Display the new total.
console.log("Updated Total:", shoppingList.length);
