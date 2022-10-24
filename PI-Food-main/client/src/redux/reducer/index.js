import { GET_DIETS, GET_ALL_RECIPES, GET_RECIPES_NAME, GET_RECIPE, CREATE_RECIPES } from '../actions/index.js';
import { FILTER_RECIPES_BY_DIET, ORDER_RECIPES_BY_NAME, ORDER_RECIPES_BY_SCORE, CHANGE_PAGE, CLEAN_DETAIL } from '../actions/index.js';

 const initialState = {
    ///// estados a partir de pedidos al back
    diets: [],  
    recipes: [],  
    allRecipes : [],
    recipe: {},  
    createdRecipe: {},  


   

    // estado para el paginado 
    recipesPerPage: 9, // se usa en el case CHANGE_PAGE
    currentPage: 1, // se usa en el case CHANGE_PAGE
};



export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        //// casos para pedidos al back
        case GET_DIETS: //
        //console.log(action.payload)
            return {
                ...state,
                diets: action.payload,
            }
        case GET_ALL_RECIPES: 
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload,
            }  
        case GET_RECIPES_NAME: 
       // console.log(action.payload)
            return {
                ...state,
                recipes: action.payload,
                allrecipes : state.allRecipes, 
                currentPage : 1,
            }
        case GET_RECIPE: 
            return {
                ...state,
                recipe: action.payload,
            }
        case CREATE_RECIPES: 
       // console.log(action.payload)
            return {
                ...state,
                createdRecipe: [...state.createdRecipe, action.payload],
            }


        ///// CASOS SYNC
        case FILTER_RECIPES_BY_DIET: 
         const filterDiet = state.recipes.filter((recipe)=> recipe.diets.find((e)=> e.name === action.payload))
            return {
                ...state,
                recipes: filterDiet,
        
             //  currentPage: 1, 
            }
            
        case ORDER_RECIPES_BY_SCORE: 
             console.log(action.payload)
           const orderByScore = action.payload === 'up' ? state.recipes.sort((a, b) => a.healthScore > b.healthScore ? -1 : b.healthScore > a.healthSocre ? 1 : 0) :
            state.recipes.sort((a, b)=> a.healthScore > b.healthScore ?  1 : b.healthScore > a.healthScore ? -1 : 0)
           console.log(orderByScore)
            return {
                ...state,
                recipes: orderByScore,
      
               // currentPage: 1,
            } 
        case ORDER_RECIPES_BY_NAME: 
            console.log(action.payload)
            const orderByName = action.payload === 'asc' ? state.recipes.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0) :
            state.recipes.sort((a, b)=> a.name > b.name ?  -1 : b.name > a.name ? 1 : 0)
            console.log(orderByName)
            return {
                ...state,
                recipes: orderByName,  
    
               // currentPage: 1,
            } 
        case CHANGE_PAGE: 
            //console.log(action.payload)
            return {
                ...state,
                currentPage: Number(action.payload)? parseInt(action.payload) : action.payload === 'Next' ? (parseInt(state.currentPage) + 1 )  : (parseInt(state.currentPage) - 1 )
            }
            case CLEAN_DETAIL:
                return {
                    ...state, 
                    recipe: {}
                }
        default:
            return {...state}
    }
}



