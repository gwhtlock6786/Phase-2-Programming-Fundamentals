// ============================================
// ACTIVITY 1: BUILD SHIFT DATA STRUCTURE
// Restaurant Employee Shift Scheduler
// ============================================
//
// This file stores all employee shift information.
//
// Each shift object contains:
// - employee: Employee name
// - date: Shift date (ISO format YYYY-MM-DD)
// - startTime: Shift start time (24-hour format)
// - endTime: Shift end time (24-hour format)
// - role: Employee job position
//
// This data will be imported by other JavaScript files
// ============================================

const shifts = [
  // ========================================
  // MARIA - MANAGER SHIFTS
  // ========================================

  {
    employee: "Maria",
    date: "2026-07-27",
    startTime: "08:00",
    endTime: "16:00",
    role: "Manager",
  },

  {
    employee: "Maria",
    date: "2026-07-29",
    startTime: "08:00",
    endTime: "16:00",
    role: "Manager",
  },

  {
    employee: "Maria",
    date: "2026-07-31",
    startTime: "10:00",
    endTime: "18:00",
    role: "Manager",
  },

  // ========================================
  // JAMES - COOK SHIFTS
  // ========================================

  {
    employee: "James",
    date: "2026-07-27",
    startTime: "11:00",
    endTime: "19:00",
    role: "Cook",
  },

  {
    employee: "James",
    date: "2026-07-28",
    startTime: "12:00",
    endTime: "20:00",
    role: "Cook",
  },

  {
    employee: "James",
    date: "2026-07-30",
    startTime: "15:00",
    endTime: "23:00",
    role: "Cook",
  },

  // ========================================
  // ALEX - SERVER SHIFTS
  // ========================================

  {
    employee: "Alex",
    date: "2026-07-28",
    startTime: "09:00",
    endTime: "15:00",
    role: "Server",
  },

  {
    employee: "Alex",
    date: "2026-07-29",
    startTime: "16:00",
    endTime: "22:00",
    role: "Server",
  },

  {
    employee: "Alex",
    date: "2026-07-31",
    startTime: "17:00",
    endTime: "23:00",
    role: "Server",
  },

  // ========================================
  // SAM - HOST SHIFTS
  // ========================================

  {
    employee: "Sam",
    date: "2026-07-27",
    startTime: "10:00",
    endTime: "14:00",
    role: "Host",
  },

  {
    employee: "Sam",
    date: "2026-07-30",
    startTime: "16:00",
    endTime: "21:00",
    role: "Host",
  },

  {
    employee: "Sam",
    date: "2026-08-01",
    startTime: "11:00",
    endTime: "17:00",
    role: "Host",
  },
];

// ============================================
// EXPORT SHIFT DATA
//
// Allows other JavaScript files to import
// and use this array.
//
// Example:
// import shifts from "./shift-data.js";
// ============================================

export default shifts;
