import { 
    FOCUS_INPUT,
    BLUR_INPUT,
    KEYWORD_CHANGE,
    ACTION_SEARCH,
    SET_SUMMONER_BASICINFO,
    SET_SUMMONER_MOSTINFO,
    SUMMONER_NOT_FOUND,
    REMOVE_LIST,
    ADD_FAVORITE,
    SET_SUMMONER_MATCHLIST,
} from "./actionTypes";

export function onFocusInput() {
    return {
        type: FOCUS_INPUT
    };
}

export function onBlurInput() {
    return {
        type: BLUR_INPUT
    };
}

export function onKeywordChange(keyword) {
    return {
        type: KEYWORD_CHANGE,
        keyword: keyword
    };
}

export function onSearch(keyword) {
    return {
        type: ACTION_SEARCH,
        keyword: keyword
    }
}

export function setSummonerBasicInfo(summoner) {
    return {
        type: SET_SUMMONER_BASICINFO,
        summoner: summoner
    }
}

export function summonerNotFound() {
    return {
        type: SUMMONER_NOT_FOUND,
    }
}

export function removeList(idx, tabType) {
    return {
        type: REMOVE_LIST,
        idx: idx,
        tabType: tabType
    }
}

export function addFavorite(keyword) {
    return {
        type: ADD_FAVORITE,
        keyword: keyword
    }
}