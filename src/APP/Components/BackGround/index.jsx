import React from 'react';
import './style.css';
import Image from '../../Images/Pastor2.png';

function BackgroundImage() {
  return (
    <div className="bg-image">
      <div className="overlay"></div>
        <div className="context">
        <h1>2024 The Year Of THRESHING THE MOUNTAINS</h1>
          <p>"<i> Behold, I will make you into a new threshing sledge with sharp teeth;
You shall thresh the mountains and beat them small,
And make the hills like chaff.</i>"</p><br />
          <p className='verse'><i>ISAIAH 41:15</i></p>
        </div>
          <div className = 'image'>
            <img src={Image} alt='Pastor'/>
          </div>
        </div>
  );
}
export default BackgroundImage