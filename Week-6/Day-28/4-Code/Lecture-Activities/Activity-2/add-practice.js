// ======================================================
// ACTIVITY 2: ADD FUNCTION PRACTICE
//
// Goal:
// Create a function that builds todo objects,
// adds them to an array, and automatically creates
// unique IDs.
// ======================================================

// ======================================================
// SETUP TODO ARRAY AND ID COUNTER
// ======================================================

// Create an empty array to store todo objects.
let todos = [];

// Create a variable to keep track of the next ID number.
let nextId = 1;

// ======================================================
// CREATE addTodo FUNCTION
// ======================================================

// Create a function named addTodo.
// It accepts one parameter called text.
function addTodo(text) {
  // Create a new todo object.
  let newTodo = {
    // Assign the current nextId value as the todo ID.
    id: nextId,

    // Store the task description.
    text: text,

    // New todos start as incomplete.
    completed: false,
  };

  // Add the new todo object to the todos array.
  todos.push(newTodo);

  // Increase nextId by 1 so the next todo
  // receives a unique ID.
  nextId++;
}

// ======================================================
// ADD THREE TODOS
// ======================================================

// Call addTodo and pass in the first task.
addTodo("Complete JavaScript practice");

// Call addTodo and pass in the second task.
addTodo("Study array methods");

// Call addTodo and pass in the third task.
addTodo("Build a todo app");

// ======================================================
// DISPLAY TODOS ARRAY
// ======================================================

// Display the complete todos array.
console.log("Current Todos:");

console.log(todos);

// ======================================================
// TESTING SECTION
// ======================================================

console.log("=================================");
console.log("TODO FUNCTION TESTING");
console.log("=================================");

// Test number of todos created.
console.log("---------------------------------");

console.log("Total Todos:", todos.length);

// Test each todo object.
console.log("---------------------------------");

console.log("Individual Todo Tests");

// Display first todo.
console.log("Todo 1 ID:", todos[0].id);

console.log("Todo 1 Text:", todos[0].text);

console.log("Todo 1 Completed:", todos[0].completed);

// Display second todo.
console.log("---------------------------------");

console.log("Todo 2 ID:", todos[1].id);

console.log("Todo 2 Text:", todos[1].text);

console.log("Todo 2 Completed:", todos[1].completed);

// Display third todo.
console.log("---------------------------------");

console.log("Todo 3 ID:", todos[2].id);

console.log("Todo 3 Text:", todos[2].text);

console.log("Todo 3 Completed:", todos[2].completed);

// ======================================================
// VERIFY UNIQUE IDS
// ======================================================

console.log("---------------------------------");

console.log("Checking IDs:");

// Loop through todos and display IDs.
todos.forEach(function (todo) {
  console.log("Todo ID:", todo.id);
});

// ======================================================
// VERIFY NEXT ID VALUE
// ======================================================

// After creating 3 todos:
// ID 1 was used
// ID 2 was used
// ID 3 was used
// nextId should now equal 4.

console.log("---------------------------------");

console.log("Next ID:", nextId);

// ======================================================
// ADD ANOTHER TODO TO TEST
// ======================================================

console.log("---------------------------------");

console.log("Adding Another Todo");

// Add another task.
addTodo("Learn JavaScript objects");

// Display updated array.
console.log(todos);

// Verify new ID.
console.log("New Todo ID:", todos[3].id);

// ======================================================
// FINAL SUMMARY
// ======================================================

console.log("=================================");

console.log("FINAL SUMMARY");

console.log("Total Todos:", todos.length);

console.log("Next Available ID:", nextId);

console.log("=================================");
