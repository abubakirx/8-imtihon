import React, { useEffect, useState } from "react";
import RecipeFilters from "../components/RecipeFilters";
import DishCard from "../components/DishCard";
import { useDatabase } from "../hooks/UseDatabase";

const Recipes = () => {
  const { getPost, data: recipes } = useDatabase("/recipes");

  const [searchTerm, setSearchTerm] = useState("");
  const [prepFilters, setPrepFilters] = useState([]);
  const [cookFilters, setCookFilters] = useState([]);
  const [prepPanelOpen, setPrepPanelOpen] = useState(false);
  const [cookPanelOpen, setCookPanelOpen] = useState(false);

  useEffect(() => {
    getPost();
  }, []);

  const filteredRecipes = recipes
    ? recipes.filter((recipe) => {
        let matches = true;

        if (searchTerm.trim() !== "") {
          const query = searchTerm.toLowerCase();
          matches = matches && recipe.title?.toLowerCase().includes(query);
        }

        if (prepFilters.length > 0) {
          const prepTimes = prepFilters.map((f) =>
            parseInt(f.split("-")[0], 10)
          );
          matches = matches && prepTimes.includes(recipe.prepMinutes);
        }

        if (cookFilters.length > 0) {
          const cookTimes = cookFilters.map((f) =>
            parseInt(f.split("-")[0], 10)
          );
          matches = matches && cookTimes.includes(recipe.cookMinutes);
        }

        return matches;
      })
    : [];

  return (
    <>
      {/* Intro */}
      <section>
        <div className="container simple__container">
          <h1 className="simple__title">Explore our simple, healthy recipes</h1>
          <p className="simple__desc">
            Discover eight quick, whole-food dishes that fit real-life schedules
            and taste amazing. Use the search bar to find a recipe by name or
            ingredient, or simply scroll the list and let something delicious
            catch your eye.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section>
        <div className="container recipes__filter">
          <div className="filters__wrapper">
            <RecipeFilters
              activeFilters={prepFilters}
              setActiveFilters={setPrepFilters}
              isOpen={prepPanelOpen}
              setIsOpen={setPrepPanelOpen}
              title="Max Prep Time"
              options={[
                { value: "0-min-prep", label: "0 minutes" },
                { value: "5-min-prep", label: "5 minutes" },
                { value: "10-min-prep", label: "10 minutes" },
              ]}
            />
            <RecipeFilters
              activeFilters={cookFilters}
              setActiveFilters={setCookFilters}
              isOpen={cookPanelOpen}
              setIsOpen={setCookPanelOpen}
              title="Max Cook Time"
              options={[
                { value: "0-min-cook", label: "0 minutes" },
                { value: "5-min-cook", label: "5 minutes" },
                { value: "10-min-cook", label: "10 minutes" },
                { value: "15-min-cook", label: "15 minutes" },
                { value: "20-min-cook", label: "20 minutes" },
              ]}
            />
          </div>

          <div className="search__wrapper">
            <input
              className="search"
              type="search"
              placeholder="Search by name or ingredient…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
              className="search__icon"
              src="./assets/images/icon-search.svg"
              alt="search"
            />
          </div>
        </div>
      </section>

      {/* Recipe list */}
      <ul className="recipes__list container">
        {!recipes && <li>Loading...</li>}
        {recipes && filteredRecipes.length === 0 && (
          <li>No recipes found</li>
        )}
        {filteredRecipes.map((recipe) => (
          <DishCard key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </>
  );
};

export default Recipes;
