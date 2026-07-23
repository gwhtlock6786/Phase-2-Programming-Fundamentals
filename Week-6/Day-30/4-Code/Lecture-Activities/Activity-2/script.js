// ======================================================
// TODO FILTER BUTTON PRACTICE
//
// New Features:
// - All filter
// - Active filter
// - Completed filter
//
// ======================================================

// ======================================================
// DATA
// ======================================================

// Array containing todo objects
let todos = [
  {
    id: 1,

    text: "Complete JavaScript practice",

    completed: false,
  },

  {
    id: 2,

    text: "Study array methods",

    completed: true,
  },

  {
    id: 3,

    text: "Build Todo App",

    completed: false,
  },
];

// Next available ID
let nextId = 4;

// ======================================================
// NEW CHANGE:
//
// Stores which filter is currently active.
//
// Possible values:
// "all"
// "active"
// "completed"
//
// ======================================================

let currentFilter = "all";

// ======================================================
// DOM ELEMENTS
// ======================================================

const todoInput = document.getElementById("todo-input");

const addBtn = document.getElementById("add-btn");

const todoList = document.getElementById("todo-list");

const taskCount = document.getElementById("task-count");

// NEW:
// Select filter buttons

const allBtn = document.getElementById("all-btn");

const activeBtn = document.getElementById("active-btn");

const completedBtn = document.getElementById("completed-btn");

// ======================================================
// ADD TODO
// ======================================================

function addTodo(text) {
  let newTodo = {
    id: nextId,

    text: text,

    completed: false,
  };

  todos.push(newTodo);

  nextId++;

  renderTodos();
}

// ======================================================
// TOGGLE COMPLETE
// ======================================================

function toggleComplete(id) {
  let todo = todos.find(function (todo) {
    return todo.id === id;
  });

  if (todo) {
    todo.completed = !todo.completed;
  }

  renderTodos();
}

// ======================================================
// DELETE TODO
// ======================================================

function deleteTodo(id) {
  todos = todos.filter(function (todo) {
    return todo.id !== id;
  });

  renderTodos();
}

// ======================================================
// RENDER TODOS
// ======================================================

function renderTodos() {
  // Clear old list
  todoList.innerHTML = "";

  // ==================================================
  // NEW CHANGE:
  //
  // Create filtered array based on currentFilter
  //
  // ==================================================

  let filteredTodos = todos;

  // Show only active tasks
  if (currentFilter === "active") {
    filteredTodos = todos.filter(function (todo) {
      return todo.completed === false;
    });
  }

  // Show only completed tasks
  if (currentFilter === "completed") {
    filteredTodos = todos.filter(function (todo) {
      return todo.completed === true;
    });
  }

  // Display filtered todos
  filteredTodos.forEach(function (todo) {
    let li = document.createElement("li");

    li.className = "todo-item";

    li.textContent = todo.text;

    // Add completed style
    if (todo.completed) {
      li.classList.add("completed");
    }

    // Clicking item toggles status
    li.addEventListener("click", function () {
      toggleComplete(todo.id);
    });

    todoList.appendChild(li);
  });

  // Count incomplete tasks
  let remaining = todos.filter(function (todo) {
    return todo.completed === false;
  }).length;

  taskCount.textContent = "Tasks Remaining: " + remaining;
}

// ======================================================
// FILTER BUTTON EVENTS
// ======================================================

// Show all todos
allBtn.addEventListener("click", function () {
  currentFilter = "all";

  renderTodos();
});

// Show incomplete todos
activeBtn.addEventListener("click", function () {
  currentFilter = "active";

  renderTodos();
});

// Show completed todos
completedBtn.addEventListener("click", function () {
  currentFilter = "completed";

  renderTodos();
});

// ======================================================
// ADD BUTTON EVENT
// ======================================================

addBtn.addEventListener("click", function () {
  addTodo(todoInput.value);

  todoInput.value = "";
});

// ======================================================
// TESTING SECTION
// ======================================================

console.log("Starting Todos:");

console.log(todos);

console.log("Current Filter:", currentFilter);

// Test filtering
currentFilter = "completed";

console.log(
  "Completed Todos:",
  todos.filter(function (todo) {
    return todo.completed;
  }),
);

// Reset filter
currentFilter = "all";

// Initial display
renderTodos();
