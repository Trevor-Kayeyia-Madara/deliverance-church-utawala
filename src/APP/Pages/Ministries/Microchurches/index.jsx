import React from 'react';
import Form from './form';
import microchurchesData from '../../../../assets/microchurches.json';
import zonesData from '../../../../assets/zones.json';
import ZoneSelector from './zones';
import YourParentComponent from './component';
function MicroChurches() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100%">
      <Form />
      <ZoneSelector zones={zonesData}/>
      <YourParentComponent  microchurches={microchurchesData}/>
    </div>
  );
}

export default MicroChurches;
