import MiddlewareRegistry from "../redux/MiddlewareRegistry";
import { setSummonerBasicInfo, setSummonerMatchList, setSummonerMostInfo, summonerNotFound } from "./actions";
import { ACTION_SEARCH } from "./actionTypes";


MiddlewareRegistry.register(store => next => action => {
    switch (action.type) {
    case ACTION_SEARCH:
        getSearchDatas(store, action)
        break;
    }

    return next(action);
});

function getSearchDatas(store, action) {
    const { dispatch } = store;
    Promise.all([getSummonerBasicInfo(action.keyword), getSummonerMostInfo(action.keyword), getSummonerMatchList(action.keyword)])
        .then(results => {
            action.keyword = results[0].summoner.name;
            dispatch(setSummonerBasicInfo(results[0].summoner));
            dispatch(setSummonerMostInfo(results[1]));
            dispatch(setSummonerMatchList(results[2]));
        })
        .catch(e => dispatch(summonerNotFound()));
}

function getSummonerBasicInfo(summonerName = "") {
    return new Promise((resolve, reject) => {
        fetch(`https://codingtest.op.gg/api/summoner/${encodeURIComponent(summonerName)}`)
        .then(response => resolve(response.json()))
        .then(error => reject(JSON.stringify(error)))
        .catch(reject);
    });
}

function getSummonerMostInfo(summonerName = "") {
    return new Promise((resolve, reject) => {
        fetch(`https://codingtest.op.gg/api/summoner/${summonerName}/mostInfo`)
            .then(response => resolve(response.json()))
            .then(error => reject(JSON.stringify(error)))
            .catch(reject);
    });
}

function getSummonerMatchList(summonerName = "") {
    return new Promise((resolve, reject) => {
        fetch(`https://codingtest.op.gg/api/summoner/${summonerName}/matches`)
            .then(response => resolve(response.json()))
            .then(error => reject(JSON.stringify(error)))
            .catch(reject);
    });
}