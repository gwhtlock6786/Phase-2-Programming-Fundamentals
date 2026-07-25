// ============================================
// SHIFT SCHEDULER APPLICATION
// Imports shift data and displays it
// ============================================

// Import shifts array from shift-data.js

import shifts from "../Activity-1/shift-data.js";

console.log("shift value ->" + shifts);

// ============================================
// DOM ELEMENT REFERENCES
// ============================================

const tableBody = document.getElementById("shift-table-body");

// ============================================
// DISPLAY SHIFTS FUNCTION
//
// Receives an array of shifts
// Creates table rows dynamically
// ============================================

function displayShifts(shiftsArray) {
  // Clear existing table rows first
  // Prevents duplicate data

  tableBody.innerHTML = "";

  // Loop through every shift object

  shiftsArray.forEach((shift) => {
    // Create a new table row

    const row = document.createElement("tr");

    // Add shift information into row

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


            <td class="role">
                ${shift.role}
            </td>


        `;

    // Add row to table body

    tableBody.appendChild(row);
  });
}

// ============================================
// INITIAL LOAD
// Display imported shift data
// ============================================

displayShifts(shifts);
