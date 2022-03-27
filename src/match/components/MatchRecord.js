import React, { Component } from 'react';

class MatchRecord extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="record-summary-div">
                <table>
                    <tbody>
                        <tr>
                            <td className="title" colSpan="2">20전 12승 7 패</td>
                            <td className="most-champion" rowSpan="2">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <img src="https://opgg-static.akamaized.net/images/lol/champion/Garen.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                alt="가렌"/>
                                        </div>
                                        <div className="name">가렌</div>
                                        <div className="win-lose">
                                            <div className="" style={{position: "relative", display: "inline"}}>
                                                <b className="win-rate-summary win-rate-o60">75%</b>
                                            </div> (3승 1 패)
                                        </div>
                                        <div className="avg-point-default avg-point-o6">3.21 평점</div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="https://opgg-static.akamaized.net/images/lol/champion/Malphite.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                alt="말파이트"/>
                                        </div>
                                        <div className="name">말파이트</div>
                                        <div className="win-lose">
                                            <div className="" style={{position: "relative", display: "inline"}}>
                                                <b className="win-rate-summary win-rate-o60">67%</b>
                                            </div> (2승 1 패)
                                        </div>
                                        <div className="avg-point-default">1.33 평점</div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="https://opgg-static.akamaized.net/images/lol/champion/Ahri.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                alt="아리"/>
                                        </div>
                                        <div className="name">아리</div>
                                        <div className="win-lose">
                                            <div className="" style={{position: "relative", display: "inline"}}>
                                                <b className="win-rate-summary">33%</b>
                                            </div> (1승 2 패)
                                        </div>
                                        <div className="avg-point-default">2.15 평점</div>
                                    </li>
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
                                <div className="k-d-a"><span>7.4</span> / <span className="death">6.3</span> /
                                    <span>6.8</span>
                                </div>
                                <div className="ratio"><span className="kda-ratio">2.25:1</span>
                                    <div className="" style={{position: "relative"}}><span
                                            className="kill-participantion">(49%)</span></div>
                                </div>
                            </td>
                            <td className="position-stats">
                                <ul>
                                    <li>
                                        <div className="icon"><img
                                                src="./resource/image/icon-mostposition-top.png?v=1648211565552"
                                                alt="TOP"/></div>
                                        <div className="content">
                                            <div className="name">탑</div>
                                            <div><span className="role-ratio"><b>47</b>%</span><span
                                                    className="win-ratio">승률 <b>75</b>%</span></div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon"><img
                                                src="./resource/image/icon-mostposition-mid.png?v=1648211565552"
                                                alt="MID"/></div>
                                        <div className="content">
                                            <div className="name">미드</div>
                                            <div><span className="role-ratio"><b>35</b>%</span><span
                                                    className="win-ratio">승률 <b>50</b>%</span></div>
                                        </div>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MatchRecord;