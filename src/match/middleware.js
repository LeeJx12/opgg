import MiddlewareRegistry from "../redux/MiddlewareRegistry";
import { ACTION_SEARCH } from "../search";
import { setSummonerMatchList } from "./actions";

MiddlewareRegistry.register(store => next => action => {
    const { dispatch } = store;
    switch (action.type) {
    case ACTION_SEARCH:
        getSummonerMatchList(action.keyword)
            .then(result => {
                const promiseList = [];
                result.games.forEach(game => {
                    promiseList.push(getMatchDetail(action.keyword, game.gameId));
                });

                Promise.all(promiseList)
                    .then(details => {
                        result.games.forEach((game, idx) => {
                            game.teams = details[idx].teams;
                        })
                    })
                    .then(() => {
                        dispatch(setSummonerMatchList(result, store.getState()['opgg/app'].itemList, store.getState()['opgg/app'].spells))
                    })
            })
            //.catch(e => dispatch(summonerNotFound()));
        break;
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