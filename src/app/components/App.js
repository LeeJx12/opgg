import { SearchInput } from '../../search';
import { SummonerInfo } from '../../summoner';
import { SoloRank, FreeRank } from '../../rank';
import { WinRateList } from '../../winrate';
import { MatchContainer } from '../../match/components';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="layout">
      <SearchInput/>
      <SummonerInfo/>
      <div className="splitter"></div>
      <div className="content-pane">
        <div>
          <SoloRank/>
          <FreeRank/>
          <WinRateList/>
        </div>
        <MatchContainer/>
      </div>
    </div>
  );
}

function _mapStateToProps(state) {
    return {
        _itemList: state['opgg/app'].itemList
    }
}

export default connect(_mapStateToProps)(App);
