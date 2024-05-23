const wind = (windCode: number) => {
    switch (windCode) {
        case 0:
            return {
                icon: 'wind-beaufort-0'
            }
        case 1:
            return {
                icon: "wind-beaufort-1",
            }
        case 2:
            return {
                icon: "wind-beaufort-2",
            }
        case 3:
            return {
                icon: "wind-beaufort-3",
            }
        case 4:
            return {
                icon: "wind-beaufort-4",
            }
        case 5:
            return {
                icon: "wind-beaufort-5"
            }
        case 6:
            return {
                icon: "wind-beaufort-6",
            }
        case 7:
            return {
                icon: "wind-beaufort-7",
            }
        case 8:
            return {
                icon: "wind-beaufort-8",
            }
        case 9:
            return {
                icon: "wind-beaufort-9",
            }
        case 10:
            return {
                icon: "wind-beaufort-10"
            }
        case 11:
            return {
                icon: 'wind-beaufort-11',
            }
        case 12:
            return {
                icon: 'wind-beaufort-12',
            }
        default:
            return {
                icon: 'wind',
            }
    }
}

export default wind