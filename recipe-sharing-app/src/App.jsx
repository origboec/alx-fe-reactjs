// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import { useRecipeStore } from "./recipeStore";

function App() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Recipe Sharing App</h1>

      {/* Navigation */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/add">Add Recipe</Link>
      </nav>

      <Routes>
        {/* Home route: list all recipes */}
        <Route
          path="/"
          element={
            <div>
              <h2>All Recipes</h2>
              {recipes.length === 0 ? (
                <p>No recipes added yet.</p>
              ) : (
                <ul>
                  {recipes.map((recipe) => (
                    <li key={recipe.id}>
                      <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          }
        />

        {/* Add Recipe route */}
        <Route path="/add" element={<AddRecipeForm />} />

        {/* Recipe Details route */}
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;


