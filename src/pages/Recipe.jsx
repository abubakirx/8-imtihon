import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDatabase } from "../hooks/UseDatabase";
import DishCard from "../components/DishCard";

const Recipe = () => {
  const { id } = useParams();

  const { data: currentRecipe, getPost: fetchRecipe } = useDatabase(
    "/recipes/" + id
  );
  const { data: allRecipes, getPost: fetchAllRecipes } =
    useDatabase("/recipes");

  useEffect(() => {
    fetchRecipe();
    fetchAllRecipes();
  }, [id]);

  if (!currentRecipe) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      {/* Breadcrumb */}
      <div className="recipe__bar">
        <Link to="/recipes" className="recipes__link">
          Recipes
        </Link>
        <span>/</span>
        <p className="recipe__title">{currentRecipe.title}</p>
      </div>

      {/* Recipe info */}
      <div className="recipe__info">
        <picture>
          <source
            media="(max-width:768px)"
            srcSet={currentRecipe.image?.small}
            width={704}
            height={683}
          />
          <source
            media="(max-width:1192px)"
            srcSet={currentRecipe.image?.large}
            width={618}
            height={600}
          />
          <img
            src={currentRecipe.image?.small}
            alt={currentRecipe.title}
            width={343}
            height={333}
          />
        </picture>

        <div className="recipe__info-right">
          <h2>{currentRecipe.title}</h2>
          <p>{currentRecipe.overview}</p>

          <p>Servings: {currentRecipe.servings}</p>
          <p>Prep: {currentRecipe.prepMinutes} mins</p>
          <p>Cook: {currentRecipe.cookMinutes} mins</p>

          <h3>Ingredients</h3>
          <ul>
            {currentRecipe.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>

          <h3>Instructions</h3>
          <ol>
            {currentRecipe.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* More recipes */}
      <div className="more">
        <p className="more__title">More recipes</p>
        <ul className="more__recipes">
          {!allRecipes && <li>Loading...</li>}
          {allRecipes &&
            allRecipes
              .filter((r) => r.id !== currentRecipe.id)
              .slice(0, 3)
              .map((r) => <DishCard key={r.id} recipe={r} />)}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
