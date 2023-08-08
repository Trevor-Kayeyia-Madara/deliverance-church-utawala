import React, { useState } from 'react';
import { FormControl, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs'; // Import the search icon

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm.toUpperCase()); // Notify the parent component of the new search term
  };

  return (
    <div className="mb-3">
      <h3>Search Your Microchurch by Zone ID</h3>
      <div className="d-flex align-items-center">
        <FormControl
          type="text"
          placeholder="Search Zone ID"
          onChange={(event) => setSearchTerm(event.target.value)}
          value={searchTerm}
        />
        <Button variant="primary" className="search-button" onClick={handleSearch}>
          <BsSearch size={18} />
        </Button>
      </div>
    </div>
  );
};

export default SearchComponent;

