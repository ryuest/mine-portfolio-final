import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.styl';

import routes from './routes';
import App from './components/App';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)

//<IndexRoute component={Inplay}></IndexRoute>
ReactDOM.render(
  router,
  document.getElementById('root')
);

//store.subscribe(App)
