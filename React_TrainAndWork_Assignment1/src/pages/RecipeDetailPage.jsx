// RecipeDetailPage.js

import React from 'react';
import RecipeDetail from '../components/RecipeDetail';

const RecipeDetailPage = ({ match, recipes }) => {
  const recipeId = parseInt(match.params.id);
  const selectedRecipe = recipes.find(recipe => recipe.id === recipeId);

  return (
    <div>
      <h2>Recipe Detail</h2>
      <RecipeDetail recipe={selectedRecipe} />
    </div>
  );
};

export default RecipeDetailPage;
