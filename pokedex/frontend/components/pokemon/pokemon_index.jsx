import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <ul>{this.props.allPokemon.map((poke) => (<li key={poke.id}>{poke.name} <img src={poke.image_url} width="100" /></li>))} </ul>
    );
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }
}

export default PokemonIndex;
