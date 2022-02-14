import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { countriesReducer } from '../reducers/countriesReducer';
import { leaguesReducer } from '../reducers/leaguesReducer';
import { playersReducer } from '../reducers/playersReducer';
import { settingsReducer } from '../reducers/settingsReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  settings: settingsReducer,
  players: playersReducer,
  countries: countriesReducer,
  leagues: leaguesReducer,
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
