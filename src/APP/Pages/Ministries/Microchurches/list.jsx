import React from 'react';

const MicrochurchList = ({ microchurches }) => {
  return (
    <div className="mt-4">
      <h3>Microchurches</h3>
      <ul>
        {microchurches.map(mc => (
          <li key={mc.MICROID}>{mc.MICROCHURCH}</li>
        ))}
      </ul>
    </div>
  );
};

export default MicrochurchList;
