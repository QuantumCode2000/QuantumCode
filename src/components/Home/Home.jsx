import React, { useState } from "react";
import "./Home.style.css";
const Home = () => {
  const [esta, setEsta] = useState(false);
  return (
    <React.Fragment>
      <section className="home">
        <main className="home-container">
          <h1 className="home-text">
            <span>H</span>
            <span>i</span>
            <span>,</span>
            <br />
            <span>I</span>
            <span>’</span>
            <span>m</span>
            <span> </span>
            <span className="home-J">{"J"}</span>
            <span>o</span>
            <span>r</span>
            <span>g</span>
            <span>e</span>
            <span>,</span>
            <br />
            <span>w</span>
            <span>e</span>
            <span>{"b "}</span>
            <span>d</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
          </h1>
        </main>
      </section>
    </React.Fragment>
  );
};
export default Home;
