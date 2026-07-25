// ============================================
// ORDER TRACKER v2 - REFACTORED
// Day 37 - Phase 2 Week 8
// ============================================

// Import starter data

import sampleOrders from "./sample-orders.js";

console.log("order data" + sampleOrders);

// Import utility functions

import {
  saveOrders,
  loadStoredOrders,
  createOrder,
  validateOrder,
  calculateRevenue,
  countOrders,
  formatCurrency,
  formatTime,
  ORDER_STATUS,
} from "./utils.js";

// ============================================
// DATA
// ============================================

let orders = structuredClone(sampleOrders);

// ============================================
// DOM ELEMENTS
// ============================================

const orderForm = document.getElementById("order-form");

const customerNameInput = document.getElementById("customer-name");

const orderItemsInput = document.getElementById("order-items");

const orderTotalInput = document.getElementById("order-total");

const pendingContainer = document.getElementById("pending-orders");

const completedContainer = document.getElementById("completed-orders");

const pendingCountEl = document.getElementById("pending-count");

const completedCountEl = document.getElementById("completed-count");

const revenueEl = document.getElementById("revenue");

const resetButton = document.getElementById("reset");

// ============================================
// UI REFRESH HELPER
// ============================================

// Updates everything after data changes

function refreshUI() {
  displayOrders();

  updateCounts();

  updateRevenue();
}

// ============================================
// LOAD DATA
// ============================================

function loadOrders() {
  const savedOrders = loadStoredOrders();

  if (savedOrders) {
    orders = savedOrders;
  }

  refreshUI();
}

// ============================================
// RESET APPLICATION
// ============================================

function resetOrders() {
  localStorage.removeItem("orders");

  orders = structuredClone(sampleOrders);

  saveOrders(orders);

  refreshUI();
}

resetButton.addEventListener("click", resetOrders);

// ============================================
// ADD ORDER FORM
// ============================================

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const customerName = customerNameInput.value.trim();

  const items = orderItemsInput.value.trim();

  const total = parseFloat(orderTotalInput.value);

  // Validate

  if (!validateOrder(customerName, items, total)) {
    alert("Please enter valid order information");

    return;
  }

  // Create order

  const newOrder = createOrder(customerName, items, total);

  // Add order

  orders.push(newOrder);

  // Save

  saveOrders(orders);

  // Clear form

  orderForm.reset();

  // Update screen

  refreshUI();
});

// ============================================
// DISPLAY ORDERS
// ============================================

function displayOrders() {
  pendingContainer.innerHTML = "";

  completedContainer.innerHTML = "";

  const pending = orders.filter(
    (order) => order.status === ORDER_STATUS.PENDING,
  );

  const completed = orders.filter(
    (order) => order.status === ORDER_STATUS.COMPLETED,
  );

  pending.forEach((order) => {
    pendingContainer.appendChild(createOrderCard(order));
  });

  completed.forEach((order) => {
    completedContainer.appendChild(createOrderCard(order));
  });
}

// ============================================
// CREATE CARD
// ============================================

function createOrderCard(order) {
  const card = document.createElement("div");

  card.className = "order-card";

  if (order.status === ORDER_STATUS.COMPLETED) {
    card.classList.add("completed");
  }

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


<p>
${formatCurrency(order.total)}
</p>


<p>
${formatTime(order.timestamp)}
</p>


${
  order.status === ORDER_STATUS.PENDING
    ? `
<button onclick="markOrderComplete(${order.id})">
Mark Complete
</button>
`
    : `
<p>
✅ Completed
</p>
`
}


`;

  return card;
}

// ============================================
// COMPLETE ORDER
// ============================================

function markOrderComplete(id) {
  const order = orders.find((order) => order.id === id);

  if (!order) {
    return;
  }

  order.status = ORDER_STATUS.COMPLETED;

  saveOrders(orders);

  refreshUI();
}

// ============================================
// UPDATE REVENUE
// ============================================

function updateRevenue() {
  const revenue = calculateRevenue(orders);

  revenueEl.textContent = formatCurrency(revenue);
}

// ============================================
// UPDATE COUNTS
// ============================================

function updateCounts() {
  pendingCountEl.textContent = countOrders(orders, ORDER_STATUS.PENDING);

  completedCountEl.textContent = countOrders(orders, ORDER_STATUS.COMPLETED);
}

// ============================================
// START APP
// ============================================

loadOrders();

window.markOrderComplete = markOrderComplete;
