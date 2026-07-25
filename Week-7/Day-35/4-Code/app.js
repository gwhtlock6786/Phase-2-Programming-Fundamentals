// ============================================
// WEATHER DASHBOARD APPLICATION
// Uses async/await fetch API
// ============================================

// API URL

const API_URL = "http://localhost:3000/api/weather";

// ============================================
// DOM REFERENCES
// ============================================

const cityInput = document.getElementById("city-input");

const searchButton = document.getElementById("search-btn");

const loadingMessage = document.getElementById("loading");

const errorMessage = document.getElementById("error-message");

const weatherContainer = document.getElementById("weather-container");

// ============================================
// SHOW LOADING
// ============================================

function showLoading() {
  loadingMessage.style.display = "block";
}

// ============================================
// HIDE LOADING
// ============================================

function hideLoading() {
  loadingMessage.style.display = "none";
}

// ============================================
// SHOW ERROR MESSAGE
// ============================================

function showError(message) {
  errorMessage.textContent = message;
}

// ============================================
// CLEAR OLD RESULTS
// ============================================

function clearResults() {
  weatherContainer.innerHTML = "";

  errorMessage.textContent = "";
}

// ============================================
// FETCH WEATHER DATA
// ============================================

async function getWeather(city) {
  try {
    // Show loading

    showLoading();

    // Clear previous results

    clearResults();

    console.log("Fetching weather for:", city);

    // Send request to API

    const response = await fetch(`${API_URL}?city=${city}`);

    // Check HTTP response

    if (!response.ok) {
      throw new Error("City not found");
    }

    // Convert response into JSON

    const data = await response.json();

    console.log("Weather received:", data);

    // Display weather

    displayWeather(data);
  } catch (error) {
    console.error("Weather Error:", error);

    showError(`Could not find weather for "${city}".`);
  } finally {
    // Runs after success OR error

    hideLoading();
  }
}

// ============================================
// DISPLAY WEATHER DATA
// ============================================

function displayWeather(data) {
  const roundedTemp = Math.round(data.main.temp);

  weatherContainer.innerHTML = `


        <div class="weather-card">


            <h2>
                ${data.name}
            </h2>



            <div class="weather-info">

                🌡 Temperature:
                ${roundedTemp}°F

            </div>




            <div class="weather-info">

                🌤 Conditions:
                ${data.weather[0].description}

            </div>





            <div class="weather-info">

                💧 Humidity:
                ${data.main.humidity}%

            </div>





            <div class="weather-info">

                💨 Wind:
                ${data.wind.speed} mph

            </div>



        </div>


    `;
}

// ============================================
// SEARCH BUTTON EVENT
// ============================================

searchButton.addEventListener("click", () => {
  const city = cityInput.value.trim();

  // Validate input

  if (city === "") {
    showError("Please enter a city name.");

    return;
  }

  getWeather(city.toLowerCase());
});

// ============================================
// ENTER KEY EVENT
// ============================================

cityInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    searchButton.click();
  }
});
