import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer, //{action.pokemon}
  // items: itemsReducer,
});

export default entitiesReducer;
