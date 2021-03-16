// useReducer: simple Counter
// 💯 simulate setState with an object OR function

import * as React from "react";

import { WorkShopNote } from "../../reusables/workshop-note";
import file from "../../exercise/useReducer/01.md";

const countReducer = (state, action) => ({
  ...state,
  ...(typeof action === "function" ? action(state) : action),
});

function Counter({ initialCount = 0, step = 1 }) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  });
  const { count } = state;
  const increment = () =>
    setState((currentState) => ({ count: currentState.count + step }));
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
