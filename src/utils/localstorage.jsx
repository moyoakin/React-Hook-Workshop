import React from "react";

/**
 * 
 * @param {*} key unique identifier used in the local storage 
 * @param {*} defaultValue the value to be stored in the local storage
 * @param {*} param2 the serialization and deserialization mechnism to serialize value stored in the local storage use by default JSON perse or JSON stringify
 * Test comment for my user change
 * 
 */
export default function useLocalStorageState(
  key,
  defaultValue = "",
  { serialize = JSON.stringify, deSerialize = JSON.parse } = {}
) {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      try {
        return deSerialize(valueInLocalStorage);
      } catch (error) {
        window.localStorage.removeItem(key);
      }
    }
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  })

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);
  return [state, setState];
}
