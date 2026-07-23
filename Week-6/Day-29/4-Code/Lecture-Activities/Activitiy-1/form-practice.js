// ======================================================
// FORM PRACTICE
//
// Goal:
// Capture values from an HTML form using JavaScript.
// ======================================================

// ======================================================
// SELECT THE FORM
// ======================================================

// Find the form element using its ID.
const form = document.getElementById("feedback-form");

// ======================================================
// ADD SUBMIT EVENT LISTENER
// ======================================================

// Listen for when the user submits the form.
form.addEventListener("submit", function (event) {
  // ======================================================
  // STOP PAGE REFRESH
  // ======================================================

  // Prevent the browser's default form behavior.
  // Without this, the page reloads after submitting.
  event.preventDefault();

  // ======================================================
  // GET INPUT VALUES
  // ======================================================

  // Get the name input value.
  let name = document.getElementById("name").value;

  // Get the email input value.
  let email = document.getElementById("email").value;

  // Get the visit date value.
  let visitDate = document.getElementById("visit-date").value;

  // Get the feedback text.
  let feedback = document.getElementById("feedback").value;

  // ======================================================
  // DISPLAY VALUES IN CONSOLE
  // ======================================================

  console.log("========== FORM SUBMISSION ==========");

  console.log("Name:", name);

  console.log("Email:", email);

  console.log("Visit Date:", visitDate);

  console.log("Feedback:", feedback);

  console.log("======================================");
});

// ======================================================
// TESTING
// ======================================================

// Verify the form was selected correctly.
console.log("Form Element:", form);

console.log("Form JavaScript Loaded Successfully!");
