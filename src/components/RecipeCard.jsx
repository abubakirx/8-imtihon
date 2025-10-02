import React from "react";
import { Link } from "react-router-dom";
import { useDatabase } from "../hooks/UseDatabase";

function RecipeCard({ recipe }) {
  const { deletePost } = useDatabase("/recipes");

  const handleDelete = () => deletePost(recipe.id);

  return (
    <li className="recipes__item">
      <img
        src={recipe.image?.large}
        alt={recipe.title}
        width={360}
        height={300}
      />
      <div className="recipes__info">
        <h2>{recipe.title}</h2>
        <p>{recipe.overview}</p>
      </div>
      <ul className="recipes__details">
        <li>Servings: {recipe.servings}</li>
        <li>Prep: {recipe.prepMinutes} mins</li>
        <li>Cook: {recipe.cookMinutes} mins</li>
      </ul>
      <Link to={`/recipe/${recipe.id}`} className="view__btn">
        View Recipe
      </Link>
    </li>
  );
}

export default RecipeCard;
