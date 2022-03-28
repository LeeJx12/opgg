import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MatchList, MatchRecord } from '.';
import { _mapStateToProps } from '../../winrate/components/WinRateList';

class MatchContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabType: 'ALL'
        }
    }

    componentDidMount() {
        document.querySelector(".record-pane").addEventListener('click', this.eventHandler);
    }

    componentWillUnmount() {
        document.querySelector(".record-pane").removeEventListener('click', this.eventHandler);
    }

    render() {
        return (
            <div className="record-pane">
                <div className="record-top">
                    <ul>
                        <li className={tabType === 'ALL' ? "tab active" : "tab"} tabtype="ALL"><button value="TOTAL">전체</button></li>
                        <li className={tabType === 'SOLO' ? "tab active" : "tab"} tabtype="SOLO"><button value="SOLORANKED">솔로랭크</button></li>
                        <li className={tabType === 'FREE' ? "tab active" : "tab"} tabtype="FREE"><button value="FLEXRANKED">자유랭크</button></li>
                    </ul>
                </div>
                {
                    !this.props._matchData && 
                    <div className="no-data">기록된 전적이 없습니다.</div>
                }
                {
                    this.props._matchData &&
                    <MatchRecord/>
                }
                {
                    this.props._matchData &&
                    <MatchList/>
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

export function _matStateToProps(state) {
    const matchData = state['opgg/search'].matchList;

    return {
        _matchData: matchData,
    }
}

export default connect(_mapStateToProps)(MatchContainer);