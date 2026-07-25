// ============================================
// ORDER TRACKER v1 - Starter Code
// Day 37 - Phase 2 Week 8
// ============================================
//
// TODO: Complete this Order Tracker application!
// Follow the comments below to implement each feature.
//
// Features to implement:
// 1. Add new orders via form
// 2. Display orders (pending vs completed)
// 3. Mark orders as complete
// 4. Calculate revenue from completed orders
// 5. Save/load orders with localStorage
// ============================================

// ===== DATA =====
// TODO: Create an array to hold all orders
// Hint: let orders = [];

// Stores all orders in memory

import sampleOrders from "./sample-orders.js";

let orders = structuredClone(sampleOrders);

console.log(orders);
// ===== DOM ELEMENTS =====
// TODO: Get references to form and input elements
// Use document.getElementById() for each element

// Form element

const orderForm = document.getElementById("order-form");

// Input elements
// TODO: Get customer name input

const customerNameInput = document.getElementById("customer-name");

// TODO: Get order items input

const orderItemsInput = document.getElementById("order-items");

// TODO: Get order total input

const orderTotalInput = document.getElementById("order-total");

// Display containers

const pendingContainer = document.getElementById("pending-orders");

const completedContainer = document.getElementById("completed-orders");

// Stats elements

const pendingCountEl = document.getElementById("pending-count");

const completedCountEl = document.getElementById("completed-count");

const revenueEl = document.getElementById("revenue");

//reset site
const resetButton = document.getElementById("reset");

function resetOrders() {
  // Remove saved browser data
  localStorage.removeItem("orders");

  // Restore fresh copy of starter orders
  orders = structuredClone(sampleOrders);

  // Save reset data
  saveOrders();

  // Refresh display
  displayOrders();
  calculateRevenue();
  updateCounts();
}

resetButton.addEventListener("click", resetOrders);

// ===== LOAD ORDERS FROM LOCALSTORAGE =====
// TODO: Implement this function
// Steps:
// 1. Get 'orders' from localStorage
// 2. If exists, parse JSON and set to orders array
// 3. Call displayOrders() and calculateRevenue()

function loadOrders() {
  // Check if saved orders exist

  const savedOrders = localStorage.getItem("orders");

  // If localStorage has data, use it

  if (savedOrders) {
    orders = JSON.parse(savedOrders);
  }

  // Otherwise load default sample data
  else {
    orders = [...sampleOrders];

    saveOrders();
  }

  displayOrders();

  calculateRevenue();

  updateCounts();
}
// ===== SAVE ORDERS TO LOCALSTORAGE =====
// TODO: Implement this function
// Steps:
// 1. Convert orders array to JSON string
// 2. Save to localStorage with key 'orders'

function saveOrders() {
  // Convert array into JSON format

  const ordersJSON = JSON.stringify(orders);

  // Save data in browser storage

  localStorage.setItem("orders", ordersJSON);
}

// ===== FORM SUBMISSION =====

orderForm.addEventListener("submit", function (event) {
  // Step 1: Prevent page reload

  event.preventDefault();

  // Step 2: Get values from inputs

  const customerName = customerNameInput.value.trim();

  const items = orderItemsInput.value.trim();

  const total = parseFloat(orderTotalInput.value);

  // Step 3: Validate inputs

  if (customerName === "" || items === "" || isNaN(total)) {
    alert("Please enter valid order information");

    return;
  }

  // Step 4: Create order object

  const newOrder = {
    // Unique ID using current timestamp

    id: Date.now(),

    // Customer name

    customerName: customerName,

    // Items ordered

    items: items,

    // Total price

    total: total,

    // New orders start pending

    status: "pending",

    // Save creation time

    timestamp: new Date().toISOString(),
  };

  // Step 5: Add order to array

  orders.push(newOrder);

  // Step 6: Save to localStorage

  saveOrders();

  // Step 7: Clear form

  orderForm.reset();

  // Step 8: Update display

  displayOrders();

  calculateRevenue();

  updateCounts();
});

