// ======================================================
// FORM VALIDATION PRACTICE
//
// Goal:
// Validate user input before accepting the form.
//
// CHANGES FROM ACTIVITY 1:
// Added:
// 1. Name validation
// 2. Email validation
// 3. Feedback validation
// 4. Success/error messages
// ======================================================

// ======================================================
// SELECT FORM
// ======================================================

// Get the form element from the page.
const form = document.getElementById("feedback-form");

// ======================================================
// SUBMIT EVENT
// ======================================================

// Listen for when the form is submitted.
form.addEventListener("submit", function (event) {
  // ==================================================
  // CHANGE FROM ACTIVITY 1:
  // Prevent page refresh
  // ==================================================

  event.preventDefault();

  // ==================================================
  // GET INPUT VALUES
  // ==================================================

  // Get name value.
  let name = document.getElementById("name").value;

  // Get email value.
  let email = document.getElementById("email").value;

  // Get date value.
  let visitDate = document.getElementById("visit-date").value;

  // Get feedback value.
  let feedback = document.getElementById("feedback").value;

  // ==================================================
  // NEW CHANGE:
  // CREATE VALIDATION VARIABLE
  // ==================================================

  // Start by assuming the form is valid.
  let isValid = true;

  // ==================================================
  // NAME VALIDATION
  // ==================================================

  // Check if name is empty.
  if (name.trim() === "") {
    console.log("ERROR: Name cannot be empty");

    isValid = false;
  }

  // ==================================================
  // EMAIL VALIDATION
  // ==================================================

  // Check if email is empty.
  if (email.trim() === "") {
    console.log("ERROR: Email cannot be empty");

    isValid = false;
  }

  // Check if email contains @ and .
  else if (!email.includes("@") || !email.includes(".")) {
    console.log("ERROR: Email must contain @ and .");

    isValid = false;
  }

  // ==================================================
  // FEEDBACK VALIDATION
  // ==================================================

  // Check if feedback is empty.
  if (feedback.trim() === "") {
    console.log("ERROR: Feedback cannot be empty");

    isValid = false;
  }

  // ==================================================
  // FINAL VALIDATION CHECK
  // ==================================================

  // If every check passed...
  if (isValid) {
    console.log("Form is valid!");

    console.log("========== FORM DATA ==========");

    console.log("Name:", name);

    console.log("Email:", email);

    console.log("Visit Date:", visitDate);

    console.log("Feedback:", feedback);
  }
});

// ======================================================
// TESTING
// ======================================================

// Confirm JavaScript loaded.
console.log("Form validation JavaScript loaded!");

console.log("Form:", form);
