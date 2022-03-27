import { React, Component } from 'react';

export default class AbstractRank extends Component {}

export function _mapStateToProps(state) {
    return {
        _basicInfo: state['opgg/search'].summonerBasicInfo
    }
}