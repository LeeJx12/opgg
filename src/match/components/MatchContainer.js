import React, { Component } from 'react';
import { MatchList, MatchRecord } from '.';

class MatchContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="record-pane">
                <div className="record-top">
                    <ul>
                        <li className="tab active"><button value="TOTAL">전체</button></li>
                        <li className="tab"><button value="SOLORANKED">솔로랭크</button></li>
                        <li className="tab"><button value="FLEXRANKED">자유랭크</button></li>
                    </ul>
                </div>
                <div className="no-data">기록된 전적이 없습니다.</div>
                <MatchRecord/>
                <MatchList/>
            </div>
        );
    }
}

export default MatchContainer;