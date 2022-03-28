import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MatchListItem } from '.';

class MatchList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const games = this.props._games;
        const gameRender = games.map((element, idx) => (
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

    return {
        _games: games,
    }
}

export default connect(_matStateToProps)(MatchList);