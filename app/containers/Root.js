import React from 'react';
import {Provider} from 'react-redux';
import {Route, IndexRoute, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import App from './App'
import Sportsbook from '../components/Sportsbook';
import '../styles/style.styl';

export default function Root({store, history}) {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/" component={App}>                        
                    </Route>
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}
