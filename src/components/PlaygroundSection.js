import React from "react";
import ThumbItem from "./ThumbItem";
import Heading from "./Heading";
import Button from "./Button";

function PlaygroundSection({ playgroundItems }) {
	return (
		<div className="section playground">
			<Heading title="Playground" description="Some playful experiments I created in my off time. I do get outside occasionaly as well." />
			<div className="grid-container">
				{playgroundItems.map((playgroundItem, i) => (
					<ThumbItem key={i} {...playgroundItem} delay={i * 100} />
				))}
			</div>
			<Button href="https://codepen.io/beholdenon" text="View More On CodePen" animation="fade-up" />
		</div>
	);
}

export default PlaygroundSection;