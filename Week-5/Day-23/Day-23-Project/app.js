// Mario's Pizzeria - Interactive Webpage
// Day 23: DOM Manipulation Practice

// ===========================================
// FEATURE 1: BUTTON CHANGES TEXT
// ===========================================
// TODO 1: Select the button with id="reveal-special"
// Hint: Use document.getElementById() or document.querySelector()


// TODO 2: Select the paragraph with id="special-text"


// TODO 3: Add a click event listener to the button
// When clicked, change the paragraph text to show today's special
// Example: "Today's Special: Large Pepperoni Pizza - Only $12.99!"


// ===========================================
// FEATURE 2: INPUT DISPLAYS TEXT (LIVE)
// ===========================================
// TODO 4: Select the input field with id="name-input"


// TODO 5: Select the span with id="name-display"


// TODO 6: Add an 'input' event listener to the input field
// When user types, update the span with whatever they typed
// Hint: Use input.value to get what user typed


// ===========================================
// FEATURE 3: COLOR PICKER BUTTONS
// ===========================================
// TODO 7: Select ALL buttons with class="theme-btn"
// Hint: Use querySelectorAll() - this returns multiple elements


// TODO 8: Select the preview div with id="theme-preview"


// TODO 9: Loop through all theme buttons and add click listeners
// When clicked, change the preview box backgroundColor to button's data-color
// Hint: button.getAttribute('data-color') gets the color value


// ===========================================
// FEATURE 4: SHOW/HIDE TOGGLE
// ===========================================
// TODO 10: Select the toggle button with id="toggle-info"


// TODO 11: Select the content div with id="info-content"


// TODO 12: Add click listener to toggle button
// When clicked:
//   - If content is hidden (display: none), show it (display: block)
//   - If content is shown, hide it
//   - BONUS: Change button text between "Show Hours" and "Hide Hours"
// Hint: Check infoContent.style.display value


// ===========================================
// FEATURE 5: COUNTER WITH +/- BUTTONS
// ===========================================
// TODO 13: Create a variable to track the guest count (start at 2)


// TODO 14: Select the increase button with id="increase"


// TODO 15: Select the decrease button with id="decrease"


// TODO 16: Select the display span with id="guest-count"


// TODO 17: Add click listener to increase button
// When clicked: add 1 to counter, update the display
// Hint: Update textContent of the span with new counter value


// TODO 18: Add click listener to decrease button
// When clicked: subtract 1 from counter (but don't go below 1), update display


// ===========================================
// TESTING CHECKLIST
// ===========================================
// Test each feature:
// [ ] Feature 1: Button reveals special text
// [ ] Feature 2: Typing in input shows live in display
// [ ] Feature 3: All 3 color buttons change preview box
// [ ] Feature 4: Toggle shows/hides hours
// [ ] Feature 5: +/- buttons change guest count
