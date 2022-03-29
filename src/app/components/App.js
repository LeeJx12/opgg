import { SearchInput } from '../../search';
import { SummonerInfo } from '../../summoner';
import { SoloRank, FreeRank } from '../../rank';
import { WinRateList } from '../../winrate';
import { MatchContainer } from '../../match/components';
import { connect } from 'react-redux';
import { Component } from 'react';
import { getChampList, getItemList, getSpells } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
      if (prevProps._version !== this.props._version) {
        this.props.dispatch(getItemList(this.props._version));
        this.props.dispatch(getChampList(this.props._version));
        this.props.dispatch(getSpells(this.props._version));
      }
  }

  render() {
    return (
      <div className="layout">
        <SearchInput />
        <SummonerInfo />
        <div className="splitter"></div>
        <div className="content-pane">
          <div>
            <SoloRank />
            <FreeRank />
            <WinRateList />
          </div>
          <MatchContainer />
        </div>
      </div>
    )
  }
}

function _mapStateToProps(state) {
    return {
        _version: state['opgg/app'].version
    }
}

export default connect(_mapStateToProps)(App);
