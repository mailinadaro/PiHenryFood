import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
//import RecipeCard from "../RecipeCard/RecipeCard.jsx";
import { getAllRecipes } from "../../redux/actions/index.js";



export default function Recipes() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  const currentPage = useSelector((state) => state.currentPage);
  const recipesPerPage = useSelector((state) => state.recipesPerPage);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <div>
      <div>
        {currentRecipes?.map((recipe) => {
          return (
            <div key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>
                <p>{recipe.name}</p>
                <img src={recipe.image} alt={recipe.name} />
              </Link>
              <p>{recipe.healthScore}</p>
              <p>{recipe.diets.map((diet) => diet.name)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

 


