import React, { useState } from 'react';
import SearchComponent from './SearchComponent'; // Adjust the import path
import MicrochurchList from './list'; // Adjust the import path

const YourParentComponent = ({ microchurches }) => {
  const [filteredMicrochurches, setFilteredMicrochurches] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);

    if (newSearchTerm === '') {
      setFilteredMicrochurches([]);
    } else {
      const filteredItems = microchurches.filter(
        (item) => (item.ZONEID + '').toUpperCase().includes(newSearchTerm)
      );
      setFilteredMicrochurches(filteredItems);
    }
  };

  return (
    <div>
      <SearchComponent onSearch={handleSearch} />
      {searchTerm !== '' && <MicrochurchList microchurches={filteredMicrochurches} />}
    </div>
  );
};

export default YourParentComponent;
