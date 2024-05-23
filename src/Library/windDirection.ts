const windDirection = (windCode: number) => {
    if (windCode = 0) {
        return 'East'
    } else if(windCode < 90 && windCode != 0) {
        return 'North-East'
    } else if (windCode = 90) {
        return 'North'
    } else if (windCode > 90 && windCode < 180) {
        return 'North-West'
    } else if (windCode = 180) {
        return 'West'
    } else if (windCode > 180 && windCode < 270) {
        return 'South-West'
    } else if (windCode = 270) {
        return 'South'
    } else if (windCode > 270 && windCode < 360) {
        return 'South-East'
    } else {
        return 'Error!'
    }
}

export default windDirection