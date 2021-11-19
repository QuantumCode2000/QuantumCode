import React from "react";
import "./Home.style.css";
import LetterAnimated from "../Customs/LetterAnimated/LetterAnimated";
import MyLifeCycle from "../Customs/MyLifeCycle/MyLifeCycle";
import SkillsLetter from "../Customs/SkillsLetter/SkillsLetter";

const Home = () => {
  return (
    <React.Fragment>
      <section className="home">
        <main className="home-container">
          <LetterAnimated />
          <MyLifeCycle />
          <SkillsLetter />
        </main>
      </section>
    </React.Fragment>
  );
};
export default Home;
