import React from "react";
import "./style.css";

function Score() {
    return (
        <div className="score center-align">
            <a href="/" className="logo center-align">Memory Game!</a>
            <div className="instructions center-align">
                Click an one image to begin, but don't click any one more than once
            </div>
        </div>
    );
}

export default Score;
