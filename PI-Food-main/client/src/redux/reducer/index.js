import { GET_DIETS, GET_ALL_RECIPES, GET_RECIPES_NAME, GET_RECIPE, CREATE_RECIPES } from '../actions/index.js';
import { FILTER_RECIPES_BY_DIET, ORDER_RECIPES_BY_NAME, ORDER_RECIPES_BY_SCORE, CHANGE_PAGE, RESET_FILTERS } from '../actions/index.js';

 const initialState = {
    ///// estados a partir de pedidos al back
    diets: [],  //  GET_DIETS
    recipesFiltered: [],  //  GET_RECIPES_NAME
    recipes: [],  //  GET_ALL_RECIPES
    allRecipes : [],
    recipe: {},  //  GET_RECIPE
    createdRecipe: {},  //  CREATE_RECIPES


    //// estados para el filtrado
    recipesFilteredByDiet: [], // FILTER_RECIPES_BY_DIET
    recipesOrderByScore: [], //  ORDER_RECIPES_BY_SCORE
    recipesOrderdByName: [], //   ORDER_RECIPES_BY_NAME
   

    recipesFilteredByPage: [],  //  CHANGE_PAGE


    // estsdo para el reseteo de filtros y paginado 
    recipesPerPage: 9, // se usa en el case CHANGE_PAGE
    currentPage: 1, // se usa en el case CHANGE_PAGE

    order: 'asc',   // se usa en el case ORDER_RECIPES_BY_NAME
    orderByScore: 'all',
    orderByName: 'all', 
    filter: 'all',  // se usa en el case FILTER_RECIPES_BY_DIET
 
    filterByPage: 'all', 
    filterByReset: 'all', 
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
            }
        case GET_RECIPE: 
            return {
                ...state,
                recipe: action.payload,
            }
        case CREATE_RECIPES: 
            return {
                ...state,
                createdRecipe: [...state.createdRecipe, action.payload],
            }


        ///// CASOS SYNC
        case FILTER_RECIPES_BY_DIET: 
         const filterDiet = state.allRecipes.filter((recipe)=> recipe.diets.find((e)=> e.name === action.payload))
            return {
                ...state,
                recipes: filterDiet,
               // recipesFilteredByDiet: action.payload,
               currentPage: 1, 
            }
            
        case ORDER_RECIPES_BY_SCORE: 
       // console.log(action.payload)
        let orderByScore = action.payload === 'asc' ? state.allRecipes.sort((a, b) => a.score > b.score ? 1 : b.score > a.socre ? -1 : 0) :
            state.allRecipes.sort((a, b)=> a.score > b.score ?  -1 : b.score > a.score ? 1 : 0)
            return {
                ...state,
               // orderByScore: action.payload,
              recipes: orderByScore,
            //  recipesOrderByScore: action.payload,
                //currentPage: 1,
            }
        case ORDER_RECIPES_BY_NAME: 
       // console.log(action.payload)
        let orderByName = action.payload === 'asc' ? state.allRecipes.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0) :
            state.allRecipes.sort((a, b)=> a.name > b.name ?  -1 : b.name > a.name ? 1 : 0)
            return {
                ...state,
                //orderByName: action.payload,
                recipes: orderByName,  
               // recipesOrderdByName: action.payload,
               // currentPage: 1,
            } 
        case CHANGE_PAGE: 
            //console.log(action.payload)
            return {
                ...state,
                //filterByPage: action.payload, 
                currentPage: Number(action.payload)? action.payload : action.payload === 'Next' ? (parseInt(state.currentPage) + 1 )  : (parseInt(state.currentPage) - 1 )
            }
       
        case RESET_FILTERS: 
            return {
                ...state,
               // filterByReset: action.payload,
                recipesFilteredByDiet: state.recipes, 
                recipesOrderByScore: state.recipes,
                recipesOrderdByName: state.recipes,
                //recipesFilteredByPage: state.recipes.slice(0, 9), 
                currentPage: 1,
            } 
        default:
            return {...state}
    }
}



