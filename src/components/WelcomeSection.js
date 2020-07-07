import React from "react";
import Button from "./Button";

function WelcomeSection(props) {
	return (
		<div className="landing" id="landing">
        <h1 id="title">Brian Holden</h1>
        <p>{props.description}</p>
        <Button href="#" text="View Work" />
    </div>
	);
}

export default WelcomeSection;