import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers';

import actions from '../actions/actionCreators';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../actions/sagas';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware)),
    );

// run saga
sagaMiddleware.run(rootSaga);

// fetch some data from firebase (posts)
store.dispatch(actions.fetchPosts());

export default store;
