import { getAvgPointClassName, getFileNameFromUrl, getFormattedDate, getMinuteSecond, getWinRateClassName, isEmpty } from '../common/functions.js';
import ReducerRegistry from '../redux/ReduxRegistry.js';
import { SET_SUMMONER_MATCHLIST, SET_TAB_TYPE } from './actionTypes';

function _getInitialState() {
    let champs = [];
    let positions = [];
    let summary = {};
    let games = [];
    let tabType = 'ALL';

    return {
        champs,
        positions,
        summary,
        games,
        tabType,
    }
}

ReducerRegistry.register(
    'opgg/match',
    (state = _getInitialState(), action) => {
        switch (action.type) {
        case SET_SUMMONER_MATCHLIST:
            parse(state, action);
            break;
        case SET_TAB_TYPE:
            state.tabType = action.tabType;
        }

        return {
            ...state
        }
    }
);

function parse(state, action) {
    let champs = action.champs;
    let positions = action.positions;
    let summary = action.summary;
    let games = action.games;
    let itemList = action.itemList;
    let spellList = action.spells;

    const totalWinRate = Math.round((summary.wins / (summary.wins + summary.losses)) * 100);
    summary.totalWinRate = totalWinRate;

    champs.forEach(element => {
        const { wins, losses, kills, deaths, assists, imageUrl, name, id } = element;

        const winRate = Math.round((wins / (wins + losses)) * 100);
        const winRateClassName = getWinRateClassName(winRate);

        const kda = (( kills + assists ) / deaths).toFixed(2);
        const kdaClassName = getAvgPointClassName(kda);

        element.winRate = winRate;
        element.winRateCN = winRateClassName;
        element.kda = kda;
        element.kdaCN = kdaClassName;
    })

    positions = mergeDuplicateList(positions);
    positions.forEach(element => {
        const roleRatio = Math.round(element.games / (summary.wins + summary.losses) * 100);
        const posWinRate = element.games === 0 ? 0 : Math.round(element.wins / element.games * 100);

        element.roleRatio = roleRatio;
        element.posWinRate = posWinRate;
    })

    let totalKills = 0;
    games.forEach(element => {
        const result = element.needRenew ? "REMAKE" : (element.isWin ? "WIN" : "LOSE");
        const { champion, createDate, gameId, gameLength, gameType, items, peak, spells, stats, summonerName } = element;

        const wardImageUrl = "WIN" === result ? "./resource/image/icon-ward-blue.png" : "./resource/image/icon-ward-red.png";
        const wardCnt = stats.ward.sightWardsBought + stats.ward.visionWardsBought;

        const ward = items.pop();
        const wardId = getFileNameFromUrl(ward.imageUrl);

        const buildIcon = "WIN" === result ? "./resource/image/icon-buildblue-p.png" : "./resource/image/icon-buildred-p.png";

        let found = element.teams[0].players.find(player => player.summonerName === summonerName);
        if (!found) found = element.teams[1].players.find(player => player.summonerName === summonerName);

        items.forEach(item => {
            const itemId = getFileNameFromUrl(item.imageUrl);

            if (!isEmpty(itemId)) {
                item.detail = itemList[itemId];
            }
        });

        spells.forEach(spell => {
            const spellId = getFileNameFromUrl(spell.imageUrl);

            if (!isEmpty(spellId)) {
                spell.detail = spellList[spellId];
            }
        });

        totalKills += stats.general.kill;

        element.result = result;
        element.wardImageUrl = wardImageUrl;
        element.wardCnt = wardCnt;
        element.ward = ward;
        element.wardDetail = itemList[wardId];
        element.buildIcon = buildIcon;
        element.name = getFileNameFromUrl(champion.imageUrl);
        element.level = found.champion.level;
        element.gameLength = getMinuteSecond(gameLength);
        element.createDate = getFormattedDate(createDate);
    })

    summary.killPart = Math.round((summary.kills + summary.assists) / totalKills * 100);

    state.champs = champs;
    state.positions = positions;
    state.summary = summary;
    state.games = games;
}

function mergeDuplicateList(list) {
    if (!list || list.length === 0) return list;

    const items = {};
    const columns = Object.keys(list[0]);

    list.forEach(element => {
        if (!items[element.position]) {
            items[element.position] = element;
        } else {
            const orgItem = items[element.position];

            orgItem.games += element.games;
            orgItem.wins += element.wins;
            orgItem.losses += element.losses;
            orgItem.roleRatio += element.roleRatio;
            orgItem.posWinRate = Math.round(orgItem.wins / orgItem.games * 100);
        }
    });

    const newList = [];
    Object.keys(items).forEach(key => {
        newList.push(items[key]);
    });

    return newList;
}