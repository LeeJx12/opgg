import MiddlewareRegistry from "../redux/MiddlewareRegistry";
import { ACTION_SEARCH } from "../search";
import { setMatchDetail, setSummonerMatchList } from "./actions";
import { GET_MATCH_DETAIL } from "./actionTypes";

MiddlewareRegistry.register(store => next => action => {
    const { dispatch } = store;
    switch (action.type) {
    case ACTION_SEARCH:
        getSummonerMatchList(action.keyword)
            .then(result => {
                dispatch(setSummonerMatchList(result))
            })
            //.catch(e => dispatch(summonerNotFound()));
        break;
    case GET_MATCH_DETAIL:
        getMatchDetail(action.summonerName, action.gameId)
            .then(result => {
                dispatch(setMatchDetail(result, action.summonerName))
            })
    }

    return next(action);
});

function getSummonerMatchList(summonerName = "") {
    return new Promise((resolve, reject) => {
        fetch(`https://codingtest.op.gg/api/summoner/${summonerName}/matches`)
            .then(response => resolve(response.json()))
            .then(error => reject(JSON.stringify(error)))
            .catch(reject);
    });
}

function getMatchDetail(summonerName, gameId = "") {
    return new Promise((resolve, reject) => {
        fetch(`https://codingtest.op.gg/api/summoner/${summonerName}/matchDetail/${gameId}`)
            .then(response => resolve(response.json()))
            .then(error => reject(JSON.stringify(error)))
            .catch(reject);
    });
}