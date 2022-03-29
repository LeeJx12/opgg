import { getKdaClassName, getWinRateClassName } from '../common/functions.js';
import ReducerRegistry from '../redux/ReduxRegistry.js';
import { SET_SUMMONER_MOSTINFO } from './actionTypes.js';

function _getInitialState() {
    let champList = [];
    let recentList = [];

    return {
        champList,
        recentList
    }
}

ReducerRegistry.register(
    'opgg/winrate',
    (state = _getInitialState(), action) => {
        switch (action.type) {
        case SET_SUMMONER_MOSTINFO:
            parse(state, action);
            break;
        }

        return {
            ...state
        }
    }
);

function parse(state, action) {
    let champList = action.champList;
    let recentList = action.recentList;

    champList = mergeDuplicateList(champList);
    recentList = mergeDuplicateList(recentList)

    champList && champList.sort((a,b) => b.games - a.games);
    recentList && recentList.sort((a,b) => (b.wins + b.losses) - (a.wins + a.losses));

    champList.forEach(element => {
        const { assists, cs, deaths, games, id, imageUrl, key, kills, losses, name, rank, wins } = element;

        const kda = (( kills + assists ) / deaths).toFixed(2);
        const kdaClassName = getKdaClassName(kda);

        const winRate = Math.round((wins / games) * 100);
        const winRateClassName = getWinRateClassName(winRate);

        element.kda = kda;
        element.kdaCN = kdaClassName;
        element.winRate = winRate;
        element.winRateCN = winRateClassName;
    });

    recentList.forEach(element => {
        const { imageUrl, key, losses, wins, name } = element;
        element.winRate = Math.round((wins / (wins + losses)) * 100);
    })

    state.champList = champList;
    state.recentList = recentList;
}

function mergeDuplicateList(list) {
    if (!list || list.length === 0) return list;

    const items = {};
    const columns = Object.keys(list[0]);

    list.forEach(element => {
        if (!items[element.id]) {
            items[element.id] = element;
        } else {
            const orgItem = items[element.id];

            for (let i=0; i<columns.length; i++) {
                const key = columns[i];
                if ("id" !== key && "rank" !== key) {
                    if (typeof orgItem[key] === 'Number') {
                        orgItem[key] += element[key];
                    }
                }
            }
        }
    });

    const newList = [];
    Object.keys(items).forEach(key => {
        newList.push(items[key]);
    });

    newList.forEach(item => {
        item.kills = Number((item.kills / item.games).toFixed(1));
        item.deaths = Number((item.deaths / item.games).toFixed(1));
        item.assists = Number((item.assists / item.games).toFixed(1));

        if (item.deaths === 0) item.deaths = 0.1;
    })

    return newList;
}