import {
    put,
    call,
    select,
    fork,
    take,
    race
} from 'redux-saga/effects';

import {takeLatest, delay, takeEvery} from 'redux-saga';
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

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  incrementAsync()
  yield* takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* incrementSaga() {
  yield call(delay, 1000)
  yield put(actions.increment(0));
}

// Increment likes
function* log() {
  incrementSaga()
  yield* takeEvery('LOG', incrementSaga)
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

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    takeLatest('FETCH_POSTS', doFetchPosts),
    takeLatest('FETCH_BETS', doFetchBets),
    takeLatest('GET_RECEIPT', placeBetGetReceipt),
    log()
  ]
}
