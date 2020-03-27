import React, { useState, useEffect } from "react";

export default function useLocalStorage(key, initialState) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (document.localStorage.getItem(key))
      setState(JSON.parse(document.localStorage.getItem(key)));
  }, []);

  const returnedNewState = newState => {
    setState(newState);
    document.localStorage.setItem(key, JSON.stringify(newState));
  };

  return [state, returnedNewState];
}
