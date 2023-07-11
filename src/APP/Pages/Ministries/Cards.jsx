import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Card = ({ imageSrc, title, description, link }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <Link to={link} className="card-button">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export  default Card;