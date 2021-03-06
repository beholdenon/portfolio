import React from "react";

function ThumbItem({ id, name, thumb, description, link, delay, action }) {
  return (
		<div className="thumb-item" data-aos="fade-up-right" data-aos-duration="400" data-aos-delay={delay} onClick={(e)=>{e.preventDefault(); action(id) }}>
      <div className="inner">
        <figure>
          <img src={thumb} alt={name} />
        </figure>
        <div className="text-inner">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
		</div>
	);
}

export default ThumbItem;