import MiddlewareRegistry from "../redux/MiddlewareRegistry";
import { ACTION_SEARCH } from "../search";
import { summonerNotFound } from "../search/actions";
import { setSummonerMostInfo } from "./actions";

MiddlewareRegistry.register(store => next => action => {
    const { dispatch } = store;
    switch (action.type) {
    case ACTION_SEARCH:
        getSummonerMostInfo(action.keyword)
            .then(result => {
                dispatch(setSummonerMostInfo(result))
            })
            //.catch(e => dispatch(summonerNotFound()));
        break;
    }

    return next(action);
});

function getSummonerMostInfo(summonerName = "") {
    return new Promise((resolve, reject) => {
        fetch(`https://codingtest.op.gg/api/summoner/${summonerName}/mostInfo`)
            .then(response => resolve(response.json()))
            .then(error => reject(JSON.stringify(error)))
            .catch(reject);
    });
}