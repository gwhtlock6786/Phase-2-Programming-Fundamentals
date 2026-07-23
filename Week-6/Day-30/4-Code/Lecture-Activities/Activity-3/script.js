// ======================================================
// TODO LOCAL STORAGE FILTER PRACTICE
//
// New Feature:
// Save user's selected filter preference.
//
// Added:
// - localStorage.setItem()
// - localStorage.getItem()
// - Loading saved filter on startup
//
// ======================================================

// ======================================================
// DATA
// ======================================================

let todos = [
  {
    id: 1,

    text: "Complete JavaScript practice",

    completed: false,
  },

  {
    id: 2,

    text: "Study localStorage",

    completed: true,
  },

  {
    id: 3,

    text: "Build Todo App",

    completed: false,
  },
];

let nextId = 4;

// ======================================================
// NEW CHANGE:
//
// Check localStorage for previous filter.
//
// If a saved filter exists,
// use it.
//
// Otherwise start with "all".
//
// ======================================================

let currentFilter = localStorage.getItem("todo-filter") || "all";

console.log("Loaded Filter:", currentFilter);

// ======================================================
// DOM ELEMENTS
// ======================================================

const todoInput = document.getElementById("todo-input");

const addBtn = document.getElementById("add-btn");

const todoList = document.getElementById("todo-list");

const taskCount = document.getElementById("task-count");

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
// RENDER TODOS
// ======================================================

function renderTodos() {
  // Clear old list
  todoList.innerHTML = "";

  // Start with all todos
  let filteredTodos = todos;

  // Show active only
  if (currentFilter === "active") {
    filteredTodos = todos.filter(function (todo) {
      return todo.completed === false;
    });
  }

  // Show completed only
  if (currentFilter === "completed") {
    filteredTodos = todos.filter(function (todo) {
      return todo.completed === true;
    });
  }

  // Display todos
  filteredTodos.forEach(function (todo) {
    let li = document.createElement("li");

    li.className = "todo-item";

    li.textContent = todo.text;

    if (todo.completed) {
      li.classList.add("completed");
    }

    // Toggle when clicked
    li.addEventListener("click", function () {
      toggleComplete(todo.id);
    });

    todoList.appendChild(li);
  });

  // Count remaining
  let remaining = todos.filter(function (todo) {
    return todo.completed === false;
  }).length;

  taskCount.textContent = "Tasks Remaining: " + remaining;
}

// ======================================================
// NEW FUNCTION:
//
// Saves filter choice.
//
// This prevents repeating the same
// localStorage code.
//
// ======================================================

function saveFilter() {
  localStorage.setItem(
    "todo-filter",

    currentFilter,
  );

  console.log(
    "Saved Filter:",

    currentFilter,
  );
}

// ======================================================
// FILTER BUTTON EVENTS
// ======================================================

allBtn.addEventListener("click", function () {
  currentFilter = "all";

  // NEW:
  // Save preference
  saveFilter();

  renderTodos();
});

activeBtn.addEventListener("click", function () {
  currentFilter = "active";

  saveFilter();

  renderTodos();
});

completedBtn.addEventListener("click", function () {
  currentFilter = "completed";

  saveFilter();

  renderTodos();
});

// ======================================================
// ADD BUTTON
// ======================================================

addBtn.addEventListener("click", function () {
  addTodo(todoInput.value);

  todoInput.value = "";
});

// ======================================================
// TESTING
// ======================================================

console.log("Current todos:", todos);

console.log("localStorage filter:", localStorage.getItem("todo-filter"));

// Initial render
renderTodos();
