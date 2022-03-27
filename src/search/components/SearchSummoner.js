import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchSummoner extends Component {
    constructor(props) {
        super(props);
    }  

    componentDidMount(nextProps, nextState) {
        window.addEventListener('click', this.props.handler);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.props.handler);
    }

    render() {
        return (
            <div className="summoner-search-div">
                <ul>
                    <li className="summoner-list-item">
                        <a className="link false" href="/summoners/kr/asd">
                            <div className="icon">
                                <img src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon29.jpg?image=q_auto&amp;image=q_auto,f_webp,w_72&amp;v=1648187915854"
                                    width="36" alt="" height="36" />
                            </div>
                            <div className="info">
                                <div className="name">
                                    <span>asd</span>
                                </div>
                                <div className="desc">Platinum 3 - 42LP</div>
                            </div>
                        </a>
                    </li>
                    <li className="summoner-list-item">
                        <a className="link false" href="/summoners/kr/asdaaaaaa">
                            <div className="icon">
                                <img src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon5030.jpg?image=q_auto&amp;image=q_auto,f_webp,w_72&amp;v=1648187915854"
                                    width="36" alt="" height="36" />
                            </div>
                            <div className="info">
                                <div className="name"><span>asd</span>aaaaaa</div>
                                <div className="desc">Gold 3 - 37LP</div>
                            </div>
                        </a>
                    </li>
                    <li className="summoner-list-item">
                        <a className="link false" href="/summoners/kr/asdzxcv123">
                            <div className="icon">
                                <img src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon4785.jpg?image=q_auto&amp;image=q_auto,f_webp,w_72&amp;v=1648187915854"
                                    width="36" alt="" height="36" />
                            </div>
                            <div className="info">
                                <div className="name"><span>asd</span>zxcv123</div>
                                <div className="desc">Silver 2 - 5LP</div>
                            </div>
                        </a>
                    </li>
                    <li className="summoner-list-item">
                        <a className="link false" href="/summoners/kr/asdsadqwe1">
                            <div className="icon">
                                <img src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon4561.jpg?image=q_auto&amp;image=q_auto,f_webp,w_72&amp;v=1648187915854"
                                    width="36" alt="" height="36" />
                            </div>
                            <div className="info">
                                <div className="name"><span>asd</span>sadqwe1</div>
                                <div className="desc">Gold 3 - 13LP</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export function _mapStateToProps(state) {
    return {
    }
}

export default connect(_mapStateToProps)(SearchSummoner);