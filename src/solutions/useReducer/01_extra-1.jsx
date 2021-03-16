// useReducer: simple Counter
// 💯 accept the step as the action

import * as React from "react";

import { WorkShopNote } from "../../reusables/workshop-note";
import file from "../../exercise/useReducer/01.md";

const countReducer = (state, step) => state + step;

function Counter({ initialCount = 0, step = 1 }) {
  const [count, changeCount] = React.useReducer(countReducer, initialCount);
  const increment = () => changeCount(step);
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
