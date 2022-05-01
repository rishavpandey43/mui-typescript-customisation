import React from 'react';
import ReactDOM from 'react-dom/client';

import AppJSX from './AppJSX';
import AppTSX from './AppTSX';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <h1>Following component is using JSX</h1>
    <AppJSX />
    <h1>Following component is using TSX</h1>
    <AppTSX />
  </React.StrictMode>
);
