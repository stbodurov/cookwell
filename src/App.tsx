import useSWR from "swr";
import fetcher, { apiUrl } from "./utils/fetcher";
import { Grid } from "@mui/material";
import RecipeCard from "./components/RecipeCard";
import Header from "./components/common/Header";
import LoadingSpinner from "./components/common/LoadingSpinner";
import Footer from "./components/common/Footer";
import "./App.css";
import { useState } from "react";

function App() {
  const { data, error } = useSWR<RecipeAPIResponse>(apiUrl, fetcher);
  const [filters, setFilters] = useState<string[]>([]);

  if (!data) return <LoadingSpinner />;
  if (error) return <div>Please try again. CookWell is not so well.</div>;

  const { recipes, ingredients } = data;

  const filterRecipes = (recipe: Recipe) => {
    const recipeIngredientsHash = recipe.ingredients.toString();
    return filters.some((f) => recipeIngredientsHash.includes(f));
  };

  const filteredRecipes = recipes.filter(filterRecipes);

  return (
    <>
      <Header autocompleteOpts={ingredients} handleInputChange={setFilters} />
      <div
        style={{
          margin: "2rem 0",
        }}
      >
        <Grid container spacing={4} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
          {(filters.length ? filteredRecipes : recipes).map(
            ({
              id,
              title,
              timeToPrepare,
              ingredients,
              preparationMethod,
            }: Recipe) => (
              <Grid key={id} item xs={1} display="flex">
                <RecipeCard
                  id={id}
                  title={title}
                  timeToPrepare={timeToPrepare}
                  ingredients={ingredients}
                  preparationMethod={preparationMethod}
                />
              </Grid>
            )
          )}
        </Grid>
      </div>
      <Footer />
    </>
  );
}

export default App;
