import React, { Component } from 'react';
import { connect } from 'react-redux';

class WinRateList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabType: 'CHAMP'
        }
    }

    componentDidMount() {
        document.querySelector(".win-rate-div").addEventListener('click', this.eventHandler);
    }

    componentWillUnmount() {
        document.querySelector(".win-rate-div").removeEventListener('click', this.eventHandler);
    }

    render() {
        let champRender = this.props._champList && this.props._champList?.map((element, idx) => {
            const { assists, cs, deaths, games, id, imageUrl, key, kills, losses, name, rank, wins, kda, kdaCN, winRate, winRateCN } = element;

            return (
                <div className="champion-box" key={id}>
                    <div className="face">
                        <a href={`https://www.op.gg/champions/${key}`} target="_blank" rel="noreferrer">
                            <img src={imageUrl} alt={name}/>
                        </a>
                    </div>
                    <div className="info">
                        <div className="name">
                            <a href={`https://www.op.gg/champions/${key}`} target="_blank" rel="noreferrer">{name}</a>
                        </div>
                        <div className="cs">CS {cs}</div>
                    </div>
                    <div className="kda">
                        <div className="" style={{position: "relative"}}>
                            <div className={kdaCN}>{kda} 평점</div>
                        </div>
                        <div className="detail">{kills} / {deaths} / {assists}</div>
                    </div>
                    <div className="played">
                        <div className="" style={{position: "relative"}}>
                            <div className={winRateCN}>{winRate}%</div>
                        </div>
                        <div className="count">{games} 게임</div>
                    </div>
                </div>
            );
        });

        let recentRender = this.props._recentList && this.props._recentList?.map((element, idx) => {
            const { imageUrl, key, losses, wins, name, winRate } = element;
            return (
                <li key={idx}>
                    <div className="face">
                        <a href={`https://www.op.gg/champions/${key}`} target="_blank" rel="noreferrer">
                            <img src={imageUrl} alt={name}/>
                        </a>
                    </div>
                    <div className="info">
                        <div className="name">
                            <a href={`https://www.op.gg/champions/${key}`} target="_blank" rel="noreferrer">{name}</a>
                        </div>
                    </div>
                    <div className="winratio">{winRate}%</div>
                    <div className="graph">
                        <div className="graph-bar">
                            <div className="fill left" style={{width: `${winRate}%`}}></div>
                            <div className="text left">{wins}승</div>
                            <div className="fill right"></div>
                            <div className="text right">{losses}패</div>
                            <div className="bar" style={{width: `${winRate}%`}}></div>
                        </div>
                    </div>
                </li>
            );
        })

        return (
            <div className="win-rate-div">
                <ul className="tabs">
                    <li className={ this.state.tabType !== 'RECENT' ? "tab active" : "tab" } tabtype="CHAMP"><button>챔피언 승률</button></li>
                    <li className={ this.state.tabType === 'RECENT' ? "tab active" : "tab" } tabtype="RECENT"><button>7일간 랭크 승률</button></li>
                </ul>
                { this.state.tabType !== 'RECENT' &&
                    <div>
                        { champRender }
                    </div>
                }

                { this.state.tabType === 'RECENT' &&
                    <ul className="recent-win-rate-list">
                        { recentRender }
                    </ul>
                }
            </div>
        );
    }

    eventHandler = e => {
        if (document.querySelector(".win-rate-div > ul.tabs").contains(e.target)) {
            const trgtTabType = e.target.closest("li").getAttribute("tabtype");

            if (this.state.tabType !== trgtTabType) {
                this.setState({tabType: trgtTabType});
            }
        }
    }
}

export function _mapStateToProps(state) {
    let champList = state['opgg/winrate']?.champList;
    let recentList = state['opgg/winrate']?.recentList;

    return {
        _champList: champList,
        _recentList: recentList,
    }
}

export default connect(_mapStateToProps)(WinRateList);