import React from "react";
import Heading from "./Heading";

function SkillsSection({ skills }) {
	return (
		<div className="section skills">
			<Heading title="Skills/Languages" description="As a well diversified creative I have years of experience as a creative professional, front-end developer and have had some full-stack experience." />
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