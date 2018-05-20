import { FETCH_POKEMONS, REQUEST_LIST_POKEMONS } from '../actions';

export default (state = { isLoadingPokemons: true }, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_LIST_POKEMONS:
      return { ...state, pokemons: payload, isLoadingPokemons: false };
    case FETCH_POKEMONS:
      return { ...state, isLoadingPokemons: true };
    default:
      return state;
  }
};
