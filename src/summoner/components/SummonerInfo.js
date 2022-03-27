import React, { Component } from 'react';
import { connect } from 'react-redux';

class SummonerInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props._basicInfo) {
            return (
                <div className="summoner-info"></div>
            );
        }
        const { _basicInfo } = this.props;
        const { previousTiers, ladderRank, name, profileBorderImageUrl, profileImageUrl, level } = _basicInfo;
        let rank = ladderRank.rank.toLocaleString();
        let percent = ladderRank.rankPercentOfTop;

        return (
            <div className="summoner-info">
                <ul>
                    {
                        previousTiers && previousTiers.length > 0 &&
                        previousTiers.map((element, idx) => (
                            <li key={idx}>
                                <div className="" style={{position: "relative"}}><b>{element.shortString}</b> {element.tier}</div>
                            </li>
                        ))
                    }
                </ul>
                <div className="face">
                    <div className="profile-icon">
                        {
                            profileBorderImageUrl &&
                            <div className="border-image" style={{backgroundImage: `url(${profileBorderImageUrl})`}}></div>
                        }
                        {
                            profileImageUrl &&
                            <img src={profileImageUrl} alt="profile image" />
                        }
                        <span className="level">{level}</span>
                    </div>
                </div>
                <div className="profile">
                    <div className="info">
                        <span className="name">{name}</span>
                        <div className="rank">
                            <a href={`https://www.op.gg/leaderboards/tier?summoner=${name}$${name}`} target="_blank" rel="noreferrer">
                                래더 랭킹
                                <span className="ranking"> {rank}</span>위 (상위 {percent}%)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export function _mapStateToProps(state) {
    return {
        _basicInfo: state['opgg/search'].summonerBasicInfo
    }
}

export default connect(_mapStateToProps)(SummonerInfo);