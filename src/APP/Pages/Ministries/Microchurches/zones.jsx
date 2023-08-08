import React, { useState } from 'react';
import MicrochurchList from './list';
import { Container, Dropdown, DropdownButton } from 'react-bootstrap';

const ZoneSelector = ({ zones, microchurches }) => {
  const [selectedZone, setSelectedZone] = useState(null);

  const handleZoneChange = (zoneId) => {
    const selected = zones.find(zone => zone.ZONEID === zoneId);
    setSelectedZone(selected);
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Zone Selector</h2>
      <DropdownButton
        id="zone-dropdown"
        title={selectedZone ? `${selectedZone.ZONE} - ${selectedZone.ZONENAME}` : 'Select Zone'}
        variant={selectedZone ? 'primary' : 'secondary'}
      >
        {zones.map(zone => (
          <Dropdown.Item
            key={zone.ZONEID}
            active={selectedZone && selectedZone.ZONEID === zone.ZONEID}
            onClick={() => handleZoneChange(zone.ZONEID)}
          >
            {zone.ZONE} - {zone.ZONENAME}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      {selectedZone && (
        <MicrochurchList microchurches={microchurches.filter(mc => mc.ZONEID === selectedZone.ZONEID)} />
      )}
    </Container>
  );
};
  export default ZoneSelector;