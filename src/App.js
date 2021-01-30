import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { GlobalStyles } from './styles';
import { Header } from './components';

import { Home, Education } from './views';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/education" component={Education} />
      </Switch>
      <GlobalStyles />
    </>
  );
}

export default App;
