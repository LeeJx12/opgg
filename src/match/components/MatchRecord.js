import React, { Component } from 'react';
import { connect } from 'react-redux';

class MatchRecord extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { kills, deaths, assists, wins=0, losses=0 } = this.props._summary;
        const champs = this.props._champs;
        const champRender = champs.map((element, idx) => {
            const winRate = Math.round((element.wins / (element.wins + element.losses)) * 100);
            let winRateCN = "win-rate-summary";
            if (winRate >= 60) winRateCN += " win-rate-o60";

            const kda = (( element.kills + element.assists ) / element.deaths).toFixed(2);
            let kdaCN = "avg-point-default";
            if (kda > 6) {
                kdaCN += " avg-point-o6";
            }

            return (
                <li key={idx}>
                    <div className="icon">
                        <img src={element.imageUrl} alt={element.name}/>
                    </div>
                    <div className="name">{element}</div>
                    <div className="win-lose">
                        <div className="" style={{position: "relative", display: "inline"}}>
                            <b className={winRateCN}>{winRate}%</b>
                        </div> ({element.wins}승 {element.losses}패)
                    </div>
                    <div className={kdaCN}>{kda} 평점</div>
                </li>
            );
        });

        const positions = this.props._positions;
        const positionRender = positions.map((element, idx) => {
            const roleRatio = Math.round(element.games / (wins + losses) * 100);
            const posWinRate = Math.round(element.wins / element.games * 100);
            return (
                <li key={idx}>
                    <div className="icon">
                        <img src={`./resource/image/icon-mostposition-${element.position.toLowerCase()}.png`} alt={element.position}/>
                    </div>
                    <div className="content">
                        <div className="name">{element.positionName}</div>
                        <div>
                            <span className="role-ratio"><b>{roleRatio}</b>%</span>
                            <span className="win-ratio">승률 <b>{posWinRate}</b>%</span>
                        </div>
                    </div>
                </li>
            );
        });

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
                                    <div className="recharts-wrapper"
                                        style={{position: "relative", cursor: "default", width: "90px", height: "90px"}}><svg
                                            className="recharts-surface" width="90" height="90" viewBox="0 0 90 90"
                                            version="1.1">
                                            <defs>
                                                <clipPath id="recharts3-clip">
                                                    <rect x="5" y="5" height="80" width="80"></rect>
                                                </clipPath>
                                            </defs>
                                            <g className="recharts-layer recharts-pie">
                                                <g className="recharts-layer recharts-pie-sector">
                                                    <path stroke="none" fill="#ee5a52" color="#ee5a52"
                                                        className="recharts-sector" d="M 45,0
                                                                A 45,45,0,
                                                                0,1,
                                                                78.10757598029093,75.47767072315834
                                                            L 67.07171732019395,65.31844714877224
                                                                        A 30,30,0,
                                                                        0,0,
                                                                        45,15 Z">
                                                    </path>
                                                </g>
                                                <g className="recharts-layer recharts-pie-sector">
                                                    <path stroke="none" fill="#1f8ecd" color="#1f8ecd"
                                                        className="recharts-sector" d="M 78.10757598029093,75.47767072315834
                                                            A 45,45,0,
                                                            1,1,
                                                            44.99999999999999,0
                                                        L 44.99999999999999,15
                                                                    A 30,30,0,
                                                                    1,0,
                                                                    67.07171732019395,65.31844714877224 Z">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg></div>
                                    <div className="text">63%</div>
                                </div>
                            </td>
                            <td className="kda">
                                <div className="k-d-a"><span>{kills}</span> / <span className="death">{deaths}</span> /
                                    <span>{assists}</span>
                                </div>
                                <div className="ratio"><span className="kda-ratio">{(( kills + assists ) / deaths).toFixed(2)}:1</span>
                                    <div className="" style={{position: "relative"}}><span
                                            className="kill-participantion">(49%)</span></div>
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
    const champs = state['opgg/search'].matchList.champions;
    const positions = state['opgg/search'].matchList.positions;
    const summary = state['opgg/search'].matchList.positions;

    return {
        _champs: champs,
        _positions: positions,
        _summary: summary
    }
}

export default connect(_matStateToProps)(MatchRecord);