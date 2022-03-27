import { GET_ITEM_LIST, SET_ITEM_LIST } from './actionTypes';

export function getItemList() {
    return {
        type: GET_ITEM_LIST,
    };
}

export function setItemList(itemList) {
    return {
        type: SET_ITEM_LIST,
        itemList: itemList
    }
}