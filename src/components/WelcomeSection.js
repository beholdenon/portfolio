import React from "react";
import scrollTo from "../scrollTo";

function WelcomeSection(props) {
	return (
		<div className="landing" id="landing">
        <h1 id="title">Brian Holden</h1>
        <p>{props.description}</p>
        <button className="button" href="#" onClick={(e) => {e.preventDefault(); scrollTo(window, 0, window.innerHeight); }}>View Work</button>
    </div>
	);
}

export default WelcomeSection;