import { getAvgPointClassName, getWinRateClassName } from '../common/functions.js';
import ReducerRegistry from '../redux/ReduxRegistry.js';
import { GET_MATCH_DETAIL, SET_MATCH_DETAIL, SET_SUMMONER_MATCHLIST } from './actionTypes';

function _getInitialState() {
    let champs = [];
    let positions = [];
    let summary = {};
    let games = [];

    return {
        champs,
        positions,
        summary,
        games,
    }
}

ReducerRegistry.register(
    'opgg/match',
    (state = _getInitialState(), action) => {
        switch (action.type) {
        case SET_SUMMONER_MATCHLIST:
            parse(state, action);
            break;
        case SET_MATCH_DETAIL:
            parseDetail(state, action);
            break;
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

    positions.forEach(element => {
        const roleRatio = Math.round(element.games / (summary.wins + summary.losses) * 100);
        const posWinRate = Math.round(element.wins / element.games * 100);

        element.roleRatio = roleRatio;
        element.posWinRate = posWinRate;
    })

    games.forEach(element => {
        const result = element.needRenew ? "REMAKE" : (element.isWin ? "WIN" : "LOSE");
        const { champion, createDate, gameId, gameLength, gameType, items, peak, spells, stats } = element;

        const wardImageUrl = "WIN" === result ? "./resource/image/icon-ward-blue.png" : "./resource/image/icon-ward-red.png";
        const wardCnt = stats.ward.sightWardsBought + stats.ward.visionWardsBought;

        const ward = items.pop();

        const buildIcon = "WIN" === result ? "./resource/image/icon-buildblue-p.png" : "./resource/image/icon-buildred-p.png";

        element.result = result;
        element.wardImageUrl = wardImageUrl;
        element.wardCnt = wardCnt;
        element.ward = ward;
        element.buildIcon = buildIcon;
        element.name = '';
        element.level = 0;
    })

    state.champs = champs;
    state.positions = positions;
    state.summary = summary;
    state.games = games;
    state.teams = {};
}

function parseDetail(state, action) {
    const game = action.data;
    const summonerName = action.summonerName;

    let found = game.teams[0].players.find(player => player.summonerName === summonerName);
    if (!found) found = game.teams[1].players.find(player => player.summonerName === summonerName);

    const trgtGame = state.games.find(g => g.gameId === game.gameId);
    trgtGame.level = found.champion.level;
    state.teams[game.gameId] = game.teams;
}