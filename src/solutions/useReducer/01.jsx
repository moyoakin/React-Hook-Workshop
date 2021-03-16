// useReducer: simple Counter

import * as React from "react";

import { WorkShopNote } from "../../reusables/workshop-note";
import file from "../../exercise/useReducer/01.md";
<<<<<<< HEAD
=======

const countReducer = (state, newState) => newState;
>>>>>>> 3f36361ab655da44b59a486937e4e57d4d8c72c3

function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = React.useReducer(countReducer, initialCount);

  const increment = () => setCount(count + step);
  return <button onClick={increment}>{count}</button>;
}

function App() {
  return (
    <div className="grid-container">
      <WorkShopNote file={file} />
      <div className="totally-centered">
        <Counter />
      </div>
    </div>
  );
}

export default App;
