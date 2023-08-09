import React, { useState } from 'react';
import { Card, Pagination } from 'react-bootstrap';
import './list.css';

const MicrochurchList = ({ microchurches }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = microchurches.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(microchurches.length / cardsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mt-4">
      <h3>Microchurches</h3>
      <div className="microchurches-container">
        {currentCards.map(mc => (
          <Card key={mc.MICROID} className="microchurch-card">
            <Card.Body>
              <Card.Title>{mc.MICROCHURCH}</Card.Title>
              <Card.Text>Region: {mc.REGION}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="pagination-container mt-3">
        <Pagination className="justify-content-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
};

export default MicrochurchList;
