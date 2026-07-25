// ============================================
// LINEAR SEARCH PRACTICE
// Restaurant Menu Search System
// ============================================
//
// Goal:
// Search through menu items to find products
//
// Linear Search Algorithm:
// 1. Start at first item
// 2. Compare current item with search value
// 3. Move to next item if no match
// 4. Return result when found
// 5. Return null if no match exists
//
// ============================================

// ============================================
// MENU DATA
// ============================================

const menuItems = [
  {
    id: 1,
    name: "Cheeseburger",
    category: "Main",
    price: 9.99,
  },

  {
    id: 2,
    name: "Caesar Salad",
    category: "Salad",
    price: 7.99,
  },

  {
    id: 3,
    name: "Chicken Wings",
    category: "Appetizer",
    price: 11.99,
  },

  {
    id: 4,
    name: "French Fries",
    category: "Side",
    price: 3.99,
  },

  {
    id: 5,
    name: "Chocolate Cake",
    category: "Dessert",
    price: 5.99,
  },

  {
    id: 6,
    name: "Grilled Chicken",
    category: "Main",
    price: 13.99,
  },
];

// ============================================
// FIND MENU ITEM BY NAME
// ============================================
//
// Searches one item at a time
//
// Example:
//
// findMenuItem("Cheeseburger")
//
// Returns:
// {
//   id: 1,
//   name: "Cheeseburger",
//   category: "Main",
//   price: 9.99
// }
//
// ============================================

function findMenuItem(searchName) {
  // Convert search term to lowercase
  // so capitalization does not matter

  const searchValue = searchName.toLowerCase();

  // Loop through every menu item

  for (let i = 0; i < menuItems.length; i++) {
    // Get current menu item

    const item = menuItems[i];

    // Compare names
    //
    // Convert item name to lowercase
    // for case-insensitive searching

    if (item.name.toLowerCase() === searchValue) {
      // Return item when found

      return item;
    }
  }

  // Return null if no item matches

  return null;
}

// ============================================
// FIND ALL ITEMS BY CATEGORY
// ============================================
//
// Unlike findMenuItem,
// this can return multiple results.
//
// Example:
//
// findByCategory("Main")
//
// Returns:
// [
//   Cheeseburger,
//   Grilled Chicken
// ]
//
// ============================================

function findByCategory(categoryName) {
  // Store matching items

  const results = [];

  // Convert search category
  // to lowercase

  const searchCategory = categoryName.toLowerCase();

  // Check every menu item

  for (let i = 0; i < menuItems.length; i++) {
    // Current item

    const item = menuItems[i];

    // Compare categories

    if (item.category.toLowerCase() === searchCategory) {
      // Add matching item
      // to results array

      results.push(item);
    }
  }

  // Return all matching items

  return results;
}

// ============================================
// TEST FIND MENU ITEM
// ============================================

console.log("Searching for Cheeseburger:");

console.log(findMenuItem("Cheeseburger"));

console.log("-----------------------------");

console.log("Searching lowercase:");

console.log(findMenuItem("cheeseburger"));

console.log("-----------------------------");

console.log("Searching missing item:");

console.log(findMenuItem("Pizza"));

// ============================================
// TEST CATEGORY SEARCH
// ============================================

console.log("-----------------------------");

console.log("Finding Main dishes:");

console.log(findByCategory("Main"));

console.log("-----------------------------");

console.log("Finding Desserts:");

console.log(findByCategory("dessert"));

// ============================================
// EXPORT FUNCTIONS (OPTIONAL)
// Allows another file to use these functions
// ============================================

// export { findMenuItem, findByCategory };
