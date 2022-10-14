import { GET_DIETS, GET_RECIPES_NAME, GET_RECIPE, CREATE_RECIPES, FILTER_RECIPES_BY_DIET, FILTER_RECIPES_CREATED_IN_DB, ORDER_RECIPES_BY_SCORE, ORDER_RECIPES_BY_NAME } from '../actions/index.js';


const initialState = {
    diets: [],
    recipes: [],
    recipe: {},
    createdRecipe: {}
}


export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DIETS:
            return {
                ...state,
                diets: action.payload
            }

        case GET_RECIPES_NAME:
            return {
                ...state,
                recipes: action.payload
            }

        case GET_RECIPE:
            return {
                ...state,
                recipe: action.payload
            }

        case CREATE_RECIPES:
            return {
                ...state,
                createdRecipe: [...state.createdRecipe, action.payload]
            }

        case FILTER_RECIPES_BY_DIET:
            const allRecipes = state.recipes;
            const dietsFiltered = action.payload === 'All' ? allRecipes : allRecipes.filter(r => r.diets?.includes(action.payload));
            return {
                ...state,
                recipes: dietsFiltered /// CORREGIR FILTRADO POR DIETAS
            }

        case FILTER_RECIPES_CREATED_IN_DB:
            const allRecipes2 = state.recipes;
            const recipesCreatedInDb = action.payload === 'All' ? allRecipes2 : allRecipes2.filter(r => r.createdInDb === action.payload);
            return {
                ...state,
                recipes: recipesCreatedInDb
            }

        case ORDER_RECIPES_BY_SCORE:
            const allRecipesScore = state.recipes;
            const sortRecipes = action.payload === "asc" ? allRecipesScore.sort((a, b) => a.healthScore - b.healthScore) : allRecipesScore.sort((a, b) => b.healthScore - a.healthScore);  // aca ordeno de menor a mayor o de mayor a menor
           return {
                ...state,
                recipes: sortRecipes

            }   
        
        case ORDER_RECIPES_BY_NAME:
            const allRecipesName = state.recipes;
            const sortName = action.payload === "asc" ? allRecipesName.sort((a, b) => a.name > b.name ? 1 : -1) : allRecipesName.sort((a, b) => a.name < b.name ? 1 : -1); // este codigo es para ordenar alfabeticamente
            return {
                ...state,
                recipes: sortName
            }
        default:
            return {...state}
    }
}



