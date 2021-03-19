// useDebugValue: useMedia

import * as React from "react";

import { WorkShopNote } from "../../reusables/workshop-note";
import file from "./01.md";

function useMedia(query, initialState = false) {
  const [state, setState] = React.useState(initialState);
  // 🐨 call React.useDebugValue here.
  // 💰 here's the formatted label I use: `\`${query}\` => ${state}`

  React.useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);
    function onChange() {
      if (!mounted) {
        return;
      }
      setState(Boolean(mql.matches));
    }

    mql.addListener(onChange);
    setState(mql.matches);

    return () => {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [query]);

  return state;
}

function Box() {
  const isBig = useMedia("(min-width: 1000px)");
  const isMedium = useMedia("(max-width: 999px) and (min-width: 700px)");
  const isSmall = useMedia("(max-width: 699px)");
  const color = isBig ? "green" : isMedium ? "yellow" : isSmall ? "red" : null;

  return <div style={{ width: 200, height: 200, backgroundColor: color }} />;
}

function App() {
  return (
    <div className="grid-container">
      <WorkShopNote file={file} />
      <Box />
    </div>
  );
}

export default App;
