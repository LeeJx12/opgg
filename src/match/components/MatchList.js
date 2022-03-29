import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MatchListItem } from '.';

class MatchList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const games = this.props._games;
        const tabType = this.props._tabType;

        const gameRender = games.filter(game => {
            return "ALL" === tabType ||
                    (("SOLO" === tabType && "솔랭" === game.gameType) || ("FREE" === tabType && "자유 5:5 랭크" === game.gameType));
        }).map((element, idx) => (
                <MatchListItem game={element} key={element.gameId}/>
        ));

        return (
            <ul className="record-list-div">
                { gameRender }
            </ul>
        );
    }
}

export function _matStateToProps(state) {
    const games = state['opgg/match'].games;
    const tabType = state['opgg/match'].tabType;

    return {
        _games: games,
        _tabType: tabType
    }
}

export default connect(_matStateToProps)(MatchList);