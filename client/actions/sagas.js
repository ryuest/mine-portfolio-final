import {
    put,
    call,
    select,
    fork,
    take,
    race
} from 'redux-saga/effects';

import {takeLatest, delay, takeEvery} from 'redux-saga';
import {database} from '../data/baseConfig';
import actions from './actionCreators';


export const fetchFirebase = (path) => {
/*    if (database === undefined) {
        firebase.initializeApp(firebaseConfig);
        database = firebase.database();
    }
*/
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

function* log() {
  incrementSaga()
  yield* takeEvery('LOG', incrementSaga)
}

export function * doFetchPosts() {
    // make API call without blocking application
    const posts = yield call(fetchFirebase, 'posts');
    // when done, send data to reducer
    yield put(actions.fetchedPostsKeys(posts));
}


export function * placeBetGetReceipt() {
//  console.log("placeBetGetReceipt Saga")
  yield put(actions.enableReceipt());
  yield put(actions.disableBetSlip());
  yield put(actions.clearBets());
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    takeLatest('FETCH_POSTS', doFetchPosts),
    takeLatest('GET_RECEIPT', placeBetGetReceipt),
    log()
  ]
}
