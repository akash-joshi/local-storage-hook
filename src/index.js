import React, { useState, useEffect } from "react";

export default function useLocalStorage(key, initialState) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (localStorage.getItem(key)) {
      let gottenItem = localStorage.getItem(key);
      let nextState = gottenItem;
      try {
        nextState = JSON.parse(gottenItem);
      } catch (err) {
        nextState = gottenItem;
      }
      setState(nextState);
    }
  }, []);

  const returnedNewState = newState => {
    setState(newState);
    localStorage.setItem(key, JSON.stringify(newState));
  };

  return [state, returnedNewState];
}
