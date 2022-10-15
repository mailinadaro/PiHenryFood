import React from "react";
//import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import RecipeCard from "../RecipeCard/RecipeCard.jsx";
import Paginado from "../Paginado/Paginado.jsx";
import Order from "../FilterAndOrder/Order.jsx";
import FilterByDiets from "../FilterAndOrder/FilterByDiets.jsx";
import { resetFilters } from "../../redux/actions/index.js";


export default function Recipes () {
    const dispatch = useDispatch();
    
    //const recipesFiltredByPage = useSelector((state) => state.recipesFiltredPerPage);
    const recipes = useSelector((state) => state.recipes);
    const currentPage = useSelector((state) => state.page);
    const recipesPerPage = useSelector((state) => state.recipesPerPage);
    
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    function clickHandler (e){ 
        e.preventDefault();
       dispatch(resetFilters());
    }

    return (
        <div>
            <div>
                <button onClick={() => clickHandler()}>Reset</button>   
                <Order/>
                <FilterByDiets/>
            </div>
            <div>
                <Paginado/>
            </div>
            <div>
                {currentRecipes?.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        id={recipe.id}
                        name={recipe.name}
                        image={recipe.image}
                        diets={recipe.diets}
                        healthScore={recipe.healthScore}
                    />
                ))}
            </div>
        </div>
    )
}

