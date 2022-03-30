import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tooltip from 'react-tooltip-lite';
import { Cell, Pie, PieChart } from 'recharts';
import { LINE_NAMES } from '../../common/constants';
import { getAvgPointClassName, getFileNameFromUrl, getWinRateClassName } from '../../common/functions';

class MatchRecord extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { kills, deaths, assists, wins, losses, totalWinRate, killPart } = this.props._summary;
        const champs = this.props._champs;
        const champRender = champs.map((element, idx) => {
            return (
                <li key={idx}>
                    <div className="icon">
                        <img src={element.imageUrl} alt={element.name}/>
                    </div>
                    <div className="name">{element.name}</div>
                    <div className="win-lose">
                        <Tooltip
                            content="승률"
                            direction="up"
                            tagName="div"
                            className="toolTip"
                        >
                            <b className={element.winRateCN}>{element.winRate}%</b>
                        </Tooltip> ({element.wins}승 {element.losses}패)
                    </div>
                    <div className={element.kdaCN}>{element.kda} 평점</div>
                </li>
            );
        });

        const positions = this.props._positions;
        const positionRender = positions.map((element, idx) => {
            return (
                <li key={idx}>
                    <div className="icon">
                        <img src={`./resource/image/icon-mostposition-${element.position.toLowerCase()}.png`} alt={element.position}/>
                    </div>
                    <div className="content">
                        <div className="name">{LINE_NAMES[element.position]}</div>
                        <div>
                            <span className="role-ratio"><b>{element.roleRatio}</b>% </span>
                            <span className="win-ratio">승률 <b>{element.posWinRate}</b>%</span>
                        </div>
                    </div>
                </li>
            );
        });

        const pieData = [{"name": "wins", "value": wins}, {"name": "losses", "value": losses}];

        return (
            <div className="record-summary-div">
                <table>
                    <tbody>
                        <tr>
                            <td className="title" colSpan="2">{wins + losses}전 {wins}승 {losses}패</td>
                            <td className="most-champion" rowSpan="2">
                                <ul>
                                    { champRender }
                                </ul>
                            </td>
                            <td className="title">선호 포지션 (랭크)</td>
                        </tr>
                        <tr>
                            <td className="summary">
                                <div className="chart">
                                    <PieChart width={90} height={90}>
                                        <Pie data={pieData} startAngle={-270}
                                            color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={30} outerRadius={50} fill="#1f8ecd" >
                                            <Cell fill="#1f8ecd" />
                                            <Cell fill="#ee5a52"/>
                                        </Pie>
                                    </PieChart>
                                    <div className="text">{totalWinRate}%</div>
                                </div>
                            </td>
                            <td className="kda">
                                <div className="k-d-a"><span>{kills}</span> / <span className="death">{deaths}</span> /
                                    <span>{assists}</span>
                                </div>
                                <div className="ratio"><span className="kda-ratio">{(( kills + assists ) / deaths).toFixed(2)}:1</span>
                                    <Tooltip
                                        content="킬관여율"
                                        direction="up"
                                        tagName="div"
                                        className="toolTip"
                                    >
                                        <span className="kill-participantion">({killPart}%)</span>
                                    </Tooltip>
                                </div>
                            </td>
                            <td className="position-stats">
                                <ul>
                                    { positionRender }
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export function _matStateToProps(state) {
    const champList = state['opgg/app'].champList;
    const tabType = state['opgg/match'].tabType;
    let champs = state['opgg/match'].champs;
    const positions = state['opgg/match'].positions;
    let summary = state['opgg/match'].summary;
    const games = state['opgg/match'].games;

    let filtered = [];
    if ("SOLO" === tabType) {
        filtered = games.filter(game => "솔랭" === game.gameType);
    } else if ("FREE" === tabType) {
        filtered = games.filter(game => "자유 5:5 랭크" === game.gameType);
    }

    if ("ALL" != tabType) {
        summary = filtered.reduce((acc, value, idx, arr) => {
                const { stats } = value;
                const { general } = stats;

                acc.kills += general.kill;
                acc.assists += general.assist;
                acc.deaths += general.death;
                acc.wins += value.isWin ? 1 : 0;
                acc.losses += value.isWin ? 0 : 1;
                acc.totalKills += Number(general.contributionForKillRate.replace("%", ""));

                return acc;
            }, {
                kills: 0,
                assists: 0,
                deaths: 0,
                wins: 0,
                losses: 0,
                totalKills: 0,
            });
        summary.totalWinRate = Math.round(summary.wins / (summary.wins + summary.losses) * 100);
        summary.killPart = Math.round(summary.totalKills / filtered.length);

        champs = mergeDuplicateList(filtered, champList).sort((a,b) => b.games - a.games).slice(0, 3);
        champs.forEach(element => {
            const { wins, losses, kills, deaths, assists, imageUrl, name, id } = element;
    
            const winRate = Math.round((wins / (wins + losses)) * 100);
            const winRateClassName = getWinRateClassName(winRate);
    
            const kda = deaths === 0 ? 0 : (( kills + assists ) / deaths).toFixed(2);
            const kdaClassName = getAvgPointClassName(kda);
    
            element.winRate = winRate;
            element.winRateCN = winRateClassName;
            element.kda = kda;
            element.kdaCN = kdaClassName;
        })
    }

    return {
        _champs: champs,
        _positions: positions,
        _summary: summary,
        _tabType: tabType
    }
}

function mergeDuplicateList(list, champList) {
    if (!list || list.length === 0) return list;

    const items = {};
    const columns = Object.keys(list[0]);

    list.forEach(element => {
        if (!items[element.champion.imageUrl]) {
            items[element.champion.imageUrl] = {
                id : champList[getFileNameFromUrl(element.champion.imageUrl)].id,
                imageUrl: element.champion.imageUrl,
                games : 1,
                wins : element.isWin ? 1 : 0,
                losses: element.isWin ? 0 : 1,
                kills: element.stats.general.kill,
                deaths: element.stats.general.death,
                assists: element.stats.general.assist,
                name: champList[getFileNameFromUrl(element.champion.imageUrl)].name
            };
        } else {
            const orgItem = items[element.champion.imageUrl];

            orgItem.games++;
            if (element.isWin) {
                orgItem.wins++;
            } else {
                orgItem.losses++;
            }
            orgItem.kills += element.stats.general.kill;
            orgItem.deaths += element.stats.general.death;
            orgItem.assists += element.stats.general.assist;
        }
    });

    const newList = [];
    Object.keys(items).forEach(key => {
        newList.push(items[key]);
    });

    return newList;
}

export default connect(_matStateToProps)(MatchRecord);