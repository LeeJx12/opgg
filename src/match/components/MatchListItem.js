import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from '../../common/functions';
import Tooltip from 'react-tooltip-lite';

class MatchListItem extends Component {
    constructor(props) {
        super(props);
    }

    spellRender() {
        const { spells } = this.props.game;

        return spells.map((spEl, idx) => (
            <div className="spell" key={idx}>
                <div className="" style={{position: "relative"}}>
                    <img src={spEl.imageUrl} alt=""/>
                </div>
            </div>
        ));
    }

    peakRender() {
        const { peak } = this.props.game;

        return peak.map((peEl, idx) => (
            <div className="rune" key={idx}>
                <div className="" style={{position: "relative"}}>
                    <img src={peEl} alt=""/>
                </div>
            </div>
        ));
    }

    itemRender() {
        const { items } = this.props.game;

        const cnt = items.length;
        for (let i=0; i<6-cnt; i++) {
            items.push({imageUrl: ''});
        }

        return items.map((itEl, idx) => {
            if (isEmpty(itEl.imageUrl)) {
                return (
                    <li key={idx}></li>
                )
            } else {
                const { detail } = itEl;
                const { descList } = detail;

                const descRender = descList.map((desc, idx) => {
                    if (desc === '<br>') {
                        return (
                            <span><br/></span>
                        )
                    } else {
                        if (idx === 0) {
                            <span>{desc}</span>
                        } else {
                            <span><br/>{desc}</span>
                        }
                    }
                });

                return (
                    <Tooltip
                        content={(
                            <div class="toolTip">
                                <div class="item_name">{detail.name}</div>
                                <div>{detail.plaintext}</div>
                                <div>
                                    { descRender }
                                </div>
                                <br/>가격:<span class="item_cost">{`${detail.gold.total} (${detail.gold.sell})`}</span>
                            </div>
                        )}
                        direction="top"
                        tagName="div"
                        className="toolTip"
                    >
                        <li key={idx}>
                            <div className="" style={{position: "relative"}}>
                                <img src={itEl.imageUrl} alt=""/>
                            </div>
                        </li>
                    </Tooltip>
                )
            }
        });
    }

    teamRender() {
        if (!this.props.game?.gameId || !this.props._teams[this.props.game.gameId]) {
            return (
                <div className="participants">
                <ul>
                </ul>
                <ul>
                </ul>
            </div>
            )
        }

        const { teams } = this.props._teams[this.props.game.gameId];

        const team1Render = teams[0]?.players.map(element => {
            const className = this.props.game.summonerName === element.summonerName ? "summoner me" : "summoner others";
            return (
                <li className={className} key={element.summonerId}>
                    <div className="icon">
                        <img src={element.champion.imageUrl} alt=""/>
                    </div>
                    <div className="name">
                        <a target="_blank" rel="noreferrer">{element.summonerName}</a>
                    </div>
                </li>
            )
        });

        const team2Render = teams[1]?.players.map(element => {
            const className = this.props.game.summonerName === element.summonerName ? "summoner me" : "summoner others";
            return (
                <li className={className} key={element.summonerId}>
                    <div className="icon">
                        <img src={element.champion.imageUrl} alt=""/>
                    </div>
                    <div className="name">
                        <a target="_blank" rel="noreferrer">{element.summonerName}</a>
                    </div>
                </li>
            )
        });

        return (
            <div className="participants">
                <ul>
                    { team1Render }
                </ul>
                <ul>
                    { team2Render }
                </ul>
            </div>
        )
    }

    render() {
        const { gameId, gameType, createDate, result, gameLength, champion, stats, wardImageUrl, wardCnt, ward, buildIcon, name, level } = this.props.game;
        return (
            <li className="record-list">
                <div result={result} className={`record-div ${result.toLowerCase()}`}>
                    <div className="info">
                        <div className="type">{gameType}</div>
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
                            { this.spellRender() }
                        </div>
                        <div className="runes">
                            { this.peakRender() }
                        </div>
                        <div className="name">{name}</div>
                    </div>
                    <div className="kda">
                        <div className="k-d-a"><span>{stats.general.kill}</span> / <span className="d">{stats.general.death}</span> / <span>{stats.general.assist}</span></div>
                        <div className="ratio"><span>{stats.general.kdaString}</span> 평점</div>
                    </div>
                    <div className="stats">
                        <div className="level">레벨 {level}</div>
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
                                    { this.itemRender() }
                                </ul>
                                <div>
                                    <div className="ward">
                                        <div className="" style={{position: "relative"}}>
                                            <img src={ward.imageUrl} alt=""/>
                                        </div>
                                    </div>
                                    <div className="build">
                                        <div className="" style={{position: "relative"}}>
                                            <button>
                                                <img src={buildIcon} alt=""/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="control">
                            <img src={wardImageUrl} alt=""/> 제어 와드 {wardCnt}
                        </div>
                    </div>
                    { this.teamRender() }
                    <div className="action">
                        <button className="detail">
                            <img src={`./resource/image/icon-viewdetail-${result.toLowerCase()}.png`} alt=""/>
                        </button>
                    </div>
                </div>
            </li>
        );
    }
}

export function _matStateToProps(state) {
    const games = state['opgg/match'].games;
    const teams = state['opgg/match'].teams;

    return {
        _games: games,
        _teams: teams
    }
}

export default connect(_matStateToProps)(MatchListItem);