import { FULLFILL_POKEMONS, REQUEST_POKEMONS } from '../actions';

export default (state = { isLoadingPokemons: true }, action) => {
  const { type, payload } = action;
  switch (type) {
    case FULLFILL_POKEMONS:
      return { ...state, pokemons: payload, isLoadingPokemons: false };
    case REQUEST_POKEMONS:
      return { ...state, isLoadingPokemons: true };
    default:
      return state;
  }
};
