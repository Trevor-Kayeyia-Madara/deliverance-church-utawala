import React from 'react'

function Accordion(props) {
    const [isOpen, setIsOpen] = React.useState(false);
  
    function handleToggle() {
      setIsOpen(!isOpen);
    }
  
    return (
      <div className="accordion">
        <div className="accordion-header" onClick={handleToggle}>
          <div className="accordion-heading">{props.heading}</div>
          <div className="accordion-icon">{isOpen ? <i className='fas fa-chevron-up' /> : <i className='fas fa-chevron-down' />}</div>
        </div>
        {isOpen && <div className="accordion-content">{props.content}</div>}
      </div>
    );
  }

export default Accordion