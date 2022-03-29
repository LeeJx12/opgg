import { GET_CHAMP_LIST, GET_ITEM_LIST, GET_SPELLS, GET_VERSION, SET_CHAMP_LIST, SET_ITEM_LIST, SET_SPELLS, SET_VERSION } from './actionTypes';

export function getItemList(version) {
    return {
        type: GET_ITEM_LIST,
        version: version
    };
}

export function setItemList(itemList) {
    return {
        type: SET_ITEM_LIST,
        itemList: itemList
    }
}

export function getChampList(version) {
    return {
        type: GET_CHAMP_LIST,
        version: version
    };
}

export function setChampList(champList) {
    return {
        type: SET_CHAMP_LIST,
        champList: champList
    }
}

export function getVersion() {
    return {
        type: GET_VERSION,
    }
}

export function setVersion(version) {
    return {
        type: SET_VERSION,
        version: version
    }
}

export function getSpells(version) {
    return {
        type: GET_SPELLS,
        version: version
    }
}

export function setSpells(spells) {
    return {
        type: SET_SPELLS,
        spells: spells
    }
}