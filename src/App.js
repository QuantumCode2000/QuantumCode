import React from "react";
import Layout from "./components/Layout";
import Contacto from "./components/contact/Contact";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Projects/Projects";
import Home from "./views/Home/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobremi" element={<SobreMi />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
