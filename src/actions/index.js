import axios from 'axios';

const ROOT_URL = 'https://pokeapi.co/api/v2/pokemon';

export const REQUEST_POKEMON = 'REQUEST_POKEMON';
export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const FETCH_POKEMON = 'FETCH_POKEMON';
export const REQUEST_LIST_POKEMONS = 'REQUEST_LIST_POKEMONS';
export const REJECT_POKEMON = 'REJECT_POKEMON';

export const isFetchingPokemons = payload => {
  return {
    type: FETCH_POKEMONS,
    payload: { isLoadingPokemons: true },
  };
};

export const isFetchingPokemon = payload => {
  return {
    type: FETCH_POKEMON,
    payload: { isLoadingPokemon: true },
  };
};

export const requestPokemons = async payload => {
  const result = await axios.get(`${ROOT_URL}/?limit=40`);
  const {
    data: { results, next, previus, count },
  } = result;
  return {
    type: REQUEST_LIST_POKEMONS,
    payload: { list: results, next, previus, count },
  };
};

export const requestPokemon = async payload => {
  const url = `${ROOT_URL}/${payload}/`;
  const result = await axios.get(url);
  const { data, status } = result;
  if ([200, 201].includes(status)) {
    return {
      type: REQUEST_POKEMON,
      payload: { pokemon: data, isLoadingPokemons: false },
    };
  }
  return {
    type: REJECT_POKEMON,
    payload: {},
  };
};
