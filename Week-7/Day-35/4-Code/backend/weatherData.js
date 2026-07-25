// ============================================
// WEATHER MOCK DATA
// This simulates data we would normally receive
// from a real weather API.
// ============================================

const weatherData = {
  austin: {
    name: "Austin",

    main: {
      temp: 85,
      humidity: 65,
    },

    weather: [
      {
        description: "partly cloudy",
      },
    ],

    wind: {
      speed: 12,
    },
  },

  dallas: {
    name: "Dallas",

    main: {
      temp: 92,
      humidity: 55,
    },

    weather: [
      {
        description: "sunny",
      },
    ],

    wind: {
      speed: 15,
    },
  },

  houston: {
    name: "Houston",

    main: {
      temp: 88,
      humidity: 75,
    },

    weather: [
      {
        description: "humid and cloudy",
      },
    ],

    wind: {
      speed: 10,
    },
  },

  "san antonio": {
    name: "San Antonio",

    main: {
      temp: 90,
      humidity: 60,
    },

    weather: [
      {
        description: "clear skies",
      },
    ],

    wind: {
      speed: 14,
    },
  },

  "fort worth": {
    name: "Fort Worth",

    main: {
      temp: 89,
      humidity: 58,
    },

    weather: [
      {
        description: "sunny",
      },
    ],

    wind: {
      speed: 13,
    },
  },

  "el paso": {
    name: "El Paso",

    main: {
      temp: 95,
      humidity: 30,
    },

    weather: [
      {
        description: "dry and sunny",
      },
    ],

    wind: {
      speed: 18,
    },
  },

  arlington: {
    name: "Arlington",

    main: {
      temp: 91,
      humidity: 57,
    },

    weather: [
      {
        description: "mostly sunny",
      },
    ],

    wind: {
      speed: 11,
    },
  },

  "corpus christi": {
    name: "Corpus Christi",

    main: {
      temp: 87,
      humidity: 78,
    },

    weather: [
      {
        description: "coastal breeze",
      },
    ],

    wind: {
      speed: 20,
    },
  },

  plano: {
    name: "Plano",

    main: {
      temp: 90,
      humidity: 56,
    },

    weather: [
      {
        description: "partly cloudy",
      },
    ],

    wind: {
      speed: 12,
    },
  },

  laredo: {
    name: "Laredo",

    main: {
      temp: 97,
      humidity: 35,
    },

    weather: [
      {
        description: "hot and sunny",
      },
    ],

    wind: {
      speed: 16,
    },
  },

  lubbock: {
    name: "Lubbock",

    main: {
      temp: 86,
      humidity: 40,
    },

    weather: [
      {
        description: "windy",
      },
    ],

    wind: {
      speed: 22,
    },
  },

  garland: {
    name: "Garland",

    main: {
      temp: 89,
      humidity: 59,
    },

    weather: [
      {
        description: "partly cloudy",
      },
    ],

    wind: {
      speed: 13,
    },
  },
};

// Export data so server.js can use it

module.exports = weatherData;
