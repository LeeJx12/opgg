import { SET_SUMMONER_MATCHLIST } from './actionTypes';

export function setSummonerMatchList(data, itemList) {
    return {
        type: SET_SUMMONER_MATCHLIST,
        champs: data.champions,
        positions: data.positions,
        summary: data.summary,
        games: data.games,
        itemList: itemList,
    }
}