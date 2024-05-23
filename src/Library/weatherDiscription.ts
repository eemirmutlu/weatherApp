

const weatherCode = (code: number) => {
    switch (code) {
        case 0:
            return {
                description: "Clear Sky",
                icon: "clear-day",
            }
        case 1:
            return {
                description: "Mostly Clear",
                icon: "clear-day",
            }
        case 2:
            return {
                description: "Partly Cloudy",
                icon: "partly-cloudy-day",
            }
        case 3:
            return {
                description: "Overcast",
                icon: "overcast",
            }
        case 45:
            return {
                description: "Fog",
                icon: "fog-day"
            }
        case 48:
            return {
                description: "Depositing Rime Fog",
                icon: "fog-day",
            }
        case 51:
            return {
                description: "Light Drizzle",
                icon: "drizzle",
            }
        case 52:
            return {
                description: "Moderate Drizzle",
                icon: "drizzle",
            }
        case 55:
            return {
                description: "Heavy Drizzle",
                icon: "drizzle",
            }
        case 56:
            return {
                description: "Light Freezing Drizzle",
                icon: "drizzle",
            }
        case 57:
            return {
                description: "Heavy Freezing Drizzle",
                icon: "drizzle",
            }
        case 61:
            return {
                description: "Light Rain",
                icon: "rain",
            }
        case 63:
            return {
                description: "Moderate Rain",
                icon: "rain",
            }
        case 65:
            return {
                description: "Heavy Rain",
                icon: "rain",
            }
        case 66:
            return {
                description: "Light Freezing Rain",
                icon: "rain",
            }
        case 67:
            return {
                description: "Heavy Freezing Rain",
                icon: "rain",
            }
        case 71:
            return {
                description: "Light Snow",
                icon: "snow",
            }
        case 73:
            return {
                description: "Moderate Snow",
                icon: "snow",
            }
        case 75:
            return {
                description: "Heavy Snow",
                icon: "snow",
            }
        case 77:
            return {
                description: "Snow Grains",
                icon: "sleet",
            }
        case 80:
            return {
                description: "Light Rain Showers",
                icon: "rain",
            }
        case 81:
            return {
                description: "Moderate Rain Showers",
                icon: "rain",
            }
        case 82:
            return {
                description: "Heavy Rain Showers",
                icon: "rain",
            }
        case 85:
            return {
                description: "Light Snow Showers",
                icon: "snow",
            }
        case 86:
            return {
                description: "Heavy Snow Showers",
                icon: "snow",
            }
        case 95:
            return {
                description: "Thunderstorm",
                icon: "thunderstorms-rain",
            }
        case 96:
            return {
                description: "Thunderstorm with Light Hail",
                icon: "thunderstorms-snow",
            }
        case 99:
            return {
                description: "Thunderstorm with Heavy Hail",
                icon: "thunderstorms-snow",
            }
        default:
            break;
    }

}

export default weatherCode