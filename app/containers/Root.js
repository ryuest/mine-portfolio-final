import React from 'react';
import {Provider} from 'react-redux';
import {Route, IndexRoute} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import App from './App'
import Sportsbook from '../components/Sportsbook';
import Game from '../components/Game';
import '../styles/style.styl';

export default function Root({store, history}) {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <Route path="/" component={App}>
                        <IndexRoute component={Sportsbook}/>
                    </Route>
                </div>
            </ConnectedRouter>
        </Provider>
    );
}
