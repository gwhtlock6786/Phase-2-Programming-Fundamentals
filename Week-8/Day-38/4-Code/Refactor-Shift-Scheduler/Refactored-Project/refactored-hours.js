// ============================================
// SHIFT SCHEDULER APP - REFACTORED
//
// Responsibilities:
// - DOM interaction
// - Event handling
// - Display updates
// ============================================

// Import shift data

import shifts from "../shift-data.js";

// Import utility functions

import {
  calculateShiftHours,
  calculateTotalHours,
  getUniqueEmployees,
  filterShiftsByEmployee,
} from "./utils.js";

// ============================================
// DOM REFERENCES
// ============================================

const employeeDropdown = document.getElementById("employee-filter");

const tableBody = document.getElementById("shift-table-body");

const totalHoursDisplay = document.getElementById("total-hours");

// ============================================
// UPDATE TOTAL HOURS
// ============================================

function updateTotalHours(shiftsArray) {
  const totalHours = calculateTotalHours(shiftsArray);

  totalHoursDisplay.textContent = `${totalHours} Hours`;
}

// ============================================
// DISPLAY SHIFTS TABLE
// ============================================

function displayShifts(shiftsArray) {
  // Remove existing rows

  tableBody.innerHTML = "";

  // Loop through shifts

  shiftsArray.forEach((shift) => {
    // Create table row

    const row = document.createElement("tr");

    // Calculate hours

    const hours = calculateShiftHours(shift);

    // Add HTML

    row.innerHTML = `

                <td>${shift.employee}</td>

                <td>${shift.date}</td>

                <td>${shift.startTime}</td>

                <td>${shift.endTime}</td>

                <td>${shift.role}</td>

                <td>${hours}</td>

            `;

    // Add row to table

    tableBody.appendChild(row);
  });

  // Update total

  updateTotalHours(shiftsArray);
}

// ============================================
// CREATE EMPLOYEE DROPDOWN
// ============================================

function populateEmployeeDropdown() {
  // Get unique employees

  const employees = getUniqueEmployees(shifts);

  // Add default option

  employeeDropdown.innerHTML = `

        <option value="all">
            All Employees
        </option>

    `;

  // Add employees

  employees.forEach((employee) => {
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

  // Show all

  if (selectedEmployee === "all") {
    displayShifts(shifts);

    return;
  }

  // Filter data

  const filteredShifts = filterShiftsByEmployee(shifts, selectedEmployee);

  // Display filtered results

  displayShifts(filteredShifts);
});

// ============================================
// INITIALIZE APPLICATION
// ============================================

populateEmployeeDropdown();

displayShifts(shifts);
