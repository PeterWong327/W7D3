import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
// import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer, // {pokemon: action.pokemon}
  // ui: uiReducer,
});

export default rootReducer;
