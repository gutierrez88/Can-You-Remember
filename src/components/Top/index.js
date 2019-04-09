import React from "react";
import "./style.css";

function Top (props) {
  return (
    <div className="top row z-depth-4 valign-wrapper">
    <div className="col s6 m5 push-m1 currentScore">
      Current Score: {props.current}
    </div>
    <div>
        <a href="https://gutierrez88.github.io/" className="valign-wrapper">
            <img className="logoRyan" src="./images/whiteLogo.png" alt="Francisco Gutierrez Logo"></img>
        </a>
    </div>
    <div className="col s6 m5 pull-m1 right-align">
      Best Score: {props.best}
    </div>
  </div>
  );
}
 
export default Top;