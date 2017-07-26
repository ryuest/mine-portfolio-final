import {
    put,
    call,
    select,
    fork,
    take,
    race
} from 'redux-saga/effects';

import {takeLatest, delay, takeEvery} from 'redux-saga/effects';
import {database, firebaseAuth} from '../data/baseConfig';
import actions from './actionCreators';

export const fetchFirebase = (path) => {
    let resolvedPath = path;
    if (resolvedPath instanceof Array) {
        resolvedPath = path.join('/');
    }
    return database.ref(resolvedPath).once('value').then((snapshot) => snapshot.val());
};

export const fetchBetStakes = (path) => {
  return betStakes
};

// Increment likes
function* log() {
  yield put(actions.increment(0));
}

// fetching posts from Firebase
export function * doFetchPosts() {
    // make API call without blocking application
    const posts = yield call(fetchFirebase, 'posts');
    // when done, send data to reducer
    yield put(actions.fetchedPostsKeys(posts));
}

// fetching posts from Firebase
export function * doFetchBets() {
    // make API call without blocking application
    const bets = yield call(fetchFirebase, `users/${firebaseAuth().currentUser.uid}/info/bets`);
    // when done, send data to reducer
    yield put(actions.fetchedBetsKeys(bets));
}

// Actions for bet placements and betslip statuses
export function * placeBetGetReceipt() {
  yield put(actions.enableReceipt());
  yield put(actions.disableBetSlip());
  yield put(actions.clearBets());
}

// Show current account Open Bets
export function * showOpenBets() {
  yield put(actions.disableBetSlip());
  yield put(actions.clearBets());
  yield put(actions.enableOpenBets());
}

// Disable Open Bets if BetSlip activate
export function * disableOpenBetsByBetSlip() {
  yield put(actions.disableOpenBets());
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    takeLatest('FETCH_POSTS', doFetchPosts),
    takeLatest('FETCH_BETS', doFetchBets),
    takeLatest('GET_RECEIPT', placeBetGetReceipt),
    takeLatest('SHOW_OPENBETS', showOpenBets),
    takeLatest('HIDE_OPENBETS', disableOpenBetsByBetSlip),
    takeLatest('LOG', log)
  ]
}
