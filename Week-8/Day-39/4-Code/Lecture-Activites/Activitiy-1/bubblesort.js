// ============================================
// BUBBLE SORT PRACTICE
// Restaurant Menu Price Organizer
// ============================================
//
// Goal:
// Sort menu prices from lowest to highest
//
// Bubble Sort Algorithm:
// 1. Compare neighboring values
// 2. Swap them if they are in the wrong order
// 3. Repeat until the array is sorted
//
// Example:
//
// Before:
// [12.99, 5.99, 8.99, 15.99]
//
// After:
// [5.99, 8.99, 12.99, 15.99]
//
// ============================================

// ============================================
// BUBBLE SORT FUNCTION
// ============================================

function bubbleSort(prices) {
  // Create a copy of the original array
  // This prevents changing the original data
  const sortedPrices = [...prices];

  // Outer loop controls how many passes
  // we make through the array
  //
  // Each pass moves the largest unsorted
  // value to the end of the array

  for (let i = 0; i < sortedPrices.length - 1; i++) {
    // Inner loop compares neighboring values
    //
    // Example:
    //
    // [8, 3, 5]
    //
    // Compare 8 and 3
    // Swap because 8 is bigger
    //
    // [3, 8, 5]

    for (let j = 0; j < sortedPrices.length - i - 1; j++) {
      // Compare current price with next price

      if (sortedPrices[j] > sortedPrices[j + 1]) {
        // Store current value temporarily

        let temp = sortedPrices[j];

        // Move smaller value left

        sortedPrices[j] = sortedPrices[j + 1];

        // Move larger value right

        sortedPrices[j + 1] = temp;
      }
    }
  }

  // Return the sorted array

  return sortedPrices;
}

// ============================================
// TEST DATA
// Restaurant Menu Prices
// ============================================

const breakfastPrices = [12.99, 5.99, 8.99, 15.99, 3.99, 10.99];

const dinnerPrices = [22.99, 18.99, 30.99, 14.99, 25.99];

const dessertPrices = [7.99, 4.99, 9.99, 6.99];

// ============================================
// TEST BUBBLE SORT
// ============================================

console.log("Original Breakfast Prices:");

console.log(breakfastPrices);

console.log("Sorted Breakfast Prices:");

console.log(bubbleSort(breakfastPrices));

console.log("-------------------------");

console.log("Original Dinner Prices:");

console.log(dinnerPrices);

console.log("Sorted Dinner Prices:");

console.log(bubbleSort(dinnerPrices));

console.log("-------------------------");

console.log("Original Dessert Prices:");

console.log(dessertPrices);

console.log("Sorted Dessert Prices:");

console.log(bubbleSort(dessertPrices));

// ============================================
// VERIFY ORIGINAL ARRAYS DID NOT CHANGE
// ============================================

console.log("Original breakfast array post sorting:");

console.log(breakfastPrices);
