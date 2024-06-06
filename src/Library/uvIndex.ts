const uvIndex = (sunExposureSeconds: number) => {
    if (sunExposureSeconds < 3600) {
        return {
            description: "No protection required.",
            icon: "uv-index-1"
        };
    } else if (sunExposureSeconds >= 3600 && sunExposureSeconds < 7200) {
        return {
            description: "No protection required.",
            icon: "uv-index-2"
        };
    } else if (sunExposureSeconds >= 7200 && sunExposureSeconds < 10800) {
        return {
            description: "No protection required.",
            icon: "uv-index-3"
        };
    } else if (sunExposureSeconds >= 10800 && sunExposureSeconds < 14400) {
        return {
            description: "No protection required.",
            icon: "uv-index-4"
        };
    } else if (sunExposureSeconds >= 14400 && sunExposureSeconds < 18000) {
        return {
            description: "No protection required.",
            icon: "uv-index-5"
        };
    } else if (sunExposureSeconds >= 18000 && sunExposureSeconds < 21600) {
        return {
            description: "Protection required.",
            icon: "uv-index-6"
        };
    } else if (sunExposureSeconds >= 21600 && sunExposureSeconds < 25200) {
        return {
            description: "Protection required.",
            icon: "uv-index-7"
        };
    } else if (sunExposureSeconds >= 25200 && sunExposureSeconds < 28800) {
        return {
            description: "Protection required.",
            icon: "uv-index-8"
        };
    } else if (sunExposureSeconds >= 28800 && sunExposureSeconds < 32400) {
        return {
            description: "Protection required.",
            icon: "uv-index-9"
        };
    } else if (sunExposureSeconds >= 32400 && sunExposureSeconds < 36000) {
        return {
            description: "Protection required.",
            icon: "uv-index-10"
        };
    } else {
        return {
            description: "Protection required.",
            icon: "uv-index-11"
        };
    }
};

export default uvIndex;
