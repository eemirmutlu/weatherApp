const windSpeed = (windSpeed: number) => {
    if (windSpeed < 38) {
        return ' Gentle Wind'
    } else if(windSpeed > 39 && windSpeed < 60) {
        return ' Strong Wind'
    } else if (windSpeed > 61 && windSpeed < 73) {
        return ' Gentle Storm'
    } else if (windSpeed > 74 && windSpeed < 87) {
        return ' Strong Storm'
    } else if (windSpeed > 88 && windSpeed < 102) {
        return ' Storm'
    }
}

export default windSpeed