import React from 'react';
import { Container, Table } from 'react-bootstrap';

const ZoneSelector = ({ zones }) => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Check Your Residence Grouped in Zones</h2>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Zone ID</th>
              <th>Zone</th>
              <th>Zone Name</th>
            </tr>
          </thead>
          <tbody>
            {zones.map((zone) => (
              <tr key={zone.ZONEID}>
                <td>{zone.ZONEID}</td>
                <td>{zone.ZONE}</td>
                <td>{zone.ZONENAME}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default ZoneSelector;
