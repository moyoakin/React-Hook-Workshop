// useEffect: HTTP requests
<<<<<<< HEAD
=======
// 💯 re-mount the error boundary

>>>>>>> 89a61f70f0e7ea697395fac5b3675148ef4d31e7
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

class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    const { error } = this.state;
<<<<<<< HEAD

    if (error) {
      return <this.props.FallBackComponent error={error} />;
    }

=======
    if (error) {
      return <this.props.FallBackComponent error={error} />;
    }
>>>>>>> 89a61f70f0e7ea697395fac5b3675148ef4d31e7
    return this.props.children;
  }
}

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
<<<<<<< HEAD
    // this will be handled by the error boundary
=======
>>>>>>> 89a61f70f0e7ea697395fac5b3675148ef4d31e7
    throw error;
  } else if (status === "resolved") {
    return <PokemonDataView pokemon={pokemon} />;
  }

  throw new Error("It is impossilbe to get here!");
}

<<<<<<< HEAD
function ErrorFallBack({ error }) {
  return (
    <div role="alert">
      There was an error:{" "}
      <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
    </div>
  );
}

=======
>>>>>>> 89a61f70f0e7ea697395fac5b3675148ef4d31e7
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
        <ErrorBoundary key={pokemonName} FallBackComponent={ErrorFallBack}>
          <PokemonInfo pokemonName={pokemonName} />
        </ErrorBoundary>
      </div>
    </div>
  );
}

<<<<<<< HEAD
=======
function ErrorFallBack({ error }) {
  return (
    <div role="alert">
      There was an error:{" "}
      <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
    </div>
  );
}

>>>>>>> 89a61f70f0e7ea697395fac5b3675148ef4d31e7
function App() {
  return (
    <div className="grid-container">
      <WorkShopNote file={file} />
      <PokemonApp />
    </div>
  );
}

export default App;
