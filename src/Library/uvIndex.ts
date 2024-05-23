const uvIndex = (sunCode: number) => {
    switch (sunCode) {
        case 1:
            return {
                description: "No protedction required.",
                icon: "uv-index-1",
            }
        case 2:
            return {
                description: "No protedction required.",
                icon: "uv-index-2",
            }
        case 3:
            return {
                description: "No protedction required.",
                icon: "uv-index-3",
            }
        case 4:
            return {
                description: "No protedction required.",
                icon: "uv-index-4",
            }
        case 5:
            return {
                description: "No protedction required.",
                icon: "uv-index-5"
            }
        case 6:
            return {
                description: "Protedction required.",
                icon: "uv-index-6",
            }
        case 7:
            return {
                description: "Protedction required.",
                icon: "uv-index-7",
            }
        case 8:
            return {
                description: "Protedction required.",
                icon: "uv-index-8",
            }
        case 9:
            return {
                description: "Protedction required.",
                icon: "uv-index-9",
            }
        case 10:
            return {
                description: "Protedction required.",
                icon: "uv-index-10"
            }
        case 11:
            return {
                description: 'Protedction required.',
                icon: 'uv-index-11',
            }
        default:
            return {
                description: 'No protedction required.',
                icon: 'uv-index',
            }
    }
}

export default uvIndex