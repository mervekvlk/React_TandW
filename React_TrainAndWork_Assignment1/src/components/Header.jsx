import React from 'react';
import { Container } from 'react-bootstrap';
import SearchBar from './SearchBar';
import '../App.css'; 

const Header = ({ onSearch }) => {
  return (
    <div className="header">
      <Container>
        <SearchBar onSearch={onSearch} />
        <h2 className="text-center mt-5" >Leziz Yemek Tarifleri</h2>
        <h2 className='text-center'></h2>
      </Container>
    </div>
  );
};

export default Header;