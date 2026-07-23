// Select form
const form = document.querySelector("#reservation-form");

// Select message area
const messageArea = document.querySelector("#message-area");

// Validation function
function validate(name, phone, date, time, party) {
  const errors = [];

  // Name validation
  if (name.trim() === "") {
    errors.push("Name is required");
  }

  // Phone validation
  if (phone.trim() === "") {
    errors.push("Phone number is required");
  }

  // Date validation
  if (date === "") {
    errors.push("Date is required");
  }

  // Time validation
  if (time === "") {
    errors.push("Time is required");
  }

  // Party size validation
  if (party === "" || party < 1) {
    errors.push("Party size must be at least 1");
  }

  return errors;
}

function showErrors(errors) {
  messageArea.innerHTML = `

<div class="error">

${errors
  .map(function (error) {
    return `<p>${error}</p>`;
  })
  .join("")}

</div>

`;
}

function showSuccess() {
  messageArea.innerHTML = `


<div class="success">

Reservation confirmed!

</div>


`;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;

  const phone = document.querySelector("#phone").value;

  const date = document.querySelector("#date").value;

  const time = document.querySelector("#time").value;

  const party = document.querySelector("#party").value;

  const errors = validate(name, phone, date, time, party);

  if (errors.length > 0) {
    showErrors(errors);
  } else {
    showSuccess();

    form.reset();
  }
});

console.log("Reservation Form Loaded");
