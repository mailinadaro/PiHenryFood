import React from "react";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getRecipesName} from "../actions/index.js";
import {getDiets} from "../actions/index.js";
import {filterRecipesByDiet} from "../actions/index.js";
//import {filterRecipesCreatedInDb} from "../actions/index.js";
import {orderRecipesByName } from "../redux/actions/index.js";
//import { orderRecipesByScore } from "../redux/actions/index.js";
import {Link} from "react-router-dom";
import Recipes from "./Recipe.jsx";
import Paginado from "./Paginado.jsx";
import SearchBar from "./SearchBar.jsx";

export default function Home() {
    const dispatch = useDispatch();
    const allRecipes = useSelector((state) => state.allRecipes);
    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage, setRecipesPerPage] = useState(9); // setRecipesPerPage se usa en Paginado.jsx
    const [order, setOrder] = useState(""); //order se usa en Paginado.jsx
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    useEffect(() => {
        dispatch(getRecipesName());
    }, [dispatch]);


    function handlerSort(e){
        e.preventDefault();
        dispatch(orderRecipesByName(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    }

    function handlerFilterDiets (e) {
        dispatch(filterRecipesByDiet(e.target.value));
    }

  /*   function handlerFilterCreatedInDb (e) {
        dispatch(filterRecipesCreatedInDb(e.target.value));
    }
 */

    function clickHandler (e){
        e.preventDefault();
        dispatch(getRecipesName());
    }

    return (
        <div>
            <Link to=" /recipe"><h1>Create Recipes</h1></Link>
            <button onClick = {e =>clickHandler(e)}>Get Recipes</button>
            <SearchBar/>
            <div>
                <select>
                    <options value = "asc" onClick = {e => handlerSort(e)}>A-Z</options>
                    <options value ="desc" onClick = {e => handlerSort(e)}>Z-A</options>
                </select>

                <select >
                    <options value = "name">Name</options>
                    <options value ="score">Score</options>
                    <option value="CreatedInDb">Created in DB</option>
                </select>

                <select onChange = {e => handlerFilterDiets(e)}>
                    {getDiets?.map((diet) => (
                        <option key={diet.id} value={diet.name}>
                            {diet.name}
                        </option> 
                    ))}
                </select>

            </div>
            
            <Paginado recipesPerPage = {setRecipesPerPage} allRecipes = {allRecipes.length} paginado = {paginado} order = {order}/>

            <h3>Recipes</h3>
            {
                currentRecipes?.map((recipe) => {
                    return (
                        <Recipes
                            key={recipe.id}
                            name={recipe.name}
                            image={recipe.image}
                            diets={recipe.diets}
                            score={recipe.healthScore}
                        />
                    )
                })
            }



        </div>

    )
}



/* Ruta principal: debe contener

[ ] Input de búsqueda para encontrar recetas por nombre
[ ] Área donde se verá el listado de recetas. Deberá mostrar su:
Imagen
Nombre
Tipo de dieta (vegetariano, vegano, apto celíaco, etc)

[ ] Botones/Opciones para filtrar por por tipo de dieta
[ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las recetas por orden alfabético y por health score (nivel de comida saludable).

[ ] Paginado para ir buscando y mostrando las siguientes recetas, 9 recetas por pagina, mostrando las primeros 9 en la primer pagina. */