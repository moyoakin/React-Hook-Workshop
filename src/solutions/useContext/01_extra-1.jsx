// useContext: simple Counter

import * as React from "react";

import { WorkShopNote } from "../../reusables/workshop-note";
import file from "../../exercise/useContext/01.md";

const CountContext = React.createContext([0, () => {}]);

// 🐨 create a CountProvider component here that does this:

function CountProvider(props) {
  const [count, setCount] = React.useState(0);
  const value = [count, setCount];

  return <CountContext.Provider value={value} {...props} />;
}
//   🐨 get the count state and setCount updater with React.useState
//   🐨 create a `value` array with count and setCount
//   🐨 return your context provider with the value assigned to that array and forward all the other props
//   💰 more specifically, we need the children prop forwarded to the context provider

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const [count] = useCount();

  return <div>{`The current count is ${count}`}</div>;
}

function useCount() {
  const context = React.useContext(CountContext);
  if (!context) {
    throw new Error(`Counter must be used within a CountProvider`);
  }
  return context;
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext

  const [, setCount] = useCount();
  const increment = () => setCount((c) => c + 1);

  return <button onClick={increment}>Increment count</button>;
}

function ContextApp() {
  return (
    <div>
      {/*
        🐨 wrap these two components in the CountProvider so they can access
        the CountContext value
      */}

      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  );
}

function App() {
  return (
    <div className="grid-container">
      <WorkShopNote file={file} />
      <ContextApp />
    </div>
  );
}

export default App;
