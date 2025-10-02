import React, { useEffect } from "react";
import { useDatabase } from "../hooks/UseDatabase";

const CreateRecipe = () => {
  const { postData, getPost, data: recipes } = useDatabase("/recipes");

  useEffect(() => {
    getPost();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const newRecipe = {
      title: form.get("title"),
      image: {
        small: form.get("image"),
        large: form.get("image"),
      },
      overview: form.get("overview"),
      servings: form.get("servings"),
      prepMinutes: Number(form.get("prepMinutes")),
      cookMinutes: Number(form.get("cookMinutes")),
      ingredients: form
        .get("ingredients")
        .split(",")
        .map((i) => i.trim()),
      instructions: form
        .get("instructions")
        .split(",")
        .map((step) => step.trim()),
    };

    const isValid =
      newRecipe.title &&
      newRecipe.image.small &&
      newRecipe.overview &&
      newRecipe.servings &&
      newRecipe.prepMinutes &&
      newRecipe.cookMinutes &&
      newRecipe.ingredients.length > 0 &&
      newRecipe.instructions.length > 0;

    if (isValid) {
      postData(newRecipe);
      alert("Recipe added successfully ✅");
    } else {
      alert("Please fill in all fields ❗");
    }

    e.target.reset();
  };

  return (
    <form className="input__wrapper container" onSubmit={handleFormSubmit}>
      <input type="text" name="title" placeholder="title" />
      <input type="url" name="image" placeholder="image url" />
      <input type="text" name="overview" placeholder="overview" />
      <input type="number" name="servings" placeholder="servings" />
      <input type="number" name="prepMinutes" placeholder="prepMinutes" />
      <input type="number" name="cookMinutes" placeholder="cookMinutes" />
      <input type="text" name="ingredients" placeholder="ingredients" />
      <input type="text" name="instructions" placeholder="instructions" />
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default CreateRecipe;
