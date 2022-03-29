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
                { this.itemTooltipRender(spEl.detail, spEl.imageUrl, true, true) }
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
            if (isEmpty(itEl.imageUrl) || isEmpty(itEl.detail)) {
                return (
                    <li key={idx}></li>
                )
            } else {
                const { detail } = itEl;

                return (
                    <li key={idx}>
                        { this.itemTooltipRender(detail, itEl.imageUrl) }
                    </li>
                )
            }
        });
    }

    itemTooltipRender(detail, imageUrl, isWard, isOneLine) {
        const descList = detail?.descList ? detail.descList : [];
        let descRender = descList.map((desc, idx) => {
            let element;
            if (desc === '<br>') {
                element = (
                    <span key={idx}><br/></span>
                )
            } else {
                if (idx === 0) {
                    element = (
                        <span key={idx}>{desc}</span>
                    );
                } else {
                    element = (
                        <span key={idx}><br/>{desc}</span>
                    );
                }
            }
            return element;
        });

        if (isOneLine) {
            descRender = (<span>{detail?.description}</span>);
        }

        return (
            <Tooltip
                content={(
                    <div className={`tooltip ${isWard ? "ward" : ""}`}>
                        <div className="item_name">{detail.name}</div>
                        <div>{detail.plaintext}</div>
                        <div>
                            { descRender }
                        </div>
                        { !isWard &&
                            <br/>
                        }
                        { !isWard &&
                            <span>가격:</span>
                        }
                        { !isWard &&
                            <span className="item_cost">{`${detail.gold.total} (${detail.gold.base})`}</span>
                        }
                    </div>
                )}
                direction="up"
                tagName="div"
                className="toolTip"
            >
                <div className="" style={{position: "relative"}}>
                    <img src={imageUrl} alt=""/>
                </div>
            </Tooltip>
        );
    }

    teamRender() {
        if (!this.props.game?.gameId || !this.props.game.teams || this.props.game.teams.length === 0) {
            return (
                <div className="participants">
                <ul>
                </ul>
                <ul>
                </ul>
            </div>
            )
        }

        const { teams } = this.props.game;

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
        const { gameId, gameType, createDate, result, gameLength, champion, stats, wardImageUrl, wardCnt, ward, wardDetail, buildIcon, name, level } = this.props.game;
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
                            <a href={`https://www.op.gg/champions/${name}`} target="_blank" rel="noreferrer">
                                <img src={champion.imageUrl}/>
                            </a>
                        </div>
                        <div className="spells">
                            { this.spellRender() }
                        </div>
                        <div className="runes">
                            { this.peakRender() }
                        </div>
                        <div className="name">{this.props._champList[name]?.name}</div>
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
                                        { this.itemTooltipRender(wardDetail, ward.imageUrl, true) }
                                    </div>
                                    <div className="build">
                                        <div className="" style={{position: "relative"}}>
                                            <Tooltip
                                                content="빌드"
                                                direction="up"
                                                tagName="div"
                                                className="toolTip"
                                            >
                                                <button>
                                                    <img src={buildIcon} alt=""/>
                                                </button>
                                            </Tooltip>
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
    const itemList = state['opgg/app'].itemList;
    const champList = state['opgg/app'].champList;

    return {
        _games: games,
        _itemList: itemList,
        _champList: champList
    }
}

export default connect(_matStateToProps)(MatchListItem);