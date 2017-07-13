import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux';
import posts from './posts';
import selections from './selections';
import betslip from './betslip';
import stakes from './stakes';

const rootReducer = combineReducers({
    routing,
    posts,
    selections,
    betslip,
    stakes,
    form: formReducer
});

export default rootReducer;
