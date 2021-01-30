import React from 'react';

import { GlobalStyles } from './styles';
import { Header } from './components';

import { Home } from './views';

function App() {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyles />
    </>
  );
}

export default App;
