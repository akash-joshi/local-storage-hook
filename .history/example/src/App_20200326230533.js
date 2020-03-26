import React, { useEffect } from "react";

import useLocalStorage from "local-storage-hook";

export default () => {
  // const [localState, setLocalState] = useLocalStorage(key, defaultValue);
  const [login, setLogin] = useLocalStorage("login", false);

  console.log(login);

  useEffect(() => {
    console.log(login);
    setLogin(true);
  }, []);

  return <div>Hello</div>;
};
