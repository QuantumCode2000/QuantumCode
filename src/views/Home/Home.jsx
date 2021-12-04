import React from "react";
import "./Home.style.css";
import LetterAnimated from "../../components/customs/LetterAnimated/LetterAnimated";
import MyLifeCycle from "../../components/customs/MyLifeCycle/MyLifeCycle";
import SkillsLetter from "../../components/customs/SkillsLetter/SkillsLetter";

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
