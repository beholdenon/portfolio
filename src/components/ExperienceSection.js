import React from "react";
import Heading from "./Heading";
import Button from "./Button";

function ExperienceSection({ logos }) {
	return (
		<div className="section experience">
			<Heading title="Experience" description="In my 18 years I have had the pleasure and amazing opportunity to work with some amazing brands on award-winning campaigns. Below are a just a few." />
			<ul className="logos">
				{logos.map((logo, i) => (
					<li key={i} data-aos="fade-up" data-aos-duration="400" data-aos-delay={i * 100}>
						<img src={logo.thumb} alt={logo.name} />
					</li>
				))}
			</ul>
			<Button href="#" text="Download Resume" animation="fade-up" />
		</div>
	);
}

export default ExperienceSection;