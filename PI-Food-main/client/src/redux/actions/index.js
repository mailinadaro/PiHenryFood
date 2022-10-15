import axios from 'axios';
export const GET_DIETS = 'GET_DIETS';
export const GET_RECIPES_NAME = 'GET_RECIPES_NAME';
export const GET_RECIPE = 'GET_RECIPE';
export const CREATE_RECIPES = 'CREATE_RECIPES';



export const FILTER_RECIPES_BY_DIET = 'FILTER_RECIPES_BY_DIET';
export const ORDER_RECIPES_BY_SCORE = 'ORDER_RECIPES_BY_SCORE';
export const ORDER_RECIPES_BY_NAME = 'ORDER_RECIPES_BY_NAME';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const RESET_FILTERS = 'RESET_FILTERS';


export const DELETE_RECIPE = 'DELETE_RECIPE';



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



////////////// SIN CONSULTAS. SOLO PARA MANEJO DE ESTADOS //////////////////////
export const filterRecipesByDiet = (payload) => async (dispatch) => {
    dispatch({
        type: FILTER_RECIPES_BY_DIET,
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


export const changePage = (payload) => async (dispatch) => {
    dispatch({
        type: CHANGE_PAGE,
        payload: payload
    })
}


export const resetFilters = () => async (dispatch) => {
    dispatch({
        type: RESET_FILTERS
    })
}







//////////////// EXTRA ///////////////

export const deleteRecipe = (id) => async (dispatch) => {
    return await axios.delete(`http://localhost:3001/recipes/${id}`)
        .then(response => {
            dispatch({
                type: DELETE_RECIPE,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error)
        }
        )
}



//////////// RECORDARTORIOS TEORIA //////////////

//  A diferencia de las actions creators, que son funciones que devuelven un objeto con las acciones que se van a ejecutar tanto sincronas como asincronas
// cuando son asincronas, se ejecutan gracias a los middlewares, que son funciones que interceptan las acciones y las ejecutan de manera asincrona
// el punto de comunicacion con el backend a traves de las acciones asincronas es el middleware thunk, que es una funcion que recibe el store y devuelve otra funcion que recibe la accion

// Flujo de las acciones asincronas:   
// ----> action creator -> action -> middleware thunk-> action -> reducer
// ----> axios -> response -> middleware thunk -> response -> reducer
// ----> axios -> error -> middleware thunk -> error -> reducer




// Flujo de las acciones sincronas: 
//componentes ----> dispatch ----> actions creators ----> reducer ----> store ----> componentes
//el flujo de las acciones sincronas es mucho mas simple, ya que no se necesita el middleware thunk, ya que no se necesita hacer una peticion al backend
// -----> reducer <----- store <----- componentes <----- dispatch <----- actions creators <----- componentes





