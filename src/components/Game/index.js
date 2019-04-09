import React from "react";
import "./style.css";

function Game(props) {
    return (
        <div className="images container col s3 center-align">
            <img src={props.image} key={props.id} alt={props.id} className="tiles z-depth-2 responsive-img" onClick={() => props.handleScore(props.id)}></img>
        </div>
    );
}

export default Game;