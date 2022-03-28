
export function getKdaClassName(kda) {
    let className = "kda-default";
    if (kda >= 3 && kda < 4) {
        className += " kda-o3";
    } else if (kda >= 4 && kda < 5) {
        className += " kda-o4";
    } else if (kda > 5) {
        className += " kda-o5";
    }

    return className;
}

export function getWinRateClassName(winRate) {
    let className = "win-rate-default";
    if (winRate >= 60) {
        className += " win-rate-o60";
    }

    return className;
}

export function getAvgPointClassName(avgPoint) {
    let className = "avg-point-default";
    if (avgPoint >= 60) {
        className += " avg-point-o60";
    }

    return className;
}

export function isEmpty(obj) {
    if (!obj) return true;
    if (typeof obj === 'object' && Object.keys(obj).length === 0) return true;
    if (typeof obj === 'string' && '' === obj) return true;

    return false;
}