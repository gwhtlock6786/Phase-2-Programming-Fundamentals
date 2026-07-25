// ============================================
// ACTIVITY 3: EMPLOYEE FILTER DROPDOWN
//
// Imports shift data
// Creates employee dropdown
// Filters table based on selection
// ============================================

// ============================================
// IMPORT SHIFT DATA
// Pulls data from existing file
// ============================================

import shifts from "../Activity-1/shift-data.js";

// ============================================
// DOM ELEMENT REFERENCES
// ============================================

const tableBody = document.getElementById("shift-table-body");

const employeeFilter = document.getElementById("employee-filter");

// ============================================
// DISPLAY SHIFTS FUNCTION
//
// Receives an array
// Clears table
// Creates rows
// ============================================

function displayShifts(shiftsArray) {
  // Remove old table rows

  tableBody.innerHTML = "";

  // Loop through each shift

  shiftsArray.forEach((shift) => {
    // Create table row

    const row = document.createElement("tr");

    // Add shift data into row

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


        `;

    // Add row to table

    tableBody.appendChild(row);
  });
}

// ============================================
// CREATE EMPLOYEE DROPDOWN
//
// Gets unique employee names
// Adds options dynamically
// ============================================

function populateEmployeeDropdown() {
  // Create array of employee names

  const employeeNames = shifts.map((shift) => shift.employee);

  // Remove duplicate names using Set

  const uniqueEmployees = [...new Set(employeeNames)];

  // Add default option

  const allOption = document.createElement("option");

  allOption.value = "all";

  allOption.textContent = "All Employees";

  employeeFilter.appendChild(allOption);

  // Add employee options

  uniqueEmployees.forEach((employee) => {
    const option = document.createElement("option");

    option.value = employee;

    option.textContent = employee;

    employeeFilter.appendChild(option);
  });
}

// ============================================
// FILTER EVENT LISTENER
//
// Runs whenever dropdown changes
// ============================================

employeeFilter.addEventListener("change", () => {
  // Get selected employee

  const selectedEmployee = employeeFilter.value;

  // If All Employees selected

  if (selectedEmployee === "all") {
    displayShifts(shifts);

    return;
  }

  // Filter matching employee

  const filteredShifts = shifts.filter(
    (shift) => shift.employee === selectedEmployee,
  );

  // Display filtered results

  displayShifts(filteredShifts);
});

// ============================================
// INITIAL PAGE LOAD
// ============================================

// Create dropdown options

populateEmployeeDropdown();

// Display all shifts initially

displayShifts(shifts);
