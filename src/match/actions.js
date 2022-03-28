import { GET_MATCH_DETAIL, SET_MATCH_DETAIL, SET_SUMMONER_MATCHLIST } from './actionTypes';

export function setSummonerMatchList(data) {
    return {
        type: SET_SUMMONER_MATCHLIST,
        champs: data.champions,
        positions: data.positions,
        summary: data.summary,
        games: data.games
    }
}

export function getMatchDetail(summonerName, gameId) {
    return {
        type: GET_MATCH_DETAIL,
        summonerName: summonerName,
        gameId: gameId
    }
}

export function setMatchDetail(data, summonerName) {
    return {
        type: SET_MATCH_DETAIL,
        data: data,
        summonerName: summonerName
    }
}