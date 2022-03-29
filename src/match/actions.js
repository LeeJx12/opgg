import { SET_SUMMONER_MATCHLIST, SET_TAB_TYPE } from './actionTypes';

export function setSummonerMatchList(data, itemList, spells) {
    return {
        type: SET_SUMMONER_MATCHLIST,
        champs: data.champions,
        positions: data.positions,
        summary: data.summary,
        games: data.games,
        itemList: itemList,
        spells: spells,
    }
}

export function setTabType(tabType) {
    return {
        type: SET_TAB_TYPE,
        tabType: tabType
    }
}