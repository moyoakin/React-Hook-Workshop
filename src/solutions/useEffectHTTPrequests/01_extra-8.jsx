// useEffect: HTTP requests
import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
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
    // this will be handled by the error boundary
    throw error;
  } else if (status === "resolved") {
    return <PokemonDataView pokemon={pokemon} />;
  }

  throw new Error("It is impossilbe to get here!");
}

function ErrorFallBack({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      There was an error:{" "}
      <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
}

function PokemonApp() {
  const [pokemonName, setPokemonName] = React.useState("");

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName);
  }

  function handleReset() {
    setPokemonName("");
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <ErrorBoundary
          FallbackComponent={ErrorFallBack}
          onReset={handleReset}
          resetKeys={[pokemonName]}
        >
          <PokemonInfo pokemonName={pokemonName} />
        </ErrorBoundary>
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
