// src/components/AddRecipeForm.jsx
import { useState } from "react";
import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({
      id: Date.now(),
      title,
      instructions,
    });
    setTitle("");
    setInstructions("");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Recipe</h2>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label>Instructions:</label>
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;

