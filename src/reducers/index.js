import { combineReducers } from 'redux';
import pokemons from './reducerPokemons';

const rootReducer = combineReducers({
  pokemons,
});

export default rootReducer;
