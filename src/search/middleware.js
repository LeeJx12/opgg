import { setSummonerMatchList } from "../match/actions";
import MiddlewareRegistry from "../redux/MiddlewareRegistry";
import { setSummonerMostInfo } from "../winrate/actions";
import { setSummonerBasicInfo, summonerNotFound } from "./actions";
import { ACTION_SEARCH } from "./actionTypes";

MiddlewareRegistry.register(store => next => action => {
    const { dispatch } = store;
    switch (action.type) {
    case ACTION_SEARCH:
        getSummonerBasicInfo(action.keyword)
            .then(result => {
                dispatch(setSummonerBasicInfo(result.summoner))
            })
            .catch(e => dispatch(summonerNotFound()));
        break;
    }

    return next(action);
});

function getSummonerBasicInfo(summonerName = "") {
    return new Promise((resolve, reject) => {
        fetch(`https://codingtest.op.gg/api/summoner/${encodeURIComponent(summonerName)}`)
        .then(response => resolve(response.json()))
        .then(error => reject(JSON.stringify(error)))
        .catch(reject);
    });
}