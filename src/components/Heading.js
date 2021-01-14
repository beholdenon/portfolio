import React from "react";

function Work(props) {
	return (
		<div className="heading" data-aos="fade-up">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</div>
	);
}

export default Work;