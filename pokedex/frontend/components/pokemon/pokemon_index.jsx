import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <section className="pokedex">
        <ul>
          {this.props.allPokemon.map(poke => <PokemonIndexItem key={poke.id} poke={poke}/> )}
        </ul>
      </section>
    );
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }
}

export default PokemonIndex;
