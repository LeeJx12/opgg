import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MatchList, MatchRecord } from '.';
import { isEmpty } from '../../common/functions';
import { setTabType } from '../actions';

class MatchContainer extends Component {
    constructor(props) {
        super(props);
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
                        <li className={this.props._tabType === 'ALL' ? "tab active" : "tab"} tabtype="ALL"><button value="TOTAL">전체</button></li>
                        <li className={this.props._tabType === 'SOLO' ? "tab active" : "tab"} tabtype="SOLO"><button value="SOLORANKED">솔로랭크</button></li>
                        <li className={this.props._tabType === 'FREE' ? "tab active" : "tab"} tabtype="FREE"><button value="FLEXRANKED">자유랭크</button></li>
                    </ul>
                </div>
                {
                    isEmpty(this.props._matchData) && 
                    <div className="no-data">기록된 전적이 없습니다.</div>
                }
                {
                    !isEmpty(this.props._matchData) &&
                    <MatchRecord tab={this.props._tabType}/>
                }
                {
                    !isEmpty(this.props._matchData) &&
                    <MatchList tab={this.props._tabType}/>
                }
            </div>
        );
    }

    eventHandler = e => {
        if (document.querySelector(".record-top").contains(e.target)) {
            const trgtTabType = e.target.closest("li").getAttribute("tabtype");

            if (this.props._tabType !== trgtTabType) {
                this.props.dispatch(setTabType(trgtTabType));
            }
        }
    }
}

export function _mapStateToProps(state) {
    const matchData = state['opgg/match']?.summary;
    const tabType = state['opgg/match']?.tabType || 'ALL';

    return {
        _matchData: matchData,
        _tabType: tabType
    }
}

export default connect(_mapStateToProps)(MatchContainer);