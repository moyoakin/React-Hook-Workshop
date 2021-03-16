// useReducer: simple Counter
// 💯 simulate setState with an object OR function

import * as React from "react";

import { WorkShopNote } from "../../reusables/workshop-note";
import file from "../../exercise/useReducer/01.md";

const countReducer = (state, action) => {
  const { type, step } = action;
  switch (type) {
    case "INCREMENT": {
      return {
        ...state,
        count: state.count + step,
      };
    }
    default:
      throw new Error(`Unsupported action type" ${action.type}`);
  }
};

function Counter({ initialCount = 0, step = 1 }) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  });
  const { count } = state;
  const increment = () => dispatch({ type: "INCREMENT" });
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
