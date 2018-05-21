import axios from 'axios';

const ROOT_URL = 'https://pokeapi.co/api/v2/pokemon';

export const REQUEST_POKEMON = 'REQUEST_POKEMON';
export const FULLFILL_POKEMON = 'FULLFILL_POKEMON';
export const REJECT_POKEMON = 'REJECT_POKEMON';

export const REQUEST_POKEMONS = 'REQUEST_POKEMONS';
export const FULLFILL_POKEMONS = 'FULLFILL_POKEMONS';
export const REJECT_POKEMONS = 'REJECT_POKEMONS';

export const REQUEST_PAG_POKEMONS = 'REQUEST_PAG_POKEMONS';
export const FULLFILL_PAG_POKEMONS = 'FULLFILL_PAG_POKEMONS';

const fetch = async (name, offset = 0) => {
  let url;
  if (name) {
    url = `${ROOT_URL}/${name}/`;
  } else {
    url = `${ROOT_URL}/?limit=40&offset=${offset}`;
  }
  return axios.get(url);
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
    const result = await fetch();
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
    const result = await fetch(name);
    return dispatch(fullfillPokemon(result));
  };
};

const paginatePokemon = name => {
  return async (dispatch, getState) => {
    await dispatch(requestPokemons);
    const {
      pokemons: {
        pokemons: { list },
      },
    } = getState();
    const offset = list.length;
    const result = await fetch('', offset);
    result.data.results.unshift(...list);
    return dispatch(fullfillPokemons(result));
  };
};
export { loadPokemons, loadPokemon, paginatePokemon };
