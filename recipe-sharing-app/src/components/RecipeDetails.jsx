// src/components/RecipeDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      {/* Edit Form */}
      <h3>Edit Recipe</h3>
      <EditRecipeForm recipe={recipe} />

      {/* Delete Button */}
      <DeleteRecipeButton recipeId={recipe.id} onDelete={() => navigate("/")} />
    </div>
  );
}

export default RecipeDetails;


