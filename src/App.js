import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './styles';
import { Header } from './components';
import { Home, Education, Experience, Certificates, Contact } from './views';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
        <Route path="/certificates" component={Certificates} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <GlobalStyles />
    </>
  );
}

export default App;
