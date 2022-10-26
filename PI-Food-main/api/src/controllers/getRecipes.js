const {Recipe, Diet} = require('../db.js');
const axios = require('axios');
const {API_KEY} = process.env;



const getRecipesApi = async ()=> {
    try {
    //const recipesApi= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)
  const recipesApi = await axios.get('https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5')
    const recipesApi2 = recipesApi.data.results?.map((element)=>{ 
        return {
            id: element.id,
            name: element.title,
            summary: element.summary,
            healthScore: element.healthScore,
            steps : element.analyzedInstructions[0]?.steps.map((e)=> e.step), 
            image: element.image,
            diets: element.diets.map((element) => ({name:element})),
        }
    });
  
        return recipesApi2; 
    } catch (error) {
        console.log(error) 
    }
};


const getRecipesDb = async () => {
    try {
        const recipesDb = await Recipe.findAll({ 
            
            include: {                           
                model: Diet,            
                attributes: ['name'],             
                through: {attributes: []} 
            }
        });
        
        return recipesDb; 
    } catch (error) {
        console.log(error);  
    }
}



const getAllRecipes = async () => {
    const api_recipes = await getRecipesApi(); 
    const db_recipes = await getRecipesDb(); 
    const allrecipes = api_recipes.concat(db_recipes); 
    return allrecipes; 

}






module.exports = {getRecipesApi, getRecipesDb, getAllRecipes};