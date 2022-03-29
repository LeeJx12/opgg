import MiddlewareRegistry from '../redux/MiddlewareRegistry';
import '../redux/middleware';
import '../search/middleware';
import '../winrate/middleware';
import '../match/middleware';
import { setChampList, setItemList, setSpells, setVersion } from './actions';
import { GET_CHAMP_LIST, GET_ITEM_LIST, GET_SPELLS, GET_VERSION } from './actionTypes';

MiddlewareRegistry.register(store => next => action => {
    const { dispatch } = store;
    switch (action.type) {
    case GET_ITEM_LIST:
        getItemInfoList(action.version)
            .then(data => {
                dispatch(setItemList(data.data));
            })
            .catch(console.error);
        break;
    case GET_CHAMP_LIST:
        getChampionList(action.version)
            .then(data => {
                dispatch(setChampList(data.data));
            })
            .catch(console.error);
        break;
    case GET_SPELLS:
        getSpells(action.version)
            .then(data => {
                dispatch(setSpells(data.data));
            })
            .catch(console.error);
    case GET_VERSION:
        getVersion()
            .then(data => {
                dispatch(setVersion(data[0]))
            })
        break;
    }

    return next(action);
});

function getItemInfoList(version) {
    return new Promise((resolve, reject) => {
        fetch(`http://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`)
            .then(response => resolve(response.json()))
            .then(error => reject(JSON.stringify(error)))
            .catch(reject);
    });
}

function getChampionList(version) {
    return new Promise((resolve, reject) => {
        fetch(`http://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`)
            .then(response => resolve(response.json()))
            .then(error => reject(JSON.stringify(error)))
            .catch(reject);
    });
}

function getSpells(version) {
    return new Promise((resolve, reject) => {
        fetch(`http://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/summoner.json`)
            .then(response => resolve(response.json()))
            .then(error => reject(JSON.stringify(error)))
            .catch(reject);
    });
}

function getVersion() {
    return new Promise((resolve, reject) => {
        fetch(`https://ddragon.leagueoflegends.com/api/versions.json`)
            .then(response => resolve(response.json()))
            .then(error => reject(JSON.stringify(error)))
            .catch(reject);
    });
}