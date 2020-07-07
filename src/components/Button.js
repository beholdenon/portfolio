import React from "react";

function Button(props) {
	return (
		<div data-aos={props.animation ? "fade-up" : ''}>
			<button className="button" href={props.href}>{props.text}</button>
		</div>
	);
}

export default Button;