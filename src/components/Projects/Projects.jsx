import React from "react";
import { Link } from "react-router-dom";
import "./Projects.style.css";
const Proyectos = () => {
  return (
    <React.Fragment>
      <main className="proyectos">
        <Link to="proyectos/web">
          <div className="card">
            <h1>Web</h1>
            <p>Proyects</p>
          </div>
        </Link>
        <Link to="proyectos/Mobile">
          <div className="card">
            <h1>Mobile</h1>
            <p>Proyects</p>
          </div>
        </Link>
      </main>
    </React.Fragment>
  );
};
export default Proyectos;
