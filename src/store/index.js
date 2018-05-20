import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import reduxPromise from 'redux-promise';
import pokemons from '../reducers/reducerPokemons';
import pokemon from '../reducers/reducerPokemon';

const history = createHistory();
const routeMiddleware = routerMiddleware(history);

const combReducers = combineReducers({
  pokemons,
  pokemon,
  router: routerReducer,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

let middlewares;
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  const logger = require('redux-logger').default;
  middlewares = [routeMiddleware, logger, reduxPromise];
} else {
  middlewares = [routeMiddleware, reduxPromise];
}

const store = createStore(combReducers, composeEnhancers(applyMiddleware(...middlewares)));

export { store, history };
