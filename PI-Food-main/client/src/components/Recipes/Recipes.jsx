import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { getAllRecipes, getDiets, filterRecipesByDiet, orderRecipesByName, orderRecipesByScore} from "../../redux/actions";
import "./Recipes.css";
import Loading from "../Loading/Loading";

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
    dispatch(getDiets());
  }, [dispatch]);

  const diets = useSelector((state) => state.diets);
  const [order, setOrder] = useState("")


 function handlerFilterDiets (e) {
      dispatch(filterRecipesByDiet(e.target.value));

  }

 function handlerSortScore(e){ 
      e.preventDefault();
     dispatch(orderRecipesByScore(e.target.value));
    order? setOrder(false) : setOrder(e.target.value)
    
  }

  function handlerSortName(e){ 
      e.preventDefault();
      dispatch(orderRecipesByName(e.target.value)); 
     order? setOrder(false) : setOrder(e.target.value)
   
  } 


  return (
    <div className="total__background">
      <div className="filters__container">
        <select className="select" onChange={handlerFilterDiets}>
          <option>Select a Diet</option>
          {diets?.map((diet) => (
            <option key={diet} value={diet}>{diet}</option>
          ))}
        </select>

        <select className="select" onChange={handlerSortScore}>
          <option value=" ">Sort by Score</option>
          <option value="up">Asc</option>
          <option value="down">Desc</option>
        </select>

        <select className="select" onChange={handlerSortName}>
          <option value=" ">Sort by Name</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>

      <div className="recipes__container">
      {recipes.length === 0 && <Loading />}
      
        {currentRecipes?.map((recipe) => {
          return (
            <div key={recipe.id} className="recipes__card">
              <Link to={`/recipes/${recipe.id}`} className="recipes__card__link">
                <img className="recipes__card__image" src={recipe.image} alt="recipe"/>
                <p>{recipe.name}</p>
              </Link>

              <div className="recipes__card__info">
                <div className="recipes__card__score">
                  <p>{recipe.healthScore}</p>
                </div>
                <p className="recipes__card__diets">
                  {recipe.diets.map((diet) => diet.name).join(" | ")}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}

 


