// ============================================
// FETCH API PRACTICE
// ============================================

const content = document.getElementById("content");

const loading = document.getElementById("loading");

// API URL

const API = "http://localhost:3000";

// ============================================
// REUSABLE FETCH FUNCTION
// ============================================

function getData(endpoint) {
  // Show loading

  loading.textContent = "Loading...";

  content.innerHTML = "";

  fetch(API + endpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed");
      }

      return response.json();
    })

    .then((data) => {
      console.log(data);

      loading.textContent = "";

      displayCards(data);
    })

    .catch((error) => {
      console.error(error);

      loading.textContent = "Unable to load data";
    });
}

// ============================================
// USERS BUTTON
// ============================================

function loadUsers() {
  getData("/users");
}

// ============================================
// POSTS BUTTON
// ============================================

function loadPosts() {
  getData("/posts");
}

// ============================================
// TODOS BUTTON
// ============================================

function loadTodos() {
  getData("/todos");
}

// ============================================
// DISPLAY DATA
// ============================================

function displayCards(items) {
  items.forEach((item) => {
    const card = document.createElement("div");

    card.className = "card";

    // USERS

    if (item.email) {
      card.innerHTML = `

            <h2>${item.name}</h2>

            <p>
            Email:
            ${item.email}
            </p>

            <p>
            Company:
            ${item.company}
            </p>

            `;
    }

    // POSTS
    else if (item.title) {
      card.innerHTML = `


            <h2>
            ${item.title}
            </h2>


            <p>
            ${item.content}
            </p>


            <small>
            Author:
            ${item.author}
            </small>


            `;
    }

    // TODOS
    else if (item.task) {
      card.innerHTML = `


            <h2>
            ${item.task}
            </h2>


            <p>
            Status:
            ${item.completed ? "Complete ✅" : "Pending ⏳"}
            </p>


            `;
    }

    content.appendChild(card);
  });
}
