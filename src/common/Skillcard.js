import React from "react";

export default function Skillcard({
  skills,
  image,
  name,
 
  ...rest
}) {
  return (
    <div className="testimonial-card" {...rest}>
      <div className="testimonial-body">
        <i className="fas fa-quote-left quote"></i>
        {skills}
        <i className="fas fa-quote-right quote"></i>
      </div>
      <div className="testimonial-image">
        <img src={image} alt="testimonial" />
        <div className="testimonial-details">
          <p>{name}</p>
        
        </div>
      </div>
    </div>
  );
}
