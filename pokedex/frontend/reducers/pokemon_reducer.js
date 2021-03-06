import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
    debugger
      return merge(newState, action.response.pokemon);
    default:
      return newState;
  }
};

export default pokemonReducer;
