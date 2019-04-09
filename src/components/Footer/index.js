import React from "react";
import "./style.css";

function Footer(props) {
    return (
        <div className="innerFooter row valign-wrapper">
            <div className="first col s6 push-s2">
                Wins: {props.wins}
            </div>
            <div className="third col s6 pull-s2 right-align">
                Loses: {props.loses}
            </div>
        </div>
    );
}

export default Footer;
