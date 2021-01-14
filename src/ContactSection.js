import React from "react";
import Heading from "./Heading";
import Button from "./Button";

function ContactSection() {
	return (
		<div className="section contact">
			<Heading title="Connect" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium maximus tortor quis mattis. In nulla tortor, mattis quis sodales sed, interdum id quam." />
			<div className="form" data-aos="fade-up" data-aos-duration="600">
				<div className="row-2">
					<input type="text" id="name" name="fname" placeholder="Name" />
					<input className="email" type="text" id="email" name="email" placeholder="Email" />
				</div>
				<textarea name="message" rows="30" placeholder="Message"></textarea>
				<Button href="#" text="Send" />
			</div>
		</div>
	);
}

export default ContactSection;