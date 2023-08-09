import React from 'react';
import Form from './form';
import microchurchesData from '../../../../assets/microchurches.json';
import zonesData from '../../../../assets/zones.json';
import ZoneSelector from './zones';
import YourParentComponent from './component';
function MicroChurches() {
  
  return (
    <div className="container d-flex justify-content-center align-items-center h-100%">
       <div className="microchurch-leader-message">
      <h3>MESSAGE FROM THE MICRO-CHURCH LEADER</h3>
      <p>
        I greet you in the name of Our Lord and Savior Jesus Christ. Welcome to the Micro Church page.
        All the believers devoted themselves to the apostles’ teaching, and to fellowship, and to sharing in meals
        (including the Lord’s Supper), and to prayer. Acts of the Apostles 2:42 NLT.
        According to the verse above, since the first Christian Church under the Apostles of Jesus Christ,
        fellowship played an integral part in the Christian Faith, it is the pillar and foundation of our Faith.
        Blessings. Shalom.
      </p>
    </div>
      <ZoneSelector zones={zonesData}/>
      <YourParentComponent  microchurches={microchurchesData}/>
      <Form />
    </div>
  );
}

export default MicroChurches;
