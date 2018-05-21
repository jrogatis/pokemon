import { REQUEST_POKEMON, FULLFILL_POKEMON } from '../actions';

export default (state = { isLoadingPokemon: true }, action) => {
  const { type, payload } = action;
  switch (type) {
    case FULLFILL_POKEMON:
      return { pokemon: payload.pokemon, isLoadingPokemon: false };
    case REQUEST_POKEMON:
      return { isLoadingPokemon: true };
    default:
      return state;
  }
};
