import React from 'react';
import './image.css'
const ImageCard = ({ imageSrc, heading }) => {
  return (
    <div className="image-card">
      <img src={imageSrc} alt="Card" />
      <h2 className="card-heading">{heading}</h2>
    </div>
  );
};

export default ImageCard;

