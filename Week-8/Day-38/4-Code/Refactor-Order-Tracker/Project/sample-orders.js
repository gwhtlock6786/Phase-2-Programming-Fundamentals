// ============================================
// ORDER TRACKER v1 - Sample Order Data
// Day 37 - Phase 2 Week 8
// ============================================
//
// This file contains sample restaurant orders
// for testing the Order Tracker application.
//
// Each order object contains:
// - id: Unique identifier
// - customerName: Customer who placed order
// - items: Food items ordered
// - total: Order price
// - status: pending or completed
// - timestamp: Order creation time
//
// This data can be imported into app.js
// for testing display, filtering, and revenue
// calculations.
// ============================================

const sampleOrders = [
  // ========================================
  // PENDING ORDERS
  // ========================================

  {
    id: 1001,
    customerName: "Sarah Johnson",
    items: "Classic Burger, Fries, Soda",
    total: 18.75,
    status: "pending",
    timestamp: "2026-07-25T12:15:00",
  },

  {
    id: 1002,
    customerName: "Michael Smith",
    items: "Chicken Sandwich, Salad",
    total: 16.5,
    status: "pending",
    timestamp: "2026-07-25T12:30:00",
  },

  {
    id: 1003,
    customerName: "Emily Davis",
    items: "Steak Dinner, Mashed Potatoes",
    total: 29.99,
    status: "pending",
    timestamp: "2026-07-25T12:45:00",
  },

  {
    id: 1004,
    customerName: "Robert Wilson",
    items: "Pizza, Garlic Bread, Drink",
    total: 22.5,
    status: "pending",
    timestamp: "2026-07-25T13:00:00",
  },

  {
    id: 1005,
    customerName: "Jessica Brown",
    items: "Caesar Salad, Soup",
    total: 13.99,
    status: "pending",
    timestamp: "2026-07-25T13:10:00",
  },

  // ========================================
  // COMPLETED ORDERS
  // ========================================

  {
    id: 1006,
    customerName: "David Miller",
    items: "Burger, Fries, Milkshake",
    total: 21.75,
    status: "completed",
    timestamp: "2026-07-25T11:30:00",
  },

  {
    id: 1007,
    customerName: "Amanda Wilson",
    items: "Grilled Chicken Plate",
    total: 17.99,
    status: "completed",
    timestamp: "2026-07-25T11:45:00",
  },

  {
    id: 1008,
    customerName: "Chris Taylor",
    items: "Fish Sandwich, Fries",
    total: 15.5,
    status: "completed",
    timestamp: "2026-07-25T12:00:00",
  },

  {
    id: 1009,
    customerName: "Lisa Anderson",
    items: "Pasta Dinner, Breadsticks",
    total: 24.25,
    status: "completed",
    timestamp: "2026-07-25T12:20:00",
  },

  {
    id: 1010,
    customerName: "James Martinez",
    items: "Tacos, Chips, Soda",
    total: 19.5,
    status: "completed",
    timestamp: "2026-07-25T12:40:00",
  },

  {
    id: 1011,
    customerName: "Maria Garcia",
    items: "Dessert Combo, Coffee",
    total: 11.25,
    status: "completed",
    timestamp: "2026-07-25T12:55:00",
  },
];

// ============================================
// EXPORT SAMPLE DATA
// Allows app.js to import this file
// ============================================

export default sampleOrders;
