import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux';
import posts from './posts';
import selections from './selections';
import betslip from './betslip';
import stakes from './stakes';
import bets from './bets';

const rootReducer = combineReducers({
    routing,
    posts,
    selections,
    betslip,
    stakes,
    bets,
    form: formReducer
});

export default rootReducer;
