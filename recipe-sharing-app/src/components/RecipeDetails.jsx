import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";
import { useState } from "react";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );
  const [editing, setEditing] = useState(false);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.instructions}</p>
      {editing ? (
        <EditRecipeForm recipe={recipe} onClose={() => setEditing(false)} />
      ) : (
        <>
          <button onClick={() => setEditing(true)}>Edit Recipe</button>
          <DeleteRecipeButton recipeId={recipe.id} />
        </>
      )}
    </div>
  );
};

export default RecipeDetails;




