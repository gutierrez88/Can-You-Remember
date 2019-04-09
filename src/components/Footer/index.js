import React from "react";
import "./style.css";

function Footer(props) {
    return (
        <div className="innerFooter row valign-wrapper">
            <div className="first col s6 center-align">
                Wins: {props.wins}
            </div>
            <div className="third col s6 center-align">
                Loses: {props.loses}
            </div>
        </div>
    );
}

export default Footer;