// ===== DISPLAY ORDERS =====
// TODO: Implement this function

function displayOrders() {
  // Clear previous HTML

  pendingContainer.innerHTML = "";

  completedContainer.innerHTML = "";

  // Get pending orders

  const pendingOrders = orders.filter((order) => order.status === "pending");

  // Get completed orders

  const completedOrders = orders.filter(
    (order) => order.status === "completed",
  );

  // Display pending orders

  if (pendingOrders.length === 0) {
    pendingContainer.innerHTML = "<p>No pending orders</p>";
  } else {
    pendingOrders.forEach((order) => {
      pendingContainer.appendChild(createOrderCard(order));
    });
  }

  // Display completed orders

  if (completedOrders.length === 0) {
    completedContainer.innerHTML = "<p>No completed orders</p>";
  } else {
    completedOrders.forEach((order) => {
      completedContainer.appendChild(createOrderCard(order));
    });
  }
}

// ===== CREATE ORDER CARD HTML =====

function createOrderCard(order) {
  // Create card element

  const card = document.createElement("div");

  card.className = "order-card";

  // Add completed styling

  if (order.status === "completed") {
    card.className += " completed";
  }

  // Format timestamp

  const orderTime = new Date(order.timestamp).toLocaleTimeString();

  // Create card content

  card.innerHTML = `


        <h4>
            Order #${order.id.toString().slice(-4)}
        </h4>


        <p>
            Customer: ${order.customerName}
        </p>


        <p>
            Items: ${order.items}
        </p>


        <p class="total">
            $${order.total.toFixed(2)}
        </p>


        <p>
            Time: ${orderTime}
        </p>



        ${
          order.status === "pending"
            ? `<button 
                class="complete-btn"
                onclick="markOrderComplete(${order.id})">
                Mark Complete
            </button>`
            : `<p class="done">
                ✅ Completed
            </p>`
        }


    `;

  return card;
}

// ===== MARK ORDER COMPLETE =====

function markOrderComplete(orderId) {
  console.log("Marking order complete:", orderId);

  // Find matching order

  const order = orders.find((order) => order.id === orderId);

  // Check order exists

  if (!order) {
    console.error("Order not found");

    return;
  }

  // Update status

  order.status = "completed";

  // Save changes

  saveOrders();

  // Refresh display

  displayOrders();

  calculateRevenue();

  updateCounts();
}

// ===== CALCULATE REVENUE =====

function calculateRevenue() {
  // Get completed orders only

  const completedOrders = orders.filter(
    (order) => order.status === "completed",
  );

  // Add totals together

  const revenue = completedOrders.reduce((sum, order) => sum + order.total, 0);

  // Display currency

  revenueEl.textContent = `$${revenue.toFixed(2)}`;
}

// ===== UPDATE ORDER COUNTS =====

function updateCounts() {
  // Count pending orders

  const pending = orders.filter((order) => order.status === "pending").length;

  // Count completed orders

  const completed = orders.filter(
    (order) => order.status === "completed",
  ).length;

  // Update HTML

  pendingCountEl.textContent = pending;

  completedCountEl.textContent = completed;
}

// ===== INITIALIZE APP =====

loadOrders();

// ============================================
// HINTS FOR DEBUGGING
// ============================================
//
// If form reloads page:
//   - Make sure event.preventDefault() is FIRST line in submit handler
//
// If orders don't save:
//   - Check localStorage in DevTools (Application tab)
//   - Make sure you're calling saveOrders() after changes
//
// If revenue shows NaN:
//   - Make sure you used parseFloat() when creating order
//   - Make sure reduce() has initial value: reduce(..., 0)
//
// If Mark Complete doesn't work:
//   - Check that order ID is being passed correctly
//   - Add console.log to see if function is called
//
// If display doesn't update:
//   - Make sure you're calling displayOrders() after changes
//
// ============================================

window.markOrderComplete = markOrderComplete;
