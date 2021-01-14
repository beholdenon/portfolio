import React, {useState} from "react";
import ThumbItem from "./ThumbItem";
import Heading from "./Heading";
import WorkOverlay from './WorkOverlay';

function WorkSection({ workItems, action }) {

	const [activeModalId, setActiveModalId] = useState(0);

	const launchModal = (id) => {
    setActiveModalId(id);
    document.getElementById("overlay").classList.add("active");
    document.body.classList.add("overlay-active");
    document.addEventListener("keydown", escFunction, false);
  }

  const closeModal = () => {
    document.getElementById("overlay").classList.remove("active");
    document.body.classList.remove("overlay-active");
  }

  const escFunction = (event) => {
    if(event.keyCode === 27) {
      closeModal();
    }
  }

	return (
		<div>
			<div className="section work">
				<Heading title="Latest Work" description="A small collection of my most recent campaigns." />
				<div className="grid-container">
					{workItems.map((workItem, i) => (
						<ThumbItem key={i} action={launchModal} {...workItem} delay={i * 100} />
					))}
				</div>
			</div>
						<WorkOverlay id={activeModalId} workData={workItems} closeAction={closeModal} />
						</div>
	);
}

export default WorkSection;