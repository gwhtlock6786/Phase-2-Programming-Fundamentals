// ============================================
// ORDER TRACKER UTILITIES
// Day 37 Refactor
// ============================================
//
// This file contains reusable helper functions
// to keep app.js clean and organized.
//
// Functions moved here:
// - Local storage handling
// - Order calculations
// - Validation
// - Order creation
// ============================================

// ============================================
// CONSTANTS
// ============================================

// Status values used throughout the app

export const ORDER_STATUS = {
  PENDING: "pending",
  COMPLETED: "completed",
};

// ============================================
// LOCAL STORAGE FUNCTIONS
// ============================================

// Save orders into browser storage

export function saveOrders(orders) {
  // Convert array into JSON string

  const ordersJSON = JSON.stringify(orders);

  // Store data

  localStorage.setItem("orders", ordersJSON);
}

// Load orders from browser storage

export function loadStoredOrders() {
  // Get saved data

  const savedOrders = localStorage.getItem("orders");

  // If data exists convert back into array

  if (savedOrders) {
    return JSON.parse(savedOrders);
  }

  // If no data exists return null

  return null;
}

// ============================================
// ORDER CREATION
// ============================================

// Creates a new order object

export function createOrder(customerName, items, total) {
  return {
    // Unique ID

    id: Date.now(),

    // Customer name

    customerName,

    // Items ordered

    items,

    // Convert to number

    total,

    // New orders start pending

    status: ORDER_STATUS.PENDING,

    // Current timestamp

    timestamp: new Date().toISOString(),
  };
}

// ============================================
// VALIDATION
// ============================================

// Check if order information is valid

export function validateOrder(customerName, items, total) {
  // Check empty fields

  if (customerName === "" || items === "" || isNaN(total)) {
    return false;
  }

  return true;
}

// ============================================
// CALCULATIONS
// ============================================

// Calculate total completed revenue

export function calculateRevenue(orders) {
  // Get completed orders

  const completedOrders = orders.filter(
    (order) => order.status === ORDER_STATUS.COMPLETED,
  );

  // Add totals

  return completedOrders.reduce((sum, order) => sum + order.total, 0);
}

// Count orders by status

export function countOrders(orders, status) {
  return orders.filter((order) => order.status === status).length;
}

// ============================================
// FORMATTING HELPERS
// ============================================

// Format currency

export function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

// Format timestamp

export function formatTime(timestamp) {
  return new Date(timestamp).toLocaleTimeString();
}
