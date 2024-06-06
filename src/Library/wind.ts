const wind = (windSpeed: number) => {
    if (windSpeed < 1) {
        return {
            icon: 'wind-beaufort-0', // Calm
            description: 'Calm'
        }
    } else if (windSpeed >= 1 && windSpeed <= 5) {
        return {
            icon: 'wind-beaufort-1', // Light air
            description: 'Light air'
        }
    } else if (windSpeed >= 6 && windSpeed <= 11) {
        return {
            icon: 'wind-beaufort-2', // Light breeze
            description: 'Light breeze'
        }
    } else if (windSpeed >= 12 && windSpeed <= 19) {
        return {
            icon: 'wind-beaufort-3', // Gentle breeze
            description: 'Gentle breeze'
        }
    } else if (windSpeed >= 20 && windSpeed <= 28) {
        return {
            icon: 'wind-beaufort-4', // Moderate breeze
            description: 'Moderate breeze'
        }
    } else if (windSpeed >= 29 && windSpeed <= 38) {
        return {
            icon: 'wind-beaufort-5', // Fresh breeze
            description: 'Fresh breeze'
        }
    } else if (windSpeed >= 39 && windSpeed <= 49) {
        return {
            icon: 'wind-beaufort-6', // Strong breeze
            description: 'Strong breeze'
        }
    } else if (windSpeed >= 50 && windSpeed <= 61) {
        return {
            icon: 'wind-beaufort-7', // Near gale
            description: 'Near gale'
        }
    } else if (windSpeed >= 62 && windSpeed <= 74) {
        return {
            icon: 'wind-beaufort-8', // Gale
            description: 'Gale'
        }
    } else if (windSpeed >= 75 && windSpeed <= 88) {
        return {
            icon: 'wind-beaufort-9', // Strong gale
            description: 'Strong gale'
        }
    } else if (windSpeed >= 89 && windSpeed <= 102) {
        return {
            icon: 'wind-beaufort-10', // Storm
            description: 'Storm'
        }
    } else if (windSpeed >= 103 && windSpeed <= 117) {
        return {
            icon: 'wind-beaufort-11', // Violent storm
            description: 'Violent storm'
        }
    } else if (windSpeed >= 118) {
        return {
            icon: 'wind-beaufort-12', // Hurricane
            description: 'Hurricane'
        }
    } else {
        return {
            icon: 'wind', // Default icon for unknown values
            description: 'Unknown'
        }
    }
}

export default wind;
