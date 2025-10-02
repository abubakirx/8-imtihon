import React from "react";
import { useDatabase } from "../hooks/UseDatabase";

const CreateRecipe = () => {
  const { postData } = useDatabase("/recipes");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const image = e.target.image.value;
    const overview = e.target.overview.value;
    const servings = e.target.servings.value;
    const prepMinutes = e.target.prepMinutes.value;
    const cookMinutes = e.target.cookMinutes.value;
    const ingredients = e.target.ingredients.value.split(",");
    const instructions = e.target.instructions.value.split(",");

    if (
      title &&
      image &&
      overview &&
      servings &&
      prepMinutes &&
      cookMinutes &&
      ingredients.length > 0 &&
      instructions.length > 0
    ) {
      const newRecipe = {
        title,
        image: { small: image, large: image },
        overview,
        servings,
        prepMinutes: Number(prepMinutes),
        cookMinutes: Number(cookMinutes),
        ingredients,
        instructions,
      };

      postData(newRecipe);
      alert("Recipe added successfully ");
      e.target.reset();
    } else {
      alert("Please fill in all fields ");
    }
  };

  return (
    <form className="input__wrapper container" onSubmit={handleFormSubmit}>
      <input type="text" name="title" placeholder="title" />
      <input type="url" name="image" placeholder="image url" />
      <input type="text" name="overview" placeholder="overview" />
      <input type="number" name="servings" placeholder="servings" />
      <input type="number" name="prepMinutes" placeholder="prepMinutes" />
      <input type="number" name="cookMinutes" placeholder="cookMinutes" />
      <input
        type="text"
        name="ingredients"
        placeholder="ingredients (comma separated)"
      />
      <input
        type="text"
        name="instructions"
        placeholder="instructions (comma separated)"
      />
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default CreateRecipe;
