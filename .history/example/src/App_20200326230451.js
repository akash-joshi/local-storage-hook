import React from 'react'

import useLocalStorage from 'local-storage-hook'

export default () => {
  
  // const [localState, setLocalState] = useLocalStorage(key, defaultValue);
  const [login, setLogin] = useLocalStorage("login", false);

  return (
    <div>
      Hello
    </div>
  );
}