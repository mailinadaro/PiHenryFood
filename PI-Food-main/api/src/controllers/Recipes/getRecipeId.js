const {Recipe, Diet} = require('../../db.js');
const axios = require('axios');
const {API_KEY} = process.env;



const getRecipeById = async function(id) {
    try {
        if(id.toString().length < 8){
            const recipeByIdAPI = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=true`);
            const recipeByIdAPI2 = recipeByIdAPI.data 
      
            const idAPI = {
              id: recipeByIdAPI2.id,
              healthy: recipeByIdAPI2.veryHealthy,
              ecocnomic: recipeByIdAPI2.cheap,
              popular : recipeByIdAPI2.veryPopular,
              likes : recipeByIdAPI2.aggregateLikes,
              name: recipeByIdAPI2.title,
              healthScore: recipeByIdAPI2.healthScore,
              ingredients : recipeByIdAPI2.extendedIngredients.map((e)=>e.image),
              image: recipeByIdAPI2.image,
              cookTime : recipeByIdAPI2.readyInMinutes,
              summary: recipeByIdAPI2.summary, 
              diets: recipeByIdAPI2.diets.map((element) => (element)),
              steps : recipeByIdAPI2.analyzedInstructions[0]?.steps, 
              nutrients : recipeByIdAPI2.nutrition.nutrients,
              nutritionPercentages : recipeByIdAPI2.nutrition.caloricBreakdown,
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

module.exports = {getRecipeById}
