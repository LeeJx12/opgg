import React, { Component } from 'react';
import { connect } from 'react-redux';

class MatchList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const games = this.props._games;
        const gameRender = games.map((element, idx) => {
            const result = element.needRenew ? "REMAKE" : (element.isWin ? "WIN" : "LOSE");
            const { champion, createDate, gameId, gameLength, gameType, items, peak, spells, stats } = element;

            const spellRender = spells.map((spEl, idx) => (
                <div className="spell" key={idx}>
                    <div className="" style={{position: "relative"}}>
                        <img src={spEl.imageUrl} alt=""/>
                    </div>
                </div>
            ));

            const peakRender = peak.map((peEl, idx) => (
                <div className="rune" key={idx}>
                    <div className="" style={{position: "relative"}}>
                        <img src={peEl} alt=""/>
                    </div>
                </div>
            ));

            const itemRender = items.map((itEl, idx) => {
                <li key={idx}>
                    <div className="" style={{position: "relative"}}>
                        <img src={itEl.imageUrl} alt=""/>
                    </div>
                </li>
            });

            return (
                <li className="record-list" key={gameId}>
                    <div result="LOSE" className="record-div lose">
                        <div className="info">
                            <div className="type">솔랭</div>
                            <div className="" style={{position: "relative"}}>
                                <div className="time-stamp">{createDate}</div>
                            </div>
                            <div className="bar"></div>
                            <div className="game-result">{result}</div>
                            <div className="game-length">{gameLength}</div>
                        </div>
                        <div className="champion">
                            <div className="icon">
                                <a target="_blank" rel="noreferrer">
                                    <img src={champion.imageUrl}/>
                                </a>
                            </div>
                            <div className="spells">
                                { spellRender }
                            </div>
                            <div className="runes">
                                { peakRender }
                            </div>
                            <div className="name">가렌</div>
                        </div>
                        <div className="kda">
                            <div className="k-d-a"><span>{stats.general.kill}</span> / <span className="d">{stats.general.death}</span> / <span>{stats.general.assist}</span></div>
                            <div className="ratio"><span>{stats.general.kdaString}</span> 평점</div>
                        </div>
                        <div className="stats">
                            <div className="level">레벨 10</div>
                            <div className="cs">
                                <div className="" style={{position: "relative"}}>{stats.general.cs} ({stats.general.csPerMin})</div>CS
                            </div>
                            <div className="kill-participantion">
                                <div className="" style={{position: "relative"}}>킬관여 {stats.general.contributionForKillRate}</div>
                            </div>
                        </div>
                        <div className="items">
                            <div>
                                <div className="item">
                                    <ul>
                                        { itemRender }
                                    </ul>
                                    <div>
                                        <div className="ward">
                                            <div className="" style={{position: "relative"}}><img
                                                    src="https://opgg-static.akamaized.net/images/lol/item/3340.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                    alt=""/></div>
                                        </div>
                                        <div className="build">
                                            <div className="" style={{position: "relative"}}><button><img
                                                        src="https://s-lol-web.op.gg/static/images/icon/common/icon-buildred-p.png?v=1648211565552"
                                                        alt=""/></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="control"><img
                                    src="./resource/image/icon-ward-red.png?v=1648211565552"
                                    alt=""/> 제어 와드 2</div>
                        </div>
                        <div className="participants">
                            <ul>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Nasus.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/바리스타룰스" target="_blank"
                                            rel="noreferrer">바리스타룰스</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Poppy.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/쉬잇잇" target="_blank"
                                            rel="noreferrer">쉬잇잇</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Fizz.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/LastNightInEarth" target="_blank"
                                            rel="noreferrer">LastNightInEarth</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Kaisa.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/우리바텀힘내" target="_blank"
                                            rel="noreferrer">우리바텀힘내</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Rakan.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/거북이탕" target="_blank"
                                            rel="noreferrer">거북이탕</a></div>
                                </li>
                            </ul>
                            <ul>
                                <li className="summoner me">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Garen.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/쾌속자멸" target="_blank"
                                            rel="noreferrer">쾌속자멸</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Diana.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/SEC0ND" target="_blank"
                                            rel="noreferrer">SEC0ND</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Jhin.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/윤정수" target="_blank"
                                            rel="noreferrer">윤정수</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Zeri.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/슈슈슈발로마" target="_blank"
                                            rel="noreferrer">슈슈슈발로마</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/JarvanIV.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/채팅안치는살암" target="_blank"
                                            rel="noreferrer">채팅안치는살암</a></div>
                                </li>
                            </ul>
                        </div>
                        <div className="action"><button className="detail"><img
                                    src="https://s-lol-web.op.gg/static/images/icon/common/icon-viewdetail-red.png?v=1648211565552"
                                    alt=""/></button></div>
                    </div>
                </li>
            );
        });
        return (
            <ul className="record-list-div">
                { gameRender }
            </ul>
        );
    }
}

export function _matStateToProps(state) {
    const games = state['opgg/search'].matchList.games;

    return {
        _games: games,
    }
}

export default connect(_matStateToProps)(MatchList);