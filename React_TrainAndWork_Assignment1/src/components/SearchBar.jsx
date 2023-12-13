import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <InputGroup className="mb-3 mt-5">
      <FormControl
        placeholder="Canın ne çekiyor?"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <Button variant="outline-secondary" onClick={handleSearchClick}>
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </InputGroup>
  );
};

export default SearchBar;