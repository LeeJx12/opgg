import _ from 'lodash';
import PersistenceRegistry from '../redux/PersistenceRegistry.js';
import ReducerRegistry from '../redux/ReduxRegistry.js';
import { FOCUS_INPUT, BLUR_INPUT, KEYWORD_CHANGE, ACTION_SEARCH, SET_SUMMONER_BASICINFO, SUMMONER_NOT_FOUND, REMOVE_LIST, ADD_FAVORITE, SET_SUMMONER_MATCHLIST, SET_SUMMONER_MOSTINFO } from './actionTypes.js';
import { SEARCH_HISTORY_MAX_CNT } from '../constants';

function _getInitialState() {
    const persistedState = PersistenceRegistry.getPersistedState();
    let keyword = '';
    let isFocus = false;
    let srchHistory = persistedState ? persistedState['opgg/search']?.srchHistory || [] : [];
    let favoriteList = persistedState ? persistedState['opgg/search']?.favoriteList || [] : [];
    let summonerBasicInfo = {};
    let champList = [];
    let recentList = [];

    return {
        keyword,
        isFocus,
        srchHistory,
        favoriteList,
        summonerBasicInfo,
        champList,
        recentList,
    }
}

PersistenceRegistry.register('opgg/search', {
    srchHistory: true,
    favoriteList: true
});

ReducerRegistry.register(
    'opgg/search',
    (state = _getInitialState(), action) => {
        switch (action.type) {
        case FOCUS_INPUT:
            state.isFocus = true;
            return {
                ...state,
            };
        case BLUR_INPUT:
            state.isFocus = false;
            return {
                ...state,
            };
        case KEYWORD_CHANGE:
            state.keyword = action.keyword;
            return {
                ...state,
            };
        case ACTION_SEARCH:
            state.srchHistory = addSearchList(state.srchHistory, action.keyword);
            return {
                ...state,
            }
        case SET_SUMMONER_BASICINFO:
            state.summonerBasicInfo = action.summoner;
            return {
                ...state,
            }
        case SUMMONER_NOT_FOUND:
            state.summonerBasicInfo = {};
            return {
                ...state,
            }
        case REMOVE_LIST:
            if (action.tabType === 'RECENT') {
                state.srchHistory = [ ...state.srchHistory.slice(0,action.idx), ...state.srchHistory.slice(action.idx+1) ];
            } else {
                state.favoriteList = [ ...state.favoriteList.slice(0,action.idx), ...state.favoriteList.slice(action.idx+1) ];
            }
            return {
                ...state
            };
        case ADD_FAVORITE:
            state.favoriteList = addSearchList(state.favoriteList, action.keyword);
            return {
                ...state
            }
        case SET_SUMMONER_MOSTINFO:
            state.champList = action.mostinfo.champions;
            state.recentList = action.mostinfo.recentWinRate;
            return {
                ...state
            }
        }
        
        return state;
    }
);

function addSearchList(list, keyword) {
    if (list.indexOf(keyword) === -1) {
        list = [ keyword, ...list ];

        if (SEARCH_HISTORY_MAX_CNT === list.length) {
            list.pop();
        }
    } else {
        const idx = list.indexOf(keyword);
        list = [ ...list.slice(0,idx), ...list.slice(idx+1) ];
        list = [ keyword, ...list ];
    }

    return list;
}