# local-storage-hook

> React Hook for Local Storage

[![NPM](https://img.shields.io/npm/v/local-storage-hook.svg)](https://www.npmjs.com/package/local-storage-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm add local-storage-hook
```

## Signature

```jsx
const [localState, setLocalState] = useLocalStorage(key, defaultValue);
```

## Usage

```jsx
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
```

## License

GPLV3 © [akash-joshi](https://github.com/akash-joshi)
