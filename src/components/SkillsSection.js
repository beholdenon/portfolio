import React from "react";
import Heading from "./Heading";

function SkillsSection({ skills }) {
	return (
		<div className="section skills">
			<Heading title="Skills/Languages" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium maximus tortor quis mattis. In nulla tortor, mattis quis sodales sed, interdum id quam." />
			<ul className="skill-list">
				{skills.map((skill, i) => (
					<li key={i} data-aos="fade-up" data-aos-duration="600">
						<div className="inner">
							{skill}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SkillsSection;