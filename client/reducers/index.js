import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import posts from './posts';
import selections from './selections'
import betslip from './betslip'
import stakes from './stakes'

const rootReducer = combineReducers({
  posts,
  selections,
  betslip,
  stakes,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
