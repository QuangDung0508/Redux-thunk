import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from './Store';
import {GetPokemon} from './actions/PokemonActions';

function App() {

  const dispatch = useDispatch();
  const [ pokemonName, setPokemonName ] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(GetPokemon(pokemonName));
  }

  const pokemonState = useSelector( (state: RootStore) => state.pokemon);
  return (
    <div className="App">
      <input type="text" onChange={handleChange}/>
      <button onClick={handleSubmit}>Search</button>
      {pokemonState.pokemon && (
        <div>
          <img src={pokemonState.pokemon.sprites.front_default} alt=""></img>
          {
            pokemonState.pokemon.abilities.map((item,index) => {
            return <div key={index}>
                      <p>name: {item.ability.name}</p>
                      <p>url: {item.ability.url}</p>
                      <p>-------------------------</p>
                  </div>
            })
          }
          <p>Url: {pokemonState.pokemon.sprites.front_default}</p>
          {
            pokemonState.pokemon.stats.map((item,index) => {
            return <div key={index}>
                      <p>base_stat: {item.base_stat}</p>
                      <p>stat name: {item.stat.name}</p>
                      <p>-------------------------</p>
                  </div>
            })
          }
          
        </div>
      )}
    </div>
  );
}

export default App;
