import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions/actionCreators';
import Main from './Main';
import App from './App';
import { selectorsPost } from '../reducers/posts';
import navPages from '../data/navPages';


function mapDispachToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const mapStateToProps = (state) => ({
    pages: navPages,
    posts: selectorsPost.getPosts(state.posts),
    selections: state.selections,
    betslip: state.betslip,
    stakes: state.stakes
});

const AppStateToProps = connect(mapStateToProps, mapDispachToProps)(Main);

export default AppStateToProps;
