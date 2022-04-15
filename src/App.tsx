import React from 'react';
import { GlobalStyle } from './common/reset';
import RootRouter from './router/rootRouter';

function App() {
  return (
    <>
      <GlobalStyle />
      <RootRouter />
    </>
  );
}

export default App;
