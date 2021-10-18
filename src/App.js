import React from 'react';
import Layout from './components/Layout'
import Contacto from './components/Contact/Contact';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Projects/Projects';
import Home from './components/Home/Home';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/sobremi" component={SobreMi} />
          <Route exact path="/proyectos" component={Proyectos} />
          <Route exact path="/contacto" component={Contacto} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
