import axios from 'axios';

const ROOT_URL = 'https://pokeapi.co/api/v2/pokemon';

export const REQUEST_POKEMON = 'REQUEST_POKEMON';
export const FULLFILL_POKEMON = 'FULLFILL_POKEMONS';
export const REJECT_POKEMON = 'REJECT_POKEMONS';

export const REQUEST_POKEMONS = 'REQUEST_POKEMONS';
export const FULLFILL_POKEMONS = 'FULLFILL_POKEMONS';
export const REJECT_POKEMONS = 'REJECT_POKEMONS';

const fetchPokemons = async () => {
  return axios.get(`${ROOT_URL}/?limit=40`);
};

const fetchPokemon = async name => {
  return axios.get(`${ROOT_URL}/${name}/`);
};

const requestPokemons = () => {
  return {
    type: REQUEST_POKEMONS,
  };
};

const fullfillPokemons = result => {
  const {
    data: { results, next, previus, count },
  } = result;
  return {
    type: FULLFILL_POKEMONS,
    payload: { list: results, next, previus, count },
  };
};

const loadPokemons = () => {
  return async dispatch => {
    dispatch(requestPokemons);
    const result = await fetchPokemons();
    return dispatch(fullfillPokemons(result));
  };
};

const requestPokemon = () => {
  return {
    type: REQUEST_POKEMON,
  };
};

const fullfillPokemon = result => {
  const { data } = result;
  return {
    type: FULLFILL_POKEMON,
    payload: { pokemon: data },
  };
};

const loadPokemon = name => {
  return async dispatch => {
    dispatch(requestPokemon);
    const result = await fetchPokemon(name);
    console.log('result', result);
    return dispatch(fullfillPokemon(result));
  };
};

export { loadPokemons, loadPokemon };
