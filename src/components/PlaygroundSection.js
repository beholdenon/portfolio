import React from "react";
import ThumbItem from "./ThumbItem";
import Heading from "./Heading";
import Button from "./Button";

function PlaygroundSection({ playgroundItems }) {
	return (
		<div className="section playground">
			<Heading title="Playground" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium maximus tortor quis mattis. In nulla tortor, mattis quis sodales sed, interdum id quam." />
			<div className="grid-container">
				{playgroundItems.map((playgroundItem, i) => (
					<ThumbItem key={i} {...playgroundItem} delay={i * 100} />
				))}
			</div>
			<Button href="#" text="View More On CodePen" animation="fade-up" />
		</div>
	);
}

export default PlaygroundSection;