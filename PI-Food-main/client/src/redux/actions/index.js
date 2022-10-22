/////////////// VERSION DE PRUEBA REPASO HERNAN ///////////
/* import axios from 'axios';
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';



export const getAllRecipes = () => {
    return async function (dispatch){
        const response = await axios.get('http://localhost:3001/recipes');
        return dispatch({
            type: GET_ALL_RECIPES,
            payload: response.data
        })
    }
}

 */

import axios from 'axios';
export const GET_DIETS = 'GET_DIETS';
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
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
    try {
        const diets = await axios.get('http://localhost:3001/diets');
        dispatch({ type: GET_DIETS, payload: diets.data }); 
    } catch (error) {
        console.log(error)
    }    
    } 




////// VERSION CON ASYNC AWAIT ///////
 export const getAllRecipes = () => {
    return async(dispatch) => {
    try {
        const response = await axios.get('http://localhost:3001/recipes')
        dispatch({
            type: GET_ALL_RECIPES,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
} 
}



    

export const getRecipesName = (name) => {
    return async (dispatch) => {
        try {
           const response =  await axios.get(`http://localhost:3001/recipes?name=${name}`)
           //console.log(response)
           dispatch({
            type: GET_RECIPES_NAME,
            payload: response.data
            })
        }catch(error){
            alert("This recipe doesn't exit");
            console.log(error)
        }   
}
}




 export const createRecipes = (payload) => { 
    return async function () {
        let response = await axios.post('http://localhost:3001/recipes', payload) 
    return response 
    } 
 }





////////////// ACTIONS SYNC //////////////
// se ejecutan en el mismo momento que se ejecuta el dispatch
// en su sintaxis no se usa async await ni tampoco se usa el try catch
// casi siempre reciben por parametro un payload que es el que se va a guardar en el store de redux
// y la logica de desarrolla en el reducer

export const filterRecipesByDiet = (payload) => (dispatch) => {
    dispatch({
        type: FILTER_RECIPES_BY_DIET,
        payload
    })
}



export const orderRecipesByScore = (payload) => (dispatch) => {
    dispatch({
        type: ORDER_RECIPES_BY_SCORE,
        payload
    })
}

export const orderRecipesByName = (payload) => (dispatch) => {
    dispatch({
        type: ORDER_RECIPES_BY_NAME,
        payload
    })
}


export const changePage = (payload) => (dispatch) => {
    dispatch({
        type: CHANGE_PAGE,
        payload
    })
}








export const getRecipe = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/recipes/${id}`)
                dispatch({
                    type: GET_RECIPE,
                    payload: response.data
                })
        } catch (error) {
            console.log(error)
        }
    }
}





//////////////// EXTRA ///////////////

/* export const deleteRecipe = (id) => async (dispatch) => {
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
} */









