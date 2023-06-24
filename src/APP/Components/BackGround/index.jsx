import React from 'react';
import './style.css';
import Image from '../../Images/Pastor2.png';

function BackgroundImage() {
  return (
    <div className="bg-image">
      <div className="overlay"></div>
        <div className="context">
        <h1>2023 The Year Of Re-Digging And Repossessing</h1>
          <p>"<i> And Isaac dug again the wells of water which they had dug in the days of Abraham his father, for the Philistines had stopped them up after the death of Abraham. He called them by the names which his father had called them.</i>"</p><br />
          <p className='verse'><i>Genesis 26:18-22</i></p>
        </div>
          <div className = 'image'>
            <img src={Image} alt='Pastor'/>
          </div>
        </div>
  );
}
export default BackgroundImage