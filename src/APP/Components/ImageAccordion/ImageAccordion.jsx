import React, { useState } from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import './ImageAccordion.css'; // Import the CSS file for styling

const ImageAccordion = ({ imageSrc, accordionItems }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='part'>
      <h1 className='part-title'>Sunday Service</h1>
      <p className='part-text'>Join Us As We Fellowship Together</p>
    <div className="image-accordion">
      <div className="image-column">
        <img src={imageSrc} alt="dcutawala" />
      </div>
      <div className="accordion-column">
        {accordionItems.map((item, index) => (
          <div
            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
          >
            <div
              className="accordion-title"
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.title}</span>
              <div className="chevron-icon">
                {activeIndex === index ? <FaChevronDown /> : <FaChevronRight />}
              </div>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ImageAccordion;
