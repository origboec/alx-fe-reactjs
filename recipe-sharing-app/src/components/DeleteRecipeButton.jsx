import { useNavigate } from "react-router-dom";
import useRecipeStore from "../recipeStore";

function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate("/"); // Redirect to home after deletion
  };

  return (
    <button onClick={handleDelete} style={{ color: "red" }}>
      Delete Recipe
    </button>
  );
}

export default DeleteRecipeButton;
