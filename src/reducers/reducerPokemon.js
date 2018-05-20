import { REQUEST_POKEMON, FETCH_POKEMON } from '../actions';

export default (state = { isLoadingPokemon: true }, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_POKEMON:
      return { ...state, pokemon: payload.pokemon, isLoadingPokemon: false };
    case FETCH_POKEMON:
      return { ...state, isLoadingPokemon: true };
    default:
      return state;
  }
};