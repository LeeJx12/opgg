
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

export function getMinuteSecond(time) {
    return `${(time / 60)}분 ${(time % 60)}초`;
}

export function getFormattedDate(time) {
    const today = new Date().getTime();
    let gap = (today - time) / 1000;

    const day = Math.round(gap/3600/24);
    const hour = Math.round(gap/3600);
    const min = Math.round(gap/60);
    const sec = gap % 60;

    let dateStr = '';
    if (day > 0) {
        dateStr = `${day}일 전`;
    } else if (hour > 0) {
        dateStr = `${hour}시간 전`;
    } else if (min > 0) {
        dateStr = `${min}분 전`;
    } else if (sec > 0) {
        dateStr = `${sec}초 전`;
    }

    return dateStr;
}

export function getFileNameFromUrl(url) {
    if (isEmpty(url)) return '';

    const idx = url.lastIndexOf('/');
    return idx !== -1 ? url.substring(idx, url.length).replace('.png', '') : '';
}

export function splitMulti(str, tokens){
    var tempChar = tokens[0];
    for(var i = 1; i < tokens.length; i++){
        str = str.split(tokens[i]).join(tempChar);
    }
    str = str.split(tempChar);
    return str;
}