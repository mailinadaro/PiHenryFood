const {Recipe, Diet} = require('../db.js');
const axios = require('axios');
const {API_KEY} = process.env;
//const isUUID = require('is-uuid');



/* const getRecipeByIdAPI = async function (id) {
    try {
            const recipeByIdAPI = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
            const recipeByIdAPI2 = recipeByIdAPI.data 
      
            const idAPI = {
              id: recipeByIdAPI2.id,
              name: recipeByIdAPI2.title,
              summary: recipeByIdAPI2.summary,
              healthScore: recipeByIdAPI2.healthScore,
              steps : recipeByIdAPI2.analyzedInstructions[0]?.steps.map((e)=> e.step), 
              image: recipeByIdAPI2.image,
              diets: recipeByIdAPI2.diets.map((element) => ({name:element})),
            }
            return idAPI;
        }catch(error){
            console.log(error)
        }
    }




 const getRecipeByIdDB = async function(id){
   try {
    const recipe = await Recipe.findByPk(id, {
        include: {
            model: Diet,
            atributes: ["name"],
            through: {
                attributes: []
            }
        }
    })
     return recipe
   } catch (error) {
    console.log(error)
   }       
}
 */


const getRecipeById = async function(id) {
    try {
        if(id.toString().length < 8){
            const recipeByIdAPI = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
            const recipeByIdAPI2 = recipeByIdAPI.data 
      
            const idAPI = {
              id: recipeByIdAPI2.id,
              name: recipeByIdAPI2.title,
              summary: recipeByIdAPI2.summary,
              healthScore: recipeByIdAPI2.healthScore,
              steps : recipeByIdAPI2.analyzedInstructions[0]?.steps.map((e)=> e.step), 
              image: recipeByIdAPI2.image,
              diets: recipeByIdAPI2.diets.map((element) => ({name:element})),
            }
            return idAPI;
        } else {
            const recipe = await Recipe.findByPk(id, {
                include: {
                    model: Diet,
                    atributes: ["name"],
                    through: {
                        attributes: []
                    }
                }
            })
             return recipe
        }
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {/* getRecipeByIdAPI, getRecipeByIdDB */ getRecipeById}
