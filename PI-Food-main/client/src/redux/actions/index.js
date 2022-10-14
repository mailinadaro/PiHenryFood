import axios from 'axios';
export const GET_DIETS = 'GET_DIETS';
export const GET_RECIPES_NAME = 'GET_RECIPES_NAME';
export const GET_RECIPE = 'GET_RECIPE';
export const CREATE_RECIPES = 'CREATE_RECIPES';


export const FILTER_RECIPES_BY_DIET = 'FILTER_RECIPES_BY_DIET';
export const FILTER_RECIPES_CREATED_IN_DB = 'FILTER_RECIPES_CREATED_IN_DB';
export const ORDER_RECIPES_BY_SCORE = 'ORDER_RECIPES_BY_SCORE';
export const ORDER_RECIPES_BY_NAME = 'ORDER_RECIPES_BY_NAME';



export const getDiets = () => async (dispatch) => {
    return await axios.get('http://localhost:3001/types')
        .then(response => {
            dispatch({
                type: GET_DIETS,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error)
        }
        )
}


export const getRecipesName = (name) => async (dispatch) => {
    return await axios.get(`http://localhost:3001/recipes?name=${name}`)
        .then(response => {
            dispatch({
                type: GET_RECIPES_NAME,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error)
        }
        )
}

export const getRecipe = (id) => async (dispatch) => {
    return await axios.get(`http://localhost:3001/recipes/${id}`)
        .then(response => {
            dispatch({
                type: GET_RECIPE,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error)
        }
        )
}


export const createRecipes = (payload) => async (dispatch) => { // recibe un objeto con los datos del formulario
    return await axios.post('http://localhost:3001/recipes', payload) //le paso por parametro el payload que es el objeto que contiene los datos del formulario
    // para que el back lo reciba y lo guarde en la base de datos
        .then(response => {
            dispatch({
                type: CREATE_RECIPES,
                payload: response.data // el payload que recibo del back es el objeto que se creo en la base de datos
            })
        })
        .catch(error => {
            console.log(error)
        }
        )
}

export const filterRecipesByDiet = (payload) => async (dispatch) => {
    dispatch({
        type: FILTER_RECIPES_BY_DIET,
        payload: payload
    })
}

export const filterRecipesCreatedInDb = (payload) => async (dispatch) => {
    dispatch({
        type: FILTER_RECIPES_CREATED_IN_DB,
        payload: payload
    })
}


export const orderRecipesByScore = (payload) => async (dispatch) => {
    dispatch({
        type: ORDER_RECIPES_BY_SCORE,
        payload: payload
    })
}

export const orderRecipesByName = (payload) => async (dispatch) => {
    dispatch({
        type: ORDER_RECIPES_BY_NAME,
        payload: payload
    })
}






