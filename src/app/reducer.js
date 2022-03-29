import '../search/reducer';
import '../match/reducer';
import '../winrate/reducer';
import ReducerRegistry from '../redux/ReduxRegistry.js';
import { SET_CHAMP_LIST, SET_ITEM_LIST, SET_SPELLS, SET_VERSION } from './actionTypes.js';
import { getTooltipDetail, isEmpty } from '../common/functions';
import PersistenceRegistry from '../redux/PersistenceRegistry';

function _getInitialState() {
    const persistedState = PersistenceRegistry.getPersistedState();

    let itemList = {};
    let champList = {};
    let spells = {};
    let version = persistedState ? persistedState['opgg/app']?.version || '0.0.0' : '0.0.0';

    return {
        itemList,
        champList,
        spells,
        version
    };
}

ReducerRegistry.register(
    'opgg/app',
    (state = _getInitialState(), action) => {
        switch (action.type) {
        case SET_ITEM_LIST:
            setItemList(state, action);
            break;
        case SET_CHAMP_LIST:
            setChampList(state, action);
            break;
        case SET_SPELLS:
            setSpells(state, action);
            break;
        case SET_VERSION:
            versionCheck(state, action);
            break;
        }

        return {
            ...state
        }
    }
);

PersistenceRegistry.register('opgg/app', {
    itemList: true,
    champList: true,
    spells: true,
    version: true
})

function setItemList(state, action) {
    state.itemList = getTooltipDetail(action.itemList);
}

function setChampList(state, action) {
    state.champList = action.champList;
}

function setSpells(state, action) {
    state.spells = getTooltipDetail(action.spells);
}

function versionCheck(state, action) {
    const nowVer = state.version.split('.');
    const svrVer = action.version.split('.');

    let needUpdate = false;
    for (let i=0; i<3; i++) {
        if (Number(svrVer[i]) > Number(nowVer[i])) {
            needUpdate = true;
            break;
        }
    }

    if(needUpdate) {
        state.version = action.version;
    }
}