import { SET_SUMMONER_MOSTINFO } from "./actionTypes";

export function setSummonerMostInfo(data) {
    return {
        type: SET_SUMMONER_MOSTINFO,
        champList: data.champions,
        recentList: data.recentWinRate
    }
}