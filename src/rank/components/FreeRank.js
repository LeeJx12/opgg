import React from 'react';
import { connect } from 'react-redux';
import { isEmpty } from '../../common/functions';
import AbstractRank, { _mapStateToProps } from './AbstractRank';

class FreeRank extends AbstractRank {
    constructor(props) {
        super(props);
    }

    render() {
        const unrankedElement = (
            <div className="rank-div free-rank">
                <div className="wrapper">
                    <div className="medal">
                        <div className="" style={{position: "relative"}}>
                            <img src="./resource/image/unranked.png" alt="UNRANKED"/>
                        </div>
                    </div>
                    <div className="info">
                        <div className="type">자유랭크</div>
                        <div className="unranked">Unranked</div>
                    </div>
                </div>
            </div>
        );

        if (isEmpty(this.props._basicInfo)) {
            return unrankedElement;
        }

        const { leagues } = this.props._basicInfo;
        const { hasResults, losses, wins, tierRank } = leagues[1];

        if (hasResults) {
            const tRank = `${tierRank.tier} ${tierRank.shortString.replace(/[^0-9]/g, "")}`;
            const lp = `${tierRank.string.replace(/[^0-9]/g, "")} LP`;
            const winRate = Math.round(wins / (wins + losses) * 100);

            return (
                <div className="rank-div free-rank">
                    <div className="wrapper">
                        <div className="medal">
                            <div className="" style={{position: "relative"}}>
                                <img src={tierRank.imageUrl} alt={tierRank.tier.toUpperCase()}/>
                            </div>
                        </div>
                        <div className="info">
                            <div className="type">자유랭크</div>
                            <div className="tier-rank">{tRank}</div>
                            <div className="tier-info">
                                <span className="lp">{lp}</span> / <span className="win-lose">{wins}승 {losses} 패<br/>승률 {winRate}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return unrankedElement;
        }
    }
}

export default connect(_mapStateToProps)(FreeRank);