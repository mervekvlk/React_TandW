import React from 'react';
import { Card, Badge, ListGroup, Row, Col } from 'react-bootstrap';
import '../css/SuggestedRecipeCard.css';

const SuggestedRecipeCard = ({ recipe }) => {
  return (
    <Card className="mb-4 shadow-sm suggested-recipe-card">
      <Row noGutters>
        <Col md={4}>
          <Card.Img variant="top" src={recipe.image} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{recipe.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Kategori: {recipe.category}
            </Card.Subtitle>
            <div className="mb-2">
              {recipe.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="mr-2">{tag}</Badge>
              ))}
            </div>
            <h5>Malzemeler:</h5>
            <ListGroup variant="flush" className="mb-3">
              {recipe.ingredients.map((ingredient, index) => (
                <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
              ))}
            </ListGroup>
            <h5 style={{ fontWeight: 'bold' }}>Yapılış Adımları:</h5>
            {recipe.steps.map((step, index) => (
              <p key={index} className="mb-2"><strong>Adım {step.stepNumber}:</strong> {step.description}</p>
            ))}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default SuggestedRecipeCard;
