import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onBlurInput, onFocusInput, onKeywordChange, onSearch } from '../actions';
import { SearchHistory, SearchSummoner } from './';

class SearchInput extends Component {
    state = {
        keyword: '',
        isFocus: false,
    }
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.state.isFocus = false;
        this.state.keyword = '';
    }

    render() {
        return (
            <div className="top-div">
                <div className="search-area">
                    <input type="text" id="searchInput" placeholder="소환사명,챔피언…" onClick={this._onFocus} onKeyUp={this._searchInputHandler} autoComplete="off"/>
                    <div className="search" onClick={this._onSearch}></div>
                    <div className="search-container">
                        { this.props._isFocus /*&& (!this.props._keyword || '' === this.props._keyword)*/ &&
                            <SearchHistory handler={this._searchContainerHandler} srchFunc={this._onSearch}/>
                        }
                        {/*  this.props._isFocus && this.props._keyword && '' !== this.props._keyword &&
                            <SearchSummoner handler={this._searchContainerHandler} />
                    */}
                    </div>
                </div>
            </div>
        );
    }

    _onFocus = e => {
        e.stopPropagation();
        if (!this.props._isFocus) {
            this.props.dispatch(onFocusInput());
        }
    }

    _onBlur = () => {
        if (this.props._isFocus) {
            this.props.dispatch(onBlurInput());
        }
    }

    _searchContainerHandler = e => {
        if (!document.querySelector(".search-container").contains(e.target)) {
            this._onBlur();
        }
    }

    _searchInputHandler = e => {
        if ((65 <= e.keyCode && 90 >= e.keyCode) || (48 <= e.keyCode && 57 >= e.keyCode) || 229 === e.keyCode || 8 === e.keyCode) {
            this.props.dispatch(onKeywordChange(e.target.value));
        } else if (13 === e.keyCode) {
            this._onSearch(e.target.value);
        }
    }

    _onSearch = (keyword) => {
        if (!keyword || '' === keyword || typeof keyword === 'object') {
            keyword = document.getElementById("searchInput")?.value;
        }
        if (!keyword || '' === keyword || keyword.indexOf("/") > -1 || keyword.indexOf(".") > -1 || keyword.indexOf("\\") > -1) {
            return;
        }
        this.props.dispatch(onSearch(keyword));
        this._onBlur();
        document.getElementById("searchInput").value = keyword;
    }
}

export function _mapStateToProps(state) {
    return {
        _keyword: state['opgg/search'].keyword,
        _isFocus: state['opgg/search'].isFocus,
    };
}

export default connect(_mapStateToProps)(SearchInput);