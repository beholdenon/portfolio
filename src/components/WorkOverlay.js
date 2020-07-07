import React from "react";
import workData from "../data/work.json";
import Button from "./Button.js";

function WorkOverlay( { workData, id }) {
	function closeModal() {
		document.getElementById("overlay").classList.remove("active");
    document.body.classList.remove("overlay-active");
	}

	return(
		<div class="overlay" id="overlay">
		  <div class="inner">
		    <div class="close-btn" onClick={(e)=>{e.preventDefault(); closeModal() }}>
		      X
		    </div>
		    <div class="content">
	      <div class="overlay-header">
		        <h3>{workData[id].client}</h3>
		        <h2>{workData[id].name}</h2>
		        <p>{workData[id].longDescription}</p>
		      </div>

		      {workData[id].details.map((detail, i) => (
		      	<div class="overlay-item">
			        <img src={detail.media} />
			        {(() => {
				        if (detail.description) { return <p>{detail.description}</p> }
				      })()}
			      </div>
		      ))}

		      {(() => {
		        if (workData[id].link) { return <Button href={workData[id].link} text="Launch Project" /> }
		      })()}
		      
		    </div>
		  </div>
		  <div class="bg"></div>
		</div>
	);
}

export default WorkOverlay;