// useEffect: HTTP requests

import * as React from 'react'
// 🐨 you'll want the following additional things from '../pokemon':
// fetchPokemon: the function we call to get the pokemon info
// PokemonInfoFallback: the thing we show while we're loading the pokemon info
// PokemonDataView: the stuff we use to display the pokemon info
import {PokemonForm} from '../../utils/pokemon'

import { WorkShopNote } from '../../reusables/workshop-note'
import file from './01.md'

function PokemonInfo({pokemonName}) {
    // 🐨 Have state for the pokemon (null)
    // 🐨 use React.useEffect where the callback should be called whenever the
    // pokemon name changes.
    // 💰 DON'T FORGET THE DEPENDENCIES ARRAY!
    // 💰 if the pokemonName is falsy (an empty string) then don't bother making the request (exit early).
    // 🐨 before calling `fetchPokemon`, clear the current pokemon state by setting it to null
    // 💰 Use the `fetchPokemon` function to fetch a pokemon by its name:
    //   fetchPokemon('Pikachu').then(
    //     pokemonData => { /* update all the state here */},
    //   )
    // 🐨 return the following things based on the `pokemon` state and `pokemonName` prop:
    //   1. no pokemonName: 'Submit a pokemon'
    //   2. pokemonName but no pokemon: <PokemonInfoFallback name={pokemonName} />
    //   3. pokemon: <PokemonDataView pokemon={pokemon} />
  
    // 💣 remove this
    return 'TODO'
  }

  function PokemonApp() {
    const [pokemonName, setPokemonName] = React.useState('')
  
    function handleSubmit(newPokemonName) {
      setPokemonName(newPokemonName)
    }
  
    return (
      <div className="pokemon-info-app">
        <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
        <hr />
        <div className="pokemon-info">
          <PokemonInfo pokemonName={pokemonName} />
        </div>
      </div>
    )
  }


  function App() {
    return (
      <div className="grid-container">
          <WorkShopNote file={file} />
          <PokemonApp />
      </div>
     
    )
  }
  
  export default App
