import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavorite, changeTab, removeList } from '../actions';

class SearchHistory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabType : 'RECENT'
        }
    }

    componentDidMount() {
        window.addEventListener('click', this.props.handler);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.props.handler);
    }

    eventHandler = e => {
        e.stopPropagation();
        if (e.target.tagName === 'BUTTON') {
            if (document.querySelector(".search-history-div > div").contains(e.target)) {
                this.setState({tabType : e.target.getAttribute("tab")});
                this.render();
            }
        } else if (e.target.tagName === 'INPUT') {
            this.toggleFavorite(e.target);
        } else if (e.target.tagName === 'IMG' && e.target.closest('button')) {
            this.removeItem(e.target.closest('button'));
        } else if (e.target.tagName === 'A') {
            this.props.srchFunc(e.target.innerText);
        }
    }

    removeItem = element => {
        const idx = Number(element.closest("li").getAttribute("key"));
        this.props.dispatch(removeList(idx, this.state.tabType));
    }

    toggleFavorite = (element) => {
        const idx = Number(element.closest("li").getAttribute("key"));

        if (element.checked) {
            const el = element.parentElement.previousElementSibling;
            this.props.dispatch(addFavorite(el.innerText));
        } else {
            this.props.dispatch(removeList(idx, 'FAVORITE'));
        }
    }

    render() {
        return (
            <div className="search-history-div" onClick={this.eventHandler}>
                <div>
                    <button type="button" className={ this.state.tabType !== 'FAVORITE' ? "tab active" : "tab" } tab="RECENT">최근검색</button>
                    <button type="button" className={ this.state.tabType === 'FAVORITE' ? "tab active" : "tab" } tab="FAVORITE">즐겨찾기</button>
                </div>
                { this.state.tabType !== 'FAVORITE' &&
                    <ul className="search-recent">
                        { this.props._srchHistory && this.props._srchHistory.length > 0 &&
                            this.props._srchHistory.map((keyword, idx) => (
                                <li className="recent-summoner" key={idx}>
                                    <a className="summoner-name">{keyword}</a>
                                    <label className="favorite-summoner-label" htmlFor={`chk_${idx}`}>
                                        <input className="favorite-summoner-chk" id={`chk_${idx}`} type="checkbox" defaultChecked={ this.props._favoriteList.indexOf(keyword) > -1 } />
                                    </label>
                                    <button type="button" className="close-btn">
                                        <img src="./resource/image/icon-history-delete.png" width="16" alt="" height="16"/>
                                    </button>
                                </li>
                            ))
                        }
                        { !this.props._srchHistory || this.props._srchHistory.length === 0 &&
                            <li className="no-data">
                                <img src="./resource/image/icon-history-info.png" width="16" alt="Info" height="16"/>
                                <p>최근에 본 소환사가 없습니다. <img src="./resource/image/icon-favorite-off.png" width="13" height="13" alt="Bookmark"/></p>
                            </li>
                        }
                    </ul>
                }
                { this.state.tabType === 'FAVORITE' &&
                    <ul className="search-favorite">
                        { this.props._favoriteList && this.props._favoriteList.length > 0 &&
                            this.props._favoriteList.map((keyword, idx) => (
                                <li className="recent-summoner" key={idx}>
                                    <a className="summoner-name">{keyword}</a>
                                    <button type="button" className="close-btn">
                                        <img src="./resource/image/icon-history-delete.png" width="16" alt="" height="16"/>
                                    </button>
                                </li>
                            ))
                        }
                        { !this.props._favoriteList || this.props._favoriteList.length === 0 &&
                            <li className="no-data">
                                <img src="./resource/image/icon-history-info.png" width="16" alt="Info" height="16"/>
                                <p>관심있는 소환사에 <img src="./resource/image/icon-favorite-off.png" width="13" height="13" alt="Bookmark"/>즐겨찾기를 하여 편리하게 정보를 받아보세요.</p>
                            </li>
                        }
                    </ul>
                }
            </div>
        );
    }
}

export function _mapStateToProps(state) {
    return {
        _srchHistory:   state['opgg/search'].srchHistory,
        _favoriteList:  state['opgg/search'].favoriteList
    }
}

export default connect(_mapStateToProps)(SearchHistory);