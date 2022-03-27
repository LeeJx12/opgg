import '../redux/middleware';
import MiddlewareRegistry from '../redux/MiddlewareRegistry';
import '../search/middleware';
import { setItemList } from './actions';
import { GET_ITEM_LIST } from './actionTypes';

MiddlewareRegistry.register(store => next => action => {
    const { dispatch } = store;
    switch (action.type) {
    case GET_ITEM_LIST:
        getItemInfoList(action.keyword)
            .then(data => {
                dispatch(setItemList(data.data));
            })
            .catch(console.error);
        break;
    }

    return next(action);
});

function getItemInfoList() {
    return new Promise((resolve, reject) => {
        fetch(`http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/item.json`)
            .then(response => resolve(response.json()))
            .then(error => reject(JSON.stringify(error)))
            .catch(reject);
    });
}