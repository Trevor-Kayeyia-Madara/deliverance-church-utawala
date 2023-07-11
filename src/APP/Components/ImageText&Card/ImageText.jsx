import React from 'react';
import './ImageText.css';

const ImageTextComponent = ({ name, line, imagePath, paragraphs }) => {
  return (
    <div className="container">
      <div className="left">
        <img src={imagePath} alt={name} />
        <h2>{name}</h2>
        <h3>{line}</h3>
      </div>
      <div className="right">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ImageTextComponent;
