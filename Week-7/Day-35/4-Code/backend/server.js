// ============================================
// WEATHER DASHBOARD API SERVER
// ============================================

// Import Express
const express = require("express");

// Import CORS
// Allows our frontend to communicate with API
const cors = require("cors");

// Import weather data
const weatherData = require("./weatherData");

// Create Express application
const app = express();

// Port number
const PORT = 3000;

// ============================================
// MIDDLEWARE
// ============================================

// Allow frontend requests

app.use(cors());

// Allow JSON requests

app.use(express.json());

// ============================================
// TEST ROUTE
// ============================================

app.get("/", (req, res) => {
  res.send("Weather API Server Running");
});

// ============================================
// WEATHER ENDPOINT
//
// Example:
// /api/weather?city=austin
// ============================================

app.get("/api/weather", (req, res) => {
  // Get city from query parameter

  const city = req.query.city;

  // Validate that city exists

  if (!city) {
    return res.status(400).json({
      error: "City name required",
    });
  }

  // Convert input to lowercase
  // so searches are not case sensitive.

  const cityKey = city.toLowerCase();

  // Search mock database

  const weather = weatherData[cityKey];

  // If city does not exist

  if (!weather) {
    return res.status(404).json({
      error: `Weather data not found for ${city}`,
    });
  }

  // Send weather data

  res.json(weather);
});

// ============================================
// START SERVER
// ============================================

app.listen(PORT, () => {
  console.log(`Weather API running on http://localhost:${PORT}`);
});
