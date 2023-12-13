import React from 'react';
import { Modal } from 'react-bootstrap';
import SuggestedRecipeCard from './SuggestedRecipeCard';
import '../App.css';

const RecipeDetailModal = ({ show, onHide, recipe }) => {
  return (

    <Modal show={show} onHide={onHide} >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {recipe.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SuggestedRecipeCard recipe={recipe} />
      </Modal.Body>
      </Modal>
    
    
  );
};

export default RecipeDetailModal;
