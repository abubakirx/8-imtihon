import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDatabase } from "../hooks/UseDatabase";
import DishCard from "../components/DishCard";

const Recipe = () => {
  const { id } = useParams();

  const {
    data: currentRecipe,
    getPost: fetchRecipe,
  } = useDatabase("/recipes/" + id);

  const {
    data: allRecipes,
    getPost: fetchAllRecipes,
  } = useDatabase("/recipes");

  useEffect(() => {
    fetchRecipe();
    fetchAllRecipes();
  }, [id]);

  if (!currentRecipe) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="recipe__bar container">
        <Link className="recipes__link" to="/recipes">
          Recipes
        </Link>
        <span>/</span>
        <p className="recipe__title">{currentRecipe.title}</p>
      </div>

      {/* Recipe info */}
      <div className="recipe__info container">
        <picture>
          <source
            media="(max-width:768px)"
            width={704}
            height={683}
            srcSet={currentRecipe.image?.small}
          />
          <source
            media="(max-width: 1192px)"
            width={618}
            height={600}
            srcSet={currentRecipe.image?.large}
          />
          <img
            className="built__image"
            src={currentRecipe.image?.small}
            alt={currentRecipe.title}
            width={343}
            height={333}
          />
        </picture>

        <div className="recipe__info-right">
          <h2 className="recipe__info-title">{currentRecipe.title}</h2>
          <p className="recipe__info-desc">{currentRecipe.overview}</p>

          <ul className="recipe__detail">
            <li className="recipes__details__item">
              <img src="../assets/images/icon-servings.svg" alt="servings" />
              <p className="recipes__details-prep">
                Servings: {currentRecipe.servings}
              </p>
            </li>
            <li className="recipes__details__item">
              <img src="../assets/images/icon-prep-time.svg" alt="prep-time" />
              <p className="recipes__details-prep">
                Prep: {currentRecipe.prepMinutes} mins
              </p>
            </li>
            <li className="recipes__details__item">
              <img src="../assets/images/icon-cook-time.svg" alt="cook-time" />
              <p className="recipes__details-prep">
                Cook: {currentRecipe.cookMinutes} mins
              </p>
            </li>
          </ul>

          <p className="recipe__info-ing">Ingredients:</p>
          <ul className="ingredient__list">
            {currentRecipe.ingredients.map((ingredient, idx) => (
              <li key={idx}>
                <p className="ingredient">{ingredient}</p>
              </li>
            ))}
          </ul>

          <p className="recipe__info-ing">Instructions:</p>
          <ul className="inctruction">
            {currentRecipe.instructions.map((step, idx) => (
              <li key={idx}>
                <p className="ingredient">{step}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* More recipes */}
      <div className="more container">
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
