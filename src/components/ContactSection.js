import React, {useState} from "react";
import Heading from "./Heading";
import Button from "./Button";

function ContactSection() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const submit = e => {
		e.preventDefault();
		setName("");
		setEmail("");
		setMessage("");
	};

	return (
		<div className="section contact">
			<Heading title="Connect" description="Let's talk. Ping me using the form below." />
			<form onSubmit={submit}>
				<div className="form" data-aos="fade-up" data-aos-duration="600">
					<div className="row-2">
						<input 
							value={name}
							onChange={event => setName(event.target.value)}
							type="text" 
							placeholder="Name" 
							required
						/>
						<input 
							value={email}
							className="email"
							onChange={event => setEmail(event.target.value)}
							type="email" 
							placeholder="Email" 
							required
						/>
					</div>
					<textarea
						value={message}
						onChange={event => setMessage(event.target.value)}
						rows="30"
						placeholder="Message">
					</textarea>
					<button className="button">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default ContactSection;