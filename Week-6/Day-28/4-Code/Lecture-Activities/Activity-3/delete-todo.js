// ======================================================
// ACTIVITY 3: DELETE FUNCTION PRACTICE
//
// Goal:
// Create a function that removes todos from an array
// using the filter() method.
// ======================================================

// ======================================================
// CREATE STARTING TODO ARRAY
// ======================================================

// Create an array with 4 starting todo objects.
let todos = [
  // Todo 1
  {
    id: 1,
    text: "Complete JavaScript homework",
    completed: false,
  },

  // Todo 2
  {
    id: 2,
    text: "Practice filter method",
    completed: false,
  },

  // Todo 3
  {
    id: 3,
    text: "Review objects and arrays",
    completed: true,
  },

  // Todo 4
  {
    id: 4,
    text: "Build a todo application",
    completed: false,
  },
];

// ======================================================
// CREATE deleteTodo FUNCTION
// ======================================================

// Create a function named deleteTodo.
// It receives the ID of the todo we want to remove.
function deleteTodo(todoId) {
  // Use filter() to create a new array.
  // The new array will contain every todo
  // except the one we want to delete.
  todos = todos.filter(function (todo) {
    // Keep todos where the ID does not match
    // the ID we want to remove.
    return todo.id !== todoId;
  });
}

// ======================================================
// DISPLAY ORIGINAL ARRAY
// ======================================================

console.log("=================================");
console.log("ORIGINAL TODOS");
console.log("=================================");

// Display all starting todos.
console.log(todos);

// ======================================================
// DELETE TODO WITH ID 2
// ======================================================

console.log("---------------------------------");

console.log("Deleting Todo ID: 2");

// Call the delete function.
// This removes the todo with id 2.
deleteTodo(2);

// Display updated array.
console.log("After deleting ID 2:");

console.log(todos);

// ======================================================
// DELETE TODO WITH ID 4
// ======================================================

console.log("---------------------------------");

console.log("Deleting Todo ID: 4");

// Remove the todo with id 4.
deleteTodo(4);

// Display updated array.
console.log("After deleting ID 4:");

console.log(todos);

// ======================================================
// TESTING SECTION
// ======================================================

console.log("=================================");
console.log("DELETE FUNCTION TESTING");
console.log("=================================");

// Verify remaining number of todos.
console.log("---------------------------------");

console.log("Remaining Todos:", todos.length);

// ======================================================
// VERIFY REMAINING IDS
// ======================================================

console.log("---------------------------------");

console.log("Remaining Todo IDs:");

// Loop through remaining todos.
todos.forEach(function (todo) {
  // Display each remaining ID.
  console.log(todo.id);
});

// ======================================================
// VERIFY REMAINING TODO DETAILS
// ======================================================

console.log("---------------------------------");

console.log("Remaining Todo Details:");

// Display each remaining todo.
todos.forEach(function (todo) {
  console.log(
    "ID:",
    todo.id,
    "| Task:",
    todo.text,
    "| Completed:",
    todo.completed,
  );
});

// ======================================================
// TEST DELETE FROM MIDDLE OF ARRAY
// ======================================================

// Create another test array.
let testTodos = [
  {
    id: 10,
    text: "Task A",
    completed: false,
  },

  {
    id: 20,
    text: "Task B",
    completed: false,
  },

  {
    id: 30,
    text: "Task C",
    completed: true,
  },
];

// Display test array before deletion.
console.log("---------------------------------");

console.log("Before Removing ID 20:");

console.log(testTodos);

// Remove item from the middle.
testTodos = testTodos.filter(function (todo) {
  return todo.id !== 20;
});

// Display test array after deletion.
console.log("After Removing ID 20:");

console.log(testTodos);

// ======================================================
// VERIFY ORIGINAL DATA WAS NOT CHANGED
// ======================================================

console.log("---------------------------------");

console.log("Final Todo Count:");

console.log(todos.length);

// Display final array.
console.log("Final Todos:");

console.log(todos);

// Completion message.
console.log("=================================");

console.log("DELETE FUNCTION COMPLETE");

console.log("=================================");
