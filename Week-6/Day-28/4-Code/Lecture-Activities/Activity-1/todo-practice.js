// ======================================================
// ACTIVITY 1: TODO DATA STRUCTURE PRACTICE
//
// Goal:
// Create and manipulate todo objects using arrays,
// objects, dot notation, and filter().
// ======================================================

// ======================================================
// CREATE TODOS ARRAY
// ======================================================

// Create an array called todos.
// Each item inside the array is a todo object.
let todos = [
  // First todo object
  {
    // Unique identifier for the todo
    id: 1,

    // Description of the task
    text: "Complete JavaScript homework",

    // Shows whether the task is finished
    completed: true,
  },

  // Second todo object
  {
    // Unique identifier for the todo
    id: 2,

    // Description of the task
    text: "Practice array methods",

    // This task is not completed yet
    completed: false,
  },

  // Third todo object
  {
    // Unique identifier for the todo
    id: 3,

    // Description of the task
    text: "Review object concepts",

    // This task is completed
    completed: true,
  },
];

// ======================================================
// ACCESS FIRST TODO
// ======================================================

// Access the first object in the array.
// Arrays start counting at index 0.
let firstTodo = todos[0];

// Display the text property of the first todo.
console.log("First Todo:");

console.log(firstTodo.text);

// ======================================================
// ACCESS LAST TODO
// ======================================================

// Access the last object in the array.
// We use length - 1 because arrays start at index 0.
let lastTodo = todos[todos.length - 1];

// Display the completed status of the last todo.
console.log("Last Todo Completed Status:");

console.log(lastTodo.completed);

// ======================================================
// FIND COMPLETED TODOS USING FILTER()
// ======================================================

// filter() creates a new array containing only
// items that match a condition.

// Create a new array containing completed todos.
let completedTodos = todos.filter(function (todo) {
  // Return only todos where completed is true.
  return todo.completed === true;
});

// Display completed todos.
console.log("Completed Todos:");

console.log(completedTodos);

// ======================================================
// COUNT COMPLETED TODOS
// ======================================================

// The length property tells us how many items
// are inside an array.
let completedCount = completedTodos.length;

// Display the number of completed tasks.
console.log("Number of Completed Todos:", completedCount);

// ======================================================
// TESTING SECTION
// ======================================================

console.log("=================================");
console.log("TODO TESTING");
console.log("=================================");

// Display the entire todos array.
console.log("All Todos:");

console.log(todos);

// Test array length.
console.log("---------------------------------");

console.log("Total Todos:", todos.length);

// Test accessing each todo individually.
console.log("---------------------------------");

console.log("Individual Todo Tests");

console.log("Todo 1:", todos[0].text);

console.log("Todo 2:", todos[1].text);

console.log("Todo 3:", todos[2].text);

// ======================================================
// DISPLAY ONLY COMPLETED TASKS
// ======================================================

console.log("---------------------------------");

console.log("Completed Task Names:");

// Loop through completed todos.
completedTodos.forEach(function (todo) {
  // Display the text of completed tasks.
  console.log(todo.text);
});

// ======================================================
// DISPLAY INCOMPLETE TASKS
// ======================================================

console.log("---------------------------------");

console.log("Incomplete Task Names:");

// Use filter to find incomplete tasks.
let incompleteTodos = todos.filter(function (todo) {
  // Return todos that are not completed.
  return todo.completed === false;
});

// Display incomplete todos.
incompleteTodos.forEach(function (todo) {
  console.log(todo.text);
});

// ======================================================
// FINAL SUMMARY
// ======================================================

console.log("=================================");

console.log("FINAL TODO SUMMARY");

console.log("Total Tasks:", todos.length);

console.log("Completed Tasks:", completedTodos.length);

console.log("Incomplete Tasks:", incompleteTodos.length);

console.log("=================================");
