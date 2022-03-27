import ReducerRegistry from '../redux/ReduxRegistry.js';
import { SET_ITEM_LIST } from './actionTypes.js';

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
            state.itemList = action.itemList;
            return {
                ...state
            }
        }

        return state;
    }
);