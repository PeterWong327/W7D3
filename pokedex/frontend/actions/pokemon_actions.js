import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

export const receiveAllPokemon = (response) => ({
    type: RECEIVE_ALL_POKEMON,
    response: response
});

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestOnePokemon = (pokemonId) => (dispatch) => (
  APIUtil.fetchOnePokemon(pokemonId)
    .then(poke => dispatch(receiveAllPokemon(poke)))
);
