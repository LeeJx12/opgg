import '../search/reducer';
import '../match/reducer';
import '../winrate/reducer';
import ReducerRegistry from '../redux/ReduxRegistry.js';
import { SET_ITEM_LIST } from './actionTypes.js';
import { isEmpty, splitMulti } from '../common/functions';

function _getInitialState() {
    let itemList = {};

    return {
        itemList
    };
}

ReducerRegistry.register(
    'opgg/app',
    (state = _getInitialState(), action) => {
        switch (action.type) {
        case SET_ITEM_LIST:
            setItemList(state, action);
            return {
                ...state
            }
        }

        return state;
    }
);

function setItemList(state, action) {
    const itemList = action;

    Object.keys(itemList).forEach(key => {
        const item = itemList[key];
        const desc = item.description;

        const tokens = desc.split('<br>');
        tokens = tokens.map(token => token.replace(/(<([^>]+)>)/ig, ''));

        const descList = [];
        for (let i=0; i<tokens.length; i++) {
            if (i !== 0) {
                descList.push('<br>');
            }
            if (!isEmpty(tokens[i])) {
                descList.push(tokens[i]);
            }
        }

        item.descList = descList;
    });

    state.itemList = itemList;
}