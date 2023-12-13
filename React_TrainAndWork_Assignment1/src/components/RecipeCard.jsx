import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../css/RecipeCard.css';

const RecipeCard = ({ recipe, onSelect, isAuthenticated, onFavoriteClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    if (!isAuthenticated) {
      alert('Giriş yapmadınız. Favorilere eklemek için giriş yapın.');
      return;
    }

    if (!isFavorite) {
      setIsFavorite(true);
      onFavoriteClick(recipe.id); 
    }
  };

  return (
    <Card className="recipe-card m-2" >
      <Card.Img variant="top" src={recipe.image} alt={recipe.name} onClick={() => onSelect(recipe)} />
      <Card.Body>
        <Card.Title onClick={() => onSelect(recipe)} >{recipe.name}</Card.Title>
        <Card.Text>{recipe.category}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Button variant="outline-danger" onClick={handleFavoriteClick}>
            <FontAwesomeIcon icon={faHeart} /> {isFavorite ? recipe.favorites : (recipe.favorites + 1)}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
