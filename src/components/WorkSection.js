import React from "react";
import ThumbItem from "./ThumbItem";
import Heading from "./Heading";

function WorkSection({ workItems, action }) {
	return (
		<div className="section work">
			<Heading title="Latest Work" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium maximus tortor quis mattis. In nulla tortor, mattis quis sodales sed, interdum id quam." />
			<div className="grid-container">
				{workItems.map((workItem, i) => (
					<ThumbItem key={i} action={action} {...workItem} delay={i * 100} />
				))}
			</div>
		</div>
	);
}

export default WorkSection;