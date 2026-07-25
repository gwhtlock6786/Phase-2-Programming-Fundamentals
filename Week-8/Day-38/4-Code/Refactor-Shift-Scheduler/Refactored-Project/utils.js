// ============================================
// SHIFT SCHEDULER UTILITIES
//
// Contains reusable functions:
// - Calculate shift hours
// - Calculate total hours
// - Filter employees
// - Get unique employees
// ============================================

// ============================================
// CALCULATE HOURS FOR ONE SHIFT
// ============================================
//
// Example:
// 08:00 - 16:00 = 8 hours
//
// ============================================

export function calculateShiftHours(shift) {
  // Split start time into array

  const startTime = shift.startTime.split(":");

  // Split end time into array

  const endTime = shift.endTime.split(":");

  // Convert strings into numbers

  const startHour = Number(startTime[0]);

  const endHour = Number(endTime[0]);

  // Calculate difference

  return endHour - startHour;
}

// ============================================
// CALCULATE TOTAL HOURS
// ============================================

export function calculateTotalHours(shiftsArray) {
  return shiftsArray.reduce(
    (total, shift) => {
      return total + calculateShiftHours(shift);
    },

    0,
  );
}

// ============================================
// GET UNIQUE EMPLOYEE NAMES
// ============================================

export function getUniqueEmployees(shiftsArray) {
  // Extract employee names

  const employeeNames = shiftsArray.map((shift) => shift.employee);

  // Remove duplicates

  return [...new Set(employeeNames)];
}

// ============================================
// FILTER SHIFTS BY EMPLOYEE
// ============================================

export function filterShiftsByEmployee(shiftsArray, employee) {
  return shiftsArray.filter((shift) => shift.employee === employee);
}
