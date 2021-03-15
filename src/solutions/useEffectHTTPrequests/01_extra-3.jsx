// useEffect: HTTP requests
// 💯 store the state in an object

import * as React from "react";
// 🐨 you'll want the following additional things from '../pokemon':
// fetchPokemon: the function we call to get the pokemon info
// PokemonInfoFallback: the thing we show while we're loading the pokemon info
// PokemonDataView: the stuff we use to display the pokemon info
import {
  PokemonForm,
  PokemonInfoFallback,
  PokemonDataView,
  fetchPokemon,
} from "../../utils/pokemon";

import { WorkShopNote } from "../../reusables/workshop-note";
import file from "../../exercise/useEffectHTTPrequests/01.md";

function PokemonInfo({ pokemonName }) {
  //   const [pokemon, setPokemon] = React.useState(null);
  //   const [error, setError] = React.useState(null);
  //   const [status, setStatus] = React.useState("idle");

  // const [ state, setState] = React.useState({ status: 'idle', pokemon: null, error: null });
  // state = { status: 'idle', pokemon: null, error: null }

  //object destructuring

  const [state, setState] = React.useState({
    status: "idle",
    pokemon: null,
    error: null,
  });
  console.log(state);

  const { status, pokemon, error } = state;

  React.useEffect(() => {
    if (!pokemonName) {
      return;
    }
    setState({ status: "pending" });
    fetchPokemon(pokemonName).then(
      (pokemon) => {
        setState({ pokemon, status: "resolved" });
      },
      (error) => {
        setState({ error, status: "rejected" });
      }
    );
  }, [pokemonName]);

  if (status === "idle") {
    return "Submit a pokemon";
  } else if (status === "pending") {
    return <PokemonInfoFallback name={pokemonName} />;
  } else if (status === "rejected") {
    return (
      <div role="alert">
        There was an error:{" "}
        <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
      </div>
    );
  } else if (status === "resolved") {
    return <PokemonDataView pokemon={pokemon} />;
  }

  throw new Error("It is impossilbe to get here!");
}

function PokemonApp() {
  const [pokemonName, setPokemonName] = React.useState("");

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName);
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="grid-container">
      <WorkShopNote file={file} />
      <PokemonApp />
    </div>
  );
}

export default App;
