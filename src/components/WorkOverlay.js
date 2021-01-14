import React from "react";
import Button from "./Button.js";

function WorkOverlay( { workData, id, closeAction }) {	
	return(
		<div className="overlay" id="overlay">
		  <div className="inner">
		  	<div className="close-btn" onClick={closeAction}>X</div>
			  <div className="modal-inner">
			    <div className="content">

		      	<div className="overlay-header">
			        <h3>{workData[id].client}</h3>
			        <h2>{workData[id].name}</h2>
			        <p>{workData[id].longDescription}</p>
			      </div>

			      {workData[id].details.map((detail, i) => (
			      	<div key={i} className="overlay-item">
				        <img src={detail.media} alt={detail.alt} />
				        {(() => {
					        if (detail.description) { return <p>{detail.description}</p> }
					      })()}
				      </div>
			      ))}

			      {(() => {
			        if (workData[id].link) { return <a className="button" href={workData[id].link}>Launch Project</a> }
			      })()}

			    </div>
			  </div>
			 </div>
		  <div className="bg"></div>
		</div>
	);
}

export default WorkOverlay;