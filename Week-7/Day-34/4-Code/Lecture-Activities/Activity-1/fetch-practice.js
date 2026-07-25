// Select the button from the page
const fetchBtn = document.getElementById("fetchBtn");

// Listen for button click
fetchBtn.addEventListener("click", function () {
  // ============================================
  // BASIC FETCH REQUEST
  // ============================================

  // fetch() sends a request to the API.
  //
  // fetch() returns a Promise because
  // the data does not arrive immediately.
  fetch("http://localhost:3000/users")
    // First .then() receives the response.
    //
    // We convert the response into JSON format
    // so JavaScript can work with the data.
    .then((response) => {
      // Check if the request was successful.
      //
      // If there is an error like 404,
      // stop the chain and throw an error.
      if (!response.ok) {
        throw new Error("Network response was not successful");
      }

      // Convert response body to JSON.
      return response.json();
    })

    // Second .then() receives the actual data.
    //
    // This is where we can use the users array.
    .then((users) => {
      // Display the users in the console.
      console.log("Users from API:");

      console.log(users);
    })

    // Catch any errors that happen.
    .catch((error) => {
      // Display error message.
      console.error("Error fetching users:", error);
    });
});
