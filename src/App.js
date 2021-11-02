import React from "react";
import Layout from "./components/Layout";
import Contacto from "./components/Contact/Contact";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/sobremi">
            <SobreMi />
          </Route>
          <Route exact path="/proyectos">
            <Proyectos />
          </Route>
          <Route exact path="/contacto">
            <Contacto />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
