import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
//import RecipeCard from "../RecipeCard/RecipeCard.jsx";
import { getAllRecipes, getDiets, filterRecipesByDiet, orderRecipesByName, orderRecipesByScore} from "../../redux/actions";
import "./Recipes.css";

export default function Recipes() {
  const dispatch = useDispatch();

   const recipes = useSelector((state) => state.recipes);
  const currentPage = useSelector((state) => state.currentPage);
  const recipesPerPage = useSelector((state) => state.recipesPerPage);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe); 

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  //const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
 const [order, setOrder] = useState("")

useEffect(() => {
      dispatch(getDiets());
  }, [dispatch]);

 function handlerFilterDiets (e) {
      dispatch(filterRecipesByDiet(e.target.value));
    //  console.log(e.target.value)
  }

 function handlerSortScore(e){ 
      e.preventDefault();
     dispatch(orderRecipesByScore(e.target.value));
    order? setOrder(false) : setOrder(e.target.value)
     console.log(e.target.value)
  }

  function handlerSortName(e){ 
      e.preventDefault();
      dispatch(orderRecipesByName(e.target.value)); 
     order? setOrder(false) : setOrder(e.target.value)
     console.log(e.target.value)
  } 


  return (
    <div>
      <div className="filters__container">
       <select className="select__diet" onChange={handlerFilterDiets}>
                <option>Select a Diet</option>
                {diets?.map((diet) => (
                    <option key={diet} value={diet}>{diet} </option>
                ))} 
            </select>

            <div className="sort">
                <button value="asc" onClick ={(e)=> handlerSortName(e)}>A-Z</button>
                <button value="desc" onClick = {(e)=> handlerSortName(e)}>Z-A</button>
         
            </div>
            <div className="sort">
               <button value ="up" onClick = {(e)=> handlerSortScore(e)}>More</button>
               <button value="down" onClick={(e)=>handlerSortScore(e)}>Less</button>
            </div>  

      </div>

      <div className="recipes__container">
        {currentRecipes?.map((recipe) => {
          return (
            <div key={recipe.id} className="recipes__card">
              <Link to={`/recipes/${recipe.id}`} className="recipes__card__link">
                <p>{recipe.name}</p>
                <img className="recipes__card__imagen" src={recipe.image} alt="recipe" />
              </Link>
              <p>Health Score: {recipe.healthScore}</p>
              <p className="recipes__card__diets">{recipe.diets.map((diet) => diet.name).join(" | ")}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

 


