import React, { useState, useEffect } from 'react';
import './style.css';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideshowTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);

    return () => clearInterval(slideshowTimer);
  },);

  const cards = [
    {
      image: 'image1.jpg',
      title: 'Card 1',
      content: 'This is the content of Card 1.',
    },
    {
      image: 'image2.jpg',
      title: 'Card 2',
      content: 'This is the content of Card 2.',
    },
    {
      image: 'image3.jpg',
      title: 'Card 3',
      content: 'This is the content of Card 3.',
    },
  ];

  return (
    <div className="slideshow">
      {cards.map((card, index) => (
        <div
          className={`card ${index === currentIndex ? 'active' : ''}`}
          key={index}
        >
          <img src={card.image} alt={`church ${index + 1}`} />
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
