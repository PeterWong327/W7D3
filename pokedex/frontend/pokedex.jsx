import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './components/pokemon/pokemon_index_container';
import { requestOnePokemon } from './actions/pokemon_actions';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  window.store = store;
  window.requestOnePokemon = requestOnePokemon;

  const Root = () => (
    <Provider store={store}>
      <HashRouter>
        <Route path="/" component={PokemonIndexContainer} />
      </HashRouter>
    </Provider>
  );


  ReactDOM.render(<Root />, document.getElementById('react-goes-here'));
});
