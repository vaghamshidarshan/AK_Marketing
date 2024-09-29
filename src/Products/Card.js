


// Card.js
import React from "react";

const Card = ({ title, description, category, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" /> {/* Use the image prop */}
      <h3>{title}</h3>
      <p>{description}</p>
      {/* <p>{Details}</p> */}
      <p>{category}</p>
    </div>
  );
};

export default Card;
