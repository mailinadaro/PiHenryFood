import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
//import RecipeCard from "../RecipeCard/RecipeCard.jsx";
import { getAllRecipes, getDiets, filterRecipesByDiet, orderRecipesByName, orderRecipesByScore} from "../../redux/actions";
// para que se renderice el ordenamento y se vea en el navegador se debe hacer un dispatch de la accion que se quiere ejecutar en el componente que se quiere renderizar en este caso en el componente Order.jsx  y en el componente FilterByDiets.jsx  y en el componente Paginado.jsx    



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
       <select onChange={(e)=> handlerFilterDiets(e)} >
                <option>Select a Diet</option>
                {diets?.map((diet) => (
                    <option key={diet} value={diet}>{diet} </option>
                ))} 
            </select>

            <div>
                <button value="asc" onClick ={(e)=> handlerSortName(e)}>A-Z</button>
                <button value="desc" onClick = {(e)=> handlerSortName(e)}>Z-A</button>
         
            </div>
            <div>
               <button value ="up" onClick = {(e)=> handlerSortScore(e)}>More</button>
               <button value="down" onClick={(e)=>handlerSortScore(e)}>Less</button>
            </div>  
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

 


