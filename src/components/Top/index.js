import React from "react";
import "./style.css";

function Top (props) {
  return (
    <div className="top row z-depth-4 valign-wrapper">
    <div className="col s6 m3 offset-m1 currentScore">
      Current Score: {props.current}
    </div>
    <div className="col s5 m4 offset-m3 right-align">
      Best Score: {props.best}
    </div>
  </div>
  );
}
 
export default Top;