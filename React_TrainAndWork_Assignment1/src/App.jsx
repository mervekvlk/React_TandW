import React, { useState, useEffect } from "react";
import RecipeCard from "./components/RecipeCard";
import RecipeDetailModal from "./components/RecipeDetailModal";
import NavbarComponent from "./components/NavbarComponent";
import SuggestedRecipeCard from "./components/SuggestedRecipeCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [title, setTitle] = useState("Tarifler");
  const [categories, setCategories] = useState([]);
  const [suggestedRecipe, setSuggestedRecipe] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  

  useEffect(() => {
    fetchCategories();
    fetchRecipes();

    const fetchSuggestedRecipe = async () => {
      const response = await fetch("http://localhost:3000/suggestedRecipes");
      const data = await response.json();
      setSuggestedRecipe(data[0]);
    };

    fetchSuggestedRecipe();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch("http://localhost:3000/recipes");
      const data = await response.json();
      setRecipes(data);
      setFilteredRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:3000/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCategorySelect = (category) => {
    const filtered = recipes.filter((recipe) => recipe.category === category);
    setFilteredRecipes(filtered);
    setTitle(category);
  };

  const handleSearch = (searchTerm) => {
    const filtered = recipes.filter(
      (recipe) =>
        recipe.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.tags.includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
    setTitle(searchTerm ? searchTerm : "Meals"); // Eğer searchTerm boşsa başlığı default'a çevir
  };

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  const handleViewDetails = async (recipeId) => {
    try {
      const response = await fetch(`http://localhost:3000/recipes/${recipeId}`);
      const data = await response.json();
      setSelectedRecipe(data); 
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  return (
    <>
      <NavbarComponent
        categories={categories}
        onCategorySelect={handleCategorySelect}
      />
      <Header onSearch={handleSearch} />
      <Container className="py-5">
        <Row>
          <Col>
            <h1 className="text-center mb-4">{title}</h1>
          </Col>
        </Row>
        <Row className="recipe-container">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onSelect={() => handleRecipeSelect(recipe)}
              isAuthenticated={true}
              
            />
          ))}
        </Row>
        {suggestedRecipe && (
    <>
      <Row>
        <Col>
          <h2 className="text-center mt-4 mb-4">Önerilen Tarifler</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <SuggestedRecipeCard recipe={suggestedRecipe} />
        </Col>
      </Row>
    </>
  )}
        {/* Eğer bir yemek seçildi ise detay modalını göster */}
        {selectedRecipe && (
          <RecipeDetailModal
            show={!!selectedRecipe}
            onHide={handleCloseModal}
            recipe={selectedRecipe}
          />
        )}
      </Container>
      <Footer/>
    </>
  );
};

export default App;
