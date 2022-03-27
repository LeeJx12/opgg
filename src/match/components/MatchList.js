import React, { Component } from 'react';

class MatchList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="record-list-div">
                <li className="record-list">
                    <div result="LOSE" className="record-div lose">
                        <div className="info">
                            <div className="type">솔랭</div>
                            <div className="" style={{position: "relative"}}>
                                <div className="time-stamp">5일 전</div>
                            </div>
                            <div className="bar"></div>
                            <div className="game-result">패배</div>
                            <div className="game-length">16분 1초</div>
                        </div>
                        <div className="champion">
                            <div className="icon"><a href="/champions/garen" target="_blank" rel="noreferrer"><img
                                        src="https://opgg-static.akamaized.net/images/lol/champion/Garen.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                        alt=""/></a></div>
                            <div className="spells">
                                <div className="spell">
                                    <div className="" style={{position: "relative"}}><img
                                            src="https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                </div>
                                <div className="spell">
                                    <div className="" style={{position: "relative"}}><img
                                            src="https://opgg-static.akamaized.net/images/lol/spell/SummonerDot.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                </div>
                            </div>
                            <div className="runes">
                                <div className="rune">
                                    <div className="" style={{position: "relative"}}><img
                                            src="https://opgg-static.akamaized.net/images/lol/perk/8010.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                </div>
                                <div className="rune">
                                    <div className="" style={{position: "relative"}}><img
                                            src="https://opgg-static.akamaized.net/images/lol/perkStyle/8400.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                </div>
                            </div>
                            <div className="name">가렌</div>
                        </div>
                        <div className="kda">
                            <div className="k-d-a"><span>0</span> / <span className="d">3</span> / <span>0</span></div>
                            <div className="ratio"><span>0.00:1</span> 평점</div>
                        </div>
                        <div className="stats">
                            <div className="level">레벨 10</div>
                            <div className="cs">
                                <div className="" style={{position: "relative"}}>127 (7.9)</div>CS
                            </div>
                            <div className="kill-participantion">
                                <div className="" style={{position: "relative"}}>킬관여 0%</div>
                            </div>
                        </div>
                        <div className="items">
                            <div>
                                <div className="item">
                                    <ul>
                                        <li>
                                            <div className="" style={{position: "relative"}}><img
                                                    src="https://opgg-static.akamaized.net/images/lol/item/6029.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                    alt=""/></div>
                                        </li>
                                        <li>
                                            <div className="" style={{position: "relative"}}><img
                                                    src="https://opgg-static.akamaized.net/images/lol/item/2031.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                    alt=""/></div>
                                        </li>
                                        <li></li>
                                        <li>
                                            <div className="" style={{position: "relative"}}><img
                                                    src="https://opgg-static.akamaized.net/images/lol/item/3006.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                    alt=""/></div>
                                        </li>
                                        <li>
                                            <div className="" style={{position: "relative"}}><img
                                                    src="https://opgg-static.akamaized.net/images/lol/item/1054.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                    alt=""/></div>
                                        </li>
                                        <li>
                                            <div className="" style={{position: "relative"}}><img
                                                    src="https://opgg-static.akamaized.net/images/lol/item/1042.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                    alt=""/></div>
                                        </li>
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
                <li className="record-list">
                    <div result="LOSE" className="record-div lose">
                        <div className="info">
                            <div className="type">자유 5:5 랭크</div>
                            <div className="" style={{position: "relative"}}>
                                <div className="time-stamp">5일 전</div>
                            </div>
                            <div className="bar"></div>
                            <div className="game-result">패배</div>
                            <div className="game-length">27분 28초</div>
                        </div>
                        <div className="champion">
                            <div className="icon"><a href="/champions/ahri" target="_blank" rel="noreferrer"><img
                                        src="https://opgg-static.akamaized.net/images/lol/champion/Ahri.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                        alt=""/></a></div>
                            <div className="spells">
                                <div className="spell">
                                    <div className="" style={{position: "relative"}}><img
                                            src="https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                </div>
                                <div className="spell">
                                    <div className="" style={{position: "relative"}}><img
                                            src="https://opgg-static.akamaized.net/images/lol/spell/SummonerDot.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                </div>
                            </div>
                            <div className="runes">
                                <div className="rune">
                                    <div className="" style={{position: "relative"}}><img
                                            src="https://opgg-static.akamaized.net/images/lol/perk/8112.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                </div>
                                <div className="rune">
                                    <div className="" style={{position: "relative"}}><img
                                            src="https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                </div>
                            </div>
                            <div className="name">아리</div>
                        </div>
                        <div className="kda">
                            <div className="k-d-a"><span>4</span> / <span className="d">11</span> / <span>8</span></div>
                            <div className="ratio"><span>1.09:1</span> 평점</div>
                        </div>
                        <div className="stats">
                            <div className="level">레벨 14</div>
                            <div className="cs">
                                <div className="" style={{position: "relative"}}>116 (4.2)</div>CS
                            </div>
                            <div className="kill-participantion">
                                <div className="" style={{position: "relative"}}>킬관여 63%</div>
                            </div>
                        </div>
                        <div className="items">
                            <div>
                                <div className="item">
                                    <ul>
                                        <li>
                                            <div className="" style={{position: "relative"}}><img
                                                    src="https://opgg-static.akamaized.net/images/lol/item/3157.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                    alt=""/></div>
                                        </li>
                                        <li>
                                            <div className="" style={{position: "relative"}}><img
                                                    src="https://opgg-static.akamaized.net/images/lol/item/2033.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                    alt=""/></div>
                                        </li>
                                        <li>
                                            <div className="" style={{position: "relative"}}><img
                                                    src="https://opgg-static.akamaized.net/images/lol/item/1052.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                    alt=""/></div>
                                        </li>
                                        <li>
                                            <div className="" style={{position: "relative"}}><img
                                                    src="https://opgg-static.akamaized.net/images/lol/item/3158.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                    alt=""/></div>
                                        </li>
                                        <li></li>
                                        <li>
                                            <div className="" style={{position: "relative"}}><img
                                                    src="https://opgg-static.akamaized.net/images/lol/item/6655.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                    alt=""/></div>
                                        </li>
                                    </ul>
                                    <div>
                                        <div className="ward">
                                            <div className="" style={{position: "relative"}}><img
                                                    src="https://opgg-static.akamaized.net/images/lol/item/3363.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
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
                                    alt=""/> 제어 와드 5</div>
                        </div>
                        <div className="participants">
                            <ul>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Sett.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/Cento" target="_blank"
                                            rel="noreferrer">Cento</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Hecarim.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/넌재능이없어" target="_blank"
                                            rel="noreferrer">넌재능이없어</a></div>
                                </li>
                                <li className="summoner me">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Ahri.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/쾌속자멸" target="_blank"
                                            rel="noreferrer">쾌속자멸</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Ashe.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/이지스스" target="_blank"
                                            rel="noreferrer">이지스스</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Nautilus.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/KimuchiWorrior" target="_blank"
                                            rel="noreferrer">KimuchiWorrior</a></div>
                                </li>
                            </ul>
                            <ul>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Jayce.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/백정에게꾸짖을갈" target="_blank"
                                            rel="noreferrer">백정에게꾸짖을갈</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/XinZhao.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/부천 정환호" target="_blank"
                                            rel="noreferrer">부천 정환호</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Vex.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/류채하" target="_blank"
                                            rel="noreferrer">류채하</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Jhin.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/Biper" target="_blank"
                                            rel="noreferrer">Biper</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Xerath.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/팔딱롤롤" target="_blank"
                                            rel="noreferrer">팔딱롤롤</a></div>
                                </li>
                            </ul>
                        </div>
                        <div className="action"><button className="detail"><img
                                    src="https://s-lol-web.op.gg/static/images/icon/common/icon-viewdetail-red.png?v=1648211565552"
                                    alt=""/></button></div>
                    </div>
                </li>
                <li className="record-list">
                    <div result="WIN" className="record-div win">
                        <div className="info">
                            <div className="type">자유 5:5 랭크</div>
                            <div className="" style={{position: "relative"}}>
                                <div className="time-stamp">5일 전</div>
                            </div>
                            <div className="bar"></div>
                            <div className="game-result">승리</div>
                            <div className="game-length">30분 2초</div>
                        </div>
                        <div className="champion">
                            <div className="icon"><a href="/champions/annie" target="_blank" rel="noreferrer"><img
                                        src="https://opgg-static.akamaized.net/images/lol/champion/Annie.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                        alt=""/></a></div>
                            <div className="spells">
                                <div className="spell">
                                    <div className="" style={{position: "relative"}}><img
                                            src="https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                </div>
                                <div className="spell">
                                    <div className="" style={{position: "relative"}}><img
                                            src="https://opgg-static.akamaized.net/images/lol/spell/SummonerDot.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                </div>
                            </div>
                            <div className="runes">
                                <div className="rune">
                                    <div className="" style={{position: "relative"}}><img
                                            src="https://opgg-static.akamaized.net/images/lol/perk/8112.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                </div>
                                <div className="rune">
                                    <div className="" style={{position: "relative"}}><img
                                            src="https://opgg-static.akamaized.net/images/lol/perkStyle/8200.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                </div>
                            </div>
                            <div className="name">애니</div>
                        </div>
                        <div className="kda">
                            <div className="k-d-a"><span>12</span> / <span className="d">6</span> / <span>17</span></div>
                            <div className="ratio"><span>4.83:1</span> 평점</div>
                            <div className="tag"><span className="multi-kill">더블킬</span></div>
                        </div>
                        <div className="stats">
                            <div className="level">레벨 16</div>
                            <div className="cs">
                                <div className="" style={{position: "relative"}}>201 (6.7)</div>CS
                            </div>
                            <div className="kill-participantion">
                                <div className="" style={{position: "relative"}}>킬관여 63%</div>
                            </div>
                        </div>
                        <div className="items">
                            <div>
                                <div className="item">
                                    <ul>
                                        <li>
                                            <div className="" style={{position: "relative"}}><img
                                                    src="https://opgg-static.akamaized.net/images/lol/item/3157.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                    alt=""/></div>
                                        </li>
                                        <li>
                                            <div className="" style={{position: "relative"}}><img
                                                    src="https://opgg-static.akamaized.net/images/lol/item/1058.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                    alt=""/></div>
                                        </li>
                                        <li>
                                            <div className="" style={{position: "relative"}}><img
                                                    src="https://opgg-static.akamaized.net/images/lol/item/6655.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                    alt=""/></div>
                                        </li>
                                        <li>
                                            <div className="" style={{position: "relative"}}><img
                                                    src="https://opgg-static.akamaized.net/images/lol/item/4645.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                    alt=""/></div>
                                        </li>
                                        <li>
                                            <div className="" style={{position: "relative"}}><img
                                                    src="https://opgg-static.akamaized.net/images/lol/item/1056.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                    alt=""/></div>
                                        </li>
                                        <li>
                                            <div className="" style={{position: "relative"}}><img
                                                    src="https://opgg-static.akamaized.net/images/lol/item/3020.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                    alt=""/></div>
                                        </li>
                                    </ul>
                                    <div>
                                        <div className="ward">
                                            <div className="" style={{position: "relative"}}><img
                                                    src="https://opgg-static.akamaized.net/images/lol/item/3363.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                    alt=""/></div>
                                        </div>
                                        <div className="build">
                                            <div className="" style={{position: "relative"}}><button><img
                                                        src="https://s-lol-web.op.gg/static/images/icon/common/icon-buildblue-p.png?v=1648211565552"
                                                        alt=""/></button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="control"><img
                                    src="./resource/image/icon-ward-blue.png?v=1648211565552"
                                    alt=""/> 제어 와드 5</div>
                        </div>
                        <div className="participants">
                            <ul>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Sett.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/Cento" target="_blank"
                                            rel="noreferrer">Cento</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/RekSai.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/넌재능이없어" target="_blank"
                                            rel="noreferrer">넌재능이없어</a></div>
                                </li>
                                <li className="summoner me">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Annie.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/쾌속자멸" target="_blank"
                                            rel="noreferrer">쾌속자멸</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/이지스스" target="_blank"
                                            rel="noreferrer">이지스스</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Nautilus.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/KimuchiWorrior" target="_blank"
                                            rel="noreferrer">KimuchiWorrior</a></div>
                                </li>
                            </ul>
                            <ul>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Mordekaiser.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/전주팔각모" target="_blank"
                                            rel="noreferrer">전주팔각모</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Zac.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/rioasnm" target="_blank"
                                            rel="noreferrer">rioasnm</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Yasuo.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/푸른별사탕" target="_blank"
                                            rel="noreferrer">푸른별사탕</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Jhin.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/지웅아저씨" target="_blank"
                                            rel="noreferrer">지웅아저씨</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Thresh.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/약계란" target="_blank"
                                            rel="noreferrer">약계란</a></div>
                                </li>
                            </ul>
                        </div>
                        <div className="action"><button className="detail"><img
                                    src="https://s-lol-web.op.gg/static/images/icon/common/icon-viewdetail-blue.png?v=1648211565552"
                                    alt=""/></button></div>
                    </div>
                </li>
                <li className="record-list">
                    <div result="REMAKE" className="record-div remake">
                        <div className="info">
                            <div className="type">자유 5:5 랭크</div>
                            <div className="" style={{position: "relative"}}>
                                <div className="time-stamp">6일 전</div>
                            </div>
                            <div className="bar"></div>
                            <div className="game-result">다시하기</div>
                            <div className="game-length">3분 15초</div>
                        </div>
                        <div className="champion">
                            <div className="icon"><a href="/champions/camille" target="_blank" rel="noreferrer"><img
                                        src="https://opgg-static.akamaized.net/images/lol/champion/Camille.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                        alt=""/></a></div>
                            <div className="spells">
                                <div className="spell">
                                    <div className="" style={{position: "relative"}}><img
                                            src="https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                </div>
                                <div className="spell">
                                    <div className="" style={{position: "relative"}}><img
                                            src="https://opgg-static.akamaized.net/images/lol/spell/SummonerDot.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                </div>
                            </div>
                            <div className="runes">
                                <div className="rune">
                                    <div className="" style={{position: "relative"}}><img
                                            src="https://opgg-static.akamaized.net/images/lol/perk/8437.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                </div>
                                <div className="rune">
                                    <div className="" style={{position: "relative"}}><img
                                            src="https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                </div>
                            </div>
                            <div className="name">카밀</div>
                        </div>
                        <div className="kda">
                            <div className="k-d-a"><span>0</span> / <span className="d">0</span> / <span>0</span></div>
                            <div className="ratio"><span>0.00:1</span> 평점</div>
                        </div>
                        <div className="stats">
                            <div className="level">레벨 2</div>
                            <div className="cs">
                                <div className="" style={{position: "relative"}}>6 (1.8)</div>CS
                            </div>
                            <div className="kill-participantion">
                                <div className="" style={{position: "relative"}}>킬관여 0%</div>
                            </div>
                        </div>
                        <div className="items">
                            <div>
                                <div className="item">
                                    <ul>
                                        <li></li>
                                        <li>
                                            <div className="" style={{position: "relative"}}><img
                                                    src="https://opgg-static.akamaized.net/images/lol/item/1055.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                    alt=""/></div>
                                        </li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                    <div>
                                        <div className="ward">
                                            <div className="" style={{position: "relative"}}><img
                                                    src="https://opgg-static.akamaized.net/images/lol/item/3340.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                                    alt=""/></div>
                                        </div>
                                        <div className="build"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="control"><img
                                    src="./resource/image/icon-ward-red.png?v=1648211565552"
                                    alt=""/> 제어 와드 0</div>
                        </div>
                        <div className="participants">
                            <ul>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Riven.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/탄력밴드" target="_blank"
                                            rel="noreferrer">탄력밴드</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/XinZhao.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/방지이장" target="_blank"
                                            rel="noreferrer">방지이장</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Xerath.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/엔터키없이게임" target="_blank"
                                            rel="noreferrer">엔터키없이게임</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Xayah.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/능금능금쥬스" target="_blank"
                                            rel="noreferrer">능금능금쥬스</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Blitzcrank.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/대천대장" target="_blank"
                                            rel="noreferrer">대천대장</a></div>
                                </li>
                            </ul>
                            <ul>
                                <li className="summoner me">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Camille.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/쾌속자멸" target="_blank"
                                            rel="noreferrer">쾌속자멸</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/LeeSin.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/넌재능이없어" target="_blank"
                                            rel="noreferrer">넌재능이없어</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Galio.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/Cento" target="_blank"
                                            rel="noreferrer">Cento</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/이지스스" target="_blank"
                                            rel="noreferrer">이지스스</a></div>
                                </li>
                                <li className="summoner others">
                                    <div className="icon"><img
                                            src="https://opgg-static.akamaized.net/images/lol/champion/Nautilus.png?image=q_auto,f_webp,w_auto&amp;v=1648211565552"
                                            alt=""/></div>
                                    <div className="name"><a href="/summoners/kr/KimuchiWorrior" target="_blank"
                                            rel="noreferrer">KimuchiWorrior</a></div>
                                </li>
                            </ul>
                        </div>
                        <div className="action"><button className="detail"><img
                                    src="https://s-lol-web.op.gg/static/images/icon/common/icon-viewdetail-grey.png?v=1648211565552"
                                    alt=""/></button></div>
                    </div>
                </li>
            </ul>
        );
    }
}

export default MatchList;