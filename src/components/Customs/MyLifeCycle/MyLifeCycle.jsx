import React from "react";
import "./MyLifeCycle.styles.css";
const MyLifeCycle = () => {
  return (
    <div className="my-life-cycle">
      <span>while</span>
      <span>{"("}</span>
      <span className="me">me.</span>
      <span>isAlive</span>
      <span>{"("}</span>
      <span>{")"}</span>
      <span>{")"}</span>
      <span>{"{"}</span>
      <br />
      <p className="me">me.eat()</p>
      <p className="me">{"me.sleep()"}</p>
      <p className="me">{"me.code()"}</p>
      <span>{"}"}</span>
    </div>
  );
};

export default MyLifeCycle;
