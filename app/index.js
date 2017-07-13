import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import store from './store/configureStore';
import { history } from './store/configureStore';
import Root from './containers/Root';
import './styles/style.styl';

render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);
