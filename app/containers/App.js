import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actionCreators';
import {selectorsPost} from '../reducers/posts';
import {selectorsBets} from '../reducers/bets';
import {bindActionCreators} from 'redux';
import navPages from '../data/navPages';
import Sportsbook from '../components/Sportsbook';

const mapStateToProps = (state) => ({
    filter: state.filter,
    pages: navPages,
    posts: selectorsPost.getPosts(state.posts),
    selections: state.selections,
    betslip: state.betslip,
    stakes: state.stakes,
    bets: selectorsBets.getBets(state.bets),
});

function mapDispachToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(Sportsbook);
