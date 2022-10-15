import { GET_DIETS, GET_RECIPES_NAME, GET_RECIPE, CREATE_RECIPES } from '../actions/index.js';
import { FILTER_RECIPES_BY_DIET, ORDER_RECIPES_BY_NAME, ORDER_RECIPES_BY_SCORE, CHANGE_PAGE, RESET_FILTERS } from '../actions/index.js';

const initialState = {
    diets: [],
    recipes: [],
    recipe: {},
    recipesFiltered: [],
    recipesFilteredByDiet: [],
    recipesOrderByScore: [],
    recipesOrderdByName: [],

    recipesFilteredByPage: [], // este estado es para que se muestren 9 recetas por pagina
    page: 1, 
    recipesPerPage: 9, 

    //inicios por defecto
    order: 'asc',  
    orderByScore: 'all', 
    orderByName: 'all', 
    filter: 'all', 
    filterByDiet: 'all', 
    filterByPage: 'all', 
    filterByReset: 'all', 
    loading: true, // muestra el loading en la pagina principal mientras se cargan las recetas y las dietas 
    error: false, // muestra el error en la pagina principal si no se cargan las recetas y las dietas
};



export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DIETS:
            return {
                ...state,
                diets: action.payload,
                loading: false, // cuando se cargan las dietas se quita el loading
                error: false // cuando se cargan las dietas se quita el error
            }


        case GET_RECIPES_NAME:
            return {
                ...state,
                recipes: action.payload,
                recipesFiltered: action.payload,
                recipesFilteredByDiet: action.payload, // se agregan estos estado para que se muestren todas las recetas al inicio
                recipesOrderByScore: action.payload, 
                recipesOrderdByName: action.payload,
                loading: false, 
                error: false 
            }


        case GET_RECIPE:
            return {
                ...state,
                recipe: action.payload,
                loading: false,
                error: false
            }


        case CREATE_RECIPES:
            return {
                ...state,
                createdRecipe: [...state.createdRecipe, action.payload]
            }

        case FILTER_RECIPES_BY_DIET:
            return {
                ...state,
                filterByDiet: action.payload,
                recipesFilteredByDiet: action.payload === 'all' ? state.recipesFiltered : state.recipesFiltered.filter(recipe => recipe.diets.includes(action.payload)),
                page: 1, // cuando se filtra por dietas se vuelve a la pagina 1 
            }



        case ORDER_RECIPES_BY_SCORE:
            return {
                ...state,
                orderByScore: action.payload,
                recipesOrderByScore: action.payload === 'all' ? state.recipesFilteredByDiet : action.payload === 'asc' ? state.recipesFilteredByDiet.sort((a, b) => a.spoonacularScore - b.spoonacularScore) : state.recipesFilteredByDiet.sort((a, b) => b.spoonacularScore - a.spoonacularScore),
                page: 1, 
            }

        
        case ORDER_RECIPES_BY_NAME:
            return {
                ...state,
                orderByName: action.payload,
                recipesOrderdByName: action.payload === 'all' ? state.recipesOrderByScore : action.payload === 'asc' ? state.recipesOrderByScore.sort((a, b) => a.title.localeCompare(b.title)) : state.recipesOrderByScore.sort((a, b) => b.title.localeCompare(a.title)),
                page: 1,
            }

        case CHANGE_PAGE:
            return {
                ...state,
                page: action.payload,
                recipesFilteredByPage: state.recipesOrderdByName.slice((action.payload - 1) * state.recipesPerPage, action.payload * state.recipesPerPage),
            }

        case RESET_FILTERS:
            return {
                ...state,
                filterByReset: action.payload,
                recipesFilteredByDiet: state.recipes,
                recipesOrderByScore: state.recipes,
                recipesOrderdByName: state.recipes,
                page: 1,
            }
        default:
            return {...state}
    }
}



////// RECORDATORIO TEORICO //////

// La funcion del REDUCER es que recibe un estado inicial y una accion
//                               y devuelve un nuevo estado gracias a la accion que se le pasa
// Poodriamos decir que reducer esta intimamente relacionado con el ESTADO de la aplicacion.
// El reducer es una funcion pura, es decir, que no modifica el estado que recibe, sino que devuelve un nuevo estado
// Por ese mismo motivo se usan metodos no mutables como filter, map, reduce, etc.



// El estado inicial es un objeto vacio y es el estado de la aplicacion antes de que se ejecute ninguna accion
// Ese estado una vez actualizado se le pasa al store y el store se encarga de actualizar el estado de la aplicacion
// El store se le pasa al provider y el provider se encarga de pasar el estado a los componentes que lo necesiten
// El componente se le pasa aL hook useSelector y este hook se encarga de devolver el estado que necesitamos
// El componente se renderiza con el estado actualizado y se le pasa al dispatch la accion que queremos ejecutar
// El dispatch se la pasa al reducer y el reducer se encarga de actualizar el estado de la aplicacion
// El estado se actualiza y se renderiza el componente con el estado actualizado
// El ciclo se repite hasta que el usuario cierre la aplicacion


//-----> reducer ---> store ---> provider ---> useSelector o useDispatch ---> componente ---> dispatch ---> reducer ---> store ---> componente ---> renderizado

