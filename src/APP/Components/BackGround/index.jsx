import React from 'react';
import './style.css';
import Image from '../../Images/Pastor2.png';

function BackgroundImage() {
  return (
    <div className="bg-image">
      <div className="overlay"></div>
        <div className="context">
        <h1>2025 The Year Of THRESHING THE MOUNTAINS</h1>
          <p>"<i> For what is our hope, our joy, or the crown in which we will glory in the presence of our Lord Jesus when he comes? Is it not you?
            </i>"</p><br />
          <p className='verse'><i>1ST THESSALONIANS 2:19</i></p>
        </div>
          <div className = 'image'>
            <img src={Image} alt='Pastor'/>
          </div>
        </div>
  );
}
export default BackgroundImage