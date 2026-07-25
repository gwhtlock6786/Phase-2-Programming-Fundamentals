// ============================================
// ACTIVITY 4: SHIFT HOURS CALCULATOR
//
// Features:
// - Imports shift data
// - Displays schedule
// - Filters employees
// - Calculates hours
// - Updates totals
// ============================================

// ============================================
// IMPORT SHIFT DATA
// ============================================

import shifts from "../Activity-1/shift-data.js";

// ============================================
// DOM REFERENCES
// ============================================

const employeeDropdown = document.getElementById("employee-filter");

const tableBody = document.getElementById("shift-table-body");

const totalHoursDisplay = document.getElementById("total-hours");

// ============================================
// CALCULATE HOURS FUNCTION
//
// Converts start/end times into hours
//
// Example:
// 08:00 - 16:00 = 8 hours
// ============================================

function calculateShiftHours(shift) {
  // Split time strings

  const start = shift.startTime.split(":");

  const end = shift.endTime.split(":");

  // Convert hours into numbers

  const startHour = Number(start[0]);

  const endHour = Number(end[0]);

  // Calculate difference

  const hours = endHour - startHour;

  return hours;
}

// ============================================
// CALCULATE TOTAL HOURS
//
// Adds all shift hours together
// ============================================

function calculateTotalHours(shiftsArray) {
  const total = shiftsArray.reduce(
    (sum, shift) => {
      return sum + calculateShiftHours(shift);
    },

    0,
  );

  return total;
}

// ============================================
// UPDATE TOTAL HOURS DISPLAY
// ============================================

function updateTotalHours(shiftsArray) {
  const totalHours = calculateTotalHours(shiftsArray);

  totalHoursDisplay.textContent = `${totalHours} Hours`;
}

// ============================================
// DISPLAY SHIFTS
// ============================================

function displayShifts(shiftsArray) {
  // Clear existing rows

  tableBody.innerHTML = "";

  // Create rows

  shiftsArray.forEach((shift) => {
    const row = document.createElement("tr");

    const hours = calculateShiftHours(shift);

    row.innerHTML = `


                <td>
                    ${shift.employee}
                </td>


                <td>
                    ${shift.date}
                </td>


                <td>
                    ${shift.startTime}
                </td>


                <td>
                    ${shift.endTime}
                </td>


                <td>
                    ${shift.role}
                </td>


                <td>
                    ${hours}
                </td>


            `;

    tableBody.appendChild(row);
  });

  // Update total hours

  updateTotalHours(shiftsArray);
}

// ============================================
// CREATE DROPDOWN OPTIONS
// ============================================

function populateEmployeeDropdown() {
  // Get employee names

  const employeeNames = shifts.map((shift) => shift.employee);

  // Remove duplicates

  const uniqueEmployees = [...new Set(employeeNames)];

  // Add All Employees option

  const allOption = document.createElement("option");

  allOption.value = "all";

  allOption.textContent = "All Employees";

  employeeDropdown.appendChild(allOption);

  // Add employee options

  uniqueEmployees.forEach((employee) => {
    const option = document.createElement("option");

    option.value = employee;

    option.textContent = employee;

    employeeDropdown.appendChild(option);
  });
}

// ============================================
// FILTER EVENT
// ============================================

employeeDropdown.addEventListener("change", () => {
  const selectedEmployee = employeeDropdown.value;

  if (selectedEmployee === "all") {
    displayShifts(shifts);

    return;
  }

  const filteredShifts = shifts.filter(
    (shift) => shift.employee === selectedEmployee,
  );

  displayShifts(filteredShifts);
});

// ============================================
// INITIAL LOAD
// ============================================

populateEmployeeDropdown();

displayShifts(shifts);

// ============================================
// TESTING DATA
// ============================================

// Display all shifts

console.log("Restaurant Weekly Schedule:");

console.log(shifts);

// Display number of shifts

console.log(`Total shifts: ${shifts.length}`);

// Check first shift

console.log("First shift:", shifts[0]);
